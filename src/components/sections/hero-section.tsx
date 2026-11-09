import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1624668430039-0175a0fbf006?ixid=M3w5NzY0Njd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBnYXJkZW4lMjBoYXJ2ZXN0fGVufDF8MHx8fDE3OTQyMzQ3MjV8MA&ixlib=rb-4.1.0&w=1200&q=80&auto=format&fit=crop";

const HERO_TITLE = "Verduras de estación, de la huerta a tu mesa";
const HERO_SUBTITLE =
  "Cultivamos sin agroquímicos y repartimos cada semana en el barrio. Sabor real, directo de quienes las cosechan.";

export default function HeroSection() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-zinc-950">
      <Image
        src={HERO_IMAGE}
        alt="Canasto de madera con tomates, cebollas y hierbas frescas recién cosechadas"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-50"
      />
      <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-center px-6 py-20 md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-emerald-300">
          Cooperativa Huerta Viva
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          {HERO_TITLE}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-200">
          {HERO_SUBTITLE}
        </p>
        <div className="mt-10">
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contactanos
          </a>
        </div>
      </div>
    </section>
  );
}
