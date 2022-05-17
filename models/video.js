const array = require('@hapi/joi/lib/types/array');
const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
  title: { type: String },
  videoType: { type: String },
  description: { type: String },
  link: { type: String },
  releaseDate: {type: String}
});

module.exports = mongoose.model('Video', VideoSchema);

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
