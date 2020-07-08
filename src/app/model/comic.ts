export default interface Comic {
    id?: number;
    title?: string;
    description?: string;
    creators?: CreatorsInfo;
    images?: Image[];
    thumbnail?: Image;
    prices?: Price[];

}

interface CreatorsInfo {
    available?: number;
    returned?: number;
    items?: Creator[];
}

interface Creator {
    name?: string;
    role?: string;
}

interface Image {
    extension?: string;
    path?: string;
}

interface Price {
    price?: number;
    type?: string;
}
