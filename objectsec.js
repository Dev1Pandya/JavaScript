//singleton object

// const tinderuser=new Object()//singleton

const tinderuser={}//non singleton

tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedIn=false

// console.log(tinderuser);

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Hitesh",
            lastname:"chodhary"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}

// const obj3={obj1,obj2}
// const obj3 =Object.assign({},obj1,obj2,obj4)//{} using it targe = blank array 

// console.log(obj1);

// console.log(obj3 == obj1);// result is false because store in blank array {}
// console.log(obj3);

// console.log(obj2);
// console.log(obj4);

const obj3={...obj1,...obj2,...obj4}
// console.log(obj1);
//  console.log(obj3 == obj1) // res is false
// console.log(obj3);


const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"d@gmail.com"
    },
    {
        id:3,
        email:"v@gmail.com"
    },
]

users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isloggedIn'));

const course= {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

// course.courseInstructor

const{courseInstructor: instructor}=course
// console.log(courseInstructor);
 console.log(instructor);







// const navbar=({company})=>{ //Destructoring 

// }
// navbar(company="hitesh")


