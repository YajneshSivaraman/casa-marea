
// Motion animates the experience section as it enters the viewport.
import { motion } from "motion/react";

// Use a real restaurant interior photograph from Unsplash.
const experienceImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=85";

// Present the atmosphere and dining philosophy of CASA MAREA.
export default function Experience() {
  return (
    <section
      id="space"
      className="relative isolate overflow-hidden bg-[#11140f] text-[#f3efe5]"
    >
      {/* Wide photographic backdrop establishes the mood. */}
      <div className="relative min-h-[650px]">
        <motion.img
          src={experienceImage}
          alt="An intimate restaurant interior prepared for an evening meal"
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 size-full object-cover object-center"
        />

        {/* Layered shading keeps the text legible over the image. */}
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#11140f]/90 via-[#11140f]/45 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#11140f] via-transparent to-black/20" />

        {/* Editorial content sits above the photograph. */}
        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1500px] items-center px-6 py-24 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Small section label. */}
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b9c09a]" />
              <p className="text-[10px] tracking-[0.3em] text-[#dce0c8]">
                MORE THAN A MEAL
              </p>
            </div>

            {/* Large headline creates a cinematic editorial moment. */}
            <h2 className="font-serif text-5xl leading-[1.02] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
              Come for the food.
              <br />
              <span className="italic text-[#dce0c8]">
                Stay for the feeling.
              </span>
            </h2>

            {/* Supporting description. */}
            <p className="mt-8 max-w-md text-sm leading-7 text-white/75">
              Soft light, considered details, and a table that invites you
              to slow down. At CASA MAREA, every evening has room to unfold.
            </p>

            {/* Link guides visitors toward the reservation section. */}
            <a
              href="#reservations"
              className="group mt-10 inline-flex items-center gap-5 border-b border-white/50 pb-3 text-[10px] tracking-[0.2em] transition-colors duration-300 hover:border-[#b9c09a] hover:text-[#b9c09a]"
            >
              MAKE AN EVENING OF IT
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* Small caption anchors the image visually. */}
        <div className="absolute bottom-7 right-6 z-10 hidden text-[9px] tracking-[0.25em] text-white/60 sm:block lg:right-16">
          AN ATMOSPHERE OF ITS OWN
        </div>
      </div>
    </section>
  );
}
