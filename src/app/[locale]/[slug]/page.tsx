/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

const POST_QUERY = `*[_type == "product"]`;

const options = { next: { revalidate: 30 } };

export default async function PostPage(context: {
  params: { slug: string; locale?: string };
}) {
  const { params } = context;
  const { slug, locale } = await params; // Ensure params is awaited
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    options
  );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      {post.map((item: any) => (
        <article key={item._id} className="prose">
          <h1>{item.name?.[locale ?? "en"] || item.name?.en || ""}</h1>
          <p className="text-gray-600 mb-4">
            {item.description?.[locale ?? "en"] || item.description?.en || ""}
          </p>
        </article>
      ))}
    </main>
  );
}
