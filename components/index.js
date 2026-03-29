const slides = [
    {
    img: " https://images.trvl-media.com/media/content/shared/images/travelguides/Siem-Reap-2975-desktopRetina.jpg",
    title: "Angkor Wat Temple",
    desc: "Zannier Hotels Phum Baitang is a luxury resort in Siem Reap, Cambodia, featuring traditional Khmer-style villas, lush tropical gardens, and relaxing swimming pools for an elegant retreat."
    },
    {
        img: "https://static.information.gov.kh/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN1IyQmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9343bb408f639dfbafd8cca7f93d67ff61f4f840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTVRNMU1IZzVNREFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--30b79c7f7567bd0a04d6c485cf8a2bbc24e21d2f/IMG_20240824_184524_991.jpg",
        title: "Waterfall View",
        desc: "Traditional countryside life in Cambodia with wooden houses, green rice fields, and a calm natural environment."
    },
    {
    img: "https://asset.cambodia.gov.kh/tourism/2025/06/photo_2_2025-06-09_18-33-53.jpg", 
    title: "Mountain View",
    desc: "Kampong Phluk is a unique floating village on Tonle Sap Lake, where stilt houses rise above water during the wet season and locals live in harmony with the lake."
    },
    {
    img: "https://4.bp.blogspot.com/-fNAbolwc0Ek/VtpcShUa0iI/AAAAAAAAAFs/BwnqqJpEsSc/s1600/dsc_9022.jpg",
    title: "Prek Tuek Chhu",
    desc: "A scenic river in Kampot surrounded by lush greenery, limestone cliffs, and peaceful waters, perfect for boat trips and nature sightseeing."
    },
    {
        img: "https://res.cloudinary.com/oasisapp/image/upload/v1/1/cambodia/koh-rong-22095",
        title: "Koh Rong Beach",
        desc: "A tropical island destination with white sand, clear blue sea, and a relaxing holiday atmosphere."
    },
    {
        img: "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/10/27195813/Kampot_0_Feature-1600x900.jpg",
        title: "Kampot View",
        desc: "A peaceful coastal area famous for fresh seafood, calm sea views, and beautiful sunsets."
    },
    {
        img: "https://gotripzi.com/_vercel/image?url=_astro%2Fsiem-reap-kh-gate.B-eP5Tm8.webp&w=3840&q=100&dpl=dpl_EgA6zmTbhiteQ5uoLVhiLwJQkCiX",
        title: "Temple View",
        desc: "A vibrant tourism city with markets, hotels, restaurants, and cultural attractions for visitors."
    },
    {
    img: "https://www.hotel-boutique.it/wp-content/uploads/2022/12/29-1.jpg",
    title: "Country Side",
    desc: "An illuminated bridge leading to the Siem Reap Art Center Night Market, showcasing the vibrant evening life and local culture of Siem Reap, Cambodia."
    }
];

