import { app } from './api/index.js';
import 'dotenv/config'

const { PORT } = process.env

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})
