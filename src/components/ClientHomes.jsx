import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";

import home1 from "../assets/homes/home1.png";
import home2 from "../assets/homes/home2.png";
import home3 from "../assets/homes/home3.png";

const homes = [
  {
    title: "Modern Luxury Home",
    desc: "Premium residential construction",
    img: home1,
  },
  {
    title: "Urban Family Villa",
    desc: "Elegant and durable design",
    img: home2,
  },
  {
    title: "Contemporary Duplex",
    desc: "Built with quality materials",
    img: home3,
  },
];

export default function ClientHomes() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
          Homes Built for <span className="text-emerald-400">Our Clients</span>
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {homes.map((home, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-2xl
                         overflow-hidden hover:-translate-y-2 transition"
            >
              <img
                src={home.img}
                alt={home.title}
                className="h-52 sm:h-56 w-full object-cover
                           transition-transform duration-500
                           hover:scale-105"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold">{home.title}</h3>
                <p className="text-slate-400 mt-1 text-sm">
                  {home.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
