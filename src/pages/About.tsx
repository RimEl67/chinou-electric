import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ArrowRight, Zap, Building2, Droplets, Sun, Shield, Clock, Star, Users, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
import { useLanguage } from "@/contexts/LanguageContext";
const services = [
  { num: "01", icon: Zap, title: "Électricité Résidentielle & Industrielle", desc: "Conception et installation électrique de précision, sécurisée et conforme aux normes NFC 15-100.", color: "#0ea5e9" },
  { num: "02", icon: Building2, title: "Électricité Bâtiment", desc: "Câblage haute tension, armoires et tableaux électriques pour sites industriels et tertiaires.", color: "#6366f1" },
  { num: "03", icon: Droplets, title: "Plomberie Professionnelle", desc: "Installation, rénovation et dépannage rapide de vos systèmes de plomberie sur tout le Maroc.", color: "#06b6d4" },
  { num: "04", icon: Sun, title: "Panneaux Solaires", desc: "Systèmes photovoltaïques haute performance — réduisez vos factures jusqu'à 70%.", color: "#10b981" },
];

const methodology = [
  { num: "01", title: "Diagnostic Professionnel", desc: "Analyse précise des installations pour identifier rapidement l'origine du problème et évaluer les solutions adaptées." },
  { num: "02", title: "Intervention Maîtrisée", desc: "Réalisation avec rigueur, dans le respect total des normes de sécurité NFC 15-100 et de qualité." },
  { num: "03", title: "Contrôle & Fiabilité", desc: "Vérification finale, tests de performance et conseils pratiques pour garantir la durabilité des installations." },
];

const differentiators = [
  { icon: Clock, title: "Réactivité Immédiate", desc: "Interventions rapides sur tout le Maroc, prise en charge efficace dès le premier contact." },
  { icon: Shield, title: "Sécurité Certifiée", desc: "Installations conformes aux normes en vigueur, pensées pour durer sans compromis sur la sécurité." },
  { icon: CheckCircle, title: "Clarté & Confiance", desc: "Chaque intervention expliquée avec précision — vous savez exactement ce qui est fait et pourquoi." },
  { icon: Users, title: "Travail Coordonné", desc: "Collaboration fluide avec architectes et maîtres d'œuvre pour un chantier parfaitement maîtrisé." },
];

const testimonials = [
  { quote: "Service rapide et professionnel. Le problème électrique a été diagnostiqué et réparé efficacement. Travail propre et très sérieux.", name: "Client résidentiel, Marrakech", num: "01" },
  { quote: "Installation solaire impeccable, équipe sérieuse et ponctuelle. Je recommande Chinou Electric sans hésitation à quiconque.", name: "Propriétaire villa, Casablanca", num: "02" },
  { quote: "Intervention de plomberie rapide et bien faite. Prix transparent, travail soigné. Très satisfait du résultat final.", name: "Client professionnel, Rabat", num: "03" },
];

function SplitText({ text, className, style, delay = 0 }: { text: string; className?: string; style?: React.CSSProperties; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className || ""}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        style={style}>
        {text}
      </motion.div>
    </div>
  );
}


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

