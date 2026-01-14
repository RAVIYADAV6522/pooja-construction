export default function Stats() {
  return (
    <section className="bg-slate-900 text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        {[
          ["1200+", "Material Orders"],
          ["150+", "Homes Built"],
          ["95%", "Client Satisfaction"],
        ].map(([v, l]) => (
          <div key={l} className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-3xl font-bold text-emerald-400">{v}</h3>
            <p className="text-slate-400 mt-2">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
