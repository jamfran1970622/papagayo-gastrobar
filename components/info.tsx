"use client";
import { T } from "@/lib/i18n";

export function Info() {
  return (
    <section className="py-20 px-6 md:px-12 bg-carbon" id="info">
      <span className="eyebrow"><T es="Encuéntranos" en="Find Us" /></span>
      <h2 className="sec-title mt-3 mb-10">CIUDAD <span className="text-oro">JARDÍN.</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          {[
            { ico: "📍", labelEs: "Dirección", labelEn: "Address", body: "Cra. 105 #14-250, Ciudad Jardín\nFrente a Velas Plaza · Cali, Colombia" },
            { ico: "📸", labelEs: "Redes Sociales", labelEn: "Social Media", body: "@papagayo_gastrobar\nInstagram · TikTok · YouTube" },
          ].map((row, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-sm mt-0.5 shrink-0">{row.ico}</span>
              <div className="text-[0.82rem] leading-[1.65] text-crema/45 font-light">
                <strong className="text-crema block mb-0.5 text-[0.62rem] tracking-[0.14em] uppercase font-bold"><T es={row.labelEs} en={row.labelEn} /></strong>
                {row.body.split("\n").map((line, j) => <span key={j} className="block">{line}</span>)}
              </div>
            </div>
          ))}
          <div className="flex gap-3 items-start">
            <span className="text-sm mt-0.5 shrink-0">🕐</span>
            <div>
              <strong className="text-crema block mb-1 text-[0.62rem] tracking-[0.14em] uppercase font-bold"><T es="Horarios" en="Hours" /></strong>
              <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                <span className="text-[0.7rem] text-crema/30"><T es="Tardear" en="Happy Hour" /></span>
                <span className="text-[0.7rem] text-crema/70">4:00–7:00pm</span>
                <span className="text-[0.7rem] text-crema/30"><T es="Cena" en="Dinner" /></span>
                <span className="text-[0.7rem] text-crema/70"><T es="Desde las 7:00pm" en="From 7:00pm" /></span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-sm mt-0.5 shrink-0">🎵</span>
            <div className="text-[0.82rem] text-crema/45 font-light">
              <strong className="text-crema block mb-0.5 text-[0.62rem] tracking-[0.14em] uppercase font-bold"><T es="Música en Vivo" en="Live Music" /></strong>
              <T es="La Sala — episodios con artistas caleños en vivo" en="La Sala — episodes with live Cali artists" />
            </div>
          </div>
        </div>
        <a href="https://maps.google.com/?q=Cra.+105+%2314-250,+Ciudad+Jardín,+Cali" target="_blank" rel="noreferrer"
          className="flex flex-col items-center justify-center gap-4 aspect-[4/3] bg-verde border-4 border-oro no-underline">
          <span className="text-5xl">🗺️</span>
          <span className="font-bebas text-xl tracking-[0.1em] text-oro"><T es="VER EN GOOGLE MAPS" en="VIEW ON GOOGLE MAPS" /></span>
          <span className="text-[0.72rem] text-crema/40 tracking-[0.1em] uppercase">Cra. 105 #14-250 · Ciudad Jardín · Cali</span>
        </a>
      </div>
    </section>
  );
}
