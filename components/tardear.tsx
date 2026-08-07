"use client";
import { T } from "@/lib/i18n";

export function Tardear() {
  return (
    <div
      className="relative overflow-hidden min-h-[55vw] flex items-center"
      style={{
        background:
          "linear-gradient(to right, rgba(10,61,31,.95) 0%, rgba(10,61,31,.7) 55%, rgba(10,61,31,.1) 100%), url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1400&q=90') center/cover no-repeat",
      }}
    >
      <div className="px-6 md:px-12 py-16">
        <div className="inline-flex items-center gap-3 bg-oro px-6 py-3 mb-6">
          <span className="font-bebas text-base tracking-[0.1em] text-carbon">
            <T es="🦜 TARDEAR · 4PM – 7PM · TODOS LOS DÍAS" en="🦜 HAPPY HOUR · 4PM – 7PM · EVERY DAY" />
          </span>
        </div>
        <h2 className="font-bebas text-crema leading-[0.85] mb-8" style={{ fontSize: "clamp(3rem, 12vw, 8rem)" }}>
          <T
            es={<>SANGRÍA LIBRE<br /><span className="text-oro">$50.000.</span></>}
            en={<>ALL-YOU-CAN-DRINK<br /><span className="text-oro">SANGRÍA $50K.</span></>}
          />
        </h2>
        <a href="#res" className="btn-oro">
          <T es="Reservar para Tardear" en="Book for Happy Hour" />
        </a>
      </div>
    </div>
  );
}
