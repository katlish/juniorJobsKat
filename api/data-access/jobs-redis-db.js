export default function makeJobsRedisDb ({ makeDb }) {
  return Object.freeze({
    findByHash
  })

  async function findByHash (hash) {
    const jobs = await makeDb(hash)
    if (jobs.length === 0) {
      return null
    }
    return jobs
  }
}
