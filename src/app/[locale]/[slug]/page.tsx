/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Link from "next/link";

const POST_QUERY = `*[_type == "product"]`;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: { slug: string; locale?: string };
}) {
  const { slug, locale } = params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    options
  );
  console.log("Post data:", post);
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {post.map((item: any) => (
        <article key={item._id} className="prose">
          <h1>{item.name?.[locale ?? "en"] || item.name?.en || ""}</h1>
          <p className="text-gray-600 mb-4">
            {item.description?.[locale ?? "en"] || item.description?.en || ""}
          </p>
          <PortableText value={item.content} />
        </article>
      ))}
    </main>
  );
}
