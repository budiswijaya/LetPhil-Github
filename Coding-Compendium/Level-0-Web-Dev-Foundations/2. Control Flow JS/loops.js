/*
if (Condition) else (another condition) else (yet another condition)
*/

    /*Example below:
    const marks = 85
    if (marks >= 90) {
        console.log("Grade: A")
        } else if (marks >= 80) {
        console.log("Grade: B")
        } else if (marks >= 70) {
        console.log ("Grade: C")
        } else if (marks >= 60) {
        console.log("Grade: D")
        }
    */

    /*Results below:
    Grade: A
    */

        
/* ++ and -- operators (It was for main loop function)
Increment Operator (++)
  Increments the value of the variable by 1.
Excrement Operator (--)
  Decrements the value of the variable by 1.

What they do:
    ++ = add 1
    -- = subtract 1
Two ways to write them:
(x++, x--)
    Returns the current value
    Then changes the variable
(++x, --x)
    Changes the variable first
    Then returns the new value
*/

    /*Example below: (Read Below Note First!!)
    // You still have to declare x=5 after the first one, it's there
    // because to reset it, if not the answer will be related to the first statement.)

    let x = 5;  console.log(x++ *2); 
    x = 5;  console.log(++x *2); 
    x = 5;  console.log(x-- *2); 
    x = 5;  console.log(--x *2); 

        First Statement Explain
        ++ is after X. So the X value is still 5 and next time it will be 6
        Second Statement Explain
        ++ is before X. So the X value will be 6 and next time it will be 7
        Third Statement Explain
        -- is after X. S. So the X value is still 5 and next time it will be 4
        Forth Statement Explain
        -- is before X. So the X value will be 4 and next time it will be 3
    */
    
    /*Result below: (Reset condition or Not reset condition)
    10
    12 or 14
    10 or 14
    8 or 10
    */

/* for 
means to loop through a block of code
This tells JavaScript: "I want to repeat something"
Like saying "Do this over and over"
*/

    /*Example below:
    for (let i = 0; i <= 5; i++) {
    console.log("Iternation:", i);
    }
        Statement Explain
        i value is 0
        i <= 5 means i is less than or equal to 5 so there is 5 arrays (1,2,3,4,5)
        i++ there means is increased by 1 each time, so the loop will run 5 times
        "" is there for regular text
        i there is for display result
    */

    /*Results below:
    Iteration: 0
    Iternation: 1
    Iternation: 2
    Iternation: 3
    Iternation: 4
    Iternation: 5
    */

    /*Example below:
    const color = ["red", "green", "blue", "yellow"];

    for (let i = 0; i < color.length; i++) {
      console.log("I =", i);
      console.log("color[i] =", color[i]);
    }
      Statement Explain
      color is an array (there is 4 item)
      color.length is the number of items in the array
      i is the index of the array
      i++ there means is increased by 1 each time, so the loop will run 4 times
    */

    /*Results below:
    I = 0
    color[i] = red
    I = 1
    color[i] = green
    I = 2
    color[i] = blue
    I = 3
    color[i] = yellow
    */

/* while 
means to loop through a block of code same as for 
but it will continue to loop until the condition is false
*/

    /*Example below:
    let count = 0;

    while (count <= 5){
    console.log("count =", count);
    count++;
    }

      Statement Explain
      count value is 0
      count <= 5 means count is less than or equal to 5 so there is 5 arrays (1,2,3,4,5)
      count++ there means is increased by 1 each time, so the loop will run 5 times
      so if there is no count++ it will continue to loop until the condition is false
    */

    /*Results below:
    count = 0
    count = 1
    count = 2
    count = 3
    count = 4
    count = 5
    */

    /*Example below:
    let userInput;

    while(userInput !== "yes"){
    userInput = prompt ("Type 'yes' to continue.");
    }

    console.log("You entered 'yes'")

      Statement Explain
      prompt() is used to get user input from the console
      userInput = prompt means the user will be prompted to enter something
      while (userInput !== "yes") means the loop will continue to run as long as userInput is not equal to "yes"
      console.log("You entered 'yes'") means the program will print "You entered 'yes'" when the user enters "yes" 
      and the loop ends
    */
   
    /*Results below:
    Type 'yes' to continue.
    (user have to input text)
    You entered 'yes'
    */

/* do ... while (Executes at least once) 
means to loop through a block of code same as while
but it will continue to loop until the condition is false
*/

  /*Example below:
  let number = 0;

  do {
    console.log("number = ", number);
    number++;
  } while (number <= 5);
    
    Statement Explain
    number value is 0
    number <= 5 means number is less than or equal to 5 so there is 5 arrays (1,2,3,4,5)
    number++ there means is increased by 1 each time, so the loop will run 5 times
    so if there is no number++ it will continue to loop until the condition is false
  */

  /*Results below:
  number =  0
  number =  1
  number =  2
  number =  3
  number =  4
  number =  5
  */

  /*Example below:
  let num;

  do {
    num = prompt("Enter a number greater than 10")
  } while (num <= 10);

  console.log("Thank you.");

    Statement Explain
    prompt() is used to get user input from the console
    num = prompt means the user will be prompted to enter something
    while (num <= 10) means the loop will continue to run as long as num is less than or equal to 10
    console.log("Thank you.") means the program will print "Thank you." 
    when the user enters a number greater than 10 and the loop will end
  */

  /*Results below:
  Enter a number greater than 10
  (user have to input text)
  Thank you.
  */

//forEach

// const fruits = ["Apple","Banana","Cherry"];        

// fruits.forEach(function(fruit){
// console.log(fruit);
// }) 

// for ... of ...
// Used for iterating over iterable objects like arrays, strings, maps, sets, etc.
// const fruits = ["Apple","Banana","Cherry"];

// for (let f of fruits){
//   console.log(f);
// };

// for ... in ...
// Used for iterating over objects

const Person = {
  Name: "Alice",
  Age: 25,
  City: "New York",
};

for (const Key in Person){
  console.log("Key =", Key)
  console.log(`Person[${Key}]:val=`,Person[Key]);
}