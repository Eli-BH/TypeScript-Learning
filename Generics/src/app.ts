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

// //we can turn this into a generic function which
// function merge<T, U>(objA: T, objB: U){ //this infers the intersection of T & U, now the return can exist as one Object
//     return Object.assign(objA, objB);
// }

// const mergedObj = merge({name: "Max"}, {hobbies: ["Sports", "Video Games"]});
// // we cant access the new obeject as one object becuase TS doesnt know that it exists


// Constraints
//we can turn this into a generic function which
function merge<T extends object, U extends object>(objA: T, objB: U){ //The T type can be any object of any structure but it must be an object
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: "Max" , hobbies: ["Sports", "Video Games"]}, {age: 30});
// we cant access the new obeject as one object becuase TS doesnt know that it exists

interface Lengthy{
    length: number; 
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let description = "Got no value."
    if(element.length > 0){
        description = "Got 1 element"
    } else if ( element.length > 1){
        description = 'Got ' + element.length + " elements. "
    }
    return [element, description]; 
}

console.log(countAndDescribe(["Sports", "Cooking"]))


//constraints

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){ // keyof tells TS that we need this specific structure
    return obj[key]
}

console.log(extractAndConvert({name: "Eli"}, 'name'))

//Generic Classes
class DataStorage<T extends number | string | boolean>{
    private data: T[] = []

    addItem(item: T){
        this.data.push(item)
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1); 
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string >(); 
textStorage.addItem('Eli')
textStorage.addItem('Jack')
textStorage.removeItem("Jack")
console.log(textStorage.getItems())

//we can use numbers or other types as well in the generic

const numberStorage = new DataStorage<number>(); 


//this specific version doesnt work well with objects
//we change it to only work with primative types
const objStorage = new DataStorage<object>(); 
const maxObj = {name: "Jack"}
objStorage.addItem({name: "Eli"})
objStorage.addItem({name: "Jack"})

objStorage.removeItem(maxObj)
console.log(objStorage.getItems())

//Generic Utility Types 
//These types only exist it typescript 

interface CourseGoal {
    title: string; 
    description: string;
    completeUntil: Date; 
}

// function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
//     return {title: title, description: description, completeUntil:date}
// }

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
        let courseGoal: Partial<CourseGoal> = {}; //Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
        courseGoal.title = title; 
        courseGoal.description = description;
        courseGoal.completeUntil = date; 

        return courseGoal as CourseGoal; 
}
    

// const names: Readonly<string[]> = ['Max', 'Anna']
