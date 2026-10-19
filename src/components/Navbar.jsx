
// React state controls the mobile navigation menu.
import { useState } from "react";

// Motion animates the navbar and its entrance.
import { motion } from "motion/react";

// Lucide provides navigation icons.
import { ArrowUpRight, Menu, X } from "lucide-react";

// Keep navigation destinations in one place.
const navLinks = [
  { label: "OUR STORY", href: "#story" },
  { label: "THE MENU", href: "#menu" },
  { label: "THE SPACE", href: "#space" },
];

// Render the animated CASA MAREA navbar.
export default function Navbar() {
  // Track whether the mobile menu is open.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      // Slide down and fade in when the page first loads.
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-[9999] w-full bg-[#11140f]/90 text-[#f3efe5] shadow-lg backdrop-blur-md"
    >
      <nav className="mx-auto flex min-h-20 w-full max-w-[1800px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        {/* Brand wordmark with a subtle hover fade. */}
        <motion.a
          href="#home"
          aria-label="Casa Marea home"
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 flex shrink-0 flex-col leading-none"
        >
          <span className="font-serif text-2xl tracking-[0.12em] sm:text-3xl">
            CASA MAREA
          </span>
          <span className="mt-2 text-[8px] tracking-[0.32em] text-[#f3efe5]/70">
            A MEDITERRANEAN TABLE
          </span>
        </motion.a>

        {/* Desktop navigation links. */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              // Reveal each link with a slight stagger.
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2 + index * 0.1,
              }}
              className="group relative whitespace-nowrap py-2 text-[10px] tracking-[0.2em] text-[#f3efe5]/80 transition-colors duration-300 hover:text-[#b9c09a]"
            >
              {link.label}

              {/* Underline grows from left to right on hover. */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#b9c09a] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}

          {/* Animated reservation button. */}
          <motion.a
            href="#reservations"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex shrink-0 items-center gap-3 border border-[#f3efe5]/40 px-5 py-3 text-[10px] tracking-[0.16em] transition-colors duration-300 hover:border-[#b9c09a] hover:bg-[#b9c09a] hover:text-[#11140f]"
          >
            RESERVE A TABLE
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>

        {/* Mobile menu toggle. */}
        <motion.button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          whileTap={{ scale: 0.92 }}
          className="flex size-11 shrink-0 items-center justify-center border border-[#f3efe5]/40 text-[#f3efe5] lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </motion.button>
      </nav>

      {/* Animate the mobile menu panel when it opens or closes. */}
      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden border-t border-white/10 bg-[#11140f] lg:hidden"
        inert={!menuOpen}
      >
        <div className="px-6 py-3 sm:px-10">
          {[...navLinks, { label: "RESERVE A TABLE", href: "#reservations" }].map(
            (link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={false}
                animate={{
                  opacity: menuOpen ? 1 : 0,
                  x: menuOpen ? 0 : -10,
                }}
                transition={{ duration: 0.2, delay: menuOpen ? index * 0.05 : 0 }}
                className="block border-b border-white/10 py-5 text-[11px] tracking-[0.2em] text-[#f3efe5]/90 last:border-b-0 hover:text-[#b9c09a]"
              >
                {link.label}
              </motion.a>
            ),
          )}
        </div>
      </motion.div>
    </motion.header>
  );
}
