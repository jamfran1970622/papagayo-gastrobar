"use client";
import { T } from "@/lib/i18n";

const cocktails = [
  {
    es: "NITROGENADO DE BANANO", en: "BANANA NITRO COCKTAIL",
    descEs: "Licor de banano · leche de almendras artesanal · ron blanco · agua de azahar · Licor 43 · syrup de cardamomo · té de bitáco",
    descEn: "Banana liqueur · artisan almond milk · white rum · orange blossom water · Licor 43 · cardamom syrup · bitaco tea",
    priceEs: "Firma de la casa", priceEn: "House signature",
  },
  {
    es: "GIN MARACUYÁ CARDAMOMO", en: "PASSION FRUIT CARDAMOM GIN",
    descEs: "Gin Tanqueray Ten · licor de hierbas verde · shrub de maracuyá · zanahoria y cardamomo · bitter de toronja",
    descEn: "Gin Tanqueray Ten · green herb liqueur · passion fruit shrub · carrot and cardamom · grapefruit bitters",
    priceEs: "Cóctel artesanal", priceEn: "Artisan cocktail",
  },
  {
    es: "WHISKY MANZANILLA ROSAS", en: "CHAMOMILE ROSE WHISKY",
    descEs: "Monkey Shoulder · almíbar de vino blanco · agua de rosas · limón mandarino · Soda Hatsu Romero · Blue Curaçao",
    descEn: "Monkey Shoulder · white wine syrup · rose water · mandarin lime · Hatsu Rosemary Soda · Blue Curaçao",
    priceEs: "Cóctel artesanal", priceEn: "Artisan cocktail",
  },
  {
    es: "VICHE BAILADORES", en: "BAILADORES VICHE",
    descEs: "Viche artesanal · zumo de lulo · miel de abeja · zumo de limón · licor de arazá",
    descEn: "Artisan viche · lulo juice · bee honey · lime juice · arazá liqueur",
    priceEs: "Cóctel colombiano", priceEn: "Colombian cocktail",
  },
];

export function Cocktails() {
  return (
    <section className="py-20 px-6 md:px-12 bg-carbon" id="cocktails">
      <span className="eyebrow"><T es="Coctelería Artesanal" en="Artisan Cocktails" /></span>
      <h2 className="sec-title mt-3 mb-10">
        <T
          es={<>CÓCTELES QUE<br /><span className="text-oro">NO OLVIDARÁS.</span></>}
          en={<>COCKTAILS YOU<br /><span className="text-oro">WON&apos;T FORGET.</span></>}
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-oro/10">
        {cocktails.map((c, i) => (
          <div key={i} className="bg-carbon p-6 border-l-[3px] border-transparent hover:border-oro hover:bg-oro/[0.04] transition-all">
            <div className="font-bebas text-sm tracking-[0.06em] text-crema mb-1"><T es={c.es} en={c.en} /></div>
            <div className="text-[0.74rem] text-crema/35 leading-[1.5] font-light"><T es={c.descEs} en={c.descEn} /></div>
            <div className="text-oro mt-1 italic text-base" style={{ fontFamily: "var(--font-playfair)" }}>
              <T es={c.priceEs} en={c.priceEn} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
