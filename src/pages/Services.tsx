import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ArrowUpRight, Zap, Building2, Droplets, Sun, ArrowRight, ChevronDown } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const IMG = {
  electricInstall: "https://i0.wp.com/adnanielectric.ma/wp-content/uploads/2021/03/installation-electrique.jpg?resize=848%2C450&ssl=1",
  electricRepair: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=85&auto=format&fit=crop",
  panel: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&auto=format&fit=crop",
  miseSecurity: "https://blog.izi-by-edf.fr/2022/06/tableau-electrique-768x512.jpg",
  lightingPro: "https://images.prismic.io/travauxlib/aH-N8FGsbswqTIZJ_hemea_59171_Faade_de_maison_moderne_avec_appliques_murales_ex_4f1ecee1-e8dd-4b45-a3c0-d3bb2575214f_3.png?auto=format,compress",
  maintenance: "https://images.unsplash.com/photo-1581094480379-edf78544b3e4?w=800&q=85&auto=format&fit=crop",
  building: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85&auto=format&fit=crop",
  normsCompliance: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=85&auto=format&fit=crop",
  plumbing: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=85&auto=format&fit=crop",
  plumbing2: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=85&auto=format&fit=crop",
  solarResidential: "https://images.unsplash.com/photo-1509391366360-12f5a6b0c2a2?w=800&q=85&auto=format&fit=crop",
  solar2: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=85&auto=format&fit=crop",
  solarBattery: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=85&auto=format&fit=crop",
};

