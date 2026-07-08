// C# curriculum data - all levels and lessons
export const csharpCurriculum = {
  label: "C#",
  modules: [
    {
      id: "csharp-level0-m1",
      title: "Level 0 - Hello C#",
      duration: "30 min",
      lessons: [
        {
          id: "csharp-level0-m1-l1",
          title: "Your First C# Program",
          explanation: `C# programs usually start inside a Main method. Main is the entry point: when the program runs, execution begins there. Console.WriteLine writes text to the terminal and adds a newline, making it the first tool you use to see what your code is doing.`,
          concept: `using System; - Imports the System namespace
class Program - Defines a class named Program
static void Main() - Entry point of the app
Console.WriteLine("text"); - Prints text with a newline`,
          example: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, C#!");
        Console.WriteLine("I am learning to code.");
    }
}`,
          exercise: {
            prompt: `Create a C# program that prints exactly "I am ready to code in C#!" using Console.WriteLine.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // Print your message here
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("I am ready to code in C#!");
    }
}`,
            tests: [
              { type: "contains", value: "using System;" },
              { type: "contains", value: "class Program" },
              { type: "contains", value: "static void Main()" },
              { type: "contains", value: "Console.WriteLine" },
              { type: "contains", value: "I am ready to code in C#!" },
            ],
            debuggingTip: `C# is case-sensitive. Console.WriteLine must use capital C, W, and L, and each statement needs a semicolon.`,
          },
        },
        {
          id: "csharp-level0-m1-l2",
          title: "WriteLine vs Write",
          explanation: `Console.WriteLine prints a value and then moves to the next line. Console.Write prints a value but keeps the cursor on the same line. This difference matters when you want to build one line from multiple pieces.`,
          concept: `Console.WriteLine("A"); - Prints A and adds a newline
Console.Write("A"); - Prints A without a newline
Multiple Write calls can build one line`,
          example: `using System;

class Program
{
    static void Main()
    {
        Console.Write("C# ");
        Console.Write("is ");
        Console.WriteLine("powerful.");
    }
}`,
          exercise: {
            prompt: `Use two Console.Write calls to print "C# is " and then "fun!" on the same line.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // First Write call
        // Second Write call
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        Console.Write("C# is ");
        Console.Write("fun!");
    }
}`,
            tests: [
              { type: "contains", value: "Console.Write" },
              { type: "contains", value: "C# is" },
              { type: "contains", value: "fun!" },
            ],
            debuggingTip: `Use Console.Write for same-line output. Console.WriteLine automatically moves to a new line.`,
          },
        },
        {
          id: "csharp-level0-m1-l3",
          title: "Comments and Readable Code",
          explanation: `Comments are notes for humans. C# ignores comments when running your program, but future readers use them to understand your intent. Single-line comments start with //, and block comments use /* and */.`,
          concept: `// This is a single-line comment
/* This is a block comment */
Comments explain why code exists
Good comments clarify intent, not obvious syntax`,
          example: `using System;

class Program
{
    static void Main()
    {
        // Show the app status
        Console.WriteLine("Ready");
    }
}`,
          exercise: {
            prompt: `Add a single-line comment that says "Print launch status", then print "Launch ready".`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // Add your comment
        // Print the message
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        // Print launch status
        Console.WriteLine("Launch ready");
    }
}`,
            tests: [
              { type: "contains", value: "// Print launch status" },
              { type: "contains", value: "Console.WriteLine" },
              { type: "contains", value: "Launch ready" },
            ],
            debuggingTip: `A // comment only lasts until the end of that line. Put the code you want to run on a separate line.`,
          },
        },
        {
          id: "csharp-level0-m1-l4",
          title: "Printing Numbers and Expressions",
          explanation: `Console.WriteLine can print text, numbers, booleans, and calculated expressions. If you pass 10 + 5 without quotes, C# calculates the result first and prints 15. If you put it in quotes, it prints the literal text.`,
          concept: `Console.WriteLine(42); - Prints a number
Console.WriteLine(10 + 5); - Prints 15
Console.WriteLine("10 + 5"); - Prints the text 10 + 5`,
          example: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine(2026);
        Console.WriteLine(8 * 7);
        Console.WriteLine(100 / 4);
    }
}`,
          exercise: {
            prompt: `Print the number 120, then print the result of 30 * 4 as a calculation.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // Print 120
        // Print 30 * 4
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine(120);
        Console.WriteLine(30 * 4);
    }
}`,
            tests: [
              { type: "contains", value: "Console.WriteLine(120)" },
              { type: "contains", value: "30 * 4" },
            ],
            debuggingTip: `Do not wrap the math expression in quotes if you want C# to calculate it.`,
          },
        },
        {
          id: "csharp-level0-m1-l5",
          title: "String Interpolation",
          explanation: `String interpolation lets you place variables directly inside text. Start the string with $ and put variable names or expressions inside braces. This is cleaner than building messages with lots of plus signs.`,
          concept: `$"Hello {name}" - Interpolated string
{variable} - Placeholder for a value
Expressions can also go inside braces`,
          example: `using System;

class Program
{
    static void Main()
    {
        string name = "Maya";
        int score = 98;
        Console.WriteLine($"Player {name} scored {score}");
    }
}`,
          exercise: {
            prompt: `Create name set to "Alex" and points set to 42. Print "Alex has 42 points" using string interpolation.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // Create variables
        // Print interpolated message
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        string name = "Alex";
        int points = 42;
        Console.WriteLine($"{name} has {points} points");
    }
}`,
            tests: [
              { type: "contains", value: "string name" },
              { type: "contains", value: "int points" },
              { type: "contains", value: "$\"" },
              { type: "contains", value: "{name}" },
              { type: "contains", value: "{points}" },
            ],
            debuggingTip: `The $ goes immediately before the opening quote. Without it, C# prints the braces literally.`,
          },
        },
      ],
    },
    {
      id: "csharp-level1-m1",
      title: "Level 1 - Variables and Types",
      duration: "45 min",
      lessons: [
        {
          id: "csharp-level1-m1-l1",
          title: "Strongly Typed Variables",
          explanation: `C# is statically typed, which means each variable has a type known at compile time. Once a variable is an int, it holds integer values. This helps the compiler catch mistakes before your program runs.`,
          concept: `int count = 5; - Whole number
double price = 9.99; - Decimal number
string name = "Ava"; - Text
bool active = true; - True or false`,
          example: `using System;

class Program
{
    static void Main()
    {
        string language = "C#";
        int version = 12;
        bool isModern = true;
        Console.WriteLine($"{language} {version}: {isModern}");
    }
}`,
          exercise: {
            prompt: `Declare a string called course set to "C#", an int called lessons set to 35, and a bool called enrolled set to true.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // Declare variables here
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        string course = "C#";
        int lessons = 35;
        bool enrolled = true;
    }
}`,
            tests: [
              { type: "contains", value: "string course" },
              { type: "contains", value: "\"C#\"" },
              { type: "contains", value: "int lessons" },
              { type: "contains", value: "35" },
              { type: "contains", value: "bool enrolled" },
              { type: "contains", value: "true" },
            ],
            debuggingTip: `Use lowercase type names like string, int, and bool. Also remember true and false are lowercase.`,
          },
        },
        {
          id: "csharp-level1-m1-l2",
          title: "Type Inference with var",
          explanation: `The var keyword asks the compiler to infer the variable type from the value on the right side. The variable is still strongly typed; var score = 10 creates an int, and you cannot later store text in it.`,
          concept: `var name = "Kai"; - Compiler infers string
var score = 10; - Compiler infers int
var requires an initial value
The type cannot change later`,
          example: `using System;

class Program
{
    static void Main()
    {
        var city = "Lisbon";
        var visits = 3;
        Console.WriteLine($"{city}: {visits}");
    }
}`,
          exercise: {
            prompt: `Use var to create title set to "Developer" and level set to 2.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // Use var twice
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        var title = "Developer";
        var level = 2;
    }
}`,
            tests: [
              { type: "contains", value: "var title" },
              { type: "contains", value: "\"Developer\"" },
              { type: "contains", value: "var level" },
              { type: "contains", value: "2" },
            ],
            debuggingTip: `var is not dynamic. C# decides the type once, based on the initial value.`,
          },
        },
        {
          id: "csharp-level1-m1-l3",
          title: "Working with Strings",
          explanation: `Strings hold text and come with useful methods and properties. Length counts characters, ToUpper creates an uppercase version, and Contains checks whether a substring appears inside the text.`,
          concept: `text.Length - Number of characters
text.ToUpper() - Uppercase copy
text.Contains("x") - true if text contains x
Strings are immutable: methods return new strings`,
          example: `using System;

class Program
{
    static void Main()
    {
        string word = "fluent";
        Console.WriteLine(word.Length);
        Console.WriteLine(word.ToUpper());
        Console.WriteLine(word.Contains("u"));
    }
}`,
          exercise: {
            prompt: `Create a string called language set to "csharp". Print its Length and its uppercase version.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // Work with the string
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        string language = "csharp";
        Console.WriteLine(language.Length);
        Console.WriteLine(language.ToUpper());
    }
}`,
            tests: [
              { type: "contains", value: "string language" },
              { type: "contains", value: "language.Length" },
              { type: "contains", value: "language.ToUpper()" },
            ],
            debuggingTip: `String methods like ToUpper need parentheses. language.ToUpper is a method group, not the result.`,
          },
        },
        {
          id: "csharp-level1-m1-l4",
          title: "Converting Types",
          explanation: `C# does not freely mix unrelated types. If you receive text that represents a number, convert it before doing math. int.Parse converts valid integer text, and Convert.ToInt32 is another common option.`,
          concept: `int.Parse("42") - Converts text to int
Convert.ToInt32("42") - Converts text to int
number.ToString() - Converts number to text
Invalid numeric text causes an exception`,
          example: `using System;

class Program
{
    static void Main()
    {
        string rawAge = "29";
        int age = int.Parse(rawAge);
        Console.WriteLine(age + 1);
    }
}`,
          exercise: {
            prompt: `Convert the string "50" into an int called score, then print score + 10.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        string rawScore = "50";
        // Convert and print
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        string rawScore = "50";
        int score = int.Parse(rawScore);
        Console.WriteLine(score + 10);
    }
}`,
            tests: [
              { type: "contains", value: "int score" },
              { type: "contains", value: "int.Parse" },
              { type: "contains", value: "score + 10" },
            ],
            debuggingTip: `If the string contains letters or symbols, int.Parse throws an exception. Only parse clean numeric text.`,
          },
        },
        {
          id: "csharp-level1-m1-l5",
          title: "Constants",
          explanation: `A const value is assigned once and cannot be changed. Constants are useful for values that should stay fixed, like tax rates, maximum attempts, or labels used throughout a program.`,
          concept: `const double TaxRate = 0.08;
const int MaxAttempts = 3;
Constants must be assigned immediately
Constants cannot be reassigned`,
          example: `using System;

class Program
{
    static void Main()
    {
        const int MaxRetries = 3;
        Console.WriteLine($"Retries allowed: {MaxRetries}");
    }
}`,
          exercise: {
            prompt: `Create a const int called MaxScore set to 100, then print it.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // Create constant
        // Print constant
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        const int MaxScore = 100;
        Console.WriteLine(MaxScore);
    }
}`,
            tests: [
              { type: "contains", value: "const int MaxScore" },
              { type: "contains", value: "100" },
              { type: "contains", value: "Console.WriteLine(MaxScore)" },
            ],
            debuggingTip: `A const must have a value immediately. You cannot write const int MaxScore; and assign it later.`,
          },
        },
      ],
    },
    {
      id: "csharp-level2-m1",
      title: "Level 2 - Decisions and Loops",
      duration: "55 min",
      lessons: [
        {
          id: "csharp-level2-m1-l1",
          title: "if, else if, else",
          explanation: `Conditional statements let your program choose different paths. C# checks the if condition first, then any else if conditions, and finally the else block if nothing matched. Conditions must evaluate to bool.`,
          concept: `if (condition) { ... }
else if (otherCondition) { ... }
else { ... }
Conditions go inside parentheses`,
          example: `using System;

class Program
{
    static void Main()
    {
        int score = 82;
        if (score >= 90)
        {
            Console.WriteLine("Excellent");
        }
        else if (score >= 70)
        {
            Console.WriteLine("Passing");
        }
        else
        {
            Console.WriteLine("Try again");
        }
    }
}`,
          exercise: {
            prompt: `Set temperature to 31. Print "Hot" if it is 30 or higher, otherwise print "Comfortable".`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        int temperature = 31;
        // Write if/else here
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        int temperature = 31;
        if (temperature >= 30)
        {
            Console.WriteLine("Hot");
        }
        else
        {
            Console.WriteLine("Comfortable");
        }
    }
}`,
            tests: [
              { type: "contains", value: "if (temperature >= 30)" },
              { type: "contains", value: "Console.WriteLine(\"Hot\")" },
              { type: "contains", value: "else" },
              { type: "contains", value: "Console.WriteLine(\"Comfortable\")" },
            ],
            debuggingTip: `Unlike Python, C# conditions use parentheses and blocks use curly braces.`,
          },
        },
        {
          id: "csharp-level2-m1-l2",
          title: "Boolean Logic",
          explanation: `Boolean operators combine or invert conditions. Use && when both conditions must be true, || when either condition is enough, and ! to flip true to false or false to true.`,
          concept: `&& - and
|| - or
! - not
Comparison operators produce bool values`,
          example: `using System;

class Program
{
    static void Main()
    {
        int age = 20;
        bool hasTicket = true;
        if (age >= 18 && hasTicket)
        {
            Console.WriteLine("Enter");
        }
    }
}`,
          exercise: {
            prompt: `Create hasBadge set to true and isLocked set to false. If hasBadge is true and isLocked is not true, print "Access granted".`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // Create booleans
        // Check access
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        bool hasBadge = true;
        bool isLocked = false;
        if (hasBadge && !isLocked)
        {
            Console.WriteLine("Access granted");
        }
    }
}`,
            tests: [
              { type: "contains", value: "bool hasBadge = true" },
              { type: "contains", value: "bool isLocked = false" },
              { type: "contains", value: "hasBadge && !isLocked" },
              { type: "contains", value: "Access granted" },
            ],
            debuggingTip: `Use && for and. A single & can work with booleans but does not short-circuit, so && is the usual choice.`,
          },
        },
        {
          id: "csharp-level2-m1-l3",
          title: "switch Statements",
          explanation: `A switch statement chooses a block based on one value. Each case handles a specific match, and default handles anything not listed. In C#, most case blocks need break to stop execution from continuing.`,
          concept: `switch (value) { ... }
case "A": - Handles one value
default: - Fallback case
break; - Exit the switch block`,
          example: `using System;

class Program
{
    static void Main()
    {
        string role = "admin";
        switch (role)
        {
            case "admin":
                Console.WriteLine("Full access");
                break;
            case "user":
                Console.WriteLine("Standard access");
                break;
            default:
                Console.WriteLine("Guest access");
                break;
        }
    }
}`,
          exercise: {
            prompt: `Switch on a string day set to "Mon". Print "Start week" for "Mon", "Weekend" for "Sat", and "Regular day" otherwise.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        string day = "Mon";
        // Write switch here
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        string day = "Mon";
        switch (day)
        {
            case "Mon":
                Console.WriteLine("Start week");
                break;
            case "Sat":
                Console.WriteLine("Weekend");
                break;
            default:
                Console.WriteLine("Regular day");
                break;
        }
    }
}`,
            tests: [
              { type: "contains", value: "switch (day)" },
              { type: "contains", value: "case \"Mon\"" },
              { type: "contains", value: "Start week" },
              { type: "contains", value: "default" },
              { type: "contains", value: "break" },
            ],
            debuggingTip: `For ordinary switch statements, remember break after each case to leave the switch.`,
          },
        },
        {
          id: "csharp-level2-m1-l4",
          title: "for Loops",
          explanation: `A for loop is perfect when you know how many times to repeat something. It has three parts: initialize a counter, check a condition, and update the counter after each loop.`,
          concept: `for (int i = 0; i < 5; i++) { ... }
int i = 0 - Start counter
i < 5 - Keep looping while true
i++ - Add one after each pass`,
          example: `using System;

class Program
{
    static void Main()
    {
        for (int i = 1; i <= 3; i++)
        {
            Console.WriteLine($"Round {i}");
        }
    }
}`,
          exercise: {
            prompt: `Use a for loop to print numbers 1 through 5.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // Write loop
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine(i);
        }
    }
}`,
            tests: [
              { type: "contains", value: "for (int i = 1" },
              { type: "contains", value: "i <= 5" },
              { type: "contains", value: "i++" },
              { type: "contains", value: "Console.WriteLine(i)" },
            ],
            debuggingTip: `If your loop misses 5, check whether you used < instead of <=.`,
          },
        },
        {
          id: "csharp-level2-m1-l5",
          title: "while Loops and break",
          explanation: `A while loop repeats as long as its condition stays true. It is useful when you do not know exactly how many repetitions are needed. The break statement exits the loop immediately.`,
          concept: `while (condition) { ... }
Update state inside the loop
break; - Exit early
Avoid infinite loops by changing the condition`,
          example: `using System;

class Program
{
    static void Main()
    {
        int attempts = 0;
        while (attempts < 3)
        {
            attempts++;
            Console.WriteLine($"Attempt {attempts}");
        }
    }
}`,
          exercise: {
            prompt: `Start count at 0. Use a while loop to increment count until it reaches 3, printing count each time.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        int count = 0;
        // Write while loop
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        int count = 0;
        while (count < 3)
        {
            count++;
            Console.WriteLine(count);
        }
    }
}`,
            tests: [
              { type: "contains", value: "while (count < 3)" },
              { type: "contains", value: "count++" },
              { type: "contains", value: "Console.WriteLine(count)" },
            ],
            debuggingTip: `If a while loop runs forever, make sure something inside the loop changes the condition.`,
          },
        },
      ],
    },
    {
      id: "csharp-level3-m1",
      title: "Level 3 - Methods",
      duration: "50 min",
      lessons: [
        {
          id: "csharp-level3-m1-l1",
          title: "Defining Methods",
          explanation: `A method is a named block of reusable code. In a simple console program, static methods can be called from Main without creating an object. Use methods to organize behavior and avoid repeating the same code.`,
          concept: `static void SayHello() { ... }
static - Callable from static Main
void - Returns nothing
Call with SayHello();`,
          example: `using System;

class Program
{
    static void SayReady()
    {
        Console.WriteLine("Ready");
    }

    static void Main()
    {
        SayReady();
    }
}`,
          exercise: {
            prompt: `Create a static void method named PrintBanner that prints "C# Practice", then call it from Main.`,
            starterCode: `using System;

class Program
{
    // Create method here

    static void Main()
    {
        // Call method
    }
}`,
            solution: `using System;

class Program
{
    static void PrintBanner()
    {
        Console.WriteLine("C# Practice");
    }

    static void Main()
    {
        PrintBanner();
    }
}`,
            tests: [
              { type: "contains", value: "static void PrintBanner()" },
              { type: "contains", value: "Console.WriteLine(\"C# Practice\")" },
              { type: "contains", value: "PrintBanner();" },
            ],
            debuggingTip: `If Main is static, helper methods you call directly from Main should be static too.`,
          },
        },
        {
          id: "csharp-level3-m1-l2",
          title: "Parameters",
          explanation: `Parameters let a method receive values from the caller. Each parameter needs a type and a name. Arguments are the actual values you pass when calling the method.`,
          concept: `static void Greet(string name)
string name - Parameter
Greet("Sam"); - Argument
Parameters behave like local variables inside the method`,
          example: `using System;

class Program
{
    static void Greet(string name)
    {
        Console.WriteLine($"Hello, {name}");
    }

    static void Main()
    {
        Greet("Nora");
    }
}`,
          exercise: {
            prompt: `Write a static void method ShowScore that accepts string player and int score, then prints "player: score". Call it with "Mia" and 88.`,
            starterCode: `using System;

class Program
{
    // Write ShowScore

    static void Main()
    {
        // Call ShowScore
    }
}`,
            solution: `using System;

class Program
{
    static void ShowScore(string player, int score)
    {
        Console.WriteLine($"{player}: {score}");
    }

    static void Main()
    {
        ShowScore("Mia", 88);
    }
}`,
            tests: [
              { type: "contains", value: "static void ShowScore(string player, int score)" },
              { type: "contains", value: "{player}" },
              { type: "contains", value: "{score}" },
              { type: "contains", value: "ShowScore(\"Mia\", 88)" },
            ],
            debuggingTip: `Parameter types go before parameter names: string player, not player string.`,
          },
        },
        {
          id: "csharp-level3-m1-l3",
          title: "Return Values",
          explanation: `Methods can send a value back to the caller with return. The method signature must declare the return type. If a method returns int, every normal path through the method should return an int.`,
          concept: `static int Add(int a, int b)
return a + b; - Sends result back
Store returned values in variables
void methods do not return values`,
          example: `using System;

class Program
{
    static int Double(int number)
    {
        return number * 2;
    }

    static void Main()
    {
        int result = Double(6);
        Console.WriteLine(result);
    }
}`,
          exercise: {
            prompt: `Write a static int method Add that takes two int parameters and returns their sum. Print Add(4, 9).`,
            starterCode: `using System;

class Program
{
    // Write Add

    static void Main()
    {
        // Print Add(4, 9)
    }
}`,
            solution: `using System;

class Program
{
    static int Add(int a, int b)
    {
        return a + b;
    }

    static void Main()
    {
        Console.WriteLine(Add(4, 9));
    }
}`,
            tests: [
              { type: "contains", value: "static int Add(int a, int b)" },
              { type: "contains", value: "return a + b" },
              { type: "contains", value: "Console.WriteLine(Add(4, 9))" },
            ],
            debuggingTip: `If the method says it returns int, C# expects return with an int expression.`,
          },
        },
        {
          id: "csharp-level3-m1-l4",
          title: "Optional and Named Arguments",
          explanation: `Optional parameters provide default values, so callers can omit them. Named arguments let callers specify arguments by parameter name, which improves readability when a method has several values.`,
          concept: `static void Log(string message, string level = "info")
Log("Saved"); - Uses default level
Log(message: "Saved", level: "debug"); - Named arguments`,
          example: `using System;

class Program
{
    static void Log(string message, string level = "info")
    {
        Console.WriteLine($"[{level}] {message}");
    }

    static void Main()
    {
        Log("Saved");
        Log(message: "Failed", level: "error");
    }
}`,
          exercise: {
            prompt: `Create a static void method Announce with message and optional prefix defaulting to "Note". Print "[prefix] message". Call it once using only "Deploying".`,
            starterCode: `using System;

class Program
{
    // Write Announce

    static void Main()
    {
        // Call Announce
    }
}`,
            solution: `using System;

class Program
{
    static void Announce(string message, string prefix = "Note")
    {
        Console.WriteLine($"[{prefix}] {message}");
    }

    static void Main()
    {
        Announce("Deploying");
    }
}`,
            tests: [
              { type: "contains", value: "static void Announce(string message, string prefix = \"Note\")" },
              { type: "contains", value: "{prefix}" },
              { type: "contains", value: "{message}" },
              { type: "contains", value: "Announce(\"Deploying\")" },
            ],
            debuggingTip: `Optional parameters must come after required parameters in the method signature.`,
          },
        },
        {
          id: "csharp-level3-m1-l5",
          title: "Method Overloading",
          explanation: `Method overloading lets you define multiple methods with the same name but different parameter lists. C# chooses the correct overload based on the arguments you pass.`,
          concept: `static int Add(int a, int b)
static double Add(double a, double b)
Same name, different parameter types or counts
Return type alone is not enough to overload`,
          example: `using System;

class Program
{
    static int Area(int side)
    {
        return side * side;
    }

    static int Area(int width, int height)
    {
        return width * height;
    }

    static void Main()
    {
        Console.WriteLine(Area(4));
        Console.WriteLine(Area(4, 6));
    }
}`,
          exercise: {
            prompt: `Create two Describe methods: one accepts string name and prints it, the other accepts string name and int age and prints both. Call both overloads.`,
            starterCode: `using System;

class Program
{
    // First Describe
    // Second Describe

    static void Main()
    {
        // Call both
    }
}`,
            solution: `using System;

class Program
{
    static void Describe(string name)
    {
        Console.WriteLine(name);
    }

    static void Describe(string name, int age)
    {
        Console.WriteLine($"{name} is {age}");
    }

    static void Main()
    {
        Describe("Lina");
        Describe("Lina", 31);
    }
}`,
            tests: [
              { type: "contains", value: "static void Describe(string name)" },
              { type: "contains", value: "static void Describe(string name, int age)" },
              { type: "contains", value: "Describe(\"Lina\")" },
              { type: "contains", value: "Describe(\"Lina\", 31)" },
            ],
            debuggingTip: `Two overloads need different parameter lists. Only changing the return type causes a compile error.`,
          },
        },
      ],
    },
    {
      id: "csharp-level4-m1",
      title: "Level 4 - Collections and LINQ",
      duration: "65 min",
      lessons: [
        {
          id: "csharp-level4-m1-l1",
          title: "Arrays",
          explanation: `Arrays store multiple values of the same type in a fixed-size sequence. Indexes start at 0, so the first item is names[0]. Arrays are useful when the number of items is known and does not need to grow.`,
          concept: `int[] scores = { 90, 85, 100 };
scores[0] - First item
scores.Length - Number of items
Arrays have fixed length`,
          example: `using System;

class Program
{
    static void Main()
    {
        string[] names = { "Ava", "Ben", "Cy" };
        Console.WriteLine(names[0]);
        Console.WriteLine(names.Length);
    }
}`,
          exercise: {
            prompt: `Create an int array called scores with 10, 20, and 30. Print the second item and the array Length.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // Create array
        // Print second item and length
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        int[] scores = { 10, 20, 30 };
        Console.WriteLine(scores[1]);
        Console.WriteLine(scores.Length);
    }
}`,
            tests: [
              { type: "contains", value: "int[] scores" },
              { type: "contains", value: "{ 10, 20, 30 }" },
              { type: "contains", value: "scores[1]" },
              { type: "contains", value: "scores.Length" },
            ],
            debuggingTip: `The second item is index 1, not index 2, because array indexes start at 0.`,
          },
        },
        {
          id: "csharp-level4-m1-l2",
          title: "Lists",
          explanation: `List<T> is a flexible collection that can grow and shrink. It is part of System.Collections.Generic. Use Add to append items and Count to see how many items are inside.`,
          concept: `List<string> names = new List<string>();
names.Add("Ava");
names.Count - Number of items
Use List<T> when the collection size changes`,
          example: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> tasks = new List<string>();
        tasks.Add("Read");
        tasks.Add("Build");
        Console.WriteLine(tasks.Count);
    }
}`,
          exercise: {
            prompt: `Create a List<string> called languages. Add "C#" and "SQL", then print Count.`,
            starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // Create list and add items
    }
}`,
            solution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> languages = new List<string>();
        languages.Add("C#");
        languages.Add("SQL");
        Console.WriteLine(languages.Count);
    }
}`,
            tests: [
              { type: "contains", value: "using System.Collections.Generic;" },
              { type: "contains", value: "List<string> languages" },
              { type: "contains", value: "languages.Add(\"C#\")" },
              { type: "contains", value: "languages.Add(\"SQL\")" },
              { type: "contains", value: "languages.Count" },
            ],
            debuggingTip: `If List<T> is not found, add using System.Collections.Generic; at the top.`,
          },
        },
        {
          id: "csharp-level4-m1-l3",
          title: "Dictionaries",
          explanation: `Dictionary<TKey, TValue> stores key-value pairs. You look up a value by its key, like a contact list where names point to phone numbers. Keys must be unique.`,
          concept: `Dictionary<string, int> ages = new Dictionary<string, int>();
