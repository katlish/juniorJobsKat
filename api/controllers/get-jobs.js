export default function makeGetJobs ({ listJobs }) {
    return async function getJobs (httpRequest) {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }

      try {
        const jobs = await listJobs({
          hash: httpRequest.query.hash
        })
        return {
          headers,
          statusCode: 200,
          body: jobs
        }
      } catch (e) {
        // TODO: Error logging
        console.log(e)
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message
          }
        }
      }
    }
  }
  