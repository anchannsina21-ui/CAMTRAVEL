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
    fullDescription: 'The Royal Palace is a complex of buildings which serves as the royal residence of the King of Cambodia. Its full name in the Khmer language is Preah Barom Reachea Veang Chaktomuk Serei Mongkol. The Kings of Cambodia have occupied it since it was built in the 1860s, with the palace constructed after King Norodom relocated the royal capital from Oudong to Phnom Penh in the mid-19th century. The architecture is a stunning display of traditional Khmer design combined with French influences.​​​The Royal Palace is a complex of buildings which serves as the royal residence of the King of Cambodia. Its full name in the Khmer language is Preah Barom Reachea Veang Chaktomuk Serei Mongkol. The Kings of Cambodia have occupied it since it was built in the 1860s, with the palace constructed after King Norodom relocated the royal capital from Oudong to Phnom Penh in the mid-19th century. The architecture is a stunning display of traditional Khmer design combined with French influences.The Royal Palace is a complex of buildings which serves as the royal residence of the King of Cambodia. Its full name in the Khmer language is Preah Barom Reachea Veang Chaktomuk Serei Mongkol. The Kings of Cambodia have occupied it since it was built in the 1860s, with the palace constructed after King Norodom relocated the royal capital from Oudong to Phnom Penh in the mid-19th century. The architecture is a stunning display of traditional Khmer design combined with French influences.​​',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
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
    location: 'Phnom Penh, Cambodia',
    rating: 4.5,
    openingHours: '07:30 – 11:00 AM & 2:00 – 5:00 PM',
    ticketPrice: '$6.50 Adult / $3.00 Child',
    fullDescription: 'The Royal Palace is a complex of buildings which serves as the royal residence of the King of Cambodia. Its full name in the Khmer language is Preah Barom Reachea Veang Chaktomuk Serei Mongkol. The Kings of Cambodia have occupied it since it was built in the 1860s, with the palace constructed after King Norodom relocated the royal capital from Oudong to Phnom Penh in the mid-19th century. The architecture is a stunning display of traditional Khmer design combined with French influences.The Royal Palace is a complex of buildings which serves as the royal residence of the King of Cambodia. Its full name in the Khmer language is Preah Barom Reachea Veang Chaktomuk Serei Mongkol. The Kings of Cambodia have occupied it since it was built in the 1860s, with the palace constructed after King Norodom relocated the royal capital from Oudong to Phnom Penh in the mid-19th century. The architecture is a stunning display of traditional Khmer design combined with French influences.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
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
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.1!2d103.867!3d13.4125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
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
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.8!2d103.871!3d13.462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
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
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.3!2d103.89!3d13.435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
    gallery: [
      'https://images.travelandleisureasia.com/wp-content/uploads/sites/6/2023/11/14132313/Ta-Prohm-temple-inside-Angkor-Wat-complex-Mark-R-Croucher-Shutterstock.jpg',
      'https://toursbyjeeps.com/wp-content/uploads/2021/07/Ta-Phrom7.jpg',
      'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/09/Ta-Prohm-Temple-Cambodia2.jpg?resize=1024%2C768&ssl=1'
    ]
  },
  {
    id: 'oudung-mountain',
    title: 'Oudung Mountain',
    description: 'Stunning pagoda with floor made of 5,000 silver tiles within Royal Palace complex.',
    image: 'https://www.pandaw.com/images/blog/blog_80_header.jpg',
    views: '1.8K',
    location: 'Phnom Penh, Cambodia',
    rating: 4.4,
    openingHours: '07:30 – 11:00 AM & 2:00 – 5:00 PM',
    ticketPrice: '$6.50 Adult / $3.00 Child',

    fullDescription: 'The Silver Pagoda is located on the south side of the Royal Palace, Phnom Penh. The official name is Wat Preah Keo Morokat, which means "Temple of the Emerald Crystal Buddha". The vihara houses many national treasures such as gold and jeweled Buddha statues. The floor of the pagoda is made of 5,329 silver tiles and in its center sits a magnificent 17th century emerald and baccarat crystal Buddha.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7!2d104.924!3d11.564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
    gallery: [
      'https://kampatour.com/pic/blog/images/oudong-1.jpg',
      'https://cdn.getyourguide.com/img/location/5a086f1db0512.jpeg/88.jpg',
      'http://topmekongcruises.com/uploads/oudong_10.jpg'
    ]
  },
  {
    id: 'prey-kuk-temple',
    title: 'Prey Kuk Temple',
    description: 'Exquisite pink sandstone temple known for detailed decorative carvings.',
    image: 'https://a.cdn-hotels.com/gdcs/production197/d1448/e1313a63-77a5-424f-99fa-d5c19dc9cf74.jpg',
    views: '2.1K',
    location: 'Siem Reap, Cambodia',
    rating: 4.9,
    openingHours: '07:30 AM – 5:30 PM',
    ticketPrice: '$37.00 (1-Day Pass)',
    fullDescription: 'Banteay Srei is a 10th-century Cambodian temple dedicated to the Hindu god Shiva. Located in the area of Angkor, it lies near the hill of Phnom Dei, 25 km north-east of the main group of temples. Banteay Srei is built largely of red sandstone, a medium that lends itself to the elaborate decorative wall carvings which are still observable today. The buildings themselves are miniature in scale, unusually so when measured by the standards of Angkorian construction.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.5!2d103.963!3d13.599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
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
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6!2d104.927!3d11.568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
    gallery: [
      'https://leightontravels.com/wp-content/uploads/2021/05/Entrance-gate-National-Museum-of-Cambodia.jpg',
      'https://static.idctravel.com/wp-content/uploads/n/04/National-Museum-of-Cambodia.jpg',
      'https://files.intocambodia.org/content/big/d90c3d245d9ef1e4241eea99388fe489.jpg'
    ]
  },{
    id: 'neak-pean-temple',
    title: 'Neak Pean Temple',
    description: 'A beautiful temple in Cambodia with intricate carvings and historical significance.',
    image: 'https://thetravelhackinglife.com/wp-content/uploads/2022/08/Neak-Pean-Siem-Riep-Cambodia.jpg ',
    views: '1.7K',
    location: 'Phnom Penh, Cambodia',
    rating: 4.3,
    openingHours: '08:00 AM – 5:00 PM',
    ticketPrice: '$5.00 Adult / $3.00 Child',
    fullDescription: 'The National Museum of Cambodia is Cambodia\'s largest museum of cultural history and is the country\'s leading historical and archaeological museum. The museum houses one of the world\'s largest collections of Khmer art, including sculptural, ceramics, bronzes, and ethnographic objects. The museum\'s collection includes over 14,000 items, from prehistoric times to periods before, during and after the Khmer Empire.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6!2d104.927!3d11.568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
    gallery: [
      'https://media-cdn.tripadvisor.com/media/photo-s/10/bd/49/14/neak-pean-temple-view.jpg',
      'https://www.angkor-temples-in-cambodia.com/uploads/3/0/0/4/30047791/neak-pean-01-600.jpg',
      'https://free-images.com/md/b0f6/neak_pean_temple_temple.jpg'
    ]
  },{
    id: 'koh-ker-temple',
    title: 'Koh Ker Temple',
    description: 'A well-preserved ancient temple complex in Cambodia, known for its intricate carvings and historical significance.',
    image: 'https://www.cambodia-roads.fr/wp-content/uploads/2017/06/Koh-Ker.jpg',
    views: '1.7K',
    location: 'Phnom Penh, Cambodia',
    rating: 4.3,
    openingHours: '08:00 AM – 5:00 PM',
    ticketPrice: '$5.00 Adult / $3.00 Child',
    fullDescription: 'The National Museum of Cambodia is Cambodia\'s largest museum of cultural history and is the country\'s leading historical and archaeological museum. The museum houses one of the world\'s largest collections of Khmer art, including sculptural, ceramics, bronzes, and ethnographic objects. The museum\'s collection includes over 14,000 items, from prehistoric times to periods before, during and after the Khmer Empire.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6!2d104.927!3d11.568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
    gallery: [
      'https://angkorwatexplorer.com/wp-content/uploads/2024/04/koh-ker-temple-cambodia-4.jpg',
      'https://i.pinimg.com/736x/c2/c1/25/c2c125631fad6864fa2d494fc750d5ba.jpg',
      'https://www.areacambodia.com/wp-content/uploads/2023/09/The-UNESCOs-World-Heritage-Site-designation-was-given-to-the-Koh-Ker-Temple-also-known-as-the-Huge-Pyramid-of-Cambodia.jpg'
    ]
  },{
    id: 'beng-mealea-temple',
    title: 'Beng Mealea Temple',
    description: 'An ancient temple complex in Cambodia, known for its unique architecture and historical significance.',
    image: 'https://anywhereweroam.com/wp-content/uploads/2024/03/cambodia-travel-guides.jpg',
    views: '1.7K',
    location: 'Phnom Penh, Cambodia',
    rating: 4.3,
    openingHours: '08:00 AM – 5:00 PM',
    ticketPrice: '$5.00 Adult / $3.00 Child',
    fullDescription: 'The National Museum of Cambodia is Cambodia\'s largest museum of cultural history and is the country\'s leading historical and archaeological museum. The museum houses one of the world\'s largest collections of Khmer art, including sculptural, ceramics, bronzes, and ethnographic objects. The museum\'s collection includes over 14,000 items, from prehistoric times to periods before, during and after the Khmer Empire.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6!2d104.927!3d11.568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
    gallery: [
      'https://www.capitoltraveltours.com/wp-content/uploads/2023/08/Beng-Mealea-temple.jpg',
      'https://www.mytravelbuzzg.com/wp-content/uploads/Outlying-Temple-Beng-Mealea.jpg',
      'https://www.indochinavoyages.com/wp-content/uploads/2014/12/beng-mealea-jungle-temple.jpg'
    ]
  },{
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
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6!2d104.927!3d11.568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
    gallery: [
      'https://leightontravels.com/wp-content/uploads/2021/05/Entrance-gate-National-Museum-of-Cambodia.jpg',
      'https://static.idctravel.com/wp-content/uploads/n/04/National-Museum-of-Cambodia.jpg',
      'https://files.intocambodia.org/content/big/d90c3d245d9ef1e4241eea99388fe489.jpg'
    ]
  },
  {
    id: 'beng-mealea-temple',
    title: 'Beng Mealea Temple',
    description: 'An ancient temple complex in Cambodia, known for its unique architecture and historical significance.',
    image: 'https://anywhereweroam.com/wp-content/uploads/2024/03/cambodia-travel-guides.jpg',
    views: '1.7K',
    location: 'Phnom Penh, Cambodia',
    rating: 4.3,
    openingHours: '08:00 AM – 5:00 PM',
    ticketPrice: '$5.00 Adult / $3.00 Child',
    fullDescription: 'The National Museum of Cambodia is Cambodia\'s largest museum of cultural history and is the country\'s leading historical and archaeological museum. The museum houses one of the world\'s largest collections of Khmer art, including sculptural, ceramics, bronzes, and ethnographic objects. The museum\'s collection includes over 14,000 items, from prehistoric times to periods before, during and after the Khmer Empire.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6!2d104.927!3d11.568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
    gallery: [
      'https://www.capitoltraveltours.com/wp-content/uploads/2023/08/Beng-Mealea-temple.jpg',
      'https://www.mytravelbuzzg.com/wp-content/uploads/Outlying-Temple-Beng-Mealea.jpg',
      'https://www.indochinavoyages.com/wp-content/uploads/2014/12/beng-mealea-jungle-temple.jpg'
    ]
  },{
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
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6!2d104.927!3d11.568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
    gallery: [
      'https://leightontravels.com/wp-content/uploads/2021/05/Entrance-gate-National-Museum-of-Cambodia.jpg',
      'https://static.idctravel.com/wp-content/uploads/n/04/National-Museum-of-Cambodia.jpg',
      'https://files.intocambodia.org/content/big/d90c3d245d9ef1e4241eea99388fe489.jpg'
    ]
  }
];

