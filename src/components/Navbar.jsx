import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="text-xl font-bold text-white">
          Pooja <span className="text-emerald-400">Construction</span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#materials" className="hover:text-white transition">Materials</a>
          <a href="#clients" className="hover:text-white transition">Client Homes</a>
          <a
            href="#contact"
            className="bg-emerald-400 text-slate-900 px-4 py-2 rounded-full font-medium hover:bg-emerald-300 transition"
          >
            Contact
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 gap-4 text-slate-300">
            <a onClick={() => setOpen(false)} href="#home">Home</a>
            <a onClick={() => setOpen(false)} href="#materials">Materials</a>
            <a onClick={() => setOpen(false)} href="#clients">Client Homes</a>
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="mt-2 bg-emerald-400 text-slate-900 px-4 py-2 rounded-full text-center font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
