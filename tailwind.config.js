/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        colors: {
            //paleta de colores
            primario: '#EBCF00',
            secundario1: '#EB9001',
            secundario2: '#EBDA59',
            acento: '#EB3F07'
        },
        screens: {
            xs : '360px'
        }
    },
  },
  plugins: [],
}

