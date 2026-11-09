export type GalleryImage = {
  src: string;
  alt: string;
};

const img = (seed: string, alt: string): GalleryImage => ({
  src: `https://picsum.photos/seed/${seed}/800/600`,
  alt,
});

export const galleryImages: GalleryImage[] = [
  img("montana-amanecer", "Cadena de montañas al amanecer con neblina en los valles"),
  img("lago-sereno", "Lago sereno rodeado de árboles que refleja el cielo"),
  img("ciudad-noche", "Avenida de una ciudad iluminada al caer la noche"),
  img("rascacielos", "Rascacielos de vidrio vistos desde abajo contra el cielo"),
  img("bosque-niebla", "Sendero en un bosque cubierto de niebla matinal"),
  img("playa-atardecer", "Playa tranquila con el sol poniéndose sobre el mar"),
  img("calle-adoquines", "Calle antigua de adoquines con fachadas de colores"),
  img("flores-campo", "Campo de flores silvestres bajo un cielo despejado"),
  img("taza-cafe", "Taza de café humeante sobre una mesa de madera"),
  img("bicicleta-vintage", "Bicicleta vintage apoyada contra una pared de ladrillo"),
  img("libros-antiguos", "Pila de libros antiguos junto a una lámpara de escritorio"),
  img("puente-rio", "Puente de piedra sobre un río en medio de la ciudad"),
];
