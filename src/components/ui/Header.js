import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Button from "@material-ui/core/Button"
import {Link} from "react-router-dom"

import logo from "../../assets/logo.svg"

function ElevationScroll(props) {
  const { children } = props;

  //useScrollTrigger is a listener that listens to the page being scrolled
  const trigger = useScrollTrigger({
    //is there a little delay when scrolling?
    disableHysteresis: true,
    //how far does the user have to scroll for the event to trigger
    threshold: 0,
  });

  //clones the elment when the trigger is true and gives it an elevation of 4
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme=>({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo:{
    height: '7em'
  },
  tabContainer:{
    marginLeft: "auto"
  },
  tab:{
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button:{
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginRight: "25px",
    marginLeft: "50px",
  }
}))

const Header = () => {
  const classes = useStyles()

  const [value, setValue] = useState(0)

  const handleChange = (e, value) => {
    setValue(value)
  }

  return (
    <React.Fragment>
    {/* This creates a subtle scroll effect on the page when you scroll down, slighlty elivatingit and giving it a drop shadow. */}
    <ElevationScroll>
      {/* The app bar has a default position of fixed, which fixes the app bar to the top of the page regardless of scroll position
    Static keeps it at the top when you scroll so it disappears 
    Color comes from Theme
    */}
      <AppBar position="fixed">
        {/* Why do we need the toolbar to allow horizontal rather than vertical layout*/}
        <Toolbar disableGutters>
          <img alt="company logo" className={classes.logo} src={logo}/>
          <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
            <Tab className={classes.tab} component={Link} to="/" label="Home"/>
            <Tab className={classes.tab} component={Link} to="/services" label="Services"/>
            <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"/>
            <Tab className={classes.tab} component={Link} to="/about" label="About Us"/>
            <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us"/>
          </Tabs>
          <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
