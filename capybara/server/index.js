// Declare this right away so that we know what kind of env we're working in
process.env.NODE_ENV = 'development';

// Dependencies
import express from 'express';
import subdomain from 'express-subdomain';
import postgraphql from 'postgraphql';
import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import forceSsl from 'express-force-ssl';
// Make sure that we can read external environment variables
require('dotenv').config();

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, '../../build')));
// Declare subdomain
app.use(subdomain('api', router));
// app.use(forceSsl);
// Connect to PSQL
app.use(cors(), postgraphql(
  process.env.DATABASE_URL,
  'api',
  { graphiql: true }
));
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'../../build/index.html'));
});

if (process.env.NODE_ENV !== 'production') {
  http.createServer(app).listen(8080, () => (
    console.log(`
      POST endpoint available at http://api.${process.env.SITE_URL}/graphql
  
      GraphiQL IDE available at http://api.${process.env.SITE_URL}/graphiql
    `)
  ));
} else {
  const credentials = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH, 'utf8'),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH, 'utf8'),
  };

  http.createServer(app).listen(443, () => (
    console.log(`
      POST endpoint available at http://api.${process.env.SITE_URL}/graphql
  
      GraphiQL IDE available at http://api.${process.env.SITE_URL}/graphiql
    `)
  ));
}
