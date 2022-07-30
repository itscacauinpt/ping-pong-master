const axios = require('axios').default;

const url = 'https://ping-pong-masters.herokuapp.com/ping';

async function request({ pong }) {
return axios({
  method: 'get',
    url: url,
    data: {
      ping: pong
    }
  });
};

module.exports = {
  request
}

// // GET request for remote image in node.js
// axios({
//   method: 'get',
//   url: 'http://bit.ly/2mTM3nY',
//   responseType: 'stream'
// })
//   .then(function (response) {
//     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//   });