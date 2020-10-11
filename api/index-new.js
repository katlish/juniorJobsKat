import express from 'express'
import dotenv from 'dotenv'

import {
  getJobs, 
  notFound
} from './controllers/index.js'

// import { makeExpressCallback } from './express-callback/express-callback.js'

dotenv.config()


const apiRoot = '/api'
const app = express()

app.get(`${apiRoot}/jobs`, getJobs)

app.use(notFound)


//TODO: port into env
  // listen for requests
  app.listen(3001, () => {
    console.log('Server is listening on port 3001')
    console.log('PROCESS1 - ', process.env)
  })


export default app
