import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import * as yup from 'yup'

export default function App() {

//initial form values
const initialValues = {
username: '',
email: '',
password: '',
termsOfService: {acceptTerms: false,},
}

const initialDisabled = true

//initial error values
const initialErrors = {
  username: '',
  email: '',
  password: '',
}

//slices of state
const {formData, setFormData} = useState() 


return(
  <div></div>
)


}