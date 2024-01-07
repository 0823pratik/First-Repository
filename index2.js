const axioRequest = require('axios')

let response = axioRequest.get('https://www.boredapi.com/api/activity')
console.log('You could ${response.data.activity}')