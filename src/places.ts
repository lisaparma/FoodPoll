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
        type: 'Sushi',
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
    }
]