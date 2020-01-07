import React, { useContext } from "react";
import { useObserver } from "mobx-react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import { StoreContext } from "./../helpers/stores";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

export function TopBar() {
  const classes = useStyles();
  const store = useContext(StoreContext);

  return useObserver(() => (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>

          <Typography variant="h6" className={classes.title}>
            Bugs number: {store.bugsCount}
          </Typography>

          {/* <Button color="inherit">LogOut</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  ));
}
