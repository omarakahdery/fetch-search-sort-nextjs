import React from "react";
import classes from "./UserCard.module.css";
import { useState, useEffect } from "react";

const PageBtn = ({ data, sliceData }) => {
  const [ten, setTen] = useState({ first: 0, sec: 10 });
  function getBtnNo(l) {
    let z = 1;
    if (l / 10 < 1) return z;
    if ((l / 10) % 1 === 0) return (z = l / 10);
    if ((l / 10) % 1 !== 0) return (z = Math.ceil(l / 10));
  }
  console.log(ten);
  sliceData(data.slice(ten.first, ten.sec));
  const lengthOfArr = getBtnNo(data.length);

  var arrLength = Array.from({ length: lengthOfArr }, () =>
    Math.floor(Math.random() * lengthOfArr)
  );
  //   arrLength.length = lengthOfArr;
  return (
    <>
      {arrLength.map((btn, index) => (
        <button
          key={index}
          onClick={() => {
            let xx = (index + 1) * 10;
            let zz = (index + 1) * 10 - 10;
            // const { first, sec } = ten;
            setTen({ first: zz, sec: xx });
          }}
          className={classes.btnCo}
        >
          {index + 1}
        </button>
      ))}
    </>
  );
};

export default PageBtn;
