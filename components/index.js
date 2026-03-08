const slides = [ { img: "https://www.hotel-boutique.it/wp-content/uploads/2022/12/29-1.jpg", 
    title: "Angkor Wat", 
    desc: "The world's largest religious monument, rising in perfect symmetry at sunrise. Built in the 12th century, Angkor Wat remains the soul of the Khmer Empire.", 
}, 
{ img: "https://a.veronikasadventure.com/tour/back-to-basics-siem-reap-village-tour-in-cambodia-t14496-1.jpg", 
    title: "Bayon Temple", 
    desc: "Two hundred serene stone faces gaze outward from Bayon's towers — each one a quiet reminder of an ancient civilization at the height of its power.", 
}, 
{ img: "https://cdn.getyourguide.com/img/tour/643016ab6833b.jpeg/146.jpg", 
        title: "Ta Prohm", 
        desc: "Where jungle and ruin become one. Silk-cotton tree roots swallow ancient stone walls in a breathtaking display of nature reclaiming the past.", 
}, 
{ img: "https://4.bp.blogspot.com/-fNAbolwc0Ek/VtpcShUa0iI/AAAAAAAAAFs/BwnqqJpEsSc/s1600/dsc_9022.jpg", 
            title: "Preah Vihear", 
            desc: "Perched 525 metres above the Cambodian plains, this UNESCO site rewards those who make the journey with panoramic views that stretch to the horizon.", 
}, 
{ img: "https://res.cloudinary.com/oasisapp/image/upload/v1/1/cambodia/koh-rong-22095", 
            title: "Banteay Srei", 
            desc: "Carved entirely from rose-pink sandstone, Banteay Srei is considered the jewel of Khmer art — its walls dense with mythological scenes of extraordinary delicacy.", 
}, 
{ img: "https://media.audleytravel.com/-/media/images/home/southeast-asia/cambodia/country-guides/cambodias-best-beach-holidays-and-island-resorts/kep_cambodia_414060_1512x1080.jpg?q=60&w=1600&h=1142", 
    title: "Banteay Srei", 
    desc: "Carved entirely from rose-pink sandstone, Banteay Srei is considered the jewel of Khmer art — its walls dense with mythological scenes of extraordinary delicacy.",
},
{ img: "https://southeastasiabackpacker.com/wp-content/uploads/2023/12/Siem-Reap-City-Cambodia-1536x1024.jpg", 
    title: "Banteay Srei", 
    desc: "Carved entirely from rose-pink sandstone, Banteay Srei is considered the jewel of Khmer art — its walls dense with mythological scenes of extraordinary delicacy.", 
}, 
{ img: "http://www.travelmarbles.com/wp-content/uploads/2016/06/siem-reap.jpg", 
    title: "Banteay Srei", 
    desc: "Carved entirely from rose-pink sandstone, Banteay Srei is considered the jewel of Khmer art — its walls dense with mythological scenes of extraordinary delicacy.", 
}, 
];

const INTERVAL=15000;

let current=0;
let timer;

const hero=document.getElementById("hero");
const dotsEl=document.getElementById("dotsEl");
const progressBar=document.getElementById("progressBar");
const progressLine=document.getElementById("progressLine");
const cur=document.getElementById("cur");
const tot=document.getElementById("tot");

tot.textContent=String(slides.length).padStart(2,"0");

slides.forEach((s,i)=>{

const el=document.createElement("div");

el.className=`slide absolute inset-0 opacity-0 transition-opacity duration-[1200ms]${i===0?' active opacity-100 z-[1]':''}`;

el.innerHTML=`

<img src="${s.img}" class="w-full h-full object-cover">

<div class="absolute inset-0"
style="background:linear-gradient(to right,rgba(0,0,0,0.55),transparent)">
</div>

<div class="absolute inset-0 z-[5] flex flex-col justify-center px-[7%] max-w-[700px]">

<h1 class="slide-title text-white font-bold mb-5"
style="font-size:clamp(3rem,6vw,5.5rem)">
${s.title}
</h1>

<p class="slide-desc text-white/75 max-w-[440px] mb-9">
${s.desc}
</p>

<div class="slide-actions flex gap-5">

<button class="bg-[#2bbfaf] text-white px-8 py-[13px] rounded-full">
Explore Now
</button>

<button class="border border-white/25 text-white/70 px-7 py-[13px] rounded-full">
Learn More
</button>

</div>

</div>
`;

hero.appendChild(el);

});

slides.forEach((_,i)=>{

const d=document.createElement("button");

d.className=`dot h-[6px] rounded-[3px] border-none cursor-pointer p-0 bg-white/35${i===0?' active bg-[#2bbfaf]':''}`;

d.style.width=i===0?"24px":"6px";

d.addEventListener("click",()=>goTo(i));

dotsEl.appendChild(d);

});

function goTo(idx){

const allSlides=document.querySelectorAll(".slide");
const allDots=dotsEl.querySelectorAll(".dot");

const prev=current;

allSlides[prev].classList.remove("active","opacity-100");
allSlides[prev].classList.add("opacity-0");

setTimeout(()=>{
allSlides[prev].classList.remove("z-[1]");
},1200);

allDots[prev].classList.remove("active","bg-[#2bbfaf]");
allDots[prev].classList.add("bg-white/35");
allDots[prev].style.width="6px";

current=idx;

allSlides[current].classList.add("active","opacity-100","z-[1]");
allSlides[current].classList.remove("opacity-0");

allDots[current].classList.add("active","bg-[#2bbfaf]");
allDots[current].classList.remove("bg-white/35");
allDots[current].style.width="24px";

cur.textContent=String(current+1).padStart(2,"0");

clearInterval(timer);

startProgress();

timer=setInterval(()=>goTo((current+1)%slides.length),INTERVAL);

}

function startProgress(){

[progressBar,progressLine].forEach(el=>{
el.style.transition="none";
el.style.width="0%";
});

requestAnimationFrame(()=>{

requestAnimationFrame(()=>{

[progressBar,progressLine].forEach(el=>{
el.style.transition=`width ${INTERVAL}ms linear`;
el.style.width="100%";
});

});

});

}

document.getElementById("prevBtn").onclick=()=>goTo((current-1+slides.length)%slides.length);
document.getElementById("nextBtn").onclick=()=>goTo((current+1)%slides.length);

setTimeout(()=>{
document.querySelector(".slide").classList.add("active");
},50);

startProgress();

timer=setInterval(()=>goTo((current+1)%slides.length),INTERVAL);