const pageContent = {
  fr: {
    eyebrow: "Nos solutions techniques",
    heroTitle1: "Nos Solutions",
    heroTitle2: "Techniques.",
    heroDesc: "De l'installation électrique sécurisée aux panneaux solaires et plomberie, nous couvrons l'ensemble de vos besoins techniques avec expertise et précision au Maroc.",
    heroBtn: "Explorer nos métiers",
    askQuote: "Demander un devis",
    processEyebrow: "Notre rigueur",
    processTitle1: "Comment nous",
    processTitle2: "travaillons.",
    processQuote: "\"On ne quitte pas le chantier tant que vous n'êtes pas 100% satisfait.\"",
    ctaTitle1: "Besoin d'une intervention",
    ctaTitle2: "fiable ?",
    ctaSubtitle: "Contactez-nous pour un devis gratuit. Réponse garantie sous 24h.",
    ctaBtn: "Demander un devis",
    categories: [
      {
        id: "electricite", icon: Zap, label: "Électricité Générale",
        tagline: "L'énergie sous haute précision",
        desc: "Des installations certifiées alliant performance énergétique et sécurité absolue, conformes aux normes NFC 15-100.",
        color: "#38bdf8", bg: "rgba(56,189,248,0.08)", num: "01",
        services: [
          { num: "01", tag: "Neuf & Rénovation", title: "Installations Électriques", desc: "Réalisation complète de réseaux électriques fiables pour habitations, villas et locaux professionnels.", img: IMG.electricInstall },
          { num: "02", tag: "Intervention Rapide", title: "Dépannage Électrique", desc: "Recherche de panne précise et réparations efficaces pour rétablir votre installation en toute sécurité.", img: IMG.electricRepair },
          { num: "03", tag: "Normes & Protection", title: "Mise en Sécurité", desc: "Vérification, correction et sécurisation des installations pour prévenir tout risque électrique.", img: IMG.miseSecurity },
          { num: "04", tag: "Distribution", title: "Tableaux Électriques", desc: "Installation et modernisation de tableaux avec disjoncteurs et protections différentielles adaptées.", img: IMG.panel },
          { num: "05", tag: "Intérieur & Extérieur", title: "Éclairage Professionnel", desc: "Mise en place de solutions d'éclairage LED fonctionnelles et esthétiques pour valoriser vos espaces.", img: IMG.lightingPro },
          { num: "06", tag: "Suivi & Fiabilité", title: "Maintenance Préventive", desc: "Entretien régulier des installations électriques pour garantir performance, durabilité et tranquillité.", img: IMG.maintenance },
        ],
      },
      {
        id: "batiment", icon: Building2, label: "Électricité Bâtiment",
        tagline: "Infrastructures industrielles",
        desc: "Conception et réalisation d'infrastructures électriques pour grands bâtiments, sites industriels et complexes commerciaux.",
        color: "#818cf8", bg: "rgba(129,140,248,0.08)", num: "02",
        services: [
          { num: "01", tag: "Grande Échelle", title: "Câblage Industriel", desc: "Conception et installation de réseaux de câblage haute tension pour bâtiments industriels et tertiaires.", img: IMG.building },
          { num: "02", tag: "Sécurité & Contrôle", title: "Armoires Électriques", desc: "Fabrication sur mesure et installation d'armoires de distribution et de contrôle-commande.", img: IMG.panel },
          { num: "03", tag: "Performance", title: "Optimisation Énergétique", desc: "Audit et amélioration de l'efficacité énergétique de vos bâtiments pour réduire les coûts.", img: IMG.electricInstall },
          { num: "04", tag: "Conformité", title: "Mise aux Normes", desc: "Mise en conformité des installations existantes selon les dernières réglementations en vigueur.", img: IMG.normsCompliance },
        ],
      },
      {
        id: "plomberie", icon: Droplets, label: "Plomberie",
        tagline: "Installations & rénovations",
        desc: "Installation, rénovation et maintenance complète de tous vos systèmes de plomberie avec intervention rapide sur tout le Maroc.",
        color: "#22d3ee", bg: "rgba(34,211,238,0.08)", num: "03",
        services: [
          { num: "01", tag: "Neuf & Rénovation", title: "Installation Complète", desc: "Pose de réseaux d'eau froide et chaude, évacuations et appareils sanitaires pour tous types de bâtiments.", img: IMG.plumbing },
          { num: "02", tag: "Urgence 24h", title: "Dépannage Fuites", desc: "Détection et réparation rapide de fuites, débouchage et remise en état de vos canalisations.", img: IMG.plumbing2 },
          { num: "03", tag: "Confort", title: "Chauffe-eau & Ballons", desc: "Installation et maintenance de chauffe-eau solaires, électriques et à gaz pour un confort optimal.", img: IMG.plumbing },
          { num: "04", tag: "Hygiène", title: "Sanitaires & Salle de Bain", desc: "Rénovation complète de salles de bain, pose de carrelage et installation d'équipements sanitaires.", img: IMG.plumbing2 },
        ],
      },
      {
        id: "solaire", icon: Sun, label: "Panneaux Solaires",
        tagline: "Énergie verte & autonomie",
        desc: "Installation experte de systèmes photovoltaïques haute performance pour particuliers et entreprises. Réduisez vos factures jusqu'à 70%.",
        color: "#34d399", bg: "rgba(52,211,153,0.08)", num: "04",
        services: [
          { num: "01", tag: "Résidentiel", title: "Solaire Résidentiel", desc: "Installation de panneaux photovoltaïques pour maisons et villas avec étude d'optimisation personnalisée.", img: IMG.solarResidential },
          { num: "02", tag: "Professionnel", title: "Solaire Industriel", desc: "Solutions photovoltaïques grande échelle pour entreprises, usines et bâtiments commerciaux.", img: IMG.solar2 },
          { num: "03", tag: "Stockage", title: "Batteries & Stockage", desc: "Systèmes de batteries lithium pour stocker l'énergie solaire et l'utiliser jour et nuit.", img: IMG.solarBattery },
          { num: "04", tag: "Maintenance", title: "Entretien Solaire", desc: "Nettoyage, diagnostic et maintenance préventive pour garantir le rendement maximal de vos panneaux.", img: IMG.maintenance },
        ],
      },
    ],
    process: [
      { num: "01", title: "Étude & Diagnostic", desc: "Analyse complète de votre installation pour identifier précisément les besoins et contraintes." },
      { num: "02", title: "Conseil & Devis", desc: "Présentation claire des solutions avec un devis détaillé, sans surprise et adapté à votre budget." },
      { num: "03", title: "Réalisation Professionnelle", desc: "Travaux avec équipements certifiés, dans le respect des normes de sécurité et délais convenus." },
      { num: "04", title: "Contrôle & Garantie", desc: "Vérification complète et validation finale pour garantir performance, sécurité et satisfaction." },
    ],
  },
  ar: {
    eyebrow: "حلولنا التقنية",
    heroTitle1: "حلولنا",
    heroTitle2: "التقنية.",
    heroDesc: "من التركيبات الكهربائية الآمنة إلى الألواح الشمسية والسباكة، نغطي جميع احتياجاتكم التقنية بخبرة ودقة في المغرب.",
    heroBtn: "استكشف مجالاتنا",
    askQuote: "طلب عرض سعر",
    processEyebrow: "صرامتنا",
    processTitle1: "كيف",
    processTitle2: "نعمل.",
    processQuote: "\"لا نغادر الموقع حتى تكونوا راضين 100%.\"",
    ctaTitle1: "بحاجة إلى تدخل",
    ctaTitle2: "موثوق؟",
    ctaSubtitle: "تواصل معنا للحصول على عرض سعر مجاني. رد مضمون خلال 24 ساعة.",
    ctaBtn: "طلب عرض سعر",
    categories: [
      {
        id: "electricite", icon: Zap, label: "الكهرباء العامة",
        tagline: "الطاقة بدقة عالية",
        desc: "تركيبات معتمدة تجمع بين الكفاءة الطاقوية والسلامة المطلقة، مطابقة للمعايير.",
        color: "#38bdf8", bg: "rgba(56,189,248,0.08)", num: "01",
        services: [
          { num: "01", tag: "جديد وتجديد", title: "التركيبات الكهربائية", desc: "إنجاز شامل لشبكات كهربائية موثوقة للمنازل والفلل والمحلات التجارية.", img: IMG.electricInstall },
          { num: "02", tag: "تدخل سريع", title: "إصلاح الأعطال الكهربائية", desc: "تشخيص دقيق للأعطال وإصلاح فعّال لاستعادة تركيباتكم بأمان.", img: IMG.electricRepair },
          { num: "03", tag: "معايير وحماية", title: "التأمين الكهربائي", desc: "فحص وتصحيح وتأمين التركيبات للوقاية من أي خطر كهربائي.", img: IMG.miseSecurity },
          { num: "04", tag: "توزيع", title: "اللوحات الكهربائية", desc: "تركيب وتحديث اللوحات مع قواطع وحمايات تفاضلية ملائمة.", img: IMG.panel },
          { num: "05", tag: "داخلي وخارجي", title: "الإضاءة الاحترافية", desc: "تركيب حلول إضاءة LED وظيفية وجمالية لتثمين فضاءاتكم.", img: IMG.lightingPro },
          { num: "06", tag: "متابعة وموثوقية", title: "الصيانة الوقائية", desc: "صيانة منتظمة للتركيبات الكهربائية لضمان الأداء والمتانة.", img: IMG.maintenance },
        ],
      },
      {
        id: "batiment", icon: Building2, label: "كهرباء المباني",
        tagline: "البنية التحتية الصناعية",
        desc: "تصميم وإنجاز بنية تحتية كهربائية للمباني الكبيرة والمواقع الصناعية والمجمعات التجارية.",
        color: "#818cf8", bg: "rgba(129,140,248,0.08)", num: "02",
        services: [
          { num: "01", tag: "على نطاق واسع", title: "الكابلات الصناعية", desc: "تصميم وتركيب شبكات كابلات عالية الجهد للمباني الصناعية والتجارية.", img: IMG.building },
          { num: "02", tag: "أمان وتحكم", title: "الخزائن الكهربائية", desc: "تصنيع مخصص وتركيب خزائن التوزيع والتحكم والسيطرة.", img: IMG.panel },
          { num: "03", tag: "أداء", title: "تحسين الطاقة", desc: "تدقيق وتحسين كفاءة الطاقة في مبانيكم للحد من التكاليف.", img: IMG.electricInstall },
          { num: "04", tag: "مطابقة للمعايير", title: "التحديث للمعايير", desc: "تحديث التركيبات القائمة وفق أحدث اللوائح المعمول بها.", img: IMG.normsCompliance },
        ],
      },
      {
        id: "plomberie", icon: Droplets, label: "السباكة",
        tagline: "تركيبات وتجديدات",
        desc: "تركيب وتجديد وصيانة شاملة لجميع شبكات السباكة مع تدخل سريع في جميع أنحاء المغرب.",
        color: "#22d3ee", bg: "rgba(34,211,238,0.08)", num: "03",
        services: [
          { num: "01", tag: "جديد وتجديد", title: "تركيب شامل", desc: "مد شبكات الماء البارد والساخن، المصارف والأجهزة الصحية لجميع أنواع المباني.", img: IMG.plumbing },
          { num: "02", tag: "طوارئ 24س", title: "إصلاح التسربات", desc: "كشف وإصلاح سريع للتسربات وإزالة الانسدادات وإعادة تأهيل القنوات.", img: IMG.plumbing2 },
          { num: "03", tag: "راحة", title: "سخانات المياه", desc: "تركيب وصيانة سخانات المياه الشمسية والكهربائية والغازية لراحة مثالية.", img: IMG.plumbing },
          { num: "04", tag: "نظافة", title: "المرافق الصحية والحمامات", desc: "تجديد شامل للحمامات وتركيب الأجهزة الصحية.", img: IMG.plumbing2 },
        ],
      },
      {
        id: "solaire", icon: Sun, label: "الألواح الشمسية",
        tagline: "طاقة خضراء واستقلالية",
        desc: "تركيب احترافي لأنظمة كهروضوئية عالية الأداء للأفراد والشركات. خفّض فواتيرك بنسبة تصل إلى 70%.",
        color: "#34d399", bg: "rgba(52,211,153,0.08)", num: "04",
        services: [
          { num: "01", tag: "سكني", title: "الطاقة الشمسية السكنية", desc: "تركيب ألواح كهروضوئية للمنازل والفلل مع دراسة تحسين مخصصة.", img: IMG.solarResidential },
          { num: "02", tag: "مهني", title: "الطاقة الشمسية الصناعية", desc: "حلول كهروضوئية واسعة النطاق للشركات والمصانع والمباني التجارية.", img: IMG.solar2 },
          { num: "03", tag: "تخزين", title: "البطاريات والتخزين", desc: "أنظمة بطاريات ليثيوم لتخزين الطاقة الشمسية واستخدامها ليلاً ونهاراً.", img: IMG.solarBattery },
          { num: "04", tag: "صيانة", title: "صيانة الطاقة الشمسية", desc: "تنظيف وتشخيص وصيانة وقائية لضمان أقصى أداء لألواحكم.", img: IMG.maintenance },
        ],
      },
    ],
    process: [
      { num: "01", title: "دراسة وتشخيص", desc: "تحليل شامل لتركيباتكم لتحديد الاحتياجات والقيود بدقة." },
      { num: "02", title: "نصيحة وعرض سعر", desc: "عرض واضح للحلول مع عرض سعر مفصل، بدون مفاجآت وملائم لميزانيتكم." },
      { num: "03", title: "تنفيذ احترافي", desc: "أعمال بمعدات معتمدة، مع احترام معايير السلامة والآجال المتفق عليها." },
      { num: "04", title: "مراقبة وضمان", desc: "تحقق شامل ومصادقة نهائية لضمان الأداء والسلامة والرضا." },
    ],
  },
};

