const express = require('express')
const redis = require('redis')
const { promisify } = require('util')

const app = express()
const port = 3001
const client = redis.createClient();

const getAsync = promisify(client.get).bind(client);


//TODO: env
app.get('/api/jobs', async (req, res) => {
    const jobs = await getAsync('github')
    // console.log('number of jobs in redis is - ', JSON.parse(jobs).length)
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    
    return res.send(jobs)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})