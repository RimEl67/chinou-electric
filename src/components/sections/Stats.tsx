import { motion } from "framer-motion";
import { ShieldCheck, Clock, Star, Wrench, Leaf, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  fr: {
    badge: "Pourquoi nous choisir",
    title: "Ce qui nous",
    titleHighlight: "distingue",
    benefits: [
      { icon: ShieldCheck, title: "Travaux Certifiés",     desc: "Installations NFC 15-100 garanties. Votre sécurité est notre priorité.", color: "#38bdf8", glow: "rgba(56,189,248,0.15)" },
      { icon: Clock,       title: "Intervention Rapide",   desc: "Sous 24h sur tout le Maroc. Urgence ou projet planifié, nous sommes là.", color: "#34d399", glow: "rgba(52,211,153,0.15)" },
      { icon: Star,        title: "Expertise Reconnue",    desc: "15 ans d'expérience, 500+ projets réalisés par une équipe certifiée.", color: "#fbbf24", glow: "rgba(251,191,36,0.15)" },
      { icon: Wrench,      title: "Matériel Premium",      desc: "Équipements de marques reconnues pour durabilité et performance.", color: "#38bdf8", glow: "rgba(56,189,248,0.15)" },
      { icon: Leaf,        title: "Solutions Écologiques", desc: "Spécialistes solaire et basse consommation pour réduire votre empreinte.", color: "#34d399", glow: "rgba(52,211,153,0.15)" },
      { icon: HeadphonesIcon, title: "Support 24/7",       desc: "Service client disponible en permanence. Même à minuit, nous répondons.", color: "#a78bfa", glow: "rgba(167,139,250,0.15)" },
    ]
  },
  ar: {
    badge: "لماذا تختارنا",
    title: "ما",
    titleHighlight: "يميزنا",
    benefits: [
      { icon: ShieldCheck, title: "أعمال معتمدة",     desc: "منشآت مضمونة ومطابقة للمعايير. سلامتك هي أولويتنا.", color: "#38bdf8", glow: "rgba(56,189,248,0.15)" },
      { icon: Clock,       title: "تدخل سريع",   desc: "خلال 24 ساعة في جميع أنحاء المغرب. في حالات الطوارئ أو المشاريع المخطط لها.", color: "#34d399", glow: "rgba(52,211,153,0.15)" },
      { icon: Star,        title: "خبرة معترف بها",    desc: "15 عامًا من الخبرة، 500+ مشروع تم إنجازه بواسطة فريق معتمد.", color: "#fbbf24", glow: "rgba(251,191,36,0.15)" },
      { icon: Wrench,      title: "معدات ممتازة",      desc: "أجهزة من علامات تجارية عالمية لضمان المتانة والأداء.", color: "#38bdf8", glow: "rgba(56,189,248,0.15)" },
      { icon: Leaf,        title: "حلول بيئية", desc: "متخصصون في الطاقة الشمسية والاستهلاك المنخفض لتقليل بصمتك الكربونية.", color: "#34d399", glow: "rgba(52,211,153,0.15)" },
      { icon: HeadphonesIcon, title: "دعم على مدار الساعة",       desc: "خدمة العملاء متاحة دائمًا. حتى في منتصف الليل، نحن هنا.", color: "#a78bfa", glow: "rgba(167,139,250,0.15)" },
    ]
  }
};

export function Stats() {
  const { lang, isAr } = useLanguage();
  const t = content[lang];

  return (
    <section className="relative overflow-hidden py-16" style={{ background: "#060d12" }} dir={isAr ? "rtl" : "ltr"}>
      <div className="absolute inset-0 z-0">
        <img src="/public/stats-bg.png" alt="" className="w-full h-full object-cover" style={{ opacity:0.18 }} />
      </div>
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(6,13,18,0.2) 0%, rgba(6,13,18,0.7) 100%)" }} />
      <div className="absolute top-0 left-0 right-0 h-16 z-[2] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #060d12, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-16 z-[2] pointer-events-none"
        style={{ background: "linear-gradient(to top, #060d12, transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color:"rgba(56,189,248,0.6)", fontFamily:"'JetBrains Mono',monospace" }}>
            {t.badge}
          </p>
          <h2 className="font-black text-white leading-tight"
            style={{ fontSize:"clamp(2rem,4vw,3rem)", fontFamily:"'Syne',sans-serif" }}>
            {t.title}{" "}
            <span style={{ backgroundImage:"linear-gradient(90deg,#38bdf8,#34d399)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              {t.titleHighlight}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.benefits.map((b, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.08, duration:0.6 }}
              whileHover={{ y:-4, transition:{ duration:0.2 } }}
              className="group relative rounded-2xl p-5 flex flex-col gap-3 cursor-default overflow-hidden"
              style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)", backdropFilter:"blur(12px)" }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.background=b.glow; el.style.borderColor=b.color+"40"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,0.03)"; el.style.borderColor="rgba(255,255,255,0.06)"; }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background:b.glow, border:`1px solid ${b.color}30` }}>
                <b.icon className="w-5 h-5" style={{ color:b.color }} />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1 text-sm" style={{ fontFamily:"'Syne',sans-serif" }}>{b.title}</h3>
                <p style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.4)", lineHeight:"1.6", fontFamily:"'Space Grotesk',sans-serif" }}>{b.desc}</p>
              </div>
              <div className={`absolute bottom-0 ${isAr ? "right-0" : "left-0"} h-px w-0 group-hover:w-full transition-all duration-500`}
                style={{ background:`linear-gradient(${isAr ? "270deg" : "90deg"},${b.color},transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}