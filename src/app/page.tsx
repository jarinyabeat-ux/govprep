import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Categories from "@/components/Categories";
import Courses from "@/components/Courses";
import FeaturedArticles from "@/components/FeaturedArticles";
import FreeResources from "@/components/FreeResources";
import Roadmap from "@/components/Roadmap";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import {
  articleListSchema,
  breadcrumbSchema,
  courseListSchema,
  faqSchema,
} from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Categories />
      <Courses />
      <FeaturedArticles />
      <FreeResources />
      <Roadmap />
      <Faq />
      <FinalCta />

      <JsonLd id="ld-faq" data={faqSchema()} />
      <JsonLd id="ld-courses" data={courseListSchema()} />
      <JsonLd id="ld-articles" data={articleListSchema()} />
      <JsonLd id="ld-breadcrumb" data={breadcrumbSchema()} />
    </>
  );
}
