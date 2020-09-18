import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './index.css';

import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Articles from './components/Articles';



function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('/articles',
      // { headers: {'x-api-key': 'edCCjrXzhS4nsSpxSI2P0asvqRvVWcyD8A7q5GFZ'}, })
     { headers: { }})
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
    // console.log(posts)
  })

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route to="/" render={() => <Articles posts={posts}/>} />
      <Footer />
    </div>
  );
}

export default App;
