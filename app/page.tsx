import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { Cocktails } from "@/components/cocktails";
import { Menu } from "@/components/menu";
import { Tardear } from "@/components/tardear";
import { Reviews } from "@/components/reviews";
import { Reservations } from "@/components/reservations";
import { Info } from "@/components/info";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Cocktails />
      <Menu />
      <Tardear />
      <Reviews />
      <Reservations />
      <Info />
      <Footer />
    </>
  );
}
