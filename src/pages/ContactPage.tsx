import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MapPin, Phone, Mail, Send, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { useLanguage } from "@/contexts/LanguageContext";
export default function ContactPage() {
  const { isAr } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => { document.body.style.cursor = ""; };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Message envoyé !", description: "Nous vous recontacterons sous 24h." });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%", padding: "14px 18px", borderRadius: "12px",
    background: focused === name ? "#f8fafc" : "#f9fafb",
    border: `1.5px solid ${focused === name ? "#0ea5e9" : "#e5e7eb"}`,
    color: "#111827", fontSize: "0.875rem",
    fontFamily: "'Space Grotesk',sans-serif", outline: "none", transition: "all 0.2s",
  });

  const contacts = [
    { icon: Phone, label: "Téléphone & WhatsApp", value: "+212 633 834 711", href: "tel:+212633834711", color: "#0ea5e9" },
    { icon: Mail, label: "Email", value: "contact@chinouelectric.com", href: "mailto:contact@chinouelectric.com", color: "#6366f1" },
    { icon: MapPin, label: "Zone d'intervention", value: "Maroc entier", href: undefined, color: "#10b981" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ cursor: "none" }}>
      <CustomCursor />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center" style={{ minHeight: "38vh", background: "#060a14" }}>
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(14,165,233,0.1), transparent 70%)" }} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-10 pt-36 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "linear-gradient(90deg,#0ea5e9,transparent)" }} />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: "#0ea5e9", fontFamily: "'JetBrains Mono',monospace" }}>
                Demander un Devis
              </span>
            </div>
            <h1 className="font-black text-white tracking-tight mb-4"
              style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(3rem,7vw,5.5rem)", lineHeight: 0.95 }}>
              Démarrons votre{" "}
              <span style={{ backgroundImage: "linear-gradient(90deg,#38bdf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                projet.
              </span>
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk',sans-serif" }}>
              Réponse garantie sous 24h. Devis gratuit, transparent et sans engagement.
            </p>
          </motion.div>
        </div>

      </section>

      {/* Content */}
      <div style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20">
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Info */}
            <motion.div ref={ref} initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }} className="lg:col-span-2 space-y-4">
              {contacts.map((c, i) => (
                <motion.div key={i} whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-5 rounded-xl group cursor-default bg-white"
                  style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: `${c.color}10`, border: `1px solid ${c.color}20` }}>
                    <c.icon className="w-4 h-4" style={{ color: c.color }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-0.5">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-semibold text-gray-900 hover:text-sky-500 transition-colors flex items-center gap-1 group/link">
                        {c.value} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <div className="text-sm font-semibold text-gray-900">{c.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
              <div className="p-5 rounded-xl bg-white" style={{ border: "1.5px solid #e0f2fe" }}>
                <div className="text-sm font-bold text-sky-500 mb-1">Réponse sous 24h</div>
                <div className="text-xs text-gray-400 leading-relaxed">Disponible 6j/7. Devis gratuit sans engagement.</div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div id="contact" initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3 rounded-2xl p-8 bg-white"
              style={{ border: "1.5://f0f0f0", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <h2 className="font-black text-gray-900 text-xl mb-6" style={{ fontFamily: "'Syne',sans-serif" }}>
                Envoyez un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[{ name: "nom", label: "Nom complet", type: "text", placeholder: "Votre nom" },
                  { name: "tel", label: "Téléphone", type: "tel", placeholder: "Votre numéro" }].map(f => (
                    <div key={f.name}>
                      <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">{f.label}</label>
                      <input required type={f.type} placeholder={f.placeholder} style={inputStyle(f.name)}
                        onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">Service</label>
                  <select style={{ ...inputStyle("service"), appearance: "none" as const }}
                    onFocus={() => setFocused("service")} onBlur={() => setFocused(null)}>
                    {["Renseignement général", "Installation Électrique", "Électricité Bâtiment", "Plomberie", "Panneaux Solaires"].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">Message</label>
                  <textarea required rows={5} placeholder="Décrivez votre besoin..."
                    style={{ ...inputStyle("msg"), resize: "none" as const }}
                    onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)} />
                </div>
                <motion.button type="submit" disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="btn-shimmer w-full py-4 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 disabled:opacity-50 cursor-none"
                  style={{ background: "linear-gradient(135deg,#0ea5e9,#0284c7)", boxShadow: "0 4px 20px rgba(14,165,233,0.25)" }}>
                  {isSubmitting
                    ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    : <><Send className="w-4 h-4" /> Envoyer le message</>}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}