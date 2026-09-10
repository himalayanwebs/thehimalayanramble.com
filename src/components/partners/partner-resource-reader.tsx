"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ExternalLink, Globe2, Mail, Menu, X } from "lucide-react";
import { CONTACT } from "@/data/nav";
import styles from "./partner-resource-reader.module.css";

type Language = "en" | "th";

type Resource = {
  id: "kit" | "circuit" | "policy";
  number: string;
  file: Record<Language, string>;
  title: Record<Language, string>;
  description: Record<Language, string>;
};

const COPY = {
  en: {
    program: "International travel partner network",
    title: "Partner resources.",
    lede: "Official product information, sales guidance, and partner terms — kept together for the people representing The Himalayan Ramble.",
    resources: "Available documents",
    open: "Open document",
    reader: "Reading now",
    jump: "Jump to document",
    contact: "Need help?",
    contactCopy: "Contact our operations team for current availability, quotations, or a clarification before you make a promise.",
    contactAction: "Contact operations",
    private: "Private partner link · not listed in site navigation",
    menu: "Documents",
    close: "Close document menu",
  },
  th: {
    program: "เครือข่ายพันธมิตรการท่องเที่ยวนานาชาติ",
    title: "เอกสารสำหรับพาร์ทเนอร์",
    lede: "ข้อมูลผลิตภัณฑ์ แนวทางการขาย และเงื่อนไขสำหรับพาร์ทเนอร์ของ The Himalayan Ramble รวมไว้ในที่เดียว",
    resources: "เอกสารที่มี",
    open: "เปิดเอกสาร",
    reader: "กำลังอ่าน",
    jump: "เลือกเอกสาร",
    contact: "ต้องการความช่วยเหลือ?",
    contactCopy: "ติดต่อทีมปฏิบัติการของเราสำหรับข้อมูลที่นั่งว่าง ใบเสนอราคา หรือคำชี้แจงก่อนให้คำมั่นกับลูกค้า",
    contactAction: "ติดต่อทีมปฏิบัติการ",
    private: "ลิงก์สำหรับพาร์ทเนอร์ · ไม่แสดงในเมนูเว็บไซต์",
    menu: "เอกสาร",
    close: "ปิดเมนูเอกสาร",
  },
} as const;

const RESOURCES: Resource[] = [
  {
    id: "kit",
    number: "01",
    file: { en: "/partner-resources/partner-kit.en.html", th: "/partner-resources/partner-kit.th.html" },
    title: { en: "Partner’s Kit", th: "คู่มือสำหรับพาร์ทเนอร์" },
    description: {
      en: "Programme, sales guidance, lead qualification, commission structure, and partner terms.",
      th: "โครงการ แนวทางการขาย การคัดกรองลูกค้า ค่าคอมมิชชัน และเงื่อนไขสำหรับพาร์ทเนอร์",
    },
  },
  {
    id: "circuit",
    number: "02",
    file: { en: "/partner-resources/manali-winter-circuit.en.html", th: "/partner-resources/manali-winter-circuit.th.html" },
    title: { en: "Manali Winter Circuit", th: "เส้นทางมะนาลีในฤดูหนาว" },
    description: {
      en: "Eight days from Delhi to the snowline: route, departures, inclusions, payment, and cancellation.",
      th: "แปดวันจากเดลีสู่เส้นหิมะ: เส้นทาง วันเดินทาง สิ่งที่รวม การชำระเงิน และการยกเลิก",
    },
  },
  {
    id: "policy",
    number: "03",
    file: { en: "/partner-resources/commission-cancellation.en.html", th: "/partner-resources/commission-cancellation.th.html" },
    title: { en: "Commission & Cancellation", th: "ค่าคอมมิชชันและการยกเลิก" },
    description: {
      en: "Commission eligibility, tiers, slot filling, cancellations, attribution, and settlement rules.",
      th: "สิทธิ์ค่าคอมมิชชัน ระดับค่าคอมมิชชัน การเติมที่นั่ง การยกเลิก และกติกาการชำระเงิน",
    },
  },
];

function resourceFrameStyles() {
  return `
    @import url('https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500,400,1&f[]=general-sans@400,500,600,1&display=swap');
    :root { --paper: oklch(0.90 0.025 240) !important; --ink: #021228 !important; --accent: #d66f18 !important; --muted: #39506f !important; --soft: oklch(0.78 0.04 240) !important; --line: #021228 !important; }
    html, body { overflow-x: hidden !important; background: #010d1d !important; }
    body { padding: clamp(0.75rem, 2vw, 1.875rem) !important; font-family: 'General Sans', Arial, sans-serif !important; }
    .document, .page { width: 100% !important; max-width: 920px !important; margin-inline: auto !important; box-shadow: none !important; }
    .page { min-height: 0 !important; padding: clamp(1.25rem, 3.5vw, 2.75rem) !important; }
    .hero-title, .title, .display, .statement, .section h2, .section h3, .bigline, .quote, .callout h2, .contact .name { font-family: 'Clash Display', 'Arial Narrow', sans-serif !important; letter-spacing: -0.035em !important; }
    .page:before { opacity: .025 !important; }
    .page iframe, .page img, .page table { max-width: 100% !important; }
    .contact dd, .contact .value, .footer { overflow-wrap: anywhere !important; }
    @media (max-width: 430px) { body { padding: 0 !important; } .page { padding: 1.125rem 1rem 1.75rem !important; } .mast, .topbar { gap: .5rem !important; } }
  `;
}

