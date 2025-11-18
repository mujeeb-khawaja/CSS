function randomNumber() {
    return Math.floor(Math.random() * 7);
}

async function getData() {
    let randomNumberValue = randomNumber();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Initializing Hacking...");
        }, randomNumberValue*1000);
    });
}

async function main() {
    let data = await getData();
    console.log(data);
}
main()