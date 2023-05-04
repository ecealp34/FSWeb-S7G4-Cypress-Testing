import axios from 'axios';
import * as Yup from "yup";
import { useState, useEffect } from "react"


const Form = (props) => {
    

   const [person, setPerson] = useState({
    name:"",
    email:"",
    password:"",
    termsOfService:false,

   });
  const [data, setData] = useState("");
  const [newData, setNewdata] = useState(false);
  const [termsOfService, setTermsOfService] = useState(false)

   useEffect(() => {
     
  }, [props]);

  function submitHandler(e) {
    e.preventDefault();
    props.addMember(data);
    setNewdata(false);
    setData("");
  }
  function changeHandler(e) {
    console.log(e.target.value);
    const newData = {...data, [e.target.name]: e.target.value};
    setNewdata(newData);
  }


  const formSchema = Yup.object().shape({
    name: Yup.string()
    .required("Must inlude valid name and surname"),
    email: Yup.string()
    .email("Must be a valid name and surname.")
    .required("Must include valid name and surname.")
    .min(8, "Passwords must be at least 8 characters long."),
    password: Yup.string()
    .string()
    .required("Password is Required")
    .min(6, "Passwords must be at least 6 characters long."),
    terms: Yup 
    .boolean()
    .oneOf([true], "You must accept Terms and Conditions")

  })
  return( 
    <div id="input-data">
        <h2>Yeni Üye Ekle</h2>
  <form>
        <formGroup>
    
          <label htmlFor="person-name">Name</label>
          <input
            id="person-name"
            name="name"
            type="text"
            onChange={(event) => {
              setPerson({ ...person, name: event.target.value });
            }}
            value={person.name}
          />
        </formGroup>

        <formGroup>
          <label htmlFor="person-email">Email</label>
          <input
            id="person-email"
            name="email"
            type="email"
            onChange={(event) => {
              setPerson({ ...person, email: event.target.value });
            }}
            value={person.email}
          />
        </formGroup>

     
        <formGroup>
          <label htmlFor="person-pass">Password</label>
          <input
            id="person-pass"
            email="email"
            first_name="name"
            last_name="surname"
            type="image"
            onChange={(event) => {
              setPerson({ ...person, password: event.target.value });
            }}
            value={person.password}
          />
        </formGroup>


        <formGroup>
          <label htmlFor="terms-of-service">termsOfService</label>
          <input
            id="terms-of-service"
            name="termsOfService"
            type="checkbox"
            onChange={(event) => {
              setPerson({ ...person, termsOfService: event.target.value });
            }}
            checked={termsOfService}
          />
        </formGroup>

        <button type="submit">Submit</button>
      </form>
      
    
    </div>

)};

export default Form;



   
  
   