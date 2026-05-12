// JavaScript curriculum data - all phases and lessons
export const javascriptCurriculum = {
  label: "JavaScript",
  modules: [
    {
      id: "javascript-phase0-m1",
      title: "Phase 0 — Welcome to JavaScript",
      duration: "15 min",
      lessons: [
        {
          id: "javascript-phase0-m1-l1",
          title: "Your First JavaScript Program",
          explanation: `JavaScript is the language of the web — it runs in every browser on the planet 
and powers everything from simple websites to complex applications like Google 
Maps, Twitter, and Netflix. Unlike most languages where you need to set up a 
compiler or environment, JavaScript runs instantly in any browser's developer 
console. Your very first tool is console.log() — think of it as JavaScript's 
megaphone. Whatever you put inside the parentheses gets announced to the 
console. Every professional JavaScript developer uses console.log() dozens 
of times a day for testing and debugging. You're starting exactly where 
every great developer started.`,
          concept: `console.log() prints any value to the console (browser DevTools or terminal).
Each console.log() call creates a new line of output.
Text must be wrapped in quotes — single ('text'), double ("text"), or backticks (\`text\`).
Semicolons at the end of statements are optional but strongly recommended.
JavaScript runs top to bottom — each line executes in order.`,
          example: `// console.log is JavaScript's way of talking to you
console.log('Hello, world!');
console.log('I am learning JavaScript!');

// You can log numbers too (no quotes needed)
console.log(42);
console.log(3.14);

// And even math expressions
console.log(10 + 5);   // prints 15
console.log(2 * 8);    // prints 16

// Multiple values in one log (separated by commas)
console.log('My age is', 25);  // My age is 25`,
          exercise: {
            prompt: `Let's make JavaScript speak! Complete all three steps:
1. Use console.log() to print: I am ready to code in JavaScript!
2. Use console.log() to print any number you like
3. Use console.log() to print the result of 5 + 3 (as a math expression, not the string "5 + 3")`,
            starterCode: `// Welcome to JavaScript! Make it talk.

// Step 1: Print the required message (copy it exactly!)


// Step 2: Print any number


// Step 3: Print the result of 5 + 3
`,
            solution: `console.log('I am ready to code in JavaScript!');
console.log(42);
console.log(5 + 3);`,
            tests: [
              { type: "contains", value: "console.log('I am ready to code in JavaScript!')" },
              { type: "contains", value: "console.log" }
            ],
            debuggingTip: `Common mistakes:
• Forgot the quotes around your message? JavaScript will think it's a variable name and throw a ReferenceError.
• Used mismatched quotes? 'Hello" won't work — opening and closing quotes must match.
• Nothing printing? Check you actually called console.log() — just writing text in quotes does nothing.
• console.Log() with capital L? JavaScript is case-sensitive — it must be lowercase log.
• Semicolon missing? JavaScript usually handles this but add them as good practice.`
          }
        }
      ]
    },
    {
      id: "javascript-phase1-m1",
      title: "Phase 1 — Fundamentals",
      duration: "3 hours",
      lessons: [
        {
          id: "javascript-phase1-m1-l1",
          title: "console.log() — Your Communication Tool",
          explanation: `Every program needs a way to show results. console.log() is JavaScript's primary 
output tool — it prints to the browser's developer console or the terminal when 
running with Node.js. Professional developers have the console open constantly 
while coding. Unlike some languages, JavaScript's console.log() is remarkably 
flexible — it can print text, numbers, boolean values, arrays, objects, and 
even multiple values at once separated by commas. Understanding all the ways 
to use it will save you hours of debugging time.`,
          concept: `console.log('text')    → prints text (string)
console.log(42)        → prints a number (no quotes)
console.log(true)      → prints a boolean
console.log(a, b, c)   → prints multiple values separated by spaces
console.log('label:', value) → common debugging pattern
Each call creates a new line — multiple values in one call stay on the same line.
Semicolons (;) end each statement — JavaScript sometimes inserts them automatically
but explicit semicolons prevent subtle bugs.`,
          example: `// Basic output
console.log('Hello');          // Hello
console.log('Goodbye');        // Goodbye
console.log('JavaScript!');    // JavaScript!

// Numbers and math (no quotes)
console.log(42);               // 42
console.log(3.14);             // 3.14
console.log(10 + 5);          // 15

// Boolean values
console.log(true);             // true
console.log(false);            // false

// Multiple values in one call
console.log('Name:', 'Alice'); // Name: Alice
console.log('Sum:', 3 + 4);   // Sum: 7

// Common debugging pattern
let x = 100;
console.log('x is:', x);      // x is: 100`,
          exercise: {
            prompt: `Practice different ways to use console.log():
1. Print 'Ready', 'Set', 'Go!' each on their own line (three separate calls)
2. Print the number 2025 on its own line
3. Print the result of 100 - 37 as a math expression
4. Print two values in one console.log(): the label "My score:" and the number 95`,
            starterCode: `// Part 1: Three separate lines


// Part 2: Print the number 2025


// Part 3: Print 100 - 37 as math


// Part 4: Print label and number in one call
`,
            solution: `console.log('Ready');
console.log('Set');
console.log('Go!');
console.log(2025);
console.log(100 - 37);
console.log('My score:', 95);`,
            tests: [
              { type: "contains", value: "console.log('Ready')" },
              { type: "contains", value: "console.log('Set')" },
              { type: "contains", value: "console.log('Go!')" },
              { type: "contains", value: "console.log" }
            ],
            debuggingTip: `Common mistakes:
• Putting math in quotes? console.log('100 - 37') prints the text "100 - 37", not 63. Remove quotes for math.
• Using + to combine in one log? console.log('Score:' + 95) prints "Score:95" (no space). Use commas instead: console.log('Score:', 95).
• console with capital C? Must be lowercase console.log() — JavaScript is case-sensitive.
• Missing parentheses? console.log without () just references the function without calling it.`
          }
        },
        {
          id: "javascript-phase1-m1-l2",
          title: "Variables with let and const",
          explanation: `A variable is a named container for storing data. Think of it like a labeled box — 
you put something in the box, write a name on it, and later you can find it by 
name. JavaScript has two modern ways to create variables: let for values that 
will change (your score during a game, the current page number), and const for 
values that should never change (the number of days in a week, a tax rate, 
your app's name). Using const by default and let when you need to change 
something is the professional approach — it prevents accidental changes 
to values you didn't intend to modify.`,
          concept: `let variableName = value;   → creates a variable that CAN be changed
const variableName = value; → creates a variable that CANNOT be changed (constant)
var is the old way — avoid it in modern JavaScript
Variable names: camelCase (firstName, totalScore, isLoggedIn)
Cannot start with a number: 1name is invalid, name1 is fine
JavaScript is CASE-SENSITIVE: city and City are different variables
Uninitialized variables have value: undefined`,
          example: `// let — can be reassigned
let city = 'Paris';
console.log(city);   // Paris
city = 'London';     // changing the value
console.log(city);   // London

// const — cannot be reassigned
const PI = 3.14159;
const DAYS_IN_WEEK = 7;
console.log(PI);          // 3.14159
// PI = 3; // ← This would throw a TypeError!

// Different data types in variables
let name = 'Alice';      // string
let age = 28;            // number
let isStudent = true;    // boolean
let score = 98.5;        // decimal number

console.log(name, age, isStudent, score);
// Output: Alice 28 true 98.5

// Undefined — declared but not assigned
let emptyBox;
console.log(emptyBox);   // undefined`,
          exercise: {
            prompt: `Build a variable toolbox:
1. Create a variable 'city' with let, set to 'Paris', and print it
2. Change city to 'London' and print it again
3. Create a const 'COUNTRY' set to 'France' and print it
4. Create let variables for: your name (string), a lucky number (number), and whether you like coding (boolean)
5. Print all three on one line using console.log with commas`,
            starterCode: `// Step 1 & 2: city variable


// Step 3: COUNTRY constant


// Step 4: Three different type variables
let myName =
let luckyNumber =
let likesCoding =

// Step 5: Print all three
`,
            solution: `let city = 'Paris';
console.log(city);
city = 'London';
console.log(city);
const COUNTRY = 'France';
console.log(COUNTRY);
let myName = 'Alex';
let luckyNumber = 7;
let likesCoding = true;
console.log(myName, luckyNumber, likesCoding);`,
            tests: [
              { type: "contains", value: "let city" },
              { type: "contains", value: "console.log(city)" },
              { type: "contains", value: "const COUNTRY" }
            ],
            debuggingTip: `Common mistakes:
• Trying to reassign a const? TypeError: Assignment to constant variable. Use let if the value will change.
• Used var? It works but has confusing scoping rules — use let and const in modern JavaScript.
• Variable name has spaces? let my name won't work — use camelCase: let myName.
• Printed variable name in quotes? console.log('city') prints the text "city", not Paris. Remove the quotes.
• Used a variable before declaring it? JavaScript reads top to bottom — declare before using.`
          }
        },
        {
          id: "javascript-phase1-m1-l3",
          title: "Strings and Template Literals",
          explanation: `Strings are how JavaScript handles text — names, messages, URLs, error messages. 
JavaScript gives you three ways to create strings, each with its own superpower. 
Single and double quotes are traditional and interchangeable. But backtick strings 
(template literals) are a game-changer introduced in modern JavaScript — they 
let you embed variables and even entire expressions directly inside a string 
using \x24{} without messy concatenation. You'll use template literals constantly 
in real JavaScript development for building messages, generating HTML, 
constructing URLs, and formatting output.`,
          concept: `'Single quotes'          → basic string
"Double quotes"          → basic string (use when string contains apostrophe)
\`Backtick template\`     → template literal (most powerful)
\`Hello, \x24{variable}!\`  → embeds the variable's value directly
\`Result: \x24{2 + 2}\`     → can embed ANY expression inside \x24{}
String concatenation with +: 'Hello ' + name (old way — template literals are cleaner)
Strings are immutable — methods return new strings, they don't change the original.`,
          example: `let name = 'Alice';
let age = 28;
let city = 'Barcelona';

// Old way: concatenation with +
console.log('Hello, ' + name + '!');     // Hello, Alice!
console.log(name + ' is ' + age);       // Alice is 28

// Modern way: template literals (backticks)
console.log(\`Hello, \x24{name}!\`);         // Hello, Alice!
console.log(\`\x24{name} is \x24{age} years old and lives in \x24{city}.\`);
// Output: Alice is 28 years old and lives in Barcelona.

// Expressions inside \x24{}
let price = 50;
let quantity = 3;
console.log(\`Total: \$\x24{price * quantity}\`);  // Total: $150

// Multiline string (unique to template literals)
let message = \`Dear \x24{name},
Your order total is \$\x24{price * quantity}.
Thank you!\`;
console.log(message);

// Single quotes when string contains apostrophe
let sentence = "It's a great day!";   // ← use double quotes
console.log(sentence);`,
          exercise: {
            prompt: `Master template literals:
1. Create variables: item = 'headphones', price = 79, quantity = 2
2. Use a template literal to print: "Item: headphones"
3. Use a template literal to print: "Price: $79"
4. Use a template literal to calculate and print: "Total: $158" (calculate quantity * price inside \x24{})
5. Create a variable 'discount' = 10 and print: "After discount: $148" (calculate inside \x24{})`,
            starterCode: `// Step 1: Create variables
let item = 'headphones';
let price = 79;
let quantity = 2;

// Step 2: Print item name with template literal


// Step 3: Print price with template literal


// Step 4: Print total (calculate inside \${})


// Step 5: Add discount variable and print final price
let discount = 10;
`,
            solution: `let item = 'headphones';
let price = 79;
let quantity = 2;
console.log(\`Item: \x24{item}\`);
console.log(\`Price: \$\x24{price}\`);
console.log(\`Total: \$\x24{quantity * price}\`);
let discount = 10;
console.log(\`After discount: \$\x24{quantity * price - discount}\`);`,
            tests: [
              { type: "contains", value: "\${item}" },
              { type: "contains", value: "\${quantity * price}" }
            ],
            debuggingTip: `Common mistakes:
• Using single or double quotes instead of backticks? \x24{variable} only works inside backtick strings (\`\`).
• Getting the literal text \x24{name} printed? You used single/double quotes — switch to backticks.
• Math not calculating? Make sure it's inside \x24{} — \`Total: price * quantity\` is just text.
• Dollar sign confusion? \$\x24{price} — the first \$ is the literal dollar symbol, \x24{price} is the variable.
• Backtick key location? It's usually in the top-left of keyboard, same key as tilde (~).`
          }
        },
        {
          id: "javascript-phase1-m1-l4",
          title: "Numbers and Arithmetic",
          explanation: `JavaScript handles numbers differently from most other languages — it has just 
ONE number type that handles both integers (whole numbers) and decimals. 
This is convenient but comes with a famous quirk: 0.1 + 0.2 doesn't equal 
exactly 0.3 in JavaScript (it gives 0.30000000000000004). This is a 
floating-point precision issue that affects all languages using IEEE 754 
math — you'll learn to handle it with methods like toFixed(). JavaScript 
also supports special values like Infinity (when you divide by zero) and 
NaN (Not a Number, when math on non-numbers fails). Understanding these 
makes you a much more confident programmer.`,
          concept: `+ (add), - (subtract), * (multiply), / (divide), % (remainder/modulo), ** (exponent)
Unlike Java, JavaScript does NOT have integer division — 7 / 2 = 3.5 always
% gives remainder: 10 % 3 = 1 (used to check even/odd: n % 2 === 0)
** is exponent: 2 ** 8 = 256
Shorthand: x += 5, x -= 3, x *= 2, x /= 4, x++, x--
Math.round(), Math.floor(), Math.ceil() for rounding
Number.toFixed(2) for controlling decimal places`,
          example: `// Basic arithmetic
console.log(10 + 3);    // 13
console.log(10 - 3);    // 7
console.log(10 * 3);    // 30
console.log(10 / 3);    // 3.3333333333333335 (not integer division!)
console.log(10 % 3);    // 1 (remainder)
console.log(2 ** 10);   // 1024 (power)

// No integer division in JS!
console.log(7 / 2);     // 3.5 (not 3 like Java)

// Rounding helpers
console.log(Math.round(3.7));  // 4
console.log(Math.floor(3.9));  // 3 (always down)
console.log(Math.ceil(3.1));   // 4 (always up)

// Controlling decimals in output
let price = 9.999;
console.log(price.toFixed(2));  // "9.99" (returns a string)

// Shorthand operators
let score = 100;
score += 10;   // score = 110
score--;       // score = 109
console.log(score);  // 109

// Special values
console.log(1 / 0);         // Infinity
console.log('abc' * 2);     // NaN (Not a Number)
console.log(isNaN('abc'));   // true — check for NaN`,
          exercise: {
            prompt: `Build a shopping calculator:
1. Create: price = 120, taxRate = 8 (as a percentage), quantity = 3
2. Calculate taxAmount = price * taxRate / 100 and print it
3. Calculate total = price + taxAmount and print it  
4. Calculate grandTotal = total * quantity and print it using toFixed(2)
5. Use % to check if grandTotal is a whole number (grandTotal % 1 === 0) and print the result
6. Print Math.floor(grandTotal) and Math.ceil(grandTotal)`,
            starterCode: `// Shopping calculator
let price = 120;
let taxRate = 8;
let quantity = 3;

// Step 2: Calculate and print tax amount


// Step 3: Calculate and print total (price + tax)


// Step 4: Calculate grandTotal and print with toFixed(2)


// Step 5: Is grandTotal a whole number?


// Step 6: Floor and ceil of grandTotal
`,
            solution: `let price = 120;
let taxRate = 8;
let quantity = 3;
let taxAmount = price * taxRate / 100;
console.log(taxAmount);
let total = price + taxAmount;
console.log(total);
let grandTotal = total * quantity;
console.log(grandTotal.toFixed(2));
console.log(grandTotal % 1 === 0);
console.log(Math.floor(grandTotal));
console.log(Math.ceil(grandTotal));`,
            tests: [
              { type: "contains", value: "taxAmount" },
              { type: "contains", value: "grandTotal" },
              { type: "contains", value: "toFixed" }
            ],
            debuggingTip: `Common mistakes:
• toFixed() returns a STRING not a number — don't do math after calling it.
• 8 / 100 = 0.08 which works, but taxRate/100 is clearer than 0.08.
• Modulo (%) checks remainder — n % 2 === 0 means even, n % 2 === 1 means odd.
• Got NaN? Something in your calculation used a non-number. Check variable names for typos.
• ** is exponent (power): 2**3 = 8. Don't confuse with * (multiply).`
          }
        },
        {
          id: "javascript-phase1-m1-l5",
          title: "Booleans and Comparisons",
          explanation: `Every decision in programming comes down to a yes/no question. Boolean values 
(true and false) are the foundation of all logic in JavaScript. Comparison 
operators evaluate two values and return a boolean. JavaScript has TWO equality 
operators — this confuses almost every beginner. === (triple equals, strict 
equality) checks that both the value AND the type match. == (double equals, 
loose equality) does type coercion before comparing — it converts values 
to make them match, which leads to bizarre results: '5' == 5 is true, 
'' == false is true. Always use === in modern JavaScript. This is one 
of the most important habits to build from the start.`,
          concept: `=== (strict equal): same value AND same type → '5' === 5 is FALSE
== (loose equal): converts types first → '5' == 5 is TRUE (avoid this!)
!== (strict not equal): different value OR different type
> < >= <= work for numbers (and surprisingly strings by alphabet)
&& (AND): both must be true → age > 18 && hasID
|| (OR): at least one must be true → isStudent || isSenior
! (NOT): flips the value → !true = false
Truthy/falsy: 0, '', null, undefined, NaN, false are falsy — everything else is truthy`,
          example: `let age = 20;
let hasID = true;

// Strict equality (always use ===)
console.log(5 === 5);        // true
console.log('5' === 5);      // false (different types!)
console.log(5 == '5');       // true (loose — avoid this!)

// Comparison operators
console.log(age >= 18);      // true
console.log(age < 18);       // false
console.log(age !== 21);     // true

// Logical operators
console.log(age >= 18 && hasID);    // true (both true)
console.log(age < 18 || hasID);     // true (one true)
console.log(!hasID);                 // false (flipped)

// Storing results
let canVote = age >= 18;
let canDrinkInUS = age >= 21;
console.log(\`Can vote: \\${canVote}, Can drink: \\${canDrinkInUS}\`);

// Truthy/falsy (important JavaScript concept)
console.log(Boolean(0));         // false
console.log(Boolean(''));        // false
console.log(Boolean(null));      // false
console.log(Boolean('hello'));   // true
console.log(Boolean(42));        // true`,
          exercise: {
            prompt: `Build a ticket checker:
1. Create: ticketPrice = 85, budget = 100, minimumAge = 18, userAge = 16
2. Print whether ticketPrice is less than budget (can afford?)
3. Print whether ticketPrice is exactly 100 using ===
4. Print whether budget is greater than or equal to ticketPrice
5. Print whether userAge >= minimumAge (can attend?)
6. Print whether budget >= ticketPrice AND userAge >= minimumAge (can go?)
7. Demonstrate the difference: print '85' === 85 and '85' == 85`,
            starterCode: `// Ticket checker
let ticketPrice = 85;
let budget = 100;
let minimumAge = 18;
let userAge = 16;

// Step 2: Can afford?


// Step 3: Costs exactly 100?


// Step 4: Budget >= price?


// Step 5: Old enough?


// Step 6: Can go? (both conditions)


// Step 7: === vs == demonstration

`,
            solution: `let ticketPrice = 85;
let budget = 100;
let minimumAge = 18;
let userAge = 16;
console.log(ticketPrice < budget);
console.log(ticketPrice === 100);
console.log(budget >= ticketPrice);
console.log(userAge >= minimumAge);
console.log(budget >= ticketPrice && userAge >= minimumAge);
console.log('85' === 85);
console.log('85' == 85);`,
            tests: [
              { type: "contains", value: "ticketPrice < budget" },
              { type: "contains", value: "ticketPrice === 100" },
              { type: "contains", value: "&&" }
            ],
            debuggingTip: `Common mistakes:
• Used = instead of ===? Single = is assignment. Always use === for comparison.
• Using == instead of ===? '5' == 5 is true in JS — use === to avoid surprises.
• Confused && and ||? && needs BOTH true. || needs ONE true.
• Chaining comparisons? 10 < x < 20 doesn't work in JS — write x > 10 && x < 20.
• Boolean check on variable directly? if (name) checks if name is truthy (not empty/null/undefined).`
          }
        },
        {
          id: "javascript-phase1-m1-l6",
          title: "Type Conversion — Changing Data Types",
          explanation: `JavaScript is unusual because it automatically converts between types in many 
situations — this is called type coercion. Sometimes it helps (like when you 
use + with a string and number), but it often causes bugs. Understanding both 
explicit conversion (you control it) and implicit coercion (JavaScript does it 
automatically) is essential. User input from forms and prompt() always comes 
as a string — even if the user typed a number. Forgetting to convert it before 
doing math is one of the most common beginner bugs: '5' + 3 gives '53', 
not 8. Always convert explicitly when you need specific types.`,
          concept: `Number('42')     → converts string to number: 42
Number('abc')    → NaN (failed conversion)
Number(true)     → 1
Number(false)    → 0
parseInt('42px') → 42 (reads number until non-digit, ignores rest)
parseFloat('3.14abc') → 3.14
String(42)       → '42'
Boolean(0)       → false (also: '', null, undefined, NaN)
Boolean('hello') → true (any non-empty string)
isNaN(value)     → true if the value is NaN`,
          example: `// String to number — MUST do this with user input!
let userInput = '95';
let score = Number(userInput);
console.log(score + 5);     // 100 (math!)
console.log(userInput + 5); // '955' (concatenation — wrong!)

// parseInt vs Number
console.log(parseInt('42.9'));    // 42 (truncates decimal)
console.log(parseFloat('42.9')); // 42.9
console.log(parseInt('42px'));   // 42 (reads digits until non-digit)
console.log(Number('42px'));     // NaN (whole string must be number)

// Number to string
console.log(String(100));        // '100'
console.log((3.14).toString());  // '3.14'
console.log(100 + '');           // '100' (implicit coercion with +)

// Boolean conversion
console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(Boolean(''));       // false
console.log(Boolean('hello'));  // true
console.log(Boolean(null));     // false

// Checking for NaN
let result = Number('not a number');
console.log(result);            // NaN
console.log(isNaN(result));     // true
console.log(isNaN('42'));       // false (coerces '42' to 42 first)`,
          exercise: {
            prompt: `Practice type conversion:
1. Create scoreStr = '95', convert to number and store as score, print score + 5
2. Show what happens WITHOUT converting: print scoreStr + 5 (notice the bug!)
3. Use parseInt on '200px' and print the result
4. Convert the number 1000 to a string using String(), concatenate ' dollars', print it
5. Print Boolean(0), Boolean(''), Boolean('hello'), Boolean(null) — what pattern do you see?
6. Convert '3.99' using both parseInt and parseFloat — print both and notice the difference`,
            starterCode: `// Step 1: Convert scoreStr to number
let scoreStr = '95';


// Step 2: What happens without converting?


// Step 3: parseInt on '200px'


// Step 4: Number to string


// Step 5: Boolean conversions


// Step 6: parseInt vs parseFloat on '3.99'

`,
            solution: `let scoreStr = '95';
let score = Number(scoreStr);
console.log(score + 5);
console.log(scoreStr + 5);
console.log(parseInt('200px'));
console.log(String(1000) + ' dollars');
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('hello'));
console.log(Boolean(null));
console.log(parseInt('3.99'));
console.log(parseFloat('3.99'));`,
            tests: [
              { type: "contains", value: "Number(scoreStr)" },
              { type: "contains", value: "String(1000)" },
              { type: "contains", value: "parseInt" }
            ],
            debuggingTip: `Common mistakes:
• '95' + 5 giving '955' instead of 100? That's string concatenation not math. Convert first: Number('95') + 5.
• isNaN('42') returning false when you expected true? isNaN coerces the string to a number first — use Number.isNaN() for strict checking.
• parseInt vs Number: parseInt('42abc') = 42, Number('42abc') = NaN. parseInt is more lenient.
• Implicit conversion with +: '5' + 3 = '53' (string wins). With other operators: '5' - 3 = 2 (becomes number).
• Boolean('false') is TRUE — the string 'false' is truthy because it's non-empty. Only actual false boolean is falsy.`
          }
        },
        {
          id: "javascript-phase1-m1-l7",
          title: "String Methods — Built-in Text Tools",
          explanation: `JavaScript strings come loaded with powerful built-in methods that make text 
processing straightforward. Since strings are immutable (they can't be changed 
in place), all these methods return NEW strings — the original is always 
preserved. You'll use these methods constantly in real development: 
.trim() to clean up form input, .includes() to search text, 
.split() to break a sentence into words, .replace() to swap text, 
.slice() to extract portions. These methods are especially important 
when processing user input, building URLs, parsing data, or 
generating formatted output.`,
          concept: `.length            → number of characters (property, no parentheses)
.toUpperCase()     → new string in ALL CAPS
.toLowerCase()     → new string in all lowercase
.trim()            → removes leading and trailing whitespace
.includes('text')  → true if string contains 'text'
.startsWith('x')   → true if string starts with 'x'
.endsWith('x')     → true if string ends with 'x'
.indexOf('text')   → position of first occurrence (-1 if not found)
.slice(start, end) → extracts portion from start to end (end excluded)
.replace('old','new') → replaces first occurrence
.split(' ')        → splits into array of parts`,
          example: `let greeting = '  Hello, JavaScript World!  ';

// Length and trimming
console.log(greeting.length);         // 26 (includes spaces)
console.log(greeting.trim());         // 'Hello, JavaScript World!'
console.log(greeting.trim().length);  // 24 (chaining!)

// Case conversion
let word = 'JavaScript';
console.log(word.toUpperCase());   // JAVASCRIPT
console.log(word.toLowerCase());   // javascript
console.log(word);                 // JavaScript (unchanged!)

// Searching
let sentence = 'I love programming in JavaScript';
console.log(sentence.includes('love'));       // true
console.log(sentence.includes('hate'));       // false
console.log(sentence.startsWith('I love'));   // true
console.log(sentence.indexOf('programming')); // 7

// Extracting
console.log(sentence.slice(7, 18)); // programming
console.log(sentence.slice(-10));   // JavaScript (from end)

// Replacing and splitting
console.log(sentence.replace('love', 'enjoy'));
// 'I enjoy programming in JavaScript'
let words = sentence.split(' ');
console.log(words);  // ['I', 'love', 'programming', 'in', 'JavaScript']
console.log(words.length);  // 5`,
          exercise: {
            prompt: `Explore string methods on a messy string:
1. Create: let greeting = '  Hello World  '
2. Print the length (includes spaces)
3. Print the trimmed version and its length
4. Print it in UPPERCASE and lowercase
5. Check if it includes 'World' and if it starts with '  Hello' — print both
6. Extract just the word 'Hello' using .slice() (after trimming)
7. Replace 'World' with 'JavaScript' and print the result`,
            starterCode: `// String methods exploration
let greeting = '  Hello World  ';

// Step 2: Print length


// Step 3: Print trimmed version and its length


// Step 4: UPPERCASE and lowercase


// Step 5: includes and startsWith checks


// Step 6: Extract 'Hello' using slice (on trimmed version)


// Step 7: Replace 'World' with 'JavaScript'
`,
            solution: `let greeting = '  Hello World  ';
console.log(greeting.length);
console.log(greeting.trim());
console.log(greeting.trim().length);
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.includes('World'));
console.log(greeting.startsWith('  Hello'));
console.log(greeting.trim().slice(0, 5));
console.log(greeting.replace('World', 'JavaScript'));`,
            tests: [
              { type: "contains", value: ".toUpperCase()" },
              { type: "contains", value: ".toLowerCase()" },
              { type: "contains", value: ".length" },
              { type: "contains", value: ".trim()" }
            ],
            debuggingTip: `Common mistakes:
• Called .length()? length is a PROPERTY not a method — no parentheses: str.length not str.length()
• Methods not changing the original? Correct — strings are immutable. Always capture the result: let clean = str.trim()
• slice(0, 5) gives characters 0,1,2,3,4 — end index is NOT included.
• .includes() is case-sensitive: 'Hello'.includes('hello') is false.
• Chaining order matters: greeting.trim().slice(0,5) trims FIRST then slices — different from greeting.slice(0,5).trim()`
          }
        },
        {
          id: "javascript-phase1-m1-l8",
          title: "Getting User Input",
          explanation: `Interactive programs need to receive input from users. In browsers, JavaScript 
provides prompt() which opens a popup dialog asking the user for text. This 
is the simplest form of user interaction for learning purposes. In real 
web applications, you'd use HTML form inputs instead, but the same principles 
apply — you get a string back and often need to convert it. Understanding 
input handling is the bridge from one-way programs (that just print things) 
to two-way programs (that respond to what the user does), which is the 
foundation of all interactive applications.`,
          concept: `prompt('question')  → opens dialog, returns whatever user typed as a STRING
                    → returns null if user clicks Cancel
Always returns a string — convert with Number() for math
confirm('question') → returns true (OK) or false (Cancel)
alert('message')    → shows a popup (no return value)
In Node.js environments, prompt may not be available — use readline instead
Always handle the case where user might click Cancel (null check)`,
          example: `// Basic prompt
let name = prompt('What is your name?');
console.log(\`Hello, \\${name}!\`);

// Getting a number from user
let ageInput = prompt('How old are you?');
let age = Number(ageInput);  // MUST convert to number!
console.log(\`In 10 years you will be \\${age + 10}\`);

// Wrong way — forgetting to convert:
let wrong = prompt('Enter a number:');
console.log(wrong + 5);  // '425' if user typed 42 — concatenation!

// Right way:
let right = Number(prompt('Enter a number:'));
console.log(right + 5);  // 47 — actual math!

// Handling cancel
let color = prompt('Favorite color?');
if (color !== null) {
  console.log(\`\\${color} is a great color!\`);
} else {
  console.log('You cancelled.');
}

// confirm for yes/no
let agree = confirm('Do you accept the terms?');
console.log(\`Accepted: \\${agree}\`);  // true or false`,
          exercise: {
            prompt: `Build an interactive mini-program:
1. Use prompt() to ask 'What is your favorite color?'
2. Store the answer in a variable called color
3. Print: 'That is a great color!' (not including the color in the message)
4. Use prompt() again to ask 'How many letters does it have?'
5. Convert the answer to a number and store as letters
6. Print: "You counted [letters] letters!" using a template literal`,
            starterCode: `// Interactive greeter

// Step 1 & 2: Ask for favorite color


// Step 3: Print compliment


// Step 4 & 5: Ask for letter count (convert to number!)


// Step 6: Print count with template literal
`,
            solution: `let color = prompt('What is your favorite color?');
console.log('That is a great color!');
let letters = Number(prompt('How many letters does it have?'));
console.log(\`You counted \\${letters} letters!\`);`,
            tests: [
              { type: "contains", value: "prompt(" },
              { type: "contains", value: "color" },
              { type: "contains", value: "letters" }
            ],
            debuggingTip: `Common mistakes:
• Forgot to convert prompt result to number? prompt() always returns a string — use Number() before math.
• Program seems frozen? It might be waiting for prompt input — check if dialog appeared.
• prompt() showing 'undefined'? You called prompt without parentheses or without a question string.
• Adding prompt result to numbers giving weird output? 'prompt() returns string — convert with Number() first.
• Null error? If user clicks Cancel, prompt returns null. Add a null check before using the value.`
          }
        }
      ]
    },
    {
      id: "javascript-phase2-m1",
      title: "Phase 2 — Control Flow",
      duration: "2.5 hours",
      lessons: [
        {
          id: "javascript-phase2-m1-l1",
          title: "If / Else If / Else — Making Decisions",
          explanation: `Every interesting program makes decisions. Should it show a discount? Has the 
user reached the high score? Is the password correct? JavaScript's if/else 
chain evaluates conditions one by one — the first true condition wins, and 
the rest are skipped entirely. The final else is your safety net that runs 
when nothing else matched. This is fundamentally different from writing 
separate if statements (all of which would be checked independently). 
Mastering conditional logic is one of the most important skills in 
programming — you'll use it in virtually every program you write.`,
          concept: `if (condition) {
    // runs ONLY if condition is true
} else if (anotherCondition) {
    // runs if first is false AND this is true
} else {
    // runs if ALL conditions above were false
}
Only ONE branch runs — the first matching one, then JavaScript skips the rest.
Curly braces { } are technically optional for single statements but ALWAYS use them.
Ternary operator: condition ? valueIfTrue : valueIfFalse (one-line shorthand).
Truthy/falsy values work directly as conditions: if (username) — true if not empty.`,
          example: `let score = 73;
let temperature = 22;
let isRaining = false;

// Grade classifier
if (score >= 90) {
  console.log('A - Excellent!');
} else if (score >= 80) {
  console.log('B - Great!');
} else if (score >= 70) {
  console.log('C - Good');
} else if (score >= 60) {
  console.log('D - Needs work');
} else {
  console.log('F - Please retry');
}
// Output: C - Good

// Nested conditions
if (temperature > 20) {
  if (!isRaining) {
    console.log('Perfect day for a walk!');
  } else {
    console.log('Warm but rainy — take an umbrella.');
  }
}

// Ternary operator (one-liner)
let result = score >= 60 ? 'Pass' : 'Fail';
console.log(result);  // Pass

// Truthy check
let username = 'Alice';
if (username) {
  console.log(\`Welcome, \\${username}!\`);
} else {
  console.log('Please log in.');
}`,
          exercise: {
            prompt: `Build a comprehensive grade system:
1. Create let score = 73
2. Use if/else if/else to print the letter grade: 90+ → 'A', 80-89 → 'B', 70-79 → 'C', 60-69 → 'D', below 60 → 'F'
3. Use a ternary operator to print 'Pass' or 'Fail' based on score >= 60
4. Create let weather = 'sunny' and print a different activity for 'sunny', 'rainy', and anything else
5. Create let username = '' (empty string) and use a truthy check to print "Welcome!" or "Please log in"`,
            starterCode: `// Step 1: score variable
let score = 73;

// Step 2: Letter grade with if/else if/else


// Step 3: Pass/Fail with ternary


// Step 4: Weather activity check
let weather = 'sunny';


// Step 5: Truthy username check
let username = '';
`,
            solution: `let score = 73;
if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else if (score >= 70) {
  console.log('C');
} else if (score >= 60) {
  console.log('D');
} else {
  console.log('F');
}
console.log(score >= 60 ? 'Pass' : 'Fail');
let weather = 'sunny';
if (weather === 'sunny') {
  console.log('Go for a walk!');
} else if (weather === 'rainy') {
  console.log('Stay inside and code!');
} else {
  console.log('Check the forecast!');
}
let username = '';
if (username) {
  console.log('Welcome!');
} else {
  console.log('Please log in.');
}`,
            tests: [
              { type: "contains", value: "if (score >= 90)" },
              { type: "contains", value: "else if" },
              { type: "contains", value: "?" },
              { type: "contains", value: ":" }
            ],
            debuggingTip: `Common mistakes:
• Conditions in wrong order? Put most specific first — if (score >= 70) before (score >= 60), otherwise 73 hits the wrong branch.
• Missing curly braces? Without {}, only the next single line is in the if block — easy source of bugs.
• Used = instead of ===? if (weather = 'sunny') assigns instead of comparing — always use ===.
• Ternary missing colon? condition ? trueValue : falseValue — both ? and : are required.
• Else without if? Every else must follow a closing } of an if block.`
          }
        },
        {
          id: "javascript-phase2-m1-l2",
          title: "While Loops — Repeating Until Done",
          explanation: `A while loop keeps executing a block of code as long as a condition remains true. 
Think of it as an automatic repeat button that checks a condition before each 
press. "While the cart is not empty, process the next item." "While the user 
hasn't guessed correctly, ask again." "While there's data to read, process it." 
The critical responsibility: you MUST change something inside the loop that 
will eventually make the condition false. Forget this and you create an 
infinite loop — a program that runs forever and freezes the browser tab. 
Infinite loops are one of the most common beginner bugs.`,
          concept: `while (condition) {
    // code runs while condition is true
    // MUST update something to eventually make condition false!
}
Condition checked BEFORE each iteration — if false from start, body never runs.
do { } while (condition) — runs body ONCE then checks condition.
Common patterns: counting (i++), accumulating (sum += n), consuming input.
break exits the loop immediately.
continue skips rest of current iteration.`,
          example: `// Basic counting
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;  // CRITICAL: must increment or infinite loop!
}
// Output: 1 2 3 4 5

// Accumulating sum
let num = 1;
let sum = 0;
while (num <= 100) {
  sum += num;
  num++;
}
console.log(\`Sum 1 to 100: \\${sum}\`);  // 5050

// Countdown
let seconds = 5;
while (seconds > 0) {
  console.log(\`\\${seconds}...\`);
  seconds--;
}
console.log('Blast off! 🚀');

// Loop that might not run at all
let attempts = 10;
while (attempts > 10) {
  console.log('This never prints because 10 > 10 is false');
}

// do-while: always runs at least once
let x = 100;
do {
  console.log('Runs once even though 100 < 5 is false');
  x++;
} while (x < 5);`,
          exercise: {
            prompt: `Practice while loops:
1. Print numbers 1 to 10 using a while loop
2. Inside the same loop, accumulate a running sum — print sum after the loop
3. Print the average (sum / 10) after the loop
4. Create a second while loop that finds and prints the first number over 50 that is divisible by 7
5. Bonus: use a do-while loop to print "Checking..." at least once even if condition starts false`,
            starterCode: `// Step 1, 2, 3: Count and sum 1 to 10
let num = 1;
let sum = 0;

// While loop here


// Print sum and average after loop


// Step 4: Find first number over 50 divisible by 7
let n = 51;


// Step 5 (Bonus): do-while
`,
            solution: `let num = 1;
let sum = 0;
while (num <= 10) {
  console.log(num);
  sum += num;
  num++;
}
console.log(\`Sum: \\${sum}\`);
console.log(\`Average: \\${sum / 10}\`);
let n = 51;
while (n % 7 !== 0) {
  n++;
}
console.log(\`First number over 50 divisible by 7: \\${n}\`);
let done = false;
do {
  console.log('Checking...');
  done = true;
} while (!done);`,
            tests: [
              { type: "contains", value: "while (num <= 10)" },
              { type: "contains", value: "sum +=" },
              { type: "contains", value: "num++" }
            ],
            debuggingTip: `Common mistakes:
• Infinite loop (tab freezes)? You forgot to increment inside the loop — add num++ or num += 1.
• Off by one? while (num < 10) stops at 9. Use <= 10 to include 10.
• Sum not accumulating? Use sum += num not sum = num (which replaces instead of adds).
• Average calculated inside loop? Calculate it AFTER the loop when sum is complete.
• n++ getting stuck? If the condition can never become false, the loop runs forever. Check logic.`
          }
        },
        {
          id: "javascript-phase2-m1-l3",
          title: "For Loops — Precise Counted Repetition",
          explanation: `The for loop is the most used loop in JavaScript. It bundles the three things 
you always need for a counted loop into one clean line: where to start, when 
to stop, and how to step. This makes it perfect when you know exactly how 
many iterations you need. For loops shine when iterating through arrays 
(visiting every element), building sequences (generating tables, ranges), 
and repeating exact numbers of times. Modern JavaScript also has for...of 
(for arrays and iterables) and for...in (for object keys), giving you 
the right tool for every iteration need.`,
          concept: `for (let i = 0; i < 5; i++) {
    // body: runs 5 times (i = 0, 1, 2, 3, 4)
}
Part 1 - initialization: let i = 0 (runs once at start)
Part 2 - condition: i < 5 (checked before EACH iteration)
Part 3 - update: i++ (runs AFTER each iteration)
for...of: for (const item of array) — iterate array values (modern, clean)
for...in: for (const key in object) — iterate object keys
i++ is shorthand for i = i + 1
i-- decrements; i += 2 skips by 2`,
          example: `// Basic for loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4 5

// Counting down
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Skip by 2 (even numbers)
for (let i = 0; i <= 10; i += 2) {
  console.log(i);  // 0 2 4 6 8 10
}

// Multiplication table
for (let i = 1; i <= 10; i++) {
  console.log(\`4 × \\${i} = \\${4 * i}\`);
}

// for...of — iterate array values (very common in modern JS)
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit.toUpperCase());
}

// Nested loops — multiplication grid
for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 3; col++) {
    process.stdout.write(\`\\${row * col} \`);  // no newline
  }
  console.log();  // newline after each row
}`,
          exercise: {
            prompt: `Master the for loop:
1. Print numbers 0 through 7 with a for loop
2. Print numbers 10 through 15 with a second for loop
3. Print a multiplication table for 5: "5 x 1 = 5" through "5 x 10 = 50" using template literals
4. Use for...of to iterate const colors = ['red','green','blue'] and print each in uppercase
5. Bonus: print only odd numbers from 1 to 19 by stepping i += 2`,
            starterCode: `// Step 1: Numbers 0-7


// Step 2: Numbers 10-15


// Step 3: Multiplication table for 5


// Step 4: for...of with colors array
const colors = ['red', 'green', 'blue'];


// Step 5 (Bonus): Odd numbers 1-19
`,
            solution: `for (let i = 0; i <= 7; i++) {
  console.log(i);
}
for (let j = 10; j <= 15; j++) {
  console.log(j);
}
for (let i = 1; i <= 10; i++) {
  console.log(\`5 x \\${i} = \\${5 * i}\`);
}
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(color.toUpperCase());
}
for (let i = 1; i <= 19; i += 2) {
  console.log(i);
}`,
            tests: [
              { type: "contains", value: "i <= 7" },
              { type: "contains", value: "j <= 15" },
              { type: "contains", value: "5 * i" }
            ],
            debuggingTip: `Common mistakes:
• Loop runs one too many or too few times? Check < vs <= carefully. i < 7 stops at 6, i <= 7 includes 7.
• Semicolons in wrong place? for (let i = 0; i < 5; i++) uses semicolons, NOT commas.
• Nested loop variable conflict? Use different variable names: outer i, inner j.
• for...of vs for...in? for...of gives VALUES (use for arrays). for...in gives KEYS (use for objects).
• i++ vs i += 2? i++ adds 1 each time. i += 2 skips by 2 (for even/odd patterns).`
          }
        },
        {
          id: "javascript-phase2-m1-l4",
          title: "Break and Continue — Controlling Loop Flow",
          explanation: `Sometimes a loop needs to exit early — you found the item you were searching 
for and continuing would waste time. Sometimes you need to skip certain 
iterations — processing only valid records, ignoring comments in a file. 
break and continue are your precision tools. break is an emergency exit — 
it stops the loop entirely and jumps to the first line after the closing }. 
continue is a skip button — it abandons the current iteration and jumps 
back to the loop's condition check. Both are used heavily in search 
algorithms, data filtering, and input validation.`,
          concept: `break    → immediately exits the entire loop
continue → skips rest of current iteration, goes back to check condition
Both work in for, while, and do-while loops.
In nested loops, break/continue only affects the INNERMOST loop.
Labeled statements (outerLoop:) allow breaking outer loops — rare but useful.
Alternative to break: set a flag variable that makes condition false.`,
          example: `// continue: skip specific iterations
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;  // skip even numbers
  console.log(i);  // prints: 1 3 5 7 9
}

// break: stop early when target found
let target = 7;
for (let i = 0; i <= 100; i++) {
  if (i === target) {
    console.log(\`Found \\${target} at index \\${i}\`);
    break;  // stop searching — we found it!
  }
}

// Combining both: skip 4, stop at 8
for (let i = 0; i < 10; i++) {
  if (i === 4) continue;   // skip 4
  if (i === 8) break;      // stop before 8
  console.log(i);
}
// Output: 0 1 2 3 5 6 7

// Practical: find first string longer than 5 chars
const words = ['hi', 'hello', 'hey', 'programming', 'code'];
let longWord = null;
for (const word of words) {
  if (word.length > 5) {
    longWord = word;
    break;
  }
}
console.log(\`First long word: \\${longWord}\`);  // programming`,
          exercise: {
            prompt: `Practice break and continue:
1. Loop from 0 to 9: skip 4 with continue, stop at 8 with break — print the rest
2. Use break to find the first number between 1 and 100 that is divisible by both 3 and 11 — print it
3. Use continue to print only numbers from 1 to 20 that are NOT divisible by 3
4. Bonus: given words = ['cat', 'elephant', 'dog', 'hippopotamus', 'ant'], find and print the first word longer than 6 characters using break`,
            starterCode: `// Step 1: Loop 0-9, skip 4, break at 8


// Step 2: Find first number divisible by 3 AND 11
for (let i = 1; i <= 100; i++) {
  
}

// Step 3: Numbers 1-20 NOT divisible by 3


// Step 4 (Bonus): First word longer than 6 chars
const words = ['cat', 'elephant', 'dog', 'hippopotamus', 'ant'];
`,
            solution: `for (let i = 0; i < 10; i++) {
  if (i === 4) continue;
  if (i === 8) break;
  console.log(i);
}
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 11 === 0) {
    console.log(\`First divisible by 3 and 11: \\${i}\`);
    break;
  }
}
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}
const words = ['cat', 'elephant', 'dog', 'hippopotamus', 'ant'];
for (const word of words) {
  if (word.length > 6) {
    console.log(\`First long word: \\${word}\`);
    break;
  }
}`,
            tests: [
              { type: "contains", value: "continue" },
              { type: "contains", value: "break" },
              { type: "contains", value: "% 3 === 0" }
            ],
            debuggingTip: `Common mistakes:
• console.log BEFORE continue/break? The log runs before the skip/stop. Put the log AFTER the checks.
• break in nested loop? Only exits the innermost loop. You need labeled breaks or a flag to exit outer loops.
• continue in a while loop? Make sure the increment runs — if it's after continue, it'll be skipped causing infinite loop.
• Searching and not finding? Check your condition — maybe no element matches. Add a default after the loop.
• Off by one in loop range? If searching 1-100, use i <= 100 not i < 100.`
          }
        },
        {
          id: "javascript-phase2-m1-l5",
          title: "Capstone: Number Guessing Game",
          explanation: `You now have all the tools to build a complete interactive program. The guessing 
game is a classic beginner project because it naturally combines every concept: 
a variable stores the secret number, a while loop keeps the game going, 
an if/else chain gives feedback, and prompt() gets input each time. This 
is stateful programming — the game remembers the secret and tracks attempts 
across multiple loop iterations. The same pattern appears in login systems 
(retry until correct), games (play until game over), and search UIs 
(keep searching until result found).`,
          concept: `This capstone combines: variables (secret, guess, attempts), while loop 
(continue while guess is wrong), Number(prompt()) for input conversion, 
if/else if for feedback, and template literals for the final message.
Key insight: guess must be updated INSIDE the loop — otherwise it never changes.
attempts++ inside the loop counts how many tries it took.`,
          example: `// Complete guessing game
let secret = 42;
let guess = 0;
let attempts = 0;

console.log('Guess my number between 1 and 100!');

while (guess !== secret) {
  guess = Number(prompt('Your guess: '));
  attempts++;
  
  if (guess < secret) {
    console.log('Too low! Try higher. 📈');
  } else if (guess > secret) {
    console.log('Too high! Try lower. 📉');
  }
  // If guess === secret, loop condition becomes false → exits
}

console.log(\`🎉 You got it in \\${attempts} attempt(s)!\`);`,
          exercise: {
            prompt: `Build the complete number guessing game:
1. Set: let secret = 5, let guess = 0, let attempts = 0
2. Start a while loop that continues while guess !== secret
3. Inside: get guess from prompt, convert to number, increment attempts
4. If too low: print 'Higher!'
5. If too high: print 'Lower!'
6. After the loop: print 'You got it!' and how many attempts using a template literal`,
            starterCode: `// Number Guessing Game
let secret = 5;
let guess = 0;
let attempts = 0;

// Step 2: While loop


  // Step 3: Get guess and count attempt
  
  
  // Step 4: Too low feedback
  
  
  // Step 5: Too high feedback
  

// Don't forget the closing brace for the while loop

// Step 6: Victory message
`,
            solution: `let secret = 5;
let guess = 0;
let attempts = 0;
while (guess !== secret) {
  guess = Number(prompt('Guess the number: '));
  attempts++;
  if (guess < secret) {
    console.log('Higher!');
  } else if (guess > secret) {
    console.log('Lower!');
  }
}
console.log('You got it!');
console.log(\`It took \\${attempts} attempt(s).\`);`,
            tests: [
              { type: "contains", value: "while (guess !== secret)" },
              { type: "contains", value: "Number(prompt" },
              { type: "contains", value: "console.log('You got it!')" }
            ],
            debuggingTip: `Common mistakes:
• Infinite loop? Make sure guess = Number(prompt(...)) is INSIDE the while loop — not outside.
• Wrong feedback direction? If guess < secret the number is too low so player should go HIGHER.
• Forgot Number()? prompt returns a string — '5' !== 5 in strict comparison, loop never ends.
• attempts not counting? Make sure attempts++ is inside the loop body.
• Game ends immediately? guess starts at 0 and secret is 5, so 0 !== 5 should keep looping — check your condition.`
          }
        }
      ]
    },
    // ============================================================
    // Phase 3 — Functions
    // ============================================================
    {
      id: "javascript-phase3-m1",
      title: "Phase 3 — Functions",
      duration: "2.5 hours",
      lessons: [
        {
          id: "javascript-phase3-m1-l1",
          title: "Defining Functions — Reusable Code Blocks",
          explanation: `Functions are the single most important concept in JavaScript. A function 
packages a block of code under a name so you can run it whenever you need it, 
as many times as you need it, without rewriting it. This is the DRY principle: 
Don't Repeat Yourself. Instead of writing the same calculation in five places, 
write it once as a function and call it five times. Functions also make code 
dramatically easier to read — a well-named function like calculateTax() or 
validateEmail() communicates its purpose instantly. Every piece of real 
JavaScript code — from simple scripts to React apps to Node.js servers — 
is built from functions working together.`,
          concept: `function functionName() {
    // code here
}
functionName();  → call (execute) the function

Function declaration: hoisted — can be called BEFORE it's defined in the file.
Function expression: const fn = function() { } — NOT hoisted, define before calling.
Functions without return give back undefined automatically.
Function names use camelCase: calculateArea, printHeader, getUserName.
Parameters go inside the parentheses: function greet(name) { }`,
          example: `// Function declaration (hoisted — can call before defining)
function sayHello() {
  console.log('Hello!');
  console.log('Welcome to JavaScript.');
}

// Calling it multiple times — same code, no repetition
sayHello();
sayHello();
sayHello();

// Functions can call other functions
function printSeparator() {
  console.log('='.repeat(30));
}

function printMenu() {
  printSeparator();
  console.log('       MAIN MENU');
  printSeparator();
  console.log('1. Start Game');
  console.log('2. Settings');
  console.log('3. Quit');
  printSeparator();
}

printMenu();

// Hoisting example — works even though function is below
greetEarly();  // Works! Function declarations are hoisted

function greetEarly() {
  console.log('I was called before I was defined!');
}`,
          exercise: {
            prompt: `Build a collection of useful functions:
1. Define function sayMotto() that prints 'Keep coding!' and 'Never give up!' — call it twice
2. Define function printHeader() that prints 20 asterisks, then 'JAVASCRIPT PROGRAM', then 20 more asterisks — call it once
3. Define function countDown() that uses a for loop to print 3, 2, 1, then 'Blast off!' — call it once
4. Bonus: define function printDivider(char, length) that prints any character repeated any number of times`,
            starterCode: `// Step 1: Define sayMotto and call twice


// Step 2: Define printHeader and call once


// Step 3: Define countDown and call once


// Step 4 (Bonus): printDivider with parameters

`,
            solution: `function sayMotto() {
  console.log('Keep coding!');
  console.log('Never give up!');
}
sayMotto();
sayMotto();

function printHeader() {
  console.log('*'.repeat(20));
  console.log('JAVASCRIPT PROGRAM');
  console.log('*'.repeat(20));
}
printHeader();

function countDown() {
  for (let i = 3; i >= 1; i--) {
    console.log(i);
  }
  console.log('Blast off!');
}
countDown();

function printDivider(char, length) {
  console.log(char.repeat(length));
}
printDivider('-', 25);`,
            tests: [
              { type: "contains", value: "function sayMotto()" },
              { type: "contains", value: "function printHeader()" },
              { type: "contains", value: "sayMotto();" }
            ],
            debuggingTip: `Common mistakes:
• Defined a function but nothing prints? Defining it doesn't run it — you must CALL it: sayMotto()
• Function not found error? Check spelling — JavaScript is case-sensitive: sayMotto() not SayMotto()
• Code inside function running on its own? It shouldn't — only runs when called. Check you didn't accidentally call it.
• Function expression called before it's defined? const fn = function(){} is NOT hoisted — define before calling.
• Missing parentheses on call? sayMotto without () just references the function — it doesn't call it.`
          }
        },
        {
          id: "javascript-phase3-m1-l2",
          title: "Parameters and Return Values",
          explanation: `A function without parameters always does the exact same thing — useful, but 
limited. Parameters make functions flexible: you give them input, they 
do something with it. Return values make functions powerful: they calculate 
something and hand you back the result so you can use it however you want. 
Think of a function as a vending machine — parameters are what you put in, 
the return value is what comes out. The return statement does two things: 
it sends a value back to whoever called the function, AND it immediately 
exits the function. Code after return never runs. This pattern of 
input → process → output is the foundation of all functional thinking.`,
          concept: `function name(param1, param2) {
    return result;  // sends value back and exits function
}
const result = name(arg1, arg2);  // capture return value

Parameters are LOCAL to the function — they don't exist outside it.
return without a value returns undefined.
A function can have multiple return statements (early returns are common).
Default parameters: function greet(name = 'friend') — used if argument not provided.
Excess arguments are ignored. Missing arguments are undefined.`,
          example: `// Basic parameter and return
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));   // 7
console.log(add(10, 20)); // 30
const sum = add(5, 5);
console.log(sum);          // 10

// Return value used in expression
console.log(add(2, 3) * 10);  // 50

// Multiple parameters, different types
function createMessage(name, score, passed) {
  if (passed) {
    return \`Congratulations \\${name}! You scored \\${score} and passed.\`;
  } else {
    return \`Sorry \\${name}. You scored \\${score}. Please retry.\`;
  }
}
console.log(createMessage('Alice', 85, true));
console.log(createMessage('Bob', 45, false));

// Default parameters (modern JS)
function greet(name = 'friend', greeting = 'Hello') {
  return \`\\${greeting}, \\${name}!\`;
}
console.log(greet('Alice', 'Hi'));  // Hi, Alice!
console.log(greet('Bob'));           // Hello, Bob!
console.log(greet());               // Hello, friend!

// Early return pattern
function divide(a, b) {
  if (b === 0) return 'Cannot divide by zero';  // early exit
  return a / b;
}
console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // Cannot divide by zero`,
          exercise: {
            prompt: `Build functions with parameters and return values:
1. Write function multiply(a, b) that returns the product — call with (4, 7), store and print result
2. Write function celsiusToFahrenheit(c) that returns (c * 9/5) + 32 — test with 0, 100, and 37
3. Write function isEven(n) that returns true if n is even, false if odd — test with 4 and 7
4. Write function clamp(value, min, max) that returns value if in range, min if too low, max if too high — test with (5, 1, 10), (-3, 1, 10), (15, 1, 10)
5. Write function greetUser(name = 'stranger') with a default parameter — call with and without an argument`,
            starterCode: `// Step 1: multiply
function multiply(a, b) {
  
}
const product = multiply(4, 7);
console.log(product);

// Step 2: celsiusToFahrenheit


// Step 3: isEven


// Step 4: clamp


// Step 5: greetUser with default parameter

`,
            solution: `function multiply(a, b) {
  return a * b;
}
const product = multiply(4, 7);
console.log(product);

function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(37));

function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
console.log(clamp(5, 1, 10));
console.log(clamp(-3, 1, 10));
console.log(clamp(15, 1, 10));

function greetUser(name = 'stranger') {
  return \`Hello, \\${name}!\`;
}
console.log(greetUser('Alice'));
console.log(greetUser());`,
            tests: [
              { type: "contains", value: "return a * b" },
              { type: "contains", value: "multiply(4, 7)" },
              { type: "contains", value: "return n % 2 === 0" }
            ],
            debuggingTip: `Common mistakes:
• Used console.log inside function instead of return? You can't capture that value. Use return for values you need outside.
• Forgot to capture return value? const result = multiply(4, 7) captures it. Just multiply(4, 7) throws it away.
• Temperature formula wrong? 9/5 in JS = 1.8 (not integer division like Java). Still double-check the formula: (c * 9/5) + 32.
• Default parameter overriding? greetUser(undefined) uses the default. greetUser(null) uses null — null is not undefined.
• Parameters are local — trying to use them outside the function gives ReferenceError.`
          }
        },
        {
          id: "javascript-phase3-m1-l3",
          title: "Arrow Functions — Modern JavaScript Syntax",
          explanation: `Arrow functions are one of the most important features of modern JavaScript, 
introduced in ES6. They provide a shorter, cleaner syntax for writing functions. 
You'll see them absolutely everywhere in real JavaScript code — in React 
components, array methods, event handlers, and callbacks. Beyond being shorter, 
arrow functions also behave differently with the 'this' keyword (they don't 
have their own 'this'), which makes them preferred in many modern patterns. 
Understanding arrow functions is essential for reading and writing any 
contemporary JavaScript.`,
          concept: `// Traditional function:
function add(a, b) { return a + b; }

// Arrow function equivalents:
const add = (a, b) => a + b;           // single expression — implicit return
const add = (a, b) => { return a + b; } // block body — explicit return needed

// Single parameter — parentheses optional:
const double = x => x * 2;
const double = (x) => x * 2;  // both work

// No parameters — parentheses required:
const greet = () => 'Hello!';

// Multi-line — use curly braces and explicit return:
const process = (x) => {
  const doubled = x * 2;
  return doubled + 1;
};`,
          example: `// Traditional vs arrow comparison
function square(x) { return x * x; }
const squareArrow = x => x * x;

console.log(square(4));       // 16
console.log(squareArrow(4));  // 16

// Common arrow function patterns
const double = x => x * 2;
const isPositive = n => n > 0;
const greet = name => \`Hello, \\${name}!\`;
const add = (a, b) => a + b;
const noParams = () => 'No input needed';

console.log(double(7));         // 14
console.log(isPositive(-3));    // false
console.log(greet('Alice'));    // Hello, Alice!
console.log(add(10, 5));       // 15
console.log(noParams());        // No input needed

// Multi-line arrow function
const getGrade = score => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  return 'F';
};
console.log(getGrade(85));  // B

// Arrow functions shine in array methods (preview!)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]`,
          exercise: {
            prompt: `Convert and create arrow functions:
1. Create arrow function 'square' that takes one argument and returns its square — test with 4 and 9
2. Create arrow function 'fullName' that takes firstName and lastName and returns them combined with a space
3. Create arrow function 'isAdult' that returns true if age >= 18
4. Create arrow function 'clamp' (no parentheses trick: use (val, min, max)) that returns val kept between min and max
5. Rewrite this traditional function as an arrow function: function double(x) { return x * 2; }
6. Create a multi-line arrow function 'describeNumber' that returns 'positive', 'negative', or 'zero'`,
            starterCode: `// Step 1: square arrow function


// Step 2: fullName arrow function


// Step 3: isAdult arrow function


// Step 4: clamp arrow function


// Step 5: Rewrite as arrow function
// Original: function double(x) { return x * 2; }
const double =

// Step 6: Multi-line arrow function describeNumber
const describeNumber = num => {

};
console.log(describeNumber(5));
console.log(describeNumber(-3));
console.log(describeNumber(0));`,
            solution: `const square = x => x * x;
console.log(square(4));
console.log(square(9));

const fullName = (firstName, lastName) => \`\\${firstName} \\${lastName}\`;
console.log(fullName('John', 'Doe'));

const isAdult = age => age >= 18;
console.log(isAdult(20));
console.log(isAdult(15));

const clamp = (val, min, max) => {
  if (val < min) return min;
  if (val > max) return max;
  return val;
};
console.log(clamp(5, 1, 10));

const double = x => x * 2;
console.log(double(7));

const describeNumber = num => {
  if (num > 0) return 'positive';
  if (num < 0) return 'negative';
  return 'zero';
};
console.log(describeNumber(5));
console.log(describeNumber(-3));
console.log(describeNumber(0));`,
            tests: [
              { type: "contains", value: "=> x * x" },
              { type: "contains", value: "square(4)" },
              { type: "contains", value: "=>" }
            ],
            debuggingTip: `Common mistakes:
• Single expression arrow but using curly braces? If you add {}, you MUST also add return. x => x * 2 is fine, x => { x * 2 } returns undefined.
• Forgot parentheses for multiple parameters? x, y => x + y is invalid. Use (x, y) => x + y.
• Arrow function assigned to const but called before declaration? Unlike function declarations, const arrow functions are NOT hoisted.
• Multi-line arrow without return? With curly braces { }, you need explicit return for every path.
• Using 'this' inside arrow function unexpectedly? Arrow functions inherit 'this' from surrounding scope — important in classes and event handlers.`
          }
        },
        {
          id: "javascript-phase3-m1-l4",
          title: "Scope — Where Variables Live",
          explanation: `Scope is one of the most important concepts to understand in JavaScript — and 
one of the most confusing for beginners. Scope determines which parts of your 
code can access which variables. JavaScript has three levels: global scope 
(accessible everywhere), function scope (accessible only inside the function), 
and block scope (accessible only inside the { } block, with let and const). 
Understanding scope prevents a whole category of bugs: accidentally using a 
variable from the wrong context, naming conflicts, and unexpected values. 
The old var keyword had confusing scope rules — another reason to always 
use let and const.`,
          concept: `Global scope: variable declared outside any function or block — accessible everywhere.
Function scope: variable declared inside a function — only accessible inside that function.
Block scope: variable declared with let/const inside { } — only accessible inside that block.
var ignores block scope (only has function scope) — avoid it!
Closure: a function that remembers variables from its outer scope even after that scope ends.
Variable shadowing: inner variable with same name as outer — inner one takes precedence.`,
          example: `// Global scope — accessible everywhere
const appName = 'FluentCode';

function showApp() {
  console.log(appName);  // Can access global variable
}
showApp();  // FluentCode

// Function scope — only inside the function
function calculate() {
  let result = 42;  // only exists inside calculate()
  console.log(result);  // 42
}
calculate();
// console.log(result);  // ReferenceError! result is not defined here

// Block scope with let/const
if (true) {
  let blockVar = 'I am block scoped';
  const blockConst = 'Me too';
  console.log(blockVar);    // Works fine
}
// console.log(blockVar);  // ReferenceError! outside the block

// var IGNORES block scope (confusing — avoid var!)
if (true) {
  var leakyVar = 'I leak out of blocks!';
}
console.log(leakyVar);  // Works — this is why var causes bugs!

// Closure — function remembers its outer scope
function makeCounter() {
  let count = 0;  // lives in makeCounter's scope
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3 — count persists!`,
          exercise: {
            prompt: `Explore scope in JavaScript:
1. Create a global variable 'appVersion' = '1.0.0'
2. Create a function showVersion() that accesses and prints appVersion — call it
3. Inside showVersion, create a local variable 'message' — try to access it outside (observe the error)
4. Use a for loop with let i: after the loop, try to log i — what happens?
5. Create function makeGreeter(greeting) that returns an arrow function taking a name — returning greeting + name. Call it to create a 'hello' greeter and a 'hi' greeter, then test both`,
            starterCode: `// Step 1: Global variable
const appVersion = '1.0.0';

// Step 2: Function that uses global


// Step 3: Try to access local variable outside function
function showVersion() {
  let message = 'Version: ' + appVersion;
  console.log(message);
}
showVersion();
// Try this (it will error): console.log(message);

// Step 4: Block scope with for loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// Try this (it will error): console.log(i);

// Step 5: Closure — makeGreeter
function makeGreeter(greeting) {
  
}
const hello = makeGreeter('Hello');
const hi = makeGreeter('Hi');
console.log(hello('Alice'));
console.log(hi('Bob'));`,
            solution: `const appVersion = '1.0.0';

function showVersion() {
  let message = 'Version: ' + appVersion;
  console.log(message);
}
showVersion();

for (let i = 0; i < 3; i++) {
  console.log(i);
}

function makeGreeter(greeting) {
  return name => \`\\${greeting}, \\${name}!\`;
}
const hello = makeGreeter('Hello');
const hi = makeGreeter('Hi');
console.log(hello('Alice'));
console.log(hi('Bob'));`,
            tests: [
              { type: "contains", value: "appVersion" },
              { type: "contains", value: "makeGreeter" },
              { type: "contains", value: "return" }
            ],
            debuggingTip: `Common mistakes:
• ReferenceError accessing variable outside its scope? Variables declared with let/const inside {} don't exist outside.
• Variable from outer scope not accessible inside function? Check spelling — it might be a new variable shadowing the outer one.
• Used var in a for loop and confused by i existing after? That's why we use let — it's properly block-scoped.
• Closure returning wrong value? The inner function captures the variable REFERENCE, not the value — changes to the variable affect the closure.
• Global variables overused? Too many globals cause naming conflicts and make code hard to debug. Keep variables as local as possible.`
          }
        }
      ]
    },
    {
      id: "javascript-phase4-m1",
      title: "Phase 4 — Arrays and Objects",
      duration: "2.5 hours",
      lessons: [
        {
          id: "javascript-phase4-m1-l1",
          title: "Arrays — Ordered Collections",
          explanation: `An array is an ordered list of values. Instead of creating ten separate variables 
for ten scores (score1, score2... score10), you create one array that holds all 
ten. Arrays are one of the most used data structures in all of programming — 
shopping carts, search results, user lists, playlist songs, leaderboard scores. 
JavaScript arrays are flexible in a way other languages aren't: they can hold 
mixed types (numbers, strings, booleans, even other arrays and objects), and 
they grow and shrink dynamically. The array's built-in methods like push, pop, 
shift, and splice give you everything you need to manage lists of data.`,
          concept: `const arr = [1, 2, 3];        → create with square brackets
arr[0]                        → first element (index starts at 0)
arr[arr.length - 1]           → last element (safe way)
arr.push(value)               → add to END (returns new length)
arr.pop()                     → remove from END (returns removed element)
arr.unshift(value)            → add to BEGINNING
arr.shift()                   → remove from BEGINNING
arr.length                    → number of elements
arr.includes(value)           → true if value exists
arr.indexOf(value)            → index of first match (-1 if not found)
arr.join(', ')                → convert to string with separator`,
          example: `// Creating arrays
const fruits = ['apple', 'banana', 'cherry'];
const numbers = [10, 20, 30, 40, 50];
const mixed = ['hello', 42, true, null];  // mixed types!

// Accessing elements
console.log(fruits[0]);    // apple (first)
console.log(fruits[2]);    // cherry (last — index 2)
console.log(fruits[fruits.length - 1]);  // cherry (safe last)
console.log(fruits[-1]);   // undefined (JS doesn't support negative indices directly)

// Modifying
fruits.push('date');       // add to end: ['apple','banana','cherry','date']
fruits.pop();              // remove from end: ['apple','banana','cherry']
fruits.unshift('avocado'); // add to start: ['avocado','apple','banana','cherry']
fruits.shift();            // remove from start: ['apple','banana','cherry']

// Useful operations
console.log(fruits.length);          // 3
console.log(fruits.includes('banana')); // true
console.log(fruits.indexOf('cherry')); // 2
console.log(fruits.join(' | '));      // apple | banana | cherry

// Spread operator — copy or combine arrays
const moreFruits = [...fruits, 'elderberry', 'fig'];
console.log(moreFruits);

// Destructuring — extract values into variables
const [first, second, ...rest] = moreFruits;
console.log(first);   // apple
console.log(second);  // banana
console.log(rest);    // ['cherry', 'elderberry', 'fig']`,
          exercise: {
            prompt: `Build an array management system:
1. Create const colors = ['red', 'green', 'blue']
2. Print the first and second color using index access
3. Add 'yellow' to the end with push and print the array
4. Add 'purple' to the beginning with unshift and print the array
5. Remove the last color with pop, store and print the removed color
6. Print the array length and whether 'green' is included
7. Print all colors joined with ' -> ' using .join()`,
            starterCode: `// Step 1: Create colors array
const colors = ['red', 'green', 'blue'];

// Step 2: Print first and second


// Step 3: Push 'yellow' and print


// Step 4: Unshift 'purple' and print


// Step 5: Pop last and print it


// Step 6: Length and includes check


// Step 7: Join with arrow
`,
            solution: `const colors = ['red', 'green', 'blue'];
console.log(colors[0]);
console.log(colors[1]);
colors.push('yellow');
console.log(colors);
colors.unshift('purple');
console.log(colors);
const removed = colors.pop();
console.log(removed);
console.log(colors.length);
console.log(colors.includes('green'));
console.log(colors.join(' -> '));`,
            tests: [
              { type: "contains", value: "colors[0]" },
              { type: "contains", value: "colors.push" },
              { type: "contains", value: "colors.length" },
              { type: "contains", value: ".includes(" }
            ],
            debuggingTip: `Common mistakes:
• Used colors[-1] for last element? JavaScript doesn't support negative indices — use colors[colors.length - 1].
• push vs unshift? push adds to END. unshift adds to BEGINNING. pop removes from END. shift removes from BEGINNING.
• Trying to use const array but getting error on push? const means the variable can't be REASSIGNED, but you can still modify array contents.
• indexOf returning -1? The value isn't in the array — check spelling and case (case-sensitive).
• join vs toString? join lets you specify separator. toString uses commas. arr.join('') combines with no separator.`
          }
        },
        {
          id: "javascript-phase4-m1-l2",
          title: "Array Methods — map, filter, reduce",
          explanation: `JavaScript's array methods are among its most powerful features. Instead of 
writing manual for loops to transform data, these methods let you express 
what you want clearly and concisely. map() transforms every element and 
returns a new array — perfect for converting data formats. filter() 
keeps only elements matching a condition — perfect for searching. 
reduce() collapses an array into a single value — perfect for totals, 
maximums, or building objects from lists. In modern JavaScript and 
React development, these three methods replace most loops. 
Mastering them is a major step toward professional-level code.`,
          concept: `arr.map(fn)      → transform EVERY element, returns NEW array of same length
arr.filter(fn)   → keep elements where fn returns true, returns NEW smaller array
arr.reduce(fn, initial) → fold array into single value
arr.forEach(fn)  → run fn for each element, returns nothing (use for side effects)
arr.find(fn)     → returns FIRST element where fn is true (or undefined)
arr.some(fn)     → true if AT LEAST ONE element satisfies fn
arr.every(fn)    → true if ALL elements satisfy fn
arr.sort(fn)     → sorts IN PLACE (modifies original!)
arr.flat()       → flattens nested arrays one level
None of these modify the original array (except sort and splice).`,
          example: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map — transform every element
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2,4,6,8,10,12,14,16,18,20]

const squared = numbers.map(n => n ** 2);
console.log(squared);  // [1,4,9,16,25,36,49,64,81,100]

// filter — keep matching elements
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);    // [2,4,6,8,10]

const bigNums = numbers.filter(n => n > 7);
console.log(bigNums);  // [8,9,10]

// reduce — collapse to single value
const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum);      // 55

const product = numbers.reduce((acc, n) => acc * n, 1);
console.log(product);  // 3628800

// Chaining methods
const result = numbers
  .filter(n => n % 2 === 0)   // keep evens: [2,4,6,8,10]
  .map(n => n * 3)             // triple them: [6,12,18,24,30]
  .filter(n => n > 10);        // keep > 10: [12,18,24,30]
console.log(result);

// find, some, every
console.log(numbers.find(n => n > 7));   // 8 (first match)
console.log(numbers.some(n => n > 9));   // true (10 > 9)
console.log(numbers.every(n => n > 0));  // true (all positive)

// Working with objects in arrays (very common!)
const people = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 32 }
];
const adults = people.filter(p => p.age >= 18);
const names = people.map(p => p.name);
console.log(adults);  // Alice and Charlie
console.log(names);   // ['Alice', 'Bob', 'Charlie']`,
          exercise: {
            prompt: `Master array methods:
1. Given nums = [1,2,3,4,5], use map() to create an array of squares — print it
2. Use filter() to keep only numbers greater than 3 — print it
3. Use reduce() to calculate the sum of all numbers — print it
4. Chain: filter numbers > 2, then map to double them, then print the result
5. Given people = [{name:'Alice',age:28},{name:'Bob',age:17},{name:'Eve',age:22}]:
   - Filter for adults (age >= 18) and print their names using map()
   - Use find() to get the first person under 25
   - Use every() to check if all people are over 16`,
            starterCode: `const nums = [1, 2, 3, 4, 5];

// Step 1: map to squares


// Step 2: filter > 3


// Step 3: reduce to sum


// Step 4: Chain filter > 2, then map to double


// Step 5: Work with people array
const people = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 17 },
  { name: 'Eve', age: 22 }
];

// Filter adults and get their names


// Find first person under 25


// Check if everyone is over 16
`,
            solution: `const nums = [1, 2, 3, 4, 5];
const squares = nums.map(n => n ** 2);
console.log(squares);

const bigNums = nums.filter(n => n > 3);
console.log(bigNums);

const sum = nums.reduce((total, n) => total + n, 0);
console.log(sum);

const chained = nums.filter(n => n > 2).map(n => n * 2);
console.log(chained);

const people = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 17 },
  { name: 'Eve', age: 22 }
];

const adultNames = people.filter(p => p.age >= 18).map(p => p.name);
console.log(adultNames);

const firstYoung = people.find(p => p.age < 25);
console.log(firstYoung);

const allOver16 = people.every(p => p.age > 16);
console.log(allOver16);`,
            tests: [
              { type: "contains", value: ".map(" },
              { type: "contains", value: ".filter(" },
              { type: "contains", value: ".reduce(" },
              { type: "contains", value: ".find(" }
            ],
            debuggingTip: `Common mistakes:
• map() returning undefined for each element? Your arrow function doesn't return a value. Add return or remove curly braces.
• filter() returning empty array? Your condition is never true. Log each element to check.
• reduce() without initial value? reduce((acc, n) => acc + n) works but fails on empty arrays. Always provide initial value: reduce((acc, n) => acc + n, 0).
• Chaining order matters! filter().map() filters first then transforms. map().filter() transforms first — different results.
• sort() modifying original? Yes — sort() mutates. Use [...arr].sort() to sort a copy.`
          }
        },
        {
          id: "javascript-phase4-m1-l3",
          title: "Objects — Key-Value Data Structures",
          explanation: `Objects are JavaScript's most versatile data structure. Where arrays are for 
ordered lists of similar things (a list of scores, a list of names), objects 
are for structured data about ONE thing (a user's profile, a product, a 
configuration). Every meaningful piece of data in a JavaScript application 
is typically represented as an object: a user with name, email, and age; 
a product with title, price, and stock; a request with url, method, and 
headers. Understanding objects — how to create them, access their data, 
update them, and iterate through them — is absolutely fundamental to 
JavaScript development.`,
          concept: `const obj = { key: value, key2: value2 };  → object literal
obj.key           → dot notation access (preferred when key is known)
obj['key']        → bracket notation (use when key is dynamic/variable)
obj.newKey = val  → add new property
delete obj.key    → remove property
Object.keys(obj)  → array of all keys
Object.values(obj) → array of all values
Object.entries(obj) → array of [key, value] pairs
Spread: const copy = { ...obj }
Destructuring: const { name, age } = person;`,
          example: `// Creating objects
const person = {
  name: 'Sofia',
  age: 29,
  city: 'Rome',
  isStudent: false
};

// Accessing properties
console.log(person.name);     // Sofia (dot notation)
console.log(person['age']);   // 29 (bracket notation)

// Dynamic key access
const key = 'city';
console.log(person[key]);     // Rome (bracket notation with variable)
// person.key would look for property literally named "key"!

// Modifying
person.email = 'sofia@example.com';  // add new property
person.age = 30;                     // update existing
delete person.isStudent;             // remove property
console.log(person);

// Object methods
console.log(Object.keys(person));    // ['name', 'age', 'city', 'email']
console.log(Object.values(person));  // ['Sofia', 30, 'Rome', 'sofia@example.com']

// Iterating over entries
for (const [key, value] of Object.entries(person)) {
  console.log(\`\\${key}: \\${value}\`);
}

// Destructuring — extract into variables
const { name, age, city = 'Unknown' } = person;
console.log(name, age, city);  // Sofia 30 Rome

// Spread — copy object
const personCopy = { ...person, age: 31 };  // copy and override age
console.log(personCopy.age);  // 31
console.log(person.age);      // 30 (original unchanged)`,
          exercise: {
            prompt: `Build and manipulate an object:
1. Create const book = { title: '1984', author: 'Orwell', pages: 328 }
2. Print the title using dot notation
3. Print the author using bracket notation with a variable: const key = 'author'
4. Add property 'year' = 1949 and update 'pages' to 400 — print the whole object
5. Use Object.keys() to print all keys, Object.values() to print all values
6. Use destructuring to extract title, author, and year into variables — print them
7. Iterate over Object.entries() and print each as "key: value"`,
            starterCode: `// Step 1: Create book object
const book = { title: '1984', author: 'Orwell', pages: 328 };

// Step 2: Dot notation


// Step 3: Bracket notation with variable
const key = 'author';


// Step 4: Add year, update pages


// Step 5: Object.keys and Object.values


// Step 6: Destructuring


// Step 7: Iterate entries
`,
            solution: `const book = { title: '1984', author: 'Orwell', pages: 328 };
console.log(book.title);
const key = 'author';
console.log(book[key]);
book.year = 1949;
book.pages = 400;
console.log(book);
console.log(Object.keys(book));
console.log(Object.values(book));
const { title, author, year } = book;
console.log(title, author, year);
for (const [k, v] of Object.entries(book)) {
  console.log(\`\\${k}: \\${v}\`);
}`,
            tests: [
              { type: "contains", value: "book.title" },
              { type: "contains", value: "book[key]" },
              { type: "contains", value: "book.year = 1949" },
              { type: "contains", value: "Object.entries" }
            ],
            debuggingTip: `Common mistakes:
• obj.key vs obj[key]? obj.key looks for property named literally "key". obj[key] uses the variable's value as the property name.
• Spreading object but original changes? Spread creates a SHALLOW copy — nested objects are still shared.
• Destructuring with wrong name? const { Title } = book finds property named "Title" (not "title") — case matters.
• for...in instead of Object.entries()? for...in iterates keys but also inherited properties — Object.entries() is safer.
• Deleting a property? delete obj.key removes it. Setting to undefined keeps the key but with value undefined.`
          }
        },
        {
          id: "javascript-phase4-m1-l4",
          title: "Arrays of Objects — Real-World Data",
          explanation: `In real applications, data almost never comes as simple numbers or strings alone. 
It comes as arrays of objects — a list of users, a collection of products, 
search results with multiple properties each. This combination is how JSON 
(the universal data format of the web) works, and how every API response is 
structured. Mastering how to create, filter, map, find, and sort arrays of 
objects is the single most practical skill in JavaScript development. 
Every e-commerce site, social network, and data dashboard is built on 
exactly this pattern.`,
          concept: `Arrays of objects combine what you know:
const items = [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }];
Access: items[0].name  → 'Apple'
Filter: items.filter(item => item.price < 10)
Map: items.map(item => item.name)  → array of just names
Find: items.find(item => item.id === 2)
Sort: items.sort((a, b) => a.price - b.price)  → ascending by price
Reduce: items.reduce((total, item) => total + item.price, 0)  → total price`,
          example: `const products = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Phone', price: 699, inStock: false },
  { id: 3, name: 'Tablet', price: 449, inStock: true },
  { id: 4, name: 'Watch', price: 299, inStock: true },
  { id: 5, name: 'Headphones', price: 199, inStock: false }
];

// Get all available products
const available = products.filter(p => p.inStock);
console.log(available.map(p => p.name));  // ['Laptop', 'Tablet', 'Watch']

// Get just the names
const names = products.map(p => p.name);
console.log(names);  // ['Laptop', 'Phone', 'Tablet', 'Watch', 'Headphones']

// Total value of in-stock items
const totalValue = products
  .filter(p => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);
console.log(\`Total: \$\\${totalValue}\`);  // Total: $1747

// Find by id
const found = products.find(p => p.id === 3);
console.log(found.name);  // Tablet

// Sort by price (ascending)
const byPrice = [...products].sort((a, b) => a.price - b.price);
console.log(byPrice.map(p => \`\\${p.name}: \$\\${p.price}\`));

// Transform to summary objects
const summary = products.map(p => ({
  name: p.name,
  available: p.inStock ? 'Yes' : 'No'
}));
console.log(summary);`,
          exercise: {
            prompt: `Work with an array of student objects:
1. Create array students with 4 objects: {name, grade, passed} where grade is a number and passed is grade >= 60
2. Use filter() to get only passing students and print their names
3. Use map() to create an array of strings like "Alice: 85" for each student
4. Use reduce() to calculate the class average grade
5. Use find() to get the first student with a grade above 90
6. Sort students by grade descending (highest first) and print names in order`,
            starterCode: `// Step 1: Create students array
const students = [
  { name: 'Alice', grade: 85, passed: true },
  { name: 'Bob', grade: 42, passed: false },
  { name: 'Charlie', grade: 91, passed: true },
  { name: 'Diana', grade: 58, passed: false }
];

// Step 2: Passing students' names


// Step 3: Map to "Name: Grade" strings


// Step 4: Class average


// Step 5: First student above 90


// Step 6: Sort by grade descending
`,
            solution: `const students = [
  { name: 'Alice', grade: 85, passed: true },
  { name: 'Bob', grade: 42, passed: false },
  { name: 'Charlie', grade: 91, passed: true },
  { name: 'Diana', grade: 58, passed: false }
];

const passingNames = students.filter(s => s.passed).map(s => s.name);
console.log(passingNames);

const gradeStrings = students.map(s => \`\\${s.name}: \\${s.grade}\`);
console.log(gradeStrings);

const average = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log(\`Average: \\${average}\`);

const topStudent = students.find(s => s.grade > 90);
console.log(topStudent);

const sorted = [...students].sort((a, b) => b.grade - a.grade);
console.log(sorted.map(s => s.name));`,
            tests: [
              { type: "contains", value: ".filter(s => s.passed)" },
              { type: "contains", value: ".map(s =>" },
              { type: "contains", value: ".reduce(" },
              { type: "contains", value: ".find(" }
            ],
            debuggingTip: `Common mistakes:
• sort() modifying original? Use [...students].sort() to sort a copy and keep original intact.
• sort((a,b) => a.grade - b.grade) → ascending (low to high). b.grade - a.grade → descending (high to low).
• map() after filter() on objects? Filter returns objects so map receives objects: .filter(...).map(s => s.name).
• find() returning undefined? No element matched — check your condition logic.
• reduce() for average — divide by students.length AFTER reduce, not inside it.`
          }
        }
      ]
    },
    {
      id: "javascript-phase5-m1",
      title: "Phase 5 — Intermediate JavaScript",
      duration: "2.5 hours",
      lessons: [
        {
          id: "javascript-phase5-m1-l1",
          title: "Error Handling with try/catch/finally",
          explanation: `Real programs encounter errors: network requests fail, users enter invalid data, 
APIs return unexpected responses, JSON is malformed. Without error handling, 
any of these crashes your program with an ugly message. JavaScript's try/catch 
lets you attempt risky code, catch any errors gracefully, and either recover 
or inform the user helpfully. The finally block always runs — whether there 
was an error or not — making it perfect for cleanup like hiding a loading 
spinner or closing a connection. You can also throw your own errors with 
custom messages, which is how you enforce rules in your own functions.`,
          concept: `try {
    // risky code here
} catch (error) {
    // runs if ANY error is thrown in try block
    // error.message → description
    // error.name    → type (TypeError, RangeError, etc.)
} finally {
    // ALWAYS runs — error or not
}
throw new Error('message')     → manually throw an error
throw new TypeError('message') → throw specific error type
try/catch doesn't catch async errors — use .catch() or try/catch with async/await.
Errors from JSON.parse, undefined property access, and type mismatches are common.`,
          example: `// Basic try/catch
try {
  const result = 10 / 0;  // Infinity in JS — not an error!
  console.log(result);
  JSON.parse('not json');  // This DOES throw SyntaxError
} catch (error) {
  console.log('Caught:', error.message);
  console.log('Type:', error.name);  // SyntaxError
}

// finally always runs
try {
  console.log('Trying...');
  null.property;  // TypeError: Cannot read properties of null
} catch (e) {
  console.log('Error caught:', e.message);
} finally {
  console.log('This ALWAYS runs — cleanup here!');
}

// Throwing custom errors
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  console.log(divide(10, 2));   // 5
  console.log(divide(10, 0));   // throws Error
} catch (e) {
  console.log(e.message);  // Cannot divide by zero
}

// Nested try/catch
function parseUserData(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    return data;
  } catch (e) {
    console.log('Invalid JSON provided');
    return null;
  }
}
console.log(parseUserData('{"name":"Alice"}'));  // works
console.log(parseUserData('broken json'));        // null`,
          exercise: {
            prompt: `Practice error handling:
1. Write a try/catch that parses 'abc' with JSON.parse and logs 'Invalid JSON' if it fails
2. Add a finally block that logs 'Parse attempt complete'
3. Write a function safeDivide(a, b) that:
   - Throws an Error if b is 0
   - Throws a TypeError if either argument is not a number
   - Otherwise returns a / b
4. Test safeDivide with valid inputs and invalid inputs using try/catch
5. Write a function getProperty(obj, key) that safely returns obj[key] or 'Not found' if obj is null/undefined`,
            starterCode: `// Step 1 & 2: try/catch/finally with JSON.parse
try {
  
} catch (e) {
  
} finally {
  
}

// Step 3: safeDivide function
function safeDivide(a, b) {
  
}

// Step 4: Test safeDivide
try {
  console.log(safeDivide(10, 2));
  console.log(safeDivide(10, 0));
} catch (e) {
  console.log(e.message);
}

// Step 5: getProperty function
function getProperty(obj, key) {
  
}
console.log(getProperty({ name: 'Alice' }, 'name'));
console.log(getProperty(null, 'name'));`,
            solution: `try {
  JSON.parse('abc');
} catch (e) {
  console.log('Invalid JSON');
} finally {
  console.log('Parse attempt complete');
}

function safeDivide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  console.log(safeDivide(10, 2));
  console.log(safeDivide(10, 0));
} catch (e) {
  console.log(e.message);
}

function getProperty(obj, key) {
  try {
    return obj[key] ?? 'Not found';
  } catch (e) {
    return 'Not found';
  }
}
console.log(getProperty({ name: 'Alice' }, 'name'));
console.log(getProperty(null, 'name'));`,
            tests: [
              { type: "contains", value: "try {" },
              { type: "contains", value: "catch" },
              { type: "contains", value: "finally" },
              { type: "contains", value: "throw" }
            ],
            debuggingTip: `Common mistakes:
• Catching errors but still crashing? The throw must be inside the try block — errors thrown outside aren't caught.
• finally not cleaning up? Finally runs even if you return inside try/catch — good for cleanup.
• Catching too broadly? catch(e) catches EVERYTHING — sometimes you want to re-throw errors you didn't expect.
• Null property access? null.anything throws TypeError — check for null first with optional chaining: obj?.property.
• JSON.parse vs JSON.stringify? parse converts string to object (can throw). stringify converts object to string (rarely throws).`
          }
        },
        {
          id: "javascript-phase5-m1-l2",
          title: "Promises and Async/Await",
          explanation: `JavaScript is single-threaded — it can only do one thing at a time. But many 
operations take time: fetching data from an API, reading a file, waiting for 
user input. If these blocked the thread, your entire page would freeze. 
Promises represent a value that will be available in the future. 
Async/await is modern syntax that makes working with Promises look like 
regular synchronous code, but without blocking. This is how every modern 
JavaScript application works — fetching data from APIs, loading resources, 
handling slow operations. Understanding async programming is absolutely 
essential for any real JavaScript development.`,
          concept: `Promise: represents a future value — can be pending, fulfilled, or rejected.
promise.then(result => {})   → runs when promise succeeds
promise.catch(error => {})   → runs when promise fails
promise.finally(() => {})    → always runs

async function name() { }    → makes function return a Promise automatically
await promise                → pauses execution until promise resolves (only inside async)
try/catch with async/await   → catches rejected promises

fetch(url)                   → built-in Promise-based HTTP request
Promise.all([p1, p2])        → wait for ALL promises to resolve
Promise.race([p1, p2])       → resolve when FIRST promise completes`,
          example: `// Creating a Promise
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Using .then()/.catch()
wait(1000)
  .then(() => console.log('1 second later!'))
  .catch(err => console.log('Error:', err));

// async/await — cleaner syntax
async function runAfterDelay() {
  console.log('Starting...');
  await wait(1000);
  console.log('Done waiting!');
}
runAfterDelay();

// Simulating an API call
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: 'Alice', email: 'alice@example.com' });
      } else {
        reject(new Error('Invalid user ID'));
      }
    }, 500);
  });
}

// async/await with try/catch (recommended pattern)
async function loadUser(id) {
  try {
    const user = await fetchUser(id);
    console.log(\`User loaded: \\${user.name}\`);
    return user;
  } catch (error) {
    console.log(\`Failed to load user: \\${error.message}\`);
    return null;
  }
}

loadUser(1);   // User loaded: Alice
loadUser(-1);  // Failed to load user: Invalid user ID`,
          exercise: {
            prompt: `Practice async programming:
1. Create a function delay(ms) that returns a Promise resolving after ms milliseconds
2. Create an async function runSteps() that:
   - Logs 'Step 1'
   - Awaits delay(500)
   - Logs 'Step 2'
   - Awaits delay(500)  
   - Logs 'Step 3 - Done!'
3. Create function fetchData(shouldFail) that returns a Promise:
   - Resolves with {data: 'Hello!'} after 300ms if shouldFail is false
   - Rejects with Error('Network error') if shouldFail is true
4. Create async function getData() that calls fetchData(false) with try/catch and logs the result
5. Create async function getDataFail() that calls fetchData(true) with try/catch and logs the error`,
            starterCode: `// Step 1: delay function
function delay(ms) {
  
}

// Step 2: runSteps async function
async function runSteps() {
  
}
runSteps();

// Step 3: fetchData function
function fetchData(shouldFail) {
  return new Promise((resolve, reject) => {
    
  });
}

// Step 4: getData async function
async function getData() {
  
}
getData();

// Step 5: getDataFail async function
async function getDataFail() {
  
}
getDataFail();`,
            solution: `function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runSteps() {
  console.log('Step 1');
  await delay(500);
  console.log('Step 2');
  await delay(500);
  console.log('Step 3 - Done!');
}
runSteps();

function fetchData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Network error'));
      } else {
        resolve({ data: 'Hello!' });
      }
    }, 300);
  });
}

async function getData() {
  try {
    const result = await fetchData(false);
    console.log(result.data);
  } catch (e) {
    console.log('Error:', e.message);
  }
}
getData();

async function getDataFail() {
  try {
    const result = await fetchData(true);
    console.log(result);
  } catch (e) {
    console.log('Error:', e.message);
  }
}
getDataFail();`,
            tests: [
              { type: "contains", value: "async function" },
              { type: "contains", value: "await" },
              { type: "contains", value: "new Promise" },
              { type: "contains", value: "resolve" }
            ],
            debuggingTip: `Common mistakes:
• await outside async function? SyntaxError — await only works inside async functions.
• Forgot to await a Promise? Without await, you get the Promise object itself, not the value.
• async function returns what? It always returns a Promise, even if you return a plain value.
• Unhandled promise rejection? Always add .catch() or use try/catch inside async functions.
• Promise never resolves? Make sure you call resolve() or reject() inside the Promise constructor.`
          }
        },
        {
          id: "javascript-phase5-m1-l3",
          title: "Destructuring, Spread, and Rest",
          explanation: `Modern JavaScript introduced powerful shorthand syntax that makes code cleaner 
and more expressive. Destructuring lets you unpack values from arrays or 
objects into variables in one line instead of multiple assignments. The 
spread operator (...) lets you expand arrays and objects — for copying, 
merging, and passing multiple arguments. The rest parameter (...) collects 
remaining elements into an array. These features appear in virtually every 
modern JavaScript codebase and are essential for working with React props, 
function arguments, API data, and state management.`,
          concept: `// Array destructuring
const [a, b, c] = [1, 2, 3];
const [first, , third] = [1, 2, 3];  // skip second
const [x, ...rest] = [1, 2, 3, 4];   // rest = [2,3,4]

// Object destructuring
const { name, age } = person;
const { name: fullName } = person;   // rename
const { city = 'Unknown' } = person; // default value

// Spread operator
const copy = [...arr];              // array copy
const merged = [...arr1, ...arr2];  // combine arrays
const objCopy = { ...obj };         // object copy
const updated = { ...obj, age: 30}; // copy and override

// Rest parameters
function sum(...numbers) { }  // numbers is an array of all arguments`,
          example: `// Array destructuring
const colors = ['red', 'green', 'blue', 'yellow'];
const [primary, secondary, ...others] = colors;
console.log(primary);    // red
console.log(secondary);  // green
console.log(others);     // ['blue', 'yellow']

// Swap variables without temp (destructuring trick!)
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);  // 2 1

// Object destructuring
const user = { name: 'Alice', age: 28, city: 'Paris', role: 'admin' };
const { name, age, city = 'Unknown', role } = user;
console.log(name, age, city, role);  // Alice 28 Paris admin

// Rename while destructuring
const { name: userName, role: userRole } = user;
console.log(userName, userRole);  // Alice admin

// Spread for arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);  // [1,2,3,4,5,6]

// Spread for objects
const defaults = { theme: 'light', language: 'en', fontSize: 14 };
const userPrefs = { theme: 'dark', fontSize: 16 };
const settings = { ...defaults, ...userPrefs };  // userPrefs overrides defaults
console.log(settings);
// { theme: 'dark', language: 'en', fontSize: 16 }

// Rest parameters in functions
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Destructuring in function parameters
function displayUser({ name, age, city = 'Unknown' }) {
  console.log(\`\\${name} (\\${age}) from \\${city}\`);
}
displayUser(user);  // Alice (28) from Paris`,
          exercise: {
            prompt: `Master modern JavaScript syntax:
1. Destructure const coords = [40.7128, -74.0060] into lat and lng variables
2. Destructure const config = {host:'localhost', port:3000, debug:true} — get host and port, rename debug to isDebug
3. Use spread to merge arr1 = [1,2,3] and arr2 = [4,5,6] into combined
4. Use spread to create an updated object from const original = {name:'Alice', age:28} with age changed to 29
5. Create function logAll(...args) that logs the count and all arguments
6. Create function displayProduct({name, price, inStock = true}) that logs product details — call with {name:'Laptop', price:999}`,
            starterCode: `// Step 1: Array destructuring
const coords = [40.7128, -74.0060];


// Step 2: Object destructuring with renaming
const config = { host: 'localhost', port: 3000, debug: true };


// Step 3: Spread to merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];


// Step 4: Spread to create updated object
const original = { name: 'Alice', age: 28 };


// Step 5: Rest parameters
function logAll(...args) {
  
}
logAll(1, 'hello', true, 42);

// Step 6: Destructuring in parameters
function displayProduct({ name, price, inStock = true }) {
  
}
displayProduct({ name: 'Laptop', price: 999 });`,
            solution: `const coords = [40.7128, -74.0060];
const [lat, lng] = coords;
console.log(lat, lng);

const config = { host: 'localhost', port: 3000, debug: true };
const { host, port, debug: isDebug } = config;
console.log(host, port, isDebug);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

const original = { name: 'Alice', age: 28 };
const updated = { ...original, age: 29 };
console.log(updated);

function logAll(...args) {
  console.log(\`Received \\${args.length} arguments:\`, args);
}
logAll(1, 'hello', true, 42);

function displayProduct({ name, price, inStock = true }) {
  console.log(\`\\${name} - \$\\${price} - In Stock: \\${inStock}\`);
}
displayProduct({ name: 'Laptop', price: 999 });`,
            tests: [
              { type: "contains", value: "const [lat, lng]" },
              { type: "contains", value: "...args" },
              { type: "contains", value: "...arr1, ...arr2" },
              { type: "contains", value: "...original" }
            ],
            debuggingTip: `Common mistakes:
• Destructuring order matters for arrays: const [a, b] = [1, 2] gives a=1, b=2 — order must match.
• Object destructuring uses property names, not positions: const { name } = obj gets property named "name".
• Spread copies are SHALLOW — nested objects are still references. Use structuredClone() for deep copy.
• Rest must be LAST: function(a, ...rest) is valid. function(...rest, a) is a SyntaxError.
• Renaming syntax: const { debug: isDebug } = config — left is original key, right is new variable name.`
          }
        },
        {
          id: "javascript-phase5-m1-l4",
          title: "Modules — import and export",
          explanation: `As applications grow, keeping all code in one file becomes unmanageable. 
JavaScript modules let you split code across multiple files and explicitly 
control what each file shares and what it keeps private. This is how every 
real JavaScript project is organized — React components are modules, utility 
functions are modules, constants are modules. The export keyword marks what 
a file makes available to others. The import keyword brings those things 
in. This separation makes code easier to find, test, reuse, and understand. 
Every import statement you'll see in React (import React from 'react') 
uses exactly this system.`,
          concept: `// Named exports (multiple per file)
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export class User { ... }

// Default export (one per file)
export default function mainFunction() { }

// Importing named exports
import { PI, add } from './math.js';
import { add as addition } from './math.js';  // rename

// Importing default export
import mainFunction from './main.js';  // any name works

// Import everything
import * as MathUtils from './math.js';
MathUtils.add(1, 2);

// Re-export
export { add, PI } from './math.js';`,
          example: `// === math.js ===
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function circleArea(radius) {
  return PI * radius * radius;
}

// Default export — the "main" thing this module provides
export default function calculate(operation, a, b) {
  switch(operation) {
    case 'add': return add(a, b);
    case 'multiply': return multiply(a, b);
    default: throw new Error(\`Unknown operation: \\${operation}\`);
  }
}

// === utils.js ===
export const formatCurrency = (amount, currency = 'USD') =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);

export const capitalize = str =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const clamp = (val, min, max) =>
  Math.min(Math.max(val, min), max);

// === main.js ===
import calculate, { add, multiply, PI } from './math.js';
import { formatCurrency, capitalize } from './utils.js';

console.log(add(5, 3));          // 8
console.log(multiply(4, 7));     // 28
console.log(PI);                  // 3.14159
console.log(calculate('add', 10, 5));  // 15

console.log(formatCurrency(1234.56));  // $1,234.56
console.log(capitalize('hELLO'));       // Hello`,
          exercise: {
            prompt: `Practice the module pattern (write code as if split across files):
1. Write what you would put in a 'mathUtils.js' file: export PI constant, export add(a,b), export subtract(a,b), export default function calculate(a, op, b)
2. Write what you would put in a 'stringUtils.js' file: export capitalize(str), export truncate(str, maxLength) that adds '...' if too long
3. Write what you would put in 'main.js': import PI and add from mathUtils, import capitalize from stringUtils, use them all
4. Show both named and default import syntax in your main.js`,
            starterCode: `// === mathUtils.js ===
// Step 1: Write your exports here
export const PI = 3.14159;

export function add(a, b) {
  
}

export function subtract(a, b) {
  
}

export default function calculate(a, op, b) {
  
}

// === stringUtils.js ===
// Step 2: String utility exports
export function capitalize(str) {
  
}

export function truncate(str, maxLength) {
  
}

// === main.js ===
// Step 3 & 4: Import and use everything
// import calculate, { PI, add } from './mathUtils.js';
// import { capitalize, truncate } from './stringUtils.js';

// Show how you would use them:
`,
            solution: `// === mathUtils.js ===
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export default function calculate(a, op, b) {
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  if (op === '/') return b !== 0 ? a / b : 'Division by zero';
  throw new Error(\`Unknown operator: \\${op}\`);
}

// === stringUtils.js ===
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

// === main.js ===
// import calculate, { PI, add, subtract } from './mathUtils.js';
// import { capitalize, truncate } from './stringUtils.js';

// Usage examples:
console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(PI);
console.log(calculate(10, '+', 5));
console.log(capitalize('hELLO wORLD'));
console.log(truncate('This is a very long string', 10));`,
            tests: [
              { type: "contains", value: "export const PI" },
              { type: "contains", value: "export function add" },
              { type: "contains", value: "export default function" },
              { type: "contains", value: "export function capitalize" }
            ],
            debuggingTip: `Common mistakes:
• Named import with wrong name? import { Add } from './math.js' fails — must match exact export name (case-sensitive).
• Default import with curly braces? import { calculate } from './math.js' imports named 'calculate', not the default. Omit braces for default.
• Circular imports? File A imports from B and B imports from A — can cause issues. Restructure to avoid.
• Forgetting .js extension? In browser modules, .js is required. Bundlers like Webpack/Vite may allow omitting it.
• Import path wrong? './utils.js' is relative. 'react' is a package from node_modules. Both work differently.`
          }
        },
        {
          id: "javascript-phase5-m1-l5",
          title: "Classes — Object-Oriented JavaScript",
          explanation: `JavaScript classes (introduced in ES6) provide a cleaner syntax for creating 
objects that share behavior. Under the hood, JavaScript uses prototypes — 
classes are a cleaner way to work with that system. You'll use classes 
constantly in React (class components, though functional components with 
hooks are now preferred), in Node.js services, and whenever you need 
multiple objects that share methods. Key concepts: the constructor initializes 
each instance, methods are shared (not copied per object), and extends 
creates inheritance hierarchies. Understanding classes completes your 
foundation for modern JavaScript development.`,
          concept: `class ClassName {
    constructor(params) {
        this.field = value;  // instance properties
    }
    
    methodName() { }  // instance method (shared by all instances)
    
    static staticMethod() { }  // called on CLASS, not instance
    
    get propertyName() { }  // getter — access like a property
    set propertyName(val) { } // setter — validate before setting
}

class Child extends Parent {
    constructor(params) {
        super(params);  // MUST call before using 'this'
    }
    
    method() {
        super.method();  // call parent's version
    }
}`,
          example: `class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
    this.energy = 100;
  }
  
  speak() {
    console.log(\`\\${this.name} says \\${this.sound}!\`);
  }
  
  eat(food) {
    this.energy += 20;
    console.log(\`\\${this.name} eats \\${food}. Energy: \\${this.energy}\`);
  }
  
  get status() {
    return this.energy > 50 ? 'healthy' : 'tired';
  }
  
  static create(name, sound) {
    return new Animal(name, sound);
  }
  
  toString() {
    return \`Animal(\\${this.name})\`;
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Woof');  // must call super first!
    this.breed = breed;
  }
  
  fetch(item) {
    console.log(\`\\${this.name} fetches the \\${item}!\`);
  }
  
  speak() {
    super.speak();  // call parent's speak
    console.log(\`*tail wagging*\`);
  }
}

// Using classes
const cat = new Animal('Whiskers', 'Meow');
cat.speak();          // Whiskers says Meow!
cat.eat('tuna');      // Whiskers eats tuna. Energy: 120
console.log(cat.status);  // healthy

const dog = new Dog('Rex', 'Labrador');
dog.speak();          // Rex says Woof! *tail wagging*
dog.fetch('ball');    // Rex fetches the ball!
console.log(dog instanceof Animal);  // true
console.log(dog instanceof Dog);     // true

// Static method
const fish = Animal.create('Nemo', 'Blub');
fish.speak();`,
          exercise: {
            prompt: `Build a class hierarchy:
1. Create class BankAccount with:
   - constructor(owner, initialBalance = 0)
   - deposit(amount) method that adds to balance and logs the new balance
   - withdraw(amount) method that checks for sufficient funds before deducting
   - get balance getter that returns current balance
   - toString() method returning "Account([owner]: $[balance])"
2. Create class SavingsAccount extending BankAccount with:
   - constructor(owner, initialBalance, interestRate = 0.05)
   - addInterest() method that increases balance by interestRate percentage
3. Test: create both account types, make deposits/withdrawals, add interest to savings`,
            starterCode: `// Step 1: BankAccount class
class BankAccount {
  constructor(owner, initialBalance = 0) {
    
  }
  
  deposit(amount) {
    
  }
  
  withdraw(amount) {
    
  }
  
  get balance() {
    
  }
  
  toString() {
    
  }
}

// Step 2: SavingsAccount extending BankAccount
class SavingsAccount extends BankAccount {
  constructor(owner, initialBalance, interestRate = 0.05) {
    
  }
  
  addInterest() {
    
  }
}

// Step 3: Test both classes
const checking = new BankAccount('Alice', 1000);
const savings = new SavingsAccount('Bob', 500, 0.03);`,
            solution: `class BankAccount {
  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this._balance = initialBalance;
  }
  
  deposit(amount) {
    if (amount <= 0) {
      console.log('Deposit amount must be positive');
      return;
    }
    this._balance += amount;
    console.log(\`Deposited \$\\${amount}. New balance: \$\\${this._balance}\`);
  }
  
  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Insufficient funds');
      return;
    }
    this._balance -= amount;
    console.log(\`Withdrew \$\\${amount}. New balance: \$\\${this._balance}\`);
  }
  
  get balance() {
    return this._balance;
  }
  
  toString() {
    return \`Account(\\${this.owner}: \$\\${this._balance})\`;
  }
}

class SavingsAccount extends BankAccount {
  constructor(owner, initialBalance, interestRate = 0.05) {
    super(owner, initialBalance);
    this.interestRate = interestRate;
  }
  
  addInterest() {
    const interest = this._balance * this.interestRate;
    this._balance += interest;
    console.log(\`Interest added: \$\\${interest.toFixed(2)}. New balance: \$\\${this._balance.toFixed(2)}\`);
  }
}

const checking = new BankAccount('Alice', 1000);
checking.deposit(500);
checking.withdraw(200);
console.log(checking.balance);
console.log(checking.toString());

const savings = new SavingsAccount('Bob', 500, 0.03);
savings.deposit(1000);
savings.addInterest();
console.log(savings.toString());`,
            tests: [
              { type: "contains", value: "class BankAccount" },
              { type: "contains", value: "class SavingsAccount extends BankAccount" },
              { type: "contains", value: "super(owner, initialBalance)" },
              { type: "contains", value: "get balance()" }
            ],
            debuggingTip: `Common mistakes:
• Forgot super() in child constructor? Must call super() BEFORE accessing 'this' — ReferenceError otherwise.
• Method not on prototype? Define methods inside class body without 'function' keyword: methodName() { } not function methodName() { }.
• Getter called with ()? Getters are accessed like properties: account.balance not account.balance().
• this is undefined? If you extract a method: const fn = account.deposit; fn(100) loses 'this'. Use arrow functions or bind.
• instanceof checking parent type? new SavingsAccount() instanceof BankAccount is true — inheritance works both ways.`
          }
        }
      ]
    }
  ]
};