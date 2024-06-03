/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      left: {
        '1/7': '14.2857%',
        '1/5': '20%'
      },
      colors: {
        customeDarkBlue: "#0C2242",
        customeBlue: "#1F67D2",
        customRed: "#F43453",
        headerBox: "#E81D3E",
        textFooter: "#A6B6CE",
        policyBackground: "#F5F9FF",
        searchBar: '#C1DAFF',
        bgButton: '#D6D6D6',
        btNextPrev: '#F34549',
        bgTable: '#D1DDEC',
        unRate: '#DEE2E6'
      },
      width: {
        searchBar: "510px",
      },
    },
  },
  plugins: [],
};
