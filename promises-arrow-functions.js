function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Other things to do before completion of the promise
      console.log("Did something");
      // The fulfillment value of the promise
      resolve(123);
    }, 2000);
  });
}

const promise = doSomething();
promise.then((v) => console.log("A promise terminou", v));
console.log(promise);
console.log("FIM");
