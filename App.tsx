import React, { useState } from "react";
import {
  Mail,
  Calendar,
  Globe,
  Linkedin,
  Github,
  Download,
  Share2,
  QrCode,
  X,
  Languages,
  Wallet,
  Lightbulb,
  ShoppingBag,
  Code,
  TrendingUp,
  Headphones,
  Cpu,
  CheckCircle,
  Twitter,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { DATA, T } from "./constants";
import { ActionButton } from "./components/ActionButton";
import { SocialIcon } from "./components/SocialIcon";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { CalEmbed } from "./components/CalEmbed";
import { Language } from "./types";

const App = () => {
  const [lang, setLang] = useState<Language>("fr");
  const [showQR, setShowQR] = useState(false);
  const [showCal, setShowCal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: DATA.name,
          text: `${DATA.title[lang]} - ${DATA.company}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
        setShowQR(true);
      }
    } else {
      setShowQR(true);
    }
  };

  const downloadVCard = () => {
    const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:${DATA.name}
N:Gouaho;Déto Jean-Luc;;;
ORG:${DATA.company}
TITLE:${DATA.title[lang]}
EMAIL;type=INTERNET;type=WORK:${DATA.email}
TEL;type=CELL:${DATA.phone}
URL:${DATA.website}
ADR;type=WORK:;;;Granby;QC;;Canada
NOTE:Services: ${DATA.stack.join(", ")}
END:VCARD`;

    const blob = new Blob([vCardContent], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "JL_Digital_Contact.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleGoogleWallet = async () => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(
      window.location.href
    )}&color=000000&bgcolor=ffffff&format=png&margin=20`;

    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "JL-Digital-Wallet-QR.png";
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);

      setTimeout(() => {
        alert(T[lang].walletAlert);
      }, 500);
    } catch (error) {
      console.error("Error downloading QR", error);
      window.open(qrUrl, "_blank");
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe size={24} />;
      case "ShoppingBag":
        return <ShoppingBag size={24} />;
      case "Code":
        return <Code size={24} />;
      case "TrendingUp":
        return <TrendingUp size={24} />;
      case "Headphones":
        return <Headphones size={24} />;
      case "Cpu":
        return <Cpu size={24} />;
      default:
        return <Lightbulb size={24} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 font-sans relative selection:bg-indigo-100 selection:text-indigo-900">
      <div className="fixed inset-0 animated-bg z-0 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-12 relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* --- LEFT COLUMN: PROFILE CARD (Fixed on scroll for Desktop) --- */}
        <aside className="w-full lg:w-[400px] shrink-0 lg:sticky lg:top-8 self-start h-fit">
          <div className="glass-card rounded-[2.5rem] p-6 pb-8 overflow-hidden transition-all duration-300">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setLang((l) => (l === "fr" ? "en" : "fr"))}
                aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
                title={lang === "fr" ? "Switch to English" : "Passer en français"}
                className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-full shadow-sm border border-white text-xs font-bold text-slate-600 flex items-center gap-1.5 hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                <Languages size={14} aria-hidden="true" /> {lang.toUpperCase()}
              </button>
              <button
                onClick={handleShare}
                aria-label={T[lang].share}
                title={T[lang].share}
                className="bg-white/60 backdrop-blur-md p-2 rounded-full shadow-sm border border-white text-slate-600 hover:text-indigo-600 hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                <Share2 size={18} aria-hidden="true" />
              </button>
            </div>

            {/* Status Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-1.5 rounded-full shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-bold text-emerald-700 tracking-wide uppercase">
                  {T[lang].openToWork}
                </span>
              </div>
            </div>

            {/* Identity */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-5">
                <div className="w-32 h-32 rounded-full shadow-2xl border-[6px] border-white mx-auto overflow-hidden bg-slate-100">
                  <img
                    src={DATA.avatar}
                    alt={`${DATA.name} — ${DATA.title[lang]}`}
                    width={128}
                    height={128}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-lg" aria-hidden="true">
                  <Lightbulb size={20} className="text-indigo-600" />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-slate-900 leading-tight mb-2">
                {DATA.name}
              </h1>
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
                {DATA.company}
              </p>
              <p className="text-slate-500 text-sm font-medium">
                {DATA.title[lang]}
              </p>
            </div>

            {/* Tech Stack (Tags) */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-2">
                {DATA.stack.slice(0, 6).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-100/50 text-slate-600 rounded-lg text-[11px] font-semibold border border-slate-200/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Actions */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => (window.location.href = `mailto:${DATA.email}`)}
                className="bg-slate-900 hover:bg-slate-800 text-white py-4 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-slate-900/10 group">
                <Mail
                  size={18}
                  className="group-hover:-translate-y-0.5 transition-transform"
                />
                <span className="text-sm font-bold">{T[lang].contact}</span>
              </button>
              <button
                onClick={() => setShowCal(true)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white py-4 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-indigo-600/20 group">
                <Calendar
                  size={18}
                  className="group-hover:-translate-y-0.5 transition-transform"
                />
                <span className="text-sm font-bold">{T[lang].book}</span>
              </button>
            </div>

            {/* Secondary Actions */}
            <div className="space-y-3 mb-8">
              <ActionButton
                onClick={downloadVCard}
                icon={<Download size={18} />}
                text={T[lang].save}
                subtext=".vcf"
              />
              <ActionButton
                onClick={() =>
                  window.open(DATA.website, "_blank", "noopener,noreferrer")
                }
                icon={<Globe size={18} />}
                text={T[lang].portfolio}
                subtext={DATA.website}
                highlight
              />
            </div>

            {/* Social Footer */}
            <div className="pt-6 border-t border-slate-200/50 flex justify-center gap-6" role="list" aria-label="Réseaux sociaux">
              <SocialIcon href={DATA.linkedin} icon={<Linkedin size={22} />} label="LinkedIn" />
              <SocialIcon href={DATA.github} icon={<Github size={22} />} label="GitHub" />
              <SocialIcon href={DATA.x} icon={<Twitter size={22} />} label="X (Twitter)" />
              <SocialIcon
                href={DATA.whatsapp}
                icon={<WhatsAppIcon size={22} />}
                label="WhatsApp"
              />
              <button
                onClick={() => setShowQR(true)}
                aria-label={T[lang].scan}
                title={T[lang].scan}
                className="text-slate-400 hover:text-indigo-600 transition-colors p-2 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full">
                <QrCode size={22} aria-hidden="true" />
              </button>
            </div>

            {/* Trust Badge — NEQ (Quebec registered business) */}
            <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck size={14} className="text-emerald-600" aria-hidden="true" />
              <span>{T[lang].trustNeq} · NEQ {DATA.neq}</span>
            </div>
          </div>
        </aside>

        {/* --- RIGHT COLUMN: DETAILED CONTENT --- */}
        <main id="main-content" className="flex-1 w-full space-y-12 lg:space-y-20 lg:pt-8 pb-12">
          {/* About Section */}
          <section className="bg-white/40 backdrop-blur-sm rounded-[2rem] p-6 md:p-10 border border-white shadow-sm" aria-labelledby="about-heading">
            <h2 id="about-heading" className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <span className="bg-indigo-100 text-indigo-600 p-2 rounded-xl" aria-hidden="true">
                <Lightbulb size={24} />
              </span>
              {T[lang].about}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {DATA.about[lang]}
            </p>
          </section>

          {/* Stats — social proof + authority signals for AI citation */}
          <section aria-labelledby="stats-heading">
            <h2 id="stats-heading" className="sr-only">{T[lang].stats}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {DATA.stats[lang].map((s, i) => (
                <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-white text-center shadow-sm">
                  <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 leading-none mb-1">{s.value}</div>
                  <div className="text-xs md:text-sm text-slate-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us (Stats/Features) */}
          <section aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-2xl font-bold text-slate-800 mb-8 ml-4">
              {T[lang].whyUs}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {DATA.whyChooseUs[lang].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/60 p-6 rounded-3xl border border-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-600 mb-4" aria-hidden="true">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Expertise — entity-rich, citation-friendly block for AI engines */}
          <section aria-labelledby="expertise-heading">
            <h2 id="expertise-heading" className="text-2xl font-bold text-slate-800 mb-8 ml-4 flex items-center gap-3">
              <Sparkles size={22} className="text-indigo-600" aria-hidden="true" />
              {T[lang].expertise}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DATA.expertise[lang].map((group, i) => (
                <div key={i} className="bg-white/60 p-6 rounded-3xl border border-white shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-3">{group.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((it, j) => (
                      <li key={j} className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-2xl font-bold text-slate-800 mb-8 ml-4">
              {T[lang].services}
            </h2>
            <div className="space-y-4">
              {DATA.services[lang].map((service, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-[2rem] p-6 md:p-8 border border-white shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6 md:items-start">
                    <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(service.icon || "Code")}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {service.desc}
                      </p>

                      {service.features && (
                        <div className="flex flex-wrap gap-3 mt-4">
                          {service.features.map((feat, j) => (
                            <span
                              key={j}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 text-slate-600 text-xs font-bold border border-slate-100">
                              <CheckCircle
                                size={12}
                                className="text-emerald-500"
                              />
                              {feat}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="bg-slate-900 text-slate-100 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative" aria-labelledby="process-heading">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-20 pointer-events-none" aria-hidden="true"></div>

            <h2 id="process-heading" className="text-2xl font-bold text-white mb-10 relative z-10">
              {T[lang].ourProcess}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {DATA.process[lang].map((step, i) => (
                <div
                  key={i}
                  className="relative pl-8 border-l-2 border-slate-700">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-slate-900"></span>
                  <span className="text-indigo-400 font-mono text-xs font-bold tracking-widest mb-1 block">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-lg text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="text-2xl font-bold text-slate-800 mb-8 ml-4">
              {T[lang].testimonials}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DATA.testimonials[lang].map((t, i) => (
                <figure
                  key={i}
                  className="bg-white/50 p-6 rounded-3xl border border-white/60">
                  <div className="flex gap-1 text-amber-400 mb-3" aria-label="5 étoiles sur 5">
                    {[...Array(5)].map((_, k) => (
                      <span key={k} aria-hidden="true">★</span>
                    ))}
                  </div>
                  <blockquote className="text-slate-700 italic mb-4 text-sm leading-relaxed">
                    "{t.text}"
                  </blockquote>
                  <figcaption>
                    <div className="font-bold text-slate-900 text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {t.role}, {t.company}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* FAQ — visible section mirroring FAQPage JSON-LD for rich results & AI citation */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-slate-800 mb-8 ml-4 flex items-center gap-3">
              <HelpCircle size={22} className="text-indigo-600" aria-hidden="true" />
              {T[lang].faq}
            </h2>
            <div className="space-y-3">
              {DATA.faq[lang].map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="bg-white/70 rounded-2xl border border-white shadow-sm overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      className="w-full text-left flex items-center justify-between gap-4 p-5 font-semibold text-slate-800 hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                      <span>{item.q}</span>
                      <ChevronDown
                        size={20}
                        className={`text-slate-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      hidden={!isOpen}
                      className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
                      {item.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Final CTA */}
          <div className="text-center py-12">
            <button
              onClick={() => setShowCal(true)}
              aria-label={T[lang].book}
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-bold py-5 px-10 rounded-full shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300">
              {T[lang].book}
            </button>
            <p className="mt-4 text-slate-500 text-sm">
              {T[lang].rights} © {new Date().getFullYear()} {DATA.company} · NEQ {DATA.neq}
            </p>
          </div>
        </main>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="qr-title"
          onClick={(e) => { if (e.target === e.currentTarget) setShowQR(false); }}
          onKeyDown={(e) => { if (e.key === "Escape") setShowQR(false); }}>
          <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-xs relative text-center">
            <button
              onClick={() => setShowQR(false)}
              aria-label={T[lang].close}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded">
              <X size={24} aria-hidden="true" />
            </button>

            <div className="mb-4 mt-2">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-indigo-600 mb-3">
                <QrCode size={24} />
              </div>
              <h3 id="qr-title" className="font-bold text-slate-800 text-lg">
                {T[lang].scan}
              </h3>
              <p className="text-xs text-slate-500 mt-1">{DATA.name}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl inline-block mb-4 border border-slate-100">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
                  window.location.href
                )}&color=1e293b&bgcolor=f8fafc`}
                alt="QR Code"
                className="w-48 h-48 mix-blend-multiply"
                loading="lazy"
              />
            </div>

            <button
              onClick={() => setShowQR(false)}
              className="w-full py-3 rounded-xl bg-slate-100 text-slate-600 font-semibold text-sm hover:bg-slate-200 transition-colors">
              {T[lang].close}
            </button>
          </div>
        </div>
      )}

      {/* Cal.com Embed Modal */}
      <CalEmbed isOpen={showCal} onClose={() => setShowCal(false)} />
    </div>
  );
};

export default App;
