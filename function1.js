

function sayMyName(){
console.log("R");
console.log("A");
console.log("J");

}
// sayMyName()

// function add2numbers(number1,number2){
//     console.log(number1+number2);   
// }

function add2numbers(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
}


const result =add2numbers(3,5)
// console.log("result: ",result);


function loginuserMessage(username="sam"){
    if(!username){
       console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("raj"))
// console.log(loginuserMessage("raj"))

function calculateCartPrice(val1,val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

const user ={
    username:"Hitesh",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)

 handleObject({
    username:"sam",
    price:399
 })
 const myNewArray=[200,400,100,600]

 function returnSecondvalue(getArray){
    return getArray[3]
 }
 console.log(returnSecondvalue(myNewArray));
 