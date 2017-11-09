process.env.NODE_ENV = 'development';

import express from 'express';
import subdomain from 'express-subdomain';
import postgraphql from 'postgraphql';
import http from 'http';
import https from 'https';
import fs from 'fs';
import cors from 'cors';

require('dotenv').config();

const app = express();
const router = express.Router();

const credentials = {
  // key: fs.readFileSync('', 'utf8'),
  // cert: fs.readFileSync('', 'utf8'),
};

app.use(subdomain('api', router));

router.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.use(cors(), postgraphql(
  'postgres://localhost:5432/treckart',
  'api',
  { graphiql: true }
));

if (process.env.NODE_ENV !== '"production"') {
  http.createServer(app).listen(8080);
} else {
  https.createServer(credentials, app).listen(8080);
}
