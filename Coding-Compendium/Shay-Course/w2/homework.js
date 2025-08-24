// Death Stranding: Cargo Check - JS Homework
// A lesson in arrays, loops, push/pop, and basic logic
// -------------------------------------------

// STEP 0: Set Up Your Gear
// Each item has a weight (kg)

const ladder = 10;
const climbingAnchor = 5;
const medKit = 8;
const containerRepairSpray = 7;
const lostCargo = 30;
const specialFuel = 20;
const cryptobiotes = 3;

console.log("Step 0: Gear weights ready.")

// -------------------------------------------
// STEP 1: Create a Cargo Array "cargoItems"

const cargoItems = [ladder, climbingAnchor, medKit, containerRepairSpray, lostCargo, specialFuel, cryptobiotes];

console.log("Step 1: Cargo loaded.", cargoItems)

// -------------------------------------------
// STEP 2: Total Cargo Weight

let totalWeight = 0
for (let i = 0; i < cargoItems.length; i++) {
    totalWeight += cargoItems[i]
}

console.log("Step 2: Total weight is " + totalWeight + "kg")

// Loop it! (cargoItems)

// ----- <> console.log("Step 2: Total weight is " + totalWeight + "kg")

// -------------------------------------------  
   
// STEP 3: Check If You're Overweight (if/else and a for loop inside?)
// Max weight is 100kg. If you're over, drop the last item.
// You may need to "pop" it off

if (totalWeight > 100) {
    console.log("Step 3: Overweight! Dropping the last item.")
    cargoItems.pop()
} else {
    console.log("Step 3: Underweight! Keep going.")
}
// -------------------------------------------
// STEP 4: Rearranged Cargo by Weight
// Manually sort from heaviest to lightest
// Create Array "rearrangedCargo"
// You may need to "push" items one by one

let rearrangedCargo = []
for (let i = 0; i < cargoItems.length; i++) {
    let heaviest = Math.max(...cargoItems)
    rearrangedCargo.push(heaviest)
    cargoItems.splice(cargoItems.indexOf(heaviest), 1)
}

console.log("Step 4: Rearranged cargo (heavy to light):", rearrangedCargo)

// -------------------------------------------
// STEP 5: You Fell Off a Cliff
// If item > 5, you fell off a Cliff and the item is now broken. 
// No need to carry broken items!

let brokenItems = []
for (let i = 0; i < cargoItems.length; i++) {
    if (cargoItems[i] > 5) {
        brokenItems.push(cargoItems[i])
        cargoItems.splice(cargoItems.indexOf(cargoItems[i]), 1)
    }}

// -------------------------------------------
// STEP 6: Quick Scan
// Console.log to find the length of items

console.log("Step 6: Number of items:", cargoItems.length)

// -------------------------------------------
// STEP 7: Check for Ladder
// Did you still have a ladder? 
// You may want to check your array if it "includes" it

if (cargoItems.includes(ladder)) {
    console.log("Step 7: Yes, you still have a ladder.")
} else {
    console.log("Step 7: No, you don't have a ladder.")
}

// -------------------------------------------
// BONUS: What was the heaviest item?
// Need to check the "math.max" for this..

let heaviestItem = Math.max(...cargoItems)
console.log("Step Bonus: The heaviest item was:", heaviestItem, "kg.")

// -------------------------------------------
// Final Message

console.log("Keep going, Sam Porter Bridges. You can do this.");