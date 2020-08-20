// Here goes the schema for the form
import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Must include email address'),
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Username is Required'),
  role: yup
    .string()
    .oneOf(['alumni', 'instructor', 'tl', 'student'], 'You must select a role')
    .required('You must select a role'),
  civil: yup
    .string()
    .oneOf(['single', 'married'], 'You must select a civil status')
    .required('You must select a civil status')
})

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

export default formSchema