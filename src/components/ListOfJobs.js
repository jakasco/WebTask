import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const ListOfJobs = (props) => {

const [dynamicElems, setDynamicElems] = useState([]);


 const myRef = React.createRef();

console.log("props ListOfJobs: ",props.jobs);

const addJob = () => {

const newDynamicModal = <div ref={myRef}>
         <li>
         <Link to="/jobview"><button>
         Job
            </button>
            </Link>
             </li>
    </div>;

    setDynamicElems(() => [...dynamicElems, newDynamicModal]);
};

const addJobFromJson = (jsonObj) => {

    const newDynamicModal = <div ref={myRef}>
             <li>
             <Link to="/jobview"><button>
             {jsonObj.Name}
                </button>
                </Link>
                ID: {jsonObj.ID}
                 </li>
        </div>;
    
        setDynamicElems(() => [...dynamicElems, newDynamicModal]);
    };

let jobsFetched = false;

const getJobsJson = () => {
    console.log("Get jobs done?");
  /*  jobsFetched = true;  //Stop the loop
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
    //    console.log(myJson);
        let myJson = props.jobs;
        console.log("myJson? : ",myJson);
        if(jobsFetched == false){
        for (var key in myJson) {
            if (myJson.hasOwnProperty(key)) {
              console.log(myJson[key].ID);
              console.log(myJson[key].Name);
              addJobFromJson(myJson);
         }
        }
        jobsFetched = true;
    }*/
    //  });
};

getJobsJson();


  return (
    <div >
        <h2>name. {props.name}</h2>
       <div>Jobs:
            <ul>
            {dynamicElems}
            </ul>
            <button onClick={() => addJob()}>New Job</button>
        </div>
    </div>
  );
};

export default ListOfJobs;