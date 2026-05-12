// Java curriculum data - all phases and lessons
export const javaCurriculum = {
  label: "Java",
  modules: [
    {
      id: "java-phase0-m1",
      title: "Phase 0 — Welcome to Java",
      duration: "20 min",
      lessons: [
        {
          id: "java-phase0-m1-l1",
          title: "Your First Java Program",
          explanation: `Java is one of the most widely used programming languages in the world — it powers 
Android apps, banking systems, enterprise software, and much more. It was designed 
with one powerful idea: "Write Once, Run Anywhere." Unlike some languages, Java 
requires a bit more structure to get started, but that structure teaches you habits 
that make you a stronger programmer. Every Java program lives inside a class, and 
execution always begins in a special method called main. Think of the class as a 
container and main as the "on" button. Your first tool is System.out.println() — 
Java's way of printing a message to the screen.`,
          concept: `Every Java program requires:
1. A class declaration: public class ClassName { }
2. A main method: public static void main(String[] args) { }
3. Statements inside main, each ending with a semicolon ;
System.out.println("text") prints text and moves to a new line.
System.out.print("text") prints text and stays on the same line.
All text must be in DOUBLE quotes — single quotes are only for single characters.`,
          example: `// Every Java program follows this exact structure
public class HelloWorld {
    public static void main(String[] args) {
        // System.out.println prints and adds a new line
        System.out.println("Hello, world!");
        System.out.println("I am learning Java!");
        
        // System.out.print stays on the same line
        System.out.print("Java ");
        System.out.print("is ");
        System.out.println("powerful!");
        // Output: Java is powerful!
    }
}`,
          exercise: {
            prompt: `Write your first complete Java program:
1. Create a public class called FirstProgram
2. Add the main method with the correct signature
3. Use System.out.println() to print: I am ready to code in Java!
4. Add a second println to print your favorite programming fact
5. Use System.out.print() twice to print "Java " and "rocks!" on the same line`,
            starterCode: `// Step 1: Define a public class called FirstProgram
// Step 2: Add the main method inside
// Step 3: Print "I am ready to code in Java!"
// Step 4: Print any programming fact
// Step 5: Use print twice for same-line output
`,
            solution: `public class FirstProgram {
    public static void main(String[] args) {
        System.out.println("I am ready to code in Java!");
        System.out.println("Java was created in 1995.");
        System.out.print("Java ");
        System.out.print("rocks!");
    }
}`,
            tests: [
              { type: "contains", value: "public class FirstProgram" },
              { type: "contains", value: "public static void main" },
              { type: "contains", value: "System.out.println" },
              { type: "contains", value: "I am ready to code in Java!" }
            ],
            debuggingTip: `Common mistakes:
• Class name doesn't match filename? Java requires them to match exactly: FirstProgram.java.
• Missing semicolon at end of statement? Every statement in Java MUST end with ;
• Used single quotes around text? Only double quotes work for Strings: "hello" not 'hello'.
• 'system' lowercase? Java is case-sensitive — it must be System with capital S.
• Forgot curly braces? Every opening { needs a matching closing }.
• main method wrong? It must be: public static void main(String[] args) — exactly.`
          }
        }
      ]
    },
    {
      id: "java-phase1-m1",
      title: "Phase 1 — Fundamentals",
      duration: "3 hours",
      lessons: [
        {
          id: "java-phase1-m1-l1",
          title: "System.out.println vs print — Controlling Output",
          explanation: `In Java, you have precise control over how your output looks on screen. 
System.out.println() (print LINE) automatically adds a line break after each 
message — like pressing Enter after typing. System.out.print() prints the text 
and leaves the cursor right there, so the next output continues on the same line. 
This distinction matters when formatting receipts, menus, tables, or any output 
where layout is important. Professional Java developers think carefully about 
which one to use to make their program's output clean and readable.`,
          concept: `System.out.println("text") → prints text + moves to next line (adds \\n)
System.out.print("text")  → prints text + stays on same line
Both accept Strings (in double quotes), numbers, and boolean values directly.
Semicolon ; is REQUIRED at the end of every statement in Java.
You can print an empty line with: System.out.println();`,
          example: `public class OutputDemo {
    public static void main(String[] args) {
        // println adds a newline after each call
        System.out.println("First line");
        System.out.println("Second line");
        System.out.println(42);        // prints numbers too
        System.out.println(true);      // prints booleans too
        
        // print keeps output on same line
        System.out.print("Loading");
        System.out.print("...");
        System.out.print("Done!");
        // Output: Loading...Done!
        
        System.out.println(); // prints blank line (just a newline)
        
        // Mixing both
        System.out.print("Name: ");
        System.out.println("Alice");
        System.out.print("Age: ");
        System.out.println(30);
        // Output:
        // Name: Alice
        // Age: 30
    }
}`,
          exercise: {
            prompt: `Practice controlling your output:
1. Write a class called Printer
2. Use println three times to print 'Ready', 'Set', 'Go!' each on their own line
3. Use print twice to print 'Score: ' and '100' on the same line
4. Print a blank line using System.out.println() with no argument`,
            starterCode: `// Create the Printer class with main method

public class Printer {
    public static void main(String[] args) {
        // Step 2: Three separate lines using println


        // Step 3: Same line using print twice


        // Step 4: A blank line

    }
}`,
            solution: `public class Printer {
    public static void main(String[] args) {
        System.out.println("Ready");
        System.out.println("Set");
        System.out.println("Go!");
        System.out.print("Score: ");
        System.out.print("100");
        System.out.println();
    }
}`,
            tests: [
              { type: "contains", value: "public class Printer" },
              { type: "contains", value: "System.out.println(\"Ready\")" },
              { type: "contains", value: "System.out.println(\"Set\")" },
              { type: "contains", value: "System.out.println(\"Go!\")" },
              { type: "contains", value: "System.out.print" }
            ],
            debuggingTip: `Common mistakes:
• Missing semicolon? Every statement needs ; — the most common Java beginner mistake.
• println vs print confusion? println = new line after, print = no new line.
• Printing a number but wrapping in quotes? "42" is text, 42 is a number — both print, but they're different types.
• Lowercase 'system'? Must be System with capital S, and out with lowercase o.
• Missing parentheses? System.out.println is incomplete — needs () even for blank line.`
          }
        },
        {
          id: "java-phase1-m1-l2",
          title: "Variables and Primitive Types",
          explanation: `Unlike Ruby or Python, Java is a statically typed language — this means you must 
tell Java what type of data a variable will hold, and it can never change. This 
feels like extra work at first, but it prevents an entire category of bugs: you 
can never accidentally put text where a number should be. Java has four essential 
primitive types you'll use constantly: int for whole numbers (age, count, score), 
double for decimal numbers (price, temperature, percentage), boolean for true/false 
decisions, and char for single characters. There's also String (capital S) for 
text, but that's actually a class, not a primitive.`,
          concept: `int     → whole numbers: -2 billion to +2 billion (age, count, score)
double  → decimal numbers with ~15 digits of precision (price, weight)
boolean → exactly true or false, nothing else
char    → a SINGLE character in single quotes: 'A', '5', '!'
String  → text in double quotes (not a primitive — it's a class)
Declaration: type variableName = value;
Once declared, the TYPE cannot change (but the value can).`,
          example: `public class DataTypes {
    public static void main(String[] args) {
        // int: whole numbers only
        int age = 25;
        int year = 2025;
        int score = -10;  // can be negative
        
        // double: decimal numbers
        double price = 19.99;
        double pi = 3.14159;
        double temperature = -5.5;
        
        // boolean: true or false ONLY
        boolean isLoggedIn = true;
        boolean hasDiscount = false;
        
        // char: exactly ONE character, single quotes
        char grade = 'A';
        char symbol = '$';
        
        // String: text, double quotes (capital S!)
        String name = "Alice";
        
        System.out.println(age);         // 25
        System.out.println(price);       // 19.99
        System.out.println(isLoggedIn);  // true
        System.out.println(grade);       // A
        System.out.println(name);        // Alice
        
        // Changing a value (type stays the same)
        age = 26;
        System.out.println(age);  // 26
    }
}`,
          exercise: {
            prompt: `Create a student profile using different types:
1. Create class Variables
2. Declare int 'students' = 30
3. Declare double 'average' = 87.5
4. Declare boolean 'passed' = true
5. Declare char 'letterGrade' = 'B'
6. Print all four variables, each on their own line`,
            starterCode: `public class Variables {
    public static void main(String[] args) {
        // Step 2: Declare int students = 30
        
        // Step 3: Declare double average = 87.5
        
        // Step 4: Declare boolean passed = true
        
        // Step 5: Declare char letterGrade = 'B'
        
        // Step 6: Print all four variables
        
    }
}`,
            solution: `public class Variables {
    public static void main(String[] args) {
        int students = 30;
        double average = 87.5;
        boolean passed = true;
        char letterGrade = 'B';
        System.out.println(students);
        System.out.println(average);
        System.out.println(passed);
        System.out.println(letterGrade);
    }
}`,
            tests: [
              { type: "contains", value: "int students" },
              { type: "contains", value: "double average" },
              { type: "contains", value: "boolean passed" },
              { type: "contains", value: "char letterGrade" }
            ],
            debuggingTip: `Common mistakes:
• Used String for a single character? Use char with single quotes: char g = 'A' not String g = "A".
• Assigned wrong type? int price = 9.99 is an error — use double for decimals.
• Capitalized boolean? It's lowercase: boolean, not Boolean (that's a different thing).
• Printing variable name in quotes? System.out.println("students") prints the text "students", not the value 30. Remove the quotes.
• Used 'var' like other languages? Java requires explicit types: int x = 5, not var x = 5.`
          }
        },
        {
          id: "java-phase1-m1-l3",
          title: "Strings — Text in Java",
          explanation: `Strings are how Java handles text — names, messages, addresses, descriptions. 
String (always capitalized) is technically a class in Java, not a primitive type, 
which means it comes with powerful built-in methods. The most fundamental string 
operation is concatenation: joining strings together with the + operator. Java is 
smart enough to convert numbers to text automatically when you use + with a String, 
which is incredibly useful for building output messages. However, this can also 
cause confusing bugs if you're not careful about the order of operations.`,
          concept: `String name = "Alice";   → text in double quotes, capital S
String a + String b      → joins (concatenates) the two strings
"text" + number          → Java converts number to String automatically
"text" + (a + b)         → use parentheses to do math BEFORE concatenation
Strings are immutable — methods return NEW strings, they don't change the original.
null means a String variable has no value assigned yet.`,
          example: `public class StringDemo {
    public static void main(String[] args) {
        String firstName = "John";
        String lastName = "Doe";
        
        // Concatenation with +
        String fullName = firstName + " " + lastName;
        System.out.println(fullName);  // John Doe
        
        // Combining String with numbers
        int age = 30;
        System.out.println("Name: " + fullName);  // Name: John Doe
        System.out.println("Age: " + age);         // Age: 30
        
        // IMPORTANT: order matters with + and numbers
        System.out.println("Sum: " + 5 + 3);    // Sum: 53  (string concat!)
        System.out.println("Sum: " + (5 + 3));  // Sum: 8   (math first!)
        
        // Building multi-part strings
        String city = "Paris";
        int population = 2161000;
        String info = city + " has " + population + " people.";
        System.out.println(info);  // Paris has 2161000 people.
    }
}`,
          exercise: {
            prompt: `Build a greeting generator:
1. Create class Greeting
2. Create String 'title' = "Mr." and String 'name' = "Smith"
3. Combine them with a space into String 'fullGreeting' and print it
4. Print "Age: " followed by the number 42 (use concatenation)
5. Print the result of "Score: " + (50 + 30) — notice the parentheses!`,
            starterCode: `public class Greeting {
    public static void main(String[] args) {
        // Step 2: Create title and name strings
        
        
        // Step 3: Combine into fullGreeting and print
        
        
        // Step 4: Print "Age: " + 42
        
        
        // Step 5: Print "Score: " + (50 + 30)
        
    }
}`,
            solution: `public class Greeting {
    public static void main(String[] args) {
        String title = "Mr.";
        String name = "Smith";
        String fullGreeting = title + " " + name;
        System.out.println(fullGreeting);
        System.out.println("Age: " + 42);
        System.out.println("Score: " + (50 + 30));
    }
}`,
            tests: [
              { type: "contains", value: "String title" },
              { type: "contains", value: "String fullGreeting" },
              { type: "contains", value: "title + \" \" + name" }
            ],
            debuggingTip: `Common mistakes:
• Used lowercase 'string'? Java requires capital S: String, not string.
• Getting "53" instead of "8"? You're doing "text" + 5 + 3 which concatenates left to right. Use ("text" + (5 + 3)).
• Missing space in concatenation? "Mr." + "Smith" gives "Mr.Smith". Add " " in the middle.
• Forgot double quotes? String name = Alice; treats Alice as a variable — you'll get a compile error.
• null printed? You declared a String but never assigned a value to it.`
          }
        },
        {
          id: "java-phase1-m1-l4",
          title: "String Methods — Built-in Text Tools",
          explanation: `Strings in Java come packed with useful methods that let you inspect and transform 
text. Since Strings are immutable (unchangeable), these methods always return a 
NEW string — they never modify the original. This is a fundamental concept in Java. 
String methods are used everywhere: validating user input (.trim(), .isEmpty()), 
searching text (.contains(), .indexOf()), comparing values (.equals()), and 
formatting output (.toUpperCase(), .toLowerCase()). Understanding these methods 
makes text processing easy and is essential for building real applications.`,
          concept: `.length()          → returns the number of characters (int)
.toUpperCase()     → returns new String in ALL CAPS
.toLowerCase()     → returns new String in all lowercase
.trim()            → removes leading and trailing spaces
.contains("text")  → returns true if the string contains "text"
.equals("text")    → compares content (use this, NOT == for Strings)
.charAt(index)     → returns the character at that position (0-indexed)
.substring(start, end) → extracts a portion of the string`,
          example: `public class StringMethods {
    public static void main(String[] args) {
        String text = "  Hello, Java World!  ";
        
        System.out.println(text.length());          // 22 (includes spaces)
        System.out.println(text.trim());            // "Hello, Java World!"
        System.out.println(text.trim().length());   // 18 (chaining methods!)
        
        String word = "Java";
        System.out.println(word.toUpperCase());  // JAVA
        System.out.println(word.toLowerCase());  // java
        System.out.println(word);                // Java (original unchanged!)
        
        // Checking content
        String sentence = "I love programming";
        System.out.println(sentence.contains("love"));    // true
        System.out.println(sentence.contains("hate"));    // false
        
        // Getting specific characters
        System.out.println(sentence.charAt(0));           // I
        System.out.println(sentence.substring(7, 18));    // programming
        
        // IMPORTANT: Use .equals() not == for Strings!
        String a = "hello";
        String b = "hello";
        System.out.println(a.equals(b));   // true (correct!)
        System.out.println(a == b);        // may be true but unreliable!
    }
}`,
          exercise: {
            prompt: `Explore String methods on a messy string:
1. Create class CaseChanger
2. Create String 'mixed' = "JaVa Is CoOl"
3. Print it in UPPERCASE
4. Print it in lowercase
5. Print its length using .length()
6. Print whether it .contains("Java") — what do you expect?
7. Print whether it .contains("JAVA") — notice the difference!`,
            starterCode: `public class CaseChanger {
    public static void main(String[] args) {
        // Step 2: Create mixed string
        String mixed = "JaVa Is CoOl";
        
        // Step 3: Print in UPPERCASE
        
        // Step 4: Print in lowercase
        
        // Step 5: Print length
        
        // Step 6: Contains "Java"?
        
        // Step 7: Contains "JAVA"?
        
    }
}`,
            solution: `public class CaseChanger {
    public static void main(String[] args) {
        String mixed = "JaVa Is CoOl";
        System.out.println(mixed.toUpperCase());
        System.out.println(mixed.toLowerCase());
        System.out.println(mixed.length());
        System.out.println(mixed.contains("Java"));
        System.out.println(mixed.contains("JAVA"));
    }
}`,
            tests: [
              { type: "contains", value: "mixed.toUpperCase()" },
              { type: "contains", value: "mixed.toLowerCase()" },
              { type: "contains", value: "mixed.length()" },
              { type: "contains", value: "mixed.contains" }
            ],
            debuggingTip: `Common mistakes:
• Called .length without ()? In Java, length() is a METHOD and requires parentheses: .length()
• Used == to compare strings? This checks memory address, not content. Always use .equals().
• Methods not changing the original? Correct! Strings are immutable — always capture the result: String upper = text.toUpperCase()
• .contains() is case sensitive — "Java" and "JAVA" are different searches.
• Chaining methods works: text.trim().toUpperCase() — right to left evaluation.`
          }
        },
        {
          id: "java-phase1-m1-l5",
          title: "String Formatting with String.format()",
          explanation: `As programs become more complex, building output strings with + concatenation 
gets messy and hard to read. String.format() provides a clean template approach: 
you write the output exactly as you want it to look, with placeholder markers where 
variables should go. This is the same concept used in printf in C and format strings 
in Python. In professional Java code, you'll see String.format() constantly — for 
generating reports, formatting currency, building messages, and creating any output 
where layout precision matters.`,
          concept: `String.format("template with %s and %d", value1, value2)
%s  → placeholder for any String value
%d  → placeholder for integer (int, long)
%f  → placeholder for decimal (double, float)
%.2f → decimal with exactly 2 places after the decimal point
%n  → newline (platform-independent alternative to \\n)
Placeholders are filled LEFT TO RIGHT with the values you provide after the template.`,
          example: `public class FormatDemo {
    public static void main(String[] args) {
        String name = "Alice";
        int age = 28;
        double salary = 75000.5;
        
        // Basic formatting
        String msg = String.format("Name: %s, Age: %d", name, age);
        System.out.println(msg);
        // Output: Name: Alice, Age: 28
        
        // Controlling decimal places
        System.out.println(String.format("Salary: $%.2f", salary));
        // Output: Salary: $75000.50
        
        // Multiple types in one format
        String receipt = String.format(
            "Item: %s | Qty: %d | Price: $%.2f",
            "Widget", 3, 4.99
        );
        System.out.println(receipt);
        // Output: Item: Widget | Qty: 3 | Price: $4.99
        
        // Padding for alignment (useful for tables)
        System.out.println(String.format("%-15s %5d", "Apples", 42));
        System.out.println(String.format("%-15s %5d", "Bananas", 7));
        // Output:
        // Apples           42
        // Bananas           7
    }
}`,
          exercise: {
            prompt: `Build a formatted product receipt:
1. Create class Formatter
2. Create: String item = "book", int quantity = 3, double price = 15.99
3. Use String.format with %s to print: "Item: book"
4. Use String.format with %d to print: "Quantity: 3"
5. Use String.format with %.2f to print: "Price: $15.99"
6. Calculate total = quantity * price and print: "Total: $47.97" using %.2f`,
            starterCode: `public class Formatter {
    public static void main(String[] args) {
        // Step 2: Declare variables
        String item = "book";
        int quantity = 3;
        double price = 15.99;
        
        // Step 3: Print "Item: book" using %s
        
        // Step 4: Print "Quantity: 3" using %d
        
        // Step 5: Print "Price: $15.99" using %.2f
        
        // Step 6: Calculate total and print "Total: $47.97"
        
    }
}`,
            solution: `public class Formatter {
    public static void main(String[] args) {
        String item = "book";
        int quantity = 3;
        double price = 15.99;
        System.out.println(String.format("Item: %s", item));
        System.out.println(String.format("Quantity: %d", quantity));
        System.out.println(String.format("Price: $%.2f", price));
        double total = quantity * price;
        System.out.println(String.format("Total: $%.2f", total));
    }
}`,
            tests: [
              { type: "contains", value: "String.format" },
              { type: "contains", value: "%s" },
              { type: "contains", value: "%.2f" },
              { type: "contains", value: "%d" }
            ],
            debuggingTip: `Common mistakes:
• Wrong placeholder type? %d for a double will throw an exception. Use %f or %.2f for decimals.
• Too few values? Each % placeholder needs a matching value after the format string.
• %.2f showing too many decimals? The 2 in %.2f means exactly 2 decimal places.
• Using %s for a number? It works (converts to String) but %d/%f is more precise.
• Forgot to println the result? String.format returns a String — you still need to print it.`
          }
        },
        {
          id: "java-phase1-m1-l6",
          title: "Arithmetic Operators and Integer Division",
          explanation: `Java's arithmetic works exactly like a calculator for most operations — but there's 
one critical gotcha that trips up almost every beginner: integer division. When you 
divide two int values, Java throws away the decimal part entirely. 10 / 3 gives 3, 
not 3.333. This is by design, not a bug. To get a decimal result, at least one 
number must be a double. This matters enormously in real applications: calculating 
percentages, splitting bills, computing averages. Professional Java developers 
always think carefully about what type their division should produce.`,
          concept: `+ (add), - (subtract), * (multiply), / (divide), % (remainder), 
int / int = int  (decimal portion is DROPPED, not rounded)
double / int or int / double = double (one double makes the result double)
(double) x = casting: temporarily treats int x as a double
% = modulo/remainder: 17 % 5 = 2 (because 17 = 5*3 + 2)
++ increments by 1, -- decrements by 1
+= -= *= /= are shorthand: x += 5 means x = x + 5`,
          example: `public class MathDemo {
    public static void main(String[] args) {
        // Basic arithmetic
        System.out.println(10 + 3);   // 13
        System.out.println(10 - 3);   // 7
        System.out.println(10 * 3);   // 30
        
        // Integer division DROPS the decimal
        System.out.println(17 / 5);   // 3 (NOT 3.4!)
        System.out.println(10 / 3);   // 3 (NOT 3.333!)
        
        // To get decimal result: use double
        System.out.println(17.0 / 5);        // 3.4
        System.out.println((double) 17 / 5); // 3.4 (casting)
        
        // Modulo: gives the REMAINDER
        System.out.println(17 % 5);   // 2  (17 = 5*3 + 2)
        System.out.println(10 % 2);   // 0  (10 divides evenly by 2)
        System.out.println(7 % 2);    // 1  (odd numbers % 2 = 1)
        
        // Shorthand operators
        int score = 100;
        score += 10;   // score is now 110
        score -= 5;    // score is now 105
        score *= 2;    // score is now 210
        score++;       // score is now 211
        System.out.println(score);  // 211
    }
}`,
          exercise: {
            prompt: `Build a math calculator class:
1. Create class Calculator
2. Declare int x = 20 and int y = 6
3. Print x / y (integer division — what do you expect?)
4. Print x % y (the remainder)
5. Print (double) x / y (decimal division using casting)
6. Bonus: Use % to determine if x is even or odd — print "even" or "odd"`,
            starterCode: `public class Calculator {
    public static void main(String[] args) {
        // Step 2: Declare x and y
        int x = 20;
        int y = 6;
        
        // Step 3: Integer division x / y
        
        // Step 4: Remainder x % y
        
        // Step 5: Decimal division using (double) cast
        
        // Step 6 (Bonus): Even or odd check
        
    }
}`,
            solution: `public class Calculator {
    public static void main(String[] args) {
        int x = 20;
        int y = 6;
        System.out.println(x / y);
        System.out.println(x % y);
        System.out.println((double) x / y);
        if (x % 2 == 0) {
            System.out.println("even");
        } else {
            System.out.println("odd");
        }
    }
}`,
            tests: [
              { type: "contains", value: "x / y" },
              { type: "contains", value: "x % y" },
              { type: "contains", value: "(double) x" }
            ],
            debuggingTip: `Common mistakes:
• Expected 3.33 but got 3? That's integer division — both x and y are int. Use (double) x / y.
• Confused % with percentage? % is remainder (modulo), not percentage. 25 % 100 = 25, not 0.25.
• Used (double)(x / y)? This casts AFTER division — the damage is done. Cast BEFORE: (double) x / y.
• score++ vs ++score? Both increment, but differ when used in expressions. For standalone use, they're the same.
• Dividing by zero? Java throws ArithmeticException for integer division by zero.`
          }
        },
        {
          id: "java-phase1-m1-l7",
          title: "Scanner — Getting User Input",
          explanation: `Every interactive program needs to receive input from the user — commands, names, 
numbers, choices. Java's Scanner class reads input from the keyboard (System.in). 
It's not built into Java automatically — you must import it at the top of your file. 
Scanner has different methods for different data types: nextLine() for whole lines 
of text, next() for a single word, nextInt() for integers, nextDouble() for 
decimal numbers. A very common bug involves mixing nextInt() and nextLine() — 
understanding why this happens will save you hours of frustration.`,
          concept: `import java.util.Scanner;  → must be at the very top, before the class
Scanner sc = new Scanner(System.in);  → creates a Scanner reading from keyboard
sc.nextLine()   → reads entire line including spaces, returns String
sc.next()       → reads one word (stops at space), returns String
sc.nextInt()    → reads an integer
sc.nextDouble() → reads a decimal number
sc.close()      → close the scanner when done (good practice)
After nextInt(), call sc.nextLine() to consume the leftover newline before reading text.`,
          example: `import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        // Reading a String
        System.out.print("Enter your name: ");
        String name = input.nextLine();
        System.out.println("Hello, " + name + "!");
        
        // Reading an integer
        System.out.print("Enter your age: ");
        int age = input.nextInt();
        System.out.println("In 10 years you'll be " + (age + 10));
        
        // Reading a double
        System.out.print("Enter your height in meters: ");
        double height = input.nextDouble();
        System.out.println(String.format("Height: %.1f m", height));
        
        input.close();  // always close when done
    }
}`,
          exercise: {
            prompt: `Build an interactive age calculator:
1. Import Scanner at the top
2. Create class Reader
3. Create a Scanner reading from System.in
4. Print "Enter your age: " using System.out.print
5. Read an int using nextInt()
6. Print "You will be " + (age + 1) + " next year."
7. Close the scanner`,
            starterCode: `// Step 1: Import Scanner here
import java.util.Scanner;

public class Reader {
    public static void main(String[] args) {
        // Step 3: Create Scanner
        
        // Step 4: Print the prompt
        
        // Step 5: Read age as int
        
        // Step 6: Print result
        
        // Step 7: Close scanner
        
    }
}`,
            solution: `import java.util.Scanner;

public class Reader {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter your age: ");
        int age = input.nextInt();
        System.out.println("You will be " + (age + 1) + " next year.");
        input.close();
    }
}`,
            tests: [
              { type: "contains", value: "import java.util.Scanner" },
              { type: "contains", value: "Scanner input = new Scanner" },
              { type: "contains", value: "input.nextInt()" },
              { type: "contains", value: "input.close()" }
            ],
            debuggingTip: `Common mistakes:
• Forgot the import? Without import java.util.Scanner; at the top, you'll get a compile error.
• Using nextLine() after nextInt()? nextInt() leaves a newline in the buffer. Add an extra nextLine() call to clear it.
• Scanner never reads input? Make sure you're calling the right method: nextInt() for numbers, nextLine() for text.
• NoSuchElementException? The scanner ran out of input — check your prompts and read calls match.
• Forgot parentheses around (age + 1) in concatenation? Without them: "text" + age + 1 = "text251" not "text26".`
          }
        },
        {
          id: "java-phase1-m1-l8",
          title: "Type Casting — Converting Between Types",
          explanation: `Sometimes you have data in one type but need it in another. Java allows two 
directions of casting: widening (safe, automatic) and narrowing (risky, requires 
explicit code). Widening goes from smaller to larger type — int to double happens 
automatically because no data is lost. Narrowing goes from larger to smaller — 
double to int must be done manually with a cast, because you're deliberately 
dropping the decimal. This is not rounding — it's truncation. 9.9 becomes 9, 
not 10. Understanding casting prevents subtle bugs in calculations.`,
          concept: `Widening (automatic): int → double (no data loss, Java does it automatically)
Narrowing (manual): double → int (data loss — decimal dropped, requires explicit cast)
Syntax: (targetType) variable  → example: (int) myDouble
Truncation NOT rounding: (int) 9.9 = 9, (int) 9.1 = 9, (int) -3.7 = -3
int to String: String.valueOf(42) or "" + 42
String to int: Integer.parseInt("42")
String to double: Double.parseDouble("3.14")`,
          example: `public class CastingDemo {
    public static void main(String[] args) {
        // WIDENING: int to double (automatic)
        int whole = 7;
        double decimal = whole;  // no cast needed
        System.out.println(decimal);  // 7.0
        
        // NARROWING: double to int (explicit cast required)
        double price = 9.99;
        int truncated = (int) price;  // decimal part DROPPED
        System.out.println(truncated);  // 9 (not 10!)
        
        double negative = -3.7;
        System.out.println((int) negative);  // -3 (not -4!)
        
        // String parsing (very common with Scanner input)
        String numberText = "42";
        int parsed = Integer.parseInt(numberText);
        System.out.println(parsed + 8);  // 50 (actual math!)
        
        String decimalText = "3.14";
        double parsedDouble = Double.parseDouble(decimalText);
        System.out.println(parsedDouble * 2);  // 6.28
        
        // Number to String
        int count = 100;
        String countText = String.valueOf(count);
        System.out.println("Count: " + countText);  // Count: 100
    }
}`,
          exercise: {
            prompt: `Practice type conversions:
1. Create class Converter
2. Declare double value = 9.7
3. Cast it to int stored as 'whole' — print both value and whole
4. Parse the String "256" into an int called 'parsed' and print parsed + 44
5. Convert int 1000 to a String using String.valueOf() and concatenate " dollars"`,
            starterCode: `public class Converter {
    public static void main(String[] args) {
        // Step 2: Declare double value = 9.7
        double value = 9.7;
        
        // Step 3: Cast to int and print both
        
        
        // Step 4: Parse "256" to int and print parsed + 44
        
        
        // Step 5: Convert 1000 to String and add " dollars"
        
    }
}`,
            solution: `public class Converter {
    public static void main(String[] args) {
        double value = 9.7;
        int whole = (int) value;
        System.out.println(value);
        System.out.println(whole);
        int parsed = Integer.parseInt("256");
        System.out.println(parsed + 44);
        String dollars = String.valueOf(1000) + " dollars";
        System.out.println(dollars);
    }
}`,
            tests: [
              { type: "contains", value: "(int) value" },
              { type: "contains", value: "Integer.parseInt" },
              { type: "contains", value: "String.valueOf" }
            ],
            debuggingTip: `Common mistakes:
• Expected rounding but got truncation? (int) 9.9 = 9, not 10. Use Math.round() if you want rounding.
• NumberFormatException from parseInt? The String has non-numeric characters or spaces. Check your input.
• Casting result wrong? Remember: (int)(9 / 2) = 4 (int division first), but (int) 9.0 / 2 = 4.5.
• Trying to cast String to int directly? (int) "42" doesn't work — use Integer.parseInt("42").
• Widening causing precision issues? Large long values converted to double may lose precision.`
          }
        },
        {
          id: "java-phase1-m1-l9",
          title: "The Math Class — Built-in Mathematics",
          explanation: `Java's Math class is a collection of mathematical operations that would be tedious 
to implement yourself: square roots, powers, rounding, absolute values, trigonometry, 
and more. These are all static methods — you don't create a Math object, you just 
call Math.methodName() directly. This is the "utility class" pattern you'll see 
throughout Java. In real applications, the Math class is used for physics 
simulations, financial calculations, graphics, data analysis, and anywhere 
precise mathematical operations are needed.`,
          concept: `Math.sqrt(x)      → square root of x, returns double
Math.pow(x, y)    → x raised to power y (x^y), returns double
Math.abs(x)       → absolute value (removes negative sign)
Math.round(x)     → rounds to nearest integer
Math.floor(x)     → rounds DOWN to nearest integer
Math.ceil(x)      → rounds UP to nearest integer
Math.max(a, b)    → returns the larger of two values
Math.min(a, b)    → returns the smaller of two values
Math.random()     → random double between 0.0 (inclusive) and 1.0 (exclusive)
All methods are called on the class directly: Math.sqrt(), not new Math().sqrt()`,
          example: `public class MathDemo {
    public static void main(String[] args) {
        // Square root and powers
        System.out.println(Math.sqrt(144));    // 12.0
        System.out.println(Math.sqrt(2));      // 1.4142135...
        System.out.println(Math.pow(2, 10));   // 1024.0
        System.out.println(Math.pow(3, 3));    // 27.0
        
        // Rounding
        System.out.println(Math.round(9.5));   // 10
        System.out.println(Math.round(9.4));   // 9
        System.out.println(Math.floor(9.9));   // 9.0 (always down)
        System.out.println(Math.ceil(9.1));    // 10.0 (always up)
        
        // Absolute value and comparison
        System.out.println(Math.abs(-42));     // 42
        System.out.println(Math.max(15, 27));  // 27
        System.out.println(Math.min(15, 27));  // 15
        
        // Random number (0.0 to 0.999...)
        double random = Math.random();
        System.out.println(random);
        
        // Random integer between 1 and 6 (dice roll)
        int dice = (int) (Math.random() * 6) + 1;
        System.out.println("Dice: " + dice);
    }
}`,
          exercise: {
            prompt: `Explore the Math class:
1. Create class MathFun
2. Print the square root of 144 using Math.sqrt()
3. Print 3 cubed (3 to the power of 3) using Math.pow()
4. Print Math.abs(-99)
5. Print the larger of 42 and 87 using Math.max()
6. Generate and print a random integer between 1 and 10`,
            starterCode: `public class MathFun {
    public static void main(String[] args) {
        // Step 2: Square root of 144
        
        // Step 3: 3 cubed using Math.pow
        
        // Step 4: Absolute value of -99
        
        // Step 5: Larger of 42 and 87
        
        // Step 6: Random integer 1-10
        
    }
}`,
            solution: `public class MathFun {
    public static void main(String[] args) {
        System.out.println(Math.sqrt(144));
        System.out.println(Math.pow(3, 3));
        System.out.println(Math.abs(-99));
        System.out.println(Math.max(42, 87));
        int random = (int) (Math.random() * 10) + 1;
        System.out.println(random);
    }
}`,
            tests: [
              { type: "contains", value: "Math.sqrt(144)" },
              { type: "contains", value: "Math.pow(3, 3)" },
              { type: "contains", value: "Math.abs" },
              { type: "contains", value: "Math.max" }
            ],
            debuggingTip: `Common mistakes:
• Math.pow returns double — assign to double, not int, or cast explicitly.
• Math.sqrt of a negative number returns NaN (Not a Number) — always ensure input is positive.
• Math.random() range confusion: multiply by N and add 1 for 1 to N range: (int)(Math.random() * 6) + 1.
• Trying to create a Math object? Math is a utility class — call methods directly: Math.sqrt(), not new Math().sqrt().
• Math.round returns long for doubles — cast to int if needed: (int) Math.round(9.5).`
          }
        }
      ]
    },
    {
      id: "java-phase2-m1",
      title: "Phase 2 — Control Flow",
      duration: "3 hours",
      lessons: [
        {
          id: "java-phase2-m1-l1",
          title: "Comparison Operators and Booleans",
          explanation: `Every decision a program makes comes down to a true/false question. Comparison 
operators evaluate two values and produce a boolean result. Java has an important 
rule that confuses many beginners: you can use == to compare primitive types (int, 
double, char, boolean) but you MUST use .equals() to compare Strings and objects. 
This is because == on objects checks if they're the exact same object in memory, 
not if they have the same content. Two String variables with the value "hello" 
might be stored in different memory locations, making == unreliable.`,
          concept: `== (equal to), != (not equal), > (greater), < (less), >= (at least), <= (at most)
For primitive types (int, double, char, boolean): use ==
For String and objects: ALWAYS use .equals() for content comparison
&& (AND): both conditions must be true
|| (OR): at least one condition must be true
! (NOT): flips true to false and vice versa
boolean result = (x > 5 && x < 10); → store comparison result`,
          example: `public class Comparisons {
    public static void main(String[] args) {
        int x = 50;
        int y = 30;
        
        // Primitive comparisons (== is fine)
        System.out.println(x > y);   // true
        System.out.println(x < y);   // false
        System.out.println(x == y);  // false
        System.out.println(x != y);  // true
        System.out.println(x >= 50); // true
        
        // String comparison — ALWAYS use .equals()
        String s1 = "Java";
        String s2 = "Java";
        System.out.println(s1.equals(s2));           // true (correct!)
        System.out.println(s1.equalsIgnoreCase("java")); // true
        
        // Logical operators
        int age = 25;
        boolean hasID = true;
        System.out.println(age >= 18 && hasID);  // true (both true)
        System.out.println(age < 18 || hasID);   // true (one is true)
        System.out.println(!hasID);              // false (flipped)
        
        // Storing results
        boolean isAdult = age >= 18;
        boolean isYoungAdult = age >= 18 && age <= 30;
        System.out.println(isAdult);       // true
        System.out.println(isYoungAdult);  // true
    }
}`,
          exercise: {
            prompt: `Compare values and strings:
1. Create class Compare
2. Set int x = 50, int y = 30
3. Print x > y, x == y, and x != y
4. Create String s1 = "Java" and String s2 = "Java"
5. Compare them using .equals() and print the result
6. Print whether x is between 40 and 60 (use && for both conditions)`,
            starterCode: `public class Compare {
    public static void main(String[] args) {
        // Step 2: Declare x and y
        int x = 50;
        int y = 30;
        
        // Step 3: Print three comparisons
        
        
        
        // Step 4: Declare two strings
        
        
        // Step 5: Compare using .equals()
        
        // Step 6: Is x between 40 and 60?
        
    }
}`,
            solution: `public class Compare {
    public static void main(String[] args) {
        int x = 50;
        int y = 30;
        System.out.println(x > y);
        System.out.println(x == y);
        System.out.println(x != y);
        String s1 = "Java";
        String s2 = "Java";
        System.out.println(s1.equals(s2));
        System.out.println(x >= 40 && x <= 60);
    }
}`,
            tests: [
              { type: "contains", value: "x > y" },
              { type: "contains", value: "x == y" },
              { type: "contains", value: ".equals(" },
              { type: "contains", value: "&&" }
            ],
            debuggingTip: `Common mistakes:
• Used == for String comparison? Works sometimes (string pool) but is UNRELIABLE. Always use .equals().
• Confused && and ||? && requires BOTH true. || requires ONE true.
• Assignment vs comparison: if (x = 5) is assignment (error in Java). Use if (x == 5).
• Negating with !: !true = false. !(x > 5) is same as x <= 5.
• Chaining comparisons: 5 < x < 10 is invalid in Java. Write x > 5 && x < 10.`
          }
        },
        {
          id: "java-phase2-m1-l2",
          title: "If Statements — Making Decisions",
          explanation: `The if statement is the most fundamental decision-making tool in programming. 
It asks a yes/no question (the condition), and only executes the code inside 
the curly braces if the answer is yes (true). This is how programs respond 
differently to different situations: showing different messages to different 
users, granting or denying access, choosing different calculation paths. 
Java requires curly braces { } around the code block, even if it's just one 
line — this prevents bugs that come from assuming indentation alone controls what's inside the block.`,
          concept: `if (condition) {
    // runs ONLY if condition is true
}
The condition must be a boolean expression (something that evaluates to true/false).
Curly braces { } define the block — always use them, even for single statements.
Code after the closing } always runs, regardless of the condition.
if can be followed by else (optional) for the "otherwise" case.`,
          example: `public class IfDemo {
    public static void main(String[] args) {
        int score = 75;
        int temperature = 28;
        boolean isRaining = false;
        
        // Simple if
        if (score >= 60) {
            System.out.println("You passed!");
            System.out.println("Well done!");
        }
        // This always runs:
        System.out.println("Thanks for taking the test.");
        
        // if/else
        if (temperature > 30) {
            System.out.println("Very hot today!");
        } else {
            System.out.println("Nice weather!");
        }
        
        // Nested if
        if (temperature > 20) {
            if (!isRaining) {
                System.out.println("Great day for a walk!");
            }
        }
        
        // Boolean variable directly in condition
        if (!isRaining) {
            System.out.println("No umbrella needed.");
        }
    }
}`,
          exercise: {
            prompt: `Build a score checker:
1. Create class PassCheck with int score = 75
2. If score >= 60: print 'You passed!' and 'Well done!'
3. Else: print 'You did not pass.' and 'Keep trying!'
4. After the if/else, always print 'Assessment complete.'
5. Add a separate if checking if score >= 90 — if so, print 'Excellent work!'`,
            starterCode: `public class PassCheck {
    public static void main(String[] args) {
        int score = 75;
        
        // Step 2 & 3: if/else for pass/fail
        
        
        // Step 4: Always print this
        
        
        // Step 5: Separate check for excellent
        
    }
}`,
            solution: `public class PassCheck {
    public static void main(String[] args) {
        int score = 75;
        if (score >= 60) {
            System.out.println("You passed!");
            System.out.println("Well done!");
        } else {
            System.out.println("You did not pass.");
            System.out.println("Keep trying!");
        }
        System.out.println("Assessment complete.");
        if (score >= 90) {
            System.out.println("Excellent work!");
        }
    }
}`,
            tests: [
              { type: "contains", value: "if (score >= 60)" },
              { type: "contains", value: "else" },
              { type: "contains", value: "Assessment complete." }
            ],
            debuggingTip: `Common mistakes:
• Missing curly braces? Without {}, only the very next line is part of the if block. Always use {}.
• Semicolon after if condition? if (x > 5); { ... } — the semicolon ends the if immediately, the block always runs.
• Using = instead of == in condition? if (x = 5) is assignment, not comparison — Java will error.
• Else without if? Every else must directly follow a closing } of an if block.
• Logic reversed? if the wrong branch runs, check your condition: >= vs >, < vs <=.`
          }
        },
        {
          id: "java-phase2-m1-l3",
          title: "If / Else If / Else — Multiple Branches",
          explanation: `Real programs rarely have just two options. A grade can be A, B, C, D, or F. 
A traffic light can be red, yellow, or green. A subscription can be free, basic, 
or premium. Java's else if lets you check multiple conditions in sequence — the 
first one that's true wins, and the rest are skipped entirely. This is more 
efficient than writing separate if statements (which all get checked) because 
once a match is found, Java jumps past all remaining branches. The final else 
is your catch-all for anything that didn't match.`,
          concept: `if (condition1) {
    // runs if condition1 is true
} else if (condition2) {
    // runs if condition1 false AND condition2 true
} else if (condition3) {
    // runs if conditions 1&2 false AND condition3 true
} else {
    // runs if ALL conditions above were false
}
Only ONE branch ever executes — the first matching one.
Order matters: put most specific conditions first (>= 90 before >= 80).
else is optional but recommended as a safety catch-all.`,
          example: `public class GradeDemo {
    public static void main(String[] args) {
        int score = 73;
        
        // Grade classifier
        if (score >= 90) {
            System.out.println("A - Excellent!");
        } else if (score >= 80) {
            System.out.println("B - Great!");
        } else if (score >= 70) {
            System.out.println("C - Good");
        } else if (score >= 60) {
            System.out.println("D - Needs Improvement");
        } else {
            System.out.println("F - Please retry");
        }
        // Output: C - Good
        
        // Time of day greeter
        int hour = 14; // 24-hour format
        if (hour < 12) {
            System.out.println("Good morning!");
        } else if (hour < 17) {
            System.out.println("Good afternoon!");
        } else if (hour < 21) {
            System.out.println("Good evening!");
        } else {
            System.out.println("Good night!");
        }
        // Output: Good afternoon!
    }
}`,
          exercise: {
            prompt: `Build a comprehensive grade system:
1. Create class Grader with int score = 73
2. Print letter grade: 90+ → A, 80-89 → B, 70-79 → C, 60-69 → D, below 60 → F
3. Also print a message: A/B → "Above average", C → "Average", D/F → "Below average"
4. Finally print whether the student passed (60+) or failed`,
            starterCode: `public class Grader {
    public static void main(String[] args) {
        int score = 73;
        
        // Step 2: Letter grade
        
        
        // Step 3: Performance category
        
        
        // Step 4: Pass or fail
        
    }
}`,
            solution: `public class Grader {
    public static void main(String[] args) {
        int score = 73;
        if (score >= 90) {
            System.out.println("A");
        } else if (score >= 80) {
            System.out.println("B");
        } else if (score >= 70) {
            System.out.println("C");
        } else if (score >= 60) {
            System.out.println("D");
        } else {
            System.out.println("F");
        }
        if (score >= 80) {
            System.out.println("Above average");
        } else if (score >= 70) {
            System.out.println("Average");
        } else {
            System.out.println("Below average");
        }
        if (score >= 60) {
            System.out.println("Passed");
        } else {
            System.out.println("Failed");
        }
    }
}`,
            tests: [
              { type: "contains", value: "else if" },
              { type: "contains", value: "score >= 90" },
              { type: "contains", value: "score >= 80" },
              { type: "contains", value: "score >= 70" }
            ],
            debuggingTip: `Common mistakes:
• Conditions in wrong order? if (score >= 70) before if (score >= 90) means 95 gets caught by the first branch.
• Missing else at end? Without it, no output appears if nothing matches — always add a final else.
• Multiple conditions firing? You're using separate if statements, not else if. With else if, only ONE runs.
• Curly brace on wrong line? Java doesn't care about indentation — the { and } define the block, not whitespace.
• Score boundary confusion: 80 means >= 80 NOT > 80. Use >= for "at least 80".`
          }
        },
        {
          id: "java-phase2-m1-l4",
          title: "While Loops — Repeating Until Done",
          explanation: `A while loop is the simplest form of repetition. It checks a condition, and if 
true, runs the code inside, then checks the condition again. This repeats until 
the condition becomes false. Think of it as: "keep doing this while the situation 
remains true." A security system keeps looping while the correct code hasn't been 
entered. A game loop keeps running while the player is alive. A download keeps 
retrying while the connection fails. The critical rule: something inside the loop 
MUST eventually make the condition false, or your program loops forever.`,
          concept: `while (condition) {
    // code here runs while condition is true
    // MUST change something that eventually makes condition false!
}
Condition is checked BEFORE each iteration (including the first).
If false from the start, the loop body NEVER runs.
num++ is shorthand for num = num + 1
num-- is shorthand for num = num - 1
do-while runs the body ONCE before checking (less common but useful).`,
          example: `public class WhileDemo {
    public static void main(String[] args) {
        // Basic counting loop
        int count = 1;
        while (count <= 5) {
            System.out.println("Count: " + count);
            count++;  // MUST increment or infinite loop!
        }
        // Output: Count: 1, Count: 2... Count: 5
        
        // Summing with a loop
        int num = 1;
        int sum = 0;
        while (num <= 100) {
            sum += num;  // sum = sum + num
            num++;
        }
        System.out.println("Sum 1-100: " + sum);  // 5050
        
        // Countdown
        int seconds = 5;
        while (seconds > 0) {
            System.out.println(seconds + "...");
            seconds--;
        }
        System.out.println("Lift off!");
        
        // do-while: runs at least once
        int x = 10;
        do {
            System.out.println("Runs once: " + x);
            x++;
        } while (x < 5);  // condition false, but ran once
    }
}`,
          exercise: {
            prompt: `Practice while loops:
1. Create class Counter
2. Print numbers 1 to 10 using a while loop with num++
3. Before the loop, create int sum = 0 and add each number to sum inside the loop
4. After the loop, print the total sum
5. Add a second loop that counts DOWN from 5 to 1, printing each number`,
            starterCode: `public class Counter {
    public static void main(String[] args) {
        // Step 2, 3: Count 1-10 and accumulate sum
        int num = 1;
        int sum = 0;
        
        // While loop here
        
        
        // Step 4: Print the sum
        
        
        // Step 5: Count down from 5 to 1
        
    }
}`,
            solution: `public class Counter {
    public static void main(String[] args) {
        int num = 1;
        int sum = 0;
        while (num <= 10) {
            System.out.println(num);
            sum += num;
            num++;
        }
        System.out.println("Sum: " + sum);
        int countdown = 5;
        while (countdown >= 1) {
            System.out.println(countdown);
            countdown--;
        }
    }
}`,
            tests: [
              { type: "contains", value: "while (num <= 10)" },
              { type: "contains", value: "sum +=" },
              { type: "contains", value: "num++" }
            ],
            debuggingTip: `Common mistakes:
• Infinite loop (program freezes)? You forgot to change num inside the loop. Add num++.
• Off by one error? while (num < 10) stops at 9. Use <= 10 to include 10.
• Sum not accumulating? Use sum += num (not sum = num which replaces instead of adds).
• Loop runs 0 times? The starting condition is already false. Check your initial values.
• Countdown going wrong? Use -- to decrement: countdown-- or countdown -= 1.`
          }
        },
        {
          id: "java-phase2-m1-l5",
          title: "For Loops — Precise Counted Repetition",
          explanation: `The for loop is Java's most used loop. It compresses three related things — 
initialization, condition, and increment — into one clean line. This makes it 
perfect for situations where you know exactly how many times you want to repeat: 
printing 10 items, processing all elements in an array, running an animation 
frame exactly 60 times per second. The for loop's structure prevents a common 
while loop bug where you forget to increment the counter. Professional Java code 
uses for loops constantly — mastering them is essential.`,
          concept: `for (initialization; condition; update) {
    // body
}
Execution order: initialization → check condition → body → update → check condition → ...
initialization runs ONCE at the start (e.g., int i = 0)
condition checked BEFORE each iteration (loop stops when false)
update runs AFTER each iteration (e.g., i++ or i--)
Variables declared in init (int i) only exist inside the loop.
Enhanced for-each: for (Type item : collection) { } for iterating arrays/lists.`,
          example: `public class ForDemo {
    public static void main(String[] args) {
        // Count up: 0 to 4
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
        // Output: 0 1 2 3 4
        
        // Count up: 1 to 10
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
        
        // Count down: 10 to 1
        for (int i = 10; i >= 1; i--) {
            System.out.print(i + " ");
        }
        System.out.println();  // new line after
        
        // Skip by twos (even numbers)
        for (int i = 0; i <= 10; i += 2) {
            System.out.print(i + " ");
        }
        // Output: 0 2 4 6 8 10
        
        // Nested for loops (multiplication table)
        for (int row = 1; row <= 3; row++) {
            for (int col = 1; col <= 3; col++) {
                System.out.print(row * col + " ");
            }
            System.out.println();
        }
    }
}`,
          exercise: {
            prompt: `Master the for loop:
1. Create class LoopDemo
2. Print numbers 0 through 7 with a for loop
3. Print numbers 10 through 15 with a second for loop
4. Print a multiplication table for 5: "5 x 1 = 5" through "5 x 10 = 50"
5. Bonus: Use a for loop to print only odd numbers from 1 to 19`,
            starterCode: `public class LoopDemo {
    public static void main(String[] args) {
        // Step 2: Numbers 0 to 7
        
        
        // Step 3: Numbers 10 to 15
        
        
        // Step 4: Multiplication table for 5
        
        
        // Step 5 (Bonus): Odd numbers 1-19
        
    }
}`,
            solution: `public class LoopDemo {
    public static void main(String[] args) {
        for (int i = 0; i <= 7; i++) {
            System.out.println(i);
        }
        for (int j = 10; j <= 15; j++) {
            System.out.println(j);
        }
        for (int i = 1; i <= 10; i++) {
            System.out.println("5 x " + i + " = " + (5 * i));
        }
        for (int i = 1; i <= 19; i += 2) {
            System.out.println(i);
        }
    }
}`,
            tests: [
              { type: "contains", value: "for (int i = 0;" },
              { type: "contains", value: "for (int j = 10;" },
              { type: "contains", value: "5 * i" }
            ],
            debuggingTip: `Common mistakes:
• Loop runs one too many or few times? Check < vs <= carefully. i < 5 gives 0,1,2,3,4. i <= 5 gives 0,1,2,3,4,5.
• Declared i outside the loop? int i declared in for (int i = ...) is scoped inside the loop only.
• Nested loop variable conflict? Inner loop must use different variable (j, k) than outer (i).
• Semi-colon after for(...)? for (i = 0; i < 5; i++); has an empty body — common accidental bug.
• Off-by-one in multiplication table? Start at 1, not 0: for (int i = 1; i <= 10; i++).`
          }
        },
        {
          id: "java-phase2-m1-l6",
          title: "Break and Continue — Loop Flow Control",
          explanation: `Sometimes you need to exit a loop early — you found what you were searching for 
and there's no point continuing. Sometimes you need to skip certain iterations — 
processing only valid records, filtering out blanks, or ignoring special cases. 
break and continue are your tools for these situations. break immediately exits 
the loop entirely — Java jumps to the first line after the closing }. continue 
skips the rest of the current iteration and goes back to check the condition. 
Both are used frequently in search algorithms, data validation, and game logic.`,
          concept: `break    → immediately exits the ENTIRE loop, code after loop continues
continue → skips remaining code in THIS iteration, jumps back to loop condition
Both work in for loops and while loops.
break in nested loop only exits the INNER loop, not both.
Use labeled breaks (outerLoop: break outerLoop;) to exit nested loops.`,
          example: `public class FlowControl {
    public static void main(String[] args) {
        // continue: skip specific iterations
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) continue;  // skip even numbers
            System.out.print(i + " ");  // only prints odd
        }
        // Output: 1 3 5 7 9
        System.out.println();
        
        // break: stop loop early
        for (int i = 0; i < 100; i++) {
            if (i > 5) break;
            System.out.print(i + " ");
        }
        // Output: 0 1 2 3 4 5
        System.out.println();
        
        // Combining both
        for (int i = 0; i < 10; i++) {
            if (i == 4) continue;  // skip 4
            if (i == 8) break;     // stop at 8
            System.out.print(i + " ");
        }
        // Output: 0 1 2 3 5 6 7
        
        // Finding first match (common use of break)
        int target = 7;
        int foundAt = -1;
        for (int i = 0; i < 20; i++) {
            if (i == target) {
                foundAt = i;
                break;
            }
        }
        System.out.println("Found at index: " + foundAt);
    }
}`,
          exercise: {
            prompt: `Practice flow control:
1. Create class LoopControl
2. Loop 0-9: skip 4 with continue, break at 8. Print remaining numbers.
3. Print what you expect to see before running
4. Create a while loop that searches for the first number divisible by both 3 and 7 (between 1 and 100) — break when found and print it`,
            starterCode: `public class LoopControl {
    public static void main(String[] args) {
        // Step 2: Loop 0-9, skip 4, break at 8
        for (int i = 0; i < 10; i++) {
            // Skip 4
            
            // Break at 8
            
            System.out.println(i);
        }
        
        // Step 4: Find first number divisible by 3 and 7
        int num = 1;
        while (num <= 100) {
            
            num++;
        }
    }
}`,
            solution: `public class LoopControl {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            if (i == 4) continue;
            if (i == 8) break;
            System.out.println(i);
        }
        int num = 1;
        while (num <= 100) {
            if (num % 3 == 0 && num % 7 == 0) {
                System.out.println("Found: " + num);
                break;
            }
            num++;
        }
    }
}`,
            tests: [
              { type: "contains", value: "continue;" },
              { type: "contains", value: "break;" },
              { type: "contains", value: "num % 3 == 0" }
            ],
            debuggingTip: `Common mistakes:
• break exits ALL loops from that point — in nested loops, it only exits the innermost one.
• continue after the print? The print already ran. Put continue BEFORE the print to actually skip it.
• While loop not finding the number? Check your condition uses && (both must be true): % 3 == 0 && % 7 == 0.
• Infinite loop with continue? If continue is hit and num++ is after it, increment never happens. Put increment before continue or use a for loop.
• Off by one: the number found at break is still printed in some patterns — be careful about what code runs before break.`
          }
        },
        {
          id: "java-phase2-m1-l7",
          title: "Switch Statements — Matching Specific Values",
          explanation: `When you have one variable that could be one of many specific values, and you 
want different behavior for each, switch is cleaner than a long chain of else-if. 
It's the difference between "check if score is in a range" (needs if/else if) 
and "match this exact day number" (perfect for switch). Switch is widely used 
for menu systems, command dispatching, state machines, and anywhere you're 
matching against a fixed set of known values. The break statement in each case 
is critical — without it, execution "falls through" to the next case.`,
          concept: `switch (variable) {
    case value1:
        // code
        break;    // REQUIRED to stop falling through to next case
    case value2:
        // code
        break;
    default:
        // runs if no case matched (like else)
}
Works with: int, char, String, and enum values.
Without break: execution continues into the NEXT case (fallthrough).
Fallthrough can be used intentionally (multiple cases → same code).
Java 14+ supports switch expressions with -> arrow syntax.`,
          example: `public class SwitchDemo {
    public static void main(String[] args) {
        int dayNumber = 3;
        
        switch (dayNumber) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 6:
            case 7:
                // Intentional fallthrough — both go here
                System.out.println("Weekend!");
                break;
            default:
                System.out.println("Another weekday");
        }
        // Output: Wednesday
        
        // Switch with String
        String season = "winter";
        switch (season) {
            case "spring": System.out.println("Flowers blooming"); break;
            case "summer": System.out.println("Beach time!"); break;
            case "autumn": System.out.println("Leaves falling"); break;
            case "winter": System.out.println("Time for hot chocolate"); break;
            default: System.out.println("Unknown season");
        }
    }
}`,
          exercise: {
            prompt: `Build a day finder with switch:
1. Create class DayFinder with int dayNumber = 5
2. Case 1 → print "Monday"
3. Case 5 → print "Friday"
4. Case 6 and 7 (use fallthrough) → print "Weekend!"
5. Default → print "Not a special day"
6. Add a second switch on String grade = "B" — print descriptive messages for A, B, C, and default`,
            starterCode: `public class DayFinder {
    public static void main(String[] args) {
        int dayNumber = 5;
        
        // Step 2-5: Switch on dayNumber
        switch (dayNumber) {
            
        }
        
        // Step 6: Switch on String grade
        String grade = "B";
        switch (grade) {
            
        }
    }
}`,
            solution: `public class DayFinder {
    public static void main(String[] args) {
        int dayNumber = 5;
        switch (dayNumber) {
            case 1:
                System.out.println("Monday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
            case 7:
                System.out.println("Weekend!");
                break;
            default:
                System.out.println("Not a special day");
        }
        String grade = "B";
        switch (grade) {
            case "A":
                System.out.println("Excellent!");
                break;
            case "B":
                System.out.println("Great work!");
                break;
            case "C":
                System.out.println("Satisfactory");
                break;
            default:
                System.out.println("Needs improvement");
        }
    }
}`,
            tests: [
              { type: "contains", value: "switch (dayNumber)" },
              { type: "contains", value: "case 5:" },
              { type: "contains", value: "break;" },
              { type: "contains", value: "default:" }
            ],
            debuggingTip: `Common mistakes:
• Missing break? Without break, Java "falls through" to the NEXT case and runs it too — very common bug.
• String in switch not working? Strings in switch require Java 7+. Make sure case values use the exact same case.
• Default not at end? Default can be anywhere but is conventionally last. It still only runs if no case matched.
• Case with ranges? switch doesn't support ranges — use if/else if for score >= 90 type conditions.
• Using == with Strings in switch? The switch statement uses .equals() internally for Strings — it's safe here.`
          }
        },
        {
          id: "java-phase2-m1-l8",
          title: "Capstone: Number Guessing Game",
          explanation: `You now have all the tools to build a complete interactive program: variables 
store state, Scanner reads user input, while loops repeat until a condition is 
met, and if/else if handles multiple outcomes. The guessing game combines all 
of these naturally. It also introduces an important programming concept: 
tracking state across iterations (the guess changes each time, the count 
accumulates). This is the foundation of any stateful program — games, 
form validators, retry logic, search algorithms.`,
          concept: `This capstone integrates: Scanner for input, while loop for repetition, 
if/else if for comparison feedback, integer variables for state tracking.
Key pattern: initialize state → loop while not done → update state → check → feedback.
Always close Scanner when done.
(age + 1) needs parentheses — without them, string concatenation happens first.`,
          example: `import java.util.Scanner;

public class GuessingGame {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int secret = 42;
        int guess = 0;
        int attempts = 0;
        
        System.out.println("I'm thinking of a number between 1 and 100!");
        
        while (guess != secret) {
            System.out.print("Your guess: ");
            guess = input.nextInt();
            attempts++;
            
            if (guess < secret) {
                System.out.println("Too low! Try higher.");
            } else if (guess > secret) {
                System.out.println("Too high! Try lower.");
            }
            // If guess == secret, neither branch runs, loop exits
        }
        
        System.out.println("You got it in " + attempts + " attempt(s)!");
        input.close();
    }
}`,
          exercise: {
            prompt: `Build the complete guessing game:
1. Import Scanner at the top
2. Create class GuessGame
3. Set secret = 5, guess = 0, attempts = 0
4. While guess != secret: ask for guess, increment attempts, give Higher/Lower feedback
5. After the loop: print 'You got it!' and how many attempts it took
6. Close the scanner`,
            starterCode: `import java.util.Scanner;

public class GuessGame {
    public static void main(String[] args) {
        // Step 3: Set up variables
        Scanner input = new Scanner(System.in);
        int secret = 5;
        int guess = 0;
        int attempts = 0;
        
        // Step 4: While loop
        
        
        // Step 5: Victory message
        
        
        // Step 6: Close scanner
        
    }
}`,
            solution: `import java.util.Scanner;

public class GuessGame {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int secret = 5;
        int guess = 0;
        int attempts = 0;
        while (guess != secret) {
            System.out.print("Guess the number: ");
            guess = input.nextInt();
            attempts++;
            if (guess < secret) {
                System.out.println("Higher!");
            } else if (guess > secret) {
                System.out.println("Lower!");
            }
        }
        System.out.println("You got it!");
        System.out.println("Attempts: " + attempts);
        input.close();
    }
}`,
            tests: [
              { type: "contains", value: "while (guess != secret)" },
              { type: "contains", value: "input.nextInt()" },
              { type: "contains", value: "You got it!" },
              { type: "contains", value: "input.close()" }
            ],
            debuggingTip: `Common mistakes:
• Infinite loop? guess must be assigned INSIDE the while loop, not just once before it.
• Getting wrong feedback? Check if guess < secret prints "Higher!" (guess is low, so go higher).
• attempts not counting? Make sure attempts++ is INSIDE the while loop.
• Scanner error after nextInt()? If you add a nextLine() later, add sc.nextLine() after nextInt() to consume the leftover newline.
• Program crashes on non-number input? nextInt() throws InputMismatchException for non-integers — advanced handling needs try/catch.`
          }
        }
      ]
    },
    // ============================================================
    // Phase 3 — Methods and Collections
    // ============================================================
    {
      id: "java-phase3-m1",
      title: "Phase 3 — Methods and Collections",
      duration: "3.5 hours",
      lessons: [
        {
          id: "java-phase3-m1-l1",
          title: "Defining Methods — Reusable Code Blocks",
          explanation: `Imagine if every time you wanted to calculate a total price, you had to rewrite 
the same 10 lines of code. Methods solve this by letting you name and package 
a block of code so you can run it just by calling its name. This is the 
foundation of DRY programming: Don't Repeat Yourself. In Java, methods inside 
the same class as main must be marked static to be callable from main. 
void means the method does something (like printing) but doesn't hand back 
a result. Every real Java program is a collection of methods working together — 
mastering them is the single biggest step toward writing professional code.`,
          concept: `static void methodName() {
    // code here
}
static   → means it belongs to the class, not an object (required to call from main)
void     → means the method returns nothing (it just does something)
Call a method by writing its name followed by (): methodName();
Methods must be defined INSIDE the class but OUTSIDE other methods.
Method names use camelCase: printHeader, calculateTotal, sayHello.`,
          example: `public class MethodDemo {

    // Method definition — OUTSIDE main, INSIDE class
    static void sayHello() {
        System.out.println("Hello!");
        System.out.println("Welcome to Java.");
    }
    
    static void printSeparator() {
        System.out.println("=".repeat(30));
    }
    
    static void printMenu() {
        printSeparator();          // calling another method!
        System.out.println("MAIN MENU");
        printSeparator();
        System.out.println("1. Start");
        System.out.println("2. Settings");
        System.out.println("3. Quit");
        printSeparator();
    }
    
    public static void main(String[] args) {
        sayHello();        // call 1
        sayHello();        // call 2 — same code, no repetition
        printMenu();       // reusable menu
    }
}`,
          exercise: {
            prompt: `Build a collection of useful methods:
1. Create class MethodPractice
2. Define static void sayMotto() that prints 'Keep coding!' and 'Never give up!'
3. Define static void printHeader() that prints 20 asterisks, then 'JAVA PROGRAM', then 20 more asterisks
4. In main: call sayMotto() twice, then call printHeader() once
5. Bonus: define static void countDown() that prints 3, 2, 1, Blast off! using a for loop`,
            starterCode: `public class MethodPractice {

    // Step 2: Define sayMotto() here
    
    
    // Step 3: Define printHeader() here
    
    
    // Step 5 (Bonus): Define countDown() here
    
    
    public static void main(String[] args) {
        // Step 4: Call your methods here
        
        
    }
}`,
            solution: `public class MethodPractice {

    static void sayMotto() {
        System.out.println("Keep coding!");
        System.out.println("Never give up!");
    }
    
    static void printHeader() {
        System.out.println("*".repeat(20));
        System.out.println("JAVA PROGRAM");
        System.out.println("*".repeat(20));
    }
    
    static void countDown() {
        for (int i = 3; i >= 1; i--) {
            System.out.println(i);
        }
        System.out.println("Blast off!");
    }
    
    public static void main(String[] args) {
        sayMotto();
        sayMotto();
        printHeader();
        countDown();
    }
}`,
            tests: [
              { type: "contains", value: "static void sayMotto()" },
              { type: "contains", value: "static void printHeader()" },
              { type: "contains", value: "sayMotto();" }
            ],
            debuggingTip: `Common mistakes:
• Defined method INSIDE main? Methods must be at the class level — outside main's curly braces.
• Forgot static? Without static, you'll get "cannot be referenced from a static context" error.
• Method not being called? Defining a method doesn't run it — you must call it by name in main.
• Typo in method call? sayMotto() and SayMotto() are different — Java is case-sensitive.
• Forgot parentheses on call? sayMotto without () is not a method call — Java will error.`
          }
        },
        {
          id: "java-phase3-m1-l2",
          title: "Parameters — Giving Methods Input",
          explanation: `A method without parameters always does the exact same thing — it's like a 
vending machine that dispenses the same item no matter what button you press. 
Parameters make methods flexible and reusable. You define what information 
the method needs (parameters), and when you call it, you provide that 
information (arguments). Parameters are local variables — they only exist 
inside the method. The type of each parameter must be declared explicitly, 
just like regular Java variables. Methods with well-chosen parameters are 
the building blocks of flexible, reusable code.`,
          concept: `static void methodName(type param1, type param2) {
    // use param1 and param2 here
}
Parameters are LOCAL VARIABLES — they only exist inside the method.
When calling: methodName(value1, value2) — called "passing arguments".
Argument types must match parameter types.
Parameter names don't need to match the variable names you pass in.
Multiple parameters are separated by commas.`,
          example: `public class ParamDemo {

    // One parameter
    static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    // Two parameters
    static void introduce(String name, int age) {
        System.out.println(name + " is " + age + " years old.");
    }
    
    // Parameter used in calculation
    static void printSquare(int n) {
        System.out.println(n + " squared = " + (n * n));
    }
    
    // Mixed types
    static void printReceipt(String item, int qty, double price) {
        double total = qty * price;
        System.out.println(String.format(
            "%s x%d = $%.2f", item, qty, total
        ));
    }
    
    public static void main(String[] args) {
        greet("Alice");           // Hello, Alice!
        greet("Bob");             // Hello, Bob!
        introduce("Maria", 28);   // Maria is 28 years old.
        
        for (int i = 1; i <= 5; i++) {
            printSquare(i);       // reuse with different values!
        }
        
        printReceipt("Coffee", 3, 4.50);
        printReceipt("Muffin", 2, 2.99);
    }
}`,
          exercise: {
            prompt: `Build methods with parameters:
1. Define static void doublePrint(int number) that prints number * 2
2. Call it with 5, then 10, then 3
3. Define static void greetUser(String name, String language) that prints:
   "Hello [name], welcome to [language]!"
4. Call greetUser with your name and "Java"
5. Define static void printBox(String label, int width) that prints a box:
   prints width asterisks, then the label, then width asterisks again`,
            starterCode: `public class ParamPractice {

    // Step 1: Define doublePrint(int number)
    
    
    // Step 3: Define greetUser(String name, String language)
    
    
    // Step 5: Define printBox(String label, int width)
    
    
    public static void main(String[] args) {
        // Step 2: Call doublePrint three times
        
        
        // Step 4: Call greetUser
        
        
        // Step 5: Call printBox
        
    }
}`,
            solution: `public class ParamPractice {

    static void doublePrint(int number) {
        System.out.println(number * 2);
    }
    
    static void greetUser(String name, String language) {
        System.out.println("Hello " + name + ", welcome to " + language + "!");
    }
    
    static void printBox(String label, int width) {
        System.out.println("*".repeat(width));
        System.out.println(label);
        System.out.println("*".repeat(width));
    }
    
    public static void main(String[] args) {
        doublePrint(5);
        doublePrint(10);
        doublePrint(3);
        greetUser("Alex", "Java");
        printBox("WELCOME", 20);
    }
}`,
            tests: [
              { type: "contains", value: "doublePrint(int number)" },
              { type: "contains", value: "greetUser(String name, String language)" },
              { type: "contains", value: "doublePrint(5)" }
            ],
            debuggingTip: `Common mistakes:
• Wrong argument order? greetUser("Java", "Alex") passes them backwards — order must match parameter list.
• Wrong type? Passing a String where int expected causes a compile error.
• Too few or too many arguments? Java requires exactly the number of parameters defined.
• Trying to use parameter outside the method? Parameters are local — they don't exist outside their method.
• Modifying a primitive parameter? Changes inside the method don't affect the variable you passed in.`
          }
        },
        {
          id: "java-phase3-m1-l3",
          title: "Return Values — Methods That Answer Questions",
          explanation: `So far, methods have been doing things (printing, drawing). But often you need 
a method to calculate something and give you back the result — like a function 
in math: give it inputs, get an output. The return keyword sends a value back 
to whoever called the method. You replace void with the type of value you're 
returning (int, double, String, boolean). The caller can then store this value 
in a variable, use it in a calculation, or pass it to another method. 
Return values make methods truly powerful — they're the basis of all 
mathematical functions, data processing, and validation logic.`,
          concept: `static returnType methodName(parameters) {
    // compute something
    return result;  // sends value back to caller
}
Replace void with the type you're returning: int, double, String, boolean, etc.
return immediately exits the method — code after return in the same block is unreachable.
The caller uses the return value: int result = add(3, 4);
Or uses it directly: System.out.println(add(3, 4));
A method can have multiple return statements (e.g., one in each if branch).`,
          example: `public class ReturnDemo {

    // Returns an int
    static int add(int a, int b) {
        return a + b;
    }
    
    // Returns a double
    static double circleArea(double radius) {
        return Math.PI * radius * radius;
    }
    
    // Returns a String
    static String getGrade(int score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }
    
    // Returns a boolean
    static boolean isEven(int n) {
        return n % 2 == 0;
    }
    
    public static void main(String[] args) {
        // Storing return values
        int sum = add(15, 27);
        System.out.println("Sum: " + sum);       // 42
        
        // Using return value directly
        System.out.println(add(100, 200));        // 300
        
        // Chaining with other calls
        System.out.println(String.format(
            "Area: %.2f", circleArea(5.0)
        ));
        
        // Grade checker
        int[] scores = {95, 82, 67, 55};
        for (int score : scores) {
            System.out.println(score + " -> " + getGrade(score));
        }
        
        // Boolean return
        System.out.println(isEven(4));  // true
        System.out.println(isEven(7));  // false
    }
}`,
          exercise: {
            prompt: `Build methods that return values:
1. Define static int multiply(int a, int b) that returns the product
2. In main, call multiply(4, 7), store the result, and print it
3. Define static double celsiusToFahrenheit(double c) that returns (c * 9/5) + 32
4. Print the conversion for 0, 100, and 37 degrees Celsius
5. Define static boolean isPassing(int score) that returns true if score >= 60
6. Test it with 75 and 45 — print the boolean result`,
            starterCode: `public class ReturnPractice {

    // Step 1: multiply returns int
    
    
    // Step 3: celsiusToFahrenheit returns double
    
    
    // Step 5: isPassing returns boolean
    
    
    public static void main(String[] args) {
        // Step 2: Call multiply and print
        
        
        // Step 4: Print temperature conversions
        
        
        // Step 6: Test isPassing
        
    }
}`,
            solution: `public class ReturnPractice {

    static int multiply(int a, int b) {
        return a * b;
    }
    
    static double celsiusToFahrenheit(double c) {
        return (c * 9.0 / 5) + 32;
    }
    
    static boolean isPassing(int score) {
        return score >= 60;
    }
    
    public static void main(String[] args) {
        int product = multiply(4, 7);
        System.out.println(product);
        System.out.println(celsiusToFahrenheit(0));
        System.out.println(celsiusToFahrenheit(100));
        System.out.println(celsiusToFahrenheit(37));
        System.out.println(isPassing(75));
        System.out.println(isPassing(45));
    }
}`,
            tests: [
              { type: "contains", value: "static int multiply" },
              { type: "contains", value: "return a * b" },
              { type: "contains", value: "multiply(4, 7)" },
              { type: "contains", value: "static boolean isPassing" }
            ],
            debuggingTip: `Common mistakes:
• Declared return type as void but used return value? Change void to the correct type.
• Forgot to return? Java will error: "missing return statement" if a path doesn't return.
• Returning wrong type? return "hello" from a static int method causes compile error.
• Didn't capture return value? int result = multiply(4, 7) captures it. Just multiply(4, 7) throws it away.
• Integer division in temperature formula? 9/5 = 1 in integer math! Use 9.0/5 for correct result.`
          }
        },
        {
          id: "java-phase3-m1-l4",
          title: "Method Overloading — Same Name, Different Input",
          explanation: `In real life, we naturally adapt the same action to different inputs: "add this 
bill to the total", "add these two measurements", "add these three items". 
In Java, method overloading lets you define multiple methods with the same name 
but different parameter lists. Java automatically picks the right version based 
on what arguments you pass. This makes your code feel natural to use — instead 
of add_two_ints(), add_three_ints(), add_two_doubles(), you just call add() 
with whatever you have. Java's standard library uses overloading everywhere — 
System.out.println() itself is overloaded for String, int, double, boolean, etc.`,
          concept: `Same method name, different parameter list = overloading.
Java decides which version to call based on: number of parameters, types of parameters.
Return type ALONE cannot distinguish overloaded methods.
Every overloaded version is a completely separate method — different code inside.
Called: compile-time polymorphism (Java resolves at compile time which version to use).`,
          example: `public class OverloadDemo {

    // Version 1: two ints
    static int add(int a, int b) {
        System.out.println("Adding two ints");
        return a + b;
    }
    
    // Version 2: three ints
    static int add(int a, int b, int c) {
        System.out.println("Adding three ints");
        return a + b + c;
    }
    
    // Version 3: two doubles
    static double add(double a, double b) {
        System.out.println("Adding two doubles");
        return a + b;
    }
    
    // Overloading with different logic per type
    static void display(int value) {
        System.out.println("Integer: " + value);
    }
    
    static void display(double value) {
        System.out.println(String.format("Double: %.2f", value));
    }
    
    static void display(String value) {
        System.out.println("String: \"" + value + "\"");
    }
    
    public static void main(String[] args) {
        System.out.println(add(5, 3));           // calls version 1 → 8
        System.out.println(add(1, 2, 3));        // calls version 2 → 6
        System.out.println(add(1.5, 2.5));       // calls version 3 → 4.0
        
        display(42);          // Integer: 42
        display(3.14);        // Double: 3.14
        display("Hello");     // String: "Hello"
    }
}`,
          exercise: {
            prompt: `Create an overloaded calculator:
1. Define add(int a, int b) → returns sum of two ints
2. Define add(int a, int b, int c) → returns sum of three ints
3. Define add(double a, double b) → returns sum of two doubles
4. In main: call all three versions and print each result
5. Define describe(String s) that prints "Text: [s]" and describe(int n) that prints "Number: [n]"
6. Call both describe versions`,
            starterCode: `public class Overloader {

    // Step 1: add(int, int)
    
    
    // Step 2: add(int, int, int)
    
    
    // Step 3: add(double, double)
    
    
    // Step 5: describe(String) and describe(int)
    
    
    
    public static void main(String[] args) {
        // Step 4: Call all three add versions
        
        
        
        // Step 6: Call both describe versions
        
        
    }
}`,
            solution: `public class Overloader {

    static int add(int a, int b) {
        return a + b;
    }
    
    static int add(int a, int b, int c) {
        return a + b + c;
    }
    
    static double add(double a, double b) {
        return a + b;
    }
    
    static void describe(String s) {
        System.out.println("Text: " + s);
    }
    
    static void describe(int n) {
        System.out.println("Number: " + n);
    }
    
    public static void main(String[] args) {
        System.out.println(add(5, 3));
        System.out.println(add(1, 2, 3));
        System.out.println(add(1.5, 2.5));
        describe("Hello");
        describe(42);
    }
}`,
            tests: [
              { type: "contains", value: "add(int a, int b, int c)" },
              { type: "contains", value: "add(double a, double b)" },
              { type: "contains", value: "describe(String" }
            ],
            debuggingTip: `Common mistakes:
• Two methods with same name AND same parameters? That's not overloading — it's a duplicate, Java will error.
• Returning different types with same parameters? Java can't distinguish by return type alone — add a parameter.
• Ambiguous call? add(5, 5) could match add(int,int) or add(double,double) if Java can't decide — be specific.
• Overloading vs overriding? Overloading = same class, different params. Overriding = subclass replaces parent method.
• Thinking overloaded methods share code? They don't — each is fully independent. Duplicate logic if needed.`
          }
        },
        {
          id: "java-phase3-m1-l5",
          title: "Arrays — Fixed-Size Collections",
          explanation: `An array lets you store multiple values of the same type in one variable. 
Instead of creating int score1, score2, score3... score100, you create one 
int[] scores with 100 slots. Arrays are the most fundamental data structure 
in Java — everything from image pixels to database records to sorting 
algorithms uses them. The key rules: arrays in Java have a fixed size (set 
when created and cannot change), all elements must be the same type, and 
indexing starts at 0 (first element is [0], last is [length - 1]). 
Accessing an index outside these bounds causes an ArrayIndexOutOfBoundsException.`,
          concept: `int[] arr = {1, 2, 3};              → declare and initialize with values
int[] arr = new int[5];             → declare empty array of size 5 (all zeros)
String[] names = new String[3];     → empty String array (all null)
arr[0]           → access first element (index 0)
arr[arr.length - 1] → access last element
arr.length       → number of elements (NOTE: no parentheses, it's a field not method)
Arrays.sort(arr) → sort in place (import java.util.Arrays)
Arrays.toString(arr) → convert to printable String like [1, 2, 3]`,
          example: `import java.util.Arrays;

public class ArrayDemo {
    public static void main(String[] args) {
        // Initialize with values
        int[] numbers = {10, 20, 30, 40, 50};
        
        // Access elements
        System.out.println(numbers[0]);   // 10 (first)
        System.out.println(numbers[4]);   // 50 (last)
        System.out.println(numbers[numbers.length - 1]); // 50 (safe last)
        
        // Modify element
        numbers[1] = 25;
        System.out.println(numbers[1]);   // 25
        
        // Array info
        System.out.println(numbers.length);  // 5
        
        // Print whole array (can't use just println)
        System.out.println(Arrays.toString(numbers));  // [10, 25, 30, 40, 50]
        
        // Create empty array and fill it
        double[] prices = new double[4];
        prices[0] = 9.99;
        prices[1] = 14.50;
        prices[2] = 3.75;
        prices[3] = 22.00;
        
        // Calculate sum
        double total = 0;
        for (int i = 0; i < prices.length; i++) {
            total += prices[i];
        }
        System.out.println("Total: $" + total);
        
        // Sort
        Arrays.sort(numbers);
        System.out.println(Arrays.toString(numbers)); // [10, 25, 30, 40, 50]
    }
}`,
          exercise: {
            prompt: `Work with integer arrays:
1. Create class ArrayPractice
2. Declare int[] numbers = {10, 20, 30, 40, 50}
3. Print index 0, 2, and 4 using direct access
4. Change index 1 to 25 and print it
5. Print the array length
6. Use a for loop to calculate and print the sum of all elements
7. Print the full array using Arrays.toString()`,
            starterCode: `import java.util.Arrays;

public class ArrayPractice {
    public static void main(String[] args) {
        // Step 2: Declare array
        int[] numbers = {10, 20, 30, 40, 50};
        
        // Step 3: Print index 0, 2, 4
        
        
        
        // Step 4: Change index 1 to 25 and print
        
        
        // Step 5: Print length
        
        
        // Step 6: Sum with for loop
        int sum = 0;
        
        
        // Step 7: Print full array
        
    }
}`,
            solution: `import java.util.Arrays;

public class ArrayPractice {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        System.out.println(numbers[0]);
        System.out.println(numbers[2]);
        System.out.println(numbers[4]);
        numbers[1] = 25;
        System.out.println(numbers[1]);
        System.out.println(numbers.length);
        int sum = 0;
        for (int i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        System.out.println("Sum: " + sum);
        System.out.println(Arrays.toString(numbers));
    }
}`,
            tests: [
              { type: "contains", value: "int[] numbers" },
              { type: "contains", value: "numbers[0]" },
              { type: "contains", value: "numbers.length" },
              { type: "contains", value: "Arrays.toString" }
            ],
            debuggingTip: `Common mistakes:
• ArrayIndexOutOfBoundsException? You accessed an index that doesn't exist. Valid range is 0 to length-1.
• Used numbers.length() with parentheses? length is a FIELD not a method — no parentheses: numbers.length
• Just printed the array name? System.out.println(numbers) prints something like [I@7852e922 — use Arrays.toString().
• Changed an element but printed old value? Make sure the change (numbers[1] = 25) comes BEFORE the print.
• Off by one in loop? Use i < numbers.length (not <=) to avoid going past the last index.`
          }
        },
        {
          id: "java-phase3-m1-l6",
          title: "Array Iteration — Standard and Enhanced For Loops",
          explanation: `Once you have an array, you'll almost always want to process each element — 
print them, sum them, search through them, transform them. Java provides two 
ways to loop through arrays. The standard for loop gives you full control: 
you know the index, can go backwards, can skip elements, can modify the array. 
The enhanced for-each loop is cleaner and safer when you just need to read 
each element in order. Real Java code uses both — for-each for simple reading, 
standard for when you need the index or need to modify elements.`,
          concept: `Standard for: for (int i = 0; i < arr.length; i++) { arr[i] }
  → gives you index i, can modify elements, can go any direction
Enhanced for-each: for (Type item : arr) { item }
  → cleaner syntax, read-only access, always goes forward
arr.length → total number of elements (no parentheses)
Modifying item in for-each does NOT change the original array for primitives.
Use standard for when: you need index, modifying elements, going backwards.
Use for-each when: just reading values, cleaner code matters.`,
          example: `import java.util.Arrays;

public class IterationDemo {
    public static void main(String[] args) {
        String[] fruits = {"apple", "banana", "cherry", "date"};
        int[] scores = {85, 92, 78, 95, 88};
        
        // Standard for loop — gives access to index
        System.out.println("Standard for:");
        for (int i = 0; i < fruits.length; i++) {
            System.out.println(i + ": " + fruits[i]);
        }
        
        // Enhanced for-each — cleaner for simple reading
        System.out.println("For-each:");
        for (String fruit : fruits) {
            System.out.println(fruit.toUpperCase());
        }
        
        // Calculate average using standard for
        int total = 0;
        for (int i = 0; i < scores.length; i++) {
            total += scores[i];
        }
        double average = (double) total / scores.length;
        System.out.println(String.format("Average: %.1f", average));
        
        // Find maximum using for-each
        int max = scores[0];  // start with first element
        for (int score : scores) {
            if (score > max) {
                max = score;
            }
        }
        System.out.println("Max score: " + max);
        
        // Backwards iteration (only standard for can do this)
        System.out.println("Reversed:");
        for (int i = scores.length - 1; i >= 0; i--) {
            System.out.print(scores[i] + " ");
        }
    }
}`,
          exercise: {
            prompt: `Practice both iteration styles:
1. Create class IterationPractice
2. Create String[] fruits = {"apple", "banana", "cherry"}
3. Print each fruit with its index using a standard for loop: "0: apple"
4. Print each fruit in uppercase using a for-each loop
5. Create int[] scores = {85, 92, 78, 95, 88} 
6. Calculate and print the average score
7. Find and print the minimum score`,
            starterCode: `public class IterationPractice {
    public static void main(String[] args) {
        // Step 2: String array
        String[] fruits = {"apple", "banana", "cherry"};
        
        // Step 3: Standard for — print with index
        
        
        // Step 4: For-each — print uppercase
        
        
        // Step 5: Score array
        int[] scores = {85, 92, 78, 95, 88};
        
        // Step 6: Calculate average
        
        
        // Step 7: Find minimum
        
    }
}`,
            solution: `public class IterationPractice {
    public static void main(String[] args) {
        String[] fruits = {"apple", "banana", "cherry"};
        for (int i = 0; i < fruits.length; i++) {
            System.out.println(i + ": " + fruits[i]);
        }
        for (String fruit : fruits) {
            System.out.println(fruit.toUpperCase());
        }
        int[] scores = {85, 92, 78, 95, 88};
        int total = 0;
        for (int score : scores) {
            total += score;
        }
        double average = (double) total / scores.length;
        System.out.println(String.format("Average: %.1f", average));
        int min = scores[0];
        for (int score : scores) {
            if (score < min) {
                min = score;
            }
        }
        System.out.println("Min: " + min);
    }
}`,
            tests: [
              { type: "contains", value: "fruits.length" },
              { type: "contains", value: "for (String fruit : fruits)" },
              { type: "contains", value: "(double) total" }
            ],
            debuggingTip: `Common mistakes:
• NullPointerException in loop? One of your array elements might be null — check initialization.
• Average always 0? Integer division: total / scores.length. Cast first: (double) total / scores.length.
• Min/max starting at 0? Start with the first array element: int min = scores[0], not int min = 0.
• For-each trying to modify array? item = x in for-each doesn't change the array. Use standard for with arr[i] = x.
• Off by one in standard for? i < arr.length is correct (not <=) — last valid index is length - 1.`
          }
        },
        {
          id: "java-phase3-m1-l7",
          title: "ArrayList — Dynamic-Size Collections",
          explanation: `Arrays are great but inflexible — once created at size 10, they stay size 10 forever. 
What if you're building a shopping cart and don't know how many items the user 
will add? ArrayList solves this. It automatically grows and shrinks as you add 
and remove elements. It's part of Java's Collections Framework and is arguably 
the most used data structure in real Java applications. The trade-off: ArrayList 
only holds objects (not primitives), so you use Integer instead of int, 
Double instead of double. This is called autoboxing — Java handles the 
conversion automatically in most cases.`,
          concept: `import java.util.ArrayList;
ArrayList<Type> list = new ArrayList<>();  → create empty list (Type must be object)
list.add(value)       → append to end
list.add(index, value) → insert at position
list.get(index)       → retrieve element at index
list.set(index, value) → replace element at index
list.remove(index)    → remove element at index (others shift left)
list.size()           → number of elements (NOT .length — that's for arrays)
list.contains(value)  → true if value exists
list.isEmpty()        → true if no elements
list.clear()          → remove all elements`,
          example: `import java.util.ArrayList;

public class ArrayListDemo {
    public static void main(String[] args) {
        // Create ArrayList
        ArrayList<String> tasks = new ArrayList<>();
        
        // Adding elements
        tasks.add("Study Java");
        tasks.add("Exercise");
        tasks.add("Cook dinner");
        tasks.add("Read book");
        
        System.out.println(tasks);         // [Study Java, Exercise, Cook dinner, Read book]
        System.out.println(tasks.size());  // 4
        
        // Accessing
        System.out.println(tasks.get(0));  // Study Java
        System.out.println(tasks.get(tasks.size() - 1)); // Read book (last)
        
        // Modifying
        tasks.set(1, "Go for a run");      // replace index 1
        tasks.add(0, "Wake up");           // insert at beginning
        System.out.println(tasks);
        
        // Removing
        tasks.remove(0);                   // remove by index
        tasks.remove("Read book");         // remove by value
        System.out.println(tasks);
        
        // Checking
        System.out.println(tasks.contains("Cook dinner")); // true
        System.out.println(tasks.isEmpty());               // false
        
        // Iterating
        for (String task : tasks) {
            System.out.println("• " + task);
        }
        
        // Integer ArrayList (autoboxing handles int → Integer)
        ArrayList<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            numbers.add(i);  // autoboxes int to Integer
        }
        System.out.println(numbers);  // [1, 2, 3, 4, 5]
    }
}`,
          exercise: {
            prompt: `Build a task manager with ArrayList:
1. Import ArrayList and create class ListFun
2. Create ArrayList<String> tasks
3. Add 'Study', 'Exercise', 'Sleep' to the list
4. Print the size using .size()
5. Print the first element using .get(0)
6. Remove the first element using .remove(0)
7. Print the size again (should be 2)
8. Use a for-each loop to print remaining tasks`,
            starterCode: `import java.util.ArrayList;

public class ListFun {
    public static void main(String[] args) {
        // Step 2: Create ArrayList
        
        
        // Step 3: Add three items
        
        
        
        // Step 4: Print size
        
        
        // Step 5: Print first element
        
        
        // Step 6: Remove first element
        
        
        // Step 7: Print size again
        
        
        // Step 8: For-each loop to print remaining
        
    }
}`,
            solution: `import java.util.ArrayList;

public class ListFun {
    public static void main(String[] args) {
        ArrayList<String> tasks = new ArrayList<>();
        tasks.add("Study");
        tasks.add("Exercise");
        tasks.add("Sleep");
        System.out.println(tasks.size());
        System.out.println(tasks.get(0));
        tasks.remove(0);
        System.out.println(tasks.size());
        for (String task : tasks) {
            System.out.println(task);
        }
    }
}`,
            tests: [
              { type: "contains", value: "ArrayList<String>" },
              { type: "contains", value: "tasks.add" },
              { type: "contains", value: "tasks.size()" },
              { type: "contains", value: "tasks.get(0)" },
              { type: "contains", value: "tasks.remove(0)" }
            ],
            debuggingTip: `Common mistakes:
• Used .length instead of .size()? Arrays use .length (no parentheses). ArrayLists use .size() (with parentheses).
• Tried ArrayList<int>? Primitives aren't allowed — use ArrayList<Integer> instead.
• IndexOutOfBoundsException on .get()? Index doesn't exist. Check .size() before accessing.
• remove(0) removing by index vs remove("text") removing by value — both exist, be intentional.
• Forgot to import? Without import java.util.ArrayList; at the top, you'll get a compile error.`
          }
        },
        {
          id: "java-phase3-m1-l8",
          title: "HashMap — Key-Value Storage",
          explanation: `A HashMap stores data as pairs: a key and a value. Think of it like a real 
dictionary — you look up a word (key) and get its definition (value). Or like 
a contacts app — you look up a name and get their phone number. HashMap gives 
you instant lookup by key, regardless of how many entries it has. This is 
dramatically faster than searching through an array. HashMap is everywhere 
in Java: caching, configuration, counting occurrences, grouping data. 
The key rule: keys must be unique. Adding the same key again overwrites 
the previous value.`,
          concept: `import java.util.HashMap;
HashMap<KeyType, ValueType> map = new HashMap<>();
map.put(key, value)       → add or update entry
map.get(key)              → retrieve value (returns null if key not found)
map.containsKey(key)      → true if key exists
map.containsValue(val)    → true if value exists
map.remove(key)           → delete entry
map.size()                → number of entries
map.keySet()              → Set of all keys
map.values()              → Collection of all values
Iterating: for (Map.Entry<K,V> entry : map.entrySet()) { entry.getKey(), entry.getValue() }`,
          example: `import java.util.HashMap;
import java.util.Map;

public class HashMapDemo {
    public static void main(String[] args) {
        // Country → Capital mapping
        HashMap<String, String> capitals = new HashMap<>();
        capitals.put("France", "Paris");
        capitals.put("Japan", "Tokyo");
        capitals.put("Brazil", "Brasilia");
        capitals.put("Italy", "Rome");
        
        // Retrieve
        System.out.println(capitals.get("Japan"));   // Tokyo
        System.out.println(capitals.get("Germany")); // null (not found)
        
        // Safe retrieval with default
        String cap = capitals.getOrDefault("Germany", "Unknown");
        System.out.println(cap);  // Unknown
        
        // Check before get
        if (capitals.containsKey("France")) {
            System.out.println("France: " + capitals.get("France"));
        }
        
        // Update existing key
        capitals.put("Brazil", "Brasília");  // overwrites old value
        
        // Print all keys
        System.out.println(capitals.keySet());
        
        // Iterate all entries
        for (Map.Entry<String, String> entry : capitals.entrySet()) {
            System.out.println(entry.getKey() + " → " + entry.getValue());
        }
        
        // Word frequency counter (common pattern)
        String[] words = {"apple", "banana", "apple", "cherry", "banana", "apple"};
        HashMap<String, Integer> frequency = new HashMap<>();
        for (String word : words) {
            frequency.put(word, frequency.getOrDefault(word, 0) + 1);
        }
        System.out.println(frequency); // {apple=3, banana=2, cherry=1}
    }
}`,
          exercise: {
            prompt: `Build a capitals lookup system:
1. Import HashMap and create class MapFun
2. Create HashMap<String, String> capitals
3. Add: France/Paris, Japan/Tokyo, Italy/Rome
4. Print Japan's capital using .get()
5. Print whether "Germany" is a key using .containsKey()
6. Add Germany/Berlin, then print the map size
7. Use a for-each with entrySet() to print all entries as "Country: Capital"`,
            starterCode: `import java.util.HashMap;
import java.util.Map;

public class MapFun {
    public static void main(String[] args) {
        // Step 2: Create HashMap
        
        
        // Step 3: Add three entries
        
        
        
        // Step 4: Print Japan's capital
        
        
        // Step 5: Does Germany exist?
        
        
        // Step 6: Add Germany, print size
        
        
        
        // Step 7: Print all entries
        
    }
}`,
            solution: `import java.util.HashMap;
import java.util.Map;

public class MapFun {
    public static void main(String[] args) {
        HashMap<String, String> capitals = new HashMap<>();
        capitals.put("France", "Paris");
        capitals.put("Japan", "Tokyo");
        capitals.put("Italy", "Rome");
        System.out.println(capitals.get("Japan"));
        System.out.println(capitals.containsKey("Germany"));
        capitals.put("Germany", "Berlin");
        System.out.println(capitals.size());
        for (Map.Entry<String, String> entry : capitals.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}`,
            tests: [
              { type: "contains", value: "HashMap<String, String>" },
              { type: "contains", value: "capitals.put" },
              { type: "contains", value: "capitals.get(\"Japan\")" },
              { type: "contains", value: "entrySet()" }
            ],
            debuggingTip: `Common mistakes:
• get() returns null for missing keys — always use containsKey() or getOrDefault() before accessing.
• HashMap order is not guaranteed — don't expect entries to print in the order you added them.
• Forgot import java.util.Map for Map.Entry? Add it alongside the HashMap import.
• Putting same key twice? Second put() overwrites first — keys are unique.
• Trying to use primitive types? HashMap<String, int> fails — use HashMap<String, Integer>.`
          }
        },
        {
          id: "java-phase3-m1-l9",
          title: "Capstone: Grade Tracker System",
          explanation: `This capstone brings together everything from Phase 3: methods, parameters, 
return values, ArrayList, and HashMap. A grade tracker is a real-world system 
that maps student names to their list of scores — a natural fit for 
HashMap<String, ArrayList<Integer>>. This nested collection pattern 
(a map of lists) appears constantly in professional Java: users and their 
orders, categories and their items, players and their game history. 
Understanding how to work with nested collections is a major step toward 
building real applications.`,
          concept: `Nested collections: HashMap<String, ArrayList<Integer>> stores multiple values per key.
Pattern: check if key exists → create list if not → add to list.
containsKey() prevents overwriting an existing student's grades.
getOrDefault() is cleaner than containsKey() + get() in many cases.
Extract logic into methods (addGrade, getAverage) for clean, readable code.`,
          example: `import java.util.HashMap;
import java.util.ArrayList;

public class GradeTrackerExample {
    // The grade book: student name → list of scores
    static HashMap<String, ArrayList<Integer>> gradeBook = new HashMap<>();
    
    static void addGrade(String name, int score) {
        // Create list if student not yet in book
        if (!gradeBook.containsKey(name)) {
            gradeBook.put(name, new ArrayList<>());
        }
        gradeBook.get(name).add(score);
    }
    
    static double getAverage(String name) {
        ArrayList<Integer> grades = gradeBook.get(name);
        if (grades == null || grades.isEmpty()) return 0;
        int total = 0;
        for (int grade : grades) {
            total += grade;
        }
        return (double) total / grades.size();
    }
    
    public static void main(String[] args) {
        addGrade("Alice", 90);
        addGrade("Alice", 85);
        addGrade("Alice", 92);
        addGrade("Bob", 78);
        addGrade("Bob", 82);
        
        System.out.println(gradeBook);
        System.out.printf("Alice average: %.1f%n", getAverage("Alice"));
        System.out.printf("Bob average: %.1f%n", getAverage("Bob"));
    }
}`,
          exercise: {
            prompt: `Build the Grade Tracker:
1. Import HashMap and ArrayList
2. Create class GradeTracker with a static HashMap<String, ArrayList<Integer>> gradeBook
3. Define static void addGrade(String name, int score) — creates the list if needed, then adds the score
4. In main: add grades for Alice (90, 85), Bob (78)
5. Print the full gradeBook
6. Bonus: define static double getAverage(String name) and print Alice's average`,
            starterCode: `import java.util.HashMap;
import java.util.ArrayList;

public class GradeTracker {
    // Step 2: Static gradeBook field
    
    
    // Step 3: addGrade method
    static void addGrade(String name, int score) {
        
        
    }
    
    // Step 6 (Bonus): getAverage method
    
    
    public static void main(String[] args) {
        // Step 4: Add grades
        
        
        
        // Step 5: Print gradeBook
        
        
        // Step 6 (Bonus): Print Alice's average
        
    }
}`,
            solution: `import java.util.HashMap;
import java.util.ArrayList;

public class GradeTracker {
    static HashMap<String, ArrayList<Integer>> gradeBook = new HashMap<>();
    
    static void addGrade(String name, int score) {
        if (!gradeBook.containsKey(name)) {
            gradeBook.put(name, new ArrayList<>());
        }
        gradeBook.get(name).add(score);
    }
    
    static double getAverage(String name) {
        ArrayList<Integer> grades = gradeBook.get(name);
        if (grades == null || grades.isEmpty()) return 0;
        int total = 0;
        for (int grade : grades) {
            total += grade;
        }
        return (double) total / grades.size();
    }
    
    public static void main(String[] args) {
        addGrade("Alice", 90);
        addGrade("Alice", 85);
        addGrade("Bob", 78);
        System.out.println(gradeBook);
        System.out.printf("Alice average: %.1f%n", getAverage("Alice"));
    }
}`,
            tests: [
              { type: "contains", value: "gradeBook.containsKey" },
              { type: "contains", value: "HashMap<String, ArrayList<Integer>>" },
              { type: "contains", value: "addGrade" }
            ],
            debuggingTip: `Common mistakes:
• NullPointerException on gradeBook.get(name).add()? The list doesn't exist yet — check containsKey first.
• Overwriting existing grades? Not checking containsKey means put() replaces the whole list each time.
• Average returns 0? Integer division: total / grades.size() — cast: (double) total / grades.size().
• Static field not accessible? Make sure gradeBook is declared at class level, outside all methods.
• Forgetting both imports? You need both import java.util.HashMap and import java.util.ArrayList.`
          }
        }
      ]
    },
    {
      id: "java-phase4-m1",
      title: "Phase 4 — Object-Oriented Programming",
      duration: "4 hours",
      lessons: [
        {
          id: "java-phase4-m1-l1",
          title: "What Is a Class? — Blueprints for Objects",
          explanation: `Object-Oriented Programming (OOP) is the dominant paradigm in Java. The core 
idea: model your program as a collection of objects that have data (fields) 
and behavior (methods). A class is the blueprint — it defines what data an 
object holds and what it can do. An object is an instance of that blueprint, 
created with the new keyword. Think of a class as a cookie cutter and objects 
as the cookies — one cutter, many cookies, all with the same shape but 
potentially different decorations. Every real Java application is built 
from classes and objects.`,
          concept: `class ClassName {
    // fields (data the object holds)
    type fieldName;
    
    // methods (things the object can do)
    void doSomething() { }
}
ClassName obj = new ClassName();  → creates an instance (object)
obj.fieldName = value;            → set a field
obj.methodName();                 → call a method
Each object has its OWN copy of the fields (independent data).
By convention: class names use PascalCase (Car, BankAccount, StudentProfile).`,
          example: `// Define the blueprint
class Car {
    // Fields — data each Car object holds
    String color;
    String brand;
    int year;
    int speed;
    
    // Methods — things a Car can do
    void accelerate(int amount) {
        speed += amount;
        System.out.println(brand + " accelerates to " + speed + " mph");
    }
    
    void brake() {
        speed = 0;
        System.out.println(brand + " stops.");
    }
    
    void describe() {
        System.out.println(year + " " + brand + " (" + color + ")");
    }
}

public class Main {
    public static void main(String[] args) {
        // Create two independent Car objects
        Car car1 = new Car();
        car1.color = "red";
        car1.brand = "Toyota";
        car1.year = 2022;
        car1.speed = 0;
        
        Car car2 = new Car();
        car2.color = "blue";
        car2.brand = "Honda";
        car2.year = 2020;
        car2.speed = 0;
        
        car1.describe();      // 2022 Toyota (red)
        car2.describe();      // 2020 Honda (blue)
        
        car1.accelerate(30);  // Toyota accelerates to 30 mph
        car2.accelerate(50);  // Honda accelerates to 50 mph
        car1.brake();         // Toyota stops.
        
        // Each object's data is independent
        System.out.println(car1.speed);  // 0
        System.out.println(car2.speed);  // 50
    }
}`,
          exercise: {
            prompt: `Design a Car class:
1. Define class Car with fields: String color, String brand, int year
2. Add method drive() that prints "Driving a [color] [brand]!"
3. Add method describe() that prints "[year] [brand] - [color]"
4. In class Main's main method:
   - Create a Car, set color to "red", brand to "Toyota", year to 2022
   - Call drive() and describe()
   - Create a second Car with different values and call the same methods`,
            starterCode: `// Step 1: Define Car class (outside Main)
class Car {
    // Fields
    
    
    
    // Step 2: drive() method
    
    
    // Step 3: describe() method
    
}

public class Main {
    public static void main(String[] args) {
        // Step 4: Create and use Car objects
        
        
        
    }
}`,
            solution: `class Car {
    String color;
    String brand;
    int year;
    
    void drive() {
        System.out.println("Driving a " + color + " " + brand + "!");
    }
    
    void describe() {
        System.out.println(year + " " + brand + " - " + color);
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.color = "red";
        myCar.brand = "Toyota";
        myCar.year = 2022;
        myCar.drive();
        myCar.describe();
        
        Car car2 = new Car();
        car2.color = "blue";
        car2.brand = "Honda";
        car2.year = 2020;
        car2.drive();
        car2.describe();
    }
}`,
            tests: [
              { type: "contains", value: "class Car" },
              { type: "contains", value: "new Car()" },
              { type: "contains", value: "myCar.color" },
              { type: "contains", value: "myCar.drive()" }
            ],
            debuggingTip: `Common mistakes:
• NullPointerException when calling method? You forgot to assign values to fields before using them.
• Only one object changes? Good — objects are independent. car1.color = "red" doesn't affect car2.color.
• Trying to call drive() without an object? Methods belong to objects — always need the object reference: car1.drive().
• Class name doesn't match? Java is case-sensitive: Car and car are different.
• Static method can't access non-static field? That's because static belongs to the class, not an object.`
          }
        },
        {
          id: "java-phase4-m1-l2",
          title: "Constructors — Initializing Objects Properly",
          explanation: `Setting fields one by one after creating an object is tedious and error-prone. 
What if you forget to set an important field? Constructors solve this by letting 
you provide initial values at the moment of creation. A constructor is a special 
method with the same name as the class and no return type. When you write 
new Book("1984", "Orwell"), the constructor runs immediately, setting up the 
object in a valid state. This is how professional Java code works — objects 
are always created fully initialized, never in a half-built state.`,
          concept: `ClassName(type param1, type param2) {
    this.field1 = param1;   // 'this' refers to the current object
    this.field2 = param2;
}
Constructor name MUST match the class name exactly.
No return type (not even void).
Called automatically when you use: new ClassName(args)
'this.fieldName' distinguishes the field from a parameter with the same name.
If you define no constructor, Java provides a default no-argument constructor.
You can have multiple constructors (overloading applies here too).`,
          example: `class Book {
    String title;
    String author;
    int pages;
    double rating;
    
    // Constructor — sets up the object immediately
    Book(String title, String author, int pages) {
        this.title = title;    // this.title = field, title = parameter
        this.author = author;
        this.pages = pages;
        this.rating = 0.0;     // default value for unspecified field
    }
    
    // Overloaded constructor with rating
    Book(String title, String author, int pages, double rating) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.rating = rating;
    }
    
    void display() {
        System.out.println(String.format(
            "\"%s\" by %s | %d pages | Rating: %.1f",
            title, author, pages, rating
        ));
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating objects with constructor — clean and complete
        Book book1 = new Book("1984", "Orwell", 328);
        Book book2 = new Book("Dune", "Herbert", 412, 4.8);
        Book book3 = new Book("Clean Code", "Martin", 431, 4.5);
        
        book1.display();
        book2.display();
        book3.display();
    }
}`,
          exercise: {
            prompt: `Design a Book class with a constructor:
1. Create class Book with fields: String title, String author, int year
2. Add a constructor that takes all three as parameters and sets them using 'this'
3. Add method printInfo() that prints: "Title: [title] | Author: [author] | Year: [year]"
4. In Main: create two Books using the constructor and call printInfo() on each
5. Bonus: add a second constructor that only takes title and author (set year to 0)`,
            starterCode: `class Book {
    // Step 1: Fields
    
    
    
    // Step 2: Constructor
    
    
    // Step 3: printInfo method
    
}

public class Main {
    public static void main(String[] args) {
        // Step 4: Create two books with constructor
        
        
    }
}`,
            solution: `class Book {
    String title;
    String author;
    int year;
    
    Book(String title, String author, int year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    
    Book(String title, String author) {
        this.title = title;
        this.author = author;
        this.year = 0;
    }
    
    void printInfo() {
        System.out.println("Title: " + title + " | Author: " + author + " | Year: " + year);
    }
}

public class Main {
    public static void main(String[] args) {
        Book b1 = new Book("1984", "Orwell", 1949);
        Book b2 = new Book("Dune", "Herbert", 1965);
        b1.printInfo();
        b2.printInfo();
    }
}`,
            tests: [
              { type: "contains", value: "this.title = title" },
              { type: "contains", value: "this.author = author" },
              { type: "contains", value: "new Book(" }
            ],
            debuggingTip: `Common mistakes:
• Constructor has a return type? Remove it — constructors have no return type, not even void.
• Name doesn't match class? Constructor must be named exactly like the class: Book not book.
• 'this' not used when parameter names match fields? Without this.name = name, you're just assigning the parameter to itself.
• Field still null after construction? You forgot this.fieldName = paramName for that field.
• Calling constructor like a method? new Book(...) is correct — don't call Book(...) without new.`
          }
        },
        {
          id: "java-phase4-m1-l3",
          title: "Instance Methods — Object Behavior",
          explanation: `Fields store what an object knows. Methods define what an object can do. 
Instance methods (non-static methods) have direct access to all the object's 
fields — they're part of the object and automatically know which object they 
belong to. This is fundamentally different from static methods which belong 
to the class. A BankAccount object's deposit() method can directly update 
that account's balance — it knows which balance to update because it's being 
called on a specific account object. This is the essence of OOP: data and 
behavior bundled together in meaningful units.`,
          concept: `Instance methods: defined WITHOUT static keyword inside a class.
They automatically have access to all fields of their object.
Called on an object: account.deposit(100) — not BankAccount.deposit(100).
'this' can be used inside instance methods to refer to the current object.
Can call other instance methods of the same object directly.
Instance methods vs static: instance belongs to object, static belongs to class.`,
          example: `class BankAccount {
    String owner;
    double balance;
    int transactionCount;
    
    BankAccount(String owner, double initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
        this.transactionCount = 0;
    }
    
    void deposit(double amount) {
        if (amount <= 0) {
            System.out.println("Deposit amount must be positive.");
            return;
        }
        balance += amount;
        transactionCount++;
        System.out.println(String.format(
            "Deposited $%.2f. New balance: $%.2f", amount, balance
        ));
    }
    
    void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("Insufficient funds!");
            return;
        }
        balance -= amount;
        transactionCount++;
        System.out.println(String.format(
            "Withdrew $%.2f. New balance: $%.2f", amount, balance
        ));
    }
    
    double getBalance() {
        return balance;
    }
    
    void printSummary() {
        System.out.println(String.format(
            "Account: %s | Balance: $%.2f | Transactions: %d",
            owner, balance, transactionCount
        ));
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("Alice", 1000.00);
        account.deposit(500);
        account.withdraw(200);
        account.withdraw(2000);  // insufficient funds
        account.printSummary();
        
        BankAccount savings = new BankAccount("Bob", 500.00);
        savings.deposit(250);
        savings.printSummary();
    }
}`,
          exercise: {
            prompt: `Build a BankAccount class:
1. Fields: String owner, double balance (start at 0), int transactionCount
2. Constructor takes owner name, sets balance to 0, transactionCount to 0
3. void deposit(double amount) — adds to balance, increments transactionCount, prints new balance
4. double getBalance() — returns current balance
5. In Main: create account for "Alice", deposit 100, deposit 50, print balance
6. Bonus: add withdraw(double amount) that checks for sufficient funds`,
            starterCode: `class BankAccount {
    // Step 1: Fields
    
    
    
    // Step 2: Constructor
    
    
    // Step 3: deposit method
    
    
    // Step 4: getBalance method
    
    
    // Step 6 (Bonus): withdraw method
    
}

public class Main {
    public static void main(String[] args) {
        // Step 5: Create account and use it
        
        
        
    }
}`,
            solution: `class BankAccount {
    String owner;
    double balance;
    int transactionCount;
    
    BankAccount(String owner) {
        this.owner = owner;
        this.balance = 0;
        this.transactionCount = 0;
    }
    
    void deposit(double amount) {
        balance += amount;
        transactionCount++;
        System.out.println("Deposited $" + amount + ". Balance: $" + balance);
    }
    
    double getBalance() {
        return balance;
    }
    
    void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("Insufficient funds!");
            return;
        }
        balance -= amount;
        transactionCount++;
        System.out.println("Withdrew $" + amount + ". Balance: $" + balance);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount("Alice");
        acc.deposit(100);
        acc.deposit(50);
        System.out.println(acc.getBalance());
    }
}`,
            tests: [
              { type: "contains", value: "acc.deposit" },
              { type: "contains", value: "acc.getBalance()" },
              { type: "contains", value: "balance +=" }
            ],
            debuggingTip: `Common mistakes:
• Using static on instance methods? Remove static — instance methods belong to objects, not the class.
• Accessing field but getting 0? Make sure the constructor set it and the method modifies the right field.
• Method not visible from Main? If BankAccount and Main are in the same file, methods are accessible.
• Return type mismatch? getBalance() declared as double must return a double — not void.
• Calling method without object? deposit(100) alone fails — needs account.deposit(100).`
          }
        },
        {
          id: "java-phase4-m1-l4",
          title: "Encapsulation — Private Fields and Public Methods",
          explanation: `Imagine if anyone could walk into a bank and directly change the account balance 
number in the database. That would be a disaster. Encapsulation prevents this — 
it hides the internal data (fields) and only allows access through controlled 
methods. In Java, private fields can only be accessed within the class itself. 
Public methods (getters and setters) provide controlled access. Setters can 
validate input before changing data. This is why professional Java code almost 
never has public fields — encapsulation is one of Java's core principles and 
is expected in every real codebase.`,
          concept: `private type fieldName;  → only accessible within this class
public returnType getFieldName() { return fieldName; }  → getter
public void setFieldName(type val) { fieldName = val; } → setter
Setters can validate before setting: if (val > 0) fieldName = val;
This protects objects from being put into invalid states.
IDE shortcut: right-click → Generate → Getters and Setters.
Convention: getX() for reading, setX(val) for writing, isX() for booleans.`,
          example: `class Student {
    // Private fields — no direct access from outside
    private String name;
    private int age;
    private double gpa;
    
    Student(String name, int age, double gpa) {
        this.name = name;
        setAge(age);    // use setter even in constructor for validation
        setGpa(gpa);
    }
    
    // Getters — read-only access
    public String getName() { return name; }
    public int getAge() { return age; }
    public double getGpa() { return gpa; }
    
    // Setters — write access with validation
    public void setName(String name) {
        if (name != null && !name.isEmpty()) {
            this.name = name;
        }
    }
    
    public void setAge(int age) {
        if (age >= 0 && age <= 120) {
            this.age = age;
        } else {
            System.out.println("Invalid age: " + age);
        }
    }
    
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        } else {
            System.out.println("GPA must be 0.0 to 4.0");
        }
    }
    
    public void display() {
        System.out.println(String.format(
            "%s | Age: %d | GPA: %.1f", name, age, gpa
        ));
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Alice", 20, 3.8);
        s.display();
        
        s.setAge(-5);    // Invalid age — rejected
        s.setAge(21);    // Valid — accepted
        s.setGpa(5.0);   // Invalid GPA — rejected
        s.display();
        
        // Can't do: s.age = -5; (private — compile error)
        System.out.println(s.getName()); // Can read via getter
    }
}`,
          exercise: {
            prompt: `Build an encapsulated Product class:
1. Create class Product with private fields: String name, double price
2. Add a constructor that sets both fields (use setters inside constructor)
3. Add getters: getName(), getPrice()
4. Add setter setPrice(double p) that only sets if p > 0, otherwise prints "Invalid price"
5. In Main: create a product, try setting price to -5 (should reject), then to 29.99 (should work), print both times`,
            starterCode: `class Product {
    // Step 1: Private fields
    
    
    
    // Step 2: Constructor
    
    
    // Step 3: Getters
    
    
    
    // Step 4: setPrice with validation
    
}

public class Main {
    public static void main(String[] args) {
        // Step 5: Test Product
        
        
        
    }
}`,
            solution: `class Product {
    private String name;
    private double price;
    
    Product(String name, double price) {
        this.name = name;
        setPrice(price);
    }
    
    public String getName() { return name; }
    public double getPrice() { return price; }
    
    public void setPrice(double p) {
        if (p > 0) {
            price = p;
        } else {
            System.out.println("Invalid price");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Product p = new Product("Laptop", 999.99);
        System.out.println(p.getPrice());
        p.setPrice(-5);
        System.out.println(p.getPrice());
        p.setPrice(29.99);
        System.out.println(p.getPrice());
    }
}`,
            tests: [
              { type: "contains", value: "private String name" },
              { type: "contains", value: "private double price" },
              { type: "contains", value: "if (p > 0)" },
              { type: "contains", value: "getPrice()" }
            ],
            debuggingTip: `Common mistakes:
• "has private access" error? You're trying to access a private field directly. Use the getter method.
• Setter not validating? Make sure your if condition is correct: if (p > 0) not if (p < 0).
• Constructor bypassing validation? Call setPrice() inside the constructor instead of this.price = price directly.
• Getter returns 0 or null? Field was never set — check your constructor and setter are working.
• Forgot public on getter/setter? Without public, they have package-private access which may cause issues.`
          }
        },
        {
          id: "java-phase4-m1-l5",
          title: "Inheritance — Building on Existing Classes",
          explanation: `Inheritance lets you create a new class that automatically gets all the fields 
and methods of an existing class, then adds or changes what it needs. It models 
the "is-a" relationship: a Dog IS AN Animal, a Car IS A Vehicle, a Manager 
IS AN Employee. This eliminates massive code duplication — shared behavior 
lives in the parent class once, and all children benefit automatically. 
The parent (superclass) defines common behavior. Each child (subclass) 
adds its own specializations. Java uses the extends keyword to establish 
this relationship.`,
          concept: `class Child extends Parent {
    // inherits all non-private fields and methods of Parent
    // can add new fields and methods
    // can override parent methods
}
super.methodName() → calls the parent's version of a method
super(args) → calls the parent's constructor (must be FIRST line in child constructor)
A class can only extend ONE parent (no multiple inheritance in Java).
All classes implicitly extend Object if no parent is specified.
Child type is compatible with parent type: Animal a = new Dog(); is valid.`,
          example: `class Animal {
    String name;
    int age;
    
    Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    void eat() {
        System.out.println(name + " is eating.");
    }
    
    void sleep() {
        System.out.println(name + " is sleeping.");
    }
    
    void describe() {
        System.out.println(name + " (age " + age + ")");
    }
}

class Dog extends Animal {
    String breed;
    
    Dog(String name, int age, String breed) {
        super(name, age);  // call Animal's constructor FIRST
        this.breed = breed;
    }
    
    void bark() {
        System.out.println(name + " says: Woof!");
    }
    
    void fetch() {
        System.out.println(name + " fetches the ball!");
    }
}

class Cat extends Animal {
    boolean isIndoor;
    
    Cat(String name, int age, boolean isIndoor) {
        super(name, age);
        this.isIndoor = isIndoor;
    }
    
    void purr() {
        System.out.println(name + " purrs...");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Rex", 3, "Labrador");
        Cat cat = new Cat("Whiskers", 5, true);
        
        // Dog has Animal methods + its own
        dog.describe();  // from Animal
        dog.eat();       // from Animal
        dog.bark();      // Dog-specific
        dog.fetch();     // Dog-specific
        
        // Cat has Animal methods + its own
        cat.describe();  // from Animal
        cat.sleep();     // from Animal
        cat.purr();      // Cat-specific
    }
}`,
          exercise: {
            prompt: `Build an animal hierarchy:
1. Create class Animal with String name and void eat() that prints "[name] is eating"
2. Create class Dog extending Animal with void bark() that prints "[name] says Woof!"
3. In Dog's constructor use super(name) to call Animal's constructor
4. Create class Cat extending Animal with void meow() that prints "[name] says Meow!"
5. In Main: create a Dog and Cat, call eat() on both, bark() on dog, meow() on cat`,
            starterCode: `// Step 1: Animal class
class Animal {
    String name;
    
    Animal(String name) {
        this.name = name;
    }
    
    // eat method
    
}

// Step 2 & 3: Dog extends Animal


// Step 4: Cat extends Animal


public class Main {
    public static void main(String[] args) {
        // Step 5: Create and use objects
        
        
        
        
    }
}`,
            solution: `class Animal {
    String name;
    
    Animal(String name) {
        this.name = name;
    }
    
    void eat() {
        System.out.println(name + " is eating.");
    }
}

class Dog extends Animal {
    Dog(String name) {
        super(name);
    }
    
    void bark() {
        System.out.println(name + " says Woof!");
    }
}

class Cat extends Animal {
    Cat(String name) {
        super(name);
    }
    
    void meow() {
        System.out.println(name + " says Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Rex");
        Cat cat = new Cat("Whiskers");
        dog.eat();
        cat.eat();
        dog.bark();
        cat.meow();
    }
}`,
            tests: [
              { type: "contains", value: "extends Animal" },
              { type: "contains", value: "super(name)" },
              { type: "contains", value: "void bark()" },
              { type: "contains", value: "void meow()" }
            ],
            debuggingTip: `Common mistakes:
• "Implicit super constructor is undefined"? Parent class has a constructor with parameters — call super(args) as first line.
• Trying to access private parent field? Private means only the parent class. Use protected or a getter instead.
• super() not first line? Java requires super() to be the very first statement in a constructor.
• Child doesn't inherit? Check spelling of extends — it's lowercase and must match the exact parent class name.
• Creating Animal object and calling bark()? Animal doesn't have bark() — only Dog does. Use a Dog reference.`
          }
        },
        {
          id: "java-phase4-m1-l6",
          title: "Method Overriding — Customizing Inherited Behavior",
          explanation: `Inheritance lets child classes reuse parent methods. But what if a child needs 
different behavior? A Cat and a Dog both make sounds, but different ones. 
Method overriding lets a child class replace a parent's method with its own 
version. The @Override annotation tells Java you intend to override — if you 
typo the method name, Java will catch it immediately (without @Override, 
a typo silently creates a new method instead). The super keyword calls the 
parent's version when you still need it. This is called runtime polymorphism — 
Java decides WHICH version to call based on the actual object type at runtime.`,
          concept: `@Override              → annotation, tells Java you're intentionally overriding
Same method signature  → same name, same parameters, same return type
super.methodName()     → calls the PARENT's version of the method
Child version completely REPLACES parent's version (unless you call super)
Polymorphism: Animal a = new Dog(); a.speak(); → calls Dog's speak(), not Animal's.
Cannot override: private methods, static methods, final methods.`,
          example: `class Shape {
    String color;
    
    Shape(String color) {
        this.color = color;
    }
    
    double area() {
        return 0;  // default — subclasses should override
    }
    
    void describe() {
        System.out.println("A " + color + " shape with area " + area());
    }
}

class Circle extends Shape {
    double radius;
    
    Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    double area() {
        return Math.PI * radius * radius;
    }
    
    @Override
    void describe() {
        super.describe();  // call parent's version first
        System.out.println("  Radius: " + radius);
    }
}

class Rectangle extends Shape {
    double width, height;
    
    Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    @Override
    double area() {
        return width * height;
    }
}

public class Main {
    public static void main(String[] args) {
        Circle c = new Circle("red", 5.0);
        Rectangle r = new Rectangle("blue", 4.0, 6.0);
        
        System.out.printf("Circle area: %.2f%n", c.area());    // 78.54
        System.out.printf("Rectangle area: %.2f%n", r.area()); // 24.00
        c.describe();
        
        // Polymorphism
        Shape[] shapes = {c, r};
        for (Shape s : shapes) {
            System.out.printf("Area: %.2f%n", s.area()); // calls correct version!
        }
    }
}`,
          exercise: {
            prompt: `Override speak() in subclasses:
1. Create class Animal with void speak() that prints "Some animal sound"
2. Create class Dog extending Animal, @Override speak() to print "Woof!"
3. Create class Cat extending Animal, @Override speak() to print "Meow!"
4. Create class Cow extending Animal, @Override speak() to print "Moo!"
5. In Main: create one of each, store them in Animal[] array, loop through calling speak() on each`,
            starterCode: `class Animal {
    // Step 1: speak method
    
}

// Step 2: Dog with @Override
class Dog extends Animal {
    
}

// Step 3: Cat with @Override
class Cat extends Animal {
    
}

// Step 4: Cow with @Override
class Cow extends Animal {
    
}

public class Main {
    public static void main(String[] args) {
        // Step 5: Array of Animals, loop and call speak()
        
        
        
    }
}`,
            solution: `class Animal {
    void speak() {
        System.out.println("Some animal sound");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Woof!");
    }
}

class Cat extends Animal {
    @Override
    void speak() {
        System.out.println("Meow!");
    }
}

class Cow extends Animal {
    @Override
    void speak() {
        System.out.println("Moo!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal[] animals = {new Dog(), new Cat(), new Cow()};
        for (Animal a : animals) {
            a.speak();
        }
    }
}`,
            tests: [
              { type: "contains", value: "@Override" },
              { type: "contains", value: "extends Animal" },
              { type: "contains", value: "Animal[] animals" }
            ],
            debuggingTip: `Common mistakes:
• @Override causing error? Your method signature doesn't exactly match the parent. Check name, parameters, return type.
• Parent's speak() still running? You didn't override it — check spelling and signature exactly match.
• Animal array only shows parent behavior? Make sure each object is actually a Dog/Cat/Cow, not new Animal().
• Called super.speak() unnecessarily? That runs the parent's version too — only use super when you want both.
• Static method overriding? Static methods can't be overridden — they're hidden, not overridden. Use instance methods.`
          }
        },
        {
          id: "java-phase4-m1-l7",
          title: "Abstract Classes and Interfaces",
          explanation: `Sometimes a parent class exists purely to define structure — it would never 
make sense to create an object of it directly. An abstract class is a blueprint 
that can't be instantiated. It can have abstract methods (no body, just the 
signature) that ALL subclasses must implement. An interface is even more 
abstract — it's a pure contract defining what a class CAN DO. While a class 
can only extend ONE parent, it can implement MULTIPLE interfaces. 
This is how Java achieves the benefits of multiple inheritance safely. 
In real Java: Comparable, Serializable, Runnable are all interfaces you'll 
encounter constantly.`,
          concept: `abstract class Animal {
    abstract void makeSound();   // no body — subclass MUST implement
    void breathe() { ... }      // can have regular methods too
}
class Dog extends Animal {
    @Override void makeSound() { ... }  // REQUIRED
}
interface Flyable {
    void fly();                  // interface method (implicitly public abstract)
}
class Eagle extends Animal implements Flyable {
    void makeSound() { ... }
    public void fly() { ... }   // must implement interface method
}
Cannot create: new Animal() or new Flyable() directly.
Interface methods must be public when implemented.`,
          example: `// Abstract class — partial blueprint
abstract class Vehicle {
    String brand;
    int speed;
    
    Vehicle(String brand) {
        this.brand = brand;
        this.speed = 0;
    }
    
    // Concrete method — shared by all vehicles
    void accelerate(int amount) {
        speed += amount;
        System.out.println(brand + " at " + speed + " mph");
    }
    
    // Abstract — each vehicle type implements differently
    abstract String getFuelType();
    abstract void refuel();
}

// Interface — a capability contract
interface Electric {
    void charge();
    int getBatteryLevel();
}

interface Autonomous {
    void enableAutopilot();
}

// Concrete class implementing both
class Tesla extends Vehicle implements Electric, Autonomous {
    int batteryLevel;
    
    Tesla(String brand, int batteryLevel) {
        super(brand);
        this.batteryLevel = batteryLevel;
    }
    
    @Override
    public String getFuelType() { return "Electric"; }
    
    @Override
    public void refuel() { charge(); }  // reuse charge for refuel
    
    @Override
    public void charge() {
        batteryLevel = 100;
        System.out.println(brand + " is fully charged.");
    }
    
    @Override
    public int getBatteryLevel() { return batteryLevel; }
    
    @Override
    public void enableAutopilot() {
        System.out.println(brand + " autopilot engaged.");
    }
}

public class Main {
    public static void main(String[] args) {
        Tesla t = new Tesla("Tesla Model 3", 80);
        t.accelerate(60);
        t.charge();
        t.enableAutopilot();
        System.out.println("Fuel: " + t.getFuelType());
    }
}`,
          exercise: {
            prompt: `Build an instrument hierarchy:
1. Create interface Playable with void play()
2. Create abstract class Instrument with String name, constructor, and abstract void makeSound()
3. Create class Guitar extending Instrument implementing Playable:
   - makeSound() prints "[name] goes twang!"
   - play() prints "Strumming [name]"
4. Create class Piano extending Instrument implementing Playable:
   - makeSound() prints "[name] goes ding!"
   - play() prints "Playing keys on [name]"
5. In Main: create both, call makeSound() and play() on each`,
            starterCode: `// Step 1: Playable interface
interface Playable {
    
}

// Step 2: Abstract Instrument class
abstract class Instrument {
    String name;
    
    Instrument(String name) {
        this.name = name;
    }
    
    // abstract makeSound
    
}

// Step 3: Guitar
class Guitar extends Instrument implements Playable {
    Guitar(String name) { super(name); }
    
    
}

// Step 4: Piano
class Piano extends Instrument implements Playable {
    Piano(String name) { super(name); }
    
    
}

public class Main {
    public static void main(String[] args) {
        // Step 5: Test both instruments
        
        
        
    }
}`,
            solution: `interface Playable {
    void play();
}

abstract class Instrument {
    String name;
    
    Instrument(String name) {
        this.name = name;
    }
    
    abstract void makeSound();
}

class Guitar extends Instrument implements Playable {
    Guitar(String name) { super(name); }
    
    @Override
    public void makeSound() {
        System.out.println(name + " goes twang!");
    }
    
    @Override
    public void play() {
        System.out.println("Strumming " + name);
    }
}

class Piano extends Instrument implements Playable {
    Piano(String name) { super(name); }
    
    @Override
    public void makeSound() {
        System.out.println(name + " goes ding!");
    }
    
    @Override
    public void play() {
        System.out.println("Playing keys on " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Guitar g = new Guitar("Fender");
        Piano p = new Piano("Steinway");
        g.makeSound();
        g.play();
        p.makeSound();
        p.play();
    }
}`,
            tests: [
              { type: "contains", value: "implements Playable" },
              { type: "contains", value: "abstract void makeSound()" },
              { type: "contains", value: "abstract class Instrument" }
            ],
            debuggingTip: `Common mistakes:
• "Class must implement abstract method"? You forgot to implement one of the abstract/interface methods.
• Interface method not public? Interface methods must be public when implemented in the class.
• Trying to instantiate abstract class? new Instrument() fails — only concrete subclasses can be instantiated.
• Forgot @Override? It's technically optional but strongly recommended — catches typos immediately.
• Multiple interfaces need commas: implements Playable, Serializable — not implements Playable implements Serializable.`
          }
        },
        {
          id: "java-phase4-m1-l8",
          title: "Capstone: Animal Hierarchy",
          explanation: `This capstone brings all OOP concepts together: abstract classes, interfaces, 
inheritance, method overriding, constructors, and encapsulation. You'll design 
a complete class hierarchy from scratch — the kind of design work that real 
Java developers do when architecting systems. The goal is not just to make 
code that works, but to make code where the structure makes sense: abstract 
base classes define what all animals share, interfaces define special 
capabilities some animals have, and concrete classes provide the specific 
implementations.`,
          concept: `Good OOP design asks: "What do all these things have in common?" (abstract class)
and "What special capabilities do some of them have?" (interface).
Use constructor chaining with super() for clean initialization.
@Override ensures you're actually replacing the parent method.
Polymorphism: store different subtypes in the parent type and call methods uniformly.`,
          example: `// Full hierarchy design
abstract class Animal {
    private String name;
    private int age;
    
    Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    
    abstract void makeSound();
    
    void describe() {
        System.out.println(getName() + " (age " + getAge() + ")");
    }
}

interface Trainable {
    void doTrick();
    default void showTrainable() {
        System.out.println("This animal can be trained!");
    }
}

interface Aquatic {
    void swim();
}

class Dolphin extends Animal implements Trainable, Aquatic {
    Dolphin(String name, int age) {
        super(name, age);
    }
    
    @Override
    public void makeSound() {
        System.out.println(getName() + " clicks!");
    }
    
    @Override
    public void doTrick() {
        System.out.println(getName() + " jumps through the hoop!");
    }
    
    @Override
    public void swim() {
        System.out.println(getName() + " glides through water.");
    }
}`,
          exercise: {
            prompt: `Design the complete animal hierarchy:
1. Create abstract class Animal with private String name, constructor, getName(), abstract void makeSound(), and void describe()
2. Create interface Trainable with void doTrick()
3. Create class Dolphin extending Animal implementing Trainable:
   - makeSound() prints "[name] clicks!"
   - doTrick() prints "[name] jumps through the hoop!"
4. Create class Lion extending Animal:
   - makeSound() prints "[name] roars!"
5. In Main: create a Dolphin and Lion, store in Animal[], loop calling describe() and makeSound(). Call doTrick() on the Dolphin directly.`,
            starterCode: `// Step 1: Abstract Animal
abstract class Animal {
    private String name;
    
    Animal(String name) {
        this.name = name;
    }
    
    public String getName() { return name; }
    
    // abstract makeSound
    
    
    // describe method
    
}

// Step 2: Trainable interface


// Step 3: Dolphin


// Step 4: Lion


public class Main {
    public static void main(String[] args) {
        // Step 5: Array and loop
        
        
        
        
    }
}`,
            solution: `abstract class Animal {
    private String name;
    
    Animal(String name) {
        this.name = name;
    }
    
    public String getName() { return name; }
    
    abstract void makeSound();
    
    void describe() {
        System.out.println("Animal: " + getName());
    }
}

interface Trainable {
    void doTrick();
}

class Dolphin extends Animal implements Trainable {
    Dolphin(String name) { super(name); }
    
    @Override
    public void makeSound() {
        System.out.println(getName() + " clicks!");
    }
    
    @Override
    public void doTrick() {
        System.out.println(getName() + " jumps through the hoop!");
    }
}

class Lion extends Animal {
    Lion(String name) { super(name); }
    
    @Override
    public void makeSound() {
        System.out.println(getName() + " roars!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dolphin d = new Dolphin("Flipper");
        Lion l = new Lion("Simba");
        Animal[] animals = {d, l};
        for (Animal a : animals) {
            a.describe();
            a.makeSound();
        }
        d.doTrick();
    }
}`,
            tests: [
              { type: "contains", value: "abstract class Animal" },
              { type: "contains", value: "implements Trainable" },
              { type: "contains", value: "super(name)" },
              { type: "contains", value: "Animal[] animals" }
            ],
            debuggingTip: `Common mistakes:
• Can't call doTrick() through Animal reference? Animal doesn't have doTrick() — cast: ((Trainable) animal).doTrick() or use Dolphin reference.
• Abstract method error in Lion? If Animal has abstract makeSound(), Lion MUST override it.
• Private name not accessible in subclass? Use getName() getter — private means only the declaring class.
• Array only holds Animal type — to call Dolphin-specific methods, cast: ((Dolphin) animals[0]).doTrick()
• Forgetting @Override? Without it, a typo creates a new method silently. Always use @Override.`
          }
        }
      ]
    },
    {
      id: "java-phase5-m1",
      title: "Phase 5 — Intermediate Java",
      duration: "2.5 hours",
      lessons: [
        {
          id: "java-phase5-m1-l1",
          title: "Exception Handling — try/catch/finally",
          explanation: `Errors are inevitable in real programs. Users type text where numbers are expected. 
Files don't exist. Network connections drop. Division by zero occurs. Without 
exception handling, any of these crashes your entire program with an ugly stack 
trace. Java's try/catch block lets you anticipate errors, handle them gracefully, 
and keep the program running. The finally block runs no matter what — 
error or not — making it perfect for cleanup (closing files, releasing 
connections). Understanding exception handling is the difference between 
toy programs and production-ready software.`,
          concept: `try {
    // code that might throw an exception
} catch (ExceptionType e) {
    // runs ONLY if that exception occurs
    // e.getMessage() gives the error description
} finally {
    // ALWAYS runs (error or not) — use for cleanup
}
Multiple catch blocks allowed — most specific exceptions first.
Exception hierarchy: Throwable → Error / Exception → RuntimeException → specific types.
Checked exceptions must be caught or declared (IOException, SQLException).
Unchecked (RuntimeException) don't have to be caught (NullPointerException, etc.).`,
          example: `public class ExceptionDemo {
    public static void main(String[] args) {
        // Basic try/catch
        try {
            int result = 10 / 0;  // ArithmeticException
            System.out.println(result);  // never reached
        } catch (ArithmeticException e) {
            System.out.println("Math error: " + e.getMessage());
        }
        System.out.println("Program continues after catch.");
        
        // Multiple catch blocks
        try {
            String text = null;
            System.out.println(text.length()); // NullPointerException
        } catch (NullPointerException e) {
            System.out.println("Null value: " + e.getMessage());
        } catch (Exception e) {
            // Catches any other exception (general catch-all)
            System.out.println("Unexpected error: " + e.getMessage());
        }
        
        // try/catch/finally
        try {
            int[] arr = new int[3];
            arr[10] = 5;  // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array error: " + e.getMessage());
        } finally {
            System.out.println("Finally always runs — good for cleanup!");
        }
    }
}`,
          exercise: {
            prompt: `Practice exception handling:
1. Create class SafeDivider
2. Write a try block that divides 10 by 0
3. Catch ArithmeticException, print "Math error!"
4. Add a finally block that prints "Calculation attempt complete."
5. After the try/catch/finally, print "Program still running."
6. Bonus: add a second try/catch that parses "not_a_number" with Integer.parseInt() and catches NumberFormatException`,
            starterCode: `public class SafeDivider {
    public static void main(String[] args) {
        // Step 2-4: try/catch/finally for division
        try {
            
        } catch (ArithmeticException e) {
            
        } finally {
            
        }
        
        // Step 5: Print after the block
        
        
        // Step 6 (Bonus): Parse invalid String
        
    }
}`,
            solution: `public class SafeDivider {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Math error!");
        } finally {
            System.out.println("Calculation attempt complete.");
        }
        System.out.println("Program still running.");
        try {
            int num = Integer.parseInt("not_a_number");
        } catch (NumberFormatException e) {
            System.out.println("Not a valid number: " + e.getMessage());
        }
    }
}`,
            tests: [
              { type: "contains", value: "catch (ArithmeticException" },
              { type: "contains", value: "finally" },
              { type: "contains", value: "Math error!" }
            ],
            debuggingTip: `Common mistakes:
• Catch block not running? The thrown exception type must match your catch type (or be a subclass of it).
• Code after throw in try still runs? It doesn't — exception jumps immediately to catch block.
• Finally running before catch? No — order is: try → catch (if error) → finally.
• Catching Exception (general) before specific types? General catch must come LAST — most specific first.
• e.getMessage() returns null? Some exceptions have no message — print e.toString() instead for full info.`
          }
        },
        {
          id: "java-phase5-m1-l2",
          title: "Specific Exceptions and Custom Exceptions",
          explanation: `Java has dozens of built-in exception types, each representing a specific category 
of problem. Knowing which exception to catch (and which to create) makes your 
error handling precise and meaningful. You can also create your own custom 
exceptions — classes that extend Exception — which is essential for domain-specific 
errors. A banking app might throw InsufficientFundsException. A reservation 
system might throw NoAvailabilityException. Custom exceptions make error 
handling in large codebases clear, descriptive, and easy to handle precisely.`,
          concept: `Common exceptions: ArithmeticException, NullPointerException, NumberFormatException,
  ArrayIndexOutOfBoundsException, ClassCastException, IllegalArgumentException.
Custom exception: class MyException extends Exception { MyException(String msg) { super(msg); } }
throw new MyException("message") → manually throw an exception.
throws keyword in method signature declares checked exceptions.
try-with-resources: try (Resource r = new Resource()) { } → auto-closes resource.`,
          example: `// Custom exception
class InsufficientFundsException extends Exception {
    double shortfall;
    
    InsufficientFundsException(double shortfall) {
        super("Insufficient funds. Short by $" + shortfall);
        this.shortfall = shortfall;
    }
}

class BankAccount {
    private double balance;
    
    BankAccount(double balance) {
        this.balance = balance;
    }
    
    void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(amount - balance);
        }
        balance -= amount;
        System.out.printf("Withdrew $%.2f. Balance: $%.2f%n", amount, balance);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(100.00);
        
        try {
            account.withdraw(50);    // succeeds
            account.withdraw(200);   // throws InsufficientFundsException
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        // NumberFormatException from parsing
        String[] inputs = {"42", "hello", "100", ""};
        for (String input : inputs) {
            try {
                int value = Integer.parseInt(input);
                System.out.println("Parsed: " + value);
            } catch (NumberFormatException e) {
                System.out.println("Invalid input: '" + input + "'");
            }
        }
    }
}`,
          exercise: {
            prompt: `Practice specific exceptions:
1. Create class ParseDemo
2. Try to parse "abc" with Integer.parseInt() — catch NumberFormatException, print "Not a valid number!"
3. Try to call .length() on a null String — catch NullPointerException, print "Null value encountered!"
4. Bonus: create a simple custom exception class AgeException extends Exception
5. Write a method checkAge(int age) that throws AgeException if age < 0 or age > 150
6. Call checkAge(-1) in a try/catch and print the exception message`,
            starterCode: `// Step 4 (Bonus): Custom exception class


public class ParseDemo {
    // Step 5 (Bonus): checkAge method
    
    
    public static void main(String[] args) {
        // Step 2: Parse "abc"
        try {
            
        } catch (NumberFormatException e) {
            
        }
        
        // Step 3: Null string
        try {
            
        } catch (NullPointerException e) {
            
        }
        
        // Step 6 (Bonus): Test checkAge
        
    }
}`,
            solution: `class AgeException extends Exception {
    AgeException(String message) {
        super(message);
    }
}

public class ParseDemo {

    static void checkAge(int age) throws AgeException {
        if (age < 0 || age > 150) {
            throw new AgeException("Invalid age: " + age);
        }
        System.out.println("Valid age: " + age);
    }
    
    public static void main(String[] args) {
        try {
            int num = Integer.parseInt("abc");
        } catch (NumberFormatException e) {
            System.out.println("Not a valid number!");
        }
        try {
            String s = null;
            System.out.println(s.length());
        } catch (NullPointerException e) {
            System.out.println("Null value encountered!");
        }
        try {
            checkAge(-1);
        } catch (AgeException e) {
            System.out.println(e.getMessage());
        }
    }
}`,
            tests: [
              { type: "contains", value: "catch (NumberFormatException" },
              { type: "contains", value: "catch (NullPointerException" }
            ],
            debuggingTip: `Common mistakes:
• Custom exception missing constructor? Extend Exception and call super(message) to pass the message through.
• "Unhandled exception" error? A method that throws a checked exception must be called inside try/catch.
• throw vs throws? throw creates and throws an exception instance. throws declares a method might throw one.
• Catching Exception too broadly? You'll hide bugs — always catch the most specific type you can.
• getMessage() returns null for custom exception? Make sure you call super(message) in the constructor.`
          }
        },
        {
          id: "java-phase5-m1-l3",
          title: "Collections — List, Set, and Queue",
          explanation: `Java's Collections Framework provides ready-made data structures that solve 
common programming problems. You've used ArrayList (ordered, allows duplicates). 
But different situations call for different structures. Set enforces uniqueness — 
perfect for tracking which items you've seen or which users have been processed. 
Queue models first-in-first-out order — perfect for task queues, print spoolers, 
and breadth-first search. Knowing which collection to pick is a key skill for 
writing efficient, correct Java code.`,
          concept: `List<T>  → ordered, allows duplicates (ArrayList, LinkedList)
Set<T>   → unordered, NO duplicates (HashSet, TreeSet — TreeSet is sorted)
Queue<T> → FIFO order (LinkedList implements Queue, ArrayDeque)
Map<K,V> → key-value pairs, unique keys (HashMap, TreeMap — TreeMap is sorted)
Collections.sort(list) → sorts a List
Collections.unmodifiableList(list) → read-only wrapper
Use the interface type on the left: List<String> list = new ArrayList<>()`,
          example: `import java.util.*;

public class CollectionsDemo {
    public static void main(String[] args) {
        // List — ordered, duplicates OK
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Alice");  // duplicate allowed
        System.out.println(names);        // [Alice, Bob, Alice]
        System.out.println(names.size()); // 3
        
        // Set — no duplicates, unordered
        Set<String> uniqueNames = new HashSet<>(names);
        System.out.println(uniqueNames);  // [Alice, Bob] — order varies
        System.out.println(uniqueNames.size()); // 2
        
        // TreeSet — no duplicates, SORTED
        Set<Integer> numbers = new TreeSet<>();
        numbers.add(5); numbers.add(1); numbers.add(3); numbers.add(1);
        System.out.println(numbers);  // [1, 3, 5] — sorted, no duplicate 1
        
        // Queue — FIFO (first in, first out)
        Queue<String> tasks = new LinkedList<>();
        tasks.offer("Task A");
        tasks.offer("Task B");
        tasks.offer("Task C");
        System.out.println(tasks.peek());   // Task A (look without removing)
        System.out.println(tasks.poll());   // Task A (remove and return)
        System.out.println(tasks);          // [Task B, Task C]
        
        // Sorting a list
        List<Integer> nums = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5, 9));
        Collections.sort(nums);
        System.out.println(nums);  // [1, 1, 3, 4, 5, 9]
    }
}`,
          exercise: {
            prompt: `Practice different collection types:
1. Create class CollectionFun
2. Create List<Integer> numbers with values {1, 2, 2, 3, 3, 3}
3. Create Set<Integer> unique from the same values — print both and note the difference
4. Print the size of each — list keeps duplicates, set removes them
5. Create a Queue<String> and add "Print job 1", "Print job 2", "Print job 3"
6. Process the queue: loop while it's not empty, poll() and print each item`,
            starterCode: `import java.util.*;

public class CollectionFun {
    public static void main(String[] args) {
        // Step 2: List with duplicates
        
        
        // Step 3: Set from same values
        
        
        // Step 4: Print both and their sizes
        
        
        
        
        // Step 5: Queue of print jobs
        
        
        
        
        // Step 6: Process the queue
        
    }
}`,
            solution: `import java.util.*;

public class CollectionFun {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 2, 3, 3, 3));
        Set<Integer> unique = new HashSet<>(numbers);
        System.out.println(numbers);
        System.out.println(unique);
        System.out.println("List size: " + numbers.size());
        System.out.println("Set size: " + unique.size());
        Queue<String> printQueue = new LinkedList<>();
        printQueue.offer("Print job 1");
        printQueue.offer("Print job 2");
        printQueue.offer("Print job 3");
        while (!printQueue.isEmpty()) {
            System.out.println("Processing: " + printQueue.poll());
        }
    }
}`,
            tests: [
              { type: "contains", value: "HashSet" },
              { type: "contains", value: "Queue<String>" },
              { type: "contains", value: "printQueue.poll()" }
            ],
            debuggingTip: `Common mistakes:
• HashSet order is unpredictable — don't rely on it. Use TreeSet for sorted order.
• Queue .poll() vs .remove()? poll() returns null if empty, remove() throws exception. Use poll() for safety.
• List<int> not working? Use List<Integer> — generics require object types, not primitives.
• Arrays.asList() returns fixed-size list — can't add/remove. Wrap in new ArrayList<>(Arrays.asList(...)) to make it modifiable.
• Set won't add duplicate? Correct behavior — that's the whole point of a Set.`
          }
        },
        {
          id: "java-phase5-m1-l4",
          title: "Lambdas and Streams — Modern Java Style",
          explanation: `Since Java 8, you can write much more concise code using lambdas (short anonymous 
functions) and the Stream API (a powerful way to process collections). Instead 
of writing a loop to filter a list and collect results into a new list, you can 
write it in one readable line. This is the functional programming style, and 
it's now the dominant way professional Java developers work with collections. 
Streams don't modify the original collection — they create a pipeline of 
transformations that produce a new result. Learning lambdas and streams will 
make your Java code dramatically cleaner.`,
          concept: `Lambda: (parameters) -> expression or (parameters) -> { statements }
list.forEach(n -> System.out.println(n))  → lambda as action
list.stream()              → creates a Stream from the collection
.filter(n -> n > 3)        → keep only matching elements
.map(n -> n * 2)           → transform each element
.sorted()                  → sort the stream
.collect(Collectors.toList()) → gather results back into a List
.count()                   → count matching elements
.findFirst()               → get first element (returns Optional)
Method reference: System.out::println is shorthand for n -> System.out.println(n)`,
          example: `import java.util.*;
import java.util.stream.*;

public class StreamDemo {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // forEach with lambda
        numbers.forEach(n -> System.out.print(n + " "));
        System.out.println();
        
        // filter — keep only even numbers
        List<Integer> evens = numbers.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());
        System.out.println("Evens: " + evens);  // [2, 4, 6, 8, 10]
        
        // map — square each number
        List<Integer> squares = numbers.stream()
            .map(n -> n * n)
            .collect(Collectors.toList());
        System.out.println("Squares: " + squares);
        
        // filter + map chained
        List<Integer> bigSquares = numbers.stream()
            .filter(n -> n > 5)
            .map(n -> n * n)
            .collect(Collectors.toList());
        System.out.println("Big squares: " + bigSquares); // [36, 49, 64, 81, 100]
        
        // Aggregate operations
        int sum = numbers.stream()
            .mapToInt(Integer::intValue)
            .sum();
        System.out.println("Sum: " + sum);  // 55
        
        long count = numbers.stream()
            .filter(n -> n > 5)
            .count();
        System.out.println("Numbers > 5: " + count);  // 5
        
        // String streams
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Anna");
        List<String> aNames = names.stream()
            .filter(name -> name.startsWith("A"))
            .sorted()
            .collect(Collectors.toList());
        System.out.println("Names starting with A: " + aNames); // [Alice, Anna]
        
        // Method reference shorthand
        names.forEach(System.out::println);
    }
}`,
          exercise: {
            prompt: `Practice lambdas and streams:
1. Create class LambdaFun with List<Integer> nums = Arrays.asList(1,2,3,4,5)
2. Use forEach with a lambda to print each number squared
3. Use stream().filter() to keep only numbers > 3, collect to list, and print it
4. Use stream().map() to double each number, collect to list, and print it
5. Use stream().filter(n -> n % 2 == 0).count() to count even numbers and print it
6. Bonus: use stream().mapToInt().sum() to get the total sum`,
            starterCode: `import java.util.*;
import java.util.stream.*;

public class LambdaFun {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);
        
        // Step 2: forEach - print squares
        
        
        // Step 3: filter > 3 and collect
        
        
        // Step 4: map to double each
        
        
        // Step 5: count even numbers
        
        
        // Step 6 (Bonus): sum all numbers
        
    }
}`,
            solution: `import java.util.*;
import java.util.stream.*;

public class LambdaFun {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);
        nums.forEach(n -> System.out.println(n * n));
        List<Integer> filtered = nums.stream()
            .filter(n -> n > 3)
            .collect(Collectors.toList());
        System.out.println(filtered);
        List<Integer> doubled = nums.stream()
            .map(n -> n * 2)
            .collect(Collectors.toList());
        System.out.println(doubled);
        long evenCount = nums.stream()
            .filter(n -> n % 2 == 0)
            .count();
        System.out.println("Even count: " + evenCount);
        int sum = nums.stream()
            .mapToInt(Integer::intValue)
            .sum();
        System.out.println("Sum: " + sum);
    }
}`,
            tests: [
              { type: "contains", value: "->" },
              { type: "contains", value: ".filter(" },
              { type: "contains", value: ".map(" },
              { type: "contains", value: ".stream()" }
            ],
            debuggingTip: `Common mistakes:
• Forgot to collect()? .filter() and .map() return Streams, not Lists. Add .collect(Collectors.toList()).
• Import missing? Add import java.util.stream.Collectors; and import java.util.*;
• Lambda syntax error? The arrow -> goes between parameters and body: n -> n * 2 not n => n * 2.
• Modifying original list with stream? Streams don't modify the source — always collect to a new variable.
• .count() returns long not int? Assign to long count = ... not int count = ...`
          }
        },
        {
          id: "java-phase5-m1-l5",
          title: "File I/O — Reading and Writing Files",
          explanation: `Most real applications need to store data between runs — read a config file on 
startup, write logs, load user data, save progress. Java's I/O system has 
evolved significantly. The modern java.nio.file package (since Java 7) is 
simpler and more powerful than the old java.io approach. The try-with-resources 
syntax automatically closes files even if an exception occurs — preventing 
resource leaks that can crash long-running programs. Understanding file I/O 
unlocks building programs that persist and share data.`,
          concept: `try (ResourceType r = new Resource()) { } → auto-closes resource after block
Old style: BufferedReader br = new BufferedReader(new FileReader("file.txt"))
Modern: Files.readAllLines(Path.of("file.txt")) → reads entire file as List<String>
Files.writeString(Path.of("file.txt"), content) → write String to file
Files.write(path, lines) → write List of Strings (one per line)
IOException must be caught — file might not exist, can't be read, etc.
Paths.get() or Path.of() creates a Path object from a String filename.`,
          example: `import java.io.*;
import java.nio.file.*;
import java.util.*;

public class FileDemo {
    public static void main(String[] args) {
        // WRITING a file (modern style)
        try {
            String content = "Line 1: Hello\nLine 2: World\nLine 3: Java";
            Files.writeString(Path.of("output.txt"), content);
            System.out.println("File written successfully.");
        } catch (IOException e) {
            System.out.println("Write error: " + e.getMessage());
        }
        
        // READING a file (modern style — all lines)
        try {
            List<String> lines = Files.readAllLines(Path.of("output.txt"));
            for (String line : lines) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("File not found: " + e.getMessage());
        }
        
        // READING a file (classic BufferedReader — line by line)
        try (BufferedReader reader = new BufferedReader(
                new FileReader("output.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println("Read: " + line);
            }
        } catch (IOException e) {
            System.out.println("Read error: " + e.getMessage());
        }
        // File automatically closed by try-with-resources
    }
}`,
          exercise: {
            prompt: `Practice file reading:
1. Create class FileReaderDemo
2. Write a try-with-resources block using BufferedReader and FileReader for "data.txt"
3. Read the first line using br.readLine() and print it
4. Catch IOException and print "File error: " + the exception message
5. After the try/catch, print "File operation complete." (always runs)
6. Bonus: use Files.readAllLines() in a separate try block and print all lines`,
            starterCode: `import java.io.*;
import java.nio.file.*;
import java.util.*;

public class FileReaderDemo {
    public static void main(String[] args) {
        // Step 2-4: Try-with-resources BufferedReader
        try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
            // Step 3: Read and print first line
            
        } catch (IOException e) {
            // Step 4: Print error
            
        }
        
        // Step 5: Always print this
        
        
        // Step 6 (Bonus): Files.readAllLines
        
    }
}`,
            solution: `import java.io.*;
import java.nio.file.*;
import java.util.*;

public class FileReaderDemo {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
            System.out.println(br.readLine());
        } catch (IOException e) {
            System.out.println("File error: " + e.getMessage());
        }
        System.out.println("File operation complete.");
        try {
            List<String> lines = Files.readAllLines(Path.of("data.txt"));
            for (String line : lines) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("File error: " + e.getMessage());
        }
    }
}`,
            tests: [
              { type: "contains", value: "new FileReader" },
              { type: "contains", value: "catch (IOException" },
              { type: "contains", value: "BufferedReader" }
            ],
            debuggingTip: `Common mistakes:
• FileNotFoundException? The file doesn't exist at the path you specified. Check the filename and location.
• Forgot to close the reader? Use try-with-resources — it automatically closes for you.
• readLine() returns null at end of file — always check: while ((line = reader.readLine()) != null).
• Path separator issues? Use / in path strings (works on all platforms) or Path.of() which handles it automatically.
• IOException must be caught — it's a checked exception. Java won't compile if you don't catch or declare it.`
          }
        }
      ]
    }
  ]
};