import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vojt76kk';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

const builder = imageUrlBuilder({
  projectId,
  dataset,
});

export const urlFor = (source: SanityImageSource) => builder.image(source);