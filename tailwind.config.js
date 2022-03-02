module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'formItem': '1fr 3fr',
      },
      gridTemplateRows: {
        'formContainer': 'auto 1fr'
      },
    },
    colors: {
      red: "#ec2028",
      blue: {
        "1": "#405cd0",
        "2": "#7280bc",
        "3": "#131f50",
        "4": "#e4e9ff"
      },
      yellow: "#f8ef24",
      white: "#fff",
      pink: "#ffe4e5",
      'red-secondary': '#ffe4e5',
      'blue-light': '#e4e9ff',
    },
    borderRadius: {
      'coin-form': '40px',
      'coin-form-border': '42px',
      'none': '0px',
      'sm': '5px'
    },
    boxShadow: {
      'coin-form-shadow': '3px 2px 5px 1px #E5E7EB;'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
