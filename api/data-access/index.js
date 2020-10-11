import redis from 'redis';
import { promisify } from 'util';


const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);



async function findByHash (hash) {
  const jobs = await getAsync(hash.hash)
  if (jobs.length === 0) {
    return null
  }
  return jobs
}


export default findByHash
