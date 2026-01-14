import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import heroImage from "../assets/homes/hero-home.png";

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-20
                      grid grid-cols-1 md:grid-cols-2 
                      gap-14 items-center">

        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <p className="text-emerald-400 text-sm mb-3">
            Trusted Construction Services
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Materials Supply & <br />
            <span className="text-emerald-400">Client Homes</span>
          </h1>

          <p className="text-slate-400 max-w-xl mx-auto md:mx-0 mb-8">
            We supply high-quality construction materials and also build
            modern homes with trust, quality, and on-time delivery.
          </p>

          <a
            href="#contact"
            className="inline-block bg-emerald-400 text-slate-900
                       px-6 py-3 rounded-full font-medium
                       hover:bg-emerald-300 transition"
          >
            Contact Us
          </a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={heroImage}
            alt="Modern Home"
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}

