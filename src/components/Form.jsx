import { Button, Container, FormHelperText, TableRow, TextField, Typography } from "@mui/material";
import { Form, Formik, ErrorMessage, } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import authServices from "../services/authServices";


import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, NavLink } from "react-router-dom";




const Form1 = () => {
    const navigate = useNavigate();
    // const [UserName,setUserName]=useState("");
    // const [Password ,setPassword]=useState("");

    const [userdetails, setuserdetails] = useState({
        username: "",
        password: '',
        email: "",
        age: ""

    });

    // useEffect(() => {
    //     if (userdetails.username.length > 4) {
    //         console.log("kjadsbfkjdb")
    //     }

    // }, [userdetails.username])


    const [userData,setUserData]=useState();
    const getData= async()=>{
        await axios.get("https://book-e-sell-node-api.vercel.app/api/user/byId?id=625").then((res)=>setUserData(res.data));
    }
    useEffect(()=>{
        getData();
    },[])
    console.log("2606",userData);

    
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("username should not be empty"),
        password: Yup.string().min(8).required("password should not be empty"),
        email: Yup.string().email().required("email should not be empty"),
        age: Yup.number().min(18),
    })



    const handleSubmit = async (values) => {
        console.log("UserName:", userdetails.username);
        console.log("Password: ", userdetails.password);



        const payload = {
            "firstName": values.username,
            "lastName": "test",
            "email": values.email,
            "roleId": 2,
            "password": values.password,
        }


        axios.post('https://book-e-sell-node-api.vercel.app/api/user', payload).then((res) => 
        { if(res ){
           
            toast.success("Register sucessfully ",{position:"top-right"})
            //navigate("/login");
        } }).catch(()=>{
           //toast.success("failed",{position:"bottom-right"});
            toast.error("You are Already, Registered please login",{position:"top-right"})
        });


        // await authServices.Register(payload).then((response)=>{
        //     console.log(response);
        //     if(response && response==200){
        //         toast("Data sucessfully submited!")
        //     }

        // }).catch(()=>{});
    }
    return (
        <center>
        <Formik initialValues={{ username: "", age: "", email: "", password: "" }} validationSchema={validationSchema} onSubmit={(values) => handleSubmit(values)}>
            {({ values, errors, setFieldValue, handleBlur }) => {

                console.log("error :", errors);
                return (<Form>
                    <div className="form-demo">
                        <Typography variant="h3" sx={{ color: "red" }}>Register Here!</Typography>
                       

                        <TextField label="UserName" name="username" error={errors.username} variant="outlined" value={values.username} onChange={(e) => setFieldValue("username", e.target.value)} onBlur={handleBlur} />
                        <FormHelperText error><ErrorMessage name="username"></ErrorMessage></FormHelperText>

                        <TextField label="Email" name="email" error={errors.email} variant="outlined" value={values.email} onChange={(e) => setFieldValue("email", e.target.value)} />
                        <FormHelperText error><ErrorMessage name="email"></ErrorMessage></FormHelperText>

                        <TextField label="Age" name="age" error={errors.age} variant="outlined" value={values.age} onChange={(e) => setFieldValue("age", e.target.value)} />
                        <FormHelperText error><ErrorMessage name="age"></ErrorMessage></FormHelperText>

                        <TextField label="Password" name="password" error={errors.password} variant="outlined" value={values.password} onChange={(e) => setFieldValue("password", e.target.value)} />
                        <FormHelperText error><ErrorMessage name="password"></ErrorMessage></FormHelperText>
                        <Button variant="contained" type="submit" >submit</Button>
                        <h2>Don't have an account?<Button href="#text-buttons"  >Login</Button></h2>
                        <ToastContainer/>

                    </div>
                </Form>)
            }}

        </Formik>
        </center>

    );


}
export default Form1