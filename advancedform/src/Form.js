import React from 'react';
import './App.css';
import * as yup from 'yup'
import App from './App'


const Form = props => {
    const { formValues, userList, formErrors, disabled, inputChange, checkboxChange, submit } = props;

//prevent page refresh on form submission************************************************************    
const onSubmit = evt => {
    evt.preventdefault()
    submit()
}

//update state when checkbox is clicked************************************************************
const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
}

//update state when entering data into form************************************************************
const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
}

    return(
<div>
    <form onSubmit={onSubmit}>
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
