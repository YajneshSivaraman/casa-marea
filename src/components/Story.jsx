
// Motion adds subtle reveal animations as the story enters view.
import { motion } from "motion/react";

// Use real restaurant photography from Unsplash.
const storyImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85";

// Tell the story behind the CASA MAREA dining experience.
export default function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#11140f] px-6 py-24 text-[#f3efe5] sm:px-10 sm:py-32 lg:px-16 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-2 lg:gap-24">
        {/* Left side: editorial text and restaurant philosophy. */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          {/* Section label matches the site's muted olive accent. */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[#b9c09a]" />
            <p className="text-[10px] tracking-[0.3em] text-[#b9c09a]">
              OUR PHILOSOPHY
            </p>
          </div>

          {/* Large serif heading establishes the editorial style. */}
          <h2 className="max-w-xl font-serif text-5xl leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Made with care.
            <br />
            <span className="italic text-[#b9c09a]">
              Meant to be shared.
            </span>
          </h2>

          {/* Supporting copy introduces the restaurant's concept. */}
          <div className="mt-8 max-w-lg space-y-5 text-sm leading-7 text-[#f3efe5]/65">
            <p>
              At CASA MAREA, a meal is more than what arrives at the table.
              It is the time taken, the people gathered, and the small details
              that turn an ordinary evening into something memorable.
            </p>

            <p>
              Inspired by the warmth of Mediterranean dining, our kitchen
              celebrates seasonal ingredients, honest flavours, and the simple
              pleasure of staying for one more conversation.
            </p>
          </div>

          {/* Decorative signature detail. */}
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-white/20" />
            <span className="font-serif text-lg italic text-[#dce0c8]">
              A table worth lingering at.
            </span>
          </div>
        </motion.div>

        {/* Right side: atmospheric restaurant photography. */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="relative order-1 lg:order-2"
        >
          {/* Image frame creates a subtle magazine-style composition. */}
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
            <motion.img
              src={storyImage}
              alt="An elegantly arranged restaurant table ready for dinner"
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="size-full object-cover"
            />

            {/* Gentle shading adds depth to the image. */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          {/* Small caption beneath the photograph. */}
          <div className="mt-4 flex items-center justify-between text-[9px] tracking-[0.2em] text-white/45">
            <span>THE ART OF GATHERING</span>
            <span>01 — CASA MAREA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
