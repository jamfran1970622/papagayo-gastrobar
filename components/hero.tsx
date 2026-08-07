"use client";
import { T } from "@/lib/i18n";

export function Hero() {
  return (
    <section className="min-h-svh relative overflow-hidden flex flex-col justify-end pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,61,31,1) 0%, rgba(10,61,31,.7) 35%, rgba(10,61,31,.2) 70%, rgba(10,61,31,.5) 100%), url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1400&q=90') center/cover no-repeat",
        }}
      />

      <div className="absolute top-16 left-0 right-0 h-1.5 flex z-10">
        <div className="flex-[3] bg-oro" />
        <div className="flex-[2] bg-tropical" />
        <div className="flex-[1] bg-coral" />
        <div className="flex-[2] bg-oro" />
      </div>

      <div
        className="absolute z-[1] font-bebas pointer-events-none select-none text-oro/5 leading-[0.85]"
        style={{ fontSize: "50vw", top: "5%", left: "-5%", transform: "rotate(-8deg)" }}
        aria-hidden
      >
        P
      </div>

      <div className="relative z-[2] px-6 md:px-12 pb-0">
        <span className="block text-[0.62rem] tracking-[0.22em] uppercase text-oro font-bold mb-3">
          Ciudad Jardín · Cali, Colombia · Frente a Velas Plaza
        </span>
        <h1
          className="font-bebas leading-[0.82] tracking-[0.01em] text-crema"
          style={{ fontSize: "clamp(4.5rem, 20vw, 13rem)" }}
        >
          <span className="text-oro block">PAPA</span>
          <span className="text-tropical block">GAYO</span>
          <span
            className="block text-crema leading-[1.1] tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.5rem, 6vw, 4rem)" }}
          >
            <T es="un pequeño paraíso." en="a little paradise." />
          </span>
        </h1>

        <p className="text-sm leading-[1.75] font-light text-crema/60 max-w-[420px] mt-5 mb-6">
          <T
            es="Gastrobar tropical en el corazón de Ciudad Jardín. Cócteles únicos, música en vivo, primeras cenas memorables."
            en="Tropical gastrobar in the heart of Ciudad Jardín. Unique cocktails, live music, memorable dinners."
          />
        </p>

        <div className="flex gap-3 flex-wrap">
          <a href="#res" className="btn-oro">
            <T es="Reservar Mesa" en="Book a Table" />
          </a>
          <a href="#menu" className="btn-wire">
            <T es="Ver Menú" en="View Menu" />
          </a>
        </div>
      </div>

      <div className="relative z-[2] mt-10 grid grid-cols-4 bg-verde/95 border-t-4 border-oro">
        {[
          { n: "4.5★", l: <T es={<>Google<br/>Cali</>} en={<>Google<br/>Cali</>} /> },
          { n: "4.4★", l: <T es={<>TripAdvisor<br/>#286/996</>} en={<>TripAdvisor<br/>#286/996</>} /> },
          { n: "$50K", l: <T es={<>Sangría<br/>Tardear</>} en={<>Sangría<br/>Happy Hour</>} /> },
          { n: "♪", l: <T es={<>Música<br/>en Vivo</>} en={<>Live<br/>Music</>} /> },
        ].map((s, i) => (
          <div
            key={i}
            className="py-4 px-2 text-center flex flex-col gap-0.5 border-r border-oro/10 last:border-r-0"
          >
            <span className="font-bebas text-2xl text-oro leading-none">{s.n}</span>
            <span className="text-[0.48rem] tracking-[0.1em] uppercase text-crema/30 leading-[1.4]">
              {s.l}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
