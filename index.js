import 'dotenv/config'
import express from 'express';
import { router as apiRouter } from './routers/index.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', apiRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});