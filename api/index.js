const express = require('express')
const redis = require('redis')
const { promisify } = require('util')

const dotenv = require('dotenv');
dotenv.config();


const app = express()
const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);


app.get(process.env.JOBS_BASE_URL, async (req, res) => {
    const jobs = await getAsync(process.env.HASH_FOR_JOBS_IN_GITHUB)
    console.log('number of jobs in redis is - ', JSON.parse(jobs).length)
    // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", `http://localhost:${process.env.ALLOWED_REQUEST_PORT}`); 
    
    return res.send(jobs)
})

app.listen(process.env.JOBS_API_PORT, () => {
  console.log(`App listening at http://localhost:${process.env.JOBS_API_PORT}`)
})