// STATE 
const ROWS_INITIAL = 3;
const ROWS_STEP    = 1;
let rowsShown = ROWS_INITIAL;

// HELPERS 
function getCols() {
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 640)  return 2;
  return 1;
}

function getVisible() {
  return getCols() * rowsShown;
}

// RENDER CARDS 
function renderCards() {
  const grid        = document.getElementById('cardsGrid');
  const btnLabel    = document.getElementById('btnLabel');
  const btnArrow    = document.getElementById('btnArrow');
  const seeMoreWrap = document.getElementById('seeMoreWrap');

  if (!grid) return;

  const visibleCount = getVisible();
  const visiblePlaces = PLACES.slice(0, visibleCount);

  grid.innerHTML = visiblePlaces.map((place, index) => {
    const heartColor = place.liked ? "text-red-500" : "text-white";
    const heartFill  = place.liked ? 'fill="currentColor"' : 'fill="none"';

    return `
    <div class="card-hover bg-white/80 backdrop-blur shadow-md rounded-2xl overflow-hidden
                transition-all duration-500 transform hover:-translate-y-2 hover:shadow-teal-500 group
                animate-fadeUp" style="animation-delay:${index * 40}ms">
      <div class="relative">
        <img src="${place.image}" alt="${place.title}"
          class="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out">
        <button onclick="toggleLike(${index})"
          class="absolute top-4 right-4 w-10 h-10 bg-white/40 rounded-full flex items-center justify-center
                 cursor-pointer hover:scale-110 hover:bg-black/30 transition-transform duration-200">
          <svg class="w-6 h-6 ${heartColor}" ${heartFill} stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>
      </div>

      <div class="p-5">
        <h3 class="text-xl font-semibold text-teal-600 mb-3">${place.title}</h3>
        <p class="text-slate-600 mb-4 line-clamp-2 group-hover:text-teal-600 transition-colors duration-300">
          ${place.description}
        </p>
        <div class="flex items-center justify-between">
          <button onclick="showDetail('${place.id}')"
            class="bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-full font-semibold transition cursor-pointer">
            Learn More
          </button>
          <div class="flex items-center text-slate-500 text-sm gap-1">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"/>
            </svg>
            ${place.views}
          </div>
        </div>
      </div>
    </div>
    `;
  }).join('');

  //  Update See More button
  if (!seeMoreWrap) return;

  const hasMore = visibleCount < PLACES.length;
  const isAll   = !hasMore;

  // Hide button entirely if total cards fit in initial rows
  seeMoreWrap.style.display = PLACES.length <= getCols() * ROWS_INITIAL ? 'none' : 'flex';

  if (btnLabel) btnLabel.textContent = hasMore ? 'See More' : 'Show Less';

  if (btnArrow) {
    btnArrow.style.transform = isAll ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

//  SEE MORE BUTTON CLICK 
function handleSeeMore() {
  const grid = document.getElementById('cardsGrid');

  if (rowsShown * getCols() >= PLACES.length) {
    // Currently showing all → collapse back to initial
    rowsShown = ROWS_INITIAL;
    renderCards();
    // Scroll grid back into view
    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Show one more row
    rowsShown += ROWS_STEP;
    renderCards();
  }
}

//  TOGGLE LIKE 
function toggleLike(index) {
  PLACES[index].liked = !PLACES[index].liked;
  renderCards();
}

// RESPONSIVE: re-render on resize so row count stays correct 
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => renderCards(), 150);
});


