"use client";

import { useEffect } from "react";

export default function HeaderBehavior({ scrollThreshold = 15 }: { scrollThreshold?: number }) {
	// Control header behavior
	useEffect(() => {
		const header = document.querySelector('.header');
		if (!header) return;

		const onScroll = () => {
			if (window.scrollY > scrollThreshold) header.classList.add('header-bg', 'shadow-md');
			else header.classList.remove('header-bg', 'shadow-md');
		};

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	return null;
}