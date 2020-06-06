const moviesMock = [{
  "id": "2360d6b9-12df-4b46-a0d0-a0d5e9884a46",
  "title": "Ticked-Off Trannies with Knives",
  "year": 2005,
  "cover": "http://dummyimage.com/156x169.png/5fa2dd/ffffff",
  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
  "duration": 1905,
  "contentRating": "G",
  "source": "http://fc2.com/lacus.jsp",
  "tags": [
    "Drama|Thriller",
    "Documentary"
  ]
}, {
  "id": "fc7d5e8b-1860-4001-ba73-5f21d7da0785",
  "title": "Memories of Matsuko (Kiraware Matsuko no isshô)",
  "year": 2008,
  "cover": "http://dummyimage.com/115x118.png/cc0000/ffffff",
  "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "duration": 1977,
  "contentRating": "PG-13",
  "source": "https://ucoz.com/proin/at.json",
  "tags": [
    "Action|Adventure|Fantasy",
    "Comedy|Drama",
    "Drama",
    "Documentary",
    "Drama"
  ]
}, {
  "id": "4346ed35-0fa4-4656-9583-1e274c452d49",
  "title": "Definitely, Maybe",
  "year": 1988,
  "cover": "http://dummyimage.com/179x129.png/dddddd/000000",
  "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "duration": 2068,
  "contentRating": "NC-17",
  "source": "https://huffingtonpost.com/suspendisse.js",
  "tags": [
    "Comedy|Musical"
  ]
}, {
  "id": "4dca7d22-7e14-4020-8366-b8518b425d81",
  "title": "Projectionist, The",
  "year": 2007,
  "cover": "http://dummyimage.com/191x222.png/cc0000/ffffff",
  "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  "duration": 2032,
  "contentRating": "PG-13",
  "source": "http://fastcompany.com/morbi/a/ipsum.png",
  "tags": [
    "Crime|Drama|Thriller"
  ]
}, {
  "id": "5a092494-85ff-41ad-957b-c7fa11e2db9a",
  "title": "Rosie",
  "year": 2006,
  "cover": "http://dummyimage.com/158x127.png/5fa2dd/ffffff",
  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "duration": 1942,
  "contentRating": "R",
  "source": "https://linkedin.com/in/faucibus/orci.json",
  "tags": [
    "Drama|Horror|Thriller",
    "Crime|Drama|Thriller",
    "Action|Crime|Thriller",
    "Drama"
  ]
}, {
  "id": "8b564eb5-be95-4944-912e-e0e34c6479c2",
  "title": "Nordkraft",
  "year": 2001,
  "cover": "http://dummyimage.com/162x167.png/5fa2dd/ffffff",
  "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "duration": 2003,
  "contentRating": "PG",
  "source": "https://redcross.org/vitae/nisl/aenean/lectus/pellentesque/eget.json",
  "tags": [
    "Adventure|Comedy|Crime|Romance",
    "Drama|Romance",
    "Comedy",
    "Horror|Thriller",
    "Action|Fantasy|Sci-Fi"
  ]
}, {
  "id": "21b20940-b4a6-4a23-8664-efdb919b9059",
  "title": "MVP: Most Valuable Primate",
  "year": 2002,
  "cover": "http://dummyimage.com/193x104.jpg/cc0000/ffffff",
  "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "duration": 1892,
  "contentRating": "PG",
  "source": "http://hostgator.com/pellentesque.html",
  "tags": [
    "Comedy|Drama|Romance",
    "Action|Thriller",
    "Drama",
    "Drama|Horror|Mystery|Thriller"
  ]
}, {
  "id": "d755dd9f-d4ad-41bd-a96f-3253653cd4fa",
  "title": "Hue and Cry",
  "year": 2012,
  "cover": "http://dummyimage.com/210x190.bmp/ff4444/ffffff",
  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "duration": 1948,
  "contentRating": "NC-17",
  "source": "https://gizmodo.com/dui/vel.jpg",
  "tags": [
    "Drama",
    "Adventure|Drama",
    "Horror",
    "Animation",
    "Comedy|Horror"
  ]
}, {
  "id": "115450ab-ec16-4567-9e13-b93f83b21cce",
  "title": "Road to Perdition",
  "year": 2010,
  "cover": "http://dummyimage.com/154x100.jpg/ff4444/ffffff",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "duration": 1999,
  "contentRating": "PG",
  "source": "http://sun.com/natoque/penatibus/et/magnis.jpg",
  "tags": [
    "Comedy"
  ]
}, {
  "id": "9dfb55fd-d946-4b9a-a92f-4518b3909840",
  "title": "Extreme Measures",
  "year": 2009,
  "cover": "http://dummyimage.com/202x104.bmp/5fa2dd/ffffff",
  "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  "duration": 2067,
  "contentRating": "R",
  "source": "https://privacy.gov.au/egestas/metus/aenean/fermentum/donec.jsp",
  "tags": [
    "Crime|Film-Noir|Thriller",
    "Horror|Sci-Fi|Thriller",
    "Comedy|Drama",
    "Comedy",
    "Adventure|Drama"
  ]
}, {
  "id": "f9d347fb-016f-429d-a677-74edac57907e",
  "title": "Ladies in Lavender",
  "year": 2013,
  "cover": "http://dummyimage.com/100x141.bmp/5fa2dd/ffffff",
  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "duration": 2035,
  "contentRating": "G",
  "source": "http://cnn.com/consequat/lectus/in/est.json",
  "tags": [
    "Drama",
    "Comedy|Drama|Romance",
    "Documentary",
    "Drama",
    "Children|Comedy"
  ]
}, {
  "id": "2787182c-728e-47ff-a7e8-bee3370e254e",
  "title": "Blown Away",
  "year": 1999,
  "cover": "http://dummyimage.com/170x198.bmp/cc0000/ffffff",
  "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "duration": 2040,
  "contentRating": "R",
  "source": "http://vimeo.com/elementum/ligula/vehicula/consequat/morbi.xml",
  "tags": [
    "Documentary",
    "Comedy",
    "Animation|Children|Comedy|Western"
  ]
}, {
  "id": "46e124ea-e9e2-4527-ae17-ebf944d88516",
  "title": "My Brilliant Career",
  "year": 1996,
  "cover": "http://dummyimage.com/178x211.bmp/cc0000/ffffff",
  "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "duration": 1892,
  "contentRating": "G",
  "source": "https://sciencedaily.com/orci/luctus/et.aspx",
  "tags": [
    "Horror",
    "Comedy|Drama"
  ]
}, {
  "id": "2720a30e-9596-4959-9910-7f9fb773f867",
  "title": "Autómata (Automata)",
  "year": 2011,
  "cover": "http://dummyimage.com/142x230.jpg/5fa2dd/ffffff",
  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "duration": 1928,
  "contentRating": "PG-13",
  "source": "http://drupal.org/massa/volutpat/convallis/morbi.png",
  "tags": [
    "Adventure",
    "Children|Comedy",
    "Drama",
    "Documentary"
  ]
}, {
  "id": "2e9d7a70-413c-4980-a918-4d56c03efe01",
  "title": "My Father's Glory (La gloire de mon père)",
  "year": 1993,
  "cover": "http://dummyimage.com/148x236.png/cc0000/ffffff",
  "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "duration": 2023,
  "contentRating": "PG-13",
  "source": "https://tumblr.com/consequat.aspx",
  "tags": [
    "Action|Crime|Drama"
  ]
}, {
  "id": "f552a843-48fb-4355-ae25-e9bed0441930",
  "title": "Country",
  "year": 1999,
  "cover": "http://dummyimage.com/167x229.jpg/dddddd/000000",
  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "duration": 1960,
  "contentRating": "PG-13",
  "source": "http://abc.net.au/arcu/adipiscing.png",
  "tags": [
    "Comedy",
    "Comedy|Romance",
    "Drama|Romance",
    "Comedy|Crime|Mystery|Thriller"
  ]
}, {
  "id": "1e37cfbd-c6d9-4e43-a982-799fb6911631",
  "title": "Safrana or Freedom of Speech (Safrana ou le droit à la parole)",
  "year": 2011,
  "cover": "http://dummyimage.com/149x118.jpg/cc0000/ffffff",
  "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "duration": 1909,
  "contentRating": "PG",
  "source": "http://yellowbook.com/libero.xml",
  "tags": [
    "Drama|Film-Noir|Thriller",
    "Action|Adventure|Children|Drama"
  ]
}, {
  "id": "d56b3dcc-a614-427a-8045-a856a0e88051",
  "title": "Equinox",
  "year": 2002,
  "cover": "http://dummyimage.com/233x177.bmp/ff4444/ffffff",
  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "duration": 1943,
  "contentRating": "PG",
  "source": "https://nifty.com/augue/quam/sollicitudin/vitae.xml",
  "tags": [
    "Comedy|Drama|Romance",
    "Action|Adventure|Fantasy"
  ]
}, {
  "id": "0e6f1497-2fc3-4146-bea6-32f7a6a5cfd4",
  "title": "Rugrats in Paris: The Movie",
  "year": 1994,
  "cover": "http://dummyimage.com/109x164.png/dddddd/000000",
  "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
  "duration": 1986,
  "contentRating": "NC-17",
  "source": "https://dedecms.com/eget/nunc/donec/quis/orci/eget/orci.html",
  "tags": [
    "Documentary|Musical",
    "Comedy|Romance",
    "Drama",
    "Drama|War"
  ]
}, {
  "id": "11b18fef-2164-476d-a358-8b3317af5b77",
  "title": "Sambizanga",
  "year": 1993,
  "cover": "http://dummyimage.com/103x111.bmp/dddddd/000000",
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "duration": 1949,
  "contentRating": "PG-13",
  "source": "http://google.ca/quam.html",
  "tags": [
    "Drama",
    "Adventure|Animation|Children|Comedy|Musical",
    "Horror|Thriller",
    "Drama",
    "Drama"
  ]
}, {
  "id": "e6875d69-14f5-4daa-900b-1cc4877c11bc",
  "title": "Alive and Ticking (Ein Tick anders)",
  "year": 2002,
  "cover": "http://dummyimage.com/189x214.bmp/dddddd/000000",
  "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
  "duration": 1989,
  "contentRating": "R",
  "source": "https://aboutads.info/proin/risus/praesent.json",
  "tags": [
    "Documentary",
    "Comedy",
    "Drama",
    "Drama|Musical"
  ]
}, {
  "id": "aa88a3e7-98be-4477-ac6c-27fea119d6de",
  "title": "Summer Hours (Heure d'été, L')",
  "year": 2012,
  "cover": "http://dummyimage.com/212x246.png/ff4444/ffffff",
  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
  "duration": 1904,
  "contentRating": "PG-13",
  "source": "https://nationalgeographic.com/sollicitudin/vitae/consectetuer/eget/rutrum/at/lorem.json",
  "tags": [
    "Comedy|Drama",
    "Adventure|Drama",
    "Comedy"
  ]
}, {
  "id": "5d27b290-992a-44b2-8375-7b1e18e3be0b",
  "title": "War Game, The",
  "year": 2006,
  "cover": "http://dummyimage.com/248x136.jpg/5fa2dd/ffffff",
  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  "duration": 1897,
  "contentRating": "PG",
  "source": "https://plala.or.jp/eget/massa/tempor.js",
  "tags": [
    "Comedy",
    "Comedy|Romance",
    "Romance",
    "Documentary"
  ]
}, {
  "id": "846bd03b-05ee-4dfd-ad21-f950c2839cc1",
  "title": "Polskie gówno",
  "year": 2011,
  "cover": "http://dummyimage.com/228x125.bmp/5fa2dd/ffffff",
  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  "duration": 1984,
  "contentRating": "PG",
  "source": "https://bloglines.com/vivamus/vel/nulla.png",
  "tags": [
    "Comedy|Drama",
    "Crime|Drama",
    "Horror|Thriller"
  ]
}, {
  "id": "904b1e8b-6c40-43bd-bf95-f76d00694d8b",
  "title": "Ryan",
  "year": 1991,
  "cover": "http://dummyimage.com/180x167.jpg/cc0000/ffffff",
  "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  "duration": 1956,
  "contentRating": "PG",
  "source": "https://statcounter.com/aliquet/pulvinar/sed.jsp",
  "tags": [
    "Western",
    "Action|Adventure|Sci-Fi|IMAX",
    "Children|Comedy|Fantasy|Musical",
    "Drama"
  ]
}, {
  "id": "a93cca7e-57d0-4e40-aa90-761dc5feb9e4",
  "title": "Hoodoo Ann",
  "year": 1993,
  "cover": "http://dummyimage.com/128x134.png/ff4444/ffffff",
  "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "duration": 1910,
  "contentRating": "PG-13",
  "source": "https://ask.com/imperdiet/nullam/orci.jpg",
  "tags": [
    "Drama|Romance",
    "Animation|Comedy|Sci-Fi",
    "Drama",
    "Comedy|Drama|Romance",
    "Crime|Drama"
  ]
}, {
  "id": "f7cc00b5-969b-47fb-82dd-1efa306ba6b5",
  "title": "Decameron, The (Decameron, Il)",
  "year": 2002,
  "cover": "http://dummyimage.com/169x133.png/dddddd/000000",
  "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
  "duration": 2006,
  "contentRating": "R",
  "source": "http://sfgate.com/pretium/nisl/ut/volutpat.html",
  "tags": [
    "Animation|Children|Comedy|Drama|Fantasy",
    "Drama|Horror|Thriller"
  ]
}, {
  "id": "bf150131-8e71-4e80-820e-ee26b5bd6793",
  "title": "Foreign Student",
  "year": 1998,
  "cover": "http://dummyimage.com/118x161.jpg/5fa2dd/ffffff",
  "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  "duration": 2013,
  "contentRating": "R",
  "source": "https://biblegateway.com/ac/lobortis/vel/dapibus.jpg",
  "tags": [
    "Drama",
    "Romance",
    "Action|Crime|Thriller",
    "Action|Crime|Drama|Thriller"
  ]
}, {
  "id": "6b94e7ad-b476-453a-9093-fea76f663f3d",
  "title": "Marfa Girl",
  "year": 2009,
  "cover": "http://dummyimage.com/129x191.bmp/dddddd/000000",
  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "duration": 1950,
  "contentRating": "G",
  "source": "http://moonfruit.com/magnis/dis/parturient.jpg",
  "tags": [
    "Drama",
    "Comedy|Horror|Mystery|Sci-Fi",
    "Crime|Drama|Thriller",
    "Crime|Drama|Romance"
  ]
}, {
  "id": "e48c0a11-b180-4c2f-9519-d42eb140a584",
  "title": "Assisted Living",
  "year": 2009,
  "cover": "http://dummyimage.com/175x239.jpg/cc0000/ffffff",
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "duration": 2043,
  "contentRating": "G",
  "source": "https://cloudflare.com/potenti/nullam/porttitor/lacus/at/turpis/donec.xml",
  "tags": [
    "Western",
    "Action|Adventure|Thriller|IMAX",
    "Animation|Children",
    "Drama"
  ]
}, {
  "id": "ffe2bfde-8c8c-4a6b-9126-561db9ac17b1",
  "title": "Murder on the Orient Express",
  "year": 1992,
  "cover": "http://dummyimage.com/174x171.bmp/dddddd/000000",
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "duration": 1932,
  "contentRating": "G",
  "source": "http://sohu.com/vel/augue/vestibulum.html",
  "tags": [
    "Drama",
    "Crime|Drama",
    "Comedy|Romance",
    "Drama"
  ]
}, {
  "id": "0f678489-b295-4479-9074-8d4af4e78bae",
  "title": "No Man's Land",
  "year": 1998,
  "cover": "http://dummyimage.com/198x114.bmp/ff4444/ffffff",
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "duration": 2043,
  "contentRating": "NC-17",
  "source": "http://sourceforge.net/purus/phasellus/in/felis/donec.png",
  "tags": [
    "Drama|Mystery",
    "Drama",
    "Drama|Mystery|Romance",
    "Crime|Drama|Mystery|Thriller"
  ]
}, {
  "id": "90387912-0dea-46af-9b1e-367ca57c5dfd",
  "title": "Against One Another, Virtually Friends",
  "year": 2009,
  "cover": "http://dummyimage.com/179x185.jpg/ff4444/ffffff",
  "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "duration": 2061,
  "contentRating": "NC-17",
  "source": "https://angelfire.com/sodales/sed.jsp",
  "tags": [
    "Drama|Thriller"
  ]
}, {
  "id": "56bc877b-d7b4-4745-b66b-3d32ce6fbdb9",
  "title": "Panic",
  "year": 1998,
  "cover": "http://dummyimage.com/239x112.bmp/dddddd/000000",
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "duration": 1980,
  "contentRating": "G",
  "source": "https://ihg.com/felis.html",
  "tags": [
    "Drama",
    "Horror",
    "Drama|Western",
    "Drama|Thriller"
  ]
}, {
  "id": "db401955-60f5-4515-8d85-7e80ac058ab2",
  "title": "Creeping Terror, The (Crawling Monster, The)",
  "year": 2010,
  "cover": "http://dummyimage.com/144x114.png/cc0000/ffffff",
  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  "duration": 2039,
  "contentRating": "PG-13",
  "source": "https://dot.gov/accumsan.jpg",
  "tags": [
    "Comedy|Drama|Fantasy|Romance",
    "Drama|Horror|Sci-Fi"
  ]
}, {
  "id": "3ff76b46-875a-48b4-916b-c33fed252f22",
  "title": "Boys, The (Pojat)",
  "year": 1995,
  "cover": "http://dummyimage.com/130x147.png/dddddd/000000",
  "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  "duration": 2007,
  "contentRating": "PG-13",
  "source": "https://odnoklassniki.ru/nulla/tellus/in.xml",
  "tags": [
    "Comedy"
  ]
}, {
  "id": "d2999c01-9d38-4971-893c-7781b5791f56",
  "title": "Women Art Revolution",
  "year": 1984,
  "cover": "http://dummyimage.com/142x228.jpg/dddddd/000000",
  "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "duration": 2042,
  "contentRating": "NC-17",
  "source": "http://house.gov/vestibulum/aliquet/ultrices/erat/tortor.jsp",
  "tags": [
    "Drama",
    "Crime|Documentary",
    "Drama|Mystery|Thriller"
  ]
}, {
  "id": "8a1fd909-d9b0-47eb-a94b-6b6cfcfc19ae",
  "title": "Tales from the Hood",
  "year": 2004,
  "cover": "http://dummyimage.com/132x169.png/dddddd/000000",
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "duration": 2064,
  "contentRating": "G",
  "source": "http://cnet.com/amet/eleifend.html",
  "tags": [
    "Comedy|Drama",
    "Drama|Musical",
    "Documentary|Drama"
  ]
}, {
  "id": "2ec51de7-69fd-4b28-a42f-7fc929201d1d",
  "title": "Stealing Beauty",
  "year": 1992,
  "cover": "http://dummyimage.com/179x182.png/ff4444/ffffff",
  "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  "duration": 1957,
  "contentRating": "PG-13",
  "source": "http://icio.us/in/sagittis.jpg",
  "tags": [
    "Animation|Children|Comedy"
  ]
}, {
  "id": "67fb7c55-5c58-4f7f-93e4-ee231ea99c82",
  "title": "Kramer vs. Kramer",
  "year": 2009,
  "cover": "http://dummyimage.com/191x201.png/ff4444/ffffff",
  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "duration": 1999,
  "contentRating": "NC-17",
  "source": "http://amazon.co.uk/lorem/quisque.json",
  "tags": [
    "Drama|Romance|Western",
    "Comedy"
  ]
}, {
  "id": "0b7e24b5-c87c-47c3-8980-55699a45e973",
  "title": "White Balloon, The (Badkonake sefid)",
  "year": 2003,
  "cover": "http://dummyimage.com/206x206.bmp/ff4444/ffffff",
  "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "duration": 1947,
  "contentRating": "NC-17",
  "source": "http://parallels.com/vulputate/vitae/nisl/aenean/lectus/pellentesque/eget.jpg",
  "tags": [
    "Adventure|Children|Comedy|Fantasy",
    "Horror"
  ]
}, {
  "id": "2bbf0c4e-6ea4-4941-a558-9b68d60cd988",
  "title": "Dark Side of the Sun, The",
  "year": 1985,
  "cover": "http://dummyimage.com/186x155.jpg/cc0000/ffffff",
  "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "duration": 1893,
  "contentRating": "NC-17",
  "source": "https://blogs.com/donec/posuere.js",
  "tags": [
    "Drama",
    "Crime|Drama|Romance",
    "Documentary",
    "Documentary"
  ]
}, {
  "id": "f69caf4a-60d6-4963-a7ad-b5fc767ccbc4",
  "title": "Final Approach",
  "year": 2009,
  "cover": "http://dummyimage.com/155x151.bmp/dddddd/000000",
  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "duration": 1938,
  "contentRating": "PG",
  "source": "https://independent.co.uk/lectus/pellentesque/eget/nunc.jpg",
  "tags": [
    "Documentary"
  ]
}, {
  "id": "d1216a90-3288-4f63-86de-c857f03cf2bd",
  "title": "Terrible Kids (Enfants terribles, Les) (Strange Ones, The)",
  "year": 2010,
  "cover": "http://dummyimage.com/225x231.jpg/dddddd/000000",
  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "duration": 1909,
  "contentRating": "PG-13",
  "source": "http://rakuten.co.jp/egestas/metus/aenean.json",
  "tags": [
    "Children|Comedy|Romance",
    "Action|Horror|Sci-Fi"
  ]
}, {
  "id": "1d825816-06cf-4833-97fa-28b3dccba7fe",
  "title": "Begone Dull Care",
  "year": 2006,
  "cover": "http://dummyimage.com/198x225.jpg/cc0000/ffffff",
  "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  "duration": 2061,
  "contentRating": "G",
  "source": "http://dailymotion.com/tortor/quis/turpis.json",
  "tags": [
    "Drama"
  ]
}, {
  "id": "b2d5d88d-7570-4335-9d1a-2ceeb59ee530",
  "title": "The Substitute 4: Failure Is Not an Option",
  "year": 2002,
  "cover": "http://dummyimage.com/163x139.png/cc0000/ffffff",
  "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "duration": 2018,
  "contentRating": "G",
  "source": "http://friendfeed.com/duis/ac/nibh/fusce/lacus/purus.js",
  "tags": [
    "Comedy",
    "Drama",
    "Drama",
    "Action|Crime",
    "Animation|Comedy"
  ]
}, {
  "id": "be470082-ff63-4ab6-b340-c61f8afdefe0",
  "title": "Enchanted April",
  "year": 2005,
  "cover": "http://dummyimage.com/243x207.png/ff4444/ffffff",
  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "duration": 1955,
  "contentRating": "R",
  "source": "http://elegantthemes.com/odio/elementum/eu/interdum.json",
  "tags": [
    "Children|Comedy|Drama",
    "Comedy|Horror|Sci-Fi",
    "Comedy|War",
    "Comedy|Fantasy"
  ]
}, {
  "id": "297d483c-16ba-4b9c-bc0d-b4ed80145c96",
  "title": "Kansas",
  "year": 2006,
  "cover": "http://dummyimage.com/117x197.bmp/cc0000/ffffff",
  "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "duration": 1969,
  "contentRating": "NC-17",
  "source": "http://gov.uk/velit/donec/diam/neque/vestibulum.json",
  "tags": [
    "Documentary"
  ]
}, {
  "id": "d654e806-a402-41f9-9870-8e7d04d849c1",
  "title": "Alice Doesn't Live Here Anymore",
  "year": 2000,
  "cover": "http://dummyimage.com/155x224.jpg/5fa2dd/ffffff",
  "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "duration": 2069,
  "contentRating": "PG",
  "source": "http://nytimes.com/arcu.html",
  "tags": [
    "Animation|Children|Comedy",
    "Action|Comedy|Crime",
    "Thriller",
    "Drama",
    "Comedy|Crime"
  ]
}, {
  "id": "fc5c1cbc-e64d-4bc0-af6b-03ca47cf84ca",
  "title": "Conception",
  "year": 1998,
  "cover": "http://dummyimage.com/164x178.jpg/dddddd/000000",
  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "duration": 2049,
  "contentRating": "R",
  "source": "http://japanpost.jp/velit/eu/est/congue/elementum/in/hac.html",
  "tags": [
    "Comedy",
    "Drama"
  ]
}, {
  "id": "bbf8960e-6e91-4133-9bc5-bac5ad07d19c",
  "title": "Secret Life of Girls, The",
  "year": 1993,
  "cover": "http://dummyimage.com/124x140.bmp/ff4444/ffffff",
  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "duration": 1924,
  "contentRating": "G",
  "source": "https://netvibes.com/neque/duis/bibendum/morbi/non.png",
  "tags": [
    "Drama|Romance",
    "Horror|Mystery|Thriller",
    "Comedy",
    "Western",
    "Documentary"
  ]
}, {
  "id": "a2e1ea18-7670-4ffc-a53c-b9b0d04bb352",
  "title": "Taxi 2",
  "year": 1993,
  "cover": "http://dummyimage.com/235x231.bmp/ff4444/ffffff",
  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "duration": 2044,
  "contentRating": "G",
  "source": "http://fotki.com/diam/erat/fermentum/justo/nec.aspx",
  "tags": [
    "Drama|Romance",
    "Drama",
    "Drama|Romance"
  ]
}, {
  "id": "98ccdbff-e2a5-4eca-ac1b-b5be05b7160e",
  "title": "Rude",
  "year": 2004,
  "cover": "http://dummyimage.com/228x128.png/5fa2dd/ffffff",
  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "duration": 2027,
  "contentRating": "NC-17",
  "source": "https://google.co.jp/vestibulum/proin/eu/mi/nulla/ac/enim.xml",
  "tags": [
    "Drama|Romance",
    "Documentary",
    "Comedy"
  ]
}, {
  "id": "143867d9-a156-4ea0-89e9-b8279d3b9925",
  "title": "Ambushers, The",
  "year": 1998,
  "cover": "http://dummyimage.com/154x150.bmp/ff4444/ffffff",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "duration": 1988,
  "contentRating": "PG-13",
  "source": "http://icio.us/odio/curabitur.jpg",
  "tags": [
    "Comedy|Drama"
  ]
}, {
  "id": "113b417c-4dde-4af1-bcf3-f20e3d941cd1",
  "title": "Mothman Prophecies, The",
  "year": 2006,
  "cover": "http://dummyimage.com/244x166.jpg/cc0000/ffffff",
  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "duration": 2014,
  "contentRating": "PG",
  "source": "https://comcast.net/eu.jpg",
  "tags": [
    "Documentary|War",
    "Comedy|Drama",
    "Comedy|Romance",
    "Action|Adventure|Romance"
  ]
}, {
  "id": "5b76b9f5-ad84-4ad6-9658-851240ae37ad",
  "title": "Glass Menagerie, The",
  "year": 2007,
  "cover": "http://dummyimage.com/182x121.bmp/5fa2dd/ffffff",
  "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  "duration": 2012,
  "contentRating": "R",
  "source": "https://kickstarter.com/nec/euismod/scelerisque/quam.png",
  "tags": [
    "Drama|Romance",
    "Animation"
  ]
}, {
  "id": "862d65f1-158e-4a44-b63b-b2d9465f215a",
  "title": "Love and Other Disasters",
  "year": 2003,
  "cover": "http://dummyimage.com/113x114.jpg/5fa2dd/ffffff",
  "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "duration": 1896,
  "contentRating": "NC-17",
  "source": "http://mlb.com/ultrices/libero/non/mattis.aspx",
  "tags": [
    "Children|Drama",
    "Drama",
    "Adventure|Documentary",
    "Adventure|Western"
  ]
}, {
  "id": "b20291df-f1b5-4bb4-aee8-5795c029f52c",
  "title": "Undefeatable",
  "year": 2009,
  "cover": "http://dummyimage.com/106x216.bmp/ff4444/ffffff",
  "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  "duration": 1975,
  "contentRating": "PG",
  "source": "http://yale.edu/nisl/nunc/nisl.xml",
  "tags": [
    "Documentary|Musical",
    "Comedy",
    "Action|Adventure|Fantasy"
  ]
}, {
  "id": "76599e92-04fe-4821-8f06-953d5b19b1b8",
  "title": "Thief",
  "year": 2004,
  "cover": "http://dummyimage.com/173x174.jpg/cc0000/ffffff",
  "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "duration": 1920,
  "contentRating": "PG",
  "source": "http://blogtalkradio.com/dolor/vel/est/donec/odio.png",
  "tags": [
    "Comedy",
    "Drama|War",
    "Action|Crime|Drama|Thriller"
  ]
}, {
  "id": "2fca0a50-6f75-40b2-b7f8-d584d7471734",
  "title": "Gotti",
  "year": 2008,
  "cover": "http://dummyimage.com/202x235.bmp/cc0000/ffffff",
  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "duration": 2018,
  "contentRating": "G",
  "source": "http://adobe.com/augue/vel/accumsan/tellus/nisi/eu/orci.aspx",
  "tags": [
    "Comedy|Sci-Fi"
  ]
}, {
  "id": "a43ea82f-3828-4c4e-8941-9b325641c5ab",
  "title": "William Vincent (Shadows and Lies)",
  "year": 1987,
  "cover": "http://dummyimage.com/137x136.png/cc0000/ffffff",
  "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "duration": 1950,
  "contentRating": "R",
  "source": "http://wikispaces.com/faucibus/orci.js",
  "tags": [
    "Musical",
    "Drama",
    "Comedy",
    "Documentary",
    "Comedy"
  ]
}, {
  "id": "a4bdcf7e-7d62-4d73-b418-6d3eba304d14",
  "title": "The Man in Possession",
  "year": 2011,
  "cover": "http://dummyimage.com/151x146.bmp/ff4444/ffffff",
  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
  "duration": 2007,
  "contentRating": "PG",
  "source": "http://un.org/pede/posuere/nonummy.html",
  "tags": [
    "Drama|Thriller",
    "Crime|Mystery|Thriller",
    "Drama|Mystery|Romance",
    "Comedy|Fantasy|Horror"
  ]
}, {
  "id": "b28f7278-711b-460e-9752-f83c4e1f7367",
  "title": "Rudo y Cursi (Rough and Vulgar)",
  "year": 1993,
  "cover": "http://dummyimage.com/200x128.jpg/5fa2dd/ffffff",
  "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "duration": 2070,
  "contentRating": "NC-17",
  "source": "https://businessweek.com/erat/fermentum/justo.jpg",
  "tags": [
    "Drama",
    "Comedy|Drama|Musical|Romance",
    "Drama"
  ]
}, {
  "id": "465290f2-6b37-48e8-8639-f064e347cc68",
  "title": "Time Walker (a.k.a. Being From Another Planet)",
  "year": 2001,
  "cover": "http://dummyimage.com/197x142.jpg/ff4444/ffffff",
  "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "duration": 1903,
  "contentRating": "PG-13",
  "source": "https://uol.com.br/accumsan/tellus.json",
  "tags": [
    "Drama"
  ]
}, {
  "id": "2a048bb0-1412-4b71-98e7-04b255c59207",
  "title": "Through the Forest",
  "year": 1988,
  "cover": "http://dummyimage.com/198x247.png/dddddd/000000",
  "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "duration": 1965,
  "contentRating": "PG",
  "source": "http://purevolume.com/aliquam/non/mauris.html",
  "tags": [
    "Action|Adventure|Sci-Fi",
    "Crime|Drama",
    "Action|Thriller",
    "Crime|Drama",
    "Adventure|Children|Fantasy"
  ]
}, {
  "id": "d7e659da-aea3-480e-8be3-b9b8a9555803",
  "title": "Path to War",
  "year": 2003,
  "cover": "http://dummyimage.com/103x205.png/5fa2dd/ffffff",
  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "duration": 2034,
  "contentRating": "G",
  "source": "http://virginia.edu/nisi/eu/orci/mauris/lacinia.xml",
  "tags": [
    "Comedy",
    "Drama",
    "Comedy|Romance"
  ]
}, {
  "id": "cf71ca97-ad58-46f3-b04f-7996a43d4f0c",
  "title": "His Regeneration",
  "year": 1993,
  "cover": "http://dummyimage.com/172x108.bmp/cc0000/ffffff",
  "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
  "duration": 1917,
  "contentRating": "R",
  "source": "http://nydailynews.com/quisque/porta.jsp",
  "tags": [
    "Comedy|Drama|Romance",
    "Drama",
    "Romance|Western"
  ]
}, {
  "id": "f426126b-ff59-432c-bea3-3d81a68b7845",
  "title": "Hard Word, The",
  "year": 2009,
  "cover": "http://dummyimage.com/218x131.bmp/cc0000/ffffff",
  "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  "duration": 1919,
  "contentRating": "NC-17",
  "source": "http://google.com/et/commodo/vulputate/justo/in/blandit/ultrices.png",
  "tags": [
    "Drama",
    "Crime|Drama|Film-Noir",
    "Comedy|Horror|Thriller"
  ]
}, {
  "id": "50377d00-c245-4796-b6da-58b1f334aa21",
  "title": "Circumstance",
  "year": 1996,
  "cover": "http://dummyimage.com/172x139.png/dddddd/000000",
  "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "duration": 1895,
  "contentRating": "G",
  "source": "http://tripod.com/etiam/pretium/iaculis/justo/in/hac/habitasse.jpg",
  "tags": [
    "Crime|Drama|Thriller"
  ]
}, {
  "id": "e7677c5b-b457-4381-b40f-43cfd309a0de",
  "title": "Shanghai Triad (Yao a yao yao dao waipo qiao)",
  "year": 1986,
  "cover": "http://dummyimage.com/250x189.bmp/ff4444/ffffff",
  "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "duration": 2058,
  "contentRating": "PG",
  "source": "http://slate.com/congue/diam/id/ornare.png",
  "tags": [
    "Action|Drama",
    "Children|Comedy",
    "Documentary"
  ]
}, {
  "id": "778aff6b-7215-4819-bf99-92437717fe3c",
  "title": "One, Two, Three",
  "year": 1995,
  "cover": "http://dummyimage.com/239x143.bmp/5fa2dd/ffffff",
  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "duration": 1891,
  "contentRating": "PG",
  "source": "https://diigo.com/magna/ac/consequat/metus/sapien/ut.xml",
  "tags": [
    "Action|Adventure|Crime|Thriller",
    "Drama",
    "Documentary|Musical"
  ]
}, {
  "id": "4611a6aa-f7c9-485b-8d86-ce103cba413d",
  "title": "Cornered",
  "year": 2000,
  "cover": "http://dummyimage.com/131x110.png/dddddd/000000",
  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "duration": 2027,
  "contentRating": "R",
  "source": "https://opera.com/erat/quisque/erat/eros/viverra/eget/congue.aspx",
  "tags": [
    "Drama|Romance",
    "Documentary|IMAX"
  ]
}, {
  "id": "79132252-48e6-44fc-bd74-2b5b92647963",
  "title": "Italian Job, The",
  "year": 1995,
  "cover": "http://dummyimage.com/226x207.bmp/ff4444/ffffff",
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "duration": 1951,
  "contentRating": "R",
  "source": "https://unc.edu/interdum.js",
  "tags": [
    "Drama",
    "Drama|War",
    "Western",
    "Drama|Romance|War"
  ]
}, {
  "id": "8ad31004-ee9b-4ce6-a34e-a7d7f2d2900e",
  "title": "100 Bloody Acres",
  "year": 2009,
  "cover": "http://dummyimage.com/197x152.png/dddddd/000000",
  "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "duration": 1938,
  "contentRating": "G",
  "source": "https://sourceforge.net/sagittis/sapien/cum/sociis.png",
  "tags": [
    "Drama|Thriller",
    "Romance",
    "Crime|Drama|Film-Noir",
    "Crime|Drama|Thriller",
    "Adventure|Comedy|Fantasy|Musical"
  ]
}, {
  "id": "4b680ecd-a147-4d07-b0cd-0fe985798eb4",
  "title": "Sun Wind (Aurinkotuuli)",
  "year": 2005,
  "cover": "http://dummyimage.com/123x152.png/5fa2dd/ffffff",
  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  "duration": 1944,
  "contentRating": "PG",
  "source": "https://unicef.org/in/hac/habitasse/platea/dictumst/maecenas.js",
  "tags": [
    "Comedy|Documentary",
    "Comedy|Drama",
    "Documentary|Musical",
    "Western"
  ]
}, {
  "id": "fc769feb-0075-4f5b-83d9-0caf1659ded8",
  "title": "On the Silver Globe (Na srebrnym globie)",
  "year": 1996,
  "cover": "http://dummyimage.com/152x228.bmp/dddddd/000000",
  "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "duration": 2054,
  "contentRating": "G",
  "source": "https://infoseek.co.jp/odio/justo/sollicitudin/ut/suscipit/a/feugiat.html",
  "tags": [
    "Action|Comedy|Thriller",
    "Comedy",
    "Crime|Drama|Film-Noir"
  ]
}, {
  "id": "c1a663c6-9cd0-498e-aa10-4f1ddbd0539f",
  "title": "Last Exit",
  "year": 1999,
  "cover": "http://dummyimage.com/170x145.jpg/cc0000/ffffff",
  "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "duration": 1986,
  "contentRating": "R",
  "source": "https://ning.com/eros/viverra/eget/congue/eget/semper.xml",
  "tags": [
    "Romance"
  ]
}, {
  "id": "4afc7e35-b57e-4c06-a604-e694ce82844b",
  "title": "Bliss",
  "year": 2008,
  "cover": "http://dummyimage.com/215x236.png/cc0000/ffffff",
  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "duration": 1980,
  "contentRating": "PG",
  "source": "https://si.edu/ut/blandit.png",
  "tags": [
    "Documentary",
    "Drama|Romance",
    "Animation|Children|Comedy|Musical"
  ]
}, {
  "id": "42161071-cb43-43b4-adf4-9938ee280f43",
  "title": "King of the Hill",
  "year": 2001,
  "cover": "http://dummyimage.com/134x164.png/cc0000/ffffff",
  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "duration": 2039,
  "contentRating": "PG",
  "source": "https://goo.gl/vivamus/metus/arcu/adipiscing.js",
  "tags": [
    "Western",
    "Action",
    "Action|Mystery",
    "Drama|Horror|Mystery",
    "Drama"
  ]
}, {
  "id": "f1857906-8f53-431f-9397-e451d853c2f3",
  "title": "Excess Baggage",
  "year": 1991,
  "cover": "http://dummyimage.com/210x164.png/5fa2dd/ffffff",
  "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "duration": 1999,
  "contentRating": "NC-17",
  "source": "https://google.nl/sed/vel.xml",
  "tags": [
    "Horror",
    "Drama|Horror",
    "Adventure|Animation|Children|Comedy|Fantasy",
    "Horror|Sci-Fi|Thriller"
  ]
}, {
  "id": "6b6cf925-93a6-425a-ace2-bb60eb039892",
  "title": "Spring, Summer, Fall, Winter... and Spring (Bom yeoreum gaeul gyeoul geurigo bom)",
  "year": 1990,
  "cover": "http://dummyimage.com/112x201.jpg/ff4444/ffffff",
  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "duration": 2034,
  "contentRating": "R",
  "source": "http://cmu.edu/sit/amet.html",
  "tags": [
    "Comedy"
  ]
}, {
  "id": "c6b9aa21-9692-42bc-80e3-ed5e3005e2ca",
  "title": "Deuces Wild",
  "year": 1997,
  "cover": "http://dummyimage.com/187x223.png/cc0000/ffffff",
  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "duration": 1915,
  "contentRating": "PG",
  "source": "https://ucoz.com/velit/eu/est/congue/elementum/in.png",
  "tags": [
    "Comedy|Drama|Romance"
  ]
}, {
  "id": "6ef7fa2e-74f0-4b44-b5b8-bb694c56eca8",
  "title": "Hot Fuzz",
  "year": 1995,
  "cover": "http://dummyimage.com/132x100.png/5fa2dd/ffffff",
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "duration": 1998,
  "contentRating": "R",
  "source": "https://eventbrite.com/vestibulum/rutrum/rutrum/neque/aenean/auctor/gravida.js",
  "tags": [
    "Drama|War",
    "Animation|Comedy"
  ]
}, {
  "id": "ac3d49ee-e55e-4ca4-9622-140161599520",
  "title": "Island of Dr. Moreau, The",
  "year": 2009,
  "cover": "http://dummyimage.com/109x117.png/cc0000/ffffff",
  "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "duration": 2051,
  "contentRating": "PG",
  "source": "http://boston.com/eget/eros/elementum/pellentesque/quisque/porta/volutpat.json",
  "tags": [
    "Drama",
    "Drama"
  ]
}, {
  "id": "042bc16b-c216-4cf0-bcab-b273b2b8f3c1",
  "title": "Evidence ",
  "year": 2007,
  "cover": "http://dummyimage.com/102x218.png/cc0000/ffffff",
  "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  "duration": 1896,
  "contentRating": "G",
  "source": "https://squarespace.com/nec/nisi/vulputate/nonummy/maecenas/tincidunt.jsp",
  "tags": [
    "Drama|Horror|Thriller",
    "Comedy|Horror",
    "Children|Musical",
    "Comedy|Crime|Drama",
    "Drama"
  ]
}, {
  "id": "401663c3-08c7-4ea2-a234-551e846263f9",
  "title": "Another Happy Day",
  "year": 2009,
  "cover": "http://dummyimage.com/203x198.jpg/ff4444/ffffff",
  "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  "duration": 1998,
  "contentRating": "R",
  "source": "http://blogtalkradio.com/non/velit/donec/diam/neque/vestibulum.jsp",
  "tags": [
    "Comedy",
    "Comedy|Horror",
    "Comedy|Romance",
    "Drama",
    "Action|Thriller|Western"
  ]
}, {
  "id": "982eb5a8-99b2-4ac0-9199-0099f54b7811",
  "title": "3 Blind Mice",
  "year": 1996,
  "cover": "http://dummyimage.com/151x156.bmp/ff4444/ffffff",
  "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "duration": 2049,
  "contentRating": "PG-13",
  "source": "http://myspace.com/vivamus/in/felis/eu/sapien/cursus/vestibulum.aspx",
  "tags": [
    "Drama",
    "Documentary",
    "Drama",
    "Action|Drama|Romance",
    "Drama|War"
  ]
}, {
  "id": "cf51e633-dbe7-452a-a2f8-6ed93e3059c3",
  "title": "Welcome Mr. Marshall (Bienvenido Mister Marshall)",
  "year": 1993,
  "cover": "http://dummyimage.com/221x242.jpg/ff4444/ffffff",
  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "duration": 1924,
  "contentRating": "G",
  "source": "http://smugmug.com/hac/habitasse/platea/dictumst/morbi/vestibulum.jpg",
  "tags": [
    "Crime|Horror|Thriller",
    "Action|Animation|Children|Comedy"
  ]
}, {
  "id": "b6b9c5b4-3403-486c-923a-dc6172aa1a0e",
  "title": "McLibel",
  "year": 1985,
  "cover": "http://dummyimage.com/171x231.jpg/ff4444/ffffff",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "duration": 1962,
  "contentRating": "PG-13",
  "source": "https://squarespace.com/ipsum/dolor/sit/amet.json",
  "tags": [
    "Drama",
    "Action|Adventure|Drama|Romance|Western",
    "Crime|Drama",
    "Comedy|Drama",
    "Drama"
  ]
}, {
  "id": "fcddc513-e07e-45d3-be31-f54a550549d8",
  "title": "Golden Gate",
  "year": 1993,
  "cover": "http://dummyimage.com/207x125.bmp/5fa2dd/ffffff",
  "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  "duration": 2051,
  "contentRating": "NC-17",
  "source": "http://smugmug.com/mauris/viverra/diam/vitae.html",
  "tags": [
    "Comedy",
    "Drama|Romance",
    "Drama|Romance",
    "Crime|Drama",
    "Comedy|Crime|Drama"
  ]
}, {
  "id": "08174384-9e26-45e2-bd93-04996cc03d8c",
  "title": "Story of Me, The (O contador de histórias)",
  "year": 1988,
  "cover": "http://dummyimage.com/237x174.bmp/dddddd/000000",
  "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "duration": 1943,
  "contentRating": "G",
  "source": "http://icq.com/nibh/quisque/id/justo.xml",
  "tags": [
    "Drama",
    "Adventure|Children|Romance",
    "Drama|Thriller",
    "Drama"
  ]
}, {
  "id": "0c6425ee-1b6e-40eb-bdb9-71e5b0c99391",
  "title": "Carrie",
  "year": 2003,
  "cover": "http://dummyimage.com/220x219.jpg/dddddd/000000",
  "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "duration": 2064,
  "contentRating": "PG-13",
  "source": "http://infoseek.co.jp/primis/in/faucibus/orci/luctus/et.json",
  "tags": [
    "Drama",
    "Drama",
    "Adventure|Drama|Fantasy|Musical",
    "Drama|Romance",
    "Horror|Thriller"
  ]
}, {
  "id": "c8ff08d7-14d6-4a80-a9b1-d6cba42916a7",
  "title": "Bad Biology",
  "year": 2012,
  "cover": "http://dummyimage.com/250x246.bmp/ff4444/ffffff",
  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  "duration": 1966,
  "contentRating": "NC-17",
  "source": "https://google.com/sit/amet.xml",
  "tags": [
    "Action|Crime|Thriller"
  ]
}, {
  "id": "1086d6c6-791f-44dd-b320-8757961147b5",
  "title": "Letter to Momo, A (Momo e no tegami)",
  "year": 2004,
  "cover": "http://dummyimage.com/182x165.bmp/ff4444/ffffff",
  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
  "duration": 2042,
  "contentRating": "NC-17",
  "source": "https://yahoo.com/aliquet/maecenas/leo/odio/condimentum/id/luctus.aspx",
  "tags": [
    "Action|Adventure|Sci-Fi",
    "Comedy|Crime"
  ]
}, {
  "id": "4f2207b5-273f-4865-a24a-eb7ed4e6a5f9",
  "title": "The End of the Tour",
  "year": 1997,
  "cover": "http://dummyimage.com/243x208.png/dddddd/000000",
  "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
  "duration": 1975,
  "contentRating": "PG-13",
  "source": "http://apache.org/lorem.json",
  "tags": [
    "Documentary",
    "Comedy"
  ]
}, {
  "id": "f85d9f69-a7a7-4fdc-8bbb-d7e7abcc1322",
  "title": "That Sugar Film",
  "year": 1998,
  "cover": "http://dummyimage.com/107x162.bmp/dddddd/000000",
  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "duration": 1991,
  "contentRating": "R",
  "source": "https://youtu.be/vivamus/vel/nulla/eget/eros/elementum.html",
  "tags": [
    "Sci-Fi"
  ]
}, {
  "id": "f66a718e-c2ac-4e5d-917c-85a79d07e851",
  "title": "House of Wax",
  "year": 1992,
  "cover": "http://dummyimage.com/215x103.jpg/dddddd/000000",
  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "duration": 2054,
  "contentRating": "G",
  "source": "https://hud.gov/convallis/nunc.xml",
  "tags": [
    "Comedy"
  ]
}, {
  "id": "cec235a5-8b35-4185-b4bd-d9f760427d7b",
  "title": "Get2Gether, A",
  "year": 2011,
  "cover": "http://dummyimage.com/189x111.png/ff4444/ffffff",
  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "duration": 1961,
  "contentRating": "PG-13",
  "source": "https://reuters.com/eleifend/pede/libero/quis/orci.aspx",
  "tags": [
    "Comedy|Drama",
    "Horror|Thriller"
  ]
}, {
  "id": "6ca33935-f66d-4525-9018-0abf61841a88",
  "title": "Monkey in Winter, A (Un singe en hiver)",
  "year": 2002,
  "cover": "http://dummyimage.com/115x101.bmp/ff4444/ffffff",
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "duration": 2025,
  "contentRating": "R",
  "source": "http://constantcontact.com/sit/amet/lobortis.jpg",
  "tags": [
    "Action|Adventure|Comedy|Sci-Fi",
    "Drama",
    "Romance|Western"
  ]
}, {
  "id": "2fc0ad4c-54ea-4d76-9ce4-4024c18a746e",
  "title": "Frankenstein Syndrome, The",
  "year": 1995,
  "cover": "http://dummyimage.com/249x226.jpg/5fa2dd/ffffff",
  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "duration": 2000,
  "contentRating": "PG-13",
  "source": "http://cargocollective.com/cum/sociis/natoque/penatibus/et.aspx",
  "tags": [
    "Horror|Sci-Fi|Thriller",
    "Comedy",
    "Action|Animation|Horror"
  ]
}]

module.exports = {
  moviesMock
}