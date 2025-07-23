/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f2f6f9",
        darkslategray: {
          "100": "#343a40",
          "200": "#2b2c2f",
          "300": "rgba(52, 58, 64, 0.7)",
        },
        "black-white-white": "#fff",
        darkgray: "#ab9797",
        "indigo-500": "#444bd3",
        mediumslateblue: "#6b73fa",
        mistyrose: "#f5e0e0",
        tomato: "#f15656",
        gray: {
          "100": "#272a2e",
          "200": "#1a1a1a",
        },
        black: "#000",
        burlywood: "#bc8f5b",
        lime: "#00ff00",
        dimgray: {
          "100": "#595e61",
          "200": "#515358",
        },
      },
      spacing: {},
      fontFamily: {
        "button-sm": "Poppins",
        inter: "Inter",
        acme: "Acme",
        "inria-serif": "'Inria Serif'",
      },
      borderRadius: {
        xl: "20px",
        mini: "15px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      "5xl": "24px",
      "61xl": "80px",
      xl: "20px",
      "13xl": "32px",
      "17xl": "36px",
      "45xl": "64px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#272a2e",
          "200": "#1a1a1a",
          "300": "#888a91",
          "400": "#727974",
          "600": "#1b1b1c",
          "800": "#101317",
        },
        dimgray: {
          "100": "#595e61",
          "200": "#515358",
          "300": "#4d4f4f",
        },
        darkslategray: {
          "100": "#343a40",
          "200": "#2b2c2f",
          "300": "rgba(52, 58, 64, 0.7)",
          "400": "#454d46",
          "500": "#42474a",
        },
        "black-white-white": "#fff",
        black: "#000",
        darkgray: "#ab9797",
        olivedrab: "#86b54d",
        whitesmoke: "#f2f6f9",
        "indigo-500": "#444bd3",
        mediumslateblue: "#6b73fa",
        mistyrose: "#f5e0e0",
        tomato: "#f15656",
        burlywood: "#bc8f5b",
        lime: "#00ff00",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "button-sm": "Poppins",
        acme: "Acme",
        "inria-serif": "'Inria Serif'",
      },
      borderRadius: {
        mini: "15px",
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      smi: "13px",
      mini: "15px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      sm: "14px",
      xs: "12px",
      lgi: "19px",
      "61xl": "80px",
      "7xl": "26px",
      "17xl": "36px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};