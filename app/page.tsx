import Header from "./components/header"
import Hero from "./components/home/hero";
import ServiceSection from './components/home/serviceSection';
import WhyUs from "./components/home/whyUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ServiceSection />
      <WhyUs />
    </>
  );
}
