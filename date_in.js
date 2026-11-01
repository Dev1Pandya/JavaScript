let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);// Date type is object

// let mycreatedDate= new Date(2023,0,23)
//  let mycreatedDate= new Date("2023-01-14")
 let mycreatedDate= new Date("01-14-2023")
// console.log(mycreatedDate.toLocaleString());


let myTimeStamp= Date.now()

// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate= new Date()

// console.log(newdate);

// console.log(newdate.getMonth()+1);
// console.log(newdate.getDay());

// `${newdate.getDay()} and the time`

newdate.toLocaleDateString('default',{
    weekday: "long"
})
console.log(newdate);
