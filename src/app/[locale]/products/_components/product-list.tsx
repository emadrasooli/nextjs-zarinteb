import { client } from "@/sanity/client";
import { ProductItem } from "@/types";
import { SanityDocument } from "next-sanity";
import ProductCard from "./product-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const POST_QUERY = `*[_type == "product"]`;

export default async function ProductList(context: {
  params: { locale?: string };
}) {
  const { params } = context;
  const { locale } = await params;
  const post = await client.fetch<SanityDocument>(POST_QUERY);

  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-3 my-8">
      <div className="flex items-center justify-between py-4 gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Products</h1>
        </div>
        <div className="flex gap-3">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Newest</SelectItem>
              <SelectItem value="dark">Best selling</SelectItem>
              <SelectItem value="system">Most popular</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              {["xs", "sl", "md", "lg", "xl", "2xl"].map((size) => (
                <div key={size} className="flex items-center px-2 py-1 gap-1">
                  <input
                    type="checkbox"
                    id={`size-${size}`}
                    name="sizes"
                    value={size}
                    className="mr-2"
                  />
                  <label htmlFor={`size-${size}`}>{size}</label>
                </div>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {post.map((item: ProductItem) => (
          <ProductCard product={item} key={item._id} locale={locale ?? "en"} />
        ))}
      </div>
    </section>
  );
}
