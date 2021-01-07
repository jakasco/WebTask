import React, { Component } from 'react';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Button} from '@material-ui/core';
import PropTypes from 'prop-types';


class Chat extends Component {

  state = {
    file: {
        title: '',
        description: '',
      },
      loading: false,
};


handleInputChange = (evt) => {

    const target = evt.target;
    const value = target.value;
    const name = target.name;

    console.log(value, name);

    this.setState((prevState) => ({
      file: {
        ...prevState.file,
        [name]: value,

      },
    }));
  };

handleFileSubmit = (evt) => {
    console.log(evt);
   /* this.setState({loading: true});
    const fd = new FormData();
    fd.append('title', "Reply");
    fd.append('description', this.state.file.description);
    const options = {
      method: 'POST',
      body: fd,

    
      headers: {
        'x-access-token': localStorage.getItem('Login-token'),
      }*/
    };

render()
{
    const chatStyle = {
        width: "70%",
        backgroundColor: "#cacaca",
        position: "fixed",
        bottom: "0"
      };
      
    return (
        <div style={chatStyle}>
<h1>state: {this.state.file.description}</h1>
<ValidatorForm onSubmit={this.handleFileSubmit}
                         onError={errors => console.log(errors)}
                         instantValidate={false}>
            <TextValidator name="description" label="Your reply:"
                           value={this.state.file.description}
                           onChange={this.handleInputChange}
                           validators={['required', 'minStringLength:3']}
                           errorMessages={[
                             'this field is required',
                             'minimum 3 charaters']}
                           fullWidth
                           multiline
                           rows={3}/>

            <Button variant='contained' color='primary' type='submit'>Reply&nbsp;{this.state.loading && 'Loading...'}</Button>
          </ValidatorForm>

          </div>
  );
};
};

export default Chat;