import Image from "next/image";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogos";
import TopCategories from "./components/TopCategories";
import OurProduct from "./components/OurProduct";


export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyLogos />
      <TopCategories />
      <OurProduct/>
    </main>
  );
}
