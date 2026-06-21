// TypeScript curriculum data - all phases and lessons
export const typescriptCurriculum = {
  label: "TypeScript",
  modules: [
    {
      id: "typescript-phase0-m1",
      title: "Phase 0 — Welcome to TypeScript",
      duration: "15 min",
      lessons: [
        {
          id: "typescript-phase0-m1-l1",
          title: "Your First TypeScript Program",
          explanation: `TypeScript is JavaScript with superpowers. JavaScript is flexible and 
fast to write, but that flexibility causes bugs — you can accidentally 
add a number to a string, call a method that doesn't exist, or forget 
to handle a missing value, and you won't find out until your program 
crashes at runtime. TypeScript adds a type system on top of JavaScript 
that catches these mistakes before your code ever runs. Think of it 
as a spell-checker for code — it highlights problems as you write 
them. TypeScript is the standard language at most large tech companies 
(Microsoft, Google, Airbnb, Slack all use it), and learning it makes 
you a significantly more employable developer.`,
          concept: `TypeScript is a SUPERSET of JavaScript — all valid JavaScript is valid TypeScript.
TypeScript adds: type annotations, interfaces, enums, and access modifiers.
Types are checked at COMPILE TIME — errors caught before running.
TypeScript compiles to JavaScript — browsers and Node.js run the JS output.
Type annotations use the colon syntax: variableName: Type
TypeScript can INFER types — you don't always need to write them explicitly.`,
          example: `// JavaScript (no type safety)
let name = "Alice";
name = 42;          // no error! Bug waiting to happen

// TypeScript (type safe)
let username: string = "Alice";
// username = 42;  // Error: Type 'number' is not assignable to type 'string'

// TypeScript catches real bugs:
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

greet("Alice");   // ✓ works
// greet(42);     // ✗ Error: Argument of type 'number' is not assignable to 'string'
// greet();       // ✗ Error: Expected 1 arguments, but got 0

// Type inference — TypeScript figures it out:
let count = 0;           // TypeScript infers: number
let message = "hello";   // TypeScript infers: string
let active = true;       // TypeScript infers: boolean

console.log(\`\${username} is ready to code!\`);`,
          exercise: {
            prompt: `Write your first typed TypeScript program:
1. Declare a variable 'firstName' with type string and value 'Alex'
2. Declare a variable 'age' with type number and value 25
3. Declare a variable 'isLearning' with type boolean and value true
4. Use console.log with a template literal to print: "Alex is 25 years old and learning TypeScript: true"
5. Write a simple typed function greetLearner(name: string): string that returns "Welcome, [name]!"
6. Call the function and log the result`,
            starterCode: `// Step 1: Declare firstName as string


// Step 2: Declare age as number


// Step 3: Declare isLearning as boolean


// Step 4: Print using template literal


// Step 5: Write typed greetLearner function


// Step 6: Call and log the result
`,
            solution: `let firstName: string = 'Alex';
let age: number = 25;
let isLearning: boolean = true;
console.log(\`\${firstName} is \${age} years old and learning TypeScript: \${isLearning}\`);

function greetLearner(name: string): string {
  return \`Welcome, \${name}!\`;
}

console.log(greetLearner(firstName));`,
            tests: [
              { type: "contains", value: "firstName: string" },
              { type: "contains", value: "age: number" },
              { type: "contains", value: "isLearning: boolean" },
              { type: "contains", value: "greetLearner" }
            ],
            debuggingTip: `Common mistakes:
• Type annotation syntax: it's name: string not name: String (lowercase for primitives).
• String, Number, Boolean (capitalized) are object wrapper types — use lowercase always.
• Template literals need backticks (\`) not regular quotes for \${} interpolation.
• Function return type after closing parenthesis: function name(param: Type): ReturnType { }
• TypeScript errors show in red — read them carefully, they tell you exactly what's wrong.`
          }
        }
      ]
    },
    {
      id: "typescript-phase1-m1",
      title: "Phase 1 — Type Fundamentals",
      duration: "3 hours",
      lessons: [
        {
          id: "typescript-phase1-m1-l1",
          title: "Primitive Types — string, number, boolean",
          explanation: `TypeScript's type system starts with three primitive types that mirror 
JavaScript's most fundamental values. string covers all text — single 
characters to entire documents. number covers ALL numeric values — 
integers, decimals, negative numbers (TypeScript doesn't separate int 
from float like Java does). boolean is true or false. The power comes 
from annotating variables with these types — TypeScript then enforces 
that you never accidentally put the wrong kind of data in a variable. 
This eliminates an entire category of bugs that are extremely common 
in plain JavaScript.`,
          concept: `string  → text: 'hello', "world", \`template\`
number  → all numbers: 42, 3.14, -7, Infinity, NaN
boolean → true or false ONLY

Annotation syntax: let variableName: type = value;
Primitives use LOWERCASE: string, number, boolean (not String, Number, Boolean)
TypeScript checks assignments: you can't put a number into a string variable
Special types:
  undefined → variable declared but not assigned
  null      → intentionally empty value`,
          example: `// Explicit type annotations
let firstName: string = 'Alice';
let lastName: string = "Smith";
let fullName: string = \`\${firstName} \${lastName}\`;

let age: number = 28;
let price: number = 9.99;
let temperature: number = -5;
let bigNumber: number = 1_000_000; // underscores for readability

let isActive: boolean = true;
let hasPermission: boolean = false;

// Type checking in action
let score: number = 100;
// score = "perfect"; // Error: Type 'string' is not assignable to type 'number'
// score = true;      // Error: Type 'boolean' is not assignable to type 'number'
score = 95;           // ✓ same type, works fine

// TypeScript distinguishes null and undefined
let empty: null = null;
let missing: undefined = undefined;

// Checking types at runtime
console.log(typeof firstName);   // "string"
console.log(typeof age);         // "number"
console.log(typeof isActive);    // "boolean"`,
          exercise: {
            prompt: `Practice primitive type annotations:
1. Declare productName: string = 'TypeScript Handbook'
2. Declare pageCount: number = 312
3. Declare isAvailable: boolean = true
4. Declare discountRate: number = 0.15 (15%)
5. Calculate and store: finalPrice = 29.99 * (1 - discountRate) — annotate as number
6. Print a receipt: "Product: [name] | Pages: [pages] | Price: $[finalPrice] | Available: [bool]"
7. Try creating a variable with the wrong type (comment it out with // to show you tried)`,
            starterCode: `// Step 1: productName string
const productName: string =

// Step 2: pageCount number


// Step 3: isAvailable boolean


// Step 4: discountRate number


// Step 5: Calculate finalPrice (annotate as number)
const originalPrice: number = 29.99;


// Step 6: Print receipt


// Step 7: Show a type error (commented out)
// const wrongType: number =
`,
            solution: `const productName: string = 'TypeScript Handbook';
const pageCount: number = 312;
const isAvailable: boolean = true;
const discountRate: number = 0.15;
const originalPrice: number = 29.99;
const finalPrice: number = originalPrice * (1 - discountRate);
console.log(\`Product: \${productName} | Pages: \${pageCount} | Price: \$\${finalPrice.toFixed(2)} | Available: \${isAvailable}\`);
// const wrongType: number = 'not a number'; // Error: Type 'string' is not assignable to type 'number'`,
            tests: [
              { type: "contains", value: "productName: string" },
              { type: "contains", value: "pageCount: number" },
              { type: "contains", value: "isAvailable: boolean" },
              { type: "contains", value: "discountRate: number" }
            ],
            debuggingTip: `Common mistakes:
• Used String with capital S? String is the object wrapper, string (lowercase) is the primitive. Always use lowercase.
• Forgot the colon? let name string is invalid syntax — the colon is required: let name: string.
• Semicolons optional in TypeScript but recommended for consistency.
• toFixed() returns a string — if you need the number, use parseFloat(price.toFixed(2)).
• const vs let: use const for values that don't change, let for variables that will be reassigned.`
          }
        },
        {
          id: "typescript-phase1-m1-l2",
          title: "Type Inference — TypeScript Reads Your Mind",
          explanation: `TypeScript doesn't require you to write type annotations everywhere — 
it's smart enough to figure out the type from the value you assign. 
This is called type inference. When you write const name = 'Alice', 
TypeScript automatically knows name is a string. You can then hover 
over name in VS Code and see the inferred type. Inference is one of 
TypeScript's most beloved features — you get full type safety without 
writing verbose annotations everywhere. The general rule: let TypeScript 
infer types from values, but annotate function parameters and return 
types explicitly (inference can't read your intentions there).`,
          concept: `const name = 'Alice';     // TypeScript infers: string
const age = 28;          // TypeScript infers: number
const active = true;     // TypeScript infers: boolean

When to annotate explicitly:
✓ Function parameters (TypeScript can't infer without a call)
✓ Function return types (documents intent, catches mistakes)
✓ Variables initialized to null/undefined
✓ Complex types where inference would be too broad
✗ Variables initialized with a clear value (let inference work)

Type widening: const infers literal type, let infers broader type
const x = 'hello'  → type is literal "hello"
let x = 'hello'    → type is string (can be reassigned)`,
          example: `// TypeScript infers all these types:
const siteName = 'FluentlyCode';    // type: "FluentlyCode" (string literal!)
let userName = 'Alice';            // type: string
let score = 100;                   // type: number
let isLoggedIn = false;            // type: boolean
let items = ['a', 'b', 'c'];      // type: string[]
let point = { x: 10, y: 20 };    // type: { x: number, y: number }

// Inference prevents wrong assignments:
score = 95;        // ✓ still a number
// score = "high"; // ✗ Error: Type 'string' is not assignable to type 'number'

// Where you SHOULD annotate explicitly:
function add(a: number, b: number): number {  // explicit = good
  return a + b;
}

// Inference works in complex expressions:
const doubled = score * 2;        // infers: number
const greeting = \`Hi \${userName}\`; // infers: string
const hasItems = items.length > 0; // infers: boolean

// const vs let inference difference:
const CONSTANT = 42;   // type: 42 (literal number type)
let variable = 42;     // type: number (can change to any number)`,
          exercise: {
            prompt: `Explore type inference:
1. Create 4 variables WITHOUT type annotations — let TypeScript infer: a string, number, boolean, and array of numbers
2. Try reassigning each to a wrong type (write as comments with // Error:)
3. Write function calculateTax(price: number, rate: number): number that returns price * rate — annotate explicitly
4. Store the result of calculateTax(100, 0.08) in a variable WITHOUT annotation and log it
5. Create const PI = 3.14159 and const MAX_USERS = 100 — hover description: what are their literal types?
6. Create an inferred object and add a new property (observe the error)`,
            starterCode: `// Step 1: Four inferred variables (no type annotations!)
const appName =
let userCount =
let isPremium =
let scores =

// Step 2: Wrong type assignments (comment them out)
// appName = ... // Error: ...

// Step 3: Annotated function


// Step 4: Store result WITHOUT annotation (let inference work)


// Step 5: Const literal types
const PI =
const MAX_USERS =

// Step 6: Inferred object
const config = { host: 'localhost', port: 3000 };
// Try adding new property:
// config.newProp = 'value'; // Error: ...
`,
            solution: `const appName = 'FluentlyCode';
let userCount = 0;
let isPremium = false;
let scores = [95, 87, 92, 78];

// appName = 42;    // Error: Type 'number' is not assignable to type 'string'
// userCount = 'a'; // Error: Type 'string' is not assignable to type 'number'

function calculateTax(price: number, rate: number): number {
  return price * rate;
}

const taxAmount = calculateTax(100, 0.08);
console.log(taxAmount);

const PI = 3.14159;
const MAX_USERS = 100;

const config = { host: 'localhost', port: 3000 };
// config.newProp = 'value'; // Error: Property 'newProp' does not exist`,
            tests: [
              { type: "contains", value: "calculateTax(price: number, rate: number): number" },
              { type: "contains", value: "calculateTax(100, 0.08)" }
            ],
            debuggingTip: `Common mistakes:
• Over-annotating? const name: string = 'Alice' is redundant — TypeScript infers string. Skip the annotation.
• Under-annotating functions? Function parameters CANNOT be inferred without a call — always annotate them.
• const gives literal types: const x = 'hello' has type "hello", not string. This matters in advanced patterns.
• Adding properties to inferred objects fails because TypeScript locks the shape at creation.
• Hover over variables in VS Code to see the inferred type — it's the fastest way to understand what TypeScript sees.`
          }
        },
        {
          id: "typescript-phase1-m1-l3",
          title: "Union Types — Either/Or Values",
          explanation: `Real data doesn't always fit neatly into one type. A function might return 
a number OR null. A variable might hold a string OR a number. TypeScript's 
union types handle this with the pipe symbol (|): string | number means 
"this can be a string or a number". This is one of TypeScript's most 
important features — it forces you to handle all possible cases. If a 
variable can be string | null, TypeScript won't let you call string 
methods on it without first checking that it's actually a string. 
This eliminates the dreaded "Cannot read properties of null" runtime error.`,
          concept: `type UnionType = TypeA | TypeB | TypeC;
let id: string | number;  → can be either

Narrowing: check the actual type before using type-specific methods
typeof x === 'string'    → inside here, TypeScript knows x is string
x !== null               → inside here, TypeScript knows x is not null

Common unions:
string | null            → value or explicitly empty
string | undefined       → value or not provided
number | string          → flexible ID type
'success' | 'error'     → string literal union (like enum)`,
          example: `// Basic union type
let id: string | number;
id = 'abc123';    // ✓ string
id = 42;          // ✓ number
// id = true;     // ✗ Error: boolean not in union

// Function with union parameter
function printId(id: string | number): void {
  // Can't call string methods directly — might be a number!
  // console.log(id.toUpperCase()); // ✗ Error!
  
  // Narrow first with typeof:
  if (typeof id === 'string') {
    console.log(id.toUpperCase()); // ✓ TypeScript knows it's string here
  } else {
    console.log(id.toFixed(2));    // ✓ TypeScript knows it's number here
  }
}

printId('abc');   // ABC
printId(42);      // 42.00

// Nullable types (very common)
function findUser(name: string): string | null {
  if (name === 'Alice') return 'Found: Alice';
  return null;
}

const result = findUser('Bob');
// console.log(result.length); // ✗ Error: result might be null!

if (result !== null) {
  console.log(result.length); // ✓ safe — null is excluded
}

// Optional chaining handles it more elegantly:
console.log(result?.length); // returns undefined if result is null

// String literal union — like a mini-enum
type Direction = 'north' | 'south' | 'east' | 'west';
let heading: Direction = 'north';
// heading = 'up'; // ✗ Error: not in the union`,
          exercise: {
            prompt: `Practice union types:
1. Declare id: string | number — assign a string value, then reassign to a number, log both
2. Write function formatId(id: string | number): string that:
   - If string: returns it in UPPERCASE
   - If number: returns it with 'ID-' prefix (e.g., 'ID-42')
3. Write function getScore(name: string): number | null that returns 100 for 'Alice', null otherwise
4. Call getScore for 'Alice' and 'Bob' — safely access the result only when not null
5. Define type Status = 'active' | 'inactive' | 'pending' and use it with a variable
6. Write function describeStatus(s: Status): string that returns different messages per status`,
            starterCode: `// Step 1: Union variable
let id: string | number;


// Step 2: formatId function
function formatId(id: string | number): string {
  
}
console.log(formatId('abc'));
console.log(formatId(42));

// Step 3: getScore returning number | null
function getScore(name: string): number | null {
  
}

// Step 4: Safe access
const aliceScore = getScore('Alice');
const bobScore = getScore('Bob');


// Step 5: String literal union type


// Step 6: describeStatus function
`,
            solution: `let id: string | number;
id = 'abc123';
console.log(id);
id = 42;
console.log(id);

function formatId(id: string | number): string {
  if (typeof id === 'string') {
    return id.toUpperCase();
  } else {
    return \`ID-\${id}\`;
  }
}
console.log(formatId('abc'));
console.log(formatId(42));

function getScore(name: string): number | null {
  if (name === 'Alice') return 100;
  return null;
}

const aliceScore = getScore('Alice');
const bobScore = getScore('Bob');

if (aliceScore !== null) {
  console.log(\`Alice: \${aliceScore}\`);
}
console.log(\`Bob: \${bobScore?.toString() ?? 'No score'}\`);

type Status = 'active' | 'inactive' | 'pending';
let userStatus: Status = 'active';

function describeStatus(s: Status): string {
  if (s === 'active') return 'User is currently active';
  if (s === 'inactive') return 'User account is inactive';
  return 'User registration is pending';
}
console.log(describeStatus(userStatus));`,
            tests: [
              { type: "contains", value: "string | number" },
              { type: "contains", value: "typeof id === 'string'" },
              { type: "contains", value: "number | null" }
            ],
            debuggingTip: `Common mistakes:
• Calling string methods on string | number without narrowing? TypeScript blocks this — use typeof first.
• Returning string | null but accessing like it's always a string? Always check null first: if (result !== null).
• Optional chaining (?.) vs non-null assertion (!)? Use ?. for safety, ! only when you're 100% certain it's not null.
• String literal union typo? 'activ' instead of 'active' — TypeScript catches this at assignment time.
• Type guard in else: if typeof === 'string' in if branch means else branch is definitely NOT string.`
          }
        },
        {
          id: "typescript-phase1-m1-l4",
          title: "any, unknown, and never — Special Types",
          explanation: `TypeScript has three special types that represent unusual situations. 
'any' is the escape hatch — it turns off type checking completely, 
letting you do anything with a value. It's tempting to use when 
TypeScript's errors seem annoying, but it defeats the purpose of 
TypeScript entirely. 'unknown' is the safe alternative — it says 
"I don't know the type" but forces you to check before using it. 
'never' represents values that literally never exist — functions that 
always throw errors, or switch statements that have handled all cases. 
Understanding these three types makes you a much more sophisticated 
TypeScript developer.`,
          concept: `any     → disables type checking completely (avoid!)
          - can assign anything to it
          - can read any property from it
          - spreads to anything it touches

unknown → type-safe "I don't know"
          - can assign anything to it  
          - CANNOT use it without narrowing first
          - forces you to check before using

never   → value that never occurs
          - function that always throws returns never
          - exhaustive switch: remaining case is never
          - useful for exhaustiveness checking`,
          example: `// any — dangerous, avoid
let dangerous: any = 'hello';
dangerous = 42;              // ✓ no error
dangerous = { foo: 'bar' };  // ✓ no error
dangerous.anything();        // ✓ no error — but will CRASH at runtime!
let num: number = dangerous; // ✓ no error — any infects everything

// unknown — safe alternative to any
let userInput: unknown = getUserInput(); // could be anything
// userInput.toUpperCase();  // ✗ Error: must narrow first

// Must narrow before using:
if (typeof userInput === 'string') {
  console.log(userInput.toUpperCase()); // ✓ safe
}

// Type assertion (use carefully):
const str = userInput as string; // you're telling TypeScript "trust me"

// never — function that never returns
function throwError(message: string): never {
  throw new Error(message);
  // code after throw is unreachable
}

// never in exhaustive checks
type Shape = 'circle' | 'square' | 'triangle';

function getArea(shape: Shape, size: number): number {
  if (shape === 'circle') return Math.PI * size ** 2;
  if (shape === 'square') return size ** 2;
  if (shape === 'triangle') return (size ** 2) / 2;
  
  // If you add a new Shape and forget to handle it, this errors!
  const exhaustiveCheck: never = shape;
  throw new Error(\`Unhandled shape: \${exhaustiveCheck}\`);
}

function getUserInput(): unknown {
  return 'hello';
}`,
          exercise: {
            prompt: `Understand special types:
1. Declare a variable with type 'unknown' assigned a string value
2. Try to call .toUpperCase() on it directly (comment it out showing the error)
3. Narrow the unknown with typeof and call .toUpperCase() safely — log the result
4. Write function alwaysThrows(msg: string): never that throws an Error
5. Write function processValue(val: unknown): string that:
   - If val is a string: returns val.toUpperCase()
   - If val is a number: returns val.toFixed(2)
   - Otherwise: returns 'unknown type'
6. Test processValue with a string, number, and boolean`,
            starterCode: `// Step 1: unknown variable
let mystery: unknown = 'Hello TypeScript';

// Step 2: Can't use directly (comment showing error)
// mystery.toUpperCase(); // Error: ...

// Step 3: Narrow and use safely


// Step 4: Function returning never
function alwaysThrows(msg: string): never {
  
}

// Step 5: processValue function
function processValue(val: unknown): string {
  
}

// Step 6: Test with different types
console.log(processValue('hello'));
console.log(processValue(3.14159));
console.log(processValue(true));
`,
            solution: `let mystery: unknown = 'Hello TypeScript';

// mystery.toUpperCase(); // Error: Object is of type 'unknown'

if (typeof mystery === 'string') {
  console.log(mystery.toUpperCase());
}

function alwaysThrows(msg: string): never {
  throw new Error(msg);
}

function processValue(val: unknown): string {
  if (typeof val === 'string') {
    return val.toUpperCase();
  } else if (typeof val === 'number') {
    return val.toFixed(2);
  } else {
    return 'unknown type';
  }
}

console.log(processValue('hello'));
console.log(processValue(3.14159));
console.log(processValue(true));`,
            tests: [
              { type: "contains", value: "unknown" },
              { type: "contains", value: "typeof mystery === 'string'" },
              { type: "contains", value: ": never" }
            ],
            debuggingTip: `Common mistakes:
• Using 'any' because 'unknown' is annoying? That's the wrong lesson — use 'unknown' and narrow properly.
• Type assertion 'as string' on unknown? Only do this when you're genuinely certain of the type. Wrong assertions cause runtime crashes.
• never return type on function that might not throw? It must ALWAYS throw or infinitely loop — no other exit path.
• Forgetting never in exhaustive checks? Adding a new union member without updating switches is a common bug — never prevents it.
• any spreads: let x: any = ...; let y: number = x; — y is also effectively any. Avoid the whole chain.`
          }
        },
        {
          id: "typescript-phase1-m1-l5",
          title: "Type Aliases — Creating Named Types",
          explanation: `As your programs grow, you'll find yourself writing the same complex 
type annotations repeatedly. Type aliases let you give a name to any 
type — from simple unions to complex object shapes. They make your 
code dramatically more readable and maintainable. If the meaning of 
a type changes, you update it in one place and everywhere using the 
alias automatically benefits. Type aliases are also self-documenting: 
UserId communicates more than string, and RGB communicates more than 
[number, number, number]. Good type alias names make code read like 
plain English.`,
          concept: `type AliasName = TypeExpression;

type UserId = string | number;
type Nullable<T> = T | null;
type Callback = () => void;
type Point = { x: number; y: number };
type RGB = [number, number, number];

Type aliases vs interfaces:
- Both can describe object shapes
- type aliases: can represent any type (unions, primitives, tuples)
- interfaces: only objects, but support declaration merging
- General rule: use type for aliases, interface for object shapes`,
          example: `// Simple aliases
type UserId = string | number;
type Score = number;
type Name = string;

// Using aliases
let userId: UserId = 'user_123';
userId = 42;   // ✓ still valid

// Aliases for complex unions
type Status = 'active' | 'inactive' | 'pending' | 'banned';
type Direction = 'north' | 'south' | 'east' | 'west';

let accountStatus: Status = 'active';
// accountStatus = 'deleted'; // ✗ not in the union

// Aliases for object shapes (preview of interfaces)
type Point = {
  x: number;
  y: number;
};

type ColorPoint = {
  x: number;
  y: number;
  color: string;
};

const origin: Point = { x: 0, y: 0 };
const red: ColorPoint = { x: 10, y: 20, color: 'red' };

// Tuple alias
type Pair = [string, number];
type RGB = [number, number, number];

const nameAge: Pair = ['Alice', 28];
const crimson: RGB = [220, 20, 60];

// Function type alias
type Transformer = (input: string) => string;
type Predicate = (value: number) => boolean;

const shout: Transformer = (s) => s.toUpperCase();
const isPositive: Predicate = (n) => n > 0;

// Combining aliases
type ApiResponse = {
  status: Status;
  userId: UserId;
  data: string | null;
};`,
          exercise: {
            prompt: `Build a type alias library:
1. Create type alias 'ProductId' for string | number
2. Create type alias 'Rating' for numbers 1-5 using literal union: 1 | 2 | 3 | 4 | 5
3. Create type alias 'Coordinate' for object with x: number, y: number
4. Create type alias 'Range' for tuple [number, number] (min, max pair)
5. Create type alias 'StringTransform' for function type (s: string) => string
6. Use all your types: declare a productId, rating, coordinate, range, and a transform function
7. Create type 'Product' combining ProductId, string name, Rating, and boolean inStock`,
            starterCode: `// Step 1: ProductId alias


// Step 2: Rating literal union alias


// Step 3: Coordinate object alias


// Step 4: Range tuple alias


// Step 5: StringTransform function alias


// Step 6: Use each alias
const productId: ProductId =
const rating: Rating =
const location: Coordinate =
const priceRange: Range =
const capitalize: StringTransform =

// Step 7: Product type combining others
type Product = {

};

const laptop: Product = {

};
console.log(laptop);
`,
            solution: `type ProductId = string | number;
type Rating = 1 | 2 | 3 | 4 | 5;
type Coordinate = { x: number; y: number };
type Range = [number, number];
type StringTransform = (s: string) => string;

const productId: ProductId = 'prod_001';
const rating: Rating = 4;
const location: Coordinate = { x: 10, y: 20 };
const priceRange: Range = [9.99, 99.99];
const capitalize: StringTransform = (s) => s.charAt(0).toUpperCase() + s.slice(1);

type Product = {
  id: ProductId;
  name: string;
  rating: Rating;
  inStock: boolean;
};

const laptop: Product = {
  id: 'prod_001',
  name: 'TypeScript Laptop',
  rating: 5,
  inStock: true,
};
console.log(laptop);`,
            tests: [
              { type: "contains", value: "type ProductId" },
              { type: "contains", value: "type Rating" },
              { type: "contains", value: "type Coordinate" }
            ],
            debuggingTip: `Common mistakes:
• Rating = number instead of literal union? number accepts 6, 100, -1. Use 1|2|3|4|5 to restrict to valid ratings.
• Semicolons in object types? Type { x: number; y: number } uses semicolons (not commas) — both work but semicolons are conventional.
• Type aliases aren't values — you can't console.log(ProductId). They exist only at compile time.
• Tuple vs array? [number, number] is exactly 2 numbers. number[] is any number of numbers.
• Function type syntax: (param: Type) => ReturnType — the arrow is part of the syntax.`
          }
        }
      ]
    },
    {
      id: "typescript-phase2-m1",
      title: "Phase 2 — Functions in TypeScript",
      duration: "2.5 hours",
      lessons: [
        {
          id: "typescript-phase2-m1-l1",
          title: "Typed Function Parameters and Return Types",
          explanation: `Functions are where TypeScript's type system pays off most dramatically. 
By annotating parameters, you document what a function expects and get 
an error if you call it wrong. By annotating return types, you document 
what it produces and TypeScript verifies you actually return the right thing. 
This is self-enforcing documentation — unlike comments, type annotations 
can't be out of sync with the code because TypeScript enforces them. 
Every parameter should be typed. Return types should be explicit for 
public/exported functions and can be inferred for small private helpers.`,
          concept: `function name(param: Type, param2: Type): ReturnType {
  return value; // must match ReturnType
}

void → function returns nothing (no return, or return;)
never → function never returns (always throws)

Arrow function syntax:
const fn = (param: Type): ReturnType => expression;
const fn = (param: Type): ReturnType => {
  return value;
};

TypeScript verifies:
- Correct number of arguments
- Correct types for each argument  
- Return value matches declared return type`,
          example: `// Basic typed function
function add(a: number, b: number): number {
  return a + b;
}

// Calling correctly and incorrectly:
console.log(add(5, 3));    // ✓ 8
// add('5', 3);             // ✗ Error: string not assignable to number
// add(5);                  // ✗ Error: Expected 2 arguments, got 1
// add(5, 3, 1);            // ✗ Error: Expected 2 arguments, got 3

// void — no return value
function logMessage(msg: string): void {
  console.log(\`[LOG]: \${msg}\`);
  // return 42; // ✗ Error: can't return value from void function
}

// String return
function greet(name: string, greeting: string = 'Hello'): string {
  return \`\${greeting}, \${name}!\`;
}

// Arrow functions with types
const multiply = (a: number, b: number): number => a * b;
const isEven = (n: number): boolean => n % 2 === 0;
const shout = (text: string): string => text.toUpperCase();

// Function that handles multiple return paths
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;  // TypeScript knows this is number
}

// TypeScript catches missing returns:
function grade(score: number): string {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  return 'F'; // TypeScript requires ALL paths to return string
}`,
          exercise: {
            prompt: `Write fully typed functions:
1. Write function celsiusToFahrenheit(c: number): number — returns (c * 9/5) + 32
2. Write function capitalize(s: string): string — returns string with first letter uppercase
3. Write function isInRange(value: number, min: number, max: number): boolean
4. Write arrow function 'repeat' that takes a string and count (number) and returns string repeated count times
5. Write function printUserInfo(name: string, age: number, city?: string): void — city is optional, print different messages
6. Write function safeSqrt(n: number): number — throws Error if n < 0, returns Math.sqrt(n) otherwise`,
            starterCode: `// Step 1: celsiusToFahrenheit
function celsiusToFahrenheit(c: number): number {
  
}
console.log(celsiusToFahrenheit(0));    // 32
console.log(celsiusToFahrenheit(100));  // 212

// Step 2: capitalize


// Step 3: isInRange


// Step 4: repeat as arrow function
const repeat =

// Step 5: printUserInfo (city is optional)
function printUserInfo(name: string, age: number, city?: string): void {
  
}
printUserInfo('Alice', 28, 'Paris');
printUserInfo('Bob', 35);

// Step 6: safeSqrt
`,
            solution: `function celsiusToFahrenheit(c: number): number {
  return (c * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
console.log(capitalize('hello'));

function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}
console.log(isInRange(5, 1, 10));
console.log(isInRange(15, 1, 10));

const repeat = (s: string, count: number): string => s.repeat(count);
console.log(repeat('ha', 3));

function printUserInfo(name: string, age: number, city?: string): void {
  if (city !== undefined) {
    console.log(\`\${name}, \${age}, from \${city}\`);
  } else {
    console.log(\`\${name}, \${age}\`);
  }
}
printUserInfo('Alice', 28, 'Paris');
printUserInfo('Bob', 35);

function safeSqrt(n: number): number {
  if (n < 0) throw new Error(\`Cannot sqrt negative number: \${n}\`);
  return Math.sqrt(n);
}
console.log(safeSqrt(16));`,
            tests: [
              { type: "contains", value: "celsiusToFahrenheit(c: number): number" },
              { type: "contains", value: "isInRange(value: number, min: number, max: number): boolean" },
              { type: "contains", value: "city?: string" }
            ],
            debuggingTip: `Common mistakes:
• Missing return type causes TypeScript to infer — fine for simple functions, but explicit is better.
• void functions shouldn't return values. Return type void means the return value is ignored.
• Optional parameter (city?) must come AFTER required parameters — can't have required after optional.
• TypeScript requires ALL code paths to return the declared type — missing return in an if branch causes an error.
• Arrow function types: const fn = (x: number): string => x.toString() — the : string comes before =>.`
          }
        },
        {
          id: "typescript-phase2-m1-l2",
          title: "Optional and Default Parameters",
          explanation: `Real functions rarely require all their arguments every time. Optional 
parameters (marked with ?) can be omitted by callers — TypeScript treats 
them as type | undefined inside the function. Default parameters provide 
a fallback value and make the parameter optional automatically. Together, 
they make APIs flexible and easy to use. The critical difference: optional 
parameters require you to check for undefined before using them, while 
default parameters always have a value (the default). This is one of 
the most practically important patterns in TypeScript.`,
          concept: `Optional: param?: type
  → type is actually Type | undefined inside function
  → caller can omit it
  → MUST check before using: if (param !== undefined)

Default: param: type = defaultValue
  → always has a value inside function (either passed or default)
  → caller can omit it
  → NO need to check — always defined

Rules:
- Optional/default params must come AFTER required params
- Cannot have required param after optional
- Default param type is inferred from the default value`,
          example: `// Optional parameter
function greet(name: string, title?: string): string {
  if (title !== undefined) {
    return \`Hello, \${title} \${name}!\`;
  }
  return \`Hello, \${name}!\`;
}

greet('Alice');           // Hello, Alice!
greet('Smith', 'Dr.');    // Hello, Dr. Smith!

// Default parameter
function createUrl(path: string, protocol: string = 'https', port: number = 443): string {
  return \`\${protocol}://localhost:\${port}/\${path}\`;
}

createUrl('api/users');              // https://localhost:443/api/users
createUrl('api', 'http', 8080);     // http://localhost:8080/api

// Optional with nullish coalescing
function formatName(first: string, last?: string): string {
  return \`\${first} \${last ?? 'Unknown'}\`;
}
// ?? returns right side if left is null or undefined

// Combining optional and default
function paginate(
  data: number[],
  page: number = 1,
  perPage: number = 10,
  label?: string
): string {
  const start = (page - 1) * perPage;
  const items = data.slice(start, start + perPage);
  const prefix = label ?? 'Page';
  return \`\${prefix} \${page}: [\${items.join(', ')}]\`;
}

const numbers = Array.from({ length: 50 }, (_, i) => i + 1);
console.log(paginate(numbers));          // Page 1: [1, 2, ..., 10]
console.log(paginate(numbers, 2));       // Page 2: [11, 12, ..., 20]
console.log(paginate(numbers, 1, 5, 'Results')); // Results 1: [1, 2, 3, 4, 5]`,
          exercise: {
            prompt: `Practice optional and default parameters:
1. Write createEmail(username: string, domain?: string): string — domain defaults to 'gmail.com' if not provided (use ?? or if check)
2. Write formatPrice(amount: number, currency: string = 'USD', decimals: number = 2): string returning "$12.99 USD"
3. Write buildTag(tag: string, content: string, className?: string): string returning HTML like <div>content</div> or <div class="box">content</div>
4. Write logEvent(event: string, timestamp: number = Date.now(), severity?: 'info' | 'warn' | 'error'): void
5. Call each function multiple times with different combinations of arguments`,
            starterCode: `// Step 1: createEmail
function createEmail(username: string, domain?: string): string {
  
}
console.log(createEmail('alice'));              // alice@gmail.com
console.log(createEmail('bob', 'company.com')); // bob@company.com

// Step 2: formatPrice
function formatPrice(amount: number, currency: string = 'USD', decimals: number = 2): string {
  
}
console.log(formatPrice(12.9));
console.log(formatPrice(99, 'EUR'));
console.log(formatPrice(5.555, 'GBP', 3));

// Step 3: buildTag
function buildTag(tag: string, content: string, className?: string): string {
  
}
console.log(buildTag('div', 'Hello'));
console.log(buildTag('p', 'World', 'highlighted'));

// Step 4: logEvent
function logEvent(event: string, timestamp: number = Date.now(), severity?: 'info' | 'warn' | 'error'): void {
  
}
logEvent('user_login');
logEvent('error_occurred', Date.now(), 'error');
`,
            solution: `function createEmail(username: string, domain?: string): string {
  return \`\${username}@\${domain ?? 'gmail.com'}\`;
}
console.log(createEmail('alice'));
console.log(createEmail('bob', 'company.com'));

function formatPrice(amount: number, currency: string = 'USD', decimals: number = 2): string {
  return \`\${amount.toFixed(decimals)} \${currency}\`;
}
console.log(formatPrice(12.9));
console.log(formatPrice(99, 'EUR'));
console.log(formatPrice(5.555, 'GBP', 3));

function buildTag(tag: string, content: string, className?: string): string {
  if (className !== undefined) {
    return \`<\${tag} class="\${className}">\${content}</\${tag}>\`;
  }
  return \`<\${tag}>\${content}</\${tag}>\`;
}
console.log(buildTag('div', 'Hello'));
console.log(buildTag('p', 'World', 'highlighted'));

function logEvent(event: string, timestamp: number = Date.now(), severity?: 'info' | 'warn' | 'error'): void {
  const level = severity ?? 'info';
  console.log(\`[\${level.toUpperCase()}] \${event} at \${timestamp}\`);
}
logEvent('user_login');
logEvent('error_occurred', Date.now(), 'error');`,
            tests: [
              { type: "contains", value: "domain?: string" },
              { type: "contains", value: "currency: string = 'USD'" },
              { type: "contains", value: "className?: string" }
            ],
            debuggingTip: `Common mistakes:
• Optional (?) vs default (=)? Optional gives you Type | undefined to handle. Default gives you a guaranteed value.
• Putting optional before required? function fn(opt?: string, req: string) is a TypeScript error.
• Not handling undefined optional? if (className !== undefined) before using className.toString() etc.
• Nullish coalescing (??) vs OR (||)? ?? only replaces null/undefined. || replaces any falsy (0, '', false) — big difference!
• Default parameter types auto-inferred: currency: string = 'USD' — TypeScript infers string from 'USD'.`
          }
        },
        {
          id: "typescript-phase2-m1-l3",
          title: "Function Overloads",
          explanation: `Sometimes a function genuinely behaves differently based on what you pass 
in. In JavaScript, you'd handle this with runtime checks. In TypeScript, 
function overloads let you declare multiple type signatures for one 
function, precisely documenting each valid combination of inputs and 
outputs. The caller sees only the overload signatures — TypeScript 
picks the right one based on the arguments. The implementation signature 
(the actual function body) is broader than all overloads and is not 
visible to callers. Overloads make your API intentions crystal clear.`,
          concept: `// Declare overloads first (no body):
function name(param: TypeA): ReturnA;
function name(param: TypeB): ReturnB;

// Then the implementation (broader types):
function name(param: TypeA | TypeB): ReturnA | ReturnB {
  // implementation handles all cases
}

Callers see only the overload signatures.
Implementation signature is NOT callable directly.
Use when: same function name, different input types → different output types.
Alternative: consider separate functions if behavior is truly different.`,
          example: `// Overload signatures (what callers see):
function createElement(tag: 'input'): HTMLInputElement;
function createElement(tag: 'div'): HTMLDivElement;
function createElement(tag: 'span'): HTMLSpanElement;

// Implementation (not directly callable):
function createElement(tag: string): HTMLElement {
  return document.createElement(tag);
}

// TypeScript knows the exact return type:
const input = createElement('input');   // type: HTMLInputElement
const div = createElement('div');       // type: HTMLDivElement

// Numeric overload example:
function double(x: string): string;
function double(x: number): number;
function double(x: string | number): string | number {
  if (typeof x === 'string') {
    return x + x;
  }
  return x * 2;
}

const s = double('ha');  // type: string → 'haha'
const n = double(5);     // type: number → 10
// TypeScript knows which type you get back!

// Practical: parsing function
function parse(value: string): number;
function parse(value: number): string;
function parse(value: string | number): number | string {
  if (typeof value === 'string') {
    return Number(value);
  }
  return String(value);
}

const num = parse('42');   // type: number
const str = parse(42);     // type: string`,
          exercise: {
            prompt: `Write function overloads:
1. Write overloads for 'wrap' function:
   - wrap(value: string): string[] → wraps string in array
   - wrap(value: number): number[] → wraps number in array
   - Implementation handles both cases
2. Write overloads for 'toArray' function:
   - toArray(value: string): string[] → splits by comma
   - toArray(value: number): number[] → returns [value]
3. Call both functions and log results — verify TypeScript infers correct return types`,
            starterCode: `// Step 1: wrap overloads
function wrap(value: string): string[];
function wrap(value: number): number[];
function wrap(value: string | number): string[] | number[] {
  
}

const wrappedStr = wrap('hello');   // should be string[]
const wrappedNum = wrap(42);        // should be number[]
console.log(wrappedStr);
console.log(wrappedNum);

// Step 2: toArray overloads
function toArray(value: string): string[];
function toArray(value: number): number[];
function toArray(value: string | number): string[] | number[] {
  
}

console.log(toArray('apple,banana,cherry'));
console.log(toArray(42));
`,
            solution: `function wrap(value: string): string[];
function wrap(value: number): number[];
function wrap(value: string | number): string[] | number[] {
  if (typeof value === 'string') {
    return [value];
  }
  return [value];
}

const wrappedStr = wrap('hello');
const wrappedNum = wrap(42);
console.log(wrappedStr);
console.log(wrappedNum);

function toArray(value: string): string[];
function toArray(value: number): number[];
function toArray(value: string | number): string[] | number[] {
  if (typeof value === 'string') {
    return value.split(',').map(s => s.trim());
  }
  return [value];
}

console.log(toArray('apple,banana,cherry'));
console.log(toArray(42));`,
            tests: [
              { type: "contains", value: "function wrap(value: string): string[]" },
              { type: "contains", value: "function wrap(value: number): number[]" },
              { type: "contains", value: "function toArray" }
            ],
            debuggingTip: `Common mistakes:
• Implementation signature visible to callers? It shouldn't be — overload signatures are what callers use.
• Implementation types too narrow? The implementation signature must be a SUPERSET of all overloads.
• Return type not matching overload? If overload says string[] but implementation returns number[], TypeScript errors.
• Only one overload? That's not really overloading — just use a union type directly.
• Overloads vs union types: use overloads when INPUT type determines OUTPUT type. Use unions when they're independent.`
          }
        },
        {
          id: "typescript-phase2-m1-l4",
          title: "Higher-Order Functions and Callbacks",
          explanation: `Higher-order functions — functions that take other functions as arguments 
or return functions — are everywhere in TypeScript. Array methods like 
.map(), .filter(), .reduce() all take callback functions. Event handlers, 
setTimeout, and custom utilities all work this way. Properly typing 
callbacks is a key TypeScript skill. You annotate the callback parameter 
as a function type: (item: Type) => ReturnType. TypeScript then ensures 
any function you pass matches that signature exactly, preventing the 
classic bug of passing a callback with wrong parameter types.`,
          concept: `// Callback type annotations:
function process(items: number[], fn: (n: number) => number): number[]

// Arrow type alias:
type Callback = (value: string) => void;
type Predicate<T> = (item: T) => boolean;
type Transformer<T, R> = (item: T) => R;

// Built-in array method callback types (TypeScript knows these):
array.map(item => ...)         // callback: (item: T) => U
array.filter(item => ...)      // callback: (item: T) => boolean
array.reduce((acc, item) => .) // callback: (acc: U, item: T) => U
array.forEach(item => ...)     // callback: (item: T) => void`,
          example: `// Function accepting a callback
function applyToAll(numbers: number[], fn: (n: number) => number): number[] {
  return numbers.map(fn);
}

const doubled = applyToAll([1, 2, 3, 4, 5], n => n * 2);
console.log(doubled);   // [2, 4, 6, 8, 10]

// Filter with typed predicate
function filterItems<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

const evens = filterItems([1,2,3,4,5,6], n => n % 2 === 0);
const longWords = filterItems(['hi', 'hello', 'hey', 'howdy'], w => w.length > 3);

// Function returning a function (closure)
function multiplier(factor: number): (n: number) => number {
  return (n: number) => n * factor;
}

const triple = multiplier(3);
const quadruple = multiplier(4);
console.log(triple(5));     // 15
console.log(quadruple(5));  // 20

// Typed event handler pattern
type EventHandler<T> = (event: T) => void;

function addEventListener<T>(
  eventName: string,
  handler: EventHandler<T>
): void {
  console.log(\`Registered handler for \${eventName}\`);
}

// Composing functions
function compose<A, B, C>(
  f: (a: A) => B,
  g: (b: B) => C
): (a: A) => C {
  return (a: A) => g(f(a));
}

const addOneAndDouble = compose(
  (n: number) => n + 1,
  (n: number) => n * 2
);
console.log(addOneAndDouble(5));  // (5+1)*2 = 12`,
          exercise: {
            prompt: `Build higher-order functions:
1. Write applyTransform(strings: string[], fn: (s: string) => string): string[] — applies fn to each string
2. Use it with: (a) toUpperCase transformer, (b) reverse string transformer, (c) add '!' transformer
3. Write makeAdder(x: number): (y: number) => number — returns a function that adds x to its argument
4. Create add5 and add10 using makeAdder — test them
5. Write pipe(value: number, ...fns: Array<(n: number) => number>): number that applies functions left to right
6. Test pipe with: start=5, double it, add 3, square it`,
            starterCode: `// Step 1 & 2: applyTransform
function applyTransform(strings: string[], fn: (s: string) => string): string[] {
  
}
const words = ['hello', 'world', 'typescript'];
console.log(applyTransform(words, s => s.toUpperCase()));
console.log(applyTransform(words, s => s.split('').reverse().join('')));
console.log(applyTransform(words, s => s + '!'));

// Step 3 & 4: makeAdder closure
function makeAdder(x: number): (y: number) => number {
  
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(3));    // 8
console.log(add10(3));   // 13

// Step 5 & 6: pipe
function pipe(value: number, ...fns: Array<(n: number) => number>): number {
  
}
console.log(pipe(5,
  n => n * 2,    // 10
  n => n + 3,    // 13
  n => n ** 2    // 169
));
`,
            solution: `function applyTransform(strings: string[], fn: (s: string) => string): string[] {
  return strings.map(fn);
}
const words = ['hello', 'world', 'typescript'];
console.log(applyTransform(words, s => s.toUpperCase()));
console.log(applyTransform(words, s => s.split('').reverse().join('')));
console.log(applyTransform(words, s => s + '!'));

function makeAdder(x: number): (y: number) => number {
  return (y: number) => x + y;
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(3));
console.log(add10(3));

function pipe(value: number, ...fns: Array<(n: number) => number>): number {
  return fns.reduce((acc, fn) => fn(acc), value);
}
console.log(pipe(5,
  n => n * 2,
  n => n + 3,
  n => n ** 2
));`,
            tests: [
              { type: "contains", value: "fn: (s: string) => string" },
              { type: "contains", value: "makeAdder(x: number): (y: number) => number" },
              { type: "contains", value: "...fns: Array<(n: number) => number>" }
            ],
            debuggingTip: `Common mistakes:
• Callback parameter types wrong? The callback signature must exactly match what you pass.
• Rest parameters (...fns) must be last parameter — can't have required params after rest.
• Array<(n: number) => number> vs ((n: number) => number)[]? Both are valid syntax for same type.
• Closure captures by reference: makeAdder(x) captures x from outer scope — x is evaluated when called.
• reduce initial value type: fns.reduce((acc, fn) => fn(acc), value) — initial value 'value' determines accumulator type.`
          }
        }
      ]
    },
    {
      id: "typescript-phase3-m1",
      title: "Phase 3 — Objects and Interfaces",
      duration: "3 hours",
      lessons: [
        {
          id: "typescript-phase3-m1-l1",
          title: "Interfaces — Defining Object Shapes",
          explanation: `Interfaces are one of TypeScript's most powerful features. An interface 
defines the exact shape an object must have — which properties exist, 
what types they hold, and which are optional. Think of an interface as 
a contract: "any object claiming to be a User MUST have a name, email, 
and age." TypeScript enforces this contract at compile time. This is 
how large teams coordinate — one developer defines the interface, 
and TypeScript ensures everyone who creates or uses that data type 
does so correctly. Interfaces are the primary way to model your 
application's data structures in TypeScript.`,
          concept: `interface InterfaceName {
  requiredProp: Type;
  optionalProp?: Type;
  readonly fixedProp: Type;
}

required   → must be present in every object
optional ? → may or may not be present (Type | undefined)
readonly   → can be set at creation but never changed after
index signature: [key: string]: Type → any string key maps to Type

Interface vs type alias:
interface → only for objects, supports extends and declaration merging
type      → any type, supports unions and intersections
General rule: prefer interface for object shapes`,
          example: `// Basic interface
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;          // optional
  readonly createdAt: Date; // can't change after creation
}

// Valid user object
const alice: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  createdAt: new Date(),
};

// Optional property works with or without:
const bob: User = {
  id: 2,
  name: 'Bob',
  email: 'bob@example.com',
  age: 30,
  createdAt: new Date(),
};

// TypeScript catches missing required properties:
// const bad: User = { id: 3, name: 'Bad' }; // ✗ Error: missing 'email' and 'createdAt'

// TypeScript catches extra unknown properties:
// const extra: User = { id: 4, name: 'X', email: 'x@x.com', createdAt: new Date(), foo: 'bar' };
// ✗ Error: 'foo' does not exist in type 'User'

// Using interface as function parameter type
function displayUser(user: User): string {
  const age = user.age !== undefined ? \`, age \${user.age}\` : '';
  return \`\${user.name} (\${user.email})\${age}\`;
}

console.log(displayUser(alice));
console.log(displayUser(bob));

// Interface for function shape
interface Greeter {
  (name: string): string;
}

const greet: Greeter = (name) => \`Hello, \${name}!\`;`,
          exercise: {
            prompt: `Build and use interfaces:
1. Define interface Product with: id (number), name (string), price (number), category (string), inStock (boolean), description? (optional string)
2. Create two Product objects — one with description, one without
3. Write function formatProduct(p: Product): string returning "Name - $Price (category)" format
4. Write function applyDiscount(p: Product, percent: number): Product returning a new product with discounted price
5. Define interface Address with: street, city, country (all strings), postalCode (string), apartment? (optional string)
6. Define interface Customer extending concepts from both: id, name, email, address (Address type), purchases (number)`,
            starterCode: `// Step 1: Product interface
interface Product {
  
}

// Step 2: Two product objects
const laptop: Product = {
  
};
const book: Product = {
  
};

// Step 3: formatProduct function
function formatProduct(p: Product): string {
  
}
console.log(formatProduct(laptop));
console.log(formatProduct(book));

// Step 4: applyDiscount
function applyDiscount(p: Product, percent: number): Product {
  
}
console.log(applyDiscount(laptop, 10));

// Step 5: Address interface
interface Address {
  
}

// Step 6: Customer interface using Address
interface Customer {
  
}

const customer: Customer = {
  
};
console.log(customer);
`,
            solution: `interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  description?: string;
}

const laptop: Product = {
  id: 1,
  name: 'TypeScript Laptop',
  price: 999.99,
  category: 'Electronics',
  inStock: true,
  description: 'A powerful laptop for coding',
};

const book: Product = {
  id: 2,
  name: 'Learning TypeScript',
  price: 39.99,
  category: 'Books',
  inStock: true,
};

function formatProduct(p: Product): string {
  return \`\${p.name} - \$\${p.price.toFixed(2)} (\${p.category})\`;
}
console.log(formatProduct(laptop));
console.log(formatProduct(book));

function applyDiscount(p: Product, percent: number): Product {
  return {
    ...p,
    price: parseFloat((p.price * (1 - percent / 100)).toFixed(2)),
  };
}
console.log(applyDiscount(laptop, 10));

interface Address {
  street: string;
  city: string;
  country: string;
  postalCode: string;
  apartment?: string;
}

interface Customer {
  id: number;
  name: string;
  email: string;
  address: Address;
  purchases: number;
}

const customer: Customer = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  address: {
    street: '123 Main St',
    city: 'Paris',
    country: 'France',
    postalCode: '75001',
  },
  purchases: 5,
};
console.log(customer);`,
            tests: [
              { type: "contains", value: "interface Product" },
              { type: "contains", value: "description?: string" },
              { type: "contains", value: "interface Address" },
              { type: "contains", value: "interface Customer" }
            ],
            debuggingTip: `Common mistakes:
• Extra properties on object literals? TypeScript's excess property check blocks unknown properties. Use spread or type assertion if intentional.
• Missing required property? TypeScript will list every missing field — add them all.
• Nested interfaces: address: Address means the address field must itself satisfy the Address interface.
• readonly vs const? readonly is for object properties. const is for variable bindings. Both together give maximum immutability.
• interface vs type for objects? Both work. Prefer interface for data shapes — it supports extends and gives better error messages.`
          }
        },
        {
          id: "typescript-phase3-m1-l2",
          title: "Extending Interfaces and Intersection Types",
          explanation: `Real applications have complex data hierarchies. A Manager is an Employee 
with extra properties. A PremiumUser is a User with additional features. 
TypeScript gives you two ways to compose types: interface extends creates 
a new interface that inherits all properties from another and adds more. 
Intersection types (&) combine two or more types into one that has ALL 
properties from all types. Understanding both lets you build flexible, 
hierarchical type systems that mirror how your data actually relates. 
Extension is for "is-a" relationships; intersection is for mixing in 
capabilities.`,
          concept: `// Interface extension (is-a relationship):
interface Child extends Parent {
  extraProp: Type;
}
// Child has all Parent properties PLUS extraProp

// Multiple extension:
interface C extends A, B { }

// Intersection type (has-all):
type Combined = TypeA & TypeB;
// Combined must satisfy BOTH TypeA AND TypeB

// Extension vs Intersection:
// extend = inherit and specialize
// & = combine independently defined types

// Extending multiple interfaces:
interface Serializable { serialize(): string; }
interface Printable { print(): void; }
interface Document extends Serializable, Printable {
  content: string;
}`,
          example: `// Base interface
interface Animal {
  name: string;
  age: number;
  sound(): string;
}

// Extended interface — Dog is-an Animal
interface Dog extends Animal {
  breed: string;
  fetch(item: string): void;
}

// Extended further
interface TrainedDog extends Dog {
  tricks: string[];
  performTrick(trick: string): boolean;
}

const rex: TrainedDog = {
  name: 'Rex',
  age: 3,
  breed: 'Labrador',
  tricks: ['sit', 'stay', 'fetch'],
  sound: () => 'Woof!',
  fetch: (item) => console.log(\`Rex fetches \${item}!\`),
  performTrick: (trick) => {
    console.log(\`Rex performs: \${trick}\`);
    return true;
  },
};

// Intersection types — mixing capabilities
interface Flyable {
  fly(): void;
  altitude: number;
}

interface Swimmable {
  swim(): void;
  depth: number;
}

// Duck can BOTH fly and swim
type Duck = Animal & Flyable & Swimmable;

// Practical intersection: adding metadata
interface WithTimestamps {
  createdAt: Date;
  updatedAt: Date;
}

interface WithId {
  id: number;
}

interface BaseUser {
  name: string;
  email: string;
}

// Combine: a complete User has all three
type PersistedUser = BaseUser & WithId & WithTimestamps;

const user: PersistedUser = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  createdAt: new Date(),
  updatedAt: new Date(),
};`,
          exercise: {
            prompt: `Build a type hierarchy:
1. Define interface Vehicle with: make (string), model (string), year (number), startEngine(): string
2. Define interface ElectricVehicle extends Vehicle with: batteryCapacity (number), chargeLevel (number), charge(): void
3. Define interface AutonomousVehicle extends Vehicle with: autopilotEnabled (boolean), enableAutopilot(): void
4. Define type FullySelfDrivingEV = ElectricVehicle & AutonomousVehicle
5. Create a FullySelfDrivingEV object with all required properties and methods
6. Define interface WithMaintenance with lastService (Date), nextService (Date) and intersect with ElectricVehicle`,
            starterCode: `// Step 1: Vehicle base interface
interface Vehicle {
  
}

// Step 2: ElectricVehicle extends Vehicle
interface ElectricVehicle extends Vehicle {
  
}

// Step 3: AutonomousVehicle extends Vehicle
interface AutonomousVehicle extends Vehicle {
  
}

// Step 4: Intersection type
type FullySelfDrivingEV = ElectricVehicle & AutonomousVehicle;

// Step 5: Create an instance
const tesla: FullySelfDrivingEV = {
  
};
console.log(tesla.startEngine());

// Step 6: WithMaintenance intersection
interface WithMaintenance {
  
}

type MaintainableEV = ElectricVehicle & WithMaintenance;
const serviceableEV: MaintainableEV = {
  
};
console.log(serviceableEV);
`,
            solution: `interface Vehicle {
  make: string;
  model: string;
  year: number;
  startEngine(): string;
}

interface ElectricVehicle extends Vehicle {
  batteryCapacity: number;
  chargeLevel: number;
  charge(): void;
}

interface AutonomousVehicle extends Vehicle {
  autopilotEnabled: boolean;
  enableAutopilot(): void;
}

type FullySelfDrivingEV = ElectricVehicle & AutonomousVehicle;

const tesla: FullySelfDrivingEV = {
  make: 'Tesla',
  model: 'Model S',
  year: 2024,
  batteryCapacity: 100,
  chargeLevel: 80,
  autopilotEnabled: false,
  startEngine: () => 'Electric motor humming...',
  charge: () => console.log('Charging...'),
  enableAutopilot: () => console.log('Autopilot engaged'),
};
console.log(tesla.startEngine());

interface WithMaintenance {
  lastService: Date;
  nextService: Date;
}

type MaintainableEV = ElectricVehicle & WithMaintenance;

const serviceableEV: MaintainableEV = {
  make: 'Rivian',
  model: 'R1T',
  year: 2024,
  batteryCapacity: 135,
  chargeLevel: 60,
  lastService: new Date('2024-01-01'),
  nextService: new Date('2024-07-01'),
  startEngine: () => 'Rivian ready',
  charge: () => console.log('Rivian charging'),
};
console.log(serviceableEV);`,
            tests: [
              { type: "contains", value: "interface ElectricVehicle extends Vehicle" },
              { type: "contains", value: "type FullySelfDrivingEV = ElectricVehicle & AutonomousVehicle" },
              { type: "contains", value: "interface WithMaintenance" }
            ],
            debuggingTip: `Common mistakes:
• Intersection (&) requires ALL properties from ALL types — missing any one is an error.
• Conflicting property types in intersection? type A = {x: string} & {x: number} makes x: never — impossible to satisfy.
• extends vs &? Both produce similar results for objects, but extends gives better error messages and supports augmentation.
• Method implementations in objects: startEngine: () => 'text' is a method stored as a function property — valid.
• Forgetting methods when creating objects? Interface methods are required too — not just data properties.`
          }
        },
        {
          id: "typescript-phase3-m1-l3",
          title: "Index Signatures and Record Types",
          explanation: `Sometimes you don't know all the property names in advance — a dictionary, 
a cache, a set of user preferences, or any key-value store. TypeScript's 
index signatures let you type these dynamic objects: [key: string]: Type 
means "this object can have any string keys, and their values must all 
be of Type". The built-in Record<Keys, Values> utility type is a cleaner 
way to express the same idea. Understanding these patterns is essential 
for working with APIs, configuration objects, and any data that comes 
in as flexible key-value maps.`,
          concept: `// Index signature:
interface Dictionary {
  [key: string]: string;
}

// Record utility type (cleaner):
type Dictionary = Record<string, string>;
type ScoreMap = Record<string, number>;

// Record with literal key union (restricted keys):
type Config = Record<'host' | 'port' | 'path', string>;

// Mixed: known properties + index signature:
interface SpecialDict {
  required: string;        // known property
  [key: string]: string;  // any other string keys
}
// Note: required must be compatible with index type`,
          example: `// Basic index signature
interface WordCount {
  [word: string]: number;
}

const counts: WordCount = {};
counts['hello'] = 5;
counts['world'] = 3;
console.log(counts['hello']); // 5

// Record type — same thing, cleaner syntax
const scores: Record<string, number> = {
  Alice: 95,
  Bob: 87,
  Charlie: 92,
};

// Adding and reading
scores['Diana'] = 88;
console.log(scores['Alice']); // 95

// Record with union keys — restricts allowed keys
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type MethodConfig = Record<HTTPMethod, { timeout: number; retries: number }>;

const apiConfig: MethodConfig = {
  GET:    { timeout: 5000, retries: 3 },
  POST:   { timeout: 10000, retries: 1 },
  PUT:    { timeout: 10000, retries: 1 },
  DELETE: { timeout: 5000, retries: 0 },
  PATCH:  { timeout: 10000, retries: 1 },
};

// Iterating typed dictionaries
function sumValues(dict: Record<string, number>): number {
  return Object.values(dict).reduce((sum, val) => sum + val, 0);
}

console.log(sumValues(scores)); // sum of all scores

// Practical: cache
const cache: Record<string, { data: string; timestamp: number }> = {};

function getFromCache(key: string): string | null {
  const entry = cache[key];
  return entry ? entry.data : null;
}`,
          exercise: {
            prompt: `Work with index signatures and Record:
1. Create type ColorMap = Record<string, string> — create a colors map with 3 entries
2. Create type EventCounts = Record<string, number> — build a function countEvents(events: string[]): EventCounts that counts occurrences of each event
3. Define type DayOfWeek = 'Mon'|'Tue'|'Wed'|'Thu'|'Fri'|'Sat'|'Sun' and create Record<DayOfWeek, boolean> for workdays
4. Write function mergeDicts(a: Record<string, number>, b: Record<string, number>): Record<string, number> that combines two dicts, summing values for duplicate keys
5. Test mergeDicts and log the result`,
            starterCode: `// Step 1: ColorMap
type ColorMap = Record<string, string>;
const colors: ColorMap = {
  
};

// Step 2: countEvents function
type EventCounts = Record<string, number>;

function countEvents(events: string[]): EventCounts {
  
}
const events = ['click', 'hover', 'click', 'scroll', 'click', 'hover'];
console.log(countEvents(events));

// Step 3: DayOfWeek Record
type DayOfWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
const isWorkday: Record<DayOfWeek, boolean> = {
  
};

// Step 4: mergeDicts
function mergeDicts(
  a: Record<string, number>,
  b: Record<string, number>
): Record<string, number> {
  
}

// Step 5: Test
const dict1 = { apples: 3, bananas: 2 };
const dict2 = { bananas: 5, oranges: 4 };
console.log(mergeDicts(dict1, dict2));
`,
            solution: `type ColorMap = Record<string, string>;
const colors: ColorMap = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  accent: '#F59E0B',
};

type EventCounts = Record<string, number>;

function countEvents(events: string[]): EventCounts {
  const counts: EventCounts = {};
  for (const event of events) {
    counts[event] = (counts[event] ?? 0) + 1;
  }
  return counts;
}
const events = ['click', 'hover', 'click', 'scroll', 'click', 'hover'];
console.log(countEvents(events));

type DayOfWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
const isWorkday: Record<DayOfWeek, boolean> = {
  Mon: true,
  Tue: true,
  Wed: true,
  Thu: true,
  Fri: true,
  Sat: false,
  Sun: false,
};

function mergeDicts(
  a: Record<string, number>,
  b: Record<string, number>
): Record<string, number> {
  const result: Record<string, number> = { ...a };
  for (const [key, value] of Object.entries(b)) {
    result[key] = (result[key] ?? 0) + value;
  }
  return result;
}

const dict1 = { apples: 3, bananas: 2 };
const dict2 = { bananas: 5, oranges: 4 };
console.log(mergeDicts(dict1, dict2));`,
            tests: [
              { type: "contains", value: "Record<string, string>" },
              { type: "contains", value: "EventCounts" },
              { type: "contains", value: "Record<DayOfWeek, boolean>" }
            ],
            debuggingTip: `Common mistakes:
• Accessing index signature result? It's Type | undefined unless you check first — use optional chaining or nullish coalescing.
• Record with union keys requires ALL keys: Record<'a'|'b', string> must have both 'a' and 'b'.
• Index signature type must be compatible with specific properties: interface { id: number; [key: string]: string } fails because id is number not string.
• Object.entries() returns [string, Type][] — TypeScript knows the value type from the Record definition.
• Initializing counts: counts[key] = (counts[key] ?? 0) + 1 — the ?? handles the undefined case safely.`
          }
        },
        {
          id: "typescript-phase3-m1-l4",
          title: "Readonly and Immutability",
          explanation: `Bugs caused by accidentally mutating data are some of the hardest to track 
down. TypeScript's readonly keyword and Readonly<T> utility type let you 
enforce immutability at the type level. A readonly property can be set 
when the object is created but never changed afterward. const prevents 
reassigning a variable but doesn't protect the object's contents — 
readonly protects the contents. For deeper immutability, as const 
creates deeply readonly literal types. Understanding immutability 
patterns is a hallmark of senior-level TypeScript and prevents 
entire classes of subtle bugs.`,
          concept: `readonly prop: Type          → property cannot be reassigned
Readonly<T>                  → makes ALL properties of T readonly
ReadonlyArray<T> or readonly T[] → immutable array
as const                     → deeply readonly literal types

const vs readonly:
const x = obj;              → x can't be reassigned, but obj.prop CAN change
const obj = { readonly x: 1 } → x inside obj can't change

Readonly utility:
type ReadonlyUser = Readonly<User>;
// All User properties become readonly`,
          example: `// Readonly properties
interface Config {
  readonly host: string;
  readonly port: number;
  readonly debug: boolean;
}

const config: Config = {
  host: 'localhost',
  port: 3000,
  debug: false,
};

// config.host = 'production.com'; // ✗ Error: Cannot assign to readonly property
console.log(config.host); // ✓ reading is fine

// Readonly utility type
interface User {
  id: number;
  name: string;
  email: string;
}

type ReadonlyUser = Readonly<User>;
// Equivalent to:
// { readonly id: number; readonly name: string; readonly email: string; }

const user: ReadonlyUser = { id: 1, name: 'Alice', email: 'a@b.com' };
// user.name = 'Bob'; // ✗ Error

// Readonly arrays
const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// numbers.push(6); // ✗ Error: push doesn't exist on ReadonlyArray
console.log(numbers[0]); // ✓ reading is fine

// as const — deeply readonly literal types
const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

// ROUTES.HOME = '/home'; // ✗ Error: readonly
// ROUTES has type: { readonly HOME: "/", readonly ABOUT: "/about", ... }
// The VALUES are literal types too!

type Route = typeof ROUTES[keyof typeof ROUTES]; // '/' | '/about' | '/contact'

// Practical pattern: config object
const API_CONFIG = {
  BASE_URL: 'https://api.example.com',
  VERSION: 'v2',
  TIMEOUT: 5000,
} as const;

type ApiUrl = \`\${typeof API_CONFIG.BASE_URL}/\${typeof API_CONFIG.VERSION}\`;`,
          exercise: {
            prompt: `Practice immutability patterns:
1. Define interface AppConfig with all readonly properties: appName (string), version (string), maxUsers (number), features (readonly string[])
2. Create an AppConfig object and try to modify it (show the error in a comment)
3. Define interface MutableUser with name, email, age — create Readonly<MutableUser> alias called FrozenUser
4. Create a FrozenUser and verify it can't be modified
5. Create const COLORS = { RED: '#ff0000', GREEN: '#00ff00', BLUE: '#0000ff' } as const
6. Extract the type of all color values using typeof and keyof
7. Write function getColor(key: keyof typeof COLORS): string`,
            starterCode: `// Step 1: AppConfig with readonly properties
interface AppConfig {
  
}

// Step 2: Create and try to modify
const config: AppConfig = {
  
};
// config.appName = 'New Name'; // Error: ...

// Step 3: Readonly utility type
interface MutableUser {
  name: string;
  email: string;
  age: number;
}
type FrozenUser = Readonly<MutableUser>;

// Step 4: Create FrozenUser
const frozenUser: FrozenUser = {
  
};
// frozenUser.name = 'Bob'; // Error: ...

// Step 5: as const colors
const COLORS = {
  
} as const;

// Step 6: Extract color value type
type ColorValue = typeof COLORS[keyof typeof COLORS];

// Step 7: getColor function
function getColor(key: keyof typeof COLORS): string {
  
}
console.log(getColor('RED'));
`,
            solution: `interface AppConfig {
  readonly appName: string;
  readonly version: string;
  readonly maxUsers: number;
  readonly features: readonly string[];
}

const config: AppConfig = {
  appName: 'FluentlyCode',
  version: '1.0.0',
  maxUsers: 1000,
  features: ['lessons', 'quizzes', 'ai-review'],
};
// config.appName = 'New Name'; // Error: Cannot assign to 'appName' because it is a read-only property

interface MutableUser {
  name: string;
  email: string;
  age: number;
}
type FrozenUser = Readonly<MutableUser>;

const frozenUser: FrozenUser = {
  name: 'Alice',
  email: 'alice@example.com',
  age: 28,
};
// frozenUser.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property

const COLORS = {
  RED: '#ff0000',
  GREEN: '#00ff00',
  BLUE: '#0000ff',
} as const;

type ColorValue = typeof COLORS[keyof typeof COLORS];

function getColor(key: keyof typeof COLORS): string {
  return COLORS[key];
}
console.log(getColor('RED'));`,
            tests: [
              { type: "contains", value: "readonly appName: string" },
              { type: "contains", value: "Readonly<MutableUser>" },
              { type: "contains", value: "as const" },
              { type: "contains", value: "keyof typeof COLORS" }
            ],
            debuggingTip: `Common mistakes:
• const doesn't make object properties readonly! const x = {a: 1} — x can't be reassigned but x.a = 2 works. Use readonly for properties.
• readonly array vs Readonly<T[]>? readonly number[] prevents push/pop/splice. Readonly<number[]> is equivalent.
• as const on primitives? 'hello' as const has type "hello" (literal), not string.
• keyof typeof COLORS gives 'RED' | 'GREEN' | 'BLUE' — the keys as a union of string literals.
• Shallow vs deep readonly? Readonly<T> makes TOP-LEVEL properties readonly. Nested objects still mutable. Use recursive readonly for deep.`
          }
        }
      ]
    },
    {
      id: "typescript-phase4-m1",
      title: "Phase 4 — Arrays, Tuples, and Generics",
      duration: "2.5 hours",
      lessons: [
        {
          id: "typescript-phase4-m1-l1",
          title: "Typed Arrays and Tuples",
          explanation: `TypeScript's typed arrays ensure every element in a collection has the 
same type. If you declare string[], TypeScript prevents you from ever 
accidentally pushing a number into it. Typed arrays also mean method 
callbacks are automatically typed — in numbers.map(n => n * 2), 
TypeScript knows n is a number and will catch n.toUpperCase() as an 
error. Tuples are arrays with a fixed length where each position has 
a specific type — perfect for representing coordinate pairs, RGB colors, 
database rows, or any data where position has meaning.`,
          concept: `Array types:
string[]          → array of strings (preferred syntax)
Array<string>     → same thing, generic syntax
(string | number)[] → array of string or number

Tuple types (fixed length, typed by position):
[string, number]        → exactly 2 elements: string then number
[string, number, boolean] → exactly 3 elements
[string, ...number[]]   → string then any number of numbers (rest)

Tuple vs Array:
tuple: fixed length, each position typed differently
array: variable length, all elements same type`,
          example: `// Typed arrays
const names: string[] = ['Alice', 'Bob', 'Charlie'];
const scores: number[] = [95, 87, 92];
const flags: boolean[] = [true, false, true];

// names.push(42); // ✗ Error: number not assignable to string

// Mixed array
const mixed: (string | number)[] = ['Alice', 95, 'Bob', 87];

// Array methods preserve types
const doubled = scores.map(n => n * 2);  // type: number[]
const passing = scores.filter(n => n >= 90);  // type: number[]
const total = scores.reduce((sum, n) => sum + n, 0);  // type: number

// Tuples — fixed position typing
type Pair = [string, number];
type RGB = [number, number, number];
type Point3D = [number, number, number];

const alice: Pair = ['Alice', 28];
const crimson: RGB = [220, 20, 60];

// Destructuring tuples
const [name, age] = alice;
console.log(\`\${name} is \${age}\`);

const [r, g, b] = crimson;
console.log(\`rgb(\${r}, \${g}, \${b})\`);

// Tuple as function return (returning multiple values)
function divmod(a: number, b: number): [number, number] {
  return [Math.floor(a / b), a % b];
}

const [quotient, remainder] = divmod(17, 5);
console.log(\`17 / 5 = \${quotient} remainder \${remainder}\`);

// Named tuple elements (TypeScript 4.0+)
type Range = [min: number, max: number];
const priceRange: Range = [9.99, 99.99];`,
          exercise: {
            prompt: `Master typed arrays and tuples:
1. Declare typed arrays: string[] of fruits, number[] of prices, boolean[] of availability
2. Write function getExpensive(products: string[], prices: number[], threshold: number): string[] returning products above threshold (use filter with index)
3. Define tuple type Coordinate = [number, number] and Point3D = [number, number, number]
4. Write function distance(a: Coordinate, b: Coordinate): number using Pythagorean theorem
5. Write function parseCSVLine(line: string): [string, number, boolean] parsing "Alice,95,true"
6. Test parseCSVLine and destructure the result`,
            starterCode: `// Step 1: Typed arrays
const fruits: string[] =
const prices: number[] =
const available: boolean[] =

// Step 2: getExpensive using parallel arrays
function getExpensive(products: string[], prices: number[], threshold: number): string[] {
  
}
console.log(getExpensive(fruits, prices, 2.0));

// Step 3: Coordinate types
type Coordinate = [number, number];
type Point3D = [number, number, number];

// Step 4: distance function
function distance(a: Coordinate, b: Coordinate): number {
  
}
console.log(distance([0, 0], [3, 4])); // 5

// Step 5: parseCSVLine returning tuple
function parseCSVLine(line: string): [string, number, boolean] {
  
}

// Step 6: Test and destructure
const line = 'Alice,95,true';
const [personName, personScore, personPassed] = parseCSVLine(line);
console.log(personName, personScore, personPassed);
`,
            solution: `const fruits: string[] = ['apple', 'banana', 'mango', 'blueberry'];
const prices: number[] = [1.20, 0.50, 3.00, 4.50];
const available: boolean[] = [true, true, false, true];

function getExpensive(products: string[], prices: number[], threshold: number): string[] {
  return products.filter((_, index) => prices[index] > threshold);
}
console.log(getExpensive(fruits, prices, 2.0));

type Coordinate = [number, number];
type Point3D = [number, number, number];

function distance(a: Coordinate, b: Coordinate): number {
  return Math.sqrt((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2);
}
console.log(distance([0, 0], [3, 4]));

function parseCSVLine(line: string): [string, number, boolean] {
  const parts = line.split(',');
  return [parts[0], Number(parts[1]), parts[2] === 'true'];
}

const line = 'Alice,95,true';
const [personName, personScore, personPassed] = parseCSVLine(line);
console.log(personName, personScore, personPassed);`,
            tests: [
              { type: "contains", value: "fruits: string[]" },
              { type: "contains", value: "type Coordinate = [number, number]" },
              { type: "contains", value: "): [string, number, boolean]" }
            ],
            debuggingTip: `Common mistakes:
• Tuple length: [number, number] must have EXACTLY 2 elements — not 1, not 3.
• Tuple vs Array in function returns? Explicit tuple return type needed — TypeScript infers arrays otherwise.
• Destructuring mismatches? const [a, b, c] = tuple of length 2 — c is undefined (error with strict tuples).
• Array filter with index: .filter((item, index) => prices[index] > threshold) — both item and index available.
• Tuple element access: tuple[0] has the type of first element, tuple[1] has second — TypeScript tracks these.`
          }
        },
        {
          id: "typescript-phase4-m1-l2",
          title: "Generics — Reusable Type-Safe Code",
          explanation: `Generics are TypeScript's most powerful feature for writing reusable code. 
Without generics, you'd have to write separate functions for every type: 
getFirstString, getFirstNumber, getFirstUser. With generics, you write 
it once: getFirst<T> works for any type T. The T is a type parameter — 
a placeholder that TypeScript fills in based on how you call the function. 
Generics are what makes TypeScript's standard library work: Array<T>, 
Promise<T>, Map<K, V> are all generic. Learning to write generic 
functions is the bridge from beginner to intermediate TypeScript.`,
          concept: `function name<T>(param: T): T { }
// T is a type parameter — filled in at call time

// Calling:
name<string>('hello');  // explicit: T = string
name('hello');           // inferred: T = string

// Multiple type params:
function pair<K, V>(key: K, value: V): [K, V] { }

// Constraints — T must have certain properties:
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// Default type param:
function wrap<T = string>(value: T): T[] { }`,
          example: `// Basic generic function
function identity<T>(value: T): T {
  return value;
}

identity<string>('hello');  // type: string
identity<number>(42);        // type: number
identity(true);              // inferred: boolean

// Generic first/last functions
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

const firstStr = first(['a', 'b', 'c']);   // type: string | undefined
const firstNum = first([1, 2, 3]);         // type: number | undefined

// Generic pair
function makePair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

const pair = makePair('name', 'Alice');    // type: [string, string]
const pair2 = makePair('score', 95);      // type: [string, number]

// Generic with constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: 'Alice', age: 28, active: true };
const name = getProperty(user, 'name');    // type: string
const age = getProperty(user, 'age');      // type: number
// getProperty(user, 'foo');              // ✗ Error: 'foo' not a key of user

// Generic container
interface Box<T> {
  value: T;
  label: string;
  transform: (val: T) => T;
}

const numberBox: Box<number> = {
  value: 42,
  label: 'Answer',
  transform: n => n * 2,
};`,
          exercise: {
            prompt: `Write generic functions and types:
1. Write generic function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> — returns new object with only specified keys
2. Write generic function zip<A, B>(a: A[], b: B[]): [A, B][] — pairs elements from two arrays
3. Write generic function groupBy<T, K extends string>(items: T[], keyFn: (item: T) => K): Record<K, T[]>
4. Define generic interface Stack<T> with push(item: T): void, pop(): T | undefined, peek(): T | undefined, size: number
5. Implement a class or object satisfying Stack<string> and test it`,
            starterCode: `// Step 1: pick function
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  
}
const user = { id: 1, name: 'Alice', email: 'a@b.com', age: 28 };
console.log(pick(user, ['name', 'email']));

// Step 2: zip function
function zip<A, B>(a: A[], b: B[]): [A, B][] {
  
}
console.log(zip(['a', 'b', 'c'], [1, 2, 3]));

// Step 3: groupBy function
function groupBy<T, K extends string>(
  items: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  
}

const people = [
  { name: 'Alice', dept: 'Engineering' },
  { name: 'Bob', dept: 'Marketing' },
  { name: 'Charlie', dept: 'Engineering' },
];
console.log(groupBy(people, p => p.dept as 'Engineering' | 'Marketing'));

// Step 4 & 5: Generic Stack interface and implementation
interface Stack<T> {
  
}

function createStack<T>(): Stack<T> {
  
}

const stringStack = createStack<string>();
stringStack.push('hello');
stringStack.push('world');
console.log(stringStack.peek());
console.log(stringStack.pop());
console.log(stringStack.size);
`,
            solution: `function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
}
const user = { id: 1, name: 'Alice', email: 'a@b.com', age: 28 };
console.log(pick(user, ['name', 'email']));

function zip<A, B>(a: A[], b: B[]): [A, B][] {
  const length = Math.min(a.length, b.length);
  return Array.from({ length }, (_, i) => [a[i], b[i]]);
}
console.log(zip(['a', 'b', 'c'], [1, 2, 3]));

function groupBy<T, K extends string>(
  items: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  const result = {} as Record<K, T[]>;
  for (const item of items) {
    const key = keyFn(item);
    if (!result[key]) result[key] = [];
    result[key].push(item);
  }
  return result;
}

const people = [
  { name: 'Alice', dept: 'Engineering' },
  { name: 'Bob', dept: 'Marketing' },
  { name: 'Charlie', dept: 'Engineering' },
];
console.log(groupBy(people, p => p.dept as 'Engineering' | 'Marketing'));

interface Stack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size: number;
}

function createStack<T>(): Stack<T> {
  const items: T[] = [];
  return {
    push: (item) => { items.push(item); },
    pop: () => items.pop(),
    peek: () => items[items.length - 1],
    get size() { return items.length; },
  };
}

const stringStack = createStack<string>();
stringStack.push('hello');
stringStack.push('world');
console.log(stringStack.peek());
console.log(stringStack.pop());
console.log(stringStack.size);`,
            tests: [
              { type: "contains", value: "function pick<T, K extends keyof T>" },
              { type: "contains", value: "function zip<A, B>" },
              { type: "contains", value: "interface Stack<T>" }
            ],
            debuggingTip: `Common mistakes:
• Generic constraint: K extends keyof T means K must be one of T's keys — prevents invalid key access.
• Type inference failing? Add explicit type params: fn<string>(...) to help TypeScript.
• Pick<T, K> utility type: built-in TypeScript — returns object type with only keys K from T.
• Generic interface vs generic function? Interface<T> binds T at object creation. function<T>() binds T at each call.
• as Record<K, T[]> assertion needed when building result from scratch — TypeScript can't verify empty object satisfies it yet.`
          }
        },
        {
          id: "typescript-phase4-m1-l3",
          title: "Utility Types — TypeScript's Built-in Toolkit",
          explanation: `TypeScript ships with a collection of utility types that transform existing 
types into new ones. These are built into the language and solve common 
transformation problems that would be tedious to write manually. 
Partial<T> makes all properties optional — perfect for update operations 
where you only change some fields. Required<T> is the opposite. Pick<T,K> 
extracts only certain properties. Omit<T,K> removes certain properties. 
These utilities let you derive new types from existing ones without 
duplication, keeping your type definitions DRY.`,
          concept: `Partial<T>          → all properties become optional
Required<T>         → all properties become required
Readonly<T>         → all properties become readonly
Pick<T, 'a'|'b'>   → only keep specified properties
Omit<T, 'a'|'b'>   → remove specified properties
Record<K, V>        → object with keys K and values V
Exclude<T, U>       → remove U from union T
Extract<T, U>       → keep only U from union T
NonNullable<T>      → remove null and undefined from T
ReturnType<F>       → get return type of function F
Parameters<F>       → get parameter types of function F as tuple`,
          example: `interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  role: 'admin' | 'user' | 'guest';
}

// Partial — all optional (great for update operations)
type UserUpdate = Partial<User>;
// { id?: number; name?: string; email?: string; ... }

function updateUser(id: number, changes: Partial<User>): void {
  console.log(\`Updating user \${id} with\`, changes);
}
updateUser(1, { name: 'Alice Updated' });  // ✓ only name
updateUser(1, { email: 'new@email.com', role: 'admin' }); // ✓ some

// Required — makes everything required
type RequiredUser = Required<User>;
// age is no longer optional!

// Pick — take only what you need
type UserPreview = Pick<User, 'id' | 'name'>;
// { id: number; name: string }

type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit — remove what you don't want
type PublicUser = Omit<User, 'id' | 'email'>;
// No id or email exposed publicly

type CreateUserDto = Omit<User, 'id'>;
// When creating, don't include id (DB generates it)

// Combining utilities
type PatchUserDto = Partial<Omit<User, 'id'>>;
// Can update any field except id, and all are optional

// ReturnType and Parameters
function getUser(id: number): User {
  return { id, name: 'Alice', email: 'a@b.com', role: 'user' };
}

type GetUserReturn = ReturnType<typeof getUser>;    // User
type GetUserParams = Parameters<typeof getUser>;    // [number]

// NonNullable
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;  // string`,
          exercise: {
            prompt: `Apply utility types to a real scenario:
1. Define interface BlogPost with: id, title, content, author, tags (string[]), publishedAt (Date | null), draft (boolean)
2. Create CreatePostDto = Omit<BlogPost, 'id' | 'publishedAt'> — for creating posts
3. Create UpdatePostDto = Partial<Omit<BlogPost, 'id'>> — for updating posts
4. Create PostPreview = Pick<BlogPost, 'id' | 'title' | 'author' | 'draft'> — for list views
5. Write function createPost(dto: CreatePostDto): BlogPost that adds id and publishedAt
6. Write function updatePost(id: number, dto: UpdatePostDto): void
7. Use ReturnType<typeof createPost> and verify it equals BlogPost`,
            starterCode: `// Step 1: BlogPost interface
interface BlogPost {
  
}

// Step 2: CreatePostDto
type CreatePostDto = Omit<BlogPost, 'id' | 'publishedAt'>;

// Step 3: UpdatePostDto
type UpdatePostDto =

// Step 4: PostPreview
type PostPreview =

// Step 5: createPost function
function createPost(dto: CreatePostDto): BlogPost {
  
}

// Step 6: updatePost function
function updatePost(id: number, dto: UpdatePostDto): void {
  console.log(\`Updating post \${id}:\`, dto);
}

// Test
const newPost = createPost({
  title: 'Learning TypeScript',
  content: 'TypeScript is amazing...',
  author: 'Alice',
  tags: ['typescript', 'programming'],
  draft: false,
});
console.log(newPost);

updatePost(1, { title: 'Updated Title', draft: true });

// Step 7: ReturnType verification
type CreatePostReturn = ReturnType<typeof createPost>;
// Should equal BlogPost
`,
            solution: `interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  tags: string[];
  publishedAt: Date | null;
  draft: boolean;
}

type CreatePostDto = Omit<BlogPost, 'id' | 'publishedAt'>;
type UpdatePostDto = Partial<Omit<BlogPost, 'id'>>;
type PostPreview = Pick<BlogPost, 'id' | 'title' | 'author' | 'draft'>;

function createPost(dto: CreatePostDto): BlogPost {
  return {
    ...dto,
    id: Math.floor(Math.random() * 10000),
    publishedAt: dto.draft ? null : new Date(),
  };
}

function updatePost(id: number, dto: UpdatePostDto): void {
  console.log(\`Updating post \${id}:\`, dto);
}

const newPost = createPost({
  title: 'Learning TypeScript',
  content: 'TypeScript is amazing...',
  author: 'Alice',
  tags: ['typescript', 'programming'],
  draft: false,
});
console.log(newPost);

updatePost(1, { title: 'Updated Title', draft: true });

type CreatePostReturn = ReturnType<typeof createPost>;`,
            tests: [
              { type: "contains", value: "interface BlogPost" },
              { type: "contains", value: "Omit<BlogPost" },
              { type: "contains", value: "Partial<Omit<BlogPost" },
              { type: "contains", value: "ReturnType<typeof createPost>" }
            ],
            debuggingTip: `Common mistakes:
• Partial doesn't deeply nest — Partial<{a: {b: string}}> makes 'a' optional but {b: string} is still required if 'a' is present.
• Omit vs Exclude? Omit removes object KEYS. Exclude removes from union TYPES. Different purposes.
• Pick requires valid keys — Pick<User, 'foo'> where 'foo' isn't a User key causes an error.
• Combining utilities: Partial<Omit<T, 'id'>> — read inside out: first Omit, then Partial on result.
• ReturnType requires typeof for function values: ReturnType<typeof createPost> not ReturnType<createPost>.`
          }
        }
      ]
    },
    {
      id: "typescript-phase5-m1",
      title: "Phase 5 — Classes and OOP",
      duration: "3 hours",
      lessons: [
        {
          id: "typescript-phase5-m1-l1",
          title: "Classes with Type Annotations",
          explanation: `TypeScript supercharges JavaScript classes with full type safety. Every 
property must be declared with its type at the top of the class body. 
Every method parameter and return type is annotated. TypeScript then 
verifies that you never misuse these members — you can't pass a string 
to a method expecting a number, and you can't access a property that 
doesn't exist. TypeScript classes also support features JavaScript 
doesn't: access modifiers (public, private, protected), readonly 
properties, and parameter properties that create and assign in one step.`,
          concept: `class ClassName {
  propertyName: Type;               // public by default
  private privateProp: Type;        // class-only access
  protected protectedProp: Type;    // class + subclass access
  readonly readonlyProp: Type;      // settable once, then immutable
  
  constructor(
    private name: string,  // parameter property: declares AND assigns
    public age: number,    // public parameter property
  ) { }
  
  methodName(param: Type): ReturnType { }
  private privateMethod(): void { }
  static staticMethod(): void { }
}`,
          example: `class BankAccount {
  private _balance: number;
  private readonly accountNumber: string;
  public owner: string;
  private transactions: string[] = [];
  
  constructor(owner: string, initialBalance: number = 0) {
    this.owner = owner;
    this._balance = initialBalance;
    this.accountNumber = \`ACC-\${Math.random().toString(36).slice(2, 9).toUpperCase()}\`;
  }
  
  // Getter — access like a property
  get balance(): number {
    return this._balance;
  }
  
  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Amount must be positive');
    this._balance += amount;
    this.transactions.push(\`+\${amount}\`);
  }
  
  withdraw(amount: number): boolean {
    if (amount > this._balance) return false;
    this._balance -= amount;
    this.transactions.push(\`-\${amount}\`);
    return true;
  }
  
  getStatement(): string {
    return [
      \`Account: \${this.accountNumber}\`,
      \`Owner: \${this.owner}\`,
      \`Balance: \$\${this._balance.toFixed(2)}\`,
      \`Transactions: \${this.transactions.join(', ')}\`,
    ].join('\\n');
  }
  
  static createJoint(owner1: string, owner2: string): BankAccount {
    return new BankAccount(\`\${owner1} & \${owner2}\`);
  }
}

const account = new BankAccount('Alice', 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getStatement());
// account._balance = 0; // ✗ Error: private
console.log(account.balance); // ✓ via getter`,
          exercise: {
            prompt: `Build a typed class:
1. Create class Product with: private _price (number), readonly id (number), public name (string), private _stock (number)
2. Constructor takes name, price, initialStock (default 0), generates id randomly
3. Add getter 'price' returning _price, getter 'stock' returning _stock
4. Add method addStock(quantity: number): void — increases stock
5. Add method sell(quantity: number): boolean — decreases stock if available, returns success
6. Add method applyDiscount(percent: number): void — reduces price by percent
7. Add static method createFreebie(name: string): Product — creates product with price 0
8. Create a product, add stock, sell some, apply discount — log results`,
            starterCode: `class Product {
  private _price: number;
  readonly id: number;
  public name: string;
  private _stock: number;
  
  constructor(name: string, price: number, initialStock: number = 0) {
    
  }
  
  get price(): number {
    
  }
  
  get stock(): number {
    
  }
  
  addStock(quantity: number): void {
    
  }
  
  sell(quantity: number): boolean {
    
  }
  
  applyDiscount(percent: number): void {
    
  }
  
  static createFreebie(name: string): Product {
    
  }
}

// Test
const laptop = new Product('Laptop Pro', 999, 10);
laptop.addStock(5);
console.log(\`Stock: \${laptop.stock}\`);
console.log(\`Sold: \${laptop.sell(3)}\`);
laptop.applyDiscount(10);
console.log(\`Price after discount: \${laptop.price}\`);

const freebie = Product.createFreebie('Sticker Pack');
console.log(freebie.price);
`,
            solution: `class Product {
  private _price: number;
  readonly id: number;
  public name: string;
  private _stock: number;
  
  constructor(name: string, price: number, initialStock: number = 0) {
    this.name = name;
    this._price = price;
    this._stock = initialStock;
    this.id = Math.floor(Math.random() * 100000);
  }
  
  get price(): number {
    return this._price;
  }
  
  get stock(): number {
    return this._stock;
  }
  
  addStock(quantity: number): void {
    if (quantity <= 0) throw new Error('Quantity must be positive');
    this._stock += quantity;
  }
  
  sell(quantity: number): boolean {
    if (quantity > this._stock) return false;
    this._stock -= quantity;
    return true;
  }
  
  applyDiscount(percent: number): void {
    if (percent < 0 || percent > 100) throw new Error('Invalid discount');
    this._price = parseFloat((this._price * (1 - percent / 100)).toFixed(2));
  }
  
  static createFreebie(name: string): Product {
    return new Product(name, 0, 1);
  }
}

const laptop = new Product('Laptop Pro', 999, 10);
laptop.addStock(5);
console.log(\`Stock: \${laptop.stock}\`);
console.log(\`Sold: \${laptop.sell(3)}\`);
laptop.applyDiscount(10);
console.log(\`Price after discount: \${laptop.price}\`);

const freebie = Product.createFreebie('Sticker Pack');
console.log(freebie.price);`,
            tests: [
              { type: "contains", value: "private _price: number" },
              { type: "contains", value: "get price(): number" },
              { type: "contains", value: "static createFreebie" }
            ],
            debuggingTip: `Common mistakes:
• Property not declared at class level? Assigning this.name in constructor without declaring name: string at top causes error in strict mode.
• Private property accessed outside class? TypeScript blocks it — use getters to expose read access.
• Getter vs method: get price() is called as laptop.price (no parentheses). Regular method: laptop.getPrice().
• Static method called on instance? Product.createFreebie() not laptop.createFreebie() — static belongs to the class.
• Readonly in constructor? this.id = value in constructor is fine for readonly — it's the ONLY place you can set it.`
          }
        },
        {
          id: "typescript-phase5-m1-l2",
          title: "Inheritance and Access Modifiers",
          explanation: `TypeScript's access modifiers (public, private, protected) enforce 
encapsulation at the type level. Public members are accessible everywhere. 
Private members are accessible only within the declaring class — not even 
subclasses can touch them. Protected members are accessible in the 
declaring class AND its subclasses. This lets you design proper 
hierarchies where base classes share implementation with children 
through protected members while keeping sensitive data truly private. 
The super keyword calls parent constructors and methods.`,
          concept: `public    → accessible everywhere (default)
private   → only within this exact class (not subclasses)
protected → this class AND subclasses (not outside)

class Child extends Parent {
  constructor(args) {
    super(parentArgs);  // MUST call first
    // child-specific setup
  }
  
  override parentMethod(): void {
    super.parentMethod(); // call parent version
    // additional child behavior
  }
}

abstract class Base {
  abstract mustImplement(): void;  // subclasses must define this
  concrete(): void { }              // subclasses can use/override
}`,
          example: `abstract class Shape {
  protected color: string;
  
  constructor(color: string) {
    this.color = color;
  }
  
  abstract area(): number;         // must be implemented
  abstract perimeter(): number;    // must be implemented
  
  describe(): string {
    return \`\${this.color} \${this.constructor.name}: area=\${this.area().toFixed(2)}\`;
  }
}

class Circle extends Shape {
  private radius: number;
  
  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }
  
  area(): number {
    return Math.PI * this.radius ** 2;
  }
  
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(
    color: string,
    private width: number,
    private height: number,
  ) {
    super(color);
  }
  
  area(): number {
    return this.width * this.height;
  }
  
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
  
  override describe(): string {
    return super.describe() + \`, perimeter=\${this.perimeter().toFixed(2)}\`;
  }
}

const shapes: Shape[] = [
  new Circle('red', 5),
  new Rectangle('blue', 4, 6),
];

shapes.forEach(shape => console.log(shape.describe()));
const totalArea = shapes.reduce((sum, s) => sum + s.area(), 0);
console.log(\`Total area: \${totalArea.toFixed(2)}\`);`,
          exercise: {
            prompt: `Build an inheritance hierarchy:
1. Create abstract class Animal with: protected name (string), protected age (number), constructor, abstract sound(): string, public describe(): string returning "Name is Age years old"
2. Create class Dog extends Animal with: private breed (string), override sound() returning 'Woof!', method fetch(item: string): string
3. Create class Cat extends Animal with: private indoor (boolean), override sound() returning 'Meow!', method purr(): string
4. Create class GuideDog extends Dog with: private owner (string), override describe() adding owner info
5. Create array of Animal[] with all types, loop calling describe() and sound() polymorphically`,
            starterCode: `// Step 1: Abstract Animal
abstract class Animal {
  protected name: string;
  protected age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  abstract sound(): string;
  
  describe(): string {
    
  }
}

// Step 2: Dog
class Dog extends Animal {
  private breed: string;
  
  constructor(name: string, age: number, breed: string) {
    
  }
  
  sound(): string {
    
  }
  
  fetch(item: string): string {
    
  }
}

// Step 3: Cat
class Cat extends Animal {
  
}

// Step 4: GuideDog
class GuideDog extends Dog {
  
}

// Step 5: Polymorphic array
const animals: Animal[] = [
  new Dog('Rex', 3, 'Labrador'),
  new Cat('Whiskers', 5, true),
  new GuideDog('Buddy', 4, 'Golden Retriever', 'Alice'),
];

animals.forEach(animal => {
  console.log(animal.describe());
  console.log(animal.sound());
  console.log('---');
});
`,
            solution: `abstract class Animal {
  protected name: string;
  protected age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  abstract sound(): string;
  
  describe(): string {
    return \`\${this.name} is \${this.age} years old\`;
  }
}

class Dog extends Animal {
  private breed: string;
  
  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }
  
  sound(): string {
    return 'Woof!';
  }
  
  fetch(item: string): string {
    return \`\${this.name} fetches the \${item}!\`;
  }
}

class Cat extends Animal {
  private indoor: boolean;
  
  constructor(name: string, age: number, indoor: boolean = true) {
    super(name, age);
    this.indoor = indoor;
  }
  
  sound(): string {
    return 'Meow!';
  }
  
  purr(): string {
    return \`\${this.name} purrs contentedly...\`;
  }
}

class GuideDog extends Dog {
  private owner: string;
  
  constructor(name: string, age: number, breed: string, owner: string) {
    super(name, age, breed);
    this.owner = owner;
  }
  
  override describe(): string {
    return super.describe() + \`, guide dog for \${this.owner}\`;
  }
}

const animals: Animal[] = [
  new Dog('Rex', 3, 'Labrador'),
  new Cat('Whiskers', 5, true),
  new GuideDog('Buddy', 4, 'Golden Retriever', 'Alice'),
];

animals.forEach(animal => {
  console.log(animal.describe());
  console.log(animal.sound());
  console.log('---');
});`,
            tests: [
              { type: "contains", value: "abstract class Animal" },
              { type: "contains", value: "class Dog extends Animal" },
              { type: "contains", value: "class GuideDog extends Dog" },
              { type: "contains", value: "super(name, age)" }
            ],
            debuggingTip: `Common mistakes:
• Forgot super() in child constructor? TypeScript error: super must be called before accessing 'this'.
• Abstract class instantiated? new Animal() fails — abstract classes are blueprints, not real objects.
• Private in parent not accessible in child? Use protected for properties you want subclasses to access.
• override keyword? TypeScript 4.3+ has 'override' modifier — good practice to mark overriding methods.
• Polymorphism: Animal[] array accepts Dog, Cat, GuideDog — calling sound() calls each class's own version.`
          }
        },
        {
          id: "typescript-phase5-m1-l3",
          title: "Interfaces with Classes — implements",
          explanation: `Interfaces define contracts. Classes fulfill them with implements. 
A class that implements an interface must provide all the methods and 
properties the interface declares — TypeScript verifies this at compile 
time. One class can implement multiple interfaces, picking up multiple 
contracts at once. This is how you achieve composition over inheritance: 
instead of deep class hierarchies, you define small, focused interfaces 
(Serializable, Printable, Comparable) and classes opt in to the 
capabilities they want. This pattern is fundamental to professional 
TypeScript architecture.`,
          concept: `interface Describable {
  describe(): string;
}

class MyClass implements Describable {
  describe(): string { return 'description'; }
}

// Multiple interfaces:
class MyClass implements InterfaceA, InterfaceB { }

// Interface + extends:
class Child extends Parent implements Interface { }

// Using interface as type (polymorphism):
function process(item: Describable): void {
  console.log(item.describe());
}
process(new MyClass()); // ✓ satisfies Describable`,
          example: `// Define capability interfaces
interface Serializable {
  serialize(): string;
  static deserialize?(data: string): unknown;
}

interface Validatable {
  validate(): boolean;
  getErrors(): string[];
}

interface Comparable<T> {
  compareTo(other: T): -1 | 0 | 1;
}

// Class implementing multiple interfaces
class User implements Validatable, Comparable<User> {
  constructor(
    public name: string,
    public email: string,
    public age: number,
  ) {}
  
  validate(): boolean {
    return this.getErrors().length === 0;
  }
  
  getErrors(): string[] {
    const errors: string[] = [];
    if (!this.name.trim()) errors.push('Name is required');
    if (!this.email.includes('@')) errors.push('Invalid email');
    if (this.age < 0 || this.age > 150) errors.push('Invalid age');
    return errors;
  }
  
  compareTo(other: User): -1 | 0 | 1 {
    if (this.name < other.name) return -1;
    if (this.name > other.name) return 1;
    return 0;
  }
}

// Function accepting any Validatable
function validateAndReport(item: Validatable): void {
  if (item.validate()) {
    console.log('✓ Valid');
  } else {
    console.log('✗ Invalid:', item.getErrors().join(', '));
  }
}

const validUser = new User('Alice', 'alice@example.com', 28);
const invalidUser = new User('', 'not-an-email', -5);

validateAndReport(validUser);
validateAndReport(invalidUser);

const users = [
  new User('Charlie', 'c@c.com', 30),
  new User('Alice', 'a@a.com', 25),
  new User('Bob', 'b@b.com', 35),
];
users.sort((a, b) => a.compareTo(b));
users.forEach(u => console.log(u.name));`,
          exercise: {
            prompt: `Build a system using interfaces and implements:
1. Define interface Printable with print(): void
2. Define interface Exportable with export(format: 'json' | 'csv'): string
3. Define interface Searchable<T> with matches(query: string): boolean
4. Create class Report implements all three interfaces with: title (string), data (string[]), author (string)
   - print(): logs a formatted report
   - export('json'): returns JSON string, export('csv'): returns CSV string
   - matches(query): returns true if query found in title or author
5. Create array of Printable[] and call print() on each`,
            starterCode: `// Step 1: Printable interface
interface Printable {
  
}

// Step 2: Exportable interface
interface Exportable {
  
}

// Step 3: Searchable interface
interface Searchable<T> {
  
}

// Step 4: Report class
class Report implements Printable, Exportable, Searchable<Report> {
  constructor(
    public title: string,
    public data: string[],
    public author: string,
  ) {}
  
  print(): void {
    
  }
  
  export(format: 'json' | 'csv'): string {
    
  }
  
  matches(query: string): boolean {
    
  }
}

// Step 5: Test
const reports: Printable[] = [
  new Report('Q1 Sales', ['100', '200', '300'], 'Alice'),
  new Report('Annual Summary', ['1000', '2000'], 'Bob'),
];

reports.forEach(r => r.print());

// Extra: search
const allReports = [
  new Report('TypeScript Guide', ['Intro', 'Types'], 'Alice'),
  new Report('JavaScript Basics', ['Variables', 'Functions'], 'Bob'),
];
const found = allReports.filter(r => r.matches('alice'));
console.log(\`Found \${found.length} reports\`);
`,
            solution: `interface Printable {
  print(): void;
}

interface Exportable {
  export(format: 'json' | 'csv'): string;
}

interface Searchable<T> {
  matches(query: string): boolean;
}

class Report implements Printable, Exportable, Searchable<Report> {
  constructor(
    public title: string,
    public data: string[],
    public author: string,
  ) {}
  
  print(): void {
    console.log(\`=== \${this.title} ===\`);
    console.log(\`Author: \${this.author}\`);
    this.data.forEach(item => console.log(\`  - \${item}\`));
  }
  
  export(format: 'json' | 'csv'): string {
    if (format === 'json') {
      return JSON.stringify({ title: this.title, author: this.author, data: this.data });
    }
    return [\`title,author\`, \`\${this.title},\${this.author}\`, ...this.data].join('\\n');
  }
  
  matches(query: string): boolean {
    const q = query.toLowerCase();
    return this.title.toLowerCase().includes(q) || this.author.toLowerCase().includes(q);
  }
}

const reports: Printable[] = [
  new Report('Q1 Sales', ['100', '200', '300'], 'Alice'),
  new Report('Annual Summary', ['1000', '2000'], 'Bob'),
];

reports.forEach(r => r.print());

const allReports = [
  new Report('TypeScript Guide', ['Intro', 'Types'], 'Alice'),
  new Report('JavaScript Basics', ['Variables', 'Functions'], 'Bob'),
];
const found = allReports.filter(r => r.matches('alice'));
console.log(\`Found \${found.length} reports\`);`,
            tests: [
              { type: "contains", value: "interface Printable" },
              { type: "contains", value: "implements Printable, Exportable, Searchable" },
              { type: "contains", value: "export(format: 'json' | 'csv')" }
            ],
            debuggingTip: `Common mistakes:
• Class doesn't implement all interface members? TypeScript lists every missing method — implement them all.
• Interface method signature mismatch? If interface says export(format: 'json'|'csv'): string, class must match exactly.
• Searchable<Report> type parameter? The T in Searchable<T> is filled with Report — doesn't change the interface shape here.
• Array typed as Printable[]? You can only access Printable members (print()) — to access Report-specific methods, type narrowing needed.
• implements vs extends? implements = fulfill a contract (interface). extends = inherit implementation (class/abstract class).`
          }
        }
      ]
    },
    {
      id: "typescript-phase6-m1",
      title: "Phase 6 — Advanced Types",
      duration: "2.5 hours",
      lessons: [
        {
          id: "typescript-phase6-m1-l1",
          title: "Type Narrowing and Type Guards",
          explanation: `TypeScript's type system becomes most powerful when it understands what 
type you're working with at each point in your code. Type narrowing is 
how TypeScript tracks type information as it flows through conditions. 
Inside an if (typeof x === 'string') block, TypeScript knows x is 
definitely a string. Type guards are the conditions and patterns 
TypeScript recognizes to narrow types: typeof, instanceof, 'in' 
operator, equality checks, and custom type guard functions. Mastering 
narrowing lets you write code that's both flexible with unions and 
precise where it needs to be.`,
          concept: `typeof x === 'string'     → narrows to string in true branch
x instanceof Date         → narrows to Date in true branch
'name' in x               → narrows to type with 'name' property
x !== null && x !== undefined → narrows away null/undefined
x === 'specific value'   → narrows to that literal type

Custom type guard:
function isString(val: unknown): val is string {
  return typeof val === 'string';
}
// val is string in the true branch when called`,
          example: `// typeof narrowing
function processInput(input: string | number | boolean): string {
  if (typeof input === 'string') {
    return input.toUpperCase();  // TypeScript: input is string here
  }
  if (typeof input === 'number') {
    return input.toFixed(2);     // TypeScript: input is number here
  }
  return String(input);          // TypeScript: input is boolean here
}

// instanceof narrowing
function formatDate(date: Date | string): string {
  if (date instanceof Date) {
    return date.toLocaleDateString();  // TypeScript: Date
  }
  return new Date(date).toLocaleDateString();  // TypeScript: string
}

// 'in' operator narrowing
interface Cat { meow(): string; }
interface Dog { bark(): string; }

function makeSound(animal: Cat | Dog): string {
  if ('meow' in animal) {
    return animal.meow();  // TypeScript: Cat
  }
  return animal.bark();    // TypeScript: Dog
}

// Discriminated union — BEST pattern for unions
interface LoadingState { status: 'loading'; }
interface SuccessState { status: 'success'; data: string; }
interface ErrorState   { status: 'error'; message: string; }
type RequestState = LoadingState | SuccessState | ErrorState;

function renderState(state: RequestState): string {
  switch (state.status) {
    case 'loading':  return 'Loading...';
    case 'success':  return state.data;   // TypeScript: SuccessState
    case 'error':    return \`Error: \${state.message}\`; // ErrorState
  }
}

// Custom type guard
function isString(val: unknown): val is string {
  return typeof val === 'string';
}

function processUnknown(val: unknown): void {
  if (isString(val)) {
    console.log(val.toUpperCase()); // TypeScript: string
  }
}`,
          exercise: {
            prompt: `Master type narrowing:
1. Write function describe(value: string | number | boolean | null): string that handles all four cases with typeof and null check
2. Define discriminated union: type Shape = Circle | Square | Triangle where each has 'kind' literal property and appropriate dimensions
3. Write function area(shape: Shape): number using switch on shape.kind — TypeScript should know exact type in each branch
4. Write custom type guard isArray(val: unknown): val is unknown[] 
5. Write function safeFirst(val: unknown): unknown | undefined using isArray to safely get first element`,
            starterCode: `// Step 1: describe function
function describe(value: string | number | boolean | null): string {
  
}
console.log(describe('hello'));
console.log(describe(42));
console.log(describe(true));
console.log(describe(null));

// Step 2: Discriminated union shapes
interface Circle   { kind: 'circle';   radius: number; }
interface Square   { kind: 'square';   side: number; }
interface Triangle { kind: 'triangle'; base: number; height: number; }
type Shape = Circle | Square | Triangle;

// Step 3: area function with switch narrowing
function area(shape: Shape): number {
  switch (shape.kind) {
    
  }
}
console.log(area({ kind: 'circle', radius: 5 }));
console.log(area({ kind: 'square', side: 4 }));
console.log(area({ kind: 'triangle', base: 3, height: 8 }));

// Step 4: Custom type guard
function isArray(val: unknown): val is unknown[] {
  
}

// Step 5: safeFirst using isArray
function safeFirst(val: unknown): unknown | undefined {
  
}
console.log(safeFirst([1, 2, 3]));
console.log(safeFirst('not an array'));
`,
            solution: `function describe(value: string | number | boolean | null): string {
  if (value === null) return 'null value';
  if (typeof value === 'string') return \`String: "\${value}"\`;
  if (typeof value === 'number') return \`Number: \${value}\`;
  return \`Boolean: \${value}\`;
}
console.log(describe('hello'));
console.log(describe(42));
console.log(describe(true));
console.log(describe(null));

interface Circle   { kind: 'circle';   radius: number; }
interface Square   { kind: 'square';   side: number; }
interface Triangle { kind: 'triangle'; base: number; height: number; }
type Shape = Circle | Square | Triangle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':   return Math.PI * shape.radius ** 2;
    case 'square':   return shape.side ** 2;
    case 'triangle': return 0.5 * shape.base * shape.height;
  }
}
console.log(area({ kind: 'circle', radius: 5 }));
console.log(area({ kind: 'square', side: 4 }));
console.log(area({ kind: 'triangle', base: 3, height: 8 }));

function isArray(val: unknown): val is unknown[] {
  return Array.isArray(val);
}

function safeFirst(val: unknown): unknown | undefined {
  if (isArray(val)) {
    return val[0];
  }
  return undefined;
}
console.log(safeFirst([1, 2, 3]));
console.log(safeFirst('not an array'));`,
            tests: [
              { type: "contains", value: "typeof value === 'string'" },
              { type: "contains", value: "switch (shape.kind)" },
              { type: "contains", value: "val is unknown[]" }
            ],
            debuggingTip: `Common mistakes:
• Forgot to check null before typeof? typeof null === 'object' — check null first explicitly.
• Discriminated union switch: TypeScript needs every case to handle the union completely — add all cases.
• Custom type guard return type: must be 'param is Type' not just boolean — the 'is' syntax is what makes it a guard.
• 'in' operator on primitive? '5' in 'string' is invalid — 'in' only works on objects.
• Non-exhaustive switch? Add a default: const _: never = shape; to catch unhandled cases at compile time.`
          }
        },
        {
          id: "typescript-phase6-m1-l2",
          title: "Mapped Types and Conditional Types",
          explanation: `Mapped types let you create new types by transforming every property of an 
existing type. They're how TypeScript's built-in utility types like 
Partial<T>, Readonly<T>, and Required<T> are implemented. Conditional 
types let you express "if T extends X then Y else Z" logic at the type 
level — enabling truly dynamic type transformations. These are advanced 
features used in library code and sophisticated type utilities. 
Understanding them helps you read TypeScript's error messages better 
and write powerful, generic type transformations for your own code.`,
          concept: `// Mapped type:
type Mapped<T> = {
  [K in keyof T]: TransformType<T[K]>;
};

// Makes all properties optional (Partial<T>):
type MyPartial<T> = { [K in keyof T]?: T[K] };

// Makes all properties required (Required<T>):  
type MyRequired<T> = { [K in keyof T]-?: T[K] }; // -? removes optional

// Conditional type:
type IsString<T> = T extends string ? true : false;
type Flatten<T> = T extends Array<infer U> ? U : T;
// infer extracts a type from within another type`,
          example: `// Custom mapped types
type Optional<T> = { [K in keyof T]?: T[K] };
type Stringify<T> = { [K in keyof T]: string };
type Nullable<T> = { [K in keyof T]: T[K] | null };

interface User { id: number; name: string; active: boolean; }

type NullableUser = Nullable<User>;
// { id: number | null; name: string | null; active: boolean | null }

// Mapped type with modifier removal
type Mutable<T> = { -readonly [K in keyof T]: T[K] };
// Removes readonly from all properties

// Conditional types
type IsArray<T> = T extends any[] ? true : false;
type IsArray1 = IsArray<string[]>;  // true
type IsArray2 = IsArray<string>;    // false

// Infer — extract type from within another type
type UnpackPromise<T> = T extends Promise<infer U> ? U : T;
type UnpackedString = UnpackPromise<Promise<string>>;  // string
type UnpackedNumber = UnpackPromise<Promise<number>>;  // number
type NotPromise = UnpackPromise<string>;                // string (unchanged)

type ArrayElement<T> = T extends (infer U)[] ? U : never;
type StrElem = ArrayElement<string[]>;   // string
type NumElem = ArrayElement<number[]>;   // number

// Practical: event handler map from object type
interface Events {
  click: { x: number; y: number };
  keydown: { key: string; code: string };
  focus: { target: string };
}

type EventHandlers = {
  [K in keyof Events]: (event: Events[K]) => void;
};

const handlers: Partial<EventHandlers> = {
  click: ({ x, y }) => console.log(\`Clicked at \${x}, \${y}\`),
  keydown: ({ key }) => console.log(\`Key: \${key}\`),
};`,
          exercise: {
            prompt: `Write mapped and conditional types:
1. Write mapped type Getters<T> that transforms each property name to 'get[PropertyName]' returning its type — e.g., Getters<{name: string}> → {getName: () => string}
2. Write conditional type IsString<T> returning true if T extends string, false otherwise — test with string, number, 'hello', boolean
3. Write conditional type DeepPartial<T> that recursively makes all properties optional (hint: if T[K] is an object, recurse; otherwise T[K] | undefined)
4. Test DeepPartial with a nested interface`,
            starterCode: `// Step 1: Getters mapped type
// Hint: use K extends string to get capitalized key
// Use Capitalize<K> to capitalize the key
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface Person { name: string; age: number; active: boolean; }
type PersonGetters = Getters<Person>;
// Should have: getName: () => string, getAge: () => number, getActive: () => boolean

// Step 2: IsString conditional type
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>;    // true
type Test2 = IsString<number>;    // false
type Test3 = IsString<'hello'>;   // true
type Test4 = IsString<boolean>;   // false

// Step 3: DeepPartial recursive type
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

// Step 4: Test DeepPartial
interface Config {
  server: {
    host: string;
    port: number;
    tls: {
      enabled: boolean;
      cert: string;
    };
  };
  database: {
    url: string;
    maxConnections: number;
  };
}

const partialConfig: DeepPartial<Config> = {
  server: {
    host: 'localhost',
    // port, tls all optional now
  },
  // database entirely optional
};
console.log(partialConfig);
`,
            solution: `type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface Person { name: string; age: number; active: boolean; }
type PersonGetters = Getters<Person>;

type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>;
type Test2 = IsString<number>;
type Test3 = IsString<'hello'>;
type Test4 = IsString<boolean>;

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

interface Config {
  server: {
    host: string;
    port: number;
    tls: {
      enabled: boolean;
      cert: string;
    };
  };
  database: {
    url: string;
    maxConnections: number;
  };
}

const partialConfig: DeepPartial<Config> = {
  server: {
    host: 'localhost',
  },
};
console.log(partialConfig);`,
            tests: [
              { type: "contains", value: "type Getters<T>" },
              { type: "contains", value: "type IsString<T> = T extends string" },
              { type: "contains", value: "type DeepPartial<T>" }
            ],
            debuggingTip: `Common mistakes:
• Mapped type key remapping syntax: [K in keyof T as NewKey] — the 'as' remaps the key name.
• Capitalize<string & K>? K might not be a string (could be number or symbol) — string & K ensures it's a string.
• Conditional type distribution? T extends string applied to a union distributes: (A | B) extends string → (A extends string) | (B extends string).
• DeepPartial on primitives? string extends object is false — primitives pass through unchanged, only objects recurse.
• Infer keyword only works in conditional type extends clause: T extends (infer U)[] ? U : never.`
          }
        },
        {
          id: "typescript-phase6-m1-l3",
          title: "Template Literal Types and String Manipulation",
          explanation: `TypeScript 4.1 introduced template literal types — the ability to create 
new string types by combining existing string types, just like template 
literal strings in JavaScript but at the type level. This is extraordinarily 
powerful: you can type event names like 'on' + Capitalize<EventName>, 
CSS properties, API routes, and any pattern-based string. Combined with 
mapped types, template literal types enable TypeScript to understand and 
validate string patterns that would previously require runtime checks. 
This is where TypeScript's type system becomes truly expressive.`,
          concept: `type Greeting = \`Hello, \${string}!\`;        // any string fitting the pattern
type EventName = \`on\${Capitalize<string>}\`;  // onAny, onClick, etc.

// With union distribution:
type Axis = 'x' | 'y' | 'z';
type AxisGetter = \`get\${Capitalize<Axis>}\`; // 'getX' | 'getY' | 'getZ'

// String manipulation types (built-in):
Uppercase<S>    → UPPERCASE
Lowercase<S>    → lowercase
Capitalize<S>   → First letter uppercase
Uncapitalize<S> → first letter lowercase`,
          example: `// Basic template literal types
type Greeting = \`Hello, \${string}!\`;
const g: Greeting = 'Hello, World!';    // ✓
// const bad: Greeting = 'Hi!';         // ✗ doesn't match pattern

// Distributing over unions
type Color = 'red' | 'green' | 'blue';
type ColorClass = \`bg-\${Color}\`;
// type: 'bg-red' | 'bg-green' | 'bg-blue'

type Size = 'sm' | 'md' | 'lg';
type ColorSize = \`\${Color}-\${Size}\`;
// 'red-sm' | 'red-md' | 'red-lg' | 'green-sm' | ... (9 combinations)

// Event handler pattern
type EventName = 'click' | 'focus' | 'blur' | 'change';
type Handler = \`on\${Capitalize<EventName>}\`;
// 'onClick' | 'onFocus' | 'onBlur' | 'onChange'

type EventHandlers = {
  [K in Handler]?: () => void;
};

const handlers: EventHandlers = {
  onClick: () => console.log('clicked'),
  onFocus: () => console.log('focused'),
};

// API route typing
type HttpMethod = 'get' | 'post' | 'put' | 'delete';
type ApiRoute = \`/api/\${string}\`;
type MethodRoute = \`\${Uppercase<HttpMethod>} \${ApiRoute}\`;
// 'GET /api/...' | 'POST /api/...' | etc.

// CSS property pattern
type CSSProp = 'margin' | 'padding' | 'border';
type CSSDirection = 'Top' | 'Right' | 'Bottom' | 'Left';
type DirectionalCSS = \`\${CSSProp}\${CSSDirection}\`;
// 'marginTop' | 'marginRight' | ... | 'borderLeft'`,
          exercise: {
            prompt: `Build with template literal types:
1. Create type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch' and type RouteKey = \`\${Uppercase<HttpMethod>} /\${string}\`
2. Create type CSSUnit = 'px' | 'rem' | 'em' | '%' and type CSSValue = \`\${number}\${CSSUnit}\` — what values are valid?
3. Create type EventType = 'click' | 'keydown' | 'submit' and use mapped type with template literal to create event handler object type {onClick, onKeydown, onSubmit}: each () => void
4. Create type Env = 'dev' | 'staging' | 'prod' and type EnvVar = \`APP_\${Uppercase<Env>}_\${string}\` — what matches?
5. Write a function that accepts a RouteKey string and logs the method and path separately`,
            starterCode: `// Step 1: HTTP route types
type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';
type RouteKey = \`\${Uppercase<HttpMethod>} /\${string}\`;

const validRoute: RouteKey = 'GET /api/users';
// const invalidRoute: RouteKey = 'CONNECT /api'; // Error

// Step 2: CSS value type
type CSSUnit = 'px' | 'rem' | 'em' | '%';
// Note: TypeScript can't validate number in template literal perfectly
// but this documents intent:
type CSSValue = \`\${number}\${CSSUnit}\`;

// Step 3: Event handler object from union
type EventType = 'click' | 'keydown' | 'submit';
type HandlerName = \`on\${Capitalize<EventType>}\`;

type EventHandlerMap = {
  [K in EventType as \`on\${Capitalize<K>}\`]: () => void;
};

const myHandlers: EventHandlerMap = {
  onClick: () => console.log('clicked'),
  onKeydown: () => console.log('key pressed'),
  onSubmit: () => console.log('submitted'),
};

// Step 4: Environment variable pattern
type Env = 'dev' | 'staging' | 'prod';
type EnvVar = \`APP_\${Uppercase<Env>}_\${string}\`;

const dbUrl: EnvVar = 'APP_DEV_DATABASE_URL';     // ✓
// const bad: EnvVar = 'APP_TEST_URL';            // ✗ TEST not in Env

// Step 5: Parse route key function
function parseRoute(route: RouteKey): void {
  
}
parseRoute('GET /api/users');
parseRoute('POST /api/auth/login');
`,
            solution: `type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';
type RouteKey = \`\${Uppercase<HttpMethod>} /\${string}\`;

const validRoute: RouteKey = 'GET /api/users';

type CSSUnit = 'px' | 'rem' | 'em' | '%';
type CSSValue = \`\${number}\${CSSUnit}\`;

type EventType = 'click' | 'keydown' | 'submit';

type EventHandlerMap = {
  [K in EventType as \`on\${Capitalize<K>}\`]: () => void;
};

const myHandlers: EventHandlerMap = {
  onClick: () => console.log('clicked'),
  onKeydown: () => console.log('key pressed'),
  onSubmit: () => console.log('submitted'),
};

type Env = 'dev' | 'staging' | 'prod';
type EnvVar = \`APP_\${Uppercase<Env>}_\${string}\`;

const dbUrl: EnvVar = 'APP_DEV_DATABASE_URL';

function parseRoute(route: RouteKey): void {
  const spaceIndex = route.indexOf(' ');
  const method = route.slice(0, spaceIndex);
  const path = route.slice(spaceIndex + 1);
  console.log(\`Method: \${method}, Path: \${path}\`);
}
parseRoute('GET /api/users');
parseRoute('POST /api/auth/login');`,
            tests: [
              { type: "contains", value: "type RouteKey" },
              { type: "contains", value: "Uppercase<HttpMethod>" },
              { type: "contains", value: "Capitalize<K>" }
            ],
            debuggingTip: `Common mistakes:
• Template literal type vs value? \`Hello \${string}\` as a TYPE is different from \`Hello \${name}\` as a VALUE.
• Union distribution: \`\${A | B}\` expands to all combinations — with large unions this can create huge types.
• Capitalize works on string unions: Capitalize<'click' | 'focus'> → 'Click' | 'Focus'.
• Number in template literals: \`\${number}px\` accepts any number at the type level — '3.14px', '-1px', 'NaNpx' all match.
• Mapped type key remapping with as: [K in keyof T as \`on\${Capitalize<string & K>}\`] — the string & K ensures string keys only.`
          }
        },
        {
          id: "typescript-phase6-m1-l4",
          title: "Capstone: Type-Safe API Client",
          explanation: `This capstone brings together everything you've learned: interfaces for 
data shapes, generics for reusable code, union types for flexible APIs, 
utility types for transformations, type guards for safe narrowing, and 
template literal types for string patterns. You'll build a type-safe 
API client — the kind of utility that appears in virtually every 
TypeScript application. When it's done, TypeScript will catch wrong 
endpoint names, wrong request body shapes, and wrong assumptions 
about response data — all before your code runs.`,
          concept: `Integrates all Phase 1-6 concepts:
- Interfaces for request/response shapes
- Generics for typed responses ApiResponse<T>
- Union types for method | status
- Utility types for request building
- Type guards for error narrowing
- Template literal types for endpoint strings
- Classes with access modifiers for the client
- Readonly config, optional parameters`,
          example: `// Full type-safe API client pattern
interface ApiError {
  code: number;
  message: string;
  details?: string;
}

type ApiResult<T> = 
  | { success: true; data: T }
  | { success: false; error: ApiError };

class TypedApiClient {
  constructor(
    private readonly baseUrl: string,
    private readonly timeout: number = 5000,
  ) {}
  
  async get<T>(endpoint: string): Promise<ApiResult<T>> {
    try {
      // Simulated fetch
      const data = {} as T;
      return { success: true, data };
    } catch (e) {
      return {
        success: false,
        error: { code: 500, message: String(e) },
      };
    }
  }
}`,
          exercise: {
            prompt: `Build the complete type-safe API client:
1. Define interfaces: User (id, name, email, role: 'admin'|'user'), Post (id, title, content, authorId, tags: string[]), ApiError (code, message, details?)
2. Define generic type ApiResult<T> as discriminated union of success/error
3. Define type Endpoint = '/users' | '/posts' | '/users/:id' | '/posts/:id'
4. Create class ApiClient with:
   - private baseUrl and timeout (readonly, with defaults)
   - private method simulateFetch<T>(endpoint: string): Promise<T>
   - public get<T>(endpoint: Endpoint): Promise<ApiResult<T>>
   - public getUser(id: number): Promise<ApiResult<User>>
   - public getPost(id: number): Promise<ApiResult<Post>>
5. Write function handleResult<T>(result: ApiResult<T>, onSuccess: (data: T) => void): void using discriminated union narrowing
6. Test all methods with handleResult`,
            starterCode: `// Step 1: Core interfaces
interface User {
  
}

interface Post {
  
}

interface ApiError {
  
}

// Step 2: Generic result type
type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: ApiError };

// Step 3: Endpoint type
type Endpoint = '/users' | '/posts' | '/users/:id' | '/posts/:id';

// Step 4: ApiClient class
class ApiClient {
  private readonly baseUrl: string;
  private readonly timeout: number;
  
  constructor(baseUrl: string, timeout: number = 5000) {
    this.baseUrl = baseUrl;
    this.timeout = timeout;
  }
  
  private async simulateFetch<T>(endpoint: string, mockData: T): Promise<T> {
    // Simulate network delay
    await new Promise(r => setTimeout(r, 10));
    return mockData;
  }
  
  async get<T>(endpoint: Endpoint): Promise<ApiResult<T>> {
    
  }
  
  async getUser(id: number): Promise<ApiResult<User>> {
    
  }
  
  async getPost(id: number): Promise<ApiResult<Post>> {
    
  }
}

// Step 5: handleResult function
function handleResult<T>(
  result: ApiResult<T>,
  onSuccess: (data: T) => void
): void {
  
}

// Step 6: Test
const client = new ApiClient('https://api.example.com');

async function runTests(): Promise<void> {
  const userResult = await client.getUser(1);
  handleResult(userResult, user => console.log(\`User: \${user.name}\`));
  
  const postResult = await client.getPost(1);
  handleResult(postResult, post => console.log(\`Post: \${post.title}\`));
}

runTests();
`,
            solution: `interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  tags: string[];
}

interface ApiError {
  code: number;
  message: string;
  details?: string;
}

type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: ApiError };

type Endpoint = '/users' | '/posts' | '/users/:id' | '/posts/:id';

class ApiClient {
  private readonly baseUrl: string;
  private readonly timeout: number;
  
  constructor(baseUrl: string, timeout: number = 5000) {
    this.baseUrl = baseUrl;
    this.timeout = timeout;
  }
  
  private async simulateFetch<T>(endpoint: string, mockData: T): Promise<T> {
    await new Promise(r => setTimeout(r, 10));
    return mockData;
  }
  
  async get<T>(endpoint: Endpoint): Promise<ApiResult<T>> {
    try {
      const data = {} as T;
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: { code: 500, message: String(error) },
      };
    }
  }
  
  async getUser(id: number): Promise<ApiResult<User>> {
    try {
      const mockUser: User = {
        id,
        name: \`User \${id}\`,
        email: \`user\${id}@example.com\`,
        role: 'user',
      };
      const data = await this.simulateFetch(\`/users/\${id}\`, mockUser);
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: { code: 404, message: \`User \${id} not found\` },
      };
    }
  }
  
  async getPost(id: number): Promise<ApiResult<Post>> {
    try {
      const mockPost: Post = {
        id,
        title: \`Post \${id}\`,
        content: 'Sample content...',
        authorId: 1,
        tags: ['typescript', 'programming'],
      };
      const data = await this.simulateFetch(\`/posts/\${id}\`, mockPost);
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: { code: 404, message: \`Post \${id} not found\` },
      };
    }
  }
}

function handleResult<T>(
  result: ApiResult<T>,
  onSuccess: (data: T) => void
): void {
  if (result.success) {
    onSuccess(result.data);
  } else {
    console.error(\`Error \${result.error.code}: \${result.error.message}\`);
  }
}

const client = new ApiClient('https://api.example.com');

async function runTests(): Promise<void> {
  const userResult = await client.getUser(1);
  handleResult(userResult, user => console.log(\`User: \${user.name}, Role: \${user.role}\`));
  
  const postResult = await client.getPost(1);
  handleResult(postResult, post => console.log(\`Post: \${post.title}, Tags: \${post.tags.join(', ')}\`));
}

runTests();`,
            tests: [
              { type: "contains", value: "interface User" },
              { type: "contains", value: "type ApiResult<T>" },
              { type: "contains", value: "class ApiClient" },
              { type: "contains", value: "handleResult<T>" }
            ],
            debuggingTip: `Common mistakes:
• Generic class method: async get<T>() — the type parameter goes after the method name, not the class name.
• await without async? Functions using await must be async — and they return Promise<T> automatically.
• Discriminated union narrowing: if (result.success) narrows to success branch — TypeScript knows result.data is T there.
• Private class field access? Private members accessible within the class body — not outside, not in subclasses.
• Generic simulateFetch? The T in private async simulateFetch<T> is independent of the class — each call has its own T.`
          }
        }
      ]
    }
  ]
};