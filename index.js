// We are using live server for seeing in the website form


//comment this  is my first javascript 
console.log('Hello World'); 

let name = 'Raj'; // variable assinging
console.log(name);

// cannot be a reserved keyword
// should be meaningful
//cannot be start with a number (1name)
//cannot contain a space or hypen(~)
 let firstName="raj", lastName='rishi' ;//cammel

 let interestRate= 0.3;
 interestRate = 1;
 console.log(interestRate);

 const interestrate= 0.3;
 //interestrate = 1;
 console.log(interestrate);    // here uncaught error will take place
 // as it has constant value type error 
 
 //let naam = 'raj'; //string literal
 //let age = 17 ; // number literal
 let isapproved= false; // boolean literal
 let firstname= undefined ; 
 let lastname= null;
 let selectcolor = 'red';
 let selectColor = null;
 // java is dynamic language meaning value can be changed
 let person = {
     naam: 'raj',
     age: 17
 }; 


 // Dot Notation // for changing the value
 person.naam="Pratik";

 // Bracket notaion // second method for changing the value
 person['naam']= 'Rishi';


 // bracket notation
 let selection = 'naam';
 person[selection]= 'rishi raj';
 
 console.log(person.naam);

 let selectedcolors = ['red','blue'];
 selectedcolors[2]='1';
 console.log(selectedcolors.length); // zero is for index
// length is just the size

// learning functions now

function greet(namee,lastnamee) {
    console.log('hello '+ namee + ' ' +  lastnamee);
}

//calculating a value
function square(number) {
    return number * number;
}

greet('Raj', 'sinha');
greet('Raaj');

//let number = square(2);
//console.log(number);

console.log(square(2));
// here two functions one console and another sqaure 

function sys(){
    console.log('hi hello kaise ho');
}
sys()

function sub(a,b){
    console.log(a);
    console.log(b);
    console.log(a-b);
}
function add(a,b){
    return a+b;
    // after return code will exit out after that no running after that
}

const value = add(1,2)
console.log(value)