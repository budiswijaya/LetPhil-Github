// WEEK 1: Console-Based "About Me"
console.log("Welcome to About Me")


//Const, Let, Var
// cont - Constant. It's can't be changed. Use this when the value should stay the same.
// let - "Let it change" Use this when the value might/could/should change.
// var - Old-Scool, works like let but it's a little weird/strange behavior

//Template Literals
// CSS in js

const name = "Shay"
console.log(name)

let age = "28"
console.log(age)

var city = "Seoul"
console.log(city)

const headlinestyle = "color: red; font-size: 20px; font-weight: bold;"
const labelstyle = "color: blue; font-size: 16px; font-weight: normal;"
const valueStyle = "color: green; font-size: 14px; font-weight: normal;"
const yellowbg = "background-color: yellow; padding: 5px; border-radius: 5px;"

console.log("%cAbout Me", headlinestyle)
console.log(`%cName: %c${name}`, labelstyle, valueStyle)

const jaystyle = valueStyle + yellowbg
console.log(`%cAge: %c${age}`, labelstyle, jaystyle)

// Console.log Everything
const quote = "The only way to do great work is to love what you do.";
const quoteStyle = "color: red; font-size: 16px; font-weight: bold;";
console.log(`%cQuote: %c${quote}`, labelstyle, "color: red; font-size: 16px; font-weight: bold;")

// Stretch Goals
// Mini Math Operation
let seven = 8
const three = 3
seven = 7
console.log(seven + three)

// Full Sentence
// Hello I'm %{}. I like ${}. Sometimes ${}

