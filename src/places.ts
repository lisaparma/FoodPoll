import { Place, Zones } from "./types/Place";

export const places: Place[] = [
    // Zona ufficio
    {
        id: 'busato',
        name: 'Pasticceria Busato',
        type: 'bar',
        zone: Zones.Office,
        website: "https://www.pasticceriabusato.it/",
        location: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x477f2e1652d3e37f:0x73b265bd42a7aab?sa=X&ved=1t:8290&ictx=111"
    },
    {
        id: 'pontePalladio',
        name: 'Ponte Palladio',
        type: 'ristorante',
        zone: Zones.Office,
        website: "https://www.ristorantepontepalladio.com/",
        menu: 'https://www.google.com/search?q=ristorante+ponte+palladio+torri+di+quartesolo&oq=ristorante+ponte+&gs_lcrp=EgZjaHJvbWUqDwgAEAAYFBiHAhjjAhiABDIPCAAQABgUGIcCGOMCGIAEMhUIARAuGBQYrwEYxwEYhwIYgAQYjgUyDQgCEC4YrwEYxwEYgAQyBggDEEUYOTIQCAQQLhivARjHARiABBiOBTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDY3NDdqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8#vhid=33:/g/11rbytkq9m&vssid=menu-viewer-entrypoint:~:text=Ristorante%20Ponte%20Palladio-,Visualizza,-il%20menu',
        location: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x477f2fec10daff8f:0x33aa0e066c11a309?sa=X&ved=1t:8290&ictx=111"
    },
    {
        id: 'dueTorri',
        name: 'Due Torri',
        type: 'ristorante',
        zone: Zones.Office,
        location: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x477f2e15e666135f:0x9754fe082040bdd0?sa=X&ved=1t:8290&ictx=111'
    },
    
    // Palladio
    {
        id: 'piadineria_palladio',
        name: 'La Piadineria',
        type: 'piadina',
        zone: Zones.Palladio,
        website: 'https://www.lapiadineria.com/',
        menu: 'https://www.lapiadineria.com/piadine/',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/11btws11z1&sa=X&ved=2ahUKEwji6qapnOmMAxU-AtsEHfKiJ-4Q8G0oAHoECEsQAQ'
    },
    {
        id: 'poke_palladio',
        name: 'Poke Sun Rice',
        type: 'poke',
        zone: Zones.Palladio,
        website: 'https://pokesunrice.com/',
        menu: 'https://pokesunrice.com/menu/',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/11btws11z1&sa=X&ved=2ahUKEwji6qapnOmMAxU-AtsEHfKiJ-4Q8G0oAHoECEsQAQ'
    },
    {
        id: 'mcdonald_palladio',
        name: 'McDonald\'s',
        type: 'fastfood',
        zone: Zones.Palladio,
        website: 'https://www.mcdonalds.it/',
        menu: 'https://www.mcdonalds.it/menu',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/11btws11z1&sa=X&ved=2ahUKEwji6qapnOmMAxU-AtsEHfKiJ-4Q8G0oAHoECEsQAQ'
    },
    {
        id: 'giovanniRana',
        name: 'Giovanni Rana',
        type: 'pasta',
        zone: Zones.Palladio,
        website: 'https://www.giovannirana.it/',
        menu: 'https://www.giovannirana.it/ristoranti/i-nostri-menu',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/11btws11z1&sa=X&ved=2ahUKEwji6qapnOmMAxU-AtsEHfKiJ-4Q8G0oAHoECEsQAQ'
    },
    {
        id: 'roadhouse',
        name:  'Roadhouse',
        type: 'steakhouse',
        zone: Zones.Palladio,
        website: 'https://www.roadhouse.it/it',
        menu: 'https://www.roadhouse.it/it/menu',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/11btws11z1&sa=X&ved=2ahUKEwji6qapnOmMAxU-AtsEHfKiJ-4Q8G0oAHoECEsQAQ'
    },
    {
        id: 'billyTacos',
        name: 'Billy Tacos',
        type: 'fastfood',
        zone: Zones.Palladio,
        website: 'https://www.billytacos.it/',
        menu: 'https://www.billytacos.it/menu',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/11btws11z1&sa=X&ved=2ahUKEwji6qapnOmMAxU-AtsEHfKiJ-4Q8G0oAHoECEsQAQ'
    },
    {
        id: 'kfc',
        name: 'KFC',
        type: 'fastfood',
        zone: Zones.Palladio,
        website: 'https://www.kfc.it/',
        menu: 'https://www.kfc.it/prodotti',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/11btws11z1&sa=X&ved=2ahUKEwji6qapnOmMAxU-AtsEHfKiJ-4Q8G0oAHoECEsQAQ'
    },
    {
        id: 'nellys',
        name: 'Nelly\'s',
        type: 'hamburger',
        zone: Zones.Palladio,
        website: 'https://nellysoriginal.com/',
        menu: 'https://nellysoriginal.com/wp-content/uploads/2024/12/Sito-N-20241204-ITALIANO-1.pdf',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/11btws11z1&sa=X&ved=2ahUKEwji6qapnOmMAxU-AtsEHfKiJ-4Q8G0oAHoECEsQAQ'
    },
    {
        id: 'micRamen',
        name: 'Mic Ramen',
        type: 'ramen',
        zone: Zones.Palladio,
        website: 'https://www.micramenitalia.it/ristorante-vicenza/',
        menu: 'https://cdn.qr-code-generator.com/account29230346/48949543_1.pdf?Expires=1745093685&Signature=qS2vY4611xz-uIujC-WC~Ko4R3Ho-87etPeGCoRzXdaursrY~5CnFb4i-BnWeIgJ91FfJwfbWWZw201jYFkG9SRoAz3NeHeeujCxo5hVvqGLKEylikc11Do4qndDYjXihhvTFNxVhb7UmqullqMIjKSp1NiHYcIZGPLAIxXaP1nqs7rDdj2iXFa2hta2HmrAAwxxajZJ3FM1LUCBtRxD19FUhX~dQFRq4BBcCbAXosYmqIavYYah8-3oQw4rCFdVwxboCOebWRF1LKrj4ZQrEm-b8BrELENw9equmAdhJiKzUHKKkOrNNjF9wadHFZe~74QFtQMPp4J5MM-yD81TUQ__&Key-Pair-Id=KKMPOJU8AYATR',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/11btws11z1&sa=X&ved=2ahUKEwji6qapnOmMAxU-AtsEHfKiJ-4Q8G0oAHoECEsQAQ'
    },
    
    // Zona Palladio
    {
        id: 'Lowengruve',
        name: 'Löwengrube',
        type: 'tedesco',
        zone: Zones.Palladioish,
        website: 'https://lowengrube.it/it',
        menu: 'https://lowengrube.it/it/menu',
        location: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x477f2fd13af5135b:0x5ad4e4b73b375807?sa=X&ved=1t:8290&ictx=111'
    },
    {
        id: 'alCompany',
        name: 'Al Company',
        type: 'ristorante',
        zone: Zones.Palladioish,
        website: 'https://www.ristorantealcompany.it/',
        menu: 'https://www.ristorantealcompany.it/cp-content/uploads/2025/03/menu_al_company_01_2025.pdf',
        location: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x477f31e2866b50d5:0xb88d85661b49805d?sa=X&ved=1t:8290&ictx=111'
    },
    {
        id: 'anatoliaKebap',
        name: 'Anatolia Kebap Pizza Grill',
        type: 'kebab',
        zone: Zones.Palladioish,
        website: 'https://anatoliakebap.com/',
        menu: 'https://anatoliakebap.com/',
        location: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x477f31f4e50f978f:0x4a691fd6f1012139?sa=X&ved=1t:8290&ictx=111'
    },
    
    // Piramidi
    {
        id: 'mcdonald_piramidi',
        name: 'McDonald\'s (Piramidi)',
        type: 'fastfood',
        zone: Zones.Piramidi,
        website: 'https://www.mcdonalds.it/',
        menu: 'https://www.mcdonalds.it/menu',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/1tfyzzgf&sa=X&ved=2ahUKEwj_9_OcnOmMAxUqxQIHHVTcJu4Q8G0oAHoECFIQAQ'
    },
    {
        id: 'piadineria_piramidi',
        name: 'La Piadineria (Piramidi)',
        type: 'piadina',
        zone: Zones.Piramidi,
        menu: 'https://www.lapiadineria.com/piadine/',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/1tfyzzgf&sa=X&ved=2ahUKEwj_9_OcnOmMAxUqxQIHHVTcJu4Q8G0oAHoECFIQAQ'
    },
    {
        id: 'poke_piramidi',
        name: 'Poke Sun Rice (Piramidi)',
        type: 'poke',
        zone: Zones.Piramidi,
        website: 'https://pokesunrice.com/',
        menu: 'https://pokesunrice.com/menu/',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/1tfyzzgf&sa=X&ved=2ahUKEwj_9_OcnOmMAxUqxQIHHVTcJu4Q8G0oAHoECFIQAQ'
    },
    {
        id: 'toasteria',
        name: 'Toasteria Italiana',
        type: 'toast',
        zone: Zones.Piramidi,
        website: 'https://www.toasteriaitaliana.com/',
        menu: 'https://www.toasteriaitaliana.com/prodotti-toasteria/',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/1tfyzzgf&sa=X&ved=2ahUKEwj_9_OcnOmMAxUqxQIHHVTcJu4Q8G0oAHoECFIQAQ'
    },
    {
        id: 'laPanineria',
        name: 'La Panineria 1991',
        type: 'panini',
        zone: Zones.Piramidi,
        website: 'https://www.lapiadineria.com/',
        menu: 'https://www.lapiadineria.com/piadine/',
        location: 'https://www.google.com/viewer/place?sca_esv=c7370d0d94b48ee2&output=search&mid=/g/1tfyzzgf&sa=X&ved=2ahUKEwj_9_OcnOmMAxUqxQIHHVTcJu4Q8G0oAHoECFIQAQ'
    },
    
    // Zona Piramidi
    {
        id: 'vecchiaFattoria',
        name: 'La Vecchia Fattoria',
        type: 'Ristorante',
        zone: Zones.Piramidish,
        location: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x477f2e438dc55695:0x4dce009b58e362f4?sa=X&ved=1t:8290&ictx=111'
    },
    {
        id: 'oldWildWest',
        name: 'Old Wild West',
        type: 'fastfood',
        zone: Zones.Piramidish,
        website: 'https://www.oldwildwest.it/Home',
        menu: 'https://www.oldwildwest.it/menu',
        location: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x477f2e5b0611e337:0xdc9662f9c90e6248?sa=X&ved=1t:8290&ictx=111'
    },
    {
        id: 'toshi',
        name: 'Toshi',
        type: 'sushi',
        zone: Zones.Piramidish,
        website: 'https://vicenza.toshirestaurant.it/',
        menu: 'https://vicenza.toshirestaurant.it/wp-content/uploads/2024/01/Toshi-Menu-Pranzo_compressed.pdf',
        location: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x477f2f0b58d8e8bf:0x38c50def832b0d1a?sa=X&ved=1t:8290&ictx=111'
    },
    {
        id: 'burgerKing',
        name: 'Burger King',
        type: 'fastfood',
        zone: Zones.Piramidish,
        website: 'https://www.burgerking.it/',
        menu: 'https://www.burgerking.it/prodotti',
        location: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x477f2e5aafd31b69:0x74662eec3939d53e?sa=X&ved=1t:8290&ictx=111'
    },
    {
        id: 'rooster',
        name: 'Rooster',
        type: 'griglia',
        zone: Zones.Piramidish,
        website: 'https://www.roosterhouse.it/',
        menu: 'https://irp.cdn-website.com/fbb151a0/files/uploaded/Menu-_Torri.pdf',
        location: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x477f2e5001bf7cbb:0x6ac63c18ce4722ce?sa=X&ved=1t:8290&ictx=111'
    }
    
    // Altro
]