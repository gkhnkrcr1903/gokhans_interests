// Post: The Butterfly Effect (2004). Images are Wikimedia Commons file names.
window.POSTS = window.POSTS || [];
window.POSTS.push({
  slug: "kelebek-etkisi",
  cover: "Monarch Butterfly Danaus plexippus on Echinacea purpurea 2800px.jpg",
  readMin: 12,
  kicker: { tr: "// KONU 11 · KAOS TEORİSİ", en: "// TOPIC 11 · CHAOS THEORY" },
  title: { tr: "Kelebek Etkisi: Bir Kanat Çırpışı, Dört Ayrı Son", en: "The Butterfly Effect: One Flap of a Wing, Four Different Endings" },
  summary: {
    tr: "Eleştirmenlerin yerden yere vurduğu ama izleyicinin bayıldığı film; Lorenz'in hava durumu hatası, Ashton Kutcher'ın ciddi rol sınavı ve yönetmen versiyonundaki o sarsıcı son.",
    en: "Panned by critics yet loved by audiences: Lorenz's weather-model accident, Ashton Kutcher's bid for a serious role and that shocking director's-cut ending."
  },
  intro: {
    tr: "2004'te vizyona giren Kelebek Etkisi (The Butterfly Effect), çocukluk günlüklerini okuyarak geçmişe dönebildiğini keşfeden Evan Treborn'un hikâyesini anlatır. Her küçük değişiklik bugünü baştan sona değiştirir — ve hiçbir şey planladığı gibi gitmez. Film, adını gerçek bir bilimsel kavramdan, kaos teorisinden alır. Bu yazıda hem filmin perde arkasını hem de 'kelebek etkisi'nin bilimsel hikâyesini anlatıyoruz. Dikkat: Son bölümde spoiler var!",
    en: "Released in 2004, The Butterfly Effect follows Evan Treborn, who discovers he can travel back in time by reading his childhood journals. Every small change rewrites the present — and nothing goes as planned. The film takes its name from a real scientific idea from chaos theory. Here's both the film's behind-the-scenes and the science of the 'butterfly effect'. Warning: spoilers in the last section!"
  },
  filters: [
    { key: "science", label: { tr: "Bilim", en: "Science" } },
    { key: "film", label: { tr: "Film", en: "Film" } },
    { key: "fun", label: { tr: "Perde Arkası", en: "Behind the Scenes" } }
  ],
  sections: [
    { id: "bilim", era: "1952 – 1972", title: { tr: "Bir Kelebek Brezilya'da Kanat Çırparsa…", en: "If a Butterfly Flaps Its Wings in Brazil…" },
      intro: { tr: "Kelebek etkisi, küçük bir başlangıç farkının zamanla devasa sonuçlara yol açabileceğini söyler. Bu fikrin hikâyesi bir bilgisayar çıktısıyla başladı.", en: "The butterfly effect says a tiny difference at the start can grow into huge consequences. The idea's story began with a computer printout." } },
    { id: "film", era: "2002 – 2004", title: { tr: "Filmin Yapımı", en: "Making the Film" },
      intro: { tr: "Senaryo yıllarca stüdyo çekmecelerinde bekledi. Sonunda düşük bir bütçeyle çekildi ve sürpriz bir gişe başarısına dönüştü.", en: "The script sat in studio drawers for years. It was finally made on a modest budget and became a surprise hit." } },
    { id: "son", era: "SPOILER!", title: { tr: "Dört Son ve Devam Filmleri", en: "Four Endings and the Sequels" },
      intro: { tr: "Filmin en çok konuşulan yanı sonu oldu. Çünkü aslında birden fazla sonu var.", en: "The most talked-about part of the film is its ending — because it actually has more than one." } }
  ],
  entries: [
    { section: "bilim", year: "1952", cat: "science", img: "Close Wing mud-puddling position of Delias berinda (Moore, 1872) – Dark Jezebel.jpg", caption: { tr: "Kelebek kanadı (yakın çekim)", en: "Butterfly wing (macro)" },
      title: { tr: "Bradbury'nin 'Gök Gürültüsü'", en: "Bradbury's 'A Sound of Thunder'" },
      text: { tr: "Fikir bilimden önce edebiyatta doğdu: Ray Bradbury'nin 1952 tarihli öyküsünde dinozor avına giden bir zaman yolcusu yanlışlıkla bir kelebeği ezer; döndüğünde dünya değişmiştir.", en: "The idea appeared in fiction before science: in Ray Bradbury's 1952 story, a time traveller on a dinosaur hunt accidentally crushes a butterfly — and returns to a changed world." } },
    { section: "bilim", year: "1961", cat: "science", img: "EdwardLorenz.jpg", caption: { tr: "Edward Lorenz", en: "Edward Lorenz" },
      title: { tr: "Edward Lorenz'in Yuvarlama Hatası", en: "Edward Lorenz's Rounding Error" },
      text: { tr: "MIT'de meteorolog Edward Lorenz, hava durumu simülasyonunu tekrarlarken 0,506127 yerine 0,506 girdi. Kahve almaya gidip döndüğünde, bu küçücük farkın tahmini tamamen değiştirdiğini gördü. Bu, kaos teorisinin doğuşuydu.", en: "At MIT, meteorologist Edward Lorenz re-ran a weather simulation entering 0.506 instead of 0.506127. Coming back from a coffee break, he saw this tiny difference had completely changed the forecast. Chaos theory was born." } },
    { section: "bilim", year: "1972", cat: "science", img: "A Trajectory Through Phase Space in a Lorenz Attractor.gif", caption: { tr: "Lorenz çekeri: kelebek kanadı şeklinde", en: "The Lorenz attractor: shaped like butterfly wings" },
      title: { tr: "'Brezilya'da Bir Kelebek…'", en: "'Does the Flap of a Butterfly's Wings in Brazil…'" },
      text: { tr: "Lorenz 1972'de bir konferansta şu başlıklı konuşmayı yaptı: 'Öngörülebilirlik: Brezilya'da bir kelebeğin kanat çırpması Teksas'ta bir kasırgaya yol açar mı?' İlginç tesadüf: Lorenz'in denklemlerinin çizdiği şekil de bir kelebeğin kanatlarına benziyordu.", en: "In 1972 Lorenz gave a talk titled 'Predictability: Does the Flap of a Butterfly's Wings in Brazil Set Off a Tornado in Texas?' Fun coincidence: the shape his equations draw also looks like butterfly wings." },
      facts: { tr: ["Hava durumu ~2 haftadan uzun güvenle tahmin edilemez", "Bu sınırın nedeni kaos"], en: ["Weather can't be reliably forecast beyond ~2 weeks", "Chaos is the reason why"] } },
    { section: "film", year: "2002", cat: "fun", img: "Ashton Kutcher - 2023 - P060603-652701 (cropped).jpg", caption: { tr: "Ashton Kutcher (Evan)", en: "Ashton Kutcher (Evan)" },
      title: { tr: "Ashton Kutcher'ın 'Ciddi' Sınavı", en: "Ashton Kutcher's 'Serious' Test" },
      text: { tr: "That '70s Show'un sevimli Kelso'su ve 'Punk'd' şakacısı olarak bilinen Ashton Kutcher, dramatik bir rolle ciddiye alınmak istiyordu. Hem başrolü oynadı hem de yapımcılardan biri oldu.", en: "Known as That '70s Show's lovable Kelso and the prankster of 'Punk'd', Ashton Kutcher wanted to be taken seriously in a dramatic role. He starred and was also an executive producer." } },
    { section: "film", year: "2003", cat: "film", img: "Royal Bank Chambers Vancouver 02.JPG", caption: { tr: "Vancouver, Kanada", en: "Vancouver, Canada" },
      title: { tr: "Vancouver'da Çekim", en: "Shot in Vancouver" },
      text: { tr: "Hikâye Amerika'da geçse de film Kanada'nın Vancouver bölgesinde çekildi. Yönetmenler Eric Bress ve J. Mackye Gruber, senaryoyu da birlikte yazdılar; daha önce 'Final Destination 2'nin senaristleriydiler.", en: "Though set in America, it was filmed around Vancouver, Canada. Directors Eric Bress and J. Mackye Gruber also co-wrote the script; they had previously written 'Final Destination 2'." },
      facts: { tr: ["Bütçe: ~13 milyon $", "Gişe: ~96 milyon $"], en: ["Budget: ~$13 million", "Box office: ~$96 million"] } },
    { section: "film", year: "2004", cat: "film", img: "Excerpt from diary and notebook of Cicely Williams Wellcome L0072308.jpg", caption: { tr: "Bir günlük sayfası", en: "A diary page" },
      title: { tr: "Günlükler ve Hafıza Boşlukları", en: "Journals and Blackouts" },
      text: { tr: "Evan, çocukken yaşadığı hafıza boşluklarını doktorunun önerisiyle günlüklere yazar. Yıllar sonra günlükleri okuduğunda o anlara geri döner. Her dönüş, hem onun hem de sevdiklerinin hayatını başka bir yöne savurur.", en: "As a child, Evan writes his blackouts in journals on his doctor's advice. Years later, reading them sends him back to those moments. Each return throws his life — and his loved ones' — in another direction." } },
    { section: "film", year: "2004", cat: "fun", img: "Amy Smart (2009).jpg", caption: { tr: "Amy Smart (Kayleigh)", en: "Amy Smart (Kayleigh)" },
      title: { tr: "Eleştirmenler Sevmedi, İzleyici Bayıldı", en: "Critics Hated It, Audiences Loved It" },
      text: { tr: "Eleştirmenler filmi abartılı ve karanlık buldu; Rotten Tomatoes'ta eleştirmen puanı düşük kaldı. Ama izleyiciler filmi sevdi, kulaktan kulağa yayıldı ve DVD'de kült oldu. Türkiye'de de 2000'lerin en çok konuşulan 'beyin yakan' filmlerinden biriydi. Amy Smart (Kayleigh), farklı zaman çizgilerinde neredeyse dört farklı karakteri oynadı.", en: "Critics found it overwrought and dark; its critics' score stayed low. But audiences loved it, word of mouth spread and it became a DVD cult hit — in Turkey too it was one of the most discussed 'mind-bending' films of the 2000s. Amy Smart (Kayleigh) effectively played four different characters across timelines." } },
    { section: "son", year: "Sinema sonu", cat: "film", img: "Royal Bank Chambers Vancouver 03.JPG", caption: { tr: "Bir şehir caddesi", en: "A city street" },
      title: { tr: "Sinema Sonu: Sokakta Karşılaşma", en: "Theatrical Ending: Passing on the Street" },
      text: { tr: "Sinemalarda gösterilen sonda Evan, Kayleigh'nin hayatından tamamen çıkmayı seçer. Yıllar sonra New York'ta bir sokakta karşılaşırlar, bir an duraksarlar ve yollarına devam ederler. Arka planda Oasis'in 'Stop Crying Your Heart Out' şarkısı çalar.", en: "In the theatrical ending, Evan chooses to leave Kayleigh's life entirely. Years later they pass on a New York street, pause for a moment and walk on. Oasis' 'Stop Crying Your Heart Out' plays." } },
    { section: "son", year: "Yönetmen versiyonu", cat: "film", img: "Monarch Butterfly Danaus plexippus on Milkweed Hybrid 2800px.jpg", caption: { tr: "Kelebek", en: "A butterfly" },
      title: { tr: "Yönetmen Versiyonu: En Karanlık Son", en: "Director's Cut: The Darkest Ending" },
      text: { tr: "Yönetmen versiyonunda Evan, doğumundan önceki ana döner ve herkesi kurtarmak için kendi varlığını engeller. Test gösterimlerinde izleyiciler bunu çok ağır bulduğu için sinema sonu değiştirildi. Film için toplam dört farklı son çekildi; bazıları DVD'de yayımlandı.", en: "In the director's cut, Evan goes back to before his birth and prevents his own existence to save everyone. Test audiences found it too bleak, so the theatrical ending was changed. Four different endings were shot in total; some were released on DVD." } },
    { section: "son", year: "2006 / 2009", cat: "fun", img: "Panasonic VHS video camera (ca.1986) used by Bill and Helen Wholf of Thompson, Ohio, to record the First Winning Entry of America's Funniest Home Videos, ABC (2013-03-16 by Tyfferz Y).jpg", caption: { tr: "Eski bir ev video kamerası", en: "An old home video camera" },
      title: { tr: "Kelebek Etkisi 2 ve 3", en: "The Butterfly Effect 2 and 3" },
      text: { tr: "Doğrudan DVD için iki devam filmi çekildi, ancak orijinal oyuncular yer almadı ve ilk filmin büyüsünü yakalayamadılar. Fikir ise dizilerden oyunlara kadar sayısız yapımda 'kelebek etkisi' adıyla yaşamaya devam etti.", en: "Two direct-to-DVD sequels followed without the original cast and never caught the first film's magic. The idea itself lives on as 'the butterfly effect' in countless shows and games." } }
  ],
  stats: {
    title: { tr: "Rakamlarla Kelebek Etkisi", en: "The Butterfly Effect in Numbers" },
    tiles: [
      { value: "0,506127", label: { tr: "Lorenz'in yuvarladığı sayı", en: "The number Lorenz rounded" } },
      { value: "1972", label: { tr: "'Kelebek etkisi' konuşması", en: "The 'butterfly effect' talk" } },
      { value: "~13 M $", label: { tr: "Filmin bütçesi", en: "Film budget" } },
      { value: "~96 M $", label: { tr: "Dünya gişesi", en: "Worldwide box office" } },
      { value: "4", label: { tr: "Çekilen farklı son", en: "Endings filmed" } },
      { value: "~7×", label: { tr: "Bütçesini kaç kez çıkardı", en: "Times it earned its budget" } }
    ],
    charts: [
      { title: { tr: "Bütçe vs. gişe (milyon $)", en: "Budget vs. box office (million $)" },
        rows: [["Bütçe", 13], ["ABD gişesi", 58], ["Dünya gişesi", 96]] },
      { title: { tr: "Başlangıçtaki farkın büyümesi (temsilî)", en: "Growth of an initial difference (illustrative)" },
        rows: [["1. gün", 1, "0,000001"], ["5. gün", 4, "0,001"], ["10. gün", 8, "0,1"], ["15. gün", 12, "≈ tamamen farklı"]],
        note: { tr: "Kaotik sistemlerde küçük farklar katlanarak büyür; değerler sadece fikir vermek içindir.", en: "In chaotic systems tiny differences grow exponentially; values are just for illustration." } }
    ]
  },
  facts: {
    title: { tr: "İlginç Bilgiler", en: "Fun Facts" },
    items: [
      { img: "A Trajectory Through Phase Space in a Lorenz Attractor.gif", caption: { tr: "Lorenz çekeri", en: "Lorenz attractor" },
        title: { tr: "Kelebek önce martıydı", en: "The butterfly was first a seagull" },
        text: { tr: "Lorenz ilk makalelerinde 'bir martının kanat çırpışı' örneğini kullandı. Kelebek, 1972'deki konuşmanın başlığını hazırlayan bir meslektaşının önerisiydi.", en: "In early papers Lorenz used 'the flap of a seagull's wings'. The butterfly came from a colleague who titled his 1972 talk." } },
      { img: "Monarch Butterfly Danaus plexippus on Echinacea purpurea 2800px.jpg", caption: { tr: "Monark kelebeği", en: "Monarch butterfly" },
        title: { tr: "Evan'ın soyadı bir şifre", en: "Evan's surname is a code" },
        text: { tr: "Hayranlar 'Treborn' soyadını 'tree born' (ağaçtan doğan) ya da 'reborn' (yeniden doğan) göndermesi olarak yorumlar — her dönüşte yeniden doğan bir karakter için yerinde bir isim.", en: "Fans read 'Treborn' as 'tree born' or 'reborn' — fitting for a character reborn with every jump." } },
      { img: "Ashton Kutcher - 2023 - P060603-652701 (cropped).jpg", caption: { tr: "Ashton Kutcher (Evan)", en: "Ashton Kutcher (Evan)" },
        title: { tr: "Oasis şarkısı sadece bir versiyonda", en: "The Oasis song is in one version" },
        text: { tr: "'Stop Crying Your Heart Out' sinema sonunda çalar; yönetmen versiyonunu izleyenler o hüzünlü sahneyi Oasis olmadan, bambaşka bir sonla yaşar.", en: "'Stop Crying Your Heart Out' plays in the theatrical ending; director's-cut viewers get a completely different ending without Oasis." } },
      { img: "Excerpt from diary and notebook of Cicely Williams Wellcome L0072308.jpg", caption: { tr: "Bir günlük sayfası", en: "A diary page" },
        title: { tr: "Hafıza ve beyin", en: "Memory and the brain" },
        text: { tr: "Filmde Evan'ın beyninde her dönüşte 'onlarca yıllık' yeni anılar oluşur ve doktorlar bunu beyin taramasında görür. Bilimsel olarak mümkün değil ama filmin en çok tartışılan detaylarından biri.", en: "In the film, each jump packs decades of new memories into Evan's brain, visible on a scan. Not scientifically possible — but one of the most debated details." } },
      { img: "Close Wing mud-puddling position of Delias berinda (Moore, 1872) – Dark Jezebel.jpg", caption: { tr: "Kanat", en: "Wing" },
        title: { tr: "Renk çoğu zaman boya değil", en: "The colour often isn't pigment" },
        text: { tr: "Birçok kelebeğin parlak renkleri pigmentten değil, kanattaki minik pulların ışığı kırmasından gelir. Küçücük yapılar, büyük etkiler — tam da filmin teması gibi!", en: "Many butterflies' bright colours come not from pigment but from tiny scales bending light. Tiny structures, big effects — just like the film's theme!" } },
      { img: "Royal Bank Chambers Vancouver 02.JPG", caption: { tr: "Vancouver", en: "Vancouver" },
        title: { tr: "Kanada = Hollywood'un Kuzeyi", en: "Canada = Hollywood North" },
        text: { tr: "Vancouver, vergi avantajları sayesinde o kadar çok film ağırlar ki 'Kuzeyin Hollywood'u' diye anılır. Kelebek Etkisi de bunlardan biriydi.", en: "Thanks to tax incentives, Vancouver hosts so many productions it's called 'Hollywood North'. The Butterfly Effect was one of them." } }
    ]
  }
});
