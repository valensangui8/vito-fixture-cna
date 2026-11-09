/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const IMG = {
  hero: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixid=M3w5NzY0Njd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdmVnZXRhYmxlJTIwZ2FyZGVuJTIwZmFybSUyMGZpZWxkfGVufDF8MHx8fDE3OTQyMzQ3Nzd8MA&ixlib=rb-4.1.0&w=1200&q=80&auto=format&fit=crop",
  farm: "https://images.unsplash.com/photo-1573119798379-011dfedae008?ixid=M3w5NzY0Njd8MHwxfHNlYXJjaHwzfHxvcmdhbmljJTIwdmVnZXRhYmxlJTIwZ2FyZGVuJTIwZmFybSUyMGZpZWxkfGVufDF8MHx8fDE3OTQyMzQ3Nzd8MA&ixlib=rb-4.1.0&w=1200&q=80&auto=format&fit=crop",
  market:
    "https://images.unsplash.com/photo-1591586116988-62fe65164f8d?ixid=M3w5NzY0Njd8MHwxfHNlYXJjaHwyfHxmcmVzaCUyMHNlYXNvbmFsJTIwdmVnZXRhYmxlcyUyMGNyYXRlfGVufDF8MHx8fDE3OTQyMzQ3Nzh8MA&ixlib=rb-4.1.0&w=1200&q=80&auto=format&fit=crop",
  crate:
    "https://images.unsplash.com/photo-1632776350300-11016768b521?ixid=M3w5NzY0Njd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBib3glMjBkZWxpdmVyeXxlbnwxfDB8fHwxNzk0MjM0Nzc4fDA&ixlib=rb-4.1.0&w=1200&q=80&auto=format&fit=crop",
  table:
    "https://images.unsplash.com/photo-1605279682024-5a25531582dc?ixid=M3w5NzY0Njd8MHwxfHNlYXJjaHwzfHxmcmVzaCUyMHNlYXNvbmFsJTIwdmVnZXRhYmxlcyUyMGNyYXRlfGVufDF8MHx8fDE3OTQyMzQ3Nzh8MA&ixlib=rb-4.1.0&w=1200&q=80&auto=format&fit=crop",
  tomatoes:
    "https://images.unsplash.com/photo-1534940519139-f860fb3c6e38?ixid=M3w5NzY0Njd8MHwxfHNlYXJjaHwxfHx0b21hdG9lcyUyMGdyZWVuaG91c2V8ZW58MXwwfHx8MTc5NDIzNDc3OXww&ixlib=rb-4.1.0&w=1200&q=80&auto=format&fit=crop",
  garden:
    "https://images.unsplash.com/photo-1692039743847-be242d0e1fa4?ixid=M3w5NzY0Njd8MHwxfHNlYXJjaHwyfHx0b21hdG9lcyUyMGdyZWVuaG91c2V8ZW58MXwwfHx8MTc5NDIzNDc3OXww&ixlib=rb-4.1.0&w=1200&q=80&auto=format&fit=crop",
  roots:
    "https://images.unsplash.com/photo-1687199126330-556bb3c85b2f?ixid=M3w5NzY0Njd8MHwxfHNlYXJjaHwzfHxjYXJyb3RzJTIwYmVldHMlMjBtYXJrZXR8ZW58MXwwfHx8MTc5NDIzNDc3OXww&ixlib=rb-4.1.0&w=1200&q=80&auto=format&fit=crop",
};

const features = [
  {
    title: "Sin agroquímicos",
    text: "Controlamos plagas con asociación de cultivos, compost propio y mucha paciencia. Lo que llega a tu mesa no lleva nada que no quieras comer.",
  },
  {
    title: "Cosecha del día",
    text: "Cortamos a la mañana y repartimos esa misma semana. Hojas crujientes, raíces con tierra y sabor de verdad.",
  },
  {
    title: "Reparto en el barrio",
    text: "Un bolsón semanal a domicilio o en nuestro punto de retiro, con lo que la huerta dio en la estación.",
  },
];

