import { Place, Zones } from "./types/Place";

export const places: Place[] = [
    // Zona ufficio
    {
        id: 'busato',
        name: 'Busato',
        type: 'bar',
        zone: Zones.Office,
    },
    {
        id: 'pontePalladio',
        name: 'Ponte Palladio',
        type: 'ristorante',
        zone: Zones.Office,
        menu: 'https://www.google.com/search?q=ristorante+ponte+palladio+torri+di+quartesolo&oq=ristorante+ponte+&gs_lcrp=EgZjaHJvbWUqDwgAEAAYFBiHAhjjAhiABDIPCAAQABgUGIcCGOMCGIAEMhUIARAuGBQYrwEYxwEYhwIYgAQYjgUyDQgCEC4YrwEYxwEYgAQyBggDEEUYOTIQCAQQLhivARjHARiABBiOBTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDY3NDdqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8#vhid=33:/g/11rbytkq9m&vssid=menu-viewer-entrypoint:~:text=Ristorante%20Ponte%20Palladio-,Visualizza,-il%20menu'
    },
    {
        id: 'dueTorri',
        name: 'Due Torri',
        type: 'ristorante',
        zone: Zones.Office,
        menu: 'https://www.google.com/maps/place/Due+Torri/@45.522538,11.6112072,667m/data=!3m1!1e3!4m16!1m8!3m7!1s0x477f2e15e666135f:0x9754fe082040bdd0!2sDue+Torri!8m2!3d45.522538!4d11.6112072!10e9!16s%2Fg%2F1tg6nzd9!3m6!1s0x477f2e15e666135f:0x9754fe082040bdd0!8m2!3d45.522538!4d11.6112072!10e9!16s%2Fg%2F1tg6nzd9?authuser=0&hl=it&entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D#:~:text=Panoramica-,Menu,-Recensioni'
    },
    
    // Palladio
    {
        id: 'piadineria_palladio',
        name: 'La Piadineria',
        type: 'piadina',
        zone: Zones.Palladio,
        menu: 'https://www.lapiadineria.com/piadine/'
    },
    {
        id: 'poke_palladio',
        name: 'Poke Sun Rice',
        type: 'poke',
        zone: Zones.Palladio,
        menu: 'https://pokesunrice.com/menu/'
    },
    {
        id: 'mcdonald_palladio',
        name: 'McDonald\'s',
        type: 'fastfood',
        zone: Zones.Palladio,
        menu: 'https://www.mcdonalds.it/menu'
    },
    {
        id: 'giovanniRana',
        name: 'Giovanni Rana',
        type: 'pasta',
        zone: Zones.Palladio,
        menu: 'https://www.giovannirana.it/ristoranti/i-nostri-menu'
    },
    {
        id: 'roadhouse',
        name:  'Roadhouse',
        type: 'steakhouse',
        zone: Zones.Palladio,
        menu: 'https://www.roadhouse.it/it/menu'
    },
    {
        id: 'billyTacos',
        name: 'Billy Tacos',
        type: 'fastfood',
        zone: Zones.Palladio,
        menu: 'https://www.billytacos.it/'
    },
    {
        id: 'kfc',
        name: 'KFC',
        type: 'fastfood',
        zone: Zones.Palladio,
        menu: 'https://www.kfc.it/prodotti'
    },
    {
        id: 'nellys',
        name: 'Nelly\'s',
        type: 'hamburger',
        zone: Zones.Palladio,
        menu: 'https://nellysoriginal.com/wp-content/uploads/2024/12/Sito-N-20241204-ITALIANO-1.pdf'
    },
    {
        id: 'micRamen',
        name: 'Mic Ramen',
        type: 'ramen',
        zone: Zones.Palladio,
        menu: 'https://cdn.qr-code-generator.com/account29230346/48949543_1.pdf?Expires=1745093685&Signature=qS2vY4611xz-uIujC-WC~Ko4R3Ho-87etPeGCoRzXdaursrY~5CnFb4i-BnWeIgJ91FfJwfbWWZw201jYFkG9SRoAz3NeHeeujCxo5hVvqGLKEylikc11Do4qndDYjXihhvTFNxVhb7UmqullqMIjKSp1NiHYcIZGPLAIxXaP1nqs7rDdj2iXFa2hta2HmrAAwxxajZJ3FM1LUCBtRxD19FUhX~dQFRq4BBcCbAXosYmqIavYYah8-3oQw4rCFdVwxboCOebWRF1LKrj4ZQrEm-b8BrELENw9equmAdhJiKzUHKKkOrNNjF9wadHFZe~74QFtQMPp4J5MM-yD81TUQ__&Key-Pair-Id=KKMPOJU8AYATR'
    },
    
    // Zona Palladio
    {
        id: 'Lowengruve',
        name: 'Löwengrube',
        type: 'tedesco',
        zone: Zones.Palladioish,
        menu: 'https://lowengrube.it/it/menu'
    },
    {
        id: 'alCompany',
        name: 'Al Company',
        type: 'ristorante',
        zone: Zones.Palladioish,
        menu: 'https://www.ristorantealcompany.it/cp-content/uploads/2025/03/menu_al_company_01_2025.pdf'
    },
    {
        id: 'anatoliaKebap',
        name: 'Anatolia Kebap Pizza Grill',
        type: 'kebab',
        zone: Zones.Palladioish,
        menu: 'https://anatoliakebap.com/'
    },
    
    // Piramidi
    {
        id: 'mcdonald_piramidi',
        name: 'McDonald\'s (Piramidi)',
        type: 'fastfood',
        zone: Zones.Piramidi,
        menu: 'https://www.mcdonalds.it/menu'
    },
    {
        id: 'piadineria_piramidi',
        name: 'La Piadineria (Piramidi)',
        type: 'piadina',
        zone: Zones.Piramidi,
        menu: 'https://www.lapiadineria.com/piadine/'
    },
    {
        id: 'poke_piramidi',
        name: 'Poke Sun Rice (Piramidi)',
        type: 'poke',
        zone: Zones.Piramidi,
    },
    {
        id: 'toasteria',
        name: 'Toasteria Italiana',
        type: 'toast',
        zone: Zones.Piramidi,
        menu: 'https://www.toasteriaitaliana.com/prodotti-toasteria/'
    },
    {
        id: 'laPanineria',
        name: 'La Panineria 1991',
        type: 'panini',
        zone: Zones.Piramidi,
    },
    
    // Zona Piramidi
    {
        id: 'vecchiaFattoria',
        name: 'La Vecchia Fattoria',
        type: 'Ristorante',
        zone: Zones.Piramidish,
        menu: 'https://www.vecchiafattoria.com/menu'
    },
    {
        id: 'oldWildWest',
        name: 'Old Wild West',
        type: 'fastfood',
        zone: Zones.Piramidish,
        menu: 'https://www.oldwildwest.it/menu'
    },
    {
        id: 'toshi',
        name: 'Toshi',
        type: 'sushi',
        zone: Zones.Piramidish,
        menu: 'https://vicenza.toshirestaurant.it/wp-content/uploads/2024/01/Toshi-Menu-Pranzo_compressed.pdf'
    },
    {
        id: 'burgerKing',
        name: 'Burger King',
        type: 'fastfood',
        zone: Zones.Piramidish,
        menu: 'https://www.burgerking.it/prodotti'
    },
    {
        id: 'rooster',
        name: 'Rooster',
        type: 'griglia',
        zone: Zones.Piramidish,
        menu: 'https://irp.cdn-website.com/fbb151a0/files/uploaded/Menu-_Torri.pdf'
    }
    
    // Altro
]