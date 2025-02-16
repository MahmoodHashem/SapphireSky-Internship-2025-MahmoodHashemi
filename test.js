


let a = [22,5,10]
let b = [9,10,8]


let alice = 0; 
let bob = 0; 

a.map((item,index)=>{
    if(item>b[index]){
        alice++
    }else if(item<b[index]){
        bob++
    }
})

let result = [alice,bob]

console.log(result)