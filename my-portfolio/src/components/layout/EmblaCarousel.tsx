"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

type PropType = {
	slides: { src: string, name: string, desc: string }[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, slides.length);

	const [activeImage, setActiveImage] = useState<{ src: string, name: string } | null>(null);
	useEffect(() => {
		if (activeImage) {
			document.body.style.overflow = "hidden";
		}
		else {
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
									className={`
										rounded-3xl cursor-pointer
										${i === selectedIndex ? 
											'border-3 border-[rgb(var(--accent-grad-l))] hover:opacity-90' : 
											'border-1 border-[var(--bg2)] opacity-50 hover:opacity-40'
										}
									`}
									onClick={() => setActiveImage(img)}
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
						className={'embla__dot'.concat(i === selectedIndex ? ' embla__dot--selected' : '')}
					/>
				))}
			</div>
			{/* Image Description */}
			{ slides[selectedIndex].name &&
				<div className="flex px-6 md:px-20">
					<div className="relative flex-col mt-2 mx-auto bg-[rgb(var(--accent-grad-l))] py-2 px-4 rounded-xl overflow-hidden">
						{/* Description Text */}
						<div className="relative z-20 text-white">
							<p className="flex justify-center font-bold">
								{slides[selectedIndex].name}
							</p>
							<p className="flex justify-center font-light">
								{slides[selectedIndex]?.desc}
							</p>
						</div>
						{/* Background Image */}
						<Image
							src="/images/charlotte.jpg" alt="Desc Background Img"
							priority={true}
							height={1080} width={1920}
							className={`
								absolute inset-0 w-[100%] h-[100%] object-cover select-none
								mix-blend-luminosity opacity-30 blur-[2px] z-10
								mask-r-from-30% md:mask-r-from-60% mask-r-to-100%
							`}
						/>
					</div>
				</div>
			}
		</section>
		{/* Fullscreen Modal */}
		{activeImage &&
			<div
				className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-10"
				onClick={() => setActiveImage(null)}
			>
				<div className="relative w-[90vw] h-[90vh] max-w-6xl">
					<Image
						src={activeImage.src}
						alt="Expanded View" fill
						style={{objectFit: "contain"}}
						className="rounded-lg"
					/>
				</div>
			</div>
		}
	</>);
}

export default EmblaCarousel;