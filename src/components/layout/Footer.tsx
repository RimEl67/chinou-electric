import { Phone, Mail, MapPin, Zap } from "lucide-react";
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
                { icon: Phone, text: "+212 633 834 711", href: "tel:+212633834711" },
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