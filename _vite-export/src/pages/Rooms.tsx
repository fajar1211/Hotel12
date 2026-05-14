import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import twin from "@/assets/room-twin.jpg";
import single from "@/assets/room-single.jpg";
import interior from "@/assets/room-interior.jpg";
import bath from "@/assets/room-bath.jpg";
import { Check } from "lucide-react";

const ROOMS = [
  { img: single, name: "Deluxe Single Bed", view: "Mountain View", desc: "An intimate king-bed retreat with a private balcony and an uninterrupted mountain panorama." },
  { img: twin, name: "Deluxe Twin Bed", view: "Garden View", desc: "Two plush single beds dressed in linen, framed by floor-to-ceiling glass that opens to the gardens." },
];

const GALLERY = [single, twin, interior, bath, single, interior, bath, twin];

const PRICES = [
  { label: "Weekday", price: "600", note: "Sun – Thu" },
  { label: "Weekend", price: "840", note: "Fri – Sat" },
  { label: "High Season", price: "1.200", note: "Holiday & Peak" },
];

export default function Rooms() {
  return (
    <>
      <PageHero image={interior} eyebrow="Stay With Us" title="Mountain View Rooms" subtitle="Two carefully composed room types — both crowned with the same view that made us build here." />

      <section className="py-32 px-6 lg:px-20 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {ROOMS.map((r) => (
            <div key={r.name} className="group">
              <div className="relative h-[520px] overflow-hidden">
                <img src={r.img} alt={r.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" loading="lazy" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-ink/80 backdrop-blur text-[0.65rem] tracking-[0.3em] uppercase text-gold">{r.view}</div>
              </div>
              <div className="pt-8">
                <h3 className="serif text-4xl text-cream">{r.name}</h3>
                <p className="mt-4 text-cream/70 leading-relaxed">{r.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-y-2 text-sm text-cream/60">
                  {["King / Twin", "Mountain View", "Private Balcony", "Marble Bath", "Premium Linen", "Welcome Tea"].map(a => (
                    <li key={a} className="flex items-center gap-2"><Check size={14} className="text-gold" />{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-32">
        <div className="px-6 lg:px-20 max-w-[1600px] mx-auto mb-10 flex items-end justify-between">
          <div>
            <div className="text-xs tracking-[0.5em] uppercase text-gold mb-4">— Inside The Rooms</div>
            <h2 className="serif text-4xl md:text-5xl text-cream">A closer look</h2>
          </div>
          <div className="hidden md:block text-xs tracking-[0.3em] uppercase text-cream/40">← scroll →</div>
        </div>
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory">
          <div className="flex gap-6 px-6 lg:px-20 pb-6">
            {GALLERY.map((g, i) => (
              <figure key={i} className="snap-start shrink-0 w-[80vw] md:w-[55vw] lg:w-[40vw] h-[60vh] relative overflow-hidden group">
                <img src={g} alt={`Room detail ${i + 1}`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" loading="lazy" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                  <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold">0{i + 1} / 0{GALLERY.length}</div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 pb-32">
        <div className="max-w-[1400px] mx-auto bg-ink border border-gold/20 p-12 lg:p-20">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.5em] uppercase text-gold mb-4">— Tariffs</div>
            <h2 className="serif text-5xl text-cream">Per night, per room</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICES.map((p, i) => (
              <div key={i} className={`p-10 text-center border ${i === 2 ? "border-gold bg-gold/5" : "border-gold/20"}`}>
                <div className="text-xs tracking-[0.4em] uppercase text-gold mb-4">{p.label}</div>
                <div className="serif text-6xl gradient-gold-text">{p.price}<span className="text-2xl text-cream/60">K</span></div>
                <div className="text-xs tracking-[0.3em] uppercase text-cream/50 mt-4">{p.note}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-block px-10 py-4 bg-gold text-ink text-xs tracking-[0.3em] uppercase hover:bg-cream transition">Reserve A Room</Link>
          </div>
        </div>
      </section>
    </>
  );
}
