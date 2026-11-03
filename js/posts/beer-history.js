// Post: World history of beer. Images are Wikimedia Commons file names.
window.POSTS = window.POSTS || [];
window.POSTS.push({
  slug: "dunya-bira-tarihi",
  cover: "Oktoberfest 2015 - Impression 5.JPG",
  readMin: 20,
  kicker: { tr: "// KONU 19 · ŞEREFE!", en: "// TOPIC 19 · CHEERS!" },
  title: { tr: "Dünya Bira Tarihi: Sümer Pipetlerinden Craft Bira Barlarına", en: "The World History of Beer: From Sumerian Straws to Craft Beer Bars" },
  summary: {
    tr: "Göbeklitepe'deki dev teknelerden Mısır'ın maaş birasına, manastır keşişlerinden Bavyera'nın Saflık Yasası'na, Pasteur'ün mayasından Oktoberfest'e ve Türkiye'nin Bomonti'sine.",
    en: "From giant troughs at Göbeklitepe to Egypt's wage beer, from monastery monks to Bavaria's Purity Law, from Pasteur's yeast to Oktoberfest and Turkey's Bomonti."
  },
  intro: {
    tr: "Bira, insanlığın en eski ve en sosyal içeceklerinden biri. Bazı arkeologlar, avcı-toplayıcıların yerleşik hayata geçmesinde ekmek kadar biranın da rolü olabileceğini düşünüyor! Bira aynı zamanda bir besin, bir maaş, bir ilaç, bir vergi kaynağı ve elbette bir dostluk ritüeli oldu. Bu yazıda 'sıvı ekmek'in 10.000 yıllık yolculuğunu; tarihin en ilginç bira hikâyelerini, bilimsel devrimleri, ünlü bira stillerini ve ülkemizdeki serüvenini anlatıyoruz. (18+ · Lütfen sorumlu tüketin.)",
    en: "Beer is one of humanity's oldest and most social drinks. Some archaeologists think beer may have played as big a role as bread in hunter-gatherers settling down! It has also been food, wages, medicine, a tax source and, of course, a ritual of friendship. Here's the 10,000-year journey of 'liquid bread': history's most curious beer stories, scientific revolutions, famous styles and its adventure in Turkey. (18+ · Please drink responsibly.)"
  },
  filters: [
    { key: "history", label: { tr: "Tarih", en: "History" } },
    { key: "science", label: { tr: "Bilim & Üretim", en: "Science & Brewing" } },
    { key: "style", label: { tr: "Stiller & Kültür", en: "Styles & Culture" } }
  ],
  sections: [
    { id: "antik", era: "MÖ 9500 – MS 500", title: { tr: "Antik Çağ: Sıvı Ekmek", en: "Antiquity: Liquid Bread" },
      intro: { tr: "İlk biralar bulanık, tatlımsı ve yoğundu; bugünkü köpüklü, berrak biradan çok bir tahıl lapasına benziyordu.", en: "The first beers were cloudy, sweetish and thick — more like a grain porridge than today's clear, foamy beer." } },
    { id: "ortacag", era: "500 – 1700", title: { tr: "Ortaçağ: Keşişler, Şerbetçiotu ve Yasalar", en: "The Middle Ages: Monks, Hops and Laws" },
      intro: { tr: "Avrupa'da bira, sudan daha güvenli bir içecek olarak her yaşta insanın sofrasındaydı. Manastırlar biracılığı bir sanata çevirdi.", en: "In Europe beer, safer than water, was on everyone's table at every age. Monasteries turned brewing into an art." } },
    { id: "bilim", era: "1700 – 1900", title: { tr: "Sanayi ve Bilim Devrimi", en: "The Industrial and Scientific Revolution" },
      intro: { tr: "Buhar makineleri, termometre, soğutma ve mikroskop biracılığı değiştirdi. Dünyanın en çok içilen bira stili bu dönemde doğdu.", en: "Steam engines, thermometers, refrigeration and the microscope transformed brewing. The world's most popular style was born in this era." } },
    { id: "modern", era: "1900 – 2026", title: { tr: "Yasaklar, Devler ve Craft Bira Devrimi", en: "Prohibition, Giants and the Craft Beer Revolution" },
      intro: { tr: "Yasak dönemleri, dev şirket birleşmeleri ve ardından küçük üreticilerin başlattığı 'craft bira' akımı.", en: "Prohibitions, giant mergers and then the 'craft beer' movement started by small brewers." } },
    { id: "turkiye", era: "ANADOLU", title: { tr: "Anadolu'da ve Türkiye'de Bira", en: "Beer in Anatolia and Turkey" },
      intro: { tr: "Anadolu biranın en eski yurtlarından biri. Modern dönemde ise İstanbul'daki Bomonti fabrikası ve sonrasında gelen markalarla yeni bir sayfa açıldı.", en: "Anatolia is one of beer's oldest homelands. In modern times, Istanbul's Bomonti brewery and later brands opened a new chapter." } }
  ],
  entries: [
    { section: "antik", year: "~MÖ 9500", cat: "history", img: "Barley field 1.jpg", caption: { tr: "Arpa tarlası", en: "Barley field" },
      title: { tr: "Göbeklitepe'de Bir Ziyafet mi?", en: "A Feast at Göbeklitepe?" },
      text: { tr: "Şanlıurfa'daki Göbeklitepe'de bulunan büyük taş teknelerde, tahıl fermantasyonuna işaret edebilecek kalıntılar üzerine araştırmalar yapıldı. Bazı arkeologlar burada toplanan insanların ziyafetlerde bir tür 'ilkel bira' içmiş olabileceğini öne sürüyor. Henüz kesin değil ama düşünmesi bile heyecan verici: İnsanlar belki de biraz da bira için bir araya geldi!", en: "Large stone troughs at Göbeklitepe in Şanlıurfa have been studied for residues that may point to grain fermentation. Some archaeologists suggest people gathering there may have drunk a kind of 'primitive beer' at feasts. Not proven yet — but exciting to think people may have come together partly for beer!" } },
    { section: "antik", year: "~MÖ 3400", cat: "history", img: "Sumerian beer.jpg", caption: { tr: "Sümer'de bira içme sahnesi", en: "Sumerian beer-drinking scene" },
      title: { tr: "Sümer: Pipet ve Tanrıça Ninkasi", en: "Sumer: Straws and the Goddess Ninkasi" },
      text: { tr: "Mezopotamya'da bira o kadar önemliydi ki 'bira' için kullanılan çivi yazısı işaretleri en eski yazılı belgelerde bile geçer. Sümerler biranın tortusunu içmemek için uzun pipetler kullanırdı. Bira tanrıçası Ninkasi'ye yazılan ilahi, aynı zamanda bilinen en eski bira tarifidir. İşçilere maaş olarak bira verildiğini gösteren tabletler de bulundu.", en: "Beer was so important in Mesopotamia that cuneiform signs for 'beer' appear in some of the oldest written records. Sumerians used long straws to avoid the sludge. The hymn to the beer goddess Ninkasi is also the oldest known beer recipe. Tablets show workers being paid in beer." },
      facts: { tr: ["Hammurabi Kanunları'nda bira satıcılarıyla ilgili maddeler var", "Sümerlerde 20'den fazla bira çeşidi"], en: ["Hammurabi's Code includes rules on beer sellers", "Over 20 kinds of beer in Sumer"] } },
    { section: "antik", year: "~MÖ 2500", cat: "history", img: "Middle Kingdom tomb models, baking and brewing beer; National Museum of Egyptian Civilization, Cairo (1) (52087088486).jpg", caption: { tr: "Mısır'da bira yapımını gösteren mezar maketi", en: "Egyptian tomb model of beer brewing" },
      title: { tr: "Mısır: Piramitleri Bira mı Yaptı?", en: "Egypt: Did Beer Build the Pyramids?" },
      text: { tr: "Giza'daki piramit işçilerinin günlük tayınında birkaç litre bira bulunuyordu. Bira hem kalori hem de sıvı kaynağıydı. Mezarlara konan bira yapım maketleri, ölülerin öbür dünyada da birasız kalmaması için hazırlanırdı. Hatta bazı ilaç tariflerinde bira bir taşıyıcı sıvı olarak geçer.", en: "Pyramid workers at Giza received several litres of beer as daily rations — a source of both calories and fluid. Brewing models were placed in tombs so the dead wouldn't go without beer in the afterlife. Beer even appears as a base in some medical recipes." } },
    { section: "antik", year: "MÖ 1. yy – MS 1. yy", cat: "style", img: "A beer stein (c.1880s), by Achille Glisenti.jpg", caption: { tr: "Bira kupası (1880'ler)", en: "Beer stein (1880s)" },
      title: { tr: "Romalılar Şarap, Germenler Bira", en: "Romans for Wine, Germans for Beer" },
      text: { tr: "Romalı yazarlar, kuzeydeki Kelt ve Germen kabilelerinin içtiği birayı 'barbar içkisi' diye küçümsedi; Roma'nın tercihi şaraptı. Ama Roma'nın çöküşünden sonra Avrupa'nın kuzeyinde bira, günlük hayatın merkezine yerleşti ve bugünkü 'bira kuşağı' (Almanya, Belçika, Britanya, Çekya) oluştu.", en: "Roman writers looked down on the beer of northern Celtic and Germanic tribes as a 'barbarian drink'; Rome preferred wine. But after Rome fell, beer settled at the heart of daily life in northern Europe, forming today's 'beer belt' (Germany, Belgium, Britain, Czechia)." } },

    { section: "ortacag", year: "800'ler →", cat: "history", img: "Westmalle Trappist beer.jpg", caption: { tr: "Westmalle Trapist birası", en: "Westmalle Trappist beer" },
      title: { tr: "Manastır Biraları", en: "Monastery Beers" },
      text: { tr: "Ortaçağ Avrupa'sında keşişler hem kendileri hem de hacılar için bira yaptı. Oruç dönemlerinde 'sıvı ekmek' sayılan yoğun biralar onları ayakta tuttu. Bugün 'Trapist' etiketi, yalnızca belirli kurallara göre bir Trapist manastırında, keşişlerin gözetiminde üretilen biralara verilebiliyor.", en: "In medieval Europe monks brewed for themselves and pilgrims. Rich beers counted as 'liquid bread' sustained them through fasts. Today the 'Trappist' label may only go to beer brewed at a Trappist abbey under monks' supervision, following strict rules." },
      facts: { tr: ["Dünyada sadece birkaç düzine 'Trapist' bira var", "Belçika en ünlü Trapist ülkesi"], en: ["Only a few dozen 'Trappist' beers exist worldwide", "Belgium is the most famous Trappist country"] } },
    { section: "ortacag", year: "1150'ler", cat: "science", img: "Cônes d'Inflorescences femelles de houblon (Humulus lupulus).jpg", caption: { tr: "Şerbetçiotu kozalakları", en: "Hop cones" },
      title: { tr: "Şerbetçiotu: Biranın Ruhu", en: "Hops: The Soul of Beer" },
      text: { tr: "Alman rahibe ve bilge Hildegard von Bingen, 12. yüzyılda şerbetçiotunun (hops) biranın bozulmasını geciktirdiğini yazdı. Daha önce bira, 'gruit' denen bitki karışımlarıyla tatlandırılıyordu. Şerbetçiotu biraya acılık, aroma ve uzun ömür kazandırdı; zamanla bütün Avrupa'da standart oldu.", en: "In the 12th century, German abbess and polymath Hildegard von Bingen wrote that hops slowed beer's spoiling. Before that, beer was flavoured with herb mixes called 'gruit'. Hops gave bitterness, aroma and long life, and became standard across Europe." } },
    { section: "ortacag", year: "1516", cat: "science", img: "Das Augsburger \"Reinheitsgebot\".jpg", caption: { tr: "Saflık Yasası belgesi", en: "A Purity Law document" },
      title: { tr: "Reinheitsgebot: Bira Saflık Yasası", en: "Reinheitsgebot: The Beer Purity Law" },
      text: { tr: "Bavyera'da 1516'da çıkarılan yasaya göre bira sadece su, arpa ve şerbetçiotundan yapılabilirdi. Maya listede yoktu, çünkü henüz kimse mayanın varlığını bilmiyordu! Yasa hem kaliteyi korumak hem de buğdayı ekmekçilere bırakmak için çıkarıldı. Dünyanın hâlâ yürürlükte olan en eski gıda yasalarından biri olarak anılır.", en: "Bavaria's 1516 law said beer could only be made from water, barley and hops. Yeast wasn't on the list — no one knew it existed yet! The law protected quality and kept wheat for bakers. It's often called one of the oldest food laws still in force." } },
    { section: "ortacag", year: "1600'ler", cat: "history", img: "Plymouth Mayflower II.jpg", caption: { tr: "Mayflower II (kopya gemi)", en: "Mayflower II (replica)" },
      title: { tr: "Mayflower'ın Bira Molası", en: "The Mayflower's Beer Stop" },
      text: { tr: "1620'de Mayflower yolcularının planladıkları yerden daha kuzeyde, Plymouth'ta karaya çıkmalarının sebeplerinden biri olarak gemide biranın azalması anlatılır. Bir yolcunun günlüğünde 'erzakımız, özellikle biramız tükeniyordu' gibi bir not yer alır.", en: "One reason cited for the Mayflower passengers landing at Plymouth in 1620, further north than planned, is that they were running low on beer. A passenger's journal notes their provisions, 'especially our beer', were running out." } },

    { section: "bilim", year: "1759", cat: "style", img: "Dublin - Guinness Storehouse - 20160507154420.jpg", caption: { tr: "Guinness Storehouse, Dublin", en: "Guinness Storehouse, Dublin" },
      title: { tr: "Guinness ve 9.000 Yıllık Kira", en: "Guinness and the 9,000-Year Lease" },
      text: { tr: "Arthur Guinness, Dublin'deki St. James's Gate bira fabrikasını yıllık 45 sterline 9.000 yıllığına kiraladı! Koyu renkli 'stout' biraları dünya çapında ünlendi. Bugün Guinness Storehouse, İrlanda'nın en çok ziyaret edilen turistik yerlerinden biri.", en: "Arthur Guinness leased Dublin's St. James's Gate brewery for 9,000 years at £45 a year! Its dark stouts became world-famous. Today the Guinness Storehouse is one of Ireland's most visited attractions." },
      facts: { tr: ["Guinness Rekorlar Kitabı da aynı şirketin fikri", "Bir barda tartışmayı çözmek için başladı"], en: ["The Guinness Book of Records was the same company's idea", "It started to settle pub arguments"] } },
    { section: "bilim", year: "1842", cat: "style", img: "Plzeň - Sady 5. května - View East over Mlýnská strouha towards Plzeňský Prazdroj (Pilsner Urquell Brewery).jpg", caption: { tr: "Plzeň ve Pilsner Urquell fabrikası", en: "Plzeň and the Pilsner Urquell brewery" },
      title: { tr: "Pilsen: Altın Rengi Bira Doğuyor", en: "Pilsen: Golden Beer Is Born" },
      text: { tr: "Bugünkü Çekya'nın Plzeň şehrinde halk kötü biradan öyle bıkmıştı ki bira fıçılarını meydanda döktü. Kasaba yeni bir bira fabrikası kurdu ve Bavyeralı biracı Josef Groll'u getirdi. Yumuşak yerel su, açık renk malt ve Saaz şerbetçiotuyla yaptığı berrak, altın rengi bira 'Pilsner' oldu. Bugün dünyada içilen biraların büyük çoğunluğu bu stilin torunları.", en: "In Plzeň, in today's Czechia, locals were so fed up with bad beer they poured barrels out in the square. The town built a new brewery and hired Bavarian brewer Josef Groll. His clear, golden beer, using soft local water, pale malt and Saaz hops, became 'Pilsner'. Most beer drunk worldwide today descends from it." } },
    { section: "bilim", year: "1857 – 1876", cat: "science", img: "Louis Pasteur, foto av Paul Nadar, Crisco edit.jpg", caption: { tr: "Louis Pasteur", en: "Louis Pasteur" },
      title: { tr: "Pasteur ve Mayanın Sırrı", en: "Pasteur and the Secret of Yeast" },
      text: { tr: "Louis Pasteur, fermantasyonu yapanın canlı maya hücreleri olduğunu ve biranın bozulmasına mikropların yol açtığını gösterdi. 1876'da 'Bira Üzerine Çalışmalar' adlı bir kitap yazdı. Isıl işlemle mikropları öldürme yöntemi — bugünkü 'pastörizasyon' — süt kadar biranın da hayatını değiştirdi.", en: "Louis Pasteur showed fermentation is done by living yeast cells and that microbes spoil beer. In 1876 he wrote 'Studies on Beer'. His heat-treatment method — today's 'pasteurisation' — changed beer's life as much as milk's." } },
    { section: "bilim", year: "1883", cat: "science", img: "Erindringsmedalje om professor Emil Chr. Hansen, Gl. Carlsberg.jpg", caption: { tr: "Emil Chr. Hansen hatıra madalyası", en: "Emil Chr. Hansen memorial medal" },
      title: { tr: "Saf Maya ve pH'ın Doğuşu", en: "Pure Yeast and the Birth of pH" },
      text: { tr: "Kopenhag'daki Carlsberg Laboratuvarı'nda Emil Christian Hansen, tek bir hücreden saf lager mayası üretmeyi başardı; bira kalitesi artık şansa bağlı değildi. Carlsberg bu mayayı dünyaya ücretsiz paylaştı. Aynı laboratuvarda 1909'da Søren Sørensen, bugün her kimya dersinde öğrendiğimiz 'pH' ölçeğini geliştirdi!", en: "At the Carlsberg Laboratory in Copenhagen, Emil Christian Hansen grew pure lager yeast from a single cell — beer quality no longer depended on luck. Carlsberg shared the yeast with the world for free. In the same lab in 1909, Søren Sørensen developed the 'pH' scale we learn in every chemistry class!" } },
    { section: "bilim", year: "1873", cat: "science", img: "Diagram of a Linde ice machine - DPLA - 482f786998b9b31d58bacd70a257ce96 (page 2).jpg", caption: { tr: "Linde buz makinesi çizimi", en: "Diagram of a Linde ice machine" },
      title: { tr: "Buzdolabı Lager'ı Kurtardı", en: "Refrigeration Saved Lager" },
      text: { tr: "Lager biralar soğukta mayalanır; eskiden ancak kışın ya da mağaralarda yapılabiliyordu. Carl von Linde'nin soğutma makineleri sayesinde bira fabrikaları yıl boyu lager üretebildi. İlk ticari soğutma makinelerinin bir kısmı doğrudan bira fabrikaları için tasarlanmıştı.", en: "Lagers ferment cold and once could only be brewed in winter or in caves. Carl von Linde's refrigeration machines let breweries make lager year-round — some of the first commercial refrigeration machines were built specifically for breweries." } },

    { section: "modern", year: "1810 →", cat: "style", img: "Oktoberfest 2015 - Impression 5.JPG", caption: { tr: "Oktoberfest, Münih", en: "Oktoberfest, Munich" },
      title: { tr: "Oktoberfest", en: "Oktoberfest" },
      text: { tr: "Münih'teki Oktoberfest, 1810'da Bavyera veliaht prensi Ludwig'in düğünü için düzenlenen at yarışlarıyla başladı. Bugün her yıl 6 milyonu aşkın ziyaretçiyi ağırlıyor ve milyonlarca litre bira içiliyor. Festival, adına rağmen genellikle Eylül'de başlar! Çadırlarda sadece Münih şehir sınırları içindeki bira fabrikalarının biraları sunulabilir.", en: "Munich's Oktoberfest began in 1810 with horse races for the wedding of Bavarian Crown Prince Ludwig. Today it draws over 6 million visitors a year who drink millions of litres. Despite its name, it usually starts in September! Only beer from breweries within Munich's city limits may be served in the tents." },
      facts: { tr: ["Bira 1 litrelik 'Maß' bardaklarda servis edilir", "Garsonlar bir seferde 10'dan fazla Maß taşıyabiliyor"], en: ["Beer is served in 1-litre 'Maß' mugs", "Servers can carry 10+ Maß at once"] } },
    { section: "modern", year: "1920 – 1933", cat: "history", img: "Prohibition agents destroying barrels of alcohol (United States, prohibition era).jpg", caption: { tr: "Yasak döneminde imha edilen içkiler", en: "Liquor destroyed during Prohibition" },
      title: { tr: "Yasak ve 'Neredeyse Bira'", en: "Prohibition and 'Near Beer'" },
      text: { tr: "ABD'deki Yasak döneminde bira fabrikaları dondurma, malt şurubu ve alkolü çok düşük 'near beer' üreterek ayakta kalmaya çalıştı. 1933'te önce 'bira ve hafif şarap' serbest bırakıldı; Başkan Roosevelt'in 'Sanırım şimdi bir bira için iyi bir zaman' dediği aktarılır. 7 Nisan bugün ABD'de 'Ulusal Bira Günü'.", en: "During US Prohibition, breweries survived by making ice cream, malt syrup and very-low-alcohol 'near beer'. In 1933 beer and light wine were legalised first; President Roosevelt reportedly said 'I think this would be a good time for a beer.' 7 April is now US National Beer Day." } },
    { section: "modern", year: "1965 – 1980'ler", cat: "style", img: "Growlers craft beer & ales taps (5059914894).jpg", caption: { tr: "Craft bira muslukları", en: "Craft beer taps" },
      title: { tr: "Craft Bira Devrimi", en: "The Craft Beer Revolution" },
      text: { tr: "20. yüzyılın ortasında büyük markalar tek tip, hafif lager'larla piyasayı ele geçirmişti. 1965'te Fritz Maytag'ın San Francisco'daki Anchor'ı satın alması, 1978'de ABD'de evde bira yapımının yasallaşması ve İngiltere'deki CAMRA hareketi, küçük üreticilerin dönüşünü başlattı. Bugün dünyada on binlerce küçük bira fabrikası var: IPA'lardan ekşi biralara kadar sayısız stil.", en: "By the mid-20th century big brands dominated with uniform light lagers. Fritz Maytag buying San Francisco's Anchor in 1965, the legalisation of US home brewing in 1978 and Britain's CAMRA movement kicked off the return of small brewers. Today there are tens of thousands of small breweries worldwide — countless styles from IPAs to sours." } },
    { section: "modern", year: "2000'ler →", cat: "style", img: "Beer in glasses and steins.jpg", caption: { tr: "Farklı bira stilleri", en: "Different beer styles" },
      title: { tr: "IPA: Hindistan'a Giden Bira", en: "IPA: The Beer That Went to India" },
      text: { tr: "India Pale Ale'in hikâyesi, İngiltere'den Hindistan'a aylarca süren gemi yolculuklarına dayanıyor: Bol şerbetçiotu biranın bozulmadan yolculuğu dayanmasına yardım ediyordu. Bu hikâyenin bir kısmı efsaneleştirilmiş olsa da IPA, craft bira devriminin bayrak stili oldu.", en: "India Pale Ale's story goes back to months-long voyages from England to India: lots of hops helped the beer survive the trip. Though partly mythologised, IPA became the flagship style of the craft beer revolution." } },

    { section: "turkiye", year: "MÖ 1800'ler", cat: "history", img: "Gordion Tumulus MM Tumulus P.jpg", caption: { tr: "Gordion'daki Midas Höyüğü", en: "The Midas Mound at Gordion" },
      title: { tr: "Hititler ve Frigler", en: "Hittites and Phrygians" },
      text: { tr: "Hitit metinlerinde bira, tanrılara sunulan içecekler arasında geçer. Gordion'daki 'Midas Höyüğü' kazısında bulunan kaplarda arpa birası, şarap ve bal likörü (mead) karışımı bir içkinin izleri tespit edildi; bilim insanları bu tarifi yeniden canlandırıp 'Midas Touch' adlı bir bira bile üretti!", en: "Hittite texts list beer among offerings to the gods. Vessels from the 'Midas Mound' at Gordion held traces of a drink mixing barley beer, wine and mead; scientists recreated the recipe as a beer called 'Midas Touch'!" } },
    { section: "turkiye", year: "1890 – 1902", cat: "history", img: "Bomonti Beer Factory-Istanbul.jpg", caption: { tr: "Bomonti Bira Fabrikası, İstanbul", en: "Bomonti Brewery, Istanbul" },
      title: { tr: "Bomonti: İstanbul'un İlk Bira Fabrikası", en: "Bomonti: Istanbul's First Brewery" },
      text: { tr: "İsviçreli Bomonti kardeşler, 19. yüzyılın sonunda İstanbul'da bugün kendi adlarıyla anılan semtte bir bira fabrikası kurdu. Fabrika uzun yıllar İstanbul'un bira ihtiyacını karşıladı. Bugün restore edilen yapı bir kültür ve eğlence merkezi olarak kullanılıyor; Bomonti adı hem bir semte hem de bir bira markasına dönüştü.", en: "The Swiss Bomonti brothers founded a brewery in late-19th-century Istanbul in the district now named after them. For years it supplied the city's beer. Today the restored building is a culture and entertainment venue, and 'Bomonti' became both a neighbourhood and a beer brand." } },
    { section: "turkiye", year: "1926 / 1969", cat: "history", img: "Efes Deutschland GmbH - Efes Pilsener.jpg", caption: { tr: "Bir Türk birası", en: "A Turkish beer" },
      title: { tr: "Tekel ve Özel Bira Fabrikaları", en: "Tekel and Private Breweries" },
      text: { tr: "Cumhuriyet döneminde bira üretimi uzun süre devlet tekeli (Tekel) altındaydı. 1969'da ilk özel bira fabrikaları İzmir ve İstanbul'da üretime başladı ve kısa sürede pazarın büyük kısmını aldı. 'Bir bira, bir de çerez' meyhane ve sahil kültürünün klasik ikilisi oldu.", en: "In the Republican era, beer production was long a state monopoly (Tekel). In 1969 the first private breweries started in Izmir and Istanbul and soon took most of the market. 'A beer and some nuts' became a classic duo of tavern and seaside culture." } }
  ],
  stats: {
    title: { tr: "Rakamlarla Bira", en: "Beer by the Numbers" },
    tiles: [
      { value: "~10.000 yıl", label: { tr: "Biranın tahmini yaşı", en: "Beer's estimated age" } },
      { value: "1516", label: { tr: "Reinheitsgebot (Saflık Yasası)", en: "Reinheitsgebot (Purity Law)" } },
      { value: "9.000 yıl", label: { tr: "Guinness'in kira sözleşmesi", en: "Guinness' lease" } },
      { value: "6 M+", label: { tr: "Oktoberfest'in yıllık ziyaretçisi", en: "Oktoberfest's yearly visitors" } },
      { value: "4", label: { tr: "Temel malzeme: su, malt, şerbetçiotu, maya", en: "Core ingredients: water, malt, hops, yeast" } },
      { value: "7 Nisan", label: { tr: "ABD Ulusal Bira Günü", en: "US National Beer Day" } }
    ],
    charts: [
      { title: { tr: "Kişi başı yıllık bira tüketimi (litre, yaklaşık)", en: "Annual beer consumption per person (litres, approx.)" },
        rows: [["Çekya", 130], ["Avusturya", 100], ["Almanya", 90], ["Polonya", 95], ["İrlanda", 80], ["ABD", 70], ["Türkiye", 11]],
        note: { tr: "Yıla ve kaynağa göre değişen yaklaşık değerler; Çekya yıllardır birinci.", en: "Approximate, varying by year and source; Czechia has led for years." } },
      { title: { tr: "Tipik bira stillerinde alkol oranı (%)", en: "Typical ABV by style (%)" },
        rows: [["Light lager", 4], ["Pilsner", 4.8], ["Weissbier (buğday)", 5.3], ["Stout", 4.5], ["IPA", 6.5], ["Belçika Tripel", 8.5], ["İmparatorluk Stout", 10]] }
    ]
  },
  facts: {
    title: { tr: "Eğlenceli Bira Bilgileri", en: "Fun Beer Facts" },
    items: [
      { img: "Dublin - Guinness Storehouse - 20160507154420.jpg", caption: { tr: "Guinness Storehouse, Dublin", en: "Guinness Storehouse, Dublin" },
        title: { tr: "Guinness'in köpüğü aşağı akar", en: "Guinness bubbles sink" },
        text: { tr: "Guinness bardağında kabarcıklar yukarı değil aşağı iner gibi görünür. Sebep, bardağın kenarındaki sıvının aşağı akması ve azot kabarcıklarının çok küçük olması — fizikçiler bunu üzerine makale yazdı!", en: "In a glass of Guinness the bubbles seem to sink, not rise. It's because liquid flows down along the glass walls and nitrogen bubbles are tiny — physicists have written papers on it!" } },
      { img: "Cônes d'Inflorescences femelles de houblon (Humulus lupulus).jpg", caption: { tr: "Şerbetçiotu kozalakları", en: "Hop cones" },
        title: { tr: "Şerbetçiotu kenevirin akrabası", en: "Hops are cannabis' cousin" },
        text: { tr: "Şerbetçiotu, botanik olarak kenevirle aynı aileye (Cannabaceae) aittir. Ama endişe etmeyin; biraya verdiği şey sadece acılık ve aroma!", en: "Botanically, hops belong to the same family as cannabis (Cannabaceae). Don't worry — all they give beer is bitterness and aroma!" } },
      { img: "A beer stein (c.1880s), by Achille Glisenti.jpg", caption: { tr: "Bira kupası (1880'ler)", en: "Beer stein (1880s)" },
        title: { tr: "Kapaklı bira kupaları ve veba", en: "Lidded steins and the plague" },
        text: { tr: "Almanya'da kapaklı bira kupalarının yaygınlaşması, sinekleri ve hastalıkları içkiden uzak tutmaya yönelik kurallarla ilişkilendirilir. Kapağı başparmakla açmak bugün bile bir gelenek.", en: "The spread of lidded steins in Germany is linked to rules meant to keep flies and disease out of drinks. Flipping the lid with your thumb is still a tradition." } },
      { img: "Louis Pasteur, foto av Paul Nadar, Crisco edit.jpg", caption: { tr: "Louis Pasteur", en: "Louis Pasteur" },
        title: { tr: "'Bira köpüğü'nün adı var", en: "Beer foam has a name" },
        text: { tr: "Bira köpüğünün bardağın kenarında bıraktığı dantel gibi izlere 'Brüksel danteli' denir; iyi bir bira bardağının temiz olduğunun işareti sayılır.", en: "The lacy rings foam leaves on the glass are called 'Brussels lace' — a sign of a properly clean glass." } },
      { img: "Oktoberfest 2015 - Impression 5.JPG", caption: { tr: "Oktoberfest, Münih", en: "Oktoberfest, Munich" },
        title: { tr: "Bira korkusunun adı", en: "The fear of beer has a name" },
        text: { tr: "Boş bir bardaktan korkmaya şaka yollu 'cenosillicaphobia' denir. Oktoberfest garsonları bu korkuyu yenmekte çok başarılıdır!", en: "The fear of an empty glass is jokingly called 'cenosillicaphobia'. Oktoberfest servers are very good at curing it!" } },
      { img: "Sumerian beer.jpg", caption: { tr: "Sümer'de bira içme sahnesi", en: "Sumerian beer-drinking scene" },
        title: { tr: "Bira ile ödenen maaş", en: "Salaries paid in beer" },
        text: { tr: "Mezopotamya ve Mısır'da işçilere maaşın bir kısmı bira olarak ödendi. Yani 'maaşım cebimde değil bardağımda' demek 4.000 yıl önce gerçekti!", en: "In Mesopotamia and Egypt, workers got part of their wages in beer. So 'my salary is in my glass, not my pocket' was literally true 4,000 years ago!" } }
    ]
  }
});
