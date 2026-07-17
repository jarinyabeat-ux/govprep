import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { EXTERNAL_LINK_PROPS, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว",
  description:
    "นโยบายความเป็นส่วนตัวของ เตรียมสอบราชการ ฉบับคนมีเวลาน้อย อธิบายข้อมูลที่เก็บ วิธีใช้งาน คุกกี้ และสิทธิของผู้ใช้",
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  {
    title: "ข้อมูลที่เราเก็บ",
    body: "เว็บไซต์นี้ไม่มีระบบสมาชิกและไม่ขอข้อมูลส่วนบุคคลจากผู้เข้าชม เราเก็บเฉพาะข้อมูลสถิติการเข้าชมแบบไม่ระบุตัวตน เช่น หน้าที่เปิด ระยะเวลาที่อยู่ในหน้า และประเภทอุปกรณ์ เพื่อนำไปปรับปรุงเนื้อหาให้ตรงกับสิ่งที่ผู้อ่านต้องการ",
  },
  {
    title: "คุกกี้",
    body: "เราใช้คุกกี้ที่จำเป็นต่อการทำงานของเว็บไซต์ และอาจใช้คุกกี้เพื่อการวัดผลการเข้าชม คุณสามารถปิดหรือลบคุกกี้ได้จากการตั้งค่าเบราว์เซอร์ โดยการปิดคุกกี้จะไม่กระทบต่อการอ่านเนื้อหาบนเว็บไซต์",
  },
  {
    title: "ลิงก์ไปยังเว็บไซต์ภายนอก",
    body: "หน้าเว็บมีลิงก์ไปยังเพจ Facebook ของเราและแหล่งอ้างอิงภายนอก เมื่อคุณกดลิงก์เหล่านั้น การเก็บข้อมูลจะเป็นไปตามนโยบายของผู้ให้บริการปลายทาง ซึ่งอยู่นอกเหนือการควบคุมของเรา",
  },
  {
    title: "การใช้ข้อมูล",
    body: "ข้อมูลสถิติที่เก็บถูกใช้เพื่อวิเคราะห์ภาพรวมการเข้าชมเท่านั้น เราไม่ขาย ไม่แลกเปลี่ยน และไม่ส่งต่อข้อมูลผู้เข้าชมให้บุคคลที่สามเพื่อวัตถุประสงค์ทางการตลาด",
  },
  {
    title: "สิทธิของคุณ",
    body: "คุณมีสิทธิสอบถามเกี่ยวกับข้อมูลที่เราเก็บ ขอให้ลบข้อมูล หรือคัดค้านการเก็บข้อมูลสถิติได้ โดยติดต่อผ่านช่องทางด้านล่าง เราจะดำเนินการภายในระยะเวลาที่กฎหมายกำหนด",
  },
  {
    title: "การเปลี่ยนแปลงนโยบาย",
    body: "หากมีการแก้ไขนโยบายนี้ เราจะปรับวันที่ปรับปรุงล่าสุดไว้ที่ท้ายหน้า และแจ้งการเปลี่ยนแปลงที่มีนัยสำคัญผ่านเพจ Facebook",
  },
];

export default function PrivacyPage() {
  return (
    <Container className="py-20 md:py-28">
      <article className="prose-width mx-auto">
        <p className="text-sm font-bold tracking-[0.14em] text-primary uppercase">
          นโยบาย
        </p>
        <h1 className="mt-3 text-3xl text-ink sm:text-4xl">
          นโยบายความเป็นส่วนตัว
        </h1>
        <p className="mt-5 text-muted">
          เราให้ความสำคัญกับความเป็นส่วนตัวของผู้อ่าน หน้านี้อธิบายว่าเว็บไซต์เก็บข้อมูลอะไร
          นำไปใช้อย่างไร และคุณจัดการข้อมูลของตัวเองได้อย่างไร
        </p>

        {SECTIONS.map((section) => (
          <section key={section.title} className="mt-10">
            <h2 className="text-xl text-ink">{section.title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
          </section>
        ))}

        <section className="mt-10">
          <h2 className="text-xl text-ink">ติดต่อเรา</h2>
          <p className="mt-3 leading-relaxed text-muted">
            สอบถามเรื่องความเป็นส่วนตัวได้ที่{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-bold text-primary hover:text-primary-hover"
            >
              {SITE.email}
            </a>{" "}
            หรือทักผ่าน{" "}
            <a
              href={SITE.facebook}
              {...EXTERNAL_LINK_PROPS}
              className="font-bold text-primary hover:text-primary-hover"
            >
              เพจ Facebook
            </a>
          </p>
        </section>

        <p className="mt-12 border-t border-line pt-6 text-sm text-muted">
          ปรับปรุงล่าสุด: 16 กรกฎาคม 2568
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-pill border border-line bg-white px-6 py-3 font-bold text-ink shadow-soft transition-all hover:border-primary hover:text-primary"
        >
          กลับไปหน้าแรก
        </Link>
      </article>
    </Container>
  );
}
