import React from 'react';
import './App.css';
import * as yup from 'yup'
import App from './App'


const Form = props => {
    const { formValues, userList, formErrors, disabled, inputChange, checkboxChange, submit } = props;

//prevent page refresh on form submission    
const onSubmit = evt => {
    evt.preventdefault()
    submit()
}

//update state when checkbox is clicked
const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
  }

    return(
<div>
    <form>
        <label>
            Name: 
            <input type = "text" name= "name"/>
        </label>
        <label>
            Email: 
            <input type = "text" name= "email"/>
        </label>
        <label>
            Password: 
            <input type = "text" name= "password"/>
        </label>
        <br></br>
        <label> Do you agree to the terms and conditions? Check box if so.
            <input
            type = "checkbox"
            name = "terms"
            />
        </label>
        <br></br>
        <button>Submit</button>
    </form>
</div>

)}
export default Form;
