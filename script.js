let jvTab = [
  {
    src: "https://gaming-cdn.com/videos/products/13588/800x450/ea-sports-fc-24-pc-jeu-ea-app-preview.webm?v=1690290652",
    title: "FC 24",
    price: "65.99",
  },
  {
    src: "https://gaming-cdn.com/videos/products/14364/800x450/cities-skylines-ii-ultimate-edition-ultimate-edition-pc-jeu-steam-preview.webm?v=1698239635",
    title: "Cities Skyline II",
    price: "59.99",
  },
  {
    src: "https://gaming-cdn.com/videos/products/12715/800x450/lords-of-the-fallen-pc-jeu-steam-europe-preview.webm?v=1697011781",
    title: "Lord of the Fallen",
    price: "45.99",
  },
];

function generateCard() {
  const container = document.querySelector(".container");
  const cardTemplate = document.getElementById("card");

  jvTab.forEach((cardData) => {
    const cardClone = document.importNode(cardTemplate.content, true);
    const card = cardClone.querySelector(".card");
    const video = cardClone.querySelector(".video");
    const title = cardClone.querySelector("#title");
    const price = cardClone.querySelector("#price");

    video.src = cardData.src;
    title.textContent = cardData.title;
    price.textContent = `${cardData.price} $`;

    container.appendChild(cardClone);

    video.addEventListener("mouseover", function () {
      video.style.borderRadius = "2px";
      if (video.paused) {
        video.play();
        video.currentTime = 0; // Remet la vidéo au début
      }
    });

    video.addEventListener("mouseout", function () {
      video.style.borderRadius = "";
      if (!video.paused) {
        video.pause();
      }
    });
  });
}

export { generateCard };
