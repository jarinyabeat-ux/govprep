import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "ไม่พบหน้าที่คุณกำลังหา",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-bold tracking-[0.14em] text-primary-ink uppercase">
        404
      </p>
      <h1 className="mt-3 text-3xl text-ink sm:text-4xl">ไม่พบหน้าที่คุณกำลังหา</h1>
      <p className="prose-width mt-4 text-muted">
        หน้านี้อาจถูกย้ายหรือยังไม่ได้เผยแพร่ ลองกลับไปที่หน้าแรกเพื่อเลือกหมวดสอบและอ่านบทสรุปล่าสุด
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-pill bg-primary px-7 py-3.5 font-bold text-white shadow-soft transition-all hover:bg-primary-hover hover:shadow-lift"
      >
        กลับไปหน้าแรก
      </Link>
    </Container>
  );
}
