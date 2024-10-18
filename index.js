import 'dotenv/config'
import express from 'express';
import { router } from './routers/router.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});