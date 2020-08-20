import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import * as yup from 'yup'
import Form from './Form'

  //initial variables *******************************************************
  const initialFormValues = {
    name: "name",
    email: "email",
    password: "password",
    terms: false,
  }

  const initialFormError = {
    name: "",
    email: "",
    password: "",

  }

  const initialUserList = []
  const initialDisabled = true

function App() {
  
  //states***********************************************************
const [userList, setUserList] = useState(initialUserList)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormError)
const [disabled, setDisabled] = useState(initialDisabled)

//Post function to update userList and reset form********************************************
const postNewUser = newUser => {

  axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      
      setUserList([...userList, res.data])
    })
    .catch(err => {
      debugger
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
}

//function where the checkbox changes the state of the entire form.************************************************************ 

const checkboxChange = (name, isChecked) => {

  setFormValues({...formValues,
     terms: {
      ...formValues.terms,
      [name]: isChecked,
    }
  })
}
//function to submit form data to a variable, and send variable data as a post request *********************************************************************
const submit = () => {
  const newUser = {
    username: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password,
    
    terms: Object.keys(formValues.terms).filter(term => formValues.terms[term]),
  }
    postNewUser(newUser)
}

//use effect hooks



return(
<div>
  <Form 
  formValues= {formValues}  
  disabled= {disabled}
  formErrors = {formErrors}
  userList = {userList}

  // inputChange= {inputChange}
  // checkboxChange= {checkboxChange}
  // submit= {submit}
  />
  <h2>New Users</h2>
  <userList />
</div>

  );
}
export default App;