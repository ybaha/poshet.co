export const metadata = {
  title: "Home - Simple",
  description: "Page description",
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
