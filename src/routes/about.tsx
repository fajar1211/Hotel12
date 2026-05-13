import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import sign from "@/assets/kurraya-sign.jpg";
import aerial from "@/assets/kurraya-aerial.jpg";
import pool from "@/assets/pool.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Kurraya Hills Singkawang" },
    { name: "description", content: "The story of Kurraya Hills, a mountain-view sanctuary in Singkawang." },
    { property: "og:image", content: sign },
  ]}),
  component: About,
});

function About() {
  return (
    <>
      <PageHero image={sign} eyebrow="Our Story" title="Where The Hills Speak" subtitle="A retreat born from the silence of Borneo's mountains and the warmth of West Kalimantan hospitality." />

      <section className="py-32 px-6 lg:px-20 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="script text-6xl gradient-gold-text mb-6">Kurraya</div>
          <p className="text-cream/80 text-xl leading-relaxed">
            Kurraya Hills was imagined as a quiet refuge — a place where Singkawang's emerald hills, Chinese-Dayak heritage, and modern indulgence meet under one elevated roof. Each space, each pour of light, each footstep is composed for one purpose: to slow you down.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="relative h-[600px]"><img src={aerial} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy"/></div>
        <div className="bg-ink p-12 lg:p-20 flex flex-col justify-center">
          <div className="text-xs tracking-[0.5em] uppercase text-gold mb-6">— The Land</div>
          <h2 className="serif text-4xl md:text-5xl text-cream">Perched above Singkawang</h2>
          <p className="mt-6 text-cream/70 leading-relaxed">Set on the gentle ridges overlooking the city of a thousand temples, Kurraya enjoys uninterrupted mountain views and cool, breeze-touched evenings — a rarity on the equator.</p>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="bg-ink p-12 lg:p-20 flex flex-col justify-center order-2 md:order-1">
          <div className="text-xs tracking-[0.5em] uppercase text-gold mb-6">— The Promise</div>
          <h2 className="serif text-4xl md:text-5xl text-cream">Quietly extraordinary</h2>
          <p className="mt-6 text-cream/70 leading-relaxed">From honeymoon to high-stakes board meeting, our service is invisible by design — only the moments remain.</p>
        </div>
        <div className="relative h-[600px] order-1 md:order-2"><img src={pool} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy"/></div>
      </section>

      <section className="py-32 px-6 lg:px-20 max-w-[1400px] mx-auto grid md:grid-cols-3 gap-12 text-center">
        {[
          { n: "12", l: "Suites & Rooms" },
          { n: "360°", l: "Mountain Views" },
          { n: "2026", l: "Reborn Edition" },
        ].map((s, i) => (
          <div key={i} className="border border-gold/20 p-12">
            <div className="serif text-7xl gradient-gold-text">{s.n}</div>
            <div className="text-xs tracking-[0.4em] uppercase text-cream/60 mt-4">{s.l}</div>
          </div>
        ))}
      </section>
    </>
  );
}
