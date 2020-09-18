import React, { useState } from 'react'
import axios from 'axios'

const AddArticle = () => {
  const [authorname, setAuthorname] = useState('');
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [message, setMessage] = useState('');


  const changeOnClick = e => {
    e.preventDefault()
    const articles = {
      title,
      article,
      authorname
    }

    setAuthorname("")
    setTitle("")
    setArticle("")

    axios.post("/articles/add", articles)
      .then(res => setMessage(res.data))
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <div className="form-articulo">
      <div className="container">
        <h1 className="addArticle">Add New Article</h1>
        <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="authorname">Author Name</label>
            <input
              type="text"
              value={authorname}
              onChange={e => setAuthorname(e.target.value)}
              className="form-control"
              placeholder="Author Name" />

          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="form-control"
              placeholder="Title Article" />
          </div>
          <div className="form-group">
            <label

              htmlFor="article">Article</label>
            <textarea
              value={article}
              onChange={e => setArticle(e.target.value)}
              className="form-control" rows="3" />
          </div>
          <button type="submit" className="btn btn-info">Post Article</button>
        </form>
      </div>
    </div>
  )
}

export default AddArticle


