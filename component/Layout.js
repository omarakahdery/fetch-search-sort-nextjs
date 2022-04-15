import React from "react";
import classes from "./UserCard.module.css";

function Layout(props) {
  return <div className={classes.Layout}>{props.children}</div>;
}

export default Layout;
