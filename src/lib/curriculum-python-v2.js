// Python curriculum v2 – 54 short lessons, beginner‑friendly, with advanced topics
export const pythonCurriculumV2 = {
  label: "Python",
  version: 2,
  modules: [
    // Level 0: Your First Code (4 lessons)
    {
      id: "python-v2-level0",
      title: "Level 0 — Your First Code",
      duration: "10 min",
      lessons: [
        {
          id: "python-v2-l0-1",
          title: "Make Python Talk – print()",
          explanation: `The print() function is your first tool. It displays whatever you put inside the parentheses. Think of it as Python's voice.`,
          concept: `print("text") – shows text on screen. Use quotes around your message.`,
          example: `print('Hello, world!')
print(42)
print(10 + 5)`,
          exercise: {
            prompt: `Use print() to display exactly: "I am ready to code!"`,
            starterCode: `# Write your print statement here`,
            solution: `print('I am ready to code!')`,
            tests: [{ type: "contains", value: "print('I am ready to code!')" }],
            debuggingTip: `Make sure you use quotes around your message.`
          }
        },
        {
          id: "python-v2-l0-2",
          title: "Print Numbers and Math",
          explanation: `print() can also show numbers and the results of calculations – no quotes needed for numbers.`,
          concept: `print(42) – prints the number 42. print(10 + 5) – prints 15.`,
          example: `print(2025)
print(100 - 37)
print(10 * 3)`,
          exercise: {
            prompt: `Print the number 2025, then print the result of 15 + 27.`,
            starterCode: `# Print 2025

# Print 15 + 27`,
            solution: `print(2025)
print(15 + 27)`,
            tests: [
              { type: "contains", value: "print(2025)" },
              { type: "contains", value: "print(15 + 27)" }
            ],
            debuggingTip: `Don't put numbers in quotes, otherwise they become text.`
          }
        },
        {
          id: "python-v2-l0-3",
          title: "Print Multiple Things at Once",
          explanation: `You can print several items by separating them with commas – Python adds spaces automatically.`,
          concept: `print("Hello", "world") – prints "Hello world".`,
          example: `print("Name:", "Alice")
print("Score:", 95)
print(1, 2, 3, "Go!")`,
          exercise: {
            prompt: `Print the label "Favorite color:" and the color "blue" in one print() call.`,
            starterCode: `# Print label and color`,
            solution: `print("Favorite color:", "blue")`,
            tests: [{ type: "contains", value: "print(" }],
            debuggingTip: `Separate each item with a comma.`
          }
        },
        {
          id: "python-v2-l0-4",
          title: "Blank Lines and Custom Separators",
          explanation: `Use print() with no arguments to print a blank line. Use sep='-' to change the separator between items.`,
          concept: `print() – blank line. print("a", "b", sep="-") – prints "a-b".`,
          example: `print("First section")
print()
print("Second section")
print("apple", "banana", "cherry", sep=" | ")`,
          exercise: {
            prompt: `Print three items "red", "green", "blue" separated by " * " (space asterisk space).`,
            starterCode: `# Use sep=`,
            solution: `print("red", "green", "blue", sep=" * ")`,
            tests: [{ type: "contains", value: "sep=" }],
            debuggingTip: `sep must be a string – use quotes.`
          }
        }
      ]
    },
    // Level 1: Talking and Listening (5 lessons)
    {
      id: "python-v2-level1",
      title: "Level 1 — Talking and Listening",
      duration: "20 min",
      lessons: [
        {
          id: "python-v2-l1-1",
          title: "Variables – Storing Information",
          explanation: `A variable is like a labeled box – you put a value inside and refer to it by name.`,
          concept: `name = value – creates a variable. Use the variable later to get the value.`,
          example: `city = "Paris"
age = 28
print(city)
print(age)`,
          exercise: {
            prompt: `Create a variable "language" with value "Python" and print it.`,
            starterCode: `# Create variable and print`,
            solution: `language = "Python"
print(language)`,
            tests: [
              { type: "contains", value: "language = " },
              { type: "contains", value: "print(language)" }
            ],
            debuggingTip: `Don't put quotes around variable names when printing.`
          }
        },
        {
          id: "python-v2-l1-2",
          title: "Changing a Variable",
          explanation: `You can reassign a variable to a new value – the old value is replaced.`,
          concept: `x = 5 then x = 10 – now x is 10.`,
          example: `score = 100
print(score)
score = 150
print(score)`,
          exercise: {
            prompt: `Create variable "points" = 50, print it, then change it to 100 and print again.`,
            starterCode: `# Create, print, change, print`,
            solution: `points = 50
print(points)
points = 100
print(points)`,
            tests: [
              { type: "contains", value: "points = 50" },
              { type: "contains", value: "points = 100" }
            ],
            debuggingTip: `You don't need to use "var" or "let" like in other languages.`
          }
        },
        {
          id: "python-v2-l1-3",
          title: "Ask a Question – input()",
          explanation: `input() pauses your program and waits for the user to type something.`,
          concept: `name = input("What is your name? ") – stores user's answer.`,
          example: `color = input("Favorite color? ")
print("You like", color)`,
          exercise: {
            prompt: `Ask "What is your favorite animal? " and print "That's cool!"`,
            starterCode: `# Ask and respond`,
            solution: `animal = input("What is your favorite animal? ")
print("That's cool!")`,
            tests: [{ type: "contains", value: "input(" }],
            debuggingTip: `Don't forget the space inside the prompt string.`
          }
        },
        {
          id: "python-v2-l1-4",
          title: "Combine input() with Variables",
          explanation: `Store the user's answer in a variable, then use it in a message.`,
          concept: `name = input("Name: ") then print("Hello", name)`,
          example: `city = input("Where do you live? ")
print("I've heard", city, "is beautiful!")`,
          exercise: {
            prompt: `Ask "What is your favorite food? " and print "I like [food] too!" using the variable.`,
            starterCode: `# Ask and use variable in print`,
            solution: `food = input("What is your favorite food? ")
print("I like", food, "too!")`,
            tests: [{ type: "contains", value: "input(" }],
            debuggingTip: `Use commas in print to combine text and variable.`
          }
        },
        {
          id: "python-v2-l1-5",
          title: "Converting Numbers – int()",
          explanation: `input() always gives you text (a string). To do math, convert with int().`,
          concept: `age = int(input("Age: ")) – converts to integer.`,
          example: `age_text = input("Enter your age: ")
age = int(age_text)
print("Next year you'll be", age + 1)`,
          exercise: {
            prompt: `Ask "Enter a number: ", convert to int, then print the number multiplied by 2.`,
            starterCode: `# Get number, convert, double, print`,
            solution: `num = int(input("Enter a number: "))
print(num * 2)`,
            tests: [
              { type: "contains", value: "int(input" },
              { type: "contains", value: "* 2" }
            ],
            debuggingTip: `If you forget int(), adding a number will cause an error.`
          }
        }
      ]
    },
    // Level 2: Strings and f‑strings (5 lessons)
    {
      id: "python-v2-level2",
      title: "Level 2 — Working with Text",
      duration: "20 min",
      lessons: [
        {
          id: "python-v2-l2-1",
          title: "Joining Strings with +",
          explanation: `Use + to combine (concatenate) strings into one.`,
          concept: `"Hello" + " " + "World" – gives "Hello World".`,
          example: `first = "John"
last = "Doe"
full = first + " " + last
print(full)`,
          exercise: {
            prompt: `Combine "Hello" and "Python" with a space in between, then print.`,
            starterCode: `# Combine and print`,
            solution: `message = "Hello" + " " + "Python"
print(message)`,
            tests: [{ type: "contains", value: "+" }],
            debuggingTip: `Don't forget the space string " " if you want a space.`
          }
        },
        {
          id: "python-v2-l2-2",
          title: "Repeating Strings with *",
          explanation: `Multiply a string by an integer to repeat it.`,
          concept: `"Ha" * 3 – gives "HaHaHa".`,
          example: `print("-" * 20)
print("Loading...")
print("." * 10)`,
          exercise: {
            prompt: `Print 10 asterisks using repetition.`,
            starterCode: `# Print 10 *`,
            solution: `print("*" * 10)`,
            tests: [{ type: "contains", value: "*" }],
            debuggingTip: `The multiplier must be an integer.`
          }
        },
        {
          id: "python-v2-l2-3",
          title: "String Length – len()",
          explanation: `len() returns the number of characters in a string.`,
          concept: `len("Python") – returns 6.`,
          example: `word = "hello"
print(len(word))
name = input("Name: ")
print("Your name has", len(name), "letters.")`,
          exercise: {
            prompt: `Create a variable "movie" = "Inception", print its length.`,
            starterCode: `# Create movie variable, print length`,
            solution: `movie = "Inception"
print(len(movie))`,
            tests: [{ type: "contains", value: "len(" }],
            debuggingTip: `len() counts spaces too.`
          }
        },
        {
          id: "python-v2-l2-4",
          title: "f‑strings – Embed Variables",
          explanation: `f‑strings let you put variables directly inside a string using {} brackets.`,
          concept: `name = "Alice"; print(f"Hello {name}") – prints "Hello Alice".`,
          example: `city = "Tokyo"
population = 14000000
print(f"{city} has {population} people.")`,
          exercise: {
            prompt: `Create variables "item" = "book" and "price" = 25. Print f"One {item} costs {price} dollars."`,
            starterCode: `# Create variables, use f-string`,
            solution: `item = "book"
price = 25
print(f"One {item} costs {price} dollars.")`,
            tests: [{ type: "contains", value: "f\"" }],
            debuggingTip: `Don't forget the f before the opening quote.`
          }
        },
        {
          id: "python-v2-l2-5",
          title: "f‑strings with Expressions",
          explanation: `You can put any Python expression inside {} in an f‑string.`,
          concept: `f"Sum: {5 + 7}" – prints "Sum: 12".`,
          example: `quantity = 3
price = 5.99
print(f"Total: ${quantity * price}")
print(f"Square of 9 is {9 ** 2}")`,
          exercise: {
            prompt: `Create width = 7, height = 12. Print f"Area: {width * height}".`,
            starterCode: `# Create variables, print area using f-string`,
            solution: `width = 7
height = 12
print(f"Area: {width * height}")`,
            tests: [{ type: "contains", value: "f\"" }],
            debuggingTip: `The expression inside {} is evaluated and converted to string.`
          }
        }
      ]
    },
    // Level 3: Numbers and Math (5 lessons)
    {
      id: "python-v2-level3",
      title: "Level 3 — Numbers and Math",
      duration: "20 min",
      lessons: [
        {
          id: "python-v2-l3-1",
          title: "Integers and Floats",
          explanation: `Integers are whole numbers (5, -3). Floats have a decimal point (3.14, -0.5).`,
          concept: `Python chooses type based on presence of decimal point.`,
          example: `age = 25          # int
price = 19.99     # float
print(type(age))
print(type(price))`,
          exercise: {
            prompt: `Create an int "students" = 30 and a float "average" = 87.5. Print both.`,
            starterCode: `# Create int and float, print`,
            solution: `students = 30
average = 87.5
print(students)
print(average)`,
            tests: [
              { type: "contains", value: "students = 30" },
              { type: "contains", value: "average = 87.5" }
            ],
            debuggingTip: `Using 30.0 makes it a float, not int.`
          }
        },
        {
          id: "python-v2-l3-2",
          title: "Addition, Subtraction, Multiplication",
          explanation: `Use +, -, * for basic arithmetic.`,
          concept: `10 + 3 = 13, 10 - 3 = 7, 10 * 3 = 30.`,
          example: `x = 8
y = 4
print(x + y)
print(x - y)
print(x * y)`,
          exercise: {
            prompt: `Calculate area of a rectangle with width 5 and height 8. Print the result.`,
            starterCode: `# Calculate and print area`,
            solution: `width = 5
height = 8
area = width * height
print(area)`,
            tests: [{ type: "contains", value: "*" }],
            debuggingTip: `Order of operations: multiplication before addition. Use parentheses if needed.`
          }
        },
        {
          id: "python-v2-l3-3",
          title: "Division – Regular and Floor",
          explanation: `/` gives a float (decimal). `//` gives integer division (floor, rounds down).`,
          concept: `10 / 3 = 3.333..., 10 // 3 = 3.`,
          example: `print(10 / 3)
print(10 // 3)
print(10 / 2)   # 5.0
print(10 // 2)  # 5`,
          exercise: {
            prompt: `Print 17 divided by 5 using both / and //.`,
            starterCode: `# Print regular and floor division`,
            solution: `print(17 / 5)
print(17 // 5)`,
            tests: [
              { type: "contains", value: "17 / 5" },
              { type: "contains", value: "17 // 5" }
            ],
            debuggingTip: `// drops the decimal, it doesn't round.`
          }
        },
        {
          id: "python-v2-l3-4",
          title: "Modulo – The Remainder Operator",
          explanation: `% gives the remainder after division.`,
          concept: `17 % 5 = 2 because 17 = 5*3 + 2.`,
          example: `print(10 % 3)   # 1
print(20 % 7)   # 6
print(8 % 2)    # 0 (even number)
print(7 % 2)    # 1 (odd number)`,
          exercise: {
            prompt: `Print the remainder of 50 divided by 9.`,
            starterCode: `# Print remainder`,
            solution: `print(50 % 9)`,
            tests: [{ type: "contains", value: "%" }],
            debuggingTip: `Modulo is useful to check if a number is even (x % 2 == 0).`
          }
        },
        {
          id: "python-v2-l3-5",
          title: "Exponents and Shorthand Operators",
          explanation: `** for exponents. +=, -=, etc. update a variable in place.`,
          concept: `2 ** 3 = 8. x += 5 means x = x + 5.`,
          example: `print(3 ** 2)   # 9
score = 100
score += 10
print(score)   # 110
score *= 2
print(score)   # 220`,
          exercise: {
            prompt: `Start with total = 0. Add 50 using +=, then multiply by 2 using *=. Print total.`,
            starterCode: `total = 0
# Use += and *=`,
            solution: `total = 0
total += 50
total *= 2
print(total)`,
            tests: [
              { type: "contains", value: "+=" },
              { type: "contains", value: "*=" }
            ],
            debuggingTip: `Shorthand operators modify the original variable.`
          }
        }
      ]
    },
    // Level 4: Making Decisions (6 lessons)
    {
      id: "python-v2-level4",
      title: "Level 4 — Making Decisions",
      duration: "25 min",
      lessons: [
        {
          id: "python-v2-l4-1",
          title: "Comparison Operators",
          explanation: `Compare values with ==, !=, <, >, <=, >=. They return True or False.`,
          concept: `5 == 5 → True, 5 != 3 → True, 5 > 3 → True.`,
          example: `a = 10
b = 20
print(a < b)
print(a == b)
print(a != b)
print(a <= 10)`,
          exercise: {
            prompt: `Create x = 50 and y = 30. Print whether x is greater than y.`,
            starterCode: `x = 50
y = 30
# Print comparison`,
            solution: `x = 50
y = 30
print(x > y)`,
            tests: [{ type: "contains", value: "x > y" }],
            debuggingTip: `= is assignment, == is comparison – don't mix them.`
          }
        },
        {
          id: "python-v2-l4-2",
          title: "if Statements",
          explanation: `if runs a block of code only if a condition is True.`,
          concept: `if condition: indented code runs.`,
          example: `age = 20
if age >= 18:
    print("You are an adult.")
    print("You can vote.")`,
          exercise: {
            prompt: `Set score = 85. If score >= 60, print "You passed!"`,
            starterCode: `score = 85
# Write if statement`,
            solution: `score = 85
if score >= 60:
    print("You passed!")`,
            tests: [{ type: "contains", value: "if score >= 60:" }],
            debuggingTip: `Don't forget the colon and indentation.`
          }
        },
        {
          id: "python-v2-l4-3",
          title: "if / else",
          explanation: `else provides an alternative when the if condition is False.`,
          concept: `if condition: runs if true; else: runs if false.`,
          example: `temperature = 30
if temperature > 25:
    print("Hot day!")
else:
    print("Cool day.")`,
          exercise: {
            prompt: `Set number = 7. If number is even (number % 2 == 0), print "Even", else print "Odd".`,
            starterCode: `number = 7
# if/else`,
            solution: `number = 7
if number % 2 == 0:
    print("Even")
else:
    print("Odd")`,
            tests: [
              { type: "contains", value: "if number % 2 == 0" },
              { type: "contains", value: "else:" }
            ],
            debuggingTip: `else cannot have a condition.`
          }
        },
        {
          id: "python-v2-l4-4",
          title: "if / elif / else",
          explanation: `Use elif to check multiple conditions in sequence.`,
          concept: `if condition1: ... elif condition2: ... else: ...`,
          example: `score = 75
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(grade)`,
          exercise: {
            prompt: `Classify a test score: 90+ = "Excellent", 80+ = "Good", 70+ = "OK", else "Try again". Use score = 82.`,
            starterCode: `score = 82
# Write if/elif/else`,
            solution: `score = 82
if score >= 90:
    print("Excellent")
elif score >= 80:
    print("Good")
elif score >= 70:
    print("OK")
else:
    print("Try again")`,
            tests: [{ type: "contains", value: "elif" }],
            debuggingTip: `Order matters – put higher thresholds first.`
          }
        },
        {
          id: "python-v2-l4-5",
          title: "Combining Conditions – and / or / not",
          explanation: `and (both true), or (at least one true), not (flips true/false).`,
          concept: `(age >= 18) and (has_id) → true only if both true.`,
          example: `age = 20
has_ticket = True
if age >= 18 and has_ticket:
    print("Welcome to the show.")
    
if not has_ticket:
    print("Please buy a ticket.")`,
          exercise: {
            prompt: `Set is_weekend = True, is_raining = False. If it's weekend and NOT raining, print "Go outside!"`,
            starterCode: `is_weekend = True
is_raining = False
# Write condition`,
            solution: `is_weekend = True
is_raining = False
if is_weekend and not is_raining:
    print("Go outside!")`,
            tests: [{ type: "contains", value: "and not" }],
            debuggingTip: `not goes before the variable.`
          }
        },
        {
          id: "python-v2-l4-6",
          title: "Truthy and Falsy Values",
          explanation: `In conditions, Python treats some values as False: 0, "", None, empty lists. Everything else is True.`,
          concept: `if name: – runs if name is not an empty string.`,
          example: `username = ""
if username:
    print(f"Hello {username}")
else:
    print("No username provided.")

count = 0
if count:
    print("Count is not zero")
else:
    print("Count is zero")`,
          exercise: {
            prompt: `Set data = "". Write if data: print "Has data", else print "Empty".`,
            starterCode: `data = ""
# Write truthy check`,
            solution: `data = ""
if data:
    print("Has data")
else:
    print("Empty")`,
            tests: [{ type: "contains", value: "if data:" }],
            debuggingTip: `This is useful for checking if a variable exists or has content.`
          }
        }
      ]
    },
    // Level 5: Loops (5 lessons)
    {
      id: "python-v2-level5",
      title: "Level 5 — Repeating Code",
      duration: "25 min",
      lessons: [
        {
          id: "python-v2-l5-1",
          title: "while Loops – Counting",
          explanation: `while keeps repeating as long as a condition is True.`,
          concept: `count = 1; while count <= 5: print(count); count += 1`,
          example: `num = 1
while num <= 5:
    print(num)
    num += 1
print("Done!")`,
          exercise: {
            prompt: `Print numbers 1 to 10 using a while loop.`,
            starterCode: `num = 1
# Write while loop`,
            solution: `num = 1
while num <= 10:
    print(num)
    num += 1`,
            tests: [{ type: "contains", value: "while num <= 10:" }],
            debuggingTip: `Always update the variable inside the loop to avoid infinite loop.`
          }
        },
        {
          id: "python-v2-l5-2",
          title: "while Loop – Until User Says Stop",
          explanation: `Use a sentinel value to exit the loop.`,
          concept: `keep going until user types "quit".`,
          example: `command = ""
while command != "quit":
    command = input("Enter command (or 'quit' to stop): ")
    print(f"You typed {command}")`,
          exercise: {
            prompt: `Keep asking "Enter a number (or 0 to stop): " until user enters 0. Print each number doubled.`,
            starterCode: `# Write a loop that keeps asking until user enters 0
# Print each number doubled`,
            solution: `num = 1
while num != 0:
    num = int(input("Enter a number (0 to stop): "))
    if num != 0:
        print(num * 2)`,
            tests: [{ type: "contains", value: "while num != 0:" }],
            debuggingTip: `Convert input to int immediately.`
          }
        },
        {
          id: "python-v2-l5-3",
          title: "for Loops with range()",
          explanation: `for loops are great when you know exactly how many times to repeat. range(n) gives 0 to n-1.`,
          concept: `for i in range(5): prints 0,1,2,3,4.`,
          example: `for i in range(3):
    print("Hello")
for num in range(1, 6):
    print(num)`,
          exercise: {
            prompt: `Print numbers 0 through 7 using a for loop with range().`,
            starterCode: `# Use for and range`,
            solution: `for i in range(8):
    print(i)`,
            tests: [{ type: "contains", value: "range(8)" }],
            debuggingTip: `range(stop) gives 0 to stop-1.`
          }
        },
        {
          id: "python-v2-l5-4",
          title: "break – Exit Early",
          explanation: `break immediately stops the loop, no matter the condition.`,
          concept: `if found: break – stop searching.`,
          example: `for i in range(1, 101):
    if i > 5:
        break
    print(i)
# Prints 1 2 3 4 5`,
          exercise: {
            prompt: `Loop from 1 to 20. Stop when you reach a number divisible by 7 and print that number.`,
            starterCode: `for i in range(1, 21):
    # check and break`,
            solution: `for i in range(1, 21):
    if i % 7 == 0:
        print(i)
        break`,
            tests: [{ type: "contains", value: "break" }],
            debuggingTip: `break exits only the innermost loop.`
          }
        },
        {
          id: "python-v2-l5-5",
          title: "continue – Skip an Iteration",
          explanation: `continue skips the rest of the current loop iteration and jumps to the next one.`,
          concept: `if skip_condition: continue – go to next iteration.`,
          example: `for i in range(1, 6):
    if i == 3:
        continue
    print(i)
# Prints 1 2 4 5`,
          exercise: {
            prompt: `Print numbers 1 to 10 but skip the number 5 using continue.`,
            starterCode: `for i in range(1, 11):
    # skip 5`,
            solution: `for i in range(1, 11):
    if i == 5:
        continue
    print(i)`,
            tests: [{ type: "contains", value: "continue" }],
            debuggingTip: `Code after continue never runs for that iteration.`
          }
        }
      ]
    },
    // Level 6: Lists (5 lessons)
    {
      id: "python-v2-level6",
      title: "Level 6 — Lists",
      duration: "25 min",
      lessons: [
        {
          id: "python-v2-l6-1",
          title: "Creating Lists and Accessing by Index",
          explanation: `A list stores multiple items. Index starts at 0.`,
          concept: `fruits = ["apple", "banana"]; fruits[0] → "apple".`,
          example: `colors = ["red", "green", "blue"]
print(colors[0])
print(colors[2])
print(colors[-1])  # last item`,
          exercise: {
            prompt: `Create a list "planets" with "Mercury", "Venus", "Earth". Print the second planet (index 1).`,
            starterCode: `# Create list and print index 1`,
            solution: `planets = ["Mercury", "Venus", "Earth"]
print(planets[1])`,
            tests: [{ type: "contains", value: "planets[1]" }],
            debuggingTip: `Index 0 is first element.`
          }
        },
        {
          id: "python-v2-l6-2",
          title: "Modifying List Elements",
          explanation: `You can change an element by assigning to its index.`,
          concept: `my_list[0] = new_value`,
          example: `fruits = ["apple", "banana", "cherry"]
fruits[1] = "blueberry"
print(fruits)`,
          exercise: {
            prompt: `Create "numbers" = [10, 20, 30]. Change the second element (index 1) to 99 and print the list.`,
            starterCode: `numbers = [10, 20, 30]
# Modify and print`,
            solution: `numbers = [10, 20, 30]
numbers[1] = 99
print(numbers)`,
            tests: [{ type: "contains", value: "numbers[1] = 99" }],
            debuggingTip: `Indices must be valid (0 to length-1).`
          }
        },
        {
          id: "python-v2-l6-3",
          title: "Adding Items – append() and insert()",
          explanation: `append() adds to the end. insert() adds at a specific position.`,
          concept: `list.append(item), list.insert(index, item)`,
          example: `tasks = ["write code"]
tasks.append("test code")
tasks.insert(0, "plan")
print(tasks)`,
          exercise: {
            prompt: `Start with empty list "cart". Append "apple", then append "banana". Insert "orange" at index 1. Print cart.`,
            starterCode: `cart = []
# Append, append, insert`,
            solution: `cart = []
cart.append("apple")
cart.append("banana")
cart.insert(1, "orange")
print(cart)`,
            tests: [
              { type: "contains", value: "append" },
              { type: "contains", value: "insert" }
            ],
            debuggingTip: `insert shifts later elements to the right.`
          }
        },
        {
          id: "python-v2-l6-4",
          title: "Removing Items – pop() and remove()",
          explanation: `pop() removes by index and returns the value. remove() removes by value.`,
          concept: `item = list.pop(index); list.remove(value)`,
          example: `colors = ["red", "green", "blue"]
popped = colors.pop(1)   # removes "green"
print(popped)
print(colors)
colors.remove("blue")
print(colors)`,
          exercise: {
            prompt: `Create "letters" = ["a","b","c","d"]. Remove "c" using remove(). Then pop the last item and print it. Print final list.`,
            starterCode: `letters = ["a","b","c","d"]
# Remove and pop`,
            solution: `letters = ["a","b","c","d"]
letters.remove("c")
last = letters.pop()
print(last)
print(letters)`,
            tests: [
              { type: "contains", value: ".remove(" },
              { type: "contains", value: ".pop(" }
            ],
            debuggingTip: `remove() raises an error if value not found.`
          }
        },
        {
          id: "python-v2-l6-5",
          title: "Looping Through Lists",
          explanation: `Use for item in list: to iterate over all items.`,
          concept: `for fruit in fruits: print(fruit)`,
          example: `scores = [85, 92, 78]
total = 0
for score in scores:
    total += score
print(f"Total: {total}")`,
          exercise: {
            prompt: `Create "temperatures" = [20, 25, 22, 28]. Use a loop to print each temperature doubled.`,
            starterCode: `temperatures = [20, 25, 22, 28]
# Loop and print doubled`,
            solution: `temperatures = [20, 25, 22, 28]
for t in temperatures:
    print(t * 2)`,
            tests: [{ type: "contains", value: "for t in temperatures" }],
            debuggingTip: `The loop variable (t) takes each element's value.`
          }
        }
      ]
    },
    // Level 7: Dictionaries (4 lessons)
    {
      id: "python-v2-level7",
      title: "Level 7 — Dictionaries",
      duration: "20 min",
      lessons: [
        {
          id: "python-v2-l7-1",
          title: "Creating Dictionaries",
          explanation: `Dictionaries store key-value pairs. Keys are like labels.`,
          concept: `person = {"name": "Alice", "age": 28}`,
          example: `book = {
    "title": "1984",
    "author": "Orwell",
    "pages": 328
}
print(book)`,
          exercise: {
            prompt: `Create a dictionary "student" with keys: "name" = "Bob", "grade" = 85.`,
            starterCode: `# Create student dict`,
            solution: `student = {"name": "Bob", "grade": 85}`,
            tests: [{ type: "contains", value: "{" }],
            debuggingTip: `Keys and strings must be in quotes.`
          }
        },
        {
          id: "python-v2-l7-2",
          title: "Accessing and Modifying Values",
          explanation: `Use square brackets with the key to get or set values.`,
          concept: `value = dict["key"]; dict["key"] = new_value`,
          example: `person = {"name": "Alice", "age": 28}
print(person["name"])
person["age"] = 29
person["city"] = "Paris"
print(person)`,
          exercise: {
            prompt: `Create "product" = {"name": "laptop", "price": 999}. Print the price, then change price to 1099, add a key "stock" = 5. Print the dict.`,
            starterCode: `product = {"name": "laptop", "price": 999}
# Access, modify, add`,
            solution: `product = {"name": "laptop", "price": 999}
print(product["price"])
product["price"] = 1099
product["stock"] = 5
print(product)`,
            tests: [
              { type: "contains", value: 'product["price"]' },
              { type: "contains", value: 'product["stock"]' }
            ],
            debuggingTip: `If a key doesn't exist, assigning it adds it.`
          }
        },
        {
          id: "python-v2-l7-3",
          title: "Dictionary Methods – keys(), values(), items()",
          explanation: `keys() gives all keys, values() gives all values, items() gives key-value pairs.`,
          concept: `for key in dict.keys(): ...`,
          example: `scores = {"Alice": 95, "Bob": 87}
print(scores.keys())
print(scores.values())
for name, score in scores.items():
    print(f"{name}: {score}")`,
          exercise: {
            prompt: `Create "inventory" = {"apples": 10, "bananas": 5, "oranges": 8}. Print all keys, then all values.`,
            starterCode: `inventory = {"apples": 10, "bananas": 5, "oranges": 8}
# Print keys and values`,
            solution: `inventory = {"apples": 10, "bananas": 5, "oranges": 8}
print(inventory.keys())
print(inventory.values())`,
            tests: [
              { type: "contains", value: ".keys()" },
              { type: "contains", value: ".values()" }
            ],
            debuggingTip: `keys() and values() return special views, but you can loop over them.`
          }
        },
        {
          id: "python-v2-l7-4",
          title: "Looping Through Dictionaries",
          explanation: `Use .items() to loop over both keys and values.`,
          concept: `for key, value in dict.items():`,
          example: `capitals = {"France": "Paris", "Japan": "Tokyo"}
for country, capital in capitals.items():
    print(f"{country} → {capital}")`,
          exercise: {
            prompt: `Create "menu" = {"pizza": 12, "burger": 8, "salad": 6}. Loop and print each item and its price.`,
            starterCode: `menu = {"pizza": 12, "burger": 8, "salad": 6}
# Loop with items()`,
            solution: `menu = {"pizza": 12, "burger": 8, "salad": 6}
for item, price in menu.items():
    print(f"{item}: ${price}")`,
            tests: [{ type: "contains", value: ".items()" }],
            debuggingTip: `The order of items may not be the insertion order (but Python 3.7+ preserves it).`
          }
        }
      ]
    },
    // Level 8: Functions (6 lessons)
    {
      id: "python-v2-level8",
      title: "Level 8 — Reusable Code with Functions",
      duration: "30 min",
      lessons: [
        {
          id: "python-v2-l8-1",
          title: "Defining and Calling Functions",
          explanation: `A function is a named block of code. Define with def, call by name.`,
          concept: `def name(): ... then name() to run.`,
          example: `def say_hello():
    print("Hello!")
    print("Welcome.")
say_hello()
say_hello()`,
          exercise: {
            prompt: `Define a function "greet" that prints "Hi there!". Call it twice.`,
            starterCode: `# Define and call greet`,
            solution: `def greet():
    print("Hi there!")
greet()
greet()`,
            tests: [{ type: "contains", value: "def greet():" }],
            debuggingTip: `Don't forget the colon and indentation.`
          }
        },
        {
          id: "python-v2-l8-2",
          title: "Parameters – Giving Input to Functions",
          explanation: `Parameters allow functions to work with different values.`,
          concept: `def greet(name): print(f"Hello {name}")`,
          example: `def double(number):
    print(number * 2)
double(5)
double(10)`,
          exercise: {
            prompt: `Define "multiply(a, b)" that prints a * b. Call with (4, 7).`,
            starterCode: `# Define multiply and call`,
            solution: `def multiply(a, b):
    print(a * b)
multiply(4, 7)`,
            tests: [{ type: "contains", value: "def multiply(a, b):" }],
            debuggingTip: `Arguments are passed in order.`
          }
        },
        {
          id: "python-v2-l8-3",
          title: "Return Values – Getting Answers Back",
          explanation: `Use return to send a value back to the caller.`,
          concept: `def add(a,b): return a+b; result = add(3,4)`,
          example: `def square(x):
    return x * x
result = square(5)
print(result)
print(square(10))`,
          exercise: {
            prompt: `Define "add(a,b)" that returns a + b. Call with (5,3) and print the result.`,
            starterCode: `# Define add with return and test`,
            solution: `def add(a, b):
    return a + b
print(add(5, 3))`,
            tests: [{ type: "contains", value: "return" }],
            debuggingTip: `Code after return in a function is not executed.`
          }
        },
        {
          id: "python-v2-l8-4",
          title: "Default Parameters",
          explanation: `You can provide default values for parameters.`,
          concept: `def greet(name="friend"): print(f"Hello {name}")`,
          example: `def power(base, exponent=2):
    return base ** exponent
print(power(5))    # 25
print(power(3, 3)) # 27`,
          exercise: {
            prompt: `Define "repeat(message, times=2)" that prints message 'times' times. Call it with just "Hi", then with "Hi" and 4.`,
            starterCode: `# Define repeat with default parameter`,
            solution: `def repeat(message, times=2):
    for i in range(times):
        print(message)
repeat("Hi")
repeat("Hi", 4)`,
            tests: [{ type: "contains", value: "times=2" }],
            debuggingTip: `Parameters with defaults must come after those without.`
          }
        },
        {
          id: "python-v2-l8-5",
          title: "Scope – Local vs Global Variables",
          explanation: `Variables inside a function are local – they don't affect variables outside.`,
          concept: `local variable only exists inside the function.`,
          example: `x = 10   # global
def change():
    x = 5   # local, different from global
    print("Inside:", x)
change()
print("Outside:", x)`,
          exercise: {
            prompt: `Create global variable "total" = 0. Define a function "add_five" that adds 5 to a local variable "total" (not global). Print both totals.`,
            starterCode: `total = 0
def add_five():
    total = 5
    print("Inside:", total)
add_five()
print("Outside:", total)`,
            solution: `total = 0
def add_five():
    total = 5
    print("Inside:", total)
add_five()
print("Outside:", total)`,
            tests: [
              { type: "contains", value: "total = 0" },
              { type: "contains", value: "total = 5" }
            ],
            debuggingTip: `To modify a global variable inside a function, use 'global total'.`
          }
        },
        {
          id: "python-v2-l8-6",
          title: "*args and **kwargs",
          explanation: `*args collects extra positional arguments as a tuple. **kwargs collects keyword arguments as a dict.`,
          concept: `def func(*args, **kwargs)`,
          example: `def sum_all(*numbers):
    return sum(numbers)
print(sum_all(1,2,3,4))

def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")
print_info(name="Alice", age=28)`,
          exercise: {
            prompt: `Define "multiply_all(*nums)" that returns the product of all numbers. Test with (2,3,4).`,
            starterCode: `# Define multiply_all with *args`,
            solution: `def multiply_all(*nums):
    product = 1
    for n in nums:
        product *= n
    return product
print(multiply_all(2,3,4))`,
            tests: [{ type: "contains", value: "*nums" }],
            debuggingTip: `*args collects any number of positional arguments.`
          }
        }
      ]
    },
    // Level 9: More Built‑ins (5 lessons)
    {
      id: "python-v2-level9",
      title: "Level 9 — Handy Built‑ins",
      duration: "25 min",
      lessons: [
        {
          id: "python-v2-l9-1",
          title: "range() in Detail",
          explanation: `range(stop), range(start, stop), range(start, stop, step)`,
          concept: `range(2, 10, 2) → 2,4,6,8`,
          example: `for i in range(10, 0, -1):
    print(i)`,
          exercise: {
            prompt: `Print even numbers from 2 to 20 using range with step 2.`,
            starterCode: `# Use range with step`,
            solution: `for i in range(2, 21, 2):
    print(i)`,
            tests: [{ type: "contains", value: "range(2, 21, 2)" }],
            debuggingTip: `stop is exclusive, step can be negative.`
          }
        },
        {
          id: "python-v2-l9-2",
          title: "enumerate() – Loop with Index",
          explanation: `enumerate() gives both index and value when looping.`,
          concept: `for i, item in enumerate(list):`,
          example: `fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits):
    print(i, fruit)`,
          exercise: {
            prompt: `Create list "colors" = ["red","green","blue"]. Loop with enumerate and print "Index 0: red" etc.`,
            starterCode: `colors = ["red","green","blue"]
# Use enumerate`,
            solution: `colors = ["red","green","blue"]
for i, color in enumerate(colors):
    print(f"Index {i}: {color}")`,
            tests: [{ type: "contains", value: "enumerate" }],
            debuggingTip: `enumerate starts at 0 by default; use enumerate(list, start=1) to change.`
          }
        },
        {
          id: "python-v2-l9-3",
          title: "zip() – Iterate Two Lists Together",
          explanation: `zip() pairs elements from multiple lists.`,
          concept: `for a, b in zip(list1, list2):`,
          example: `names = ["Alice", "Bob"]
scores = [95, 87]
for name, score in zip(names, scores):
    print(f"{name}: {score}")`,
          exercise: {
            prompt: `Create "items" = ["pen", "notebook"], "prices" = [1.5, 3.0]. Use zip to print each item and its price.`,
            starterCode: `items = ["pen", "notebook"]
prices = [1.5, 3.0]
# Use zip`,
            solution: `items = ["pen", "notebook"]
prices = [1.5, 3.0]
for item, price in zip(items, prices):
    print(f"{item}: ${price}")`,
            tests: [{ type: "contains", value: "zip(" }],
            debuggingTip: `zip stops at the shortest list.`
          }
        },
        {
          id: "python-v2-l9-4",
          title: "min(), max(), sum()",
          explanation: `Useful functions for lists of numbers.`,
          concept: `min(list), max(list), sum(list)`,
          example: `grades = [85, 92, 78, 95]
print(min(grades))
print(max(grades))
print(sum(grades))`,
          exercise: {
            prompt: `Create "temps" = [12, 18, 15, 20, 16]. Print min, max, and average (sum / len).`,
            starterCode: `temps = [12, 18, 15, 20, 16]
# Print min, max, average`,
            solution: `temps = [12, 18, 15, 20, 16]
print(min(temps))
print(max(temps))
print(sum(temps) / len(temps))`,
            tests: [
              { type: "contains", value: "min(" },
              { type: "contains", value: "max(" },
              { type: "contains", value: "sum(" }
            ],
            debuggingTip: `sum() works only on numeric lists.`
          }
        },
        {
          id: "python-v2-l9-5",
          title: "List Comprehensions",
          explanation: `Create a new list by applying an expression to each item.`,
          concept: `[expression for item in list]`,
          example: `numbers = [1,2,3,4,5]
squares = [n**2 for n in numbers]
print(squares)
evens = [n for n in numbers if n % 2 == 0]
print(evens)`,
          exercise: {
            prompt: `Given "nums" = [1,2,3,4,5,6], create a list "doubles" where each number is multiplied by 2.`,
            starterCode: `nums = [1,2,3,4,5,6]
# List comprehension for doubles`,
            solution: `nums = [1,2,3,4,5,6]
doubles = [n * 2 for n in nums]
print(doubles)`,
            tests: [{ type: "contains", value: "[n * 2 for n in nums]" }],
            debuggingTip: `List comprehensions are faster than manual loops for simple transformations.`
          }
        }
      ]
    },
    // Level 10: Advanced Topics (4 lessons) – new
    {
      id: "python-v2-level10",
      title: "Level 10 — Advanced Topics",
      duration: "30 min",
      lessons: [
        {
          id: "python-v2-l10-1",
          title: "Error Handling – try / except",
          explanation: `Errors happen: users type text when you expect a number, files don't exist. try/except lets you handle them gracefully without crashing.`,
          concept: `try: risky code; except ErrorType: handle it.`,
          example: `try:
    num = int(input("Enter a number: "))
    print(10 / num)
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Can't divide by zero!")`,
          exercise: {
            prompt: `Write a try/except that asks for a number and prints 100 / number. Catch ValueError (invalid number) and ZeroDivisionError separately.`,
            starterCode: `# Ask for a number, convert to int, divide 100 by it`,
            solution: `try:
    num = int(input("Enter a number: "))
    print(100 / num)
except ValueError:
    print("Please enter a valid number.")
except ZeroDivisionError:
    print("Cannot divide by zero.")`,
            tests: [
              { type: "contains", value: "try:" },
              { type: "contains", value: "except ValueError" }
            ],
            debuggingTip: `Always catch specific exceptions before a general ` + "`except Exception`" + `.`
          }
        },
        {
          id: "python-v2-l10-2",
          title: "Reading and Writing Files",
          explanation: `Save data between program runs using files. Open with open(), read with .read() or .readlines(), write with .write(). Use 'with' to auto-close the file.`,
          concept: `with open("file.txt", "r") as f: content = f.read()`,
          example: `# Write to file
with open("notes.txt", "w") as f:
    f.write("First line\\nSecond line")

# Read from file
with open("notes.txt", "r") as f:
    content = f.read()
    print(content)`,
          exercise: {
            prompt: `Write a program that asks the user for their name and age, then writes "Name: [name], Age: [age]" to a file called "user.txt".`,
            starterCode: `# Ask for name and age, write to file`,
            solution: `name = input("Enter your name: ")
age = input("Enter your age: ")
with open("user.txt", "w") as f:
    f.write(f"Name: {name}, Age: {age}")`,
            tests: [
              { type: "contains", value: "with open" },
              { type: "contains", value: ".write(" }
            ],
            debuggingTip: `'w' overwrites the file. Use 'a' to append.`
          }
        },
        {
          id: "python-v2-l10-3",
          title: "Classes and Objects – OOP Basics",
          explanation: `A class is a blueprint for creating objects. Objects bundle data (attributes) and functions (methods) together.`,
          concept: `class Dog: def __init__(self, name): self.name = name; def bark(self): print("Woof!")`,
          example: `class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year
    def honk(self):
        print(f"{self.brand} says Beep!")

my_car = Car("Toyota", 2022)
print(my_car.brand)
my_car.honk()`,
          exercise: {
            prompt: `Define a class "Student" with __init__(self, name, grade). Add a method "describe" that prints "Name: [name], Grade: [grade]". Create a student and call describe().`,
            starterCode: `# Define Student class and use it`,
            solution: `class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
    def describe(self):
        print(f"Name: {self.name}, Grade: {self.grade}")

s = Student("Alice", 95)
s.describe()`,
            tests: [
              { type: "contains", value: "class Student" },
              { type: "contains", value: "__init__" }
            ],
            debuggingTip: `The __init__ method runs automatically when you create an object.`
          }
        },
        {
          id: "python-v2-l10-4",
          title: "Modules and Imports",
          explanation: `Split your code into multiple files (modules). Use import to bring in functions, classes, or variables from another file. Python's standard library is full of useful modules.`,
          concept: `import math; print(math.sqrt(25))`,
          example: `import math
import random
from datetime import datetime

print(math.pi)
print(random.randint(1, 10))
print(datetime.now())`,
          exercise: {
            prompt: `Import the math module and print the square root of 144 and the value of pi.`,
            starterCode: `# Import math and use sqrt and pi`,
            solution: `import math
print(math.sqrt(144))
print(math.pi)`,
            tests: [
              { type: "contains", value: "import math" },
              { type: "contains", value: "math.sqrt" }
            ],
            debuggingTip: `If a module isn't installed, use pip install <module>.`
          }
        }
      ]
    }
  ]
};