// const data: { name: string; age?: number } = {

//   name: "Usman",
//   // age: 22,
// };
// data.age = 22;

// console.log(data);

// const dataVal :{[index:string]:boolean} = {}

// dataVal.age = true
// dataVal.num = false

// console.log(dataVal)

// enum CardinalDirections {
//   North,
//   East,
//   South,
//   West
// }
// // let currentDirection = CardinalDirections.North;
// // logs 0
// // console.log(currentDirection);
// // throws error as 'North' is not a valid enum
// // currentDirection = 'North';

// console.log(CardinalDirections.North)
// console.log(CardinalDirections.East)
// console.log(CardinalDirections.West)

import { ABC } from "./types";

// const condition = true;
// if(condition){
//   console.log(ABC.Success)
// }else{
//   console.log(ABC.NotFound)
// }

// interface Square{
//   width:number,
//   height:number
// }

// interface Square{
//   isSq:boolean
// }

// interface ColoredSq extends Square{
//   color:string
// }

// const coloredSquare:ColoredSq={
//   width:20,
//   height: 30,
//   isSq:true,
//   color:"red"
// }
// console.log(coloredSquare)

// type helloWorld = {
//   printing:string
// }
// // type helloWorld ={
// //   name:string
// // }
// const hey :helloWorld ={
//   printing:"Hello World!!!!"
// }

// console.log(hey.printing)

// function getTime():number{
//   return new Date().getDate()
// }
// console.log(getTime())

// =====void

// function getAge(): void{
//   console.log("age: 22")
// }
// getAge()

// ------ Parameters--

// function mul(a:number,b:number):number{
//   return a*b
// }

// console.log(mul(2,3))

//  --------- optional parameter---

// function mul(a:number,b:number,c?:number):number{
//   return a*b+(c||0)
// }
// console.log(mul(2,3))

// --------- named param ------

// function divide({dividend,divisor}:{dividend:number, divisor:number}){
//   return dividend/divisor
// }

// console.log(divide({dividend:20,divisor:5}))

// function mul({num1,num2}:{num1:number,num2:number}){
//   return num1*num2
// }

// console.log(mul({num1:4,num2:4}))

// ---------- Rest Operator -------

// function getAvg(...args :number[]){
//   let avg = args.reduce(function(a,b){
//     return a+b
//   },0)
//   return avg
// }

// console.log(getAvg(10,23,22,14,22))

// ----------type alias

// type Negate = (value:number)=> number;
// const negateFunc: Negate = (value)=> value*-1

// console.log(negateFunc(20))

// let api_url =
//       "http://universities.hipolabs.com/search?country=United+States";

// async function getApi(url) {
//   const response = await fetch(url);
//   var data = await response.json;
//   console.log(data);

//   show(data);
// }

// getApi(api_url);

// function show(data) {
//   var app = document.querySelector("#app")
//   app.innerHTML = "<ul>" + data.map((e,i)=>{
//       return "<li>" + e.name + "</li>"
//   }).join('') + "</ul>"
// }

import "./tsconfig.json";

let api_url = "http://universities.hipolabs.com/search?country=United+States";

const getApi = async (url: string) => {
  const response = await fetch(url);
  var data = (await response).json;
  console.log(data);
};

getApi(api_url);
