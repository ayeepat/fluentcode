// C++ curriculum data - all phases and lessons
export const cppCurriculum = {
  label: "C++",
  modules: [
    {
      id: "cpp-phase0-m1",
      title: "Phase 0 - Welcome to C++",
      duration: "15 min",
      lessons: [
        {
          id: "cpp-phase0-m1-l1",
          title: "Your First C++ Program",
          explanation: `C++ is a compiled, statically-typed language used everywhere
performance matters: game engines, browsers, financial systems, robotics,
and operating systems. Unlike Python or JavaScript, C++ gives you direct
control over memory and runs at near-hardware speed. The trade-off is
that you have to be more explicit - the compiler needs to know the type
of every variable, every function takes specific argument types, and you
have to manage things the interpreter would handle for you in scripting
languages. Learning C++ teaches you how computers actually work and
makes you a much stronger programmer in every other language too.`,
          concept: `Every C++ program starts at the main() function.
#include <iostream> imports the input/output stream library.
std::cout sends text to standard output; << is the stream operator.
std::endl writes a newline and flushes the buffer.
Statements end with a semicolon (;).
return 0; tells the OS the program finished successfully.`,
          example: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
          exercise: {
            prompt: `Write a C++ program that:
1. Includes <iostream>
2. Defines a main() function returning int
3. Prints "Welcome to C++" followed by a newline
4. Returns 0`,
            starterCode: `#include <iostream>

int main() {
    // Print "Welcome to C++" here

    return 0;
}
`,
            solution: `#include <iostream>

int main() {
    std::cout << "Welcome to C++" << std::endl;
    return 0;
}`,
            tests: [
              { type: "contains", value: "#include <iostream>" },
              { type: "contains", value: "int main" },
              { type: "contains", value: "std::cout" },
              { type: "contains", value: "Welcome to C++" },
              { type: "contains", value: "return 0" },
            ],
            debuggingTip: `Common mistakes:
- Forgetting #include <iostream> - the compiler won't know std::cout.
- Missing semicolons at the end of statements.
- Writing cout instead of std::cout (no 'using namespace std;' here).
- Forgetting return 0; at the end of main.`,
          },
        },
      ],
    },
    {
      id: "cpp-phase1-m1",
      title: "Phase 1 - Fundamentals",
      duration: "3 hours",
      lessons: [
        {
          id: "cpp-phase1-m1-l1",
          title: "Variables and Primitive Types",
          explanation: `C++ is statically typed: every variable has a type fixed at compile time.
The common primitive types are int (whole numbers), double (decimals),
char (a single character), and bool (true/false). You declare a variable
by writing the type then the name: int age = 25; The compiler uses the
type to decide how much memory to set aside and what operations are
legal. Trying to assign a value of the wrong type is a compile error -
which is good, because the bug never reaches your users.`,
          concept: `int     - whole numbers (e.g. 42, -7)
double  - floating-point numbers (e.g. 3.14)
char    - single character (e.g. 'A')
bool    - true or false
std::string - text (needs #include <string>)
Initialise on the same line: int count = 0;`,
          example: `#include <iostream>
#include <string>

int main() {
    int age = 25;
    double price = 9.99;
    char grade = 'A';
    bool isStudent = true;
    std::string name = "Alex";

    std::cout << name << " is " << age << " years old." << std::endl;
    std::cout << "Price: " << price << std::endl;
    std::cout << "Grade: " << grade << std::endl;
    return 0;
}`,
          exercise: {
            prompt: `Declare and print:
1. An int 'year' set to 2026
2. A double 'pi' set to 3.14159
3. A std::string 'language' set to "C++"
4. Print "Learning C++ in 2026, pi is approximately 3.14159" using std::cout`,
            starterCode: `#include <iostream>
#include <string>

int main() {
    // Declare variables here

    // Print the sentence here

    return 0;
}
`,
            solution: `#include <iostream>
#include <string>

int main() {
    int year = 2026;
    double pi = 3.14159;
    std::string language = "C++";

    std::cout << "Learning " << language << " in " << year
              << ", pi is approximately " << pi << std::endl;
    return 0;
}`,
            tests: [
              { type: "contains", value: "int year" },
              { type: "contains", value: "double pi" },
              { type: "contains", value: "std::string language" },
              { type: "contains", value: "std::cout" },
            ],
            debuggingTip: `- std::string requires #include <string>.
- char uses single quotes 'A'; std::string uses double quotes "hello".
- Chain output with multiple << operators rather than mixing types in one literal.`,
          },
        },
        {
          id: "cpp-phase1-m1-l2",
          title: "Arithmetic and Operators",
          explanation: `C++ supports the usual arithmetic operators (+, -, *, /, %) plus a
catch worth remembering: integer division truncates. 7 / 2 is 3, not
3.5, because both operands are int. To get the decimal result, at least
one operand must be a double. The modulus operator % gives the remainder
of an integer division. Compound operators like += and ++ let you
update a variable concisely. These rules are identical in C, Java, and
most C-family languages.`,
          concept: `+ - * / %    -> add, subtract, multiply, divide, remainder
int / int    -> truncates: 7 / 2 == 3
double mixed -> floating result: 7.0 / 2 == 3.5
+=, -=, *=, /=   -> compound assignment
++x, x++     -> increment by 1
--x, x--     -> decrement by 1`,
          example: `#include <iostream>

int main() {
    int a = 17;
    int b = 5;

    std::cout << a + b << std::endl;   // 22
    std::cout << a - b << std::endl;   // 12
    std::cout << a * b << std::endl;   // 85
    std::cout << a / b << std::endl;   // 3 (integer division)
    std::cout << a % b << std::endl;   // 2 (remainder)

    double x = 17.0;
    std::cout << x / b << std::endl;   // 3.4

    int counter = 0;
    counter += 5;
    counter++;
    std::cout << counter << std::endl; // 6
    return 0;
}`,
          exercise: {
            prompt: `Given int total = 50; and int people = 4;
1. Print total / people (integer division)
2. Print total % people (remainder)
3. Print the result of total / people as a decimal by casting one operand to double using static_cast<double>(total) / people`,
            starterCode: `#include <iostream>

int main() {
    int total = 50;
    int people = 4;

    // Print integer division

    // Print remainder

    // Print decimal division using static_cast<double>

    return 0;
}
`,
            solution: `#include <iostream>

int main() {
    int total = 50;
    int people = 4;

    std::cout << total / people << std::endl;
    std::cout << total % people << std::endl;
    std::cout << static_cast<double>(total) / people << std::endl;
    return 0;
}`,
            tests: [
              { type: "contains", value: "total / people" },
              { type: "contains", value: "total % people" },
              { type: "contains", value: "static_cast<double>" },
            ],
            debuggingTip: `- 50 / 4 is 12, not 12.5 - both operands are int.
- static_cast<double>(x) is the idiomatic way to convert.
- Don't divide by zero - it's undefined behaviour in C++.`,
          },
        },
        {
          id: "cpp-phase1-m1-l3",
          title: "Conditionals - if, else if, else",
          explanation: `Conditionals let your program choose between branches. The condition
goes in parentheses after if and must be a bool (or something convertible
to bool). Curly braces define the block to run if the condition is true.
You can chain alternatives with else if, and fall back with else. Comparison
operators (==, !=, <, >, <=, >=) produce bool values. Be careful: a single
= is assignment, not comparison - using = where you meant == is a classic
C++ bug.`,
          concept: `if (condition) { ... }
else if (other) { ... }
else { ... }

== equal       != not equal
<  less than   >  greater than
<= <=          >= >=
&& and         || or         ! not`,
          example: `#include <iostream>

int main() {
    int score = 78;

    if (score >= 90) {
        std::cout << "A" << std::endl;
    } else if (score >= 80) {
        std::cout << "B" << std::endl;
    } else if (score >= 70) {
        std::cout << "C" << std::endl;
    } else {
        std::cout << "F" << std::endl;
    }
    return 0;
}`,
          exercise: {
            prompt: `Given int temp = 22;
Print:
- "Hot" if temp is 30 or higher
- "Warm" if temp is 20 to 29
- "Cool" if temp is 10 to 19
- "Cold" otherwise`,
            starterCode: `#include <iostream>

int main() {
    int temp = 22;

    // Add your if / else if / else chain

    return 0;
}
`,
            solution: `#include <iostream>

int main() {
    int temp = 22;

    if (temp >= 30) {
        std::cout << "Hot" << std::endl;
    } else if (temp >= 20) {
        std::cout << "Warm" << std::endl;
    } else if (temp >= 10) {
        std::cout << "Cool" << std::endl;
    } else {
        std::cout << "Cold" << std::endl;
    }
    return 0;
}`,
            tests: [
              { type: "contains", value: "if" },
              { type: "contains", value: "else if" },
              { type: "contains", value: "else" },
              { type: "contains", value: "Warm" },
            ],
            debuggingTip: `- Use == to compare, = to assign. if (x = 5) is almost always a bug.
- Order matters: write the highest threshold first when chaining.
- bool is a real type; conditions evaluate to true or false.`,
          },
        },
        {
          id: "cpp-phase1-m1-l4",
          title: "Loops - while and for",
          explanation: `Loops repeat a block of code while a condition stays true. A while
loop checks the condition first and repeats; a for loop bundles
initialisation, condition, and update into one line. for is ideal when
you know the count ("repeat N times"); while is ideal when you don't
("until the user enters quit"). Forgetting to update the loop variable
inside while leads to an infinite loop - the runtime sandbox here will
cut you off after 6 seconds.`,
          concept: `while (condition) { ... }

for (int i = 0; i < n; i++) { ... }
       ^init       ^check  ^update

break    - exit the loop immediately
continue - skip to the next iteration`,
          example: `#include <iostream>

int main() {
    // Print 0..4 with a for loop
    for (int i = 0; i < 5; i++) {
        std::cout << i << std::endl;
    }

    // Countdown with a while loop
    int n = 3;
    while (n > 0) {
        std::cout << "T-" << n << std::endl;
        n--;
    }

    return 0;
}`,
          exercise: {
            prompt: `Use a for loop to print the squares of 1 through 5 on separate lines.
Expected output:
1
4
9
16
25`,
            starterCode: `#include <iostream>

int main() {
    // for loop here

    return 0;
}
`,
            solution: `#include <iostream>

int main() {
    for (int i = 1; i <= 5; i++) {
        std::cout << i * i << std::endl;
    }
    return 0;
}`,
            tests: [
              { type: "contains", value: "for" },
              { type: "contains", value: "i * i" },
            ],
            debuggingTip: `- Inclusive end: use <= 5 not < 5 to include 5.
- Always update the loop variable - forgetting i++ in a while is an infinite loop.
- The runtime here kills code after 6 seconds.`,
          },
        },
      ],
    },
    {
      id: "cpp-phase2-m1",
      title: "Phase 2 - Functions and Scope",
      duration: "2 hours",
      lessons: [
        {
          id: "cpp-phase2-m1-l1",
          title: "Defining and Calling Functions",
          explanation: `Functions in C++ have a return type, a name, a parameter list, and a
body. You declare the return type before the name: int add(int a, int b).
Use void if the function returns nothing. Functions must be either defined
before they're called, or declared with a prototype at the top of the
file. Parameters are passed by value by default - the function gets its
own copy and can't modify the original.`,
          concept: `Signature: returnType name(paramType param, ...)
Call: name(arg1, arg2);
void = returns nothing
return value; -> exits the function with that value
Parameters pass by value by default (a copy)`,
          example: `#include <iostream>

int add(int a, int b) {
    return a + b;
}

void greet(std::string name) {
    std::cout << "Hello, " << name << "!" << std::endl;
}

int main() {
    int sum = add(3, 4);
    std::cout << sum << std::endl;   // 7
    greet("Alex");
    return 0;
}`,
          exercise: {
            prompt: `Write a function int square(int n) that returns n * n.
Call it from main and print square(7). Expected output: 49`,
            starterCode: `#include <iostream>

// Define square here

int main() {
    // Call square and print the result

    return 0;
}
`,
            solution: `#include <iostream>

int square(int n) {
    return n * n;
}

int main() {
    std::cout << square(7) << std::endl;
    return 0;
}`,
            tests: [
              { type: "contains", value: "int square" },
              { type: "contains", value: "return" },
              { type: "contains", value: "square(7)" },
            ],
            debuggingTip: `- Return type must match what you return.
- Define the function above main, or add a prototype.
- Missing return in a non-void function is undefined behaviour.`,
          },
        },
        {
          id: "cpp-phase2-m1-l2",
          title: "References and Pass-by-Reference",
          explanation: `Passing by value means the function works on a copy and can't change the
caller's variable. To let a function modify the original, pass by
reference: write & after the type. int& x means "x is a reference to an
int" - an alias for the original. References are also useful for avoiding
expensive copies of large objects. If you don't intend to modify, mark the
reference as const so the compiler enforces it: const std::string& name.`,
          concept: `void f(int x)        - copy, caller unchanged
void f(int& x)       - reference, can modify caller
void f(const T& x)   - read-only reference, no copy cost
References must be initialised and can never be re-seated.`,
          example: `#include <iostream>

void increment(int& n) {
    n = n + 1;
}

void noop(int n) {
    n = n + 1;  // local copy only
}

int main() {
    int x = 10;
    noop(x);
    std::cout << x << std::endl;        // 10
    increment(x);
    std::cout << x << std::endl;        // 11
    return 0;
}`,
          exercise: {
            prompt: `Write a function void doubleIt(int& n) that doubles its argument.
In main, declare int value = 5, call doubleIt(value), then print value.
Expected output: 10`,
            starterCode: `#include <iostream>

// Define doubleIt here

int main() {
    int value = 5;
    // Call doubleIt and print value

    return 0;
}
`,
            solution: `#include <iostream>

void doubleIt(int& n) {
    n = n * 2;
}

int main() {
    int value = 5;
    doubleIt(value);
    std::cout << value << std::endl;
    return 0;
}`,
            tests: [
              { type: "contains", value: "int&" },
              { type: "contains", value: "doubleIt" },
            ],
            debuggingTip: `- The & in the parameter list makes it a reference.
- Without &, the function gets a copy and your changes are lost.
- Use const T& when you only need to read a large object.`,
          },
        },
      ],
    },
    {
      id: "cpp-phase3-m1",
      title: "Phase 3 - Arrays, Vectors, and Strings",
      duration: "2 hours",
      lessons: [
        {
          id: "cpp-phase3-m1-l1",
          title: "std::vector - The Default Sequence Container",
          explanation: `Raw C-style arrays exist but are awkward and unsafe. The modern C++
default is std::vector - a dynamic array that grows as needed, knows its
own size, and cleans up after itself. Include <vector> to use it.
push_back adds an element to the end, size() returns the count, and
square brackets index into it. Indexing is zero-based.`,
          concept: `#include <vector>
std::vector<int> nums;          // empty
std::vector<int> nums = {1,2,3}; // initialised
nums.push_back(42);             // append
nums.size();                    // length
nums[0];                        // index (0-based)
range-for: for (int n : nums) { ... }`,
          example: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> nums = {10, 20, 30};
    nums.push_back(40);

    for (int n : nums) {
        std::cout << n << std::endl;
    }
    std::cout << "size: " << nums.size() << std::endl;
    return 0;
}`,
          exercise: {
            prompt: `Create std::vector<int> scores = {85, 92, 78};
Push back 95 and 88.
Use a range-for loop to print every element on its own line.`,
            starterCode: `#include <iostream>
#include <vector>

int main() {
    // Declare scores

    // push_back two values

    // Print each element

    return 0;
}
`,
            solution: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> scores = {85, 92, 78};
    scores.push_back(95);
    scores.push_back(88);

    for (int s : scores) {
        std::cout << s << std::endl;
    }
    return 0;
}`,
            tests: [
              { type: "contains", value: "std::vector<int>" },
              { type: "contains", value: "push_back" },
              { type: "contains", value: "for" },
            ],
            debuggingTip: `- Don't forget #include <vector>.
- Indexes start at 0; nums[nums.size()] is out of bounds.
- Range-for (for (int n : v)) is cleaner than indexed loops.`,
          },
        },
        {
          id: "cpp-phase3-m1-l2",
          title: "Strings and String Operations",
          explanation: `std::string is the workhorse text type in C++. It supports concatenation
with +, length via .size() (or .length()), substring extraction with
.substr(), and character access via brackets. Strings are mutable - you
can modify them in place. To convert numbers to strings use std::to_string,
and to parse a number from a string use std::stoi or std::stod.`,
          concept: `#include <string>
std::string s = "hello";
s + " world"     -> concatenation
s.size()         -> length
s.substr(1, 3)   -> "ell"
s[0]             -> 'h'
std::to_string(42)  -> "42"
std::stoi("42")     -> 42`,
          example: `#include <iostream>
#include <string>

int main() {
    std::string greeting = "Hello";
    std::string name = "Sam";
    std::string message = greeting + ", " + name + "!";

    std::cout << message << std::endl;
    std::cout << "length: " << message.size() << std::endl;
    std::cout << "first three: " << message.substr(0, 3) << std::endl;
    return 0;
}`,
          exercise: {
            prompt: `Declare std::string first = "Ada"; and std::string last = "Lovelace";
Build full = first + " " + last and print:
- full
- The length of full (use .size())
- The first letter of last (use last[0])`,
            starterCode: `#include <iostream>
#include <string>

int main() {
    std::string first = "Ada";
    std::string last = "Lovelace";

    // Build full and print

    return 0;
}
`,
            solution: `#include <iostream>
#include <string>

int main() {
    std::string first = "Ada";
    std::string last = "Lovelace";
    std::string full = first + " " + last;

    std::cout << full << std::endl;
    std::cout << full.size() << std::endl;
    std::cout << last[0] << std::endl;
    return 0;
}`,
            tests: [
              { type: "contains", value: "std::string" },
              { type: "contains", value: ".size()" },
              { type: "contains", value: "last[0]" },
            ],
            debuggingTip: `- Use double quotes for std::string, single quotes for char.
- + concatenates strings, but you can't add two string literals: "a" + "b" is a pointer error.
- last[0] is a char, not a string.`,
          },
        },
      ],
    },
    {
      id: "cpp-phase4-m1",
      title: "Phase 4 - Classes and Objects",
      duration: "2 hours",
      lessons: [
        {
          id: "cpp-phase4-m1-l1",
          title: "Defining a Class",
          explanation: `A class bundles data (member variables) and behaviour (member functions)
together. Use class to define one. Members default to private - only the
class itself can touch them. Anything you want callers to access must be
under public:. The constructor is a special function with the same name
as the class; it runs when you create an object. Use the constructor to
initialise the member variables.`,
          concept: `class Name {
public:
    Name(int x);          // constructor
    int getX();           // public method
private:
    int x_;               // member variable
};

Member function definition outside the class:
ReturnType ClassName::method(...) { ... }`,
          example: `#include <iostream>
#include <string>

class Greeter {
public:
    Greeter(std::string name) {
        name_ = name;
    }

    void greet() {
        std::cout << "Hello, " << name_ << "!" << std::endl;
    }

private:
    std::string name_;
};

int main() {
    Greeter g("World");
    g.greet();
    return 0;
}`,
          exercise: {
            prompt: `Define a class Counter with:
- A private int count_ initialised to 0 in the constructor
- A public method void increment() that adds 1 to count_
- A public method int value() that returns count_

In main: create a Counter, call increment() three times, print value().
Expected output: 3`,
            starterCode: `#include <iostream>

// Define Counter here

int main() {
    // Use Counter

    return 0;
}
`,
            solution: `#include <iostream>

class Counter {
public:
    Counter() {
        count_ = 0;
    }
    void increment() {
        count_++;
    }
    int value() {
        return count_;
    }
private:
    int count_;
};

int main() {
    Counter c;
    c.increment();
    c.increment();
    c.increment();
    std::cout << c.value() << std::endl;
    return 0;
}`,
            tests: [
              { type: "contains", value: "class Counter" },
              { type: "contains", value: "public:" },
              { type: "contains", value: "private:" },
              { type: "contains", value: "increment" },
            ],
            debuggingTip: `- Don't forget the semicolon after the closing } of the class.
- Members default to private; mark public ones with public:.
- Use trailing underscore (count_) as a common convention for private members.`,
          },
        },
      ],
    },
  ],
};
