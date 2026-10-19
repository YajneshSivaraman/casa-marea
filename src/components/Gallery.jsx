
/* Motion adds smooth reveal and hover animations. */
import { motion } from "motion/react";

/* Lucide provides a small arrow icon for each image. */
import { ArrowUpRight } from "lucide-react";

/* Real restaurant photography for the CASA MAREA demo. */
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    alt: "Warmly lit restaurant interior",
    label: "THE SPACE",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
    alt: "Elegant restaurant table setting",
    label: "AT THE TABLE",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=85",
    alt: "Fresh ingredients prepared for a meal",
    label: "FRESH & SEASONAL",
  },
  {
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&q=85",
    alt: "Carefully plated restaurant dish",
    label: "FROM OUR KITCHEN",
  },
  {
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    alt: "A colourful dish made with fresh ingredients",
    label: "MADE TO BE SHARED",
  },
];

/* A reusable image card keeps all five photos consistent. */
function GalleryCard({ image, className = "", index }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative isolate min-h-0 overflow-hidden bg-[#24281f] ${className}`}
    >
      {/* Fill the entire card with its photograph. */}
      <motion.img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        whileHover={{ scale: 1.045 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 size-full object-cover"
      />

      {/* Darken the lower area so captions remain readable. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

      {/* Display the image label and a decorative arrow. */}
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
        <span className="text-[9px] tracking-[0.2em] text-white sm:text-[10px]">
          {image.label}
        </span>

        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-colors duration-300 group-hover:bg-[#dce0c8] group-hover:text-[#11140f]">
          <ArrowUpRight size={15} strokeWidth={1.3} />
        </span>
      </figcaption>
    </motion.figure>
  );
}

/* Render a rectangular gallery without any unfilled desktop grid cells. */
export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#11140f] px-6 py-24 text-[#f3efe5] sm:px-10 sm:py-32 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Introduce the gallery with the existing editorial typography. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-7 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b9c09a]" />
              <p className="text-[10px] tracking-[0.3em] text-[#b9c09a]">
                A CLOSER LOOK
              </p>
            </div>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
              Moments worth
              <br />
              <span className="italic text-[#b9c09a]">savouring.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/55">
            The warmth of the room, the beauty of the plate, and the little
            moments that turn dinner into a memory.
          </p>
        </motion.div>

        {/* Mobile: stacked photos. Tablet: two columns. Desktop: a fixed rectangle. */}
{/* Responsive gallery: stacked on mobile, balanced on tablet, full mosaic on desktop. */}
<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:h-[660px] lg:grid-cols-3 lg:grid-rows-1">

  {/* Left column: two equal images filling the full desktop height. */}
  <div className="grid min-h-0 grid-rows-2 gap-3 sm:col-span-1 lg:row-span-1">
    <GalleryCard
      image={galleryImages[0]}
      index={0}
      className="h-[240px] sm:h-[260px] lg:h-auto"
    />

    <GalleryCard
      image={galleryImages[1]}
      index={1}
      className="h-[240px] sm:h-[260px] lg:h-auto"
    />
  </div>

  {/* Middle column: two equal images filling the full desktop height. */}
  <div className="grid min-h-0 grid-rows-2 gap-3 lg:row-span-1">
    <GalleryCard
      image={galleryImages[2]}
      index={2}
      className="h-[240px] sm:h-[260px] lg:h-auto"
    />

    <GalleryCard
      image={galleryImages[3]}
      index={3}
      className="h-[240px] sm:h-[260px] lg:h-auto"
    />
  </div>

  {/* Right column: one tall image filling both desktop rows. */}
  <GalleryCard
    image={galleryImages[4]}
    index={4}
    className="h-[280px] sm:col-span-2 sm:h-[320px] lg:col-span-1 lg:row-span-1 lg:h-full"
  />

</div>

        {/* Finish with a quiet editorial line beneath the collage. */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 text-center font-serif text-xl italic text-white/45 sm:text-2xl"
        >
          Good food. Thoughtful company. Time well spent.
        </motion.p>
      </div>
    </section>
  );
}
