// WEEK 2 - Arrays, Loops, and if Statements
// THEME: Death Stranding - Cargo Scanner

// INTRO: What is an array?
console.log("Welcome to Week 2: Arrays, Loops, and if Statements.");
console.log("Let's start by talking about arrays...");

// Arrays are like backpacks — they hold multiple items in one variable.
// ----- <> Create "bag" array w/ a medkit, rope, ladder
// ----- <> console.log("Initial bag:", bag);

// Accessing array items
// ----- <> Access medkit
// ----- <> - console.log("First item in bag: ", )
// ----- <> Access rope
// ----- <> - console.log("Second item in bag:", )


// Adding and removing items
// ----- <> Add "cryptobiote" to bag array
// ----- <> View(console.log) bag affter item is added.
// ----- <> - console.log("Bag after... :", )

// Remove/use your rope
// ----- <> View (console.log) bag after item is removed
// ----- <> - console.log("Bag after removing rope:", )

// How many items in the bag?
// ----- <> console.log("Number of items in bag:", )

// =======================================
// SIDEBAR: Basic for loop practice
console.log("----------------------------");
console.log("FOR LOOP PRACTICE");

// Looping from 0 to 4


// Looping through an array
const tools = ["ladder", "rope", "boots"];
// ----- <> Loop thru tools array


// =======================================
// SIDEBAR: if statements
console.log("----------------------------");
console.log("IF STATEMENT PRACTICE");

let weather = "rain";
// If "weather" equals "rain"
// ----- <> - console.log("Bring a raincoat.");

let zero = 0
// If "zero" equals "0"
// "===" vs. "=="


// IF / ELSE IF practice
let cargoWeight = 80;

// If cargoweight less than 100
// If cargoweight less than 50
// If all is good

// IF / ELSE
let bootsAreBroken = true;

// =======================================
//  MINI-PROJECT: Death Stranding - Cargo Scanner
console.log("----------------------------");
console.log("CARGO SCANNER - MINI PROJECT");

// Inventory of items
const cargo = [
  "medkit",
  "cryptobiote",
  "toxic waste",
  "lost cargo",
  "BB pod",
  "toxic waste"
];

// Counters
let safeCount = 0;
let toxicCount = 0;
let valuableCount = 0;

console.log("🔍 Scanning cargo...");

// Loop and logic to scan cargo
// ----- <> Loop / check items
// ----- <> - If toxic waste add to toxicCount
// ----- <> - Else if "lost cargo" OR "BB pod" add to valuableCount
// ----- <> - Else cargo is safe

// Console log the Process


// BONUS: Advice based on results

// =======================================
console.log("----------------------------")
console.log("End of Week 2 Lesson.")