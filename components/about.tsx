"use client";
import Image from "next/image";
import { T } from "@/lib/i18n";

export function About() {
  return (
    <section className="py-20 px-6 md:px-12 bg-verde" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=85"
            alt="Papagayo ambiente"
            width={800}
            height={600}
            className="w-full aspect-[4/3] object-cover border-b-[5px] border-oro"
            loading="lazy"
            unoptimized
          />
        </div>
        <div>
          <span className="eyebrow">
            <T es="El Paraíso" en="The Paradise" />
          </span>
          <h2 className="sec-title mt-3 mb-4">
            <T
              es={<>EL SABOR<br />MÁS <span className="text-oro">TROPICAL</span><br />DE CALI.</>}
              en={<>CALI&apos;S MOST<br /><span className="text-oro">TROPICAL</span><br />FLAVOR.</>}
            />
          </h2>
          <p className="sec-body">
            <T
              es="Papagayo Gastrobar es un espacio donde la gastronomía, los cócteles artesanales y la música en vivo se fusionan para crear una experiencia única. Ubicado en Ciudad Jardín, justo al frente de Velas Plaza — el lugar más vibrante del sur de Cali."
              en="Papagayo Gastrobar is a space where gastronomy, artisan cocktails and live music fuse to create a unique experience. Located in Ciudad Jardín, right in front of Velas Plaza — the most vibrant spot in southern Cali."
            />
          </p>
          <blockquote className="mt-6 px-5 py-4 bg-oro/10 border-l-[5px] border-oro italic text-crema leading-[1.65]" style={{ fontFamily: "var(--font-playfair)" }}>
            <T
              es='"El Despropósito hecho Gastro Bar. Un pequeño paraíso en Cali."'
              en='"The Unexpected made into a Gastro Bar. A little paradise in Cali."'
            />
          </blockquote>
        </div>
      </div>
    </section>
  );
}
