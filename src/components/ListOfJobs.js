import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Button} from '@material-ui/core';

const ListOfJobs = (props) => {

const [dynamicElems, setDynamicElems] = useState([]);
const [name, setName] = "";

const myRef = React.createRef();

const addJob = () => {
//evt.preventDefault();
//console.log("Name: ",evt.target.value);
const newDynamicModal = 
    <div ref={myRef}>
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
    console.log("jsonObj: ",jsonObj);
    const newDynamicModal = 
             <li ref={myRef}>
                  <Link to="/jobview">
                     <button>
                         {jsonObj.Name}
                      </button>
                 </Link>
                ID: {jsonObj.ID}
                Location: {jsonObj.Location}
                Date Start: {jsonObj.DateStart}
                Date End: {jsonObj.DateEnd}
                Status: {jsonObj.Status}
             </li>
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

const handleInputChange = (evt) => {

    const target = evt.target;
    const value = target.value;
    const name2 = target.name;

    const [name, setName] = name2;
    console.log(value, name);
  };

//Run only once the fetching
useEffect(() => {
    getJobsJson();
  }, []);

  return (
    <div >
        <h2>name. {props.name}</h2>
       <div>Jobs:
            <ul>
            {dynamicElems}
            </ul>
            <form onSubmit={(event) => addJob(event)}>
            <label for="fname">New Job:</label><br />
                <input type="text" id="fname" name="fname" value="John" /><br /> 
              <input type="submit" value="Create" />
              <button type="submit">Submit</button>
            </form> 

            <button onClick={() => addJob()}>New Job</button>

            <ValidatorForm onSubmit={(event) => addJob(event)}
                         onError={errors => console.log(errors)}
                         instantValidate={false}>
            <TextValidator name="description" label="New Job:"
                           value={name}
                           onChange={handleInputChange}
                           validators={['required', 'minStringLength:3']}
                           errorMessages={[
                             'this field is required',
                             'minimum 3 charaters']}
                           fullWidth
                           multiline
                           rows={3}/>

            <Button variant='contained' color='primary' type='submit'>Create&nbsp;</Button>
          </ValidatorForm>
          

        </div>
    </div>
  );
};

export default ListOfJobs;