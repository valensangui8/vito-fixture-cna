"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { FocusEvent, KeyboardEvent, TouchEvent } from "react";

export type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
  className?: string;
};

const AUTOPLAY_MS = 4000;
const SWIPE_THRESHOLD = 50;

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export default function ImageCarousel({ images, className = "" }: ImageCarouselProps) {
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isMd = useMediaQuery("(min-width: 768px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const perView = isLg ? 3 : isMd ? 2 : 1;
  const total = images.length;
  const maxIndex = Math.max(0, total - perView);
  const pages = maxIndex + 1;

  const [rawIndex, setRawIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Si cambia el breakpoint o la cantidad de imágenes, el índice queda acotado.
  const index = Math.min(rawIndex, maxIndex);

  const goTo = useCallback(
    (i: number) => {
      if (i > maxIndex) setRawIndex(0);
      else if (i < 0) setRawIndex(maxIndex);
      else setRawIndex(i);
    },
    [maxIndex],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const paused = hovered || focused || reducedMotion;

  useEffect(() => {
    if (paused || pages <= 1) return;
    const id = window.setInterval(() => {
      setRawIndex((current) => {
        const clamped = Math.min(current, maxIndex);
        return clamped >= maxIndex ? 0 : clamped + 1;
      });
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, pages, maxIndex]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setHovered(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    const delta = touchDeltaX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setHovered(false);
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!containerRef.current?.contains(e.relatedTarget as Node | null)) {
      setFocused(false);
    }
  };

  if (total === 0) return null;

  const showControls = pages > 1;

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Galería de imágenes"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={handleBlur}
      className={`group relative rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 ${className}`}
    >
      <div
        className="overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          aria-live={paused ? "polite" : "off"}
        >
          {images.map((image, i) => {
            const visible = i >= index && i < index + perView;
            return (
              <div
                key={`${image.src}-${i}`}
                className="flex-none px-2"
                style={{ width: `${100 / perView}%` }}
                role="group"
                aria-roledescription="diapositiva"
                aria-label={`${i + 1} de ${total}`}
                aria-hidden={!visible}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showControls && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-md transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-md transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="mt-4 flex justify-center gap-2" role="group" aria-label="Posición del carrusel">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a la posición ${i + 1} de ${pages}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 ${
                  i === index ? "w-6 bg-neutral-900" : "w-2.5 bg-neutral-300 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