const INTERVAL=8000;

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

    el.className=`slide absolute inset-0 opacity-0 transition-opacity duration-[5000ms]${i===0?' active opacity-100 z-[1]':''}`;

    el.innerHTML=`
        <img src="${s.img}" class="w-full h-full object-cover">
        <div class="absolute inset-0"
            style="background:linear-gradient(to right,rgba(0,0,0,0.55),transparent)">
        </div>
        <div class="absolute inset-0 z-[5] flex flex-col justify-center px-[7%] max-w-[800px] mt-8">
                <h1 class="slide-title text-white font-bold mb-2"
                    style="font-size:clamp(3rem,6vw,5.5rem)">
                    ${s.title}
                </h1>
                <p class="slide-desc text-white/75 max-w-[500px] mb-9">
                ${s.desc}
                </p>
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
                id: 'angkor-wat',
                title: 'Angkor Wat Temple',
                description: 'Angkor Wat is a vast temple complex in Cambodia and the largest religious monument in the world, covering around 400 acres.',
                image: 'https://www.fodors.com/wp-content/uploads/2018/10/02.1_Angkor101_Pass_dreamstime_xxl_60637934.jpg',
                views: '2.2K',
                location: 'Siem Reap Province, Cambodia',
                rating: 4.8,
                openingHours: 'Daily: 5:00 AM – 6:00 PM ',
                ticketPrice: 'Price: $37.00 (1-Day Pass)',
                fullDescription: 'Angkor Wat is a vast temple complex in Cambodia and the largest religious monument in the world, covering around 400 acres. It was built in the early 12th century by King Suryavarman II as a Hindu temple dedicated to the god Vishnu, later transforming into a Buddhist site. The temple is designed to represent Mount Meru, the home of the gods in Hindu mythology, surrounded by a massive moat representing the oceans. Its walls are adorned with thousands of intricate bas-reliefs depicting Hindu stories and historical scenes, including the famous "Churning of the Ocean of Milk". The best time to visit is during the cool, dry season from November to February, with sunrise being the most magical time to see the temple. Visitors cannot miss witnessing the iconic sunrise over the temple reflected in the lotus ponds, which is the classic photo opportunity. Also unmissable is exploring the extensive bas-relief galleries and climbing the steep stairs to the central Bakan Sanctuary for panoramic views. Remember to dress modestly with shoulders and knees covered, as it remains a sacred site. A visit requires an Angkor Pass, available for 1, 3, or 7 days starting at $37.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://www.google.com/maps/search/Angkor+Wat+Siem+Reap+Cambodia',
                gallery: [
                'https://i0.wp.com/helloangkor.com/wp-content/uploads/2020/12/IMG_20200622_144812-2-1.jpg?w=1200&ssl=1',
                'https://i.pinimg.com/736x/bc/a5/20/bca5208bb8b55842d5717fb7f1693b2a.jpg',
                'https://i.pinimg.com/1200x/ae/a1/21/aea121bd8ca5c0b0ac5b7475d8c052a7.jpg'
                ]
            },
            {
                id: 'mangrove-forest',
                title: 'Mangrove Forest',
                description: 'The Mangrove Forest is one of the largest and most important mangrove ecosystems in Cambodia',
                image: 'https://www.techoairport.com.kh/tia-backend/locators/1754029535052-Picture2.png',
                views: '1.7K',
                location: 'Koh Kong, Cambodia',
                rating: 4.3,
                openingHours: '08:00 AM – 5:00 PM',
                ticketPrice: '$0.75 - $1.25 Adult',
                fullDescription: 'The Mangrove Forest is one of the largest and most important mangrove ecosystems in Cambodia. Known for its dense mangrove trees, winding waterways, and rich biodiversity, the forest plays a vital role in protecting the coastline and supporting local livelihoods.Visitors can explore the mangroves by boat or kayak, enjoy the peaceful natural surroundings, and observe wildlife such as birds, fish, and crabs. The calm atmosphere makes this destination ideal for eco-tourism, nature exploration, and environmental learning.Visitors also have the opportunity to participate in mangrove planting activities through local community and eco-tourism programs. Guided by community members, visitors can learn proper planting techniques and contribute directly to environmental conservation. This hands-on experience helps raise awareness about the importance of mangrove forests while supporting sustainable tourism in Koh Kong.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl:'https://maps.app.goo.gl/m8Zu3MTsKBxnPhFv5',
                gallery: [
                'https://www.cnc.com.kh/news/laravel-filemanager/photos/30/620b167d9e332.jpg',
                'https://www.cnc.com.kh/news/620b168713372.jpeg',
                'https://asset.cambodia.gov.kh/provincial/sites/12/2019/08/photo_2019-08-30_08-23-59-3-1024x682.jpg'
                ]
            },
            {
                id: 'angkor-wonder-garden',
                title: 'Angkor Wonder Garden',
                description: 'Angkor Wonder Garden is a huge, beautiful park about 40 minutes...',
                image: 'https://cambotours.com/uploads/angkor-wonder-garden-6.jpg',
                views: '2.2K',
                location: 'Siem Reap, Cambodia',
                rating: 4.5,
                openingHours: 'open daily – 24h',
                ticketPrice: '$3-10',
                fullDescription: 'Angkor Wonder Garden is a huge, beautiful park about 40 minutes away from Siem Reap city that is famous for its massive fields of colorful flowers and creative statues. It features a tall man-made hill with a café on top where you can drink coffee and watch the sunset over the gardens. It is a perfect place for families because kids can see animals like rabbits and ostriches, and everything is lit up with glowing light in the evening for amazing photos.​​',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl:'https://maps.app.goo.gl/mnwtBbApxEBJiWfY8',
                gallery: [
                'https://i.ytimg.com/vi/u-SZmp-Sn2E/maxresdefault.jpg',
                'https://www.khmertimeskh.com/wp-content/uploads/2024/01/w11.jpeg',
                'https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/502416227_122220329600138338_3222536188370938061_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=rD0ERFWiJF0Q7kNvwG6QIWh&_nc_oc=Admh0iXu3g1sY0r273kvm0qevO-3o2dsBHJQXnCXfUbP0haX_54Ceu8asPeJ8OiaMOU&_nc_zt=23&_nc_ht=scontent.fpnh2-2.fna&_nc_gid=8qWEorHoXXLN3tiGEf1Org&_nc_ss=8&oh=00_AfxHwiJiZkQmA8nm2luJjl3R9AZe8PRcZ1Zxig6OaP1BeQ&oe=69B3081E'
                ]
            },
            {
                id: 'king-island',
                title: 'King Island',
                description: 'King Island is a beautiful natural tourist island located in Koh Kong Province, Cambodia. It is well known for its',
                image: 'https://oss4.tnaot.com/tnaot/image/2021/09/14/ae543cd5505f4100b67991c573ceaa97.jpg',
                views: '1.8K',
                location: 'Koh Kong, Cambodia',
                rating: 4.4,
                openingHours: '24h',
                ticketPrice: 'Free',
                fullDescription: 'King Island is a beautiful natural tourist island located in Koh Kong Province, Cambodia. It is well known for its clear blue seawater, white sandy beaches, and peaceful atmosphere, making it an ideal destination for relaxation and seaside vacations. The island is rich in marine biodiversity, which attracts many visitors who love nature and ocean activities.Visitors can enjoy a variety of activities such as swimming, snorkeling, boat trips, fishing, and walking along the scenic coastline. The island is also home to local fishing villages, where tourists can experience the traditional lifestyle and culture of the local community.In addition, Koh Sdach offers a range of accommodations, including resorts and guesthouses that provide comfortable stays while enjoying stunning ocean views.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://maps.app.goo.gl/xVuLh8Z4Wx1tvhKLA',
                gallery: [
                'https://huunghivietnamcampuchia.thoidai.com.vn/stores/news_dataimages/huunghivietnamcampuchia-thoidai-com-vn/062020/15/19/%E1%9E%80-%E1%9E%9F-%E1%9E%8A-%E1%9E%85-%E1%9E%87-%E1%9E%9A%E1%9E%98%E1%9E%8E-%E1%9E%99%E1%9E%8A-%E1%9E%8B-%E1%9E%93-%E1%9E%92%E1%9E%98-%E1%9E%98%E1%9E%87-%E1%9E%8F-%E1%9E%93-%E1%9E%84-%E1%9E%94-%E1%9E%9A%E1%9E%87-%E1%9E%80-20-.2015.jpg',
                'https://huunghivietnamcampuchia.thoidai.com.vn/stores/news_dataimages/huunghivietnamcampuchia-thoidai-com-vn/062020/15/19/%E1%9E%80-%E1%9E%9F-%E1%9E%8A-%E1%9E%85-%E1%9E%87-%E1%9E%9A%E1%9E%98%E1%9E%8E-%E1%9E%99%E1%9E%8A-%E1%9E%8B-%E1%9E%93-%E1%9E%92%E1%9E%98-%E1%9E%98%E1%9E%87-%E1%9E%8F-%E1%9E%93-%E1%9E%84-%E1%9E%94-%E1%9E%9A%E1%9E%87-%E1%9E%80-20-.3992.jpg',
                'https://huunghivietnamcampuchia.thoidai.com.vn/stores/news_dataimages/huunghivietnamcampuchia-thoidai-com-vn/062020/15/19/%E1%9E%80-%E1%9E%9F-%E1%9E%8A-%E1%9E%85-%E1%9E%87-%E1%9E%9A%E1%9E%98%E1%9E%8E-%E1%9E%99%E1%9E%8A-%E1%9E%8B-%E1%9E%93-%E1%9E%92%E1%9E%98-%E1%9E%98%E1%9E%87-%E1%9E%8F-%E1%9E%93-%E1%9E%84-%E1%9E%94-%E1%9E%9A%E1%9E%87-%E1%9E%80-20-.0778.jpg'
                ],
                travelSchedule: {
                    images: [
                        'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/7e/76/f0.jpg',
                        'https://img.freepik.com/premium-photo/view-typical-cambodian-long-tale-boat-anchored-beach-otres-near-sihanoukville_1048944-24824117.jpg'
                    ],
                    departureSchedule: [
                        { label: 'Morning',   time: '7:30 AM – 9:00 AM' },
                        { label: 'Midday',    time: '11:30 AM – 12:30 PM' },
                        { label: 'Afternoon', time: '2:30 PM – 3:30 PM' }
                    ],
                    returnSchedule: [
                        { label: 'Morning',   time: '9:00 AM – 10:00 AM' },
                        { label: 'Midday',    time: '12:30 PM – 1:30 PM' },
                        { label: 'Afternoon', time: '3:30 PM – 5:00 PM' }
                    ]
                }
            },
            {
                id: 'royal-palace',
                title: 'Royal Palace',
                description: 'The Royal Palace in Phnom Penh is a magnificent complex that has served as the official residence of Cambodian kings since it was built in 1866 under the reign of King Norodom . ',
                image: 'https://i.pinimg.com/1200x/85/0d/cd/850dcd5681e331f129f30080831511af.jpg',
                views: '2.3K',
                location: 'Phnom Penh, Cambodia',
                rating: 4.5,
                openingHours: 'Morning Session: 8:00 AM – 11:00 AM Afternoon Session: 2:00 PM – 5:00 PM ',
                ticketPrice: 'Foreign Visitors: Approximately $10 USD \nLocal Currency: 40,000 Cambodian Riel (KHR)',
                fullDescription: 'The Royal Palace in Phnom Penh is a magnificent complex that has served as the official residence of Cambodian kings since it was built in 1866 under the reign of King Norodom . Constructed on the banks of the Tonle Sap River, the palace was established when the royal capital moved from Oudong to Phnom Penh . The architecture is a stunning blend of traditional Khmer design with intricate carvings and classic Buddhist and Hindu symbolism, represented by the buildings\' yellow and white colors . One of the most fascinating areas is the Silver Pagoda, whose floor is paved with over 5,000 solid silver tiles, weighing more than five tons . This temple also houses priceless national treasures, including a life-sized gold Buddha adorned with over 9,500 diamonds and a 17th-century emerald Buddha statue . The best time to visit is in the morning, right when it opens at 8:00 AM, to avoid the intense tropical heat and the large tour groups . Visitors cannot miss exploring the grand Throne Hall, with its towering 59-meter spire, which is still used for royal ceremonies today . Also unmissable is the Napoleon III Pavilion, a cast-iron structure gifted by the French emperor that stands in stark contrast to the Khmer architecture . When you arrive, you must dress modestly with your shoulders and knees covered, and remember that you will need to remove your shoes before entering the pagoda.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://www.google.com/maps/search/Royal+Palace+Phnom+Penh+Cambodia',
                gallery: [
                'https://cdn.thecrazytourist.com/wp-content/uploads/2018/09/ccimage-shutterstock_142484578.jpg',
                'https://i.pinimg.com/736x/77/d7/78/77d7789e9e8b93b09f20d8af9fe3433c.jpg',
                'https://topmekongcruises.com/uploads/royal_palace_21.jpg'
                ]
            },
            {
                id: 'Garden City Water Park',
                title: 'Garden City Water Park',
                description: 'Garden City Water Park is Cambodia’s premier aquatic destination and....',
                image: 'https://www.cnineo.com/images/project/garden-city-water-park-in-cambodia-2.jpg',
                views: '1.7K',
                location: 'Phnom Penh, Cambodia',
                rating: 4.3,
                openingHours: '11:00 AM – 4:30 PM.',
                ticketPrice: '$15.50 - $15.99. Adult / $9.25 - $9.99 Child',
                fullDescription: 'Garden City Water Park is Cambodia’s premier aquatic destination and the largest facility of its kind in the kingdom. Spanning over six hectares, the park features a massive collection of world-class attractions, including a 13,000-square-meter wave pool, a long lazy river, and 38 diverse water slides designed by internationally renowned engineers. The facility offers a wide range of entertainment options, from high-adrenaline peak drops and tornado slides to dedicated kids zones and relaxing private cabanas. Operating from Tuesday to Sunday, the park provides an immersive leisure experience for families and tourists, showcasing modern recreational infrastructure just outside the heart of Phnom Penh.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl:'https://maps.app.goo.gl/7VeejpV6hsLcviwp8',
                gallery: [
                'https://gardencitywaterpark.com/wp-content/uploads/2022/11/gardencity-waterpark-image-2.jpg',
                'https://www.cnineo.com/images/project/garden-city-water-park-in-cambodia-1.webp',
                'https://gardencitywaterpark.com/wp-content/uploads/2022/11/Kids-Paradise-gallery-3.jpg'
                ]
            },
            {
                id: 'bayon-temple',
                title: 'Bayon Temple',
                description: 'Bayon Temple is a magnificent Buddhist temple located at the heart of the ancient city of Angkor Thom in Siem Reap, Cambodia. ',
                image: 'https://i.pinimg.com/1200x/18/45/c5/1845c5e580149e6a26965206a701d7d6.jpg',

                views: '2.2K',
                location: 'Siem Reap Province, Cambodia',
                rating: 4.5,
                openingHours: 'Daily: 7:30 AM – 5:30 PM ',
                ticketPrice: 'Pass Prices: $37 USD',
                fullDescription: 'Bayon Temple is a magnificent Buddhist temple located at the heart of the ancient city of Angkor Thom in Siem Reap, Cambodia. It was built in the late 12th century by King Jayavarman VII, serving as his state temple and representing a shift from Hinduism to Mahayana Buddhism in the Khmer Empire. The temple is most famous for its 54 towering stone faces, totaling 216 serene smiles, which are believed to depict either the bodhisattva Avalokiteshvara or the king himself. Its walls are adorned with over 1,200 meters of intricate bas-reliefs that uniquely depict not only mythological scenes but also vivid details of everyday life in the 12th century. The best time to visit is during the cool, dry season from November to February, when the weather is most pleasant for exploring. To avoid crowds and experience the temple\'s mystical atmosphere, plan to arrive right at sunrise or later in the afternoon. Visitors cannot miss slowly wandering through the labyrinth of face towers to experience the famous "Khmer Smile" from every angle. Equally unmissable are the historical bas-reliefs on the outer galleries, which show real-life scenes like markets, battles, and festivals. Remember to dress modestly, covering your shoulders and knees, as it is a sacred religious site.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://www.google.com/maps/search/Bayon+Temple+Siem+Reap+Cambodia',
                gallery: [
                'https://cdn.thecollector.com/wp-content/uploads/2024/05/bayon-temples-of-angkor.jpg?width=1200&quality=55',
                'https://cdn.britannica.com/55/122155-050-56389FCC/Bayon-temple-Angkor-Thom-Cambodia.jpg',
                'https://i.pinimg.com/1200x/b7/97/8d/b7978de5e963a18eaf311215b8907538.jpg'
                ]
            },
            {
                id: 'kulen-waterfall',
                title: 'Kulen Waterfall',
                description: 'Phnom Kulen Waterfall is one of Cambodia’s most famous natural attractions, located within Phnom Kulen',
                image: 'https://www.civitatis.com/f/camboya/siem-reap/excursion-privada-siem-reap-589x392.jpg',
                views: '1.7K',
                location: 'Siem Reab , Cambodia',
                rating: 4.3,
                openingHours: '07:00 AM – 5:00 PM',
                ticketPrice: 'Free',
                fullDescription: 'Phnom Kulen Waterfall is one of Cambodia’s most famous natural attractions, located within Phnom Kulen National Park in Siem Reap Province. Surrounded by dense forest and sacred landscapes, the waterfall is known for its powerful flowing water, cool atmosphere, and natural beauty.The waterfall has two main levels, where visitors can relax, swim, and enjoy the refreshing mist created by the falling water. Phnom Kulen is also a spiritually significant mountain, home to ancient carvings, temples, and religious sites, making the visit both a natural and cultural experience.With its combination of nature, history, and spirituality, Phnom Kulen Waterfall is an ideal destination for nature lovers, cultural explorers, and travelers seeking a refreshing escape near Angkor.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://maps.app.goo.gl/5t57z5ri4vDuMYh39',
                gallery: [
                'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/89/36/cb.jpg?w=1920',
                'https://www.aseanangkorguide.com/wp-content/uploads/2024/09/IMG_7921.jpg',
                'https://s5.kh1.co/25/25c77d0074865a0e7ac2a8a4e3c348eda4034e7e.jpg'
                ]
            },
            {
                id: 'Kampoul Pich',
                title: 'Kampoul Pich',
                description: 'Kompoul Pich Resort in Takeo offers a quiet, natural escape......',
                image: 'https://i.ytimg.com/vi/5q-vnED1bHY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDMSAkeT62IRVtOlhOk5YGFQQHO2Q',
                views: '2.1K',
                location: 'Takeo, Cambodia',
                rating: 4.9,
                openingHours: '06:30 AM to 07:30 PM',
                ticketPrice: '$1.00 to $2.50',
                fullDescription: '  Kompoul Pich Resort in Takeo offers a quiet, natural escape with lush green spaces, wooden cottages, a restaurant, and a farm. It is an ideal spot for a relaxing day trip, picnic, or overnight stay. Guests can enjoy scenic views from the overwater restaurant while dining on fresh, local cuisine prepared with ingredients from the on-site gardens. For entertainment, the resort features a variety of activities including swimming pools, water slides, and swan boat rides across the peaceful lake.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl:'https://maps.app.goo.gl/GXVMzR5eGbpCdGdSA',
                gallery: [
                'https://asset.tovtrip.com/uploads/0000/99/2023/07/13/phieu.jpg',
                'https://i.ytimg.com/vi/sQLuyuSHnf8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgYSgwMA8=&rs=AOn4CLAYJOmfdgrqIH1Mt7m1arbMiCkS8A',
                'https://scontent.fpnh24-1.fna.fbcdn.net/v/t1.6435-9/66827488_1558044550994451_779482958737178624_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=fi8_kiZLYaAQ7kNvwEyPa_O&_nc_oc=AdkJ1J8Lym401gw7TpU7bG3_mSEtBjhcCJ-K8ZoVTF-vl3LcjowPbSBNiK3jxEk4W_k&_nc_zt=23&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=BrgxdfKZCrNce_68nubz7A&_nc_ss=8&oh=00_AfxoHckaiGiMIXxZbg_N_D4tdTRBhxZMsR4Yyh2_RVS9EA&oe=69D50697'
                ]
            },
            {
                id: 'koh-han',
                title: 'Koh Han',
                description: 'Koh Han is a beautiful natural island located in the Mekong River, Stung Treng Province, Cambodia',
                image: 'https://s9.kh1.co/f9/f9de6fa420a3349ff71745f33c0129a37c911b70.jpg',
                views: '2.1K',
                location: 'Steung Treng, Cambodia',
                rating: 4.9,
                openingHours: '24h',
                ticketPrice: 'Free',
                fullDescription: 'Koh Han is a beautiful natural island located in the Mekong River, Stung Treng Province, Cambodia. The island boasts lush green scenery, fresh air, and a peaceful atmosphere, making it an ideal spot for relaxation and enjoying nature.Koh Han features pristine riverside sandy beaches with clear waters, where visitors can swim, play in the water, or take boat rides around the island. During the dry season, the water level drops, revealing wide sandy shores and stunning landscapes perfect for photography and picnics.This place is perfect for nature lovers, families, and anyone looking to escape the hustle and bustle of the city to enjoy the simple yet captivating beauty of nature.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://maps.app.goo.gl/wfpqqBVKEK63XCz57',
                gallery: [
                'https://asset.cambodia.gov.kh/tourism/2024/02/425657785_774869598007134_6693739349654815026_n-768x432.jpg',
                'https://moe.gov.kh/wp-content/uploads/2023/02/331913010_3090896624538888_6074089210436828354_n-768x1024.jpg',
                'https://moe.gov.kh/wp-content/uploads/2023/02/331951853_923902195449200_5528435327695359579_n-547x365.jpg'
                ]
            },
            {
                id: 'beng-mealea-temple',
                title: 'Beng Mealea Temple', 
                description: 'Beng Mealea is a spectacular 12th-century Hindu temple located about 40 kilometers east of the main Angkor complex, built during the reign of King Suryavarman II.',
                image: 'https://anywhereweroam.com/wp-content/uploads/2024/03/cambodia-travel-guides.jpg',
                views: '1.7K',
                location: 'Siem Reap Province, Cambodia',
                rating: 4.3,
                openingHours: '7:30 AM – 5:30 PM',
                ticketPrice: 'Day Pass: $37 USD',
                fullDescription: 'Beng Mealea is a spectacular 12th-century Hindu temple located about 40 kilometers east of the main Angkor complex, built during the reign of King Suryavarman II. Its name means "lotus pond" in Khmer, and it was dedicated to the god Vishnu, featuring a layout almost identical to Angkor Wat. The temple is fascinating because it has been largely left in its natural, unrestored state, with massive sandstone blocks collapsed in heaps and ancient trees growing through the crumbling structures. It was added to the UNESCO World Heritage Tentative List in 2020, recognizing its outstanding cultural value. Visitors cannot miss exploring the vast complex of three enclosing galleries surrounding a central sanctuary, where intricate carvings depict scenes from Hindu mythology like the Churning of the Sea of Milk. The best time to visit is during the dry season from November to March, with early morning offering the most magical light and peaceful atmosphere. When you arrive, be sure to walk the wooden pathway built for the film "Two Brothers," which allows access through the otherwise impassable ruins. The temple requires a separate entrance fee of approximately $5-15, as the standard Angkor Pass is not valid here. Wear sturdy shoes for climbing over rubble, bring plenty of water, and hire a local guide to discover hidden courtyards and the mysterious echo chamber. Unlike the crowded temples of Angkor, Beng Mealea offers a true Indiana Jones adventure where you can feel like a true explorer discovering lost ruins .',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://www.google.com/maps/search/National+Museum+of+Cambodia+Phnom+Penh',
                gallery: [
                'https://www.capitoltraveltours.com/wp-content/uploads/2023/08/Beng-Mealea-temple.jpg',
                'https://www.mytravelbuzzg.com/wp-content/uploads/Outlying-Temple-Beng-Mealea.jpg',
                'https://www.indochinavoyages.com/wp-content/uploads/2014/12/beng-mealea-jungle-temple.jpg'
                ]
            },
            {
            id: 'Daung TE',
            title: 'Daung TE',
            description: 'Daung Te is a riverside destination on the Prek Tuek Chhu River for....',
            image: 'https://www.khmertimeskh.com/wp-content/uploads/2024/10/a6.jpeg',
            views: '2.1K',
            location: 'Kampot, Cambodia',
            rating: 4.9,
            openingHours: 'open daily – 24h',
            ticketPrice: 'free entry',
            fullDescription: 'Daung Te is a riverside destination on the Prek Tuek Chhu River for fun and relaxation. Visitors can enjoy kayaking, rope swings, hammocks on a floating raft, a restaurant, and guesthouses, making it a popular family-friendly spot on weekends. The resort standout feature is its massive riverside water slide, which launches thrill-seekers directly into the refreshing currents of the river. For those seeking a slower pace, the sunset boat tours offer a serene way to take in the mountain views as the sky turns vibrant shades of orange and pink.',
            mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
            mapUrl:'https://maps.app.goo.gl/GdQdRua3Ck5FSPaZA',
            gallery: [
            'https://kohsantepheap.tv/wp-content/uploads/2018/09/20180916-8Q3A0147.jpg',
            'https://d34vm3j4h7f97z.cloudfront.net/original/4X/3/3/f/33f33fd4cfcb103742878ebd0afe355b14293860.jpeg',
            'https://www.khmertimeskh.com/wp-content/uploads/2023/11/Kampot-and-Preah-Sihanouk-look-forward-to-Water-Festival-tourist-bonanza.jpg'
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
                        <span class="absolute top-3 right-3 bg-white/90 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
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
            <div class="overflow-hidden rounded-xl shadow">
                <img src="${img}" 
                class="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover 
                        hover:scale-110 transition-transform duration-700 cursor-pointer">
            </div>
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

            // Render Travel Schedule
            renderTravelSchedule(place);

            // Render suggested places
            renderSuggestedPlaces(placeId);

            // Switch view
            document.getElementById('listView').classList.remove('active');
            document.getElementById('detailView').classList.add('active');

            window.scrollTo(0, 0);
        }

        // function render travel schedule
        function renderTravelSchedule(place) {
            const container = document.getElementById('travelScheduleSection');
            if (!container || !place.travelSchedule) {
                if (container) container.style.display = 'none';
                return;
            }

            const { images, departureSchedule, returnSchedule } = place.travelSchedule;

            container.style.display = 'block';
            container.innerHTML = `
            <div class="bg-white/80 rounded-2xl shadow-md mt-4 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <!-- Left: Gallery -->
                <div class="flex flex-col gap-6">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-600">Travel Schedule Boats</h2>
                
                <!-- Responsive grid for images -->
                <div class="grid gap-4 grid-cols-2">
                    ${images.map(img => `
                    <div class="overflow-hidden rounded-xl shadow">
                        <img src="${img}" 
                        class="w-full h-40 sm:h-52 md:h-64 object-cover 
                                hover:scale-110 transition-transform duration-700 cursor-pointer" />
                    </div>
                    `).join('')}
                </div>
                </div>
                
                <!-- Right: Schedule -->
                <div class="bg-teal-50 rounded-xl p-5">
                <p class="text-teal-700 font-semibold mb-2">Operate several times per day as follows:</p>
                <ul class="space-y-1 mb-4">
                    ${departureSchedule.map(s => `
                    <li class="flex items-center gap-2 text-teal-600">
                        <span class="w-2 h-2 bg-teal-500 rounded-full inline-block"></span>
                        <span><strong>${s.label}:</strong> ${s.time}</span>
                    </li>
                    `).join('')}
                </ul>
                
                <p class="text-teal-700 font-semibold mb-2">Return Schedule</p>
                <ul class="space-y-1">
                    ${returnSchedule.map(s => `
                    <li class="flex items-center gap-2 text-teal-600">
                        <span class="w-2 h-2 bg-teal-500 rounded-full inline-block"></span>
                        <span><strong>${s.label}:</strong> ${s.time}</span>
                    </li>
                    `).join('')}
                </ul>
                </div>
            </div>
            `;
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
                        <span class="absolute top-3 right-3 bg-white/90 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
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
