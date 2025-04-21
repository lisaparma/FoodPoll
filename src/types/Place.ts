export type Place = {
    id: string;
    name: string;
    type: string;
    zone: string;
    location: string;
    website?: string;
    menu?: string;
}

export enum Zones {
    Office = 'Zona Ufficio (1min)',
    Palladio = 'Palladio (3min)',
    Palladioish = 'Zona Palladio (3min)',
    Piramidi = 'Piramidi (5min)',
    Piramidish = 'Zona Piramidi (5min)',
    Other = 'Altro (10min)'
}