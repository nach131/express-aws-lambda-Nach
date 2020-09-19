const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fotoShema = new Schema({
  date: { type: Date },
  explanation: { type: String },
  hdurl: { type: String },
  media_type:{type: String },
  service_version:{type: String },
  title:{type: String },
  url:{type: String }
}, {
  timestamps: true //cuando se crearon los datos
})

const Fotos = mongoose.model("Fotos", fotoShema);

module.exports = Fotos;