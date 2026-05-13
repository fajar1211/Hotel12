import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import room from "@/assets/room-deluxe.jpg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/rooms")({
  head: () => ({ meta: [
    { title: "Rooms — Kurraya Hills" },
    { name: "description", content: "Deluxe Twin & Single mountain-view rooms at Kurraya Hills Singkawang." },
    { property: "og:image", content: room },
  ]}),
  component: Rooms,
});

const ROOMS = [
  { name: "Deluxe Twin Bed", view: "Mountain View", desc: "Two plush single beds dressed in linen, framed by floor-to-ceiling glass that opens to the hills." },
  { name: "Deluxe Single Bed", view: "Mountain View", desc: "An intimate king-bed retreat with a private balcony and the same uninterrupted mountain panorama." },
];

const PRICES = [
  { label: "Weekday", price: "600", note: "Sun – Thu" },
  { label: "Weekend", price: "840", note: "Fri – Sat" },
  { label: "High Season", price: "1.200", note: "Holiday & Peak" },
];

function Rooms() {
  return (
    <>
      <PageHero image={room} eyebrow="Stay With Us" title="Mountain View Rooms" subtitle="Two carefully composed room types — both crowned with the same view that made us build here." />

      <section className="py-32 px-6 lg:px-20 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {ROOMS.map((r, i) => (
            <div key={i} className="group">
              <div className="relative h-[520px] overflow-hidden">
                <img src={room} alt={r.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" loading="lazy" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-ink/80 backdrop-blur text-[0.65rem] tracking-[0.3em] uppercase text-gold">{r.view}</div>
              </div>
              <div className="pt-8">
                <h3 className="serif text-4xl text-cream">{r.name}</h3>
                <p className="mt-4 text-cream/70 leading-relaxed">{r.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-y-2 text-sm text-cream/60">
                  {["King / Twin","Mountain View","Private Balcony","Marble Bath","Premium Linen","Welcome Tea"].map(a => (
                    <li key={a} className="flex items-center gap-2"><Check size={14} className="text-gold"/>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
              <div key={i} className={`p-10 text-center border ${i===2?'border-gold bg-gold/5':'border-gold/20'}`}>
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
