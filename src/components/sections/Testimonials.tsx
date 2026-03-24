import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const content = {
  fr: {
    title: "Avis",
    items: [
      { num: "01", quote: "Service rapide et professionnel. Le problème électrique a été diagnostiqué et réparé efficacement. Travail propre et très sérieux.", author: "Client résidentiel, Marrakech", rot: -2, top: "20px", left: "auto", right: "-10%", bottom: "auto", z: 3 },
      { num: "02", quote: "Très bon service en climatisation. Installation rapide, explications claires et résultat impeccable. Je recommande sans hésitation.", author: "Propriétaire villa, Casablanca", rot: 2, top: "auto", left: "-10%", right: "auto", bottom: "20px", z: 2 },
      { num: "03", quote: "Tableau électrique refait entièrement. Équipe ponctuelle, propre et très compétente. Je referai appel à eux.", author: "Gérant local, Marrakech", rot: -3, top: "-20px", left: "5%", right: "auto", bottom: "auto", z: 1 },
      { num: "04", quote: "Dépannage plomberie en urgence, intervention en moins de 2h. Tarif honnête, résultat parfait.", author: "Client particulier, Agadir", rot: 3, top: "auto", left: "auto", right: "5%", bottom: "-20px", z: 2 },
    ]
  },
  ar: {
    title: "آراء",
    items: [
      { num: "٠١", quote: "خدمة سريعة واحترافية. تم تشخيص المشكلة الكهربائية وإصلاحها بكفاءة. عمل نظيف وجاد للغاية.", author: "زبون سكني، مراكش", rot: 2, top: "20px", left: "-10%", right: "auto", bottom: "auto", z: 3 },
      { num: "٠٢", quote: "خدمة جيدة جداً في التكييف. تركيب سريع، تفسيرات واضحة ونتيجة مثالية. أنصح بهم دون تردد.", author: "صاحب فيلا، الدار البيضاء", rot: -2, top: "auto", left: "auto", right: "-10%", bottom: "20px", z: 2 },
      { num: "٠٣", quote: "تم تجديد اللوحة الكهربائية بالكامل. فريق منضبط، نظيف وكفء جداً. سأتعامل معهم مجدداً.", author: "مسير محل، مراكش", rot: 3, top: "-20px", left: "auto", right: "5%", bottom: "auto", z: 1 },
      { num: "٠٤", quote: "إصلاح سباكة في حالة استعجال، تدخل في أقل من ساعتين. سعر صادق ونتيجة مثالية.", author: "زبون خاص، أكادير", rot: -3, top: "auto", left: "5%", right: "auto", bottom: "-20px", z: 2 },
    ]
  }
};

export function Testimonials() {
  const { lang, isAr } = useLanguage();
  const t = content[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      t.items.forEach((_, i) => {
        gsap.fromTo(`.tc-${i}`, { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.9, delay: i * 0.12, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true }
          });
      });
      gsap.to(".tc-0", { y: -8, duration: 3.8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0 });
      gsap.to(".tc-1", { y: 10, duration: 4.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.6 });
      gsap.to(".tc-2", { y: -6, duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.1 });
      gsap.to(".tc-3", { y: 8, duration: 4.6, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.3 });
    }, sectionRef);
    return () => ctx.revert();
  }, [t]);

  const cardBgs = ["#0f172a", "#111827", "#0d1525", "#131e2e"];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#f8fafc]" style={{ padding: "5rem 0 7rem" }} dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex justify-center">
        <div className="relative w-full max-w-5xl" style={{ minHeight: "600px" }}>

          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none" style={{ zIndex: 0 }}>
            <div style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(5rem, 15vw, 12rem)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "#0a0f1e",
              opacity: 0.9,
              textAlign: "center",
            }}>
              {t.title}
            </div>
          </div>

          {t.items.map((item, i) => (
            <div key={i} className={`tc-${i} absolute ${isAr ? "text-right" : "text-left"}`}
              style={{
                top: item.top, bottom: item.bottom, left: item.left, right: item.right,
                width: "320px",
                background: cardBgs[i],
                borderRadius: "20px",
                padding: "2rem",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.3)",
                transform: `rotate(${item.rot}deg)`,
                zIndex: item.z,
              }}>
              <div className="text-[11px] font-bold mb-5 tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'JetBrains Mono',monospace" }}>
                ( {item.num} )
              </div>
              <p className="leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.95rem" }}>
                {item.quote}
              </p>
              <div className="h-px mb-4" style={{ background: "rgba(255,255,255,0.07)" }} />
              <span className="text-[12px] italic" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Space Grotesk',sans-serif" }}>
                — {item.author}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}