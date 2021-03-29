import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"

//When we create a theme we overwrite the default values with our new values.
export default createMuiTheme({
  palette:{
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: `${arcOrange}`
    },
    primary:{
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
    }
  },
  typography:{
    h3: {
      fontWeight: 300
    }
  }
})