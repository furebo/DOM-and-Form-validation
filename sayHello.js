// const sayHello = function(num1,num2){
//     console.log(name + " is " + age +" years old");
//     let total = num1 + num2
//     return total
// }

// console.log(sayHello(10, 35));

let arrofnumbers = [2,5,7,9,6,8]

const mapped = arrofnumbers.map((el,index,arr)=>{
    return el *2;
})
console.log(mapped);

let newArr =[];

arrofnumbers.forEach((el,index,arr)=>{
    newArr.push(el * 3)
})
console.log(newArr)

const filtered = arrofnumbers.filter((el,index,arr)=>{
    return el % 2 == 0;
})

console.log("This is the filtered array " + filtered);

try {
    addddelert("Welcome here.")
} catch (fault) {
    console.log(fault.message);
}finally{
    
}