ages["Mia"] = 30;
ages.ContainsKey("Mia") - Checks key existence
Keys are unique`,
          example: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Dictionary<string, int> scores = new Dictionary<string, int>();
        scores["Ada"] = 99;
        Console.WriteLine(scores["Ada"]);
    }
}`,
          exercise: {
            prompt: `Create a Dictionary<string, int> named inventory. Set "apples" to 12 and print inventory["apples"].`,
            starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // Create dictionary
    }
}`,
            solution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Dictionary<string, int> inventory = new Dictionary<string, int>();
        inventory["apples"] = 12;
        Console.WriteLine(inventory["apples"]);
    }
}`,
            tests: [
              { type: "contains", value: "Dictionary<string, int> inventory" },
              { type: "contains", value: "inventory[\"apples\"] = 12" },
              { type: "contains", value: "Console.WriteLine(inventory[\"apples\"])" },
            ],
            debuggingTip: `Reading a missing key throws an exception. Use ContainsKey before reading uncertain keys.`,
          },
        },
        {
          id: "csharp-level4-m1-l4",
          title: "foreach Loops",
          explanation: `foreach loops through every item in a collection without manually managing an index. Use it when you want to read each item in order and do not need the numeric position.`,
          concept: `foreach (string item in items) { ... }
Works with arrays, lists, dictionaries, and more
Simpler than for when you only need the item
The loop variable is read-only for many collections`,
          example: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> names = new List<string> { "Ava", "Ben" };
        foreach (string name in names)
        {
            Console.WriteLine(name);
        }
    }
}`,
          exercise: {
            prompt: `Create a List<int> with 2, 4, and 6. Use foreach to print each number.`,
            starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // Create list
        // Loop with foreach
    }
}`,
            solution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 2, 4, 6 };
        foreach (int number in numbers)
        {
            Console.WriteLine(number);
        }
    }
}`,
            tests: [
              { type: "contains", value: "List<int> numbers" },
              { type: "contains", value: "foreach (int number in numbers)" },
              { type: "contains", value: "Console.WriteLine(number)" },
            ],
            debuggingTip: `foreach uses the pattern foreach (type item in collection). The in keyword is required.`,
          },
        },
        {
          id: "csharp-level4-m1-l5",
          title: "LINQ Basics",
          explanation: `LINQ lets you query collections in a readable way. With Where you filter items, Select transforms items, and ToList materializes the result into a List<T>. LINQ is used constantly in modern C# applications.`,
          concept: `using System.Linq; - Enables LINQ extensions
items.Where(x => condition) - Filters
items.Select(x => expression) - Transforms
ToList() - Creates a list from query result`,
          example: `using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        List<int> scores = new List<int> { 65, 82, 91 };
        var passing = scores.Where(score => score >= 70).ToList();
        Console.WriteLine(passing.Count);
    }
}`,
          exercise: {
            prompt: `Create a List<int> numbers with 1, 2, 3, 4. Use LINQ Where to keep numbers greater than 2, then print Count.`,
            starterCode: `using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        // Create list
        // Filter with Where
    }
}`,
            solution: `using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 1, 2, 3, 4 };
        var larger = numbers.Where(number => number > 2).ToList();
        Console.WriteLine(larger.Count);
    }
}`,
            tests: [
              { type: "contains", value: "using System.Linq;" },
              { type: "contains", value: "List<int> numbers" },
              { type: "contains", value: ".Where" },
              { type: "contains", value: "number > 2" },
              { type: "contains", value: ".ToList()" },
            ],
            debuggingTip: `Where returns a query. Add ToList() when you want a List<T> result with Count and list behavior.`,
          },
        },
      ],
    },
    {
      id: "csharp-level5-m1",
      title: "Level 5 - Classes and OOP",
      duration: "70 min",
      lessons: [
        {
          id: "csharp-level5-m1-l1",
          title: "Classes and Objects",
          explanation: `A class is a blueprint for objects. It describes the data and behavior each object has. An object is an instance created from the class, with its own values for fields and properties.`,
          concept: `class User { ... } - Blueprint
new User() - Creates an object
Fields store object data
Methods define object behavior`,
          example: `using System;

class User
{
    public string Name = "Guest";
}

class Program
{
    static void Main()
    {
        User user = new User();
        user.Name = "Ava";
        Console.WriteLine(user.Name);
    }
}`,
          exercise: {
            prompt: `Create a class Book with a public string Title field. In Main, create a Book, set Title to "Clean Code", and print it.`,
            starterCode: `using System;

// Create Book class

class Program
{
    static void Main()
    {
        // Create object and print title
    }
}`,
            solution: `using System;

class Book
{
    public string Title = "";
}

class Program
{
    static void Main()
    {
        Book book = new Book();
        book.Title = "Clean Code";
        Console.WriteLine(book.Title);
    }
}`,
            tests: [
              { type: "contains", value: "class Book" },
              { type: "contains", value: "public string Title" },
              { type: "contains", value: "new Book()" },
              { type: "contains", value: "book.Title = \"Clean Code\"" },
              { type: "contains", value: "Console.WriteLine(book.Title)" },
            ],
            debuggingTip: `public makes the field accessible from Main. Without public, the field is private by default in a class.`,
          },
        },
        {
          id: "csharp-level5-m1-l2",
          title: "Constructors",
          explanation: `A constructor runs when you create a new object. It is usually used to put the object into a valid starting state. Constructors have the same name as the class and no return type.`,
          concept: `public User(string name) { ... }
Constructor name matches class name
No return type, not even void
Runs when new User(...) is called`,
          example: `using System;

class User
{
    public string Name;

    public User(string name)
    {
        Name = name;
    }
}

class Program
{
    static void Main()
    {
        User user = new User("Nia");
        Console.WriteLine(user.Name);
    }
}`,
          exercise: {
            prompt: `Create a Product class with public string Name and public decimal Price. Add a constructor that sets both. Create one Product and print its Name.`,
            starterCode: `using System;

class Product
{
    // Fields and constructor
}

class Program
{
    static void Main()
    {
        // Create product
    }
}`,
            solution: `using System;

class Product
{
    public string Name;
    public decimal Price;

    public Product(string name, decimal price)
    {
        Name = name;
        Price = price;
    }
}

class Program
{
    static void Main()
    {
        Product product = new Product("Keyboard", 79.99m);
        Console.WriteLine(product.Name);
    }
}`,
            tests: [
              { type: "contains", value: "class Product" },
              { type: "contains", value: "public string Name" },
              { type: "contains", value: "public decimal Price" },
              { type: "contains", value: "public Product(string name, decimal price)" },
              { type: "contains", value: "new Product(\"Keyboard\", 79.99m)" },
            ],
            debuggingTip: `Decimal literals use the m suffix, like 79.99m. Without it, the number is treated as double.`,
          },
        },
        {
          id: "csharp-level5-m1-l3",
          title: "Properties",
          explanation: `Properties are the standard way to expose object data in C#. Auto-properties give you a public get and set without writing a backing field. They make class APIs cleaner than public fields.`,
          concept: `public string Name { get; set; }
get - Allows reading
set - Allows assigning
Auto-properties are common in data models`,
          example: `using System;

class Account
{
    public string Owner { get; set; }
    public decimal Balance { get; set; }
}

class Program
{
    static void Main()
    {
        Account account = new Account();
        account.Owner = "Alex";
        account.Balance = 100m;
        Console.WriteLine(account.Owner);
    }
}`,
          exercise: {
            prompt: `Create a Movie class with Title and Rating auto-properties. Create a movie, set both properties, and print Title.`,
            starterCode: `using System;

// Create Movie class

class Program
{
    static void Main()
    {
        // Create movie
    }
}`,
            solution: `using System;

class Movie
{
    public string Title { get; set; }
    public double Rating { get; set; }
}

class Program
{
    static void Main()
    {
        Movie movie = new Movie();
        movie.Title = "Arrival";
        movie.Rating = 9.1;
        Console.WriteLine(movie.Title);
    }
}`,
            tests: [
              { type: "contains", value: "class Movie" },
              { type: "contains", value: "public string Title { get; set; }" },
              { type: "contains", value: "public double Rating { get; set; }" },
              { type: "contains", value: "movie.Title = \"Arrival\"" },
              { type: "contains", value: "Console.WriteLine(movie.Title)" },
            ],
            debuggingTip: `Auto-properties need both braces and accessors: { get; set; }.`,
          },
        },
        {
          id: "csharp-level5-m1-l4",
          title: "Encapsulation",
          explanation: `Encapsulation means protecting an object's internal state and exposing safe operations. Private fields cannot be accessed directly outside the class, so you can control how values change through methods or properties.`,
          concept: `private int balance; - Only class can access
public void Deposit(int amount) - Controlled operation
Encapsulation prevents invalid state
Expose behavior, not raw internals`,
          example: `using System;

class Counter
{
    private int value = 0;

    public void Increment()
    {
        value++;
    }

    public int GetValue()
    {
        return value;
    }
}

class Program
{
    static void Main()
    {
        Counter counter = new Counter();
        counter.Increment();
        Console.WriteLine(counter.GetValue());
    }
}`,
          exercise: {
            prompt: `Create a BankAccount class with private decimal balance. Add Deposit(decimal amount) that adds to balance and GetBalance() that returns it.`,
            starterCode: `using System;

class BankAccount
{
    // Private field and methods
}

class Program
{
    static void Main()
    {
        // Create account, deposit, print balance
    }
}`,
            solution: `using System;

class BankAccount
{
    private decimal balance = 0m;

    public void Deposit(decimal amount)
    {
        balance += amount;
    }

    public decimal GetBalance()
    {
        return balance;
    }
}

class Program
{
    static void Main()
    {
        BankAccount account = new BankAccount();
        account.Deposit(50m);
        Console.WriteLine(account.GetBalance());
    }
}`,
            tests: [
              { type: "contains", value: "private decimal balance" },
              { type: "contains", value: "public void Deposit(decimal amount)" },
              { type: "contains", value: "balance += amount" },
              { type: "contains", value: "public decimal GetBalance()" },
              { type: "contains", value: "return balance" },
            ],
            debuggingTip: `Private fields are accessed from inside the class. Main should use public methods like Deposit and GetBalance.`,
          },
        },
        {
          id: "csharp-level5-m1-l5",
          title: "Inheritance and Interfaces",
          explanation: `Inheritance lets one class reuse and specialize another class. Interfaces define a contract: any class that implements the interface promises to provide its members. Interfaces are especially useful for flexible, testable code.`,
          concept: `class Dog : Animal - Dog inherits Animal
interface IRunnable { void Run(); }
class Robot : IRunnable - Robot implements interface
override customizes inherited virtual methods`,
          example: `using System;

interface IGreeter
{
    void Greet();
}

class FriendlyGreeter : IGreeter
{
    public void Greet()
    {
        Console.WriteLine("Hello!");
    }
}

class Program
{
    static void Main()
    {
        IGreeter greeter = new FriendlyGreeter();
        greeter.Greet();
    }
}`,
          exercise: {
            prompt: `Create an interface INotifier with void Notify(). Create EmailNotifier that implements it and prints "Email sent". Call Notify through an INotifier variable.`,
            starterCode: `using System;

// Create interface and class

class Program
{
    static void Main()
    {
        // Use interface variable
    }
}`,
            solution: `using System;

interface INotifier
{
    void Notify();
}

class EmailNotifier : INotifier
{
    public void Notify()
    {
        Console.WriteLine("Email sent");
    }
}

class Program
{
    static void Main()
    {
        INotifier notifier = new EmailNotifier();
        notifier.Notify();
    }
}`,
            tests: [
              { type: "contains", value: "interface INotifier" },
              { type: "contains", value: "void Notify()" },
              { type: "contains", value: "class EmailNotifier : INotifier" },
              { type: "contains", value: "public void Notify()" },
              { type: "contains", value: "INotifier notifier = new EmailNotifier()" },
              { type: "contains", value: "notifier.Notify()" },
            ],
            debuggingTip: `Interface members are implemented as public methods in the class.`,
          },
        },
      ],
    },
    {
      id: "csharp-level6-m1",
      title: "Level 6 - Practical C#",
      duration: "70 min",
      lessons: [
        {
          id: "csharp-level6-m1-l1",
          title: "Nullable Reference Types",
          explanation: `Modern C# can warn you when a reference might be null. string means a non-null string, while string? means the value may be null. The null-coalescing operator ?? provides a fallback value.`,
          concept: `string name - Expected non-null
string? nickname - May be null
nickname ?? "Guest" - Fallback if null
?. safely accesses members on maybe-null values`,
          example: `using System;

class Program
{
    static void Main()
    {
        string? nickname = null;
        string displayName = nickname ?? "Guest";
        Console.WriteLine(displayName);
    }
}`,
          exercise: {
            prompt: `Create string? middleName set to null. Create display set to middleName ?? "None", then print display.`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // Nullable string and fallback
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        string? middleName = null;
        string display = middleName ?? "None";
        Console.WriteLine(display);
    }
}`,
            tests: [
              { type: "contains", value: "string? middleName = null" },
              { type: "contains", value: "middleName ?? \"None\"" },
              { type: "contains", value: "Console.WriteLine(display)" },
            ],
            debuggingTip: `Use ?? for fallback values. It only uses the right side when the left side is null.`,
          },
        },
        {
          id: "csharp-level6-m1-l2",
          title: "Exceptions",
          explanation: `Exceptions represent errors that disrupt normal flow. try runs risky code, catch handles a specific failure, and finally runs cleanup code whether the operation succeeds or fails.`,
          concept: `try { ... } - Risky code
catch (Exception ex) { ... } - Handle failure
finally { ... } - Cleanup
Catch specific exception types when possible`,
          example: `using System;

class Program
{
    static void Main()
    {
        try
        {
            int number = int.Parse("42");
            Console.WriteLine(number);
        }
        catch (FormatException)
        {
            Console.WriteLine("Invalid number");
        }
    }
}`,
          exercise: {
            prompt: `Wrap int.Parse("oops") in a try/catch. Catch FormatException and print "Bad input".`,
            starterCode: `using System;

class Program
{
    static void Main()
    {
        // try/catch here
    }
}`,
            solution: `using System;

class Program
{
    static void Main()
    {
        try
        {
            int.Parse("oops");
        }
        catch (FormatException)
        {
            Console.WriteLine("Bad input");
        }
    }
}`,
            tests: [
              { type: "contains", value: "try" },
              { type: "contains", value: "int.Parse(\"oops\")" },
              { type: "contains", value: "catch (FormatException)" },
              { type: "contains", value: "Console.WriteLine(\"Bad input\")" },
            ],
            debuggingTip: `Place only the risky operation inside try. The catch block runs only if that operation throws.`,
          },
        },
        {
          id: "csharp-level6-m1-l3",
          title: "async and await",
          explanation: `Asynchronous methods let your program wait for slow work without blocking the current thread. Mark the method async, return Task or Task<T>, and use await on asynchronous operations.`,
          concept: `async Task Main() - Async entry point
await SomeAsyncMethod() - Wait without blocking
Task<T> - Future value of type T
Async methods usually end with Async`,
          example: `using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        await Task.Delay(100);
        Console.WriteLine("Done");
    }
}`,
          exercise: {
            prompt: `Write an async Task Main method that awaits Task.Delay(50), then prints "Loaded".`,
            starterCode: `using System;
