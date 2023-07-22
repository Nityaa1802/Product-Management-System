import React, { useEffect } from 'react';

import './App.css';
import Mainpage from './MainPage';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './MainPage/components/ProductDetails';
import axios from 'axios';




function App() {
  useEffect(() => {
    axios.post('https://dummyjson.com/auth/login', {
  username: 'kminchelle',
  password: '0lelplR'
    }, {
      withCredentials: true,
     
})
.then(response => {
  console.log(response.data);
  
})
.catch(error => {
  console.log(error);
});
  })
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/product/:productId' element={<ProductDetails/>}/>
        </Routes>
       </div>
    

    </div>
  );
}

export default App;
