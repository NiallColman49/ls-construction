function toggleMenu() {
    const toggleButton = document.querySelector(".js-menu-toggle");

    toggleButton.addEventListener("click", () => {
        const hiddenMenu = document.querySelector(".js-menu");
        hiddenMenu.classList.toggle("hidden");
    });
}
