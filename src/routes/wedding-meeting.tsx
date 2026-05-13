import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import wedding from "@/assets/wedding.jpg";
import meeting from "@/assets/meeting.jpg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/wedding-meeting")({
  head: () => ({ meta: [
    { title: "Weddings & Meetings — Kurraya Hills" },
    { name: "description", content: "Dream weddings and executive meeting packages on a Singkawang hilltop." },
    { property: "og:image", content: wedding },
  ]}),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero image={wedding} eyebrow="Celebrate · Convene" title="Wedding & Meeting" subtitle="Two distinct stages, one unforgettable address." />

      {/* Wedding */}
      <section className="grid lg:grid-cols-2 min-h-[700px]">
        <div className="relative">
          <img src={wedding} alt="Wedding" className="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
        </div>
        <div className="bg-ink p-12 lg:p-20 flex flex-col justify-center">
          <div className="text-xs tracking-[0.5em] uppercase text-gold mb-6">— Dream Wedding Package</div>
          <h2 className="serif text-5xl md:text-6xl text-cream">Once. Forever.</h2>
          <p className="mt-6 text-cream/70 leading-relaxed text-lg">An open-air aisle that climbs the hill, white florals at golden hour, and a reception under a sky brushed with stars. We tailor every wedding as a singular composition.</p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-y-3 text-sm text-cream/70">
            {["Cliffside ceremony","Floral arch & aisle","Catering by chef","MC & live music","Bridal suite","Photography liaison"].map(a => (
              <li key={a} className="flex items-center gap-2"><Check size={14} className="text-gold"/>{a}</li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-6">
            <div className="script text-5xl gradient-gold-text">Bespoke</div>
            <Link to="/contact" className="px-8 py-4 border border-gold text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-ink transition">Contact For Price</Link>
          </div>
        </div>
      </section>

      {/* Meeting */}
      <section className="px-6 lg:px-20 py-32 max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.5em] uppercase text-gold mb-4">— Meeting Packages</div>
          <h2 className="serif text-5xl md:text-6xl text-cream">Where decisions feel inevitable</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="relative min-h-[400px]">
            <img src={meeting} alt="Meeting" className="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
          </div>
          <div className="grid gap-6">
            {[
              { price: "120", label: "Half Day", inc: ["1× Coffee break","1× Lunch","Meeting Room"] },
              { price: "150", label: "Full Day", inc: ["2× Coffee break","1× Lunch","Meeting Room"] },
            ].map((m, i) => (
              <div key={i} className="border border-gold/20 p-8 hover:bg-gold/5 transition">
                <div className="flex items-baseline justify-between">
                  <div className="text-xs tracking-[0.4em] uppercase text-gold">{m.label}</div>
                  <div className="serif text-5xl gradient-gold-text">{m.price}K<span className="text-base text-cream/60">/pax</span></div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-cream/70">
                  {m.inc.map(x => <li key={x} className="flex items-center gap-2"><Check size={14} className="text-gold"/>{x}</li>)}
                </ul>
              </div>
            ))}
            <Link to="/contact" className="px-10 py-4 bg-gold text-ink text-xs tracking-[0.3em] uppercase text-center hover:bg-cream transition">Plan Your Meeting</Link>
          </div>
        </div>
      </section>
    </>
  );
}
