import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import * as yup from 'yup'
import Form from './Form'

  //initial variables *************************************
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
  
  //states*********************************************
const [userList, setUserList] = useState(initialUserList)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormError)
const [disabled, setDisabled] = useState(initialDisabled)








return(
<div>
  <Form />
</div>

  );
}
export default App;