// Post: History of Seinfeld (warm, playful tone). Images are Wikimedia Commons file names.
window.POSTS = window.POSTS || [];
window.POSTS.push({
  slug: "seinfeld",
  cover: "Seinfeld Cast in the 1990s.jpg",
  readMin: 15,
  kicker: { tr: "// KONU 17 · HİÇBİR ŞEY HAKKINDA BİR DİZİ", en: "// TOPIC 17 · A SHOW ABOUT NOTHING" },
  title: { tr: "Seinfeld: Hiçbir Şey Hakkında Bir Dizinin Her Şeyi", en: "Seinfeld: Everything About a Show About Nothing" },
  summary: {
    tr: "Başarısız bir pilot bölüm, tarihin en küçük dizi siparişi, 'sana çorba yok!', Festivus direği ve 110 milyon doları reddeden bir komedyen. 180 bölümlük bir efsanenin hikâyesi.",
    en: "A failed pilot, the smallest series order in TV history, 'No soup for you!', the Festivus pole and a comedian who turned down $110 million. The story of a 180-episode legend."
  },
  intro: {
    tr: "Bir komedyen, onun huysuz en iyi arkadaşı, eski sevgilisi ve kapıyı çalmadan içeri dalan tuhaf bir komşu. Bir kafede oturup sıraya girmek, otoparkta arabayı kaybetmek ya da bir çinçin tatlısının kenarını paylaşmak gibi 'hiçbir şey' hakkında konuşurlar. Seinfeld, 1989'dan 1998'e kadar dokuz sezon boyunca komedinin kurallarını yeniden yazdı ve gündelik dilimize onlarca deyim bıraktı. Ben de bu diziyi her yeniden izlediğimde başka bir detayı yakalayıp kahkaha atıyorum. Hadi Monk's Café'de bir kahve söyleyelim ve başlayalım!",
    en: "A comedian, his neurotic best friend, his ex-girlfriend and a bizarre neighbour who bursts in without knocking. They talk about 'nothing' — waiting in line, losing the car in a parking garage, sharing the edge of a dessert. From 1989 to 1998, over nine seasons, Seinfeld rewrote the rules of comedy and left dozens of phrases in everyday language. Every time I rewatch it I catch another detail and laugh. Let's order a coffee at Monk's Café and begin!"
  },
  filters: [
    { key: "show", label: { tr: "Dizi & Yapım", en: "Show & Production" } },
    { key: "char", label: { tr: "Karakterler", en: "Characters" } },
    { key: "ep", label: { tr: "Efsane Bölümler", en: "Legendary Episodes" } }
  ],
  sections: [
    { id: "dogus", era: "1988 – 1990", title: { tr: "Doğuş: Bir Bakkalda Başlayan Fikir", en: "Origins: An Idea Born in a Grocery Store" },
      intro: { tr: "Jerry Seinfeld ve Larry David, New York'ta bir bakkalda komedyenlerin ürünler hakkında ne kadar saçma konuştuğuna gülerken fikri buldu: Komedyenlerin malzemeyi nereden bulduğunu gösteren bir dizi.", en: "Jerry Seinfeld and Larry David came up with it in a New York grocery store, laughing at the absurd things comedians say about products: a show about where comedians get their material." } },
    { id: "dortlu", era: "DÖRTLÜ", title: { tr: "Jerry, George, Elaine ve Kramer", en: "Jerry, George, Elaine and Kramer" },
      intro: { tr: "Dört bencil, dört kusurlu ve dört muhteşem karakter. Dizinin altın kuralı: 'Sarılmak yok, ders çıkarmak yok.'", en: "Four selfish, flawed and brilliant characters. The show's golden rule: 'No hugging, no learning.'" } },
    { id: "bolumler", era: "1991 – 1997", title: { tr: "Efsane Bölümler", en: "Legendary Episodes" },
      intro: { tr: "180 bölümün her biri ayrı bir mücevher; ama bazıları pop kültürünün kalıcı parçası oldu.", en: "Each of the 180 episodes is a gem, but some became permanent pieces of pop culture." } },
    { id: "final", era: "1998 → BUGÜN", title: { tr: "Final ve Ölümsüz Miras", en: "The Finale and an Immortal Legacy" },
      intro: { tr: "Dizi zirvedeyken bitti. Ama tekrar yayınlar, yayın platformları ve internet esprileriyle hiç bitmedi.", en: "The show ended at its peak. But through reruns, streaming and internet jokes, it never really ended." } }
  ],
  entries: [
    { section: "dogus", year: "5 Temmuz 1989", cat: "show", img: "Jerry Seinfeld (1997).jpg", caption: { tr: "Jerry Seinfeld (1997)", en: "Jerry Seinfeld (1997)" },
      title: { tr: "The Seinfeld Chronicles: Kötü Puanlı Pilot", en: "The Seinfeld Chronicles: A Poorly Rated Pilot" },
      text: { tr: "Pilot bölüm test izleyicilerinde çok kötü sonuç aldı; raporda 'Kimse Jerry'nin çamaşırhaneye gitmesini izlemek istemez' gibi yorumlar vardı. NBC'den Rick Ludwin diziye inandı ve özel programlar bütçesinden para ayırarak dizinin devam etmesini sağladı.", en: "The pilot tested terribly, with feedback like 'No one wants to watch Jerry go to the laundromat'. NBC's Rick Ludwin believed in it and funded more episodes from his specials budget." },
      facts: { tr: ["İlk sipariş: sadece 4 bölüm — TV tarihinin en küçük siparişlerinden", "Kramer'in pilot bölümdeki adı 'Kessler'di"], en: ["First order: just 4 episodes — one of the smallest in TV history", "Kramer was called 'Kessler' in the pilot"] } },
    { section: "dogus", year: "1989 – 1996", cat: "show", img: "Larry David (2009).jpg", caption: { tr: "Larry David", en: "Larry David" },
      title: { tr: "Larry David: Perde Arkasındaki Deha", en: "Larry David: The Genius Behind the Curtain" },
      text: { tr: "Dizinin ortak yaratıcısı Larry David, hikâyelerin çoğunu kendi başına gelen tuhaf olaylardan çıkardı. George Costanza aslında büyük ölçüde Larry David'in kendisidir! Ayrıca Yankees'in patronu George Steinbrenner'ın sesini de o seslendirdi; yüzü hiç görünmedi.", en: "Co-creator Larry David drew most stories from odd things that happened to him. George Costanza is largely Larry David himself! He also voiced Yankees boss George Steinbrenner, whose face was never shown." } },
    { section: "dogus", year: "1992", cat: "show", img: "Tom's Restaurant, NYC.jpg", caption: { tr: "Tom's Restaurant: dizideki Monk's Café", en: "Tom's Restaurant: the show's Monk's Café" },
      title: { tr: "'Hiçbir Şey Hakkında Bir Dizi'", en: "'A Show About Nothing'" },
      text: { tr: "Dördüncü sezonda Jerry ve George, NBC'ye bir dizi önerirler: 'Hiçbir şey hakkında bir dizi!' Dizi kendi kendisiyle dalga geçiyordu ve bu ifade Seinfeld'in kalıcı tanımı oldu. Monk's Café'nin dış çekimleri ise Manhattan'daki gerçek Tom's Restaurant'ta yapıldı.", en: "In season four Jerry and George pitch NBC a show: 'A show about nothing!' The series was mocking itself, and the phrase became Seinfeld's lasting definition. Monk's Café exteriors were filmed at the real Tom's Restaurant in Manhattan." } },

    { section: "dortlu", year: "Jerry", cat: "char", img: "Jerry Seinfeld 1997.jpg", caption: { tr: "Jerry Seinfeld", en: "Jerry Seinfeld" },
      title: { tr: "Jerry: Titiz Komedyen", en: "Jerry: The Fastidious Comedian" },
      text: { tr: "Kendini oynayan Jerry, sevgililerinden en saçma sebeplerle ayrılır: 'Elleri çok büyük', 'bezelyeleri tek tek yiyor'... Evindeki Süpermen objeleri neredeyse her bölümde bir yerde saklıdır — Jerry gerçek hayatta da dev bir Süpermen hayranıdır.", en: "Playing himself, Jerry dumps girlfriends for the silliest reasons: 'man-hands', 'she eats peas one at a time'... A Superman item hides somewhere in his apartment in nearly every episode — Jerry is a huge Superman fan in real life too." } },
    { section: "dortlu", year: "George", cat: "char", img: "Jason Alexander - 2009 (cropped).jpg", caption: { tr: "Jason Alexander (George)", en: "Jason Alexander (George)" },
      title: { tr: "George Costanza: Sevimli Kaybeden", en: "George Costanza: The Lovable Loser" },
      text: { tr: "Kel, kısa, cimri, yalancı ve sürekli işten kovulan George… Ama bir bölümde 'her içgüdümün tam tersini yaparsam?' diye düşünür ve hayatı mükemmelleşir. Jason Alexander karakteri başta Woody Allen gibi oynadı, sonra onun aslında Larry David olduğunu fark etti. Soyadı Jerry'nin gerçek arkadaşı Mike Costanza'dan gelir.", en: "Bald, short, cheap, a liar and always getting fired — that's George… But in one episode he asks 'what if I do the opposite of every instinct?' and his life becomes perfect. Jason Alexander first played him like Woody Allen, then realised he was really Larry David. His surname comes from Jerry's real friend Mike Costanza." } },
    { section: "dortlu", year: "Elaine", cat: "char", img: "Julia Louis-Dreyfus 2019 (2).jpg", caption: { tr: "Julia Louis-Dreyfus (Elaine)", en: "Julia Louis-Dreyfus (Elaine)" },
      title: { tr: "Elaine Benes ve O Dans", en: "Elaine Benes and That Dance" },
      text: { tr: "Zeki, sert ve dörtlünün en 'normal'i (yine de pek normal değil). Elaine'in bir ofis partisinde yaptığı 'küçük tekmeler' dansı televizyon tarihinin en komik danslarından biri. Julia Louis-Dreyfus bu rolle Emmy kazandı; sonraki yıllarda Veep ile rekor sayıda Emmy topladı.", en: "Smart, tough and the 'most normal' of the four (still not very normal). Elaine's 'little kicks' dance at a party is one of TV's funniest dances. Julia Louis-Dreyfus won an Emmy for the role and later broke records with Veep." } },
    { section: "dortlu", year: "Kramer", cat: "char", img: "Michael Richards (1993).jpg", caption: { tr: "Michael Richards (Kramer), 1993", en: "Michael Richards (Kramer), 1993" },
      title: { tr: "Kramer: Kapıdan Kayarak Giren Adam", en: "Kramer: The Man Who Slides Through the Door" },
      text: { tr: "Kramer'in Jerry'nin kapısından kayarak girişi o kadar sevildi ki seyirciler her seferinde alkışladı. Michael Richards fiziksel komedinin ustasıydı ve rolüyle üç Emmy kazandı. Karakter, Larry David'in gerçek komşusu Kenny Kramer'den ilham aldı. İlk adının 'Cosmo' olduğu ancak altıncı sezonda ortaya çıktı!", en: "Kramer's sliding entrances through Jerry's door were so loved that audiences applauded every time. Michael Richards was a master of physical comedy and won three Emmys for the role. The character was inspired by Larry David's real neighbour, Kenny Kramer. His first name, 'Cosmo', wasn't revealed until season six!" } },
    { section: "dortlu", year: "Newman", cat: "char", img: "Wayne Knight2013 (cropped).jpg", caption: { tr: "Wayne Knight (Newman)", en: "Wayne Knight (Newman)" },
      title: { tr: "'Merhaba, Newman.'", en: "'Hello, Newman.'" },
      text: { tr: "Jerry'nin baş düşmanı, postacı Newman. Jerry'nin buz gibi bir sesle söylediği 'Hello, Newman' selamı dizinin en çok taklit edilen repliklerinden biri. Wayne Knight bu küçük rolü kült bir karaktere çevirdi; aynı yıllarda Jurassic Park'ta da Dennis Nedry'yi oynadı.", en: "Jerry's arch-nemesis, mailman Newman. Jerry's icy 'Hello, Newman' is one of the show's most imitated lines. Wayne Knight turned a small role into a cult character — and around the same time played Dennis Nedry in Jurassic Park." } },

    { section: "bolumler", year: "1992", cat: "ep", img: "Seinfeld cast on stage after win (211282673).jpg", caption: { tr: "Seinfeld ekibi bir ödül töreninde", en: "The Seinfeld team on stage after a win" },
      title: { tr: "The Contest", en: "The Contest" },
      text: { tr: "Dört arkadaşın kimin en uzun süre 'kendi kendine yetebileceğine' dair bir iddiaya girdiği bölüm, o konunun adını bir kez bile söylemeden anlatıldı. Larry David bu bölümle Emmy kazandı; 'Master of my domain' (kendi alanımın efendisiyim) ifadesi deyimleşti.", en: "Four friends bet on who can 'stay master of their domain' the longest — and the subject is never once named. Larry David won an Emmy for writing it, and 'master of my domain' became an idiom." } },
    { section: "bolumler", year: "1993", cat: "ep", img: "Smithsonian National Museum of American History - Seinfeld, The Puffy Shirt (2345679516).jpg", caption: { tr: "Smithsonian'daki kabarık gömlek", en: "The puffy shirt at the Smithsonian" },
      title: { tr: "The Puffy Shirt", en: "The Puffy Shirt" },
      text: { tr: "Jerry, sessiz konuşan (low-talker) bir kadının ne dediğini anlamadan 'evet' der ve kendini televizyonda korsan gibi kabarık bir gömlekle bulur: 'Ama ben korsan olmak istemiyorum!' Gerçek gömlek 2004'te Smithsonian Müzesi'ne bağışlandı.", en: "Jerry agrees to something a low-talker says without hearing it and ends up on TV in a pirate-style puffy shirt: 'But I don't wanna be a pirate!' The real shirt was donated to the Smithsonian in 2004." } },
    { section: "bolumler", year: "1995", cat: "ep", img: "The Original Soup Man (635246818).jpg", caption: { tr: "The Original Soup Man: gerçek 'Çorba Nazisi'nin dükkânı", en: "The Original Soup Man: the real Soup Nazi's shop" },
      title: { tr: "The Soup Nazi: 'Sana Çorba Yok!'", en: "The Soup Nazi: 'No Soup for You!'" },
      text: { tr: "Kurallara uymayan müşterisini anında dükkândan kovan çorbacı, gerçek bir New York'lu çorbacı olan Al Yeganeh'den esinlendi. 'No soup for you!' repliği dünya çapında bir espri oldu; Yeganeh ise diziden pek hoşlanmadığını açıkça söyledi.", en: "The soup man who banishes any customer who breaks his rules was inspired by real New York soup vendor Al Yeganeh. 'No soup for you!' became a worldwide joke — and Yeganeh made it clear he wasn't a fan of the show." } },
    { section: "bolumler", year: "1993 – 1997", cat: "ep", img: "Black and white cookie from Trader Joe's 01.jpg", caption: { tr: "Siyah-beyaz kurabiye", en: "A black and white cookie" },
      title: { tr: "Mermer Çavdar, Junior Mints ve Siyah-Beyaz Kurabiye", en: "Marble Rye, Junior Mints and the Black and White Cookie" },
      text: { tr: "Seinfeld'de yiyecekler başrol oynar: yaşlı bir kadından kapılan mermer çavdar ekmeği, ameliyat sırasında hastanın içine düşen Junior Mints şekeri ve Jerry'nin 'ırk uyumu' dersini anlattığı siyah-beyaz kurabiye. Dizinin büyüsü, en küçük şeyleri destana çevirmesindeydi.", en: "Food stars in Seinfeld: a marble rye snatched from an old lady, a Junior Mint dropped into a patient during surgery and the black and white cookie Jerry uses for a lesson on racial harmony. The magic was turning the tiniest things into epics." } },
    { section: "bolumler", year: "1997", cat: "ep", img: "Festivus Pole.jpg", caption: { tr: "Festivus direği", en: "A Festivus pole" },
      title: { tr: "Festivus: Geri Kalanlarımız İçin Bir Bayram", en: "Festivus: A Festivus for the Rest of Us" },
      text: { tr: "George'un babası Frank Costanza'nın icat ettiği alternatif bayram: süssüz bir alüminyum direk, 'şikâyet saati' (herkes birbirine o yıl nasıl hayal kırıklığı yarattığını söyler) ve 'güç gösterisi'. Fikir, senarist Dan O'Keefe'nin babasının gerçekten kutladığı bir aile geleneğinden geldi. Bugün insanlar her 23 Aralık'ta Festivus'u gerçekten kutluyor!", en: "The alternative holiday invented by George's father, Frank Costanza: an unadorned aluminium pole, the 'Airing of Grievances' (everyone tells each other how they disappointed them that year) and the 'Feats of Strength'. It came from writer Dan O'Keefe's father's real family tradition. Today people genuinely celebrate Festivus every 23 December!" } },

    { section: "final", year: "14 Mayıs 1998", cat: "show", img: "Seinfeld Cast in the 1990s.jpg", caption: { tr: "Seinfeld oyuncuları, 90'lar", en: "The Seinfeld cast in the 1990s" },
      title: { tr: "Final: 76 Milyon İzleyici", en: "The Finale: 76 Million Viewers" },
      text: { tr: "Final bölümünü ABD'de yaklaşık 76 milyon kişi izledi. Dörtlü, bir yabancıya yardım etmedikleri için 'İyi Samiriyeli' yasasıyla yargılanır ve geçmiş bölümlerdeki herkes tanık olarak geri döner. Final izleyiciyi ikiye böldü ama 'ders çıkarmamak' kuralına sonuna kadar sadık kaldı.", en: "About 76 million Americans watched the finale. The four are tried under a 'Good Samaritan' law for failing to help a stranger, and characters from past episodes return as witnesses. The finale split audiences but stayed true to 'no learning' to the very end." } },
    { section: "final", year: "1998", cat: "show", img: "Jerry Seinfeld 2016 - 2.jpg", caption: { tr: "Jerry Seinfeld (2016)", en: "Jerry Seinfeld (2016)" },
      title: { tr: "110 Milyon Dolara 'Hayır'", en: "Saying 'No' to $110 Million" },
      text: { tr: "NBC, onuncu bir sezon için Jerry'ye bölüm başına yaklaşık 5 milyon dolar (toplamda ~110 milyon dolar) teklif etti. Jerry, dizinin zirvedeyken bitmesini istediği için reddetti. TV tarihinin en büyük 'hayır'larından biri!", en: "NBC offered Jerry about $5 million per episode (~$110 million total) for a tenth season. Jerry said no because he wanted the show to end at its peak. One of the biggest 'no's in TV history!" } },
    { section: "final", year: "2009", cat: "show", img: "Larry David at the 2009 Tribeca Film Festival 2.jpg", caption: { tr: "Larry David", en: "Larry David" },
      title: { tr: "Curb Your Enthusiasm'da Buluşma", en: "The Reunion on Curb Your Enthusiasm" },
      text: { tr: "Larry David'in kendi dizisi Curb Your Enthusiasm'ın yedinci sezonunda dörtlü, 'Seinfeld buluşma bölümü' çekme hikâyesiyle yeniden bir araya geldi. Hayranların 11 yıllık özlemi, diziyi kendisiyle dalga geçen bir şekilde giderildi — tam Seinfeld'e yakışır biçimde.", en: "In season seven of Larry David's own show, Curb Your Enthusiasm, the four reunited in a storyline about making a Seinfeld reunion. Fans' 11-year wait was satisfied in a self-mocking way — perfectly Seinfeld." } },
    { section: "final", year: "Bugün", cat: "show", img: "Upper West Side New York August 2013 001.jpg", caption: { tr: "Manhattan'ın Upper West Side semti", en: "Manhattan's Upper West Side" },
      title: { tr: "Tekrar Yayınların Kralı", en: "King of Reruns" },
      text: { tr: "Seinfeld, tekrar yayın (syndication) haklarından milyarlarca dolar kazandırdı. 2019'da Netflix'in yayın hakları için 500 milyon doları aşan bir anlaşma yaptığı bildirildi. Türkiye'de pek çok kişi diziyle 2000'lerde kablolu kanallardaki tekrarlar sayesinde tanıştı.", en: "Seinfeld earned billions from syndication. In 2019 Netflix reportedly paid over $500 million for streaming rights. In Turkey, many people discovered the show through reruns on cable channels in the 2000s." } }
  ],
  stats: {
    title: { tr: "Rakamlarla Seinfeld", en: "Seinfeld by the Numbers" },
    tiles: [
      { value: "180", label: { tr: "Bölüm (9 sezon)", en: "Episodes (9 seasons)" } },
      { value: "4", label: { tr: "İlk bölüm siparişi", en: "Episodes in the first order" } },
      { value: "~76 M", label: { tr: "Final bölümü izleyicisi (ABD)", en: "Finale viewers (US)" } },
      { value: "~110 M $", label: { tr: "Reddedilen 10. sezon teklifi", en: "Rejected 10th-season offer" } },
      { value: "0", label: { tr: "Sarılma ve ders çıkarma", en: "Hugs and lessons learned" } },
      { value: "23 Aralık", label: { tr: "Festivus günü", en: "Festivus day" } }
    ],
    charts: [
      { title: { tr: "Ana oyuncuların kazandığı Emmy'ler (dizi süresince)", en: "Emmys won by the main cast (during the run)" },
        rows: [["Michael Richards (Kramer)", 3], ["Julia Louis-Dreyfus (Elaine)", 1], ["Jason Alexander (George)", 0], ["Jerry Seinfeld (Jerry)", 0]],
        note: { tr: "Dizi 1993'te En İyi Komedi Dizisi Emmy'sini kazandı. Jason Alexander 7 kez aday oldu!", en: "The show won Outstanding Comedy Series in 1993. Jason Alexander was nominated 7 times!" } },
      { title: { tr: "Bölüm sayısı (sezonlara göre)", en: "Episodes per season" },
        rows: [["Sezon 1", 5], ["Sezon 2", 12], ["Sezon 3", 23], ["Sezon 4", 24], ["Sezon 5", 22], ["Sezon 6", 24], ["Sezon 7", 24], ["Sezon 8", 22], ["Sezon 9", 24]],
        note: { tr: "Bazı listelerde çift bölümler farklı sayıldığı için toplam 172–180 arasında görülebilir.", en: "Double episodes are counted differently in some lists, so totals of 172–180 appear." } }
    ]
  },
  facts: {
    title: { tr: "Günlük Dile Giren Seinfeld'ler", en: "Seinfeld-isms in Everyday Language" },
    items: [
      { img: "Tom's Restaurant, NYC.jpg", caption: { tr: "Tom's Restaurant: dizideki Monk's Café", en: "Tom's Restaurant: the show's Monk's Café" },
        title: { tr: "'Yada yada yada'", en: "'Yada yada yada'" },
        text: { tr: "Bir hikâyenin en önemli kısmını 'yada yada' diyerek geçiştirmek… Elaine'in sevgilisinin her şeyi bu şekilde anlatması, ifadeyi dünya çapında popüler yaptı.", en: "Skipping the most important part of a story with 'yada yada'… Elaine's boyfriend telling everything that way made the phrase popular worldwide." } },
      { img: "Black and white cookie from Trader Joe's 01.jpg", caption: { tr: "Siyah-beyaz kurabiye", en: "A black and white cookie" },
        title: { tr: "'Double dip' ve 'regifter'", en: "'Double-dip' and 'regifter'" },
        text: { tr: "Isırılmış cipsi tekrar sosa batırmak (double dip) ve kendisine gelen hediyeyi başkasına hediye etmek (regifter) — ikisi de Seinfeld sayesinde tanıdık kavramlar oldu.", en: "Dipping a bitten chip back into the dip (double-dipping) and passing on a gift you received (regifting) — both became familiar concepts thanks to Seinfeld." } },
      { img: "Kramer, Kenny (2007).jpg", caption: { tr: "Gerçek Kramer: Kenny Kramer", en: "The real Kramer: Kenny Kramer" },
        title: { tr: "Gerçek Kramer'in turu", en: "The real Kramer's tour" },
        text: { tr: "Kramer'in ilham kaynağı Kenny Kramer, New York'ta 'Kramer's Reality Tour' adlı bir otobüs turu başlattı ve hayranları dizideki gerçek mekânlara götürdü. Dizide bu tur 'Peterman Reality Tour' olarak tiye alındı!", en: "Kenny Kramer, the inspiration for Kramer, launched 'Kramer's Reality Tour' in New York, taking fans to real locations from the show. The show then spoofed it as the 'Peterman Reality Tour'!" } },
      { img: "Jason Alexander - 2009 (cropped).jpg", caption: { tr: "Jason Alexander (George)", en: "Jason Alexander (George)" },
        title: { tr: "George'un hayali işleri", en: "George's dream jobs" },
        text: { tr: "George'un en çok istediği meslek mimarlıktı; yalanlarında kullandığı sahte şirketin adı 'Vandelay Industries' (ithalat-ihracat) bugün hâlâ şakalarda geçer.", en: "George's dream job was architect; the fake company from his lies, 'Vandelay Industries' (importer-exporter), is still a running joke." } },
      { img: "PEZ Soft Dispensers.jpeg", caption: { tr: "Pez şekerliği", en: "A Pez dispenser" },
        title: { tr: "Piyano resitalinde Pez", en: "Pez at a piano recital" },
        text: { tr: "Elaine, Jerry'nin Pez şekerliği yüzünden bir piyano resitalinde kahkahayı tutamaz. Dizi, en ciddi anları bile küçücük bir objeyle yerle bir etmeyi severdi.", en: "Elaine can't stop laughing at a piano recital because of Jerry's Pez dispenser. The show loved to wreck the most serious moments with a tiny object." } },
      { img: "Julia Louis-Dreyfus 2019 (2).jpg", caption: { tr: "Julia Louis-Dreyfus (Elaine)", en: "Julia Louis-Dreyfus (Elaine)" },
        title: { tr: "Kamerada gülmeye dayanamayanlar", en: "Breaking on camera" },
        text: { tr: "Oyuncular sahnede kahkahayı tutamayıp çekimi bozmalarıyla ünlüydü; özellikle Michael Richards'ın doğaçlamaları yüzünden Julia Louis-Dreyfus'un gülme krizleri ayrı bir efsanedir.", en: "The cast was famous for cracking up during takes; Julia Louis-Dreyfus' laughing fits at Michael Richards' improvisations are a legend of their own." } }
    ]
  }
});
