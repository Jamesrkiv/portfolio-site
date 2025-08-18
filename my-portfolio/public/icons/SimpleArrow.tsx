type Props = {
	w?: number,
	h?: number,
	stroke?: string,
	weight?: number
};

const SimpleArrow = ({ w = 4, h = 4, stroke = "currentColor", weight = 2 }: Props) => (
	<svg
	xmlns="http://www.w3.org/2000/svg"
	className={`w-${w} h-${h}`}
	fill="none"
	viewBox="0 0 24 24"
	stroke={stroke}
	strokeWidth={weight}
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
	</svg>
);

export default SimpleArrow;