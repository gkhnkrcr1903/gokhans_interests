// Post: Indiana Jones films and history. Images are Wikimedia Commons file names.
window.POSTS = window.POSTS || [];
window.POSTS.push({
  slug: "indiana-jones",
  cover: "Al Khazneh by night.jpg",
  readMin: 20,
  kicker: { tr: "// KONU 23 · ŞAPKA VE KAMÇI", en: "// TOPIC 23 · HAT AND WHIP" },
  title: { tr: "Indiana Jones: Bir Arkeoloğun Şapkası, Kamçısı ve 42 Yıllık Macerası", en: "Indiana Jones: An Archaeologist's Hat, Whip and 42-Year Adventure" },
  summary: {
    tr: "Bir kumdan kale sohbetinden doğan karakter, köpeğinden adını alan kahraman, yuvarlanan dev kaya, yılan korkusu, babası Sean Connery, Petra'daki Kutsal Kâse ve 80 yaşında son macera.",
    en: "A character born from a sandcastle chat, a hero named after a dog, the giant rolling boulder, a fear of snakes, Sean Connery as his father, the Grail at Petra and a final adventure at 80."
  },
  intro: {
    tr: "Gündüzleri üniversitede arkeoloji dersi veren, geceleri ise Nazilerle yarışarak kayıp hazinelerin peşine düşen bir profesör. Fötr şapkası, deri ceketi, kamçısı ve 'Neden hep yılanlar?' sitemiyle Indiana Jones, sinemanın en sevilen macera kahramanı oldu. George Lucas ile Steven Spielberg'in 30'ların macera dizilerine yazdığı bir aşk mektubu olarak başlayan seri, beş film, bir dizi, oyunlar ve tema parkı gösterileriyle 42 yıl sürdü. Bu yazıda bütün filmleri, perde arkasındaki komik hikâyeleri, çekim yerlerini ve rakamları anlatıyoruz. Şapkanızı takın; ama kayaya dikkat!",
    en: "A professor who teaches archaeology by day and races the Nazis for lost treasures by night. With his fedora, leather jacket, whip and 'Snakes. Why'd it have to be snakes?', Indiana Jones became cinema's best-loved adventure hero. Begun by George Lucas and Steven Spielberg as a love letter to 1930s adventure serials, the series ran 42 years across five films, a TV show, games and theme-park stunt shows. Here are all the films, funny behind-the-scenes stories, locations and numbers. Put on your hat — but watch out for the boulder!"
  },
  filters: [
    { key: "film", label: { tr: "Filmler", en: "Films" } },
    { key: "trivia", label: { tr: "Perde Arkası", en: "Behind the Scenes" } },
    { key: "place", label: { tr: "Çekim Yerleri", en: "Locations" } }
  ],
  sections: [
    { id: "dogus", era: "1977 – 1980", title: { tr: "Kumdan Kalede Doğan Bir Fikir", en: "An Idea Born at a Sandcastle" },
      intro: { tr: "Star Wars'un vizyona girdiği hafta Lucas ve Spielberg Hawaii'de tatildeydi. Kumdan kale yaparken Lucas, yıllardır aklındaki macera kahramanını anlatmaya başladı.", en: "The week Star Wars opened, Lucas and Spielberg were on holiday in Hawaii. Building a sandcastle, Lucas began describing the adventure hero he'd had in mind for years." } },
    { id: "uclu", era: "1981 – 1989", title: { tr: "Klasik Üçleme", en: "The Classic Trilogy" },
      intro: { tr: "Kutsal Ahit Sandığı, Sankara Taşları ve Kutsal Kâse: 80'lerin en büyük macera üçlemesi.", en: "The Ark of the Covenant, the Sankara Stones and the Holy Grail: the 80s' greatest adventure trilogy." } },
    { id: "sonra", era: "1992 – 2023", title: { tr: "Genç Indy, Kristal Kafatası ve Kader Kadranı", en: "Young Indy, the Crystal Skull and the Dial of Destiny" },
      intro: { tr: "Bir televizyon dizisi ve iki geç dönem filmle Indiana Jones'un hikâyesi gençliğinden yaşlılığına kadar anlatıldı.", en: "A TV series and two later films told Indiana Jones' story from youth to old age." } }
  ],
  entries: [
    { section: "dogus", year: "1977", cat: "trivia", img: "George Lucas cropped 2009.jpg", caption: { tr: "George Lucas", en: "George Lucas" },
      title: { tr: "Hawaii'de Bir Kumdan Kale", en: "A Sandcastle in Hawaii" },
      text: { tr: "Spielberg bir James Bond filmi yönetmek istediğini söyleyince Lucas, 'Bond'dan daha iyisi var' diyerek 30'ların sinema dizilerinden ilham alan arkeolog maceracısını anlattı. Spielberg anında kabul etti. İki dost, çocukluklarında cumartesi matinelerinde izledikleri bölüm bölüm macera filmlerini yeniden yaratmak istiyordu.", en: "When Spielberg said he wanted to direct a James Bond film, Lucas said 'I have something better' and pitched his archaeologist-adventurer inspired by 1930s film serials. Spielberg agreed on the spot. The friends wanted to recreate the chapter-by-chapter adventures they'd watched at Saturday matinees as kids." } },
    { section: "dogus", year: "1978", cat: "trivia", img: "Alaskan Malamute R Bartz.jpg", caption: { tr: "Bir Alaska Malamutu", en: "An Alaskan Malamute" },
      title: { tr: "Indiana Bir Köpeğin Adı", en: "Indiana Was a Dog's Name" },
      text: { tr: "Karakterin ilk adı 'Indiana Smith'ti; Spielberg bunu beğenmeyince 'Jones' oldu. 'Indiana' ise George Lucas'ın Alaska Malamutu cinsi köpeğinin adıydı! Bu, Son Macera'da da esprili bir şekilde anlatılır: 'Köpeğin adını mı aldın?'", en: "The character was first 'Indiana Smith'; Spielberg didn't like it, so he became 'Jones'. 'Indiana' was the name of George Lucas' Alaskan Malamute! The Last Crusade jokes about it: 'You were named after the dog?'" } },
    { section: "dogus", year: "1980", cat: "trivia", img: "Harrison Ford at the 2009 Deauville American Film Festival, cropped.jpg", caption: { tr: "Harrison Ford", en: "Harrison Ford" },
      title: { tr: "Tom Selleck mi, Harrison Ford mu?", en: "Tom Selleck or Harrison Ford?" },
      text: { tr: "Rol önce Tom Selleck'e verildi; ama 'Magnum P.I.' dizisinin sözleşmesi yüzünden bırakmak zorunda kaldı. Lucas başta, Han Solo ile özdeşleşmesinden korktuğu için Harrison Ford'u istemiyordu. Spielberg ısrar etti ve Ford rolü çekimlere sadece haftalar kala aldı. Gerisi tarih!", en: "The role first went to Tom Selleck, who had to drop out due to his 'Magnum, P.I.' contract. Lucas initially didn't want Harrison Ford, fearing he'd be typecast as Han Solo. Spielberg insisted, and Ford got it just weeks before filming. The rest is history!" },
      facts: { tr: ["Ford'un çenesindeki yara izi gerçek (bir trafik kazası)", "Film bu izi bir kamçı hikâyesiyle açıklar"], en: ["Ford's chin scar is real (a car accident)", "The films explain it with a whip story"] } },

    { section: "uclu", year: "1981", cat: "film", img: "Hampi, India, Rocky landscape of Hampi, Granite rocks of Matanga Hill.jpg", caption: { tr: "Dev kayalar", en: "Giant boulders" },
      title: { tr: "Kutsal Hazine Avcıları (Raiders of the Lost Ark)", en: "Raiders of the Lost Ark" },
      text: { tr: "Peru'daki tapınaktan kaçarken arkasından yuvarlanan dev kaya, sinema tarihinin en ünlü açılış sahnelerinden biri. Kaya cam elyafından yapıldı ama yine de 140 kilodan ağırdı ve Ford sahneyi defalarca koşarak çekti. Film; Nazilerle Kutsal Ahit Sandığı için yarışı, Marion Ravenwood (Karen Allen) ve Mısırlı dost Sallah ile 5 Oscar kazandı.", en: "The giant boulder rolling after him in the Peruvian temple is one of cinema's most famous openings. It was fibreglass but still over 140 kg, and Ford ran the scene many times. With the race against the Nazis for the Ark, Marion Ravenwood (Karen Allen) and Egyptian friend Sallah, the film won 5 Oscars." },
      facts: { tr: ["Bütçe: ~18 milyon $", "Gişe: ~389 milyon $"], en: ["Budget: ~$18 million", "Box office: ~$389 million"] } },
    { section: "uclu", year: "1981", cat: "trivia", img: "The Grass Snake - Natrix natrix.jpg", caption: { tr: "Yılan", en: "A snake" },
      title: { tr: "'Neden Hep Yılanlar?'", en: "'Snakes. Why'd It Have to Be Snakes?'" },
      text: { tr: "Ruhlar Kuyusu sahnesi için yaklaşık 7.000 yılan getirildi; yeterli gelmeyince araya kesilmiş bahçe hortumları serpiştirildi! Bir kobra ile Ford arasında görünmez bir cam vardı ama cam kobranın tükürüğünü bir kez gösterdi. Indy'nin yılan korkusu karakterin en sevilen özelliklerinden biri oldu.", en: "Around 7,000 snakes were brought in for the Well of Souls; when that wasn't enough, cut-up garden hoses were scattered in! A pane of glass separated Ford from a cobra — and once showed the cobra's spit. Indy's fear of snakes became one of his most beloved traits." } },
    { section: "uclu", year: "1981", cat: "trivia", img: "Scimitar (PSF).png", caption: { tr: "Bir pala çizimi", en: "A scimitar drawing" },
      title: { tr: "Kılıçlı Adam ve Dizanteri", en: "The Swordsman and Dysentery" },
      text: { tr: "Tunus'taki çekimlerde ekibin çoğu mide rahatsızlığı geçiriyordu. Kalabalık bir çarşıda kılıç gösterisi yapan adamla uzun bir dövüş sahnesi planlanmıştı; ama hasta olan Ford, 'Neden onu vurmuyoruz?' diye önerdi. Spielberg kabul etti ve sinemanın en komik anlarından biri doğdu: Indy kılıç ustasına bakar, iç çeker ve tabancasıyla vurur.", en: "During the Tunisia shoot most of the crew had stomach bugs. A long fight with a sword-twirling man in a crowded market was planned, but a sick Ford suggested, 'Why don't I just shoot him?' Spielberg agreed, and one of cinema's funniest moments was born: Indy looks at the swordsman, sighs and shoots him." } },
    { section: "uclu", year: "1984", cat: "film", img: "Kate Capshaw.jpg", caption: { tr: "Kate Capshaw", en: "Kate Capshaw" },
      title: { tr: "Kader Tapınağı (Temple of Doom)", en: "The Temple of Doom" },
      text: { tr: "1935'te geçen bu film aslında bir öncül (prequel). Hindistan'da kayıp Sankara Taşları'nın peşindeki Indy'ye şarkıcı Willie (Kate Capshaw) ve küçük dostu Kısa Tur (Short Round, Ke Huy Quan) eşlik eder. Maymun beyni yemeği, mayın arabası kovalamacası ve kalbi söken rahip sahneleri o kadar ses getirdi ki ABD'de 'PG-13' yaş sınırının icadına katkı yaptı. Spielberg, Kate Capshaw ile bu filmde tanıştı ve yıllar sonra evlendiler.", en: "Set in 1935, it's actually a prequel. Searching for the lost Sankara Stones in India, Indy is joined by singer Willie (Kate Capshaw) and young sidekick Short Round (Ke Huy Quan). The monkey-brain dinner, mine-cart chase and heart-ripping priest caused such a stir that they helped create the US 'PG-13' rating. Spielberg met Kate Capshaw on this film; they married years later." },
      facts: { tr: ["Ke Huy Quan 2023'te Oscar kazandı", "Ford çekimlerde sırtını sakatladı ve ameliyat oldu"], en: ["Ke Huy Quan won an Oscar in 2023", "Ford injured his back during filming and needed surgery"] } },
    { section: "uclu", year: "1989", cat: "film", img: "Sean Connery (1983).jpg", caption: { tr: "Sean Connery", en: "Sean Connery" },
      title: { tr: "Son Macera (The Last Crusade)", en: "The Last Crusade" },
      text: { tr: "Spielberg, 'Indy'nin babası James Bond'dan başkası olamaz' diyerek Sean Connery'yi seçti. Aslında Connery, Ford'dan sadece 12 yaş büyüktü! Baba-oğulun Kutsal Kâse için çıktığı yolculuk, serinin en sıcak ve en komik filmi oldu. River Phoenix'in oynadığı genç Indy'nin açılış sahnesi; şapkanın, kamçının, yara izinin ve yılan korkusunun nereden geldiğini tek sekansta anlatır.", en: "Spielberg cast Sean Connery saying 'Only James Bond could be Indy's father'. Connery was just 12 years older than Ford! The father-and-son quest for the Holy Grail became the warmest, funniest film in the series. River Phoenix's young-Indy opening explains the hat, whip, scar and fear of snakes in a single sequence." },
      facts: { tr: ["Gişe: ~474 milyon $", "'Ona Junior deme!'"], en: ["Box office: ~$474 million", "'Don't call me Junior!'"] } },

    { section: "sonra", year: "1992 – 1993", cat: "film", img: "Bullwhip and IJ hat.jpg", caption: { tr: "Kamçı ve fötr şapka", en: "Bullwhip and fedora" },
      title: { tr: "Genç Indiana Jones'un Maceraları", en: "The Young Indiana Jones Chronicles" },
      text: { tr: "George Lucas'ın yapımcılığındaki dizi, Indy'nin çocukluk ve gençlik yıllarında tarihî figürlerle tanıştığı eğitici maceraları anlattı. Dizi, dijital efekt denemeleri açısından Lucas'ın Star Wars önceki filmlerine bir hazırlık gibiydi.", en: "Produced by George Lucas, the series told educational adventures of young Indy meeting historical figures. It served as a testing ground for digital effects ahead of Lucas' Star Wars prequels." } },
    { section: "sonra", year: "2008", cat: "film", img: "Karen Allen1.JPG", caption: { tr: "Karen Allen (Marion)", en: "Karen Allen (Marion)" },
      title: { tr: "Kristal Kafatası Krallığı", en: "Kingdom of the Crystal Skull" },
      text: { tr: "19 yıl sonra Indy, 1957'de Soğuk Savaş ve uzaylı efsaneleriyle geri döndü; Marion (Karen Allen) da öyle. Indy'nin bir nükleer test sırasında buzdolabına saklanarak hayatta kaldığı sahne o kadar tartışıldı ki İngilizcede 'nuke the fridge' (buzdolabını bombalamak) diye bir deyim doğdu: bir serinin inandırıcılığı aştığı an. Yine de film serinin en çok hasılat yapanı oldu.", en: "Nineteen years later Indy returned in 1957 with the Cold War and alien legends — and so did Marion (Karen Allen). The scene where he survives a nuclear test inside a fridge was so debated it coined the phrase 'nuke the fridge': the moment a series jumps the shark. Still, it became the series' highest grosser." },
      facts: { tr: ["Gişe: ~790 milyon $", "Ford 65 yaşındaydı"], en: ["Box office: ~$790 million", "Ford was 65"] } },
    { section: "sonra", year: "2023", cat: "film", img: "NAMA_Machine_d'Anticythère_1.jpg", caption: { tr: "Gerçek Antikythera Mekanizması", en: "The real Antikythera Mechanism" },
      title: { tr: "Kader Kadranı (Dial of Destiny)", en: "The Dial of Destiny" },
      text: { tr: "Ford'un 80 yaşında son kez şapkayı taktığı filmde Indy, Arşimet'in zaman kadranının peşindedir — bu kurgu, gerçek Antikythera Mekanizması'ndan (bilgisayar tarihi yazımızdaki o antik 'bilgisayar'!) ilham alır. Açılış sahnesinde Ford dijital olarak gençleştirildi. Yönetmen koltuğunda bu kez James Mangold vardı; Phoebe Waller-Bridge, Indy'nin vaftiz kızı Helena'yı oynadı.", en: "In the film where Ford wore the hat for the last time at 80, Indy chases Archimedes' time dial — inspired by the real Antikythera Mechanism (that ancient 'computer' from our computer history post!). Ford was digitally de-aged for the opening. James Mangold directed this time; Phoebe Waller-Bridge played Indy's goddaughter Helena." } },

    { section: "sonra", year: "1981 / 1989", cat: "place", img: "Star Wars in Tunisia - Obi-Wan's house.jpg", caption: { tr: "Tunus'taki Star Wars çekim yeri", en: "A Star Wars location in Tunisia" },
      title: { tr: "Tunus: Hem Tatooine Hem Kahire", en: "Tunisia: Both Tatooine and Cairo" },
      text: { tr: "Kutsal Hazine Avcıları'ndaki Kahire ve çöl sahnelerinin bir kısmı Tunus'ta, Star Wars'taki Tatooine sahnelerinin çekildiği bölgelerde çekildi. Hatta Ruhlar Kuyusu sahnesindeki hiyerogliflerin arasında R2-D2 ve C-3PO'yu gösteren gizli çizimler var!", en: "Some of Raiders' Cairo and desert scenes were shot in Tunisia, in areas used for Star Wars' Tatooine. There are even hidden drawings of R2-D2 and C-3PO among the hieroglyphs in the Well of Souls!" } },
    { section: "sonra", year: "1989", cat: "place", img: "Al Khazneh by night.jpg", caption: { tr: "Petra'daki Hazine Binası (Al-Khazneh)", en: "The Treasury (Al-Khazneh), Petra" },
      title: { tr: "Petra: Kutsal Kâse'nin Tapınağı", en: "Petra: Temple of the Grail" },
      text: { tr: "Son Macera'nın finalinde Kutsal Kâse'nin saklandığı tapınağın girişi, Ürdün'deki Petra antik kentinin ünlü Hazine Binası'dır (Al-Khazneh). Film sayesinde Petra dünya çapında daha da ünlendi; bugün UNESCO Dünya Mirası ve Dünyanın Yeni Yedi Harikası'ndan biri.", en: "In The Last Crusade's finale, the Grail temple's entrance is the famous Treasury (Al-Khazneh) at Petra, Jordan. The film made Petra even more famous; today it's a UNESCO World Heritage site and one of the New Seven Wonders of the World." } },
    { section: "sonra", year: "1989", cat: "place", img: "Venice Gondola Grand Canal.jpg", caption: { tr: "Venedik", en: "Venice" },
      title: { tr: "Venedik'teki Kütüphane", en: "The Library in Venice" },
      text: { tr: "Son Macera'da Indy'nin 'X asla, hiçbir zaman hazinenin yerini göstermez' dediği kütüphane sahnesi Venedik'te geçer; aslında kütüphanenin dış çekimi bir kiliseydi. Ardından tekne kovalamacası Venedik kanallarında çekildi.", en: "In The Last Crusade, the library where Indy says 'X never, ever marks the spot' is in Venice — the exterior was actually a church. The boat chase that follows was filmed on Venice's canals." } }
  ],
  stats: {
    title: { tr: "Rakamlarla Indiana Jones", en: "Indiana Jones in Numbers" },
    tiles: [
      { value: "5", label: { tr: "Sinema filmi (1981–2023)", en: "Feature films (1981–2023)" } },
      { value: "42 yıl", label: { tr: "Ford'un Indy olarak geçirdiği süre", en: "Years Ford played Indy" } },
      { value: "~7.000", label: { tr: "Ruhlar Kuyusu'ndaki yılan", en: "Snakes in the Well of Souls" } },
      { value: "12 yaş", label: { tr: "Connery ile Ford arasındaki fark", en: "Age gap between Connery and Ford" } },
      { value: "80", label: { tr: "Ford'un son filmdeki yaşı", en: "Ford's age in the last film" } },
      { value: "1", label: { tr: "Lucas'ın köpeğinin adı: Indiana", en: "Lucas' dog's name: Indiana" } }
    ],
    charts: [
      { title: { tr: "Dünya gişesi (milyon $, yaklaşık)", en: "Worldwide box office (million $, approx.)" },
        rows: [["Kutsal Hazine Avcıları (1981)", 389], ["Kader Tapınağı (1984)", 333], ["Son Macera (1989)", 474], ["Kristal Kafatası (2008)", 790], ["Kader Kadranı (2023)", 384]] },
      { title: { tr: "Harrison Ford'un her filmdeki yaşı", en: "Harrison Ford's age in each film" },
        rows: [["1981", 38], ["1984", 41], ["1989", 46], ["2008", 65], ["2023", 80]] },
      { title: { tr: "Oscar sayısı (kazanılan)", en: "Oscars won" },
        rows: [["Kutsal Hazine Avcıları", 5], ["Kader Tapınağı", 1], ["Son Macera", 1]],
        note: { tr: "Ödüller teknik dallarda ve özel başarı ödüllerinde.", en: "Wins were in technical and special-achievement categories." } }
    ]
  },
  facts: {
    title: { tr: "Eğlenceli Indy Bilgileri", en: "Fun Indy Facts" },
    items: [
      { img: "Bullwhip and IJ hat.jpg", caption: { tr: "Kamçı ve fötr şapka", en: "Bullwhip and fedora" },
        title: { tr: "Şapka asla düşmez", en: "The hat never falls off" },
        text: { tr: "İlk filmdeki fötr şapka Londra'daki ünlü Herbert Johnson şapkacısında yapıldı ve kostüm ekibi onu 'eskitmek' için üstüne oturup ezdi. Şapkanın en çılgın sahnelerde bile Indy'nin kafasında kalması, serinin en sevilen esprilerinden biri oldu.", en: "The first film's fedora was made by London hatter Herbert Johnson, and the costume team sat on it to 'age' it. The hat staying on Indy's head through the wildest scenes became one of the series' best-loved running gags." } },
      { img: "Harrison Ford at the 2009 Deauville American Film Festival, cropped.jpg", caption: { tr: "Harrison Ford", en: "Harrison Ford" },
        title: { tr: "Kamçı ustası Ford", en: "Ford the whip master" },
        text: { tr: "Ford, kamçı kullanmayı gerçekten öğrendi ve bazı sahnelerde dublör yerine kendisi kullandı. Son Macera'da genç Indy'nin aslan kafesindeki kamçı sahnesi, kamçıyla ilk tanışmasını anlatır ve çenesindeki yarayı da açıklar.", en: "Ford really learned the whip and used it himself in some scenes. In The Last Crusade, young Indy's lion-cage moment shows his first whip — and explains the chin scar." } },
      { img: "Karen Allen1.JPG", caption: { tr: "Karen Allen (Marion)", en: "Karen Allen (Marion)" },
        title: { tr: "Marion'un içki yarışması", en: "Marion's drinking contest" },
        text: { tr: "Marion'un Nepal'deki barında iri bir adamı içki yarışmasında yendiği sahne, onu sinemanın en güçlü kadın kahramanlarından biri olarak tanıttı.", en: "Marion beating a big man in a drinking contest at her Nepal bar introduced her as one of cinema's toughest heroines." } },
      { img: "George Lucas cropped 2009.jpg", caption: { tr: "George Lucas", en: "George Lucas" },
        title: { tr: "Sallah aynı zamanda Gimli!", en: "Sallah is also Gimli!" },
        text: { tr: "Indy'nin Mısırlı dostu Sallah'ı oynayan John Rhys-Davies, yıllar sonra Yüzüklerin Efendisi'nde cüce Gimli'yi oynadı. (Hani 'dokuz' dövmesine dublörünü gönderen oyuncu!)", en: "John Rhys-Davies, who played Indy's Egyptian friend Sallah, later played the dwarf Gimli in The Lord of the Rings. (Yes, the actor who sent his stunt double to get the 'nine' tattoo!)" } },
      { img: "Al Khazneh by night.jpg", caption: { tr: "Petra'daki Hazine Binası (Al-Khazneh)", en: "The Treasury (Al-Khazneh), Petra" },
        title: { tr: "'O bir müze!'", en: "'It belongs in a museum!'" },
        text: { tr: "Indy'nin her hazine için söylediği 'Bu bir müzeye ait!' cümlesi, serinin felsefesini özetler. Bugün arkeologlar ise Indy'nin yöntemlerine pek sıcak bakmaz; kazı yerine kaçış, belgeleme yerine kamçı!", en: "Indy's line for every treasure — 'It belongs in a museum!' — sums up the series' philosophy. Real archaeologists, though, aren't keen on his methods: escaping instead of excavating, a whip instead of documentation!" } },
      { img: "The Grass Snake - Natrix natrix.jpg", caption: { tr: "Yılan", en: "A snake" },
        title: { tr: "Yılanlara dikkat, bir de böceklere", en: "Mind the snakes — and the bugs" },
        text: { tr: "Kader Tapınağı'ndaki böcek tünelinde binlerce gerçek böcek kullanıldı; Kate Capshaw o sahne için sakinleştirici aldığını anlattı. Her filmde Indy'yi bir hayvan korkusu bekler: yılanlar, böcekler, fareler…", en: "Thousands of real bugs were used in Temple of Doom's insect tunnel; Kate Capshaw said she took a sedative for the scene. Every film has an animal fear waiting for Indy: snakes, bugs, rats…" } }
    ]
  }
});
