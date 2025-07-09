export interface LocalizedContent {
    name: string;
    description?: string;
}

export interface ProductListType {
    id: number,
    imageSrc: string;
    href: string;
    locals: {
        en: LocalizedContent;
        fa: LocalizedContent;
        ps: LocalizedContent;
    }
}