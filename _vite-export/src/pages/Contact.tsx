import { PageHero } from "@/components/PageHero";
import aerial from "@/assets/kurraya-aerial.jpg";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <>
      <PageHero image={aerial} eyebrow="Get In Touch" title="Begin Your Visit" subtitle="Our concierge replies in moments — not days." />

      <section className="py-32 px-6 lg:px-20 max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <div className="text-xs tracking-[0.5em] uppercase text-gold mb-6">— Reservation Inquiry</div>
          <h2 className="serif text-5xl text-cream mb-10">Tell us about your stay</h2>
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget as HTMLFormElement);
            const text = `Hi Kurraya Hills, I am ${f.get("name")}. ${f.get("message")}`;
            window.open(`https://wa.me/6281200000000?text=${encodeURIComponent(text)}`, "_blank");
          }}>
            {[
              { n: "name", l: "Full Name", t: "text" },
              { n: "email", l: "Email", t: "email" },
              { n: "phone", l: "Phone", t: "tel" },
            ].map(f => (
              <div key={f.n}>
                <label className="block text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-3">{f.l}</label>
                <input required name={f.n} type={f.t} className="w-full bg-transparent border-b border-gold/30 focus:border-gold py-3 text-cream outline-none transition" />
              </div>
            ))}
            <div>
              <label className="block text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-3">Interested In</label>
              <select name="interest" className="w-full bg-transparent border-b border-gold/30 focus:border-gold py-3 text-cream outline-none">
                {["Room Stay", "Romantic Dinner", "Honeymoon Setup", "Wedding", "Meeting", "Pool / Day Use"].map(o => <option className="bg-ink" key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-3">Message</label>
              <textarea required name="message" rows={4} className="w-full bg-transparent border-b border-gold/30 focus:border-gold py-3 text-cream outline-none resize-none" />
            </div>
            <button className="px-10 py-4 bg-gold text-ink text-xs tracking-[0.3em] uppercase hover:bg-cream transition">Send Inquiry</button>
          </form>
        </div>

        <div className="space-y-10">
          <div>
            <div className="text-xs tracking-[0.5em] uppercase text-gold mb-6">— Direct</div>
            <ul className="space-y-5 text-cream">
              <li className="flex gap-4 items-start"><MapPin className="text-gold mt-1" /> <span>Kurraya Hills Resort<br /><span className="text-cream/60 text-sm">Singkawang, Kalimantan Barat, Indonesia</span></span></li>
              <li className="flex gap-4 items-center"><Phone className="text-gold" /> <a href="tel:+6281200000000" className="hover:text-gold">+62 812 0000 0000</a></li>
              <li className="flex gap-4 items-center"><Mail className="text-gold" /> <a href="mailto:reservation@kurrayahills.com" className="hover:text-gold">reservation@kurrayahills.com</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.5em] uppercase text-gold mb-6">— Connect</div>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
                { Icon: MapPin, href: "https://maps.google.com/?q=Singkawang", label: "Maps" },
              ].map(({ Icon, href, label }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-14 h-14 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="border border-gold/20 aspect-[4/3] overflow-hidden">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Singkawang,Kalimantan+Barat&output=embed"
              className="w-full h-full grayscale-[0.4]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
