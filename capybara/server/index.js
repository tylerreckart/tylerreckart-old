// Declare this right away so that we know what kind of env we're working in
process.env.NODE_ENV = 'development';

// Dependencies
import express from 'express';
import postgraphql from 'postgraphql';
import http from 'http';
import path from 'path';
import 'colors';
// Make sure that we can read external environment variables
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, '../../build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'../../build/index.html'));
// });


http.createServer(app).listen(8080, () => (
  console.log(`[express] Server listening on port 8080`.cyan)
));

