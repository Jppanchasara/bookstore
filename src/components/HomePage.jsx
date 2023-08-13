
import React from "react";

import BookSearch from './bookserch.js';
import { useState, useEffect } from 'react';

import WithAuth from "../layout/withAuth";
const HomePage = ({ username }) => {
 

  return (
    <div>
    <BookSearch/>
  </div>
  
    
    );
}

export default WithAuth(HomePage)

