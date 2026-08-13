const form=document.getElementById("postForm"), saved=document.getElementById("saved"), date=document.getElementById("date");
date.value=new Date().toISOString().slice(0,10);
function posts(){return JSON.parse(localStorage.getItem("astrovia_posts")||"[]")}
function draw(){const p=posts().slice().reverse();saved.innerHTML=p.length?p.map((x,i)=>`<div><b>${x.date} · ${x.sign}</b><br>${x.general}<br><button class="btn ghost" onclick="del(${p.length-1-i})">Sil</button></div>`).join(""):"Henüz içerik yok."}
form.addEventListener("submit",e=>{e.preventDefault();const p=posts();p.push({date:date.value,sign:sign.value,general:general.value,love:love.value,career:career.value,money:money.value,tip:tip.value});localStorage.setItem("astrovia_posts",JSON.stringify(p));form.reset();date.value=new Date().toISOString().slice(0,10);draw();alert("Yayınlandı.");});
window.del=i=>{const p=posts();p.splice(i,1);localStorage.setItem("astrovia_posts",JSON.stringify(p));draw()};draw();
