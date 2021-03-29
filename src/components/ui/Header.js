import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

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

const Header = () => {
  return (
    //This creates a subtle scroll effect on the page when you scroll down, slighlty elivatingit and giving it a drop shadow.
    <ElevationScroll>
      {/* The app bar has a default position of fixed, which fixes the app bar to the top of the page regardless of scroll position
    Static keeps it at the top when you scroll so it disappears 
    Color comes from Theme
    */}
      <AppBar>
        {/* Why do we need the toolbar to allow horizontal rather than vertical layout*/}
        <Toolbar>
          <Typography variant="h3">Arc Development</Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;