// SHOW DETAIL VIEW
function showDetail(placeId) {
  const place = PLACES.find(p => p.id === placeId);
  if (!place) return;

  // Hero image
  document.getElementById('detailHeroImage').src = place.image;
  document.getElementById('detailHeroImage').alt = place.title;

  // Title & location
  document.getElementById('detailTitle').textContent = place.title;
  document.getElementById('detailLocation').textContent = place.location;

  // Info cards
  document.getElementById('detailInfoLocation').textContent = place.location;
  document.getElementById('detailInfoHours').textContent = place.openingHours;
  document.getElementById('detailInfoTicket').textContent = place.ticketPrice;

  // Description
  document.getElementById('detailDescTitle').textContent = place.title;
  document.getElementById('detailDescText').textContent = place.fullDescription;

  // Gallery
  const galleryEl = document.getElementById('detailGallery');
  galleryEl.innerHTML = place.gallery.map(img => `
    <img src="${img}" class="w-[400px] h-[300px] object-cover shadow-2xl rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer">
  `).join('');

  // Map
  document.getElementById('detailMapContainer').innerHTML = `
    <iframe src="${place.mapEmbed}" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy"></iframe>
  `;

  // Switch view
  document.getElementById('listView').classList.remove('active');
  document.getElementById('detailView').classList.add('active');

  // Render suggested places
  renderSuggestedPlaces(placeId);

  window.scrollTo(0, 0);
}

