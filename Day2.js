let a=10 , b=5; 

let c=a+b; 
console.log("Result of addition is: ", c);
let d=a-b; 
console.log("Result of substraction is: ", d);
let f=a*b; 
console.log("Result of multiplication is ", f);
let e=a/b; 
console.log("Result of division is ", e);
let g=a%b; 
console.log("Remainder is ", g)

a+=b;
console.log(a);
a-=b;
console.log(a)

if (a>=b){ 
    console.log("a is greater ")
}
if (a<=b){ 
    console.log("B is greater")
}

if(a==b){ 
    console.log(" and and b are equal ")
}

let h=15;
let j=15, k=20; 

if (34>15 && 23<67){ 
    console.log("all ok")
}

if ((a==b)||(h==k)){ 
    console.log("all not equal ")
}

if (a!=b){ 
    console.log("a is not equal to b")
}


hey=prompt("Enter a number");
hey ? console.log("the number is positive") : ("The number is negative");
