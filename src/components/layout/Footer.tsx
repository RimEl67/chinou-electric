import { Phone, Mail, MapPin, Zap, Instagram, Facebook, PlayCircle as Tiktok } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t, isAr } = useLanguage();

  return (
    <footer className="relative overflow-hidden" style={{ background: "#040910", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(30,114,184,0.5), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8" dir={isAr ? "rtl" : "ltr"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/logo.png" alt="Chinou Electric" className="h-12 w-auto brightness-200 mb-5 object-contain" />
            <p className="text-white/30 text-sm font-medium leading-relaxed mb-6">
              {t("footer.desc")}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61564944287970" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="group flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 shadow-lg"
                 title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/chinouelectric?igsh=MWJxazY5Zmh5Y3Rhcw==" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="group flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all duration-300 shadow-lg"
                 title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@chinou.electric?_r=1&_t=ZS-94Sg6z9eBi4" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="group flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-black hover:border-white/20 transition-all duration-300 shadow-lg"
                 title="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.3-.41.25-.79.58-1.03 1-.38.74-.43 1.61-.21 2.41.22.81.79 1.52 1.51 1.9 1.05.55 2.45.56 3.48-.01.67-.38 1.02-1.18 1.08-1.96.03-3.65.01-7.3.03-10.95Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/50 font-bold mb-5 text-xs tracking-widest uppercase">{t("nav.services")}</h4>
            <ul className="space-y-3">
              {[t("services.items.install.title"), t("services.items.batiment.title") || "Électricité Bâtiment", t("services.items.plumbing.title"), t("services.items.solar.title")].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/35 font-medium hover:text-blue-400 transition-colors text-sm">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/50 font-bold mb-5 text-xs tracking-widest uppercase">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {[[t("nav.home"), "#home"], [t("nav.about"), "#about"], [t("services.items.solar.title"), "#solar"], [t("nav.contact"), "#contact"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-white/35 font-medium hover:text-white transition-colors text-sm">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/50 font-bold mb-5 text-xs tracking-widest uppercase">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: "+212 6 55 31 04 04", href: "tel:+212655310404" },
                { icon: Mail, text: "contact@chinouelectric.com", href: "mailto:contact@chinouelectric.com" },
                { icon: MapPin, text: t("contact.zoneValue"), href: undefined },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <item.icon className={`w-4 h-4 text-blue-400 shrink-0 mt-0.5 ${isAr ? "ml-3" : "mr-3"}`} />
                  {item.href ? (
                    <a href={item.href} className="text-white/35 font-medium hover:text-white transition-colors text-sm break-all">{item.text}</a>
                  ) : (
                    <span className="text-white/35 font-medium text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 pt-8 ${isAr ? "md:flex-row-reverse" : ""}`}
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-white/20 text-xs font-medium">
            © {new Date().getFullYear()} Chinou Electric — {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 hover:text-white/50 text-xs font-medium transition-colors">Mentions Légales</a>
            <a href="#" className="text-white/20 hover:text-white/50 text-xs font-medium transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}