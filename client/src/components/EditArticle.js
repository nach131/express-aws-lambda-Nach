import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EditArticle = (props) => {
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

    axios.put(`/articles/update/${props.match.params.id}`, articles)
      .then(res => setMessage(res.data))
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    axios.get(`/articles/${props.match.params.id}`)
      .then(res => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthorname(res.data.authorname)
      ])
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="form-articulo">
      <div className="container">
        <h1 className="addArticle">Edit Article</h1>
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
          <button type="submit" className="btn btn-info">Update Article</button>
        </form>
      </div>
    </div>
  )
}

export default EditArticle


