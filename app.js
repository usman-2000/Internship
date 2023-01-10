const prompt = require("prompt-sync")({sigint:true})

const a = prompt("Enter you Number: ");
for(let i = 1;i<11;i++){
    console.log(`${a} x ${i} = ${a*i}`)
}










// const { table } = require('console');

// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// readline.question("enter number ", a=>{
//     console.log(`the number is ${a}`)
//     readline.close();
// })
// // let b = 10;

// // for(let i = 1;i<=b;i++){
// //     console.log(`${a} x ${i} = ${a*i}`)
// // }