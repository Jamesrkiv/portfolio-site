"use client";

import { useMemo, useState } from "react";

type Props = { className?: string; };
type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

const txtClasses = `
	appearance-none leading-tight
	rounded w-full
	bg-[var(--fg)]/5
	py-2 px-3
	outline-1 outline-[var(--fg)]/10
	placeholder:text-[var(--fg)]/50
	placeholder:font-light
`;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ className = "" }: Props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState<null | "success" | "error">(null);

	const trimmed = useMemo(() => ({
		name: name.trim(),
		email: email.trim(),
		message: message.trim(),
	}), [name, email, message]);

	/* Ensures form inputs are valid */
	function validateForm(): FormErrors {
		const errs: FormErrors = {};

		if (!trimmed.name) errs.name = "Please enter your name";
		if (!trimmed.email) errs.email = "Please enter your email address";
		else if (!emailRegex.test(trimmed.email)) errs.email = "Please enter a valid email address";
		if (!trimmed.message) errs.message = "Please enter a message";

		return errs;
	}

	/* Code to execute when form submitted by user */
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus(null);

		const formErrors = validateForm();
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			return;
		}
		setErrors({});
		setIsSubmitting(true);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(trimmed),
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok) {
				if (data?.formErrors) setErrors(data.formErrors as FormErrors);
				setStatus("error");
				return;
			}

			setStatus("success");
			setName("");
			setEmail("");
			setMessage("");
		}
		catch { setStatus("error"); }
		finally { setIsSubmitting(false); }
	}

	return (
		<div className={className}>
			<form
				onSubmit={handleSubmit}
				noValidate
				className="flex flex-col md:flex-row gap-8 h-full px-8 pt-6 pb-8"
			>
				{/* Title */}
				<div className="md:flex-1">
					<p className="mb-1 text-2xl font-bold">{"Send Me a Message"}</p>
					<p className="font-light">{"I’ll respond as soon as I can."}</p>
				</div>
				<div className="md:flex-2 flex-col">
					{/* Name Field */}
					<div className="mb-4">
						<label className="block mb-1" htmlFor="name">{"Name"}</label>
						<input
							id="name"
							name="name"
							type="text"
							placeholder="Your name"
							className={txtClasses}
							value={name}
							onChange={(e) => setName(e.target.value)}
							onBlur={() => {
								if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
							}}
							required
							aria-invalid={!!errors.name}
							aria-describedby={errors.name ? "name-error" : undefined}
						/>
						{errors.name && (
							<p id="name-error" className="mt-1 text-sm font-light text-[rgb(var(--accent-grad-l))]">
								{errors.name}
							</p>
						)}
					</div>
					{/* Email Field */}
					<div className="mb-4">
						<label className="block mb-1" htmlFor="email">{"Email"}</label>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="you@example.com"
							className={txtClasses}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onBlur={() => {
								if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
							}}
							required
							aria-invalid={!!errors.email}
							aria-describedby={errors.email ? "email-error" : undefined}
						/>
						{errors.email && (
							<p id="email-error" className="mt-1 text-sm font-light text-[rgb(var(--accent-grad-l))]">
								{errors.email}
							</p>
						)}
					</div>
					{/* Message Field */}
					<div className="mb-6">
						<label className="block mb-1" htmlFor="message">{"Message"}</label>
						<textarea
							id="message"
							name="message"
							placeholder="What would you like to talk about?"
							rows={8}
							className={txtClasses}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							onBlur={() => {
								if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
							}}
							required
							aria-invalid={!!errors.message}
							aria-describedby={errors.message ? "message-error" : undefined}
						/>
						{errors.message && (
							<p id="message-error" className="mt-1 text-sm font-light text-[rgb(var(--accent-grad-l))]">
								{errors.message}
							</p>
						)}
					</div>
					{status === "success" && (
						<p className="mb-2 font-light text-green-600">
							Message sent!
						</p>
					)}
					{status === "error" && (
						<p className="mb-2 font-light text-[rgb(var(--accent-grad-l))]">
							Something went wrong. Please try again in a bit.
						</p>
					)}
					{/* Submit Button */}
					<div className="flex mb-10">
						<button
							type="submit"
							disabled={isSubmitting}
							className={`
								bg-[rgb(var(--accent-grad-l))] hover:opacity-80
								text-white rounded-full cursor-pointer
								py-2 px-6
								focus:outline-none
								disabled:opacity-60 disabled:cursor-not-allowed
							`}
						>{isSubmitting ? "Sending..." : "Submit"}</button>
					</div>
				</div>
			</form>
		</div>
	);
}