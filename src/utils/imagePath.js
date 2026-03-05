// Utility function to get correct image path for GitHub Pages
export const getImagePath = (imagePath) => {
  const basePath = import.meta.env.BASE_URL || '/';
  // Remove leading slash if exists and add base path
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return basePath + cleanPath;
};

export default getImagePath;