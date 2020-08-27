var fetch = require('node-fetch')
const redis = require("redis");
client = redis.createClient();

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

const baseUrl = 'https://jobs.github.com/positions.json'

async function fetchGithub() {
    let resultCount = 1
    let onPage = 0
    const allJobs =[]


    while (resultCount > 0) {
        const res = await fetch(`${baseUrl}?page=${onPage}`)
        const jobs = await res.json()
        allJobs.push(...jobs)
        resultCount = jobs.length
        console.log('got', resultCount, 'jobs')
        onPage++
    }

    console.log('got', allJobs.length, 'jobs')

    const juniorJobs = allJobs.filter(job => {
        const title = job.title.toLowerCase()

        if (title.includes('senior') || 
            title.includes('manager') ||
            title.includes('sr.') ||
            title.includes('architect')) {
            return false
        } 
        return true
    })
    console.log('filtered down to - ', juniorJobs.length)

    const success = await setAsync('github', JSON.stringify(allJobs))
    console.log({success})
}

fetchGithub()

module.exports = fetchGithub