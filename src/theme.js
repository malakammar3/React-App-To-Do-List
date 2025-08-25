import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Co Headline W23 Arabic Light, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Co Headline W23 Arabic Light, Arial, sans-serif',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'Co Headline W23 Arabic Light, Arial, sans-serif',
        },
      },
    },
  },
});

export default theme;
