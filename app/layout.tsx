import type { Metadata } from "next";
import { Bebas_Neue, Playfair_Display, DM_Sans } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

const bebas = Bebas_Neue({ weight: "400", variable: "--font-bebas", subsets: ["latin"] });
const playfair = Playfair_Display({ weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-playfair", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["300", "400", "500", "700"], variable: "--font-dm-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Papagayo Gastrobar — Ciudad Jardín, Cali",
  description: "Gastrobar tropical en el corazón de Ciudad Jardín. Cócteles únicos, música en vivo, primeras cenas memorables.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bebas.variable} ${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
