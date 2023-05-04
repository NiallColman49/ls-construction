/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        extend: {
            fontFamily: {
                body: ["Maison Neue"],
                medium: ["Maax Medium"],
                bold: ["Maax"],
                decor: ["Copyright Klim Type Foundry"],
                mono: ["Maison Neue"],
                copy: ["Copyright Klim Type Foundry"],
                primary: ["Programme Light"],
                primaryTitle: ["Programme Bold"],
            },
            colors: {
                "laser-green": "#3f4d52",
                "laser-grey": "#DED6CF",
                "laser-blue": "#1c2030",
                "laser-light-grey": "#a9a9a9",
            },
            minHeight: {
                75: "75vh",
                10: "10vh",
                15: "25vh",
            },
            height: {
                640: "40rem",
                725: "45rem",
                775: "775px",
                70: "70vh",
            },
            width: {
                640: "40rem",
                480: "30rem",
                250: "250px",
                32: "32px",
            },
            spacing: {
                "space-between": "space-between",
            },
            backgroundImage: {
                "gold-background": "url('./assets/gold-logo-background.svg')",
            },
            fontSize: {
                mobileTitle: ["27px"],
                emailLarger: ["39px"],
            },
            lineHeight: {
                classic: "1.2",
                "paragraph-text": "33px",
            },
        },
    },
    plugins: [],
};
