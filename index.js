import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import exam1Ruoter from './src/example1/exam1.routes.js'
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors([
  'http://localhost:3000',
]));

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/exam1/api/v1',exam1Ruoter)


app.listen(port, () => {
  console.log('Server running on port :', port);
});
