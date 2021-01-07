import React, { useState } from 'react';


const AddModal = () => {

  const [dynamicElems, setDynamicElems] = useState([]);

  const taskWindowStyle = {
    height: "70vh",
    float: "left",
    width: "70%",
    backgroundColor: "rgb(95 95 95)",
    
  };
/*
  const modalStyle = {
      height: "10vh",
      width: "40%",
      border: "solid black 1px",
      borderRadius: "10px",
  }*/

  const addElement = (event) => {
    console.log("asd ",event);

    let coords = {
        x: event.screenX,
        y: event.screenY,
      };

      const modalStyle2 = {
        zIndex: "10",
        height: "10vh",
        width: "30%",
        border: "solid black 1px",
        borderRadius: "10px", 
        position: "absolute",
        left: event.pageX + 'px',
        top: event.pageY + 'px'
    }




      console.log("coords: ",coords);

    // Creates the dynamic paragraph
 //   const newDynamicElem = <p className={"asd"}>This is paragraph</p>;

    const newDynamicModal = <div style={modalStyle2}>
        <button>Create task</button>
        <button>Assign task</button>
    </div>;

    // adds it to the state
    setDynamicElems(() => [...dynamicElems, newDynamicModal]);
  };

  return (
    <div>
      <div onClick={(event) => addElement(event)}  
             style={taskWindowStyle}>
          Click here{dynamicElems}
       </div>
    </div>
  );
};
export default AddModal;