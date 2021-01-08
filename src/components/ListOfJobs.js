import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Button} from '@material-ui/core';

const ListOfJobs = (props) => {

const [dynamicElems, setDynamicElems] = useState([]);

const myRef = React.createRef();

let ids = 0;

const addJob = () => {
    
    ids++;

const newDynamicModal = 
     <React.Fragment>
           <div style={gridItemStyle}>
           <Link to="/jobview"><button style={buttonStyle}>
                    {"Job"+ids}
                </button>
            </Link>  
           </div>
           <div style={gridItemStyle}>
                  {ids}
           </div>
           <div style={gridItemStyle}>
                 {"Point"+ids}
           </div>
           <div style={gridItemStyle}>
                 null
           </div>
           <div style={gridItemStyle}>
                 null
           </div>
           <div style={gridItemStyle}>
                 pending
           </div>
    </React.Fragment>
       ;
    setDynamicElems(() => [...dynamicElems, newDynamicModal]);
};

const addJobFromJson = (jsonObj) => {
  
    const newDynamicModal = 
        <React.Fragment>
   
           <div style={gridItemStyle}>
           <Link to="/jobview"><button style={buttonStyle}>
                    {jsonObj.Name}
                </button>
            </Link>  
           </div>
           <div style={gridItemStyle}>
                 {jsonObj.ID}
           </div>
           <div style={gridItemStyle}>
                 {jsonObj.Location}
           </div>
           <div style={gridItemStyle}>
                 {jsonObj.DateStart}
           </div>
           <div style={gridItemStyle}>
                 {jsonObj.DateEnd}
           </div>
           <div style={gridItemStyle}>
                 {jsonObj.Status}
           </div>
      
         </React.Fragment>
       ;
        setDynamicElems(() => [...dynamicElems, newDynamicModal]);
    };

let jobsFetched = false;

const getJobsJson = () => {
    
    //jobsFetched = true; 
    fetch('../jobs.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
     //   let myJson = props.jobs;
        console.log("myJson? : ",myJson);
      //  if(jobsFetched == false){
        for (let key in myJson) {
            if (myJson.hasOwnProperty(key)) {

              ids++;

              console.log(myJson[key].ID);
              console.log(myJson[key].Name);
              console.log(myJson[key].Location);
              console.log(myJson[key].DateStart);
              console.log(myJson[key].DateEnd);
              console.log(myJson[key].Status);
              addJobFromJson(myJson[key]);
         };
        };
      //  }
     //   jobsFetched = true;  //Stop the loop
      });
};

const gridStyle = {

        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto auto",
        backgroundColor: "rgb(55 61 66)",
        padding: "10px"
      
};

const buttonStyle = {
    fontSize: "18px",
    color: "white",
    backgroundColor: "black",
    marginTop: "20px"
}

const gridItemStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "0.5px solid rgba(0, 0, 0, 0.8)",
    padding: "20px",
    fontSize: "30px",
    textAlign: "center"
}

//Run only once the fetching
useEffect(() => {
    getJobsJson();
  }, []);

  return (
    <div >
        <div style={gridStyle}>
            <div style={gridItemStyle}>
               Job Name:
             </div>
             <div style={gridItemStyle}>
               ID:
             </div>
             <div style={gridItemStyle}>
               Location:
             </div>
             <div style={gridItemStyle}>
               Date Start:
             </div>
             <div style={gridItemStyle}>
               Date End:
             </div>
             <div style={gridItemStyle}>
               Status:
             </div> 
             {dynamicElems}
        </div>
        <button style={buttonStyle} onClick={() => addJob()}>New Job</button>
    </div>
  );
};

export default ListOfJobs;