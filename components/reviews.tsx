"use client";
import { T } from "@/lib/i18n";

const reviews = [
  { stars: "★★★★★", textEs: '"Uno de mis lugares favoritos para cenar. Servicio impecable, ambiente increíble y los cócteles son fuera de serie."', textEn: '"One of my favorite places to have dinner. Impeccable service, incredible atmosphere and the cocktails are out of this world."', author: "Mia", src: "Google Reviews · Ciudad Jardín" },
  { stars: "★★★★★", textEs: '"Excelente experiencia. Amé este lugar. Comida: 5 · Servicio: 5 · Ambiente: 5."', textEn: '"Excellent experience. Loved this place. Food: 5 · Service: 5 · Atmosphere: 5."', authorEs: "Visitante Verificado", authorEn: "Verified Guest", src: "Google Reviews · Cali" },
  { stars: "★★★★½", textEs: '"El Despropósito hecho Gastro Bar — así se definen ellos mismos y tienen razón. Un lugar único en Cali."', textEn: '"The Unexpected made into a Gastro Bar — that\'s how they define themselves and they\'re right. A unique spot in Cali."', author: "TripAdvisor", src: "TripAdvisor · #286 de 996 en Cali" },
];

export function Reviews() {
  return (
    <section className="py-20 px-6 md:px-12 bg-carbon" id="rev">
      <span className="eyebrow"><T es="Lo Que Dicen" en="What They Say" /></span>
      <h2 className="sec-title mt-3 mb-8">
        <T
          es={<>VOCES REALES.<br /><span className="text-oro italic" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>sin filtro.</span></>}
          en={<>REAL VOICES.<br /><span className="text-oro italic" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>unfiltered.</span></>}
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-oro/10 mb-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-carbon p-6 border-l-4 border-transparent hover:border-oro hover:bg-oro/[0.04] transition-all">
            <div className="text-oro text-sm tracking-[0.1em] mb-2">{r.stars}</div>
            <p className="italic text-crema/70 leading-[1.7] mb-3 text-[0.9rem]" style={{ fontFamily: "var(--font-playfair)" }}>
              <T es={r.textEs} en={r.textEn} />
            </p>
            <div className="font-bebas text-[0.85rem] tracking-[0.1em] text-crema">
              {r.author ?? <T es={r.authorEs!} en={r.authorEn!} />}
            </div>
            <div className="text-[0.58rem] text-crema/30 tracking-[0.1em] uppercase mt-0.5">{r.src}</div>
          </div>
        ))}
      </div>
      <div className="inline-flex items-center gap-4 bg-oro px-6 py-4">
        <span className="font-bebas text-[3.5rem] text-carbon leading-none">4.5</span>
        <div className="text-[0.62rem] tracking-[0.08em] uppercase text-carbon/60 font-bold leading-[1.6]">
          <T
            es={<>Google · TripAdvisor 4.4★<br />#286 de 996 en Cali<br />Ciudad Jardín · Música en Vivo</>}
            en={<>Google · TripAdvisor 4.4★<br />#286 of 996 in Cali<br />Ciudad Jardín · Live Music</>}
          />
        </div>
      </div>
    </section>
  );
}
