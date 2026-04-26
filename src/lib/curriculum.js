// src/lib/curriculum.js

export const curriculum = {
  python: {
    label: "Python",
    modules: [
      // ==================== PHASE 0: INTRO ====================
      {
        id: "python-phase0-m1",
        title: "Phase 0 — Welcome to Python",
        duration: "5 minutes",
        lessons: [
          {
            id: "python-phase0-m1-l1",
            title: "What is Python & How This Works",
            explanation: "Python is one of the most popular programming languages in the world. It's used by companies like Instagram, Spotify, and Netflix. It's also one of the easiest to learn — which is exactly why we're starting here.\n\nHere's how FluentCode works:\n• Each lesson teaches you one concept\n• You read a short explanation\n• Then you write real code in the editor\n• An AI tutor checks your work and helps you improve\n\nThat's it. No fluff, no lectures. You learn by doing.\n\nLet's make sure the editor works. Type the code below and hit Submit.",
            concept: "The print() function displays text on screen. It's the very first thing every programmer learns.",
            example: 'print("ready")',
            exercise: {
              prompt: "Type print(\"ready\") in the editor and hit Submit. That's it — your first line of code.",
              starterCode: "",
              solution: 'print("ready")',
              tests: [{ type: "contains", value: "print" }],
              debuggingTip: "Make sure you include the quotes around 'ready' — Python needs them to know it's text."
            }
          }
        ]
      },

      // ==================== PHASE 1: BASICS ====================
      {
        id: "python-phase1-m1",
        title: "Phase 1.1 — What is Programming & Your First Lines of Code",
        duration: "25–30 minutes",
        lessons: [
          {
            id: "python-phase1-m1-l1",
            title: "Hello World & Print",
            explanation: "Programming is giving step-by-step instructions to a computer. Python is a language that lets you write these instructions in a way humans can read. Your first program will print text to the screen—the foundation of all communication between code and user.",
            concept: "The print() function outputs text to the screen. It's how your code communicates with the user.",
            example: 'print("Hello, World!")\nprint("My name is Alice")\nprint("I am 25 years old")\nprint("My favorite language is Python")',
            exercise: {
              prompt: "Write a program that prints your name, age, and favorite programming language to the screen in three separate lines.",
              starterCode: '# Write your code below\nprint("Hello, World!")',
              solution: 'print("My name is Alice")\nprint("I am 25 years old")\nprint("My favorite language is Python")',
              tests: [{ type: "contains", value: "print" }, { type: "lineCount", minLines: 3 }],
              debuggingTip: "If you see SyntaxError, check for missing quotes or parentheses—Python is very literal about these."
            }
          }
        ]
      },
      {
        id: "python-phase1-m2",
        title: "Phase 1.2 — Variables and Data Types",
        duration: "30–35 minutes",
        lessons: [
          {
            id: "python-phase1-m2-l1",
            title: "Creating Variables",
            explanation: "Variables are named containers that store information. Think of them as labeled boxes—you decide what goes inside. Python has different data types (strings for text, integers for whole numbers, floats for decimals, booleans for true/false) that behave differently.",
            concept: "Variables let you store and reuse data. Use snake_case naming (like my_variable) and meaningful names.",
            example: 'name = "Jordan"\nage = 28\nheight = 1.75\nhas_license = True\n\nprint(name)\nprint(age)\nprint(height)\nprint(has_license)',
            exercise: {
              prompt: "Create variables for a person's name, age, height (in meters), and whether they have a driver's license. Print each variable.",
              starterCode: '# Create your variables here\nname = \nage = \nheight = \nhas_license = \n\n# Print them below',
              solution: 'name = "Jordan"\nage = 28\nheight = 1.75\nhas_license = True\n\nprint(name)\nprint(age)\nprint(height)\nprint(has_license)',
              tests: [{ type: "contains", value: "=" }, { type: "contains", value: "print" }],
              debuggingTip: "If you see NameError, you've either misspelled a variable name or used it before creating it. Python reads top to bottom."
            }
          },
          {
            id: "python-phase1-m2-l2",
            title: "Understanding Data Types",
            explanation: "Different data types behave differently. Strings are text, integers are whole numbers, floats are decimals, and booleans are true/false values. Use type() to see what type a variable is.",
            concept: "Each data type has its own properties and methods. Understanding types helps you avoid errors.",
            example: 'name = "Alice"\nage = 25\nheight = 5.6\nis_student = True\n\nprint(type(name))\nprint(type(age))\nprint(type(height))\nprint(type(is_student))',
            exercise: {
              prompt: "Create variables for a person's name (string), age (integer), height (float), and driver's license status (boolean). Print each variable and its type using type().",
              starterCode: '# Create your variables\nname = "Alex"\nage = 30\nheight = 1.80\nhas_license = True\n\n# Print each variable and its type',
              solution: 'name = "Alex"\nage = 30\nheight = 1.80\nhas_license = True\n\nprint(name, type(name))\nprint(age, type(age))\nprint(height, type(height))\nprint(has_license, type(has_license))',
              tests: [{ type: "contains", value: "type(" }],
              debuggingTip: "type() is your friend for debugging. Always check what type your variables are if something unexpected happens."
            }
          }
        ]
      },
      {
        id: "python-phase1-m3",
        title: "Phase 1.3 — String Manipulation and Formatting",
        duration: "30–35 minutes",
        lessons: [
          {
            id: "python-phase1-m3-l1",
            title: "String Methods and Formatting",
            explanation: "Strings are sequences of characters. You can combine them, change their case, search within them, and format them to display information beautifully. String formatting is essential for creating user-friendly output.",
            concept: "Use .upper(), .lower(), .split(), and f-strings to manipulate and format text.",
            example: 'full_name = "Alice Johnson"\nemail = "alice.johnson@example.com"\n\nprint(full_name.upper())\nusername = email.split("@")[0]\nprint(username)\ngreeting = f"Welcome, {full_name}! Your email is {email}."\nprint(greeting)',
            exercise: {
              prompt: "Given a user's full name and email address, create a program that: (1) Prints the name in uppercase, (2) Extracts and prints just the username part of the email (before the @), (3) Prints a formatted welcome message using an f-string.",
              starterCode: 'full_name = "Alice Johnson"\nemail = "alice.johnson@example.com"\n\n# Write your code below',
              solution: 'full_name = "Alice Johnson"\nemail = "alice.johnson@example.com"\n\nprint(full_name.upper())\n\nusername = email.split("@")[0]\nprint(username)\n\ngreeting = f"Welcome, {full_name}! Your email is {email}."\nprint(greeting)',
              tests: [{ type: "contains", value: ".upper()" }, { type: "contains", value: "split" }, { type: "contains", value: "f\"" }],
              debuggingTip: "Off-by-one errors in slicing are common. Remember: slicing is [start:end] where end is exclusive (not included)."
            }
          }
        ]
      },
      {
        id: "python-phase1-m4",
        title: "Phase 1.4 — Basic Arithmetic and Math Operations",
        duration: "25–30 minutes",
        lessons: [
          {
            id: "python-phase1-m4-l1",
            title: "Arithmetic Operators",
            explanation: "Python is a calculator. You can perform arithmetic operations on numbers, and Python follows standard mathematical rules (order of operations). The math module provides advanced functions like square root, trigonometry, and rounding.",
            concept: "Use +, -, *, /, //, %, ** for arithmetic. Import math for advanced functions.",
            example: 'import math\n\nlength = 10\nwidth = 5\n\narea = length * width\nperimeter = 2 * (length + width)\ndiagonal = math.sqrt(length**2 + width**2)\n\nprint(f"Area: {area}")\nprint(f"Perimeter: {perimeter}")\nprint(f"Diagonal: {diagonal:.2f}")',
            exercise: {
              prompt: "Write a program that calculates the area and perimeter of a rectangle given its length and width. Also calculate the diagonal using the Pythagorean theorem.",
              starterCode: 'import math\n\nlength = 10\nwidth = 5\n\n# Calculate area, perimeter, and diagonal below',
              solution: 'import math\n\nlength = 10\nwidth = 5\n\narea = length * width\nperimeter = 2 * (length + width)\ndiagonal = math.sqrt(length**2 + width**2)\n\nprint(f"Area: {area}")\nprint(f"Perimeter: {perimeter}")\nprint(f"Diagonal: {diagonal:.2f}")',
              tests: [{ type: "contains", value: "import math" }, { type: "contains", value: "*" }, { type: "contains", value: "math.sqrt" }],
              debuggingTip: "Division (/) always returns a float, even for whole numbers. Use // for integer division if you need a whole number result."
            }
          }
        ]
      },
      {
        id: "python-phase1-m5",
        title: "Phase 1.5 — Capstone Project: Personal Finance Tracker",
        duration: "45–60 minutes",
        lessons: [
          {
            id: "python-phase1-m5-l1",
            title: "Build a Finance Tracker",
            explanation: "Synthesize all Phase 1 concepts: variables, data types, strings, math, and formatting. Create a program that tracks income and expenses for a month.",
            concept: "Break complex programs into steps. Use variables for data, math for calculations, and f-strings for formatting.",
            example: 'monthly_income = 3000\nrent = 1200\ngroceries = 300\nutilities = 150\nentertainment = 200\n\ntotal_expenses = rent + groceries + utilities + entertainment\nremaining_balance = monthly_income - total_expenses\n\nprint("=== Monthly Finance Summary ===")\nprint(f"Income: ${monthly_income:.2f}")\nprint(f"Rent: ${rent:.2f} ({rent/monthly_income*100:.1f}%)")\nprint(f"Groceries: ${groceries:.2f} ({groceries/monthly_income*100:.1f}%)")\nprint(f"Utilities: ${utilities:.2f} ({utilities/monthly_income*100:.1f}%)")\nprint(f"Entertainment: ${entertainment:.2f} ({entertainment/monthly_income*100:.1f}%)")\nprint(f"\\nTotal Expenses: ${total_expenses:.2f}")\nprint(f"Remaining Balance: ${remaining_balance:.2f}")',
            exercise: {
              prompt: "Create a program that tracks income and expenses for a month. Store monthly income, rent, groceries, utilities, and entertainment expenses as variables. Calculate total expenses and remaining balance. Display a formatted summary with currency formatting. Calculate what percentage of income goes to each expense category.",
              starterCode: '# Define your financial data\nmonthly_income = 3000\nrent = 1200\ngroceries = 300\nutilities = 150\nentertainment = 200\n\n# Calculate and display your summary below',
              solution: 'monthly_income = 3000\nrent = 1200\ngroceries = 300\nutilities = 150\nentertainment = 200\n\ntotal_expenses = rent + groceries + utilities + entertainment\nremaining_balance = monthly_income - total_expenses\n\nprint("=== Monthly Finance Summary ===")\nprint(f"Income: ${monthly_income:.2f}")\nprint(f"Rent: ${rent:.2f} ({rent/monthly_income*100:.1f}%)")\nprint(f"Groceries: ${groceries:.2f} ({groceries/monthly_income*100:.1f}%)")\nprint(f"Utilities: ${utilities:.2f} ({utilities/monthly_income*100:.1f}%)")\nprint(f"Entertainment: ${entertainment:.2f} ({entertainment/monthly_income*100:.1f}%)")\nprint(f"\\nTotal Expenses: ${total_expenses:.2f}")\nprint(f"Remaining Balance: ${remaining_balance:.2f}")',
              tests: [{ type: "contains", value: "=" }, { type: "contains", value: "print" }, { type: "contains", value: "f\"" }],
              debuggingTip: "Use intermediate variables to break complex calculations into steps—it makes debugging easier and your code more readable."
            }
          }
        ]
      },

      // ==================== PHASE 2: INTERMEDIATE ====================
      {
        id: "python-phase2-m1",
        title: "Phase 2.1 — Control Flow",
        duration: "40–50 minutes",
        lessons: [
          {
            id: "python-phase2-m1-l1",
            title: "If, Elif, Else",
            explanation: "Control flow allows your program to make decisions based on conditions. Use if, elif (else if), and else to execute different blocks of code.",
            concept: "The condition must evaluate to a boolean (True/False). Indentation defines which code belongs to which branch.",
            example: 'age = 18\nif age >= 18:\n    print("You can vote!")\nelif age >= 16:\n    print("You can drive but not vote.")\nelse:\n    print("Too young for either.")',
            exercise: {
              prompt: "Write a program that asks the user for a number and prints 'Positive', 'Negative', or 'Zero' accordingly.",
              starterCode: 'number = int(input("Enter a number: "))\n# Write your if/elif/else below',
              solution: 'number = int(input("Enter a number: "))\nif number > 0:\n    print("Positive")\nelif number < 0:\n    print("Negative")\nelse:\n    print("Zero")',
              tests: [{ type: "contains", value: "if" }],
              debuggingTip: "Make sure to use `elif` not `else if`. Also check your indentation."
            }
          },
          {
            id: "python-phase2-m1-l2",
            title: "For Loops",
            explanation: "For loops iterate over a sequence (list, string, range). Use them to repeat actions a specific number of times or over items.",
            concept: "The `range()` function generates sequences of numbers. `range(start, stop, step)` is versatile.",
            example: 'for i in range(5):\n    print(i)\n\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)',
            exercise: {
              prompt: "Write a for loop that prints the square of each number from 1 to 10.",
              starterCode: '# Write your loop here',
              solution: 'for i in range(1, 11):\n    print(i ** 2)',
              tests: [{ type: "contains", value: "for" }],
              debuggingTip: "Remember that range(1, 11) gives numbers 1 through 10, not including 11."
            }
          },
          {
            id: "python-phase2-m1-l3",
            title: "While Loops",
            explanation: "While loops continue as long as a condition is True. Be careful to ensure the condition eventually becomes False, otherwise you'll have an infinite loop.",
            concept: "Often used when you don't know how many iterations you need.",
            example: 'count = 0\nwhile count < 5:\n    print(count)\n    count += 1',
            exercise: {
              prompt: "Write a while loop that prints numbers from 1 to 5.",
              starterCode: 'count = 1\n# Write your loop',
              solution: 'count = 1\nwhile count <= 5:\n    print(count)\n    count += 1',
              tests: [{ type: "contains", value: "while" }],
              debuggingTip: "Don't forget to update the loop variable; otherwise, the loop will run forever."
            }
          }
        ]
      },
      {
        id: "python-phase2-m2",
        title: "Phase 2.2 — Functions",
        duration: "45–55 minutes",
        lessons: [
          {
            id: "python-phase2-m2-l1",
            title: "Defining Functions",
            explanation: "Functions allow you to reuse code. Define them with `def`, give them a name, and write the code block.",
            concept: "Use functions to organize your program into logical pieces.",
            example: 'def greet():\n    print("Hello!")\n\ngreet()',
            exercise: {
              prompt: "Define a function `say_hello` that prints 'Hello, World!'. Call it.",
              starterCode: '# Define your function\n\n# Call it',
              solution: 'def say_hello():\n    print("Hello, World!")\n\nsay_hello()',
              tests: [{ type: "contains", value: "def " }],
              debuggingTip: "Indentation matters! All code inside the function must be indented."
            }
          },
          {
            id: "python-phase2-m2-l2",
            title: "Parameters and Return Values",
            explanation: "Parameters let you pass data into functions. `return` sends data back to the caller.",
            concept: "A function can take multiple parameters and return a value.",
            example: 'def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)',
            exercise: {
              prompt: "Write a function `multiply(a, b)` that returns the product of two numbers. Call it with 4 and 7 and print the result.",
              starterCode: '# Define multiply\n\n# Call it and print',
              solution: 'def multiply(a, b):\n    return a * b\n\nprint(multiply(4, 7))',
              tests: [{ type: "contains", value: "return" }],
              debuggingTip: "Use `return` to send a value back, not `print`. The function stops after return."
            }
          },
          {
            id: "python-phase2-m2-l3",
            title: "Default Parameters & Scope",
            explanation: "Default parameters provide default values. Scope defines where variables are accessible (global vs local).",
            concept: "Variables inside functions are local unless declared global.",
            example: 'def greet(name="stranger"):\n    print(f"Hello, {name}")\n\ngreet()\ngreet("Alice")',
            exercise: {
              prompt: "Write a function `power(base, exp=2)` that returns base raised to exp. Test it with both one and two arguments.",
              starterCode: '# Define power\n\n# Test it',
              solution: 'def power(base, exp=2):\n    return base ** exp\n\nprint(power(3))\nprint(power(2, 3))',
              tests: [{ type: "contains", value: "def power" }],
              debuggingTip: "Default parameters are evaluated when the function is defined, not when called. Avoid mutable defaults."
            }
          }
        ]
      },
      {
        id: "python-phase2-m3",
        title: "Phase 2.3 — Data Structures",
        duration: "50–60 minutes",
        lessons: [
          {
            id: "python-phase2-m3-l1",
            title: "Lists",
            explanation: "Lists store ordered, mutable collections of items. You can add, remove, and change elements.",
            concept: "Indexing starts at 0. Slicing lets you extract sublists.",
            example: 'fruits = ["apple", "banana", "cherry"]\nfruits.append("date")\nfruits[1] = "blueberry"\nprint(fruits[0:2])',
            exercise: {
              prompt: "Create a list of five numbers. Add 10 to each number and print the updated list.",
              starterCode: 'numbers = [1, 2, 3, 4, 5]\n# Modify and print',
              solution: 'numbers = [1, 2, 3, 4, 5]\nfor i in range(len(numbers)):\n    numbers[i] += 10\nprint(numbers)',
              tests: [{ type: "contains", value: "[" }],
              debuggingTip: "Use `append()` to add, `remove()` to delete by value, and `pop()` to delete by index."
            }
          },
          {
            id: "python-phase2-m3-l2",
            title: "Dictionaries",
            explanation: "Dictionaries store key-value pairs. Keys must be unique and immutable.",
            concept: "Use dictionaries for fast lookups and to represent structured data.",
            example: 'person = {"name": "Alice", "age": 25}\nperson["city"] = "New York"\ndel person["age"]\nprint(person.get("name", "Unknown"))',
            exercise: {
              prompt: "Create a dictionary for a book with keys 'title', 'author', 'year'. Print each key and value.",
              starterCode: '# Create dictionary\n\n# Print',
              solution: 'book = {"title": "1984", "author": "Orwell", "year": 1949}\nfor key, value in book.items():\n    print(f"{key}: {value}")',
              tests: [{ type: "contains", value: "{" }],
              debuggingTip: "Use `in` to check if a key exists: `if 'title' in book:`."
            }
          },
          {
            id: "python-phase2-m3-l3",
            title: "Sets and Tuples",
            explanation: "Sets store unordered unique elements. Tuples are immutable ordered sequences.",
            concept: "Sets are great for deduplication and set operations; tuples are often used for fixed data.",
            example: 'colors = {"red", "green", "blue"}\ncolors.add("green")  # no effect\n\ncoords = (10, 20)\nprint(coords[0])',
            exercise: {
              prompt: "Create a tuple of three favorite colors, and a set with some repeated numbers. Print both.",
              starterCode: '# Create tuple and set\n\n# Print',
              solution: 'colors = ("red", "green", "blue")\nnums = {1, 2, 2, 3, 4, 4}\nprint(colors)\nprint(nums)',
              tests: [{ type: "contains", value: "(" }, { type: "contains", value: "{" }],
              debuggingTip: "Tuples cannot be changed after creation; sets have no order."
            }
          }
        ]
      },
      {
        id: "python-phase2-m4",
        title: "Phase 2.4 — File I/O",
        duration: "30–40 minutes",
        lessons: [
          {
            id: "python-phase2-m4-l1",
            title: "Reading and Writing Files",
            explanation: "Use `open()` to work with files. Always close files or use `with` statement for automatic cleanup.",
            concept: "Modes: 'r' read, 'w' write (overwrites), 'a' append, 'r+' read/write.",
            example: 'with open("test.txt", "w") as f:\n    f.write("Hello, file!")\n\nwith open("test.txt", "r") as f:\n    content = f.read()\n    print(content)',
            exercise: {
              prompt: "Write a program that creates a file named 'notes.txt', writes 'My first note', then reads and prints the content.",
              starterCode: '# Write to file\n\n# Read and print',
              solution: 'with open("notes.txt", "w") as f:\n    f.write("My first note")\n\nwith open("notes.txt", "r") as f:\n    print(f.read())',
              tests: [{ type: "contains", value: "open(" }],
              debuggingTip: "Always use `with` to ensure files are closed even if an error occurs."
            }
          }
        ]
      },
      {
        id: "python-phase2-m5",
        title: "Phase 2.5 — Error Handling",
        duration: "35–45 minutes",
        lessons: [
          {
            id: "python-phase2-m5-l1",
            title: "Try / Except",
            explanation: "Handle errors gracefully with try/except. Catch specific exceptions to avoid masking bugs.",
            concept: "You can use `else` (runs if no exception) and `finally` (always runs).",
            example: 'try:\n    x = int(input("Enter a number: "))\n    print(10 / x)\nexcept ValueError:\n    print("That\'s not a number!")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero.")',
            exercise: {
              prompt: "Write a program that asks for two numbers and divides them. Handle cases where the input is not a number or division by zero.",
              starterCode: '# Use try/except',
              solution: 'try:\n    a = int(input("First number: "))\n    b = int(input("Second number: "))\n    print(a / b)\nexcept ValueError:\n    print("Invalid input")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")',
              tests: [{ type: "contains", value: "try:" }],
              debuggingTip: "Catch specific exceptions; bare except catches everything and hides bugs."
            }
          }
        ]
      },

      // ==================== PHASE 3: ADVANCED ====================
      {
        id: "python-phase3-m1",
        title: "Phase 3.1 — Modules and Packages",
        duration: "40–50 minutes",
        lessons: [
          {
            id: "python-phase3-m1-l1",
            title: "Importing Modules",
            explanation: "Python has a vast standard library. Use `import` to bring in modules. You can also create your own modules.",
            concept: "Import specific functions with `from module import function`. Use `as` to alias.",
            example: 'import math\nfrom random import randint\nimport datetime as dt\n\nprint(math.pi)\nprint(randint(1, 10))\nprint(dt.datetime.now())',
            exercise: {
              prompt: "Write a program that imports the `random` module and prints a random integer between 1 and 100.",
              starterCode: '# Import and print',
              solution: 'import random\nprint(random.randint(1, 100))',
              tests: [{ type: "contains", value: "import" }],
              debuggingTip: "You can see all available modules in the Python documentation or by typing `help('modules')` in the interpreter."
            }
          }
        ]
      },
      {
        id: "python-phase3-m2",
        title: "Phase 3.2 — Object-Oriented Programming",
        duration: "60–75 minutes",
        lessons: [
          {
            id: "python-phase3-m2-l1",
            title: "Classes and Objects",
            explanation: "OOP allows you to define blueprints (classes) that create objects with attributes and methods.",
            concept: "Use `class` keyword. `__init__` is the constructor. `self` refers to the instance.",
            example: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        return f"{self.name} says woof!"\n\ndog = Dog("Rex")\nprint(dog.bark())',
            exercise: {
              prompt: "Create a class `Car` with attributes `make`, `model`, and a method `info()` that returns a string describing the car.",
              starterCode: '# Define Car class\n\n# Create an instance and call info',
              solution: 'class Car:\n    def __init__(self, make, model):\n        self.make = make\n        self.model = model\n    def info(self):\n        return f"{self.make} {self.model}"\n\nmy_car = Car("Toyota", "Corolla")\nprint(my_car.info())',
              tests: [{ type: "contains", value: "class" }],
              debuggingTip: "Remember to include `self` as the first parameter of all instance methods."
            }
          },
          {
            id: "python-phase3-m2-l2",
            title: "Inheritance",
            explanation: "Inheritance lets you create a new class based on an existing one, reusing and extending functionality.",
            concept: "Use `class Child(Parent):` to inherit. Override methods by defining them again.",
            example: 'class Animal:\n    def speak(self):\n        return "Some sound"\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof"\n\ndog = Dog()\nprint(dog.speak())',
            exercise: {
              prompt: "Create a base class `Shape` with method `area()`. Create `Rectangle` and `Circle` subclasses that implement `area()` appropriately.",
              starterCode: '# Define classes\n\n# Test them',
              solution: 'import math\nclass Shape:\n    def area(self):\n        pass\n\nclass Rectangle(Shape):\n    def __init__(self, w, h):\n        self.w, self.h = w, h\n    def area(self):\n        return self.w * self.h\n\nclass Circle(Shape):\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        return math.pi * self.r ** 2\n\nprint(Rectangle(3,4).area())\nprint(Circle(5).area())',
              tests: [{ type: "contains", value: "class Rectangle(Shape)" }],
              debuggingTip: "Use `super()` to call parent methods."
            }
          }
        ]
      },
      {
        id: "python-phase3-m3",
        title: "Phase 3.3 — Working with APIs",
        duration: "40–50 minutes",
        lessons: [
          {
            id: "python-phase3-m3-l1",
            title: "Making HTTP Requests",
            explanation: "The `requests` library lets you fetch data from web APIs. Handle JSON responses and errors.",
            concept: "Install `requests` (`pip install requests`). Use `get()`, `post()`, etc.",
            example: 'import requests\nresponse = requests.get("https://api.github.com/users/octocat")\nif response.status_code == 200:\n    data = response.json()\n    print(data["name"])',
            exercise: {
              prompt: "Write a program that fetches a public API (e.g., https://api.chucknorris.io/jokes/random) and prints the joke text.",
              starterCode: '# Import requests\n\n# Make request and print',
              solution: 'import requests\nresponse = requests.get("https://api.chucknorris.io/jokes/random")\nif response.status_code == 200:\n    joke = response.json()["value"]\n    print(joke)',
              tests: [{ type: "contains", value: "requests.get" }],
              debuggingTip: "Always check the response status code before parsing JSON. The API might be down or rate-limited."
            }
          }
        ]
      },
      {
        id: "python-phase3-m4",
        title: "Phase 3.4 — Databases",
        duration: "45–55 minutes",
        lessons: [
          {
            id: "python-phase3-m4-l1",
            title: "SQLite Basics",
            explanation: "SQLite is a lightweight database built into Python. Use the `sqlite3` module to create and query databases.",
            concept: "Connect, create a cursor, execute SQL statements, commit changes.",
            example: 'import sqlite3\nconn = sqlite3.connect("example.db")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)")\ncursor.execute("INSERT INTO users (name) VALUES (?)", ("Alice",))\nconn.commit()\ncursor.execute("SELECT * FROM users")\nprint(cursor.fetchall())\nconn.close()',
            exercise: {
              prompt: "Create a database 'library.db' with a table 'books' (title, author). Insert two books, then query and print all.",
              starterCode: '# Use sqlite3',
              solution: 'import sqlite3\nconn = sqlite3.connect("library.db")\nc = conn.cursor()\nc.execute("CREATE TABLE IF NOT EXISTS books (title TEXT, author TEXT)")\nc.execute("INSERT INTO books VALUES (?, ?)", ("1984", "Orwell"))\nc.execute("INSERT INTO books VALUES (?, ?)", ("Brave New World", "Huxley"))\nconn.commit()\nc.execute("SELECT * FROM books")\nfor row in c.fetchall():\n    print(row)\nconn.close()',
              tests: [{ type: "contains", value: "sqlite3" }],
              debuggingTip: "Use parameterized queries (with ? placeholders) to avoid SQL injection."
            }
          }
        ]
      },
      {
        id: "python-phase3-m5",
        title: "Phase 3.5 — Testing",
        duration: "30–40 minutes",
        lessons: [
          {
            id: "python-phase3-m5-l1",
            title: "Unit Testing with unittest",
            explanation: "Write tests to ensure your code works correctly. The `unittest` module provides test cases.",
            concept: "Create a class that inherits from `unittest.TestCase`. Use `assertEqual`, `assertTrue`, etc.",
            example: 'import unittest\n\ndef add(a, b):\n    return a + b\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(2, 3), 5)\n\nif __name__ == "__main__":\n    unittest.main()',
            exercise: {
              prompt: "Write a function `is_even(n)` that returns True if n is even. Then write a unittest that tests it with at least two cases.",
              starterCode: '# Write function\n\n# Write test',
              solution: 'def is_even(n):\n    return n % 2 == 0\n\nimport unittest\nclass TestEven(unittest.TestCase):\n    def test_even(self):\n        self.assertTrue(is_even(2))\n        self.assertFalse(is_even(3))\n\nif __name__ == "__main__":\n    unittest.main()',
              tests: [{ type: "contains", value: "unittest" }],
              debuggingTip: "Run your tests often. A test suite helps catch regressions."
            }
          }
        ]
      },
      {
        id: "python-phase3-m6",
        title: "Phase 3.6 — Final Capstone: CLI Todo App",
        duration: "60–75 minutes",
        lessons: [
          {
            id: "python-phase3-m6-l1",
            title: "Build a Command-Line Todo List",
            explanation: "Combine everything you've learned: functions, file I/O, error handling, and maybe even a database. Build a simple todo app with add, list, complete, and delete commands.",
            concept: "Use argparse for command-line parsing, store tasks in a JSON file.",
            example: '# See exercise prompt for structure',
            exercise: {
              prompt: "Create a CLI todo app. Commands: `python todo.py add \"Buy milk\"`, `python todo.py list`, `python todo.py done 1`, `python todo.py delete 1`. Store tasks in a JSON file. Use argparse to parse commands.",
              starterCode: 'import argparse\nimport json\nimport os\n\nTODO_FILE = "todos.json"\n\n# Define functions for add, list, done, delete\n\nif __name__ == "__main__":\n    parser = argparse.ArgumentParser()\n    parser.add_argument("command")\n    parser.add_argument("args", nargs="*")\n    args = parser.parse_args()\n    # Implement command handling',
              solution: '# This is a large solution; you can implement incrementally.',
              tests: [{ type: "contains", value: "argparse" }],
              debuggingTip: "Break the problem into small functions. Test each function separately."
            }
          }
        ]
      },

      // ==================== PHASE 4: BONUS TOPICS ====================
      {
        id: "python-phase4-m1",
        title: "Phase 4.1 — List Comprehensions & Lambda",
        duration: "25–30 minutes",
        lessons: [
          {
            id: "python-phase4-m1-l1",
            title: "List Comprehensions",
            explanation: "List comprehensions provide a concise way to create lists. They are faster and more readable than traditional loops for simple transformations.",
            concept: "Syntax: `[expression for item in iterable if condition]`",
            example: 'squares = [x**2 for x in range(10)]\nevens = [x for x in range(20) if x % 2 == 0]\nmatrix = [[i*j for j in range(3)] for i in range(3)]',
            exercise: {
              prompt: "Use a list comprehension to create a list of the first 10 cube numbers (1³, 2³, ... 10³). Print the list.",
              starterCode: '# Write your list comprehension here',
              solution: 'cubes = [x**3 for x in range(1, 11)]\nprint(cubes)',
              tests: [{ type: "contains", value: "for x in" }],
              debuggingTip: "List comprehensions can become hard to read if too complex. When in doubt, use a regular loop."
            }
          },
          {
            id: "python-phase4-m1-l2",
            title: "Lambda Functions",
            explanation: "Lambda functions are small anonymous functions defined with the `lambda` keyword. They are useful for short operations that are used only once.",
            concept: "Syntax: `lambda arguments: expression` – often used with `map()`, `filter()`, `sorted()`.",
            example: 'square = lambda x: x**2\nprint(square(5))\n\nnumbers = [1,2,3,4]\ndoubled = list(map(lambda x: x*2, numbers))\nprint(doubled)\n\nodds = list(filter(lambda x: x%2==1, numbers))\nprint(odds)',
            exercise: {
              prompt: "Write a lambda function that returns the square of a number. Then use `map()` to apply it to the list [1,2,3,4,5] and print the result.",
              starterCode: '# Write your lambda and map call',
              solution: 'numbers = [1,2,3,4,5]\nresult = list(map(lambda x: x**2, numbers))\nprint(result)',
              tests: [{ type: "contains", value: "lambda" }, { type: "contains", value: "map" }],
              debuggingTip: "Lambdas are limited to single expressions. For multiple statements, define a normal function."
            }
          }
        ]
      },
      {
        id: "python-phase4-m2",
        title: "Phase 4.2 — Virtual Environments & pip",
        duration: "20–25 minutes",
        lessons: [
          {
            id: "python-phase4-m2-l1",
            title: "Virtual Environments",
            explanation: "Virtual environments isolate project dependencies. They prevent conflicts between different projects that might need different versions of the same library.",
            concept: "Use `venv` module: `python -m venv venv`, then activate (source venv/bin/activate on Mac/Linux). Install packages with `pip install <package>`.",
            example: '# Create virtual environment\n# python -m venv myenv\n# Activate (Mac/Linux): source myenv/bin/activate\n# Install packages: pip install requests numpy\n# Save dependencies: pip freeze > requirements.txt',
            exercise: {
              prompt: "Write a step‑by‑step comment in your code explaining how to create, activate, and install a package in a virtual environment. Then write a comment showing how to generate a requirements.txt file.",
              starterCode: '# Your explanation here',
              solution: '# 1. Create: python -m venv myenv\n# 2. Activate (Mac/Linux): source myenv/bin/activate\n# 3. Install: pip install requests\n# 4. Save: pip freeze > requirements.txt',
              tests: [{ type: "contains", value: "venv" }],
              debuggingTip: "Always use virtual environments for projects to avoid dependency hell."
            }
          }
        ]
      },
      {
        id: "python-phase4-m3",
        title: "Phase 4.3 — Regular Expressions (regex)",
        duration: "30–40 minutes",
        lessons: [
          {
            id: "python-phase4-m3-l1",
            title: "Introduction to Regex",
            explanation: "Regular expressions are patterns used to match, search, and manipulate text. Python's `re` module provides regex support.",
            concept: "Common patterns: `\\d` digit, `\\w` word character, `+` one or more, `*` zero or more, `[a-z]` character class.",
            example: 'import re\ntext = "My email is john@example.com"\nemail = re.search(r"[\\w\\.-]+@[\\w\\.-]+\\.\\w+", text)\nprint(email.group())',
            exercise: {
              prompt: "Write a program that uses regex to find all phone numbers in the format `(123) 456-7890` from a given string.",
              starterCode: 'import re\ntext = "Call me at (123) 456-7890 or (987) 654-3210"\n# Write your regex and find all matches',
              solution: 'import re\ntext = "Call me at (123) 456-7890 or (987) 654-3210"\npattern = r"\\(\\d{3}\\) \\d{3}-\\d{4}"\nmatches = re.findall(pattern, text)\nprint(matches)',
              tests: [{ type: "contains", value: "re.findall" }],
              debuggingTip: "Test your regex on regex101.com before putting it into code. Raw strings (`r\"...\"`) are essential to avoid escaping issues."
            }
          }
        ]
      },
      {
        id: "python-phase4-m4",
        title: "Phase 4.4 — Debugging with pdb",
        duration: "20–25 minutes",
        lessons: [
          {
            id: "python-phase4-m4-l1",
            title: "Using pdb",
            explanation: "The Python Debugger (`pdb`) lets you pause execution, inspect variables, and step through code line by line. It's essential for finding bugs.",
            concept: "Insert `import pdb; pdb.set_trace()` where you want to stop. Commands: `n` next, `c` continue, `q` quit, `p var` print variable.",
            example: 'def add(a,b):\n    import pdb; pdb.set_trace()\n    return a+b\nresult = add(3,5)',
            exercise: {
              prompt: "Write a function that adds two numbers. Insert a breakpoint with `pdb.set_trace()`, then write comments explaining how to inspect the variables and continue.",
              starterCode: '# Write function with breakpoint',
              solution: 'def add(a,b):\n    import pdb; pdb.set_trace()\n    return a+b\nresult = add(3,5)\n# At the breakpoint, type `p a` to see a, `p b` to see b, `n` to execute next line, `c` to continue.',
              tests: [{ type: "contains", value: "pdb.set_trace()" }],
              debuggingTip: "You can also run `python -m pdb script.py` to start debugging from the first line."
            }
          }
        ]
      }
    ]
  },
  java: {
    label: "Java",
    modules: [
      // ==================== JAVA INTRO ====================
      {
        id: "java-phase0-m1",
        title: "Phase 0 — Welcome to Java",
        duration: "5 minutes",
        lessons: [
          {
            id: "java-phase0-m1-l1",
            title: "What is Java & How This Works",
            explanation: "Java is one of the most widely used languages on the planet. It powers Android apps, enterprise software, and backend systems at companies like Google, Amazon, and Netflix.\n\nIt's a bit more structured than Python — you'll write more boilerplate code — but that structure teaches you how larger programs are built.\n\nHere's how FluentCode works:\n• Read a short lesson\n• Write code in the editor\n• Submit and get instant AI feedback\n\nLet's test the editor. Type the code below and hit Submit.",
            concept: "System.out.println() prints text to the screen in Java. Every Java program needs a class and a main method.",
            example: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("ready");\n    }\n}',
            exercise: {
              prompt: "Type the code that prints \"ready\" to the screen. Copy the example if you need to — the goal is just to make sure the editor works.",
              starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Type your code here\n    }\n}',
              solution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("ready");\n    }\n}',
              tests: [{ type: "contains", value: "System.out.println" }],
              debuggingTip: "Java needs semicolons at the end of statements. If you get an error, check for a missing semicolon."
            }
          }
        ]
      },

      // ==================== JAVA MODULE 1 ====================
      {
        id: "java-m1",
        title: "Module 1 — Java Basics",
        lessons: [
          {
            id: "java-m1-l1",
            title: "Hello World",
            explanation: "Every Java program needs a class and main method.",
            example: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, FluentCode!");\n    }\n}',
            exercise: {
              prompt: "Write a Java program that prints 'Hello from FluentCode!'",
              starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}',
              solution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello from FluentCode!");\n    }\n}',
              tests: [{ type: "contains", value: "System.out.println" }]
            }
          },
          {
            id: "java-m1-l2",
            title: "Variables & Types",
            explanation: "Java is strongly typed. Declare type before variable.",
            example: 'int age = 25;\ndouble pi = 3.14;\nString name = "Alice";\nboolean isReady = true;',
            exercise: {
              prompt: "Declare an int, double, String, and boolean. Print them all.",
              starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Declare variables\n    }\n}',
              solution: 'public class Main {\n    public static void main(String[] args) {\n        int num = 10;\n        double d = 3.14;\n        String s = "Java";\n        boolean b = true;\n        System.out.println(num + " " + d + " " + s + " " + b);\n    }\n}',
              tests: [{ type: "contains", value: "int " }]
            }
          },
          {
            id: "java-m1-l3",
            title: "If Statements",
            explanation: "Control flow with if‑else.",
            example: 'int x = 10;\nif (x > 0) {\n    System.out.println("Positive");\n} else {\n    System.out.println("Non-positive");\n}',
            exercise: {
              prompt: "Write a program that checks if a number is even or odd and prints the result.",
              starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int number = 7;\n        // Write your if statement\n    }\n}',
              solution: 'public class Main {\n    public static void main(String[] args) {\n        int number = 7;\n        if (number % 2 == 0) {\n            System.out.println("Even");\n        } else {\n            System.out.println("Odd");\n        }\n    }\n}',
              tests: [{ type: "contains", value: "if" }]
            }
          },
          {
            id: "java-m1-l4",
            title: "For Loops",
            explanation: "Repeat code a fixed number of times.",
            example: 'for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}',
            exercise: {
              prompt: "Write a for loop that prints numbers 1 to 10.",
              starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Write your loop\n    }\n}',
              solution: 'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(i);\n        }\n    }\n}',
              tests: [{ type: "contains", value: "for" }]
            }
          },
          {
            id: "java-m1-l5",
            title: "Methods",
            explanation: "Reusable blocks of code.",
            example: 'public static int add(int a, int b) {\n    return a + b;\n}',
            exercise: {
              prompt: "Write a method `multiply(int a, int b)` that returns the product. Call it from main and print the result.",
              starterCode: 'public class Main {\n    // Define your method\n    public static void main(String[] args) {\n        // Call it\n    }\n}',
              solution: 'public class Main {\n    static int multiply(int a, int b) {\n        return a * b;\n    }\n    public static void main(String[] args) {\n        System.out.println(multiply(4, 5));\n    }\n}',
              tests: [{ type: "contains", value: "return" }]
            }
          }
        ]
      },
      {
        id: "java-m2",
        title: "Module 2 — Arrays and Collections",
        lessons: [
          {
            id: "java-m2-l1",
            title: "Arrays",
            explanation: "Fixed‑size sequences of the same type.",
            example: 'int[] numbers = {1,2,3};\nSystem.out.println(numbers[0]);',
            exercise: {
              prompt: "Create an array of 5 integers, sum them, and print the sum.",
              starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Create array and sum\n    }\n}',
              solution: 'public class Main {\n    public static void main(String[] args) {\n        int[] nums = {1,2,3,4,5};\n        int sum = 0;\n        for (int n : nums) sum += n;\n        System.out.println(sum);\n    }\n}',
              tests: [{ type: "contains", value: "int[]" }]
            }
          },
          {
            id: "java-m2-l2",
            title: "ArrayList",
            explanation: "Resizable array implementation from the Collections Framework.",
            example: 'import java.util.ArrayList;\nArrayList<String> list = new ArrayList<>();\nlist.add("Apple");\nSystem.out.println(list.get(0));',
            exercise: {
              prompt: "Create an ArrayList of integers, add numbers 1 to 5, then print the list.",
              starterCode: 'import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        // Create and populate ArrayList\n    }\n}',
              solution: 'import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> numbers = new ArrayList<>();\n        for (int i = 1; i <= 5; i++) numbers.add(i);\n        System.out.println(numbers);\n    }\n}',
              tests: [{ type: "contains", value: "ArrayList" }]
            }
          }
        ]
      }
    ]
  }
};

// Helper functions
export const getLessonById = (language, lessonId) => {
  const lang = curriculum[language];
  if (!lang) return null;
  for (const module of lang.modules) {
    for (const lesson of module.lessons) {
      if (lesson.id === lessonId) return { lesson, module };
    }
  }
  return null;
};

export const getAllLessons = (language) => {
  const lang = curriculum[language];
  if (!lang) return [];
  return lang.modules.flatMap(m => m.lessons.map(l => ({ ...l, moduleTitle: m.title, moduleId: m.id })));
};

export const getModuleById = (language, moduleId) => {
  const lang = curriculum[language];
  if (!lang) return null;
  return lang.modules.find(m => m.id === moduleId);
};

export const getModulesByLanguage = (language) => {
  const lang = curriculum[language];
  if (!lang) return [];
  return lang.modules;
};

export const getLessonsByModule = (language, moduleId) => {
  const module = getModuleById(language, moduleId);
  if (!module) return [];
  return module.lessons;
};