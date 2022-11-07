import { timers } from "jquery";
import React, { useState, useEffect } from "react";

function Gallary() {
  // useState() Hook
  const [age, setAge] = useState(0);
  const [quantity, setQuantity] = useState(0);

  // How to Update from state
  const updateQuantity = () => {
    setQuantity(Math.random());
  };
  const updateAge = () => {
    setAge(age + 1);
  };

  // useEffect() Hook
  // mounting
  useEffect(() => {
    // Call API
    console.log(" hello from component did mounting ");
  }, []);

  //Did update
  useEffect(() => {
    if (age == 0 && quantity == 0) return;
    console.log(" hello from component did update ");
  }, [age, quantity]);

  // will unmounting
  useEffect(() => {
    // setInterval(() => {
    //   console.log('React.js')
    // }, 1500);
    return () => {
      // clearInterval(timer);
      console.log(" hello from component will unmounting ");
    };
  }, []);
  return (
    <React.Fragment>
      <div className="bg-success p-5 rounded-4">
        <h1>Topic How to use useState Hook</h1>
        <h1 className="text-light">Update quantity : {quantity}</h1>
        <h1 className="text-light">Update Age : {age}</h1>
        <button onClick={() => updateAge()} className="btn btn-info w-25">
          Inc Age
        </button>
        <button
          onClick={() => updateQuantity()}
          className="btn btn-info w-25 mx-5"
        >
          Inc Quantity
        </button>
      </div>
    </React.Fragment>
  );
}

export default Gallary;
