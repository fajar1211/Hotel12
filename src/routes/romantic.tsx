import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import dinner from "@/assets/romantic-dinner.jpg";
import room from "@/assets/honeymoon-setup.jpg";

export const Route = createFileRoute("/romantic")({
  head: () => ({ meta: [
    { title: "Romantic Experience — Kurraya Hills" },
    { name: "description", content: "Honeymoon setup, romantic dinners, and anniversary packages at Kurraya Hills." },
    { property: "og:image", content: dinner },
  ]}),
  component: Romantic,
});

const PACKAGES = [
  { price: "350", title: "Bloom", desc: "A 3-course candlelit dinner for two with house wine pairing.", tags: ["Welcome bouquet","3 courses","Live acoustic"] },
  { price: "450", title: "Ember", desc: "A 4-course chef's tasting under string lights with sparkling toast.", tags: ["Welcome bouquet","4 courses","Sparkling toast","Photo moment"] },
  { price: "550", title: "Eternity", desc: "A private terrace dinner — chef's signature 5-course with full pairing.", tags: ["Private terrace","5 courses","Full pairing","Personal butler","Surprise gift"] },
];

function Romantic() {
  return (
    <>
      <PageHero image={dinner} eyebrow="For Two" title="Romantic Experience" subtitle="An evening composed slowly, like a vow." />

      {/* Honeymoon setup */}
      <section className="relative py-32 px-6 lg:px-20">
        <img src={room} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" loading="lazy"/>
        <div className="absolute inset-0 bg-ink/70"/>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-xs tracking-[0.5em] uppercase text-gold mb-6">Signature Setup</div>
          <h2 className="serif text-5xl md:text-6xl text-cream">Honeymoon · Anniversary · Wedding Room Setup</h2>
          <div className="script text-8xl gradient-gold-text my-8">Rp 250K<span className="text-3xl text-cream/70 ml-2">/nett</span></div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm text-cream/80">
            <div className="border border-gold/30 p-4">Inclusive room set up</div>
            <div className="border border-gold/30 p-4">Slice of cake</div>
            <div className="border border-gold/30 p-4">Exclusive room price</div>
          </div>
        </div>
      </section>

      {/* Dinner packages */}
      <section className="py-32 px-6 lg:px-20 max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.5em] uppercase text-gold mb-4">— Romantic Dinner</div>
          <h2 className="serif text-5xl md:text-6xl text-cream">Three ways to fall in love again</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((p, i) => (
            <div key={i} className={`p-10 border ${i===2?'border-gold bg-gold/5':'border-gold/20'} hover:bg-gold/5 transition`}>
              <div className="text-xs tracking-[0.4em] uppercase text-gold">{p.title}</div>
              <div className="serif text-7xl gradient-gold-text mt-4">{p.price}<span className="text-2xl text-cream/60">K</span></div>
              <p className="mt-4 text-cream/70 text-sm leading-relaxed">{p.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-cream/60">
                {p.tags.map(t => <li key={t}>· {t}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact" className="inline-block px-10 py-4 bg-gold text-ink text-xs tracking-[0.3em] uppercase hover:bg-cream transition">Reserve A Table</Link>
        </div>
      </section>
    </>
  );
}