// SUGGESTED PLACES — shows 4 cards AFTER the current one, wraps around
function renderSuggestedPlaces(currentId) {
  const suggestedGrid = document.getElementById("suggestedGrid");
  if (!suggestedGrid) return;

  const currentIndex = PLACES.findIndex(p => p.id === currentId);

  // Build a rotated list: start from the card right after current, wrap around, exclude current
  const suggestions = [];
  for (let i = 1; i <= PLACES.length - 1; i++) {
    const nextIndex = (currentIndex + i) % PLACES.length;
    suggestions.push({ place: PLACES[nextIndex], realIndex: nextIndex });
    if (suggestions.length === 4) break;
  }

  suggestedGrid.innerHTML = suggestions.map(({ place, realIndex }) => {
    const heartColor = place.liked ? "text-red-500" : "text-white";
    const heartFill  = place.liked ? 'fill="currentColor"' : 'fill="none"';

    return `
    <div class="card-hover bg-white/50 backdrop-blur rounded-2xl overflow-hidden shadow-md
                transition-all duration-500 transform hover:translate-y-2 hover:shadow-teal-500 group">
      <div class="relative">
        <img src="${place.image}" alt="${place.title}"
          class="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out">
        <button onclick="toggleLike(${realIndex})"
          class="absolute top-4 right-4 w-10 h-10 bg-black/40 rounded-full flex items-center justify-center cursor-pointer">
          <svg class="w-6 h-6 ${heartColor}" ${heartFill} stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>
      </div>
      <div class="px-4 py-6">
        <h3 class="text-xl font-semibold text-teal-600 mb-2">${place.title}</h3>
        <p class="text-slate-600 mb-2 line-clamp-2 group-hover:text-teal-500 transition-colors duration-300">
          ${place.description}
        </p>
        <div class="flex items-center justify-between">
          <button onclick="showDetail('${place.id}')"
            class="bg-teal-600 hover:bg-teal-400 text-white px-4 py-2 rounded-full font-semibold transition cursor-pointer">
            Learn More
          </button>
          <div class="flex items-center text-slate-500 text-sm gap-1">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"/>
            </svg>
            ${place.views}
          </div>
        </div>
      </div>
    </div>
    `;
  }).join('');
}

