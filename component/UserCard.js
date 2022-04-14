import React from "react";
import Image from "next/image";
function UserCard() {
  return (
    <div>
      <h3>Omar Alkahder</h3>
      <p>28 years old</p>
      <p>Email</p>
      <Image
        src="https://avatars.githubusercontent.com/u/85066587?v=4"
        height={200}
        width={300}
      />
    </div>
  );
}

export default UserCard;
