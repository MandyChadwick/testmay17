const array = require('@hapi/joi/lib/types/array');
const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
  title: { type: String },
  documentType: { type: String },
  description: { type: String },
  
});

module.exports = mongoose.model('Documents', DocumentSchema);

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
