/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Link from "next/link";

const POST_QUERY = `*`;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    options
  );

  console.log(post);
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {post.map((item: any) => (
        <article key={item.id} className="prose">
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <PortableText value={item.content} />
        </article>
      ))}
    </main>
  );
}
