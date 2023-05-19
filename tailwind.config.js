/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'project1': "url('/project1.png')",
          'project2': "url('/project2.webp')",
          'project3': "url('/project3.jpg')",
          'projectprolab': "url('/project_prolab.png')",

      },
      colors: {
        'primary': '#45a29e',
        'primarylight':'#64ffda',
        'primarytext': '#1d3532',
        'light': '#C4FCF0',
        'dark': '#4C4637' ,
        'accent': '#A79017'


      }
    },
  },
  plugins: [],
}
