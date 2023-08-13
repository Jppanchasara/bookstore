import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);

    axios.get(`https://book-e-sell-node-api.vercel.app/api/book/search?keyword=${searchTerm}`)
      .then(response => {
        setSearchResults(response.data.result);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error searching:', error);
        setLoading(false);
      });
  };

  return (
    <center>
    <div>
      <h1>Book Search</h1>
      <div>
        <input
          type="text"
          placeholder="Enter keyword..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? (
        <p>Loading...</p>
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
    </center>
  );
};

export default BookSearch;
