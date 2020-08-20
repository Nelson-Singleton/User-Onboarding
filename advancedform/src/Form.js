import React from 'react';
import './App.css';
import * as yup from 'yup'
import App from './App'


const Form = props => {
    const { formValues, userList, formErrors, disabled, inputChange, checkboxChange, submit } = props;

//prevent page refresh on form submission************************************************************    
const onSubmit = evt => {
    
    evt.preventDefault()
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
    <form onSubmit= {onSubmit}>
        
        

        <div>          
          <div>{formErrors.name}</div>
          <div>{formErrors.email}</div> 
          <div>{formErrors.password}</div>           
          
        </div>

        <label>
            Name: 
            <input type = "text" name= "name" onChange = {onInputChange} value = {formValues.name}/>
        </label>
        <label>
            Email: 
            <input type = "text" name= "email" onChange = {onInputChange} value = {formValues.email}/>
        </label>
        <label>
            Password: 
            <input type = "text" name= "password" onChange = {onInputChange} value = {formValues.password}/>
        </label>
        <br></br>
        <label>
            Do you accept the terms?
            <input type = "checkbox" name = "terms" checked = {formValues.terms} onChange = {onCheckboxChange}/>
        </label>

        
        <br></br>
        <button disabled={disabled}>submit</button>
    </form>
</div>

)}
export default Form;
