import React, { useContext } from "react";
import { useObserver } from "mobx-react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import { StoreContext } from "./../helpers/stores";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3)
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(1)
    },
    divider: {
      margin: theme.spacing(2, 0)
    }
  })
);

export const Items = () => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const { bugs } = store;

  return useObserver(() => (
    <div style={{ maxWidth: "60%", margin: "0 auto" }}>
      <Divider className={classes.divider} />
      {bugs.map((bug, i) => (
        <Paper key={i} className={classes.paper}>
          {bug}
        </Paper>
      ))}
      <Divider className={classes.divider} />
    </div>
  ));
};
