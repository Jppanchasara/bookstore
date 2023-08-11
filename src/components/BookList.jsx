import { Button } from "@mui/material";
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const BookList = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
        <NavLink to={'/'}></NavLink>
    };
    return (
        <>
            <div>This Is booklist components</div>
            <button onClick={navigateHome}>Click me!</button>
            <Button onClick={navigateHome}>Go to home Page</Button>
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
                Link
            </Button>


        </>
    );

}

export default BookList