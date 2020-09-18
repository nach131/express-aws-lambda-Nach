import React from 'react'
import { useState } from 'react';

import { Card, Container, Row,Button } from 'react-bootstrap';
import axios from 'axios';

const Users = ({ items }) => {

  const [user, setUser] = useState([]);
  //DELETE ARTICLE BY ID
  const deleteArticle = id => {
    axios.delete(`/user/${id}`).then(res => alert(res.data));
    setUser(user.filter(elem => elem._id !== id));
  }

  return (

    <Container className="mt-2 pb-3">
      <Row>
        {items.map((user, key) => (
          <div id="card" className="col-xs-12 col-sm-6 col-md-6 col-lg-3">

            <Card
              key={key}
              bg='secondary'
              className="mb-4 shadow-sm ">
              <Card.Header className="">{user.name}</Card.Header>
              <Card.Body className="px-3">
              <Card.Title>{user.firstname}</Card.Title>
              <Card.Text> {user.birth} </Card.Text>
              <Card.Text>{user.city}</Card.Text>
              <h5>{user.ip}</h5>
              </Card.Body>
               <Row className="mx-auto pb-2">
               <Button className="mx-1" size="sm">Editar</Button>
               <Button className="mx-1" variant="danger" size="sm"
               onClick={() => deleteArticle(user._id)}
               >Borrar</Button>
               </Row>
            </Card>
          </div>

        ))}
      </Row >
    </Container >
  )
}

export default Users;