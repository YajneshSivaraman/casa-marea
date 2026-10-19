/* Motion adds a subtle entrance animation as the section enters view. */
import { motion } from "motion/react";

/* Lucide provides a clean arrow icon without using emoji. */
import { ArrowUpRight } from "lucide-react";

/* Reservation call-to-action for the CASA MAREA restaurant demo. */
export default function Reservations() {
  return (
    <section
      id="reservations"
      className="relative isolate overflow-hidden bg-[#dce0c8] px-6 py-24 text-[#11140f] sm:px-10 sm:py-32 lg:px-16 lg:py-36"
    >
      {/* Keep the content centered and aligned with the other sections. */}
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          {/* Main reservation headline and supporting copy. */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#596044]" />
              <p className="text-[10px] tracking-[0.3em] text-[#596044]">
                YOUR TABLE AWAITS
              </p>
            </div>

            <h2 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
              Make room for
              <br />
              <span className="italic text-[#596044]">something good.</span>
            </h2>

            <p className="mt-8 max-w-lg text-sm leading-7 text-[#11140f]/65 sm:text-base">
              An evening of thoughtful food, good company, and moments worth
              lingering over. We would love to have you at our table.
            </p>
          </div>

          {/* Reservation action panel. */}
          <div className="border-t border-[#11140f]/25 pt-7 lg:justify-self-end lg:border-t-0 lg:border-l lg:pl-10">
            <p className="mb-3 text-[10px] tracking-[0.25em] text-[#596044]">
              PLAN YOUR VISIT
            </p>

            <p className="mb-7 max-w-sm font-serif text-2xl leading-snug sm:text-3xl">
              Good evenings begin with a reservation.
            </p>

            {/* Replace this demo link with the restaurant's booking or WhatsApp link later. */}
            <a
              href="mailto:reservations@casamarea.example?subject=Table%20Reservation"
              className="group inline-flex items-center gap-8 border border-[#11140f] px-6 py-4 text-[10px] tracking-[0.2em] transition-colors duration-300 hover:bg-[#11140f] hover:text-[#f3efe5]"
            >
              RESERVE A TABLE

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={17} strokeWidth={1.4} />
              </span>
            </a>

            <p className="mt-5 text-xs leading-6 text-[#11140f]/55">
              
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
