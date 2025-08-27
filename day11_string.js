
let name = "yagmik"
// "yagmik" (just the primitive string)
//It is stored directly in the stack memory.
//t's lightweight and has no extra functionality attached.



let username = new String("yagmik123"); 
// [String: 'yagmik123'] 
// It's an object wrapper around a string, so it shows more than just plain text
//tored in the heap, with a reference in the stack.
//Comes with more methods and metadata because it’s a full object.


console.log(name);
console.log(username);



// STACK:
// +-----------------------------+
// | name      = "yagmik"       |
// | username  --> 0xABC        |
// +-----------------------------+

// HEAP:
// 0xABC → String Object {
//          [[PrimitiveValue]]: "yagmik123"
//        }
