
const images = [
    { src: "CLA 45S.jpeg", alt: "CLA 45S.jpeg" },
    { src: "pebbles.jpeg", alt: "pebbles.jpeg" },
    { src: "pasture.jpeg", alt: "pasture.jpeg" },
    { src: "Island by Smart Wallpapers Art on Telegram_.jpeg", alt: "Island by Smart Wallpapers Art on Telegram_.jpeg" },
    { src: "sexy.jpeg", alt: "sexy.jpeg" },
    { src: "benz.jpeg", alt: "benz.jpeg" },
    { src: "art.jpeg", alt: "art.jpeg" },
    { src: "nature.jpeg",alt :"art.jpeg" },
  ];
  
  const gallery = document.querySelector(".gallery");
  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    gallery.appendChild(img);
  });
  
  // Modal functionality
  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector(".modal-image");
  const close = document.querySelector(".close");
  
  gallery.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      modal.style.display = "block";
      modalImage.src = e.target.src;
      modalImage.alt = e.target.alt;
    }
  });
  
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
  