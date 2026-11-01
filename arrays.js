//arryas

const myarr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","naagraj"]

const myarr2=new Array(1,2,3,4)
// console.log(myarr[1]);

//copy op shallo copy and deep copy
//shall copy share reference


// array methods

// myarr.push(6) 
// myarr.push(7)
// myarr.pop()
// console.log(myarr);

//myarr.unshift(9)
// myarr.shift()

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));

// const newarr=myarr.join()

// console.log(myarr);
// console.log(typeof newarr);

//slice,splice

console.log("A",myarr);

const myn1=myarr.slice(1,3)

console.log(myn1);
console.log("B",myarr);

const myn2=myarr.splice(1,3)// using splice remove thoes index 1,2,3

console.log("c",myarr);
console.log(myn2);


