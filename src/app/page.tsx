import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { DividerLine } from "@/components/DividerLine";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { OrderFlow } from "@/components/OrderFlow";
import { Philosophy } from "@/components/Philosophy";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <Hero />
        <About />
        <DividerLine />
        <Process />
        <DividerLine />
        <Products />
        <OrderFlow />
        <Philosophy />
        <DividerLine />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