function StatCounters() {
  const s1 = useCountUp(15);
  const s2 = useCountUp(500);
  const s3 = useCountUp(100);
  const stats = [
    { ...s1, suffix: "+", label: "Ans d'expérience", color: "#0ea5e9" },
    { ...s2, suffix: "+", label: "Projets réalisés", color: "#10b981" },
    { ...s3, suffix: "%", label: "Satisfaction client", color: "#0ea5e9" },
  ];
  return (
    <div className="flex gap-6 mt-16">
      {stats.map((s, i) => (
        <div key={i} ref={s.ref} className="flex-1 text-center">
          <div className="font-black leading-none mb-1" style={{ fontFamily: "'Syne',sans-serif", fontSize: "2.2rem", color: s.color }}>
            {s.count}{s.suffix}
          </div>
          <div className="text-xs text-gray-400 font-medium">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  const { isAr } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => { document.body.style.cursor = ""; };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text stagger
      gsap.fromTo(".hero-word", { y: 80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 1, ease: "power4.out", delay: 0.3 });
      gsap.fromTo(".hero-fade", { y: 24, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out", delay: 0.9 });

      // Horizontal reveal lines
      gsap.fromTo(".reveal-line", { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: ".reveal-line", start: "top 90%", once: true }
        });

      // Sections slide in
      gsap.utils.toArray<HTMLElement>(".gsap-up").forEach((el) => {
        gsap.fromTo(el, { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true }
          });
      });

      // Service cards stagger
      gsap.fromTo(".service-card", { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".service-card", start: "top 85%", once: true }
        });

      // Testimonial slide
      gsap.fromTo(".testimonial-card", { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".testimonial-card", start: "top 85%", once: true }
        });

    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#060a14", cursor: "none" }}>
      <CustomCursor />
      <Navbar />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative overflow-hidden flex items-end pb-20"
        style={{ minHeight: "100vh", background: "#060a14" }}>
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        {/* Video bg */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0" style={{ opacity: 0.3 }}>
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "linear-gradient(to top, #060a14 15%, rgba(6,10,20,0.7) 60%, rgba(6,10,20,0.5) 100%)" }} />

        {/* Big background word */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-[1]"
          style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(8rem,20vw,18rem)", fontWeight: 900, color: "rgba(14,165,233,0.04)", letterSpacing: "-0.05em", whiteSpace: "nowrap" }}>
          CHINOU
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-10 pt-40">
          {/* Eyebrow */}
          <div className="hero-word flex items-center gap-3 mb-8">
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg,#0ea5e9,transparent)" }} />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: "#0ea5e9", fontFamily: "'JetBrains Mono',monospace" }}>Notre Expertise</span>
          </div>

          {/* Big title */}
          <h1 className="font-black text-white mb-8" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(3.5rem,9vw,7rem)", lineHeight: 0.92, letterSpacing: "-0.03em" }}>
            {"L'Excellence".split("").map((c, i) => (
              <span key={i} className="hero-word inline-block" style={{ whiteSpace: c === " " ? "pre" : "normal" }}>{c}</span>
            ))}
            <br />
            <span className="hero-word inline-block" style={{ backgroundImage: "linear-gradient(90deg,#38bdf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Technique.
            </span>
          </h1>

          {/* Quote */}
          <p className="hero-fade text-lg max-w-2xl mb-10 italic" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Space Grotesk',sans-serif", lineHeight: 1.75 }}>
            "Chinou Electric met son expertise au service de vos installations électriques, de plomberie et d'énergie solaire au Maroc. Rapidité, précision et qualité certifiée à chaque intervention."
          </p>

          <motion.a href="/services" className="hero-fade btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white cursor-none"
            style={{ background: "linear-gradient(135deg,#0ea5e9,#0284c7)", boxShadow: "0 0 28px rgba(14,165,233,0.4)" }}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            Découvrir nos services <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* ── WHITE CONTENT ── */}
      <div style={{ background: "#ffffff" }}>

        {/* ── PRESENTATION SPLIT ── */}
        <section className="max-w-7xl mx-auto px-5 lg:px-10 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left text */}
            <div>
              <div className="flex items-center gap-3 mb-6 gsap-up">
                <div className="h-px w-8 bg-gray-200" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400" style={{ fontFamily: "'JetBrains Mono',monospace" }}>Présentation</span>
              </div>

              <div className="mb-8">
                <SplitText text="L'excellence" className="block font-black text-gray-900" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 0.95 }} delay={0} />
                <SplitText text="Technique." className="block font-black" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 0.95, backgroundImage: "linear-gradient(90deg,#0ea5e9,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} delay={0.1} />
              </div>

              <div className="reveal-line h-px mb-8" style={{ background: "linear-gradient(90deg,#0ea5e9,#10b981,transparent)" }} />

              <p className="gsap-up text-base text-gray-500 leading-relaxed mb-5" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
                Chinou Electric redéfinit les standards de l'électricité, la plomberie et l'énergie solaire au Maroc. Nous allions savoir-faire traditionnel et technologies modernes.
              </p>
              <p className="gsap-up text-base text-gray-500 leading-relaxed" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
                Chaque intervention est une promesse de durabilité et de précision, assurant un confort optimal pour votre foyer ou entreprise, partout au Maroc.
              </p>
            </div>

            {/* Right: image stack + stats */}
            <div className="relative">
              {/* Images stacked */}
              <div className="relative">
                <motion.div className="gsap-up rounded-2xl overflow-hidden shadow-2xl"
                  style={{ aspectRatio: "4/3", border: "1px solid #f0f0f0" }}>
                  <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=85&auto=format&fit=crop"
                    alt="Technicien au travail" className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)" }} />
                </motion.div>

                {/* Floating second image */}
                <motion.div
                  animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -right-6 w-2/5 rounded-2xl overflow-hidden shadow-2xl"
                  style={{ border: "3px solid white", aspectRatio: "1" }}>
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-12f5a6b0c2a2?w=600&q=85&auto=format&fit=crop"
                    alt="Panneaux solaires"
                    className="w-full h-full object-cover"
                    loading="eager"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=85&auto=format&fit=crop"; }}
                  />
                </motion.div>
              </div>

              {/* Stats row */}
              <StatCounters />
            </div>
          </div>
        </section>

        {/* ── SERVICES OVERVIEW ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="gsap-up mb-16">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-gray-300" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400" style={{ fontFamily: "'JetBrains Mono',monospace" }}>Aperçu expertise</span>
              </div>
              <SplitText text="Nos Services en Bref." className="font-black text-gray-900"
                style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.2rem,4vw,3.5rem)" }} />
              <p className="mt-4 text-gray-400 max-w-lg text-base" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
                Des solutions techniques de pointe pour votre confort et votre sécurité partout au Maroc.
              </p>
            </div>

            <div className="space-y-4">
              {services.map((s, i) => (
                <div key={i} className="service-card group flex items-start gap-6 p-6 rounded-2xl bg-white cursor-default transition-all duration-300"
                  style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = `0 8px 32px ${s.color}18`; el.style.borderColor = `${s.color}35`; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"; el.style.borderColor = "#f0f0f0"; }}>
                  <div className="shrink-0 flex items-center gap-4">
                    <span className="text-2xl font-black select-none" style={{ fontFamily: "'Syne',sans-serif", color: `${s.color}30` }}>{s.num}</span>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                      style={{ background: `${s.color}12`, border: `1.5px solid ${s.color}25` }}>
                      <s.icon className="w-5 h-5" style={{ color: s.color }} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-black text-gray-900 text-lg mb-1" style={{ fontFamily: "'Syne',sans-serif" }}>{s.title}</h3>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{s.desc}</p>
                  </div>
                  <a href="/services" className="shrink-0 flex items-center gap-1 text-xs font-bold opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: s.color }}>
                    En savoir plus <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── METHODOLOGY ── */}
        <section className="py-28 max-w-7xl mx-auto px-5 lg:px-10">
          <div className="gsap-up mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gray-200" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400" style={{ fontFamily: "'JetBrains Mono',monospace" }}>Notre méthode</span>
            </div>
            <SplitText text="Une Expertise Structurée" className="font-black text-gray-900"
              style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.2rem,4vw,3.5rem)" }} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {methodology.map((m, i) => (
              <div key={i} className="gsap-up group relative rounded-2xl p-8 bg-white"
                style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div className="text-7xl font-black mb-6 leading-none select-none" style={{ fontFamily: "'Syne',sans-serif", color: "#f3f4f6" }}>{m.num}</div>
                <h3 className="font-black text-gray-900 text-xl mb-3" style={{ fontFamily: "'Syne',sans-serif" }}>{m.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{m.desc}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ background: "linear-gradient(90deg,#0ea5e9,#10b981)" }} />
              </div>
            ))}
          </div>
        </section>

        {/* ── DIFFERENTIATORS ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="gsap-up mb-16">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-gray-300" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400" style={{ fontFamily: "'JetBrains Mono',monospace" }}>Nos atouts</span>
              </div>
              <SplitText text="Pourquoi nous choisir ?" className="font-black text-gray-900"
                style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.2rem,4vw,3.5rem)" }} />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {differentiators.map((d, i) => (
                <div key={i} className="gsap-up group relative rounded-2xl p-6 bg-white cursor-default"
                  style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300">
                    <d.icon className="w-5 h-5 text-sky-500" />
                  </div>
                  <h3 className="font-black text-gray-900 text-base mb-2" style={{ fontFamily: "'Syne',sans-serif" }}>{d.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{d.desc}</p>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                    style={{ background: "linear-gradient(90deg,#0ea5e9,#10b981)" }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-28 max-w-7xl mx-auto px-5 lg:px-10">
          <div className="gsap-up mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gray-200" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400" style={{ fontFamily: "'JetBrains Mono',monospace" }}>Avis clients</span>
            </div>
            <SplitText text="Ce que disent nos clients." className="font-black text-gray-900"
              style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)" }} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card relative rounded-2xl p-7 bg-white"
                style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
                <div className="text-4xl font-black text-gray-100 mb-4 leading-none select-none" style={{ fontFamily: "'Syne',sans-serif" }}>({t.num})</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>"{t.quote}"</p>
                <div className="text-xs font-bold text-gray-400" style={{ fontFamily: "'JetBrains Mono',monospace" }}>— {t.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA DARK ── */}
        <div id="contact" style={{ background: "#060a14" }}>
          <div className="max-w-7xl mx-auto px-5 lg:px-10 py-24">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="rounded-3xl p-10 md:p-20 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg,rgba(14,165,233,0.07),rgba(16,185,129,0.04))", border: "1px solid rgba(14,165,233,0.12)" }}>
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(14,165,233,0.1),transparent 60%)" }} />
              <h2 className="relative font-black text-white mb-5" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,5vw,3.8rem)" }}>
                Prêt à démarrer votre{" "}
                <span style={{ backgroundImage: "linear-gradient(90deg,#38bdf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>projet ?</span>
              </h2>
              <p className="relative text-base mb-10 max-w-lg mx-auto text-white/40">Devis gratuit, réponse garantie sous 24h, partout au Maroc.</p>
              <div className="relative flex flex-wrap justify-center gap-4">
                <motion.a href="/#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm cursor-none"
                  style={{ background: "linear-gradient(135deg,#0ea5e9,#0284c7)", boxShadow: "0 0 32px rgba(14,165,233,0.45)" }}>
                  Demander un devis gratuit <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a href="tel:+212633834711" whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm cursor-none"
                  style={{ border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
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