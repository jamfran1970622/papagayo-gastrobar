"use client";
import { T } from "@/lib/i18n";

export function Footer() {
  return (
    <footer className="bg-verde border-t-[5px] border-oro px-6 md:px-12 py-10">
      <div className="h-1 flex mb-8">
        <div className="flex-[4] bg-oro" />
        <div className="flex-[1] bg-tropical" />
        <div className="flex-[2] bg-coral" />
      </div>
      <div className="font-bebas text-3xl tracking-[0.08em] text-crema">PAPA<span className="text-oro">GAYO</span></div>
      <p className="italic text-[0.8rem] text-crema/25 mt-1" style={{ fontFamily: "var(--font-playfair)" }}>
        <T es='"Un pequeño paraíso en Cali. Ciudad Jardín."' en='"A little paradise in Cali. Ciudad Jardín."' />
      </p>
      <div className="flex gap-5 flex-wrap mt-4">
        {[
          { href: "https://instagram.com/papagayo_gastrobar", label: "Instagram" },
          { href: "https://www.facebook.com/papagayogastrobar/", label: "Facebook" },
          { href: "https://linktr.ee/papagayogastrobar", label: "Linktree" },
          { href: "https://www.tripadvisor.com/Restaurant_Review-g297475-d24137237", label: "TripAdvisor" },
        ].map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
            className="text-[0.62rem] tracking-[0.12em] uppercase text-crema/25 hover:text-oro transition-colors no-underline font-bold">{l.label}</a>
        ))}
      </div>
      <hr className="border-none border-t border-oro/15 my-6" />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <div className="text-[0.6rem] text-crema/18">© 2026 Papagayo Gastrobar · Cra. 105 #14-250, Ciudad Jardín, Cali</div>
        <div className="text-[0.58rem] tracking-[0.08em] uppercase">
          <span className="text-crema/25"><T es="Diseñado por" en="Designed by" /></span>{" "}
          <a href="#" className="text-oro/45 hover:text-oro transition-colors no-underline">ColombiaClear Digital Media, LLC</a>
        </div>
      </div>
    </footer>
  );
}
