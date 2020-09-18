// import { PromiseProvider } from 'mongoose'
import React from 'react'
import Spinner from "react-bootstrap/Spinner";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

const Articles = ({ posts }) => {

  const [article, setArticle] = useState([]);
  //DELETE ARTICLE BY ID
  const deleteArticle = id => {
    axios.delete(`/articles/${id}`).then(res => alert(res.data));
    setArticle(article.filter(elem => elem._id !== id));
  }
  // console.log(posts)
  return (
    <div className="articulos">

      {!posts.length ? (
        <div className="row">

          <Spinner animation="border" role="status" variant="info mx-auto" >
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (

          posts.map((article, key) => (
            <div className="container" key={key}>
              <Link to={{
                pathname: `/article/${article._id}`
              }}>

                <h2>{article.title}</h2>
              </Link>
              <p>{article.article}</p>
              <span className="badge badge-secondary p-2">{article.authorname}</span>
              <div className="row my-5">
                <div className="col-sm-2">
                  <Link to={`/update/${article._id}`} className="btn btn-outline-success">Editar articulo</Link>
                </div>
                <div className="col-sm-2">
                  <button onClick={() => deleteArticle(article._id)} className="btn btn-outline-danger">Borrar articulo</button>
                </div>
              </div>
            </div>
          )))

      }
    </div>
  );
};

export default Articles;
