import type { ReactNode } from "react";

const CONTACT_EMAIL = "hola@huertaviva.example";
const CONTACT_PHONE = "+54 11 5555-1234";
const CONTACT_PHONE_HREF = "+541155551234";
const CONTACT_ADDRESS = "Camino de la Huerta 1234, Buenos Aires";

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
};

const iconProps = {
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  className: "h-6 w-6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ITEMS: ContactItem[] = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Teléfono",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE_HREF}`,
    icon: (
      <svg {...iconProps}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
      </svg>
    ),
  },
  {
    label: "Dirección",
    value: CONTACT_ADDRESS,
    icon: (
      <svg {...iconProps}>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-zinc-50 py-20 dark:bg-zinc-900 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
          Contacto
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-4xl">
          Hablemos
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Escribinos o llamanos para sumarte al reparto semanal o visitar la
          huerta.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ITEMS.map((item) => (
            <li
              key={item.label}
              className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                {item.icon}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block break-words text-lg font-semibold text-zinc-950 transition-colors hover:text-emerald-700 dark:text-zinc-50 dark:hover:text-emerald-400"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    {item.value}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
