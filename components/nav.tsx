"use client";
import { useState } from "react";
import { useLang, T } from "@/lib/i18n";

export function Nav() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3 bg-verde border-b-4 border-oro">
        <a href="#" className="no-underline">
          <div className="font-bebas text-2xl tracking-widest text-crema leading-none">
            PAPA<span className="text-oro">GAYO</span>
          </div>
          <div className="text-[0.45rem] tracking-[0.2em] uppercase text-crema/30">
            Gastrobar · Ciudad Jardín · Cali
          </div>
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-8 list-none">
            {[
              { href: "#about", label: <T es="Nosotros" en="About" /> },
              { href: "#menu", label: "Menú" },
              { href: "#rev", label: <T es="Reseñas" en="Reviews" /> },
              { href: "#res", label: <T es="Reservar" en="Book" /> },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="text-[0.6rem] tracking-[0.14em] uppercase text-crema/50 hover:text-oro transition-colors font-medium no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex border border-oro/40 overflow-hidden">
            <button
              onClick={() => setLang("es")}
              className={`px-2 py-1 text-[0.6rem] font-bold tracking-widest uppercase transition-colors ${
                lang === "es" ? "bg-oro text-carbon" : "bg-transparent text-crema/35"
              }`}
            >
              ES
            </button>
            <div className="w-px bg-oro/20" />
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 text-[0.6rem] font-bold tracking-widest uppercase transition-colors ${
                lang === "en" ? "bg-oro text-carbon" : "bg-transparent text-crema/35"
              }`}
            >
              EN
            </button>
          </div>

          <button
            className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer"
            onClick={() => setOpen(true)}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className="block w-5 h-0.5 bg-crema" />
            ))}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[199] bg-verde flex flex-col items-center justify-center gap-10 border-t-4 border-oro">
          <button
            className="absolute top-5 right-6 bg-transparent border-none text-crema text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
          {[
            { href: "#about", label: <T es="NOSOTROS" en="ABOUT" /> },
            { href: "#menu", label: "MENÚ" },
            { href: "#rev", label: <T es="RESEÑAS" en="REVIEWS" /> },
            { href: "#res", label: <T es="RESERVAR" en="BOOK" /> },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-bebas text-5xl tracking-widest text-crema hover:text-oro transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
          <div className="flex border border-oro/40 overflow-hidden mt-2">
            <button
              onClick={() => setLang("es")}
              className={`px-3 py-1.5 text-[0.6rem] font-bold tracking-widest uppercase transition-colors ${
                lang === "es" ? "bg-oro text-carbon" : "bg-transparent text-crema/35"
              }`}
            >
              ES
            </button>
            <div className="w-px bg-oro/20" />
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 text-[0.6rem] font-bold tracking-widest uppercase transition-colors ${
                lang === "en" ? "bg-oro text-carbon" : "bg-transparent text-crema/35"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </>
  );
}
