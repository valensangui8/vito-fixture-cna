import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios — Huerta Viva",
};

const servicios = [
  {
    nombre: "Bolsón semanal",
    detalle: "Seis kilos de verduras de estación, con entrega a domicilio.",
  },
  {
    nombre: "Talleres de huerta",
    detalle: "Encuentros los sábados para aprender a cultivar en casa.",
  },
  {
    nombre: "Venta a comercios",
    detalle: "Abastecemos a almacenes y restaurantes del barrio.",
  },
];

export default function ServiciosPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Servicios
      </h1>
      <ul className="mt-8 grid gap-6 sm:grid-cols-3">
        {servicios.map((servicio) => (
          <li
            key={servicio.nombre}
            className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800"
          >
            <h2 className="font-medium text-zinc-950 dark:text-zinc-50">{servicio.nombre}</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {servicio.detalle}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
