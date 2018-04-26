const testNum = (num) => {
  if (num >= 10) {
    return Promise.resolve(`${num} is greater than 10, success!`)
  } else {
    return Promise.reject(`${num} is less than 10, error!`)
  }
};

const makeAllCaps = (array) => {
  let type = array.every(word => typeof word === 'string');

  if (type) {
    const upperCased = array.map(word => word.toUpperCase());
    
    return Promise.resolve(upperCased)
  } else {
    return Promise.reject('No, the array you passed in contained an element that is not a string!')
  }
};

const sortWords = (array) => {
  return Promise.resolve(array.sort((a,b) => a > b))
};

//Questions

//What is .then() used for and what is .catch() used for?
//.then() takes in the resolved data and runs a callback function, executed after the promise resolves. .catch() executes is there are any errors in the fetch call. 

//What are good use cases for Promises?
//Promises are good for making code asynchronous. It is used for better performance and flexibility. 

//What other libraries/functions can you find that uses Promises?
//setTimeout, fetch API, battery API, serviceWorker API, async await
