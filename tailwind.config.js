// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",    // Ensure HTML template is included
    "./index.web.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
