let arr = [1,2,3,4,5,6,7,8,9,10];

const cusArr = arr
                    .map((item)=> item+10)
                    .map((item)=> item+1)
                    .filter((item)=> item%2==0)

console.log(cusArr);

