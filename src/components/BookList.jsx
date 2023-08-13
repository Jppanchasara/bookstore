import { Button } from "@mui/material";
import React from "react";
import './Booklist.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import WithAuth from "../layout/withAuth";

const BookList = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    setIsLoading(true);
    axios.get('https://book-e-sell-node-api.vercel.app/api/book/all')
      .then(response => {
        setBooks(response.data.result);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Book</h1>

      {isLoading ? (
        <center><h2><p>Loading...</p></h2></center>

      ) : (
        <ul><div id='containt-container'>

          {books.map((book, index) => (
            <div key={index}>
              <div id="card-container">

                <div id="card">
                  <div><img id='card-image' src={book.base64image} alt='' /></div>
                  <div id="card-block">
                    <h4><b>{book.name}</b></h4>
                    <h4><b>Price :${book.price}</b></h4>
                    <h4><b>Category:{book.category}</b></h4>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        </ul>
      )}


    </div>

  );

}

export default WithAuth(BookList)