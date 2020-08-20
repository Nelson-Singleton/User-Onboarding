import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import * as yup from 'yup'
import Form from './Form'

  //initial variables *******************************************************
  const initialFormValues = {
    name: "",
    email: "",
    password: "",
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
    username: formValues.name,
    email: formValues.email,
    password: formValues.password,
    
    terms: Object.keys(formValues.terms).filter(term => formValues.terms[term]),
  }
    postNewUser(newUser)
}

//schema************************************************************************
const formSchema = yup.object().shape({
  
  name: yup
  .string()  
  .required('Username is Required'),

  email: yup
  .string()
  .email('Must be a valid email address')
  .required('E-mail address is required'),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('A password is required'),

})

//validation************************************************************************
const inputChange = (name, value) => {
 
  yup
    .reach(formSchema, name)
    //we can then run validate using the value
    .validate(value)
    // if the validation is successful, we can clear the error message
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    })
    /* if the validation is unsuccessful, we can set the error message to the message 
      returned from yup (that we created in our schema) */
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })

  setFormValues({
    ...formValues,
    [name]: value // NOT AN ARRAY
    
  })
}



return(
<div>
  <Form 
  formValues= {formValues}  
  disabled= {disabled}
  formErrors = {formErrors}
  userList = {userList}

  inputChange= {inputChange}
  checkboxChange= {checkboxChange}
  submit= {submit}
  />
  {/* {userList.map(user =>{return (<User key={user.id} details={user}/> ) }) } */}
  
  
</div>

  );
}
export default App;