import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { router as apiRouter } from './src/routers/index.js'

const app = express();

app.use(cors("*"))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', apiRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});