import { Button, FormHelperText, TextField, Typography } from "@mui/material";
import { Form, Formik, ErrorMessage, } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import authServices from "../services/authServices";


import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BookList from "./BookList";
import { useNavigate, NavLink } from "react-router-dom";
import Cookies from "js-cookie";



const LoginPage = () => {
    
    const navigate = useNavigate();
    // const navigatehome = () => {
    //     navigate('/home');
    //     <NavLink to={'/home'}></NavLink>
    // };
    
    // const [UserName,setUserName]=useState("");
    // const [Password ,setPassword]=useState("");

    const [userdetails, setuserdetails] = useState({
        username: "",
        password: '',
        email: "",
        age: ""

    });

    
    
    const validationSchema = Yup.object().shape({
        password: Yup.string().min(8).required("password should not be empty"),
        email: Yup.string().email().required("email should not be empty"),
    })



    const handleSubmit = async (values) => {
        console.log("UserName:", userdetails.username);
        console.log("Password: ", userdetails.password);
        
        
       
        const payload = {
            "email": values.email,
            
            "password": values.password,
        }
        axios.post('https://book-e-sell-node-api.vercel.app/api/user/login', payload).then((res) => 
        { if(res   && res.status===200){
           
            toast.success("login sucessfully ",{position:"bottom-right"});
            navigate("/home");
            Cookies.set("auth_email",values.email);
            
        } }).catch((e)=>{
            toast.error("Please create account",{position:"top-right"});
        });
        
    }
    return (
        <center>
        <div>
        <Formik initialValues={{ email: "", password: "" }} validationSchema={validationSchema} onSubmit={(values) => {handleSubmit(values)}}>
            {({ values, errors, setFieldValue, handleBlur }) => {

                console.log("error :", errors);
                return (<Form>
                    <div className="form-demo">
                        <Typography variant="h3" sx={{ color: "red" }}>Login Here!</Typography>

                        
                        <TextField label="Email" name="email" error={errors.email} variant="outlined" value={values.email} onChange={(e) => setFieldValue("email", e.target.value)} />
                        <FormHelperText error><ErrorMessage name="email"></ErrorMessage></FormHelperText>

                        
                        <TextField label="Password" name="password" error={errors.password} variant="outlined" value={values.password} onChange={(e) => setFieldValue("password", e.target.value)} />
                        <FormHelperText error><ErrorMessage name="password"></ErrorMessage></FormHelperText>
                        <Button variant="contained" type="submit" >submit</Button>
                        <ToastContainer/>

                    </div>
                </Form>)
            }}

        </Formik>
        <h2>Don't have an account?<Button href="#text-buttons"   >Register</Button></h2>
        </div>
        </center>

    );


}
export default LoginPage