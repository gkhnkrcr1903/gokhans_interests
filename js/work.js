// "Work / Portfolio" page content: CV (from the LinkedIn export) and projects (from the "Projeler" artifact).
// Contact details (phone, e-mail), full birth date, marital status and the reference's contact info are
// intentionally left out of this public page.
window.WORK = {
  // Set to true to show the Work / Portfolio page and its menu link again.
  enabled: false,
  headline: { tr: "Kıdemli Yazılım Geliştirici · .NET ve Web", en: "Senior Software Developer · .NET and Web" },
  intro: {
    tr: "2008'den bu yana kurumsal yazılım geliştiriyorum: sağlık, enerji, savunma, eğitim ve kamu projelerinde backend, veritabanı, raporlama ve entegrasyon tarafında çalıştım. Boş zamanlarımda öğrenmeyi oyuna çeviren uygulamalar ve geliştiricilerin işini hızlandıran araçlar yazıyorum. Aşağıda iş deneyimimi ve kişisel projelerimi bulabilirsiniz.",
    en: "I've been building enterprise software since 2008, working on backend, databases, reporting and integrations in health, energy, defence, education and public-sector projects. In my spare time I build apps that turn learning into play and tools that speed up developers' work. Below you'll find my experience and personal projects."
  },
  links: [
    { label: "GitHub", url: "https://github.com/gkhnkrcr1903" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/g%C3%B6khan-karaacar-7592898b" }
  ],
  stats: [
    { value: "17+", label: { tr: "yıl deneyim", en: "years of experience" } },
    { value: "9", label: { tr: "şirket", en: "companies" } },
    { value: "9", label: { tr: "kişisel proje", en: "personal projects" } }
  ],
  experience: [
    { period: { tr: "Mayıs 2023 – Günümüz", en: "May 2023 – Present" }, role: { tr: "Lead Software Developer", en: "Lead Software Developer" }, company: "KoçSistem", place: "Ankara",
      text: { tr: "Sağlık Bakanlığı'nın Türkiye'deki tüm sağlık tesislerinin bilgilerinin işlendiği EKİP projesinde Özel Sağlık Tesisleri modülünün geliştirilmesi.", en: "Development of the Private Health Facilities module in the Ministry of Health's EKİP project, which processes information on every health facility in Turkey." },
      tech: "ASP.NET MVC, .NET Framework, Redis, Entity Framework, Elasticsearch, Kibana, PostgreSQL, Kendo UI" },
    { period: { tr: "Mart 2022 – Mayıs 2023", en: "Mar 2022 – May 2023" }, role: { tr: "Senior Software Developer", en: "Senior Software Developer" }, company: "WTECHIN Yazılım Bilgi Teknolojileri ve Danışmanlık", place: "Ankara",
      text: { tr: "Sağlık Bakanlığı EKİP projesinde Özel Sağlık Tesisleri modülünde geliştirme.", en: "Development of the Private Health Facilities module in the Ministry of Health's EKİP project." },
      tech: "ASP.NET MVC, .NET Framework, Redis, Entity Framework, Elasticsearch, Kibana, PostgreSQL, Kendo UI" },
    { period: { tr: "Eylül 2021 – Mart 2022", en: "Sep 2021 – Mar 2022" }, role: { tr: "Senior Software Developer", en: "Senior Software Developer" }, company: "BilgeAdam Teknoloji", place: "Ankara",
      text: { tr: "ÜBYS (Üniversite Bilgi Yönetim Sistemi) projesinde öğrenci, ayrılış ve mezuniyet süreç modüllerinde geliştirme ve destek.", en: "Development and support for the student, withdrawal and graduation process modules of ÜBYS (University Information Management System)." },
      tech: "C#, .NET Framework, ASP.NET MVC, SQL Server, jQuery, Visual Studio" },
    { period: { tr: "Ağustos 2019 – Temmuz 2021", en: "Aug 2019 – Jul 2021" }, role: { tr: "Software Engineer", en: "Software Engineer" }, company: "Zemana Bilişim Teknolojileri A.Ş.", place: "Ankara",
      text: { tr: "Zemana Endpoint Security projesinde Agent (arayüz), Agent Service ve DeployManager uygulamaları; ASP.NET MVC projesi için Web API'ler ve MSTest birim/mock testleri. OEM lisanslama uygulaması, Deepware.ai uygulamasına geliştirme desteği ve bir Chrome eklentisi; Google Cloud Storage verileri için bir raporlama aracı.", en: "Agent (UI), Agent Service and DeployManager apps for Zemana Endpoint Security; Web APIs for an ASP.NET MVC project and MSTest unit/mock tests. An OEM licensing app, development support for Deepware.ai including a Chrome extension, and a reporting tool for Google Cloud Storage data." },
      tech: "C#, WPF, WinForms, LDAP, MongoDB, Unity DI, MSTest, .NET Core MVC, Web API, Azure Tables, PostgreSQL, Go, React, JavaScript" },
    { period: { tr: "Mart 2016 – Temmuz 2019", en: "Mar 2016 – Jul 2019" }, role: { tr: "Yazılım Geliştirici", en: "Software Developer" }, company: "Mega Endüstri Kontrol Sistemleri", place: "Ankara",
      text: { tr: "Tüpraş Kırıkkale, İzmit, İzmir ve Batman rafinerileri için hurda kantar ve SAP entegrasyon programı; Opet, Alpet, Akpet, Aytemiz ve diğer dolum tesisleri için gemi tahliye programı; Socar ve Star rafinerileri için SAP entegrasyonları; Petrol Ofisi Derince için OPC tank transfer ve anons sistemi; BOTAŞ RMS-A istasyonları için ölçüm otomasyonu; KKTC KPET için LOGO entegrasyonu; Gümrük için anlık gemi tahliyesini izleyen uzaktan izleme uygulaması.", en: "Scrap-scale and SAP integration software for Tüpraş refineries (Kırıkkale, İzmit, İzmir, Batman); ship-unloading software for Opet, Alpet, Akpet, Aytemiz and other filling terminals; SAP integrations for Socar and Star refineries; an OPC tank-transfer and announcement system for Petrol Ofisi Derince; measurement automation for BOTAŞ RMS-A stations; LOGO integration for KPET (Cyprus); and a remote monitoring app for Customs to track ship unloading live." },
      tech: "C#, ASP.NET MVC, Oracle 11g, SQL Server, SQL Reporting, Modbus, DNP3, OPC, RFID, Serial Port, SignalR, Entity Framework" },
    { period: { tr: "Eylül 2013 – Mart 2016", en: "Sep 2013 – Mar 2016" }, role: { tr: "Yazılım Geliştirici", en: "Software Developer" }, company: "İnfopark Yazılım ve Danışmanlık", place: "Ankara",
      text: { tr: "Diyanet İşleri Başkanlığı EHYS (Eğitim Hizmetleri Yönetim Sistemi) projesinde Dinî Yüksek İhtisas ve anket modülleri, raporlama ve iyileştirmeler. TEDAŞ Abone.NET projesinde iştirakler, e-Fatura entegrasyonu, GPS modülü ve raporlama geliştirmeleri.", en: "Religious Higher Specialisation and survey modules, reporting and improvements in the Presidency of Religious Affairs' EHYS (Education Services Management System). Subsidiaries, e-Invoice integration, a GPS module and reporting for TEDAŞ's Abone.NET." },
      tech: "C#, VB.NET, ASP.NET, SQL Server, T-SQL, Reporting Services, TFS, Web Services, Windows Services" },
    { period: { tr: "Kasım 2010 – Eylül 2013", en: "Nov 2010 – Sep 2013" }, role: { tr: "Yazılım Geliştirici", en: "Software Developer" }, company: "TCHEALTH Bilgi Teknolojileri", place: "Ankara",
      text: { tr: "Sağlık Bakanlığı TİTCK (Türkiye İlaç ve Tıbbi Cihaz Kurumu) internet ve intranet portalı projesi; web ve Windows tabanlı sağlık bilişimi yazılımları.", en: "The Ministry of Health's TİTCK (Turkish Medicines and Medical Devices Agency) internet and intranet portal; web and Windows-based health-informatics software." },
      tech: "C#, ASP.NET, .NET Framework 4.0, SQL Server, DB2, Telerik" },
    { period: { tr: "Aralık 2008 – Mart 2010", en: "Dec 2008 – Mar 2010" }, role: { tr: "Yazılım Geliştirici", en: "Software Developer" }, company: "JeoIT", place: "Ankara",
      text: { tr: "Coğrafi Bilgi Sistemleri uygulaması ve Dışişleri Bakanlığı Riyad projesi için Dış Temsilcilikler modülü.", en: "A Geographic Information Systems application and the Foreign Representations module of the Ministry of Foreign Affairs' Riyadh project." },
      tech: "C#, VB.NET, ASP.NET, SQL Server 2008, Oracle 10g" },
    { period: { tr: "Mayıs 2008 – Aralık 2008", en: "May 2008 – Dec 2008" }, role: { tr: "Bilgi İşlem Sorumlusu", en: "IT Officer" }, company: "YÜCE Okulları", place: "Ankara",
      text: { tr: "Okulun bilgi işlem altyapısı ve kullanıcı desteği.", en: "School IT infrastructure and user support." }, tech: "" }
  ],
  education: [
    { period: "2003 – 2010", title: { tr: "Fizik, Fen-Edebiyat Fakültesi", en: "Physics, Faculty of Science" }, place: "Abant İzzet Baysal Üniversitesi" }
  ],
  certificates: [
    "MCITP – Microsoft Certified Database Administrator, SQL Server 2008",
    "MCTS – SQL Server 2008 Implementation and Maintenance",
    { tr: "Bilgi Sistemleri Akademi Sertifikası", en: "Academy Certificate in Information Systems" }
  ],
  skills: ["C#", ".NET", "ASP.NET", "ASP.NET MVC", "Entity Framework", "LINQ", "WCF", "WPF", "VB.NET", "Microsoft SQL Server", "T-SQL", "PostgreSQL", "Redis", "Elasticsearch", "Go", "React", "Web Services", "TFS", "Visual Studio", "Load Testing"],
  languages: [{ tr: "İngilizce", en: "English" }],
  projects: [
    { name: "Ev/Arsa Analiz", cat: ["web"], status: { tr: "Yayında", en: "Live" },
      text: { tr: "\"Bu ev bu fiyata alınır mı, bu arsa ne kadar eder?\" sorularına il, ilçe ve mahalle verisiyle cevap veren analiz platformu. Arsa ve konut analizi, harita, semt sıralaması, nüfus profili ve bütçe önerileri; rol tabanlı üyelik ve tarayıcıda AES-256-GCM ile çözülen veri.", en: "An analysis platform answering 'is this house worth the price, what's this plot worth?' with province, district and neighbourhood data. Land and housing analysis, maps, area rankings, population profiles and budget suggestions; role-based membership and data decrypted in the browser with AES-256-GCM." },
      tech: "Next.js 15, React 19, Supabase, Leaflet, Cloudflare Pages",
      links: [{ label: { tr: "Siteyi aç", en: "Open site" }, url: "https://evarsaanaliz.com" }, { label: { tr: "Kaynak kod", en: "Source" }, url: "https://github.com/gkhnkrcr1903/estateclaim" }] },
    { name: "ProjectCreator", cat: ["tool"], status: { tr: "CLI", en: "CLI" },
      text: { tr: "Bir veritabanı bağlantısından ya da DDL scriptinden çalışmaya hazır tam bir uygulama iskeleti üreten komut satırı aracı: mikroservis + Clean Architecture .NET 10 backend, YARP gateway, OAuth2 sunucusu ve React CRUD arayüzü. Redis, RabbitMQ, Hangfire, Serilog, Docker, Kubernetes ve CI/CD seçenekleri.", en: "A CLI that generates a ready-to-run application skeleton from a database connection or DDL script: microservices + Clean Architecture .NET 10 backend, YARP gateway, OAuth2 server and React CRUD UI. Options for Redis, RabbitMQ, Hangfire, Serilog, Docker, Kubernetes and CI/CD." },
      tech: ".NET 10, C#, PostgreSQL, SQL Server, React",
      links: [{ label: { tr: "GitHub", en: "GitHub" }, url: "https://github.com/gkhnkrcr1903/project_creator" }] },
    { name: "Decompiler", cat: ["tool"], status: { tr: "Masaüstü", en: "Desktop" },
      text: { tr: ".NET derlemelerini C#'a geri çeviren, içeriğini Türkçe açıklayan ve düzenlenen kodu yeniden derleyen masaüstü uygulaması. Renkli C# ve IL görünümü, çalışma zamanı, ORM, obfuscator ve imza tespiti.", en: "A desktop app that decompiles .NET assemblies back to C#, explains them in Turkish and recompiles edited code. Coloured C# and IL views; runtime, ORM, obfuscator and signature detection." },
      tech: ".NET 10, Windows Forms, ICSharpCode.Decompiler, Roslyn", links: [] },
    { name: "Briç & King", cat: ["game", "edu"], status: { tr: "Web", en: "Web" },
      text: { tr: "Bilgisayara karşı briç ve King oynanan, dersler ve alıştırmalarla briç öğreten uygulama. Zor seviyede Monte Carlo aramalı rakip.", en: "Play bridge and King against the computer and learn bridge with lessons and drills. The hard level uses a Monte Carlo search opponent." },
      tech: "JavaScript, ES modules, game AI",
      links: [{ label: { tr: "Oyna", en: "Play" }, url: "https://gkhnkrcr1903.github.io/card_games/" }, { label: { tr: "Kaynak", en: "Source" }, url: "https://github.com/gkhnkrcr1903/card_games" }] },
    { name: "Zekaya Uyananlar", cat: ["edu"], status: { tr: "Web · TR/EN", en: "Web · TR/EN" },
      text: { tr: "18 bulmaca, deneyli 18 paradoks, dedektif vakaları ve canlı simülasyonlu 20 derslik Kuantum Okulu.", en: "18 puzzles, 18 paradoxes with experiments, detective cases and a 20-lesson Quantum School with live simulations." },
      tech: "JavaScript, Canvas, SVG animation, i18n",
      links: [{ label: { tr: "Aç", en: "Open" }, url: "https://gkhnkrcr1903.github.io/brain_works/" }, { label: { tr: "Kaynak", en: "Source" }, url: "https://github.com/gkhnkrcr1903/brain_works" }] },
    { name: "Klasik Özetler", cat: ["edu"], status: { tr: "PWA", en: "PWA" },
      text: { tr: "Dünya klasiklerinin resimli, sayfa sayfa okunan Türkçe özetleri. Telefona kurulabiliyor, çevrimdışı okunabiliyor.", en: "Illustrated, page-by-page Turkish summaries of world classics. Installable on phones and readable offline." },
      tech: "JavaScript, service worker, SVG scenes",
      links: [{ label: { tr: "Oku", en: "Read" }, url: "https://gkhnkrcr1903.github.io/book_reviews/" }, { label: { tr: "Kaynak", en: "Source" }, url: "https://github.com/gkhnkrcr1903/book_reviews" }] },
    { name: "Piramitten Kaçış", cat: ["game"], status: { tr: "Web", en: "Web" },
      text: { tr: "Kahire, 1931. Beş odalı point & click kaçış oyunu: üç zorluk, üç son ve kodla üretilen Hicaz makamı müzik.", en: "Cairo, 1931. A five-room point-and-click escape game: three difficulties, three endings and code-generated music in the Hicaz makam." },
      tech: "JavaScript, Web Audio",
      links: [{ label: { tr: "Oyna", en: "Play" }, url: "https://gkhnkrcr1903.github.io/escapefromegypt/" }, { label: { tr: "Kaynak", en: "Source" }, url: "https://github.com/gkhnkrcr1903/escapefromegypt" }] },
    { name: "Blackmoor Şatosu Cinayeti", cat: ["game"], status: { tr: "Geliştiriliyor", en: "In development" },
      text: { tr: "Yorkshire, 1887. 22 hamlede şüphelileri sorgulayıp delilleri toplayın. Her oyunda rastgele vaka, 15 farklı çözüm.", en: "Yorkshire, 1887. Question suspects and gather clues in 22 moves. A random case every game, 15 possible solutions." },
      tech: "TypeScript, Vite", links: [] },
    { name: "IKSIS Rapor Aracı", cat: ["tool"], status: { tr: "Kurum içi", en: "Internal" },
      text: { tr: "SQL bilmeden görsel olarak PostgreSQL raporu hazırlatan araç: otomatik join önerisi, CTE, parametreli şablonlar ve Excel'e aktarma.", en: "A visual PostgreSQL report builder for people who don't know SQL: automatic join suggestions, CTEs, parameterised templates and Excel export." },
      tech: "WPF, .NET 10, PostgreSQL", links: [] }
  ],
  projectFilters: [
    { key: "all", label: { tr: "Tümü", en: "All" } },
    { key: "web", label: { tr: "Web Uygulamaları", en: "Web Apps" } },
    { key: "game", label: { tr: "Oyunlar", en: "Games" } },
    { key: "edu", label: { tr: "Eğitim", en: "Education" } },
    { key: "tool", label: { tr: "Araçlar", en: "Tools" } }
  ]
};
