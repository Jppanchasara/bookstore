import { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const WithAuth=(Component)=>{
    const Authentication=()=>{
        const email=Cookies.get("auth_email");
        const navigate=useNavigate();
        useEffect(()=>{
            if(!email){
                toast.error("Please login");
                navigate("/");
            }
        },[email]);
        
        return email?<Component/>:null;

    }
    return Authentication;
};

export default WithAuth;