import ImageCarousel from "@/components/image-carousel";
import { galleryImages } from "@/lib/gallery-images";

export default function GallerySection() {
  return (
    <section id="galeria" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
          Galería
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-4xl">
          Un recorrido por nuestro entorno
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Paisajes, rincones y momentos que nos inspiran. Deslizá o usá las
          flechas para recorrer las imágenes.
        </p>
        <div className="mt-12">
          <ImageCarousel images={galleryImages} />
        </div>
      </div>
    </section>
  );
}
