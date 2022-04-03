// if else
let hour=18;

if(hour>4 && hour<=10)
    console.log("Good Morning Buddy");
else if(hour>10 && hour<=16) 
    console.log("Good afternoon buddy");
else if(hour>16 && hour<=18)
    console.log("Good evening buddy");
else if(hour>18 && hour<=3)
    console.log("good night buddy");

//switch case
let role;

switch(role)
{
    case'guest':
    console.log("Guest User");
    break;
    case 'moderator':
    console.log("Moderator");
    break;
    case'admin':
    console.log("ADMIN User!");
    break;
    default:
        console.log("ÜNKNOWN USER!")
}

///for
for(let i=0;i<5;i++)
{
    console.log('HELLO!');
}

for(let i=1;i<10;i=i+2)
{
    console.log('Odd numbers',i);
}
for(let i=0;i<10;i=i+2)
{
    console.log('Even numbers',i);
}
// for-in,for-of

const colors= ['orange','white','green'];
for (let index in colors)
console.log(index,colors[index]);

const colorz= ['orange','white','green'];
for (let color of colorz)
console.log(color);


console.log(islandscape(1000,100));
function islandscape(width,height){
    return(width>height);
}

const output=fizzbuzz(27);
console.log(output);

function fizzbuzz(input)
{
    if (typeof(input)!="number")
    return 'Not a Number!!!!';
    else if(input%3===0 && input%5===0)
    return 'FizzBuzz';
    else if(input%3===0)
    return 'Fizz';
    else if(input%5===0)
    return 'Buzz';
    else if(input%3!=0 || input%5!=0)
    return input; 
}

checkSpeed(71);
function checkSpeed(speed){
    const speedlimit=70;
    const maxspeed=180;
    const kmperpoint=5;
      if(speed <= speedlimit + kmperpoint)
      return console.log('Ok');

      const Points=Math.floor((speed-speedlimit) / kmperpoint);
      console.log(Points);
      if(Points >= 12)
      return console.log('License Suspended');
      else
      return console.log('Points: ',Points);
}

showNumbers(29);
function showNumbers(limit){
    for(i=0;i<=limit;i++)
    console.log(i, Type=(i%2!=0) ? '"ODD"' : '"EVEN"');
}



Object
const address = {
    street:'Kuberan',
    city:'Madipakkam',
    zipcode:600091
}; 
function showAddress(address)
{
    for(let key in address)
    console.log(key,address[key]);
}

showAddress(address);
//Factory function
    ///Camel casing
function createAddress(street,city,zipcode){
    return{
        street,
        city,
        zipcode
    };
}
let address1 = createAddress('XYZ','ZMR',12345);
console.log(address1);

//Constructor function
     /// pascal casing
// 
// //Object Equality check
let addressone = new Address('John','Abraham',890789);
let addresstwo = new Address('John','abraham',890789);
function Address(street,city,zipcode){
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
    }

function areEqual(addressone,addresstwo){
       return addressone.street===addresstwo.street &&
       addressone.city===addresstwo.city &&
       addressone.zipcode===addresstwo.zipcode;
}
function areSame(addressone,addresstwo){
    return addressone===addresstwo;
}

console.log(areEqual(addressone,addresstwo));


console.log(areSame(addressone,addresstwo));

//Arrays :push,pop,unshift,shift,splice,includes(primitive),finds(ref type),=>,