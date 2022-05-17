const array = require('@hapi/joi/lib/types/array');
const mongoose = require('mongoose');

const AudioSchema = mongoose.Schema({
  title: { type: String },
  audioType: { type: String },
  description: { type: String },
  link: { type: String },
  By:{type: String},
  releaseDate: { type: String },
  length: {type: String}
});

module.exports = mongoose.model('Audio', AudioSchema);

// Audio:
// Title
// audio type (podcast, audiobook, music)
// Description
// Link
// By (array with author, performers, or speakers)
// Release date (optional)
// Length 
// Video:
// Title
// Video type (video game, video)
// Description
// Link
// Release date
// Docs:
// Title
// Doctype (pdf, txt, docs, excel)
// Description
