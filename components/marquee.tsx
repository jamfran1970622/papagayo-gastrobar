export function Marquee() {
  const items = [
    "PAPAGAYO", "GASTROBAR", "CIUDAD JARDÍN CALI", "MÚSICA EN VIVO",
    "CÓCTELES ÚNICOS", "SANGRÍA LIBRE $50K", "FRENTE A VELAS PLAZA",
    "UN PEQUEÑO PARAÍSO EN CALI",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="bg-oro overflow-hidden py-2">
      <div className="flex animate-marquee w-max">
        {doubled.map((t, i) => (
          <span key={i} className="font-bebas text-sm tracking-[0.18em] text-carbon px-8 whitespace-nowrap">
            {t}
            <span className="text-carbon/25 mx-4">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
