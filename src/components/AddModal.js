import React, { useState } from 'react';

//Add modal div with mouse click in tasks window panel
const AddModal = () => {

const [dynamicElems, setDynamicElems] = useState([]);

 const myRef = React.createRef();

  const taskWindowStyle = {
    height: "70vh",
    float: "left",
    width: "70%",
    backgroundColor: "rgb(95 95 95)",
    zIndex: 1,
  };

  const newTaskButton = () => {
    const node = myRef.current;
    console.log("node: ",node);
    node.style.pointerEvents = "auto";
  }

  const taskWindowToUnclickable = () => {
    const node = myRef.current;
    console.log("node: ",node);
    node.style.pointerEvents = "none";
  }

  const addElement = (event) => {

    console.log("Event ",event);

    taskWindowToUnclickable();

    let coords = {
        x: event.screenX,
        y: event.screenY,
      };

      const modalStyle2 = {
        backgroundColor: "#a5a58d",
        zIndex: 10,
        height: "10vh",
        width: "30%",
        border: "solid black 1px",
        borderRadius: "10px", 
        position: "absolute",
        left: event.pageX + 'px',
        top: event.pageY + 'px',
        pointerEvents: "auto",
    }

  const node = myRef.current;

  console.log("coords: ",coords);

    const newDynamicModal = 
    <div style={modalStyle2} ref={myRef}>
        <button>Create task</button>
        <button>Assign task</button>
        <button>Remove task</button>
    </div>;

    setDynamicElems(() => [...dynamicElems, newDynamicModal]);
  };

 const newTaskButtonStyle = {
    marginTop: "3%",
    position: "absolute"
    }

  return (
    <div >
        {dynamicElems}
        <button style={newTaskButtonStyle} onClick={newTaskButton}>New Task</button>
      <div onClick={(event) => addElement(event)}  
          style={taskWindowStyle} ref={myRef}>
       </div>
    </div>
  );
};

export default AddModal;