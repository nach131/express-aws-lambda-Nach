import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './index.css';

import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Users from './components/Users';


function App() {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get('/tokemo',
      { headers: {'x-api-key': 'edCCjrXzhS4nsSpxSI2P0asvqRvVWcyD8A7q5GFZ'}, })
      .then(res => setItems(res.data))
      .catch(error => console.log(error));
    // console.log(items)
  })

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route to="/" render={() => <Users items={items} />} />
      <Footer />
    </div>
  );
}

export default App;
