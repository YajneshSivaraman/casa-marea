// Motion animates the menu section as it enters the viewport.
import { motion } from "motion/react";

// Reusable menu data keeps dish details easy to update.

// Six fictional signature dishes for the CASA MAREA demo menu.
const menuItems = [
  {
    category: "TO BEGIN",
    name: "Burrata & Heirloom Tomato",
    description:
      "Creamy burrata, ripe tomatoes, basil oil and toasted sourdough.",
    price: "₹650",
    image:
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "SMALL PLATES",
    name: "Crispy Calamari",
    description:
      "Golden calamari, lemon aioli, fresh parsley and charred lemon.",
    price: "₹580",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "FROM THE SEA",
    name: "Lemon Butter Sea Bass",
    description:
      "Pan-seared fish, lemon butter, seasonal greens and fresh herbs.",
    price: "₹1,250",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "PASTA & GRAINS",
    name: "Wild Mushroom Risotto",
    description: "Creamy Arborio rice, roasted mushrooms, parmesan and thyme.",
    price: "₹850",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "FROM THE GRILL",
    name: "Rosemary Lamb Chops",
    description: "Herb-crusted lamb, roasted baby potatoes and a red wine jus.",
    price: "₹1,450",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "SOMETHING SWEET",
    name: "Classic Tiramisu",
    description: "Espresso-soaked layers, mascarpone cream and fine cocoa.",
    price: "₹450",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85",
  },
];

// Present a curated selection from the fictional restaurant menu.
export default function Menu() {
  return (
    <section
      id="menu"
      className="bg-[#171a14] px-6 pt-24 pb-12 text-[#f3efe5] sm:px-10 sm:pt-32 sm:pb-14 lg:px-16 lg:pt-40 lg:pb-16"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Menu introduction and section heading. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b9c09a]" />
              <p className="text-[10px] tracking-[0.3em] text-[#b9c09a]">
                FROM OUR KITCHEN
              </p>
            </div>

            <h2 className="font-serif text-5xl leading-none tracking-[-0.045em] sm:text-7xl lg:text-8xl">
              A little taste
              <br />
              <span className="italic text-[#b9c09a]">of the coast.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/60">
            Thoughtful ingredients, Mediterranean inspiration, and plates made
            to be enjoyed slowly, together.
          </p>
        </motion.div>

        {/* Responsive grid of featured dishes. */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {menuItems.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="group"
            >
              {/* Image gently zooms on hover. */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#24281f]">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="size-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Dish category, title, description and price. */}

              {/* Dish category, title, description and price. */}
              <div className="flex flex-col pt-6">
                {/* Keep category labels in a consistent area. */}
                <p className="mb-3 min-h-[14px] text-[9px] tracking-[0.25em] text-[#b9c09a]">
                  {item.category}
                </p>

                {/* Reserve two lines for every dish title. */}
                <div className="flex h-[4.5rem] items-start justify-between gap-4">
                  <h3 className="line-clamp-2 max-w-[75%] font-serif text-2xl leading-tight sm:text-3xl">
                    {item.name}
                  </h3>

                  <span className="shrink-0 pt-1 text-sm text-[#dce0c8]">
                    {item.price}
                  </span>
                </div>

                {/* Reserve three lines for every description. */}
                <p className="mt-4 h-[4.5rem] overflow-hidden text-sm leading-6 text-white/55">
                  {item.description}
                </p>

                {/* Align the divider across every card. */}
                <div className="mt-6 h-px w-full bg-white/15 transition-colors duration-300 group-hover:bg-[#b9c09a]/60" />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="#reservations"
            className="group inline-flex items-center gap-4 border border-[#b9c09a]/60 bg-[#b9c09a] px-7 py-4 text-[10px] tracking-[0.18em] text-[#11140f] transition-all duration-300 hover:border-[#dce0c8] hover:bg-[#dce0c8]"
          >
            JOIN US AT THE TABLE
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
