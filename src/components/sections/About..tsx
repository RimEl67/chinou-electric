import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.ceil(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return { count, ref };
}

function SplitReveal({ text, gradient, isAr }: { text: string; gradient?: boolean; isAr?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="font-black leading-tight"
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "clamp(2.8rem,5vw,4.5rem)",
          textAlign: isAr ? "right" : "left",
          ...(gradient ? {
            backgroundImage: "linear-gradient(90deg,#0ea5e9,#10b981)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
          } : { color: "#0a0f1e" })
        }}>
        {text}
      </motion.div>
    </div>
  );
}

export function About() {
  const { t, isAr } = useLanguage();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const features = t("about.features") as unknown as string[];

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-[#f8fafc]" dir={isAr ? "rtl" : "ltr"}>
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: "linear-gradient(rgba(14,165,233,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div ref={sectionRef}
          initial={{ opacity: 0, x: isAr ? 20 : -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12">
          <div className={`h-px w-10 ${isAr ? "rotate-180" : ""}`} style={{ background: "linear-gradient(90deg,#0ea5e9,transparent)" }} />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase"
            style={{ color: "#0ea5e9", fontFamily: "'JetBrains Mono',monospace" }}>{t("about.badge")}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <div className={isAr ? "order-1 lg:order-2" : "order-1"}>
            <div className="mb-8">
              <SplitReveal text={t("about.titlePart1")} isAr={isAr} />
              <SplitReveal text={t("about.titlePart2")} gradient isAr={isAr} />
            </div>

            <motion.div
              initial={{ scaleX: 0, originX: isAr ? 1 : 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="h-px mb-8 w-full"
              style={{ background: `linear-gradient(${isAr ? "270deg" : "90deg"},#0ea5e9,#10b981,transparent)` }} />

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-base leading-relaxed mb-4 text-gray-500 max-w-lg"
              style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
              {t("about.p1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-base leading-relaxed mb-10 text-gray-500 max-w-lg"
              style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
              {t("about.p2")}
            </motion.p>

            <div className="space-y-3 mb-10">
              {Array.isArray(features) && features.map((f, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: isAr ? 16 : -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.5 }}
                  className="flex items-center gap-3 group cursor-default">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: "linear-gradient(135deg,#0ea5e9,#10b981)" }}>
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors"
                    style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{f}</span>
                </motion.div>
              ))}
            </div>

            <motion.a href="/about"
              initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white cursor-none"
              style={{ background: "linear-gradient(135deg,#0ea5e9,#0284c7)", boxShadow: "0 0 24px rgba(14,165,233,0.25)" }}>
              {t("about.cta")} <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: isAr ? -50 : 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={isAr ? "order-2 lg:order-1 relative" : "order-2 relative"}>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "4/3.2", border: "1px solid #f0f0f0" }}>
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=85&auto=format&fit=crop"
                alt="Électricien professionnel"
                className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${isAr ? "scale-x-[-1]" : ""}`}
                onError={e => { (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1581094480379-edf78544b3e4?w=900&q=85"; }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)" }} />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -bottom-10 ${isAr ? "-left-4" : "-right-4"} w-[42%] rounded-2xl overflow-hidden shadow-2xl`}
              style={{ border: "3px solid white", aspectRatio: "1" }}>
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=85&auto=format&fit=crop"
                alt="Énergie solaire"
                className="w-full h-full object-cover"
                onError={e => { (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1509391366360-12f5a6b0c2a2?w=600&q=85"; }}
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className={`absolute -top-5 ${isAr ? "-right-4" : "-left-4"} rounded-2xl px-4 py-3 bg-white shadow-xl`}
              style={{ border: "1.5px solid #e0f2fe" }}>
              <div className="text-xl font-black leading-none" style={{ fontFamily: "'Syne',sans-serif", color: "#0ea5e9" }}>NFC</div>
              <div className="text-[10px] text-gray-400 mt-0.5 font-medium">{isAr ? "معتمد" : "15-100 Certifié"}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}