"use strict";
// const data: { name: string; age?: number } = {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
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
require("./tsconfig.json");
var api_url = "http://universities.hipolabs.com/search?country=United+States";
var getApi = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response];
            case 2:
                data = (_a.sent()).json;
                console.log(data);
                return [2 /*return*/];
        }
    });
}); };
getApi(api_url);