using System.Threading.Tasks;

class Program
{
    // Make Main async
}`,
            solution: `using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        await Task.Delay(50);
        Console.WriteLine("Loaded");
    }
}`,
            tests: [
              { type: "contains", value: "using System.Threading.Tasks;" },
              { type: "contains", value: "static async Task Main()" },
              { type: "contains", value: "await Task.Delay(50)" },
              { type: "contains", value: "Console.WriteLine(\"Loaded\")" },
            ],
            debuggingTip: `await can only be used inside an async method. Add async to Main and return Task.`,
          },
        },
        {
          id: "csharp-level6-m1-l4",
          title: "Records",
          explanation: `Records are concise types for data-focused objects. They are useful for values that mostly carry data, such as API results, settings, or messages. Positional records automatically create properties and a constructor.`,
          concept: `public record User(string Name, int Age);
Records compare by value
Great for immutable data models
with creates modified copies`,
          example: `using System;

public record User(string Name, int Age);

class Program
{
    static void Main()
    {
        User user = new User("Ava", 30);
        Console.WriteLine(user.Name);
    }
}`,
          exercise: {
            prompt: `Create a public record Point with int X and int Y. Create Point(3, 4) and print point.X.`,
            starterCode: `using System;

// Create record

class Program
{
    static void Main()
    {
        // Create and print point
    }
}`,
            solution: `using System;

