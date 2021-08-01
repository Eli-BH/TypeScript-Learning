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