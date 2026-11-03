// Post: History of James Bond films. Images are Wikimedia Commons file names.
window.POSTS = window.POSTS || [];
window.POSTS.push({
  slug: "james-bond-007",
  cover: "Sean Connery as James Bond in Goldfinger.jpg",
  readMin: 24,
  kicker: { tr: "// KONU 21 · ÇALKALANMIŞ, KARIŞTIRILMAMIŞ", en: "// TOPIC 21 · SHAKEN, NOT STIRRED" },
  title: { tr: "007 James Bond Sineması: 60 Yılı Aşan Bir Ajanın Hikâyesi", en: "007 James Bond Cinema: The Story of an Agent Spanning 60+ Years" },
  summary: {
    tr: "Bir kuş kitabından ödünç alınan isim, altı Bond, 25 resmî film, Aston Martin'ler, denizaltıya dönüşen Lotus, unutulmaz şarkılar, İstanbul'daki Bond sahneleri ve serinin 'en'leri.",
    en: "A name borrowed from a bird book, six Bonds, 25 official films, Aston Martins, a Lotus that turns into a submarine, unforgettable songs, Bond scenes in Istanbul and the series' 'mosts'."
  },
  intro: {
    tr: "Smokinin içinde bir tabanca, elde bir Martini, arkada bir Aston Martin ve 'Bond… James Bond.' 1962'den bu yana James Bond, sinema tarihinin en uzun soluklu serisi olarak her neslin kendi Bond'unu yarattı. Kimimiz için Sean Connery'nin karizması, kimimiz için Roger Moore'un kaşı, kimimiz için Daniel Craig'in sert bakışıdır Bond. Bu yazıda serinin doğuşunu, bütün Bond oyuncularını, efsane araçları, şarkıları, kötü adamları, Türkiye'de çekilen sahneleri ve elbette 'en'leri satır başlarıyla anlatıyoruz. Martininizi hazırlayın — ama nasıl istediğinizi unutmayın!",
    en: "A pistol under a tuxedo, a Martini in hand, an Aston Martin behind and 'Bond… James Bond.' Since 1962, James Bond — one of cinema's longest-running series — has given every generation its own Bond. For some it's Sean Connery's charisma, for others Roger Moore's eyebrow, for others Daniel Craig's hard stare. Here we cover the series' birth, every Bond actor, legendary cars, songs, villains, the scenes shot in Turkey and, of course, the 'mosts', point by point. Prepare your Martini — and remember how you like it!"
  },
  filters: [
    { key: "actor", label: { tr: "Bond'lar", en: "The Bonds" } },
    { key: "film", label: { tr: "Filmler & Şarkılar", en: "Films & Songs" } },
    { key: "gadget", label: { tr: "Araçlar & Aletler", en: "Cars & Gadgets" } },
    { key: "trivia", label: { tr: "Perde Arkası", en: "Behind the Scenes" } }
  ],
  sections: [
    { id: "fleming", era: "1908 – 1962", title: { tr: "Ian Fleming ve Ajanın Doğuşu", en: "Ian Fleming and the Birth of the Agent" },
      intro: { tr: "Bond, gerçek bir istihbaratçının kaleminden çıktı. Ian Fleming, savaşta gördüklerini ve hayal ettiklerini Jamaika'daki evinde kâğıda döktü.", en: "Bond came from the pen of a real intelligence officer. Ian Fleming put what he saw in the war — and what he imagined — on paper at his house in Jamaica." } },
    { id: "connery", era: "1962 – 1971", title: { tr: "Connery Dönemi: Formülün Yaratılışı", en: "The Connery Era: Creating the Formula" },
      intro: { tr: "Silah namlusu jeneriği, egzotik mekânlar, aletler, kötü adamlar ve unutulmaz şarkılar: Bond formülü bu yıllarda oluştu.", en: "The gun-barrel opening, exotic locations, gadgets, villains and unforgettable songs: the Bond formula took shape in these years." } },
    { id: "moore", era: "1969 – 1989", title: { tr: "Lazenby, Moore ve Dalton", en: "Lazenby, Moore and Dalton" },
      intro: { tr: "Tek filmlik Bond, en uzun süre görev yapan Bond ve en karanlık Bond: üç farklı yorum.", en: "The one-film Bond, the longest-serving Bond and the darkest Bond: three different takes." } },
    { id: "modern", era: "1995 – 2026", title: { tr: "Brosnan, Craig ve Geleceğin Bond'u", en: "Brosnan, Craig and the Future Bond" },
      intro: { tr: "Soğuk Savaş bitince Bond yeniden icat edildi; Craig döneminde ilk kez duygusal bir hikâye anlatan, birbirine bağlı filmler geldi.", en: "When the Cold War ended Bond was reinvented; the Craig era brought connected films telling an emotional story for the first time." } },
    { id: "turkiye", era: "( İSTANBUL'DA BOND )", title: { tr: "Bond ve Türkiye", en: "Bond and Turkey" },
      intro: { tr: "Bond, Türkiye'ye en çok gelen yabancı film kahramanlarından biri: Kapalıçarşı çatılarından Kız Kulesi'ne.", en: "Bond is one of the foreign film heroes who has visited Turkey most: from the Grand Bazaar rooftops to the Maiden's Tower." } }
  ],
  entries: [
    { section: "fleming", year: "1939 – 1945", cat: "trivia", img: "Ian Fleming c. 1958.jpg", caption: { tr: "Ian Fleming (1958 civarı)", en: "Ian Fleming (c. 1958)" },
      title: { tr: "Ian Fleming: Masa Başı Ajan", en: "Ian Fleming: The Desk Spy" },
      text: { tr: "Fleming, II. Dünya Savaşı'nda İngiliz Deniz İstihbaratı'nda çalıştı ve çeşitli gizli operasyonların planlanmasında yer aldı. Bond'un ilk romanı 'Casino Royale'i 1952'de, Jamaika'daki 'Goldeneye' adlı evinde yazdı ve kitap 1953'te yayımlandı. Toplam 12 roman ve iki öykü kitabı yazdı.", en: "Fleming worked in British Naval Intelligence during WWII and helped plan secret operations. He wrote the first Bond novel, 'Casino Royale', in 1952 at his Jamaican home called 'Goldeneye'; it was published in 1953. He wrote 12 novels and two story collections." },
      facts: { tr: ["Fleming 'Chitty Chitty Bang Bang'i de yazdı", "Romanlar dünyada 100 milyonun üzerinde sattı"], en: ["Fleming also wrote 'Chitty Chitty Bang Bang'", "The novels have sold over 100 million copies"] } },
    { section: "fleming", year: "1953", cat: "trivia", img: "Bananaquit (Coereba flaveola luteola).jpg", caption: { tr: "Bir Karayip kuşu", en: "A Caribbean bird" },
      title: { tr: "İsim Bir Kuş Kitabından", en: "The Name Came from a Bird Book" },
      text: { tr: "Fleming, kahramanına mümkün olduğunca 'sıkıcı' bir isim istiyordu. Evindeki 'Batı Hint Adaları Kuşları' kitabının yazarı, Amerikalı ornitolog James Bond'un adını gördü ve aldı. Gerçek James Bond yıllar sonra Fleming'le tanıştı ve durumu esprili karşıladı.", en: "Fleming wanted the 'dullest' possible name for his hero. He saw it on the cover of 'Birds of the West Indies' by American ornithologist James Bond — and took it. The real James Bond later met Fleming and took it with good humour." } },
    { section: "fleming", year: "1961", cat: "trivia", img: "007 logo (cropped).jpg", caption: { tr: "007 logosu", en: "The 007 logo" },
      title: { tr: "Eon Productions ve 007 Numarası", en: "Eon Productions and the Number 007" },
      text: { tr: "Yapımcılar Albert R. 'Cubby' Broccoli ve Harry Saltzman, haklarını alıp Eon Productions'ı kurdu. '00' kodu 'öldürme ruhsatı'nı simgeler. Serinin aile şirketi olarak kalması — Broccoli'nin kızı Barbara Broccoli ve üvey oğlu Michael G. Wilson — uzun yıllar kaliteyi korudu.", en: "Producers Albert R. 'Cubby' Broccoli and Harry Saltzman bought the rights and founded Eon Productions. The '00' code means a 'licence to kill'. The series staying a family business — with Broccoli's daughter Barbara and stepson Michael G. Wilson — protected its quality for decades." } },

    { section: "connery", year: "1962", cat: "actor", img: "Sean Connery as James Bond in Goldfinger.jpg", caption: { tr: "Sean Connery, Goldfinger'da Bond olarak", en: "Sean Connery as Bond in Goldfinger" },
      title: { tr: "Sean Connery ve Dr. No", en: "Sean Connery and Dr. No" },
      text: { tr: "İskoç Sean Connery, Fleming'in başta 'kaba bir dublör' diye küçümsediği bir oyuncuydu; Fleming sonraki romanlarında Bond'a İskoç bir geçmiş bile yazdı! Dr. No mütevazı bir bütçeyle çekildi ama büyük başarı kazandı. Ursula Andress'in beyaz bikiniyle denizden çıktığı sahne sinema tarihinin ikonları arasına girdi.", en: "Scotland's Sean Connery was an actor Fleming first dismissed as an 'overgrown stuntman'; later Fleming even gave Bond Scottish roots in his novels! Dr. No was made on a modest budget but became a hit. Ursula Andress emerging from the sea in a white bikini became a film icon." },
      facts: { tr: ["Connery: 6 resmî Bond filmi + 1 resmî olmayan (1983)", "Bütçe: ~1 milyon $"], en: ["Connery: 6 official Bond films + 1 unofficial (1983)", "Budget: ~$1 million"] } },
    { section: "connery", year: "1964", cat: "gadget", img: "Goldfinger - Aston Martin DB5 & Sean Connery.jpg", caption: { tr: "Aston Martin DB5 ve Sean Connery", en: "Aston Martin DB5 and Sean Connery" },
      title: { tr: "Goldfinger ve Aston Martin DB5", en: "Goldfinger and the Aston Martin DB5" },
      text: { tr: "Fırlatma koltuğu, döner plakalar, makineli tüfekler ve yağ püskürtücü… Goldfinger'daki gümüş Aston Martin DB5, sinema tarihinin en ünlü arabası oldu. Film aynı zamanda 'Bond formülünü' kesinleştirdi: kötü adam (Goldfinger), sessiz ama ölümcül uşak (melon şapkalı Oddjob) ve Shirley Bassey'nin şarkısı.", en: "Ejector seat, revolving plates, machine guns and an oil slick… Goldfinger's silver Aston Martin DB5 became cinema's most famous car. The film also cemented the 'Bond formula': the villain (Goldfinger), the silent deadly henchman (bowler-hatted Oddjob) and Shirley Bassey's song." },
      facts: { tr: ["Filmde kullanılan bir DB5, 2019'da ~6,4 milyon $'a satıldı", "Oddjob'un şapkası ölümcül bir silahtı"], en: ["A film DB5 sold for ~$6.4 million in 2019", "Oddjob's hat was a deadly weapon"] } },
    { section: "connery", year: "1962 →", cat: "film", img: "Shirley Bassey (1971).jpg", caption: { tr: "Shirley Bassey (1971)", en: "Shirley Bassey (1971)" },
      title: { tr: "Bond Şarkıları: Bir Türün Doğuşu", en: "Bond Songs: Birth of a Genre" },
      text: { tr: "Monty Norman'ın 'James Bond Theme'i ve John Barry'nin düzenlemeleri, serinin müzikal kimliğini oluşturdu. Shirley Bassey üç Bond şarkısı (Goldfinger, Diamonds Are Forever, Moonraker) söyleyen tek şarkıcı oldu. Paul McCartney'nin 'Live and Let Die'ı, Duran Duran'ın 'A View to a Kill'i ve Adele'in 'Skyfall'u bu geleneğin zirveleri.", en: "Monty Norman's 'James Bond Theme' and John Barry's arrangements created the series' musical identity. Shirley Bassey is the only singer to perform three Bond themes (Goldfinger, Diamonds Are Forever, Moonraker). Paul McCartney's 'Live and Let Die', Duran Duran's 'A View to a Kill' and Adele's 'Skyfall' are peaks of the tradition." } },
    { section: "connery", year: "1967 – 1971", cat: "film", img: "Schilthorn with Bernese Alps, 2012 August.jpg", caption: { tr: "Bond'un dağ başı mekânı: Schilthorn", en: "Bond's mountaintop location: Schilthorn" },
      title: { tr: "Yanardağdaki Üs ve Blofeld", en: "The Volcano Lair and Blofeld" },
      text: { tr: "'Sadece İki Kez Yaşarsın'da (You Only Live Twice) Blofeld'in sönmüş bir yanardağın içine kurulu üssü, o güne kadar yapılmış en büyük film setlerinden biriydi. Kucağında beyaz kedisiyle Blofeld, sonradan Austin Powers'daki 'Dr. Evil' parodisine ilham verdi.", en: "In You Only Live Twice, Blofeld's base inside an extinct volcano was one of the largest film sets built at the time. Blofeld with his white cat later inspired the 'Dr. Evil' parody in Austin Powers." } },

    { section: "moore", year: "1969", cat: "actor", img: "GeorgeLazenby11.14.08ByLuigiNovi.jpg", caption: { tr: "George Lazenby", en: "George Lazenby" },
      title: { tr: "George Lazenby: Tek Filmlik Bond", en: "George Lazenby: The One-Film Bond" },
      text: { tr: "Avustralyalı model George Lazenby, neredeyse hiç oyunculuk deneyimi olmadan 'On Her Majesty's Secret Service' ile Bond oldu. Seçmelerde bir dövüş sahnesinde dublörün burnunu kırdığı için rolü aldığı anlatılır. Bir film sonra ayrılmayı seçti. Film bugün serinin en iyilerinden biri olarak yeniden değerlendiriliyor; Bond'un evlendiği tek film!", en: "Australian model George Lazenby became Bond in On Her Majesty's Secret Service with almost no acting experience. He reportedly won the role after breaking a stuntman's nose in an audition fight. He chose to leave after one film. It's now reappraised as one of the best — and the only one where Bond marries!" },
      facts: { tr: ["Çekim yeri: İsviçre'deki Piz Gloria (Schilthorn)", "Döner restoranı hâlâ Bond temalı"], en: ["Location: Piz Gloria (Schilthorn), Switzerland", "Its revolving restaurant is still Bond-themed"] } },
    { section: "moore", year: "1973 – 1985", cat: "actor", img: "Sir Roger Moore crop.jpg", caption: { tr: "Roger Moore", en: "Roger Moore" },
      title: { tr: "Roger Moore: Kaş, Espri ve 7 Film", en: "Roger Moore: The Eyebrow, the Wit and 7 Films" },
      text: { tr: "Roger Moore, Bond'a mizah ve zarafet kattı; meşhur tek kaş kaldırma hareketi onun imzası oldu. En çok resmî Bond filminde (7) oynayan aktör. Son filmi 'A View to a Kill'de 57 yaşındaydı ve rol arkadaşı Tanya Roberts'ın annesinden büyük olduğunu fark edince bırakma vaktinin geldiğini söyledi.", en: "Roger Moore brought humour and elegance to Bond; his single raised eyebrow became his signature. He starred in the most official Bond films (7). He was 57 in his last, A View to a Kill, and said it was time to quit when he realised he was older than co-star Tanya Roberts' mother." } },
    { section: "moore", year: "1977", cat: "gadget", img: "Lotus Esprit Submarine Car.jpg", caption: { tr: "Denizaltı Lotus Esprit", en: "The submarine Lotus Esprit" },
      title: { tr: "Denizaltıya Dönüşen Lotus", en: "The Lotus That Becomes a Submarine" },
      text: { tr: "'Beni Seven Casus'ta (The Spy Who Loved Me) beyaz Lotus Esprit, plaj kenarında denize dalıp denizaltıya dönüşür. Çekimlerde kullanılan 'Wet Nellie' adlı denizaltı modeli 2013'te bir müzayedede yaklaşık 1 milyon dolara satıldı; alıcı Elon Musk'tı ve onu gerçekten çalışan bir araca çevirmek istediğini söyledi.", en: "In The Spy Who Loved Me, the white Lotus Esprit drives into the sea and becomes a submarine. The submarine prop 'Wet Nellie' sold at auction in 2013 for about $1 million — to Elon Musk, who said he wanted to make it actually work." } },
    { section: "moore", year: "1974 / 1977", cat: "film", img: "Ko-Ta-Pu Thailand James-Bond-Rock-02.jpg", caption: { tr: "Ko Tapu: 'James Bond Adası'", en: "Ko Tapu: 'James Bond Island'" },
      title: { tr: "Altın Tabancalı Adam ve Jaws", en: "The Man with the Golden Gun and Jaws" },
      text: { tr: "Christopher Lee'nin oynadığı kiralık katil Scaramanga'nın Tayland'daki adası Ko Tapu, bugün turistlerin 'James Bond Adası' diye ziyaret ettiği bir yer. Filmdeki 360 derece dönen 'tirbuşon' araba atlayışı, bilgisayar hesaplarıyla planlanan ve tek seferde çekilen gerçek bir dublördü. Çelik dişli dev Jaws (Richard Kiel) ise o kadar sevildi ki iki filmde göründü.", en: "Scaramanga's island in Thailand, Ko Tapu (villain played by Christopher Lee), is now visited as 'James Bond Island'. The film's 360-degree 'corkscrew' car jump was a real stunt planned with computer calculations and done in one take. Steel-toothed giant Jaws (Richard Kiel) was so loved he appeared in two films." } },
    { section: "moore", year: "1987 – 1989", cat: "actor", img: "Timothy Dalton 1987.jpg", caption: { tr: "Timothy Dalton (1987)", en: "Timothy Dalton (1987)" },
      title: { tr: "Timothy Dalton: Kitaptaki Bond", en: "Timothy Dalton: The Book's Bond" },
      text: { tr: "Dalton, Fleming'in romanlarındaki karanlık, ciddi ve yorgun Bond'u canlandırmak istedi. 'The Living Daylights' ve 'Licence to Kill' döneminde fazla sert bulundu; ama bugün Daniel Craig dönemine öncülük ettiği kabul ediliyor. Hukuki sorunlar yüzünden seri altı yıl ara verince Dalton ayrıldı.", en: "Dalton wanted to play the dark, serious, weary Bond of Fleming's novels. In The Living Daylights and Licence to Kill he was seen as too harsh, but today he's credited as a forerunner of the Craig era. A six-year break caused by legal issues led to his exit." } },

    { section: "modern", year: "1995 – 2002", cat: "actor", img: "Pierce Brosnan 2017.jpg", caption: { tr: "Pierce Brosnan", en: "Pierce Brosnan" },
      title: { tr: "Pierce Brosnan ve GoldenEye", en: "Pierce Brosnan and GoldenEye" },
      text: { tr: "Brosnan aslında 1986'da Bond olacaktı ama 'Remington Steele' dizisinin sözleşmesi yüzünden rolü kaçırdı. Dokuz yıl sonra GoldenEye ile geldi; Judi Dench ilk kadın M olarak Bond'u 'cinsiyetçi, kadın düşmanı bir dinozor' diye azarladı. Filmin Nintendo 64 oyunu ise bir neslin ilk FPS deneyimi oldu.", en: "Brosnan was set to be Bond in 1986 but lost it due to his 'Remington Steele' contract. He arrived nine years later with GoldenEye; Judi Dench, the first female M, scolded Bond as 'a sexist, misogynist dinosaur'. The film's Nintendo 64 game became a generation's first FPS." } },
    { section: "modern", year: "2006", cat: "actor", img: "Daniel Craig 2017 (cropped).jpg", caption: { tr: "Daniel Craig", en: "Daniel Craig" },
      title: { tr: "Daniel Craig: 'Sarışın Bond' Tartışması", en: "Daniel Craig: The 'Blond Bond' Row" },
      text: { tr: "Craig seçildiğinde bazı hayranlar 'sarışın Bond olmaz!' diye kampanyalar başlattı. 'Casino Royale' ise eleştirmenlerin en çok övdüğü Bond filmlerinden biri oldu. Craig, beş filmde (2006–2021) Bond'u ilk kez duygusal bir hikâye yayıyla anlattı ve en uzun süre görev yapan Bond oldu.", en: "When Craig was cast, some fans campaigned that 'Bond can't be blond!'. Casino Royale became one of the most critically praised Bond films. Over five films (2006–2021) Craig gave Bond an emotional story arc for the first time and became the longest-serving Bond." } },
    { section: "modern", year: "2012", cat: "film", img: "Daniel Craig avp Skyfall 2012.jpg", caption: { tr: "Daniel Craig, Skyfall galasında", en: "Daniel Craig at the Skyfall premiere" },
      title: { tr: "Skyfall: 1 Milyar Dolar", en: "Skyfall: $1 Billion" },
      text: { tr: "Serinin 50. yılında gelen Skyfall, dünya gişesinde 1 milyar doları aşan ilk Bond filmi oldu. Adele'in şarkısı, Oscar kazanan ilk Bond şarkısı oldu (Sam Smith ve Billie Eilish de sonraki filmlerle Oscar aldı). Londra Olimpiyatları açılışında Craig'in Kraliçe II. Elizabeth'e eşlik ettiği kısa film de aynı yıl yayınlandı.", en: "Arriving in the series' 50th year, Skyfall became the first Bond film to pass $1 billion worldwide. Adele's song became the first Bond song to win an Oscar (Sam Smith and Billie Eilish later won too). The same year, Craig escorted Queen Elizabeth II in a short film for the London Olympics opening." } },
    { section: "modern", year: "2021 →", cat: "film", img: "Logo 007 Spectre.jpg", caption: { tr: "007", en: "007" },
      title: { tr: "No Time to Die ve Sonraki Bond", en: "No Time to Die and the Next Bond" },
      text: { tr: "Craig'in veda filmi No Time to Die, pandemi yüzünden defalarca ertelendi ve sonunda 2021'de vizyona girdi. 2025'te serinin yaratıcı kontrolü Amazon MGM'ye geçti ve yeni filmin yönetmeni olarak Denis Villeneuve açıklandı. Yeni Bond'un kim olacağı ise hâlâ dünyanın en çok merak edilen oyuncu seçimlerinden biri.", en: "Craig's farewell, No Time to Die, was delayed repeatedly by the pandemic and finally released in 2021. In 2025 creative control passed to Amazon MGM and Denis Villeneuve was announced as director of the next film. Who the next Bond will be remains one of the world's most anticipated castings." } },

    { section: "turkiye", year: "1963", cat: "film", img: "Grand Bazaar, Istanbul 6.jpg", caption: { tr: "Kapalıçarşı, İstanbul", en: "Grand Bazaar, Istanbul" },
      title: { tr: "From Russia with Love: Bond İstanbul'da", en: "From Russia with Love: Bond in Istanbul" },
      text: { tr: "Serinin ikinci filmi büyük ölçüde İstanbul'da geçer: Ayasofya, Yerebatan Sarnıcı, Kapalıçarşı ve Haydarpaşa'dan kalkan Doğu Ekspresi. Bond'un Türk dostu Kerim Bey'i Meksikalı oyuncu Pedro Armendáriz canlandırdı. Bond'un Yerebatan'da sandalla gezdiği sahne bugün hâlâ turistlere anlatılır.", en: "The second film is largely set in Istanbul: Hagia Sophia, the Basilica Cistern, the Grand Bazaar and the Orient Express departing Haydarpaşa. Bond's Turkish ally Kerim Bey was played by Mexican actor Pedro Armendáriz. The scene of Bond rowing through the cistern is still told to tourists." } },
    { section: "turkiye", year: "1999", cat: "film", img: "Maiden tower, Istanbul (P1100207).jpg", caption: { tr: "Kız Kulesi", en: "The Maiden's Tower" },
      title: { tr: "The World Is Not Enough: Kız Kulesi", en: "The World Is Not Enough: The Maiden's Tower" },
      text: { tr: "Brosnan'ın üçüncü filminde kötü adam Renard'ın saklandığı yer, Boğaz'ın ortasındaki Kız Kulesi'dir. Filmde Bakü ve Kazakistan olarak gösterilen bazı sahneler de Türkiye ve İspanya'da çekildi.", en: "In Brosnan's third film, villain Renard's hideout is the Maiden's Tower in the middle of the Bosphorus. Some scenes presented as Baku and Kazakhstan were shot in Turkey and Spain." } },
    { section: "turkiye", year: "2012", cat: "film", img: "Varda Railway Viaduct, Karaisalı 01.JPG", caption: { tr: "Varda Viyadüğü, Adana", en: "Varda Viaduct, Adana" },
      title: { tr: "Skyfall: Kapalıçarşı Çatılarında Motosiklet", en: "Skyfall: Motorbikes on the Grand Bazaar Roof" },
      text: { tr: "Skyfall'un açılış sahnesinde Bond, İstanbul sokaklarında ve Kapalıçarşı'nın çatılarında motosikletle kovalamaca yapar; ardından Adana yakınlarındaki Varda Viyadüğü'nde tren üstünde dövüşür. Fethiye'de de çekimler yapıldı. Varda Köprüsü bu sahneden sonra turistik bir yere dönüştü.", en: "Skyfall's opening has Bond chasing on a motorbike through Istanbul streets and across the Grand Bazaar's roofs, then fighting atop a train on the Varda Viaduct near Adana. Filming also took place in Fethiye. The Varda Viaduct became a tourist spot after the scene." } }
  ],
  stats: {
    title: { tr: "Bond'un 'En'leri ve Rakamları", en: "Bond's 'Mosts' and Numbers" },
    tiles: [
      { value: "25", label: { tr: "Resmî Eon filmi (1962–2021)", en: "Official Eon films (1962–2021)" } },
      { value: "7", label: { tr: "En çok film: Roger Moore", en: "Most films: Roger Moore" } },
      { value: "15 yıl", label: { tr: "En uzun görev: Daniel Craig", en: "Longest tenure: Daniel Craig" } },
      { value: "57", label: { tr: "En yaşlı Bond: Moore (A View to a Kill)", en: "Oldest Bond: Moore (A View to a Kill)" } },
      { value: "1,1 Mrd $", label: { tr: "En çok hasılat: Skyfall", en: "Highest grossing: Skyfall" } },
      { value: "3", label: { tr: "En çok Bond şarkısı: Shirley Bassey", en: "Most Bond songs: Shirley Bassey" } }
    ],
    charts: [
      { title: { tr: "Bond oyuncularının resmî film sayısı", en: "Official films per Bond actor" },
        rows: [["Roger Moore", 7], ["Sean Connery", 6], ["Daniel Craig", 5], ["Pierce Brosnan", 4], ["Timothy Dalton", 2], ["George Lazenby", 1]] },
      { title: { tr: "En çok hasılat yapan Bond filmleri (milyon $, yaklaşık)", en: "Highest-grossing Bond films (million $, approx.)" },
        rows: [["Skyfall (2012)", 1109], ["Spectre (2015)", 881], ["No Time to Die (2021)", 774], ["Casino Royale (2006)", 616], ["Quantum of Solace (2008)", 590], ["Die Another Day (2002)", 432]],
        note: { tr: "Enflasyona göre düzeltilince Thunderball (1965) ve Goldfinger zirveye yakındır.", en: "Adjusted for inflation, Thunderball (1965) and Goldfinger rank near the top." } },
      { title: { tr: "Bond şarkılarına verilen Oscar'lar", en: "Oscars won by Bond songs" },
        rows: [["Skyfall – Adele (2012)", 1], ["Writing's on the Wall – Sam Smith (2015)", 1], ["No Time to Die – Billie Eilish (2021)", 1]] }
    ]
  },
  facts: {
    title: { tr: "Eğlenceli Bond Bilgileri", en: "Fun Bond Facts" },
    items: [
      { img: "Sean Connery as James Bond in Goldfinger.jpg", caption: { tr: "Sean Connery, Goldfinger'da Bond olarak", en: "Sean Connery as Bond in Goldfinger" },
        title: { tr: "Connery peruk takıyordu", en: "Connery wore a toupee" },
        text: { tr: "Sean Connery, Bond filmlerinin hepsinde saç parçası (peruk) kullandı; ilk filmde 32 yaşındaydı ve saçları çoktan dökülmeye başlamıştı.", en: "Sean Connery wore a hairpiece in all his Bond films; he was 32 in the first and already losing his hair." } },
      { img: "Goldfinger - Aston Martin DB5 & Sean Connery.jpg", caption: { tr: "Aston Martin DB5 ve Sean Connery", en: "Aston Martin DB5 and Sean Connery" },
        title: { tr: "Q'nun 17 filmi", en: "Q's 17 films" },
        text: { tr: "Aletleri hazırlayan Q'yu oynayan Desmond Llewelyn, 17 filmle seride en çok görünen oyuncu oldu. Gerçek hayatta teknolojiden pek anlamadığını söylerdi!", en: "Desmond Llewelyn, who played gadget master Q, appeared in 17 films — the most of any actor in the series. In real life he said he was hopeless with technology!" } },
      { img: "Sir Roger Moore crop.jpg", caption: { tr: "Roger Moore", en: "Roger Moore" },
        title: { tr: "Bond'dan UNICEF elçiliğine", en: "From Bond to UNICEF ambassador" },
        text: { tr: "Roger Moore, Bond'u bıraktıktan sonra uzun yıllar UNICEF iyi niyet elçisi olarak çalıştı; bu çalışmalarından dolayı 'Sir' unvanı aldı. Kendi Bond'u hakkında da hep esprili konuşurdu: 'Benim iki ifadem var: sağ kaş yukarı, sol kaş yukarı.'", en: "After Bond, Roger Moore spent many years as a UNICEF Goodwill Ambassador and was knighted for that work. He always joked about his Bond: 'I have two expressions: right eyebrow raised, left eyebrow raised.'" } },
      { img: "Daniel Craig 2017 (cropped).jpg", caption: { tr: "Daniel Craig", en: "Daniel Craig" },
        title: { tr: "Spectre'deki rekor patlama", en: "Spectre's record explosion" },
        text: { tr: "Spectre'deki Fas çölü patlaması, Guinness Rekorlar Kitabı'na 'sinema tarihinin en büyük film dublör patlaması' olarak girdi.", en: "Spectre's Moroccan desert explosion entered Guinness World Records as the largest film stunt explosion ever." } },
      { img: "007 logo (cropped).jpg", caption: { tr: "007 logosu", en: "The 007 logo" },
        title: { tr: "Silah namlusu jeneriği", en: "The gun-barrel sequence" },
        text: { tr: "Maurice Binder'ın tasarladığı açılış sahnesi neredeyse her filmde yeniden çekildi; ilk üç filmde namlunun önündeki adam Connery değil, dublör Bob Simmons'tı!", en: "Maurice Binder's opening was reshot for almost every film; in the first three, the man in the barrel wasn't Connery but stuntman Bob Simmons!" } },
      { img: "Shirley Bassey (1971).jpg", caption: { tr: "Shirley Bassey (1971)", en: "Shirley Bassey (1971)" },
        title: { tr: "Goldfinger'ın son notası", en: "Goldfinger's final note" },
        text: { tr: "Shirley Bassey, 'Goldfinger'ın son uzun notasını tutarken o kadar zorlandı ki kayıt sırasında sütyenini çıkardığını anlattı — nefes alabilmek için!", en: "Shirley Bassey said she held Goldfinger's final note so long she took off her bra during the session — to be able to breathe!" } }
    ]
  }
});
