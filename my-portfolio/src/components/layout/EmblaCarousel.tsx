"use client";

import React from 'react';
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
	return (
		<section className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((img, i) => (
						<div className="embla__slide bg-black/20 rounded-3xl mx-2" key={`i${i}`}>
							<div className="relative w-70 h-70 md:w-100 md:h-100 lg:w-120 lg:h-120">
								<Image
									src={img}
									fill={true}
									style={{objectFit:"cover"}}
									alt={`img${i}`}
									sizes="(max-width: 768px) 100vh"
									className="rounded-3xl border-1 border-[var(--bg2)]"
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
	);
}

export default EmblaCarousel;