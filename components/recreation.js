// PLACE DATA
const PLACES = [
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
    id: 'kirirom-national-park',
    title: 'Kirirom National Park',
    description: 'Kirirom National Park is a vast mountain playground famous.......',
    image: 'https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/484926758_675767951779786_565974273015733342_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=JmtbF4nL7xcQ7kNvwEiepPt&_nc_oc=Adkww20j_aHxdioAlGbarqZ5LL3kROne4cf_Dy781lJ2kok9FwmYhTVYYOymd819FzU&_nc_zt=23&_nc_ht=scontent.fpnh2-2.fna&_nc_gid=D915x-6tBLwXDn2p3mXU_A&_nc_ss=8&oh=00_AfwCNL7nUJNS7QTnW9_cAGcLmMhuxRg3aDQ2c-W1_mnDvA&oe=69B339DB',

    views: '2.2K',
    location: 'Kampong Speu, Cambodia',
    rating: 4.5,
    openingHours: 'open daily – 24h',
    ticketPrice: '5$-30',
    fullDescription: 'Kirirom National Park is a vast mountain playground famous for its unique pine forests, refreshing waterfalls, and cool climate that offers a peaceful escape from the city. Families can enjoy recreational activities like mountain biking through nature trails, swimming in the Chambok Waterfall, or visiting the Kirirom Pine Resort to see giant dinosaur statues. This scenic retreat is perfect for weekend picnics and camping under the shade of evergreen trees.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl:'https://maps.app.goo.gl/DTJboYau687u8Qnz5',
    gallery: [
      'https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/484539207_675768005113114_5995738104456781601_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8ngTxDpyXYQQ7kNvwHD711O&_nc_oc=Adk8sGlJHJowVwRMmxlZT-ECfx2jtD22D7v551797TJlvd2-nPwSjxdGK0SP7sqahwQ&_nc_zt=23&_nc_ht=scontent.fpnh2-2.fna&_nc_gid=e2q9jcGFyopElNq23qKedw&_nc_ss=8&oh=00_AfwnQTGtpT6gThdZ6DjAg0X6h18BjsDCfSqgM7lY92N_UA&oe=69B31BBF',
      'https://phnompenhtaxiservice.com/wp-content/uploads/2022/05/Kirirom-camp-view.jpg',
      'https://cambodia-travelpartner.com/accommodations/romhaey-kirirom-resort/'
    ]
  },
  {
    id: 'phum rottanak resort ',
    title: 'Phum Rottanak Resort ',
    description: 'Phum Rottanak Resort is a beautiful hill-top destination in Sen Monorom...',
    image: 'https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/558701063_122156616710801203_7793890950592694297_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=hFZt38v2TwsQ7kNvwHENTVu&_nc_oc=AdlXnIf97J89ZmQRoP4FQ3FBQp-ICyGoNPPO70mNnvNhFpd1NncBBOUhLqAbcYW5fQw&_nc_zt=23&_nc_ht=scontent.fpnh2-2.fna&_nc_gid=dgjSAosXDW5zY9OjqiN_wA&_nc_ss=8&oh=00_Afx6-4YrGxVqrF_nQbDFJLOF4ijnRrJd_TMc5R9NDdoqYg&oe=69B338EF',
    views: '2.2K',
    location: 'Mondulkiri, Cambodia',
    rating: 4.8,
    openingHours: 'open daily – 24h',
    ticketPrice: '$3',
    fullDescription: 'Phum Rottanak Resort is a beautiful hill-top destination in Sen Monorom that is famous for its 360-degree panoramic views of Mondulkiri’s rolling "Sea Forest" hills. It features a large outdoor swimming pool and a scenic café where day-trippers can enjoy coffee while watching the sunset over the highlands. It is a perfect place for families and travelers because they can stay in luxurious Bungalows, enjoy local Cambodian cuisine at the on-site restaurant, and explore nearby nature spots like the Bousra waterfall. ',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl:'https://maps.app.goo.gl/TrhH7BTvGRTaq8NH8',
    gallery: [
      'https://morningpostkh.com/storage/news/February2025/230.jpg',
      'https://i.ytimg.com/vi/7Lh0SFOEN5U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCovJ-WTAxbKlNMtWgUYa9WnCxD6A',
      'https://scontent.fpnh2-3.fna.fbcdn.net/v/t39.30808-6/558986427_833448419216383_241267659783165414_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=VpLd7n1AbYgQ7kNvwEoCLNU&_nc_oc=AdmQLeo2-euh0GHchm5TJ-Algue9Xn4JSmZfxoSq9RdRwaBLo2Y1vGZ5mTsyeGdEJpk&_nc_zt=23&_nc_ht=scontent.fpnh2-3.fna&_nc_gid=XeRq6Y_KUYp1tiBEWdkJmA&_nc_ss=8&oh=00_Afw6fYqAkrVryUZoMSGRQzCCEOqMavxPV3cYkY_IxWPslw&oe=69B323B1'
    ]
  },
  {
    id: 'koh apijun',
    title: 'Koh Apijun',
    description: 'Koh Apijun Resort offers luxurious overwater villas and on-land.........',
    image: 'https://images.trvl-media.com/lodging/92000000/91620000/91616000/91615951/ddc3de1b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    views: '2.2K',
    location: 'Preah Sihanouk, Cambodia',
    rating: 4.6,
    openingHours: 'open daily – 24h',
    ticketPrice: 'Various prices/accommodations available',
    fullDescription: 'Koh Apikjun Resort offers luxurious overwater villas and on-land accommodations for a peaceful escape. Guests can enjoy private pools in some villas and dining at an overwater restaurant. Activities include snorkeling, kayaking, and relaxing by the main pool or beach. It is  an upscale retreat in a beautiful natural setting. The resort glass-floored restaurant provides a unique window into the vibrant marine life below while you savor world-class cuisine. Beyond the shore, guests can embark on guided boat excursions to discover hidden lagoons or visit the nearby local fishing village for a taste of authentic island culture.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl:'https://maps.app.goo.gl/C8AXxd4qwcnjxDkWA',
    gallery: [
      'https://cdn.kohapikjunresort.com/wp-content/uploads/2023/05/Apikjun-Villa-1.jpg?strip=all&quality=90',
      'https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/488451543_657079487233367_5975779170602099642_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=uNZjCq9LwDwQ7kNvwHjKihb&_nc_oc=AdnaG9jLjuyotBdM-vNqCfr2GXQVPCGqygsmvGwK2YDWCVgHK7a4F6HNYa3nZrQK5Qc&_nc_zt=23&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=GqJQ_0azBpMiQTPb4sgHNg&_nc_ss=8&oh=00_AfzC7IW7on5uytblUufHi_hQPK25W5dHmKCMtJtkbYtkSg&oe=69B32E1A',
      'https://images.trvl-media.com/lodging/92000000/91620000/91616000/91615951/8f8c0239.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill'
    ]
  },
  {
    id: 'cultural village',
    title: 'Cultural Village',
    description: 'Cambodia Cultural Village is a massive 21-hectare theme park....',
    image: 'https://media.lanternvibe.com/2025/05/traditional-khmer-house-cultural-village-siem-reap.jpg',
    views: '1.9K',
    location: 'Siem Reap, Cambodia',
    rating: 4.7,
    openingHours: 'open daily – 24h',
    ticketPrice: '$5-10',
    fullDescription: 'Cambodia Cultural Village is a massive 21-hectare theme park in Siem Reap that is famous for showcasing the diverse customs and lifestyles of Cambodia 19 ethnic groups in a single location. It features 11 unique model villages, life-sized wax statues of historical figures, and miniature replicas of iconic landmarks like the Royal. It is a perfect place for families because you can enjoy traditional performences every 20 minutes, including Apsara dancing, acrobatics, and a fun re-enactment of a Khmer wedding Ceremony.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl:'https://maps.app.goo.gl/BiehKMZQyeSnYBgp9',
    gallery: [
      'https://s9.kh1.co/e8/e8a25865a7b9f307b2a95bcec4d69e17a1ff8626.jpg',
      'https://cdn.cc-times.com/cc-times.com/images/32281/x_large/%E6%B8%B8%E5%AE%A2%E5%9C%A8%E5%9B%AD%E5%86%85%E6%B8%B8%E8%A7%88%E3%80%82.jpg?1597800082',
      'https://image.freshnewsasia.com/2020/id-011/fn-2020-10-11-16-12-37-2.jpg'
    ]
  },
  {
    id: 'Kampot Seahorse',
    title: 'Kampot Seahorse',
    description: 'Seahorse is a recreational spot in Kampot offering relaxing outdoor..',
    image: 'https://img.freepik.com/premium-photo/seahorse-kampot-cambodia-new-iconic-province-amazing-cambodia_720542-139.jpg',
    views: '1.8K',
    location: 'Kampot, Cambodia',
    rating: 4.4,
    openingHours: 'open daily – 24h',
    ticketPrice: 'free, only accommodations prices',

    fullDescription: 'Seahorses is a recreational spot in Kampot offering relaxing outdoor spaces, riverside views, and green surroundings. Visitors can enjoy picnics, casual walks, and water-related activities, making it a great destination for families, friends, and nature lovers. Optional spending applies for snacks, drinks, or activity rentals. The centerpiece of the area is the iconic 8-meter-tall Seahorse Statue, affectionately known as "Singapot," which spouts water into the river and illuminates with colorful lights at night. This vibrant landmark has quickly become the town, most popular photo spot, offering a lively atmosphere for evening strolls and musical water shows. ',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl:'https://maps.app.goo.gl/kXFcRzwbM9KGvrK29',
    gallery: [
      'https://www.khmertimeskh.com/wp-content/uploads/2024/04/Kampot-seahorse.jpg',
      'https://www.asiaone.com/sites/default/files/styles/article_top_image/public/original_images/Apr2024/140424_kampot_ig.jpg?itok=nFu0VoBZ',
      'https://www.khmertimeskh.com/wp-content/uploads/2024/04/Sea-horse.jpg'
    ]
  },
  {
    id: 'Mlech Dam',
    title: 'Mlech Dam',
    description: 'Seahorses is a recreational spot in Kampot offering relaxing........ ',
    image: 'https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/476095856_642540564877284_8139866818868242689_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=dy2uJhrURJIQ7kNvwHqCumV&_nc_oc=Adk2PHZuEzAqvH2IqRCDZ_YUqjedknSiEHYhDFNZyNAoJxJOU8TndtVYuf-Rzkj8HmY&_nc_zt=23&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=9q1dBXaHNIPUnmpbxKOlMQ&_nc_ss=8&oh=00_AfwbP6gawAWI6J0_sEQTJ-1VE8G0FLgpn-njpE5hSTpYxQ&oe=69B37084',
    views: '2.1K',
    location: 'Kampot, Cambodia',
    rating: 4.9,
    openingHours: 'open daily – 24h',
    ticketPrice: 'free entry',
    fullDescription: 'MLECH is a peaceful recreational spot in Kampot where visitors can enjoy fresh air, green scenery, and outdoor relaxation. It is ideal for picnics, family outings, and leisure activities, with optional costs only for food, drinks, or rented facilities. As a developing eco-adventure hub, it offers diverse activities such as kayaking, archery, and mini-moto biking against a backdrop of the Elephant Mountains. For those seeking an immersive experience, the site also features unique stilt-cabin homestays and dedicated camping areas that allow guests to connect deeply with the authentic Cambodian countryside.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl:'https://maps.app.goo.gl/e666P9ef1gd6p5Lr6',
    gallery: [
      'https://www.visitkampot.info/__asset/img/gallery_generate/593_642699751bc5f.jpg',
      'https://ezstatic1.ezweb.online/ezweb_2157/soem-panha/tourism/kampot/t4.1.jpg',
      'https://oss5.tnaot.com/tnaot/image/2022/05/16/d7851a19018d4fae8d2894134deaa2b6.png'
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
      'https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/480876082_614598007946026_8169429304453253067_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_6FaZhMntp4Q7kNvwFgG6fp&_nc_oc=AdlwoNAiO29sKJme8mblJbcLvytn-UeX6Fcj678H4rsq3DpMtKCZLNutMxfIAWtexjQ&_nc_zt=23&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=MeY9YsiPLHXwCBqpBEMEqg&_nc_ss=8&oh=00_Afzzu-YGQNuOwZtYLNEANv1O7jgcfnDY9piQudpvbFPbLQ&oe=69B34AC3',
      'https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/487203632_3532386976895385_6597836432771496749_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=dGJSZudLt5wQ7kNvwHnKQb_&_nc_oc=AdkCSEAsawIAUmJ9pgNckzy547448FkR7XmT2KjCfA8FZ4-rm1tSYAetDW5Hs4iHnyc&_nc_zt=23&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=l-jCQBjG_0bdYO3dflLDaQ&_nc_ss=8&oh=00_AfzFsf6YAi88eDK7_boBS-ov5FgwPx3vYjTBrulNz-LasQ&oe=69B37EA7',
      'https://scontent.fpnh24-1.fna.fbcdn.net/v/t1.6435-9/66827488_1558044550994451_779482958737178624_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=fi8_kiZLYaAQ7kNvwEyPa_O&_nc_oc=AdkJ1J8Lym401gw7TpU7bG3_mSEtBjhcCJ-K8ZoVTF-vl3LcjowPbSBNiK3jxEk4W_k&_nc_zt=23&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=BrgxdfKZCrNce_68nubz7A&_nc_ss=8&oh=00_AfxoHckaiGiMIXxZbg_N_D4tdTRBhxZMsR4Yyh2_RVS9EA&oe=69D50697'
    ]
  },{
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
      'https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/484530948_664665019275077_6555629123626877916_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=kOyT3uGT2IkQ7kNvwEQ-LDD&_nc_oc=AdmnZpIWvxzn9HxEMETc7_ZcsyqPGSEpkZ91s9LE-EAZFyhvgVVHEtbrO_sq7kHUUfA&_nc_zt=23&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=q02htEhgnGW20dvtl_VHRg&_nc_ss=8&oh=00_AfyPGG32PGZeNCjSEfNzzLFb8RPvW4ysnpOo1aohr_zjDw&oe=69B34CE1',
      'https://d34vm3j4h7f97z.cloudfront.net/original/4X/3/3/f/33f33fd4cfcb103742878ebd0afe355b14293860.jpeg',
      'https://www.khmertimeskh.com/wp-content/uploads/2023/11/Kampot-and-Preah-Sihanouk-look-forward-to-Water-Festival-tourist-bonanza.jpg'
    ]
  },{
    id: 'River Park Kampot',
    title: 'River Park Kampot',
    description: 'River Park is a man-made resort offering various facilities for......',
    image: 'https://bounciasports.com/wp-content/uploads/2024/11/bouncia-100-capacity-water-park-cambodia-min-67413f4530e3c.webp',
    views: '2.1K',
    location: 'Kampot, Cambodia',
    rating: 4.9,
    openingHours: 'open daily – 24h',
    ticketPrice: '$5-10',
    fullDescription: 'iRiver Park is a man-made resort offering various facilities for family getaways and adventure seekers. Visitors can enjoy swimming in the river, kayaking, taking boat tours, or trying the thrilling "rainbow slide" and zipline. The park also features floating bungalows, a playground, and an on-site restaurant, making it an accessible countryside escape with mountain views. Adding to the excitement, the resort is home to Cambodia, first "rainbow slide," where visitors can slide over 50 meters on a tube into the river area, providing a unique aquatic thrill found nowhere else in the country. ',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl:'https://maps.app.goo.gl/n9Zru9Cpx3jB87Ns9',
    gallery: [
      'https://thmeythmey25.com/img/article/15-02-2021/1613377386.jpg',
      'https://www.visitkampot.info/__asset/img/gallery/60c4d0acf1f45.jpg',
      'https://thmeythmey25.com/img/article/26-01-2021/1611654735.JPEG'
    ]
  },{
    
    id: 'Water Park',
    title: 'Water Park',
    description: 'Water Park Cambodia offers an exciting escape featuring a large...',
    image: 'https://wakeparkcambodia.com/wp-content/uploads/2024/05/aqualand-1.webp',
    views: '2.1K',
    location: 'Siem Reap, Cambodia',
    rating: 4.9,
    openingHours: 'open daily – 24h',
    ticketPrice: '$5-8',
    fullDescription: 'Water Park Cambodia offers an exciting escape featuring a large, inflatable floating obstacle course with slides, jump pads, and various challenges. In addition to the Aqua Land, the park provides wakeboarding facilities and a beach area with a restaurant, bar, and lakeside huts for relaxation. It is a family-friendly destination popular with both tourists and locals. For an affordable full day of water activities, an "All Day Ticket" to the Aqua Land costs just $8 per person and includes a complimentary life jacket for safety. ',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl:'https://maps.app.goo.gl/SAnKUUhGVAKVZ5Xb7',
    gallery: [
      'https://www.khmertimeskh.com/wp-content/uploads/2022/01/31938.jpg',
      'https://www.siemreap.net/wp-content/uploads/2023/10/Wake-Park-Cambodia-6.jpg',
      'https://img3847.weyesimg.com/uploads/bouncia.com.cn/images/16299691853796.jpg'
    ]
  },{
     id: 'Phum Kola Chamkar Khnor',
    title: 'Phum Kola Chamkar Khnor',
    description: 'Phum Kola Champa Knor is a quiet rural village in Pailin Province.....',
    image: 'https://scontent.fpnh24-1.fna.fbcdn.net/v/t1.6435-9/116586212_182984006576275_5557695883392123185_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=KcKrz19JWU8Q7kNvwF40XqA&_nc_oc=AdlZRBy0yUwjpbwKVd4zdAXdCcp79QCdQxocQBYH-8CRWUdb6Eo3z80Db5Ri0M7aGC0&_nc_zt=23&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=gOrng-z6ULjg5aBUeFHbAg&_nc_ss=8&oh=00_Afzmd-OEH4UiT2pK4R-QYDibH64HVRL1mXW2VIcw98ViHg&oe=69D4FE7F',
    views: '2.1K',
    location: 'Phailin, Cambodia',
    rating: 4.9,
    openingHours: 'open daily – 24h',
    ticketPrice: 'free entry',
    fullDescription: 'Phum Kola Champa Knor is a quiet rural village in Pailin Province, known for its farmland, fresh air, and simple lifestyle. Visitors can experience local farming, enjoy natural scenery, and learn about traditional village life in a peaceful environment. The village is a great spot to see traditional Kola houses and experience the unique culture of the local ethnic group. Visitors often explore the surrounding fruit orchards, where the fertile volcanic soil produces some of the region, most famous longan and rambutan harvests.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl:'https://maps.app.goo.gl/diyxyLJ5VfyqTyKW8',
    gallery: [
      'https://scontent.fpnh24-1.fna.fbcdn.net/v/t1.6435-9/118044057_187355719472437_4057110528560676755_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=U4TPUqNTEfAQ7kNvwE0R7KW&_nc_oc=Adm61pNA7y7aDnUii7lwaBqxAi8QwrOnuxmQInhjh_EEReY9SIpDebQ3HFM6ocw71SE&_nc_zt=23&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=VDdairFCYzwffkAUSPc7pA&_nc_ss=8&oh=00_AfzNZ0Bgqaoiwnl1uPiV9zrNbihxGMDoo0m9F-cYM22R1g&oe=69D507F3',
      'https://scontent.fpnh24-1.fna.fbcdn.net/v/t1.6435-9/95430688_154647782743231_6016850265133547520_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=LrLbNIEfCaoQ7kNvwEyaqZk&_nc_oc=AdkwY8YiPu44BsWt4I-xI_gTIWFywsR_zlQg30NiLJGnT91TPhF97FUk8c1sQLWXTBY&_nc_zt=23&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=j35AQL3gFbSlnz9DP5qwpg&_nc_ss=8&oh=00_Afy7nN2jCS2_oL6dozrOMt32-I1P7NqmQq3d_Uz_F6YnRA&oe=69D4FB79',
      'https://scontent.fpnh24-1.fna.fbcdn.net/v/t1.6435-9/125291422_209830780558264_3774547119218883221_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=hzVnkzJlhXkQ7kNvwFYlgfG&_nc_oc=AdmfVvoe737iP4OVNEPWkrYe8njkiu1RuAHD5bfuvuoflg7gd_ZlME7AyEEQIlEVl1Q&_nc_zt=23&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=uNz8MKBF273i30AwIKsVhA&_nc_ss=8&oh=00_Afxe24YOHju6GpBy-O1vnNzrQT8-SmtT2-OviDeLe8tLrg&oe=69D4EE25'
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
  },{
    id: 'Jet s Garden Park',
    title: "Jet's Garden Park",
    description: "Jet's Garden Park, also known as Sky Land, is one of Cambodia's most expansive....",
    image: 'https://scontent.fpnh24-1.fna.fbcdn.net/v/t1.6435-9/78053923_2131429113818365_1481744106299326464_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=FcTl0_d8dxgQ7kNvwEa6FQ7&_nc_oc=Admxfx5tVv3TZKirMkgjKmlUq7f5WROBZIoEsdUmW7e565NA9Gx5dAcGBjlacD_Q75Y&_nc_zt=23&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=TGWMB2XtgM9-Ky0ECfTq1A&_nc_ss=8&oh=00_AfzioI0fn92hqQNYWbh2Pnjy0dEx4rckDXaPj1ox3plU0g&oe=69D64792',
    views: '1.7K',
    location: 'Phnom Penh, Cambodia',
    rating: 4.3,
    openingHours: '7:00 AM – 11:30 PM.',
    ticketPrice: '$5 per person',
    fullDescription: "Jet's Garden Park, also known as Sky Land, is one of Cambodia's most expansive recreational resorts and a premier destination for nature-based family entertainment. Located in the Vihear Sour region, the park integrates a diverse array of attractions including a sprawling zoo, a large-scale swimming pool, and an eclectic collection of sculptures ranging from prehistoric dinosaurs to modern robotic figures. The facility offers a wide range of leisure activities such as cycling, bird watching, and outdoor camping, complemented by on-site bungalows and dining facilities for visitors seeking an extended retreat. Operating daily from early morning until late evening, the park serves as a vital green lung and cultural hub, providing a unique blend of natural beauty and modern amusement just a short distance from Phnom Penh",
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7649679383747!2d104.92445731483!3d11.564114991788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x164d89223cdb1c82!2sRoyal%20Palace!5e0!3m2!1sen!2skh',
    mapUrl:'https://maps.app.goo.gl/WaPR3DuEhNKGq8Pq6',
    gallery: [
      'https://static.wixstatic.com/media/0a84f2_a62e1424267d4c01b9152382b3ed3b8f~mv2.jpg/v1/fill/w_1776,h_743,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0a84f2_a62e1424267d4c01b9152382b3ed3b8f~mv2.jpg',
      'https://image.freshnewsasia.com/2021/id-024/fn-2023-07-25-11-27-34-1.jpg',
      'https://www.oknha.news/wp-content/uploads/2022/08/1660288336_1_J4-1024x680.jpg'
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
          class="w-full h-36 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out">
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
   <div class="w-[380px] h-[280px] overflow-hidden rounded-xl shadow shrink-0">
    <img src="${img}" 
      class="w-full h-full object-cover 
             hover:scale-110 transition-transform duration-700 cursor-pointer">
    </div>
  `).join('');

  // Map
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

// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
});

//  Image animation at the bottom of the page
    const images = [
      { src: "https://www.khmertimeskh.com/wp-content/uploads/2024/01/Angkor-Wonder-Garden-offers-visitors-floral-delights.jpg", alt: "garden" },
      { src: "https://pppkhmer.sgp1.cdn.digitaloceanspaces.com/image/main/selfish_8.jpg", alt: "kompulpich" },
      { src: "https://img1.wsimg.com/isteam/ip/3fb15e40-dd05-4702-986e-0375b98d524b/IMG_1389.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25", alt: "kayak" },
      { src: "https://angkorwondergarden.com/wp-content/uploads/2025/05/473631926_122193903242138338_4355332744374490263_n.jpg", alt: "car siem reap" },
      { src: "https://easydiscoprod.s3.ap-southeast-1.amazonaws.com/thumb_profile_1685787143.jpg", alt: "water park" },
      { src: "https://media.sabay.com/media/Bin-Bunna40/MO-9/5fa0fcfb04285_1604386020.jpg", alt: "cultural village" },
      { src: "https://scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-6/493274796_122113197626832509_5074322144269239284_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=b895b5&_nc_ohc=lRyaoY98LpkQ7kNvwGy4J53&_nc_oc=Adm-Y8tbImwDdKcoS2Mbc5ooJwo2bELhbVDrKD5jtc--0kt18i8X4rEs_C3V0R3k_1w&_nc_zt=23&_nc_ht=scontent.fpnh5-5.fna&_nc_gid=1enM82o-OcIIPhs8WVU-AQ&_nc_ss=8&oh=00_AfwOXu7SjJa65ZovkPLKFv17HTWXuo0IfseFtasWVPklDg&oe=69BCACF4", alt: "zip line" },
      { src: "https://scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/484916935_1083988337091624_8666153943117998232_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=8_4BM14R6MEQ7kNvwGa7fCn&_nc_oc=AdmSaWEsEZSRpDrJbfweOvGkPoffPK-pGSGY5LBVZ-5BlOxwY383pwToMHFvdj-zSRM&_nc_zt=23&_nc_ht=scontent.fpnh5-3.fna&_nc_gid=ZHf5FjIYBFwS4zoBWWbudg&_nc_ss=8&oh=00_AfwCv7ypfH5l2JQquIlNbXY1lmo8H_pLcg7nmF6TcJDcUA&oe=69BCAC5A", alt: "seahorse" },
      { src: "https://www.khmertimeskh.com/wp-content/uploads/2024/04/20230715_141929.jpg", alt: "kirirom" },
      { src: "https://sa-kampot.com/images/green-cathedral-2_hu_661f20fb03bcc787.jpg", alt: "boat kayak" },
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
