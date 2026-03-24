import { motion } from "framer-motion";
import { Zap, Building2, Droplets, Sun, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  fr: {
    badge: "Nos Expertises",
    title: "Nos",
    titleHighlight: "Expertises",
    desc: "Une gamme complète de services professionnels pour répondre à tous vos besoins techniques avec précision et fiabilité.",
    readMore: "En savoir plus",
    items: [
      {
        icon: Zap,
        title: "Installation Électrique",
        description: "Solutions électriques complètes pour résidences et commerces. Sécurité garantie et normes respectées.",
        color: "bg-blue-50", accent: "text-primary", borderTop: "border-primary", link: "/services#electricite",
      },
      {
        icon: Building2,
        title: "Électricité Bâtiment",
        description: "Infrastructures électriques pour grands bâtiments et sites industriels. Câblage haute tension et tableaux.",
        color: "bg-indigo-50", accent: "text-indigo-600", borderTop: "border-indigo-600", link: "/services#batiment",
      },
      {
        icon: Droplets,
        title: "Plomberie",
        description: "Installation, rénovation et maintenance de vos systèmes de plomberie. Intervention rapide et efficace.",
        color: "bg-cyan-50", accent: "text-cyan-600", borderTop: "border-cyan-600", link: "/services#plomberie",
      },
      {
        icon: Sun,
        title: "Panneaux Solaires",
        description: "Transition vers l'énergie verte. Installation experte de systèmes photovoltaïques pour une autonomie durable.",
        color: "bg-green-50", accent: "text-accent", borderTop: "border-accent", link: "/services#solaire",
      },
    ]
  },
  ar: {
    badge: "خبراتنا",
    title: "",
    titleHighlight: "خبراتنا",
    desc: "مجموعة كاملة من الخدمات الاحترافية لتلبية جميع احتياجاتك الفنية بدقة وموثوقية.",
    readMore: "اكتشف المزيد",
    items: [
      {
        icon: Zap,
        title: "التركيبات الكهربائية",
        description: "حلول كهربائية متكاملة للمنازل والشركات. أمان مضمون واحترام للمعايير.",
        color: "bg-blue-50", accent: "text-primary", borderTop: "border-primary", link: "/services#electricite",
      },
      {
        icon: Building2,
        title: "كهرباء المباني",
        description: "بنية تحتية كهربائية للمباني الكبيرة والمواقع الصناعية. كابلات الجهد العالي ولوحات التوزيع.",
        color: "bg-indigo-50", accent: "text-indigo-600", borderTop: "border-indigo-600", link: "/services#batiment",
      },
      {
        icon: Droplets,
        title: "السباكة",
        description: "تركيب وتجديد وصيانة شبكات السباكة. تدخل سريع وفعال.",
        color: "bg-cyan-50", accent: "text-cyan-600", borderTop: "border-cyan-600", link: "/services#plomberie",
      },
      {
        icon: Sun,
        title: "الألواح الشمسية",
        description: "الانتقال إلى الطاقة الخضراء. تركيب احترافي للأنظمة الكهروضوئية لاستقلالية مستدامة.",
        color: "bg-green-50", accent: "text-accent", borderTop: "border-accent", link: "/services#solaire",
      },
    ]
  }
};

export function Services() {
  const { lang, isAr } = useLanguage();
  const t = content[lang];

  return (
    <section id="services" className="py-24 relative bg-slate-50 overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-black mb-6 text-foreground"
          >
            {t.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {t.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium"
          >
            {t.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.items.map((service, index) => (
            <motion.a
              key={service.title}
              href={service.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group block"
            >
              <div className={cn(
                  "relative h-full p-8 rounded-3xl bg-white border border-border overflow-hidden transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-primary/10 border-t-4",
                  service.borderTop
                )}>
                <div className="relative z-10 flex flex-col h-full">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", service.color)}>
                    <service.icon className={cn("w-8 h-8", service.accent)} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center text-sm font-bold text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                    {t.readMore}
                    <motion.div className={isAr ? "mr-2" : "ml-2"} initial={{ x: 0 }} whileHover={{ x: isAr ? -5 : 5 }}>
                      <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}