//  arrow function , map function, reduce function , for each loop 
//  Function call back and higher order function

//<-------------------------------------Simple function ----------------------------------->

function welcome(){ 
  console.log("Welcome in the class")
  console.log(this);
}
// a=welcome()
console.log(welcome())

const chai=function(){ 
 console.log(" Another way to declare function")
}
chai()

//<-----------------------------------------------Arrow function------------------------------------------>

// Arrow function ---syntax ()=>{ } ---const add=()=>{}
// remove the function word
//Explicit return ---------------------------------------------------------------------------------------->
const add=(num1, num2)=>{ 
  return num1+num2;
}
//if you used curly braces {}, then you must have to use return keyword.
//If you used parentheses, (), then return is not used. 
 //implicit return -------------------------------------------------------------------------------------->
 const add2=(num1, num2)=> num1+num2;
 const add3=(num1, num2)=> (num1+num2);


 //If you want to return object 
 const obj1=() =>({username: "Hitesh"})
 console.log(obj1())

const Arrowchai=() =>{ 
  console.log(" Another way to declare function"); 
  console.log(this);
 }
 Arrowchai()

const arrowSum =(a,b) =>{ 
  console.log(a+b);
}

// short way of doing thing 
hello = () => "Hello World!";

hello = () => {
  return "Hello World!";
}

hello = (val) => "Hello " + val;

// const myArray=[1,2,3,4,5]
// myArray.forEach(()=> ())

//<--------------------------------------------------/Functional Programming/---------------------------------------->

// Higher order function...takes a function as an argument or returns a function
//x() is called as call back function while y() is called as higher order function
function x(){ 
  console.log("Hi cutiepie");
}
function y(){ 
  x();
}
//<--------------------------------------------Example------------------------------------------>
//Calculate the Area of four circles based on radius of 4 circles given in the aray. 
//Let's see the traditional way first 
const radius=[3,1,2,4]

const calculateArea=function(radius){ 
  const output=[]
  for(let i=0; i<radius.length; i++){ 
    output.push(Math.PI*radius[i] * radius[i]);
  }
  return output;
};
console.log(calculateArea(radius));

//Calculate circumference of circle

const calculateCircumference=function(radius){ 
 const output=[]
 for(let i=0; i<radius.length; i++){ 
   output.push(2*Math.PI*radius[i] );
 }
 return output;
};
console.log(calculateCircumference(radius));

//Calculate diameter of circle
const calculateDiameters=function(radius){ 

 const output=[]
 for(let i=0; i<radius.length; i++){ 
   output.push(2*radius[i] );
 }
 return output;
};
console.log(calculateDiameters(radius));

//<-------------------------------------DRY(Don't repeat yourself) Writer Higher Order Function-------------------------------->
//Let's write in an optimized way
const area=function (radius){ 
   return Math.PI*radius*radius;
}
const circumference=function (radius) { 
  return 2*Math.PI*radius;
}

const diameter=function (radius){ 
  return 2*radius;
}

const calculate= function(radius, logic){ 
  const output=[]
  for(let i=0; i<radius.length; i++){ 
   output.push(logic(radius[i]));
  }
 return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));


//<----------------------------------------Map function----------------------------------->

console.log(radius.map(area));

//Map and calculate are similar now---We write pollyfills like this and this is the pollyfill of map
//This function will now appear in all the arrays
Array.prototype.calculate= function(logic){ 
  const output=[]
  for(let i=0; i<arr.length; i++){ 
   output.push(logic(arr[i]));
  }
 return output;
};

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
//This is possible beacuse functions are first class citizens in javascript


function salary(num){ 
  return num*.7; 
}

setTimeout(salary, 300) //300 means how long to wait before invoking salary function

setTimeout(fn())
  const fn=function(){ 
    //do the stuff
}
const names=["sina", "sam", "Moli", "ben", "Zoi"]
Array.filter()
names.filter(function(n) { 
  if (n[0]==="Q"){ 
    return false;
  }
  return true;
})













