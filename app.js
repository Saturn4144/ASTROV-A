const planets=[
["☿","Merkür","Güneş'e en yakın ve en küçük gezegen.","Merkür, Güneş'e en yakın gezegendir. Yüzeyinde çok sayıda çarpma krateri bulunur ve atmosferi son derece incedir."],
["♀","Venüs","Kalın atmosferi nedeniyle çok sıcak kayalık gezegen.","Venüs'ün yoğun karbondioksit atmosferi güçlü sera etkisi yaratır. Bu nedenle yüzeyi Merkür'den bile daha sıcaktır."],
["🌍","Dünya","Sıvı su ve yaşam bildiğimiz tek gezegen.","Dünya, yüzeyinde uzun süreli sıvı su bulunan ve yaşam bildiğimiz tek gezegendir. Atmosferi azot ve oksijen bakımından zengindir."],
["♂","Mars","Demir oksit nedeniyle kızıl görünen gezegen.","Mars'ın kızıl rengi yüzeyindeki demir oksitten gelir. Geçmişte yüzeyinde sıvı su bulunduğuna dair güçlü jeolojik kanıtlar vardır."],
["♃","Jüpiter","Güneş Sistemi'nin en büyük gezegeni.","Jüpiter bir gaz devidir. Büyük Kırmızı Leke adı verilen dev fırtınası ve çok sayıdaki uydusuyla tanınır."],
["♄","Satürn","Muhteşem halka sistemiyle tanınan gaz devi.","Satürn'ün halkaları çoğunlukla buz parçacıkları, kaya ve tozdan oluşur. Halka sistemi uzaktan tek parça gibi görünse de çok karmaşıktır."],
["♅","Uranüs","Eksen eğikliği yaklaşık 98 derece olan buz devi.","Uranüs neredeyse yan yatmış halde döner. Atmosferindeki metan gezegene mavi-yeşil rengini verir."],
["♆","Neptün","Bilinen en uzak gezegen ve güçlü rüzgârların dünyası.","Neptün Güneş'ten en uzaktaki büyük gezegendir. Atmosferinde çok hızlı rüzgârlar gözlenir."]
];
const zodiac=[
["♈","Koç","21 Mart – 19 Nisan"],["♉","Boğa","20 Nisan – 20 Mayıs"],["♊","İkizler","21 Mayıs – 20 Haziran"],["♋","Yengeç","21 Haziran – 22 Temmuz"],["♌","Aslan","23 Temmuz – 22 Ağustos"],["♍","Başak","23 Ağustos – 22 Eylül"],["♎","Terazi","23 Eylül – 22 Ekim"],["♏","Akrep","23 Ekim – 21 Kasım"],["♐","Yay","22 Kasım – 21 Aralık"],["♑","Oğlak","22 Aralık – 19 Ocak"],["♒","Kova","20 Ocak – 18 Şubat"],["♓","Balık","19 Şubat – 20 Mart"]
];
const posts=[
["🌌","Astronomi","Uzayın Derinlikleri","Galaksiler, yıldızlar ve kara deliklere giriş.","Evren; galaksiler, yıldızlar, gezegen sistemleri, gaz bulutları ve çok daha fazlasından oluşur. Samanyolu da içinde Güneş Sistemi'nin bulunduğu galaksidir. Astronomi, bu yapıların nasıl oluştuğunu ve değiştiğini gözlem ve fizik yoluyla anlamaya çalışır."],
["☄️","Gökyüzü Olayları","Meteor Yağmurları Nasıl Oluşur?","Işık izlerinin arkasındaki bilimi keşfet.","Dünya, Güneş çevresinde dolanırken bazen kuyruklu yıldızların ya da asteroidlerin bıraktığı parçacık akışlarından geçer. Atmosfere giren parçacıklar hızla ısınır ve gökyüzünde meteor dediğimiz ışık izleri oluşur."],
["🪐","Gezegenler","Satürn'ün Halkaları","Buz, kaya ve tozdan oluşan halka sistemini tanı.","Satürn'ün halkaları çok sayıda küçük parçacıktan oluşur. Parçacıkların önemli bir bölümü buz içerir. Halkalar geniş olmalarına karşın görece ince bir yapıya sahiptir."],
["🌙","Ay","Ay'ın Evreleri","Ay'ın neden farklı şekillerde göründüğünü öğren.","Ay Güneş'ten aldığı ışığı yansıtır. Dünya çevresinde dolanırken aydınlık yarısının bize görünen kısmı değişir ve farklı evreler ortaya çıkar."],
["♈","Astroloji","12 Burcu Tanıyalım","Zodyak'taki 12 burca kısa bir bakış.","Astrolojide Zodyak 12 burçla ifade edilir. Burç yorumları kültürel ve eğlence amaçlıdır; bilimsel kişilik ya da gelecek tahmini yöntemi değildir."],
["🔮","Tarot","Tarot Kartlarını Tanıma","Kartların sembolik dünyasına giriş.","Tarot kartları günümüzde çoğunlukla sembolik, eğlence ve kişisel düşünme amacıyla kullanılır. Kartların geleceği kesin olarak bildirdiğine dair bilimsel kanıt bulunmaz."]
];
document.querySelector("#planets").innerHTML=planets.map(x=>`<article class="clickable" onclick="openDetail('${x[1]}','${x[3]}')"><b class="symbol">${x[0]}</b><h3>${x[1]}</h3><p>${x[2]}</p><span>Detayı oku →</span></article>`).join("");
document.querySelector("#zodiac").innerHTML=zodiac.map(x=>`<article class="zcard clickable" onclick="openDetail('${x[1]} Burcu','${x[2]} tarihleri arasında doğanlar astrolojide ${x[1]} burcuyla ilişkilendirilir. Astrovia burç içeriklerini eğlence ve kişisel farkındalık amacıyla sunar.')"><b>${x[0]}</b><h3>${x[1]}</h3><small>${x[2]}</small><span>Burcu keşfet →</span></article>`).join("");
document.querySelector("#articles").innerHTML=posts.map(x=>`<article class="clickable" onclick="openDetail('${x[2]}','${x[4]}')"><b class="symbol">${x[0]}</b><small>${x[1]}</small><h3>${x[2]}</h3><p>${x[3]}</p><span>Yazıyı oku →</span></article>`).join("");
document.querySelector("#menu").onclick=()=>document.querySelector("#nav").classList.toggle("open");
function openDetail(t,txt){document.querySelector("#modalTitle").textContent=t;document.querySelector("#modalText").textContent=txt;document.querySelector("#modal").classList.add("show")}
document.querySelector("#close").onclick=()=>document.querySelector("#modal").classList.remove("show");
document.querySelector("#modal").onclick=e=>{if(e.target.id==="modal")document.querySelector("#modal").classList.remove("show")};
