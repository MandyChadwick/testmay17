const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstName: {
    type: String
    // required: true
  },
  lastName: {
    type: String
    // required: true
  },
  email: {
    type: String
    // required: true
  },
  age: {
    type: Number
    // required: true
  },
  phone: {
    type: Number
    // required: true
  },
  eventsAttended: {
    type: [String]
    // required: true
  },
  gender: {
    type: String
    // required: true
  }
});

module.exports = mongoose.model('Users', UserSchema);


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
