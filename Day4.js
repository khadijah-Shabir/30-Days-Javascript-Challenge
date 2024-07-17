// <----------------------------------Task1-------------------------------------------->

 for(i=1; i<=10; i++){
   console.log(i)
}

// <----------------------------------Task2-------------------------------------------->
let n=5;
for(i=1; i<=10; i++){
    console.log(n, "*", i, "=", n*i);
}

// <----------------------------------Task3-------------------------------------------->
let a=1;
let sum=0;
while (a<=10){ 
   sum=sum+a;
   a=a+1;
}
console.log(sum);


// <----------------------------------Task4-------------------------------------------->
let b = 10;
while (b > 0) {
    console.log(b);
    b = b - 1;
}

// <----------------------------------Task5-------------------------------------------->
let c=1;
do{
  console.log(c); 
  c=c+1;
}while(c<=5);
// <----------------------------------Task6-------------------------------------------->
let fact = 1; 
i=5;
do { 
   fact = fact * i; 
   i--;
} while (i > 0); // Continue the loop until i is greater than 0
console.log(fact); // Output the sum of factorials

// <----------------------------------Task7-------------------------------------------->
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";  // Initialize an empty string for each row
    for (let j = 0; j < i; j++) {
        row += "* ";  // Append a star and a space to the row string
    }
    console.log(row.trim());  // Print the row string and trim the trailing space
}


// <----------------------------------Task8-------------------------------------------->
let num = 10;
for (let i = 1; i <= num; i++) { 
    if (i == 5) { 
        continue;
    }
    console.log(i); 
}


// <----------------------------------Task9-------------------------------------------->
let num = 10;
for (let i = 1; i <= num; i++) { 
    if (i == 7) { 
       skip;
    }
    console.log(i); 
}

