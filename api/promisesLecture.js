// axios  examples from comment

const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
 
// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
 
// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}


//------------------ promise
// A promise can be in one of three states. 
// Pending, fulfilled, or rejected. 
// Pending is the initial state. It is neither fulfilled nor rejected. 
// A pending promise will eventually be fulfilled with a value or rejected with a reason. 
// So, when the promise is in the pending state, it means the outcome of the promise has not yet been determined. 
// The asynchronous operation that will eventually yield the result has not completed yet.

//------------------ chaining in promises
const promise = new Promise((resolve,reject) => {
    if (true) {
        resolve('Stuff worked');
    } else {
        //never happens
        reject('Smth went wrong');
    }
})

promise
    .then(res => res + '1') // returns - Stuff worked1
    .then(res2 => res2 + '2') // returns - Stuff worked12
    .then(res3 => {console.log(res3 + '3')})
    .catch(() => console.log('error')) //will catch only errors above this catch
/* output - Stuff worked123 */


//------------------ promise callback explained
const callback = (resolve,reject)=>{
    setTimeout(() => {
         resolve("I am resolved");
    }, 
    5000);
}
const promise5= new Promise(callback)
promise5.then(res=>console.log(res)) 

//------------------ promise async example
console.log('1');
const data = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, '2-promise resolved');
});
data.then(val => console.log('Promise data = ', val));
console.log('3');

//------------------ Promise.all() example with then
const urls =[
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/albums'];

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json()) //fetch() returns Promise
})).then(results => {
    console.log(results)
}).catch(() => console.log('error')); //if 1 of all Promises array will fail, error will be thrown


//------------------ Promise.all() example with async/await
const urls =[
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'];

const getDataFunc = async function() {
    try {
        const [users , posts, albums] = await Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json()) //fetch() returns Promise
        }))
    
        console.log(users);
        console.log(posts);
        console.log(albums);
    }catch(err){
        console.log('oops', err);
    }
}    

getDataFunc();


