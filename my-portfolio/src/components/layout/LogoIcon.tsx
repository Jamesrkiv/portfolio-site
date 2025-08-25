import Image from "next/image";

type Props = {
	src: string,
	size: number,
	alt?: string,
	title?: string,
	glow?: boolean
}

export default function LogoIcon({ src, size, alt = "", title = "", glow = false }: Props) {
	return (
		<div className={`section-bg rounded-2xl w-${size} h-${size} p-1 shadow-md`}>
			<Image
				src={src}
				height={60} width={60}
				alt={alt}
				className="select-none"
				style={glow ? {"filter": "drop-shadow(0 0 2px rgb(255, 255, 255, 0.3))"} : undefined}
				title={title}
			/>
		</div>
	);
}