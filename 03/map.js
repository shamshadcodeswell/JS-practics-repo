let arr = [1,2,3,4,5,6,7,8,9,10];

// const cusArr = arr
//                     .map((item)=> item+10)
//                     .map((item)=> item+1)
//                     .filter((item)=> item%2==0)

// console.log(cusArr);

// const Total = arr.reduce((acc,cur)=>acc+cur,0);
// console.log(Total);



const course = [
    {
        course : "JS",
        price : 399
    },
    {
        course : "mysql",
        price:499
    },
    {
        course : "react",
        price : 599
    }
]

const cartVal = course.reduce((acc,curr)=>acc+curr.price,0);
console.log(cartVal);
 
