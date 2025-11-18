async function getData() {
    
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Code',
            body: 'Mujeeb',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json();
    return data;
}

async function main() {
    console.log("Hello, World!");
    console.log("Load data");
    let data = await getData();
    console.log(data);

    console.log("Process data");
}

main()