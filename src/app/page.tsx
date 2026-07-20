import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Courses from "@/components/Courses";
import Roadmap from "@/components/Roadmap";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, courseListSchema, faqSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Courses />
      <Roadmap />
      <Reviews />
      <Faq />
      <FinalCta />

      <JsonLd id="ld-faq" data={faqSchema()} />
      <JsonLd id="ld-courses" data={courseListSchema()} />
      <JsonLd id="ld-breadcrumb" data={breadcrumbSchema()} />
    </>
  );
}