// TOGGLE LIKE BUTTON
function toggleLike(index) {
  PLACES[index].liked = !PLACES[index].liked;
  renderCards();
  // Also re-render suggested places if detail view is open
  const detailViewActive = document.getElementById('detailView').classList.contains('active');
  if (detailViewActive) {
    const currentPlaceTitle = document.getElementById('detailTitle').textContent;
    const current = PLACES.find(p => p.title === currentPlaceTitle);
    if (current) renderSuggestedPlaces(current.id);
  }
}

// BACK TO LIST
function showList() {
  document.getElementById('detailView').classList.remove('active');
  document.getElementById('listView').classList.add('active');
  window.scrollTo(0, 0);
}

// STARS 
function buildStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    const color = i <= Math.floor(rating) ? '#facc15' : '#d1d5db';
    html += `<svg width="14" height="14" fill="${color}" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>`;
  }
  html += `<span class="text-white/80 text-xs ml-1">${rating}</span>`;
  return html;
}

const rating = 4.2; // example rating
document.getElementById('ratingContainer').innerHTML = buildStars(rating);

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.remove("opacity-0", "invisible");
        scrollTopBtn.classList.add("opacity-100", "visible");
    } else {
        scrollTopBtn.classList.add("opacity-0", "invisible");
        scrollTopBtn.classList.remove("opacity-100", "visible");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
});

