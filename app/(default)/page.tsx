export const metadata = {
  title: "Poshet Digital",
  description:
    "Poshet: Empowering Digital Transformation Through Innovative Software Solutions",
};

import Hero from "@/components/hero";
import Services from "@/components/services";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Newsletter />

      {/* <Features /> */}
      {/* <FeaturesBlocks />
      <Testimonials /> */}
    </>
  );
}
