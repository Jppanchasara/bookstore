import { Button, Container, FormHelperText, TableRow, TextField, Typography } from "@mui/material";
import { Form, Formik, ErrorMessage, } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import authServices from "../services/authServices";
import ImagePicker from "./ImagePicker.js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, NavLink } from "react-router-dom";
import './addbook.css';
import WithAuth from "../layout/withAuth";



const AddBook = () => {
    const navigate = useNavigate();

    const [value, setValue] = useState('');
    const options = [
        { label: "Horror", value: 2 },
        { label: "Literature", value: 3 },
        { label: "Science & technology", value: 4},
        { label: "Self improvements", value: 5 },
        { label: "Business", value: 6 },
        
    ]
    function handelselect(event) {
        setValue(event.target.value);
        
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("book name should not be empty"),
        descreption: Yup.string().required("descreption should not be empty"),
        price: Yup.number().max(5000).required("email should not be empty"),
      
    })

    const handleSubmit = async (values) => {
        console.log("266",values)
        const payload = {
            "name": values.name,
            "description": values.descreption,
            "price": values.price,
            "categoryId": values.category,
            "base64image": "data:image/jpeg;base64,/9juh/"
        }


        axios.post('https://book-e-sell-node-api.vercel.app/api/book', payload).then((res) => {
            if (res && res.status == 200) {

                toast.success("book added sucessfully ", { position: "top-right" })
                //navigate("/login");
            }
        }).catch(() => {
            //toast.success("failed",{position:"bottom-right"});
            toast.error("bookdata is not sored", { position: "top-right" })
        });



    }
    return (
        <center>
            
            <Formik initialValues={{ name: "", category: "", price: "", descreption: "" }} validationSchema={validationSchema} onSubmit={(values) => handleSubmit(values)}>
                {({ values, errors, setFieldValue, handleBlur }) => {

                    console.log("error :", errors);
                    return (<Form>
                        <div className="form-demo">
                            <Typography variant="h3" sx={{ color: "black" }}>AddBook</Typography>

                            <tr><td><TextField label="BookName" name="name" error={errors.name} variant="outlined" value={values.name} onChange={(e) => setFieldValue("name", e.target.value)} onBlur={handleBlur} />
                                <FormHelperText error><ErrorMessage name="name"></ErrorMessage></FormHelperText></td>
                                <td>
                                    <TextField label="price" name="price" error={errors.price} variant="outlined" value={values.price} onChange={(e) => setFieldValue("price", e.target.value)} />
                                    <FormHelperText error><ErrorMessage name="price"></ErrorMessage></FormHelperText></td></tr>

                           

                            <div className="dropdown">
                                <div className="dropdown-toggle">
                                    <select className="dropdownbox" onChange={(e) => setFieldValue("category", e.target.value)} name="category" value={values.category}>
                                        {options.map(index => (
                                            <option value={index.value}>{index.label}</option>
                                        ))}
                                    </select>
                                    
                                </div></div>
                                
                            <TextField label="descreption" name="descreption" error={errors.descreption} variant="outlined" value={values.descreption} onChange={(e) => setFieldValue("descreption", e.target.value)} />
                            <FormHelperText error><ErrorMessage name="descreption"></ErrorMessage></FormHelperText>
                            <ImagePicker/>
                            <Button variant="contained" type="submit" >submit</Button>
                            <ToastContainer />

                        </div>
                    </Form>)
                }}

            </Formik>
        </center>

    );


}
export default WithAuth(AddBook)