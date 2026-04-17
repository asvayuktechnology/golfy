/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
  extend: {
    colors: {
      primary: '#1781FE', 
      secondary: '#FFB52A',
    },
    fontFamily: {
      // sans: ['var(--font-primary)', 'sans-serif'],
      sans: ["var(--font-poppins)", "sans-serif"],
      roboto: ["var(--font-roboto)", "sans-serif"],
      
    },
    animation: {
      marquee: 'marquee 25s linear infinite',
    },
    keyframes: {
      marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
    },
    container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
        },
      },
  }
},
  plugins: [],
}


// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         blue:{
//           900: "#ff6b00",
//         },
//         orange: {
//           25:"#fff",
//           50: "#fff7ed",
//           100: "#ffedd5",
//           200: "#fed7aa",
//           300: "#fdba74",
//           400: "#fb923c",
//           500: "#f97316",
//           600: "#ea580c",
//           700: "#c2410c",
//           800: "#9a3412",
//           900: "#7c2d12",
//         },
//       },
//       fontFamily: {
//         sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
//       },
//       animation: {
//         marquee: "marquee 30s linear infinite",
//       },
//       keyframes: {
//         marquee: {
//           "0%": { transform: "translateX(0%)" },
//           "100%": { transform: "translateX(-50%)" },
//         },
//       },
//       container: {
//         center: true,
//         padding: "1rem",
//         screens: {
//           sm: "640px",
//           md: "768px",
//           lg: "1024px",
//           xl: "1280px",
//           "2xl": "1400px",
//         },
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;

