import express from 'express';

import 'dotenv/config';
import cors from 'cors';
import express from 'express';
 
const app = express();
 
app.use(cors());
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
app.listen(process.env.PORTO, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);