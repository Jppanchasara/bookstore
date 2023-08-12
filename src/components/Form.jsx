import { Button, FormHelperText, TextField, Typography } from "@mui/material";
import { Form, Formik,ErrorMessage, } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import authServices from "../services/authServices";




const Form1 = () => {
    const [UserName,setUserName]=useState("");
    const [Password ,setPassword]=useState("");

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

    const validationSchema =Yup.object().shape({
        username:Yup.string().required("username should not be empty"),
        password:Yup.string().min(8).required("password should not be empty"),
        email:Yup.string().email().required("email should not be empty"),
        age:Yup.number().min(18),
    })

    const handleSubmit = async(values) => {
        console.log("UserName:", userdetails.username);
        console.log("Password: ", userdetails.password);

        const payload={
            "firstName": values.username,
            "lastName": "test",
            "email": values.email,
            "roleId": 2,
            "password":values.password,
        }
        await authServices.Register(payload).then((response)=>console(response))
    }
    return (
        <Formik initialValues={{ username: "", age: "", email: "", password: "" }} validationSchema={validationSchema} onSubmit={(values)=>handleSubmit(values)}>
            {({ values, errors,setFieldValue ,handleBlur}) => {
                
                console.log("error :",errors);
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

                    </div>
                </Form>)
            }}

        </Formik>

    );


}
export default Form1