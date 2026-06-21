// Go curriculum data - all levels and lessons
export const goCurriculum = {
  label: "Go",
  modules: [
    {
      id: "go-level0-m1",
      title: "Level 0 — Hello Go",
      duration: "15 min",
      lessons: [
        {
          id: "go-level0-m1-l1",
          title: "Make Go Talk – fmt.Println()",
          explanation: `In Go, all executable programs need a main package and a main function. To print text, we use the fmt (format) package and its Println function. This is the foundation of any Go program - it's how you communicate output to the user.`,
          concept: `package main - Required for executable programs
import "fmt" - Import the format package
func main() - Entry point of the program
fmt.Println("text") - Prints text and adds a new line`,
          example: `package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
          exercise: {
            prompt: `Use fmt.Println() inside the main function to display exactly: "I am ready to code in Go!"`,
            starterCode: `package main
import "fmt"

func main() {
    // Print here
}`,
            solution: `package main
import "fmt"

func main() {
    fmt.Println("I am ready to code in Go!")
}`,
            tests: [
              { type: "contains", value: "package main" },
              { type: "contains", value: "import \"fmt\"" },
              { type: "contains", value: "func main()" },
              { type: "contains", value: "fmt.Println" },
              { type: "contains", value: "I am ready to code in Go!" },
            ],
            debuggingTip: `Make sure "fmt" is imported and Println starts with a capital 'P'. Go is case-sensitive.`,
          },
        },
        {
          id: "go-level0-m1-l2",
          title: "Print vs Println",
          explanation: `fmt.Println automatically adds a new line after printing. fmt.Print does not - it leaves the cursor on the same line. This is useful when you want to build output piece by piece on the same line.`,
          concept: `fmt.Print("A") - No newline added
fmt.Println("B") - Newline added
Multiple Print calls output concatenated on same line`,
          example: `package main
import "fmt"

func main() {
    fmt.Print("Hello ")
    fmt.Print("World!")
    fmt.Println()
}`,
          exercise: {
            prompt: `Use two fmt.Print() statements to print "Go is " and then "Awesome!"`,
            starterCode: `package main
import "fmt"

func main() {
    // Print "Go is "
    // Print "Awesome!"
}`,
            solution: `package main
import "fmt"

func main() {
    fmt.Print("Go is ")
    fmt.Print("Awesome!")
}`,
            tests: [
              { type: "contains", value: "fmt.Print" },
              { type: "contains", value: "Go is" },
              { type: "contains", value: "Awesome!" },
            ],
            debuggingTip: `Make sure you are using Print, not Println. Print does NOT add a newline.`,
          },
        },
        {
          id: "go-level0-m1-l3",
          title: "Printing Numbers and Math",
          explanation: `You can print numbers directly using fmt.Println(), and Go will evaluate mathematical expressions before printing them. This makes it easy to perform calculations and display results.`,
          concept: `fmt.Println(42) - Prints the number 42
fmt.Println(10 + 5) - Evaluates to 15, then prints
Go evaluates math expressions at runtime`,
          example: `package main
import "fmt"

func main() {
    fmt.Println(2026)
    fmt.Println(10 * 3)
    fmt.Println(50 / 2)
}`,
          exercise: {
            prompt: `Print the number 100, then print the result of 50 * 2.`,
            starterCode: `package main
import "fmt"

func main() {
    // Print 100
    // Print 50 * 2
}`,
            solution: `package main
import "fmt"

func main() {
    fmt.Println(100)
    fmt.Println(50 * 2)
}`,
            tests: [
              { type: "contains", value: "fmt.Println(100)" },
              { type: "contains", value: "50 * 2" },
            ],
            debuggingTip: `Do not wrap math equations in quotes, otherwise they print as plain text like "50 * 2" instead of 100.`,
          },
        },
        {
          id: "go-level0-m1-l4",
          title: "Formatting Strings with Printf",
          explanation: `fmt.Printf lets you format text by injecting values using "verbs" like %s (strings) and %d (numbers). It requires a manual newline (\n) at the end of your format string.`,
          concept: `fmt.Printf(format, values...)
%d - integer
%s - string
%f - floating point
\n - newline`,
          example: `package main
import "fmt"

func main() {
    fmt.Printf("Score: %d\n", 95)
    fmt.Printf("Hello %s\n", "Alice")
}`,
          exercise: {
            prompt: `Use fmt.Printf to print "I have 3 apples" using the %d verb for the number 3 and a newline.`,
            starterCode: `package main
import "fmt"

func main() {
    // Use fmt.Printf
}`,
            solution: `package main
import "fmt"

func main() {
    fmt.Printf("I have %d apples\n", 3)
}`,
            tests: [
              { type: "contains", value: "fmt.Printf" },
              { type: "contains", value: "%d" },
              { type: "contains", value: "I have" },
              { type: "contains", value: "apples" },
            ],
            debuggingTip: `Remember to include the \n inside your format string for a newline, and pass the values as additional arguments after the format string.`,
          },
        },
      ],
    },
    {
      id: "go-level1-m1",
      title: "Level 1 — Variables & Data Types",
      duration: "25 min",
      lessons: [
        {
          id: "go-level1-m1-l1",
          title: "Variables with 'var'",
          explanation: `Declare variables using the var keyword followed by the name and type. This is the explicit way to declare variables in Go and gives you full control over the type.`,
          concept: `var name string = "Value"
var age int = 28
Variable declaration requires type annotation`,
          example: `package main
import "fmt"

func main() {
    var city string = "Paris"
    var age int = 28
    fmt.Println(city, age)
}`,
          exercise: {
            prompt: `Declare a string 'language' set to "Go" and an int 'version' set to 1.`,
            starterCode: `package main
import "fmt"

func main() {
    // Declare language and version
}`,
            solution: `package main
import "fmt"

func main() {
    var language string = "Go"
    var version int = 1
}`,
            tests: [
              { type: "contains", value: "var language" },
              { type: "contains", value: "string" },
              { type: "contains", value: "var version" },
              { type: "contains", value: "int" },
            ],
            debuggingTip: `Order matters: var [name] [type] = [value]. The type comes before the equals sign.`,
          },
        },
        {
          id: "go-level1-m1-l2",
          title: "Short Variable Declaration",
          explanation: `Inside functions, use := to declare AND assign a variable. Go automatically infers the type from the value you assign. This is the idiomatic way to declare variables in Go.`,
          concept: `name := "Value" - Type is inferred
points := 50 - Infers int type
:= operator only used for first declaration`,
          example: `package main
import "fmt"

func main() {
    score := 100
    greeting := "Hello"
    fmt.Println(score, greeting)
}`,
          exercise: {
            prompt: `Create a variable 'points' set to 50 using :=.`,
            starterCode: `package main
import "fmt"

func main() {
    // Create 'points'
}`,
            solution: `package main
import "fmt"

func main() {
    points := 50
}`,
            tests: [
              { type: "contains", value: "points := 50" },
            ],
            debuggingTip: `The := operator is only used the FIRST time you create the variable. After that, use = to reassign.`,
          },
        },
        {
          id: "go-level1-m1-l3",
          title: "Constants",
          explanation: `Constants are variables whose values cannot be changed after assignment. Use the const keyword to declare them. Constants must be assigned at declaration time.`,
          concept: `const Pi = 3.14
const greeting = "Hello"
Constants are immutable`,
          example: `package main
import "fmt"

func main() {
    const gravity = 9.8
    const maxUsers = 100
    fmt.Println(gravity, maxUsers)
}`,
          exercise: {
            prompt: `Create a constant named 'gravity' set to 9.8.`,
            starterCode: `package main
import "fmt"

func main() {
    // Create const gravity
}`,
            solution: `package main
import "fmt"

func main() {
    const gravity = 9.8
}`,
            tests: [
              { type: "contains", value: "const gravity" },
              { type: "contains", value: "9.8" },
            ],
            debuggingTip: `You cannot use := to declare a constant, and you cannot reassign a constant's value.`,
          },
        },
        {
          id: "go-level1-m1-l4",
          title: "Basic Data Types",
          explanation: `Go is statically typed. Basic types include int, float64, string, and bool. When you declare a variable, the type must match the value you assign.`,
          concept: `int - whole numbers
float64 - decimal numbers
string - text
bool - true or false (lowercase)`,
          example: `package main
import "fmt"

func main() {
    isActive := true
    price := 19.99
    name := "Alice"
    count := 42
    fmt.Println(isActive, price, name, count)
}`,
          exercise: {
            prompt: `Create a bool 'isReady' (true) and a float64 'temp' (72.5).`,
            starterCode: `package main
import "fmt"

func main() {
    // Create isReady and temp
}`,
            solution: `package main
import "fmt"

func main() {
    isReady := true
    temp := 72.5
}`,
            tests: [
              { type: "contains", value: "isReady" },
              { type: "contains", value: "true" },
              { type: "contains", value: "temp" },
              { type: "contains", value: "72.5" },
            ],
            debuggingTip: `Booleans are lowercase 'true' or 'false', not 'True' or 'False'.`,
          },
        },
        {
          id: "go-level1-m1-l5",
          title: "Type Conversion",
          explanation: `Go requires explicit conversion between types. You cannot automatically convert an int to a float64. You must use the type as a function to convert.`,
          concept: `float64(myInt) - Converts int to float64
int(myFloat) - Converts float64 to int
Type(value) - General conversion syntax`,
          example: `package main
import "fmt"

func main() {
    i := 42
    f := float64(i)
    fmt.Println(f)
}`,
          exercise: {
            prompt: `Convert the int 'x = 10' into a float64 variable 'y'.`,
            starterCode: `package main
import "fmt"

func main() {
    x := 10
    // Convert to y
}`,
            solution: `package main
import "fmt"

func main() {
    x := 10
    y := float64(x)
}`,
            tests: [
              { type: "contains", value: "float64(x)" },
            ],
            debuggingTip: `Wrap the variable in parentheses after the type name: float64(x), not float64 x.`,
          },
        },
      ],
    },
    {
      id: "go-level2-m1",
      title: "Level 2 — Control Flow",
      duration: "30 min",
      lessons: [
        {
          id: "go-level2-m1-l1",
          title: "If / Else Statements",
          explanation: `Use if to run code based on conditions. Go does not require parentheses around conditions (though they are allowed). Curly braces define the block to execute.`,
          concept: `if condition { ... }
else { ... }
No parentheses required around condition`,
          example: `package main
import "fmt"

func main() {
    score := 85
    if score >= 90 {
        fmt.Println("A")
    } else {
        fmt.Println("B")
    }
}`,
          exercise: {
            prompt: `If 'age' is >= 18, print "Adult", else print "Minor".`,
            starterCode: `package main
import "fmt"

func main() {
    age := 16
    // Write if/else
}`,
            solution: `package main
import "fmt"

func main() {
    age := 16
    if age >= 18 {
        fmt.Println("Adult")
    } else {
        fmt.Println("Minor")
    }
}`,
            tests: [
              { type: "contains", value: "if age >= 18" },
              { type: "contains", value: "else" },
              { type: "contains", value: "Adult" },
              { type: "contains", value: "Minor" },
            ],
            debuggingTip: `The else keyword MUST be on the same line as the closing brace } of the if block.`,
          },
        },
        {
          id: "go-level2-m1-l2",
          title: "If with a Short Statement",
          explanation: `You can execute a short statement right before the if condition. This is useful for declaring variables that are only needed for the condition check.`,
          concept: `if statement; condition { ... }
Use semicolon to separate statement from condition
Variable scope limited to if block`,
          example: `package main
import "fmt"

func main() {
    if n := 10; n%2 == 0 {
        fmt.Println("Even")
    }
}`,
          exercise: {
            prompt: `Create 'x := 5' in the if statement, check if 'x > 3', print "Greater".`,
            starterCode: `package main
import "fmt"

func main() {
    // Short if statement
}`,
            solution: `package main
import "fmt"

func main() {
    if x := 5; x > 3 {
        fmt.Println("Greater")
    }
}`,
            tests: [
              { type: "contains", value: "if x := 5" },
              { type: "contains", value: "x > 3" },
              { type: "contains", value: "Greater" },
            ],
            debuggingTip: `Use a semicolon ; to separate the assignment from the condition.`,
          },
        },
        {
          id: "go-level2-m1-l3",
          title: "The Standard For Loop",
          explanation: `Go only has the for loop. It has three parts: initialization, condition, and post-statement (increment). This is the fundamental looping construct in Go.`,
          concept: `for init; condition; post { ... }
for i := 0; i < 5; i++ { ... }
No parentheses around loop parameters`,
          example: `package main
import "fmt"

func main() {
    for i := 1; i <= 3; i++ {
        fmt.Println(i)
    }
}`,
          exercise: {
            prompt: `Write a loop that prints 0 through 4.`,
            starterCode: `package main
import "fmt"

func main() {
    // Write for loop
}`,
            solution: `package main
import "fmt"

func main() {
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }
}`,
            tests: [
              { type: "contains", value: "for i := 0" },
              { type: "contains", value: "i < 5" },
              { type: "contains", value: "i++" },
            ],
            debuggingTip: `No parentheses around the loop parameters! This is different from C and Java.`,
          },
        },
        {
          id: "go-level2-m1-l4",
          title: "For Loop as a 'While' Loop",
          explanation: `Leave out the initialization and post statements, and for acts like a while loop. You only need the condition.`,
          concept: `for condition { ... }
Acts like while in other languages
No built-in while keyword in Go`,
          example: `package main
import "fmt"

func main() {
    n := 1
    for n < 5 {
        fmt.Println(n)
        n *= 2
    }
}`,
          exercise: {
            prompt: `While 'x > 0', print 'x' and subtract 3.`,
            starterCode: `package main
import "fmt"

func main() {
    x := 10
    // While-style loop
}`,
            solution: `package main
import "fmt"

func main() {
    x := 10
    for x > 0 {
        fmt.Println(x)
        x -= 3
    }
}`,
            tests: [
              { type: "contains", value: "for x > 0" },
              { type: "contains", value: "x -= 3" },
            ],
            debuggingTip: `Make sure to update the variable inside the loop to avoid infinite loops.`,
          },
        },
        {
          id: "go-level2-m1-l5",
          title: "Switch Statement",
          explanation: `Switch replaces long if-else chains. It evaluates an expression and runs the matching case. Go automatically breaks after a match, unlike C or Java.`,
          concept: `switch expression {
case value1: ...
case value2: ...
default: ...
}
Automatic break after each case`,
          example: `package main
import "fmt"

func main() {
    day := "Mon"
    switch day {
    case "Mon":
        fmt.Println("Work")
    case "Sat":
        fmt.Println("Play")
    default:
        fmt.Println("Rest")
    }
}`,
          exercise: {
            prompt: `Switch on 'status := 200'. Print "OK" for 200, "Unknown" for default.`,
            starterCode: `package main
import "fmt"

func main() {
    status := 200
    // Switch
}`,
            solution: `package main
import "fmt"

func main() {
    status := 200
    switch status {
    case 200:
        fmt.Println("OK")
    default:
        fmt.Println("Unknown")
    }
}`,
            tests: [
              { type: "contains", value: "switch status" },
              { type: "contains", value: "case 200" },
              { type: "contains", value: "OK" },
              { type: "contains", value: "default" },
            ],
            debuggingTip: `You don't need 'break' statements in Go - each case automatically breaks.`,
          },
        },
      ],
    },
    {
      id: "go-level3-m1",
      title: "Level 3 — Functions",
      duration: "30 min",
      lessons: [
        {
          id: "go-level3-m1-l1",
          title: "Defining Basic Functions",
          explanation: `Define functions using func, parameters, and a return type. The return type comes after the parameter list. Functions must declare their parameter types and return type explicitly.`,
          concept: `func functionName(param1 type1, param2 type2) returnType { ... }
func add(x int, y int) int { return x + y }
Return type goes after parameters`,
          example: `package main
import "fmt"

func add(x int, y int) int {
    return x + y
}

func main() {
    fmt.Println(add(5, 3))
}`,
          exercise: {
            prompt: `Create 'subtract' taking ints 'a' and 'b', returning their difference.`,
            starterCode: `package main
import "fmt"

// Define subtract
}

func main() {
}`,
            solution: `package main
import "fmt"

func subtract(a int, b int) int {
    return a - b
}

func main() {
}`,
            tests: [
              { type: "contains", value: "func subtract" },
              { type: "contains", value: "int" },
              { type: "contains", value: "return a - b" },
            ],
            debuggingTip: `Return type goes AFTER the parameter list. This is different from C/Java syntax.`,
          },
        },
        {
          id: "go-level3-m1-l2",
          title: "Omitted Parameter Types",
          explanation: `When consecutive parameters share a type, you can omit the type name until the last parameter. This keeps code concise.`,
          concept: `func add(x, y, z int) int - Omit int for x and y
func greet(first, last string) string
Type appears once at end of group`,
          example: `package main
import "fmt"

func addThree(a, b, c int) int {
    return a + b + c
}

func main() {
    fmt.Println(addThree(1, 2, 3))
}`,
          exercise: {
            prompt: `Write greet(first, last string) string returning "first last".`,
            starterCode: `package main
import "fmt"

// Define greet
}

func main() {
}`,
            solution: `package main
import "fmt"

func greet(first, last string) string {
    return first + " " + last
}

func main() {
}`,
            tests: [
              { type: "contains", value: "func greet" },
              { type: "contains", value: "first, last string" },
              { type: "contains", value: "return" },
            ],
            debuggingTip: `Only write the type once at the end of the matching group.`,
          },
        },
        {
          id: "go-level3-m1-l3",
          title: "Multiple Return Values",
          explanation: `A Go function can return multiple values. This is commonly used for returning a result and an error. Wrap multiple return types in parentheses.`,
          concept: `func swap(x, y string) (string, string) { return y, x }
Returns are separated by commas
Wrap multiple types in parentheses`,
          example: `package main
import "fmt"

func divide(a, b int) (int, int) {
    return a / b, a % b
}

func main() {
    q, r := divide(17, 5)
    fmt.Println(q, r)
}`,
          exercise: {
            prompt: `Write divAndRem(a, b int) returning the division and remainder (both ints).`,
            starterCode: `package main
import "fmt"

// Define divAndRem
}

func main() {
}`,
            solution: `package main
import "fmt"

func divAndRem(a, b int) (int, int) {
    return a / b, a % b
}

func main() {
}`,
            tests: [
              { type: "contains", value: "func divAndRem" },
              { type: "contains", value: "(int, int)" },
              { type: "contains", value: "return" },
            ],
            debuggingTip: `Wrap multiple return types in parentheses: (int, int), (string, error).`,
          },
        },
        {
          id: "go-level3-m1-l4",
          title: "Defer Statement",
          explanation: `defer delays execution of a function until the surrounding function returns. Deferred calls run in Last-In-First-Out order. This is useful for cleanup tasks.`,
          concept: `defer functionCall()
Executes when function returns
Multiple defers run in reverse order (LIFO)`,
          example: `package main
import "fmt"

func main() {
    fmt.Println("Start")
    defer fmt.Println("End")
    fmt.Println("Middle")
}`,
          exercise: {
            prompt: `Print "Start", defer printing "End", then print "Middle".`,
            starterCode: `package main
import "fmt"

func main() {
    // Start, Defer End, Middle
}`,
            solution: `package main
import "fmt"

func main() {
    fmt.Println("Start")
    defer fmt.Println("End")
    fmt.Println("Middle")
}`,
            tests: [
              { type: "contains", value: "defer" },
              { type: "contains", value: "Start" },
              { type: "contains", value: "End" },
              { type: "contains", value: "Middle" },
            ],
            debuggingTip: `Deferred calls run Last-In-First-Out. If you defer multiple times, they execute in reverse order.`,
          },
        },
      ],
    },
    {
      id: "go-level4-m1",
      title: "Level 4 — Pointers",
      duration: "25 min",
      lessons: [
        {
          id: "go-level4-m1-l1",
          title: "Memory Addresses (&)",
          explanation: `A pointer holds a memory address. The & operator generates a pointer to a variable. This allows you to reference a variable's location in memory.`,
          concept: `&variable - Gets the address of a variable
*Type - Declares a pointer type
p := &x - p points to x`,
          example: `package main
import "fmt"

func main() {
    x := 10
    p := &x
    fmt.Println(p)
}`,
          exercise: {
            prompt: `Create 'secret := 42' and print its memory address using &.`,
            starterCode: `package main
import "fmt"

func main() {
    secret := 42
    // Print address
}`,
            solution: `package main
import "fmt"

func main() {
    secret := 42
    fmt.Println(&secret)
}`,
            tests: [
              { type: "contains", value: "secret := 42" },
              { type: "contains", value: "&secret" },
            ],
            debuggingTip: `The output will look like a hex code (0xc000...) representing the memory address.`,
          },
        },
        {
          id: "go-level4-m1-l2",
          title: "Dereferencing (*)",
          explanation: `The * operator accesses the value a pointer is pointing to. This allows you to read or modify the value at that address.`,
          concept: `*p - Dereference to access value
*p = newValue - Modify the value
*Type vs *p - Type declaration vs dereferencing`,
          example: `package main
import "fmt"

func main() {
    x := 10
    p := &x
    fmt.Println(*p)
    *p = 20
    fmt.Println(x)
}`,
          exercise: {
            prompt: `Point p to x := 5. Use *p to change the value to 100.`,
            starterCode: `package main
import "fmt"

func main() {
    x := 5
    p := &x
    // update via *p
}`,
            solution: `package main
import "fmt"

func main() {
    x := 5
    p := &x
    *p = 100
}`,
            tests: [
              { type: "contains", value: "p := &x" },
              { type: "contains", value: "*p = 100" },
            ],
            debuggingTip: `Don't confuse *int (the type) with *p (the dereferencing operation).`,
          },
        },
        {
          id: "go-level4-m1-l3",
          title: "Pointers as Arguments",
          explanation: `To modify a variable inside a function, pass a pointer to it. Without a pointer, the function only modifies a copy of the value.`,
          concept: `func modify(p *int) { *p = 99 }
Pass &value when calling
Functions can modify original variable`,
          example: `package main
import "fmt"

func zero(z *int) {
    *z = 0
}

func main() {
    i := 5
    zero(&i)
    fmt.Println(i)
}`,
          exercise: {
            prompt: `Write double(n *int) that multiplies the value by 2.`,
            starterCode: `package main
import "fmt"

// define double
}

func main() {
}`,
            solution: `package main
import "fmt"

func double(n *int) {
    *n = *n * 2
}

func main() {
}`,
            tests: [
              { type: "contains", value: "func double" },
              { type: "contains", value: "*int" },
              { type: "contains", value: "*n" },
            ],
            debuggingTip: `When calling it, remember to pass the address: double(&val).`,
          },
        },
      ],
    },
    {
      id: "go-level5-m1",
      title: "Level 5 — Arrays, Slices & Maps",
      duration: "40 min",
      lessons: [
        {
          id: "go-level5-m1-l1",
          title: "Arrays (Fixed Size)",
          explanation: `Arrays have a fixed size defined at compile time. The size is part of the type, so [3]int and [4]int are different types. Arrays are rarely used directly in Go - slices are more common.`,
          concept: `var a [3]int - Declare fixed array
primes := [3]int{2, 3, 5} - Initialize with values
Size is fixed at creation`,
          example: `package main
import "fmt"

func main() {
    primes := [3]int{2, 3, 5}
    fmt.Println(primes[0])
    fmt.Println(len(primes))
}`,
          exercise: {
            prompt: `Create a fixed array of 3 ints initialized to 10, 20, 30.`,
            starterCode: `package main
import "fmt"

func main() {
    // Create array
}`,
            solution: `package main
import "fmt"

func main() {
    nums := [3]int{10, 20, 30}
}`,
            tests: [
              { type: "contains", value: "[3]int" },
              { type: "contains", value: "10" },
              { type: "contains", value: "20" },
              { type: "contains", value: "30" },
            ],
            debuggingTip: `The size goes inside the brackets. Arrays are fixed-size and cannot grow.`,
          },
        },
        {
          id: "go-level5-m1-l2",
          title: "Slices (Dynamic)",
          explanation: `Slices are dynamic and much more common than arrays. Omit the size in the brackets. Slices can grow and shrink, making them more flexible.`,
          concept: `s := []int{1, 2, 3} - Create slice
names := []string{} - Empty slice
Slices can grow with append()`,
          example: `package main
import "fmt"

func main() {
    names := []string{"John", "Paul"}
    fmt.Println(names[0])
    fmt.Println(len(names))
}`,
          exercise: {
            prompt: `Create a slice scores with 50, 60. Print the first element.`,
            starterCode: `package main
import "fmt"

func main() {
    // Create slice
}`,
            solution: `package main
import "fmt"

func main() {
    scores := []int{50, 60}
    fmt.Println(scores[0])
}`,
            tests: [
              { type: "contains", value: "scores := []int" },
              { type: "contains", value: "50" },
              { type: "contains", value: "60" },
            ],
            debuggingTip: `Slices look like arrays without the number: []type. Slices are the go-to collection type.`,
          },
        },
        {
          id: "go-level5-m1-l3",
          title: "Appending to a Slice",
          explanation: `Use append to add elements. It returns a new slice, so you must reassign the result back to the variable.`,
          concept: `s = append(s, newElement)
Returns new slice with element added
Must reassign to update slice`,
          example: `package main
import "fmt"

func main() {
    s := []int{1}
    s = append(s, 2)
    s = append(s, 3)
    fmt.Println(s)
}`,
          exercise: {
            prompt: `Append "C" to letters := []string{"A", "B"}.`,
            starterCode: `package main
import "fmt"

func main() {
    letters := []string{"A", "B"}
    // append
}`,
            solution: `package main
import "fmt"

func main() {
    letters := []string{"A", "B"}
    letters = append(letters, "C")
}`,
            tests: [
              { type: "contains", value: "append" },
              { type: "contains", value: "letters" },
              { type: "contains", value: "\"C\"" },
            ],
            debuggingTip: `You MUST reassign the result to the slice variable: s = append(s, value).`,
          },
        },
        {
          id: "go-level5-m1-l4",
          title: "Maps (Key-Value)",
          explanation: `Maps are like dictionaries or hash tables. They store key-value pairs. Initialize them with make. Maps need keys and values of the same type throughout.`,
          concept: `m := make(map[string]int)
map[keyType]valueType
Must use make() to initialize`,
          example: `package main
import "fmt"

func main() {
    ages := make(map[string]int)
    ages["Alice"] = 30
    ages["Bob"] = 25
    fmt.Println(ages["Alice"])
}`,
          exercise: {
            prompt: `Create a map 'colors' (string to string). Add "Red" -> "#FF0000".`,
            starterCode: `package main
import "fmt"

func main() {
    // Make map
}`,
            solution: `package main
import "fmt"

func main() {
    colors := make(map[string]string)
    colors["Red"] = "#FF0000"
}`,
            tests: [
              { type: "contains", value: "make(map" },
              { type: "contains", value: "colors" },
              { type: "contains", value: "Red" },
              { type: "contains", value: "#FF0000" },
            ],
            debuggingTip: `Uninitialized maps cause panics. Always use make.`,
          },
        },
        {
          id: "go-level5-m1-l5",
          title: "Iterating with Range",
          explanation: `The range loop iterates over slices (index, value) and maps (key, value). You can use _ to ignore values you don't need.`,
          concept: `for index, value := range slice
for key, value := range map
for _, v := range slice - Ignore index with _`,
          example: `package main
import "fmt"

func main() {
    animals := []string{"Dog", "Cat"}
    for i, animal := range animals {
        fmt.Println(i, animal)
    }
}`,
          exercise: {
            prompt: `Range over animals := []string{"Dog", "Cat"} and print index and value.`,
            starterCode: `package main
import "fmt"

func main() {
    animals := []string{"Dog", "Cat"}
    // Loop range
}`,
            solution: `package main
import "fmt"

func main() {
    animals := []string{"Dog", "Cat"}
    for i, animal := range animals {
        fmt.Println(i, animal)
    }
}`,
            tests: [
              { type: "contains", value: "range animals" },
              { type: "contains", value: "fmt.Println" },
            ],
            debuggingTip: `Use _ if you don't need the index: for _, v := range slice.`,
          },
        },
      ],
    },
    {
      id: "go-level6-m1",
      title: "Level 6 — Structs and Methods",
      duration: "35 min",
      lessons: [
        {
          id: "go-level6-m1-l1",
          title: "Defining Structs",
          explanation: `Structs group related data together. They are Go's alternative to classes in object-oriented languages. Define structs outside functions.`,
          concept: `type Name struct { field type }
type Vertex struct { X int; Y int }
Fields are grouped by type`,
          example: `package main
import "fmt"

type Vertex struct {
    X int
    Y int
}

func main() {
    v := Vertex{1, 2}
    fmt.Println(v)
}`,
          exercise: {
            prompt: `Define struct 'Person' with 'Name' (string) and 'Age' (int).`,
            starterCode: `package main
import "fmt"

// Define Person

func main() {
}`,
            solution: `package main
import "fmt"

type Person struct {
    Name string
    Age  int
}

func main() {
}`,
            tests: [
              { type: "contains", value: "type Person" },
              { type: "contains", value: "struct" },
              { type: "contains", value: "Name" },
              { type: "contains", value: "string" },
            ],
            debuggingTip: `Define structs outside the main function. Struct field names must be capitalized to be exported.`,
          },
        },
        {
          id: "go-level6-m1-l2",
          title: "Struct Initialization & Fields",
          explanation: `Access fields using dot notation (.). Create instances by passing values in the order fields are defined or using named fields.`,
          concept: `v := Vertex{1, 2} - Position-based
v := Vertex{X: 1, Y: 2} - Named fields
v.X - Access field`,
          example: `package main
import "fmt"

type Person struct {
    Name string
    Age  int
}

func main() {
    p := Person{"Alice", 30}
    fmt.Println(p.Name)
    p.Age = 31
    fmt.Println(p)
}`,
          exercise: {
            prompt: `Create c := Car{"Ford", "Fiesta"}, change model to "Mustang", print it.`,
            starterCode: `package main
import "fmt"

type Car struct {
    Make  string
    Model string
}

func main() {
    // Create and modify
}`,
            solution: `package main
import "fmt"

type Car struct {
    Make  string
    Model string
}

func main() {
    c := Car{"Ford", "Fiesta"}
    c.Model = "Mustang"
    fmt.Println(c.Model)
}`,
            tests: [
              { type: "contains", value: "Car{" },
              { type: "contains", value: "c.Model = \"Mustang\"" },
            ],
            debuggingTip: `Field names must match the struct exactly. Go is case-sensitive.`,
          },
        },
        {
          id: "go-level6-m1-l3",
          title: "Methods (Value Receivers)",
          explanation: `Methods are functions attached to a struct via a "receiver" argument. The receiver appears between func and the method name. Value receivers get a copy of the struct.`,
          concept: `func (v Vertex) Distance() float64 { ... }
Receiver appears before method name
Value receiver = copy of struct`,
          example: `package main
import "fmt"

type Person struct {
    Name string
}

func (p Person) Greet() {
    fmt.Println("Hi, " + p.Name)
}

func main() {
    p := Person{"Alice"}
    p.Greet()
}`,
          exercise: {
            prompt: `Add Greeting() string to User. Return "Hello, " + u.Name.`,
            starterCode: `package main
import "fmt"

type User struct {
    Name string
}

// Define method Greeting

func main() {
}`,
            solution: `package main
import "fmt"

type User struct {
    Name string
}

func (u User) Greeting() string {
    return "Hello, " + u.Name
}

func main() {
}`,
            tests: [
              { type: "contains", value: "func (u User)" },
              { type: "contains", value: "Greeting" },
              { type: "contains", value: "Hello" },
            ],
            debuggingTip: `The receiver (u User) goes between func and the method name.`,
          },
        },
        {
          id: "go-level6-m1-l4",
          title: "Methods (Pointer Receivers)",
          explanation: `To modify the struct inside a method, the receiver must be a pointer. Pointer receivers allow methods to modify the original struct, not a copy.`,
          concept: `func (v *Vertex) Scale(f int) { v.X *= f }
Receiver is *Type pointer
Method can modify original`,
          example: `package main
import "fmt"

type User struct {
    Age int
}

func (u *User) Birthday() {
    u.Age++
}

func main() {
    u := User{25}
    u.Birthday()
    fmt.Println(u.Age)
}`,
          exercise: {
            prompt: `Make a pointer method Birthday() that increments a User's Age.`,
            starterCode: `package main
import "fmt"

type User struct {
    Age int
}

// Define *User method

func main() {
}`,
            solution: `package main
import "fmt"

type User struct {
    Age int
}

func (u *User) Birthday() {
    u.Age++
}

func main() {
}`,
            tests: [
              { type: "contains", value: "func (u *User)" },
              { type: "contains", value: "Birthday" },
              { type: "contains", value: "u.Age++" },
            ],
            debuggingTip: `Without the *, the method only modifies a copy of the struct.`,
          },
        },
      ],
    },
    {
      id: "go-level7-m1",
      title: "Level 7 — Interfaces & Errors",
      duration: "30 min",
      lessons: [
        {
          id: "go-level7-m1-l1",
          title: "Defining Interfaces",
          explanation: `Interfaces define a set of methods. If a struct has those methods, it implicitly implements the interface. No explicit "implements" keyword is needed.`,
          concept: `type Reader interface { Read() ([]byte, error) }
Interfaces only contain method signatures
Implicit implementation`,
          example: `package main
import "fmt"

type Speaker interface {
    Speak() string
}

type Dog struct{}

func (d Dog) Speak() string {
    return "Woof!"
}

func main() {
    var s Speaker = Dog{}
    fmt.Println(s.Speak())
}`,
          exercise: {
            prompt: `Define Runner interface with Run() string.`,
            starterCode: `package main
import "fmt"

// Define Runner

func main() {
}`,
            solution: `package main
import "fmt"

type Runner interface {
    Run() string
}

func main() {
}`,
            tests: [
              { type: "contains", value: "type Runner" },
              { type: "contains", value: "interface" },
              { type: "contains", value: "Run" },
            ],
            debuggingTip: `Interfaces only contain method signatures, no logic.`,
          },
        },
        {
          id: "go-level7-m1-l2",
          title: "The Empty Interface",
          explanation: `interface{} (or any in Go 1.18+) specifies zero methods, meaning it can hold any value type. Use sparingly - you lose Go's type safety.`,
          concept: `var i any = "hello"
interface{} or any
Can hold any type`,
          example: `package main
import "fmt"

func printAnything(v any) {
    fmt.Println(v)
}

func main() {
    printAnything("hello")
    printAnything(42)
    printAnything(3.14)
}`,
          exercise: {
            prompt: `Write describe(v any) that prints the value.`,
            starterCode: `package main
import "fmt"

// Define describe

func main() {
}`,
            solution: `package main
import "fmt"

func describe(v any) {
    fmt.Println(v)
}

func main() {
}`,
            tests: [
              { type: "contains", value: "func describe" },
              { type: "contains", value: "any" },
            ],
            debuggingTip: `Use this sparingly - you lose Go's strict type safety.`,
          },
        },
        {
          id: "go-level7-m1-l3",
          title: "Error Handling Basics",
          explanation: `Go doesn't use try/catch. Functions return an error as their last return value. Always check errors explicitly: if err != nil { ... }`,
          concept: `val, err := doSomething()
if err != nil { ... }
error is a built-in interface`,
          example: `package main
import (
    "fmt"
    "errors"
)

func main() {
    err := errors.New("oops")
    if err != nil {
        fmt.Println("Failed")
    }
}`,
          exercise: {
            prompt: `Check if err != nil. If true, print "Failed".`,
            starterCode: `package main
import (
    "fmt"
    "errors"
)

func main() {
    err := errors.New("oops")
    // Check err
}`,
            solution: `package main
import (
    "fmt"
    "errors"
)

func main() {
    err := errors.New("oops")
    if err != nil {
        fmt.Println("Failed")
    }
}`,
            tests: [
              { type: "contains", value: "if err != nil" },
              { type: "contains", value: "Failed" },
            ],
            debuggingTip: `Always check errors explicitly in Go. This is the idiomatic error handling pattern.`,
          },
        },
      ],
    },
    {
      id: "go-level8-m1",
      title: "Level 8 — Concurrency (Goroutines & Channels)",
      duration: "40 min",
      lessons: [
        {
          id: "go-level8-m1-l1",
          title: "Goroutines",
          explanation: `A goroutine is a lightweight thread managed by the Go runtime. Prefix a function call with go to run it concurrently. The main function won't wait for goroutines unless you synchronize.`,
          concept: `go functionCall()
Lightweight thread
Non-blocking launch`,
          example: `package main
import (
    "fmt"
    "time"
)

func say(s string) {
    fmt.Println(s)
}

func main() {
    go say("hello")
    time.Sleep(time.Second)
}`,
          exercise: {
            prompt: `Launch say("hello") as a goroutine.`,
            starterCode: `package main
import "fmt"

func say(s string) {
    fmt.Println(s)
}

func main() {
    // Launch goroutine
}`,
            solution: `package main
import "fmt"

func say(s string) {
    fmt.Println(s)
}

func main() {
    go say("hello")
}`,
            tests: [
              { type: "contains", value: "go say" },
            ],
            debuggingTip: `The main function won't wait for goroutines to finish unless you tell it to!`,
          },
        },
        {
          id: "go-level8-m1-l2",
          title: "Channels",
          explanation: `Channels allow goroutines to communicate and synchronize. Send values with <-, receive with <-. Unbuffered channels block until both send and receive happen.`,
          concept: `ch := make(chan int)
ch <- v - Send value
v := <-ch - Receive value`,
          example: `package main
import "fmt"

func main() {
    ch := make(chan int)
    go func() {
        ch <- 42
    }()
    fmt.Println(<-ch)
}`,
          exercise: {
            prompt: `Create a channel of ints. Send 5 into it.`,
            starterCode: `package main
import "fmt"

func main() {
    // Make chan, send 5
}`,
            solution: `package main
import "fmt"

func main() {
    ch := make(chan int)
    go func() {
        ch <- 5
    }()
}`,
            tests: [
              { type: "contains", value: "make(chan int)" },
              { type: "contains", value: "<- 5" },
            ],
            debuggingTip: `Sending to an unbuffered channel blocks until someone receives!`,
          },
        },
        {
          id: "go-level8-m1-l3",
          title: "Buffered Channels",
          explanation: `Channels can be buffered, allowing you to send multiple values before blocking. The buffer size is the second argument to make.`,
          concept: `ch := make(chan int, 2)
Buffer size = 2
Can send 2 values before blocking`,
          example: `package main
import "fmt"

func main() {
    ch := make(chan string, 2)
    ch <- "A"
    ch <- "B"
    fmt.Println(<-ch)
}`,
          exercise: {
            prompt: `Create a buffered channel with capacity 2, send "A" and "B".`,
            starterCode: `package main
import "fmt"

func main() {
    // Buffered chan
}`,
            solution: `package main
import "fmt"

func main() {
    ch := make(chan string, 2)
    ch <- "A"
    ch <- "B"
}`,
            tests: [
              { type: "contains", value: "make(chan string, 2)" },
              { type: "contains", value: "\"A\"" },
              { type: "contains", value: "\"B\"" },
            ],
            debuggingTip: `Buffer size is the second argument to make.`,
          },
        },
        {
          id: "go-level8-m1-l4",
          title: "The Select Statement",
          explanation: `select lets a goroutine wait on multiple communication operations. It's like a switch statement, but for channels. It blocks until one case is ready.`,
          concept: `select {
case msg := <-ch1: ...
case msg := <-ch2: ...
default: ...
}`,
          example: `package main
import "fmt"

func main() {
    c := make(chan int)
    select {
    case val := <-c:
        fmt.Println(val)
    default:
        fmt.Println("Waiting")
    }
}`,
          exercise: {
            prompt: `Write a select statement that receives from channel 'c' and prints it, or prints "Waiting" if 'c' is empty (using default).`,
            starterCode: `package main
import "fmt"

func main() {
    c := make(chan int)
    // Write select statement
}`,
            solution: `package main
import "fmt"

func main() {
    c := make(chan int)
    select {
    case val := <-c:
        fmt.Println(val)
    default:
        fmt.Println("Waiting")
    }
}`,
            tests: [
              { type: "contains", value: "select" },
              { type: "contains", value: "case" },
              { type: "contains", value: "default" },
            ],
            debuggingTip: `The default case prevents the select from blocking if no channels are ready.`,
          },
        },
        {
          id: "go-level8-m1-l5",
          title: "Synchronizing with WaitGroups",
          explanation: `sync.WaitGroup allows your main function to wait for a collection of goroutines to finish. Add(1) before launch, Done() inside, Wait() at the end.`,
          concept: `var wg sync.WaitGroup
wg.Add(1) - Increment counter
wg.Done() - Decrement when goroutine finishes
wg.Wait() - Block until counter is 0`,
          example: `package main
import (
    "fmt"
    "sync"
)

func main() {
    var wg sync.WaitGroup
    wg.Add(1)
    go func() {
        defer wg.Done()
        fmt.Println("Done")
    }()
    wg.Wait()
}`,
          exercise: {
            prompt: `Create a WaitGroup, Add 1, launch a goroutine that prints "Done", call Done(), and Wait() in main.`,
            starterCode: `package main
import (
    "fmt"
    "sync"
)

func main() {
    // Use WaitGroup
}`,
            solution: `package main
import (
    "fmt"
    "sync"
)

func main() {
    var wg sync.WaitGroup
    wg.Add(1)
    go func() {
        defer wg.Done()
        fmt.Println("Done")
    }()
    wg.Wait()
}`,
            tests: [
              { type: "contains", value: "sync.WaitGroup" },
              { type: "contains", value: "wg.Add(1)" },
              { type: "contains", value: "wg.Done()" },
              { type: "contains", value: "wg.Wait()" },
            ],
            debuggingTip: `Always use defer wg.Done() to ensure it's called even if the goroutine panics.`,
          },
        },
      ],
    },
    {
      id: "go-level9-m1",
      title: "Level 9 — Packages and Modules",
      duration: "30 min",
      lessons: [
        {
          id: "go-level9-m1-l1",
          title: "Exported vs Unexported Names",
          explanation: `If a name starts with a capital letter, it's exported (public). Lowercase names are unexported (private to the package). This is Go's visibility rule.`,
          concept: `Calculate() - Exported (public)
calculate() - Unexported (private)
Config{} - Exported struct`,
          example: `package main

type Config struct {
    Name string
}

type settings struct {
    Debug bool
}

func PublicFunc() {
}

func privateFunc() {
}`,
          exercise: {
            prompt: `Define an exported struct named 'Config' and an unexported struct named 'settings'.`,
            starterCode: `package main

// Define structs
`,
            solution: `package main

type Config struct {
}

type settings struct {
}`,
            tests: [
              { type: "contains", value: "type Config" },
              { type: "contains", value: "type settings" },
            ],
            debuggingTip: `If you can't access a struct from another package, check if the name is capitalized.`,
          },
        },
        {
          id: "go-level9-m1-l2",
          title: "Initializing a Module",
          explanation: `Go projects are organized as modules. Create a go.mod file using go mod init in the terminal. This tracks your project's dependencies.`,
          concept: `go mod init [module-path]
Creates go.mod file
Tracks dependencies`,
          example: `Terminal command: go mod init github.com/username/myapp
Creates: go.mod file with module definition`,
          exercise: {
            prompt: `Write the command to initialize a module named "calculator".`,
            starterCode: `Terminal command: // Initialize module
`,
            solution: `Terminal command: go mod init calculator
`,
            tests: [
              { type: "contains", value: "go mod init" },
              { type: "contains", value: "calculator" },
            ],
            debuggingTip: `This creates a go.mod file which tracks your dependencies and the minimum Go version.`,
          },
        },
        {
          id: "go-level9-m1-l3",
          title: "Importing Standard Packages",
          explanation: `Go has a massive standard library. Import packages at the top of your file. Go will error if you import but don't use a package.`,
          concept: `import "fmt"
import (
    "fmt"
    "math"
)
Standard library packages`,
          example: `package main
import (
    "fmt"
    "math"
)

func main() {
    fmt.Println(math.Sqrt(16))
}`,
          exercise: {
            prompt: `Import "math" and use math.Sqrt(16) to find the square root. Print it.`,
            starterCode: `package main
import "fmt"

// Import and use math.Sqrt
func main() {
}`,
            solution: `package main
import (
    "fmt"
    "math"
)

func main() {
    fmt.Println(math.Sqrt(16))
}`,
            tests: [
              { type: "contains", value: "import" },
              { type: "contains", value: "math" },
              { type: "contains", value: "Sqrt" },
            ],
            debuggingTip: `Go will throw a compile error if you import a package and don't use it.`,
          },
        },
        {
          id: "go-level9-m1-l4",
          title: "Third-Party Packages (go get)",
          explanation: `Use go get in the terminal to download community packages. They're added to go.mod and go.sum automatically.`,
          concept: `go get [import-path]
Downloads package
Updates go.mod`,
          example: `Terminal command: go get github.com/gorilla/mux
Then: import "github.com/gorilla/mux"`,
          exercise: {
            prompt: `Write the command to download github.com/gorilla/mux.`,
            starterCode: `Terminal command: // Download mux
`,
            solution: `Terminal command: go get github.com/gorilla/mux
`,
            tests: [
              { type: "contains", value: "go get" },
              { type: "contains", value: "gorilla/mux" },
            ],
            debuggingTip: `Your downloaded packages will automatically be added to go.mod and go.sum.`,
          },
        },
      ],
    },
    {
      id: "go-level10-m1",
      title: "Level 10 — Advanced Error Handling",
      duration: "25 min",
      lessons: [
        {
          id: "go-level10-m1-l1",
          title: "Creating Custom Errors",
          explanation: `Use the errors package to create simple text-based errors. Return nil when there's no error.`,
          concept: `errors.New("message")
if err != nil { ... }
Return nil for no error`,
          example: `package main
import (
    "fmt"
    "errors"
)

func check(age int) error {
    if age < 18 {
        return errors.New("too young")
    }
    return nil
}

func main() {
    err := check(15)
    if err != nil {
        fmt.Println(err)
    }
}`,
          exercise: {
            prompt: `Create a function check(age int) error that returns an error "too young" if age is under 18, else nil.`,
            starterCode: `package main
import (
    "fmt"
    "errors"
)

// Define check

func main() {
}`,
            solution: `package main
import (
    "fmt"
    "errors"
)

func check(age int) error {
    if age < 18 {
        return errors.New("too young")
    }
    return nil
}

func main() {
}`,
            tests: [
              { type: "contains", value: "func check" },
              { type: "contains", value: "error" },
              { type: "contains", value: "errors.New" },
            ],
            debuggingTip: `Return nil when there is no error.`,
          },
        },
        {
          id: "go-level10-m1-l2",
          title: "Formatting Errors",
          explanation: `If you need to include variables in your error message, use fmt.Errorf with format verbs like %d.`,
          concept: `fmt.Errorf("message %d", variable)
Same verbs as fmt.Printf
Returns error interface`,
          example: `package main
import (
    "fmt"
)

func main() {
    statusCode := 404
    err := fmt.Errorf("HTTP %d error", statusCode)
    fmt.Println(err)
}`,
          exercise: {
            prompt: `Return an error using fmt.Errorf saying "invalid ID: 404" using the variable id := 404.`,
            starterCode: `package main
import "fmt"

func main() {
    id := 404
    // Return formatted error
}`,
            solution: `package main
import "fmt"

func main() {
    id := 404
    err := fmt.Errorf("invalid ID: %d", id)
}`,
            tests: [
              { type: "contains", value: "fmt.Errorf" },
              { type: "contains", value: "%d" },
            ],
            debuggingTip: `fmt.Errorf uses the exact same verbs as fmt.Printf (%d, %s, %f, etc.).`,
          },
        },
        {
          id: "go-level10-m1-l3",
          title: "Panic and Recover",
          explanation: `panic stops ordinary control flow (like a crash). recover regains control of a panicking goroutine. Use only for truly unrecoverable errors.`,
          concept: `panic("message")
defer func() { recover() }()
Use sparingly`,
          example: `package main
import "fmt"

func main() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered:", r)
        }
    }()
    panic("System failure")
}`,
          exercise: {
            prompt: `Write a simple statement that triggers a panic with the message "System failure".`,
            starterCode: `package main
import "fmt"

func main() {
    // trigger panic
}`,
            solution: `package main
import "fmt"

func main() {
    panic("System failure")
}`,
            tests: [
              { type: "contains", value: "panic" },
              { type: "contains", value: "System failure" },
            ],
            debuggingTip: `Panics should only be used for truly unrecoverable programming errors, not regular error handling.`,
          },
        },
      ],
    },
    {
      id: "go-level11-m1",
      title: "Level 11 — File I/O and Text",
      duration: "30 min",
      lessons: [
        {
          id: "go-level11-m1-l1",
          title: "Reading a File",
          explanation: `Use os.ReadFile to load an entire file into memory as a byte slice []byte. Convert it to a string using string(data).`,
          concept: `data, err := os.ReadFile("file.txt")
Returns []byte and error
string(data) converts to text`,
          example: `package main
import (
    "fmt"
    "os"
    "log"
)

func main() {
    data, err := os.ReadFile("data.txt")
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(string(data))
}`,
          exercise: {
            prompt: `Read "data.txt", handle the error, and print the data cast to a string.`,
            starterCode: `package main
import (
    "fmt"
    "os"
    "log"
)

func main() {
    // Read file and print
}`,
            solution: `package main
import (
    "fmt"
    "os"
    "log"
)

func main() {
    data, err := os.ReadFile("data.txt")
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(string(data))
}`,
            tests: [
              { type: "contains", value: "ReadFile" },
              { type: "contains", value: "err != nil" },
              { type: "contains", value: "string(data)" },
            ],
            debuggingTip: `ReadFile returns bytes. Convert it to text using string(data).`,
          },
        },
        {
          id: "go-level11-m1-l2",
          title: "Writing to a File",
          explanation: `Use os.WriteFile to write a byte slice to a file. The third argument is the file permissions (0644 is standard).`,
          concept: `os.WriteFile("file.txt", []byte(data), 0644)
Creates file if doesn't exist
0644 = rw-r--r-- permissions`,
          example: `package main
import (
    "os"
    "log"
)

func main() {
    data := []byte("Hello File")
    err := os.WriteFile("out.txt", data, 0644)
    if err != nil {
        log.Fatal(err)
    }
}`,
          exercise: {
            prompt: `Write the string "Hello File" to "out.txt" with permissions 0644. Check for errors.`,
            starterCode: `package main
import (
    "os"
    "log"
)

func main() {
    // Write to file
}`,
            solution: `package main
import (
    "os"
    "log"
)

func main() {
    err := os.WriteFile("out.txt", []byte("Hello File"), 0644)
    if err != nil {
        log.Fatal(err)
    }
}`,
            tests: [
              { type: "contains", value: "WriteFile" },
              { type: "contains", value: "0644" },
              { type: "contains", value: "[]byte" },
            ],
            debuggingTip: `0644 is the standard permission code allowing read/write for owner, read-only for others.`,
          },
        },
        {
          id: "go-level11-m1-l3",
          title: "String Manipulation",
          explanation: `The strings package handles searching, replacing, and modifying text. String functions return new strings; they don't modify the original.`,
          concept: `strings.Contains("hello", "ll") // true
strings.ToUpper("go") // GO
strings.Replace(s, old, new, n)`,
          example: `package main
import (
    "fmt"
    "strings"
)

func main() {
    s := "Golang"
    fmt.Println(strings.Contains(s, "Go"))
    fmt.Println(strings.ToUpper(s))
}`,
          exercise: {
            prompt: `Import "strings" and check if "Golang" contains "Go". Print the boolean result.`,
            starterCode: `package main
import (
    "fmt"
    "strings"
)

func main() {
    // Check substring
}`,
            solution: `package main
import (
    "fmt"
    "strings"
)

func main() {
    fmt.Println(strings.Contains("Golang", "Go"))
}`,
            tests: [
              { type: "contains", value: "strings" },
              { type: "contains", value: "Contains" },
            ],
            debuggingTip: `String functions return new strings; they do not modify the original string in place.`,
          },
        },
      ],
    },
    {
      id: "go-level12-m1",
      title: "Level 12 — Testing and Benchmarking",
      duration: "35 min",
      lessons: [
        {
          id: "go-level12-m1-l1",
          title: "Writing a Basic Test",
          explanation: `Tests live in files ending in _test.go. Test functions start with Test and take *testing.T. Run with go test.`,
          concept: `func TestName(t *testing.T)
Files end with _test.go
t.Errorf() for failures`,
          example: `package main
import "testing"

func TestAdd(t *testing.T) {
    result := 1 + 1
    if result != 2 {
        t.Errorf("Expected 2, got %d", result)
    }
}`,
          exercise: {
            prompt: `Write a test function TestSub that fails using t.Errorf("Failed") if 5 - 3 != 2.`,
            starterCode: `package main
import "testing"

// Write test function
`,
            solution: `package main
import "testing"

func TestSub(t *testing.T) {
    if 5-3 != 2 {
        t.Errorf("Failed")
    }
}`,
            tests: [
              { type: "contains", value: "func TestSub" },
              { type: "contains", value: "testing.T" },
              { type: "contains", value: "t.Errorf" },
            ],
            debuggingTip: `Run tests in the terminal using go test.`,
          },
        },
        {
          id: "go-level12-m1-l2",
          title: "Table-Driven Tests",
          explanation: `Go developers prefer grouping test cases into a slice of structs and looping. This makes adding new test cases trivial.`,
          concept: `cases := []struct{
    input string
    expected string
}{ {"a", "b"} }
for _, c := range cases { ... }`,
          example: `package main
import "testing"

func TestToUpper(t *testing.T) {
    cases := []struct {
        in  string
        out string
    }{
        {"hello", "HELLO"},
        {"world", "WORLD"},
    }
    for _, c := range cases {
        if c.in != c.out {
            t.Errorf("Expected %s", c.out)
        }
    }
}`,
          exercise: {
            prompt: `Create a test case slice with fields in (string) and out (string) with one entry: {"hi", "HI"}.`,
            starterCode: `package main
import "testing"

// Define cases table
`,
            solution: `package main
import "testing"

cases := []struct {
    in  string
    out string
}{
    {"hi", "HI"},
}`,
            tests: [
              { type: "contains", value: "[]struct" },
              { type: "contains", value: "in" },
              { type: "contains", value: "out" },
            ],
            debuggingTip: `Table-driven tests make it trivial to add 100 new test cases without writing new test functions.`,
          },
        },
        {
          id: "go-level12-m1-l3",
          title: "Writing Benchmarks",
          explanation: `Benchmarks test performance. They start with Benchmark and take *testing.B. You must run a loop b.N times.`,
          concept: `func BenchmarkFunc(b *testing.B)
for i := 0; i < b.N; i++ { ... }
Run: go test -bench=.`,
          example: `package main
import "testing"

func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        _ = 1 + 2
    }
}`,
          exercise: {
            prompt: `Write BenchmarkSub(b *testing.B) that runs 5 - 3 in a loop b.N times.`,
            starterCode: `package main
import "testing"

// Write benchmark
`,
            solution: `package main
import "testing"

func BenchmarkSub(b *testing.B) {
    for i := 0; i < b.N; i++ {
        _ = 5 - 3
    }
}`,
            tests: [
              { type: "contains", value: "func BenchmarkSub" },
              { type: "contains", value: "testing.B" },
              { type: "contains", value: "b.N" },
            ],
            debuggingTip: `Run benchmarks in the terminal using go test -bench=.`,
          },
        },
      ],
    },
    {
      id: "go-level13-m1",
      title: "Level 13 — Generics (Go 1.18+)",
      duration: "30 min",
      lessons: [
        {
          id: "go-level13-m1-l1",
          title: "Type Parameters",
          explanation: `Generics let you write functions that work with multiple types. Define type parameters in square brackets [].`,
          concept: `func Print[T any](s []T)
func First[T any](items []T) T
[T any] - Type parameter`,
          example: `package main
import "fmt"

func First[T any](items []T) T {
    return items[0]
}

func main() {
    fmt.Println(First([]int{1, 2, 3}))
    fmt.Println(First([]string{"a", "b"}))
}`,
          exercise: {
            prompt: `Define a generic function Echo[T any](val T) T that simply returns the val.`,
            starterCode: `package main
import "fmt"

// Define Echo

func main() {
}`,
            solution: `package main
import "fmt"

func Echo[T any](val T) T {
    return val
}

func main() {
}`,
            tests: [
              { type: "contains", value: "func Echo[T any]" },
              { type: "contains", value: "return val" },
            ],
            debuggingTip: `any is an alias for interface{}. It means "literally any type".`,
          },
        },
        {
          id: "go-level13-m1-l2",
          title: "Type Constraints (comparable)",
          explanation: `If you need to use == or != on a generic type, use the comparable constraint instead of any.`,
          concept: `func Equal[T comparable](a, b T) bool
comparable - Supports == and !=
Type constraint`,
          example: `package main
import "fmt"

func Match[T comparable](a, b T) bool {
    return a == b
}

func main() {
    fmt.Println(Match(5, 5))
    fmt.Println(Match("a", "b"))
}`,
          exercise: {
            prompt: `Write Match[T comparable](a, b T) bool returning true if they are equal.`,
            starterCode: `package main
import "fmt"

// Define Match

func main() {
}`,
            solution: `package main
import "fmt"

func Match[T comparable](a, b T) bool {
    return a == b
}

func main() {
}`,
            tests: [
              { type: "contains", value: "func Match[T comparable]" },
              { type: "contains", value: "a == b" },
            ],
            debuggingTip: `Constraints tell the compiler what operations are safe on the generic type.`,
          },
        },
        {
          id: "go-level13-m1-l3",
          title: "Custom Type Constraints",
          explanation: `You can create custom constraints using interfaces with a union of types using the | operator.`,
          concept: `type Number interface { int | float64 }
func Add[T Number](a, b T) T
| operator for union types`,
          example: `package main
import "fmt"

type Number interface {
    int | float64
}

func Add[T Number](a, b T) T {
    return a + b
}

func main() {
    fmt.Println(Add(5, 3))
    fmt.Println(Add(5.5, 3.2))
}`,
          exercise: {
            prompt: `Define an interface Float that accepts float32 | float64.`,
            starterCode: `package main

// Define Float constraint

func main() {
}`,
            solution: `package main

type Float interface {
    float32 | float64
}

func main() {
}`,
            tests: [
              { type: "contains", value: "type Float" },
              { type: "contains", value: "float32 | float64" },
            ],
            debuggingTip: `The | operator acts as an "OR" for acceptable types.`,
          },
        },
      ],
    },
    {
      id: "go-level14-m1",
      title: "Level 14 — Building Web APIs (net/http)",
      duration: "40 min",
      lessons: [
        {
          id: "go-level14-m1-l1",
          title: "Starting an HTTP Server",
          explanation: `The net/http package includes a built-in production-ready web server. ListenAndServe blocks until an error occurs.`,
          concept: `http.ListenAndServe(":port", handler)
Blocks forever
Returns error if crashed`,
          example: `package main
import (
    "fmt"
    "net/http"
)

func main() {
    fmt.Println("Server starting on :8080")
    http.ListenAndServe(":8080", nil)
}`,
          exercise: {
            prompt: `Start a web server on port 9000.`,
            starterCode: `package main
import (
    "fmt"
    "net/http"
)

func main() {
    // Start server
}`,
            solution: `package main
import (
    "fmt"
    "net/http"
)

func main() {
    http.ListenAndServe(":9000", nil)
}`,
            tests: [
              { type: "contains", value: "http.ListenAndServe" },
              { type: "contains", value: "9000" },
            ],
            debuggingTip: `This function blocks forever unless it encounters an error.`,
          },
        },
        {
          id: "go-level14-m1-l2",
          title: "Handling Routes",
          explanation: `Use http.HandleFunc to map a URL path to a function. Handler functions receive the ResponseWriter and request.`,
          concept: `http.HandleFunc("/path", handlerFunc)
func handler(w http.ResponseWriter, r *http.Request)
fmt.Fprint(w, "response")`,
          example: `package main
import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprint(w, "Hi!")
    })
    http.ListenAndServe(":8080", nil)
}`,
          exercise: {
            prompt: `Create a route for "/hello" that writes "Hi!" to the ResponseWriter w.`,
            starterCode: `package main
import (
    "fmt"
    "net/http"
)

func main() {
    // Handle /hello
    http.ListenAndServe(":8080", nil)
}`,
            solution: `package main
import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprint(w, "Hi!")
    })
    http.ListenAndServe(":8080", nil)
}`,
            tests: [
              { type: "contains", value: "HandleFunc" },
              { type: "contains", value: "/hello" },
              { type: "contains", value: "Hi!" },
            ],
            debuggingTip: `Handlers take two arguments: ResponseWriter and *Request.`,
          },
        },
        {
          id: "go-level14-m1-l3",
          title: "Making HTTP GET Requests",
          explanation: `Use http.Get to consume other APIs. Always defer resp.Body.Close() to prevent memory leaks.`,
          concept: `resp, err := http.Get("url")
defer resp.Body.Close()
Handle error immediately`,
          example: `package main
import (
    "fmt"
    "net/http"
    "log"
    "io"
)

func main() {
    resp, err := http.Get("http://example.com")
    if err != nil {
        log.Fatal(err)
    }
    defer resp.Body.Close()
    body, _ := io.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,
          exercise: {
            prompt: `Make a GET request to "http://example.com" and handle the error.`,
            starterCode: `package main
import (
    "fmt"
    "net/http"
    "log"
)

func main() {
    // Make GET request
}`,
            solution: `package main
import (
    "fmt"
    "net/http"
    "log"
)

func main() {
    resp, err := http.Get("http://example.com")
    if err != nil {
        log.Fatal(err)
    }
    defer resp.Body.Close()
}`,
            tests: [
              { type: "contains", value: "http.Get" },
              { type: "contains", value: "err != nil" },
              { type: "contains", value: "defer" },
            ],
            debuggingTip: `Don't forget to defer resp.Body.Close() to prevent memory leaks!`,
          },
        },
        {
          id: "go-level14-m1-l4",
          title: "Encoding JSON",
          explanation: `To send JSON responses, use json.NewEncoder(w).Encode(data). Struct fields MUST be capitalized for JSON encoding.`,
          concept: `json.NewEncoder(w).Encode(struct)
Capitalized fields - Exported
Lowercase fields - Ignored`,
          example: `package main
import (
    "fmt"
    "net/http"
    "encoding/json"
)

type Person struct {
    Name string
    Age  int
}

func main() {
    http.HandleFunc("/user", func(w http.ResponseWriter, r *http.Request) {
        p := Person{"Alice", 30}
        json.NewEncoder(w).Encode(p)
    })
}`,
          exercise: {
            prompt: `Create a struct instance p := Person{"Alice"}, then encode it to JSON into w.`,
            starterCode: `package main
import (
    "encoding/json"
    "net/http"
)

type Person struct {
    Name string
}

func main() {
    // Encode to JSON
}`,
            solution: `package main
import (
    "encoding/json"
    "net/http"
)

type Person struct {
    Name string
}

func main() {
    p := Person{"Alice"}
    var w http.ResponseWriter
    json.NewEncoder(w).Encode(p)
}`,
            tests: [
              { type: "contains", value: "json.NewEncoder" },
              { type: "contains", value: "Encode" },
            ],
            debuggingTip: `Struct fields MUST be capitalized for JSON encoding, otherwise they're blank in output.`,
          },
        },
        {
          id: "go-level14-m1-l5",
          title: "Decoding JSON",
          explanation: `To read JSON from an incoming request body, use json.NewDecoder(r.Body).Decode(&target). Pass a pointer so the decoder can populate it.`,
          concept: `var obj Type
json.NewDecoder(r.Body).Decode(&obj)
Pointer required`,
          example: `package main
import (
    "encoding/json"
    "net/http"
)

type Car struct {
    Make string
    Year int
}

func main() {
    http.HandleFunc("/car", func(w http.ResponseWriter, r *http.Request) {
        var c Car
        json.NewDecoder(r.Body).Decode(&c)
    })
}`,
          exercise: {
            prompt: `Decode the JSON from r.Body into a variable var c Car.`,
            starterCode: `package main
import (
    "encoding/json"
    "net/http"
)

type Car struct {
    Make string
}

func main() {
    var r *http.Request
    var c Car
    // Decode JSON
}`,
            solution: `package main
import (
    "encoding/json"
    "net/http"
)

type Car struct {
    Make string
}

func main() {
    var r *http.Request
    var c Car
    json.NewDecoder(r.Body).Decode(&c)
}`,
            tests: [
              { type: "contains", value: "json.NewDecoder" },
              { type: "contains", value: "Decode" },
              { type: "contains", value: "&c" },
            ],
            debuggingTip: `You must pass a pointer (&) to your variable so the decoder can populate it.`,
          },
        },
      ],
    },
  ],
};
