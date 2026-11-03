// Post: History of billiards (snooker, three-cushion, pool). Images are Wikimedia Commons file names.
window.POSTS = window.POSTS || [];
window.POSTS.push({
  slug: "bilardo-tarihi",
  cover: "Snooker table as seen from bottom cushion.jpg",
  readMin: 20,
  kicker: { tr: "// KONU 05 · YEŞİL ÇUHA", en: "// TOPIC 05 · THE GREEN BAIZE" },
  title: { tr: "Bilardo Oyunları ve Tarihi: Snooker, Üç Top ve Amerikan", en: "Billiards and Its History: Snooker, Three-Cushion and Pool" },
  summary: {
    tr: "Kraliyet bahçelerindeki kroket benzeri bir oyundan yeşil çuhaya; snooker'ın İngiliz subaylarından, üç bandın Türk ustalarına, Amerikan bilardosunun 'Hustler'larına.",
    en: "From a croquet-like royal lawn game to the green baize; snooker's British officers, three-cushion's Turkish masters and pool's hustlers."
  },
  intro: {
    tr: "Bilardo, açık havada oynanan bir çim oyununun salonlara taşınmasıyla doğdu: masanın yeşil çuhası, aslında çimi taklit ediyor! Yüzyıllar içinde masa, isteka ve toplar değişti; oyun üç büyük aileye ayrıldı: deliksiz masada oynanan karambol (üç top / üç bant), deliksiz değil ama büyük masalı snooker ve 'pool' denen Amerikan bilardosu. Bu yazıda genel tarihi anlatıp her biri için ayrı bir parantez açıyoruz.",
    en: "Billiards was born when a lawn game moved indoors: the table's green cloth actually imitates grass! Over centuries the table, cue and balls changed, and the game split into three big families: carom (three-ball / three-cushion) on a pocketless table, snooker on a big pocketed table, and American 'pool'. Here's the general history plus a separate chapter for each."
  },
  filters: [
    { key: "general", label: { tr: "Genel Tarih", en: "General History" } },
    { key: "snooker", label: { tr: "Snooker", en: "Snooker" } },
    { key: "carom", label: { tr: "Üç Top / Üç Bant", en: "Carom / Three-Cushion" } },
    { key: "pool", label: { tr: "Amerikan Bilardosu", en: "Pool" } }
  ],
  sections: [
    { id: "koken", era: "1400 – 1900", title: { tr: "Çimden Çuhaya: Bilardonun Doğuşu", en: "From Lawn to Baize: The Birth of Billiards" },
      intro: { tr: "15. yüzyılda Kuzey Avrupa'da oynanan bir çim oyunu, yağmurdan kaçmak için masaya taşındı. Kraliyet sarayları, kahvehaneler ve beyefendi kulüpleri oyunu yaydı.", en: "A 15th-century Northern European lawn game moved onto a table to escape the rain. Royal courts, coffeehouses and gentlemen's clubs spread it." } },
    { id: "snooker", era: "( SNOOKER )", title: { tr: "Snooker: 22 Top, Bir Ömür Sabır", en: "Snooker: 22 Balls, a Lifetime of Patience" },
      intro: { tr: "3,6 metrelik dev masa, 15 kırmızı ve 6 renkli top. Snooker, İngiliz subayları tarafından Hindistan'da icat edildi ve televizyonla bir milli tutkuya dönüştü.", en: "A huge 12-foot table, 15 reds and 6 colours. Snooker was invented by British officers in India and became a national passion through television." } },
    { id: "karambol", era: "( ÜÇ TOP · ÜÇ BANT )", title: { tr: "Karambol: Deliksiz Masanın Geometrisi", en: "Carom: The Geometry of the Pocketless Table" },
      intro: { tr: "Deliksiz masada üç topla oynanan karambol; Fransa, Belçika, Hollanda, Kore, Kolombiya ve Türkiye'de çok sevilir. Ülkemizdeki bilardo salonlarının klasik oyunu 'üç top'tur.", en: "Played with three balls on a pocketless table, carom is loved in France, Belgium, the Netherlands, Korea, Colombia and Turkey. The classic game of Turkish billiard halls is 'three-ball'." } },
    { id: "pool", era: "( AMERİKAN BİLARDOSU )", title: { tr: "Pool: 8 Top, 9 Top ve Hustler'lar", en: "Pool: 8-Ball, 9-Ball and Hustlers" },
      intro: { tr: "Altı delikli küçük masa, numaralı toplar ve barların vazgeçilmezi. Amerikan bilardosu sinema, mahalle salonları ve büyük para maçlarıyla efsaneleşti.", en: "A small six-pocket table, numbered balls and a bar staple. Pool became legendary through cinema, neighbourhood halls and big-money matches." } }
  ],
  entries: [
    { section: "koken", year: "1400'ler", cat: "general", img: "Nicolas Arnoult le jeu du billard.jpg", caption: { tr: "Erken dönem bilardo tasviri", en: "Early depiction of billiards" },
      title: { tr: "Çim Oyunu Masaya Çıkıyor", en: "The Lawn Game Moves to a Table" },
      text: { tr: "Kroket benzeri bir oyun Fransa ve İngiltere'de masaya taşındı; masa çimi andırsın diye yeşil kumaşla kaplandı. Topa isteka yerine 'mace' denen tahta tokmaklarla vuruluyordu.", en: "A croquet-like game moved onto a table in France and England; it was covered in green cloth to mimic grass. Balls were pushed with wooden 'maces' instead of cues." } },
    { section: "koken", year: "1600'ler", cat: "general", img: "Louis XIV of France with his brother, nephew and son playing billiards (1694).jpg", caption: { tr: "Saray bilardosu", en: "Court billiards" },
      title: { tr: "Kralların Oyunu", en: "The Game of Kings" },
      text: { tr: "Fransa Kralı XIV. Louis'ye doktorları bilardoyu sindirime iyi geldiği için önerdi. Shakespeare 'Antonius ve Kleopatra'da Kleopatra'ya 'Gel, bilardo oynayalım' dedirtir.", en: "Louis XIV of France was prescribed billiards by his doctors for digestion. Shakespeare had Cleopatra say 'Let's to billiards' in Antony and Cleopatra." } },
    { section: "koken", year: "1807 – 1823", cat: "general", img: "Billiard Chalk and Cue.jpg", caption: { tr: "İsteka ve tebeşir", en: "Cue and chalk" },
      title: { tr: "Kösele Uç, Tebeşir ve Falso", en: "Leather Tip, Chalk and Spin" },
      text: { tr: "Fransız subayı François Mingaud istekanın ucuna deri (kösele) taktı; artık topa falso (yan etki) verilebiliyordu. Ardından tebeşir kullanımı yaygınlaştı ve oyun bir bilime dönüştü.", en: "French officer François Mingaud fitted a leather tip to the cue, making spin possible. Chalk followed, and the game became a science." } },
    { section: "koken", year: "1835 – 1869", cat: "general", img: "EB1911 Ivory - Fig 2—Billiard Ball manufacture.jpg", caption: { tr: "Bilardo topları", en: "Billiard balls" },
      title: { tr: "Fildişinden Plastiğe", en: "From Ivory to Plastic" },
      text: { tr: "Kayrak taş masa yüzeyi ve kauçuk bantlar 19. yüzyılda geldi. Toplar fildişindendi; bir filden sadece birkaç top çıkıyordu. Fildişi yerine malzeme bulana 10.000 dolar ödül vaat edildi ve bu yarış selüloit gibi ilk plastiklerin doğuşuna katkı yaptı.", en: "Slate beds and rubber cushions arrived in the 19th century. Balls were ivory — only a few per elephant tusk. A $10,000 prize for an ivory substitute helped spur early plastics like celluloid." } },

    { section: "snooker", year: "1875", cat: "snooker", img: "Snooker table as seen from bottom cushion.jpg",
      title: { tr: "Jabalpur'da Doğan Oyun", en: "Born in Jabalpur" },
      text: { tr: "Hindistan'daki İngiliz subayı Neville Chamberlain (aynı adlı başbakan değil!), 'black pool' oyununa renkli toplar ekledi. Acemi askerlere verilen 'snooker' lakabını bir rakibine söyledi ve isim oyuna yapıştı.", en: "British officer Neville Chamberlain in India (not the prime minister!) added coloured balls to 'black pool'. He called an opponent a 'snooker' — slang for a raw recruit — and the name stuck." },
      facts: { tr: ["Masa: 12 ft × 6 ft (~3,6 × 1,8 m)", "15 kırmızı + sarı, yeşil, kahverengi, mavi, pembe, siyah"], en: ["Table: 12 ft × 6 ft", "15 reds + yellow, green, brown, blue, pink, black"] } },
    { section: "snooker", year: "1927 – 1946", cat: "snooker", img: "The Crucible Theatre, Sheffield - geograph.org.uk - 2846093.jpg", caption: { tr: "Crucible Tiyatrosu, Sheffield", en: "The Crucible Theatre, Sheffield" },
      title: { tr: "Joe Davis ve Dünya Şampiyonası", en: "Joe Davis and the World Championship" },
      text: { tr: "İlk Dünya Snooker Şampiyonası'nı 1927'de Joe Davis kazandı ve 1946'ya kadar hiç kaybetmedi: üst üste 15 şampiyonluk! Ödül ilk yıl sadece 6 sterlin 10 şilindi. Şampiyona 1977'den beri Sheffield'daki Crucible Tiyatrosu'nda oynanıyor.", en: "Joe Davis won the first World Snooker Championship in 1927 and never lost until 1946: 15 titles in a row! First prize was just £6 10s. Since 1977 it's been held at Sheffield's Crucible Theatre." } },
    { section: "snooker", year: "1969", cat: "snooker", img: "1990s Television Set.jpg", caption: { tr: "Renkli televizyon, snooker'ı yıldız yaptı", en: "Colour TV made snooker a star" },
      title: { tr: "'Pot Black' ve Renkli TV", en: "'Pot Black' and Colour TV" },
      text: { tr: "BBC renkli yayının gücünü göstermek için snooker'ı seçti ve 'Pot Black' programını başlattı. Siyah-beyaz TV'de izleyenler için yorumcu Ted Lowe'un ünlü sözü: 'Siyah-beyaz izleyenler için, pembe yeşilin arkasında.'", en: "BBC chose snooker to show off colour broadcasting with 'Pot Black'. Commentator Ted Lowe famously said: 'For those of you watching in black and white, the pink is next to the green.'" } },
    { section: "snooker", year: "1985", cat: "snooker", img: "Steve Davis at Crucible Theatre.jpg",
      title: { tr: "Siyah Top Finali", en: "The Black Ball Final" },
      text: { tr: "Dennis Taylor ile Steve Davis'in finali son karenin son siyah topuna kadar gitti; gece yarısını geçen maçı BBC2'de 18,5 milyon kişi izledi. Bu, İngiltere'de gece yarısından sonra en çok izlenen yayın rekoru.", en: "The Dennis Taylor vs Steve Davis final came down to the last black of the last frame; 18.5 million watched on BBC2 past midnight — the UK's after-midnight viewing record." } },
    { section: "snooker", year: "1997 → bugün", cat: "snooker", img: "Ronnie O'Sullivan in action.jpg",
      title: { tr: "'The Rocket' Ronnie O'Sullivan", en: "'The Rocket' Ronnie O'Sullivan" },
      text: { tr: "1997'de 5 dakika 8 saniyede yaptığı maksimum 147 seri, tarihin en hızlısı. 7 Dünya Şampiyonluğu (Stephen Hendry ile rekoru paylaşıyor) ve 1.000'den fazla 'century break' ile çoğu kişiye göre tüm zamanların en yeteneklisi.", en: "His 147 maximum in 5 minutes 8 seconds in 1997 is the fastest ever. With 7 world titles (sharing the record with Stephen Hendry) and 1,000+ century breaks, many call him the most talented ever." },
      facts: { tr: ["Maksimum seri: 147 puan", "Solak da sağlak da oynayabiliyor"], en: ["Maximum break: 147 points", "Can play left- and right-handed"] } },

    { section: "karambol", year: "1800'ler", cat: "carom", img: "Carom table small.jpg",
      title: { tr: "Karambol Nedir?", en: "What Is Carom?" },
      text: { tr: "Deliksiz masada iki beyaz (biri noktalı veya sarı) ve bir kırmızı topla oynanır. Amaç, kendi topunuzla diğer iki topa da değmek. 'Karambol' kelimesi kırmızı topun eski İspanyolca adı 'carambola'dan geliyor.", en: "Played on a pocketless table with two cue balls (one spotted or yellow) and a red. The goal: hit both other balls with your own. 'Carom' comes from 'carambola', an old Spanish name for the red ball." },
      facts: { tr: ["Masa: 2,84 × 1,42 m", "Toplar snooker'dan büyük: 61,5 mm"], en: ["Table: 2.84 × 1.42 m", "Balls bigger than snooker's: 61.5 mm"] } },
    { section: "karambol", year: "1878 →", cat: "carom", img: "1965 World Three-cushion Championship, Adolfo Suarez (PER) Bestanddeelnr 917-7609.jpg",
      title: { tr: "Üç Bant: Bilardonun Satrancı", en: "Three-Cushion: The Chess of Billiards" },
      text: { tr: "İstaka topu, ikinci topa değmeden önce en az üç kez banda çarpmalıdır. Ustalar bunun için 'elmas sistemi' gibi bant üzerindeki işaretlere dayanan matematiksel hesaplar kullanır. Bir oyuncunun istekada ortalama 2 sayı yapması dünya klasında sayılır.", en: "The cue ball must hit cushions at least three times before touching the second ball. Masters use mathematical 'diamond systems' based on markers on the rail. Averaging 2 points per inning is world class." } },
    { section: "karambol", year: "1980'ler → 2010'lar", cat: "carom", img: "Torbjörn Blomdahl 01.JPG",
      title: { tr: "Büyük Ustalar: Ceulemans, Blomdahl, Jaspers", en: "The Great Masters: Ceulemans, Blomdahl, Jaspers" },
      text: { tr: "Belçikalı Raymond Ceulemans 'Bay 100' lakaplı, 35 dünya şampiyonluğuna sahip efsane. İsveçli Torbjörn Blomdahl, Hollandalı Dick Jaspers ve Kolombiyalı, Koreli yeni yıldızlar oyunu taşıyor.", en: "Belgium's Raymond Ceulemans, 'Mr 100', is a legend with 35 world titles. Sweden's Torbjörn Blomdahl, the Netherlands' Dick Jaspers and new stars from Colombia and Korea carry the game." } },
    { section: "karambol", year: "1990'lar → bugün", cat: "carom", img: "3-Cushion World Cup 2017-7-Semih Sayginer (TUR).jpg",
      title: { tr: "Türk Ustalar: Semih Saygıner ve Sonrası", en: "Turkish Masters: Semih Saygıner and Beyond" },
      text: { tr: "'Sihirbaz' lakaplı Semih Saygıner, akıl almaz 'artistik' vuruşlarıyla dünyaca ünlendi ve Türkiye'de bilardoya ilgiyi patlattı. Ardından Tayfun Taşdemir, Murat Naci Çoklu ve Lütfi Çenet gibi isimler Türkiye'yi üç bantta bir dünya gücü yaptı.", en: "Nicknamed 'the Magician', Semih Saygıner became world-famous for impossible 'artistic' shots and sparked a billiards boom in Turkey. Players like Tayfun Taşdemir, Murat Naci Çoklu and Lütfi Çenet then made Turkey a three-cushion powerhouse." },
      facts: { tr: ["Türkiye, üç bant takım dünya şampiyonluklarıyla öne çıktı", "Mahalle salonlarının klasiği: 'üç top, el başı'"], en: ["Turkey has won team world titles in three-cushion", "The neighbourhood hall classic: 'three-ball'"] } },

    { section: "pool", year: "1900'ler", cat: "pool", img: "Eight Ball Rack 2007.jpg",
      title: { tr: "8 Top: Barların Oyunu", en: "8-Ball: The Bar Game" },
      text: { tr: "1–7 düz (solid), 9–15 çizgili (stripe) toplar ve ortada siyah 8. Kendi grubunu bitirip 8'i son sokan kazanır. Dünyada en çok oynanan bilardo oyunu.", en: "Balls 1–7 are solids, 9–15 stripes, with the black 8 in the middle. Clear your group and sink the 8 last to win. The most played billiards game in the world." },
      facts: { tr: ["Masa: 7, 8 veya 9 ft", "8'i erken sokmak = anında kaybetmek"], en: ["Table: 7, 8 or 9 ft", "Sinking the 8 early = instant loss"] } },
    { section: "pool", year: "1954", cat: "pool", img: "Willie Mosconi, circa 1962.png",
      title: { tr: "Willie Mosconi: 526 Top", en: "Willie Mosconi: 526 Balls" },
      text: { tr: "'Straight pool' oyununda Mosconi 1954'te hiç kaçırmadan art arda 526 top soktu. Bu rekor 2019'a kadar resmî olarak kırılamadı.", en: "In straight pool, Mosconi sank 526 balls in a row without a miss in 1954. The record stood officially until 2019." } },
    { section: "pool", year: "1961 / 1986", cat: "pool", img: "The Hustler 1961 screenshot 4.png", caption: { tr: "The Hustler (1961)", en: "The Hustler (1961)" },
      title: { tr: "The Hustler ve The Color of Money", en: "The Hustler and The Color of Money" },
      text: { tr: "Paul Newman'ın 'Hızlı Eddie' Felson'ı (1961) bilardoyu sinemanın yıldızı yaptı. 25 yıl sonra Martin Scorsese'nin devam filminde Tom Cruise'la buluşan Newman bu rolüyle Oscar kazandı ve ABD'de bilardo salonları yeniden doldu.", en: "Paul Newman's 'Fast Eddie' Felson (1961) made pool a movie star. Twenty-five years later, opposite Tom Cruise in Scorsese's sequel, Newman won an Oscar — and US pool halls filled up again." } },
    { section: "pool", year: "1980'ler → bugün", cat: "pool", img: "Efren Reyes in the World 9-Ball Pool Championship.jpg",
      title: { tr: "9 Top ve 'Büyücü' Efren Reyes", en: "9-Ball and 'The Magician' Efren Reyes" },
      text: { tr: "Sadece 1–9 arası toplarla oynanan hızlı 9 top, TV için ideal oldu. Filipinli Efren 'Bata' Reyes'in imkânsız görünen vuruşları onu efsaneleştirdi; 1995'teki 'Z-shot'u hâlâ izlenme rekorları kırıyor.", en: "Fast 9-ball, using only balls 1–9, was perfect for TV. Filipino Efren 'Bata' Reyes' impossible-looking shots made him a legend; his 1995 'Z-shot' still racks up views." } }
  ],
  stats: {
    title: { tr: "Rakamlarla Bilardo", en: "Billiards by the Numbers" },
    tiles: [
      { value: "147", label: { tr: "Snooker'da maksimum seri", en: "Snooker maximum break" } },
      { value: "5:08", label: { tr: "En hızlı 147 (O'Sullivan, 1997)", en: "Fastest 147 (O'Sullivan, 1997)" } },
      { value: "15", label: { tr: "Joe Davis'in art arda dünya şampiyonluğu", en: "Joe Davis' consecutive world titles" } },
      { value: "526", label: { tr: "Mosconi'nin hatasız serisi", en: "Mosconi's unbroken run" } },
      { value: "18,5 M", label: { tr: "1985 'siyah top' finalinin izleyicisi", en: "Viewers of the 1985 'black ball' final" } },
      { value: "35", label: { tr: "Ceulemans'ın dünya şampiyonluğu", en: "Ceulemans' world titles" } }
    ],
    charts: [
      { title: { tr: "Üç oyun karşılaştırması: masa uzunluğu (cm)", en: "Three games compared: table length (cm)" },
        rows: [["Snooker", 357, "357 cm"], ["Karambol (üç bant)", 284, "284 cm"], ["Pool (9 ft)", 254, "254 cm"], ["Pool (7 ft, bar)", 198, "198 cm"]] },
      { title: { tr: "Top çapı (mm)", en: "Ball diameter (mm)" },
        rows: [["Karambol", 61.5], ["Pool", 57.2], ["Snooker", 52.5]] },
      { title: { tr: "En çok Dünya Snooker Şampiyonluğu (modern dönem, 1969+)", en: "Most World Snooker titles (modern era, 1969+)" },
        rows: [["Ronnie O'Sullivan", 7], ["Stephen Hendry", 7], ["Steve Davis", 6], ["Ray Reardon", 6], ["John Higgins", 4], ["Mark Selby", 4]] }
    ]
  },
  facts: {
    title: { tr: "İlginç Bilgiler", en: "Fun Facts" },
    items: [
      { img: "Billiard Chalk and Cue.jpg", caption: { tr: "İsteka", en: "Cue" },
        title: { tr: "'Cue' kelimesi kuyruktan gelir", en: "'Cue' means tail" },
        text: { tr: "Tokmakla vurmak zor olduğunda oyuncular tokmağı ters çevirip ince sapıyla (Fransızca 'queue', kuyruk) vurmaya başladı. İsteka böyle doğdu.", en: "When hitting with the mace's head was awkward, players flipped it and used the thin handle (French 'queue', tail). That's how the cue was born." } },
      { img: "Snooker table as seen from bottom cushion.jpg", caption: { tr: "Snooker masası", en: "Snooker table" },
        title: { tr: "Beyaz eldivenli hakemler", en: "White-gloved referees" },
        text: { tr: "Snooker hakemleri, topları temizleyip yerine koyarken iz bırakmamak için beyaz eldiven giyer. Smokin ve papyon da oyuncuların kıyafet kuralı.", en: "Snooker referees wear white gloves so they leave no marks when cleaning and re-spotting balls. Waistcoats and bow ties are the players' dress code." } },
      { img: "EB1911 Ivory - Fig 2—Billiard Ball manufacture.jpg", caption: { tr: "Bilardo topları", en: "Billiard balls" },
        title: { tr: "Patlayan bilardo topları", en: "Exploding billiard balls" },
        text: { tr: "İlk selüloit toplar yanıcı nitrat içeriyordu ve sert çarpışmalarda küçük bir patlama sesiyle çatlayabiliyordu. Bir salon sahibinin 'her çarpışmada adamlar silahlarına davranıyor' diye yazdığı anlatılır.", en: "Early celluloid balls contained flammable nitrate and could crack with a small bang on hard impacts. One saloon owner reportedly wrote that every collision made men reach for their guns." } },
      { img: "3-Cushion World Cup 2017-7-Semih Sayginer (TUR).jpg", caption: { tr: "Semih Saygıner", en: "Semih Saygıner" },
        title: { tr: "Türkiye'de bilardo patlaması", en: "Turkey's billiards boom" },
        text: { tr: "90'larda TV'deki gösterileri sayesinde Türkiye'de her mahallede bilardo salonu açıldı; okul çıkışı 'bir el üç top' bir neslin ritüeli oldu.", en: "Thanks to TV exhibitions in the 90s, a billiard hall opened in every Turkish neighbourhood; 'a quick game of three-ball' after school became a generation's ritual." } },
      { img: "Eight Ball Rack 2007.jpg", caption: { tr: "8 top dizilimi", en: "8-ball rack" },
        title: { tr: "Mozart bilardo tutkunuydu", en: "Mozart loved billiards" },
        text: { tr: "Mozart'ın evinde bir bilardo masası vardı ve bazı bestelerini topları masada yuvarlarken düşündüğü anlatılır.", en: "Mozart owned a billiard table and is said to have thought up melodies while rolling balls across it." } },
      { img: "The Crucible Theatre, Sheffield - geograph.org.uk - 2846093.jpg", caption: { tr: "Crucible", en: "Crucible" },
        title: { tr: "Crucible'ın yakın atmosferi", en: "The Crucible's intimacy" },
        text: { tr: "Snooker'ın en büyük turnuvası sadece ~980 kişilik bir tiyatroda oynanır; seyirciler oyunculara neredeyse dokunacak kadar yakındır.", en: "Snooker's biggest event is played in a theatre of only ~980 seats; spectators are almost close enough to touch the players." } }
    ]
  }
});
