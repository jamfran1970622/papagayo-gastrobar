"use client";
import { useState } from "react";
import { T } from "@/lib/i18n";

const entradas = [
  { es: "EMPANADAS DE CAMARÓN", en: "SHRIMP EMPANADAS", descEs: "Masa de maíz crujiente · camarón salteado · chipotle · aguacate", descEn: "Crispy corn dough · sautéed shrimp · chipotle · avocado", price: "$28.000" },
  { es: "SPRING ROLLS DE PAPAGAYO", en: "PAPAGAYO SPRING ROLLS", descEs: "Originales de la casa · verduras frescas · salsa dulce de la casa", descEn: "House original · fresh vegetables · house sweet sauce", price: "$26.000" },
  { es: "TABLA TROPICAL", en: "TROPICAL BOARD", descEs: "Selección de entradas de la casa · ideal para compartir", descEn: "Selection of house starters · ideal for sharing", price: "$45.000" },
];
const platos = [
  { es: "LOMO AL CHIPOTLE", en: "CHIPOTLE LOIN", descEs: "El plato estrella · lomo fino en salsa chipotle · acompañamientos de la casa", descEn: "The signature dish · fine loin in chipotle sauce · house sides", price: "$52.000" },
  { es: "PASTA TROPICAL", en: "TROPICAL PASTA", descEs: "Pasta artesanal · salsa de la casa · hierbas frescas · queso parmesano", descEn: "Artisan pasta · house sauce · fresh herbs · parmesan cheese", price: "$38.000" },
  { es: "BURGER PAPAGAYO", en: "PAPAGAYO BURGER", descEs: "Carne 100% res · queso fundido · lechuga · tomate · papas crujientes", descEn: "100% beef · melted cheese · lettuce · tomato · crispy fries", price: "$42.000" },
];
const bebidas = [
  { es: "SANGRÍA LIBRE — TARDEAR", en: "ALL-YOU-CAN-DRINK SANGRÍA", descEs: "Todo lo que quieras · 4:00–7:00pm · el tardear más tropical de Cali", descEn: "All you can drink · 4:00–7:00pm · Cali's most tropical happy hour", price: "$50.000" },
  { es: "CÓCTELES ARTESANALES", en: "ARTISAN COCKTAILS", descEs: "Creados por nuestros bartenders con ingredientes colombianos únicos", descEn: "Created by our bartenders with unique Colombian ingredients", priceEs: "Desde $22.000", priceEn: "From $22.000" },
  { es: "VINOS & LICORES", en: "WINES & SPIRITS", descEs: "Selección curada · vinos colombianos e importados", descEn: "Curated selection · Colombian and imported wines", priceEs: "Desde $18.000", priceEn: "From $18.000" },
];

type Item = { es: string; en: string; descEs: string; descEn: string; price?: string; priceEs?: string; priceEn?: string };

function MenuRow({ item }: { item: Item }) {
  return (
    <div className="flex justify-between items-start gap-4 py-4 border-b border-crema/5 last:border-b-0">
      <div>
        <div className="font-bebas text-[0.92rem] tracking-[0.04em] text-crema mb-1"><T es={item.es} en={item.en} /></div>
        <div className="text-[0.72rem] text-crema/35 leading-[1.5] font-light"><T es={item.descEs} en={item.descEn} /></div>
      </div>
      <div className="italic text-oro shrink-0" style={{ fontFamily: "var(--font-playfair)", fontSize: "1rem" }}>
        {item.price ? item.price : <T es={item.priceEs!} en={item.priceEn!} />}
      </div>
    </div>
  );
}

const tabs = [
  { id: "ent", labelEs: "Entradas", labelEn: "Starters", items: entradas },
  { id: "pla", labelEs: "Platos", labelEn: "Mains", items: platos },
  { id: "beb", labelEs: "Bebidas", labelEn: "Drinks", items: bebidas },
];

export function Menu() {
  const [active, setActive] = useState(0);
  return (
    <section className="py-20 px-6 md:px-12 bg-verde" id="menu">
      <span className="eyebrow"><T es="La Carta" en="The Menu" /></span>
      <h2 className="sec-title mt-3 mb-8">
        <T es={<>SABORES QUE<br /><span className="text-oro">SORPRENDEN.</span></>} en={<>FLAVORS THAT<br /><span className="text-oro">SURPRISE.</span></>} />
      </h2>
      <div className="flex overflow-x-auto scrollbar-hide border-b-2 border-oro/20 mb-8">
        {tabs.map((tab, i) => (
          <button key={tab.id} onClick={() => setActive(i)}
            className={`px-4 py-2.5 text-[0.6rem] tracking-[0.14em] uppercase whitespace-nowrap border-b-[3px] -mb-0.5 font-bold font-sans transition-colors ${
              active === i ? "border-oro text-oro" : "border-transparent text-crema/30 hover:text-oro"
            }`}>
            <T es={tab.labelEs} en={tab.labelEn} />
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {tabs[active].items.map((item, i) => <MenuRow key={i} item={item as Item} />)}
      </div>
    </section>
  );
}
