var obj ={
    name:"harsh",
    age:23,
    city:"bholap"

}

for(var key in obj){
  //  console.log(key);
console.log(key, obj[key]);
}
delete obj.age;

console.log(obj);