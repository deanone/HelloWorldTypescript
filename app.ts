let message: string = 'Hello, Typescript!';

let value: number = 10;

let arr: number[];
arr = [1,2,3];
arr.push(4);

let person: {
    name: string
    age: number
}

person = {
    name: 'Sakis',
    age: 34
}

let greeting : (name: string) => string;

greeting = function(name: string) {
    return 'Hi '+name+'!';
}

console.log(greeting('Sakis'));