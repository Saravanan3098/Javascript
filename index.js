
console.log('Hello World');

//Operators
 let x=10;
 let hy=10;
 
 //Arithmetic
   console.log(x + hy);
   console.log(x - hy);
   console.log(x *hy); 
   console.log(x/hy); 
   console.log(x**hy);//Exponential
   console.log(++x);//Increment
   console.log(--x);//Decrement

 //Assignment
   x-=5;
   x+=8;
   x*=7;
   console.log(x);

 //Comparison
   console.log(x>0);
   console.log(x<0);   // <,>,<=,>=  Relational   ==,!= Equality

   //Strict Equality (has both same Type &Value)
     console.log(10===10);
     console.log('10'===10);
   //Lose Equality
     console.log(10==10);
     console.log('10'==10);
     
 //Ternary
  //If a customer has 1000 points they are gold member, else bronze    
    let points=1050;
    let type= points > 1000 ? 'gold' : 'silver';
    console.log(type);

//Exercise
// Swapping variable
let a='red';
let b='blue';

console.log(a);
console.log(b);
//c as a backup
let c=a;
a=b;
b=c;

console.log(a);
console.log(b);



