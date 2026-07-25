import Image from "next/image";
import Navigation from "@/components/navigation";
import AccredianEdgePage from "./accredian-edge/page";
import Hero from "./hero/page";
import StatsPage from "./stats/page";
import ClientsPage from "./clients/page";
import CATPage from "./cat/page";
import HowItWorksPage from "./how-it-works/page";
import FAQsPage from "./faqs/page";
import TestimonialsPage from "./testimonias/page";

export default function Home() {
  return (
    <div className="w-full">

      <Hero/>
      <StatsPage/>
      <ClientsPage/>
      <AccredianEdgePage/>
      <CATPage/>
      <HowItWorksPage/>
      <FAQsPage/>
      <TestimonialsPage/>
      
    </div>
  );
}
