import { IMAGE_URL } from "../services/queryUrls";

// Default image URL
const DEFAULT_IMAGE = "path/to/default/image.png";

export default function imageValidator(imagePath: string) {
  const imageRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
  const isImageValid = imageRegex.test(imagePath);

  if (isImageValid) {
    return {
      uri: `${IMAGE_URL}/${imagePath}`,
    };
  } else {
    // Return the default image if the path is invalid
    return {
      uri: `${IMAGE_URL}${DEFAULT_IMAGE}`,
    };
  }
}
