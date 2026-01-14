import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";

import cement from "../assets/materials/cement.png";
import bricks from "../assets/materials/bricks.png";
import sand from "../assets/materials/sand.png";
import iron from "../assets/materials/iron-steel.png";

const materials = [
  { title: "Cement", img: cement },
  { title: "Bricks", img: bricks },
  { title: "Sand", img: sand },
  { title: "Iron & Steel", img: iron },
];

export default function Materials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
          Materials We Supply
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {materials.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-md
                         hover:shadow-xl hover:-translate-y-2
                         transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-52 sm:h-56 w-full object-cover rounded-t-2xl"
              />

              <div className="p-5 text-center font-semibold">
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
