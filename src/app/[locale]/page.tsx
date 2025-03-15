// import { type SanityDocument } from "next-sanity";

// import { client } from "@/sanity/client";
import { Navbar } from "@/components/navbar/Navbar";
import Hero from "@/components/homePage/Hero";
import StatsSection from "@/components/homePage/statsSection";
import ProductList from "@/components/homePage/ProductList";
import Footer from "@/components/Footer";
import LogoSection from "@/components/LogoSection";
import ServicesSection from "@/components/homePage/ServicesSection";

// const POSTS_QUERY = `*[
//   _type == "post"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

// const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  // const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main>
      <Navbar />

      <Hero />

      <StatsSection />

      <ProductList />

      <LogoSection />

      <ServicesSection />

      <Footer />
    </main>
  );
}

      {/* <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <Button variant={"default"} size={"lg"}>Click</Button>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul> */}