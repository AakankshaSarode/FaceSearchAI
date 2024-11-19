module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant files
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px',
      },
      backgroundImage: {
        'gradient-contact': 'linear-gradient(113deg, rgba(16,119,222,0.97) 17%, rgba(109,59,200,1) 55%)',
      },
    },
  },
  plugins: [],
};
