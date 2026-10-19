
// Motion adds subtle entrance animations to the hero.
import { motion } from "motion/react";

// Lucide provides the directional icons.
import { ArrowDown, ArrowUpRight } from "lucide-react";

// Use real restaurant photography from Unsplash.
const heroImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=90";

// Render the animated opening section for CASA MAREA.
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-end overflow-hidden bg-[#11140f] text-[#f3efe5]"
    >
      {/* Animate the background image with a gentle zoom-out effect. */}
      <motion.img
        src={heroImage}
        alt="Restaurant interior"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 size-full object-cover object-center"
      />

      {/* Dark overlay improves text contrast over the photograph. */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/20 to-[#11140f]" />

      {/* Animate the text independently from the background image. */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-[1800px] px-6 pb-24 pt-40 sm:px-10 lg:px-16"
      >
        <div className="max-w-5xl">
          {/* Small editorial label above the headline. */}
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[#b9c09a]" />
            <p className="text-[10px] tracking-[0.3em]">
              A SLOWER KIND OF EVENING
            </p>
          </div>

          {/* Oversized serif typography creates the main visual. */}
          <h1 className="font-serif text-[clamp(4rem,11.5vw,10.5rem)] leading-[0.84] tracking-[-0.065em]">
            A taste of
            <br />
            <span className="pl-[0.25em] italic text-[#dce0c8] sm:pl-[0.45em]">
              somewhere
            </span>
            <br />
            else.
          </h1>

          {/* Description and menu navigation. */}
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-sm text-sm leading-7 text-white/80">
              Mediterranean flavours, thoughtful ingredients, and evenings
              made for staying a little longer.
            </p>

            <a
              href="#menu"
              className="group flex w-fit items-center gap-5 border-b border-white/50 pb-3 text-[10px] tracking-[0.2em] transition-colors duration-300 hover:border-[#b9c09a] hover:text-[#b9c09a]"
            >
              DISCOVER OUR TABLE

              <span className="flex size-9 items-center justify-center rounded-full border border-white/30 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={16} strokeWidth={1.4} />
              </span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom-right detail appears on wider screens. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-6 right-6 z-10 hidden items-center gap-3 text-white/65 sm:flex lg:right-16"
      >
        <span className="text-[9px] tracking-[0.25em]">
          GOOD FOOD. LONG EVENINGS.
        </span>

        <ArrowDown size={13} strokeWidth={1.3} />
      </motion.div>
    </section>
  );
}
