import { client } from "@/sanity/client";
import { ProductItem } from "@/types";

const PRODUCT_QUERY = `*[_type == "product"] | order(_createdAt desc)[0...8]`;

export async function getProductsList(): Promise<ProductItem[]> {
  try {
    const products = await client.fetch<ProductItem[]>(
      PRODUCT_QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    return products || [];
  } catch (error) {
    console.error("Failed to fetch products list:", error);
    return [];
  }
}
