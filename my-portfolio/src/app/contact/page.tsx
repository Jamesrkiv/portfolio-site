import ContactForm from "./ContactForm";

export default function AboutPage() {
	return (
		<main className="flex min-h-[calc(100svh-16.72rem)] justify-center">
			<ContactForm className={`
				flex flex-col
				grow max-w-300 rounded-t-3xl
				md:mx-12 mx-6
				pt-4 md:pt-8 md:px-6
				bg-gradient-to-b
				from-[var(--section-bg)] to-transparent
				from-85%
			`}/>
		</main>
	);
}