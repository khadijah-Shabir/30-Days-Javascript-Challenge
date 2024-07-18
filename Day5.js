
//----------------------------------1------------------------------>

function EvenorOdd(x){ 
    if (x % 2==0){ 
        console.log("Even")
    }else{ 
        console.log("Odd");
    }
}

EvenorOdd(56);
//-----------------------------------2---------------------------->
function square(x){ 
     console.log(x*x);
}

square(5);
//-------------------------------------3------------------------>
function maximum(a,b){ 
    if(a>b){ 
        console.log(`${a} is greater than ${b}`)
    }else{ 
        console.log(`${b} is greater than ${a}`)
    }
}

maximum(3,4);
//--------------------------------------4------------------------->
function concatinate(a, b){ 
   return a+b; 
}

const output=concatinate("khadijah ", "Shabir"); 
console.log(output);

//---------------------------------5------------------------->

const maxi=(a,b) => { 
    if(a>b){ 
        console.log(`${a} is greater than ${b}`)
    }else{ 
        console.log(`${b} is greater than ${a}`)
    }
}

maxi(5,2)


//---------------------------------6------------------------->
// const string=(string1) => { 
//     for(let i=0; i<string1.length; i++){ 
//         if(string1[0]=='k'){ 
//             return true;
//         }else{ 
//             return false;
//         }
//     }
// }

// const output2=string("khadijah")
// console.log(output2);

const string = (string1) => {
    return string1[0] === 'k';
}

const output2 = string("khadijah");
console.log(output2);


//------------------------7------------------------->
const product=(a, b=5)=> a*b; 
const output3=product(4); 
console.log(output3);

//======================8============================>
const greeting=(name, age=21)=> `Hello ${name}, I know you are ${ age} years old`; 
const output4=greeting("khadijah"); 
console.log(output4);

//=====================9==============================> 
//Higher order functions 

// Define the higher-order function
// const repeatFunction = (func, times)=> {
//     for (let i = 0; i < times; i++) {
//         func();
//     }
// };

// // Example function to be passed as an argument
// const sayHello = ()=> {
//     console.log("Hello!");
// };

// // Call the higher-order function
// repeatFunction(sayHello, 5);


//================================10=============================>
// Define the higher-order function
const applyFunctions = function(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
};

// Example functions to be passed as arguments
const addTwo = function(num) {
    return num + 2;
};

const multiplyByThree = function(num) {
    return num * 3;
};

// Call the higher-order function
const value = 5;
const finalResult = applyFunctions(addTwo, multiplyByThree, value);
console.log(finalResult); // Output: 21


