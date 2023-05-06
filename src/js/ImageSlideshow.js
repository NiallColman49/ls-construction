function imageSlideshow() {
    let images = [
        "../../src/assets/slideshow/slide-image-1.jpg",
        "../../src/assets/slideshow/slide-image-2.jpg",
        "../../src/assets/slideshow/slide-image-3.jpg",
        "../../src/assets/slideshow/slide-image-4.jpg",
        "../../src/assets/slideshow/slide-image-5.jpg",
    ];

    let index = 0;
    const imgElement = document.querySelector(".slideshow-placeholder");

    function change() {
        imgElement.src = images[index];
        index > 1 ? (index = 0) : index++;
    }

    setInterval(change, 1000);
}