//  Image animation at the bottom of the page
    const images = [
      { src: "https://i.pinimg.com/1200x/e2/7a/d9/e27ad93b1f5a87e863fbe8e724e72624.jpg", alt: "Nature" },
      { src: "https://www.holidify.com/images/cmsuploads/compressed/amazing-ancient-angkor-angkor-wat-276006_20200303182232.jpg", alt: "Beach" },
      { src: "https://i.pinimg.com/736x/c9/f6/8e/c9f68ea11091b60a96c742cabe264c70.jpg", alt: "Forest" },
      { src: "https://i.pinimg.com/736x/40/74/a0/4074a0233da36575994e10b2585f3bc1.jpg", alt: "Kayak" },
      { src: "https://i.pinimg.com/1200x/f0/79/fa/f079fa59828e02bc437517098fadc724.jpg", alt: "Garden" },
      { src: "https://anywhereweroam.com/wp-content/uploads/2024/03/tree-beng-mealea-1024x768.webp", alt: "Island" },
      { src: "https://rootsabroadtravel.com/wp-content/uploads/2024/03/Ultimate-Guide-to-the-Best-Angkor-Wat-Temples-in-Cambodia.jpg", alt: "Sunset" },
      { src: "https://asiatoursdesk.com/wp-content/uploads/2025/03/Sambo-Prey-Kuk-Temple-Kampong-Thom-2.webp", alt: "Waterfall" },
      { src: "https://cdn.getyourguide.com/img/tour/07d7c860a0fb9e7ca8c0e3742e3ada9bd4ab385d77658510148356b11cc26d02.jpeg/145.jpg", alt: "Waterfall" },
      { src: "https://anywhereweroam.com/wp-content/uploads/2024/03/beng-mealea-cambodia-3-768x1024.webp", alt: "Waterfall" },
    ];

    const track = document.getElementById('carouselTrack');
    const outer = document.getElementById('carouselOuter');
    const GAP = 12;
    const SPEED = 0.7;

    function getSlideClasses() {
      const w = window.innerWidth;
      if (w >= 1024) return 'w-[210px] h-[300px]';
      if (w >= 640)  return 'w-[230px] h-[280px]';
      return 'w-[160px] h-[260px]';
    }

    function buildSlides() {
      track.innerHTML = '';
      [...images, ...images, ...images].forEach(img => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide flex-shrink-0 rounded-[10px] overflow-hidden ${getSlideClasses()}`;
        slide.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy" class="w-full h-full object-cover block"/>`;
        track.appendChild(slide);
      });
    }

    buildSlides();

    window.addEventListener('resize', () => {
      const slides = track.querySelectorAll('.carousel-slide');
      const sizeClasses = getSlideClasses();
      slides.forEach(slide => {
        // Remove old size classes and apply new ones
        slide.className = `carousel-slide flex-shrink-0 rounded-[10px] overflow-hidden ${sizeClasses}`;
      });
    });

    function getSlideWidth() {
      const slide = track.querySelector('.carousel-slide');
      return slide ? slide.offsetWidth + GAP : 212;
    }

    function getSetWidth() {
      return getSlideWidth() * images.length;
    }

    let offset = 0;
    let paused = false;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartOffset = 0;

    function tick() {
      if (!isDragging && !paused) {
        offset += SPEED;
      }
      const setWidth = getSetWidth();
      if (offset >= setWidth) offset -= setWidth;
      if (offset < 0) offset += setWidth;
      track.style.transform = `translateX(${-offset}px)`;
      requestAnimationFrame(tick);
    }

    tick();

    // Pause on hover
    outer.addEventListener('mouseenter', () => { paused = true; });
    outer.addEventListener('mouseleave', () => { paused = false; });

    // Mouse drag
    outer.addEventListener('mousedown', e => {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartOffset = offset;
    });
    window.addEventListener('mousemove', e => {
      if (!isDragging) return;
      offset = dragStartOffset + (dragStartX - e.clientX);
    });
    window.addEventListener('mouseup', () => { isDragging = false; });

    // Touch
    let touchStartX = 0, touchStartOffset = 0;
    outer.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
      touchStartOffset = offset;
      paused = true;
    }, { passive: true });
    outer.addEventListener('touchmove', e => {
      offset = touchStartOffset + (touchStartX - e.touches[0].clientX);
    }, { passive: true });
    outer.addEventListener('touchend', () => { paused = false; });