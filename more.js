//-----------   data access
// const data = [{
//     name: 'nury',
//     age: 20,
//     address: 'dhaka'
// }]
// console.log(data[0].address)
// const deviceDetails = {
//     brand: "TechBrand",
//     model: "X1000",
//     releaseYear: 2023,
//     dimensions: {
//         height: "150mm",
//         width: "70mm",
//         depth: "8mm",
//         weight: "180g"
//     },
//     specs: [
//         {
//             name: "Processor",
//             value: {
//                 name: "nur",
//                 age: 20,
//                 address: {
//                     city: 'dhaka',
//                     country: 'bangladesh',
//                 }
//             }
//         },
//         {
//             name: "RAM",
//             value: {
//                 name: "nur",
//                 age: 20,
//                 city: 'chandpur',
//             },
//         },
//         {
//             name: "Storage",
//             value: "256GB"
//         },
//         {
//             name: "Battery",
//             value: "4500mAh"
//         }
//     ],
//     availableColors: ["Black", "White", "Blue", "Red"],
// };
// console.log(deviceDetails.specs[2].name)
// console.log(deviceDetails.specs[0].value.address?.country)
// console.log(deviceDetails.specs[1].value.address?.country)  //optional chaining na thakle error ashto

//---------     Array map to do one line loop magic
// const arr = [3, 4, 5, 6, 7, 8];
// const doubled = [];
// for(const r of arr) {
//     const double = r*2;
//     doubled.push(double)
// }
// console.log(doubled);
// function doubleIt(num) {
//     console.log('num now', num);
//     return num*2;
// }
// console.log(arr.map(doubleIt))
// const double2 = num => num*2;
// console.log(arr.map(double2));
// console.log(arr.map(num => num*2));
// console.log(arr.map(num => num+2));
// const arr2 = ['nur', 'john', 'don', 'oliver', 'khalifa'];
// console.log(arr2.map(arr => arr.length));
// console.log(arr2.map(arr => arr[0].))

//-----------   foreach, filter, find, and differences between them
// const arr = [3, 4, 5, 6, 7, 8];
// const arr2 = ['nur', 'john', 'don', 'oliver', 'khalifa', 'khadiza'];
// console.log(arr.forEach(ar => console.log(ar)));
// console.log(arr.filter(r => r > 5))
// console.log(arr.filter(r => r > 9))
// console.log(arr.filter(r => r%2 === 0))
// console.log(arr2.filter(r => r.length % 2 === 1))
// console.log(arr.find(r => r > 7))
// console.log(arr.find(r => r > 9))
// console.log(arr.find(r => r > 2))

//----------    reduce()
const arr = [3, 4, 5, 6, 7, 8];
console.log(arr.reduce((previous, current) => {
    console.log('this is p: ', previous);
    return previous + current;
}, 0))
console.log(arr.reduce((previous, current) => {
    console.log('this is p: ', previous);
    return previous + current;
}, 1))
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        description: "High-quality wireless headphones with noise cancellation.",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        description: "Stylish smart watch with fitness tracking features.",
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 49.99,
        description: "Portable Bluetooth speaker with excellent sound quality.",
    },
    {
        id: 4,
        name: "Gaming Mouse",
        price: 29.99,
        description: "Ergonomic gaming mouse with customizable buttons.",
    },
    {
        id: 5,
        name: "Laptop Stand",
        price: 19.99,
        description: "Adjustable laptop stand for better ergonomics.",
    }
];
//  map
// console.log(products.map(product => product.name))
// //  forEach
// products.forEach(product => console.log(product.id))
// //  filter
// console.log(products.filter(p => p.price > 50))
// //  find
// console.log(products.find(p => p.price >50));
// //  reduce
// console.log(products.reduce((sum, currentPrice) => sum + currentPrice.price, 0))

//-----------    Introduction to Class and objects
// class Teacher{
//     constructor(name, subject) {
//         this.name = name;
//         this.bishoy = subject;
//     }
//     lecture(sub) {
//         console.log(`teaching something about:  ${sub}`)
//     }
// }
// const tapan = new Teacher('Tapan Sir', 'Math');
// console.log(tapan);
// tapan.lecture('math')


//------------    Inheritance prototypical inheritance
// class Vehicle {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price
//     }
//     move() {
//         console.log('gari cole na cole na')
//     }
// }
// class Bus extends Vehicle{
//     constructor(name, price, seat, ticketPrice) {
//         super(name, price);     //upor er class er kache jabe and shekhane jei parameter gula ache shegula boshabo
//         this.seat = seat;
//         this.ticketPrice = ticketPrice;
//     }
// }
// class Truck extends Vehicle{
//     constructor(name, price, load) {
//         super(name, price);
//         this.load = load;
//     }
// }

//----------    this keyword, Dot notation vs bracket notation
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sleep() {
//         console.log(`Sleeping now ${this.name}`);
//     }
// }
// const kodom = new Person('Kodom Ali', 25);
// console.log(kodom);
// kodom.sleep();
// const badam = new Person('Kacha Badam', 30);
// badam.sleep()

const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y)