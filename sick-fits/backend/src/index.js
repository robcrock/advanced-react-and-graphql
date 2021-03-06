// let's go!
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO use express middleware to handle cookies (JWT)
// TODO use express middleware to populate current user

server.start(
  {
    cors: {
      credentails: true,
      origin: process.env.FRONTED_URL,
    },
  }, deets => {
    console.log(`Server is now running on port http:/localhost:${deets.port}`);
  }
);
