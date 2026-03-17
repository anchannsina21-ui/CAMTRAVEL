const slides = [
    {
    img: "https://www.hotel-boutique.it/wp-content/uploads/2022/12/29-1.jpg",
    title: "Zannier Hotels Phum Baitang",
    desc: "Zannier Hotels Phum Baitang is a luxury resort in Siem Reap, Cambodia, featuring traditional Khmer-style villas, lush tropical gardens, and relaxing swimming pools for an elegant retreat."
    },
    {
        img: "https://a.veronikasadventure.com/tour/back-to-basics-siem-reap-village-tour-in-cambodia-t14496-1.jpg",
        title: "Cambodian Rural",
        desc: "Traditional countryside life in Cambodia with wooden houses, green rice fields, and a calm natural environment."
    },
    {
    img: "https://cdn.getyourguide.com/img/tour/643016ab6833b.jpeg/146.jpg", 
    title: "Kampong Phluk Floating",
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
        img: "https://media.audleytravel.com/-/media/images/home/southeast-asia/cambodia/country-guides/cambodias-best-beach-holidays-and-island-resorts/kep_cambodia_414060_1512x1080.jpg?q=60&w=1600&h=1142",
        title: "Kep Coastline",
        desc: "A peaceful coastal area famous for fresh seafood, calm sea views, and beautiful sunsets."
    },
    {
        img: "https://southeastasiabackpacker.com/wp-content/uploads/2023/12/Siem-Reap-City-Cambodia-1536x1024.jpg",
        title: "Siem Reap City Center",
        desc: "A vibrant tourism city with markets, hotels, restaurants, and cultural attractions for visitors."
    },
    {
    img: "http://www.travelmarbles.com/wp-content/uploads/2016/06/siem-reap.jpg",
    title: "Night Market Bridge",
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
                id: 'koh-rong-saleom',
                title: 'Koh Rong Saleom',
                description: 'Koh Rong Samloem is a peaceful and picturesque island known for its crystal-clear turquoise waters, soft white-sand beaches,',
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a9/73/f1/song-saa-private-island.jpg?w=1400&h=-1&s=1',
                views: '2.2K',
                location: 'Sihanoukville, Cambodia',
                rating: 4.1,
                openingHours: '24h',
                ticketPrice: 'Free',
                fullDescription: '  Koh Rong Samloem is a peaceful and picturesque island known for its crystal-clear turquoise waters, soft white-sand beaches, and lush tropical surroundings. It offers a calm and relaxing atmosphere, making it an ideal destination for travelers seeking tranquility and a break from busy city life.Visitors can enjoy a variety of activities such as swimming, snorkeling to explore colorful coral reefs, beach walks, sunset viewing, and staying in beachfront resorts or cozy bungalows. At night, the island offers a magical experience with glowing bioluminescent plankton in the sea, creating unforgettable memories.Koh Rong Samloem is a perfect getaway for nature lovers, couples, and anyone looking to relax in a serene and beautiful island setting.​​',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl:'https://maps.app.goo.gl/WxthrzQa4LCyGQ4BA',
                gallery: [
                'https://tourismcambodia.org/storage/uploads/contents/ministry-of-tourism-cambodia-2024-07-01-02-52-19am.jpg',
                'https://tourismcambodia.org/storage/uploads/contents/entryform/ministry-of-tourism-cambodia-2024-07-01-02-52-19am1719802341-12801.jpg',
                'https://tourismcambodia.org/storage/uploads/contents/entryform/ministry-of-tourism-cambodia-2024-07-01-02-52-19am1719802341-12802.jpg'
                ],
                travelSchedule: {
                images: [
                    'https://vietlongtravel.com/wp-content/uploads/2015/01/Sihanoukville-Beach.jpg',
                    'https://vietlongtravel.com/wp-content/uploads/2015/01/Sihanoukville-Beach.jpg'
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
                id: 'stueng-porpok',
                title: 'Stueng Porpok',
                description: 'Stueng Popok is a scenic natural destination known for its cool climate and breathtaking sea of clouds that appears in',
                image: 'https://scontent.fpnh2-1.fna.fbcdn.net/v/t39.30808-6/490921232_1205060158072620_6707734999301943312_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHSOfJsGMNV1-m2r28xed27ZwvvPaawAM5nC-89prAAzsVtx7-3chMpHe6opFeoKuuzU9XDA2EaacPlETxu9auH&_nc_ohc=RZh9aG18pMMQ7kNvwEJIYyp&_nc_oc=AdkaWj-kiaPeUqh8AWTcKzjBCz4eLfvjf5zJlTlhSsqD9jnjaNx7QkUZsQ3GPYHSQHQ&_nc_zt=23&_nc_ht=scontent.fpnh2-1.fna&_nc_gid=ITuiD4Px9qjOrMpe7jwI3g&_nc_ss=8&oh=00_Afz9PKfKIS2dr6Glazmo9157zLcJOskYAN2HOtsmAz6CcA&oe=69BB5676',
                views: '1.7K',
                location: 'Koh Kong, Cambodia',
                rating: 4.4,
                openingHours: '04:00 AM – 5:00 PM(Monday to Friday) and 24h (Suturday to Sunday)',
                ticketPrice: '$2.25 Adult',
                fullDescription: 'Stueng Popok is a scenic natural destination known for its cool climate and breathtaking sea of clouds that appears in the early morning. Located in a mountainous area, the site offers panoramic views where mist and clouds gently flow through valleys and trees, creating a peaceful and dreamlike atmosphere.The name Stung Popok is associated with the frequent appearance of clouds and mist, especially during the cool season. Visitors often come early to witness sunrise above the clouds, relax in the fresh air, and capture stunning photographs of nature.With its tranquil environment, cool weather, and iconic cloud scenery, Stung Popok is an ideal destination for nature lovers and travelers seeking a calm escape and a memorable sunrise experience in Cambodia.',
                mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
                mapUrl: 'https://maps.app.goo.gl/o55he25Wy7dgtuKS6',
                gallery: [
                'https://www.guidetrip.info/asset/img/gallery_resort/609359c95769c.jpeg',
                'https://oss4.tnaot.com/tnaot/image/2021/10/30/304b7fdb278f4fec8b29909eef7e8912.jpg',
                'https://image.thmeythmey.com/pictures/2020/04/23/a__7_.jpg'
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
                        <span class="absolute top-3 left-48 bg-white/90 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
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
                <div class="w-[380px] h-[280px] overflow-hidden rounded-xl shadow shrink-0">
                    <img src="${img}" 
                    class="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer">
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
                <div class="bg-white/80 rounded-2xl shadow-md mt-4 p-8 flex flex-col md:flex-row gap-8">
                <div class="flex flex-col gap-4 md:w-[800px]">
                    <h2 class="text-2xl font-bold text-teal-600 mb-6 mt-2">Travel Schedule Boats</h2>
                    <div class="flex gap-3">
                    ${images.map(img => `
                        <div class="w-full overflow-hidden rounded-xl shadow">
                        <img src="${img}" 
                            class="w-full h-40 sm:h-52 object-cover 
                                hover:scale-110 transition-transform duration-700 cursor-pointer" />
                        </div>
                    `).join('')}
                    </div>
                </div>
                <div class="md:w-1/2 bg-teal-50 rounded-xl p-5">
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
                        <span class="absolute top-3 left-48 bg-white/90 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
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
