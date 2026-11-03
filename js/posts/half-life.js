// Post: Half-Life deep dive. Images are Wikimedia Commons file names.
window.POSTS = window.POSTS || [];
window.POSTS.push({
  slug: "half-life",
  cover: "Half-Life_lambda_logo.svg",
  readMin: 15,
  kicker: { tr: "// KONU 03 · OYUN ÖZEL DOSYASI", en: "// TOPIC 03 · GAME DEEP DIVE" },
  title: { tr: "Half-Life: FPS'yi Değiştiren Oyun", en: "Half-Life: The Game That Changed the FPS" },
  summary: {
    tr: "Black Mesa'da bir sıradan sabah, bir levye ve λ sembolü. Valve'ın ilk oyunu nasıl efsane oldu, Counter-Strike'ı ve Steam'i nasıl doğurdu?",
    en: "An ordinary morning at Black Mesa, a crowbar and the λ symbol. How Valve's first game became a legend and gave birth to Counter-Strike and Steam."
  },
  intro: {
    tr: "19 Kasım 1998'de çıkan Half-Life, Valve adlı küçük bir stüdyonun ilk oyunuydu. Ara sahne kullanmadan hikâyeyi tamamen oyuncunun gözünden anlatması, akıllı düşmanları ve sinematik kurgusuyla birinci şahıs nişancı türünü 'koridorda ateş etmekten' bir anlatı deneyimine dönüştürdü. Bu yazıda serinin hikâyesini, perde arkasını, modlarını ve ilginç detaylarını inceliyoruz.",
    en: "Released on 19 November 1998, Half-Life was the debut of a small studio called Valve. By telling its story entirely through the player's eyes with no cutscenes, with smart enemies and cinematic pacing, it turned the first-person shooter from 'shooting in corridors' into a narrative experience. Here we look at the series' story, behind-the-scenes, mods and curiosities."
  },
  filters: [
    { key: "game", label: { tr: "Oyunlar & Hikâye", en: "Games & Story" } },
    { key: "pc", label: { tr: "Teknoloji & Topluluk", en: "Tech & Community" } }
  ],
  sections: [
    { id: "dogus", era: "1996 – 1998", title: { tr: "Doğuş: Microsoft Milyonerlerinin Stüdyosu", en: "Origins: A Studio of Microsoft Millionaires" },
      intro: { tr: "Eski Microsoft çalışanları Gabe Newell ve Mike Harrington, 1996'da Valve'ı kurdu. İlk projeleri, Quake motorunu lisanslayıp baştan sona yeniden yazdıkları bir korku-bilimkurgu oyunuydu.", en: "Former Microsoft employees Gabe Newell and Mike Harrington founded Valve in 1996. Their first project was a horror-sci-fi game built on a licensed and heavily rewritten Quake engine." } },
    { id: "hikaye", era: "BLACK MESA", title: { tr: "Hikâye: Rezonans Kaskadı", en: "The Story: Resonance Cascade" },
      intro: { tr: "Teorik fizikçi Gordon Freeman, New Mexico çölündeki gizli Black Mesa Araştırma Tesisi'nde işe geç kalır. Bir deney ters gider ve başka bir boyuta, Xen'e açılan bir kapı yaratır.", en: "Theoretical physicist Gordon Freeman is late for work at the secret Black Mesa Research Facility in the New Mexico desert. An experiment goes wrong, tearing open a portal to another dimension, Xen." } },
    { id: "seri", era: "1999 – 2020", title: { tr: "Seri, Eklentiler ve Half-Life 2", en: "The Series, Expansions & Half-Life 2" },
      intro: { tr: "Eklenti paketleri, devrim niteliğindeki Half-Life 2, bölümler, yıllarca beklenen ama gelmeyen 'Episode Three' ve sonunda VR ile gelen Half-Life: Alyx.", en: "Expansion packs, the revolutionary Half-Life 2, the episodes, the long-awaited 'Episode Three' that never came — and finally Half-Life: Alyx in VR." } },
    { id: "miras", era: "MİRAS · LEGACY", title: { tr: "Modlar, Counter-Strike ve Steam", en: "Mods, Counter-Strike & Steam" },
      intro: { tr: "Half-Life'ın belki de en büyük mirası oyunun kendisi değil, onun üzerine kurulanlardır: dünyanın en popüler modları ve PC oyunlarının satış biçimini değiştiren Steam.", en: "Half-Life's biggest legacy may not be the game itself but what was built on it: the world's most popular mods and Steam, which changed how PC games are sold." } }
  ],
  entries: [
    { section: "dogus", year: "1996", cat: "pc", img: "Gabe_Newell_GDC_2010.jpg", caption: { tr: "Gabe Newell, GDC 2010", en: "Gabe Newell, GDC 2010" },
      title: { tr: "Valve'ın Kuruluşu", en: "Founding Valve" },
      text: { tr: "Gabe Newell, Microsoft'ta Windows üzerinde 13 yıl çalıştı. Doom'un Windows'tan daha fazla bilgisayara kurulduğunu fark edince oyunların geleceği olduğuna karar verdi ve Mike Harrington ile birlikte Valve'ı kurdu.", en: "Gabe Newell spent 13 years at Microsoft working on Windows. Realising Doom was installed on more PCs than Windows, he decided games were the future and founded Valve with Mike Harrington." },
      facts: { tr: ["Kuruluş: 24 Ağustos 1996, Kirkland (Washington)", "Newell lakabı: 'Gaben'"], en: ["Founded: 24 August 1996, Kirkland, Washington", "Newell's nickname: 'Gaben'"] } },
    { section: "dogus", year: "1997", cat: "pc", img: "Valve_logo.svg",
      title: { tr: "Baştan Yazılan Oyun", en: "The Game That Was Rebuilt" },
      text: { tr: "1997 E3'te gösterilen ilk sürümden ekip memnun kalmadı. Oyunun çıkışı ertelendi ve neredeyse tüm bölümler yeniden tasarlandı. Ekip, en iyi fikirleri bir araya getiren 'Cabal' adlı küçük tasarım grupları kurdu — bu yöntem sonraki oyunlarda da kullanıldı.", en: "The team was unhappy with the version shown at E3 1997. Release slipped and almost every level was redesigned. They formed small 'Cabal' design groups to combine the best ideas — a method used in later games too." },
      facts: { tr: ["Motor: GoldSrc (Quake motoru temelli)", "Kod adı: 'Quiver'"], en: ["Engine: GoldSrc (based on Quake)", "Codename: 'Quiver'"] } },
    { section: "dogus", year: "1998", cat: "game", img: "Half-Life_lambda_logo.svg",
      title: { tr: "Çıkış ve Ödül Yağmuru", en: "Release and a Shower of Awards" },
      text: { tr: "19 Kasım 1998'de Sierra yayıncılığıyla çıkan Half-Life, 50'den fazla 'Yılın Oyunu' ödülü aldı. PC Gamer onu defalarca 'tüm zamanların en iyi PC oyunu' seçti.", en: "Published by Sierra on 19 November 1998, Half-Life won over 50 'Game of the Year' awards. PC Gamer repeatedly named it the best PC game of all time." },
      facts: { tr: ["~9–10 milyon satış (kutulu, 2008'e kadar)", "Metacritic: 96"], en: ["~9–10 million sold (retail, by 2008)", "Metacritic: 96"] } },

    { section: "hikaye", year: "08:47", cat: "game", img: "Black_Mesa_logo.svg",
      title: { tr: "Black Mesa Tramvayı", en: "The Black Mesa Tram" },
      text: { tr: "Oyun bir ara sahneyle değil, tesise giden bir tramvay yolculuğuyla başlar. Oyuncu kontrolü hiç kaybetmez; bu açılış, oyun tarihinin en ünlü girişlerinden biridir ve dünyayı tanıtırken yükleme süresini gizler.", en: "The game opens not with a cutscene but a tram ride into the facility. You never lose control; it's one of gaming's most famous openings, introducing the world while hiding loading." } },
    { section: "hikaye", year: "Anomalous Materials", cat: "game", img: "Lambda_lc.svg", caption: { tr: "λ (lambda): seri boyunca geçen sembol", en: "λ (lambda): the series' recurring symbol" },
      title: { tr: "Rezonans Kaskadı ve λ", en: "The Resonance Cascade and λ" },
      text: { tr: "Freeman, analiz için bir kristal örneği ışına iter ve felaket başlar. Lambda harfi fizikte bozunma sabitini simgeler; oyunda Lambda Kompleksi ve sonradan direnişin sembolü olarak geçer.", en: "Freeman pushes a crystal sample into the beam and disaster strikes. Lambda symbolises the decay constant in physics; in the game it marks the Lambda Complex and later the resistance." } },
    { section: "hikaye", year: "Xen", cat: "game", img: "Half-Life_lambda_logo.svg",
      title: { tr: "Sessiz Kahraman, Akıllı Düşmanlar", en: "Silent Hero, Smart Enemies" },
      text: { tr: "Gordon Freeman hiç konuşmaz; böylece oyuncu kendini onun yerine koyar. Tesisi temizlemeye gelen HECU askerleri, oyuncuyu kuşatan, el bombası atan ve geri çekilen yapay zekâsıyla dönemine göre şaşırtıcıydı. Son bölümde yolculuk uzaylıların boyutu Xen'de biter.", en: "Gordon Freeman never speaks, so the player becomes him. The HECU marines sent to clean up the facility flanked, threw grenades and retreated — astonishing AI for the time. The journey ends in the alien dimension of Xen." } },
    { section: "hikaye", year: "G-Man", cat: "game", img: "Valve_logo.svg", caption: { tr: "Valve", en: "Valve" },
      title: { tr: "Gizemli G-Man", en: "The Mysterious G-Man" },
      text: { tr: "Takım elbiseli, garip konuşan G-Man oyun boyunca uzaktan izler ve sonunda Freeman'a 'iş teklifi' yapar. Kim olduğu bugün bile serinin en büyük sırrıdır.", en: "The suited, oddly-spoken G-Man watches from afar throughout and finally offers Freeman 'employment'. Who he really is remains the series' biggest mystery." } },

    { section: "seri", year: "1999 – 2001", cat: "game", img: "CD-ROM.png", caption: { tr: "CD-ROM dönemi", en: "The CD-ROM era" },
      title: { tr: "Opposing Force, Blue Shift, Decay", en: "Opposing Force, Blue Shift, Decay" },
      text: { tr: "Gearbox Software, aynı olayları farklı gözlerden anlatan eklentiler yaptı: asker Adrian Shephard (Opposing Force), güvenlik görevlisi Barney Calhoun (Blue Shift) ve PS2 için iki kişilik Decay.", en: "Gearbox Software made expansions retelling the same events from other eyes: marine Adrian Shephard (Opposing Force), security guard Barney Calhoun (Blue Shift) and the two-player PS2 Decay." } },
    { section: "seri", year: "2004", cat: "game", img: "Lambda_lc.svg",
      title: { tr: "Half-Life 2 ve Yerçekimi Silahı", en: "Half-Life 2 and the Gravity Gun" },
      text: { tr: "City 17'de, Combine adlı uzaylı imparatorluğunun işgalinde geçer. Source motoru, Havok fiziği ve yüz animasyonlarıyla çığır açtı; nesneleri tutup fırlatan Yerçekimi Silahı fiziği oynanışın merkezine koydu. Alyx Vance, oyunların en sevilen yan karakterlerinden biri oldu.", en: "Set in City 17 under the alien Combine. The Source engine, Havok physics and facial animation broke ground; the Gravity Gun, which grabs and hurls objects, put physics at the heart of gameplay. Alyx Vance became one of gaming's best-loved companions." },
      facts: { tr: ["Metacritic: 96", "Kaynak kodu 2003'te çalındı ve sızdırıldı"], en: ["Metacritic: 96", "Source code was stolen and leaked in 2003"] } },
    { section: "seri", year: "2006 – 2007", cat: "game", img: "Steam_icon_logo.svg", caption: { tr: "Bölümler Steam üzerinden dağıtıldı", en: "The episodes shipped via Steam" },
      title: { tr: "Episode One, Episode Two ve The Orange Box", en: "Episode One, Episode Two & The Orange Box" },
      text: { tr: "Episode Two büyük bir uçurum sonuyla bitti. 2007'deki The Orange Box paketi, Half-Life 2 ve bölümlerin yanında Portal ve Team Fortress 2'yi de içeriyordu — tarihin en değerli oyun paketlerinden biri.", en: "Episode Two ended on a huge cliffhanger. 2007's The Orange Box bundled Half-Life 2 and the episodes with Portal and Team Fortress 2 — one of the best-value bundles ever." } },
    { section: "seri", year: "2007 – 2020", cat: "game", img: "Half-Life_lambda_logo.svg",
      title: { tr: "'Half-Life 3 Confirmed' Memesi", en: "The 'Half-Life 3 Confirmed' Meme" },
      text: { tr: "Episode Three hiç gelmedi. 13 yıl boyunca 3 rakamını içeren her şey şakayla 'Half-Life 3 onaylandı' olarak yorumlandı. 2017'de senarist Marc Laidlaw, emeklilik sonrası hikâyenin nasıl biteceğini isimleri değiştirilmiş bir 'Epistle 3' metniyle paylaştı.", en: "Episode Three never came. For 13 years anything involving the number 3 was jokingly read as 'Half-Life 3 confirmed'. In 2017 retired writer Marc Laidlaw shared how it would have ended in 'Epistle 3', with names swapped." } },
    { section: "seri", year: "2020", cat: "game", img: "Valve_logo.svg",
      title: { tr: "Half-Life: Alyx", en: "Half-Life: Alyx" },
      text: { tr: "13 yıl sonra gelen yeni Half-Life oyunu, sadece sanal gerçeklik için yapıldı ve VR'ın 'killer app'i sayıldı. Sonu, Episode Two'nun hikâyesini şaşırtıcı biçimde yeniden yazdı.", en: "The first new Half-Life in 13 years was made exclusively for VR and hailed as VR's killer app. Its ending surprisingly rewrote Episode Two's story." },
      facts: { tr: ["Metacritic: 93", "Hikâye HL1 ile HL2 arasında geçiyor"], en: ["Metacritic: 93", "Set between HL1 and HL2"] } },

    { section: "miras", year: "1999", cat: "pc", img: "Lan_party.jpg", caption: { tr: "LAN partisi", en: "A LAN party" },
      title: { tr: "Counter-Strike: Bir Moddan İmparatorluğa", en: "Counter-Strike: From Mod to Empire" },
      text: { tr: "Minh 'Gooseman' Le ve Jess Cliffe'in Half-Life modu olarak başlayan Counter-Strike, Valve tarafından satın alındı. Türkiye dahil dünyanın her yerinde internet kafelerin ve LAN partilerinin vazgeçilmezi oldu; bugün Counter-Strike 2 ile en büyük e-spor oyunlarından biri.", en: "Started as a Half-Life mod by Minh 'Gooseman' Le and Jess Cliffe, Counter-Strike was acquired by Valve. It became a staple of internet cafés and LAN parties worldwide, including Turkey; today, as Counter-Strike 2, it's one of the biggest esports." },
      facts: { tr: ["Haritalar: de_dust2, cs_italy, de_inferno", "CS2'de 1,5 milyon+ eşzamanlı oyuncu rekorları"], en: ["Maps: de_dust2, cs_italy, de_inferno", "CS2 record of 1.5M+ concurrent players"] } },
    { section: "miras", year: "1999 – 2004", cat: "pc", img: "Floppy_disk_2009_G1.jpg", caption: { tr: "Mod kültürü: indir, kur, oyna", en: "Mod culture: download, install, play" },
      title: { tr: "Mod Altın Çağı", en: "The Golden Age of Mods" },
      text: { tr: "Ücretsiz geliştirme araçları sayesinde Team Fortress Classic, Day of Defeat, Natural Selection ve Garry's Mod gibi efsaneler doğdu. Valve, birçok modcuyu işe alarak stüdyosunu büyüttü — Portal bile bir öğrenci projesinden (Narbacular Drop) geldi.", en: "Free dev tools spawned legends like Team Fortress Classic, Day of Defeat, Natural Selection and Garry's Mod. Valve grew by hiring modders — even Portal came from a student project (Narbacular Drop)." } },
    { section: "miras", year: "2003 – 2004", cat: "pc", img: "Steam_icon_logo.svg",
      title: { tr: "Steam: Half-Life 2 ile Zorunlu Başlangıç", en: "Steam: Kick-started by Half-Life 2" },
      text: { tr: "Steam, başta Counter-Strike güncellemelerini dağıtmak için yapıldı. Half-Life 2'nin kutulu sürümünü bile oynamak için Steam gerekiyordu; oyuncular başta öfkelendi ama Steam zamanla PC oyunlarının en büyük dijital mağazası oldu.", en: "Steam was built to deliver Counter-Strike updates. Even boxed Half-Life 2 required it; players were furious at first, but Steam became PC gaming's biggest digital store." },
      facts: { tr: ["2025'te 40 milyon+ eşzamanlı kullanıcı rekoru", "Valve özel bir şirket: hiç halka açılmadı"], en: ["Record 40M+ concurrent users in 2025", "Valve is private: never went public"] } },
    { section: "miras", year: "2020", cat: "pc", img: "Black_Mesa_logo.svg",
      title: { tr: "Black Mesa: Hayranların Yeniden Yapımı", en: "Black Mesa: The Fan Remake" },
      text: { tr: "Crowbar Collective adlı hayran ekibi, Half-Life 1'i Source motoruyla 15 yıl boyunca yeniden yaptı. Valve satışına izin verdi; özellikle tamamen yeniden tasarlanan Xen bölümü övgü topladı.", en: "Fan team Crowbar Collective spent 15 years rebuilding Half-Life 1 in the Source engine. Valve allowed it to be sold; its fully redesigned Xen chapters drew special praise." } }
  ],
  stats: {
    title: { tr: "Rakamlarla Half-Life", en: "Half-Life by the Numbers" },
    tiles: [
      { value: "50+", label: { tr: "Half-Life'ın aldığı 'Yılın Oyunu' ödülü", en: "'Game of the Year' awards for Half-Life" } },
      { value: "0", label: { tr: "Gordon Freeman'ın söylediği kelime", en: "Words spoken by Gordon Freeman" } },
      { value: "13 yıl", label: { tr: "Episode Two ile Alyx arasındaki bekleyiş", en: "Wait between Episode Two and Alyx" } },
      { value: "1998", label: { tr: "Çıkış yılı (19 Kasım)", en: "Release year (19 November)" } },
      { value: "27", label: { tr: "Gordon'ın oyundaki yaşı", en: "Gordon's age in the game" } },
      { value: "MIT", label: { tr: "Gordon'ın doktora yaptığı üniversite", en: "Where Gordon got his PhD" } }
    ],
    charts: [
      { title: { tr: "Metacritic puanları", en: "Metacritic scores" },
        rows: [["Half-Life (1998)", 96], ["Opposing Force (1999)", 84], ["Blue Shift (2001)", 71], ["Half-Life 2 (2004)", 96], ["Episode One (2006)", 87], ["Episode Two (2007)", 90], ["Half-Life: Alyx (2020)", 93]] },
      { title: { tr: "Half-Life motorundan çıkan oyunların tahmini satışları (milyon)", en: "Estimated sales of games from the Half-Life engine family (millions)" },
        rows: [["Counter-Strike 1.x", 25], ["Half-Life 2", 12], ["Half-Life", 10], ["Portal 2", 5], ["Left 4 Dead 2", 5]],
        note: { tr: "Kabaca tahmin; ücretsiz oyuna geçen CS:GO/CS2 hariç.", en: "Rough estimates; excludes free-to-play CS:GO/CS2." } }
    ]
  },
  facts: {
    title: { tr: "Eğlenceli Bilgiler", en: "Fun Facts" },
    items: [
      { img: "Half-Life_lambda_logo.svg", caption: { tr: "Half-Life λ", en: "Half-Life λ" },
        title: { tr: "Levye efsanesi", en: "The crowbar legend" },
        text: { tr: "Gordon'ın ikonik silahı sıradan bir levye. Half-Life 2'de Barney ona 'Bu senin galiba' diyerek bir levye fırlatır — hayranların en sevdiği anlardan biri.", en: "Gordon's iconic weapon is an ordinary crowbar. In Half-Life 2, Barney tosses him one saying it's his — a fan-favourite moment." } },
      { img: "Gabe_Newell_GDC_2010.jpg", caption: { tr: "Gabe Newell", en: "Gabe Newell" },
        title: { tr: "Gordon'ın yüzü gerçek insanlardan", en: "Gordon's face comes from real people" },
        text: { tr: "Half-Life 2'deki karakter yüzleri gerçek kişilerin fotoğraflarından modellendi; Alyx'in yüzü ve sesi farklı kişilerden alındı.", en: "Half-Life 2's character faces were modelled on photos of real people; Alyx's face and voice came from different people." } },
      { img: "Lambda_lc.svg", caption: { tr: "Lambda", en: "Lambda" },
        title: { tr: "Neden 'Half-Life'?", en: "Why 'Half-Life'?" },
        text: { tr: "İsim, radyoaktif bir maddenin yarısının bozunma süresi olan 'yarı ömür'den geliyor. Logodaki λ da bu bozunma sabitinin sembolü.", en: "The name refers to the time for half a radioactive substance to decay. The λ in the logo is that decay constant's symbol." } },
      { img: "Steam_icon_logo.svg", caption: { tr: "Steam", en: "Steam" },
        title: { tr: "Kod hırsızını işe alma tuzağı", en: "The code thief job interview trap" },
        text: { tr: "Half-Life 2'nin kodunu çalan Alman hacker, Gabe Newell'e e-posta atıp iş istedi. Valve sahte bir iş görüşmesi ayarladı ve FBI ile işbirliği yaparak onu yakalattı.", en: "The German hacker who stole Half-Life 2's code emailed Gabe Newell asking for a job. Valve set up a fake interview and worked with the FBI to have him arrested." } },
      { img: "Lan_party.jpg", caption: { tr: "LAN partisi", en: "LAN party" },
        title: { tr: "Kafelerin kralı", en: "King of the cafés" },
        text: { tr: "2000'lerde Türkiye'deki internet kafelerde 'de_dust2' bilmeyen yoktu. Saatlik ücretle oynanan Counter-Strike, bir neslin ilk takım oyunu deneyimiydi.", en: "In 2000s Turkey, everyone at internet cafés knew 'de_dust2'. Counter-Strike paid by the hour was a generation's first team-game experience." } },
      { img: "Black_Mesa_logo.svg", caption: { tr: "Black Mesa", en: "Black Mesa" },
        title: { tr: "Black Mesa gerçek bir yer mi?", en: "Is Black Mesa real?" },
        text: { tr: "Kurgusal tesis, New Mexico'daki Los Alamos ve Area 51 efsanelerinden ilham alıyor. Oklahoma'da gerçekten 'Black Mesa' adlı bir tepe var.", en: "The fictional facility draws on Los Alamos in New Mexico and Area 51 legends. There really is a hill called 'Black Mesa' in Oklahoma." } }
    ]
  }
});
