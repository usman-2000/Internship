let text = '{"employees":['+
'{"firstName":"Usman","lastName":"Rahim"},'+
'{"firstName":"Usman","lastName":"Rahim"},'+
'{"firstName":"Usman","lastName":"Rahim"}]}'

var obj = JSON.parse(text)
console.log(obj)

// console.log(obj.employees[0]+" "+ obj.employees[1])
// document.getElementById("demo").innerHTML= obj.employees[0]