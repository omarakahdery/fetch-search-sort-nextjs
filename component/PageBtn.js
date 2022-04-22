import classes from "./UserCard.module.css";
import { useState } from "react";
import UserCard from "./UserCard";

const PageBtn = ({ data }) => {
  const [ten, setTen] = useState({ first: 0, sec: 10 });
  const [input, setInput] = useState("");
  const [isMt, setIsMt] = useState(true);

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
  const changeHandler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value.length);
    if (e.target.value.length > 0) setIsMt(false);

    if (e.target.value.length <= 0) setIsMt(true);
  };

  const sliceData = data.slice(ten.first, ten.sec);
  let products = data.filter(
    (p) =>
      p.name.first.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
      p.email.toLowerCase().indexOf(input.toLowerCase()) >= 0
  );
  return (
    <div className={classes.ww}>
      <input
        onChange={changeHandler}
        className={classes.search}
        type="search"
        placeholder="Search.."
      />
      <div className={classes.zz}>
        {isMt ? (
          sliceData.map((d) => <UserCard d={d} />)
        ) : products.length > 0 ? (
          products.map((d) => <UserCard d={d} />)
        ) : (
          <h3>No one with this name</h3>
        )}
      </div>
      {isMt && (
        <div>
          {arrLength.map((btn, index) => (
            <button
              key={index}
              onClick={(e) => {
                let xx = (index + 1) * 10;
                let zz = (index + 1) * 10 - 10;
                setTen({ first: zz, sec: xx });
              }}
              className={classes.btnCo}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageBtn;
