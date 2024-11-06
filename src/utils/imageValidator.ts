import { IMAGE_URL } from "../services/queryUrls";

// Default image URL
const DEFAULT_IMAGE = "path/to/default/image.png";

export default function imageValidator(imagePath?: string) {
  if (!imagePath) return require("@/src/assets/images/image-not-found.png");
  const imageRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
  const isImageValid = imageRegex.test(imagePath);

  if (isImageValid) {
    return {
      uri: `${IMAGE_URL}/${imagePath}`,
    };
  } else {
    return {
      uri: `${IMAGE_URL}${DEFAULT_IMAGE}`,
    };
  }
}
