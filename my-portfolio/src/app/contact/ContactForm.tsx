type Props = {
	className?: string;
};

export default function ContactForm({ className = "" }: Props) {
	return (
		<div className={className}>
			<form className="flex flex-col md:flex-row gap-8 h-full px-8 pt-6 pb-8">
				{/* Title */}
				<div className="md:flex-1">
					<p className="mb-1 text-2xl font-bold">{"Send an Email"}</p>
					<p className="font-light">{"Blah blah blah, I'll reach out to you."}</p>
				</div>
				<div className="md:flex-2 flex-col">
					{/* Name Field */}
					<div className="mb-4">
						<label className="block mb-1" htmlFor="name">{"Name"}</label>
						<input
							id="name"
							type="text"
							placeholder="John Doe"
							className={`
								appearance-none leading-tight
								rounded w-full
								bg-[var(--fg)]/5
								py-2 px-3
								outline-1 outline-[var(--fg)]/10
								placeholder:text-[var(--fg)]/50
								placeholder:font-light
							`}
						/>
					</div>
					{/* Email Field */}
					<div className="mb-4">
						<label className="block mb-1" htmlFor="email">{"Email"}</label>
						<input
							id="email"
							type="text"
							placeholder="john@example.com"
							className={`
								appearance-none leading-tight
								rounded w-full
								bg-[var(--fg)]/5
								py-2 px-3
								outline-1 outline-[var(--fg)]/10
								placeholder:text-[var(--fg)]/50
								placeholder:font-light
							`}
						/>
					</div>
					{/* Message Field */}
					<div className="mb-6">
						<label className="block mb-1" htmlFor="message">{"Message"}</label>
						<textarea
							id="message"
							name="message"
							placeholder="Your message..."
							rows={8}
							className={`
								appearance-none leading-tight
								rounded w-full
								bg-[var(--fg)]/5
								px-3 py-1.5
								outline-1 outline-[var(--fg)]/10
								placeholder:text-[var(--fg)]/50
								placeholder:font-light
							`}
						/>
					</div>
					{/* Submit Button */}
					<div className="flex mb-10">
						<button
							type="button"
							className={`
								bg-[rgb(var(--accent-grad-l))] hover:opacity-80
								text-white rounded-full cursor-pointer
								py-2 px-6
								focus:outline-none
							`}
						>{"Submit"}</button>
					</div>
				</div>
			</form>
		</div>
	);
}