// Post: 80s international rock. Images are Wikimedia Commons file names.
window.POSTS = window.POSTS || [];
window.POSTS.push({
  slug: "80ler-rock",
  cover: "Freddie Mercury at Live Aid (1985).jpg",
  readMin: 20,
  kicker: { tr: "// KONU 07 · SESİ AÇ", en: "// TOPIC 07 · TURN IT UP" },
  title: { tr: "80'ler Yabancı Rock: Saç Spreyi, MTV ve Stadyum Marşları", en: "80s Rock: Hairspray, MTV and Stadium Anthems" },
  summary: {
    tr: "MTV'nin açılışından Live Aid'e, heavy metal'in yükselişinden glam rock'ın kabarık saçlarına: 80'lerin en büyük grupları, albümleri ve unutulmaz anekdotları.",
    en: "From MTV's launch to Live Aid, from heavy metal's rise to glam rock's big hair: the biggest bands, albums and unforgettable anecdotes of the 80s."
  },
  intro: {
    tr: "80'ler rock için hem en gösterişli hem de en çeşitli on yıldı. Video klip müziği görsel bir sanata dönüştürdü, stadyumlar yüz binleri ağırladı, gitar soloları uzadıkça uzadı ve saçlar kabardıkça kabardı. Bir yanda Iron Maiden ve Metallica'nın sert sesleri, diğer yanda U2 ve Dire Straits'in büyük melodileri; bir yanda Bon Jovi'nin aşk marşları, diğer yanda Guns N' Roses'un sokak isyanı. Hadi kasedi takalım!",
    en: "The 80s were rock's flashiest and most varied decade. Music videos turned songs into visual art, stadiums held hundreds of thousands, guitar solos got longer and hair got bigger. Iron Maiden and Metallica's heavy sounds on one side, U2 and Dire Straits' big melodies on the other; Bon Jovi's love anthems and Guns N' Roses' street rebellion. Let's put the tape in!"
  },
  filters: [
    { key: "hard", label: { tr: "Hard Rock & Metal", en: "Hard Rock & Metal" } },
    { key: "pop", label: { tr: "Pop Rock & Stadyum", en: "Pop Rock & Stadium" } },
    { key: "event", label: { tr: "Olaylar", en: "Moments" } }
  ],
  sections: [
    { id: "mtv", era: "1980 – 1983", title: { tr: "Video Yıldızı Öldürdü: MTV Çağı", en: "Video Killed the Radio Star: The MTV Age" },
      intro: { tr: "1 Ağustos 1981'de MTV yayına başladı ve bir şarkının başarısı artık klibine de bağlıydı. Aynı yıllarda İngiliz heavy metal'in yeni dalgası (NWOBHM) sahneyi sarstı.", en: "On 1 August 1981 MTV went live, and a song's success now depended on its video too. Meanwhile the New Wave of British Heavy Metal (NWOBHM) shook the scene." } },
    { id: "stadyum", era: "1984 – 1986", title: { tr: "Stadyum Rock ve Live Aid", en: "Stadium Rock and Live Aid" },
      intro: { tr: "Rock artık dev sahnelerin müziğiydi. 1985'teki Live Aid, iki kıtada aynı anda yapılan ve tarihin en çok izlenen konserlerinden biri oldu.", en: "Rock was now the music of giant stages. Live Aid in 1985, held on two continents at once, became one of history's most watched concerts." } },
    { id: "glam", era: "1986 – 1989", title: { tr: "Glam, Thrash ve Sokak Rock'ı", en: "Glam, Thrash and Street Rock" },
      intro: { tr: "Kabarık saçlar ve power balad'lar listeleri ele geçirirken, yeraltında thrash metal hızlanıyordu. On yılın sonunu ise Guns N' Roses'un ham enerjisi belirledi.", en: "While big hair and power ballads ruled the charts, thrash metal sped up underground. Guns N' Roses' raw energy defined the decade's end." } }
  ],
  entries: [
    { section: "mtv", year: "1980", cat: "hard", img: "AngusYoung.JPG", caption: { tr: "Angus Young", en: "Angus Young" },
      title: { tr: "AC/DC — Back in Black", en: "AC/DC — Back in Black" },
      text: { tr: "Vokalist Bon Scott'ın ölümünden sadece birkaç ay sonra, Brian Johnson ile kaydedilen ve kapağı tamamen siyah olan albüm bir saygı duruşuydu. Tarihin en çok satan albümlerinden biri oldu.", en: "Recorded with Brian Johnson just months after singer Bon Scott's death, the all-black-cover album was a tribute. It became one of the best-selling albums ever." },
      facts: { tr: ["~50 milyon satış (tahmini)", "Angus Young'ın okul üniforması sahne kostümü"], en: ["~50 million sold (est.)", "Angus Young's school uniform stage outfit"] } },
    { section: "mtv", year: "1981", cat: "event", img: "1990s Television Set.jpg", caption: { tr: "Televizyon: 80'lerin yeni sahnesi", en: "TV: the new stage of the 80s" },
      title: { tr: "MTV Yayında: 'Video Killed the Radio Star'", en: "MTV Goes Live: 'Video Killed the Radio Star'" },
      text: { tr: "MTV'nin yayınladığı ilk klip, The Buggles'ın 'Video Killed the Radio Star' şarkısıydı — ironik ama kehanet gibi. Kanal kısa sürede gençlerin müzik keşfetme biçimini değiştirdi.", en: "The first video MTV aired was The Buggles' 'Video Killed the Radio Star' — ironic but prophetic. The channel soon changed how young people discovered music." } },
    { section: "mtv", year: "1982", cat: "hard", img: "Iron Maiden en concert à l'Espace Balard en 1983..jpg",
      title: { tr: "Iron Maiden — The Number of the Beast", en: "Iron Maiden — The Number of the Beast" },
      text: { tr: "Bruce Dickinson'ın gelişiyle Iron Maiden zirveye çıktı. Maskotları Eddie, her albüm kapağında farklı bir kılıkta belirdi. Grup bugün kendi uçağını ('Ed Force One') solist Bruce'un pilotluğunda uçuruyor.", en: "Bruce Dickinson's arrival took Iron Maiden to the top. Their mascot Eddie appeared in a new guise on every cover. Today the band flies its own plane ('Ed Force One') piloted by Bruce himself." } },
    { section: "mtv", year: "1983", cat: "hard", img: "Def Leppard 2018.jpg",
      title: { tr: "Def Leppard — Pyromania", en: "Def Leppard — Pyromania" },
      text: { tr: "Parlak prodüksiyonuyla hard rock'ı radyoya taşıdı. 1984'teki trafik kazasında kolunu kaybeden davulcu Rick Allen'ın özel elektronik davul setiyle gruba dönmesi rock tarihinin en dokunaklı hikâyelerinden biri.", en: "Its glossy production brought hard rock to radio. Drummer Rick Allen losing his arm in a 1984 car crash and returning with a custom electronic kit is one of rock's most moving stories." } },
    { section: "mtv", year: "1983", cat: "pop", img: "Police Sting Buenos Aires.jpg", caption: { tr: "Sting", en: "Sting" },
      title: { tr: "The Police — Synchronicity", en: "The Police — Synchronicity" },
      text: { tr: "'Every Breath You Take' bir aşk şarkısı sanılır ama Sting'e göre takıntılı, kıskanç birini anlatır. Albüm grubu zirveye taşıdı ve ardından grup dağıldı.", en: "'Every Breath You Take' is often mistaken for a love song; Sting says it's about an obsessive, jealous person. The album took the band to the peak — then they split." } },

    { section: "stadyum", year: "1984", cat: "pop", img: "Bruce Springsteen Born in the U.S.A. Tour photo by Rocky Widner.jpg",
      title: { tr: "Bruce Springsteen — Born in the U.S.A.", en: "Bruce Springsteen — Born in the U.S.A." },
      text: { tr: "Albümün başlık şarkısı bir vatanseverlik marşı sanıldı; aslında Vietnam gazilerinin yaşadığı hayal kırıklığını anlatan bir protesto şarkısıydı. Albümden 7 single ilk 10'a girdi.", en: "Its title track was mistaken for a patriotic anthem; it's actually a protest song about Vietnam veterans' disillusionment. Seven singles from the album hit the Top 10." } },
    { section: "stadyum", year: "1984", cat: "hard", img: "Eddie Van Halen at the New Haven Coliseum.jpg", caption: { tr: "Eddie Van Halen", en: "Eddie Van Halen" },
      title: { tr: "Van Halen — 1984 ve 'Jump'", en: "Van Halen — 1984 and 'Jump'" },
      text: { tr: "Gitar dehası Eddie Van Halen'ın 'tapping' tekniği bir neslin gitaristlerini etkiledi. 'Jump'ta ise gitar yerine synthesizer'ın öne çıkması hayranları şaşırttı ama şarkı listelerin zirvesine çıktı.", en: "Guitar genius Eddie Van Halen's tapping technique influenced a generation. On 'Jump', a synth riff instead of guitar surprised fans — and the song hit number one." },
      facts: { tr: ["Eddie, Michael Jackson'ın 'Beat It' solosunu ücretsiz çaldı"], en: ["Eddie played the 'Beat It' solo for Michael Jackson for free"] } },
    { section: "stadyum", year: "13 Temmuz 1985", cat: "event", img: "Live Aid at JFK Stadium, Philadelphia, PA.jpg", caption: { tr: "Live Aid, JFK Stadyumu, Philadelphia", en: "Live Aid at JFK Stadium, Philadelphia" },
      title: { tr: "Live Aid: Queen'in 20 Dakikası", en: "Live Aid: Queen's 20 Minutes" },
      text: { tr: "Bob Geldof'un Etiyopya'daki kıtlık için düzenlediği konser Londra ve Philadelphia'da aynı gün yapıldı, ~150 ülkede ~1,9 milyar kişiye ulaştığı tahmin edildi. Queen'in 20 dakikalık performansı sık sık tarihin en iyi canlı rock performansı seçilir; Freddie Mercury'nin seyirciyle 'Ay-Oh!' atışması efsanedir.", en: "Bob Geldof's concert for the Ethiopian famine was held in London and Philadelphia on the same day, reaching an estimated ~1.9 billion people in ~150 countries. Queen's 20-minute set is often voted the greatest live rock performance; Freddie Mercury's 'Ay-Oh!' call-and-response is legendary." },
      facts: { tr: ["Phil Collins iki konserde de çaldı: Concorde ile Atlantik'i geçti", "~127 milyon $ yardım toplandı"], en: ["Phil Collins played both shows, crossing the Atlantic by Concorde", "~$127 million raised"] } },
    { section: "stadyum", year: "1985", cat: "pop", img: "Mark Knopfler - 1979.jpg", caption: { tr: "Mark Knopfler (1979)", en: "Mark Knopfler (1979)" },
      title: { tr: "Dire Straits — Brothers in Arms", en: "Dire Straits — Brothers in Arms" },
      text: { tr: "CD formatında 1 milyon satan ilk albüm; CD çalarların yayılmasına katkısı büyüktür. 'Money for Nothing' klibi, MTV'de ilk yayınlanan bilgisayar animasyonlu kliplerdendi. Mark Knopfler gitarı pena kullanmadan, parmaklarıyla çalar.", en: "The first album to sell a million on CD; it helped spread CD players. The 'Money for Nothing' video was among the first computer-animated clips on MTV. Mark Knopfler plays without a pick, using his fingers." } },
    { section: "stadyum", year: "1986", cat: "pop", img: "Joey Tempest in Lakselv 2008.jpg", caption: { tr: "Joey Tempest", en: "Joey Tempest" },
      title: { tr: "Europe — The Final Countdown", en: "Europe — The Final Countdown" },
      text: { tr: "İsveçli grubun synthesizer girişi o kadar ikonik ki bugün spor maçlarından düğünlere her yerde çalınıyor. Joey Tempest şarkıyı başta konserlere giriş müziği olarak yazmıştı.", en: "The Swedish band's synth intro is so iconic it's played everywhere from sports games to weddings. Joey Tempest originally wrote it as a concert opener." } },
    { section: "stadyum", year: "1986", cat: "pop", img: "Bon Jovi - Circles Tour at Honda Center, 27 February 2010 (5351068835).jpg",
      title: { tr: "Bon Jovi — Slippery When Wet", en: "Bon Jovi — Slippery When Wet" },
      text: { tr: "'Livin' on a Prayer' ve 'You Give Love a Bad Name' ile grup dünya yıldızı oldu. Şarkıların sırası, New Jersey'de gençlere dinletilerek seçildi. Albüm ~28 milyon sattı.", en: "With 'Livin' on a Prayer' and 'You Give Love a Bad Name' the band became global stars. Track choices were tested on New Jersey teenagers. The album sold ~28 million." } },

    { section: "glam", year: "1986", cat: "hard", img: "Metallica live London 2003-12-19 (cropped).jpg",
      title: { tr: "Metallica — Master of Puppets", en: "Metallica — Master of Puppets" },
      text: { tr: "Thrash metal'in başyapıtı radyo ve klip olmadan, sadece turnelerle platin oldu. Aynı yıl basçı Cliff Burton'ın İsveç'teki otobüs kazasında ölümü grubu sarstı. Başlık şarkısı 2022'de 'Stranger Things' sayesinde yeniden listelere girdi.", en: "Thrash metal's masterpiece went platinum with no radio or video, just touring. The same year bassist Cliff Burton died in a tour bus crash in Sweden. The title track re-entered the charts in 2022 thanks to 'Stranger Things'." } },
    { section: "glam", year: "1984", cat: "hard", img: "Scorpions (1984 Polygram Records publicity photo).jpg",
      title: { tr: "Scorpions — 'Rock You Like a Hurricane'", en: "Scorpions — 'Rock You Like a Hurricane'" },
      text: { tr: "Alman grup 80'lerde Amerika'yı fethetti. 1990'da Berlin Duvarı'nın yıkılışıyla özdeşleşen 'Wind of Change' ise tarihin en çok satan single'larından biri oldu.", en: "The German band conquered America in the 80s. 1990's 'Wind of Change', linked with the fall of the Berlin Wall, became one of the best-selling singles ever." } },
    { section: "glam", year: "1987", cat: "pop", img: "U2 performing at Croke Park on Joshua Tree Tour on June 27 1987.jpg",
      title: { tr: "U2 — The Joshua Tree", en: "U2 — The Joshua Tree" },
      text: { tr: "'With or Without You' ve 'Where the Streets Have No Name' ile U2 dünyanın en büyük grubu oldu. 'Streets' klibi için Los Angeles'ta bir dükkânın çatısında habersiz konser verdiler ve polis çekimi durdurdu.", en: "'With or Without You' and 'Where the Streets Have No Name' made U2 the world's biggest band. For the 'Streets' video they played an unannounced rooftop gig in Los Angeles, and police shut it down." } },
    { section: "glam", year: "1987", cat: "hard", img: "Slash, Guitarist of Guns N' Roses in 2017.jpg", caption: { tr: "Slash", en: "Slash" },
      title: { tr: "Guns N' Roses — Appetite for Destruction", en: "Guns N' Roses — Appetite for Destruction" },
      text: { tr: "Başta ilgi görmedi; MTV'nin 'Welcome to the Jungle'ı gece geç saatte bir kez çalmasıyla patladı. 'Sweet Child o' Mine'ın meşhur riffi Slash'in ısınma egzersizi olarak çaldığı bir şakaydı.", en: "It started slow and exploded after MTV aired 'Welcome to the Jungle' once, late at night. The famous 'Sweet Child o' Mine' riff began as a joke Slash played as a warm-up exercise." },
      facts: { tr: ["Tarihin en çok satan çıkış albümü (~30 milyon)"], en: ["Best-selling debut album ever (~30 million)"] } }
  ],
  stats: {
    title: { tr: "Rakamlarla 80'ler Rock", en: "80s Rock by the Numbers" },
    tiles: [
      { value: "1981", label: { tr: "MTV'nin yayına başladığı yıl", en: "MTV launched" } },
      { value: "~1,9 Mrd", label: { tr: "Live Aid'in tahmini izleyicisi", en: "Estimated Live Aid audience" } },
      { value: "20 dk", label: { tr: "Queen'in efsane Live Aid seti", en: "Queen's legendary Live Aid set" } },
      { value: "1 M", label: { tr: "Brothers in Arms: 1 milyon satan ilk CD", en: "Brothers in Arms: first CD to sell a million" } },
      { value: "~30 M", label: { tr: "Appetite for Destruction satışı", en: "Appetite for Destruction sales" } },
      { value: "1", label: { tr: "Rick Allen'ın davul çaldığı kol", en: "Arms Rick Allen drums with" } }
    ],
    charts: [
      { title: { tr: "80'lerin en çok satan rock albümleri (milyon, tahmini)", en: "Best-selling rock albums of the 80s (millions, est.)" },
        rows: [["AC/DC – Back in Black", 50], ["Bruce Springsteen – Born in the U.S.A.", 30], ["Guns N' Roses – Appetite", 30], ["Bon Jovi – Slippery When Wet", 28], ["U2 – The Joshua Tree", 25], ["Dire Straits – Brothers in Arms", 30], ["Def Leppard – Hysteria", 25]],
        note: { tr: "Kaynaklara göre değişen yaklaşık değerler.", en: "Approximate; figures vary by source." } }
    ]
  },
  facts: {
    title: { tr: "İlginç Bilgiler", en: "Fun Facts" },
    items: [
      { img: "Freddie Mercury at Live Aid (1985).jpg", caption: { tr: "Freddie Mercury", en: "Freddie Mercury" },
        title: { tr: "Live Aid'de sesi kısılmıştı", en: "He had a sore throat at Live Aid" },
        text: { tr: "Freddie Mercury, Live Aid öncesinde boğaz enfeksiyonu geçiriyordu ve doktorlar çıkmamasını önermişti. Yine de çıktı — ve tarih yazdı.", en: "Freddie Mercury had a throat infection before Live Aid and doctors advised against performing. He went on anyway — and made history." } },
      { img: "Eddie Van Halen at the New Haven Coliseum.jpg", caption: { tr: "Eddie Van Halen", en: "Eddie Van Halen" }, caption: { tr: "Van Halen", en: "Van Halen" },
        title: { tr: "Kahverengi M&M'ler", en: "The brown M&Ms" },
        text: { tr: "Van Halen'ın sözleşmesinde kulisteki M&M kâsesinde kahverengi şeker olmaması şartı vardı. Bu bir kaprisi değil, testti: kahverengi şeker görürlerse organizatörün güvenlik şartnamesini dikkatle okumadığını anlıyorlardı.", en: "Van Halen's contract demanded no brown M&Ms backstage. It wasn't a whim but a test: brown ones meant the promoter hadn't read the safety rider carefully." } },
      { img: "Iron Maiden en concert à l'Espace Balard en 1983..jpg", caption: { tr: "Iron Maiden", en: "Iron Maiden" },
        title: { tr: "Kendi uçağını uçuran solist", en: "The singer who flies the plane" },
        text: { tr: "Bruce Dickinson ticari pilot lisansına sahip ve grubun dünya turnelerinde Boeing 747'yi bizzat uçurdu. Ayrıca eskrimde ulusal düzeyde yarıştı ve bir bira markası çıkardı.", en: "Bruce Dickinson is a licensed commercial pilot and personally flew the band's Boeing 747 on world tours. He also fenced at national level and launched a beer." } },
      { img: "Metallica live London 2003-12-19 (cropped).jpg", caption: { tr: "Metallica", en: "Metallica" },
        title: { tr: "Metallica Antarktika'da", en: "Metallica in Antarctica" },
        text: { tr: "Metallica 2013'te Antarktika'da konser verip yedi kıtanın hepsinde çalan ilk grup oldu. Seyirciler sesi kulaklıktan dinledi.", en: "In 2013 Metallica played Antarctica, becoming the first band to play all seven continents. The audience listened through headphones." } },
      { img: "Slash, Guitarist of Guns N' Roses in 2017.jpg", caption: { tr: "Slash", en: "Slash" }, caption: { tr: "Guns N' Roses", en: "Guns N' Roses" },
        title: { tr: "Slash'in silindir şapkası", en: "Slash's top hat" },
        text: { tr: "Slash'in meşhur silindir şapkasını Hollywood'da bir dükkândan aşırdığını kendisi itiraf etti. Şapka 80'lerin en tanınır rock simgelerinden biri oldu.", en: "Slash has admitted he swiped his famous top hat from a shop in Hollywood. It became one of the most recognisable rock symbols of the 80s." } },
      { img: "Bon Jovi - Circles Tour at Honda Center, 27 February 2010 (5351068835).jpg", caption: { tr: "Bon Jovi (2010)", en: "Bon Jovi (2010)" },
        title: { tr: "Saç spreyi ekonomisi", en: "The hairspray economy" },
        text: { tr: "80'lerin glam grupları o kadar çok saç spreyi kullanıyordu ki şakayla 'ozon tabakasının deliğinden sorumlu' oldukları söylenir. Bazı gruplar bir turnede yüzlerce kutu tükettiğini anlatır.", en: "80s glam bands used so much hairspray they were jokingly blamed for the ozone hole. Some bands claim they got through hundreds of cans per tour." } }
    ]
  }
});
