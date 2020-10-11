
import makeListJobs from './list-jobs.js'
import findByHash from '../data-access/index.js'

const listJobs = makeListJobs({ findByHash })

export { listJobs }
