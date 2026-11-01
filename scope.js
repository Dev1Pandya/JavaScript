let a = 300; //gloal
if (true) {
  let a = 10; // block scope
  const b = 20;
  //    console.log("INNER:",a);
}

// console.log(a);
// // console.log(b);
// console.log(c);

function one() {
  const username = "hitesh";
  function two() {
    const website = "youtube";
    console.log(username);
  }
//   console.log(website);
  two()// function call to run but inner function run when main fun. call
}
// one()

if (true) {
  const username = "hitesh"
  if (username === "hitesh") {
    const website = " youtube"
    // console.log(username + website)
  }
//   console.log(website);
}

// console.log(username);

//=============================================================

console.log(addone(5))
function addone(num){
    return num +1
}

addtwo(5)

const addtwo=function(num){
    return num+2
}