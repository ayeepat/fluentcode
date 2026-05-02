// src/lib/curriculum.js
export const curriculum = {
  python: {
    label: "Python",
    modules: [
      {
        id: "python-phase0-m1",
        title: "Phase 0 — Welcome",
        duration: "5 min",
        lessons: [
          {
            id: "python-phase0-m1-l1",
            title: "Your First Step",
            explanation: "Welcome to FluentCode! This is a platform where you'll learn to code by actually coding — just like learning a language by speaking it. Every lesson gives you a tiny, focused challenge. In Python, the most basic thing you can do is make the computer talk to you using the print() function. Let's write your very first line of Python and see the magic happen!",
            concept: "The print() function displays messages on the screen — this is your first way to communicate with the computer.",
            example: "print('Hello, world!')\nprint('I am learning Python!')",
            exercise: {
              prompt: "Use the print() function to make the computer say exactly: 'I am ready to code!' (Don't forget the quotes inside the parentheses!)",
              starterCode: "# Write your first print statement below:\n# Make it say: I am ready to code!\n",
              solution: "print('I am ready to code!')",
              tests: [{ type: "contains", value: "print('I am ready to code!')" }],
              debuggingTip: "Did you put quotes around your message? Python needs quotes to know it's text. And check that your parentheses are balanced — every '(' needs a ')'!"
            }
          }
        ]
      },
      {
        id: "python-phase1-m1",
        title: "Phase 1 — Fundamentals",
        duration: "2 hours",
        lessons: [
          {
            id: "python-phase1-m1-l1",
            title: "Talking with print()",
            explanation: "The print() function is how Python talks to you. You put whatever you want to display inside the parentheses, wrapped in quotes. You can print multiple things by using several print() statements, one after another. Each print statement creates a new line. This is your primary tool for seeing what your program is doing.",
            concept: "print() outputs text to the console — each call creates a new line.",
            example: "print('Hello')\nprint('Goodbye')\nprint('Python is fun!')",
            exercise: {
              prompt: "Write code that prints the following three lines exactly (one per print statement): 'Ready', 'Set', 'Go!'",
              starterCode: "# Print 'Ready', 'Set', and 'Go!' on separate lines\n# Use one print statement per word\n",
              solution: "print('Ready')\nprint('Set')\nprint('Go!')",
              tests: [{ type: "contains", value: "print('Ready')" }, { type: "contains", value: "print('Set')" }, { type: "contains", value: "print('Go!')" }],
              debuggingTip: "Each print() goes on its own line in the code. Make sure you have three separate print statements, not just one. Also, check that your quotes match — if you start with a single quote, end with a single quote."
            }
          },
          {
            id: "python-phase1-m1-l2",
            title: "Listening with input()",
            explanation: "Now let's make your program interactive! The input() function pauses your program and waits for the user to type something. Whatever the user types comes back as text. Usually you'll want to save that text into a variable so you can use it later. Let's ask a question and echo back the answer.",
            concept: "input() lets your program receive text from the user — it always returns a string.",
            example: "name = input('What is your name? ')\nprint('Nice to meet you, ' + name)",
            exercise: {
              prompt: "Write a program that asks the user 'What is your favorite color? ' and then prints 'That is a great color!' on the next line. You don't need to include the color in the response — just ask and then give the compliment.",
              starterCode: "# Ask the user for their favorite color\n# Then print a compliment\n",
              solution: "color = input('What is your favorite color? ')\nprint('That is a great color!')",
              tests: [{ type: "contains", value: "input(" }, { type: "contains", value: "print('That is a great color!')" }],
              debuggingTip: "Make sure you have exactly the right prompt text inside input(). The space after the question mark matters — look closely at the prompt in the instructions! Also, don't forget to store the result in a variable even if you don't use it directly."
            }
          },
          {
            id: "python-phase1-m1-l3",
            title: "Storing Things in Variables",
            explanation: "Variables are like labeled boxes where you can store information. You create a variable just by giving it a name and using the equals sign to put something inside. Variable names can contain letters, numbers, and underscores, but they can't start with a number. Once you've stored something in a variable, you can use that variable anywhere you'd use the original value.",
            concept: "A variable stores a value so you can reuse it — create one with the = sign and a descriptive name.",
            example: "my_name = 'Alex'\nmy_age = 25\nprint(my_name)\nprint(my_age)",
            exercise: {
              prompt: "Create a variable called 'favorite_food' and set it to your favorite food (use quotes for text!). Then print the variable. Finally, change the variable to a different food and print it again.",
              starterCode: "# Create a variable called favorite_food\n# Print it, change it, and print again\n",
              solution: "favorite_food = 'pizza'\nprint(favorite_food)\nfavorite_food = 'sushi'\nprint(favorite_food)",
              tests: [{ type: "contains", value: "favorite_food" }, { type: "contains", value: "print(favorite_food)" }],
              debuggingTip: "When you print a variable, do NOT put quotes around the variable name. print(favorite_food) prints the value. print('favorite_food') would just print the word 'favorite_food' — big difference!"
            }
          },
          {
            id: "python-phase1-m1-l4",
            title: "Working with Strings",
            explanation: "A string is just a piece of text — letters, numbers, symbols, whatever. In Python, strings are wrapped in single or double quotes. You can join strings together using the + operator (that's called concatenation). You can also repeat a string by using * with a number. Strings are one of the most common things you'll work with!",
            concept: "Strings are text wrapped in quotes — you can join them with + and repeat them with *.",
            example: "first = 'Hello'\nlast = 'World'\nfull = first + ' ' + last\nprint(full)\nprint('Ha' * 3)",
            exercise: {
              prompt: "Create two variables: 'greeting' set to 'Hi' and 'name' set to 'Sam'. Then create a third variable 'message' that combines them with a space in between. Print the message. Also print the greeting repeated 4 times.",
              starterCode: "# Create greeting and name variables\n# Combine them with a space and print\n# Also print greeting * 4\n",
              solution: "greeting = 'Hi'\nname = 'Sam'\nmessage = greeting + ' ' + name\nprint(message)\nprint(greeting * 4)",
              tests: [{ type: "contains", value: "greeting = 'Hi'" }, { type: "contains", value: "message = greeting + ' ' + name" }],
              debuggingTip: "Don't forget to add the space! greeting + name would give you 'HiSam' — you need that ' ' in the middle to make it readable. The space is just a string with a single space character inside quotes."
            }
          },
          {
            id: "python-phase1-m1-l5",
            title: "String Superpowers: .upper() and .lower()",
            explanation: "Strings come with built-in superpowers called methods. The .upper() method converts a string to ALL CAPS, and .lower() converts it to all lowercase. You call a method by putting a dot after the string (or variable holding a string) and then the method name with parentheses. These are super handy when you want to standardize user input.",
            concept: ".upper() and .lower() are string methods that change the case of text — use them with a dot and parentheses.",
            example: "text = 'Hello World'\nprint(text.upper())\nprint(text.lower())\nprint('python'.upper())",
            exercise: {
              prompt: "Create a variable 'name' with your name in mixed case (like 'aLiCe'). Then create a variable 'upper_name' using .upper() and a variable 'lower_name' using .lower(). Print both.",
              starterCode: "# Create a mixed-case name\n# Make uppercase and lowercase versions\n# Print both\n",
              solution: "name = 'aLiCe'\nupper_name = name.upper()\nlower_name = name.lower()\nprint(upper_name)\nprint(lower_name)",
              tests: [{ type: "contains", value: ".upper()" }, { type: "contains", value: ".lower()" }],
              debuggingTip: "Make sure you put the parentheses! It's .upper() not .upper. Without the parentheses, Python won't call the method — it'll just give you a weird message about a 'built-in method' instead of the string you want."
            }
          },
          {
            id: "python-phase1-m1-l6",
            title: "F-Strings: String Formatting Magic",
            explanation: "F-strings let you embed variables directly inside your strings — no more messy + signs everywhere! You just put an f before the opening quote, then wrap any variable or expression in curly braces {}. Python will replace the curly braces with the actual values. It's cleaner, faster, and way more readable than concatenation.",
            concept: "F-strings embed variables directly in strings using f before the quote and {variable} inside — they're the modern, clean way to format strings.",
            example: "name = 'Alex'\nage = 25\nprint(f'My name is {name} and I am {age} years old.')\nprint(f'Next year I will be {age + 1}')",
            exercise: {
              prompt: "Create variables 'item' (set to 'book') and 'price' (set to 15). Then use an f-string to print: 'The book costs 15 dollars.' (Use the variables in the f-string, don't hardcode the values in the sentence!)",
              starterCode: "# Create item and price variables\n# Use an f-string to print the sentence\n",
              solution: "item = 'book'\nprice = 15\nprint(f'The {item} costs {price} dollars.')",
              tests: [{ type: "contains", value: "f'" }, { type: "contains", value: "{item}" }, { type: "contains", value: "{price}" }],
              debuggingTip: "Don't forget the f before the opening quote! print('The {item} costs...') won't replace the braces — you'll literally see {item} in the output. That little f makes all the difference."
            }
          },
          {
            id: "python-phase1-m1-l7",
            title: "Numbers: Integers and Floats",
            explanation: "Python has two main number types: integers (whole numbers like 5, -3, 42) and floats (decimal numbers like 3.14, -0.5, 2.0). Python automatically figures out which type a number is based on whether you include a decimal point. You can do math with both types, and they mostly work the way you'd expect.",
            concept: "Integers are whole numbers, floats have decimals — Python chooses the type based on whether you include a decimal point.",
            example: "age = 25\nprice = 19.99\nprint(type(age))\nprint(type(price))\nprint(age + price)",
            exercise: {
              prompt: "Create an integer variable 'students' set to 30, and a float variable 'average_grade' set to 87.5. Print both variables, then print their types using type().",
              starterCode: "# Create an integer and a float\n# Print them and their types\n",
              solution: "students = 30\naverage_grade = 87.5\nprint(students)\nprint(average_grade)\nprint(type(students))\nprint(type(average_grade))",
              tests: [{ type: "contains", value: "students = 30" }, { type: "contains", value: "average_grade = 87.5" }, { type: "contains", value: "type(students)" }],
              debuggingTip: "If you write 30.0 instead of 30, that's a float, not an integer. The decimal point is what tells Python it's a float — even if the decimal part is zero!"
            }
          },
          {
            id: "python-phase1-m1-l8",
            title: "Basic Arithmetic",
            explanation: "Python can do math for you — and it follows the same order of operations you learned in school (PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction). Use + for addition, - for subtraction, * for multiplication, / for division, // for integer division, % for remainder, and ** for exponents.",
            concept: "Python uses +, -, *, /, //, %, ** for arithmetic — it follows standard order of operations.",
            example: "result = 10 + 5 * 2\nprint(result)\nprint(17 // 5)\nprint(17 % 5)\nprint(2 ** 3)",
            exercise: {
              prompt: "Calculate the area of a rectangle with width 7 and height 12. Store the result in a variable 'area' and print it. Then calculate the perimeter (2 * width + 2 * height), store in 'perimeter', and print it.",
              starterCode: "# Calculate area and perimeter of a rectangle\n# width = 7, height = 12\n",
              solution: "width = 7\nheight = 12\narea = width * height\nperimeter = 2 * width + 2 * height\nprint(area)\nprint(perimeter)",
              tests: [{ type: "contains", value: "area = width * height" }, { type: "contains", value: "perimeter" }],
              debuggingTip: "Check your order of operations! 2 * width + 2 * height works because multiplication happens before addition. But if you're unsure, use parentheses: (2 * width) + (2 * height) — they're free and make things crystal clear."
            }
          },
          {
            id: "python-phase1-m1-l9",
            title: "True or False: Booleans",
            explanation: "A boolean is the simplest data type — it can only be True or False (capital T and capital F, always!). Booleans are what powers all decision-making in your programs. You can create them directly, or get them from comparisons like checking if something is equal or greater than something else.",
            concept: "Booleans are True or False values — they're the foundation of all logic and decision-making in code.",
            example: "is_sunny = True\nis_raining = False\nprint(is_sunny)\nprint(type(is_raining))\nprint(5 > 3)",
            exercise: {
              prompt: "Create a boolean variable 'is_logged_in' set to True, and 'has_permission' set to False. Print both variables. Then print the result of checking if 10 is greater than 20 (this should print False).",
              starterCode: "# Create two boolean variables\n# Print them\n# Print a comparison result\n",
              solution: "is_logged_in = True\nhas_permission = False\nprint(is_logged_in)\nprint(has_permission)\nprint(10 > 20)",
              tests: [{ type: "contains", value: "is_logged_in = True" }, { type: "contains", value: "has_permission = False" }],
              debuggingTip: "Capitalization matters! It's True and False with capital first letters, not 'true' or 'false'. Lowercase versions aren't booleans — Python will think you're trying to use an undefined variable."
            }
          },
          {
            id: "python-phase1-m1-l10",
            title: "Type Conversion",
            explanation: "Sometimes you have a number stored as a string (like from input()) and you need to do math with it. Python gives you functions to convert between types: int() turns things into integers, float() makes floats, and str() converts to strings. Just wrap whatever you want to convert in the function call.",
            concept: "int(), float(), and str() convert values between types — crucial when you get string input but need numbers.",
            example: "text = '123'\nnum = int(text)\nprint(num + 10)\nprint(str(45) + ' is a number now')\nprint(float('3.14'))",
            exercise: {
              prompt: "Create a string variable 'age_str' set to '25'. Convert it to an integer and store in 'age_int'. Then print the result of adding 5 to age_int. Also convert the number 100 to a string and concatenate it with ' percent'.",
              starterCode: "# Convert a string to an integer\n# Convert an integer to a string\n",
              solution: "age_str = '25'\nage_int = int(age_str)\nprint(age_int + 5)\nprint(str(100) + ' percent')",
              tests: [{ type: "contains", value: "int(age_str)" }, { type: "contains", value: "str(100)" }],
              debuggingTip: "You can't convert 'twenty-five' to an integer — int() only works on strings that look like numbers. If you see a ValueError, check that your string actually contains digits, not words."
            }
          }
        ]
      },
      {
        id: "python-phase2-m1",
        title: "Phase 2 — Control Flow",
        duration: "2.5 hours",
        lessons: [
          {
            id: "python-phase2-m1-l1",
            title: "Comparing Things",
            explanation: "Before your program can make decisions, it needs to compare values. Python gives you comparison operators: == checks if two things are equal, != checks if they're not equal, < and > check less than and greater than, and <= and >= include equality. These comparisons always give you a boolean result — True or False.",
            concept: "Comparison operators (==, !=, <, >, <=, >=) compare values and return True or False.",
            example: "a = 10\nb = 20\nprint(a == b)\nprint(a != b)\nprint(a < b)\nprint(a >= 10)",
            exercise: {
              prompt: "Create variables x = 50 and y = 30. Print the result of checking if x is greater than y, if x equals y, and if x is NOT equal to y. You should do three separate print statements.",
              starterCode: "# Create x = 50 and y = 30\n# Print three comparison results\n",
              solution: "x = 50\ny = 30\nprint(x > y)\nprint(x == y)\nprint(x != y)",
              tests: [{ type: "contains", value: "x > y" }, { type: "contains", value: "x == y" }, { type: "contains", value: "x != y" }],
              debuggingTip: "Double-check you're using == for equality, not =. A single = assigns a value; double == checks if two values are the same. Mixing these up is one of the most common beginner mistakes!"
            }
          },
          {
            id: "python-phase2-m1-l2",
            title: "Making Decisions with if",
            explanation: "The if statement is how your program makes choices. You write 'if' followed by a condition that evaluates to True or False, then a colon, then an indented block of code. That indented code only runs if the condition is True. If the condition is False, Python skips right over it. Simple but incredibly powerful!",
            concept: "An if statement runs its indented code block only when its condition is True — the colon and indentation are mandatory.",
            example: "temperature = 30\nif temperature > 25:\n    print('It is a hot day!')\n    print('Stay hydrated!')\n    print('Weather check complete.')",
            exercise: {
              prompt: "Create a variable 'score' and set it to 85. Write an if statement that checks if score is greater than or equal to 60. If it is, print 'You passed!' and on the next indented line print 'Congratulations!'.",
              starterCode: "# Create score = 85\n# Write an if statement that prints two messages\n",
              solution: "score = 85\nif score >= 60:\n    print('You passed!')\n    print('Congratulations!')",
              tests: [{ type: "contains", value: "if score >= 60:" }, { type: "contains", value: "print('You passed!')" }, { type: "contains", value: "print('Congratulations!')" }],
              debuggingTip: "Don't forget the colon after the condition! if score >= 60 without the colon is a syntax error. And make sure both print statements are indented the same amount — inconsistent indentation confuses Python."
            }
          },
          {
            id: "python-phase2-m1-l3",
            title: "Handling Multiple Paths: elif and else",
            explanation: "Real decisions have more than one outcome. After an if, you can add elif (short for 'else if') to check another condition, and else to catch everything that didn't match any condition. Python checks the if first, then each elif in order, and finally runs the else block if nothing matched. Only ONE block will execute.",
            concept: "elif checks additional conditions after an if, and else catches everything else — only one block runs in an if/elif/else chain.",
            example: "score = 75\nif score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')\nelif score >= 70:\n    print('C')\nelse:\n    print('F')",
            exercise: {
              prompt: "Write a program that grades a score. Create score = 73. If score is 90 or above, print 'A'. If score is 80 or above (but less than 90), print 'B'. If 70 or above, print 'C'. For anything else, print 'Needs work'. Only one grade should print.",
              starterCode: "# Create score = 73\n# Use if/elif/else to print the correct grade\n",
              solution: "score = 73\nif score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')\nelif score >= 70:\n    print('C')\nelse:\n    print('Needs work')",
              tests: [{ type: "contains", value: "if score >= 90:" }, { type: "contains", value: "elif score >= 80:" }, { type: "contains", value: "elif score >= 70:" }, { type: "contains", value: "else:" }],
              debuggingTip: "The order of your elifs matters enormously! Check the highest threshold first (90), then 80, then 70. If you flip the order and check >= 70 first, every score above 70 will get 'C' and never reach the higher grades."
            }
          },
          {
            id: "python-phase2-m1-l4",
            title: "Repeating with While Loops",
            explanation: "A while loop keeps repeating a block of code as long as a condition is True. It checks the condition before each repetition. If the condition starts as False, the loop body never runs at all. Be careful — if the condition never becomes False, you'll get an infinite loop that runs forever!",
            concept: "A while loop repeats code as long as its condition is True — always make sure the condition can eventually become False.",
            example: "count = 0\nwhile count < 5:\n    print(count)\n    count = count + 1\nprint('Done!')",
            exercise: {
              prompt: "Create a variable 'num' set to 1. Write a while loop that continues as long as num is less than or equal to 5. Inside the loop, print num, then increase num by 1. The output should show numbers 1 through 5.",
              starterCode: "# Create num = 1\n# Write a while loop to print 1 through 5\n",
              solution: "num = 1\nwhile num <= 5:\n    print(num)\n    num = num + 1",
              tests: [{ type: "contains", value: "while num <= 5:" }, { type: "contains", value: "num = num + 1" }],
              debuggingTip: "If your loop runs forever (the page freezes), you probably forgot to increment num inside the loop. Without num = num + 1, the condition num <= 5 is always True and the loop never ends. Always double-check that your loop condition will eventually fail!"
            }
          },
          {
            id: "python-phase2-m1-l5",
            title: "For Loops with range()",
            explanation: "For loops are perfect when you know exactly how many times you want to repeat something. The range() function generates a sequence of numbers — range(5) gives you 0, 1, 2, 3, 4. You can also specify a start and end: range(1, 6) gives 1, 2, 3, 4, 5. For loops are cleaner than while loops when you're counting.",
            concept: "for loops with range() iterate a specific number of times — range(n) counts from 0 to n-1.",
            example: "for i in range(5):\n    print('Hello!')\nfor num in range(1, 4):\n    print(num)",
            exercise: {
              prompt: "Write a for loop using range() that prints the numbers 0 through 7 (all on separate lines). Then write a second for loop using range(10, 16) that prints the numbers 10 through 15.",
              starterCode: "# Print 0 through 7 with a for loop\n# Print 10 through 15 with a for loop\n",
              solution: "for i in range(8):\n    print(i)\nfor num in range(10, 16):\n    print(num)",
              tests: [{ type: "contains", value: "for i in range(8):" }, { type: "contains", value: "for num in range(10, 16):" }],
              debuggingTip: "Remember that range(8) goes from 0 to 7 — that's 8 numbers total, but the last one is 7. If you want 0 through 7, use range(8). The stop value is always exclusive, so range(10, 16) includes 10 but stops before 16."
            }
          },
          {
            id: "python-phase2-m1-l6",
            title: "For Loops with Lists",
            explanation: "For loops shine when you use them to go through each item in a list. Instead of range(), you put the list itself after 'in'. The loop variable takes on each value from the list, one at a time. This is how you process collections of data — and it's one of the most common patterns in programming.",
            concept: "A for loop can iterate directly over a list — the loop variable gets each item one by one.",
            example: "fruits = ['apple', 'banana', 'orange']\nfor fruit in fruits:\n    print(f'I like {fruit}')",
            exercise: {
              prompt: "Create a list called 'colors' with three of your favorite colors (as strings). Use a for loop to print each color preceded by 'Color: ' — so if one color is 'blue', print 'Color: blue'.",
              starterCode: "# Create a list of three colors\n# Loop through and print each with 'Color: ' prefix\n",
              solution: "colors = ['red', 'blue', 'green']\nfor color in colors:\n    print(f'Color: {color}')",
              tests: [{ type: "contains", value: "for color in colors:" }, { type: "contains", value: "print(f'Color: {color}')" }],
              debuggingTip: "The variable name after 'for' is up to you — choose something descriptive. color makes sense here, but x works too. Just make sure you use the SAME variable name inside the loop. for color in colors: print(fruit) would crash because 'fruit' doesn't exist!"
            }
          },
          {
            id: "python-phase2-m1-l7",
            title: "Break and Continue",
            explanation: "Sometimes you need to control a loop from the inside. The break statement immediately exits the loop entirely — no more iterations. The continue statement skips the rest of the current iteration and jumps to the next one. These give you fine-grained control when simple conditions aren't enough.",
            concept: "break exits a loop immediately; continue skips to the next iteration — use them sparingly for special cases.",
            example: "for i in range(10):\n    if i == 3:\n        continue\n    if i == 7:\n        break\n    print(i)",
            exercise: {
              prompt: "Write a for loop that goes through numbers 0 to 9 (use range). If the number is 4, skip it with continue. If the number is 8, exit the loop with break. Print every other number inside the loop. You should see 0, 1, 2, 3, 5, 6, 7.",
              starterCode: "# Loop through 0 to 9\n# Skip 4, stop at 8\n",
              solution: "for i in range(10):\n    if i == 4:\n        continue\n    if i == 8:\n        break\n    print(i)",
              tests: [{ type: "contains", value: "continue" }, { type: "contains", value: "break" }],
              debuggingTip: "Make sure your print comes AFTER the continue and break checks. If you print before checking, you'll print 4 and 8 before the continue and break can do their jobs. The order of operations inside the loop matters!"
            }
          },
          {
            id: "python-phase2-m1-l8",
            title: "Capstone: Number Guessing Game",
            explanation: "Let's put it all together! You'll build a number guessing game using everything you've learned: variables, input, while loops, conditionals, and comparisons. The computer will pick a secret number (we'll hardcode it for now), and the user keeps guessing until they get it right. You'll give hints like 'too high' or 'too low'.",
            concept: "Combine variables, while loops, input, and if/else to build an interactive guessing game.",
            example: "secret = 7\nguess = 0\nwhile guess != secret:\n    guess = int(input('Guess: '))\n    if guess < secret:\n        print('Too low!')\n    elif guess > secret:\n        print('Too high!')\nprint('Correct!')",
            exercise: {
              prompt: "Build a guessing game: set secret = 5. Use a while loop to keep asking the user for guesses (convert their input to an int). If the guess is too low, print 'Higher!'. If too high, print 'Lower!'. When they guess correctly, print 'You got it!' — and the loop should end.",
              starterCode: "# Build a number guessing game\n# secret = 5\n# Keep asking until they guess correctly\n",
              solution: "secret = 5\nguess = 0\nwhile guess != secret:\n    guess = int(input('Guess the number: '))\n    if guess < secret:\n        print('Higher!')\n    elif guess > secret:\n        print('Lower!')\nprint('You got it!')",
              tests: [{ type: "contains", value: "while guess != secret:" }, { type: "contains", value: "int(input(" }, { type: "contains", value: "print('You got it!')" }],
              debuggingTip: "Don't forget to convert input() to an int! input() always returns a string, and comparing a string to the integer 5 will always say they're not equal. Wrap that input in int() right away."
            }
          }
        ]
      },
      {
        id: "python-phase3-m1",
        title: "Phase 3 — Functions and Data",
        duration: "3 hours",
        lessons: [
          {
            id: "python-phase3-m1-l1",
            title: "Defining Functions",
            explanation: "A function is a reusable block of code that has a name. You define it once with 'def', then call it by name whenever you need it. Functions keep your code organized and prevent you from writing the same thing over and over. When you call a function, Python jumps to its definition, runs the code inside, then comes back.",
            concept: "Functions package reusable code under a name — define with def, call by using the name with parentheses.",
            example: "def greet():\n    print('Hello!')\n    print('How are you?')\n\ngreet()\nprint('Back in main code')\ngreet()",
            exercise: {
              prompt: "Define a function called 'say_motto' that prints 'Keep coding!' and 'Never give up!' on two separate lines. Then call the function twice. You should see the two lines printed twice.",
              starterCode: "# Define your function here\n# Call it twice here\n",
              solution: "def say_motto():\n    print('Keep coding!')\n    print('Never give up!')\n\nsay_motto()\nsay_motto()",
              tests: [{ type: "contains", value: "def say_motto():" }, { type: "contains", value: "say_motto()" }],
              debuggingTip: "Make sure you define the function BEFORE you call it. Python reads top to bottom — if you try to call say_motto() before defining it, Python won't know what you're talking about. Always put your def statements at the top."
            }
          },
          {
            id: "python-phase3-m1-l2",
            title: "Functions with Parameters",
            explanation: "Parameters make functions flexible. Instead of doing the same thing every time, a function can accept input values (parameters) and behave differently based on what you pass in. You define parameters inside the parentheses when writing the function, and you provide arguments when calling it.",
            concept: "Parameters let functions accept input — define them in the parentheses, pass arguments when calling.",
            example: "def greet(name):\n    print(f'Hello, {name}!')\n\ngreet('Alice')\ngreet('Bob')\ngreet('Charlie')",
            exercise: {
              prompt: "Define a function called 'double' that takes one parameter 'number'. Inside the function, print the number multiplied by 2. Then call double(5), double(10), and double(3) — you should see 10, 20, and 6 printed.",
              starterCode: "# Define double function with one parameter\n# Call it three times with different values\n",
              solution: "def double(number):\n    print(number * 2)\n\ndouble(5)\ndouble(10)\ndouble(3)",
              tests: [{ type: "contains", value: "def double(number):" }, { type: "contains", value: "double(5)" }, { type: "contains", value: "double(10)" }],
              debuggingTip: "Don't put quotes around numbers when calling the function! double('5') passes a string, and '5' * 2 gives you '55' (string repetition), not 10. Pass the actual integer: double(5)."
            }
          },
          {
            id: "python-phase3-m1-l3",
            title: "Return Values",
            explanation: "Functions can do more than just print things — they can send a value back using the 'return' keyword. That returned value can be stored in a variable or used directly. Once a function hits return, it stops running and hands the value back to whoever called it. This is how functions produce results you can actually use.",
            concept: "The return keyword sends a value back from a function — capture it in a variable to use it later.",
            example: "def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(result)\nprint(add(10, 20))",
            exercise: {
              prompt: "Define a function 'multiply' that takes two parameters a and b, and RETURNS their product (a * b). Call the function with 4 and 7, store the result in a variable, and print it. The output should be 28.",
              starterCode: "# Define multiply function that returns a * b\n# Call it, store result, print\n",
              solution: "def multiply(a, b):\n    return a * b\n\nproduct = multiply(4, 7)\nprint(product)",
              tests: [{ type: "contains", value: "return a * b" }, { type: "contains", value: "multiply(4, 7)" }],
              debuggingTip: "Don't confuse return with print! If your function prints the result instead of returning it, you'll see the number but you won't be able to store it. print(product) will show None because the function didn't return anything. Use return when you want to use the result later."
            }
          },
          {
            id: "python-phase3-m1-l4",
            title: "Default Parameters",
            explanation: "You can give parameters default values — if the caller doesn't provide an argument, the default is used. This makes functions more flexible. Define defaults with an equals sign in the parameter list. Parameters with defaults must come after any without defaults.",
            concept: "Default parameter values let callers omit arguments — the function falls back to the default.",
            example: "def greet(name='friend'):\n    print(f'Hello, {name}!')\n\ngreet('Alice')\ngreet()",
            exercise: {
              prompt: "Define a function 'power' with parameters 'base' and 'exponent' where exponent defaults to 2. The function should return base raised to the exponent power (use **). Call it twice: once as power(5) and once as power(3, 4). Print both results — you should see 25 and 81.",
              starterCode: "# Define power with exponent defaulting to 2\n# Call twice and print results\n",
              solution: "def power(base, exponent=2):\n    return base ** exponent\n\nprint(power(5))\nprint(power(3, 4))",
              tests: [{ type: "contains", value: "exponent=2" }, { type: "contains", value: "power(5)" }, { type: "contains", value: "power(3, 4)" }],
              debuggingTip: "Parameters with defaults must come AFTER parameters without defaults. def power(exponent=2, base) is a syntax error. Python reads left to right and needs all required parameters first."
            }
          },
          {
            id: "python-phase3-m1-l5",
            title: "Lists: Creating and Indexing",
            explanation: "A list is an ordered collection of items, created with square brackets. Each item has a position (index), starting from 0. You can access individual items using bracket notation: my_list[0] gets the first item. Lists can hold any type of data, even mixed types, and you can change items after creation.",
            concept: "Lists are ordered, mutable collections — access items with zero-based indexing using brackets.",
            example: "scores = [95, 87, 72, 91]\nprint(scores[0])\nprint(scores[2])\nscores[1] = 90\nprint(scores)",
            exercise: {
              prompt: "Create a list 'planets' with: 'Mercury', 'Venus', 'Earth', 'Mars'. Print the first planet (index 0). Print the third planet (index 2). Then change the second planet (index 1) to 'Jupiter' and print the entire list.",
              starterCode: "# Create planets list\n# Access and modify items\n",
              solution: "planets = ['Mercury', 'Venus', 'Earth', 'Mars']\nprint(planets[0])\nprint(planets[2])\nplanets[1] = 'Jupiter'\nprint(planets)",
              tests: [{ type: "contains", value: "planets[0]" }, { type: "contains", value: "planets[1] = 'Jupiter'" }],
              debuggingTip: "Indexing starts at 0, not 1! The first item is [0], second is [1], third is [2]. If you try planets[4] on a list with 4 items, you'll get an IndexError — the last valid index is 3."
            }
          },
          {
            id: "python-phase3-m1-l6",
            title: "List Methods: append, remove, pop",
            explanation: "Lists come with powerful methods for adding and removing items. append() adds an item to the end. remove() deletes the first occurrence of a specific value. pop() removes an item at a given index (or the last item if no index is given) and returns it. These methods modify the list directly.",
            concept: "append() adds to end, remove() deletes by value, pop() removes by index and returns — all modify the list.",
            example: "fruits = ['apple', 'banana']\nfruits.append('orange')\nprint(fruits)\nfruits.remove('apple')\nprint(fruits)\npopped = fruits.pop(0)\nprint(popped)\nprint(fruits)",
            exercise: {
              prompt: "Start with an empty list 'tasks'. Append 'Study' to it, then append 'Exercise'. Print the list. Remove 'Study', then append 'Sleep'. Pop the last item and store it in 'last_task'. Print last_task and then print the final list.",
              starterCode: "# Start with empty tasks list\n# Append, remove, pop\n",
              solution: "tasks = []\ntasks.append('Study')\ntasks.append('Exercise')\nprint(tasks)\ntasks.remove('Study')\ntasks.append('Sleep')\nlast_task = tasks.pop()\nprint(last_task)\nprint(tasks)",
              tests: [{ type: "contains", value: "tasks.append(" }, { type: "contains", value: "tasks.remove('Study')" }, { type: "contains", value: "tasks.pop()" }],
              debuggingTip: "remove() deletes by VALUE, not by index — tasks.remove(0) looks for the value 0 in the list, not the first item. If you get a ValueError saying the item isn't in the list, you might be confusing remove with pop."
            }
          },
          {
            id: "python-phase3-m1-l7",
            title: "Dictionaries: Creating and Accessing",
            explanation: "A dictionary stores key-value pairs — instead of numeric indexes, you use descriptive keys to look up values. Create one with curly braces, using colons between keys and values. Access values with square brackets containing the key. Dictionaries are perfect when you want to label your data rather than just number it.",
            concept: "Dictionaries map keys to values — use curly braces and access with dict[key] notation.",
            example: "person = {'name': 'Alex', 'age': 25, 'city': 'Paris'}\nprint(person['name'])\nprint(person['age'])\nperson['job'] = 'developer'\nprint(person)",
            exercise: {
              prompt: "Create a dictionary 'book' with keys: 'title' (set to '1984'), 'author' (set to 'Orwell'), and 'year' (set to 1949). Print the title using key access. Then add a new key 'rating' set to 5 and print the whole dictionary.",
              starterCode: "# Create book dictionary\n# Access and modify\n",
              solution: "book = {'title': '1984', 'author': 'Orwell', 'year': 1949}\nprint(book['title'])\nbook['rating'] = 5\nprint(book)",
              tests: [{ type: "contains", value: "book['title']" }, { type: "contains", value: "book['rating'] = 5" }],
              debuggingTip: "Key names are case-sensitive! book['Title'] (capital T) won't find 'title' (lowercase t). If you get a KeyError, double-check that your key spelling and capitalization exactly match the dictionary."
            }
          },
          {
            id: "python-phase3-m1-l8",
            title: "Dictionary Methods and Iteration",
            explanation: "Dictionaries have handy methods: .keys() gives all the keys, .values() gives all values, .items() gives key-value pairs. You can loop through a dictionary with a for loop. The .get() method safely accesses keys, returning a default value if the key doesn't exist instead of crashing.",
            concept: "Use .keys(), .values(), .items() to iterate dictionaries; .get() provides safe access with defaults.",
            example: "person = {'name': 'Alex', 'age': 25}\nfor key, value in person.items():\n    print(f'{key}: {value}')\nprint(person.get('job', 'unknown'))",
            exercise: {
              prompt: "Create a dictionary 'prices' with: 'apple' -> 0.5, 'banana' -> 0.3, 'orange' -> 0.6. Use a for loop with .items() to print each item like 'apple costs 0.5'. Then use .get() to safely try to get the price of 'grape' with a default of 'Not found' and print the result.",
              starterCode: "# Create prices dictionary\n# Loop with .items()\n# Use .get() safely\n",
              solution: "prices = {'apple': 0.5, 'banana': 0.3, 'orange': 0.6}\nfor fruit, price in prices.items():\n    print(f'{fruit} costs {price}')\nprint(prices.get('grape', 'Not found'))",
              tests: [{ type: "contains", value: "prices.items()" }, { type: "contains", value: "prices.get('grape', 'Not found')" }],
              debuggingTip: "When using .items() in a for loop, remember you need TWO loop variables: one for the key and one for the value. for fruit, price in prices.items(): — if you only use one variable (for item in prices.items():), you'll get a tuple instead of unpacked values."
            }
          },
          {
            id: "python-phase3-m1-l9",
            title: "Tuples: Immutable Lists",
            explanation: "A tuple is like a list, but you can't change it after creation — it's immutable. Tuples use parentheses instead of square brackets. You still access items by index. Use tuples when you have a collection that should never change, like coordinates or days of the week. They're faster and safer for fixed data.",
            concept: "Tuples are immutable sequences — use parentheses, they can't be modified after creation.",
            example: "point = (3, 4)\nprint(point[0])\nprint(point[1])\n# point[0] = 5 # This would crash!\nfor val in point:\n    print(val)",
            exercise: {
              prompt: "Create a tuple 'dimensions' with values (1920, 1080). Print the first value and the second value. Then print both dimensions with labels.",
              starterCode: "# Create dimensions tuple\n# Print both values with labels\n",
              solution: "dimensions = (1920, 1080)\nprint(f'Width: {dimensions[0]}')\nprint(f'Height: {dimensions[1]}')",
              tests: [{ type: "contains", value: "dimensions = (1920, 1080)" }, { type: "contains", value: "dimensions[0]" }, { type: "contains", value: "dimensions[1]" }],
              debuggingTip: "Tuples use parentheses, lists use square brackets. ('a', 'b') is a tuple; ['a', 'b'] is a list. If you accidentally try to change a tuple with dimensions[0] = 100, you'll get a TypeError. Tuples are meant to stay exactly as they are!"
            }
          },
          {
            id: "python-phase3-m1-l10",
            title: "Sets: Unique Collections",
            explanation: "A set is an unordered collection of unique items — no duplicates allowed. Create them with curly braces or the set() function. Sets automatically remove duplicates and are great for membership testing with the 'in' keyword. You can also do cool set operations like union, intersection, and difference.",
            concept: "Sets store unique, unordered items — no duplicates, perfect for membership tests.",
            example: "numbers = {1, 2, 3, 2, 1}\nprint(numbers)\nprint(3 in numbers)\nprint(5 in numbers)\nfruits = {'apple', 'banana'}\nfruits.add('orange')\nprint(fruits)",
            exercise: {
              prompt: "Create a set 'tags' with the values: 'python', 'coding', 'python', 'beginner' (notice the duplicate!). Print the set to see it deduplicated. Then check if 'coding' is in the set using 'in' and print the True/False result. Add 'fun' to the set and print it again.",
              starterCode: "# Create tags set with duplicates\n# Check membership, add item\n",
              solution: "tags = {'python', 'coding', 'python', 'beginner'}\nprint(tags)\nprint('coding' in tags)\ntags.add('fun')\nprint(tags)",
              tests: [{ type: "contains", value: "tags = {" }, { type: "contains", value: "'coding' in tags" }, { type: "contains", value: "tags.add(" }],
              debuggingTip: "Sets are unordered — the printed order might not match the order you typed. Don't worry about that! Also, empty curly braces {} create an empty dictionary, not a set. For an empty set, use set()."
            }
          },
          {
            id: "python-phase3-m1-l11",
            title: "Capstone: Contact Book",
            explanation: "You've learned so much — let's build something real! A contact book uses dictionaries to store contacts (name as key, phone as value), and functions to add, look up, and list contacts. This combines functions, dictionaries, loops, and conditionals into one practical mini-application you could actually use.",
            concept: "Combine functions, dictionaries, loops, and conditionals to build a practical contact management app.",
            example: "contacts = {}\ndef add_contact(name, phone):\n    contacts[name] = phone\ndef lookup(name):\n    return contacts.get(name, 'Not found')\n\nadd_contact('Alice', '555-1234')\nprint(lookup('Alice'))\nprint(lookup('Bob'))",
            exercise: {
              prompt: "Build a mini contact book: create an empty dictionary 'contacts'. Define add_contact(name, phone) that adds to the dictionary. Define list_all() that loops through and prints all contacts as 'name: phone'. Call add_contact twice (with any names/numbers you like), then call list_all().",
              starterCode: "# Create contacts dictionary\n# Define add_contact and list_all functions\n# Add two contacts and list them\n",
              solution: "contacts = {}\ndef add_contact(name, phone):\n    contacts[name] = phone\ndef list_all():\n    for name, phone in contacts.items():\n        print(f'{name}: {phone}')\n\nadd_contact('Alice', '555-1111')\nadd_contact('Bob', '555-2222')\nlist_all()",
              tests: [{ type: "contains", value: "def add_contact" }, { type: "contains", value: "def list_all" }, { type: "contains", value: "contacts.items()" }],
              debuggingTip: "Make sure your list_all function actually LOOPs through contacts — it shouldn't hardcode specific names. Use for name, phone in contacts.items(): so it works no matter how many contacts you add later."
            }
          }
        ]
      },
      {
        id: "python-phase4-m1",
        title: "Phase 4 — Intermediate",
        duration: "3 hours",
        lessons: [
          {
            id: "python-phase4-m1-l1",
            title: "List Comprehensions",
            explanation: "List comprehensions are a concise way to create new lists by transforming or filtering existing ones. They pack a for loop into a single, readable line. The syntax is [expression for item in list]. You can even add an if clause at the end to filter. Once you get the hang of them, you'll reach for them constantly.",
            concept: "List comprehensions create new lists in one line: [expression for item in iterable] — compact and readable.",
            example: "numbers = [1, 2, 3, 4, 5]\nsquares = [n**2 for n in numbers]\nprint(squares)\nevens = [n for n in numbers if n % 2 == 0]\nprint(evens)",
            exercise: {
              prompt: "Given the list nums = [1, 2, 3, 4, 5, 6], use a list comprehension to create a new list 'doubled' where each number is multiplied by 2. Then create another list comprehension 'big' that contains only numbers greater than 3. Print both new lists.",
              starterCode: "nums = [1, 2, 3, 4, 5, 6]\n# Create doubled list\n# Create big list (only nums > 3)\n",
              solution: "nums = [1, 2, 3, 4, 5, 6]\ndoubled = [n * 2 for n in nums]\nbig = [n for n in nums if n > 3]\nprint(doubled)\nprint(big)",
              tests: [{ type: "contains", value: "[n * 2 for n in nums]" }, { type: "contains", value: "[n for n in nums if n > 3]" }],
              debuggingTip: "The order matters: it's [expression for variable in list]. Don't write [for n in nums n*2] — that's reversed. Think of it as reading left to right like a sentence: 'do n squared for each n in nums'."
            }
          },
          {
            id: "python-phase4-m1-l2",
            title: "Lambda Functions",
            explanation: "A lambda is a tiny, anonymous function that you can write in a single line. It's perfect for short, simple operations you only need once. The syntax is: lambda arguments: expression. Unlike regular functions, lambdas automatically return their expression — no 'return' keyword needed. They're often used with functions like sorted() or map().",
            concept: "Lambda functions are one-line anonymous functions: lambda x: x * 2 — great for short, throwaway operations.",
            example: "double = lambda x: x * 2\nprint(double(5))\nprint(double(10))\nadd = lambda a, b: a + b\nprint(add(3, 7))",
            exercise: {
              prompt: "Create a lambda function assigned to a variable 'square' that takes one argument and returns its square (the number times itself). Test it by calling square(4) and square(9), printing both results. You should see 16 and 81.",
              starterCode: "# Create square lambda\n# Test with 4 and 9\n",
              solution: "square = lambda x: x * x\nprint(square(4))\nprint(square(9))",
              tests: [{ type: "contains", value: "lambda x:" }, { type: "contains", value: "square(4)" }, { type: "contains", value: "square(9)" }],
              debuggingTip: "Lambda functions don't use the return keyword — whatever comes after the colon is automatically returned. If you write lambda x: return x * x, you'll get a syntax error. Just write the expression: lambda x: x * x."
            }
          },
          {
            id: "python-phase4-m1-l3",
            title: "Error Handling with try/except",
            explanation: "Errors happen — and that's okay! Instead of crashing, you can catch errors with try/except. Put risky code in the try block. If an error occurs, Python jumps to the except block instead of crashing. This lets you handle problems gracefully, like showing a friendly message instead of a scary traceback.",
            concept: "try/except catches errors so your program can handle them gracefully instead of crashing.",
            example: "try:\n    number = int(input('Enter a number: '))\n    print(f'You entered {number}')\nexcept:\n    print('That was not a valid number!')\nprint('Program continues...')",
            exercise: {
              prompt: "Write a try/except block that tries to convert the string 'abc' to an integer with int(). In the except block, print 'Conversion failed!'. After the whole try/except, print 'Done.' — this should print even if the error occurs.",
              starterCode: "# Try to convert 'abc' to int\n# Catch the error and print a message\n",
              solution: "try:\n    int('abc')\nexcept:\n    print('Conversion failed!')\nprint('Done.')",
              tests: [{ type: "contains", value: "try:" }, { type: "contains", value: "except:" }, { type: "contains", value: "print('Conversion failed!')" }],
              debuggingTip: "A bare 'except:' catches ALL errors, which can hide bugs. In this simple lesson it's fine, but as you advance, specify the error type: except ValueError: — this way you only catch what you expect and other bugs still get your attention."
            }
          },
          {
            id: "python-phase4-m1-l4",
            title: "Specific Exceptions",
            explanation: "Python has many specific error types: ValueError (wrong type of value), TypeError (wrong type of operation), ZeroDivisionError (dividing by zero), and more. Catching specific exceptions lets you respond differently to different problems. It also prevents you from accidentally hiding bugs you didn't anticipate.",
            concept: "Catch specific exceptions like ValueError and TypeError to handle different errors differently.",
            example: "try:\n    num = int('hello')\nexcept ValueError:\n    print('Not a valid number!')\nexcept TypeError:\n    print('Wrong type!')\nprint('Handled gracefully.')",
            exercise: {
              prompt: "Write a try block that divides 10 by 0 (which causes a ZeroDivisionError). Catch that specific error with 'except ZeroDivisionError:' and print 'Cannot divide by zero!'. Print 'All done.' after the except block.",
              starterCode: "# Try dividing by zero\n# Catch ZeroDivisionError specifically\n",
              solution: "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero!')\nprint('All done.')",
              tests: [{ type: "contains", value: "except ZeroDivisionError:" }, { type: "contains", value: "print('Cannot divide by zero!')" }],
              debuggingTip: "If you write except ValueError: but the actual error is ZeroDivisionError, your except block won't catch it and the program will still crash. Make sure the exception type matches what actually happens — read the error message to find the right type!"
            }
          },
          {
            id: "python-phase4-m1-l5",
            title: "Reading Files with open()",
            explanation: "Python can read files from your computer using the open() function. The most common pattern uses 'with open(filename, 'r') as file:' — this automatically closes the file when you're done. You can read the entire content with .read(), or read line by line with a for loop. This is how programs load data from files.",
            concept: "Use with open(filename, 'r') as file: to safely read files — .read() gets all content, for loops read lines.",
            example: "# Assuming a file 'example.txt' exists\n# with open('example.txt', 'r') as file:\n#    content = file.read()\n#    print(content)\nprint('File reading structure demonstrated')",
            exercise: {
              prompt: "Write the syntax for reading a file. Write a with statement that opens 'data.txt' in read mode ('r') and aliases it as 'f'. Inside the with block, read the content into a variable 'content' using .read() and print it.",
              starterCode: "# Write file reading syntax\n# Open 'data.txt', read, print\n",
              solution: "with open('data.txt', 'r') as f:\n    content = f.read()\n    print(content)",
              tests: [{ type: "contains", value: "with open('data.txt', 'r') as f:" }, { type: "contains", value: "f.read()" }],
              debuggingTip: "Always use 'with' when opening files — it ensures the file is properly closed even if an error occurs. If you just do file = open('data.txt'), you must manually call file.close() later, which is easy to forget."
            }
          },
          {
            id: "python-phase4-m1-l6",
            title: "Writing to Files",
            explanation: "Just like reading, you can write to files using open() with 'w' mode (which overwrites) or 'a' mode (which appends). The .write() method sends text to the file. Be careful with 'w' mode — it erases existing content! Always use 'with' for safe file handling.",
            concept: "Open files with 'w' to write (overwrites) or 'a' to append — use .write() to send text to the file.",
            example: "# with open('output.txt', 'w') as f:\n#    f.write('Hello, file!\\n')\n#    f.write('Second line')\nprint('File writing example syntax')",
            exercise: {
              prompt: "Write a with statement that opens 'output.txt' in write mode ('w') as 'f'. Inside, write the string 'Line one\\n' to the file, then write 'Line two'. Remember that .write() doesn't automatically add newlines — you'll need to add \\n yourself if you want them on separate lines.",
              starterCode: "# Open output.txt for writing\n# Write two lines\n",
              solution: "with open('output.txt', 'w') as f:\n    f.write('Line one\\n')\n    f.write('Line two')",
              tests: [{ type: "contains", value: "with open('output.txt', 'w') as f:" }, { type: "contains", value: "f.write(" }],
              debuggingTip: "The .write() method doesn't add newlines automatically! If you want text on separate lines, you must include \\n yourself. f.write('hello') followed by f.write('world') will produce 'helloworld' in the file, not two lines."
            }
          },
          {
            id: "python-phase4-m1-l7",
            title: "Importing Modules",
            explanation: "Python comes with tons of built-in modules — libraries of pre-written code you can use. You import them with the 'import' keyword. Once imported, you access functions and variables with dot notation: module_name.function(). This keeps your code organized and lets you leverage thousands of pre-built tools.",
            concept: "import lets you use code from modules — access functions with module_name.function() dot notation.",
            example: "import math\nprint(math.pi)\nprint(math.sqrt(16))\nprint(math.floor(3.7))",
            exercise: {
              prompt: "Import Python's built-in 'math' module. Use math.ceil() to round 4.2 up and print the result. Use math.floor() to round 4.8 down and print the result. Then print the value of math.pi.",
              starterCode: "# Import math module\n# Use ceil, floor, and pi\n",
              solution: "import math\nprint(math.ceil(4.2))\nprint(math.floor(4.8))\nprint(math.pi)",
              tests: [{ type: "contains", value: "import math" }, { type: "contains", value: "math.ceil(4.2)" }, { type: "contains", value: "math.floor(4.8)" }],
              debuggingTip: "You must write 'math.' before the function name every time. If you just write ceil(4.2) without the module prefix, Python will say the function isn't defined. The dot tells Python where to find the function."
            }
          },
          {
            id: "python-phase4-m1-l8",
            title: "The random Module",
            explanation: "The random module generates random numbers — great for games, simulations, or just adding unpredictability. random.randint(a, b) gives a random integer between a and b (inclusive). random.choice(list) picks a random item from a list. random.random() gives a float between 0 and 1. Let's play with chance!",
            concept: "random.randint(), random.choice(), and random.random() generate random values for games and simulations.",
            example: "import random\nprint(random.randint(1, 10))\nprint(random.randint(1, 10))\ncolors = ['red', 'blue', 'green']\nprint(random.choice(colors))",
            exercise: {
              prompt: "Import random. Create a list 'options' with three strings: 'rock', 'paper', 'scissors'. Use random.choice() to pick one and print it. Then use random.randint() to roll a six-sided die (1 through 6) and print the result.",
              starterCode: "# Import random\n# Create options list\n# Use choice and randint\n",
              solution: "import random\noptions = ['rock', 'paper', 'scissors']\nprint(random.choice(options))\nprint(random.randint(1, 6))",
              tests: [{ type: "contains", value: "import random" }, { type: "contains", value: "random.choice(options)" }, { type: "contains", value: "random.randint(1, 6)" }],
              debuggingTip: "randint's range is inclusive on both ends — random.randint(1, 6) can return 1, 2, 3, 4, 5, or 6. This is different from range() where the end is exclusive! Easy to mix up, so remember: randint includes the last number."
            }
          },
          {
            id: "python-phase4-m1-l9",
            title: "The math Module",
            explanation: "Python's math module is packed with mathematical functions beyond basic arithmetic. math.sqrt(x) for square roots, math.pow(x, y) for powers, math.fabs(x) for absolute value, and constants like math.pi and math.e. Whenever you need more than +, -, *, /, check the math module first.",
            concept: "The math module provides advanced math functions — sqrt, pow, fabs, plus constants like pi and e.",
            example: "import math\nprint(math.sqrt(25))\nprint(math.pow(2, 3))\nprint(math.fabs(-10))\nprint(math.e)",
            exercise: {
              prompt: "Import math. Calculate and print: the square root of 144, 3 raised to the power of 4 (using math.pow), and the absolute value of -99 (using math.fabs).",
              starterCode: "# Import math\n# Calculate sqrt, pow, fabs\n",
              solution: "import math\nprint(math.sqrt(144))\nprint(math.pow(3, 4))\nprint(math.fabs(-99))",
              tests: [{ type: "contains", value: "math.sqrt(144)" }, { type: "contains", value: "math.pow(3, 4)" }, { type: "contains", value: "math.fabs(-99)" }],
              debuggingTip: "Don't confuse math.pow() with Python's built-in ** operator. math.pow(3, 4) returns 81.0 (a float), while 3 ** 4 returns 81 (an integer). Both work, but be aware of the type difference!"
            }
          }
        ]
      },
      {
        id: "python-phase5-m1",
        title: "Phase 5 — Object-Oriented Programming",
        duration: "2.5 hours",
        lessons: [
          {
            id: "python-phase5-m1-l1",
            title: "What Is a Class?",
            explanation: "A class is a blueprint for creating objects. Think of it like a cookie cutter — the class defines the shape and the objects are the actual cookies. Classes let you bundle data (attributes) and behavior (methods) together into one package. This is the foundation of object-oriented programming, and it helps you organize larger programs.",
            concept: "A class is a blueprint for objects — it groups related data and functions together under one name.",
            example: "class Dog:\n    pass\n\nmy_dog = Dog()\nprint(type(my_dog))\nprint(isinstance(my_dog, Dog))",
            exercise: {
              prompt: "Create an empty class called 'Car' (use the 'pass' keyword for the empty body). Then create an instance of Car and assign it to a variable called 'my_car'. Print the type of my_car to verify it's a Car object.",
              starterCode: "# Define Car class\n# Create an instance\n# Print type\n",
              solution: "class Car:\n    pass\n\nmy_car = Car()\nprint(type(my_car))",
              tests: [{ type: "contains", value: "class Car:" }, { type: "contains", value: "my_car = Car()" }],
              debuggingTip: "Class names by convention start with a capital letter (Car, not car), and you create instances using the class name followed by parentheses: Car(). The 'pass' keyword is just a placeholder that means 'do nothing' — it's required when the class body is empty."
            }
          },
          {
            id: "python-phase5-m1-l2",
            title: "__init__ and self",
            explanation: "The __init__ method is a special function that runs automatically when you create a new object. It's where you set up the object's initial data. The 'self' parameter refers to the specific instance being created — it's how you attach data to that particular object. Every method in a class must have self as its first parameter.",
            concept: "__init__ initializes new objects; self refers to the specific instance — it's how you attach attributes.",
            example: "class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n\ns1 = Student('Alice', 90)\ns2 = Student('Bob', 85)\nprint(s1.name)\nprint(s2.grade)",
            exercise: {
              prompt: "Create a class 'Book' with an __init__ method that takes 'title' and 'author' as parameters and stores them as attributes (self.title and self.author). Create two Book instances with different titles and authors, then print the title of each.",
              starterCode: "# Define Book class with __init__\n# Create two instances\n# Print titles\n",
              solution: "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n\nbook1 = Book('1984', 'Orwell')\nbook2 = Book('Dune', 'Herbert')\nprint(book1.title)\nprint(book2.title)",
              tests: [{ type: "contains", value: "def __init__(self, title, author):" }, { type: "contains", value: "self.title = title" }, { type: "contains", value: "book1.title" }],
              debuggingTip: "Always put self as the first parameter in __init__! def __init__(title, author): without self will give you an error. Also, ensure you use two underscores on each side: __init__."
            }
          },
          {
            id: "python-phase5-m1-l3",
            title: "Class Methods",
            explanation: "Besides __init__, you can add other methods to your class — these are the actions your objects can perform. Methods are just functions defined inside a class, with self as the first parameter. They can access and modify the object's attributes using self. This is where your objects come alive with behavior!",
            concept: "Methods are functions inside a class — they use self to access the object's data and perform actions.",
            example: "class Counter:\n    def __init__(self):\n        self.count = 0\n    def increment(self):\n        self.count += 1\n    def get_value(self):\n        return self.count\n\nc = Counter()\nc.increment()\nc.increment()\nprint(c.get_value())",
            exercise: {
              prompt: "Create a class 'BankAccount' with __init__ that sets self.balance to 0. Add a method 'deposit(self, amount)' that adds amount to self.balance. Add a method 'get_balance(self)' that returns self.balance. Create an account, deposit 100, then 50, and print the balance.",
              starterCode: "# Define BankAccount class\n# Add deposit and get_balance methods\n# Test with two deposits\n",
              solution: "class BankAccount:\n    def __init__(self):\n        self.balance = 0\n    def deposit(self, amount):\n        self.balance += amount\n    def get_balance(self):\n        return self.balance\n\naccount = BankAccount()\naccount.deposit(100)\naccount.deposit(50)\nprint(account.get_balance())",
              tests: [{ type: "contains", value: "def deposit(self, amount):" }, { type: "contains", value: "self.balance += amount" }, { type: "contains", value: "account.get_balance()" }],
              debuggingTip: "Don't forget self in your method definitions! def deposit(amount): will crash because Python calls deposit with the instance as the first argument. Always write def deposit(self, amount): so the self can receive the instance."
            }
          },
          {
            id: "python-phase5-m1-l4",
            title: "Inheritance",
            explanation: "Inheritance lets a class take on all the methods and attributes of another class. The new class is the 'child', the original is the 'parent'. You indicate inheritance by putting the parent class name in parentheses after the child class name. The child can add new methods or modify inherited ones — this is how you reuse and extend code.",
            concept: "Inheritance lets a child class inherit everything from a parent class — put the parent in parentheses.",
            example: "class Vehicle:\n    def start(self):\n        print('Engine starting...')\n\nclass Car(Vehicle):\n    def honk(self):\n        print('Beep beep!')\n\nmy_car = Car()\nmy_car.start()\nmy_car.honk()",
            exercise: {
              prompt: "Create a parent class 'Animal' with a method 'speak(self)' that prints 'Some sound'. Create a child class 'Dog' that inherits from Animal. Create a Dog instance and call speak() on it — it should print 'Some sound' even though Dog has no speak method!",
              starterCode: "# Define Animal with speak method\n# Define Dog inheriting from Animal\n# Create Dog instance and call speak\n",
              solution: "class Animal:\n    def speak(self):\n        print('Some sound')\n\nclass Dog(Animal):\n    pass\n\nd = Dog()\nd.speak()",
              tests: [{ type: "contains", value: "class Dog(Animal):" }, { type: "contains", value: "d.speak()" }],
              debuggingTip: "The parent class must be defined BEFORE the child class. If you write class Dog(Animal): before defining Animal, Python will complain that Animal is not defined. Always put your parent class definitions first."
            }
          },
          {
            id: "python-phase5-m1-l5",
            title: "Overriding Methods",
            explanation: "Inheritance is great, but sometimes the child needs to do things differently. Overriding means defining a method in the child class with the same name as one in the parent. The child's version takes over — that's override. You can even call the parent's version using super().method_name() if you want to extend rather than replace.",
            concept: "Override a parent method by defining one with the same name in the child — use super() to call the parent version.",
            example: "class Animal:\n    def speak(self):\n        print('Some sound')\n\nclass Cat(Animal):\n    def speak(self):\n        print('Meow!')\n\nc = Cat()\nc.speak()",
            exercise: {
              prompt: "Start with the Animal class from before (with speak printing 'Some sound'). Create a class 'Cat' that inherits from Animal and OVERRIDES speak to print 'Meow!' instead. Create a Cat instance and call speak() — it should say 'Meow!', not 'Some sound'.",
              starterCode: "# Define Animal (same as before)\n# Define Cat with overridden speak\n# Test it\n",
              solution: "class Animal:\n    def speak(self):\n        print('Some sound')\n\nclass Cat(Animal):\n    def speak(self):\n        print('Meow!')\n\nc = Cat()\nc.speak()",
              tests: [{ type: "contains", value: "class Cat(Animal):" }, { type: "contains", value: "def speak(self):" }, { type: "contains", value: "print('Meow!')" }],
              debuggingTip: "If your Cat still says 'Some sound', check that you spelled the method name exactly the same as in the parent. speak is not the same as Speak or speaak — Python is case-sensitive and exact-match on names. A typo means you're defining a new method instead of overriding."
            }
          },
          {
            id: "python-phase5-m1-l6",
            title: "Capstone: Bank Account Class",
            explanation: "Time to build something real! You'll create a full BankAccount class with deposits, withdrawals, a minimum balance check, and even a savings account that inherits from it. This ties together classes, __init__, methods, inheritance, and overriding into one practical project you could actually use as a foundation.",
            concept: "Combine classes, __init__, methods, and inheritance to build a practical banking system.",
            example: "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n    def withdraw(self, amount):\n        if amount <= self.balance:\n            self.balance -= amount\n            return True\n        return False\n\nacc = BankAccount('Alice', 100)\nprint(acc.withdraw(50))\nprint(acc.balance)",
            exercise: {
              prompt: "Build a BankAccount class with __init__(self, owner, balance=0) that stores owner and balance. Add withdraw(self, amount) that subtracts from balance only if there are enough funds — return True if successful, False otherwise. Add deposit(self, amount). Create an account, deposit 200, withdraw 50, and print the final balance.",
              starterCode: "# Define BankAccount class\n# withdraw, deposit methods\n# Test and print final balance\n",
              solution: "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n    def withdraw(self, amount):\n        if amount <= self.balance:\n            self.balance -= amount\n            return True\n        return False\n    def deposit(self, amount):\n        self.balance += amount\n\nacc = BankAccount('Alice')\nacc.deposit(200)\nacc.withdraw(50)\nprint(acc.balance)",
              tests: [{ type: "contains", value: "class BankAccount:" }, { type: "contains", value: "def withdraw" }, { type: "contains", value: "return False" }],
              debuggingTip: "Your withdraw method needs to check the balance BEFORE subtracting! If you just do self.balance -= amount without the if check, your account could go negative — which is fine for some designs but not what we want here. Always verify sufficient funds first."
            }
          }
        ]
      },
      {
        id: "python-phase6-m1",
        title: "Phase 6 — Real World",
        duration: "2 hours",
        lessons: [
          {
            id: "python-phase6-m1-l1",
            title: "Working with JSON",
            explanation: "JSON (JavaScript Object Notation) is the universal language of data on the web. Python's json module lets you convert Python dictionaries to JSON strings with json.dumps(), and parse JSON strings back to dictionaries with json.loads(). This is how apps save data, communicate with servers, and share information.",
            concept: "json.dumps() converts Python objects to JSON strings; json.loads() parses JSON strings into Python objects.",
            example: "import json\ndata = {'name': 'Alice', 'age': 25}\njson_str = json.dumps(data)\nprint(json_str)\nparsed = json.loads(json_str)\nprint(parsed['name'])",
            exercise: {
              prompt: "Import json. Create a Python dictionary 'person' with name 'Bob' and score 95. Convert it to a JSON string using json.dumps() and print the string. Then parse the string back using json.loads() and print the type of the result.",
              starterCode: "# Import json\n# Create dictionary, dump to string, load back\n",
              solution: "import json\nperson = {'name': 'Bob', 'score': 95}\njson_str = json.dumps(person)\nprint(json_str)\nparsed = json.loads(json_str)\nprint(type(parsed))",
              tests: [{ type: "contains", value: "json.dumps(person)" }, { type: "contains", value: "json.loads(json_str)" }],
              debuggingTip: "It's dumps() and loads() — the 's' stands for 'string'. If you try json.dump() (without the s), you'll need a file object, not a string. For working with strings in memory, always use dumps and loads."
            }
          },
          {
            id: "python-phase6-m1-l2",
            title: "Making HTTP Requests",
            explanation: "The urllib.request module lets your Python programs talk to the internet. You can fetch data from URLs, interact with APIs, and download web content. The urlopen() function opens a connection to a URL, and you can read the response just like a file. This is how apps get live data from the web.",
            concept: "urllib.request.urlopen() fetches data from URLs — read the response like a file to get web content.",
            example: "import urllib.request\n# response = urllib.request.urlopen('https://example.com')\n# html = response.read()\n# print(html[:100])\nprint('Use urlopen() and .read() to fetch web data')",
            exercise: {
              prompt: "Import urllib.request. Write the code structure to open a URL 'https://api.example.com/data' (we're practicing the syntax). Store the response, read it into a variable 'data', and print it.",
              starterCode: "# Import urllib.request\n# Open URL, read response, print\n",
              solution: "import urllib.request\nresponse = urllib.request.urlopen('https://api.example.com/data')\ndata = response.read()\nprint(data)",
              tests: [{ type: "contains", value: "urllib.request.urlopen(" }, { type: "contains", value: "response.read()" }],
              debuggingTip: "urlopen returns a response object, not the raw data! You must call .read() on the response to get the actual content. response alone is just an HTTP response object — response.read() is the bytes you're looking for."
            }
          },
          {
            id: "python-phase6-m1-l3",
            title: "Unit Testing with unittest",
            explanation: "Professional developers write tests for their code, and Python's unittest module makes it easy. You create a test class that inherits from unittest.TestCase, then write methods starting with 'test_' that check your code. Use self.assertEqual() and other assert methods to verify your functions return the right values.",
            concept: "unittest lets you write automated tests — create a TestCase class with test_ methods using assertEqual and friends.",
            example: "import unittest\ndef add(a, b):\n    return a + b\n\nclass TestAdd(unittest.TestCase):\n    def test_add_positive(self):\n        self.assertEqual(add(2, 3), 5)\n\nprint('Tests defined!')",
            exercise: {
              prompt: "Define a function 'square(x)' that returns x * x. Import unittest. Create a test class 'TestSquare' that inherits from unittest.TestCase. Add a test method 'test_square' that uses self.assertEqual to check that square(4) equals 16.",
              starterCode: "# Define square function\n# Import unittest\n# Create TestSquare class with one test\n",
              solution: "import unittest\n\ndef square(x):\n    return x * x\n\nclass TestSquare(unittest.TestCase):\n    def test_square(self):\n        self.assertEqual(square(4), 16)",
              tests: [{ type: "contains", value: "import unittest" }, { type: "contains", value: "class TestSquare(unittest.TestCase):" }, { type: "contains", value: "self.assertEqual" }],
              debuggingTip: "Test method names MUST start with 'test_' — not 'Test', not 'check_', but exactly 'test_'. If your method is called square_test() or testSquare(), unittest won't find it. The prefix is how unittest knows which methods are tests."
            }
          }
        ]
      }
    ]
  },
    java: {
    label: "Java",
    modules: [
      {
        id: "java-phase0-m1",
        title: "Phase 0 — Welcome",
        duration: "10 min",
        lessons: [
          {
            id: "java-phase0-m1-l1",
            title: "Your First Java Program",
            explanation: "Welcome to Java on FluentCode! Java is one of the world's most popular programming languages. Every Java program needs a class and a main method. Your first tool is System.out.println(), which prints text to the console.",
            concept: "Java programs start in the main method, and System.out.println() prints output to the console.",
            example: "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, world!\");\n        System.out.println(\"I am learning Java!\");\n    }\n}",
            exercise: {
              prompt: "Write a complete Java program with a class called 'FirstProgram' and a main method. Inside main, use System.out.println() to print 'I am ready to code in Java!' exactly.",
              starterCode: "// Define a public class called FirstProgram\n// Add the main method inside\n// Print the message\n",
              solution: "public class FirstProgram {\n    public static void main(String[] args) {\n        System.out.println(\"I am ready to code in Java!\");\n    }\n}",
              tests: [{ type: "contains", value: "public class FirstProgram" }, { type: "contains", value: "System.out.println" }],
              debuggingTip: "Java is case-sensitive! It's 'System' and 'String' with capital S. Use double quotes for text. Single quotes are only for single letters (chars)!"
            }
          }
        ]
      },
      {
        id: "java-phase1-m1",
        title: "Phase 1 — Fundamentals",
        duration: "2.5 hours",
        lessons: [
          {
            id: "java-phase1-m1-l1",
            title: "System.out.println Basics",
            explanation: "System.out.println() adds a newline after each message. System.out.print() does not. In Java, text must be in double quotes.",
            concept: "System.out.println() prints with a newline; System.out.print() prints without one.",
            example: "public class Output {\n    public static void main(String[] args) {\n        System.out.println(\"First line\");\n        System.out.print(\"Hello \");\n        System.out.print(\"World!\");\n    }\n}",
            exercise: {
              prompt: "Write a complete Java program (class 'Printer') that prints 'Ready', 'Set', and 'Go!' on separate lines using three println statements.",
              starterCode: "// Create Printer class\n// Add main method\n// Print three lines\n",
              solution: "public class Printer {\n    public static void main(String[] args) {\n        System.out.println(\"Ready\");\n        System.out.println(\"Set\");\n        System.out.println(\"Go!\");\n    }\n}",
              tests: [{ type: "contains", value: "public class Printer" }, { type: "contains", value: "System.out.println" }],
              debuggingTip: "Check your semicolons! Every statement in Java must end with one (;)."
            }
          },
          {
            id: "java-phase1-m1-l2",
            title: "Variables and Primitive Types",
            explanation: "Java types include int (whole numbers), double (decimals), boolean (true/false), and char (single characters). Once declared, the type cannot change.",
            concept: "Java variables must declare a fixed type: int, double, boolean, or char.",
            example: "public class Types {\n    public static void main(String[] args) {\n        int age = 25;\n        double price = 19.99;\n        boolean isReady = true;\n        char grade = 'A';\n        System.out.println(age);\n    }\n}",
            exercise: {
              prompt: "Write a program (class 'Variables') declaring: int 'students' = 30, double 'average' = 87.5, and boolean 'passed' = true. Print all three.",
              starterCode: "// Create Variables class\n// Declare int, double, boolean and print\n",
              solution: "public class Variables {\n    public static void main(String[] args) {\n        int students = 30;\n        double average = 87.5;\n        boolean passed = true;\n        System.out.println(students);\n        System.out.println(average);\n        System.out.println(passed);\n    }\n}",
              tests: [{ type: "contains", value: "int students" }, { type: "contains", value: "double average" }, { type: "contains", value: "boolean passed" }],
              debuggingTip: "Variables do not need quotes around them when being printed. System.out.println(students) will print 30."
            }
          },
          {
            id: "java-phase1-m1-l3",
            title: "String Type and Operations",
            explanation: "String (capital S) is for text. You can join strings with the + operator.",
            concept: "String (capital S) holds text — use + to concatenate.",
            example: "public class Strings {\n    public static void main(String[] args) {\n        String first = \"Hello\";\n        String last = \"World\";\n        System.out.println(first + \" \" + last);\n    }\n}",
            exercise: {
              prompt: "Create a class 'Greeting' with Strings 'title' (Mr.) and 'name' (Smith). Combine them with a space into 'fullGreeting' and print it. Then print 'Age: ' followed by 42.",
              starterCode: "// Create Greeting class\n// Combine strings and print\n",
              solution: "public class Greeting {\n    public static void main(String[] args) {\n        String title = \"Mr.\";\n        String name = \"Smith\";\n        String fullGreeting = title + \" \" + name;\n        System.out.println(fullGreeting);\n        System.out.println(\"Age: \" + 42);\n    }\n}",
              tests: [{ type: "contains", value: "String title" }, { type: "contains", value: "String fullGreeting" }],
              debuggingTip: "Remember: 'string' lowercase will not work. It must be 'String'."
            }
          },
          {
            id: "java-phase1-m1-l4",
            title: "String Methods",
            explanation: "Strings are immutable. .toUpperCase() and .toLowerCase() return new strings.",
            concept: ".toUpperCase() and .toLowerCase() return new strings; the original remains unchanged.",
            example: "String text = \"Java\";\nSystem.out.println(text.toUpperCase());",
            exercise: {
              prompt: "Create a class 'CaseChanger' with String 'mixed' = 'JaVa Is CoOl'. Print it in UPPERCASE, then lowercase, then print its .length().",
              starterCode: "// Create CaseChanger class\n",
              solution: "public class CaseChanger {\n    public static void main(String[] args) {\n        String mixed = \"JaVa Is CoOl\";\n        System.out.println(mixed.toUpperCase());\n        System.out.println(mixed.toLowerCase());\n        System.out.println(mixed.length());\n        System.out.println(mixed);\n    }\n}",
              tests: [{ type: "contains", value: "mixed.toUpperCase()" }],
              debuggingTip: "Methods like length() require parentheses, unlike the length property for arrays."
            }
          },
          {
            id: "java-phase1-m1-l5",
            title: "String Formatting",
            explanation: "String.format() uses %s for strings, %d for integers, and %f for decimals.",
            concept: "String.format() provides precise control over variable embedding.",
            example: "String.format(\"Name: %s, Age: %d\", \"Alex\", 25);",
            exercise: {
              prompt: "Create a class 'Formatter' with item = 'book' and price = 15.99. Use String.format to print 'The book costs 15.99 dollars.' using %s and %.2f.",
              starterCode: "// Use String.format\n",
              solution: "public class Formatter {\n    public static void main(String[] args) {\n        String item = \"book\";\n        double price = 15.99;\n        String message = String.format(\"The %s costs %.2f dollars.\", item, price);\n        System.out.println(message);\n    }\n}",
              tests: [{ type: "contains", value: "String.format" }],
              debuggingTip: "%.2f tells Java to format a decimal with exactly two digits after the point."
            }
          },
          {
            id: "java-phase1-m1-l6",
            title: "Arithmetic Operators",
            explanation: "Java uses standard math operators. Integer division truncates decimals unless you cast to double.",
            concept: "Integer division (int / int) results in an int; use casting for decimal results.",
            example: "System.out.println(17 / 5); // Prints 3\nSystem.out.println(17.0 / 5); // Prints 3.4",
            exercise: {
              prompt: "Create a class 'Calculator' with x = 20 and y = 6. Print x / y, x % y, and then (double) x / y.",
              starterCode: "// Integer vs Double math\n",
              solution: "public class Calculator {\n    public static void main(String[] args) {\n        int x = 20;\n        int y = 6;\n        System.out.println(x / y);\n        System.out.println(x % y);\n        System.out.println((double) x / y);\n    }\n}",
              tests: [{ type: "contains", value: "(double) x" }],
              debuggingTip: "The modulo operator (%) gives you the remainder of a division."
            }
          },
          {
            id: "java-phase1-m1-l7",
            title: "Scanner for User Input",
            explanation: "Import java.util.Scanner to read input. Use nextLine() for strings and nextInt() for integers.",
            concept: "Scanner reads user input — remember to import it and close it.",
            example: "import java.util.Scanner;\nScanner s = new Scanner(System.in);",
            exercise: {
              prompt: "Create a class 'Reader'. Ask 'Enter your age: ', read an int, and print 'You will be ' + (age + 1) + ' next year.' Close the scanner.",
              starterCode: "import java.util.Scanner;\n",
              solution: "import java.util.Scanner;\npublic class Reader {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print(\"Enter your age: \");\n        int age = input.nextInt();\n        System.out.println(\"You will be \" + (age + 1) + \" next year.\");\n        input.close();\n    }\n}",
              tests: [{ type: "contains", value: "Scanner input = new Scanner" }],
              debuggingTip: "Always import Scanner at the very top of your file, before the class."
            }
          },
          {
            id: "java-phase1-m1-l8",
            title: "Type Casting",
            explanation: "Narrowing casting (double to int) requires parentheses and truncates the decimal.",
            concept: "(int) converts a double to an integer by chopping off decimals.",
            example: "double d = 9.9; int i = (int) d; // i is 9",
            exercise: {
              prompt: "Create class 'Converter'. Cast double value = 9.7 to an int 'whole'. Print both.",
              starterCode: "// Practice narrowing casting\n",
              solution: "public class Converter {\n    public static void main(String[] args) {\n        double value = 9.7;\n        int whole = (int) value;\n        System.out.println(value);\n        System.out.println(whole);\n    }\n}",
              tests: [{ type: "contains", value: "(int) value" }],
              debuggingTip: "Casting doesn't round numbers; it simply deletes everything after the decimal point."
            }
          },
          {
            id: "java-phase1-m1-l9",
            title: "The Math Class",
            explanation: "Math.sqrt(), Math.pow(), and Math.random() are built-in static methods.",
            concept: "Use the Math class for advanced mathematical operations.",
            example: "Math.sqrt(16); // 4.0",
            exercise: {
              prompt: "In class 'MathFun', print the square root of 144 and 3 cubed using Math methods.",
              starterCode: "// Use Math.sqrt and Math.pow\n",
              solution: "public class MathFun {\n    public static void main(String[] args) {\n        System.out.println(Math.sqrt(144));\n        System.out.println(Math.pow(3, 3));\n    }\n}",
              tests: [{ type: "contains", value: "Math.sqrt(144)" }],
              debuggingTip: "Math.pow(base, exponent) returns a double value."
            }
          }
        ]
      },
      {
        id: "java-phase2-m1",
        title: "Phase 2 — Control Flow",
        duration: "2.5 hours",
        lessons: [
          {
            id: "java-phase2-m1-l1",
            title: "Comparison Operators",
            explanation: "Use == for numbers, but .equals() for Strings.",
            concept: "Comparison operators return booleans; use .equals() for String text comparison.",
            example: "String a = \"hi\"; if (a.equals(\"hi\")) { ... }",
            exercise: {
              prompt: "Compare x=50 and y=30. Print x > y, x == y, and check if String s1=\"Java\" equals s2=\"Java\".",
              starterCode: "// Compare numbers and strings\n",
              solution: "public class Compare {\n    public static void main(String[] args) {\n        int x = 50; int y = 30;\n        System.out.println(x > y);\n        System.out.println(x == y);\n        String s1 = \"Java\"; String s2 = \"Java\";\n        System.out.println(s1.equals(s2));\n    }\n}",
              tests: [{ type: "contains", value: ".equals(" }]
            }
          },
          {
            id: "java-phase2-m1-l2",
            title: "If Statements",
            explanation: "Code inside { } runs only if the condition in ( ) is true.",
            concept: "if (condition) { code }",
            example: "if (score > 60) { System.out.println(\"Pass\"); }",
            exercise: {
              prompt: "If score = 75 is >= 60, print 'You passed!' and 'Well done!'.",
              starterCode: "// If block\n",
              solution: "public class PassCheck {\n    public static void main(String[] args) {\n        int score = 75;\n        if (score >= 60) {\n            System.out.println(\"You passed!\");\n            System.out.println(\"Well done!\");\n        }\n    }\n}",
              tests: [{ type: "contains", value: "if (score >= 60)" }]
            }
          },
          {
            id: "java-phase2-m1-l3",
            title: "If/Else If/Else",
            explanation: "Only the first matching block in the chain runs.",
            concept: "Chain multiple conditions together.",
            example: "if (x > 10) { ... } else if (x > 5) { ... } else { ... }",
            exercise: {
              prompt: "Grade score 73: 90+ 'A', 80+ 'B', 70+ 'C', else 'Needs work'.",
              starterCode: "// Multi-branch if\n",
              solution: "public class Grader {\n    public static void main(String[] args) {\n        int score = 73;\n        if (score >= 90) System.out.println(\"A\");\n        else if (score >= 80) System.out.println(\"B\");\n        else if (score >= 70) System.out.println(\"C\");\n        else System.out.println(\"Needs work\");\n    }\n}",
              tests: [{ type: "contains", value: "else if" }]
            }
          },
          {
            id: "java-phase2-m1-l4",
            title: "While Loops",
            explanation: "Repeats while the condition remains true.",
            concept: "while (condition) { ... }",
            example: "while (count < 5) { count++; }",
            exercise: {
              prompt: "Print numbers 1 to 5 using a while loop and num++.",
              starterCode: "// Counting loop\n",
              solution: "public class Counter {\n    public static void main(String[] args) {\n        int num = 1;\n        while (num <= 5) {\n            System.out.println(num);\n            num++;\n        }\n    }\n}",
              tests: [{ type: "contains", value: "while (num <= 5)" }]
            }
          },
          {
            id: "java-phase2-m1-l5",
            title: "For Loops",
            explanation: "Standard counting loop with init, condition, and increment.",
            concept: "for (int i = 0; i < 5; i++) { ... }",
            example: "for (int i = 0; i < 3; i++) { System.out.println(i); }",
            exercise: {
              prompt: "Print 0-7 with a for loop, then 10-15 with a second for loop.",
              starterCode: "// For loops\n",
              solution: "public class LoopDemo {\n    public static void main(String[] args) {\n        for (int i = 0; i <= 7; i++) System.out.println(i);\n        for (int j = 10; j <= 15; j++) System.out.println(j);\n    }\n}",
              tests: [{ type: "contains", value: "for (int i = 0;" }]
            }
          },
          {
            id: "java-phase2-m1-l6",
            title: "Break and Continue",
            explanation: "break exits the loop; continue skips to the next turn.",
            concept: "Control the flow from inside the loop.",
            example: "if (i == 4) continue;",
            exercise: {
              prompt: "Loop 0-9. Skip 4 with continue, break at 8.",
              starterCode: "// Loop control\n",
              solution: "public class LoopControl {\n    public static void main(String[] args) {\n        for (int i = 0; i < 10; i++) {\n            if (i == 4) continue;\n            if (i == 8) break;\n            System.out.println(i);\n        }\n    }\n}",
              tests: [{ type: "contains", value: "continue;" }, { type: "contains", value: "break;" }]
            }
          },
          {
            id: "java-phase2-m1-l7",
            title: "Switch Statements",
            explanation: "Matches a single variable against specific cases. Always add a break!",
            concept: "switch (var) { case val: ... break; default: ... }",
            example: "switch(day) { case 1: print(\"Mon\"); break; }",
            exercise: {
              prompt: "Switch dayNumber = 5. Case 1 'Monday', Case 5 'Friday', Case 7 'Sunday', default 'Not a special day'.",
              starterCode: "// Switch case\n",
              solution: "public class DayFinder {\n    public static void main(String[] args) {\n        int dayNumber = 5;\n        switch (dayNumber) {\n            case 1: System.out.println(\"Monday\"); break;\n            case 5: System.out.println(\"Friday\"); break;\n            case 7: System.out.println(\"Sunday\"); break;\n            default: System.out.println(\"Not a special day\");\n        }\n    }\n}",
              tests: [{ type: "contains", value: "switch (dayNumber)" }]
            }
          },
          {
            id: "java-phase2-m1-l8",
            title: "Capstone: Guessing Game",
            explanation: "Combine Scanner, While, and If to build a game.",
            concept: "Full program integration.",
            example: "while (guess != secret) { ... }",
            exercise: {
              prompt: "Secret = 5. Keep asking for guess. If < secret 'Higher!', if > secret 'Lower!'. End with 'You got it!'.",
              starterCode: "import java.util.Scanner;\n",
              solution: "import java.util.Scanner;\npublic class GuessGame {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        int secret = 5; int guess = 0;\n        while (guess != secret) {\n            System.out.print(\"Guess the number: \");\n            guess = input.nextInt();\n            if (guess < secret) System.out.println(\"Higher!\");\n            else if (guess > secret) System.out.println(\"Lower!\");\n        }\n        System.out.println(\"You got it!\");\n        input.close();\n    }\n}",
              tests: [{ type: "contains", value: "while (guess != secret)" }]
            }
          }
        ]
      },
      {
        id: "java-phase3-m1",
        title: "Phase 3 — Methods and Arrays",
        duration: "3 hours",
        lessons: [
          {
            id: "java-phase3-m1-l1",
            title: "Defining Methods",
            explanation: "Methods are reusable blocks. void means they return nothing.",
            concept: "static void methodName() { ... }",
            example: "static void greet() { System.out.println(\"Hi\"); }",
            exercise: {
              prompt: "Method 'sayMotto' prints 'Keep coding!' and 'Never give up!'. Call twice from main.",
              starterCode: "// Define method\n",
              solution: "public class Motto {\n    static void sayMotto() {\n        System.out.println(\"Keep coding!\");\n        System.out.println(\"Never give up!\");\n    }\n    public static void main(String[] args) {\n        sayMotto(); sayMotto();\n    }\n}",
              tests: [{ type: "contains", value: "static void sayMotto()" }]
            }
          },
          {
            id: "java-phase3-m1-l2",
            title: "Parameters and Arguments",
            explanation: "Parameters are inputs defined in the method signature.",
            concept: "void method(type name) { ... }",
            example: "static void square(int n) { ... }",
            exercise: {
              prompt: "Method 'doublePrint(int number)' prints number * 2. Call with 5, 10, 3.",
              starterCode: "// Method params\n",
              solution: "public class Doubler {\n    static void doublePrint(int number) {\n        System.out.println(number * 2);\n    }\n    public static void main(String[] args) {\n        doublePrint(5); doublePrint(10); doublePrint(3);\n    }\n}",
              tests: [{ type: "contains", value: "doublePrint(int number)" }]
            }
          },
          {
            id: "java-phase3-m1-l3",
            title: "Return Values",
            explanation: "Replace void with a type (int, String) to return a value.",
            concept: "The return keyword exits the method with a result.",
            example: "static int add(int a, int b) { return a + b; }",
            exercise: {
              prompt: "Method 'multiply' returns product of two ints. Print result of 4 * 7.",
              starterCode: "// Return int\n",
              solution: "public class Multiplier {\n    static int multiply(int a, int b) {\n        return a * b;\n    }\n    public static void main(String[] args) {\n        int product = multiply(4, 7);\n        System.out.println(product);\n    }\n}",
              tests: [{ type: "contains", value: "static int multiply" }, { type: "contains", value: "return" }]
            }
          },
          {
            id: "java-phase3-m1-l4",
            title: "Method Overloading",
            explanation: "Same name, different parameters.",
            concept: "Overloading depends on the parameter list signature.",
            example: "add(int a, int b) and add(double a, double b)",
            exercise: {
              prompt: "Overload 'add' method: one for 2 ints, one for 3 ints. Call both.",
              starterCode: "// Overloading\n",
              solution: "public class Adder {\n    static int add(int a, int b) { return a + b; }\n    static int add(int a, int b, int c) { return a + b + c; }\n    public static void main(String[] args) {\n        System.out.println(add(5, 3));\n        System.out.println(add(1, 2, 3));\n    }\n}",
              tests: [{ type: "contains", value: "add(int a, int b, int c)" }]
            }
          },
          {
            id: "java-phase3-m1-l5",
            title: "Arrays",
            explanation: "Fixed size, same type. Indexing starts at 0.",
            concept: "int[] arr = {1, 2, 3};",
            example: "System.out.println(arr[0]);",
            exercise: {
              prompt: "Array 'numbers' = {10, 20, 30, 40, 50}. Print index 0, 2, 4. Change index 1 to 25.",
              starterCode: "// Array practice\n",
              solution: "public class ArrayPractice {\n    public static void main(String[] args) {\n        int[] numbers = {10, 20, 30, 40, 50};\n        System.out.println(numbers[0]);\n        System.out.println(numbers[2]);\n        System.out.println(numbers[4]);\n        numbers[1] = 25;\n        System.out.println(numbers[1]);\n    }\n}",
              tests: [{ type: "contains", value: "int[] numbers" }]
            }
          },
          {
            id: "java-phase3-m1-l6",
            title: "Arrays: Iterating",
            explanation: "Use for (int i = 0...) or the enhanced for-each loop.",
            concept: "for (type var : arr) { ... }",
            example: "for (String s : fruits) { ... }",
            exercise: {
              prompt: "Array fruits = {'apple', 'banana', 'cherry'}. Print with standard for, then with for-each.",
              starterCode: "// Loop through arrays\n",
              solution: "public class LoopArray {\n    public static void main(String[] args) {\n        String[] fruits = {\"apple\", \"banana\", \"cherry\"};\n        for (int i = 0; i < fruits.length; i++) System.out.println(fruits[i]);\n        for (String f : fruits) System.out.println(f);\n    }\n}",
              tests: [{ type: "contains", value: "fruits.length" }]
            }
          },
          {
            id: "java-phase3-m1-l7",
            title: "ArrayList",
            explanation: "Dynamic resizing. Use .add(), .get(), and .remove().",
            concept: "ArrayList<Type> list = new ArrayList<>();",
            example: "list.add(\"text\"); list.get(0);",
            exercise: {
              prompt: "ArrayList<String> 'tasks'. Add 'Study', 'Exercise', 'Sleep'. Print size, get index 0, remove index 0, print size again.",
              starterCode: "import java.util.ArrayList;\n",
              solution: "import java.util.ArrayList;\npublic class ListFun {\n    public static void main(String[] args) {\n        ArrayList<String> tasks = new ArrayList<>();\n        tasks.add(\"Study\"); tasks.add(\"Exercise\"); tasks.add(\"Sleep\");\n        System.out.println(tasks.size());\n        System.out.println(tasks.get(0));\n        tasks.remove(0);\n        System.out.println(tasks.size());\n    }\n}",
              tests: [{ type: "contains", value: "ArrayList<String>" }]
            }
          },
          {
            id: "java-phase3-m1-l8",
            title: "HashMap",
            explanation: "Key-value pairs. Keys must be unique.",
            concept: "map.put(key, value); map.get(key);",
            example: "map.put(\"France\", \"Paris\");",
            exercise: {
              prompt: "HashMap<String, String> 'capitals'. Put France/Paris, Japan/Tokyo, Italy/Rome. Print Japan's capital.",
              starterCode: "import java.util.HashMap;\n",
              solution: "import java.util.HashMap;\npublic class MapFun {\n    public static void main(String[] args) {\n        HashMap<String, String> capitals = new HashMap<>();\n        capitals.put(\"France\", \"Paris\");\n        capitals.put(\"Japan\", \"Tokyo\");\n        capitals.put(\"Italy\", \"Rome\");\n        System.out.println(capitals.get(\"Japan\"));\n    }\n}",
              tests: [{ type: "contains", value: "HashMap<String, String>" }]
            }
          },
          {
            id: "java-phase3-m1-l9",
            title: "Capstone: Grade Tracker",
            explanation: "Use a Map of Lists to store multiple grades per student.",
            concept: "Nested collections.",
            example: "HashMap<String, ArrayList<Integer>>",
            exercise: {
              prompt: "Build 'GradeTracker'. Method addGrade(name, score) adds to student's list. Add 2 for Alice, 1 for Bob. Print map.",
              starterCode: "import java.util.*;\n",
              solution: "import java.util.HashMap;\nimport java.util.ArrayList;\npublic class GradeTracker {\n    static HashMap<String, ArrayList<Integer>> gradeBook = new HashMap<>();\n    static void addGrade(String name, int score) {\n        if (!gradeBook.containsKey(name)) gradeBook.put(name, new ArrayList<>());\n        gradeBook.get(name).add(score);\n    }\n    public static void main(String[] args) {\n        addGrade(\"Alice\", 90); addGrade(\"Alice\", 85); addGrade(\"Bob\", 78);\n        System.out.println(gradeBook);\n    }\n}",
              tests: [{ type: "contains", value: "gradeBook.containsKey" }]
            }
          }
        ]
      },
      {
        id: "java-phase4-m1",
        title: "Phase 4 — Object-Oriented Programming",
        duration: "3.5 hours",
        lessons: [
          {
            id: "java-phase4-m1-l1",
            title: "What Is a Class?",
            explanation: "A blueprint for objects. Use 'new' to create an instance.",
            concept: "Bundling fields and methods.",
            example: "Dog myDog = new Dog();",
            exercise: {
              prompt: "Class Car with color field and drive() method. Create Car in Main, color it 'red', and drive.",
              starterCode: "class Car { ... }\npublic class Main { ... }",
              solution: "class Car {\n    String color;\n    void drive() { System.out.println(\"Driving a \" + color + \" car!\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.color = \"red\";\n        myCar.drive();\n    }\n}",
              tests: [{ type: "contains", value: "new Car()" }]
            }
          },
          {
            id: "java-phase4-m1-l2",
            title: "Fields and Constructors",
            explanation: "Constructors initialize objects. Use 'this' to refer to fields.",
            concept: "Constructor names must match the class name.",
            example: "Student(String name) { this.name = name; }",
            exercise: {
              prompt: "Class Book with title and author. Add constructor to set both. Create two Books and print titles.",
              starterCode: "// Define constructor\n",
              solution: "class Book {\n    String title; String author;\n    Book(String title, String author) {\n        this.title = title;\n        this.author = author;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Book b1 = new Book(\"1984\", \"Orwell\");\n        Book b2 = new Book(\"Dune\", \"Herbert\");\n        System.out.println(b1.title);\n        System.out.println(b2.title);\n    }\n}",
              tests: [{ type: "contains", value: "this.title = title" }]
            }
          },
          {
            id: "java-phase4-m1-l3",
            title: "Instance Methods",
            explanation: "Methods that belong to specific objects.",
            concept: "Call methods on instances: object.methodName().",
            example: "myAccount.deposit(50);",
            exercise: {
              prompt: "BankAccount class. balance=0. Methods deposit(amount) and getBalance(). Test in Main.",
              starterCode: "// Instance methods\n",
              solution: "class BankAccount {\n    int balance = 0;\n    void deposit(int amount) { balance += amount; }\n    int getBalance() { return balance; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount();\n        acc.deposit(100); acc.deposit(50);\n        System.out.println(acc.getBalance());\n    }\n}",
              tests: [{ type: "contains", value: "acc.deposit" }]
            }
          },
          {
            id: "java-phase4-m1-l4",
            title: "Access Modifiers",
            explanation: "private hides data. public exposes it.",
            concept: "Encapsulation protects internal object state.",
            example: "private String s; public void setS(String val) { s = val; }",
            exercise: {
              prompt: "Class Secret. private message. public methods setMessage and reveal. Test in Main.",
              starterCode: "// private fields\n",
              solution: "class Secret {\n    private String message;\n    public void setMessage(String m) { message = m; }\n    public String reveal() { return message; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Secret s = new Secret();\n        s.setMessage(\"I love Java!\");\n        System.out.println(s.reveal());\n    }\n}",
              tests: [{ type: "contains", value: "private String message" }]
            }
          },
          {
            id: "java-phase4-m1-l5",
            title: "Getters and Setters",
            explanation: "Standard way to access private data. Setters often include validation.",
            concept: "getX() and setX() pattern.",
            example: "public void setAge(int a) { if (a > 0) age = a; }",
            exercise: {
              prompt: "Class Product. private price. getter/setter getPrice/setPrice. Only set if p > 0. Test in Main.",
              starterCode: "// Validation in setter\n",
              solution: "class Product {\n    private double price = 0;\n    public double getPrice() { return price; }\n    public void setPrice(double p) { if (p > 0) price = p; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        p.setPrice(29.99);\n        System.out.println(p.getPrice());\n        p.setPrice(-5);\n        System.out.println(p.getPrice());\n    }\n}",
              tests: [{ type: "contains", value: "if (p > 0)" }]
            }
          },
          {
            id: "java-phase4-m1-l6",
            title: "Inheritance",
            explanation: "A child class inherits from a parent using 'extends'.",
            concept: "Reuse code by inheriting fields and methods.",
            example: "class Dog extends Animal { ... }",
            exercise: {
              prompt: "Parent Animal (eat). Child Dog (bark). In Main, create Dog and call both.",
              starterCode: "// Inheritance\n",
              solution: "class Animal {\n    void eat() { System.out.println(\"Eating...\"); }\n}\nclass Dog extends Animal {\n    void bark() { System.out.println(\"Woof!\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.eat(); d.bark();\n    }\n}",
              tests: [{ type: "contains", value: "extends Animal" }]
            }
          },
          {
            id: "java-phase4-m1-l7",
            title: "Overriding",
            explanation: "Replace parent methods. Use @Override for safety.",
            concept: "super keyword calls parent version.",
            example: "@Override void speak() { ... }",
            exercise: {
              prompt: "Animal speak() 'Some sound'. Cat extends Animal, @Override speak() 'Meow!'. Test in Main.",
              starterCode: "// Method override\n",
              solution: "class Animal {\n    void speak() { System.out.println(\"Some sound\"); }\n}\nclass Cat extends Animal {\n    @Override\n    void speak() { System.out.println(\"Meow!\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Cat c = new Cat();\n        c.speak();\n    }\n}",
              tests: [{ type: "contains", value: "@Override" }]
            }
          },
          {
            id: "java-phase4-m1-l8",
            title: "Abstract and Interface",
            explanation: "Interfaces are contracts. Implement them using 'implements'.",
            concept: "Classes can implement multiple interfaces.",
            example: "class Guitar implements Playable { ... }",
            exercise: {
              prompt: "Interface Playable (void play). Class Guitar implements it. In Main, call play().",
              starterCode: "// Interfaces\n",
              solution: "interface Playable {\n    void play();\n}\nclass Guitar implements Playable {\n    public void play() { System.out.println(\"Strumming guitar\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Guitar g = new Guitar();\n        g.play();\n    }\n}",
              tests: [{ type: "contains", value: "implements Playable" }]
            }
          },
          {
            id: "java-phase4-m1-l9",
            title: "Capstone: Hierarchy",
            explanation: "Combine abstract classes and interfaces.",
            concept: "Advanced class architecture.",
            example: "class Dolphin extends Animal implements Trainable { ... }",
            exercise: {
              prompt: "Abstract Animal (name, makeSound). Interface Trainable (doTrick). Dolphin class. Main test.",
              starterCode: "// Full OOP design\n",
              solution: "abstract class Animal {\n    String name;\n    Animal(String name) { this.name = name; }\n    abstract void makeSound();\n}\ninterface Trainable {\n    void doTrick();\n}\nclass Dolphin extends Animal implements Trainable {\n    Dolphin(String name) { super(name); }\n    void makeSound() { System.out.println(\"Click!\"); }\n    public void doTrick() { System.out.println(\"Jumps through hoop!\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Dolphin d = new Dolphin(\"Flipper\");\n        d.makeSound(); d.doTrick();\n    }\n}",
              tests: [{ type: "contains", value: "super(name)" }]
            }
          }
        ]
      },
      {
        id: "java-phase5-m1",
        title: "Phase 5 — Intermediate Java",
        duration: "2 hours",
        lessons: [
          {
            id: "java-phase5-m1-l1",
            title: "Exception Handling",
            explanation: "Use try/catch to handle runtime errors.",
            concept: "Prevent program crashes.",
            example: "try { ... } catch (ArithmeticException e) { ... }",
            exercise: {
              prompt: "Try dividing 10 by 0. Catch ArithmeticException. Print 'Math error!' and 'All done.'",
              starterCode: "// try/catch\n",
              solution: "public class SafeDivider {\n    public static void main(String[] args) {\n        try {\n            int res = 10 / 0;\n        } catch (ArithmeticException e) {\n            System.out.println(\"Math error!\");\n        }\n        System.out.println(\"All done.\");\n    }\n}",
              tests: [{ type: "contains", value: "catch (ArithmeticException" }]
            }
          },
          {
            id: "java-phase5-m1-l2",
            title: "Specific Exceptions",
            explanation: "NumberFormatException is thrown by parseInt().",
            concept: "Handling specific error types.",
            example: "Integer.parseInt(\"abc\");",
            exercise: {
              prompt: "Try Integer.parseInt('abc'). Catch NumberFormatException. Print 'Not a valid number!'.",
              starterCode: "// Parsing errors\n",
              solution: "public class ParseDemo {\n    public static void main(String[] args) {\n        try {\n            int num = Integer.parseInt(\"abc\");\n        } catch (NumberFormatException e) {\n            System.out.println(\"Not a valid number!\");\n        }\n    }\n}",
              tests: [{ type: "contains", value: "catch (NumberFormatException" }]
            }
          },
          {
            id: "java-phase5-m1-l3",
            title: "File Reading",
            explanation: "BufferedReader with try-with-resources auto-closes files.",
            concept: "Standard IO.",
            example: "try (BufferedReader br = ...) { ... }",
            exercise: {
              prompt: "In FileReaderDemo, read first line of 'data.txt' and print it. Catch IOException.",
              starterCode: "import java.io.*;\n",
              solution: "import java.io.*;\npublic class FileReaderDemo {\n    public static void main(String[] args) {\n        try (BufferedReader br = new BufferedReader(new FileReader(\"data.txt\"))) {\n            System.out.println(br.readLine());\n        } catch (IOException e) {\n            System.out.println(\"File error\");\n        }\n    }\n}",
              tests: [{ type: "contains", value: "new FileReader" }]
            }
          },
          {
            id: "java-phase5-m1-l4",
            title: "Collections",
            explanation: "List allows duplicates. Set does not.",
            concept: "ArrayList vs HashSet.",
            example: "Set<String> s = new HashSet<>();",
            exercise: {
              prompt: "List 'numbers' = {1, 2, 2, 3}. Set 'unique' = {1, 2, 2, 3}. Print both.",
              starterCode: "import java.util.*;\n",
              solution: "import java.util.*;\npublic class CollectionFun {\n    public static void main(String[] args) {\n        List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 2, 3));\n        Set<Integer> unique = new HashSet<>(numbers);\n        System.out.println(numbers);\n        System.out.println(unique);\n    }\n}",
              tests: [{ type: "contains", value: "HashSet" }]
            }
          },
          {
            id: "java-phase5-m1-l5",
            title: "Lambdas",
            explanation: "Functional programming syntax.",
            concept: "(p) -> expression",
            example: "list.forEach(n -> System.out.println(n));",
            exercise: {
              prompt: "List 1,2,3,4,5. Use .forEach lambda to print squares. Use stream().filter() for n > 3.",
              starterCode: "import java.util.*;\n",
              solution: "import java.util.*;\npublic class LambdaFun {\n    public static void main(String[] args) {\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);\n        nums.forEach(n -> System.out.println(n * n));\n        nums.stream().filter(n -> n > 3).forEach(System.out::println);\n    }\n}",
              tests: [{ type: "contains", value: "->" }]
            }
          }
        ]
      }
    ]
  }
};

// --- Export Functions ---

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