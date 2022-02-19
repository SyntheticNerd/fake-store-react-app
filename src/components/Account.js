import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFName, lName, fName } from "../features/user/makeUserSlice";
import { useState } from "react";

export default function Account() {
  const [firstName, setFirstName] = useState("");
  const dispatch = useDispatch();
  const first = useSelector(fName);
  return (
    <>
      <h1>Account</h1>
      <input
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <button onClick={() => dispatch(setFName(firstName))}>Enter</button>
      <p>{first}</p>
      <p>test</p>
    </>
  );
}
