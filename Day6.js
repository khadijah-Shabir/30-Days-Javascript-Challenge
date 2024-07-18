//------------------TASK 1-----------------------> 
arr=[1,2,3,4,5]
console.log(arr)
//------------------TASK 2-----------------------> 
console.log(arr[0]); 

const lastIndex = arr.length - 1;
const lastElement = arr[lastIndex];
console.log("Last Element:", lastElement); 
//------------------TASK 3-----------------------> 
arr.push(6); 
console.log(arr);
//------------------TASK 4-----------------------> 
arr.pop(); 
console.log(arr);
//------------------TASK 5-----------------------> 
arr.shift()
console.log(arr)
//------------------TASK 6-----------------------> 
arr.unshift(1); 
console.log(arr)
//------------------TASK 7-----------------------> 
const update1=arr.map((x)=> 2*x); 
console.log(update1)
//------------------TASK 8----------------------->
const update2=arr.filter((x)=> x%2==0) 
console.log(update2);
//------------------TASK 9-----------------------> 
const update3=arr.reduce((acc, curr)=>{ 
    acc=acc+curr;
    return acc;
}, 0);
console.log(update3);
//------------------TASK 10----------------------->
for(i=0; i<arr.length; i++){ 
    console.log(arr[i]);
};
//------------------TASK 11-----------------------> 

const days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let sayHello =function(day){ 
    console.log(day)
}
days.forEach(sayHello);

days.forEach(function(day,index){ 
    console.log(day, index+1)
});
//------------------TASK 12-----------------------> 

const matrix=[
    [1,2,3], 
    [4,5,6], 
    [7,8,9]];
// console.log(matrix);
for(let row of matrix){ 
    const rowstring=row.join(' ')
    console.log(rowstring)
}
//------------------TASK 13-----------------------> 

const element1 = matrix[0][0];
console.log(element1); // Output: 1

