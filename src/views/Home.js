import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chat from '../components/Chat.js';
import SideBar from '../components/SideBar.js';
import TasksWindow from '../components/TasksWindow.js';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import JobView from './JobView';
import ListOfJobs from '../components/ListOfJobs';

class Home extends Component {

  state = {
    jobName: 'asd',
    jobs: "asdddd",
};



    


addItem = (myJson) => {
    this.setState({
        jobs: [
        ...this.state.jobs,
        myJson 
      ]
    })
  };

getJson = () => {fetch('../jobs.json'
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
   // this.setState({jobName: "asdsadada"});

  //  this.setState({jobs: "asd"});
  //  this.addItem(myJson);

  return myJson;

  /*
  this.setState({
    jobs: [
    ...this.state.jobs,
    myJson 
  ]
});*/
  });
}


componentDidMount() {

    const that = this;
    console.log("props home: ",this.props);

    fetch('../jobs.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(function(response){
      //  console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);

      that.setState({ jobs: myJson });
      });
};



render()
{
    return (
       <div>

      <h1>Home: {this.state.jobName}</h1>
        <div>
             <h1>Jobs:</h1>
           
        </div>
        <ListOfJobs jobs={this.state.jobs} />
      </div>
  );
};
};


export default Home;