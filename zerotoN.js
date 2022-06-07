// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/javascript

function sequenceSum(n){
    if(n<0){
        return console.log(`${n} is less than zero`)
        
    } else {
        arr = []
        for(i=n; i>=0; i--){
            arr.push(i)
        }
    }
    sumarr = arr.reduce(
        (a, b) => a + b,
      )
    console.log(`The sum of the elements in [${arr}] is ${sumarr}`)

}
sequenceSum(0)
console.log('=====')
sequenceSum(6)
console.log('=====')
sequenceSum(-15)