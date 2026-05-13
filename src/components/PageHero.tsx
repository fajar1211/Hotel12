import { ReactNode } from "react";

export function PageHero({ image, eyebrow, title, subtitle, children }: {
  image: string; eyebrow?: string; title: string; subtitle?: string; children?: ReactNode;
}) {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
      <div className="absolute inset-0 overlay-luxe" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {eyebrow && <div className="text-xs tracking-[0.5em] uppercase text-gold mb-6 animate-fade-up">{eyebrow}</div>}
        <h1 className="serif text-5xl md:text-7xl lg:text-8xl text-cream max-w-5xl animate-fade-up" style={{animationDelay: '0.15s'}}>{title}</h1>
        {subtitle && <p className="mt-8 max-w-2xl text-cream/80 text-lg leading-relaxed animate-fade-up" style={{animationDelay: '0.3s'}}>{subtitle}</p>}
        {children && <div className="mt-10 animate-fade-up" style={{animationDelay: '0.45s'}}>{children}</div>}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-float-slow">
          <div className="w-px h-12 bg-gold/60" />
          <span className="text-[0.6rem] tracking-[0.4em] text-gold/80 uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
