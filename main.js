// const person = {
//     name : "shyam",
//     last : "goli",
//     address : {
//         city : "mumbai",
//         pincode : 400018
//     }
// }
// person.email = "shyam@gmail.com"
// person.name = "rocky"
// console.log(person)

// function add(N1,N2){
//     return N1+N2;
// }
// console.log(add(4,2));

//Arror function
// const add = (N1,N2) => {
//     return N1+N2;
// }
// console.log(add(4,2));


// Constructor function
// function Person (firstname, lastname, dob){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
//     this.getfullname = () => {
//         return (`${this.firstname} ${this.lastname}`);
//     }
    
// }
// Person.prototype.getdob = () => {
//     return this.dob;
// }

// //Object creation
// const person1 = new Person("shyam", "goli", '31-05-2000')
// const person2 = new Person("prashant", "vasala", '31-08-2000')

// console.log(person1.firstname)
// // console.log(person1.dob.getDate())
// console.log(person1.getfullname())
// console.log(person1.getdob())
// console.log(person2.firstname)
// console.log(person2.getfullname())


// class Person{
//     constructor(firstname, lastname,dob){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.dob = dob;
//     }

//     getUppercaseName(){
//         return this.firstname.toUpperCase();
//     }
// }

// let person1 = new Person("shyam", "goli", "31-05-2000")
// console.log(person1.dob);
// console.log(person1.getUppercaseName());


//***********DOMS concept  **************
// Single selectors
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector(".item"));

// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));

// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));



////////////////////////////////////////
//////////// Manipulating DOM ///////////////
//// Very interesting  ///////////////
// const ul = document.querySelector(".items")
// ul.remove()
// ul.lastElementChild.remove()

// ul.firstElementChild.textContent = "Hello"
// ul.children[1].textContent = "Shyam"
// ul.lastElementChild.innerHTML = "<h1>Ram</h1>"

// const btn = document.querySelector('.btn');
// btn.style.background = "red"
// btn.style.color = "black"

// const btn = document.querySelector(".btn");
// btn.addEventListener("click" , (e) => {
//     e.preventDefault();
//     document.querySelector("#my-form").style.background = 'green';
//     document.querySelector('body').classList.add('bg-dark');
//     const li = document.createElement("li");
//     li.appendChild(document.createTextNode(`Shyam : shyam@goli`));
//     document.querySelector('.items').appendChild(li);
// });







