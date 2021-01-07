import React, { useState } from 'react';


const AddModal = () => {

  const [dynamicElems, setDynamicElems] = useState([]);

  const taskWindowStyle = {
    height: "70vh",
    float: "left",
    width: "70%",
    backgroundColor: "rgb(95 95 95)",
  };

  const addElement = (event) => {
    console.log("asd ",event);

    let coords = {
        x: event.screenX,
        y: event.screenY,
      };

      console.log("coords: ",coords);
      
    // Creates the dynamic paragraph
    const newDynamicElem = <p className={"asd"}>This is paragraph</p>;
    // adds it to the state
    setDynamicElems(() => [...dynamicElems, newDynamicElem]);
  };

  return (
    <div>
      <div onClick={(event) => addElement(event)}  style={taskWindowStyle}>Click here{dynamicElems}</div>
    </div>
  );
};
export default AddModal;