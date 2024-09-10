function fTemp(resolve) {
  setTimeout(() => {
    // Other things to do before completion of the promise
    console.log("Did something");
    // The fulfillment value of the promise
    resolve(123);
  }, 2000);
}

function doSomething() {
  return new Promise(fTemp);
}

function finalmente(v) {
  console.log("A promise terminou", v);
}

const promise = doSomething();
promise.then(finalmente);
console.log(promise);
console.log("FIM");
