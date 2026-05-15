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

export type ProductFeature = {
  _key: string;
  en: string;
  fa: string;
  ps: string;
};

export type ProductImage = {
  _key: string;
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

export type ProductItem = {
  _id: string;
  _type: string;
  slug: {
    _type: string;
    current: string;
  };
  code: string;
  name: {
    en: string;
    fa: string;
    ps: string;
  };
  description: {
    en: string;
    fa: string;
    ps: string;
  };
  images: ProductImage[];
  category: {
    _ref: string;
    _type: string;
  };
  sizes?: string[];
  features: ProductFeature[];
  price: number;
};