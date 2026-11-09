const HIGHLIGHTS = [
  {
    title: "Sin agroquímicos",
    description:
      "Manejamos la tierra con compost propio y control biológico de plagas. Nada de lo que llega a tu mesa lleva venenos.",
  },
  {
    title: "Cosecha de la semana",
    description:
      "Cortamos el día anterior al reparto, así las hojas llegan crocantes y los tomates con todo su aroma.",
  },
  {
    title: "Reparto en el barrio",
    description:
      "Armamos bolsones y los llevamos hasta tu puerta o a los puntos de retiro cercanos, una vez por semana.",
  },
];

export default function ContentSection() {
  return (
    <section id="contenido" className="bg-zinc-50 py-20 dark:bg-zinc-900 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
          Cómo trabajamos
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-4xl">
          Una huerta cuidada por manos del barrio
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          <p>
            Huerta Viva nació cuando un grupo de productores de la zona decidió
            compartir tierra, herramientas y conocimiento. Hoy cultivamos más de
            treinta variedades que cambian con las estaciones.
          </p>
          <p>
            Creemos que comer bien no debería ser un lujo: por eso trabajamos
            sin intermediarios y con precios justos para quienes cultivan y para
            quienes comen.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
