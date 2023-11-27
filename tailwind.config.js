/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImg
      backgroundImage: {
        card1: "url('assets/card1.png')",
        card2: "url('assets/card2.png')",
        card3: "url('assets/card3.png')",
      },
      // backgroundImg

      // color
      colors: {
        nav: '#FAE3B6',
        btnBorder: '#FDBB57',
        btnHover: 'rgba(0, 0, 0, 0.288)',
        yearBg: '#FEECC8',
        sellerBg: '#CFA485;',
        WhiteBg: 'rgba(240, 248, 255, 0.291)',
      },
      // color

      // Font Weight
      fontWeight: {
          light: '300',
          normal: '400',
          medium: '500',
          semibold: '600',
          bold: '700',
      },
      // Font Weight
      fontFamily: {
        Poppins: [ 'Poppins', 'sans-serif'],
        Frank: ['Frank Ruhl Libre', 'serif'],
        Podkova: ['Podkova', 'serif']
        
      },
      // Font Weight
    },
  },
  plugins: [],
}

