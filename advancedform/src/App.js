import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import * as yup from 'yup'

export default function App() {

//initial form values
const initialFormValues = {
name: '',
email: '',
password: '',
termsOfService: {acceptTerms: false,},
}

const initialDisabled = true

//initial error values
const initialErrors = {
  name: '',
  email: '',
  password: '',
}

const initialSignUps = []




//event handler
const submitForm = e => {
  e.preventDefault();
  console.log("submitted");
};

//slices of state
const {formData, setFormData} = useState(initialFormValues) 
const [errors, setErrors] = useState(initialErrors)
const [disabled, setDisabled] = useState(initialDisabled)
const [signUps, setSignUps] = useState(initialSignUps)    

//form schema
const formSchema = yup.object().shape({
  name: yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  email: yup
    .string()
    .min(6, "Passwords must be at least 6 characters long.")
    .required("Password is Required"),
  password: yup
    .string()
    .min(6, "Passwords must be at least 6 characters long.")
    .required("Password is Required"),
  termsOfService: yup
    .boolean()
    .oneOf([true], "You must accept Terms and Conditions")
    
});

//post request
const postNewSignUp = newSignUp => {

  axios.post('https://reqres.in/api/users', newSignUp)
    .then(res => {
      
      setSignUps([...signUps, res.data])
    })
    .catch(err => {
      debugger
    })
    .finally(() => {
      setFormData(initialFormValues)
    })
}

//form state
const checkboxChange = (name, isChecked) => {

  setFormData({
    ...formData,
    termsOfService: {
      ...initialFormValues.termsOfService,
      [name]: isChecked,
    }
  })
}

//submit button function
const submit = () => {
  const newFriend = {
    name: formData.username.trim(),
    email: formData.email.trim(),
    password: formData.role,
    // 🔥 STEP 8- WHAT ABOUT HOBBIES?
    termsOfService: Object.keys(formData.termsOfService).filter(terms => formData.termsOfService[terms]),
  }
  // 🔥 STEP 9- POST NEW FRIEND USING HELPER
  postNewFriend(newFriend)
}

return(
  <div>
    <form>
      <label>
        Name:
        <input type="text" onChange={event => (event)}></input>
      </label>
      <label>
        E-Mail:
        <input type="email" onChange={event => (event)}></input>
      </label>
      <label>
        Password:
        <input type="text" onChange={event => (event)}></input>
      </label>
      <label>
       Do you accept the terms and conditions? Check for yes.:
        <input
          name="terms"
          type="checkbox"
          checked={false}
          onChange />
      </label>
    </form>
  </div>
)


}