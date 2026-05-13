import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import restaurant from "@/assets/restaurant.jpg";
import pool from "@/assets/pool.jpg";
import dinner from "@/assets/romantic-dinner.jpg";

export const Route = createFileRoute("/restaurant")({
  head: () => ({ meta: [
    { title: "Restaurant & Facilities — Kurraya Hills" },
    { name: "description", content: "Signature menu, pool, and exclusive facilities at Kurraya Hills Singkawang." },
    { property: "og:image", content: restaurant },
  ]}),
  component: Page,
});

const MENU = {
  "Signatures": [
    { n: "Bumbu Hill Ayam Bakar", d: "Heritage spice marinated chicken, charcoal grilled, sambal matah", p: "85K" },
    { n: "Singkawang Choi Pan", d: "Steamed dumplings, garlic chili, fried shallots", p: "55K" },
    { n: "Ikan Bakar Kurraya", d: "Whole reef fish, banana leaf, lemongrass glaze", p: "165K" },
  ],
  "Hill Mains": [
    { n: "Wagyu Rice Bowl", d: "Seared wagyu, onsen egg, charred shallot oil", p: "145K" },
    { n: "Truffle Mie Goreng", d: "Hand-pulled noodles, black truffle, prawn", p: "120K" },
    { n: "Beef Rendang Royale", d: "12-hour braise, coconut, kaffir lime", p: "115K" },
  ],
  "Sweet & Pour": [
    { n: "Pandan Crème Brûlée", d: "Torched pandan custard, palm sugar tuile", p: "55K" },
    { n: "Hill Sunset", d: "Mocktail · passionfruit, lime, basil", p: "45K" },
    { n: "Kurraya Gold", d: "Cocktail · gin, jasmine, honey", p: "85K" },
  ],
};

function Page() {
  return (
    <>
      <PageHero image={restaurant} eyebrow="Restaurant & Facilities" title="A Table In The Clouds" subtitle="Heritage flavors, modern composition, ingredients shaped by the hills." />

      {/* Menu */}
      <section className="py-32 px-6 lg:px-20 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.5em] uppercase text-gold mb-4">— The Menu</div>
          <h2 className="serif text-5xl md:text-6xl text-cream">Tasting Kurraya</h2>
        </div>
        <div className="space-y-16">
          {Object.entries(MENU).map(([cat, items]) => (
            <div key={cat}>
              <div className="flex items-center gap-6 mb-8">
                <div className="script text-4xl gradient-gold-text">{cat}</div>
                <div className="flex-1 h-px bg-gold/30"/>
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {items.map(it => (
                  <div key={it.n} className="flex justify-between gap-6 border-b border-gold/10 pb-6">
                    <div>
                      <div className="serif text-2xl text-cream">{it.n}</div>
                      <div className="text-sm text-cream/60 mt-2">{it.d}</div>
                    </div>
                    <div className="serif text-2xl text-gold whitespace-nowrap">{it.p}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pool */}
      <section className="relative h-[80vh] overflow-hidden">
        <img src={pool} alt="Pool" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" loading="lazy"/>
        <div className="absolute inset-0 overlay-luxe"/>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <div className="text-xs tracking-[0.5em] uppercase text-gold mb-6">— Hill Pool</div>
          <h2 className="serif text-5xl md:text-7xl text-cream">Float above Singkawang</h2>
          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            <div className="border border-gold/40 bg-ink/40 backdrop-blur p-6 text-center">
              <div className="text-xs tracking-[0.4em] uppercase text-gold">Weekday</div>
              <div className="serif text-5xl gradient-gold-text mt-2">20K</div>
            </div>
            <div className="border border-gold bg-gold/10 backdrop-blur p-6 text-center">
              <div className="text-xs tracking-[0.4em] uppercase text-gold">Weekend</div>
              <div className="serif text-5xl gradient-gold-text mt-2">30K</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-32 px-6 lg:px-20 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.5em] uppercase text-gold mb-4">— Facilities</div>
          <h2 className="serif text-5xl text-cream">Everything within reach</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Hill Pool","Garden Lounge","Spa Cabanas","Kids Aqua Play","Sunset Terrace","Private Gazebo","Boutique Café","Hilltop Yoga"].map(f => (
            <div key={f} className="border border-gold/20 p-8 text-center hover:bg-gold/5 transition">
              <div className="serif text-xl text-cream">{f}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative h-[50vh] overflow-hidden">
        <img src={dinner} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
        <div className="absolute inset-0 bg-ink/70"/>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <h2 className="serif text-4xl md:text-6xl text-cream max-w-3xl">"It is not a meal. It is a memory you eat."</h2>
        </div>
      </section>
    </>
  );
}
