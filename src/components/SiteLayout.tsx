import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/romantic", label: "Romantic" },
  { to: "/wedding-meeting", label: "Wedding & Meeting" },
  { to: "/restaurant-pool", label: "Restaurant & Pool" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-ink/85 backdrop-blur-xl border-b border-gold/20" : "bg-transparent"}`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col leading-none">
            <span className="text-2xl tracking-[0.3em] text-cream serif">KURRAYA</span>
            <span className="text-[0.65rem] tracking-[0.5em] text-gold mt-1">HILLS · SINGKAWANG</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map(n => (
              <Link key={n.to} to={n.to}
                className="text-xs tracking-[0.2em] uppercase text-cream/80 hover:text-gold transition-colors relative group"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 group-hover:w-full bg-gold transition-all duration-500" />
              </Link>
            ))}
          </nav>
          <button onClick={() => setOpen(o => !o)} className="lg:hidden text-cream p-2" aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-gold/20 bg-ink/95">
            <nav className="flex flex-col p-6 gap-5">
              {NAV.map(n => (
                <Link key={n.to} to={n.to} className="text-sm tracking-[0.2em] uppercase text-cream/80 hover:text-gold"
                  activeProps={{ className: "text-gold" }} activeOptions={{ exact: n.to === "/" }}>
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-ink border-t border-gold/20 mt-0">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl tracking-[0.3em] text-cream serif">KURRAYA</div>
            <div className="text-[0.65rem] tracking-[0.5em] text-gold mt-1">HILLS · SINGKAWANG</div>
            <p className="mt-6 text-sm text-cream/60 leading-relaxed">A timeless mountain sanctuary where every horizon becomes a memory.</p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              {NAV.slice(1).map(n => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex gap-3"><MapPin size={16} className="text-gold mt-0.5 shrink-0"/> Singkawang, Kalimantan Barat, Indonesia</li>
              <li className="flex gap-3"><Phone size={16} className="text-gold mt-0.5 shrink-0"/> +62 812 0000 0000</li>
              <li className="flex gap-3"><Mail size={16} className="text-gold mt-0.5 shrink-0"/> reservation@kurrayahills.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Follow</h4>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Youtube, href: "https://youtube.com" },
                { Icon: MapPin, href: "https://maps.google.com/?q=Singkawang" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="w-11 h-11 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gold/10 py-6 text-center text-xs tracking-[0.3em] uppercase text-cream/40">
          © 2026 Kurraya Hills · Crafted with grace
        </div>
      </footer>
    </div>
  );
}
