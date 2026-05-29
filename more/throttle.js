function Throttle(fn , delay){
    let flag=0;
    return function (...args){
            if(flag==0){
                fn(...args)
            flag=1
            setTimeout(()=>{
                flag =0
            },delay)
        }
    }   
}

const search = (query)=>{
    console.log(`searching for ${query}`);    
}

const searchWithThrottle = Throttle(search,1000)

searchWithThrottle('ha')
searchWithThrottle('har')
searchWithThrottle('hard')
searchWithThrottle('hard J')
setTimeout(()=>{
    searchWithThrottle('hard JS')
},1500)
