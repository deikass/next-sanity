import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = 'if5ipm03';
const dataset = 'production';

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto('format').fit('max')