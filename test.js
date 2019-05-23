// function anotherFunction(){var i = 10; return i;}

// var anotherObject = {
// 	c:true
// };

// var anotherArray = [1, 2];

// var myObject = {
// 	a: 2,
// 	b: anotherObject,
// 	c: anotherFunction,
// 	d: anotherArray
// };

// var newObject = Object.assign({}, myObject)

// console.log(newObject.a)
// console.log(newObject.b === anotherObject)
// console.log(newObject.c === anotherFunction)
// console.log(newObject.d === anotherArray)

// var newObject2 = JSON.parse(JSON.stringify(myObject))
// console.log(newObject2.a)
// console.log(newObject2.b)
// console.log(newObject2.c)
// console.log(newObject2.d)

var myObject = {
    get a() {
        return this.__a;
    },
    set a(value) {
        this.__a = value * 2;
    }
};

// console.log('a' in myObject)
// console.log('b' in myObject)
// console.log(myObject.hasOwnProperty('a'))
// console.log(myObject.hasOwnProperty('b'))

// console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));

// Object.defineProperty(myObject, 'b', {
// 	value: 100,
// 	writable: false,
// 	enumerable: true,
// 	configurable: false
// });

// Object.defineProperty(myObject, 'b', {
// 	value: 10000,
// 	writable: false
// })

// myObject.b = 1000000;
// console.log(myObject.b);

for (var k in myObject) {
    console.log(k);
}

forEach(callbackfn: Function, thisArg ? : any)
every(callbackfn: Function, thisArg ? : any)
some(callbackfn: Function, thisArg ? : any)


22222222222222
33333333333333
44444444444444