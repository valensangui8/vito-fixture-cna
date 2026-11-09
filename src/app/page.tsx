import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-6 px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Verduras de estación, de la huerta a tu mesa
      </h1>
      <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Cultivamos sin agroquímicos y repartimos cada semana en el barrio.
      </p>
      <div className="flex gap-4">
        <Link
          href="/servicios"
          className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950"
        >
          Ver servicios
        </Link>
        <Link
          href="/nosotros"
          className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          Conocenos
        </Link>
      </div>
    </main>
  );
}
