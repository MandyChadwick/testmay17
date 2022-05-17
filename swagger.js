const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Events API',
    description: 'API for creating events and registering to attend them.'
  },
  //host: 'cse341-project02-mw.herokuapp.com',
   host: 'localhost:8080',
  schemes: ['http'],
  tags: [
    {
      name: 'Users',
      description: 'Endpoints for Users'
    },
    {
      name: 'Events',
      description: 'Endpoints for Events'
    },
    {
      name: 'Documents',
      description: 'Endpoints for Documents'
    },
    {
      name: 'Audio',
      description: 'Endpoints for Audio'
    },
    {
      name: 'Video',
      description: 'Endpoints for Video'
    }
  ]
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
