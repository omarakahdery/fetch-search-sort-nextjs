import classes from "./UserCard.module.css";
import { useState } from "react";
import UserCard from "./UserCard";

const PageBtn = ({ data }) => {
  const [ten, setTen] = useState({ first: 0, sec: 10 });
  function getBtnNo(l) {
    let z = 1;
    if (l / 10 < 1) return z;
    if ((l / 10) % 1 === 0) return (z = l / 10);
    if ((l / 10) % 1 !== 0) return (z = Math.ceil(l / 10));
  }
  const lengthOfArr = getBtnNo(data.length);

  var arrLength = Array.from({ length: lengthOfArr }, () =>
    Math.floor(Math.random() * lengthOfArr)
  );

  const sliceData = data.slice(ten.first, ten.sec);
  const [style, setStyle] = useState({});
  return (
    <>
      {arrLength.map((btn, index) => (
        <button
          key={index}
          onClick={() => {
            let xx = (index + 1) * 10;
            let zz = (index + 1) * 10 - 10;

            setTen({ first: zz, sec: xx });
          }}
          className={classes.btnCo}
          style={style}
        >
          {index + 1}
        </button>
      ))}

      {sliceData.map((d) => (
        <UserCard d={d} />
      ))}
    </>
  );
};

export default PageBtn;
