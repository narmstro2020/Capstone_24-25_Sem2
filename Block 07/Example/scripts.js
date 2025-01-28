// number
// times 2
// add 10
//print out

let x = 10

const executor = (resolve) => {
    resolve(x)
}

const promise = new Promise(executor);

promise
.then(number => number * 2)
.then()  // TODO: please continue with adding 10
// TODO: continue :) with final printout