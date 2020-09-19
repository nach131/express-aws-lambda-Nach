const express = require('express');
const router = express.Router();
const Fotos = require('../model/Fotos')

//REQUEST GET ALL Fotos
router.get('/2000', (req, res) => {
  Fotos.find( {date:{$gte: '2000-01-01', $lte: '2000-01-10'}})
    .then(foto => res.json(foto))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

router.get('/2001', (req, res) => {
  Fotos.find( {date:{$gte: '2001-01-01', $lte: '2001-01-10'}})
    .then(foto => res.json(foto))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

// //GET
// router.get('/hola', (req, res) => {
//   res.status(200).send('hello desde pedo!');
// });


// //  REQUEST AND NEW ARTICLE
// router.post('/add', (req, res) => {
//   const newArticle = new Articles({
//     title: req.body.title,
//     article: req.body.article,
//     authorname: req.body.authorname
//   });

//   newArticle
//     .save()
//     .then(() => res.json("El nuevo articulo fue añadido"))
//     .catch(err => res.status(400).json(`Error: ${err}`));
// });


// // REQUEST FIND ARTICLES BY ID
// router.get('/:id', (req, res) => {
//   Articles.findById(req.params.id)
//     .then(article => res.json(article))
// })

// // REQUEST FIND ARTICLE BY ID AND UPDATE
// router.put('/update/:id', (req, res) => {
//   Articles.findById(req.params.id)
//     .then(article => {
//       article.title = req.body.title,
//         article.article = req.body.article,
//         article.authorname = req.body.authorname,

//         article
//           .save()
//           .then(() => res.json("El Articulo fue Acualizado"))
//           .catch(err => res.status(400).json(`Error: ${err}`))
//     })
//     .catch(err => res.status(400).json(`Error: ${err}`))
// })

// // REQUEST FIND ARTICLE BY ID AND DELETE
// router.delete('/:id', (req, res) => {
//   Articles.findByIdAndDelete(req.params.id)
//     .then(() => res.json("El articulo fue eliminado"))
//     .catch(err => res.status(400).json(`Error: ${err}`));
// })

module.exports = router;