const stats = [
  { value: "+12", label: "años cultivando" },
  { value: "60", label: "familias asociadas" },
  { value: "35", label: "variedades por año" },
];

const gallery = [
  { src: IMG.tomatoes, alt: "Tomates verdes y rojos madurando en la planta", caption: "Tomates de verano" },
  { src: IMG.crate, alt: "Cajones de madera con verduras variadas", caption: "El bolsón semanal" },
  { src: IMG.garden, alt: "Tomates creciendo en la huerta", caption: "Camas de cultivo" },
  { src: IMG.roots, alt: "Zanahorias y rabanitos sobre una mesa", caption: "Raíces recién sacadas" },
  { src: IMG.market, alt: "Coliflor, brócoli, rabanitos y cebollas en un puesto", caption: "Feria de los sábados" },
  { src: IMG.farm, alt: "Surcos verdes de la huerta a pleno día", caption: "Surcos al sol" },
];

function Hero() {
  return (
    <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-emerald-950">
      <img
        src={IMG.hero}
        alt="Surcos de cultivo verdes en la huerta al atardecer"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-950/90 via-emerald-950/60 to-emerald-950/20" />
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <p className="mb-5 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-900">
          Cooperativa · Sin agroquímicos
        </p>
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">
          Verduras de estación, de la huerta a tu mesa
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50">
          Cultivamos sin agroquímicos y repartimos cada semana en el barrio.
          Pedí tu bolsón y probá cómo sabe lo recién cosechado.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contacto"
            className="rounded-full bg-emerald-400 px-7 py-3.5 text-base font-semibold text-emerald-950 transition-colors hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Pedí tu bolsón
          </a>
          <Link
            href="/servicios"
            className="rounded-full border border-white/60 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}

function Contenido() {
  return (
    <section className="bg-white py-20 text-zinc-900 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Quiénes somos
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Una huerta de vecinos para vecinos
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
              Huerta Viva es una cooperativa que cuida la tierra y a quienes la
              comen. Plantamos lo que toca en cada estación, sin atajos, y lo
              llevamos directo a tu puerta.
            </p>
            <Link
              href="/nosotros"
              className="mt-8 inline-block rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Conocenos
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <img
              src={IMG.table}
              alt="Verduras verdes y marrones sobre una mesa de madera"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-emerald-100 bg-emerald-50 p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-emerald-900">{f.title}</h3>
              <p className="mt-3 leading-7 text-zinc-700">{f.text}</p>
            </div>
          ))}
        </div>

        <dl className="mt-16 grid gap-8 border-t border-zinc-200 pt-12 text-center sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm uppercase tracking-widest text-zinc-500">
                {s.label}
              </dt>
              <dd className="text-5xl font-bold tracking-tight text-emerald-700">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section className="bg-zinc-50 py-20 text-zinc-900 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Galería
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
          Así se ve una semana en la huerta
        </h2>
        <p className="mt-4 max-w-xl text-lg text-zinc-600">
          Del surco al cajón: un recorrido por lo que cultivamos y repartimos.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <figure
              key={g.caption}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-medium text-zinc-700">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section
      id="contacto"
      className="bg-gradient-to-br from-emerald-800 to-emerald-950 py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
          Contacto
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          Empezá a recibir verduras de verdad
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-emerald-100">
          Escribinos y te contamos qué hay esta semana, cuánto cuesta el bolsón
          y cómo coordinar el reparto en tu zona.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hola@huertaviva.example?subject=Quiero%20mi%20bols%C3%B3n"
            className="rounded-full bg-emerald-300 px-7 py-3.5 text-base font-semibold text-emerald-950 transition-colors hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Escribinos por mail
          </a>
          <Link
            href="/servicios"
            className="rounded-full border border-white/60 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Ver servicios
          </Link>
        </div>
        <p className="mt-8 text-sm text-emerald-200">
          hola@huertaviva.example · Reparto martes y viernes
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Contenido />
      <Galeria />
      <Contacto />
    </main>
  );
}
