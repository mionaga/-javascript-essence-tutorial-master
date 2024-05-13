// function sleep(val) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log(val++);
//       resolve(val);
//     }, 1000);
//   });
// }

// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })

function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function runSleep() {
  let val = await sleep(0);

  // val = await sleep1(val);
  // val = await sleep1(val);
  // val = await sleep1(val);
  console.log(sleep);

}

runSleep();

