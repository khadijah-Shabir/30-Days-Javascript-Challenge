//<---------------------------------------Map, filter and reduce === Higher order Functions------------------------>

//<---------Map function-------------->
// const arr=[5,1,3,2,6]
// Double=[10,2,6,4,12]
// Tripple=[15,3,9,4,18]
// Binary=["101", "1", "11" , "10" , "110"  ]

// function binary(x){ 
//     return x.toString(2);
// }
// const output=arr.map(binary); 
//--------------------------------------->
// const output=arr.map(function binary(x){ 
//     return x.toString(2);
// }); 
// console.log(output);
//--------------------------------------->
// const output=arr.map((x) =>{ 
//         return x.toString(2);
//     }); 
// console.log(output);
//--------------------------------------->
// const output=arr.map((x) => x.toString(2));
// console.log(output);


// ------------------------------------->
let people = [
    {
        firstName: "John",
        lastName: "Robot",
        age: 30
    },
    {
        firstName: "Sarah",
        lastName: "Api",
        age: 30
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        age: 25
    },
    {
        firstName: "Emily",
        lastName: "Johnson",
        age: 27
    }
];

//task is to get first and last name of all users combined 

// const output= people.map((x)=> x.firstName+ " " +x.lastName);
// console.log(output);

//how many people have which age group 
// {25:1, 30:2, 50:1}

// const output2=people.reduce(function(acc, curr){ 
//     if (acc[curr.age]){ 
//         acc[curr.age]=++acc[curr.age];
//     }else{ 
//         acc[curr.age]=1;
//     }; 
//     return acc;
    
// },{});
// console.log(output2);


//Print the first name of people with age <30; 

// const output= people.filter((x)=> x.age<30).map((x) => x.firstName);
// console.log(output);

const output = people.reduce((acc, person) => {
    if (person.age < 30) {
        acc.push(person.firstName);
    }
    return acc;
}, []);

console.log(output);

//<----------------------------------Filter function------------------------------>
// filter values from the array..like all even no ...binary or odd numbers 

// function isOdd(x){ 
//     return x%2;
// }
// const output=arr.filter(isOdd);
// console.log(output);

// function isEven(x){ 
//     return x%2==0;
// }
// const output2=arr.filter(isEven);
// console.log(output2);

// function greaterThan4(x){ 
//     return x>4;
// }
// const output3=arr.filter(greaterThan4);
// console.log(output3);


// const output4=arr.filter(function greaterThan4(x){ 
//     return x>4;
// });
// console.log(output4);

// const output4=arr.filter((x) =>x>4);
// console.log(output4); 


//<---------------------------------------Reduce function------------------------------->
//When you have to take out all of the elements of array and come out with single value out of them
//sum or maximum or minimum
const arr =[5,1,3,2,6]

// function findSum(arr){ 
//     let sum=0; 
//     for (let i=0; i<arr.length; i++){ 
//         sum=sum+arr[i]; 
//     }
//     return sum;
// };
// console.log(findSum(arr));



// const output= arr.reduce(function (acc, curr){ 
//     acc=acc+curr; 
//     return acc;
// },0);

// console.log(output);

// function findMax(arr){ 
//     let max=0; 
//     for (let i=0; i<arr.length; i++){ 
//         if(arr[i]>max){ 
//             max=arr[i];
//         }
//     }
//     return max;
// };
// console.log(findMax(arr));



// const output= arr.reduce(function (max, curr){ 
//     if (curr>max){ 
//         max=curr;
//     }
//     return max;
// },0);

// console.log(output);