export function PartnerResourceReader() {
  const [language, setLanguage] = useState<Language>("en");
  const [resourceId, setResourceId] = useState<Resource["id"]>("kit");
  const [menuOpen, setMenuOpen] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const readerRef = useRef<HTMLElement>(null);
  const copy = COPY[language];
  const activeResource = RESOURCES.find((resource) => resource.id === resourceId) ?? RESOURCES[0];

  const updateFrameHeight = useCallback(() => {
    const frame = frameRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc) return;
    const height = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight, 760);
    frame.style.height = `${height}px`;
  }, []);

  const prepareFrame = useCallback(() => {
    const frame = frameRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc) return;

    if (!doc.getElementById("partner-resource-overrides")) {
      const style = doc.createElement("style");
      style.id = "partner-resource-overrides";
      style.textContent = resourceFrameStyles();
      doc.head.appendChild(style);
    }

    updateFrameHeight();
    const observer = new ResizeObserver(updateFrameHeight);
    observer.observe(doc.body);
    window.setTimeout(updateFrameHeight, 300);
  }, [updateFrameHeight]);

  useEffect(() => {
    setMenuOpen(false);
  }, [language, resourceId]);

  const selectResource = (id: Resource["id"]) => {
    setResourceId(id);
    window.setTimeout(() => readerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  return (
    <main id="main" className={`${styles.portal} partner-portal`} lang={language}>
      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="The Himalayan Ramble home">
          <Image src="/assets/logo.webp" alt="" width={42} height={42} priority />
          <span>The Himalayan<br />Ramble</span>
        </a>

        <div className={styles.headerActions}>
          <div className={styles.languageSwitch} aria-label="Choose document language">
            <Globe2 aria-hidden="true" size={16} />
            {(["en", "th"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                aria-pressed={language === code}
                className={language === code ? styles.activeLanguage : undefined}
              >
                {code === "en" ? "English" : "ไทย"}
              </button>
            ))}
          </div>
          <a className={styles.contactLink} href={`mailto:${CONTACT.email}`}>
            <Mail aria-hidden="true" size={16} />
            <span>{copy.contactAction}</span>
          </a>
        </div>
      </header>

      <section className={styles.masthead} aria-labelledby="partner-title">
        <p>{copy.program}</p>
        <h1 id="partner-title">{copy.title}</h1>
        <div className={styles.mastheadFoot}>
          <p>{copy.lede}</p>
          <span>{copy.private}</span>
        </div>
      </section>

      <section className={styles.indexSection} aria-labelledby="documents-title">
        <div className={styles.indexHeading}>
          <p className={styles.sectionLabel}>{copy.resources}</p>
          <h2 id="documents-title">{copy.jump}</h2>
        </div>
        <div className={styles.resourceList}>
          {RESOURCES.map((resource) => {
            const active = resource.id === resourceId;
            return (
              <button
                key={resource.id}
                type="button"
                onClick={() => selectResource(resource.id)}
                className={active ? `${styles.resource} ${styles.resourceActive}` : styles.resource}
                aria-pressed={active}
              >
                <span className={styles.resourceNumber}>{resource.number}</span>
                <span className={styles.resourceContent}>
                  <strong>{resource.title[language]}</strong>
                  <span>{resource.description[language]}</span>
                </span>
                <span className={styles.resourceAction}>{active ? copy.reader : copy.open}<ExternalLink aria-hidden="true" size={16} /></span>
              </button>
            );
          })}
        </div>
      </section>

      <section className={styles.readerSection} ref={readerRef} aria-label={`${copy.reader}: ${activeResource.title[language]}`}>
        <div className={styles.readerBar}>
          <button
            type="button"
            className={styles.documentMenuButton}
            aria-expanded={menuOpen}
            aria-controls="partner-document-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
            <span>{menuOpen ? copy.close : copy.menu}</span>
          </button>
          <p><span>{activeResource.number}</span> {activeResource.title[language]}</p>
          <span className={styles.readerLanguage}>{language === "en" ? "EN" : "TH"}</span>
        </div>

        {menuOpen && (
          <nav id="partner-document-menu" className={styles.documentMenu} aria-label={copy.menu}>
            {RESOURCES.map((resource) => (
              <button key={resource.id} type="button" onClick={() => selectResource(resource.id)}>
                <span>{resource.number}</span>{resource.title[language]}
              </button>
            ))}
          </nav>
        )}

        <iframe
          key={`${resourceId}-${language}`}
          ref={frameRef}
          src={activeResource.file[language]}
          title={`${activeResource.title[language]} — ${language === "en" ? "English" : "Thai"}`}
          onLoad={prepareFrame}
          className={styles.readerFrame}
        />
      </section>

      <aside className={styles.help}>
        <div>
          <p className={styles.sectionLabel}>{copy.contact}</p>
          <p>{copy.contactCopy}</p>
        </div>
        <a href={`mailto:${CONTACT.email}`}>{copy.contactAction}<ExternalLink aria-hidden="true" size={16} /></a>
      </aside>
    </main>
  );
}
