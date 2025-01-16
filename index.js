import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './routes/users.js';

const app = express();
app.use(bodyParser.json());

const PORT = 8080;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.use('/users',usersRouter);