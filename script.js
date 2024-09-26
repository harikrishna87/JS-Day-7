// 1 Question

const st = "   Hari";

const st1 = "Babu  ";

console.log((st.trimStart().concat(st1.trimEnd())).toUpperCase());

// 2 Question 

let a1 = "HARIBABU"

let a11 = a1.slice(3,5);

console.log(a11);

let a12 = a11.lastIndexOf('B');

console.log(a12);

console.log(a11.toLowerCase());

// 3 Question 

let b1 = "H";
let b11 = "ari"

console.log(((b1.concat(b11)).toUpperCase()).charAt(3));

// 4 Question 

let str = "hello";
let str1 = "world";
let str11 = (str.slice(0,3).concat(str1.slice(-3)));

console.log(str11);

let str12 = str11.charAt(0).toUpperCase().concat(str11.slice(1,5)).concat(str11.charAt(5).toUpperCase());

console.log(str12);

// 5 Question

let c1 = "  helloworld  "

let c11 = c1.trimStart();

console.log(c11);

console.log(c11.charAt(0).toUpperCase().concat(c11.slice(1,9)).concat(c11.charAt(9).toUpperCase()));


// 6 Question 

let t = "hello there, how are you";

console.log(t.indexOf("are"));

// 7 Question

const mobilephone = {
    brand: "Apple",
    model: "15 Pro Max",
    price: 150000,
    launchedYear : 2023
}

Object.seal(mobilephone);

mobilephone.price = 140000;

console.log(mobilephone);


console.log(Object.isSealed(mobilephone));

// 8 Question

const book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 500,
    publishedYear : 2015
}

Object.freeze(book);

book.publishedYear = 2018;

console.log(book);

console.log(Object.isFrozen(book));

// 9 Question

const person1 = {
    Firstname: "John",
    Lastname: "Doe",
    age: 25,
    occupation: "Software Engineer"
}

console.log(Object.keys(person1), Object.values(person1));

// 10 Question

const course = {
    name: "JavaScript",
    duration: "3 months",
    price: 15000,
    instructor: "Vamsi Sir"
}

console.log(Object.entries(course));


delete course.duration;

console.log(course);

// 11 Question

const employee = {
    name: "John Doe",
    position: "software developer",
    salary: 40000
}

Object.seal(employee);

employee.position = "Data Analyst"

console.log(employee);

console.log(Object.keys(employee));

employee.location = "Hyderabad"

console.log(employee);

// we can't add the new property because given object is sealed //


// 12 Question

let d1 = "HariBabu"

console.log(d1.slice(3,5).toUpperCase());

// 13 Question

let e11 = "harikrishna";

console.log((e11.toUpperCase()), e11.length);

// 14 Question 

const d2 = "HariKrishna"

console.log(d2.charAt(5).charCodeAt());

// 15 Question

const d = "     HariKrishna      "

let d3 = d.trim();

console.log(d3.slice(1,5));

// 16 Question

let e = "Hari";

let e1 = "KRISHNA"

let e2 = e1.toLowerCase();

console.log(e2);

console.log(e.concat(e2));

// 17 Question

const f = "     HariBabu     "

const f1 = f.trim();

console.log(f1);

console.log(f1.slice(1));

// 18 Question 

let g = "haribabu"

console.log(g.charAt(5).toUpperCase());



// 19 Question

let a = 10;

let b = 20;

let c = 30;

let d4 = a * b + c;

console.log(d4);


let e4 = 100;

console.log(d4 == e4);
console.log(d4 === e4);
console.log(d4 != e4);
console.log(d4 !== e4);
console.log(d4 > e4);
console.log(d4 < e4);
console.log(d4 >= e4);
console.log(d4 <= e4);


// 20 Question

let x = 8;

let y = 12;

console.log(x>5 && y<20);
console.log(x>5 || y<20);
console.log(!(x>5 == y<20));

// 21 Question

let num1 = 25;

let num2 = 35;

let numbers = (num1 > num2) ? "25 is greater than 35" : "35 is greater than 25"

console.log(numbers);


// 22 Question 

let m = 15;

let n = 10;

let sub = m - n;

console.log(sub);

let div = m / n;

console.log(div);

let sub1 = (sub %2 === 0) ? "even" : "odd"

let div1 = (div %2 === 0) ? "even" : "odd" 


console.log(sub1);

console.log(div1);

// 23 Question

let age = 18;

let age1 = (age == 18) ? "age is equal to 18" : "age is not equal to 18"

let age2 = (age === 18) ? "age is equal to 18" : "age is not equal to 18"

let age3 = (age >= 18) ? "age is greater than or equal to 18" : "age is not greater than or equal to 18"

console.log(age1);

console.log(age2);

console.log(age3);












