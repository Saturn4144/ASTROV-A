const signs=["Koç","Boğa","İkizler","Yengeç","Aslan","Başak","Terazi","Akrep","Yay","Oğlak","Kova","Balık"];
const today=new Date().toISOString().slice(0,10);
document.getElementById("today").textContent=new Intl.DateTimeFormat("tr-TR",{day:"numeric",month:"long",year:"numeric"}).format(new Date());
document.getElementById("year").textContent=new Date().getFullYear();
function getPosts(){return JSON.parse(localStorage.getItem("astrovia_posts")||"[]")}
function render(){const posts=getPosts().filter(x=>x.date===today);const box=document.getElementById("horoscopes");box.innerHTML=signs.map(s=>{const p=posts.find(x=>x.sign===s);return `<article class="card"><div class="muted">${s}</div><h3>${p?"Günün yorumu":"Yakında"}</h3><p>${p?p.general:"Bugünün yorumu hazırlanıyor."}</p></article>`}).join("");document.getElementById("articles").innerHTML=getPosts().slice(-6).reverse().map(p=>`<article class="article"><div class="muted">${p.date} · ${p.sign}</div><h3>${p.sign} — ${p.general.slice(0,90)}${p.general.length>90?"…":""}</h3></article>`).join("")}
render();
document.getElementById("menuBtn")?.addEventListener("click",()=>{const n=document.getElementById("nav");n.style.display=n.style.display==="flex"?"none":"flex"});
