console.log("This is promise");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5) {
        reject(a);
    }
    else {
        setTimeout(() => {
            resolve("Promise resolved successfully");
        }, 2000);
    }
});

prom1.then((message) => {
    console.log("Success: " + message);
}).catch((a) => {
    console.log("Failure: " + a);
});