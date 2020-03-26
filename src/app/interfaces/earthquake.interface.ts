export interface Earthquakes {
    earthquakes: Earthquake[];
}

export interface Earthquake {
    datetime: string;
    depth: number;
    lng: number;
    src: string;
    eqid: string;
    magnitude: number;
    lat: number;
}
