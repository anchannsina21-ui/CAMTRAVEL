// PLACE DATA
const PLACES = [
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
    id: 'preah-khan',
    title: 'Preah Khan Temple',
    description: 'Preah Khan Temple is a sprawling Buddhist complex in Siem Reap, built in 1191 by King Jayavarman VII to honor his father.',
    image: 'https://a.cdn-hotels.com/gdcs/production186/d922/538d59d8-598c-4f93-be62-c1426024d73c.jpg',
    views: '2.2K',
    location: 'Siem Reap Province, Cambodia',
    rating: 4.6,
    openingHours: '7:30 AM – 5:30 PM ',
    ticketPrice: '$37.00 (1-Day Pass)',
    fullDescription: 'Preah Khan Temple is a sprawling Buddhist complex in Siem Reap, built in 1191 by King Jayavarman VII to honor his father. Its name means "Holy Sword," and it famously served as the king\'s temporary residence while Angkor Thom was being constructed. The temple was a major center of learning and worship, once supported by nearly 100,000 attendants and officials. Unlike other ruins, it features a unique two-story structure with rounded columns, a design rarely seen in Khmer architecture. Visitors cannot miss the stunning entrance causeways lined with statues of gods and demons performing the "Churning of the Ocean of Milk". Another highlight is the Hall of Dancers, where walls are adorned with intricate carvings of celestial Apsara dancers. The best time to visit is early in the morning at 7:30 AM to beat the crowds and experience the mystical light filtering through the jungle. For lush green scenery and fewer tourists, the green season from May to October is also ideal. When you arrive, be sure to explore the central sanctuary, where a modern stupa now stands surrounded by crumbling stone corridors.',
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
    description: 'Ta Prohm, located east of Angkor Thom, was built in 1186 by King Jayavarman VII as a Mahayana Buddhist monastery dedicated to his mother.',
    image: 'https://i.pinimg.com/1200x/fd/ff/26/fdff260da81e14e91584ba57a705deac.jpg',
    views: '1.9K',
    location: 'Siem Reap Province, Cambodia',
    rating: 4.7,
    openingHours: '07:30 AM – 5:30 PM',
    ticketPrice: '$37.00 (1-Day Pass)',
    fullDescription: 'Ta Prohm, located east of Angkor Thom, was built in 1186 by King Jayavarman VII as a Mahayana Buddhist monastery dedicated to his mother. Originally named Rajavihara, meaning "royal monastery," it was a sprawling complex that once housed over 12,500 people, including 615 dancers. Unlike other Angkor ruins, Ta Prohm was deliberately left in its "discovered" state by early conservators, preserving its picturesque merger with the jungle. The most captivating feature is the massive silk-cotton and strangler fig trees whose giant roots entwine the stone structures, appearing to consume the ancient walls. The temple is famously known as the "Tomb Raider Temple" after serving as a filming location for the 2001 movie starring Angelina Jolie. Visitors cannot miss the Hall of Dancers with its intricate carvings of celestial apsaras, and the central sanctuary where the main image of wisdom was modeled after the king\'s mother. The "echo chamber," where clapping against your chest produces resonant reverberations, is another unique experience not to be overlooked. The best time to visit is early morning at 7:30 AM when the site opens, offering soft light through the trees and smaller crowds. Alternatively, visiting after 3:30 PM provides golden afternoon light and fewer tour groups. The temple requires an Angkor Pass, with 1-day passes starting at $37, and visitors should dress modestly covering shoulders and knees.',
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
    description: 'Oudong Mountain, officially known as Phnom Preah Reach Troap, served as the royal capital of Cambodia for nearly 250 years, from 1618 until 1866, when the seat of power moved to Phnom Penh.',
    image: 'https://www.pandaw.com/images/blog/blog_80_header.jpg',
    views: '1.8K',
    location: 'Kandal Province, Cambodia',
    rating: 4.4,
    openingHours: 'Daily: Approximately 7:00 AM – 5:00 PM ',
    ticketPrice: 'Free or donation-based',

    fullDescription: 'Oudong Mountain, officially known as Phnom Preah Reach Troap, served as the royal capital of Cambodia for nearly 250 years, from 1618 until 1866, when the seat of power moved to Phnom Penh. It is a sacred hill complex located about 35-40 kilometers northwest of the modern capital, featuring a collection of historic and modern Buddhist stupas that serve as a royal necropolis for sovereigns from several centuries. The site is historically significant as the former residence of King Ang Duong, who constructed canals and pagodas here, and was later extensively damaged during the Khmer Rouge regime in 1977. Visitors can climb over 500 stairs to the summit, where they are rewarded with stunning panoramic views of the Cambodian countryside dotted with rice paddies and villages. One of the most remarkable features is the modern Preah Shakyamuni Chedi, a brilliant white stupa completed in 2002 to house sacred Buddha relics that were ceremoniously transferred from Phnom Penh. Another unmissable highlight is the stone pagoda with a tall pillar featuring four serene Buddha faces, one facing each cardinal direction, which creates an ethereal sight visible through the trees. The mountain is also home to the unique Wat Arthaross, where a Buddha statue faces north instead of the traditional east, tied to a legend about protecting the ancient Khmer kingdom. The best time to visit is during the cool, dry season from November to February, when temperatures are pleasant and the countryside remains green from recent rains. When you arrive, you cannot miss exploring the 16 ornate stupas containing royal remains, climbing to the summit for the breathtaking views, and paying respects at the shrine holding the precious Buddha relics.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl: 'https://maps.app.goo.gl/vEkTeh2xQ6cBrpjU8', 
    gallery: [
      'https://kampatour.com/pic/blog/images/oudong-1.jpg',
      'https://cdn.getyourguide.com/img/location/5a086f1db0512.jpeg/88.jpg',
      'http://topmekongcruises.com/uploads/oudong_10.jpg'
    ]
  },
  {
    id: 'sambor_prey-kuk-temple',
    title: 'Sambor Prey Kuk Temple',
    description: 'Sambor Prei Kuk, often called "Prey Kuk," is an archaeological site in Kampong Thom province, Cambodia, recognized as the former capital of the Chenla Empire from the late 6th to early 7th century.',
    image: 'https://a.cdn-hotels.com/gdcs/production197/d1448/e1313a63-77a5-424f-99fa-d5c19dc9cf74.jpg',
    views: '2.1K',
    location: 'Kampong Thom Provice, Cambodia',
    rating: 4.9,
    openingHours: 'Daily: 7:00 AM – 5:00 PM ',
    ticketPrice: 'Foreign Visitors: Approximately $10 USD',
    fullDescription: 'Sambor Prei Kuk, often called "Prey Kuk," is an archaeological site in Kampong Thom province, Cambodia, recognized as the former capital of the Chenla Empire from the late 6th to early 7th century. It was established by King Isanavarman I as the city of Isanapura, making it one of the region\'s oldest and most significant pre-Angkorian settlements. The site is most interesting for its unique octagonal brick towers, a rare architectural feature in Cambodia that shows influence from ancient Indian temple designs. It comprises over 140 temples scattered across a forested area, grouped into three main complexes: the northern, central, and southern groups. Visitors cannot miss Prasat Chrey, a picturesque temple almost entirely enveloped by the massive roots of ancient trees, and the lion statues guarding Prasat Tao. The best time to visit is during the dry season from November to April, with early morning being ideal for cooler temperatures and beautiful light filtering through the forest. Located about 25 kilometers north of Kampong Thom town, it is easily accessible as a stop between Phnom Penh and Siem Reap. An entrance fee of around $10 supports conservation of this UNESCO World Heritage Site, which was inscribed in 2017. When you arrive, wear modest clothing covering shoulders and knees out of respect, and consider hiring a local guide to fully appreciate the historical context. Unlike the crowded temples of Angkor, Sambor Prei Kuk offers a serene, mystical experience where you can explore ancient ruins in peaceful solitude.',
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
    description: 'The National Museum of Cambodia in Phnom Penh is the country\'s leading historical and archaeological museum, housing the world\'s finest collection of Khmer art.',
    image: 'https://img.fotocommunity.com/national-museum-of-cambodia-01-89d33bd7-58fa-452d-b5d8-c554d265ddda.jpg?height=1080',
    views: '1.7K',
    location: 'Phnom Penh, Cambodia',
    rating: 4.3,
    openingHours: '08:00 AM – 5:00 PM',
    ticketPrice: 'Foreign visitors is typically $10',
    fullDescription: 'The National Museum of Cambodia in Phnom Penh is the country\'s leading historical and archaeological museum, housing the world\'s finest collection of Khmer art. It was officially inaugurated on April 13, 1920, under the patronage of King Sisowath, with its design conceived by French historian and artist George Groslier. The museum\'s building is itself a masterpiece, inspired by traditional Khmer temple architecture and featuring a beautiful, peaceful courtyard with lotus ponds. Its collection includes over 14,000 items, from prehistoric times to the post-Angkorian period, including sculptures, ceramics, and bronzes. Among the unmissable highlights are the powerful statues of Vishnu and Shiva, and a serene bronze meditating Buddha. In 2024, the museum also began displaying repatriated treasures, including a 10th-century statue of the goddess Uma. The best time to visit is during the cool, dry season from November to February, with weekday mornings being ideal for smaller crowds and cooler temperatures. Visitors should not miss the chance to admire the building\'s beautiful red architecture and the peaceful courtyard, which offers a quiet escape from the city. A popular recommendation is to combine a visit here with the nearby Royal Palace, as they are within easy walking distance. The admission fee for foreign visitors is typically $10, and the museum is open daily from 8:00 AM to 5:00 PM.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl: 'https://www.google.com/maps/search/National+Museum+of+Cambodia+Phnom+Penh',
    gallery: [
      'https://leightontravels.com/wp-content/uploads/2021/05/Entrance-gate-National-Museum-of-Cambodia.jpg',
      'https://static.idctravel.com/wp-content/uploads/n/04/National-Museum-of-Cambodia.jpg',
      'https://files.intocambodia.org/content/big/d90c3d245d9ef1e4241eea99388fe489.jpg'
    ]
  },{
    id: 'neak-pean-temple',
    title: 'Neak Pean Temple',
    description: 'Neak Pean is a unique circular temple built on an artificial island in the middle of the Jayatataka Baray reservoir during the late 12th century by King Jayavarman VII.',
    image: 'https://thetravelhackinglife.com/wp-content/uploads/2022/08/Neak-Pean-Siem-Riep-Cambodia.jpg ',
    views: '1.7K',
    location: 'Siem Reap Province, Cambodia',
    rating: 4.3,
    openingHours: 'Daily:7:30 AM – 5:30 PM ',
    ticketPrice: 'Day Pass: $37 USD',
    fullDescription: 'Neak Pean is a unique circular temple built on an artificial island in the middle of the Jayatataka Baray reservoir during the late 12th century by King Jayavarman VII. Its name means "the entwined serpents," referring to the two naga snakes carved around the base of the central sanctuary. The temple was originally designed as a healing place, based on the ancient Hindu belief that bathing in its pools would balance the elements and cure disease. It symbolizes the mythical Lake Anavatapta in the Himalayas, whose waters were believed to cure all illness. The central pool is surrounded by four smaller pools connected by stone conduits carved with the heads of an Elephant, Bull, Horse, and Lion (with a human head representing the east). Visitors cannot miss the statue of the horse Balaha, a form of the bodhisattva Avalokitesvara, which faces the temple and symbolizes saving sailors from drowning. The best time to visit is during the dry season from November to March, with early morning offering peaceful atmosphere and beautiful reflections for photography. During the wet season, the temple is most photogenic when the pools are completely full. The temple is accessed via a wooden causeway across the water, and visitors need an Angkor Pass, with 1-day passes costing around $37.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl: 'https://www.google.com/maps/search/National+Museum+of+Cambodia+Phnom+Penh',
    gallery: [
      'https://media-cdn.tripadvisor.com/media/photo-s/10/bd/49/14/neak-pean-temple-view.jpg',
      'https://www.angkor-temples-in-cambodia.com/uploads/3/0/0/4/30047791/neak-pean-01-600.jpg',
      'https://free-images.com/md/b0f6/neak_pean_temple_temple.jpg'
    ]
  },{
    id: 'koh-ker-temple',
    title: 'Koh Ker Temple',
    description: 'Koh Ker is an ancient temple complex in northern Cambodia that served as the capital of the Khmer Empire for a brief period from 928 to 944 AD under King Jayavarman IV.',
    image: 'https://www.cambodia-roads.fr/wp-content/uploads/2017/06/Koh-Ker.jpg',
    views: '1.7K',
    location: 'Preah Vihear Province, Cambodia',
    rating: 4.3,
    openingHours: 'Daily: 7:00 AM – 6:00 PM',
    ticketPrice: 'Foreign Adults: $15 USD \nChildren (under 12): Free',
    fullDescription: 'Koh Ker is an ancient temple complex in northern Cambodia that served as the capital of the Khmer Empire for a brief period from 928 to 944 AD under King Jayavarman IV. Unlike the more famous Angkorian temples, its centerpiece is a unique seven-tiered pyramid called Prasat Thom, standing 35-36 meters high and resembling a Mayan structure more than typical Khmer architecture. The complex originally contained over 180 sanctuaries scattered across 80 square kilometers, though only dozens remain today. The site is most fascinating for its raw, imposing atmosphere focused on Shaiva power, with the pyramid once crowned by a massive linga representing Shiva as the god of kings. Visitors cannot miss Prasat Kraham, the "red temple" made of brick with intricate carvings, and the mysterious artificial mound known as the Tomb of the White Elephant King. The best time to visit is during the cool, dry season from November to February, arriving early morning to beat the heat and crowds. The temple requires a separate entrance fee of approximately $15, as the Angkor Pass is not valid here, and is located about 120 kilometers from Siem Reap via a 2.5-hour drive. When you arrive, do not miss climbing the steep pyramid for panoramic jungle views and exploring the smaller temples where massive tree roots embrace crumbling stones. Dress modestly covering shoulders and knees, and bring plenty of water as the site is remote with limited facilities.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl: 'https://maps.app.goo.gl/wv6w4aFMKsZxmmrk9',
    gallery: [
      'https://angkorwatexplorer.com/wp-content/uploads/2024/04/koh-ker-temple-cambodia-4.jpg',
      'https://i.pinimg.com/736x/c2/c1/25/c2c125631fad6864fa2d494fc750d5ba.jpg',
      'https://www.areacambodia.com/wp-content/uploads/2023/09/The-UNESCOs-World-Heritage-Site-designation-was-given-to-the-Koh-Ker-Temple-also-known-as-the-Huge-Pyramid-of-Cambodia.jpg'
    ]
  },{
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
  },{
    id: 'banteay-srei',
    title: 'Banteay Srei',
    description: 'Banteay Srei is a 10th-century Hindu temple from 967 AD, dedicated to Shiva, and is unique for being built not by a monarch but by a Brahmin counselor named Yajnavaraha.',
    image: 'https://www.angkortourguides.com/uploads/images/Banteay%20srei%20t1.jpg',
    views: '2.1K',
    location: 'Siem Reap Province, Cambodia',
    rating: 4.9,
    openingHours: 'Daily: 7:30 AM – 5:30 PM ',
    ticketPrice: 'Day Pass: $37 USD',
    fullDescription: 'Banteay Srei is a 10th-century Hindu temple from 967 AD, dedicated to Shiva, and is unique for being built not by a monarch but by a Brahmin counselor named Yajnavaraha. It is constructed of rare pink sandstone, which allows for the intricate decorative carvings that cover almost every surface. The temple is famous for its miniature scale and is widely praised as the "jewel of Khmer art". Visitors cannot miss the stunning pediments depicting scenes from the Ramayana and Mahabharata, as well as the elegant devata goddess carvings. The best time to visit is during the dry season from November to March, arriving early in the morning to see the sandstone glow in the soft light. The temple is located about 25 kilometers northeast of Siem Reap and requires an Angkor Pass for entry. Its detailed reliefs are considered the pinnacle of Angkorian artistry, with carvings so fine they were once thought to be from a later period. Banteay Srei was also the site of a famous art theft in 1923 by André Malraux, which spurred greater conservation efforts. When you arrive, dress modestly covering shoulders and knees, as the site is strictly monitored. Do not miss the opportunity to study the macro details of the carvings, which tell stories of Hindu mythology with incredible precision.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl: 'https://maps.app.goo.gl/EwQqzrFnjNxCZu489',
    gallery: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTgCPT6G7CjwDHI0vC9w9mIx7QJVjzMNjPMUxjDvlhKPjKXoXnDoQb-b2LfR0jcgtetFk0UnJciXinw_qZ8YJ2k9esrpSr2NzSQt83UfXWntWLpfFnnkBsuQ2yz0vtZ1FY_V0cDjJQ1LEB-ZQyDMqylNARPYVTonCz5Rb_330PbMQmZCbpjZkGdXS-/s1600-rw/Banteay%20Srei%20Temple.jpg',
      'https://www.siemreap.net/wp-content/uploads/2016/08/banteay-srei-temple.jpg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRD3j-Tx-beLVEhDg7NXlq2u7S5RLY5Z_x_3WzaAOe3TmLT7CYmYNiRA_LBgXobzxdbhEBK9Ww8tYYg7t4uEPJpB3SqObl74XZ6B7FZt3XUosxUMwTZl2bQnVzgRxGw78pAmhCcf5TlxI7vf2P_g-rJemD5NFQxWFt1rmsAtSJ2thG4Ane74iLrtjs/s600-rw/1.jpg'
    ]
  },
  {
    id: 'phnom-bakheng-temple',
    title: 'Phnom Bakheng Temple',
    description: 'Phnom Bakheng is a Hindu temple built in the late 9th century by King Yasovarman I, shortly after he moved the Khmer capital to the Angkor region.',
    image: 'https://i.pinimg.com/1200x/a9/44/e7/a944e7e932f66976bb1e9b075394aee9.jpg',
    views: '1.7K',
    location: 'Siem Reap Province, Cambodia',
    rating: 4.3,
    openingHours: 'Daily: 5:00 AM – 7:00 PM',
    ticketPrice: 'Day Pass: $37 USD ',
    fullDescription: 'Phnom Bakheng is a Hindu temple built in the late 9th century by King Yasovarman I, shortly after he moved the Khmer capital to the Angkor region. It was constructed atop a 65-meter hill, making it the dominant structure in his new capital city, Yasodharapura, and predates Angkor Wat by over two centuries. The temple is designed as a symbolic representation of Mount Meru, home of the gods, with seven levels representing the seven heavens. Its most fascinating feature is its architectural cosmology, originally boasting 108 small towers that symbolize the four lunar phases and function as an astronomical calendar in stone. The best time to visit is during the cool, dry season from November to February, with sunset being the most popular time for its world-famous views. Visitors cannot miss the panoramic view from the summit, where you can see the distant spires of Angkor Wat emerging from the jungle and, on clear days, the Tonle Sap Lake. To witness this sunset, you must arrive early (around 4:00 PM), as access to the temple is limited to 300 people at a time to protect the monument. The climb involves a 15-20 minute hike up the hill and steep, uneven steps, so sturdy footwear is essential. You will need a valid Angkor Pass for entry, and modest dress covering shoulders and knees is required to show respect at this sacred site.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl: 'https://maps.app.goo.gl/EoqWG4JW3GmR3HuD7',
    gallery: [
      'https://i.pinimg.com/1200x/5c/89/13/5c89133f587383abecbb39eff48eb4c8.jpg',
      'https://a.cdn-hotels.com/gdcs/production172/d1845/47566ff8-025d-497b-9ffa-e2fa7f610bc3.jpg',
      'https://i.pinimg.com/1200x/5c/89/13/5c89133f587383abecbb39eff48eb4c8.jpg'
    ]
  },{
    id: 'pre-rup-temple',
    title: 'Pre Rup Temple',
    description: 'Pre Rup is a Hindu temple built in 961 or 962 AD by King Rajendravarman as his state temple, marking the return of the Khmer capital to Angkor after a brief period at Koh Ker.',
    image: 'https://static.wixstatic.com/media/86e751_9ce559f70e8647ba923c1aba811c05a5~mv2.jpg/v1/fill/w_2000,h_1335,al_c,q_90/IMG_3212.JPG',
    views: '1.9K',
    location: 'Siem Reap Province, Cambodia',
    rating: 4.3,
    openingHours: 'Official Hours: 6:00 AM – 7:00 PM',
    ticketPrice: 'Day Pass: $37 USD',
    fullDescription: 'Pre Rup is a Hindu temple built in 961 or 962 AD by King Rajendravarman as his state temple, marking the return of the Khmer capital to Angkor after a brief period at Koh Ker. Its name means "turn the body" in Khmer, reflecting the local belief that cremation ceremonies were once conducted here to allow the soul to transform and reincarnate. The temple is most fascinating for its unique temple-mountain design, featuring three steep tiers leading to five brick towers arranged in a quincunx pattern symbolizing Mount Meru, home of the Hindu gods. Constructed primarily of brick, laterite, and sandstone, its extensive use of red brick gives the structure a warm, reddish glow that intensifies during sunrise and sunset. Visitors cannot miss climbing to the top platform for sweeping panoramic views of the surrounding countryside, including the distant spires of Phnom Bok and Phnom Kulen. The stone "cistern" near the eastern entrance, once thought to be for cremation rituals, is now believed by scholars to have been the base for a bronze statue of Nandi, the sacred bull . The best time to visit is during sunrise or sunset, when the soft light enhances the temple\'s crimson tones and creates a magical atmosphere for photography. For pleasant weather, plan your visit during the dry season from November to March, and arrive early morning or late afternoon to avoid the heat and crowds. The temple requires an Angkor Pass for entry, with 1-day passes starting at $37, and the steep stairs demand careful climbing, especially when descending in fading light. When you arrive, remember to dress modestly covering shoulders and knees, and allow about 45 to 60 minutes to fully explore the ruins and enjoy the elevated views.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl: 'https://maps.app.goo.gl/FRaeuUZiQ6Se6Azd8',
    gallery: [
      'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_650/v1620066657/Top-Angkor-Temples-Must-See-Pre-Rup/Top-Angkor-Temples-Must-See-Pre-Rup.jpg',
      'https://static.wixstatic.com/media/86e751_9ce559f70e8647ba923c1aba811c05a5~mv2.jpg/v1/fill/w_2000,h_1335,al_c,q_90/IMG_3212.JPG',
      'https://img.traveltriangle.com/blog/wp-content/uploads/2024/05/About-Pre-Rup-Temple-in-Cambodia.jpg'
    ]
  },
  {
    id: 'kravan-temple',
    title: 'Kravan Temple',
    description: 'Kravan Temple is a small 10th-century Hindu temple built in 921 AD during the reign of King Harshavarman I, though it was commissioned by a high-ranking court official rather than a monarch.',
    image: 'https://www.cambodia-roads.fr/wp-content/uploads/2017/06/Prasat-Kravan1.jpg',
    views: '1.7K',
    location: 'Siem Reap Province, Cambodia',
    rating: 4.3,
    openingHours: 'Daily: 7:30 AM – 5:30 PM',
    ticketPrice: 'Day Pass: $37 USD',
    fullDescription: 'Kravan Temple is a small 10th-century Hindu temple built in 921 AD during the reign of King Harshavarman I, though it was commissioned by a high-ranking court official rather than a monarch. Located within the Angkor Archaeological Park, it consists of five reddish brick towers arranged in a straight line on a single platform, all facing east. The temple is most fascinating for its rare interior brick bas-reliefs, which are carved directly into the walls rather than on sandstone—a technique almost unique in Khmer architecture. Inside the central tower, visitors can see stunning carvings of Vishnu riding his mount Garuda, an eight-armed Vishnu surrounded by devotees, and Vishnu as the dwarf Vamana taking three great steps. The northern tower features beautiful reliefs of Lakshmi, Vishnu\'s consort, holding lotuses. The best time to visit is early morning between 7:30 and 10:00 AM, when the east-facing doors allow soft light to illuminate the interior carvings. The temple requires an Angkor Pass and is a quick stop of about 20-30 minutes, perfectly situated on the Small Circuit route near Sra Srang reservoir. Visitors cannot miss looking for modern restoration bricks marked "CA" (Conservation Angkor), which show where the temple was meticulously rebuilt in the 1960s. Also unmissable are the sandstone lintels above the doorways, particularly the southern tower\'s depiction of Vishnu on Garuda. When you arrive, remember to dress modestly covering shoulders and knees, and bring a flashlight to better appreciate the detailed carvings in the dim interior.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl: 'https://maps.app.goo.gl/ShRcLQxLuGzjtjVaA',
    gallery: [
      'https://www.renown-travel.com/images/prasat-kravan-l.jpg',
      'https://mysiemreaptours.com/wp-content/uploads/2023/07/Unraveling-the-Secrets-of-Prasat-Kravan-Temple.jpg',
      'https://visitlocaltravel.com/blog/wp-content/uploads/2024/05/Prasat-Kravan-Temple-2.png'
    ]
  },
  {
    id: 'banteay-kdei-temple',
    title: 'Banteay Kdei Temple',
    description: 'Banteay Kdei is a Buddhist temple built in the late 12th to early 13th century by King Jayavarman VII, located in the Angkor Archaeological Park.',
    image: 'https://i.pinimg.com/1200x/e5/f4/ca/e5f4ca4ce3f730e4604194dae24e53fd.jpg',
    views: '2.7K',
    location: 'Siem Reap Province, Cambodia',
    rating: 4.3,
    openingHours: 'Daily:7:30 AM – 5:30 PM',
    ticketPrice: 'Day Pass: $37 USD ',
    fullDescription: 'Banteay Kdei is a Buddhist temple built in the late 12th to early 13th century by King Jayavarman VII, located in the Angkor Archaeological Park. Its name means "Citadel of Chambers" or "Citadel of Monks\' Cells," reflecting its original use as a Buddhist monastery. The temple was constructed in the Bayon architectural style, similar to Ta Prohm and Preah Khan, though smaller and less complex. Its most fascinating feature is the discovery in 2001 of 274 broken Buddha statues buried in a cache, now displayed at the Preah Norodom Sihanouk Angkor Museum. The east entrance features a cruciform gopura adorned with smiling Lokesvara faces and garuda carvings, characteristic of the Bayon period. Inside, the Hall of Dancers displays intricate carvings of apsaras on square columns, while the central sanctuary still bears traces of original sculpture. The best time to visit is during the dry season from November to March, arriving early morning or late afternoon for softer light and fewer crowds. Visitors cannot miss walking through the temple\'s long corridors and galleries to appreciate the detailed carvings, and exploring the peaceful atmosphere that makes it a serene alternative to busier temples. Also unmissable is the view from the platform overlooking Srah Srang, the royal bathing pool directly across from the temple, where you can see the water reflecting the sky. The temple requires an Angkor Pass for entry, and visitors should dress modestly covering shoulders and knees, allowing about 40 minutes to an hour for exploration.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl: 'https://maps.app.goo.gl/DMz7DNhvmjk8PJoX6',
    gallery: [
      'https://img.freepik.com/free-photo/banteay-kdei-temple-angkor-wat-siem-reap-cambodia_255175-1777.jpg?size=626&ext=jpg',
      'https://cdn.pixabay.com/photo/2015/09/09/10/40/banteay-kdei-931324_1280.jpg',
      'https://leightontravels.com/wp-content/uploads/2020/07/Banteay-Kdei-Temple-Siem-Reap.jpeg'
    ]
  },
  {
    id: 'tuol-sleng-genocide-museum',
    title: 'Tuol Sleng Genocide Museum',
    description: 'The Tuol Sleng Genocide Museum in Phnom Penh is a former high school that was converted into Security Prison 21 (S-21), the most notorious torture and interrogation center of the Khmer Rouge regime from 1975 to 1979.',
    image: 'https://www.passionindochinatravel.com/uploads/attraction-Tuol%20Sleng%20Genocide%20Museum%204.jpg',
    views: '2.5K',
    location: 'Phnom Penh, Cambodia',
    rating: 4.3,
    openingHours: 'Daily: 8:00 AM – 5:00 PM ',
    ticketPrice: 'Adults (18 and older): $5 USD . Children (10–17 years): $3 USD',
    fullDescription: 'The Tuol Sleng Genocide Museum in Phnom Penh is a former high school that was converted into Security Prison 21 (S-21), the most notorious torture and interrogation center of the Khmer Rouge regime from 1975 to 1979. It was established by the Khmer Rouge after their capture of Phnom Penh, transforming classrooms into tiny prison cells and torture chambers surrounded by barbed wire. Of the estimated 15,000 to 20,000 people imprisoned here, only 12 survived, with the rest being transported to the Choeung Ek Killing Fields for execution. The museum\'s most haunting exhibits are the thousands of black-and-white mugshot photographs of prisoners taken upon arrival, now displayed on walls throughout the buildings. Visitors cannot miss Building B, which contains row after row of these haunting portraits, and Building C with its tiny brick cells where prisoners were chained to the floor. The torture devices on display in Building D serve as grim evidence of the methods used to extract confessions. The best time to visit is early morning at 8:00 AM when it opens, allowing you to avoid crowds and the intense afternoon heat while processing the emotional weight of the experience. An audio guide is essential for understanding survivor stories and historical context, with audio tours available for an additional fee. Visitors must dress modestly covering shoulders and knees, maintain a quiet and respectful demeanor, and remember that this is a memorial site, not a tourist attraction.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl: 'https://maps.app.goo.gl/WjF5LCPAoFLRW49j7',
    gallery: [
      'https://cdn.britannica.com/20/255620-050-CF79977D/phnom-penh-cambodia-tuol-sleng-genocide-museum.jpg ',
      'https://i.pinimg.com/1200x/f6/0d/a7/f60da7413a33c2176f910f0e6c46aee4.jpg',
      'https://visitlocaltravel.com/blog/wp-content/uploads/2023/12/Tuol-Sleng-Genocide-Museum.webp'
    ]
  },
  {
    id: 'choeung-keong-killing-fields-museum',
    title: 'Choeung Keong Killing Fields Museum',
    description: 'Choeung Ek, also known as the Killing Fields, is a former orchard about 17 kilometers south of Phnom Penh that was used as an execution site by the Khmer Rouge regime from 1975 to 1979.',
    image: 'https://photos.smugmug.com/Cambodia/i-pS9tpjD/0/XL/file-2-XL.jpg',
    views: '1.7K',
    location: 'Phnom Penh, Cambodia',
    rating: 4.3,
    openingHours: 'Daily: 7:30 AM – 5:30 PM',
    ticketPrice: 'International Visitors: $6 USD',
    fullDescription: 'Choeung Ek, also known as the Killing Fields, is a former orchard about 17 kilometers south of Phnom Penh that was used as an execution site by the Khmer Rouge regime from 1975 to 1979. It served as the primary extermination center connected to the infamous Tuol Sleng prison (S-21), where prisoners were transported to be killed and buried in mass graves. After the regime\'s fall, the bodies of 8,895 victims were exhumed from the site, many of whom had been bludgeoned with pickaxes to conserve bullets. The most unmissable feature is the 62-meter-tall Buddhist stupa, whose acrylic glass sides display over 5,000 human skulls arranged by age and gender, some still showing evidence of violent deaths. Visitors cannot miss the "killing tree," where loudspeakers once played propaganda music to drown out victims\' screams, and the numerous mass grave depressions where human bones and fragments still surface during rains. The best time to visit is early morning when the site opens at 7:30 AM, allowing for cooler temperatures and a more solemn, less crowded experience. An audio guide included with the $6 admission fee is essential, providing survivor testimonies and historical context that transforms the peaceful grounds into a deeply moving memorial. Combined visits with Tuol Sleng are recommended to understand the full scope of the tragedy, with tuk-tuk drivers easily arranging half-day tours. A visit here is a somber but essential experience to comprehend Cambodia\'s dark past and honor the memory of over 1.7 million people who perished under the Khmer Rouge.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl: 'https://maps.app.goo.gl/Wtr5bqaovZnfGwbm7',
    gallery: [
      'https://triptins.com/wp-content/uploads/2018/03/Choeung-Ek-Killing-Fields-1-1024x768.jpeg ',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/28/fe/c4/caption.jpg?w=1400&h=800&s=1',
      'https://merrytravelasia.com/wp-content/uploads/2024/06/Cheung-Ek-1-2.jpg'
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
                transition-all duration-500 transform hover:translate-y-2 hover:shadow-teal-500 group
                animate-fadeUp" style="animation-delay:${index * 40}ms">
      <div class="relative">
        <img src="${place.image}" alt="${place.title}"
          class="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out">
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
        <h3 class="text-xl font-semibold text-teal-600 mb-3 line-clamp-1">${place.title}</h3>
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
    // Currently showing all​ to collapse back to initial
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

  // Map iframe view of map
  const mapContainer = document.getElementById('detailMapContainer');
  mapContainer.innerHTML = `
    <iframe 
      src="${place.mapEmbed}" 
      width="100%" 
      height="100%" 
      style="border:0;" 
      allowfullscreen 
      loading="lazy">
    </iframe>
  `;

  // Set Google Maps link URL
  document.getElementById('detailMapLink').href = place.mapUrl;

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
          class="absolute top-4 right-4 w-10 h-10 bg-white/40 hover:bg-black/30 rounded-full flex items-center justify-center cursor-pointer">
          <svg class="w-6 h-6 ${heartColor}" ${heartFill} stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>
      </div>
      <div class="px-4 py-6">
        <h3 class="text-xl font-semibold text-teal-600 mb-2 line-clamp-1">${place.title}</h3>
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
      if (w >= 1024) return 'w-[230px] h-[320px]';
      if (w >= 640)  return 'w-[220px] h-[300px]';
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
