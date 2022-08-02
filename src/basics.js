// Datatypes
var x = 0;
var y = "Hello World";
var z = true;
var a = null;
var b = undefined;
var c = {};
var d = [];
var e = function () {};
// console.log(x);

// Functions

function add(a, b) {
  return a + b;
}

// Arrow Functions

const add = (a, b) => {
  return a + b;
};

// Callbacks

const hello = (name, after) => {
  console.log(`Hello ${name}`);
  after();
};

hello("Abdallah", () => {
  console.log("this happens after hello");
});

// Objects

const user = {
  name: "Abdallah",
  age: 25,
  introduce: function () {
    console.log("Hello my name is " + this.name + " and I am " + this.age);
  },
};

// Acessing Properties
user.name;
// console.log(user.name);

// Destructuring
const { name } = user;
// console.log(name);

// Methods
const introduction = user.introduce();
// console.log(introduction);

// Importing Modules
const { User, Animal } = require("./models");

// Creating objects from classes
const person = new User("Abdallah", 25);
// console.log(person);

// Old Contructor Functions
var Animal = function (name, age) {
  this.name = name;
  this.age = age;
};

Animal.prototype.introduce = function () {
  return "Hello my name is " + this.name + " and I am " + this.age;
};

const animal = new Animal("Ahmed", 21);
animal.introduce();

// Loops

for (let i = 0; i < 10; i++) {
  // console.log(i);
}

var x = 0;
while (x < 10) {
  // console.log(x);
  x++;
}

// Arrays
const values = [
  { name: "one", value: 1 },
  { name: "two", value: 2 },
  { name: "three", value: 3 },
  { name: "four", value: 4 },
  { name: "five", value: 5 },
];

for (let i = 0; i < 10; i++) {
  // Do Something
  // console.log(numbers[i]);
}

numbers.forEach((n, index) => {
  // Do something
  // console.log(n, index);
});

const filteredNumbers = numbers.filter((n) => n > 5);
// console.log(filteredNumbers);

const mappedNumbers = numbers.map((n) => n * 2);
// console.log(mappedNumbers);

const names = values.map((value) => value.name);
// console.log(names);

values.push({ name: "six", value: 6 });
values.pop();
values.shift();
// console.log(values);

// Overriding Primitives
Array.prototype.hello = function () {
  return this.map((v) => "Hello");
};
hello = values.hello();

// Creating an API with native library

// const http = require("http");
// const joi = require("joi");
// // Defining Validation Schema
// const { createSchema, editSchema } = require("./validation");

// const todos = [];

// const server = http.createServer((req, res) => {
//   console.log("request was made: " + req.url);
//   res.writeHead(200, { "Content-Type": "application/json" });

//   if (req.url.startsWith("/todos")) {
//     if (req.url.startsWith("/todos/add") && req.method === "POST") {
//       let data = [];
//       req.on("data", (chunk) => {
//         data.push(chunk);
//       });
//       req.on("end", () => {
//         const body = JSON.parse(data.toString());
//         const { error } = createSchema.validate(body);
//         if (error) {
//           res.end(JSON.stringify(error));
//         } else {
//           todos.push({ ...body, id: todos.length + 1 });
//           res.end("Added Sucessfully");
//         }
//       });
//       req.on("error", (err) => {
//         console.log(err);
//         res.end("An Errror Occured");
//       });
//     } else if (req.url.startsWith("/todos/edit/") && req.method === "PUT") {
//       const id = req.url.split("/")[3];
//       let data = [];
//       req.on("data", (chunk) => {
//         data.push(chunk);
//       });
//       req.on("end", () => {
//         const body = JSON.parse(data.toString());
//         const { error } = editSchema.validate(body);
//         if (error) {
//           res.end(JSON.stringify(error));
//         } else {
//           todos[id - 1] = { ...todos[id - 1], ...body };
//           res.end("Edited Sucessfully");
//         }
//       });
//       req.on("error", (err) => {
//         res.end("An Errror Occured");
//       });
//     } else if (
//       req.url.startsWith("/todos/delete/") &&
//       req.method === "DELETE"
//     ) {
//       const id = parseInt(req.url.split("/")[3]);
//       if (id == 0) return res.end("Invalid ID");
//       todos.splice(id - 1, 1);
//       for (var i = id - 1; i < todos.length; i++) {
//         todos[i].id--;
//       }
//       res.end("Deleted Sucessfully");
//     } else {
//       res.end(JSON.stringify({ todos }));
//     }
//   } else {
//     res.end("Invalid request");
//   }
// });

// server.on("clientError", (err, socket) => {
//   socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
// });

// server.listen(8000);