/* ── Service card ── */
function ServiceCard({ s, color, i, askQuote }: { s: any; color: string; i: number; askQuote: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(8px)`;
    card.style.boxShadow = `${-x * 20}px ${y * 20}px 50px ${color}25, 0 20px 60px rgba(0,0,0,0.1)`;
    const shine = card.querySelector('.card-shine') as HTMLElement;
    if (shine) { shine.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.18) 0%, transparent 60%)`; shine.style.opacity = "1"; }
  };
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
    card.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)";
    const shine = card.querySelector('.card-shine') as HTMLElement;
    if (shine) shine.style.opacity = "0";
  };

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div ref={cardRef}
        className="group relative rounded-2xl overflow-hidden cursor-default bg-white"
        style={{ border: "1.5px solid #f0f0f0", transition: "transform 0.15s ease, box-shadow 0.15s ease", willChange: "transform", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-shine absolute inset-0 z-20 pointer-events-none rounded-2xl transition-opacity duration-300" style={{ opacity: 0 }} />

        <div className="relative overflow-hidden bg-gray-100" style={{ height: "220px" }}>
          <motion.img src={s.img} alt={s.title} style={{ y: imgY, scale: imgScale }}
            className="absolute inset-0 w-full h-[120%] object-cover"
            loading="lazy"
            onError={e => { const el = e.currentTarget as HTMLImageElement; el.style.display = "none"; (el.parentElement as HTMLElement).style.background = `linear-gradient(135deg,${color}25,${color}08)`; }}
          />
          <div className="absolute inset-0 transition-opacity duration-500"
            style={{ background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)` }} />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `linear-gradient(135deg, ${color}18 0%, transparent 60%)` }} />
          <div className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.92)", color, fontFamily: "'JetBrains Mono',monospace", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            {s.tag}
          </div>
          <div className="absolute top-3 right-3 text-3xl font-black leading-none select-none transition-all duration-300 group-hover:opacity-60 group-hover:translate-y-1"
            style={{ color: "rgba(255,255,255,0.15)", fontFamily: "'Syne',sans-serif" }}>{s.num}</div>
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
            <div className="text-white font-black text-base leading-tight" style={{ fontFamily: "'Syne',sans-serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              {s.title}
            </div>
          </div>
        </div>

        <div className="p-5 relative">
          <div className="h-[2px] w-0 group-hover:w-full absolute top-0 left-0 transition-all duration-500"
            style={{ background: `linear-gradient(90deg,${color},${color}40)` }} />
          <h3 className="font-black text-gray-900 text-base mb-2 leading-snug group-hover:text-gray-700 transition-colors"
            style={{ fontFamily: "'Syne',sans-serif" }}>{s.title}</h3>
          <p className="text-[13px] leading-relaxed mb-4 text-gray-400" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{s.desc}</p>
          <div className="flex items-center gap-1.5 text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
            style={{ color }}>
            {askQuote}
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{ width: Math.random() * 3 + 1, height: Math.random() * 3 + 1, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, background: i % 2 === 0 ? "#38bdf8" : "#34d399", boxShadow: i % 2 === 0 ? "0 0 6px #38bdf8" : "0 0 6px #34d399" }}
          animate={{ y: [0, -40, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5, ease: "easeInOut" }} />
      ))}
    </div>
  );
}

function CategorySection({ cat, active, askQuote }: { cat: any; active: string; askQuote: string }) {
  const secRef = useRef(null);
  const secInView = useInView(secRef, { once: true, margin: "-80px" });
  return (
    <div id={cat.id} className="mb-28 scroll-mt-28">
      <motion.div ref={secRef}
        initial={{ opacity: 0, x: -30 }} animate={secInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }} className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <motion.div whileHover={{ rotate: 15, scale: 1.15 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: cat.bg, border: `1px solid ${cat.color}25` }}>
            <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
          </motion.div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase"
            style={{ color: cat.color, fontFamily: "'JetBrains Mono',monospace" }}>{cat.label}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3" style={{ fontFamily: "'Syne',sans-serif" }}>
          {cat.tagline}
        </h2>
        <div className="h-px w-16 mb-4" style={{ background: `linear-gradient(90deg,${cat.color},transparent)` }} />
        <p className="text-base max-w-2xl text-gray-400" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{cat.desc}</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {cat.services.map((s: any, i: number) => <ServiceCard key={s.title} s={s} color={cat.color} i={i} askQuote={askQuote} />)}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const { lang, isAr } = useLanguage();
  const c = pageContent[lang];
  const [active, setActive] = useState("electricite");

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => { document.body.style.cursor = ""; };
  }, []);

  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-word", { y: 80, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 1, ease: "power4.out", delay: 0.3 });
      gsap.fromTo(".hero-fade", { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out", delay: 0.9 });
    }, heroRef);
    return () => ctx.revert();
  }, [lang]);

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#060a14", cursor: "none" }} dir={isAr ? "rtl" : "ltr"}>
      <CustomCursor />
      <Navbar />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative overflow-hidden flex items-end pb-20"
        style={{ minHeight: "100vh", background: "#060a14" }}>
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        <video autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover z-0" style={{ opacity: 0.3 }}>
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: "linear-gradient(to top, #060a14 15%, rgba(6,10,20,0.7) 60%, rgba(6,10,20,0.5) 100%)" }} />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-[1]"
          style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(8rem,20vw,18rem)", fontWeight: 900, color: "rgba(14,165,233,0.04)", letterSpacing: "-0.05em", whiteSpace: "nowrap" }}>
          CHINOU
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-10 pt-40">
          <div className="hero-word flex items-center gap-3 mb-8">
            <div className="h-px w-10" style={{ background: `linear-gradient(${isAr ? "270deg" : "90deg"},#0ea5e9,transparent)` }} />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase"
              style={{ color: "#0ea5e9", fontFamily: "'JetBrains Mono',monospace" }}>{c.eyebrow}</span>
          </div>

          <h1 className="font-black text-white mb-8"
            style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(3.5rem,9vw,7rem)", lineHeight: 0.92, letterSpacing: "-0.03em" }}>
            {c.heroTitle1.split("").map((ch, i) => (
              <span key={i} className="hero-word inline-block" style={{ whiteSpace: ch === " " ? "pre" : "normal" }}>{ch}</span>
            ))}
            <br />
            <span className="hero-word inline-block"
              style={{ backgroundImage: "linear-gradient(90deg,#38bdf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {c.heroTitle2}
            </span>
          </h1>

          <p className="hero-fade text-lg max-w-xl mb-10"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Space Grotesk',sans-serif", lineHeight: 1.75 }}>
            {c.heroDesc}
          </p>

          <motion.button onClick={() => scrollTo("electricite")}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="hero-fade btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white cursor-none"
            style={{ background: "linear-gradient(135deg,#0ea5e9,#0284c7)", boxShadow: "0 0 28px rgba(14,165,233,0.4)" }}>
            {c.heroBtn} <ChevronDown className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* ── EVERYTHING BELOW: WHITE ── */}
      <div style={{ background: "#ffffff" }}>

        {/* Sticky nav */}
        <div className="sticky top-[68px] z-40 bg-white py-3"
          style={{ borderBottom: "1px solid #f0f0f0", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className={`flex items-center gap-2 overflow-x-auto pb-1 ${isAr ? "flex-row-reverse" : ""}`}>
              {c.categories.map(cat => (
                <motion.button key={cat.id} onClick={() => scrollTo(cat.id)}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-300 cursor-none"
                  style={{
                    background: active === cat.id ? cat.color : "transparent",
                    border: `1.5px solid ${active === cat.id ? cat.color : "#e5e7eb"}`,
                    color: active === cat.id ? "white" : "#9ca3af",
                    fontFamily: "'Space Grotesk',sans-serif",
                  }}>
                  <cat.icon className="w-3.5 h-3.5" />
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-20">
          {c.categories.map(cat => <CategorySection key={cat.id} cat={cat} active={active} askQuote={c.askQuote} />)}
        </div>

        {/* Process */}
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-24" style={{ borderTop: "1px solid #f0f0f0" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gray-200" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}>{c.processEyebrow}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900" style={{ fontFamily: "'Syne',sans-serif" }}>
              {c.processTitle1}{" "}
              <span style={{ backgroundImage: "linear-gradient(90deg,#0ea5e9,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {c.processTitle2}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.process.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl p-6 group bg-white"
                style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div className="text-5xl font-black mb-4 leading-none text-gray-100" style={{ fontFamily: "'Syne',sans-serif" }}>{p.num}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2" style={{ fontFamily: "'Syne',sans-serif" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{p.desc}</p>
                {i < c.process.length - 1 && (
                  <div className={`hidden lg:flex absolute top-8 ${isAr ? "-left-3" : "-right-3"} z-10 w-6 h-6 items-center justify-center rounded-full bg-white border border-gray-100`}>
                    <ArrowRight className={`w-3.5 h-3.5 text-gray-300 ${isAr ? "rotate-180" : ""}`} />
                  </div>
                )}
                <div className={`absolute bottom-0 ${isAr ? "right-0" : "left-0"} h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}
                  style={{ background: "linear-gradient(90deg,#0ea5e9,#10b981)" }} />
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="mt-14 text-center">
            <blockquote className="text-xl font-semibold italic text-gray-300" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
              {c.processQuote.split("100%").map((part, i) =>
                i === 0 ? <span key={i}>{part}</span> : <span key={i}><span style={{ color: "#0ea5e9" }}>100%</span>{part}</span>
              )}
            </blockquote>
          </motion.div>
        </div>

        {/* CTA — dark band */}
        <div id="contact" style={{ background: "#060a14" }}>
          <div className="max-w-7xl mx-auto px-5 lg:px-10 py-24">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg,rgba(14,165,233,0.08),rgba(16,185,129,0.05))", border: "1px solid rgba(14,165,233,0.15)" }}>
              <FloatingParticles />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center,rgba(14,165,233,0.06),transparent 70%)" }} />
              <h2 className="relative text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
                {c.ctaTitle1}{" "}
                <span style={{ backgroundImage: "linear-gradient(90deg,#38bdf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {c.ctaTitle2}
                </span>
              </h2>
              <p className="relative text-base mb-8 max-w-xl mx-auto text-white/40">
                {c.ctaSubtitle}
              </p>
              <div className={`relative flex flex-wrap justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
                <motion.a href="/#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm cursor-none"
                  style={{ background: "linear-gradient(135deg,#0ea5e9,#0284c7)", boxShadow: "0 0 28px rgba(14,165,233,0.4)" }}>
                  {c.ctaBtn} <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
                </motion.a>
                <motion.a href="tel:+212633834711" whileHover={{ scale: 1.04 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm cursor-none"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
                  +212 633 834 711
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}