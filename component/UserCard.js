import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

import classes from "./UserCard.module.css";
function UserCard({ d }) {
  return (
    <>
      <div className={classes.card}>
        <h3>{d.name.first}</h3>
        <p>{d.dob.age} years old</p>
        <p>{d.email}</p>
        <p>{d.location.city}</p>
        <div className={classes.img}>
          <Image src={d.picture.medium} height={200} width={200} />
        </div>
      </div>
    </>
  );
}

export default UserCard;

// const CardDes = ({ d }) => {
//   return (

//   );
// };
