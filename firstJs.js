console.log("Hello World");

let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}

console.log(score); 

const std= {
Fname : "Onkar", 
roll : "35"
};

console.log(std[Fname]) ; // object

typeof std ;

let str = "Hello" ;
for(let i of str){
console.log(i);
} // Every character print in the string 

for(let key in std){ // every key object print like Fname Onkar
  console.log(key, std[key]);
}

let mark = [97,67,32,48,99,96,86];
// Rich function context
let newArr = marks.filter((val)=>{
 return val > 90;
});
console.log(newArr);