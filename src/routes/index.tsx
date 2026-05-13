import { createFileRoute, Link } from "@tanstack/react-router";
import aerial from "@/assets/kurraya-aerial.jpg";
import sign from "@/assets/kurraya-sign.jpg";
import room from "@/assets/room-deluxe.jpg";
import dinner from "@/assets/romantic-dinner.jpg";
import wedding from "@/assets/wedding.jpg";
import pool from "@/assets/pool.jpg";
import restaurant from "@/assets/restaurant.jpg";
import meeting from "@/assets/meeting.jpg";
import honeymoon from "@/assets/honeymoon-setup.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Kurraya Hills Singkawang — A Mountain View Sanctuary" },
    { name: "description", content: "Ultra-premium resort in Singkawang. Mountain view rooms, romantic dining, dream weddings, exclusive pool & meeting facilities." },
    { property: "og:image", content: aerial },
  ]}),
  component: Home,
});

const SLIDES = [
  { img: aerial, eyebrow: "Singkawang · Est. 2026", title: "A Hill That Holds The Sky" },
  { img: sign, eyebrow: "Mountain Sanctuary", title: "Where Time Slows To A Whisper" },
  { img: pool, eyebrow: "Endless Horizons", title: "Crafted For The Senses" },
];

function Home() {
  return (
    <>
      {/* Animated full-screen slideshow hero */}
      <section className="relative h-screen w-full overflow-hidden">
        {SLIDES.map((s, i) => (
          <div key={i} className="absolute inset-0" style={{
            animation: `slideshow 18s infinite ${i * 6}s`,
            opacity: 0,
          }}>
            <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
            <div className="absolute inset-0 overlay-luxe" />
          </div>
        ))}
        <style>{`
          @keyframes slideshow {
            0%, 28% { opacity: 1; }
            33%, 95% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}</style>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="text-xs tracking-[0.6em] uppercase text-gold mb-8 animate-fade-up">Kurraya Hills · Singkawang</div>
          <h1 className="serif text-6xl md:text-8xl lg:text-[10rem] text-cream leading-[0.95] animate-fade-up" style={{animationDelay: '0.2s'}}>
            The Hill <span className="script gradient-gold-text text-7xl md:text-9xl">of</span> Forever
          </h1>
          <p className="mt-10 max-w-xl text-cream/80 text-lg leading-relaxed animate-fade-up" style={{animationDelay: '0.4s'}}>
            An exclusive mountain-view retreat where Borneo's emerald hills meet quiet luxury — reimagined for 2026.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center animate-fade-up" style={{animationDelay: '0.6s'}}>
            <Link to="/rooms" className="group relative px-10 py-4 bg-gold text-ink text-xs tracking-[0.3em] uppercase overflow-hidden">
              <span className="relative z-10">Reserve Your Stay</span>
              <span className="absolute inset-0 bg-cream translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link to="/about" className="px-10 py-4 border border-gold/60 text-cream text-xs tracking-[0.3em] uppercase hover:bg-gold/10 transition">Discover</Link>
          </div>
        </div>

        {/* nonstop marquee */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-gold/20 bg-ink/40 backdrop-blur-sm overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {Array.from({length: 4}).map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-6 text-xs tracking-[0.4em] uppercase text-cream/60">
                <span>Mountain View Suites</span><span className="text-gold">✦</span>
                <span>Honeymoon Setup · Rp 250K</span><span className="text-gold">✦</span>
                <span>Dream Weddings</span><span className="text-gold">✦</span>
                <span>Romantic Dining</span><span className="text-gold">✦</span>
                <span>Pool · Meetings · Restaurant</span><span className="text-gold">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro split */}
      <section className="py-32 px-6 lg:px-20 max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="text-xs tracking-[0.5em] uppercase text-gold mb-6">— Welcome</div>
          <h2 className="serif text-5xl md:text-6xl text-cream leading-tight">
            A sanctuary <span className="script gradient-gold-text">carved</span> into the hills of Singkawang
          </h2>
          <p className="mt-8 text-cream/70 text-lg leading-relaxed">
            Kurraya Hills is a quiet rebellion against the ordinary. Suites cantilever toward the mountains, water glides through stone gardens, and every sunset is reserved.
          </p>
          <Link to="/about" className="inline-block mt-10 text-xs tracking-[0.3em] uppercase text-gold border-b border-gold pb-1 hover:text-cream hover:border-cream transition">Our Story</Link>
        </div>
        <div className="relative">
          <img src={sign} alt="Kurraya Hills" className="w-full aspect-[4/5] object-cover shadow-luxe" loading="lazy" />
          <div className="absolute -bottom-8 -left-8 bg-ink border border-gold/30 p-8 max-w-xs hidden md:block">
            <div className="script text-5xl gradient-gold-text">2026</div>
            <div className="text-xs tracking-[0.3em] uppercase text-cream/60 mt-2">Reimagined Edition</div>
          </div>
        </div>
      </section>

      {/* Experiences grid */}
      <section className="px-6 lg:px-20 pb-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.5em] uppercase text-gold mb-4">— Experiences</div>
            <h2 className="serif text-5xl md:text-6xl text-cream">Every detail, intentional</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: room, title: "Mountain View Suites", to: "/rooms", price: "from Rp 600K" },
              { img: dinner, title: "Romantic Dining", to: "/romantic", price: "from Rp 350K" },
              { img: wedding, title: "Dream Weddings", to: "/wedding-meeting", price: "Bespoke" },
              { img: meeting, title: "Executive Meetings", to: "/wedding-meeting", price: "from Rp 120K" },
              { img: restaurant, title: "Restaurant", to: "/restaurant-pool", price: "À la carte" },
              { img: pool, title: "Hill Pool", to: "/restaurant-pool", price: "from Rp 20K" },
            ].map((e, i) => (
              <Link key={i} to={e.to} className="group relative h-[480px] overflow-hidden block">
                <img src={e.img} alt={e.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" loading="lazy" />
                <div className="absolute inset-0 overlay-luxe" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-xs tracking-[0.4em] uppercase text-gold mb-3">{e.price}</div>
                  <h3 className="serif text-3xl text-cream">{e.title}</h3>
                  <div className="mt-4 h-px w-12 bg-gold group-hover:w-full transition-all duration-700" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Honeymoon banner */}
      <section className="relative h-[70vh] overflow-hidden">
        <img src={honeymoon} alt="Honeymoon setup" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" loading="lazy"/>
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <div className="text-xs tracking-[0.5em] uppercase text-gold mb-6">Signature Setup</div>
          <h2 className="serif text-5xl md:text-7xl text-cream max-w-4xl">Honeymoon · Anniversary · Wedding Setup</h2>
          <div className="script text-7xl md:text-8xl gradient-gold-text mt-8">Rp 250K /nett</div>
          <p className="mt-6 text-cream/70 max-w-xl">Inclusive room set up · slice of cake · exclusive room price.</p>
          <Link to="/romantic" className="mt-10 px-10 py-4 border border-gold text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-ink transition">Reserve The Setup</Link>
        </div>
      </section>
    </>
  );
}
