import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros — Huerta Viva",
};

export default function NosotrosPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Nosotros
      </h1>
      <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Somos una cooperativa de productores de la zona que cultiva verduras de
        estación sin agroquímicos y las reparte una vez por semana.
      </p>
    </main>
  );
}
