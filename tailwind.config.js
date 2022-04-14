module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "section-three":
          "url('https://i.ibb.co/m8TTmXs/3rd-section-background.png')",
        "section-five": "url('https://i.ibb.co/Gsv9S4V/Group.png')",
        "bg-eight": "url('https://i.ibb.co/jfFpgRK/bg.png')",
        "bg-six": "url('https://i.ibb.co/mt2mGRz/Different-things.png')",
        "courses-bg-one": "url('https://i.ibb.co/097Mrbg/bg1.png')",
        "courses-bg-two": "url('https://i.ibb.co/x7jcH4q/Pattern.png')",
      },
      colors: {
        "color-one": "#0F2F64",
        "color-two": "#536288",
        "color-three": "#1E5DBC",
        "color-four": "#F5F9FE",
        "color-five": "#4EB2F9",
        "color-six": "#8B98B8",
        "color-seven": "#E1E3E8",
        "btn-border": "#1E5DBC",
        "star-color": "#FFB201",
        "color-eight": "#A27FFF",
        "color-ten": "#1EBCB4",
        "color-eleven": "#3F5983",
        "color-twelve": "#E3EEFC",
        "color-thirteen": "#CFD3DD",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
