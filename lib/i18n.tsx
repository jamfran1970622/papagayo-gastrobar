"use client";
import { createContext, useContext, useState } from "react";

export type Lang = "es" | "en";
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "es", setLang: () => {} });
export const useLang = () => useContext(Ctx);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function T({ es, en }: { es: React.ReactNode; en: React.ReactNode }) {
  const { lang } = useLang();
  return <>{lang === "es" ? es : en}</>;
}
