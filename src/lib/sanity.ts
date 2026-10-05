import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "vojt76kk";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const builder = createImageUrlBuilder({
  projectId,
  dataset,
});

export const urlFor = (source: SanityImageSource) => builder.image(source);
