const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleShema = new Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  authorname: { type: String, required: true }
}, {
  timestamps: true //cuando se crearon los datos
})

const Articles = mongoose.model("Article", articleShema);

module.exports = Articles;