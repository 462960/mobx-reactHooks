import React, { useState, useContext } from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
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

export const InputForm = () => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const [bugName, getBugName] = useState("");

  const submitBug = () => {
    store.addBug(bugName);
    getBugName("");
  };

  return (
    <div className="authorisation-position">
      <div>
        <FormControl>
          <InputLabel htmlFor="standard-adornment-name">
            Enter bug name
          </InputLabel>
          <Input
            id="standard-adornment-name"
            type="text"
            value={bugName}
            onChange={e => getBugName(e.target.value)}
          />
        </FormControl>
      </div>
      <Divider className={classes.divider} />
      <div>
        <Button disabled={!bugName} variant="contained" onClick={submitBug}>
          Report bug
        </Button>
      </div>
    </div>
  );
};
