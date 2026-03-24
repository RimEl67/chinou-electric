/// <reference types="vite/client" />
import { motion } from "framer-motion";
import { Sun, Leaf, BatteryCharging } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  fr: {
    badge: "TRANSITION ÉNERGÉTIQUE",
    title: "Passez à l'énergie solaire,",
    titleHighlight: "réduisez vos factures.",
    desc: "Investissez dans l'avenir avec nos installations photovoltaïques de pointe. Gagnez en indépendance énergétique tout en contribuant à la préservation de l'environnement.",
    card1Title: "Rendement Optimal",
    card1Desc: "Panneaux haute technologie pour un maximum d'énergie captée.",
    card2Title: "Autonomie Totale",
    card2Desc: "Solutions de stockage pour utiliser votre énergie jour et nuit.",
    cta: "Étude de faisabilité gratuite",
  },
  ar: {
    badge: "الانتقال الطاقي",
    title: "انتقل إلى الطاقة الشمسية،",
    titleHighlight: "وخفّض فواتيرك.",
    desc: "استثمر في المستقبل مع منشآتنا الكهروضوئية المتطورة. احصل على استقلاليتك الطاقية مع المساهمة في حماية البيئة.",
    card1Title: "كفاءة مثالية",
    card1Desc: "ألواح عالية التقنية لالتقاط أقصى قدر من الطاقة.",
    card2Title: "استقلالية تامة",
    card2Desc: "حلول تخزين لاستخدام طاقتك ليلاً ونهاراً.",
    cta: "دراسة جدوى مجانية",
  }
};

export function SolarHighlight() {
  const { lang, isAr } = useLanguage();
  const t = content[lang];

  return (
    <section id="solar" className="py-24 relative bg-[#f8fafc] overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 md:p-16 rounded-[3rem] bg-white shadow-2xl border border-accent/20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold mb-6"
            >
              <Leaf className="w-5 h-5 fill-accent" />
              <span>{t.badge}</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black mb-6 text-foreground leading-tight"
            >
              {t.title} <br/>
              <span className="text-accent">{t.titleHighlight}</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 font-medium leading-relaxed"
            >
              {t.desc}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-6 mb-10"
            >
              <div className="bg-[#f0f9e8] p-6 rounded-2xl border border-accent/10">
                <div className="w-12 h-12 bg-accent text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-accent/30">
                  <Sun className="w-6 h-6" />
                </div>
                <h4 className="text-foreground font-bold text-lg mb-2">{t.card1Title}</h4>
                <p className="text-sm font-medium text-muted-foreground">{t.card1Desc}</p>
              </div>
              <div className="bg-[#f0f9e8] p-6 rounded-2xl border border-accent/10">
                <div className="w-12 h-12 bg-accent text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-accent/30">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <h4 className="text-foreground font-bold text-lg mb-2">{t.card2Title}</h4>
                <p className="text-sm font-medium text-muted-foreground">{t.card2Desc}</p>
              </div>
            </motion.div>
            
            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              href="#contact"
              className="inline-block px-8 py-4 rounded-full bg-accent text-white font-bold text-lg hover:bg-accent/90 transition-colors shadow-[0_10px_30px_rgba(98,177,47,0.3)] hover:shadow-[0_15px_40px_rgba(98,177,47,0.4)] hover:-translate-y-1"
            >
              {t.cta}
            </motion.a>
          </div>

          <div className="md:w-1/2 w-full h-[400px] md:h-auto md:absolute md:top-0 md:right-0 md:bottom-0">
            <div className={`w-full h-full relative rounded-3xl md:rounded-none overflow-hidden mask-image md:mask-image-none ${isAr ? "rotate-y-180" : ""}`} style={{ WebkitMaskImage: isAr ? 'linear-gradient(to left, transparent, black 20%)' : 'linear-gradient(to right, transparent, black 20%)'}}>
              <img 
                src={`${import.meta.env.BASE_URL}images/solar-panel.png`}
                alt="Installation panneaux solaires" 
                className={`w-full h-full object-cover ${isAr ? "scale-x-[-1]" : ""}`}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1509391366360-12f5a6b0c2a2?q=80&w=2070&auto=format&fit=crop";
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${isAr ? "from-transparent to-white" : "from-white via-white/50 to-transparent"} hidden md:block`} />
            </div>
          </div>
          
        </div>
      </div>

      {/* Decorative separator dot */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-8 h-8 rounded-full border border-sky-200 bg-[#f8fafc] flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
      </div>
    </section>
  );
}