import { client } from "@/sanity/client";
import { ProductItem } from "@/types";

const PRODUCT_QUERY = `*[_type == "product"] | order(_createdAt desc)[0...8]`;

export const productsList = await client.fetch<ProductItem[]>(PRODUCT_QUERY);
