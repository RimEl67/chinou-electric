import { useState } from "react";
import { Phone, MapPin, Send, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { t, isAr } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const form = e.target as HTMLFormElement;
    const nameInput = form.querySelector('#name') as HTMLInputElement;
    const phoneInput = form.querySelector('#phone') as HTMLInputElement;
    const serviceInput = form.querySelector('#service') as HTMLSelectElement;
    const messageInput = form.querySelector('#message') as HTMLTextAreaElement;
    
    const name = nameInput?.value || '';
    const phone = phoneInput?.value || '';
    const service = serviceInput?.options[serviceInput.selectedIndex]?.text || '';
    const message = messageInput?.value || '';
    
    const text = `Bonjour Chinou Electric,\n\nJe m'appelle ${name} (${phone}).\nJe vous contacte pour : ${service}.\n\nMessage :\n${message}`;
    const encodedText = encodeURIComponent(text);
    
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(`https://wa.me/212655310404?text=${encodedText}`, '_blank');
      form.reset();
    }, 500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#f8fafc] overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-5 lg:px-8 relative z-10 w-full">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#0a0f1e] text-4xl md:text-5xl font-black mb-4 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              {isAr ? "" : "Contactez-"}
              <span className="text-primary">{isAr ? t("nav.contact") : "nous"}</span>
            </h2>
            <p className="text-[#8b9bb4] text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {t("contact.sectionDesc")}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-sky-500" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[#8b9bb4] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t("contact.phone")}</p>
                <a href="tel:+212655310404" className="text-[#0a0f1e] text-base sm:text-lg font-black hover:text-sky-500 transition-colors block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  +212 6 55 31 04 04
                </a>
              </div>
            </motion.div>


            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-emerald-500" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[#8b9bb4] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t("contact.zone")}</p>
                <p className="text-[#0a0f1e] text-base sm:text-lg font-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {t("contact.zoneValue")}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100 flex flex-col justify-center cursor-default mt-2"
            >
              <h4 className="text-sky-500 font-bold text-lg mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t("contact.responseTitle")}</h4>
              <p className="text-[#8b9bb4] text-sm font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {t("contact.responseDesc")}
              </p>
            </motion.div>
            
            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 mt-2"
            >
              <p className="text-[#8b9bb4] text-[10px] font-bold tracking-widest uppercase px-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {t("footer.followUs")}
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/profile.php?id=61564944287970" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 text-slate-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/chinouelectric?igsh=MWJxazY5Zmh5Y3Rhcw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@chinou.electric?_r=1&_t=ZS-94Sg6z9eBi4" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 text-slate-400 hover:text-white hover:bg-black hover:border-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.3-.41.25-.79.58-1.03 1-.38.74-.43 1.61-.21 2.41.22.81.79 1.52 1.51 1.9 1.05.55 2.45.56 3.48-.01.67-.38 1.02-1.18 1.08-1.96.03-3.65.01-7.3.03-10.95Z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 ${isAr ? "text-right" : "text-left"}`}
          >
            <h3 className="text-[#0a0f1e] text-[22px] sm:text-[28px] font-black mb-8 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              {t("contact.formTitle")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-[10px] font-bold tracking-widest text-[#8b9bb4] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t("contact.formName")}</label>
                  <input 
                    required
                    id="name"
                    type="text" 
                    placeholder={isAr ? "" : "Votre nom"}
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0a0f1e] placeholder:text-[#a0aabf] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-medium text-sm"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", textAlign: isAr ? "right" : "left" }}
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="phone" className="text-[10px] font-bold tracking-widest text-[#8b9bb4] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t("contact.formPhone")}</label>
                  <input 
                    required
                    id="phone"
                    type="tel" 
                    placeholder={isAr ? "" : "Votre numéro"}
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0a0f1e] placeholder:text-[#a0aabf] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-medium text-sm"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", textAlign: isAr ? "right" : "left" }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="service" className="text-[10px] font-bold tracking-widest text-[#8b9bb4] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t("contact.formService")}</label>
                <div className="relative">
                  <select 
                    id="service"
                    required
                    defaultValue="general"
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0a0f1e] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all appearance-none font-medium text-sm cursor-pointer"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", textAlign: isAr ? "right" : "left", paddingRight: isAr ? "1.25rem" : "3rem", paddingLeft: isAr ? "3rem" : "1.25rem" }}
                  >
                    <option value="" disabled hidden></option>
                    <option value="general">{t("contact.servicesMap.general")}</option>
                    <option value="installation">{t("contact.servicesMap.installation")}</option>
                    <option value="batiment">{t("contact.servicesMap.batiment")}</option>
                    <option value="plomberie">{t("contact.servicesMap.plomberie")}</option>
                    <option value="solaire">{t("contact.servicesMap.solaire")}</option>
                  </select>
                  <div className={`absolute ${isAr ? "left-5" : "right-5"} top-1/2 -translate-y-1/2 pointer-events-none`}>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#8b9bb4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="text-[10px] font-bold tracking-widest text-[#8b9bb4] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t("contact.formMessage")}</label>
                <textarea 
                  required
                  id="message"
                  rows={4}
                  placeholder={isAr ? "" : "Décrivez votre besoin..."}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-[#0a0f1e] placeholder:text-[#a0aabf] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none font-medium text-sm"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", textAlign: isAr ? "right" : "left" }}
                />
              </div>
              
              <div className="pt-2">
                <button 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-primary text-white font-black text-[15px] flex items-center justify-center gap-2 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md transform hover:-translate-y-0.5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className={`w-4 h-4 ${isAr ? "ml-1 rotate-180" : "mr-1"}`} />
                      {t("contact.formSubmit")}
                    </>
                  )}
                </button>
              </div>
              
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}