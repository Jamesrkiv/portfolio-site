import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
import { render } from "@react-email/render";

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

const resend = new Resend(process.env.RESEND_API_KEY);
const sender = process.env.FROM_EMAIL;
const destination = process.env.TO_EMAIL;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
	try {
		if (!sender || !destination) {
			return Response.json(
				{ error: "Server email config missing (FROM_EMAIL / TO_EMAIL)." },
				{ status: 500 }
			);
		}

		const body = await req.json().catch(() => null);
		const name = String(body?.name ?? "").trim();
		const email = String(body?.email ?? "").trim();
		const message = String(body?.message ?? "").trim();

		const formErrors: FormErrors = {};
		if (!name) formErrors.name = "Please enter your name";
		if (!email) formErrors.email = "Please enter your email address";
		if (email && !emailRegex.test(email)) formErrors.email = "Please enter a valid email address";
		if (!message) formErrors.message = "Please enter a message";

		if (Object.keys(formErrors).length > 0) {
			return Response.json({ formErrors }, { status: 400 });
		}

		const html = await render(<EmailTemplate name={name} email={email} message={message}/>);
		if (typeof html !== "string" || !html.length) {
			console.error("Rendered HTML is not a string:", html);
			return Response.json({ error: "Email render failed" }, { status: 500 });
		}

		const { error } = await resend.emails.send({
			from: sender,
			to: destination,
			replyTo: email,
			subject: `New contact form submission from ${name}`,
			html,
		});

		if (error) {
			console.error("Resend error:", error);
			return Response.json({ error: "Failed to send email" }, {status: 500});
		}
		return Response.json({ success: true });
	}
	catch(err) {
		console.error("Contact route error:", err);
		return Response.json({ error: "Unexpected server error" }, { status: 500 });
	}
}