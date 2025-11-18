async function getData() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 5000);
    });

}

async function dataProcessed() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(460);
        }, 5500);
    });

}

async function main() {
    console.log("Hello, World!");
    console.log("Load data");
    let data = await getData();
    console.log(data);

    console.log("Process data");

    let dataProcesses = await dataProcessed();
    console.log(dataProcesses, "Data processed");
}

main()