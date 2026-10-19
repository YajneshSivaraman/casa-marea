// Import Motion for the footer entrance animation.
import { motion } from "motion/react";

// Import icons that are available in Lucide React.
import { ArrowUp, ArrowUpRight } from "lucide-react";



// Render the CASA MAREA footer.
export default function Footer() {
  // Automatically update the copyright year.
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#11140f] px-6 pb-8 pt-16 text-[#f3efe5] sm:px-10 sm:pt-20 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Brand, navigation, and contact information. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr]"
        >
          {/* Restaurant brand and description. */}
          <div>
            <a
              href="#home"
              className="inline-block font-serif text-4xl tracking-[0.08em] sm:text-5xl"
            >
              CASA MAREA
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
              A little Mediterranean soul, a table full of stories, and time
              well spent together.
            </p>
          </div>

          {/* Links to the main website sections. */}
          <div>
            <p className="mb-6 text-[10px] tracking-[0.25em] text-[#b9c09a]">
              EXPLORE
            </p>

            <nav className="flex flex-col items-start gap-4 text-sm text-white/65">
              <a href="#story" className="transition-colors hover:text-white">
                Our Story
              </a>

              <a href="#menu" className="transition-colors hover:text-white">
                The Menu
              </a>

              <a href="#space" className="transition-colors hover:text-white">
                The Space
              </a>

              <a href="#gallery" className="transition-colors hover:text-white">
                Gallery
              </a>

              <a
                href="#reservations"
                className="transition-colors hover:text-white"
              >
                Reservations
              </a>
            </nav>
          </div>

          {/* Contact information and social media. */}
          <div>
            <p className="mb-6 text-[10px] tracking-[0.25em] text-[#b9c09a]">
              COME FIND US
            </p>

            <p className="max-w-xs text-sm leading-7 text-white/65">
              A Mediterranean-inspired gathering place.
              <br />
              Your city, your neighbourhood.
            </p>

            {/* Placeholder link; replace it with the restaurant's actual profile. */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-[#b9c09a]"
            >
              
              Follow our journey
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>

        {/* Copyright and back-to-top navigation. */}
        <div className="flex flex-col gap-4 pt-6 text-[10px] tracking-[0.12em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} CASA MAREA. ALL RIGHTS RESERVED.
          </p>

          <a
            href="#home"
            className="transition-colors hover:text-[#b9c09a]"
          >
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
}