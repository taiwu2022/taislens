const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const photos = [
  {
    title: "Light, distance, weather",
    meta: "Placeholder / landscape",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=82",
    alt: "A house beside a lake at golden hour.",
    layout: "span-wide",
  },
  {
    title: "Road notes",
    meta: "Placeholder / travel",
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=82",
    alt: "A person walking on a road through a vast landscape.",
    layout: "",
  },
  {
    title: "Open space",
    meta: "Placeholder / vertical",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=82",
    alt: "A night sky above snowy mountains.",
    layout: "tall",
  },
  {
    title: "Still water",
    meta: "Placeholder / lake",
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=82",
    alt: "A calm lake surrounded by mountains.",
    layout: "",
  },
  {
    title: "Evening archive",
    meta: "Placeholder / warm light",
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1400&q=82",
    alt: "Sunlight filtering through a forest.",
    layout: "span-wide",
  },
];

const photoGrid = document.querySelector("#photo-grid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("p");
const lightboxClose = lightbox?.querySelector(".lightbox-close");

if (photoGrid) {
  photos.forEach((photo) => {
    const card = document.createElement("button");
    card.className = `photo-card ${photo.layout}`.trim();
    card.type = "button";

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.alt;

    const caption = document.createElement("span");
    caption.className = "photo-caption";
    caption.textContent = photo.title;

    const meta = document.createElement("small");
    meta.textContent = photo.meta;
    caption.append(meta);

    card.append(image, caption);
    card.addEventListener("click", () => {
      if (!lightbox || !lightboxImage || !lightboxCaption) return;
      lightboxImage.src = photo.src;
      lightboxImage.alt = photo.alt;
      lightboxCaption.textContent = `${photo.title} — ${photo.meta}`;
      lightbox.showModal();
    });
    photoGrid.append(card);
  });
}

lightboxClose?.addEventListener("click", () => {
  lightbox?.close();
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
