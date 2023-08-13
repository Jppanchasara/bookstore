import { Button } from "@mui/material";
import React from "react";
import './Booklist.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  
const [books, setBooks] = useState([]);

useEffect(() => {
  axios.get('https://book-e-sell-node-api.vercel.app/api/book/all')
    .then(response => {
      setBooks(response.data.result);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);

    return (
        <div>
        <h1>Data GridView</h1>
        <div id='containt-container'>
                
                    {books.map((book, index) => (
                        <div key={index}>
                            <div id="card-container">

                                <div id="card">
                                    <div><img id='card-image' src={book.base64image} alt='' /></div>
                                    <div id="card-block">
                                        <h4><b>{book.name}</b></h4>
                                        <h4><b>Price :${book.price}</b></h4>
                                        <h4><b>{book.category}</b></h4>
                                        {/* <p>{book.description}</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
       
      </div>

    );

}

export default BookList