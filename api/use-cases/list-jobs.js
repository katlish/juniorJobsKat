export default function makeListJobs ({ findByHash }) {
    return async function listJobs ({ hash } = {}) {
      if (!hash) {
        throw new Error('You must supply a hash.')
      }
      const listOfJobs = await findByHash({
        hash
      })
      return listOfJobs
  
      // If this gets slow introduce caching.
      // const nestedComments = nest(listOfJobs)
      // return nestedComments
      // function nest (comments) {
      //   if (comments.length === 0) {
      //     return comments
      //   }
      //   return comments.reduce((nested, comment) => {
      //     comment.replies = comments.filter(
      //       reply => reply.replyToId === comment.id
      //     )
      //     nest(comment.replies)
      //     if (comment.replyToId == null) {
      //       nested.push(comment)
      //     }
      //     return nested
      //   }, [])
      // }
    }
  }
  