// Delay in milliseconds before loading actual images
const delay = 800;

// Get all placeholder images
const placeholderImages = document.querySelectorAll(".placeholder-img");

// Replace placeholder images with actual images after a delay
setTimeout(() => {
  placeholderImages.forEach((image) => {
    const src = image.getAttribute("data-src");
    if (src) {
      image.setAttribute("src", src);
    }
  });
}, delay);
