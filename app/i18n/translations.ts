export type Language = 'tr' | 'en' | 'de' | 'ru';

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

export const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Nav
    'nav.services': 'Hizmetler',
    'nav.process': 'Süreç',
    'nav.careers': 'Kariyer',
    'nav.faq': 'SSS',
    'nav.contact': 'İletişim',
    'nav.cta': 'Bize Ulaşın',

    // Hero
    'hero.badge': 'Yazılım & İnovasyon Stüdyosu',
    'hero.title': 'Softrestart',
    'hero.tagline': 'Kodunuzu yeniden başlatın. Yüksek performanslı dijital ürünler ve sistemler inşa edin.',
    'hero.cta': 'Bize Ulaşın',
    'hero.scroll': 'Keşfet',

    // Feature Cards
    'feature.web.title': 'Modern Web & Mobil',
    'feature.web.sub': 'Next.js & React Native ile yüksek hızlı uygulamalar',
    'feature.saas.title': 'SaaS Sistemleri',
    'feature.saas.sub': 'Ölçeklenebilir mimari, ödeme altyapısı & yönetim paneli',
    'feature.cloud.title': 'Cloud & DevOps',
    'feature.cloud.sub': 'Docker & CI/CD ile kesintisiz altyapı dağıtımı',
    'feature.ui.title': 'UI/UX Tasarım',
    'feature.ui.sub': 'Pixel-perfect modern arayüz tasarımı',

    // Services Page
    'services.badge': 'Hizmetlerimiz',
    'services.title': 'Ne Yapıyoruz?',
    'services.subtitle': 'Fikrinizi gerçeğe dönüştürmek için tasarımdan ölçeklendirmeye kadar uçtan uca yüksek mühendislik çözümleri.',
    'services.tech': 'Teknolojiler',
    'services.cta.title': 'Projenizi birlikte uçtan uca inşa edelim.',
    'services.cta.ready': 'Hazır mısınız?',
    'services.cta.button': 'Ücretsiz Görüşme Ayarla →',

    'service.01.title': 'Web & Mobil Uygulama',
    'service.01.short': 'React, Next.js ve React Native ile performanslı dijital deneyimler.',
    'service.01.detail': 'Kullanıcı odaklı, erişilebilir ve ölçeklenebilir web ile mobil uygulamalar geliştiriyoruz. React, Next.js, React Native ve Expo ile rakiplerinizden bir adım önde olun.',

    'service.02.title': 'SaaS Ürün Geliştirme',
    'service.02.short': 'Sıfırdan SaaS — kullanıcı yönetimi, ödeme, ölçeklenebilir altyapı.',
    'service.02.detail': 'Fikrinizi gelir getiren bir ürüne dönüştürüyoruz. Node.js, Laravel, Express.js ve MySQL altyapısıyla güvenli ve sürdürülebilir sistemler kuruyoruz.',

    'service.03.title': 'API & Backend Sistemleri',
    'service.03.short': 'Node.js, Express.js, PHP ve Laravel ile güvenli ve hızlı API’ler.',
    'service.03.detail': 'RESTful API’ler, veritabanı mimarileri ve hızlı backend servisleri. Yük altında lineer ölçeklenen MySQL ve MongoDB altyapısı.',

    'service.04.title': 'UI/UX Tasarım',
    'service.04.short': 'Pixel-perfect tasarımdan ön yüze dönüşüm odaklı arayüzler.',
    'service.04.detail': 'Kullanıcı araştırması, bilgi mimarisi, wireframing ve yüksek kaliteli arayüz geliştirme. React ve Next.js komponent mimarisi.',

    'service.05.title': 'DevOps & Altyapı',
    'service.05.short': 'Docker, Git ve Firebase ile kesintisiz yayınlama ve dağıtım.',
    'service.05.detail': 'Docker konteynerleştirme, Git versiyon kontrolü, Firebase ve modern bulut araçlarıyla kesintisiz deployment akışları.',

    'service.06.title': 'Teknik Danışmanlık',
    'service.06.short': 'Mimari kararlar, kod kalite analizi, teknoloji seçimi ve strateji.',
    'service.06.detail': 'JavaScript, TypeScript ve PHP kod tabanlarınızı devralıp sürdürülebilir hale getiriyor, ekibinizi büyütürken teknik kaliteyi koruyoruz.',

    // Process Page
    'process.badge': 'Metodoloji',
    'process.title': 'Nasıl Çalışıyoruz?',
    'process.subtitle': 'Şeffaf, öngörülebilir, sürprizsiz. Her aşamada ne yapıldığı ve bir sonraki adımın ne olduğunu tam netlikle bilirsiniz.',
    'process.deliverables': 'Çıktılar',
    'process.cta.title': 'Projenize başlamaya hazır mısınız?',
    'process.cta.sub': 'İlk görüşme ücretsiz — 24 saat içinde dönüş yapıyoruz.',
    'process.cta.button': 'Görüşme Ayarla →',

    'step.01.title': 'Keşif & Analiz',
    'step.01.tagline': 'Soru sormadan kod yazmak körlüktür.',
    'step.01.detail': 'İş hedeflerinizi, kullanıcı ihtiyaçlarını ve teknik kısıtları derinlemesine anlıyoruz. Rakip analizi, kullanıcı görüşmeleri ve teknik fizibilite raporu bu aşamada hazırlanıyor.',
    'step.01.d1': 'Keşif Raporu',
    'step.01.d2': 'Teknik Fizibilite',
    'step.01.d3': 'Proje Takvimi',
    'step.01.d4': 'Maliyet Tahmini',

    'step.02.title': 'Tasarım & Prototip',
    'step.02.tagline': 'Onayınız olmadan tek satır kod yazılmaz.',
    'step.02.detail': 'Wireframe’lerden yüksek kaliteli prototiplere. Her tıklanabilir akış — canlıya almadan önce test ediyorsunuz. Komponent kütüphanesi bu aşamada kuruluyor.',
    'step.02.d1': 'Arayüz Prototipi',
    'step.02.d2': 'Design System',
    'step.02.d3': 'Kullanıcı Akışları',
    'step.02.d4': 'Komponent Mimarisi',

    'step.03.title': 'Geliştirme & Test',
    'step.03.tagline': 'Her sprint sonunda çalışan ürün, sıfır sürpriz.',
    'step.03.detail': 'İki haftalık sprint’ler. Her sprint sonunda deploy edilmiş, test edilmiş bir artış. Otomatik test, kod incelemesi ve sürekli entegrasyon.',
    'step.03.d1': 'Çalışan Sprint Çıktıları',
    'step.03.d2': 'Test Raporları',
    'step.03.d3': 'Git Pipeline',
    'step.03.d4': 'API Dokümantasyonu',

    'step.04.title': 'Lansman & Destek',
    'step.04.tagline': 'Canlıya almak bitiş değil, başlangıçtır.',
    'step.04.detail': 'Sıfır kesintili deployment, gerçek zamanlı izleme ve lansman sonrası teknik destek. Büyüme verilerine göre sonraki adımları birlikte planlıyoruz.',
    'step.04.d1': 'Canlı Deployment',
    'step.04.d2': 'Sistem İzleme',
    'step.04.d3': 'Teknik Destek',
    'step.04.d4': 'Büyüme Haritası',

    // Cyberpunk Hacker Careers Manifesto Page
    'careers.status': '[ STATUS: SEARCHING FOR BUILDERS ]  //  SYS_ID: RESTART_LABS',
    'careers.badge': 'REBEL ENGINEERING MANIFESTO',
    'careers.hero.title1': 'KURALLARA UYANLARI DEĞİL,',
    'careers.hero.title2': 'KURALLARI YAZANLARI ARIYORUZ.',
    'careers.hero.subtitle': 'Softrestart; saatlere değil üretime, lokasyona değil etkiye, bürokrasiye değil fikirlere inanan remote-first bir mühendislik topluluğudur.',
    'careers.hero.cta': 'ENTER THE RESTART →',

    'manifesto.01.code': '01 // NO OFFICE. NO CLOCK. NO LIMITS.',
    'manifesto.01.title': 'Ofis bir yer değildir.\nÜretmeye başladığın her yer senin çalışma alanındır.',
    'manifesto.01.desc': 'İstanbul, Berlin, sahil, ev veya dünyanın herhangi bir noktası. Konum sınırlarını yıktık; dünya standartlarında işleri tamamen bağımsız üretiyoruz.',

    'manifesto.02.code': '02 // TIME IS NOT THE METRIC.',
    'manifesto.02.title': 'SAATLERİ DEĞİL,\nSONUÇLARI TAKİP EDİYORUZ.',
    'manifesto.02.desc': 'Bir insanı online olduğu saatlerle değil, ortaya çıkardığı değerle ölçeriz. Kendi odağına göre çalış; mülkiyet ve kalite tek ölçütümüzdür.',

    'manifesto.03.code': '03 // BUILD SOMETHING THAT MATTERS.',
    'manifesto.03.title': 'MASA SAATİ DEĞİL,\nYARATTIĞIN ETKİ ÖNEMLİ.',
    'manifesto.03.desc': 'Temiz kod. Güçlü mimari. Kusursuz kullanıcı deneyimi. Ekran başında geçen zaman değil, dijital dünyada bıraktığın iz değerlidir.',

    'manifesto.04.code': "04 // DON'T JOIN A COMPANY. BUILD WITH US.",
    'manifesto.04.title': 'BİR FİKRİN VAR MI?\nBELKİ ARADIĞIN EKİP BİZİZ.',
    'manifesto.04.desc': 'Girişim fikrin, prototipin varsa veya teknik ortağa ihtiyacın varsa bize ulaşabilirsin. Sıradan bir çalışan gibi değil, kurucu gibi birlikte inşa edelim.',

    // System Stack Section
    'stack.badge': '[ SYSTEM STACK // CORE INFRASTRUCTURE ]',
    'stack.title': 'SYSTEM STACK',
    'stack.cat.frontend': 'Frontend',
    'stack.cat.backend': 'Backend',
    'stack.cat.database': 'Database',
    'stack.cat.infra': 'Infrastructure & Tools',
    'stack.note': '* Bu teknolojilerle sınırlı değiliz. Farklı teknolojiler kullanan geliştiricilere kapımız açıktır. İnsanları teknoloji bağımlılığıyla değil; zihniyeti, deneyimi ve üretme yeteneğiyle değerlendiririz.',

    'matrix.tagline': 'Çoğu insan var olan sistemleri kullanır.\nBiz yenilerini inşa ederiz.',
    'matrix.cta': 'ENTER THE RESTART →',

    // FAQ Section
    'faq.badge': 'SSS',
    'faq.title': 'Sık Sorulan Sorular',
    'faq.subtitle': 'Aklınıza takılan tüm konular için şeffaf yanıtlarımız.',
    'faq.q1': 'Yazılım geliştirme süreci nasıl ilerliyor?',
    'faq.a1': 'Sürecimiz Keşif & Analiz, Tasarım & Prototip, Çevik Geliştirme (Sprint’ler) ve Lansman & Destek aşamalarından oluşur. Her sprint sonunda çalışan bir ürünü incelemenize sunar, Slack ve düzenli demo görüşmeleriyle tam şeffaflık sağlarız.',
    'faq.q2': 'Hangi tür yazılım çözümleri sunuyoruz?',
    'faq.a2': 'Modern Web ve Mobil Uygulamalar, Ölçeklenebilir SaaS Platformları, Özel API Mimarileri ve UI/UX Tasarım çözümleri geliştiriyoruz.',
    'faq.q3': 'Neden SOFTRESTART’ı tercih etmeliyim?',
    'faq.a3': 'Sabit çalışma saatleri yerine yüksek kod kalitesine, şeffaf iletişime ve ürün odaklı yaklaşıma inanıyoruz. Girişimci ruhlu mühendislerimizle fikrinizi doğrudan çalışan ve ölçeklenebilen bir iş modeline dönüştürüyoruz.',

    // Contact Section
    'contact.badge': 'İletişim',
    'contact.title': 'Bize Ulaşın',
    'contact.subtitle': 'Fikirleriniz, projeleriniz veya iş birliği talepleriniz için doğrudan iletişim kanallarımız.',
    'contact.email': 'E-POSTA',
    'contact.phone': 'TELEFON',
    'contact.location': 'KONUM',
    'contact.city': 'İstanbul merkezli, dünyanın her yerinden çalışan ekip.',
    'contact.response': 'Ortalama yanıt süresi:',
    'contact.time': '< 4 saat',

    // Footer
    'footer.desc': 'Fikirleri çalışan ürünlere dönüştüren yazılım & inovasyon stüdyosu. İstanbul’dan dünyaya yüksek kaliteli yazılım.',
    'footer.col.services': 'Hizmetler',
    'footer.col.company': 'Şirket',
    'footer.col.contact': 'İletişim',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.madeIn': 'LOCATION: EVERYWHERE',
    'footer.link.webApp': 'Web Uygulama',
    'footer.link.mobileApp': 'Mobil Uygulama',
    'footer.link.saas': 'SaaS Ürünleri',
    'footer.link.uiux': 'UI/UX Tasarım',
    'footer.link.devops': 'DevOps & Altyapı',
  },

  en: {
    // Nav
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.careers': 'Careers',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Get in Touch',

    // Hero
    'hero.badge': 'Software & Innovation Studio',
    'hero.title': 'Softrestart',
    'hero.tagline': 'Restart your codebase. Build high-performance digital products and scalable systems.',
    'hero.cta': 'Get in Touch',
    'hero.scroll': 'Discover',

    // Feature Cards
    'feature.web.title': 'Modern Web & Mobile',
    'feature.web.sub': 'High-speed apps built with Next.js & React Native',
    'feature.saas.title': 'SaaS Systems',
    'feature.saas.sub': 'Scalable architecture, billing infrastructure & admin dashboard',
    'feature.cloud.title': 'Cloud & DevOps',
    'feature.cloud.sub': 'Zero-downtime infrastructure deployment with Docker & CI/CD',
    'feature.ui.title': 'UI/UX Design',
    'feature.ui.sub': 'Pixel-perfect modern interface design',

    // Services Page
    'services.badge': 'Our Services',
    'services.title': 'What We Build',
    'services.subtitle': 'End-to-end high-engineering solutions from design to scaling to turn your vision into reality.',
    'services.tech': 'Technologies',
    'services.cta.title': 'Let’s build your project end-to-end together.',
    'services.cta.ready': 'Ready to start?',
    'services.cta.button': 'Schedule Free Call →',

    'service.01.title': 'Web & Mobile Applications',
    'service.01.short': 'High-performance digital experiences powered by React, Next.js & React Native.',
    'service.01.detail': 'We craft user-focused, accessible and scalable web and mobile applications with React, Next.js, React Native, and Expo.',

    'service.02.title': 'SaaS Product Development',
    'service.02.short': 'SaaS from scratch — user management, billing, scalable infrastructure.',
    'service.02.detail': 'We transform your idea into a revenue-generating product powered by Node.js, Laravel, Express.js, and MySQL.',

    'service.03.title': 'API & Backend Systems',
    'service.03.short': 'Secure, blazingly fast APIs built with Node.js, Express.js, PHP & Laravel.',
    'service.03.detail': 'RESTful APIs, database architectures, and fast backend services scaling linearly under high loads with MySQL & MongoDB.',

    'service.04.title': 'UI/UX Design',
    'service.04.short': 'From pixel-perfect design to frontend implementation.',
    'service.04.detail': 'User research, information architecture, wireframing, and high-fidelity interface engineering with React & Next.js.',

    'service.05.title': 'DevOps & Infrastructure',
    'service.05.short': 'Docker, Git, and Firebase for zero-downtime deployment pipelines.',
    'service.05.detail': 'Docker containerization, Git version control, Firebase, and modern cloud deployment pipelines.',

    'service.06.title': 'Technical Consulting',
    'service.06.short': 'Architectural decisions, code quality audits, tech stack selection & strategy.',
    'service.06.detail': 'We take over JavaScript, TypeScript, and PHP codebases to make them maintainable and safeguard engineering quality.',

    // Process Page
    'process.badge': 'Methodology',
    'process.title': 'How We Work',
    'process.subtitle': 'Transparent, predictable, no surprises. Know exactly what is being built and what comes next at every stage.',
    'process.deliverables': 'Deliverables',
    'process.cta.title': 'Ready to launch your project?',
    'process.cta.sub': 'First consultation is free — we respond within 24 hours.',
    'process.cta.button': 'Schedule a Call →',

    'step.01.title': 'Discovery & Analysis',
    'step.01.tagline': 'Writing code without asking questions is blind.',
    'step.01.detail': 'We deeply understand your business goals, user needs, and technical constraints. Competitor research, user interviews, and technical feasibility reports are crafted during this phase.',
    'step.01.d1': 'Discovery Report',
    'step.01.d2': 'Technical Feasibility',
    'step.01.d3': 'Project Timeline',
    'step.01.d4': 'Cost Estimation',

    'step.02.title': 'Design & Prototype',
    'step.02.tagline': 'Not a single line of code is written without your approval.',
    'step.02.detail': 'From wireframes to interactive prototypes. You test every clickable user flow before going live.',
    'step.02.d1': 'Interface Prototype',
    'step.02.d2': 'Design System',
    'step.02.d3': 'User Flow Diagrams',
    'step.02.d4': 'Component Architecture',

    'step.03.title': 'Development & Testing',
    'step.03.tagline': 'Working software at the end of every sprint, zero surprises.',
    'step.03.detail': 'Two-week agile sprints delivering tested, production-ready increments with automated testing and continuous integration.',
    'step.03.d1': 'Working Sprint Releases',
    'step.03.d2': 'Test Reports',
    'step.03.d3': 'Git Pipeline',
    'step.03.d4': 'API Documentation',

    'step.04.title': 'Launch & Support',
    'step.04.tagline': 'Going live is not the end, it’s just the beginning.',
    'step.04.detail': 'Zero-downtime deployment, real-time performance monitoring, and ongoing technical support.',
    'step.04.d1': 'Live Deployment',
    'step.04.d2': 'System Monitoring',
    'step.04.d3': 'Technical Support',
    'step.04.d4': 'Growth Roadmap',

    // Cyberpunk Hacker Careers Manifesto Page
    'careers.status': '[ STATUS: SEARCHING FOR BUILDERS ]  //  SYS_ID: RESTART_LABS',
    'careers.badge': 'REBEL ENGINEERING MANIFESTO',
    'careers.hero.title1': 'WE ARE NOT LOOKING FOR FOLLOWERS.',
    'careers.hero.title2': 'WE LOOK FOR THOSE WHO WRITE THE RULES.',
    'careers.hero.subtitle': 'Softrestart is a remote-first engineering collective believing in output over hours, impact over location, and ideas over bureaucracy.',
    'careers.hero.cta': 'ENTER THE RESTART →',

    'manifesto.01.code': '01 // NO OFFICE. NO CLOCK. NO LIMITS.',
    'manifesto.01.title': 'An office is not a place.\nEverywhere you start creating is your workspace.',
    'manifesto.01.desc': 'Istanbul, Berlin, a coastal town, or home. We broke physical limits to build world-class software location-independently.',

    'manifesto.02.code': '02 // TIME IS NOT THE METRIC.',
    'manifesto.02.title': 'WE TRACK RESULTS,\nNOT HOURS.',
    'manifesto.02.desc': 'We measure people by the value they create, not the hours they sit online. Work on your focus rhythm — ownership and execution are our sole criteria.',

    'manifesto.03.code': '03 // BUILD SOMETHING THAT MATTERS.',
    'manifesto.03.title': 'NOT DESK HOURS,\nBUT THE IMPACT YOU CREATE.',
    'manifesto.03.desc': 'Clean code. Scalable architecture. Real impact. We care about craftsmanship that leaves a lasting mark on the digital landscape.',

    'manifesto.04.code': "04 // DON'T JOIN A COMPANY. BUILD WITH US.",
    'manifesto.04.title': 'HAVE AN AMBITIOUS IDEA?\nBUILD WITH US.',
    'manifesto.04.desc': 'If you have a startup idea, prototype or need technical partners, reach out. Build with us as a partner, not an order taker.',

    // System Stack Section
    'stack.badge': '[ SYSTEM STACK // CORE INFRASTRUCTURE ]',
    'stack.title': 'SYSTEM STACK',
    'stack.cat.frontend': 'Frontend',
    'stack.cat.backend': 'Backend',
    'stack.cat.database': 'Database',
    'stack.cat.infra': 'Infrastructure & Tools',
    'stack.note': '* We are not limited to these technologies. Developers using different technologies are welcome. We evaluate people by their mindset, experience, and ability to build.',

    'matrix.tagline': 'Most people use existing systems.\nWe build new ones.',
    'matrix.cta': 'ENTER THE RESTART →',

    // FAQ Section
    'faq.badge': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Transparent answers to everything you might wonder about.',
    'faq.q1': 'How does your software development process work?',
    'faq.a1': 'Our workflow includes Discovery & Analysis, Design & Prototyping, Agile Development (Sprints), and Launch & Support. At the end of each sprint, we present a working product increment.',
    'faq.q2': 'What kinds of software solutions do you build?',
    'faq.a2': 'We build Modern Web & Mobile Applications, Scalable SaaS Platforms, Custom API Architectures, and UI/UX Designs.',
    'faq.q3': 'Why should I choose SOFTRESTART?',
    'faq.a3': 'We prioritize code quality, open communication, and product mindset over rigid bureaucracy.',

    // Contact Section
    'contact.badge': 'Contact',
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Direct communication channels for your ideas, projects, or partnership inquiries.',
    'contact.email': 'EMAIL',
    'contact.phone': 'PHONE',
    'contact.location': 'LOCATION',
    'contact.city': 'Istanbul based, remote-first global team.',
    'contact.response': 'Average response time:',
    'contact.time': '< 4 hours',

    // Footer
    'footer.desc': 'Software & innovation studio transforming ideas into high-performing products.',
    'footer.col.services': 'Services',
    'footer.col.company': 'Company',
    'footer.col.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.madeIn': 'LOCATION: EVERYWHERE',
    'footer.link.webApp': 'Web Applications',
    'footer.link.mobileApp': 'Mobile Applications',
    'footer.link.saas': 'SaaS Products',
    'footer.link.uiux': 'UI/UX Design',
    'footer.link.devops': 'DevOps & Infrastructure',
  },

  de: {
    // Nav
    'nav.services': 'Leistungen',
    'nav.process': 'Ablauf',
    'nav.careers': 'Karriere',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Kontaktieren',

    // Hero
    'hero.badge': 'Software & Innovationsstudio',
    'hero.title': 'Softrestart',
    'hero.tagline': 'Starten Sie Ihre Codebasis neu. Entwickeln Sie leistungsstarke digitale Produkte.',
    'hero.cta': 'Kontaktieren',
    'hero.scroll': 'Entdecken',

    // Feature Cards
    'feature.web.title': 'Modernes Web & Mobil',
    'feature.web.sub': 'Hochgeschwindigkeits-Apps mit Next.js & React Native',
    'feature.saas.title': 'SaaS-Systeme',
    'feature.saas.sub': 'Skalierbare Architektur & Dashboard',
    'feature.cloud.title': 'Cloud & DevOps',
    'feature.cloud.sub': 'Infrastruktur-Deployment mit Docker & CI/CD',
    'feature.ui.title': 'UI/UX Design',
    'feature.ui.sub': 'Pixelperfektes modernstes Interface-Design',

    // Services Page
    'services.badge': 'Unsere Leistungen',
    'services.title': 'Was wir entwickeln',
    'services.subtitle': 'Umfassende Engineering-Lösungen von Design bis Skalierung.',
    'services.tech': 'Technologien',
    'services.cta.title': 'Lassen Sie uns Ihr Projekt gemeinsam aufbauen.',
    'services.cta.ready': 'Bereit zum Start?',
    'services.cta.button': 'Kostenloses Erstgespräch →',

    'service.01.title': 'Web- & Mobilanwendungen',
    'service.01.short': 'Leistungsstarke digitale Erlebnisse mit React, Next.js & React Native.',
    'service.01.detail': 'Wir entwickeln skalierbare Anwendungen mit React, Next.js, React Native und Expo.',

    'service.02.title': 'SaaS-Produktentwicklung',
    'service.02.short': 'SaaS von Grund auf — Benutzerverwaltung, Abrechnung, skalierbar.',
    'service.02.detail': 'Wir verwandel Ihre Idee in ein Produkt mit Node.js, Laravel, Express.js und MySQL.',

    'service.03.title': 'API- & Backend-Systeme',
    'service.03.short': 'Sichere APIs und backend Dienste mit Node.js, Express.js, PHP & Laravel.',
    'service.03.detail': 'RESTful APIs und backend Infrastruktur mit MySQL und MongoDB.',

    'service.04.title': 'UI/UX Design',
    'service.04.short': 'Von Konzept bis zur React & Next.js Umsetzung.',
    'service.04.detail': 'Nutzerforschung, Wireframing und Prototyping mit React & Next.js.',

    'service.05.title': 'DevOps & Infrastruktur',
    'service.05.short': 'Docker, Git und Firebase für Deployment-Pipelines.',
    'service.05.detail': 'Docker-Containerisierung, Git und Firebase Cloud-Pipelines.',

    'service.06.title': 'Technische Beratung',
    'service.06.short': 'Architekturentscheidungen, Code-Audits, Tech-Stack-Wahl.',
    'service.06.detail': 'Wir übernehmen JavaScript, TypeScript und PHP Codebasen und sichern die Qualität.',

    // Process Page
    'process.badge': 'Methodik',
    'process.title': 'Wie wir arbeiten',
    'process.subtitle': 'Transparent, vorhersehbar, ohne Überraschungen.',
    'process.deliverables': 'Ergebnisse',
    'process.cta.title': 'Bereit, Ihr Projekt zu starten?',
    'process.cta.sub': 'Erstes Beratungsgespräch kostenlos.',
    'process.cta.button': 'Gespräch vereinbaren →',

    'step.01.title': 'Analyse & Konzeption',
    'step.01.tagline': 'Code ohne Fragen ist blind.',
    'step.01.detail': 'Wir verstehen Ihre Geschäftsziele und technischen Rahmenbedingungen.',
    'step.01.d1': 'Analysebericht',
    'step.01.d2': 'Machbarkeit',
    'step.01.d3': 'Projektzeitplan',
    'step.01.d4': 'Kostenschätzung',

    'step.02.title': 'Design & Prototyp',
    'step.02.tagline': 'Keine Zeile Code wird ohne Ihre Freigabe geschrieben.',
    'step.02.detail': 'Von Wireframes bis zu interaktiven Prototypen.',
    'step.02.d1': 'Prototyp',
    'step.02.d2': 'Design System',
    'step.02.d3': 'User-Flows',
    'step.02.d4': 'Komponenten-Architektur',

    'step.03.title': 'Entwicklung & Test',
    'step.03.tagline': 'Lauffähige Software am Ende jedes Sprints.',
    'step.03.detail': 'Zweiwöchige agile Sprints mit getesteten Produktinkrementen.',
    'step.03.d1': 'Sprint-Releases',
    'step.03.d2': 'Testberichte',
    'step.03.d3': 'Git-Pipeline',
    'step.03.d4': 'API-Dokumentation',

    'step.04.title': 'Launch & Support',
    'step.04.tagline': 'Der Live-Gang ist erst der Anfang.',
    'step.04.detail': 'Zero-Downtime Deployment und technische Unterstützung.',
    'step.04.d1': 'Live-Deployment',
    'step.04.d2': 'System-Monitoring',
    'step.04.d3': 'Technischer Support',
    'step.04.d4': 'Wachstums-Roadmap',

    // Cyberpunk Hacker Careers Manifesto Page
    'careers.status': '[ STATUS: SEARCHING FOR BUILDERS ]  //  SYS_ID: RESTART_LABS',
    'careers.badge': 'REBEL ENGINEERING MANIFESTO',
    'careers.hero.title1': 'WIR SUCHEN KEINE ANPASSUNG,',
    'careers.hero.title2': 'SONDERN MENSCHEN DIE REGELN SCHREIBEN.',
    'careers.hero.subtitle': 'Softrestart ist ein Remote-First Kollektiv, das Ergebnisse über Arbeitsstunden stellt.',
    'careers.hero.cta': 'ENTER THE RESTART →',

    'manifesto.01.code': '01 // NO OFFICE. NO CLOCK. NO LIMITS.',
    'manifesto.01.title': 'Ein Büro ist kein Ort.\nWo du erschaffst, ist dein Arbeitsplatz.',
    'manifesto.01.desc': 'Istanbul, Berlin oder am Meer. Wir bauen erstklassige Software standortunabhängig.',

    'manifesto.02.code': '02 // TIME IS NOT THE METRIC.',
    'manifesto.02.title': 'WIR TRACKEN ERGEBNISSE,\nKEINE STUNDEN.',
    'manifesto.02.desc': 'Wir messen Werte, nicht Online-Zeiten. Arbeite in deinem eigenen Fokus-Rhythmus.',

    'manifesto.03.code': '03 // BUILD SOMETHING THAT MATTERS.',
    'manifesto.03.title': 'NICHT ANWESENHEIT,\nSONDERN DEINE WIRKUNG ZÄHLT.',
    'manifesto.03.desc': 'Sauberer Code. Skalierbare Architektur. Echtes Produkt-Handwerk.',

    'manifesto.04.code': "04 // DON'T JOIN A COMPANY. BUILD WITH US.",
    'manifesto.04.title': 'HAST DU EINE VISION?\nBAUE MIT UNS.',
    'manifesto.04.desc': 'Hast du eine Startup-Idee oder brauchst du einen technischen Partner? Baue mit uns.',

    // System Stack Section
    'stack.badge': '[ SYSTEM STACK // CORE INFRASTRUCTURE ]',
    'stack.title': 'SYSTEM STACK',
    'stack.cat.frontend': 'Frontend',
    'stack.cat.backend': 'Backend',
    'stack.cat.database': 'Database',
    'stack.cat.infra': 'Infrastructure & Tools',
    'stack.note': '* Wir sind nicht auf diese Technologien beschränkt. Entwickler mit anderen Stacks sind willkommen.',

    'matrix.tagline': 'Die meisten Menschen nutzen bestehende Systeme.\nWir bauen neue.',
    'matrix.cta': 'ENTER THE RESTART →',

    // FAQ Section
    'faq.badge': 'FAQ',
    'faq.title': 'Häufig gestellte Fragen',
    'faq.subtitle': 'Transparente Antworten auf all Ihre Fragen.',
    'faq.q1': 'Wie läuft der Softwareentwicklungsprozess ab?',
    'faq.a1': 'Unser Ablauf umfasst Analyse, Design, agile Sprints und Launch.',
    'faq.q2': 'Welche Art von Softwarelösungen bieten Sie an?',
    'faq.a2': 'Wir entwickeln Web- & Mobilanwendungen, SaaS-Plattformen und APIs.',
    'faq.q3': 'Warum sollte ich SOFTRESTART wählen?',
    'faq.a3': 'Wir setzen auf höchste Codequalität und transparente Kommunikation.',

    // Contact Section
    'contact.badge': 'Kontakt',
    'contact.title': 'Kontaktieren Sie uns',
    'contact.subtitle': 'Direkte Kommunikationskanäle für Ihre Anfragen.',
    'contact.email': 'E-MAIL',
    'contact.phone': 'TELEFON',
    'contact.location': 'STANDORT',
    'contact.city': 'Sitz in Istanbul, weltweites Remote-Team.',
    'contact.response': 'Durchschnittliche Antwortzeit:',
    'contact.time': '< 4 Stunden',

    // Footer
    'footer.desc': 'Software- & Innovationsstudio.',
    'footer.col.services': 'Leistungen',
    'footer.col.company': 'Unternehmen',
    'footer.col.contact': 'Kontakt',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.madeIn': 'LOCATION: EVERYWHERE',
    'footer.link.webApp': 'Webanwendungen',
    'footer.link.mobileApp': 'Mobile Anwendungen',
    'footer.link.saas': 'SaaS-Produkte',
    'footer.link.uiux': 'UI/UX Design',
    'footer.link.devops': 'DevOps & Infrastruktur',
  },

  ru: {
    // Nav
    'nav.services': 'Услуги',
    'nav.process': 'Процесс',
    'nav.careers': 'Карьера',
    'nav.faq': 'ЧаВо',
    'nav.contact': 'Контакты',
    'nav.cta': 'Связаться',

    // Hero
    'hero.badge': 'Студия Программного Обеспечения',
    'hero.title': 'Softrestart',
    'hero.tagline': 'Перезапустите ваш код. Создавайте высокопроизводительные цифровые продукты.',
    'hero.cta': 'Связаться',
    'hero.scroll': 'Узнать больше',

    // Feature Cards
    'feature.web.title': 'Веб и Мобильная Разработка',
    'feature.web.sub': 'Быстрые приложения на Next.js и React Native',
    'feature.saas.title': 'SaaS Системы',
    'feature.saas.sub': 'Масштабируемая архитектура и панель управления',
    'feature.cloud.title': 'Cloud & DevOps',
    'feature.cloud.sub': 'Развертывание инфраструктуры с Docker и CI/CD',
    'feature.ui.title': 'UI/UX Дизайн',
    'feature.ui.sub': 'Современный интерфейсный дизайн',

    // Services Page
    'services.badge': 'Наши Услуги',
    'services.title': 'Что мы создаем?',
    'services.subtitle': 'Комплексные инженерные решения от дизайна до масштабирования.',
    'services.tech': 'Технологии',
    'services.cta.title': 'Давайте создадим ваш проект вместе.',
    'services.cta.ready': 'Готовы начать?',
    'services.cta.button': 'Записаться на консультацию →',

    'service.01.title': 'Веб и Мобильные Приложения',
    'service.01.short': 'Высокопроизводительные сервисы на React, Next.js и React Native.',
    'service.01.detail': 'Мы разрабатываем мобильные и веб-приложения на React, Next.js, React Native и Expo.',

    'service.02.title': 'Разработка SaaS Продуктов',
    'service.02.short': 'SaaS с нуля — управление пользователями, биллинг, масштабируемость.',
    'service.02.detail': 'Превратим вашу идею в доходный продукт на Node.js, Laravel, Express.js и MySQL.',

    'service.03.title': 'API и Backend Системы',
    'service.03.short': 'Надежные и быстрые API на Node.js, Express.js, PHP и Laravel.',
    'service.03.detail': 'RESTful API и бэкенд-инфраструктура на MySQL и MongoDB.',

    'service.04.title': 'UI/UX Дизайн',
    'service.04.short': 'От интерфейсного дизайна до реализации на React и Next.js.',
    'service.04.detail': 'Прототипирование и проектирование интерфейсов с React и Next.js.',

    'service.05.title': 'DevOps и Инфраструктура',
    'service.05.short': 'Docker, Git и Firebase для бесперебойного деплоя.',
    'service.05.detail': 'Контейнеризация Docker, версионирование Git и Firebase.',

    'service.06.title': 'Технический Консалтинг',
    'service.06.short': 'Архитектурные решения, аудит кода и выбор стека.',
    'service.06.detail': 'Оптимизируем код на JavaScript, TypeScript и PHP.',

    // Process Page
    'process.badge': 'Методология',
    'process.title': 'Как Мы Работаем?',
    'process.subtitle': 'Прозрачно, предсказуемо, без сюрпризов.',
    'process.deliverables': 'Результаты',
    'process.cta.title': 'Готовы запустить свой проект?',
    'process.cta.sub': 'Первая консультация бесплатная.',
    'process.cta.button': 'Запланировать звонок →',

    'step.01.title': 'Анализ и Исследование',
    'step.01.tagline': 'Писать код без вопросов — слепота.',
    'step.01.detail': 'Мы изучаем ваши бизнес-цели и технические ограничения.',
    'step.01.d1': 'Отчет об исследовании',
    'step.01.d2': 'Технический аудит',
    'step.01.d3': 'График проекта',
    'step.01.d4': 'Оценка стоимости',

    'step.02.title': 'Дизайн и Прототип',
    'step.02.tagline': 'Ни одной строчки кода без вашего одобрения.',
    'step.02.detail': 'От вайрфреймов до интерактивных прототипов.',
    'step.02.d1': 'Прототип',
    'step.02.d2': 'Дизайн-система',
    'step.02.d3': 'Сценарии',
    'step.02.d4': 'Архитектура компонентов',

    'step.03.title': 'Разработка и Тестирование',
    'step.03.tagline': 'Работающий продукт в конце каждого спринта.',
    'step.03.detail': 'Двухнедельные спринты с тестами и непрерывной интеграцией.',
    'step.03.d1': 'Релизы спринтов',
    'step.03.d2': 'Отчеты о тестировании',
    'step.03.d3': 'Git Пайплайн',
    'step.03.d4': 'Документация API',

    'step.04.title': 'Запуск и Поддержка',
    'step.04.tagline': 'Релиз — это не конец, а начало.',
    'step.04.detail': 'Бесперебойное развертывание и техническая поддержка.',
    'step.04.d1': 'Живой деплой',
    'step.04.d2': 'Мониторинг',
    'step.04.d3': 'Поддержка',
    'step.04.d4': 'Дорожная карта',

    // Cyberpunk Hacker Careers Manifesto Page
    'careers.status': '[ STATUS: SEARCHING FOR BUILDERS ]  //  SYS_ID: RESTART_LABS',
    'careers.badge': 'REBEL ENGINEERING MANIFESTO',
    'careers.hero.title1': 'МЫ ИЩЕМ НЕ ПОДЧИНЕННЫХ,',
    'careers.hero.title2': 'А ТЕХ, КТО СОЗДАЕТ ПРАВИЛА.',
    'careers.hero.subtitle': 'Softrestart — это удаленная инженерная команда, верящая в результаты вместо часов.',
    'careers.hero.cta': 'ENTER THE RESTART →',

    'manifesto.01.code': '01 // NO OFFICE. NO CLOCK. NO LIMITS.',
    'manifesto.01.title': 'Офис — это не адрес.\nМесто, где ты создаешь — твой офис.',
    'manifesto.01.desc': 'Стамбул, Берлин, побережье или дом. Мы убрали физические границы.',

    'manifesto.02.code': '02 // TIME IS NOT THE METRIC.',
    'manifesto.02.title': 'МЫ СЛЕДИМ ЗА РЕЗУЛЬТАТОМ,\nА НЕ ЗА ЧАСАМИ.',
    'manifesto.02.desc': 'Мы измеряем созданную ценность, а не часы в сети.',

    'manifesto.03.code': '03 // BUILD SOMETHING THAT MATTERS.',
    'manifesto.03.title': 'ВАЖНО ВЛИЯНИЕ,\nА НЕ ВРЕМЯ ЗА МОНИТОРОМ.',
    'manifesto.03.desc': 'Чистый код. Масштабируемая архитектура. Настоящее мастерство.',

    'manifesto.04.code': "04 // DON'T JOIN A COMPANY. BUILD WITH US.",
    'manifesto.04.title': 'ЕСТЬ СМЕЛАЯ ИДЕЯ?\nСОЗДАВАЙТЕ С НАМИ.',
    'manifesto.04.desc': 'Если у вас есть стартап-идея или прототип, создавайте вместе с нами.',

    // System Stack Section
    'stack.badge': '[ SYSTEM STACK // CORE INFRASTRUCTURE ]',
    'stack.title': 'SYSTEM STACK',
    'stack.cat.frontend': 'Frontend',
    'stack.cat.backend': 'Backend',
    'stack.cat.database': 'Database',
    'stack.cat.infra': 'Infrastructure & Tools',
    'stack.note': '* Мы не ограничены этими технологиями. Мы рады разработчикам с другим стеком.',

    'matrix.tagline': 'Большинство людей используют существующие системы.\nМы создаем новые.',
    'matrix.cta': 'ENTER THE RESTART →',

    // FAQ Section
    'faq.badge': 'ЧаВо',
    'faq.title': 'Часто Задаваемые Вопросы',
    'faq.subtitle': 'Прозрачные ответы на все интересующие вас вопросы.',
    'faq.q1': 'Как проходит процесс разработки?',
    'faq.a1': 'Наш процесс включает Анализ, Дизайн, Спринты и Запуск.',
    'faq.q2': 'Какие решения вы создаете?',
    'faq.a2': 'Мы разрабатываем Веб и Мобильные Приложения, SaaS Платформы, API.',
    'faq.q3': 'Почему стоит выбрать SOFTRESTART?',
    'faq.a3': 'Мы ориентированы на высокое качество кода и результат.',

    // Contact Section
    'contact.badge': 'Контакты',
    'contact.title': 'Свяжитесь с Нами',
    'contact.subtitle': 'Прямые каналы связи для ваших идей и вопросов.',
    'contact.email': 'ПОЧТА',
    'contact.phone': 'ТЕЛЕФОН',
    'contact.location': 'ЛОКАЦИЯ',
    'contact.city': 'Базируется в Стамбуле, глобальная удаленная команда.',
    'contact.response': 'Среднее время ответа:',
    'contact.time': '< 4 часов',

    // Footer
    'footer.desc': 'Студия разработки ПО и инноваций.',
    'footer.col.services': 'Услуги',
    'footer.col.company': 'Компания',
    'footer.col.contact': 'Контакты',
    'footer.rights': 'Все права защищены.',
    'footer.madeIn': 'LOCATION: EVERYWHERE',
    'footer.link.webApp': 'Веб-приложения',
    'footer.link.mobileApp': 'Мобильные приложения',
    'footer.link.saas': 'SaaS-продукты',
    'footer.link.uiux': 'UI/UX Дизайн',
    'footer.link.devops': 'DevOps и Инфраструктура',
  },
};
