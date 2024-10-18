import 'dotenv/config'
import express, { urlencoded } from 'express';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('<h1>Hello Marc le GOAT ?</h1>')
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});