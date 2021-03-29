import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

//When we create a theme we overwrite the default values with our new values.
export default createMuiTheme({
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontweight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
    textTransform: "none",
    fontSize: "1rem",
    color: "white"
    }
  },
});
