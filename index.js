const pingPongMaster = require('./ping-pong-master');
const { log } = require('console');

// função recursiva, condição de parada

async function main(data={}) {
  let response = await pingPongMaster.request({});
  log(response.data);

  while ('pong' in response.data) {
    main(response.data);
  }
};

main();

// async function main() {
//   let response = await pingPongMaster.request({});
//   // const pongObj = response.data;
//   log(response.data);

//   while (response.data.pong) {
//     response = await pingPongMaster.request(response.data);
//     log(response.data);
//   }
// }
