/*
  SafeConnect Landing Page - Bilingual (English Primary, Spanish Localized)
  Design: "Calm Tech" - Organic Minimalist with Purple Theme
  Colors: Purple (#6B46C1), Light Purple (#A78BFA), Warm White (#FAFAF8)
  Typography: Plus Jakarta Sans (display), Inter (body)
*/

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Heart, 
  Shield, 
  MessageCircle, 
  Bell, 
  Smartphone, 
  Users,
  CheckCircle2,
  Github,
  Linkedin,
  ArrowRight,
  Globe
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Translations
const translations = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      technology: "Technology",
      github: "View on GitHub"
    },
    hero: {
      badge: "Human connection, not alarms",
      title: "Secure communication for your",
      titleHighlight: "emotional well-being",
      description: "SafeConnect facilitates quick contact with trusted people during moments of stress or emotional need, without creating panic or triggering unnecessary emergency processes.",
      downloadApp: "Download App",
      viewDemo: "View Demo",
      private: "100% Private",
      noAlarms: "No Alarms",
      openSource: "Open Source"
    },
    features: {
      title: "Features designed for your peace of mind",
      subtitle: "Each feature is designed to facilitate human connection without generating additional stress.",
      quickCheckin: {
        name: "Quick Check-In",
        desc: "Send your status with a single tap: \"I'm OK\", \"Need to Talk\" or \"Not Safe\". Simple and straightforward."
      },
      privateAlerts: {
        name: "Private Alerts",
        desc: "Notifications are sent only to previously authorized contacts, avoiding public exposure or mass alerts."
      },
      instantComm: {
        name: "Instant Communication",
        desc: "Start calls or direct messages from the alert, reducing friction in emotionally charged moments."
      },
      realtimeStatus: {
        name: "Real-Time Status",
        desc: "Your contact receives simple updates of your status, without requiring complex navigation or settings."
      },
      humanFocus: {
        name: "Human-Centered Approach",
        desc: "It's not a panic app or police emergency system. It's designed for human connection, support and peace of mind."
      },
      trustCircle: {
        name: "Trust Circle",
        desc: "Define your network of trusted contacts. Only they will receive your updates and be able to respond."
      }
    },
    howItWorks: {
      title: "How SafeConnect Works",
      subtitle: "Three simple steps to stay connected with those who matter most.",
      step1: "Set up your circle",
      step1Desc: "Add the trusted people who will receive your status updates.",
      step2: "Send your status",
      step2Desc: "With a single tap, share how you're feeling. No forms or complicated steps.",
      step3: "Receive support",
      step3Desc: "Your contacts are notified and can communicate with you immediately."
    },
    technology: {
      title: "Robust and modern architecture",
      description: "SafeConnect is built with industry best practices, prioritizing reliability, security and scalability.",
      nativeApp: {
        name: "Native Mobile App",
        desc: "Developed in Kotlin + Jetpack Compose for a smooth and modern Android experience."
      },
      secureBackend: {
        name: "Secure Backend",
        desc: "FastAPI with robust authentication, data encryption and well-documented REST APIs."
      },
      cleanArch: {
        name: "Clean Architecture",
        desc: "Modular, testable and maintainable code following SOLID principles and modern design patterns."
      }
    },
    cta: {
      title: "Keep your loved ones close, even from a distance",
      description: "SafeConnect is an open-source project. Explore the code, contribute or simply use it to connect with those who matter most.",
      viewGithub: "View on GitHub",
      contactDev: "Contact Developer"
    },
    footer: {
      madeBy: "Developed by",
      role: "Senior Android Engineer"
    }
  },
  es: {
    nav: {
      features: "Características",
      howItWorks: "Cómo Funciona",
      technology: "Tecnología",
      github: "Ver en GitHub"
    },
    hero: {
      badge: "Conexión humana, no alarmas",
      title: "Comunicación segura para tu",
      titleHighlight: "bienestar emocional",
      description: "SafeConnect facilita el contacto rápido con personas de confianza en momentos de estrés o necesidad emocional, sin crear pánico ni activar procesos de emergencia innecesarios.",
      downloadApp: "Descargar App",
      viewDemo: "Ver Demo",
      private: "100% Privado",
      noAlarms: "Sin Alarmas",
      openSource: "Código Abierto"
    },
    features: {
      title: "Funcionalidades diseñadas para tu tranquilidad",
      subtitle: "Cada característica está pensada para facilitar la conexión humana sin generar estrés adicional.",
      quickCheckin: {
        name: "Quick Check-In",
        desc: "Envía tu estado con un solo toque: \"Estoy bien\", \"Necesito hablar\" o \"No me siento seguro/a\". Simple y sin complicaciones."
      },
      privateAlerts: {
        name: "Alertas Privadas",
        desc: "Las notificaciones se envían únicamente a contactos previamente autorizados, evitando exposición pública o alertas masivas."
      },
      instantComm: {
        name: "Comunicación Inmediata",
        desc: "Inicia llamadas o mensajes directos desde la alerta, reduciendo fricción en momentos emocionalmente cargados."
      },
      realtimeStatus: {
        name: "Estado en Tiempo Real",
        desc: "Tu contacto recibe actualizaciones simples de tu estado, sin requerir navegación compleja ni configuraciones."
      },
      humanFocus: {
        name: "Enfoque Humano",
        desc: "No es una app de pánico ni de emergencias policiales. Está diseñada para conexión humana, apoyo y tranquilidad."
      },
      trustCircle: {
        name: "Círculo de Confianza",
        desc: "Define tu red de contactos de confianza. Solo ellos recibirán tus actualizaciones y podrán responderte."
      }
    },
    howItWorks: {
      title: "Cómo funciona SafeConnect",
      subtitle: "Tres simples pasos para mantenerte conectado con quienes más importan.",
      step1: "Configura tu círculo",
      step1Desc: "Agrega a las personas de confianza que recibirán tus actualizaciones de estado.",
      step2: "Envía tu estado",
      step2Desc: "Con un solo toque, comparte cómo te sientes. Sin formularios ni pasos complicados.",
      step3: "Recibe apoyo",
      step3Desc: "Tus contactos son notificados y pueden comunicarse contigo de inmediato."
    },
    technology: {
      title: "Arquitectura robusta y moderna",
      description: "SafeConnect está construido con las mejores prácticas de la industria, priorizando la fiabilidad, seguridad y escalabilidad.",
      nativeApp: {
        name: "App Móvil Nativa",
        desc: "Desarrollada en Kotlin + Jetpack Compose para una experiencia fluida y moderna en Android."
      },
      secureBackend: {
        name: "Backend Seguro",
        desc: "FastAPI con autenticación robusta, encriptación de datos y APIs RESTful bien documentadas."
      },
      cleanArch: {
        name: "Clean Architecture",
        desc: "Código modular, testeable y mantenible siguiendo principios SOLID y patrones de diseño modernos."
      }
    },
    cta: {
      title: "Mantén a tus seres queridos cerca, incluso a distancia",
      description: "SafeConnect es un proyecto de código abierto. Explora el código, contribuye o simplemente úsalo para conectar con quienes más importan.",
      viewGithub: "Ver en GitHub",
      contactDev: "Contactar al Desarrollador"
    },
    footer: {
      madeBy: "Desarrollado por",
      role: "Senior Android Engineer"
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">SafeConnect</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">{t.nav.features}</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">{t.nav.howItWorks}</a>
            <a href="#technology" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">{t.nav.technology}</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              {language === "en" ? "ES" : "EN"}
            </button>
            <a href="https://github.com/SergioDan/safeconnect-mobile" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
                <Github className="w-4 h-4 mr-2" />
                {t.nav.github}
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Heart className="w-4 h-4" />
                {t.hero.badge}
              </div>
              
              <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
                {t.hero.title}{" "}
                <span className="text-gradient">{t.hero.titleHighlight}</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                  {t.hero.downloadApp}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary/30 text-foreground hover:bg-primary/5">
                  {t.hero.viewDemo}
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-muted-foreground">{t.hero.private}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-muted-foreground">{t.hero.noAlarms}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-muted-foreground">{t.hero.openSource}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative animate-float">
                <img 
                  src="/images/app-mockup.png" 
                  alt="SafeConnect App" 
                  className="w-full max-w-sm drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              {t.features.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.features.subtitle}
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: "/images/feature-checkin.png", ...t.features.quickCheckin },
              { icon: "/images/feature-privacy.png", ...t.features.privateAlerts },
              { icon: "/images/feature-communication.png", ...t.features.instantComm },
              { icon: "bell", ...t.features.realtimeStatus },
              { icon: "heart", ...t.features.humanFocus },
              { icon: "users", ...t.features.trustCircle }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {typeof feature.icon === "string" && feature.icon.startsWith("/") ? (
                        <img src={feature.icon} alt={feature.name} className="w-10 h-10 object-contain" />
                      ) : feature.icon === "bell" ? (
                        <Bell className="w-7 h-7 text-primary" />
                      ) : (
                        <Heart className="w-7 h-7 text-primary" />
                      )}
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-3">{feature.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gradient-calm">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              {t.howItWorks.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.howItWorks.subtitle}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { num: "1", title: t.howItWorks.step1, desc: t.howItWorks.step1Desc },
              { num: "2", title: t.howItWorks.step2, desc: t.howItWorks.step2Desc },
              { num: "3", title: t.howItWorks.step3, desc: t.howItWorks.step3Desc }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 relative">
                  <span className="font-display font-bold text-3xl text-primary">{step.num}</span>
                  {idx < 2 && (
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
                      <ArrowRight className="w-8 h-8 text-primary/30" />
                    </div>
                  )}
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                {t.technology.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t.technology.description}
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Smartphone, ...t.technology.nativeApp },
                  { icon: Shield, ...t.technology.secureBackend },
                  { icon: MessageCircle, ...t.technology.cleanArch }
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <tech.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-foreground mb-1">{tech.name}</h4>
                      <p className="text-muted-foreground">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="/images/hero-illustration.png" 
                  alt="SafeConnect Architecture" 
                  className="w-full rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl"></div>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-8 justify-center">
                {["Kotlin", "Jetpack Compose", "FastAPI", "Firebase", "Clean Architecture", "MVVM"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-calm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              {t.cta.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              {t.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/SergioDan/safeconnect-mobile" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                  <Github className="w-5 h-5 mr-2" />
                  {t.cta.viewGithub}
                </Button>
              </a>
              <a href="mailto:danielkrad@gmail.com">
                <Button size="lg" variant="outline" className="border-2 border-primary/30 text-foreground hover:bg-primary/5">
                  {t.cta.contactDev}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">SafeConnect</span>
            </div>
            
            <p className="text-muted-foreground text-sm">
              {t.footer.madeBy} <span className="font-semibold text-foreground">Sergio Daniel Ramírez</span> · {t.footer.role}
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/SergioDan/safeconnect-mobile"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Github className="w-5 h-5 text-muted-foreground" />
              </a>
              <a 
                href="https://linkedin.com/in/sergioramirezh"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
