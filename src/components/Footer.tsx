import { Facebook, Mail } from "lucide-react";
import Container from "./Container";
import { EXTERNAL_LINK_PROPS, SITE } from "@/data/site";

const SITE_LINKS = [
  { label: "หน้าแรก", href: "#home" },
  { label: "หมวดสอบ", href: "#categories" },
  { label: "บทความ", href: "#articles" },
  { label: "แหล่งข้อมูลฟรี", href: "#resources" },
  { label: "เส้นทางเตรียมสอบ", href: "#roadmap" },
  { label: "คำถามที่พบบ่อย", href: "#faq" },
];

export default function Footer() {
  const year = new Date().getFullYear() + 543; // พ.ศ.

  return (
    <footer className="border-t border-line bg-surface py-14 md:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-xl bg-primary text-sm font-bold text-white"
              >
                ก.
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-bold text-ink">{SITE.logoLine1}</span>
                <span className="text-xs text-muted">{SITE.logoLine2}</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[0.925rem] leading-relaxed text-muted">
              แบรนด์เนื้อหาเพื่อการศึกษา ที่สรุปเนื้อหาสอบราชการให้อ่านง่ายและใช้เวลาน้อย
              เผยแพร่บทความและแนวข้อสอบใหม่อย่างต่อเนื่อง
            </p>

            <a
              href={SITE.facebook}
              {...EXTERNAL_LINK_PROPS}
              aria-label={`เปิดเพจ Facebook ของ ${SITE.name} ในแท็บใหม่`}
              className="mt-6 inline-flex size-11 items-center justify-center rounded-xl border border-line bg-white text-primary shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-lift"
            >
              <Facebook className="size-5" aria-hidden="true" />
            </a>
          </div>

          {/* Site links */}
          <nav aria-labelledby="footer-nav-heading">
            <h2
              id="footer-nav-heading"
              className="text-sm font-bold tracking-wide text-ink"
            >
              เมนู
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SITE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.925rem] text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & policy */}
          <div>
            <h2 className="text-sm font-bold tracking-wide text-ink">
              ติดต่อและนโยบาย
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={SITE.facebook}
                  {...EXTERNAL_LINK_PROPS}
                  className="inline-flex items-center gap-2 text-[0.925rem] text-muted transition-colors hover:text-primary"
                >
                  <Facebook className="size-4" aria-hidden="true" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-[0.925rem] text-muted transition-colors hover:text-primary"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  ติดต่อเรา
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-[0.925rem] text-muted transition-colors hover:text-primary"
                >
                  นโยบายความเป็นส่วนตัว
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {year} {SITE.name} · สงวนลิขสิทธิ์
          </p>
          <p className="text-sm text-muted">
            เนื้อหาบนเว็บไซต์นี้จัดทำเพื่อการศึกษา ไม่มีความเกี่ยวข้องกับหน่วยงานราชการใด ๆ
          </p>
        </div>
      </Container>
    </footer>
  );
}
