const images = [
    "illustration/CH 1.png",
    "illustration/CH 2.png",
    "illustration/CH 3.png",
    "illustration/CH 4.png",
    "illustration/CH 5.png",
    "illustration/CH 6.png",
    "illustration/CH 7.png",
    "illustration/CH 8.png",
    "illustration/CH 9.png",
    "illustration/CH 10.png",
    "illustration/CH 11.png",
    "illustration/CH 12.png",
    "illustration/CH 13.png",
    "illustration/CH 14.png",
];

const img_gallery = document.getElementById("illustration-gallery");

for (let i = 0; i < images.length; i++) {
    const container = document.createElement("div");
    container.className = "bg-[#D6D6D6] rounded-xl p-4 flex justify-center";

    const img = document.createElement("img");
    img.src = images[i];
    img.alt = `Illustration ${i + 1}`;
    img.className = "w-full h-auto rounded-lg object-cover";

    container.appendChild(img);
    img_gallery.appendChild(container);
}

const UIUX = [
    "UI_UX/Branding Ocean Blue_page-0001.jpg",
    "UI_UX/Branding Ocean Blue_page-0002.jpg",
];

const UIUXgallery = document.getElementById("UIUX-gallery");

for (let i = 0; i < UIUX.length; i++) {
    const container = document.createElement("div");
    container.className = "bg-[#D6D6D6] rounded-xl p-4 flex justify-center";

    const img = document.createElement("img");
    img.src = UIUX[i];
    img.alt = `UIUX ${i + 1}`;
    img.className = "w-full h-auto rounded-lg object-cover";

    container.appendChild(img);
    UIUXgallery.appendChild(container);
}
