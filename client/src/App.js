import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './index.css';

import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Articles from './components/Articles';
import Article from './components/Article';
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';

const path = "https://vhaeq8i93e.execute-api.eu-west-3.amazonaws.com/production"

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get(`${path}/articles`,
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
      <Route exact path="/" render={() => <Articles posts={posts}/>} />
      <Route path="/article/:id" render={(props) => <Article{...props} posts={posts}/>}/>
      <Route path="/update/:id" render={(props) => <EditArticle{...props} posts={posts}/>}/>
      <Route excact path="/add-article" component={AddArticle}/>
      <Footer />
    </div>
  );
}

export default App;
