 //comment
 //This is my first javascript code
 console.log('Hello World'); 
//variable
let name;
console.log(name); //undefined
let mod ='Dipesh';
console.log(mod);

    //Cannot be a reserved keyword
    //Should be meaningful
    //Cannot Start with a number
    //Case sensitive
    //cannot contain space or hyphen(-)

//we can reassign a var
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
//constant
const PI = 3.14;
 //cant reassign PI = 45;  {ERROR}
console.log(PI);



//////////////////////////////////////////
//PRIMITIVES
let _name= 'Dipesh';  
let isApproved = true;
let age = 30;
let selectColor = null;  // we can reassign it

/////////////////////////////////////////
//REFFERENCE

//Object
let person ={
    name:'Mosh',
    age:30
}
console.log(person);
person.name = 'Dipesh';  //dot notation
person['name'] = 'Mary';  //bracet notation


//Array
let selectedColors = ['red','blue'];
                       //0    //1     

selectedColors[2] = 'green';
selectedColors[3] = 2;

console.log(selectedColors);
console.log(typeof selectedColors);

//FUNCTIONS
function greet(name) {
    console.log('U are so good ' + name);
}
function add(number1,number2){
    return number1+number2;
}

//console.log() is also a function

alert('You have been hacked my friend');