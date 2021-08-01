// Generic types require 1 type argument; 
// A Generic type is a type that is type that has a connection to another type. 
// It is flexible regaurding which exact type the second one is

const names: Array<string> = []; //string[]

//promise types
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("This is done")
//     } ,2000)
// }); //js constructor for promise

const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 2000)
})

promise.then(data =>{
    //data.split('') will give us errors becuase TS know that we expect a number

})

//we can make our own Generics as well
// function merge(objA: object, objB: object){
//     return Object.assign(objA, objB);
// }

//we can turn this into a generic function which
function merge<T, U>(objA: T, objB: U){ //this infers the intersection of T & U, now the return can exist as one Object
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: "Max"}, {age: 3000});
// we cant access the new obeject as one object becuase TS doesnt know that it exists

