const theme = {
  colors: {
    shape: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    primary: (opacity = 1) => `rgba(0, 102, 153, ${opacity})`,
  },
  typhografy: {
    primary: "'Ubuntu', sans-serif",
    secondary: "'Ubuntu Condensed', sans-serif",
  },
};

export default theme;
