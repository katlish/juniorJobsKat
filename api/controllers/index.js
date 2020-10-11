import { listJobs } from '../use-cases/index.js'
import makeGetJobs from './get-jobs.js'
import notFound from './not-found.js'

const getJobs = makeGetJobs({
    listJobs
})

export {getJobs , notFound}

  