import React from 'react';
import './App.css';
import * as yup from 'yup'

//set form schema via yup
const formSchema = yup.object().shape({
    
    name: yup
        .string()
        .required('Please enter a name'),

    email: yup
        .string()
        .email().required('Please enter an email address'),

    password: yup
        .string()
        .required('Please enter a password'),
    
    termsOfService: yup
        .boolean()
        .oneOf([true], 'Check to agree')
})

//set default states for form and errors
const [formData, setFormData] = useState({name: "", email: "", password: "", termsOfService: ""});
const [errorState, setErrorState] = useState({name: "", email: "", password: "", terms: ""})



function Form() {
  return (
    <div className="App">
      
    </div>
  );
}

export default Form;
