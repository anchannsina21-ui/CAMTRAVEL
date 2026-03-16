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

// PLACE DATA
        const PLACES = [
            {
                id: 'royal-palace',
                title: 'Royal Palace',
                description: 'The Royal Palace serves as the official residence of the King of Cambodia, showcasing exquisite Khmer architectural design.',
                image: 'https://i.pinimg.com/1200x/85/0d/cd/850dcd5681e331f129f30080831511af.jpg',
                views: '2.2K',
                location: 'Phnom Penh, Cambodia',
                rating: 4.5,
                openingHours: '07:30 – 11:00 AM & 2:00 – 5:00 PM',
                ticketPrice: '$6.50 Adult / $3.00 Child',
                fullDescription: 'The Royal Palace is a complex of buildings which serves as the royal residence of the King of Cambodia. Its full name in the Khmer language is Preah Barom Reachea Veang Chaktomuk Serei Mongkol. The Kings of Cambodia have occupied it since it was built in the 1860s, with the palace constructed after King Norodom relocated the royal capital from Oudong to Phnom Penh in the mid-19th century. The architecture is a stunning display of traditional Khmer design combined with French influences.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://www.google.com/maps/search/Royal+Palace+Phnom+Penh+Cambodia',
                gallery: [
                    'https://cdn.thecrazytourist.com/wp-content/uploads/2018/09/ccimage-shutterstock_142484578.jpg',
                    'https://i.pinimg.com/736x/77/d7/78/77d7789e9e8b93b09f20d8af9fe3433c.jpg',
                    'https://topmekongcruises.com/uploads/royal_palace_21.jpg'
                ]
            },
            {
                id: 'bayon-temple',
                title: 'Bayon Temple',
                description: 'Bayon Temple is a 13th-century Khmer temple complex in Angkor Thom, known for its unique stone faces.',
                image: 'https://i.pinimg.com/1200x/18/45/c5/1845c5e580149e6a26965206a701d7d6.jpg',
                views: '2.2K',
                location: 'Siem Reap, Cambodia',
                rating: 4.7,
                openingHours: '07:30 AM – 5:30 PM',
                ticketPrice: '$37.00 (1-Day Pass)',
                fullDescription: 'The Bayon is a richly decorated Khmer temple at Angkor in Cambodia. Built in the late 12th or early 13th century as the state temple of King Jayavarman VII. The Bayon\'s most distinctive feature is the multitude of serene and smiling stone faces on the many towers which jut out from the upper terrace and cluster around its central peak.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://www.google.com/maps/search/Bayon+Temple+Siem+Reap+Cambodia',
                gallery: [
                    'https://cdn.thecollector.com/wp-content/uploads/2024/05/bayon-temples-of-angkor.jpg?width=1200&quality=55',
                    'https://cdn.britannica.com/55/122155-050-56389FCC/Bayon-temple-Angkor-Thom-Cambodia.jpg',
                    'https://i.pinimg.com/1200x/b7/97/8d/b7978de5e963a18eaf311215b8907538.jpg'
                ]
            },
            {
                id: 'angkor-wat',
                title: 'Angkor Wat Temple',
                description: 'Angkor Wat is the world\'s largest religious monument and the crown jewel of Khmer architecture.',
                image: 'https://www.fodors.com/wp-content/uploads/2018/10/02.1_Angkor101_Pass_dreamstime_xxl_60637934.jpg',
                views: '2.2K',
                location: 'Siem Reap, Cambodia',
                rating: 4.8,
                openingHours: '07:30 AM – 5:30 PM',
                ticketPrice: '$37.00 (1-Day Pass)',
                fullDescription: 'Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world, on a site measuring 162.6 hectares. Originally constructed as a Hindu temple dedicated to the god Vishnu for the Khmer Empire, it was gradually transformed into a Buddhist temple towards the end of the 12th century. It was built by the Khmer King Suryavarman II in the early 12th century in Yaśodharapura as his state temple and eventual mausoleum.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://www.google.com/maps/search/Angkor+Wat+Siem+Reap+Cambodia',
                gallery: [
                    'https://i0.wp.com/helloangkor.com/wp-content/uploads/2020/12/IMG_20200622_144812-2-1.jpg?w=1200&ssl=1',
                    'https://i.pinimg.com/736x/bc/a5/20/bca5208bb8b55842d5717fb7f1693b2a.jpg',
                    'https://i.pinimg.com/1200x/ae/a1/21/aea121bd8ca5c0b0ac5b7475d8c052a7.jpg'
                ]
            },
            {
                id: 'preah-khan',
                title: 'Preah Khan Temple',
                description: 'Preah Khan Temple is a vast 12th-century monastic complex built by King Jayavarman VII.',
                image: 'https://a.cdn-hotels.com/gdcs/production186/d922/538d59d8-598c-4f93-be62-c1426024d73c.jpg',
                views: '2.2K',
                location: 'Siem Reap, Cambodia',
                rating: 4.6,
                openingHours: '07:30 AM – 5:30 PM',
                ticketPrice: '$37.00 (1-Day Pass)',
                fullDescription: 'Preah Khan is a temple at Angkor, Cambodia, built in the 12th century for King Jayavarman VII to honor his father. It is located northeast of Angkor Thom and just west of the Jayatataka baray. The temple features winding corridors, carved devatas, and towering trees growing through the ancient stones, creating a mystical atmosphere.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://www.google.com/maps/search/Preah+Khan+Temple+Siem+Reap+Cambodia',
                gallery: [
                    'https://angkordiscovery.com/wp-content/uploads/2024/03/preah-khan-temple-cambodia.jpg',
                    'https://live.staticflickr.com/5509/11155353194_01e60637a3_b.jpg',
                    'https://www.cambotours.com/uploads/preah-khan-temple.jpg'
                ]
            },
            {
                id: 'ta-prohm',
                title: 'Ta Prohm Temple',
                description: 'Famous temple embraced by giant tree roots creating a mystical atmosphere.',
                image: 'https://i.pinimg.com/1200x/fd/ff/26/fdff260da81e14e91584ba57a705deac.jpg',
                views: '1.9K',
                location: 'Siem Reap, Cambodia',
                rating: 4.7,
                openingHours: '07:30 AM – 5:30 PM',
                ticketPrice: '$37.00 (1-Day Pass)',
                fullDescription: 'Ta Prohm is the modern name of a temple near the city of Siem Reap, Cambodia. Built in the Bayon style largely in the late 12th century and early 13th century as a Mahayana Buddhist monastery and university, it was founded by the Khmer King Jayavarman VII. Unlike most Angkorian temples, Ta Prohm has been left in much the same condition in which it was found, with numerous trees and their roots growing over and through the ruins.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://maps.app.goo.gl/V41twgjRhHdh4tRX8',
                gallery: [
                    'https://images.travelandleisureasia.com/wp-content/uploads/sites/6/2023/11/14132313/Ta-Prohm-temple-inside-Angkor-Wat-complex-Mark-R-Croucher-Shutterstock.jpg',
                    'https://toursbyjeeps.com/wp-content/uploads/2021/07/Ta-Phrom7.jpg',
                    'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/09/Ta-Prohm-Temple-Cambodia2.jpg?resize=1024%2C768&ssl=1'
                ]
            },
            {
                id: 'oudung-mountain',
                title: 'Oudung Mountain',
                description: 'Historic former capital with ancient stupas and panoramic views.',
                image: 'https://www.pandaw.com/images/blog/blog_80_header.jpg',
                views: '1.8K',
                location: 'Kampong Speu, Cambodia',
                rating: 4.4,
                openingHours: '06:00 AM – 6:00 PM',
                ticketPrice: 'Free Entry',
                fullDescription: 'Oudong Mountain served as the royal capital of Cambodia from 1618 to 1866. The site features several impressive stupas and Buddhist temples perched on twin peaks, offering breathtaking panoramic views of the surrounding countryside. The mountain holds great historical and spiritual significance for Cambodians.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://maps.app.goo.gl/vEkTeh2xQ6cBrpjU8',
                gallery: [
                    'https://kampatour.com/pic/blog/images/oudong-1.jpg',
                    'https://cdn.getyourguide.com/img/location/5a086f1db0512.jpeg/88.jpg',
                    'http://topmekongcruises.com/uploads/oudong_10.jpg'
                ]
            },
            {
                id: 'prey-kuk-temple',
                title: 'Sambor Prei Kuk',
                description: 'Ancient pre-Angkorian temple complex dating back to the 7th century.',
                image: 'https://a.cdn-hotels.com/gdcs/production197/d1448/e1313a63-77a5-424f-99fa-d5c19dc9cf774.jpg',
                views: '2.1K',
                location: 'Kampong Thom, Cambodia',
                rating: 4.9,
                openingHours: '07:00 AM – 5:30 PM',
                ticketPrice: '$10.00',
                fullDescription: 'Sambor Prei Kuk is an archaeological site in Cambodia located in Kampong Thom Province. The complex dates from the 7th century and was the capital of Chenla. It comprises more than 100 mainly brick temples scattered across the forested landscape. The site was inscribed on the UNESCO World Heritage List in 2017.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://maps.app.goo.gl/bgwD7if2Q43hTGom9',
                gallery: [
                    'https://thumbs.dreamstime.com/b/kampong-thom-cambodia-s-second-largest-province-area-its-capital-named-kampong-thom-picturesque-town-banks-237221889.jpg',
                    'https://www.asiakingtravel.com/cuploads/files/little-known-temple-cambodia-7(1).jpg',
                    'https://www.areacambodia.com/wp-content/uploads/2023/11/Sambor-Prei-Kuks-Temple-Zone-the-Archaeological-Site-of-Ancient-Ishanapura.jpg'
                ]
            },
            {
                id: 'national-museum',
                title: 'National Museum',
                description: 'Cambodia\'s leading historical and archaeological museum in Phnom Penh.',
                image: 'https://img.fotocommunity.com/national-museum-of-cambodia-01-89d33bd7-58fa-452d-b5d8-c554d265ddda.jpg?height=1080',
                views: '1.7K',
                location: 'Phnom Penh, Cambodia',
                rating: 4.3,
                openingHours: '08:00 AM – 5:00 PM',
                ticketPrice: '$5.00 Adult / $3.00 Child',
                fullDescription: 'The National Museum of Cambodia is Cambodia\'s largest museum of cultural history and is the country\'s leading historical and archaeological museum. The museum houses one of the world\'s largest collections of Khmer art, including sculptural, ceramics, bronzes, and ethnographic objects. The museum\'s collection includes over 14,000 items, from prehistoric times to periods before, during and after the Khmer Empire.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://www.google.com/maps/search/National+Museum+of+Cambodia+Phnom+Penh',
                gallery: [
                    'https://leightontravels.com/wp-content/uploads/2021/05/Entrance-gate-National-Museum-of-Cambodia.jpg',
                    'https://static.idctravel.com/wp-content/uploads/n/04/National-Museum-of-Cambodia.jpg',
                    'https://files.intocambodia.org/content/big/d90c3d245d9ef1e4241eea99388fe489.jpg'
                ]
            },
            {
                id: 'neak-pean-temple',
                title: 'Neak Pean Temple',
                description: 'Unique island temple with intricate carvings and historical significance.',
                image: 'https://thetravelhackinglife.com/wp-content/uploads/2022/08/Neak-Pean-Siem-Riep-Cambodia.jpg',
                views: '1.7K',
                location: 'Siem Reap, Cambodia',
                rating: 4.3,
                openingHours: '07:30 AM – 5:30 PM',
                ticketPrice: '$37.00 (1-Day Pass)',
                fullDescription: 'Neak Pean is a Buddhist temple located on a circular island in Jayatataka Baray, which was associated with Preah Khan temple, built during the reign of King Jayavarman VII. The name means "The entwined serpents" referring to the stone sculptures of serpents surrounding the base of the temple.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://www.google.com/maps/search/Neak+Pean+Temple+Cambodia',
                gallery: [
                    'https://media-cdn.tripadvisor.com/media/photo-s/10/bd/49/14/neak-pean-temple-view.jpg',
                    'https://www.angkor-temples-in-cambodia.com/uploads/3/0/0/4/30047791/neak-pean-01-600.jpg',
                    'https://free-images.com/md/b0f6/neak_pean_temple_temple.jpg'
                ]
            },
            {
                id: 'koh-ker-temple',
                title: 'Koh Ker Temple',
                description: 'Remote temple complex with impressive pyramid-shaped temple.',
                image: 'https://www.cambodia-roads.fr/wp-content/uploads/2017/06/Koh-Ker.jpg',
                views: '1.7K',
                location: 'Preah Vihear, Cambodia',
                rating: 4.5,
                openingHours: '07:30 AM – 5:30 PM',
                ticketPrice: '$15.00',
                fullDescription: 'Koh Ker was the capital of the Khmer Empire for a brief period from 928 to 944 AD. The site is dominated by Prasat Thom, a 30-meter tall temple mountain raising seven tiers to a flat summit. The site also features numerous other temples and structures scattered throughout the forested area.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://maps.app.goo.gl/wv6w4aFMKsZxmmrk9',
                gallery: [
                    'https://angkorwatexplorer.com/wp-content/uploads/2024/04/koh-ker-temple-cambodia-4.jpg',
                    'https://i.pinimg.com/736x/c2/c1/25/c2c125631fad6864fa2d494fc750d5ba.jpg',
                    'https://www.areacambodia.com/wp-content/uploads/2023/09/The-UNESCOs-World-Heritage-Site-designation-was-given-to-the-Koh-Ker-Temple-also-known-as-the-Huge-Pyramid-of-Cambodia.jpg'
                ]
            },
            {
                id: 'beng-mealea-temple',
                title: 'Beng Mealea Temple',
                description: 'Mysterious jungle temple largely unrestored with atmospheric ruins.',
                image: 'https://anywhereweroam.com/wp-content/uploads/2024/03/cambodia-travel-guides.jpg',
                views: '1.9K',
                location: 'Siem Reap, Cambodia',
                rating: 4.6,
                openingHours: '06:00 AM – 5:00 PM',
                ticketPrice: '$5.00',
                fullDescription: 'Beng Mealea is a temple from the Angkor Wat period located 40 km east of the main group of temples. The temple is largely unrestored, with trees and thick brush thriving amidst its towers and courtyards. Its primary materials are sandstone and it is known for its long corridors.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://www.google.com/maps/search/Beng+Mealea+Temple+Cambodia',
                gallery: [
                    'https://www.capitoltraveltours.com/wp-content/uploads/2023/08/Beng-Mealea-temple.jpg',
                    'https://www.mytravelbuzzg.com/wp-content/uploads/Outlying-Temple-Beng-Mealea.jpg',
                    'https://www.indochinavoyages.com/wp-content/uploads/2014/12/beng-mealea-jungle-temple.jpg'
                ]
            },
            {
                id: 'banteay-srei',
                title: 'Banteay Srei',
                description: 'Exquisite pink sandstone temple known for detailed decorative carvings.',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
                views: '2.1K',
                location: 'Siem Reap, Cambodia',
                rating: 4.9,
                openingHours: '07:30 AM – 5:30 PM',
                ticketPrice: '$37.00 (1-Day Pass)',
                fullDescription: 'Banteay Srei is a 10th-century Cambodian temple dedicated to the Hindu god Shiva. Built largely of red sandstone which lends itself to elaborate decorative wall carvings which are still observable today. The buildings themselves are miniature in scale, unusually so when measured by the standards of Angkorian construction.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.5!2d103.963!3d13.599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
                mapUrl: 'https://maps.app.goo.gl/EwQqzrFnjNxCZu489',
                gallery: [
                    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
                    'https://images.unsplash.com/photo-1563640343-f5df12f28caa?w=600&h=400&fit=crop',
                    'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&h=400&fit=crop'
                ]
            }
        ];

        // Pagination state
        let currentPage = 1;
        const cardsPerPage = 4;
        const totalPages = Math.ceil(PLACES.length / cardsPerPage);

        // Render cards for current page
        function renderCards() {
            const grid = document.getElementById('cardsGrid');
            const startIndex = (currentPage - 1) * cardsPerPage;
            const endIndex = startIndex + cardsPerPage;
            const currentPlaces = PLACES.slice(startIndex, endIndex);

            grid.innerHTML = currentPlaces.map((place, index) => `
                <div class="card-hover bg-white/80 rounded-2xl backdrop-blur shadow-md overflow-hidden transition-all duration-500 transform hover:translate-y-2 hover:shadow-teal-500 group
                animate-fadeUp" 
                     style="animation-delay: ${index * 100}ms">
                    <div class="relative">
                        <img src="${place.image}" alt="${place.title}" 
                             class="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out">
                        <span class="absolute top-4 left-48 bg-white/90 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                            Popular
                        </span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-teal-600 line-clamp-1 mb-2">${place.title}</h3>
                        <p class="text-slate-600 text-sm mb-4 line-clamp-2">
                            ${place.description}
                        </p>
                        <div class="flex items-center justify-between">
                            <button onclick="showDetail('${place.id}')" 
                                    class="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
                                Learn More
                            </button>
                            <div class="flex items-center text-slate-500 text-sm">
                                <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                                </svg>
                                ${place.views}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            updatePaginationControls();
        }

        // Update pagination controls
        function updatePaginationControls() {
            document.getElementById('pageInfo').textContent = `${currentPage} / ${totalPages}`;
            document.getElementById('prevBtn').disabled = currentPage === 1;
            document.getElementById('nextBtn').disabled = currentPage === totalPages;
        }

        // Navigate to next page
        function nextPage() {
            if (currentPage < totalPages) {
                currentPage++;
                renderCards();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Navigate to previous page
        function previousPage() {
            if (currentPage > 1) {
                currentPage--;
                renderCards();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Show detail view
        function showDetail(placeId) {
            const place = PLACES.find(p => p.id === placeId);
            if (!place) return;

            // Update hero image
            document.getElementById('detailHeroImage').src = place.image;
            document.getElementById('detailHeroImage').alt = place.title;

            // Update title and location
            document.getElementById('detailTitle').textContent = place.title;
            document.getElementById('detailLocation').textContent = place.location;

            // Update info cards
            document.getElementById('detailInfoLocation').textContent = place.location;
            document.getElementById('detailInfoHours').textContent = place.openingHours;
            document.getElementById('detailInfoTicket').textContent = place.ticketPrice;

            // Update description
            document.getElementById('detailDescTitle').textContent = place.title;
            document.getElementById('detailDescText').textContent = place.fullDescription;

            // Update gallery
            const galleryEl = document.getElementById('detailGallery');
            galleryEl.innerHTML = place.gallery.map(img => `
                <img src="${img}" alt="${place.title}" 
                     class="w-full h-56 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            `).join('');

            // Update map
            const mapContainer = document.getElementById('detailMapContainer');
            mapContainer.innerHTML = `
                <iframe src="${place.mapEmbed}" 
                        width="100%" height="100%" 
                        style="border:0;" 
                        allowfullscreen 
                        loading="lazy">
                </iframe>
            `;
            document.getElementById('detailMapLink').href = place.mapUrl;

            // Render suggested places
            renderSuggestedPlaces(placeId);

            // Switch view
            document.getElementById('listView').classList.remove('active');
            document.getElementById('detailView').classList.add('active');

            window.scrollTo(0, 0);
        }

        // Render suggested places (excluding current place)
        function renderSuggestedPlaces(currentId) {
            const suggestedGrid = document.getElementById('suggestedGrid');
            const currentIndex = PLACES.findIndex(p => p.id === currentId);
            
            // Get 4 suggestions, wrapping around if needed
            const suggestions = [];
            for (let i = 1; i <= 4; i++) {
                const nextIndex = (currentIndex + i) % PLACES.length;
                suggestions.push(PLACES[nextIndex]);
            }

            suggestedGrid.innerHTML = suggestions.map((place, index) => `
                <div class="bg-white rounded-2xl backdrop-blur shadow-md overflow-hidden transition-all duration-500 transform hover:translate-y-2 hover:shadow-teal-500 group
                animate-fadeUp" 
                     onclick="showDetail('${place.id}')"
                     style="animation-delay: ${index * 100}ms">
                    <div class="relative">
                        <img src="${place.image}" alt="${place.title}" 
                             class="w-full h-36 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out">
                        <span class="absolute top-4 left-44 bg-white/90 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                            Popular
                        </span>
                    </div>
                    <div class="p-5">
                        <h3 class="text-lg font-semibold text-teal-600 line-clamp-1 mb-2">${place.title}</h3>
                        <p class="text-slate-600 text-sm mb-3 line-clamp-2">
                            ${place.description}
                        </p>
                        <div class="flex items-center justify-between">
                            <button class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
                                Learn More
                            </button>
                            <div class="flex items-center text-slate-500 text-sm">
                                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                                </svg>
                                ${place.views}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // BACK TO LIST
        function showList() {
          document.getElementById('detailView').classList.remove('active');
          document.getElementById('listView').classList.add('active');
          window.scrollTo(0, 0);
        }


        // Initialize on page load
        document.addEventListener('DOMContentLoaded', () => {
            renderCards();
        });
