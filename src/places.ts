export type Place = {
    id: string;
    name: string;
    type: string;
    location: string;
}

export const places: Place[] = [
    {
        id: '1',
        name: 'Toshi',
        type: 'sushi',
        location: 'piramidi'
    },
    {
        id: '2',
        name: 'McDonald',
        type: 'fastfood',
        location: 'emisfero'
    },
    {
        id: '3',
        name: 'La Piadineria',
        type: 'piadina',
        location: 'emisfero'
    },
    {
        id: '4',
        name: 'Busato',
        type: 'bar',
        location: ''
    },
    {
        id: '5',
        name: 'Burger King',
        type: 'fastfood',
        location: 'piramidi'
    },
    {
        id: '6',
        name: 'Löwengrube',
        type: 'Tedesco',
        location: 'emisfero'
    },
    {
        id: '7',
        name: 'Billy Tacos',
        type: 'fastfood',
        location: 'emisfero'
    },
    {
        id: '8',
        name: 'Old Wild West',
        type: 'fastfood',
        location: 'emisfero'
    },
]