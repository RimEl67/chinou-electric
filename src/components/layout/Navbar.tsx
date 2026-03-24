import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const { lang, setLang, t, isAr } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      dir={isAr ? "rtl" : "ltr"}
    >
      <motion.div
        animate={{
          background: isScrolled ? "rgba(6,10,20,0.85)" : "rgba(6,10,20,0)",
          backdropFilter: isScrolled ? "blur(24px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0"
      />

      <motion.div
        animate={{ scaleX: isScrolled ? 1 : 0, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #0ea5e9 30%, #10b981 70%, transparent 100%)",
        }}
      />

      <div
        className="relative max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between"
        style={{
          paddingTop: isScrolled ? "10px" : "18px",
          paddingBottom: isScrolled ? "10px" : "18px",
          transition: "padding 0.4s",
        }}
      >
        <a href="#home" className="shrink-0 group">
          <motion.img
            src="/logo.png"
            alt="Chinou Electric"
            animate={{ height: isScrolled ? "56px" : "72px" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-auto object-contain"
            style={{
              filter: "brightness(2) drop-shadow(0 0 12px rgba(14,165,233,0.5))",
              transition: "filter 0.3s",
            }}
          />
        </a>

        <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className="relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group"
              style={{
                color: activeLink === link.href ? "#38bdf8" : "rgba(255,255,255,0.5)",
              }}
            >
              <span
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(14,165,233,0.06)" }}
              />
              <span className="relative">{link.name}</span>
              {activeLink === link.href && (
                <motion.div
                  layoutId="navDot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ background: "#38bdf8", boxShadow: "0 0 6px #38bdf8" }}
                />
              )}
            </a>
          ))}
        </div>

        <div className={`hidden md:flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          {/* ONLY changed this part: language toggle */}
          <div
            className="flex items-center rounded-full p-1"
            style={{
              border: "1px solid rgba(14,165,233,0.25)",
              background: "rgba(14,165,233,0.06)",
              backdropFilter: "blur(12px)",
            }}
          >
            <button
              onClick={() => setLang("fr")}
              className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300"
              style={{
                background: lang === "fr" ? "#0ea5e9" : "transparent",
                color: lang === "fr" ? "#ffffff" : "rgba(255,255,255,0.55)",
                boxShadow:
                  lang === "fr" ? "0 0 14px rgba(14,165,233,0.35)" : "none",
              }}
            >
              FR
            </button>

            <button
              onClick={() => setLang("ar")}
              className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300"
              style={{
                background: lang === "ar" ? "#0ea5e9" : "transparent",
                color: lang === "ar" ? "#ffffff" : "rgba(255,255,255,0.55)",
                boxShadow:
                  lang === "ar" ? "0 0 14px rgba(14,165,233,0.35)" : "none",
              }}
            >
              AR
            </button>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`btn-shimmer flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white ${isAr ? "flex-row-reverse" : ""
              }`}
            style={{
              background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
              boxShadow:
                "0 0 20px rgba(14,165,233,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            <Phone className="w-3.5 h-3.5" />
            {t("nav.cta")}
          </motion.a>
        </div>

        <div className={`md:hidden flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <div
            className="flex items-center rounded-full p-1"
            style={{
              border: "1px solid rgba(14,165,233,0.2)",
              background: "rgba(14,165,233,0.06)",
            }}
          >
            <button
              onClick={() => setLang("fr")}
              className="px-3 py-1 rounded-full text-xs font-bold transition-all duration-300"
              style={{
                background: lang === "fr" ? "#0ea5e9" : "transparent",
                color: lang === "fr" ? "#ffffff" : "rgba(255,255,255,0.55)",
              }}
            >
              FR
            </button>

            <button
              onClick={() => setLang("ar")}
              className="px-3 py-1 rounded-full text-xs font-bold transition-all duration-300"
              style={{
                background: lang === "ar" ? "#0ea5e9" : "transparent",
                color: lang === "ar" ? "#ffffff" : "rgba(255,255,255,0.55)",
              }}
            >
              AR
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 cursor-pointer"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 p-4 flex flex-col gap-1 md:hidden"
              style={{
                background: "rgba(6,10,20,0.97)",
                backdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(14,165,233,0.1)",
              }}
              dir={isAr ? "rtl" : "ltr"}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${isAr ? "text-right" : ""
                    }`}
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 mt-2 text-sm font-bold text-white rounded-xl"
                style={{ background: "linear-gradient(135deg, #0ea5e9, #0284c7)" }}
              >
                <Phone className="w-4 h-4" /> {t("nav.cta")}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}