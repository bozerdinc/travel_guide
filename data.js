const PLACES = [
  {
    "id": 1,
    "title": "Rumeli Hisarı",
    "city": "Istanbul",
    "image": "assets/images/01.png",
    "audio": "assets/audio/01.mp3",
    "tags": [
      "Castle"
    ],
    "script": "Rumeli Hisarı is a historic fortress located on the European side of the Bosphorus in Istanbul.\nIt was built in 1452 by Mehmed the Conqueror before the conquest of Constantinople.\nThe fortress was constructed to control and protect the Bosphorus Strait.\nIt played an important role in the successful conquest of the city.\nToday, it is a popular tourist attraction and an open-air venue for cultural events."
  },
  {
    "id": 2,
    "title": "Hıdırlık Tepesi",
    "city": "Ankara",
    "image": "assets/images/02.png",
    "audio": "assets/audio/02.mp3",
    "tags": [
      "Heritage"
    ],
    "script": "Hıdırlık Tepesi is a well-known hill located in the capital of Turkey, Ankara.\nIt offers a panoramic view of the city and is a popular place for visitors, especially at sunset when it attracts many people.\nAccording to a legend, Khidr is believed to have lived during the time of Prophet Moses.\nIt is said that he climbed this hill to be closer to God and to pray, and for this reason the name of the hill is thought to come from him."
  },
  {
    "id": 3,
    "title": "Harput Kalesi",
    "city": "Elazığ",
    "image": "assets/images/03.png",
    "audio": "assets/audio/03.mp4",
    "tags": [
      "Castle"
    ],
    "script": "Harput Kalesi is important because it reflects the history of many civilizations that lived in the region.\nIt has strategic value due to its high location overlooking the surrounding area.\nThe castle serves as a cultural heritage site that preserves the past of the region.\nToday, it is also important for tourism and helps attract visitors to Elazığ."
  },
  {
    "id": 4,
    "title": "Topkapı Sarayı",
    "city": "Istanbul",
    "image": "assets/images/04.png",
    "audio": "assets/audio/04.mp3",
    "tags": [
      "Museum"
    ],
    "script": "Topkapı Sarayı is one of the most important historical landmarks in Istanbul.\nIt served as the main residence of Ottoman sultans for centuries.\nThe palace is now a museum that showcases imperial collections and artifacts.\nToday, it is a major cultural and tourist attraction in Turkey."
  },
  {
    "id": 5,
    "title": "Ballıca Mağarası",
    "city": "Tokat",
    "image": "assets/images/05.png",
    "audio": "assets/audio/05.mp3",
    "tags": [
      "Nature"
    ],
    "script": "Ballıca Mağarası is a famous cave located in Tokat, Turkey.\nIt is known for its unique stalactites and stalagmites formations.\nThe cave is one of the largest and most impressive caves in the country.\nToday, it is a popular natural tourist attraction visited by many people."
  },
  {
    "id": 6,
    "title": "Göbeklitepe",
    "city": "Şanlıurfa",
    "image": "assets/images/06.png",
    "audio": "assets/audio/06.mp3",
    "tags": [
      "UNESCO"
    ],
    "script": "Göbeklitepe is one of the oldest known temple complexes in the world.\nIt is located near Şanlıurfa, Turkey, and dates back to around 9600 BCE.\nThe site is famous for its massive stone pillars and ancient carvings.\nToday, it is a UNESCO World Heritage Site and a major archaeological attraction."
  },
  {
    "id": 7,
    "title": "Nemrut Dağı",
    "city": "Adıyaman",
    "image": "assets/images/07.png",
    "audio": "assets/audio/07.mp4",
    "tags": [
      "UNESCO"
    ],
    "script": "Nemrut Dağı is a famous mountain located in southeastern Turkey.\nIt is known for its giant statues built during the Kingdom of Commagene.\nThe site is especially popular for its sunrise and sunset views over the statues.\nToday, it is a UNESCO World Heritage Site and a major tourist attraction."
  },
  {
    "id": 8,
    "title": "Sümela Manastırı",
    "city": "Trabzon",
    "image": "assets/images/08.png",
    "audio": "assets/audio/08.mp4",
    "tags": [
      "Culture"
    ],
    "script": "Sümela Manastırı is a historic Greek Orthodox monastery located on a steep cliff in Trabzon, Turkey.\nIt was founded in the 4th century and is dedicated to the Virgin Mary.\nThe monastery is famous for its stunning mountain scenery and frescoes inside.\nToday, it is a popular tourist destination and an important cultural heritage site."
  },
  {
    "id": 9,
    "title": "Truva Atı",
    "city": "Çanakkale",
    "image": "assets/images/09.png",
    "audio": "assets/audio/09.mp4",
    "tags": [
      "Heritage"
    ],
    "script": "Truva Atı is a legendary wooden horse from the story of the Trojan War.\nAccording to the myth, it was used by the Greeks to secretly enter the city of Troy.\nToday, a replica of the horse is displayed in Çanakkale, Turkey, as a tourist attraction.\nIt symbolizes strategy, deception, and one of the most famous stories in ancient history."
  },
  {
    "id": 10,
    "title": "Bandırma Vapuru",
    "city": "Samsun",
    "image": "assets/images/10.png",
    "audio": "assets/audio/10.mp4",
    "tags": [
      "Museum"
    ],
    "script": "Bandırma Vapuru is a historic ship that played an important role in Turkish history.\nIt is famous for carrying Mustafa Kemal Atatürk from Istanbul to Samsun in 1919.\nThis journey marked the beginning of the Turkish War of Independence.\nToday, the ship is preserved as a museum and symbolizes national independence."
  },
  {
    "id": 11,
    "title": "Divriği Ulu Camii ve Darüşşifası",
    "city": "Sivas",
    "image": "assets/images/11.png",
    "audio": "assets/audio/11.mp4",
    "tags": [
      "UNESCO",
      "Mosque"
    ],
    "script": "Divriği Ulu Camii ve Darüşşifası is a historic mosque and hospital complex located in Divriği, Sivas, Turkey.\nIt was built in 1228 by the Mengücek dynasty and is known for its unique stone carvings.\nThe structure is considered a masterpiece of Islamic architecture and engineering.\nToday, it is a UNESCO World Heritage Site and an important cultural landmark."
  },
  {
    "id": 12,
    "title": "Ayasofya Camii",
    "city": "Istanbul",
    "image": "assets/images/12.png",
    "audio": "assets/audio/12.mp4",
    "tags": [
      "Mosque"
    ],
    "script": "Ayasofya Camii is one of the most famous historical buildings in Istanbul, Turkey.\nIt was originally built as a cathedral in 537 AD during the Byzantine Empire by the architects Anthemius of Tralles and Isidore of Miletus.\nLater, it was converted into a mosque after the Ottoman conquest in 1453.\nToday, it serves as a mosque and remains one of the most important cultural landmarks in the world."
  },
  {
    "id": 13,
    "title": "Sultanahmet Camii",
    "city": "Istanbul",
    "image": "assets/images/13.png",
    "audio": "assets/audio/13.mp4",
    "tags": [
      "Mosque"
    ],
    "script": "Sultanahmet Camii is one of the most famous mosques in Istanbul, Turkey.\nIt was built between 1609 and 1616 during the reign of Sultan Ahmed I.\nIt was designed by the architect Sedefkar Mehmed Ağa.\nIt is world-famous for its blue tiles and six minarets."
  },
  {
    "id": 14,
    "title": "Fatih Camii",
    "city": "Istanbul",
    "image": "assets/images/14.png",
    "audio": "assets/audio/14.mp4",
    "tags": [
      "Mosque"
    ],
    "script": "Fatih Camii is one of the important mosques in Istanbul, Turkey.\nIt was built after the conquest of ıstanbul by Mehmed the Conqueror.\nThe original architect was Atik Sinan, and it was constructed in the 15th century.\nToday, it remains an important religious and historical landmark."
  },
  {
    "id": 15,
    "title": "Safranbolu Clock Tower",
    "city": "Karabük",
    "image": "assets/images/15.png",
    "audio": "assets/audio/15.mp4",
    "tags": [
      "Heritage"
    ],
    "script": "Safranbolu Clock Tower is a historic structure located in Safranbolu, Karabük, Turkey.\nIt is considered one of the oldest clock towers in Turkey.\nIt was built during the Ottoman period to help regulate the time in the city.\nToday, it is an important tourist attraction reflecting the historical character of Safranbolu."
  },
  {
    "id": 16,
    "title": "Yağıbasan Medresesi",
    "city": "Tokat",
    "image": "assets/images/16.png",
    "audio": "assets/audio/16.mp4",
    "tags": [
      "Heritage"
    ],
    "script": "Yağıbasan Medresesi is one of the oldest madrasahs in Anatolia, located in Tokat, Turkey.\nIt was built in the 12th century by the Danishmendids.\nThe structure is known for its simple architecture and central courtyard design.\nToday, it is an important historical and cultural heritage site visited by tourists."
  },
  {
    "id": 17,
    "title": "Buruciye Medresesi",
    "city": "Sivas",
    "image": "assets/images/17.png",
    "audio": "assets/audio/17.mp4",
    "tags": [
      "Heritage"
    ],
    "script": "Buruciye Medresesi is a historic Seljuk-era madrasah located in Sivas, Turkey.\nIt was built in 1271 during the reign of the Seljuk Sultanate of Rum.\nThe structure was used as an educational center for science and religion.\nToday, it is an important cultural heritage site and a tourist attraction."
  },
  {
    "id": 18,
    "title": "Çanakkale Şehitler Abidesi",
    "city": "Çanakkale",
    "image": "assets/images/18.png",
    "audio": "assets/audio/18.mp4",
    "tags": [
      "Heritage"
    ],
    "script": "Çanakkale Şehitler Abidesi is a monument located in Çanakkale, Turkey.\nIt was built in memory of the soldiers who died during the Gallipoli Campaign of World War I.\nThe monument symbolizes the courage and sacrifice of the Turkish soldiers.\nToday, it is an important national memorial and a major historical tourist site."
  },
  {
    "id": 19,
    "title": "Mevlana Türbesi",
    "city": "Konya",
    "image": "assets/images/19.png",
    "audio": "assets/audio/19.mp4",
    "tags": [
      "Culture"
    ],
    "script": "Mevlana Türbesi is a famous mausoleum located in Konya, Turkey.\nIt is the resting place of Mevlana Celaleddin Rumi, a great Sufi poet and philosopher.\nThe site is an important center of Islamic culture and Sufism.\nToday, it is one of the most visited tourist attractions in Turkey."
  },
  {
    "id": 20,
    "title": "Fatih Sultan Mehmet Türbesi",
    "city": "Istanbul",
    "image": "assets/images/20.png",
    "audio": "assets/audio/20.mp4",
    "tags": [
      "Mosque",
      "Culture"
    ],
    "script": "Fatih Sultan Mehmet Türbesi is the mausoleum of Mehmed the Conqueror, located in Istanbul, Turkey.\nIt is situated within the courtyard of the Fatih Mosque complex.\nThe tomb reflects Ottoman architectural style and historical importance.\nToday, it is an important historical and religious site visited by many people."
  }
];
