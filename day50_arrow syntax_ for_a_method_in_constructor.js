

// int javascript value of this depeds on how a function is called
// if you pass a method aroud as callback this can get lost

class Person{

    constructor(name){
        this.name = name;
    }

    sayHello(){
         console.log("hello, i am "+this.name);
    }
}

const p = new Person("yagnik")

//work fine
p.sayHello();// hello, i am yagnik

// but passing as a callback,  loses 'this'

//setTimeout(p.sayHello,2000)  //hello, i am undefined  (in strict mode: error)

class Vehicle{

    constructor(name){
         this.name = name;

         // arrow function bound to this instance
         this.vehicleName = ()=>{
             console.log("name of vehical"+ this.name);
         }
    }
}

const v = new Vehicle('tata')

v.vehicleName();
// always works, even as a callback
setTimeout(v.vehicleName,3000) //ame of vehicaltata
