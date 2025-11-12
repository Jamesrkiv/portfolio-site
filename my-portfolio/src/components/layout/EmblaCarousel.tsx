"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

type PropType = {
	slides: string[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

	const [activeImage, setActiveImage] = useState<string | null>(null);
	useEffect(() => {
		if (activeImage) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [activeImage]);

	return (<>
		<section className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((img, i) => (
						<div className="embla__slide bg-black/20 rounded-3xl mx-2" key={`i${i}`}>
							<div className="relative w-70 h-70 md:w-100 md:h-100 lg:w-120 lg:h-120">
								<Image
									src={img.src}
									fill={true}
									style={{objectFit:"cover", objectPosition: "top left"}}
									alt={img.name || `img${i}`}
									sizes="(max-width: 768px) 100vh"
									className="rounded-3xl border-1 border-[var(--bg2)] hover:opacity-90 cursor-pointer"
									onClick={() => setActiveImage(img.src)}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="embla__dots">
				{scrollSnaps.map((_, i) => (
					<DotButton
						key={`d${i}`}
						onClick={() => onDotButtonClick(i)}
						className={'embla__dot'.concat(
							i === selectedIndex ? ' embla__dot--selected' : ''
						)}
					/>
				))}
			</div>
		</section>
		{/* Fullscreen Modal */}
		{activeImage && (
			<div
				className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
				onClick={() => setActiveImage(null)}
				style={{touchAction: "none"}}
			>
				<div className="relative w-[90vw] h-[90vh] max-w-6xl overflow-auto touch-auto">
					<Image
						src={activeImage}
						alt="Expanded View" fill
						style={{objectFit: "contain", touchAction: "pinch-zoom"}}
						className="rounded-lg"
					/>
				</div>
			</div>
		)}
	</>);
}

export default EmblaCarousel;