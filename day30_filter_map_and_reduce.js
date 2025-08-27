


//=----------------------filter-------------//

const mynum = [1,2,3,4,5,6,7,8,9]

const newnum = mynum.filter((num)=> {
    return num > 4
})
// console.log(newnum)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//const userbook = books.filter((bk)=> bk.genre === 'History')    // without scope

let userbook = books.filter((bk)=>{
   return bk.publish >= 1995 && bk.genre === 'History'
}) // with scope
//console.log(userbook)




//=-------------------map---------------------//


//const letestnum = mynum.map((num)=> {return num +10})

  const letestnum = mynum
                         .map((num)=> num * 10)
                         .map((num)=> num + 1)  // yaha pe jo num hai uski value upar ke map ka operation hoke values aaje ga vo hogi , ase hi chaining follow hogi
                         .filter((num)=> num >= 40)
// console.log(letestnum) 




//=----------------reduce -----------------//

const nums = [1,2,3]

// const mytotal = nums.reduce(function(acc, currval){
//      console.log(`acc: ${acc} and currval: ${currval}`)
//      return acc + currval
// },0)

const mytotal = nums.reduce((acc, currval)=> acc + currval, 0)
// console.log(mytotal);

const shopingCart = [
    {
       itemname: "js course",
       price: 999   
    },
    {
       itemname: "py course",
       price: 999   
    },
    {
       itemname: "mobile dev course",
       price: 5999   
    },
    {
       itemname: "data science course",
       price: 11999   
    },
]


const tottalprice = shopingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(tottalprice)