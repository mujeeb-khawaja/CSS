class Animal {
    constructor(name) {
        this.name = name;
        console.log("Constructor created")
    }
    eats() {
        console.log(`${this.name} eats food.`);
    }
    jumps() {
        console.log(`${this.name} jumps high.`);
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name);
        console.log("Rabbit constructor created")
    }
}

let a = new Animal("Dog");
let x = new Rabbit("Bunny");