public record Point(int X, int Y);

class Program
{
    static void Main()
    {
        Point point = new Point(3, 4);
        Console.WriteLine(point.X);
    }
}`,
            tests: [
              { type: "contains", value: "public record Point(int X, int Y)" },
              { type: "contains", value: "new Point(3, 4)" },
              { type: "contains", value: "Console.WriteLine(point.X)" },
            ],
            debuggingTip: `A positional record declares its properties in parentheses right after the record name.`,
          },
        },
        {
          id: "csharp-level6-m1-l5",
          title: "Unit Testing Shape",
          explanation: `C# teams commonly test code with frameworks like xUnit, NUnit, or MSTest. A test method arranges data, acts by calling the code under test, and asserts the expected result. Even when syntax differs by framework, the structure is similar.`,
          concept: `[Fact] - xUnit test attribute
Arrange - Prepare inputs
Act - Call the code
Assert.Equal(expected, actual) - Verify result`,
          example: `using Xunit;

public class CalculatorTests
{
    [Fact]
    public void Add_ReturnsSum()
    {
        int result = Calculator.Add(2, 3);
        Assert.Equal(5, result);
    }
}`,
          exercise: {
            prompt: `Write an xUnit-style test method named Add_ReturnsFive. Inside, set result to Calculator.Add(2, 3) and assert it equals 5.`,
            starterCode: `using Xunit;

public class CalculatorTests
{
    // Write test
}`,
            solution: `using Xunit;

public class CalculatorTests
{
    [Fact]
    public void Add_ReturnsFive()
    {
        int result = Calculator.Add(2, 3);
        Assert.Equal(5, result);
    }
}`,
            tests: [
              { type: "contains", value: "[Fact]" },
              { type: "contains", value: "public void Add_ReturnsFive()" },
              { type: "contains", value: "Calculator.Add(2, 3)" },
              { type: "contains", value: "Assert.Equal(5, result)" },
            ],
            debuggingTip: `In xUnit, [Fact] marks a no-argument test method that the test runner should execute.`,
          },
        },
      ],
    },
  ],
};
