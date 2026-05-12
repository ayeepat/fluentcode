// Python curriculum data - all phases and lessons
export const pythonCurriculum = {
  label: "Python",
  modules: [
    {
      id: "python-phase0-m1",
      title: "Phase 0 — Welcome to Python",
      duration: "15 min",
      lessons: [
        {
          id: "python-phase0-m1-l1",
          title: "Your First Python Program",
          explanation: `Python is one of the most loved programming languages in the world — and for 
good reason. It reads almost like English, runs on every platform, and powers 
everything from Instagram to NASA's research tools to the AI models you use 
every day. Unlike many languages, Python doesn't need complicated setup or 
boilerplate code. Your very first program can be a single line. The print() 
function is your first tool — think of it as Python's megaphone. Whatever 
you put inside the parentheses gets displayed on the screen. Every programmer 
in the world started exactly where you are right now.`,
          concept: `print() displays any message or value to the screen.
Text must be wrapped in quotes — single ('text') or double ("text") — both work.
Each print() call automatically creates a new line.
Parentheses are required: print without () just references the function without calling it.
Python reads and executes code top to bottom, one line at a time.`,
          example: `# The hash symbol starts a comment — Python ignores these
# Comments explain your code to humans

# print() is Python's way of talking to you
print('Hello, world!')
print('I am learning Python!')

# You can print numbers too (no quotes needed)
print(42)
print(3.14)

# Even math expressions
print(10 + 5)   # prints 15
print(2 * 8)    # prints 16`,
          exercise: {
            prompt: `Let's make Python speak! Complete all three steps:
1. Use print() to display exactly: I am ready to code!
2. Use print() to display any number you like
3. Use print() to display the result of 10 + 7 as a math expression (not the string "10 + 7")`,
            starterCode: `# Welcome to Python! Let's make it talk.

# Step 1: Print the required message (copy it exactly!)


# Step 2: Print any number


# Step 3: Print the result of 10 + 7
`,
            solution: `print('I am ready to code!')
print(42)
print(10 + 7)`,
            tests: [
              { type: "contains", value: "print('I am ready to code!')" },
              { type: "contains", value: "print" }
            ],
            debuggingTip: `Common mistakes:
• Forgot the quotes around your message? Python will think it's a variable and throw a NameError.
• Used mismatched quotes? 'Hello" won't work — opening and closing quotes must be the same type.
• Nothing printing? Make sure you actually called print() — just writing text in quotes does nothing.
• Got SyntaxError? Check your parentheses — every ( needs a matching ).
• Math in quotes? print('10 + 7') prints the text "10 + 7". Remove the quotes to do actual math.`
          }
        }
      ]
    },
    {
      id: "python-phase1-m1",
      title: "Phase 1 — Fundamentals",
      duration: "3 hours",
      lessons: [
        {
          id: "python-phase1-m1-l1",
          title: "Talking with print()",
          explanation: `print() is Python's primary way of showing output — and it's far more 
flexible than it first appears. You'll use it constantly: to see what 
your program is doing, to display results to users, and to debug code 
when things go wrong. Professional Python developers have print() 
statements scattered throughout their code during development — it's 
the simplest and fastest way to understand what's happening inside 
your program. Understanding all the ways to use it saves time every day.`,
          concept: `print('text')           → prints text on its own line
print(42)              → prints a number (no quotes needed)
print('a', 'b', 'c')   → prints multiple values separated by spaces
print('a', 'b', sep='-') → custom separator between values
print('text', end='')  → no newline at end (continues on same line)
print()                → prints a blank line (just a newline)`,
          example: `# Basic output — each print is a new line
print('Hello')
print('Goodbye')
print('Python is fun!')

# Numbers need no quotes
print(42)
print(3.14)
print(100 - 37)   # prints 63 (Python does the math!)

# Printing multiple things at once
print('Name:', 'Alice')      # Name: Alice
print('Age:', 25)             # Age: 25
print('Score:', 85 + 10)     # Score: 95

# Custom separators
print('a', 'b', 'c', sep='-')   # a-b-c
print('a', 'b', 'c', sep='')    # abc

# Printing a blank line for spacing
print('Section 1')
print()              # blank line
print('Section 2')`,
          exercise: {
            prompt: `Practice different ways to use print():
1. Print 'Ready', 'Set', 'Go!' each on their own line (three separate calls)
2. Print the number 2025 on its own line
3. Print the result of 100 - 37 as a math expression (not in quotes)
4. Print the label "Score:" and the number 95 in the same print() call using a comma`,
            starterCode: `# Part 1: Three separate lines


# Part 2: Print the number 2025


# Part 3: Print 100 - 37 as math


# Part 4: Print label and number in one call
`,
            solution: `print('Ready')
print('Set')
print('Go!')
print(2025)
print(100 - 37)
print('Score:', 95)`,
            tests: [
              { type: "contains", value: "print('Ready')" },
              { type: "contains", value: "print('Set')" },
              { type: "contains", value: "print('Go!')" },
              { type: "contains", value: "print" }
            ],
            debuggingTip: `Common mistakes:
• Math in quotes? print('100 - 37') prints the text "100 - 37", not 63. Remove quotes for math.
• Using + to combine text and number? print('Score: ' + 95) crashes in Python. Use a comma: print('Score:', 95).
• Missing parentheses? print without () doesn't call the function — add ().
• Extra spaces matter in strings: 'Ready' and ' Ready' are different — the space is part of the string.`
          }
        },
        {
          id: "python-phase1-m1-l2",
          title: "Listening with input()",
          explanation: `Programs that only talk are like books. Programs that also listen become 
conversations. The input() function pauses your program and waits for 
the user to type something and press Enter. Everything the user types 
comes back as a string — text — even if they typed a number. This is 
critically important: '42' (the string) and 42 (the integer) are 
completely different in Python. input() is how command-line programs, 
games, and interactive tools get information from the person using them.`,
          concept: `input('prompt text')  → displays prompt, waits for user, returns what they typed as a STRING
Always returns a string — even if user types a number
Store the result in a variable: name = input('Enter name: ')
Use print as the prompt message (inside the quotes)
The prompt text is optional: input() with no argument just waits silently`,
          example: `# Basic input — stores what user types
name = input('What is your name? ')
print('Nice to meet you, ' + name)

# Showing what you got back
color = input('Favorite color? ')
print('You said:', color)
print('Type:', type(color))   # Always <class 'str'>

# The PROBLEM with numbers from input:
age_text = input('Enter your age: ')
# age_text is a string like '25'
# print(age_text + 5)  # ← This CRASHES! Can't add string + number

# The SOLUTION: convert with int()
age = int(age_text)
print('In 10 years you will be', age + 10)

# Or convert in one line:
year = int(input('Enter a year: '))
print('That is', 2025 - year, 'years ago')`,
          exercise: {
            prompt: `Build an interactive greeter:
1. Use input() to ask 'What is your favorite color? ' (with the space before the closing quote)
2. Store the answer in a variable called color
3. Print 'That is a great color!' (not including the color in the message)
4. Use input() to ask 'How old are you? ' and convert directly to int
5. Print "In 5 years you will be [age + 5]" using the converted number`,
            starterCode: `# Step 1 & 2: Ask for favorite color


# Step 3: Print compliment


# Step 4: Ask for age and convert to int


# Step 5: Print age calculation
`,
            solution: `color = input('What is your favorite color? ')
print('That is a great color!')
age = int(input('How old are you? '))
print('In 5 years you will be', age + 5)`,
            tests: [
              { type: "contains", value: "input(" },
              { type: "contains", value: "print('That is a great color!')" }
            ],
            debuggingTip: `Common mistakes:
• Forgot the space inside the prompt? 'What is your name?' gives you 'Alice' but 'What is your name? ' with a space looks cleaner.
• Trying to do math on input result without converting? input() always returns a string. Wrap with int() or float() first.
• Variable not assigned? color = input(...) stores it. Just input(...) asks and immediately throws away the answer.
• Program seems frozen? It's waiting for input! Type something and press Enter.`
          }
        },
        {
          id: "python-phase1-m1-l3",
          title: "Variables — Storing Information",
          explanation: `A variable is a named container for storing information. Think of it like a 
labeled box — you write a name on the outside, put something inside, and 
later you can find it by name. Python is dynamically typed, which means 
you don't have to declare what type of data a variable holds — Python 
figures it out automatically. This makes Python fast to write but requires 
you to keep track of what's in your variables. Good variable names are 
one of the most valuable habits you can build as a programmer.`,
          concept: `variable_name = value   → create a variable and store a value
Python figures out the type automatically (dynamic typing)
Variable names: lowercase_with_underscores (Python convention called snake_case)
Cannot start with a number: 1name is invalid, name1 is fine
Python is CASE-SENSITIVE: age and Age are different variables
Variables can be reassigned to new values at any time
Unassigned variables don't exist — using them causes a NameError`,
          example: `# Storing different types
name = 'Alice'         # string (text)
age = 28               # integer (whole number)
height = 1.65          # float (decimal)
is_student = True      # boolean (True/False)

# Printing variables (no quotes around variable name!)
print(name)        # Alice
print(age)         # 28
print(height)      # 1.65
print(is_student)  # True

# Changing a variable's value
city = 'Paris'
print(city)    # Paris
city = 'London'
print(city)    # London (old value gone)

# Multiple assignment (Python shortcut)
x, y, z = 1, 2, 3
print(x, y, z)   # 1 2 3

# Swap values (Python's elegant way)
a = 10
b = 20
a, b = b, a
print(a, b)   # 20 10`,
          exercise: {
            prompt: `Build a variable toolbox:
1. Create a variable 'favorite_food' set to any food string and print it
2. Change favorite_food to a different food and print it again
3. Create variables for: your name (string), a lucky number (integer), and whether you enjoy coding (boolean)
4. Print all three on one line using a single print() call with commas
5. Create x = 5 and y = 10, then swap their values and print both`,
            starterCode: `# Step 1: Create and print favorite_food


# Step 2: Change and print again


# Step 3: Three different type variables
my_name =
lucky_number =
enjoys_coding =

# Step 4: Print all three in one call


# Step 5: Create x and y, swap, print
`,
            solution: `favorite_food = 'pizza'
print(favorite_food)
favorite_food = 'sushi'
print(favorite_food)
my_name = 'Alex'
lucky_number = 7
enjoys_coding = True
print(my_name, lucky_number, enjoys_coding)
x = 5
y = 10
x, y = y, x
print(x, y)`,
            tests: [
              { type: "contains", value: "favorite_food" },
              { type: "contains", value: "print(favorite_food)" }
            ],
            debuggingTip: `Common mistakes:
• Print variable name in quotes? print('favorite_food') prints the text "favorite_food", not its value. Remove the quotes.
• Variable name has spaces? my food won't work — use my_food with underscore.
• Capital letters in name? Python is case-sensitive: Food and food are different variables.
• Used variable before creating it? Python reads top to bottom — define before using.
• True/False wrong case? It's True and False with capital first letter, not true or false.`
          }
        },
        {
          id: "python-phase1-m1-l4",
          title: "Working with Strings",
          explanation: `Strings are sequences of characters — any text wrapped in quotes. They're 
one of the most fundamental data types in Python, and they come loaded 
with capabilities. You can join strings together (concatenation), repeat 
them, check their length, access individual characters, and slice out 
sections. Understanding strings is essential because so much of what 
programs do involves processing text: reading user names, building 
messages, parsing data, generating reports. Python's string handling 
is one of the reasons it's so popular.`,
          concept: `'Single quotes' or "double quotes" — both create strings
+ joins strings: 'Hello' + ' ' + 'World' → 'Hello World'
* repeats: 'Ha' * 3 → 'HaHaHa'
len(string) → number of characters
string[0] → first character (indexing starts at 0)
string[-1] → last character (negative indexes from the end)
string[1:4] → slice from index 1 up to (not including) index 4`,
          example: `# Creating strings
greeting = 'Hello'
name = 'World'

# Concatenation with +
full = greeting + ' ' + name
print(full)         # Hello World

# Repetition with *
print('Ha' * 3)     # HaHaHa
print('-' * 20)     # --------------------

# Length
print(len('Python'))  # 6
print(len(full))      # 11

# Indexing — starts at 0!
word = 'Python'
print(word[0])    # P (first character)
print(word[1])    # y
print(word[-1])   # n (last character)
print(word[-2])   # o (second to last)

# Slicing — [start:end] (end is NOT included)
print(word[0:3])  # Pyt (characters 0, 1, 2)
print(word[2:])   # thon (from index 2 to end)
print(word[:3])   # Pyt (from start to index 3)`,
          exercise: {
            prompt: `Master string operations:
1. Create greeting = 'Hi' and name = 'Sam', combine with a space into message, print it
2. Print greeting repeated 4 times
3. Create word = 'Python', print its length using len()
4. Print the first character, last character, and a slice of characters 1 through 4 (indices 1, 2, 3)
5. Print a line of 30 dashes using repetition`,
            starterCode: `# Step 1: greeting, name, message
greeting = 'Hi'
name = 'Sam'


# Step 2: greeting repeated 4 times


# Step 3: word and its length
word = 'Python'


# Step 4: First char, last char, slice [1:4]


# Step 5: 30 dashes
`,
            solution: `greeting = 'Hi'
name = 'Sam'
message = greeting + ' ' + name
print(message)
print(greeting * 4)
word = 'Python'
print(len(word))
print(word[0])
print(word[-1])
print(word[1:4])
print('-' * 30)`,
            tests: [
              { type: "contains", value: "greeting = 'Hi'" },
              { type: "contains", value: "message = greeting + ' ' + name" }
            ],
            debuggingTip: `Common mistakes:
• Missing the space? greeting + name gives 'HiSam'. Add ' ' in the middle: greeting + ' ' + name.
• Concatenating string with number? 'Score: ' + 95 crashes. Convert: 'Score: ' + str(95) or use f-strings.
• Slice end is exclusive: word[1:4] gives characters at index 1, 2, 3 — NOT 4.
• Negative index confused? word[-1] is the last character, word[-2] is second to last.
• len() needs parentheses! len without () gives the function object, not the number.`
          }
        },
        {
          id: "python-phase1-m1-l5",
          title: "String Methods — Built-in Text Tools",
          explanation: `Strings in Python are packed with built-in methods — pre-written functions 
that do useful things with text. Since strings are immutable (they can't 
be changed in place), all methods return NEW strings. The original is 
always preserved. You'll use these methods constantly: .strip() to clean 
up user input, .split() to break a sentence into words, .replace() to 
swap text, .upper() and .lower() to standardize case for comparisons. 
These are the everyday tools of Python string processing.`,
          concept: `.upper()           → returns new string in ALL CAPS
.lower()           → returns new string in all lowercase
.strip()           → removes leading/trailing whitespace
.replace('a', 'b') → replaces all occurrences of 'a' with 'b'
.split(' ')        → splits string into a list at each separator
.startswith('x')   → True if string starts with 'x'
.endswith('x')     → True if string ends with 'x'
.count('x')        → counts occurrences of 'x'
.find('x')         → index of first occurrence (-1 if not found)
Methods are called with a dot: string.method() — always with parentheses`,
          example: `text = '  Hello, World!  '

# Case methods
print(text.upper())       # '  HELLO, WORLD!  '
print(text.lower())       # '  hello, world!  '

# Cleaning input
clean = text.strip()      # removes leading/trailing spaces
print(clean)              # 'Hello, World!'
print(len(text))          # 18 (with spaces)
print(len(clean))         # 13 (without spaces)

# Replacing text
print(clean.replace('World', 'Python'))  # Hello, Python!

# Splitting into list
sentence = 'apple banana cherry'
words = sentence.split(' ')
print(words)   # ['apple', 'banana', 'cherry']

# Searching
print(clean.startswith('Hello'))  # True
print(clean.endswith('!'))        # True
print(clean.find('World'))        # 7 (index where it starts)
print(clean.count('l'))           # 3`,
          exercise: {
            prompt: `Explore string methods on messy data:
1. Create: name = '  aLiCe  '
2. Print the stripped version (remove spaces) and its length
3. Print it in UPPERCASE and lowercase
4. Create sentence = 'I love Python' and replace 'Python' with 'coding'
5. Split sentence into a list of words and print the list
6. Check if sentence starts with 'I' and ends with 'Python' — print both results`,
            starterCode: `# Step 1: Create messy name
name = '  aLiCe  '

# Step 2: Strip and length


# Step 3: UPPERCASE and lowercase


# Step 4: Replace in sentence
sentence = 'I love Python'


# Step 5: Split into words


# Step 6: startswith and endswith checks
`,
            solution: `name = '  aLiCe  '
stripped = name.strip()
print(stripped)
print(len(stripped))
print(name.upper())
print(name.lower())
sentence = 'I love Python'
print(sentence.replace('Python', 'coding'))
words = sentence.split(' ')
print(words)
print(sentence.startswith('I'))
print(sentence.endswith('Python'))`,
            tests: [
              { type: "contains", value: ".upper()" },
              { type: "contains", value: ".lower()" },
              { type: "contains", value: ".strip()" }
            ],
            debuggingTip: `Common mistakes:
• Missing parentheses? .upper without () gives a method object, not the uppercase string. Always add ().
• Methods don't change original? Correct — strings are immutable. Capture result: clean = name.strip()
• .split() without argument splits on ANY whitespace including newlines and tabs.
• .find() returns -1 if not found (not None, not False) — check with if result != -1.
• Chaining works! name.strip().upper() strips first, then uppercases the result.`
          }
        },
        {
          id: "python-phase1-m1-l6",
          title: "F-Strings — Modern String Formatting",
          explanation: `F-strings (formatted string literals) are one of Python's most beloved 
features. Introduced in Python 3.6, they let you embed variables and 
expressions directly inside strings with minimal syntax. Just put f 
before the opening quote, then wrap any variable or expression in curly 
braces {}. Python evaluates what's inside {} and replaces it with the 
result. This is cleaner, faster, and more readable than the old 
concatenation approach. In real Python code, f-strings are the standard 
way to build strings with dynamic content.`,
          concept: `f'text {variable} text'    → embed variable value directly in string
f'text {expression}'       → embed any Python expression: {2 + 2}, {name.upper()}
f'{value:.2f}'             → format float to 2 decimal places
f'{value:,}'               → add comma separators to large numbers
f'{value:>10}'             → right-align in 10 character wide field
MUST use backtick or quote with f prefix: f'...' or f"..."
Works with both single and double quotes after the f`,
          example: `name = 'Alice'
age = 28
city = 'Barcelona'

# Basic f-string
print(f'Hello, {name}!')                    # Hello, Alice!
print(f'{name} is {age} years old.')        # Alice is 28 years old.

# Multiple variables
print(f'{name} lives in {city}.')           # Alice lives in Barcelona.

# Expressions inside {}
price = 50
quantity = 3
print(f'Total: \${price * quantity}')        # Total: $150
print(f'Next year: {age + 1}')             # Next year: 29

# Method calls inside {}
word = 'python'
print(f'Uppercase: {word.upper()}')         # Uppercase: PYTHON

# Number formatting
pi = 3.14159265
print(f'Pi is approximately {pi:.2f}')      # Pi is approximately 3.14
large = 1234567
print(f'Population: {large:,}')             # Population: 1,234,567

# Old ways (still work but less clean)
print('Hello, ' + name + '!')             # concatenation
print('Hello, %s!' % name)               # old % formatting
print('Hello, {}!'.format(name))         # .format() method`,
          exercise: {
            prompt: `Master f-strings:
1. Create: item = 'headphones', price = 79.99, quantity = 2
2. Use f-string to print: "Item: headphones"
3. Use f-string to print price formatted to 2 decimal places: "Price: $79.99"
4. Calculate total inside the f-string and print: "Total: $159.98"
5. Create name = 'alice' and use f-string with .upper() inside {} to print: "Hello, ALICE!"
6. Print a receipt line like: "  headphones x2  $159.98" right-aligned`,
            starterCode: `# Step 1: Create variables
item = 'headphones'
price = 79.99
quantity = 2

# Step 2: Print item name


# Step 3: Print price with 2 decimal places


# Step 4: Print total calculated inside {}


# Step 5: name with method call inside {}
name = 'alice'


# Step 6: Formatted receipt line
`,
            solution: `item = 'headphones'
price = 79.99
quantity = 2
print(f'Item: {item}')
print(f'Price: \${price:.2f}')
print(f'Total: \${quantity * price:.2f}')
name = 'alice'
print(f'Hello, {name.upper()}!')
print(f'  {item} x{quantity}  \${quantity * price:.2f}')`,
            tests: [
              { type: "contains", value: "f'" },
              { type: "contains", value: "{item}" },
              { type: "contains", value: "{price}" }
            ],
            debuggingTip: `Common mistakes:
• Forgot the f before the quote? print('{name}') prints the literal text {name}. Add f: print(f'{name}')
• Using wrong brackets? Only curly braces {} work in f-strings. Parentheses or square brackets won't substitute.
• Number formatting: {price:.2f} — the colon starts the format spec, .2f means 2 decimal places, float.
• Nested quotes issue? If your f-string uses single quotes, use double quotes inside {}: f'{"hello"}'
• Complex expressions work: {price * quantity:.2f} calculates AND formats in one step.`
          }
        },
        {
          id: "python-phase1-m1-l7",
          title: "Numbers — Integers and Floats",
          explanation: `Python has two main numeric types that you'll use constantly. Integers are 
whole numbers — no decimal point — and can be arbitrarily large in Python 
(unlike many other languages). Floats have decimal points and represent 
real numbers, but with a famous quirk: floating-point arithmetic is 
sometimes slightly imprecise due to how computers store decimals in binary. 
This is why 0.1 + 0.2 gives 0.30000000000000004. For most purposes this 
doesn't matter, but for financial calculations you'd use Python's 
Decimal module. Understanding the difference saves debugging headaches.`,
          concept: `int  → whole numbers: 5, -3, 0, 1000000 (no decimal point)
float → decimals: 3.14, -0.5, 2.0 (decimal point present)
Python automatically determines type based on decimal point presence
type(x) → tells you the type: <class 'int'> or <class 'float'>
int + int = int, but int + float = float (float is "contagious")
10 / 3 = 3.3333... (always float in Python 3!)
Underscores for readability: 1_000_000 is valid and equals 1000000`,
          example: `# Integers — whole numbers
age = 25
score = -10
population = 8_000_000_000  # underscores for readability

# Floats — decimal numbers
price = 19.99
pi = 3.14159
temperature = -5.5

# Checking types
print(type(age))        # <class 'int'>
print(type(price))      # <class 'float'>

# Float "contagion" — one float makes result float
print(5 + 3)      # 8 (int + int = int)
print(5 + 3.0)    # 8.0 (int + float = float)
print(10 / 2)     # 5.0 (division ALWAYS gives float in Python 3)
print(10 // 2)    # 5 (integer division gives int)

# The famous floating point issue
print(0.1 + 0.2)  # 0.30000000000000004 (not a bug — it's floating point!)

# Converting between types
print(int(3.9))   # 3 (truncates, doesn't round!)
print(float(5))   # 5.0
print(round(3.7)) # 4 (actually rounds)`,
          exercise: {
            prompt: `Explore numeric types:
1. Create students = 30 (int) and average_grade = 87.5 (float)
2. Print both variables and their types using type()
3. Print the result of 10 / 3 (notice: always a float in Python 3)
4. Print the result of 10 // 3 (integer division — drops the decimal)
5. Print the remainder of 17 divided by 5 using %
6. Demonstrate float imprecision: print 0.1 + 0.2 and compare with round(0.1 + 0.2, 2)`,
            starterCode: `# Step 1: Create int and float variables
students = 30
average_grade = 87.5

# Step 2: Print values and their types


# Step 3: Regular division (always float)


# Step 4: Integer division


# Step 5: Remainder (modulo)


# Step 6: Float imprecision demo
`,
            solution: `students = 30
average_grade = 87.5
print(students)
print(average_grade)
print(type(students))
print(type(average_grade))
print(10 / 3)
print(10 // 3)
print(17 % 5)
print(0.1 + 0.2)
print(round(0.1 + 0.2, 2))`,
            tests: [
              { type: "contains", value: "students = 30" },
              { type: "contains", value: "average_grade = 87.5" },
              { type: "contains", value: "type(students)" }
            ],
            debuggingTip: `Common mistakes:
• Writing 30.0 instead of 30? That makes it a float, not an integer — the decimal point matters.
• Division always float: 10 / 2 gives 5.0, not 5. Use // for integer division: 10 // 2 gives 5.
• int(3.9) gives 3, not 4! int() truncates (drops decimal). Use round(3.9) to get 4.
• % is modulo (remainder), not percentage: 17 % 5 = 2 because 17 = 5*3 + 2.`
          }
        },
        {
          id: "python-phase1-m1-l8",
          title: "Arithmetic — Python as a Calculator",
          explanation: `Python follows the same order of operations you learned in school — 
PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. 
Python's arithmetic operators cover everything from basic math to 
more specialized operations like floor division and modulo. Modulo (%) 
is particularly useful: it gives you the remainder after division, 
which lets you check if a number is even or odd, cycle through values, 
and many other practical applications. Python also has shorthand 
operators like += that make updating variables concise.`,
          concept: `+ (add), - (subtract), * (multiply), / (divide — always float)
// (floor division — integer result, rounds toward negative infinity)
% (modulo — remainder after division)
** (exponent/power: 2 ** 8 = 256)
Follows PEMDAS — use parentheses when in doubt
+= -= *= /= //= %= **= are shorthand: x += 5 means x = x + 5
abs(x) → absolute value
round(x, n) → round to n decimal places`,
          example: `# Basic operations
print(10 + 3)    # 13
print(10 - 3)    # 7
print(10 * 3)    # 30
print(10 / 3)    # 3.3333... (always float)
print(10 // 3)   # 3 (floor division)
print(10 % 3)    # 1 (remainder: 10 = 3*3 + 1)
print(2 ** 10)   # 1024 (2 to the power of 10)

# Order of operations
print(2 + 3 * 4)     # 14 (multiplication first)
print((2 + 3) * 4)   # 20 (parentheses first)

# Practical modulo uses
print(7 % 2)   # 1 — odd number (remainder 1)
print(8 % 2)   # 0 — even number (remainder 0)
print(15 % 12) # 3 — like clock arithmetic!

# Shorthand operators
score = 100
score += 10    # score = score + 10 → 110
score -= 5     # score = score - 5 → 105
score *= 2     # score = score * 2 → 210
print(score)   # 210

# Useful functions
print(abs(-42))           # 42
print(round(3.14159, 2))  # 3.14
print(pow(3, 4))          # 81 (same as 3 ** 4)`,
          exercise: {
            prompt: `Build a geometry calculator:
1. Set width = 7 and height = 12
2. Calculate area = width * height and print it
3. Calculate perimeter = 2 * (width + height) and print it
4. Use ** to calculate width squared and print it
5. Check if area is divisible by 3 using % — print True or False
6. Use shorthand operator: create total = 0 then add area and perimeter to it separately using +=, then print total`,
            starterCode: `# Step 1: Create width and height
width = 7
height = 12

# Step 2: Area


# Step 3: Perimeter


# Step 4: Width squared


# Step 5: Is area divisible by 3?


# Step 6: Use += to build total
total = 0

`,
            solution: `width = 7
height = 12
area = width * height
print(area)
perimeter = 2 * (width + height)
print(perimeter)
print(width ** 2)
print(area % 3 == 0)
total = 0
total += area
total += perimeter
print(total)`,
            tests: [
              { type: "contains", value: "area = width * height" },
              { type: "contains", value: "perimeter" }
            ],
            debuggingTip: `Common mistakes:
• 2 * width + height is NOT the perimeter formula — add parentheses: 2 * (width + height).
• ** is exponent (power): width ** 2 means width squared. Don't confuse with * (multiply).
• % is remainder, not percentage: 84 % 3 = 0 means 84 is divisible by 3.
• += modifies in place: total += area means total = total + area. Starting value matters!`
          }
        },
        {
          id: "python-phase1-m1-l9",
          title: "Booleans and Logic",
          explanation: `Booleans are the foundation of all decision-making in programming. Every 
if statement, every loop condition, every filter — they all ultimately 
come down to True or False. Python's logical operators (and, or, not) 
let you combine conditions. Python also has a concept of "truthiness" — 
values that aren't booleans but behave like them in boolean contexts. 
Empty strings, zero, empty lists, and None are all "falsy" — they 
behave like False. Everything else is "truthy". Understanding this 
makes your code more elegant and Pythonic.`,
          concept: `True and False — always capitalized in Python
and → both must be True: True and True = True
or  → at least one must be True: True or False = True
not → flips the value: not True = False
Short-circuit evaluation: Python stops early if result is determined
Falsy values: False, 0, 0.0, '', [], {}, set(), None
Truthy values: everything else (non-zero, non-empty, non-None)
bool(x) → converts to boolean to see truthiness`,
          example: `# Boolean values
is_sunny = True
is_raining = False

print(is_sunny)           # True
print(type(is_sunny))     # <class 'bool'>

# Logical operators
print(True and True)      # True (both true)
print(True and False)     # False (one false)
print(False or True)      # True (one true)
print(False or False)     # False (both false)
print(not True)           # False
print(not False)          # True

# Combining conditions
age = 20
has_id = True
print(age >= 18 and has_id)    # True
print(age < 18 or has_id)     # True

# Truthiness
print(bool(0))        # False
print(bool(''))       # False
print(bool([]))       # False
print(bool(None))     # False
print(bool('hello'))  # True
print(bool(42))       # True

# Practical truthiness check
name = ''
if name:
    print(f'Hello, {name}')
else:
    print('No name provided')  # prints this`,
          exercise: {
            prompt: `Explore booleans and logic:
1. Create is_logged_in = True and has_permission = False
2. Print both variables
3. Print the result of: is_logged_in and has_permission
4. Print the result of: is_logged_in or has_permission
5. Print: not has_permission
6. Print whether 10 > 20 (should be False)
7. Demonstrate truthiness: print bool(0), bool(''), bool('hello'), bool(42)`,
            starterCode: `# Step 1: Create boolean variables
is_logged_in = True
has_permission = False

# Step 2: Print both


# Step 3: and


# Step 4: or


# Step 5: not


# Step 6: Comparison result


# Step 7: Truthiness
`,
            solution: `is_logged_in = True
has_permission = False
print(is_logged_in)
print(has_permission)
print(is_logged_in and has_permission)
print(is_logged_in or has_permission)
print(not has_permission)
print(10 > 20)
print(bool(0))
print(bool(''))
print(bool('hello'))
print(bool(42))`,
            tests: [
              { type: "contains", value: "is_logged_in = True" },
              { type: "contains", value: "has_permission = False" }
            ],
            debuggingTip: `Common mistakes:
• lowercase true or false? Python will throw a NameError — it must be True and False with capitals.
• Using && and || like other languages? Python uses and and or (English words, not symbols).
• Not is a keyword: not True, not (x > 5) — no parentheses required but they help with clarity.
• Confused by truthiness? Remember the falsy values: 0, '', [], {}, None, False. Everything else is truthy.`
          }
        },
        {
          id: "python-phase1-m1-l10",
          title: "Type Conversion — Changing Data Types",
          explanation: `Type conversion is one of the most practically important skills in Python. 
Every time you use input(), you get a string — even if the user typed a 
number. Trying to do math with that string will crash your program with 
a TypeError. Converting between types is the solution. Python provides 
built-in functions for the most common conversions. Understanding when 
and why to convert prevents a huge category of beginner bugs. It's also 
essential when reading data from files, APIs, and databases, where 
everything often comes in as text.`,
          concept: `int('42')      → converts string to integer: 42
int(3.9)       → converts float to int: 3 (truncates, doesn't round!)
float('3.14')  → converts string to float: 3.14
float(5)       → converts int to float: 5.0
str(42)        → converts number to string: '42'
bool(0)        → converts to boolean: False
int('abc')     → raises ValueError (can't convert non-numeric text)
isinstance(x, int) → check if x is an integer without converting`,
          example: `# The #1 use case: converting input() to numbers
age_text = input('Enter your age: ')   # returns '25' (string!)
age = int(age_text)                     # now it's 25 (integer)
print(age + 10)                         # 35 (actual math!)

# Common mistake — forgetting to convert:
# print(age_text + 10)  # TypeError! Can't add string and int

# Converting in one line:
score = int(input('Enter score: '))

# float vs int
print(int('42'))      # 42
print(float('42'))    # 42.0
print(int(3.9))       # 3 (truncates! not 4)
print(int(-3.9))      # -3 (truncates toward zero)
print(round(3.9))     # 4 (rounds properly)

# Number to string
print(str(100) + ' percent')   # '100 percent'
print(str(3.14))                # '3.14'

# Checking types safely
x = 42
print(isinstance(x, int))    # True
print(isinstance(x, float))  # False
print(isinstance(x, (int, float)))  # True (is it either?)

# What fails
# int('3.14')  # ValueError — can't convert float string to int directly
print(int(float('3.14')))  # 3 — convert to float first, then int`,
          exercise: {
            prompt: `Practice type conversions:
1. Create age_str = '25', convert to integer storing as age_int, print age_int + 5
2. Show the bug: print age_str + '5' (string concatenation not math!) — notice the difference
3. Convert '3.14' directly to float and print
4. Convert 1000 to a string and concatenate with ' dollars' — print it
5. Show what happens with int(3.9) vs round(3.9) — print both
6. Try to convert 'hello' to int inside a try/except and print 'Conversion failed!' if it errors`,
            starterCode: `# Step 1: Convert string to int and do math
age_str = '25'


# Step 2: String "math" bug demonstration


# Step 3: String to float


# Step 4: Number to string and concatenate


# Step 5: int() truncation vs round()


# Step 6: Failed conversion with try/except

`,
            solution: `age_str = '25'
age_int = int(age_str)
print(age_int + 5)
print(age_str + '5')
print(float('3.14'))
print(str(1000) + ' dollars')
print(int(3.9))
print(round(3.9))
try:
    int('hello')
except ValueError:
    print('Conversion failed!')`,
            tests: [
              { type: "contains", value: "int(age_str)" },
              { type: "contains", value: "str(1000)" }
            ],
            debuggingTip: `Common mistakes:
• '25' + 5 crashes! String + integer is TypeError. Convert with int('25') first.
• int('3.14') also crashes! You can't directly convert a float-formatted string to int. Use int(float('3.14')).
• int(3.9) gives 3, not 4! Use round(3.9) if you want rounding.
• str(number) + string works: str(100) + ' dollars' = '100 dollars'.
• Empty string: int('') raises ValueError. Always validate input before converting.`
          }
        }
      ]
    },
    {
      id: "python-phase2-m1",
      title: "Phase 2 — Control Flow",
      duration: "3 hours",
      lessons: [
        {
          id: "python-phase2-m1-l1",
          title: "Comparing Things — Comparison Operators",
          explanation: `Before your program can make any decision, it needs to ask a question 
and get a yes or no answer. Comparison operators do exactly this — they 
compare two values and return True or False. This seems simple, but it's 
the absolute foundation of all logic in programming. Every if statement, 
every loop condition, every filter is built on comparisons. Python's 
comparison operators are intuitive, but there are a few gotchas: 
notably that == (double equals) checks equality while = (single equals) 
assigns a value — confusing these two is one of the most common bugs 
in all of programming.`,
          concept: `== (equal to): checks if values are the same
!= (not equal to): checks if values differ
>  (greater than): strictly larger
<  (less than): strictly smaller
>= (greater than or equal): larger OR same
<= (less than or equal): smaller OR same
All comparisons return True or False (booleans)
Can chain: 0 < x < 10 means x is between 0 and 10 (Python only!)
== checks VALUE equality. 'is' checks if same object in memory (different thing!)`,
          example: `a = 10
b = 20

# Basic comparisons
print(a == b)     # False
print(a != b)     # True
print(a < b)      # True
print(a > b)      # False
print(a <= 10)    # True
print(a >= 10)    # True

# Comparing strings
print('apple' == 'apple')  # True
print('Apple' == 'apple')  # False (case sensitive!)
print('banana' > 'apple')  # True (alphabetical comparison)

# Chaining comparisons — Python only!
x = 15
print(10 < x < 20)   # True (x is between 10 and 20)
print(0 < x < 10)    # False

# Storing comparison results
is_adult = a >= 18
is_teen = 13 <= a <= 17
print(is_adult)    # False
print(is_teen)     # False

# Common mistake!
# print(a = b)   # SyntaxError — = is assignment not comparison
print(a == b)    # == is comparison`,
          exercise: {
            prompt: `Build a comparison toolkit:
1. Create x = 50 and y = 30
2. Print whether x > y (should be True)
3. Print whether x == y (should be False)
4. Print whether x != y (should be True)
5. Create age = 25 and check if it's between 18 and 65 using Python's chained comparison — print the result
6. Create name1 = 'Alice' and name2 = 'alice' — print whether they're equal (case matters!)`,
            starterCode: `# Step 1: Create variables
x = 50
y = 30

# Step 2: Greater than


# Step 3: Equal to


# Step 4: Not equal


# Step 5: Chained comparison (between 18 and 65)
age = 25


# Step 6: String comparison (case sensitivity)
name1 = 'Alice'
name2 = 'alice'
`,
            solution: `x = 50
y = 30
print(x > y)
print(x == y)
print(x != y)
age = 25
print(18 <= age <= 65)
name1 = 'Alice'
name2 = 'alice'
print(name1 == name2)`,
            tests: [
              { type: "contains", value: "x > y" },
              { type: "contains", value: "x == y" },
              { type: "contains", value: "x != y" }
            ],
            debuggingTip: `Common mistakes:
• Used = instead of ==? Single = assigns a value, double == compares. if x = 5 is a syntax error in Python.
• String comparison is case-sensitive: 'Alice' == 'alice' is False. Use .lower() to normalize: name1.lower() == name2.lower()
• Chained comparison is Python-only: 10 < x < 20 works in Python. Other languages need: x > 10 and x < 20.
• 'is' vs '==': use == for value comparison. 'is' checks identity (same object in memory) — different concept.`
          }
        },
        {
          id: "python-phase2-m1-l2",
          title: "If Statements — Making Decisions",
          explanation: `The if statement is where your program gains the ability to choose. 
Without if, every program does the same thing every time — it can't 
react to different situations. With if, you can show different messages 
to different users, handle errors gracefully, create game logic, 
validate input, and so much more. Python's if statement has two 
absolutely mandatory parts: the colon at the end of the condition 
line, and the indented block below it. Python uses indentation 
(whitespace) to define code blocks — this is unusual but makes 
Python code extremely readable.`,
          concept: `if condition:
    # indented code runs ONLY if condition is True
    # everything at this indentation level is in the block

Colon after condition is MANDATORY
Indentation (4 spaces) defines what's inside the block — MANDATORY
Code after the block (back to normal indentation) always runs
Condition must be truthy/falsy (or a comparison expression)
No parentheses needed around condition (though they don't hurt)`,
          example: `temperature = 30

# Basic if statement
if temperature > 25:
    print('It is a hot day!')
    print('Stay hydrated!')    # same indentation = same block
print('Weather check complete.')  # outside if — always runs

# If with multiple conditions using and/or
score = 85
has_attended = True
if score >= 70 and has_attended:
    print('You passed the course!')

# Truthy check
username = 'Alice'
if username:                        # checks if username is not empty
    print(f'Welcome, {username}!')

empty_name = ''
if empty_name:
    print('This will not print')   # empty string is falsy

# One-liner if (use sparingly)
age = 20
if age >= 18: print('Adult')      # valid but less readable`,
          exercise: {
            prompt: `Build a score checker:
1. Create score = 85
2. Write an if statement: if score >= 60: print 'You passed!' and on the next indented line print 'Congratulations!'
3. After the if block (back to normal indentation), always print 'Assessment complete.'
4. Add a separate if statement checking if score >= 90 — if so, print 'Excellent work!'
5. Create is_bonus = True and use a truthy check: if is_bonus: print 'Bonus awarded!'`,
            starterCode: `# Step 1: Create score
score = 85

# Step 2: if score >= 60 — print two messages


# Step 3: Always print this (after the if block)


# Step 4: Separate check for excellent


# Step 5: Truthy check for bonus
is_bonus = True
`,
            solution: `score = 85
if score >= 60:
    print('You passed!')
    print('Congratulations!')
print('Assessment complete.')
if score >= 90:
    print('Excellent work!')
is_bonus = True
if is_bonus:
    print('Bonus awarded!')`,
            tests: [
              { type: "contains", value: "if score >= 60:" },
              { type: "contains", value: "print('You passed!')" },
              { type: "contains", value: "print('Congratulations!')" }
            ],
            debuggingTip: `Common mistakes:
• Forgot the colon? if score >= 60 without : is a SyntaxError — the colon is required.
• Inconsistent indentation? Python requires consistent indentation — use 4 spaces everywhere. Mixing spaces and tabs causes IndentationError.
• Code at wrong level? If 'Assessment complete.' is indented, it's inside the if block and won't always run.
• Condition in parentheses? if (score >= 60): works but the parentheses aren't needed in Python.`
          }
        },
        {
          id: "python-phase2-m1-l3",
          title: "elif and else — Multiple Paths",
          explanation: `Real decisions have more than two outcomes. A grade can be A, B, C, D, or F. 
Weather can be hot, warm, cool, or cold. Time of day can be morning, afternoon, 
evening, or night. Python's elif (else if) lets you check multiple conditions 
in sequence. The key insight: Python checks each condition top to bottom and 
stops at the FIRST true one — only that block runs. This is why order matters 
enormously. The else block at the end is your catch-all for anything that 
didn't match. Without else, if nothing matches, nothing happens (which is 
sometimes fine and sometimes a bug).`,
          concept: `if condition1:
    # runs if condition1 is True
elif condition2:
    # runs if condition1 False AND condition2 True
elif condition3:
    # runs if conditions 1&2 False AND condition3 True
else:
    # runs if ALL conditions above were False

Only ONE block runs — the first matching one.
Order matters — check most specific conditions first.
else is optional but recommended as a safety catch-all.
You can have as many elif blocks as you need.`,
          example: `score = 73

# Grade classifier
if score >= 90:
    print('A - Excellent!')
elif score >= 80:
    print('B - Great!')
elif score >= 70:
    print('C - Good')
elif score >= 60:
    print('D - Needs Work')
else:
    print('F - Please Retry')
# Output: C - Good

# Why order matters — WRONG way:
# if score >= 60:   # score 73 matches here first!
#     print('D')
# elif score >= 70:  # never reached for 73
#     print('C')

# Time of day greeter
hour = 14  # 24-hour format
if hour < 6:
    greeting = 'Go back to sleep!'
elif hour < 12:
    greeting = 'Good morning!'
elif hour < 17:
    greeting = 'Good afternoon!'
elif hour < 21:
    greeting = 'Good evening!'
else:
    greeting = 'Good night!'
print(greeting)  # Good afternoon!`,
          exercise: {
            prompt: `Build a comprehensive grade and feedback system:
1. Create score = 73
2. Use if/elif/else to print the correct grade: 90+ → 'A', 80-89 → 'B', 70-79 → 'C', 60-69 → 'D', below 60 → 'F'
3. After the grade block, use a separate if/else to print 'Pass' or 'Fail' based on score >= 60
4. Create hour = 14 and use if/elif/else to print appropriate greeting for morning (<12), afternoon (<17), evening (<21), or night`,
            starterCode: `# Step 1: Create score
score = 73

# Step 2: Grade classification


# Step 3: Pass or Fail


# Step 4: Time of day greeting
hour = 14
`,
            solution: `score = 73
if score >= 90:
    print('A')
elif score >= 80:
    print('B')
elif score >= 70:
    print('C')
elif score >= 60:
    print('D')
else:
    print('F')
if score >= 60:
    print('Pass')
else:
    print('Fail')
hour = 14
if hour < 12:
    print('Good morning!')
elif hour < 17:
    print('Good afternoon!')
elif hour < 21:
    print('Good evening!')
else:
    print('Good night!')`,
            tests: [
              { type: "contains", value: "if score >= 90:" },
              { type: "contains", value: "elif score >= 80:" },
              { type: "contains", value: "elif score >= 70:" },
              { type: "contains", value: "else:" }
            ],
            debuggingTip: `Common mistakes:
• Wrong order? if score >= 70 before if score >= 90 means 95 gets caught by the first branch (C instead of A).
• Missing colon on elif or else? elif score >= 80 without : causes SyntaxError.
• else without if? Every else must immediately follow an if or elif block — can't stand alone.
• elif vs else: elif checks a new condition, else catches everything remaining. Don't use elif True: — just use else.`
          }
        },
        {
          id: "python-phase2-m1-l4",
          title: "While Loops — Repeating Until Done",
          explanation: `A while loop keeps executing its block of code as long as a condition 
remains True. Think of it as a persistent if statement — it checks, 
runs, checks again, runs again, until the condition is finally False. 
This is perfect for "keep doing this until something changes" situations: 
retry until the user enters valid input, process until the queue is 
empty, run the game until the player quits. The critical responsibility 
is ensuring the condition CAN become False — forgetting to update 
the condition creates an infinite loop that freezes your program.`,
          concept: `while condition:
    # runs while condition is True
    # MUST change something that eventually makes condition False!

Condition checked BEFORE each iteration
If condition is False from start, body never runs (zero iterations)
break exits the loop immediately
continue skips to next iteration
while True: with break inside is a common pattern for "loop forever until explicitly stopped"`,
          example: `# Basic counting loop
count = 1
while count <= 5:
    print(count)
    count += 1      # CRITICAL: must update or infinite loop!
print('Loop finished!')

# Summing with accumulator
total = 0
num = 1
while num <= 100:
    total += num
    num += 1
print(f'Sum 1 to 100: {total}')  # 5050

# Loop that might not run
x = 10
while x > 10:
    print('This never prints')  # condition False from start

# while True with break (runs until explicitly stopped)
attempts = 0
while True:
    attempts += 1
    if attempts >= 3:
        print(f'Stopped after {attempts} attempts')
        break

# Countdown
countdown = 5
while countdown > 0:
    print(f'{countdown}...')
    countdown -= 1
print('Blast off! 🚀')`,
          exercise: {
            prompt: `Master while loops:
1. Create num = 1. Loop while num <= 10: print num, then increment by 1
2. After the loop, print the sum of numbers 1 to 10 (accumulate while looping)
3. Print the average after the loop (sum / 10)
4. Create a second loop that finds and prints the first number greater than 50 divisible by both 3 and 7
5. Bonus: use while True with break to print 'Looping' exactly 3 times then stop`,
            starterCode: `# Step 1 & 2: Count 1-10 and accumulate sum
num = 1
total = 0

# While loop here


# Step 3: Print sum and average


# Step 4: Find first number > 50 divisible by 3 AND 7
n = 51


# Step 5 (Bonus): while True with break
count = 0
`,
            solution: `num = 1
total = 0
while num <= 10:
    print(num)
    total += num
    num += 1
print(f'Sum: {total}')
print(f'Average: {total / 10}')
n = 51
while not (n % 3 == 0 and n % 7 == 0):
    n += 1
print(f'First number > 50 divisible by 3 and 7: {n}')
count = 0
while True:
    print('Looping')
    count += 1
    if count >= 3:
        break`,
            tests: [
              { type: "contains", value: "while num <= 10:" },
              { type: "contains", value: "total +=" },
              { type: "contains", value: "num += 1" }
            ],
            debuggingTip: `Common mistakes:
• Infinite loop (program freezes)? You forgot num += 1 inside the loop. The condition num <= 10 never becomes False.
• Off by one? while num < 10 stops at 9. Use <= 10 to include 10.
• Sum wrong? Make sure total += num is inside the loop, before num += 1.
• Average calculated inside loop? The average should be calculated AFTER the loop when total is complete.
• while True without break? Your program will run forever — always have a break condition.`
          }
        },
        {
          id: "python-phase2-m1-l5",
          title: "For Loops with range() — Counted Repetition",
          explanation: `The for loop is Python's most versatile loop, and range() is its best 
companion for counted repetition. When you know exactly how many times 
you want to repeat something — print 10 lines, process 100 items, 
count from 1 to 1000 — for with range() is the tool. range() is 
incredibly flexible: one argument gives you 0 to n-1, two arguments 
give you a custom start and stop, and a third argument lets you 
control the step size. Understanding range() well unlocks elegant 
solutions to many common programming problems.`,
          concept: `range(n)          → 0, 1, 2, ..., n-1 (n numbers total)
range(start, stop) → start, start+1, ..., stop-1 (stop is EXCLUDED)
range(start, stop, step) → start, start+step, start+2*step, ..., < stop
range(10, 0, -1)   → 10, 9, 8, ..., 1 (counting down!)
for i in range(5): → i takes values 0, 1, 2, 3, 4
Loop variable (i) is available inside the loop
If you don't need the variable, use _ by convention: for _ in range(5):`,
          example: `# range(n) — 0 to n-1
for i in range(5):
    print(i)
# Prints: 0 1 2 3 4

# range(start, stop) — start to stop-1
for i in range(1, 6):
    print(i)
# Prints: 1 2 3 4 5

# range(start, stop, step)
for i in range(0, 20, 5):
    print(i)
# Prints: 0 5 10 15

# Counting down
for i in range(10, 0, -1):
    print(i)
# Prints: 10 9 8 7 6 5 4 3 2 1

# Using the loop variable in calculations
for i in range(1, 6):
    print(f'{i} squared = {i ** 2}')

# When you don't need the variable
for _ in range(3):
    print('Python!')   # prints 3 times

# Building a sum with for loop
total = 0
for i in range(1, 101):
    total += i
print(f'Sum 1-100: {total}')  # 5050`,
          exercise: {
            prompt: `Master range() and for loops:
1. Print numbers 0 through 7 using for and range()
2. Print numbers 10 through 15 using range(10, 16)
3. Print a multiplication table for 5: "5 x 1 = 5" through "5 x 10 = 50" using an f-string
4. Use range with step 2 to print even numbers from 0 to 20
5. Count DOWN from 5 to 1 using range with negative step, then print 'Blast off!'`,
            starterCode: `# Step 1: Numbers 0 through 7


# Step 2: Numbers 10 through 15


# Step 3: Multiplication table for 5


# Step 4: Even numbers 0 to 20


# Step 5: Countdown from 5 to 1

`,
            solution: `for i in range(8):
    print(i)
for num in range(10, 16):
    print(num)
for i in range(1, 11):
    print(f'5 x {i} = {5 * i}')
for i in range(0, 21, 2):
    print(i)
for i in range(5, 0, -1):
    print(i)
print('Blast off!')`,
            tests: [
              { type: "contains", value: "for i in range(8):" },
              { type: "contains", value: "for num in range(10, 16):" }
            ],
            debuggingTip: `Common mistakes:
• range(8) gives 0-7, not 0-8! The stop value is EXCLUDED. For 0 to 7, use range(8). For 1 to 7, use range(1, 8).
• range(10, 15) gives 10, 11, 12, 13, 14 — not 15! Use range(10, 16) to include 15.
• Counting down requires negative step: range(5, 0, -1) gives 5, 4, 3, 2, 1. range(5, 0) gives nothing!
• Step of 2 for evens: range(0, 21, 2) — the stop must be 21 to include 20. range(0, 20, 2) stops at 18.`
          }
        },
        {
          id: "python-phase2-m1-l6",
          title: "For Loops with Collections",
          explanation: `For loops become even more powerful when iterating directly over collections 
like lists, strings, and dictionaries. Instead of using range() and 
index access, you can iterate directly over elements. This is one of 
Python's most celebrated features — the ability to write for item in 
collection: reads like plain English. You can also use enumerate() 
to get both the index and the value when you need them, and zip() 
to iterate two collections in parallel. These patterns appear in 
virtually every Python program ever written.`,
          concept: `for item in list:          → iterate directly over list items
for char in string:        → iterate over each character
for key in dictionary:     → iterate over dictionary keys
for key, value in dict.items(): → iterate over key-value pairs
enumerate(list)            → gives (index, item) pairs
zip(list1, list2)          → pairs items from two lists
Use _ for unused loop variable: for _, value in enumerate(lst)`,
          example: `# Iterating over a list
fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(f'I like {fruit}')

# Iterating over a string
for char in 'Python':
    print(char)
# Prints: P y t h o n (one per line)

# Iterating over dictionary
scores = {'Alice': 95, 'Bob': 87, 'Charlie': 92}
for name in scores:                    # keys only
    print(name)
for name, score in scores.items():    # key-value pairs
    print(f'{name}: {score}')

# enumerate — get index AND value
colors = ['red', 'green', 'blue']
for i, color in enumerate(colors):
    print(f'{i}: {color}')
# 0: red, 1: green, 2: blue

for i, color in enumerate(colors, start=1):  # start at 1
    print(f'{i}. {color}')
# 1. red, 2. green, 3. blue

# zip — iterate two lists together
names = ['Alice', 'Bob', 'Charlie']
grades = [95, 87, 92]
for name, grade in zip(names, grades):
    print(f'{name} scored {grade}')`,
          exercise: {
            prompt: `Practice iterating over collections:
1. Create colors = ['red', 'blue', 'green'] and loop to print 'Color: [color]' for each
2. Loop over the string 'Python' and print each character on its own line
3. Create scores = {'Alice': 90, 'Bob': 75, 'Charlie': 88} and use .items() to print each as 'Alice: 90'
4. Use enumerate() starting at 1 to print the colors list with numbers: '1. red', '2. blue', '3. green'
5. Create names = ['Alice','Bob'] and ages = [28, 35], use zip() to print 'Alice is 28 years old'`,
            starterCode: `# Step 1: Iterate colors list
colors = ['red', 'blue', 'green']


# Step 2: Iterate string 'Python'


# Step 3: Iterate dictionary with .items()
scores = {'Alice': 90, 'Bob': 75, 'Charlie': 88}


# Step 4: enumerate starting at 1


# Step 5: zip two lists
names = ['Alice', 'Bob']
ages = [28, 35]
`,
            solution: `colors = ['red', 'blue', 'green']
for color in colors:
    print(f'Color: {color}')
for char in 'Python':
    print(char)
scores = {'Alice': 90, 'Bob': 75, 'Charlie': 88}
for name, score in scores.items():
    print(f'{name}: {score}')
for i, color in enumerate(colors, start=1):
    print(f'{i}. {color}')
names = ['Alice', 'Bob']
ages = [28, 35]
for name, age in zip(names, ages):
    print(f'{name} is {age} years old')`,
            tests: [
              { type: "contains", value: "for color in colors:" },
              { type: "contains", value: "print(f'Color: {color}')" }
            ],
            debuggingTip: `Common mistakes:
• for item in dict: gives keys, not values. Use dict.items() for key-value pairs.
• zip() stops at the shorter list! If lists have different lengths, extra items are ignored.
• enumerate() default starts at 0. Use enumerate(list, start=1) to start at 1.
• Variable name must match inside loop: for color in colors: then print(colour) will crash — spelling must match exactly.`
          }
        },
        {
          id: "python-phase2-m1-l7",
          title: "Break and Continue — Loop Control",
          explanation: `Sometimes you need to exit a loop early — you found what you were looking 
for and continuing would waste time. Sometimes you need to skip certain 
items — processing only valid records, skipping blanks, or ignoring 
comments in a file. break and continue give you precise control over 
loop execution that simple conditions can't always provide. break is 
used heavily in search algorithms (stop when found), validation loops 
(keep asking until valid), and game loops (stop when game over). 
continue is used for filtering — process only items that meet certain 
criteria without nesting another if inside.`,
          concept: `break    → immediately exits the ENTIRE loop
continue → skips REST of current iteration, goes to next one
Both work in for and while loops
Break use cases: searching (stop when found), early exit on error
Continue use cases: filtering (skip invalid items), skipping special cases
else clause on loops: runs if loop completed WITHOUT hitting break
for...else and while...else are unique Python features`,
          example: `# break — exit loop early
for i in range(10):
    if i == 5:
        print(f'Found 5! Stopping.')
        break
    print(i)
# Prints: 0 1 2 3 4 Found 5! Stopping.

# continue — skip to next iteration
for i in range(10):
    if i % 2 == 0:
        continue    # skip even numbers
    print(i)
# Prints: 1 3 5 7 9 (only odd)

# Combining break and continue
for i in range(10):
    if i == 4:
        continue    # skip 4
    if i == 8:
        break       # stop at 8
    print(i)
# Prints: 0 1 2 3 5 6 7

# Loop else — runs if loop didn't break
target = 15
for i in range(10):
    if i == target:
        print(f'Found {target}!')
        break
else:
    print(f'{target} not found in range 0-9')
# Prints: 15 not found in range 0-9

# Practical: search in list
names = ['Alice', 'Bob', 'Charlie', 'Diana']
search = 'Charlie'
for name in names:
    if name == search:
        print(f'Found {search}!')
        break
else:
    print(f'{search} not in list')`,
          exercise: {
            prompt: `Practice break and continue:
1. Loop 0 to 9: use continue to skip 4, use break to stop at 8 — print the rest. Expected: 0 1 2 3 5 6 7
2. Loop through range(1, 21) using continue to print ONLY numbers divisible by 3
3. Use break to find and print the first number between 1 and 100 divisible by both 7 and 11
4. Bonus: use a for/else to search for 'Eve' in names = ['Alice', 'Bob', 'Charlie'] — print 'Found' or 'Not found'`,
            starterCode: `# Step 1: Skip 4, stop at 8


# Step 2: Print only multiples of 3 from 1 to 20


# Step 3: Find first number divisible by 7 AND 11
for i in range(1, 101):
    
    

# Step 4 (Bonus): for/else search
names = ['Alice', 'Bob', 'Charlie']
`,
            solution: `for i in range(10):
    if i == 4:
        continue
    if i == 8:
        break
    print(i)
for i in range(1, 21):
    if i % 3 != 0:
        continue
    print(i)
for i in range(1, 101):
    if i % 7 == 0 and i % 11 == 0:
        print(f'First number divisible by 7 and 11: {i}')
        break
names = ['Alice', 'Bob', 'Charlie']
for name in names:
    if name == 'Eve':
        print('Found Eve!')
        break
else:
    print('Eve not found')`,
            tests: [
              { type: "contains", value: "continue" },
              { type: "contains", value: "break" }
            ],
            debuggingTip: `Common mistakes:
• print BEFORE break/continue? The print runs before the skip/stop. Put it AFTER the checks.
• continue in while loop without updating counter? If the increment is AFTER continue, it's skipped — infinite loop!
• for/else indentation? The else must be at the SAME level as the for, not inside it.
• break exits only the innermost loop — in nested loops, outer loop continues.`
          }
        },
        {
          id: "python-phase2-m1-l8",
          title: "Capstone: Number Guessing Game",
          explanation: `Time to bring everything together! The number guessing game is a classic 
first project because it naturally requires every concept you've learned: 
a variable stores the secret, a while loop keeps the game going, 
int(input()) gets and converts user guesses, and if/elif handles the 
feedback. This is stateful programming — the game remembers the secret 
across many loop iterations and tracks attempts. The same pattern 
appears in login systems (keep asking until correct), retry logic 
(keep trying until success), and many interactive programs.`,
          concept: `Integrates: variables, while loop, int(input()), if/elif/else, comparison operators.
Pattern: initialize state → loop while condition not met → get input → check → give feedback.
The loop condition itself handles the exit: while guess != secret means loop until correct.
Counting attempts with a counter variable inside the loop.
int(input()) converts user input to integer in one step.`,
          example: `# Complete working guessing game
secret = 42
guess = 0
attempts = 0

print('I am thinking of a number between 1 and 100!')

while guess != secret:
    guess = int(input('Your guess: '))
    attempts += 1
    
    if guess < secret:
        print('Too low! Try higher.')
    elif guess > secret:
        print('Too high! Try lower.')
    # If equal, loop condition becomes False → exits

print(f'You got it in {attempts} attempt(s)! 🎉')`,
          exercise: {
            prompt: `Build the complete guessing game:
1. Set secret = 5, guess = 0, attempts = 0
2. Start a while loop that continues while guess != secret
3. Inside: get guess with int(input('Guess the number: ')), increment attempts
4. If too low: print 'Higher!'
5. If too high: print 'Lower!'
6. After the loop: print 'You got it!' and how many attempts using an f-string`,
            starterCode: `# Number Guessing Game
secret = 5
guess = 0
attempts = 0

# Step 2: While loop


    # Step 3: Get input and count


    # Step 4: Too low feedback


    # Step 5: Too high feedback


# Step 6: Victory message
`,
            solution: `secret = 5
guess = 0
attempts = 0
while guess != secret:
    guess = int(input('Guess the number: '))
    attempts += 1
    if guess < secret:
        print('Higher!')
    elif guess > secret:
        print('Lower!')
print('You got it!')
print(f'It took you {attempts} attempt(s).')`,
            tests: [
              { type: "contains", value: "while guess != secret:" },
              { type: "contains", value: "int(input(" },
              { type: "contains", value: "print('You got it!')" }
            ],
            debuggingTip: `Common mistakes:
• Infinite loop? Make sure guess = int(input(...)) is INSIDE the while loop. If it's outside, guess never changes.
• Feedback backwards? If guess < secret the number is too low, player should go HIGHER.
• Forgot int()? input() returns a string. '3' != 5 will always be True — loop never ends. Wrap with int().
• attempts not counting? Make sure attempts += 1 is inside the while loop.
• Victory message inside loop? The 'You got it!' should be AFTER the while loop (not indented under it).`
          }
        }
      ]
    },
    {
      id: "python-phase3-m1",
      title: "Phase 3 — Functions and Data Structures",
      duration: "3.5 hours",
      lessons: [
        {
          id: "python-phase3-m1-l1",
          title: "Defining Functions — Reusable Code Blocks",
          explanation: `Functions are the single most important organizational tool in programming. 
A function packages a block of code under a name so you can run it 
whenever you need it, as many times as you need it, without rewriting 
anything. This is the DRY principle: Don't Repeat Yourself. If you find 
yourself writing the same code in three places, that's a function waiting 
to be written. Functions also make code dramatically easier to read — 
a well-named function like calculate_tax() or validate_email() tells 
you exactly what it does without reading every line. Every Python program 
beyond the simplest scripts is built from functions working together.`,
          concept: `def function_name():
    # indented code block
    
function_name()  → call (execute) the function

def keyword starts the definition
Function name uses snake_case: say_hello, calculate_total
Colon and indentation are required (same as if/for/while)
Define BEFORE calling — Python reads top to bottom
Functions without return give back None automatically
Call as many times as needed — that's the whole point`,
          example: `# Basic function definition and call
def say_hello():
    print('Hello!')
    print('Welcome to Python.')

# Calling the function — runs all code inside
say_hello()
say_hello()   # call it again — same code, no repetition!

# Functions can call other functions
def print_separator():
    print('=' * 30)

def print_menu():
    print_separator()          # calling another function
    print('     MAIN MENU')
    print_separator()
    print('1. Start')
    print('2. Settings')
    print('3. Quit')
    print_separator()

print_menu()

# Docstrings — documenting what your function does
def greet_user():
    """Prints a friendly greeting to the user."""
    print('Hello, welcome!')

# Access the docstring
print(greet_user.__doc__)  # Prints a friendly greeting to the user.`,
          exercise: {
            prompt: `Build a collection of useful functions:
1. Define say_motto() that prints 'Keep coding!' and 'Never give up!' — call it twice
2. Define print_header() that prints 20 asterisks, then 'PYTHON PROGRAM', then 20 more asterisks — call it once
3. Define count_down() that uses a for loop with range to print 3, 2, 1, then 'Blast off!'
4. Add a docstring to one of your functions and print it with function.__doc__`,
            starterCode: `# Step 1: Define say_motto and call twice


# Step 2: Define print_header and call once


# Step 3: Define count_down and call once


# Step 4: Add docstring and print it
`,
            solution: `def say_motto():
    """Prints the coding motto twice."""
    print('Keep coding!')
    print('Never give up!')

say_motto()
say_motto()

def print_header():
    print('*' * 20)
    print('PYTHON PROGRAM')
    print('*' * 20)

print_header()

def count_down():
    for i in range(3, 0, -1):
        print(i)
    print('Blast off!')

count_down()
print(say_motto.__doc__)`,
            tests: [
              { type: "contains", value: "def say_motto():" },
              { type: "contains", value: "def print_header():" },
              { type: "contains", value: "say_motto()" }
            ],
            debuggingTip: `Common mistakes:
• Calling before defining? Python reads top to bottom — define the function first, call it after.
• Forgot the colon? def say_motto() without : causes SyntaxError.
• Code not indented inside function? It won't be part of the function — it runs immediately when Python sees it.
• Function name has spaces? Use underscores: say_motto not say motto.
• Calling without parentheses? say_motto references the function object. say_motto() actually calls it.`
          }
        },
        {
          id: "python-phase3-m1-l2",
          title: "Parameters and Arguments",
          explanation: `Parameters make functions flexible — instead of always doing the same 
thing, a function can accept input values and behave differently based 
on what you pass in. Think of a function as a coffee machine: the 
machine (function) always does the same process, but the beans you put 
in (parameters) determine what comes out. Without parameters, every 
function call produces identical output. With parameters, one function 
can handle infinitely many cases. Parameters are local variables — 
they exist only inside the function and disappear when the function ends.`,
          concept: `def function_name(param1, param2):
    # use param1 and param2 here

function_name(arg1, arg2)  → call with arguments

Parameters: variables in the function definition (placeholders)
Arguments: actual values passed when calling the function
Parameters are LOCAL — they don't exist outside the function
Multiple parameters separated by commas
*args: accepts any number of positional arguments as a tuple
**kwargs: accepts any number of keyword arguments as a dictionary`,
          example: `# Single parameter
def greet(name):
    print(f'Hello, {name}!')

greet('Alice')   # Hello, Alice!
greet('Bob')     # Hello, Bob!
greet('Charlie') # Hello, Charlie!

# Multiple parameters
def introduce(name, age, city):
    print(f'{name} is {age} years old and lives in {city}.')

introduce('Maria', 28, 'Rome')
introduce('Carlos', 35, 'Madrid')

# Parameter used in calculation
def print_square(n):
    print(f'{n} squared = {n ** 2}')

for i in range(1, 6):
    print_square(i)   # reuse with different values!

# *args — any number of arguments
def add_all(*numbers):
    total = sum(numbers)
    print(f'Sum of {numbers} = {total}')

add_all(1, 2, 3)          # Sum of (1, 2, 3) = 6
add_all(10, 20, 30, 40)   # Sum of (10, 20, 30, 40) = 100`,
          exercise: {
            prompt: `Build flexible functions with parameters:
1. Define greet_user(name, language) that prints "Hello [name], welcome to [language]!"
2. Call it with your name and 'Python', then with someone else's name and 'coding'
3. Define calculate_rectangle(width, height) that prints both area and perimeter
4. Call it with width=7, height=12
5. Define print_border(char, length) — print char repeated length times — test with ('*', 20) and ('-', 15)
6. Bonus: define sum_all(*numbers) using *args and test with different numbers of arguments`,
            starterCode: `# Step 1 & 2: greet_user with two parameters


# Step 3 & 4: calculate_rectangle


# Step 5: print_border


# Step 6 (Bonus): sum_all with *args
`,
            solution: `def greet_user(name, language):
    print(f'Hello {name}, welcome to {language}!')

greet_user('Alex', 'Python')
greet_user('Maria', 'coding')

def calculate_rectangle(width, height):
    area = width * height
    perimeter = 2 * (width + height)
    print(f'Area: {area}')
    print(f'Perimeter: {perimeter}')

calculate_rectangle(7, 12)

def print_border(char, length):
    print(char * length)

print_border('*', 20)
print_border('-', 15)

def sum_all(*numbers):
    print(f'Sum: {sum(numbers)}')

sum_all(1, 2, 3)
sum_all(10, 20, 30, 40, 50)`,
            tests: [
              { type: "contains", value: "def greet_user(name, language):" },
              { type: "contains", value: "greet_user(" },
              { type: "contains", value: "def calculate_rectangle" }
            ],
            debuggingTip: `Common mistakes:
• Wrong number of arguments? Python raises TypeError: missing required argument. Count your parameters and match them.
• Argument order matters! greet_user('Python', 'Alex') passes them in wrong order — they match left to right.
• Using parameter outside function? Parameters only exist inside the function — NameError if accessed outside.
• *args collects into a tuple — use sum(numbers) not sum(*numbers) inside the function.
• Forgetting to pass arguments? greet_user() with no args crashes if no defaults are set.`
          }
        },
        {
          id: "python-phase3-m1-l3",
          title: "Return Values — Functions That Answer Questions",
          explanation: `So far functions have been doing things (printing, drawing boxes). But 
the real power comes when functions produce values you can use. The 
return keyword sends a value back to wherever the function was called, 
and immediately exits the function. Think of return as the function's 
answer — you ask it a question (give it inputs), it returns the answer 
(gives back a result). You can then store that result, use it in 
another calculation, pass it to another function, or print it. 
Functions that return values are the building blocks of all 
mathematical, analytical, and data-processing code.`,
          concept: `def function_name(params):
    result = # calculate something
    return result

value = function_name(args)  → capture the returned value

return immediately exits the function
Code after return in same block is unreachable ("dead code")
A function can have multiple return statements (different exit points)
return with no value returns None
Without return, function returns None automatically
Can return multiple values: return a, b → caller gets a tuple`,
          example: `# Basic return
def add(a, b):
    return a + b

result = add(5, 3)
print(result)         # 8
print(add(10, 20))    # 30 — used directly
print(add(2, 3) * 10) # 50 — used in expression

# Multiple return statements (early returns)
def get_grade(score):
    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    elif score >= 70:
        return 'C'
    elif score >= 60:
        return 'D'
    return 'F'  # only reached if all others False

print(get_grade(95))  # A
print(get_grade(72))  # C

# Returning multiple values
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([3, 1, 4, 1, 5, 9, 2, 6])
print(f'Min: {low}, Max: {high}')  # Min: 1, Max: 9

# Boolean return — very common pattern
def is_even(n):
    return n % 2 == 0

print(is_even(4))   # True
print(is_even(7))   # False

# Using return value in calculations
def circle_area(radius):
    return 3.14159 * radius ** 2

total_area = circle_area(5) + circle_area(3)
print(f'Total area: {total_area:.2f}')`,
          exercise: {
            prompt: `Build functions that return values:
1. Define multiply(a, b) that returns the product — call with (4, 7), store and print result
2. Define celsius_to_fahrenheit(c) that returns (c * 9/5) + 32 — test with 0, 100, 37
3. Define is_palindrome(word) that returns True if word equals its reverse (word == word[::-1])
4. Test is_palindrome with 'racecar', 'hello', 'level'
5. Define clamp(value, minimum, maximum) that returns value kept within the range — test edge cases`,
            starterCode: `# Step 1: multiply returns product
def multiply(a, b):
    
product = multiply(4, 7)
print(product)

# Step 2: celsius_to_fahrenheit


# Step 3 & 4: is_palindrome


# Step 5: clamp function
`,
            solution: `def multiply(a, b):
    return a * b

product = multiply(4, 7)
print(product)

def celsius_to_fahrenheit(c):
    return (c * 9 / 5) + 32

print(celsius_to_fahrenheit(0))
print(celsius_to_fahrenheit(100))
print(celsius_to_fahrenheit(37))

def is_palindrome(word):
    return word == word[::-1]

print(is_palindrome('racecar'))
print(is_palindrome('hello'))
print(is_palindrome('level'))

def clamp(value, minimum, maximum):
    if value < minimum:
        return minimum
    if value > maximum:
        return maximum
    return value

print(clamp(5, 1, 10))
print(clamp(-3, 1, 10))
print(clamp(15, 1, 10))`,
            tests: [
              { type: "contains", value: "return a * b" },
              { type: "contains", value: "multiply(4, 7)" },
              { type: "contains", value: "return" }
            ],
            debuggingTip: `Common mistakes:
• Used print inside function instead of return? You see the number but can't use it. Use return for values you need outside.
• Forgot to capture return value? product = multiply(4, 7) captures it. Just multiply(4, 7) throws it away.
• return exits immediately — code after return in same block never runs.
• Returning multiple values? Python packs them into a tuple: return a, b. Unpack with: x, y = function()
• Temperature formula: (c * 9/5) + 32 — Python 3 always does float division so 9/5 = 1.8 correctly.`
          }
        },
        {
          id: "python-phase3-m1-l4",
          title: "Default Parameters and Keyword Arguments",
          explanation: `Default parameters make functions more flexible by giving parameters 
fallback values that are used when the caller doesn't provide an argument. 
This lets you create functions that work sensibly with minimal input 
but can be customized when needed. Keyword arguments let callers 
specify which parameter gets which value by name, regardless of order. 
These two features together make Python functions incredibly flexible — 
you'll see them everywhere in Python libraries: print(end='\\n'), 
range(start=0, stop=10), sorted(key=None, reverse=False).`,
          concept: `def function(param=default_value):  → default parameter
function()           → uses default
function(custom)     → overrides default

function(name='Alice')     → keyword argument
function(b=3, a=5)         → keyword args can be any order

Rules: parameters with defaults MUST come after those without
*args must come before **kwargs
Can mix: def func(required, optional=default, *args, **kwargs)`,
          example: `# Default parameters
def greet(name='friend', greeting='Hello'):
    print(f'{greeting}, {name}!')

greet()                        # Hello, friend!
greet('Alice')                 # Hello, Alice!
greet('Bob', 'Hi')             # Hi, Bob!
greet(greeting='Hey', name='Charlie')  # keyword args any order

# Practical default: page size
def get_page(items, page=1, per_page=10):
    start = (page - 1) * per_page
    end = start + per_page
    return items[start:end]

data = list(range(1, 51))   # 1 to 50
print(get_page(data))          # first 10 items [1..10]
print(get_page(data, page=2))  # second page [11..20]
print(get_page(data, page=1, per_page=5))  # 5 per page

# Default mutable argument GOTCHA — common bug!
# WRONG: def add_item(item, lst=[]):  # same list every call!
# RIGHT:
def add_item(item, lst=None):
    if lst is None:
        lst = []   # new list each time
    lst.append(item)
    return lst

print(add_item('apple'))   # ['apple']
print(add_item('banana'))  # ['banana'] — new list!`,
          exercise: {
            prompt: `Practice default parameters and keyword arguments:
1. Define power(base, exponent=2) that returns base ** exponent
2. Call power(5) — should give 25. Call power(3, 4) — should give 81. Print both.
3. Define describe_person(name, age=0, city='Unknown') — print a sentence about the person
4. Call it three ways: with just name, with name and age, with all three using keyword args
5. Define repeat_print(message, times=1, separator='') — print message 'times' times with separator between
6. Test with ('Hello', 3, '-') and ('Python', 5)`,
            starterCode: `# Step 1 & 2: power with default exponent
def power(base, exponent=2):
    
print(power(5))
print(power(3, 4))

# Step 3 & 4: describe_person with defaults


# Step 5 & 6: repeat_print with defaults
`,
            solution: `def power(base, exponent=2):
    return base ** exponent

print(power(5))
print(power(3, 4))

def describe_person(name, age=0, city='Unknown'):
    print(f'{name} is {age} years old and lives in {city}.')

describe_person('Alice')
describe_person('Bob', 30)
describe_person(name='Charlie', age=25, city='Paris')

def repeat_print(message, times=1, separator=''):
    for i in range(times):
        if i < times - 1:
            print(message + separator)
        else:
            print(message)

repeat_print('Hello', 3, '-')
repeat_print('Python', 5)`,
            tests: [
              { type: "contains", value: "exponent=2" },
              { type: "contains", value: "power(5)" },
              { type: "contains", value: "power(3, 4)" }
            ],
            debuggingTip: `Common mistakes:
• Default before required? def func(optional=1, required): is a SyntaxError. Required params ALWAYS come first.
• Mutable default argument bug? def func(lst=[]) shares the same list across all calls. Use lst=None and create new list inside.
• Keyword argument order? Keyword args can be in any order, but must come AFTER positional args: func(5, name='Alice') is fine.
• Overriding default? Just pass the value: power(5, 3) overrides exponent=2 with 3.`
          }
        },
        {
          id: "python-phase3-m1-l5",
          title: "Lists — Ordered Collections",
          explanation: `A list is Python's most versatile and widely used data structure. It's an 
ordered, mutable collection that can hold any mix of data types — numbers, 
strings, booleans, even other lists. "Ordered" means items have a fixed 
position (index). "Mutable" means you can change items after creation. 
Lists are used for everything: storing user records, processing data 
sets, building queues and stacks, collecting results from loops. 
Understanding lists deeply — especially slicing and the distinction 
between copy and reference — is fundamental to Python mastery.`,
          concept: `my_list = [item1, item2, item3]  → create with square brackets
my_list[0]                        → first item (zero-indexed)
my_list[-1]                       → last item
my_list[1:3]                      → slice: items at index 1 and 2
my_list[::2]                      → every other item
len(my_list)                      → number of items
my_list[0] = new_value            → modify item
in keyword: 'apple' in my_list    → True/False membership test
Lists are mutable — methods modify the list in place
copy = my_list[:]  or list(my_list) → create a true copy`,
          example: `# Creating lists
fruits = ['apple', 'banana', 'cherry']
numbers = [10, 20, 30, 40, 50]
mixed = ['hello', 42, True, 3.14]

# Access by index
print(fruits[0])    # apple (first)
print(fruits[-1])   # cherry (last)
print(fruits[-2])   # banana (second to last)

# Slicing
print(numbers[1:4])    # [20, 30, 40]
print(numbers[:3])     # [10, 20, 30] (first 3)
print(numbers[2:])     # [30, 40, 50] (from index 2)
print(numbers[::2])    # [10, 30, 50] (every other)
print(numbers[::-1])   # [50, 40, 30, 20, 10] (reversed!)

# Modifying
fruits[0] = 'avocado'
print(fruits)   # ['avocado', 'banana', 'cherry']

# Membership test
print('banana' in fruits)     # True
print('grape' in fruits)      # False

# Useful built-ins for lists
print(len(numbers))   # 5
print(sum(numbers))   # 150
print(max(numbers))   # 50
print(min(numbers))   # 10
print(sorted([3,1,4,1,5], reverse=True))  # [5,4,3,1,1]

# Important: copy vs reference
original = [1, 2, 3]
bad_copy = original      # same list! changes affect both
good_copy = original[:]  # true copy
good_copy.append(4)
print(original)   # [1, 2, 3] — unchanged`,
          exercise: {
            prompt: `Master list operations:
1. Create planets = ['Mercury', 'Venus', 'Earth', 'Mars']
2. Print the first planet (index 0) and last planet (index -1)
3. Print a slice of the middle two planets (index 1 and 2)
4. Change the second planet (index 1) to 'Jupiter' and print the whole list
5. Check if 'Earth' is in the list and if 'Pluto' is in the list — print both
6. Print len, min, and max of numbers = [15, 3, 42, 8, 27]
7. Create a reversed copy of numbers using slicing and print it`,
            starterCode: `# Step 1: Create planets list
planets = ['Mercury', 'Venus', 'Earth', 'Mars']

# Step 2: First and last


# Step 3: Middle slice


# Step 4: Modify second planet


# Step 5: Membership tests


# Step 6: len, min, max
numbers = [15, 3, 42, 8, 27]


# Step 7: Reversed copy
`,
            solution: `planets = ['Mercury', 'Venus', 'Earth', 'Mars']
print(planets[0])
print(planets[-1])
print(planets[1:3])
planets[1] = 'Jupiter'
print(planets)
print('Earth' in planets)
print('Pluto' in planets)
numbers = [15, 3, 42, 8, 27]
print(len(numbers))
print(min(numbers))
print(max(numbers))
reversed_numbers = numbers[::-1]
print(reversed_numbers)`,
            tests: [
              { type: "contains", value: "planets[0]" },
              { type: "contains", value: "planets[1] = 'Jupiter'" },
              { type: "contains", value: "in planets" }
            ],
            debuggingTip: `Common mistakes:
• Index 0 is first, not 1! planets[1] is Venus (second item), not Mercury.
• Slice end is exclusive: planets[1:3] gives index 1 and 2 — not 3.
• Modifying during iteration? Don't change a list while looping over it — use a copy or list comprehension.
• Copy vs reference: bad_copy = original shares the same object. Use original[:] or list(original) for true copy.
• Negative index: [-1] is last, [-2] is second to last, etc. Very useful!`
          }
        },
        {
          id: "python-phase3-m1-l6",
          title: "List Methods — Adding, Removing, Sorting",
          explanation: `Python lists come with a powerful set of built-in methods that let you 
add, remove, find, sort, and transform items. Since lists are mutable, 
most methods modify the list in place and return None — a common source 
of confusion when beginners write sorted_list = my_list.sort() and get 
None. Understanding which operations modify in place versus which return 
new values is essential. These methods make lists incredibly practical 
for building dynamic collections: todo lists, shopping carts, leaderboards, 
search results, and virtually any collection of changing data.`,
          concept: `.append(item)        → add item to END (modifies in place)
.insert(index, item)  → insert at specific position
.extend([items])      → add multiple items from another iterable
.remove(value)        → remove FIRST occurrence of value (ValueError if not found)
.pop(index=-1)        → remove and RETURN item at index (default: last)
.clear()              → remove all items
.sort()               → sort in place (modifies list, returns None)
.reverse()            → reverse in place (modifies list, returns None)
.index(value)         → find index of first occurrence
.count(value)         → count occurrences
sorted(list)          → returns NEW sorted list (doesn't modify original)`,
          example: `fruits = ['banana', 'apple', 'cherry']

# Adding items
fruits.append('date')           # add to end
fruits.insert(0, 'avocado')    # add at beginning
fruits.extend(['elderberry', 'fig'])  # add multiple
print(fruits)

# Removing items
fruits.remove('banana')         # remove by value
removed = fruits.pop()          # remove and return last item
print(f'Removed: {removed}')
removed_first = fruits.pop(0)   # remove and return first
print(fruits)

# Sorting
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
numbers.sort()                  # modifies in place!
print(numbers)                  # [1, 1, 2, 3, 4, 5, 6, 9]
numbers.sort(reverse=True)      # descending
print(numbers)

# sorted() returns new list — original unchanged
original = [3, 1, 4, 1, 5]
new_sorted = sorted(original)
print(original)    # [3, 1, 4, 1, 5] — unchanged!
print(new_sorted)  # [1, 1, 3, 4, 5] — new list

# Common mistake!
wrong = fruits.sort()   # sort returns None!
print(wrong)            # None — not what you wanted
# Right way:
fruits.sort()           # modify in place, don't capture
# or: new_list = sorted(fruits)  # capture new sorted list`,
          exercise: {
            prompt: `Build a dynamic task list:
1. Start with tasks = [] (empty list)
2. Append 'Study' and 'Exercise' to the list — print it
3. Insert 'Wake up' at index 0 — print it
4. Remove 'Study' using .remove() — print it
5. Pop the last task, store it, and print the popped task and remaining list
6. Create numbers = [5, 2, 8, 1, 9, 3] and sort it in place — print it
7. Create sorted_copy = sorted([5, 2, 8, 1, 9, 3]) and verify original is unchanged`,
            starterCode: `# Step 1: Empty list
tasks = []

# Step 2: Append two items


# Step 3: Insert at beginning


# Step 4: Remove 'Study'


# Step 5: Pop last item


# Step 6: Sort numbers in place
numbers = [5, 2, 8, 1, 9, 3]


# Step 7: sorted() vs .sort()
original = [5, 2, 8, 1, 9, 3]
`,
            solution: `tasks = []
tasks.append('Study')
tasks.append('Exercise')
print(tasks)
tasks.insert(0, 'Wake up')
print(tasks)
tasks.remove('Study')
print(tasks)
last = tasks.pop()
print(f'Popped: {last}')
print(tasks)
numbers = [5, 2, 8, 1, 9, 3]
numbers.sort()
print(numbers)
original = [5, 2, 8, 1, 9, 3]
sorted_copy = sorted(original)
print(f'Original: {original}')
print(f'Sorted copy: {sorted_copy}')`,
            tests: [
              { type: "contains", value: "tasks.append(" },
              { type: "contains", value: "tasks.remove('Study')" },
              { type: "contains", value: "tasks.pop()" }
            ],
            debuggingTip: `Common mistakes:
• Capturing .sort() result? sorted_list = my_list.sort() gives None — .sort() modifies in place and returns None.
• remove() vs pop()? remove('Study') removes by VALUE. pop(0) removes by INDEX and returns the item.
• remove() on non-existent value? ValueError. Check with 'if value in list' first.
• pop() on empty list? IndexError. Check 'if list' or 'if len(list) > 0' first.
• insert(0, item) adds to beginning. append(item) adds to end. extend([items]) adds multiple.`
          }
        },
        {
          id: "python-phase3-m1-l7",
          title: "Dictionaries — Key-Value Storage",
          explanation: `A dictionary maps descriptive keys to values — like a real dictionary 
maps words to definitions. Instead of remembering that index 0 is 
a name and index 1 is an age (like with a list), a dictionary lets 
you use meaningful keys: person['name'] and person['age']. Dictionaries 
are the most important data structure in Python for structured data. 
Every piece of data with multiple attributes is naturally a dictionary: 
user profiles, product records, API responses, configuration settings. 
Modern Python (3.7+) guarantees dictionaries maintain insertion order, 
making them even more useful.`,
          concept: `person = {'name': 'Alice', 'age': 28}  → create with curly braces
person['name']               → access by key (KeyError if missing)
person.get('name')           → safe access (returns None if missing)
person.get('job', 'unknown') → safe access with default value
person['new_key'] = value    → add or update key
del person['key']            → delete key
'key' in person              → membership test (True/False)
person.keys()                → all keys
person.values()              → all values
person.items()               → all (key, value) pairs
person.update({'age': 29})   → update multiple keys at once`,
          example: `# Creating and accessing
book = {'title': '1984', 'author': 'Orwell', 'year': 1949}

print(book['title'])          # 1984
print(book.get('rating'))     # None (key doesn't exist, no crash)
print(book.get('rating', 5))  # 5 (default value)

# Modifying
book['rating'] = 4.8          # add new key
book['year'] = 1948           # update existing key
del book['rating']            # delete key
print(book)

# Checking membership
print('title' in book)    # True
print('price' in book)    # False

# Iterating
for key in book:
    print(key)                         # prints keys

for value in book.values():
    print(value)                       # prints values

for key, value in book.items():
    print(f'{key}: {value}')          # prints pairs

# Dictionary from two lists (zip trick)
keys = ['a', 'b', 'c']
values = [1, 2, 3]
combined = dict(zip(keys, values))
print(combined)   # {'a': 1, 'b': 2, 'c': 3}

# Nested dictionary — very common in real data
user = {
    'name': 'Alice',
    'scores': {'math': 95, 'english': 88},
    'hobbies': ['coding', 'reading']
}
print(user['scores']['math'])   # 95
print(user['hobbies'][0])       # coding`,
          exercise: {
            prompt: `Master dictionary operations:
1. Create book = {'title': '1984', 'author': 'Orwell', 'year': 1949}
2. Print the title using key access
3. Use .get() to safely access 'rating' with default 'No rating' — print it
4. Add key 'pages' = 328 and update 'year' to 1948 — print the whole dict
5. Use .items() in a for loop to print each key-value pair as "key: value"
6. Create a nested dict: person with name, address (dict with city and country), hobbies (list). Access city and first hobby.`,
            starterCode: `# Step 1: Create book dictionary
book = {'title': '1984', 'author': 'Orwell', 'year': 1949}

# Step 2: Print title


# Step 3: Safe access with .get()


# Step 4: Add pages, update year


# Step 5: Loop with .items()


# Step 6: Nested dictionary
person = {
    'name': 'Alice',
    'address': {'city': 'Paris', 'country': 'France'},
    'hobbies': ['coding', 'reading', 'cycling']
}
# Access city and first hobby
`,
            solution: `book = {'title': '1984', 'author': 'Orwell', 'year': 1949}
print(book['title'])
print(book.get('rating', 'No rating'))
book['pages'] = 328
book['year'] = 1948
print(book)
for key, value in book.items():
    print(f'{key}: {value}')
person = {
    'name': 'Alice',
    'address': {'city': 'Paris', 'country': 'France'},
    'hobbies': ['coding', 'reading', 'cycling']
}
print(person['address']['city'])
print(person['hobbies'][0])`,
            tests: [
              { type: "contains", value: "book['title']" },
              { type: "contains", value: "book['pages'] = 328" },
              { type: "contains", value: "book.items()" }
            ],
            debuggingTip: `Common mistakes:
• KeyError? The key doesn't exist. Use .get() for safe access or check 'key in dict' first.
• Key names are case-sensitive: book['Title'] won't find 'title'.
• for key in dict: gives keys only. Use .items() for key-value pairs.
• Nested access: user['scores']['math'] — access outer key first, then inner key.
• dict.get('key') returns None if missing. dict['key'] raises KeyError if missing. Choose based on whether missing is expected.`
          }
        },
        {
          id: "python-phase3-m1-l8",
          title: "Tuples and Sets",
          explanation: `Python gives you four built-in collection types, each with a specific 
purpose. Lists are ordered and mutable. Dictionaries are key-value 
and mutable. Tuples are like frozen lists — ordered but immutable, 
meaning you can't change them after creation. This makes them perfect 
for data that should never change: coordinates, RGB color values, 
database records, function return values. Sets are unordered collections 
of unique items — they automatically eliminate duplicates and provide 
lightning-fast membership testing. Sets shine for deduplication, 
finding common elements, and checking membership in large collections.`,
          concept: `Tuple: point = (3, 4)        → ordered, IMMUTABLE (can't change)
  point[0]                  → access by index (same as list)
  a, b = point              → tuple unpacking
  single = (42,)            → single-item tuple (comma required!)

Set: tags = {'python', 'code'}  → unordered, unique items, MUTABLE
  tags.add('fun')           → add one item
  tags.discard('old')       → remove (no error if not found)
  tags.remove('old')        → remove (KeyError if not found)
  'python' in tags          → membership test (very fast!)
  set1 & set2               → intersection (items in both)
  set1 | set2               → union (all items)
  set1 - set2               → difference (in set1 but not set2)`,
          example: `# Tuples — immutable sequences
point = (3, 4)
print(point[0])        # 3
print(point[1])        # 4
# point[0] = 10       # TypeError! tuples are immutable

# Tuple unpacking — very common Python pattern
x, y = point
print(f'x={x}, y={y}')

# Practical tuple: function returning multiple values
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

low, high, avg = get_stats([5, 2, 8, 1, 9])
print(f'Min:{low} Max:{high} Avg:{avg:.1f}')

# Sets — unique, unordered
numbers = {1, 2, 3, 2, 1, 3}
print(numbers)          # {1, 2, 3} — duplicates removed!

tags = {'python', 'coding', 'beginner'}
tags.add('fun')
tags.discard('beginner')
print(tags)

# Membership test — much faster than list for large data
print('python' in tags)   # True
print('java' in tags)     # False

# Set operations — powerful!
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a & b)    # {3, 4} — intersection (in both)
print(a | b)    # {1, 2, 3, 4, 5, 6} — union (all)
print(a - b)    # {1, 2} — difference (in a not b)

# Deduplication use case
with_dups = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(with_dups))
print(unique)   # [1, 2, 3, 4] (order may vary)`,
          exercise: {
            prompt: `Explore tuples and sets:
1. Create dimensions = (1920, 1080) and print width and height using tuple unpacking
2. Create a tuple rgb = (255, 128, 0) and try to modify it (observe the error) — wrap in try/except
3. Create tags = {'python', 'coding', 'python', 'beginner'} — print it (notice duplicate removed)
4. Add 'fun' to tags, check if 'coding' is in tags, discard 'beginner' — print final tags
5. Create sets a = {1,2,3,4,5} and b = {4,5,6,7,8} — print intersection, union, and difference
6. Deduplicate this list: data = [3,1,4,1,5,9,2,6,5,3,5] — print unique values`,
            starterCode: `# Step 1 & 2: Tuple operations
dimensions = (1920, 1080)

# Unpack into width and height


# Try to modify (catch the error)


# Step 3 & 4: Set operations
tags = {'python', 'coding', 'python', 'beginner'}


# Step 5: Set math
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}


# Step 6: Deduplication
data = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
`,
            solution: `dimensions = (1920, 1080)
width, height = dimensions
print(f'Width: {width}, Height: {height}')
try:
    dimensions[0] = 100
except TypeError as e:
    print(f'Error: {e}')
tags = {'python', 'coding', 'python', 'beginner'}
print(tags)
tags.add('fun')
print('coding' in tags)
tags.discard('beginner')
print(tags)
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}
print(f'Intersection: {a & b}')
print(f'Union: {a | b}')
print(f'Difference: {a - b}')
data = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
unique = list(set(data))
print(sorted(unique))`,
            tests: [
              { type: "contains", value: "dimensions = (1920, 1080)" },
              { type: "contains", value: "tags.add(" },
              { type: "contains", value: "in tags" }
            ],
            debuggingTip: `Common mistakes:
• Empty set: {} creates an empty DICT, not a set! Use set() for empty set.
• Single-item tuple: (42) is just 42 in parentheses. Use (42,) with trailing comma.
• Sets are unordered — don't rely on print order being consistent.
• discard() vs remove(): discard silently ignores missing items. remove() raises KeyError.
• Converting set back to list loses order. Sort with sorted(set(data)) for predictable order.`
          }
        },
        {
          id: "python-phase3-m1-l9",
          title: "List Comprehensions",
          explanation: `List comprehensions are one of Python's most celebrated features — they 
let you create new lists in a single, readable line instead of writing 
a for loop that builds a list piece by piece. They're faster than 
equivalent loops (Python optimizes them internally) and, once you're 
used to them, much more readable. The syntax mirrors how you'd describe 
the list in plain English: "the square of each n in numbers" becomes 
[n**2 for n in numbers]. You can add filtering conditions and even 
nest comprehensions. You'll see list comprehensions in virtually every 
professional Python codebase.`,
          concept: `[expression for item in iterable]              → basic comprehension
[expression for item in iterable if condition]   → with filter
[f(x) for x in range(n)]                        → with function call
[x for x in data if x > 0]                      → filter only (expression = item)

Also: dict comprehensions {k: v for k, v in pairs}
      set comprehensions {x for x in data}
      generator expressions (x for x in data)  → memory efficient
      
Equivalent to:
result = []
for item in iterable:
    if condition:
        result.append(expression)`,
          example: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Basic transformation
squares = [n ** 2 for n in numbers]
print(squares)   # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# With filter
evens = [n for n in numbers if n % 2 == 0]
print(evens)     # [2, 4, 6, 8, 10]

# Transform AND filter
big_squares = [n ** 2 for n in numbers if n > 5]
print(big_squares)  # [36, 49, 64, 81, 100]

# String comprehensions
words = ['hello', 'world', 'python']
upper_words = [w.upper() for w in words]
print(upper_words)  # ['HELLO', 'WORLD', 'PYTHON']

# Lengths of strings
lengths = [len(w) for w in words]
print(lengths)   # [5, 5, 6]

# Dictionary comprehension
squared_dict = {n: n**2 for n in range(1, 6)}
print(squared_dict)  # {1:1, 2:4, 3:9, 4:16, 5:25}

# Flat list from nested (flattening)
nested = [[1,2], [3,4], [5,6]]
flat = [x for sublist in nested for x in sublist]
print(flat)   # [1, 2, 3, 4, 5, 6]`,
          exercise: {
            prompt: `Master list comprehensions:
1. Given nums = [1,2,3,4,5,6,7,8,9,10]:
   - Create 'doubled' where each number is multiplied by 2
   - Create 'odds' containing only odd numbers
   - Create 'odd_squares' — squares of only odd numbers (filter AND transform)
2. Given words = ['apple','banana','cherry','date','elderberry']:
   - Create 'long_words' containing only words longer than 5 characters
   - Create 'upper_long' — uppercase versions of words longer than 5 chars
3. Create a dict comprehension mapping numbers 1-5 to their cubes
4. Given temperatures_c = [0, 20, 37, 100], create fahrenheit list using comprehension`,
            starterCode: `nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Step 1a: doubled


# Step 1b: odds (only odd numbers)


# Step 1c: odd_squares (squares of odd numbers)


# Step 2: word operations
words = ['apple', 'banana', 'cherry', 'date', 'elderberry']

# Step 2a: long_words (longer than 5 chars)


# Step 2b: upper_long


# Step 3: Dict comprehension — numbers 1-5 to cubes


# Step 4: Temperature conversion
temperatures_c = [0, 20, 37, 100]
`,
            solution: `nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
doubled = [n * 2 for n in nums]
print(doubled)
odds = [n for n in nums if n % 2 != 0]
print(odds)
odd_squares = [n ** 2 for n in nums if n % 2 != 0]
print(odd_squares)
words = ['apple', 'banana', 'cherry', 'date', 'elderberry']
long_words = [w for w in words if len(w) > 5]
print(long_words)
upper_long = [w.upper() for w in words if len(w) > 5]
print(upper_long)
cubes = {n: n**3 for n in range(1, 6)}
print(cubes)
temperatures_c = [0, 20, 37, 100]
fahrenheit = [(c * 9/5) + 32 for c in temperatures_c]
print(fahrenheit)`,
            tests: [
              { type: "contains", value: "[n * 2 for n in nums]" },
              { type: "contains", value: "[n for n in nums if n % 2 != 0]" }
            ],
            debuggingTip: `Common mistakes:
• Order wrong? It's [expression for item in iterable], not [for item in iterable expression].
• Filter placement: the if goes at the END: [x for x in data if x > 0] — not [x if x > 0 for x in data].
• Ternary in comprehension is different: [x if x > 0 else 0 for x in data] — maps all items with conditional value.
• Dict comprehension uses {}: {k: v for k, v in items} — with colon separating key and value.`
          }
        },
        {
          id: "python-phase3-m1-l10",
          title: "Capstone: Contact Book",
          explanation: `Let's build something genuinely useful by combining everything from Phase 3. 
A contact book is a perfect capstone project because it naturally uses 
all the key data structures and function concepts: a dictionary of 
contacts (name → phone), functions for each operation (add, lookup, 
delete, list all), list comprehensions for searching, and proper 
error handling when a contact isn't found. This is the same pattern 
used in real address book applications, simple databases, and 
configuration management systems.`,
          concept: `Combines: dictionary (main storage), functions (organized operations),
list comprehension (search), f-strings (display), .get() (safe lookup),
and dictionary iteration for listing all contacts.
Design principle: each function does ONE thing well (single responsibility).
Global variable pattern: contacts dict shared across functions.`,
          example: `contacts = {}

def add_contact(name, phone):
    contacts[name] = phone
    print(f'Added {name}: {phone}')

def lookup(name):
    return contacts.get(name, 'Contact not found')

def list_all():
    if not contacts:
        print('No contacts yet.')
        return
    for name, phone in contacts.items():
        print(f'{name}: {phone}')

add_contact('Alice', '555-1234')
print(lookup('Alice'))
print(lookup('Bob'))
list_all()`,
          exercise: {
            prompt: `Build the complete contact book:
1. Create empty dict 'contacts'
2. Define add_contact(name, phone) — adds to dict, prints confirmation
3. Define lookup_contact(name) — uses .get() to return phone or 'Not found'
4. Define delete_contact(name) — removes if exists, prints result
5. Define list_all() — loops with .items() to print all contacts formatted
6. Define search_contacts(query) — returns list of names containing query (use list comprehension)
7. Test all functions: add 3 contacts, lookup one, delete one, list all, search for partial name`,
            starterCode: `# Step 1: Empty contacts dictionary
contacts = {}

# Step 2: add_contact
def add_contact(name, phone):
    
# Step 3: lookup_contact
def lookup_contact(name):
    
# Step 4: delete_contact
def delete_contact(name):
    
# Step 5: list_all
def list_all():
    
# Step 6: search_contacts
def search_contacts(query):
    

# Step 7: Test everything
`,
            solution: `contacts = {}

def add_contact(name, phone):
    contacts[name] = phone
    print(f'Added: {name} -> {phone}')

def lookup_contact(name):
    return contacts.get(name, 'Not found')

def delete_contact(name):
    if name in contacts:
        del contacts[name]
        print(f'Deleted: {name}')
    else:
        print(f'{name} not found')

def list_all():
    if not contacts:
        print('No contacts.')
        return
    print('--- All Contacts ---')
    for name, phone in contacts.items():
        print(f'  {name}: {phone}')

def search_contacts(query):
    return [name for name in contacts if query.lower() in name.lower()]

add_contact('Alice Smith', '555-1111')
add_contact('Bob Jones', '555-2222')
add_contact('Charlie Brown', '555-3333')
print(lookup_contact('Bob Jones'))
delete_contact('Charlie Brown')
list_all()
print(search_contacts('ali'))`,
            tests: [
              { type: "contains", value: "def add_contact" },
              { type: "contains", value: "def list_all" },
              { type: "contains", value: "contacts.items()" }
            ],
            debuggingTip: `Common mistakes:
• Global dict not updated inside function? Make sure you're modifying contacts (the dict itself), not reassigning the variable.
• del on non-existent key? KeyError — always check 'if name in contacts' before deleting.
• list_all not showing anything? Verify contacts has items. Use 'if not contacts:' for empty check.
• Search case sensitivity? Use .lower() on both query and name for case-insensitive search.
• Function order matters? Define functions before calling them — or put all calls at the bottom.`
          }
        }
      ]
    },
    {
      id: "python-phase4-m1",
      title: "Phase 4 — Intermediate Python",
      duration: "3.5 hours",
      lessons: [
        {
          id: "python-phase4-m1-l1",
          title: "Lambda Functions",
          explanation: `Lambda functions are small, anonymous functions defined in a single line. 
The word "anonymous" means they have no name — they're defined and often 
used inline, right where they're needed. While regular functions use 
def and have a name, lambdas use the lambda keyword and are typically 
assigned to a variable or passed directly as an argument. Lambdas are 
most useful as the key parameter in sorted(), or as the function 
argument in map() and filter(). They're not a replacement for regular 
functions — use def for anything complex, lambda for simple one-liners.`,
          concept: `lambda parameters: expression

lambda x: x * 2          → takes x, returns x * 2
lambda x, y: x + y       → two parameters
lambda x: x ** 2 == 0    → returns boolean

No return keyword — the expression IS the return value
No multi-line support — just one expression
Assigned: square = lambda x: x * x
Inline: sorted(data, key=lambda x: x['age'])
map(lambda x: x*2, [1,2,3]) → applies to each item
filter(lambda x: x>0, [-1,2,-3,4]) → keeps matching items`,
          example: `# Basic lambda
double = lambda x: x * 2
print(double(5))    # 10
print(double(21))   # 42

# Multiple parameters
add = lambda a, b: a + b
print(add(3, 7))    # 10

# Lambda with condition (ternary)
classify = lambda n: 'even' if n % 2 == 0 else 'odd'
print(classify(4))   # even
print(classify(7))   # odd

# REAL use case: sorting with key
people = [
    {'name': 'Charlie', 'age': 30},
    {'name': 'Alice', 'age': 25},
    {'name': 'Bob', 'age': 35}
]
sorted_by_age = sorted(people, key=lambda p: p['age'])
for p in sorted_by_age:
    print(f"{p['name']}: {p['age']}")

# Sorting strings by length
words = ['banana', 'fig', 'apple', 'cherry', 'date']
print(sorted(words, key=lambda w: len(w)))
# ['fig', 'date', 'apple', 'banana', 'cherry']

# map() and filter() with lambda
numbers = [1, -2, 3, -4, 5, -6]
positives = list(filter(lambda x: x > 0, numbers))
squared = list(map(lambda x: x ** 2, numbers))
print(positives)  # [1, 3, 5]
print(squared)    # [1, 4, 9, 16, 25, 36]`,
          exercise: {
            prompt: `Master lambda functions:
1. Create lambda 'square' that returns x squared — test with square(4) and square(9)
2. Create lambda 'full_name' that takes first and last and returns them combined with a space
3. Sort words = ['banana', 'fig', 'apple', 'kiwi', 'date'] by length using sorted() with lambda key
4. Sort students = [{'name':'Alice','grade':85},{'name':'Bob','grade':92},{'name':'Charlie','grade':78}] by grade descending
5. Use filter() with lambda to get only positive numbers from [-3, 1, -1, 4, -2, 5]
6. Use map() with lambda to convert temperatures_c = [0, 20, 37, 100] to Fahrenheit`,
            starterCode: `# Step 1: square lambda


# Step 2: full_name lambda


# Step 3: Sort words by length
words = ['banana', 'fig', 'apple', 'kiwi', 'date']


# Step 4: Sort students by grade descending
students = [
    {'name': 'Alice', 'grade': 85},
    {'name': 'Bob', 'grade': 92},
    {'name': 'Charlie', 'grade': 78}
]


# Step 5: Filter positives
numbers = [-3, 1, -1, 4, -2, 5]


# Step 6: Map to Fahrenheit
temperatures_c = [0, 20, 37, 100]
`,
            solution: `square = lambda x: x * x
print(square(4))
print(square(9))

full_name = lambda first, last: first + ' ' + last
print(full_name('John', 'Doe'))

words = ['banana', 'fig', 'apple', 'kiwi', 'date']
print(sorted(words, key=lambda w: len(w)))

students = [
    {'name': 'Alice', 'grade': 85},
    {'name': 'Bob', 'grade': 92},
    {'name': 'Charlie', 'grade': 78}
]
sorted_students = sorted(students, key=lambda s: s['grade'], reverse=True)
for s in sorted_students:
    print(f"{s['name']}: {s['grade']}")

numbers = [-3, 1, -1, 4, -2, 5]
positives = list(filter(lambda x: x > 0, numbers))
print(positives)

temperatures_c = [0, 20, 37, 100]
fahrenheit = list(map(lambda c: (c * 9/5) + 32, temperatures_c))
print(fahrenheit)`,
            tests: [
              { type: "contains", value: "lambda x:" },
              { type: "contains", value: "square(4)" },
              { type: "contains", value: "square(9)" }
            ],
            debuggingTip: `Common mistakes:
• Lambda has return keyword? Remove it — the expression after the colon IS automatically returned.
• map() and filter() are lazy in Python 3! They return iterators, not lists. Wrap with list(): list(map(...)).
• Sorting descending? Add reverse=True to sorted(): sorted(data, key=lambda x: x['age'], reverse=True).
• Lambda for complex logic? Use a regular def function instead — lambdas should be simple one-liners.
• Accessing dict key in lambda: lambda p: p['age'] is correct. lambda p: p.age only works for objects with attributes.`
          }
        },
        {
          id: "python-phase4-m1-l2",
          title: "Error Handling — try/except/finally",
          explanation: `Errors are a normal part of programming — files don't exist, users type 
unexpected input, networks fail, calculations hit edge cases. Without 
error handling, any of these crashes your entire program with a scary 
traceback. Python's try/except lets you anticipate these failures, 
handle them gracefully, and keep your program running. The finally 
block is especially powerful — it ALWAYS runs whether an error occurred 
or not, making it perfect for cleanup (closing files, releasing 
resources, logging). Professional Python code uses comprehensive 
error handling to create robust, production-ready software.`,
          concept: `try:
    # risky code
except ExceptionType as e:
    # handle specific exception
    # e.message, str(e), type(e).__name__ for info
except (Type1, Type2):
    # handle multiple types
except Exception as e:
    # catch-all (use sparingly)
else:
    # runs ONLY if NO exception occurred
finally:
    # ALWAYS runs — error or not

raise ValueError('message')  → manually raise an exception
raise  → re-raise current exception (inside except block)`,
          example: `# Basic try/except
try:
    number = int('not a number')
except ValueError as e:
    print(f'Conversion error: {e}')

# Multiple except clauses
def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print('Cannot divide by zero!')
        return None
    except TypeError:
        print('Both arguments must be numbers!')
        return None

print(safe_divide(10, 2))    # 5.0
print(safe_divide(10, 0))    # Cannot divide by zero! None
print(safe_divide(10, 'x'))  # Both arguments must be numbers! None

# else clause — runs only if no error
try:
    value = int('42')
except ValueError:
    print('Bad input!')
else:
    print(f'Successfully converted: {value}')  # runs!

# finally — always runs
def read_data(filename):
    f = None
    try:
        f = open(filename, 'r')
        return f.read()
    except FileNotFoundError:
        print(f'File {filename} not found')
        return None
    finally:
        if f:
            f.close()   # always close the file!
        print('Attempted file read.')

# Raising custom errors
def set_age(age):
    if not isinstance(age, int):
        raise TypeError('Age must be an integer')
    if age < 0 or age > 150:
        raise ValueError(f'Age {age} is not realistic')
    return age`,
          exercise: {
            prompt: `Practice comprehensive error handling:
1. Write try/except that converts 'abc' to int — catch ValueError, print 'Not a number!'
2. Write try/except/finally — try dividing 10/0, catch ZeroDivisionError, always print 'Done.'
3. Write try/except/else: try converting '42', if successful print 'Got: [value]', if error print 'Failed'
4. Define safe_list_access(lst, index) — returns lst[index] or 'Index out of range' using IndexError
5. Define validate_score(score) — raises ValueError if score < 0 or > 100, test with try/except`,
            starterCode: `# Step 1: Convert 'abc' to int
try:
    
except ValueError:
    

# Step 2: try/except/finally with division
try:
    
except ZeroDivisionError:
    
finally:
    

# Step 3: try/except/else
try:
    value = int('42')
except ValueError:
    
else:
    

# Step 4: safe_list_access
def safe_list_access(lst, index):
    

print(safe_list_access([1, 2, 3], 1))
print(safe_list_access([1, 2, 3], 10))

# Step 5: validate_score
def validate_score(score):
    
`,
            solution: `try:
    int('abc')
except ValueError:
    print('Not a number!')

try:
    result = 10 / 0
except ZeroDivisionError:
    print('Cannot divide by zero!')
finally:
    print('Done.')

try:
    value = int('42')
except ValueError:
    print('Failed')
else:
    print(f'Got: {value}')

def safe_list_access(lst, index):
    try:
        return lst[index]
    except IndexError:
        return 'Index out of range'

print(safe_list_access([1, 2, 3], 1))
print(safe_list_access([1, 2, 3], 10))

def validate_score(score):
    if not isinstance(score, (int, float)):
        raise TypeError('Score must be a number')
    if score < 0 or score > 100:
        raise ValueError(f'Score {score} must be between 0 and 100')
    return score

try:
    print(validate_score(85))
    print(validate_score(-5))
except ValueError as e:
    print(f'Error: {e}')`,
            tests: [
              { type: "contains", value: "try:" },
              { type: "contains", value: "except" },
              { type: "contains", value: "finally:" }
            ],
            debuggingTip: `Common mistakes:
• Catching too broadly? bare 'except:' catches everything including keyboard interrupts. Use 'except Exception' at minimum.
• else clause confusion? else runs when NO exception occurs. It's the "success" path.
• finally always runs — even if try has a return statement! Good for cleanup.
• Catching wrong exception type? Read the error message to find the right exception name.
• Re-raising: 'raise' inside except re-raises the current exception. 'raise ValueError()' raises a new one.`
          }
        },
        {
          id: "python-phase4-m1-l3",
          title: "File Handling — Reading and Writing",
          explanation: `Programs that can't save data are like calculators — useful but forgetful. 
File handling lets your Python programs persist data between runs, read 
configuration, process large datasets, write logs, and communicate with 
other programs. Python's 'with' statement is the modern, safe way to 
work with files — it guarantees the file is properly closed even if an 
exception occurs. Understanding file modes (r for reading, w for writing, 
a for appending) and the difference between text and binary modes 
prepares you for all kinds of real-world data processing.`,
          concept: `with open(filename, mode) as f:  → safe file handling (auto-closes)
    
Modes:
  'r'  → read (file must exist)
  'w'  → write (creates new or OVERWRITES existing)
  'a'  → append (creates new or adds to end)
  'r+' → read and write
  'rb'/'wb' → binary mode (for images, etc.)

f.read()           → read entire file as one string
f.readline()       → read one line
f.readlines()      → read all lines as list
f.write('text')    → write string (no automatic newline!)
f.writelines(list) → write list of strings
for line in f:     → iterate line by line (memory efficient)`,
          example: `# Writing a file
with open('notes.txt', 'w') as f:
    f.write('Line 1\n')
    f.write('Line 2\n')
    f.write('Line 3\n')
print('File written!')

# Reading entire file
with open('notes.txt', 'r') as f:
    content = f.read()
    print(content)

# Reading line by line (memory efficient for large files)
with open('notes.txt', 'r') as f:
    for line in f:
        print(line.strip())  # strip() removes trailing newline

# Reading all lines as list
with open('notes.txt', 'r') as f:
    lines = f.readlines()
    print(lines)   # ['Line 1\n', 'Line 2\n', 'Line 3\n']
    print(len(lines))  # 3

# Appending (doesn't overwrite)
with open('notes.txt', 'a') as f:
    f.write('Line 4\n')

# Handling file not found
try:
    with open('nonexistent.txt', 'r') as f:
        content = f.read()
except FileNotFoundError:
    print('File does not exist!')

# Writing multiple lines at once
lines_to_write = ['First\n', 'Second\n', 'Third\n']
with open('output.txt', 'w') as f:
    f.writelines(lines_to_write)`,
          exercise: {
            prompt: `Practice file operations:
1. Write a file 'data.txt' with three lines: 'Hello', 'World', 'Python' (each on its own line)
2. Read the entire file and print it
3. Read it again line by line, stripping whitespace, printing each line
4. Append 'Goodbye' to the file — then read and print all 4 lines
5. Try to open 'missing.txt' — catch FileNotFoundError and print a helpful message
6. Write a list of numbers [1,2,3,4,5] to 'numbers.txt' (one per line) and read them back as integers`,
            starterCode: `# Step 1: Write three lines to data.txt


# Step 2: Read entire file


# Step 3: Read line by line with strip


# Step 4: Append 'Goodbye' then read all


# Step 5: Handle missing file


# Step 6: Write numbers, read as integers
numbers = [1, 2, 3, 4, 5]
`,
            solution: `with open('data.txt', 'w') as f:
    f.write('Hello\n')
    f.write('World\n')
    f.write('Python\n')

with open('data.txt', 'r') as f:
    print(f.read())

with open('data.txt', 'r') as f:
    for line in f:
        print(line.strip())

with open('data.txt', 'a') as f:
    f.write('Goodbye\n')

with open('data.txt', 'r') as f:
    for line in f:
        print(line.strip())

try:
    with open('missing.txt', 'r') as f:
        content = f.read()
except FileNotFoundError:
    print('Error: missing.txt does not exist!')

numbers = [1, 2, 3, 4, 5]
with open('numbers.txt', 'w') as f:
    for n in numbers:
        f.write(f'{n}\n')

with open('numbers.txt', 'r') as f:
    loaded = [int(line.strip()) for line in f]
    print(loaded)
    print(sum(loaded))`,
            tests: [
              { type: "contains", value: "with open('data.txt', 'w') as f:" },
              { type: "contains", value: "f.write(" },
              { type: "contains", value: "f.read()" }
            ],
            debuggingTip: `Common mistakes:
• 'w' mode overwrites! If file exists, all content is deleted. Use 'a' to append.
• Forgot newline character? f.write('Hello') followed by f.write('World') gives 'HelloWorld'. Add '\n'.
• Reading after writing without reopening? File position is at end — reopen to read from start.
• readlines() includes '\n' at end of each line: ['Hello\n', 'World\n']. Use .strip() to remove.
• Always use 'with' statement — it guarantees file closure even if an error occurs.`
          }
        },
        {
          id: "python-phase4-m1-l4",
          title: "Modules and Imports",
          explanation: `Python's standard library is one of its greatest strengths — "batteries 
included" means thousands of pre-built modules for everything from math 
to networking to data processing. Knowing which modules exist and how 
to import them saves hours of writing code from scratch. Beyond the 
standard library, Python's package ecosystem (PyPI) has over 400,000 
third-party packages. Learning to import and use modules is the gateway 
to Python's full power. The way you import affects code clarity: 
import module is safest, from module import name is convenient, 
from module import * should be avoided.`,
          concept: `import math                → import module, use as math.sqrt()
from math import sqrt      → import specific name, use as sqrt()
from math import sqrt, pi  → import multiple names
from math import *         → import all (avoid — pollutes namespace)
import numpy as np         → import with alias (common for long names)

Standard library highlights:
math: sqrt, pi, ceil, floor, pow, log, factorial
random: randint, choice, shuffle, sample, random
os: path.exists, listdir, getcwd, makedirs
datetime: datetime.now(), timedelta, date
json: loads, dumps, load, dump
sys: argv, exit, path
re: search, match, findall, sub (regular expressions)`,
          example: `# math module
import math
print(math.sqrt(144))    # 12.0
print(math.pi)           # 3.14159...
print(math.ceil(4.1))    # 5
print(math.floor(4.9))   # 4
print(math.factorial(5)) # 120

# Selective import
from math import sqrt, pi, log
print(sqrt(25))    # 5.0 (no math. prefix needed)
print(log(100, 10))  # 2.0 (log base 10)

# random module
import random
print(random.randint(1, 6))      # random 1-6
print(random.choice(['a','b','c']))  # random choice
lst = [1, 2, 3, 4, 5]
random.shuffle(lst)
print(lst)                       # shuffled list
print(random.sample(lst, 3))    # 3 random items

# os module
import os
print(os.getcwd())               # current directory
print(os.path.exists('data.txt'))  # True/False

# datetime
from datetime import datetime, timedelta
now = datetime.now()
print(now.strftime('%Y-%m-%d %H:%M'))  # formatted date
tomorrow = now + timedelta(days=1)
print(tomorrow.date())`,
          exercise: {
            prompt: `Explore Python's standard library:
1. Import math — print sqrt(144), pi to 4 decimal places, and factorial(7)
2. Import random — generate a random int 1-100, pick a random choice from ['rock','paper','scissors'], shuffle a list [1,2,3,4,5]
3. Use from datetime import datetime — print the current date formatted as 'YYYY-MM-DD'
4. Import os — print whether 'data.txt' exists (use os.path.exists)
5. Create a function roll_dice(sides=6) that uses random.randint to simulate a die roll`,
            starterCode: `# Step 1: math operations
import math


# Step 2: random operations
import random


# Step 3: datetime
from datetime import datetime


# Step 4: os module
import os


# Step 5: roll_dice function
`,
            solution: `import math
print(math.sqrt(144))
print(f'{math.pi:.4f}')
print(math.factorial(7))

import random
print(random.randint(1, 100))
print(random.choice(['rock', 'paper', 'scissors']))
lst = [1, 2, 3, 4, 5]
random.shuffle(lst)
print(lst)

from datetime import datetime
now = datetime.now()
print(now.strftime('%Y-%m-%d'))

import os
print(os.path.exists('data.txt'))

def roll_dice(sides=6):
    return random.randint(1, sides)

print(roll_dice())
print(roll_dice(20))`,
            tests: [
              { type: "contains", value: "import math" },
              { type: "contains", value: "math.sqrt(144)" },
              { type: "contains", value: "import random" }
            ],
            debuggingTip: `Common mistakes:
• from math import * pollutes your namespace — avoid it for anything beyond quick experiments.
• random.randint(1, 6) includes BOTH endpoints — different from range() where end is excluded.
• random.choice() needs a non-empty sequence — IndexError on empty list.
• math.pow(x, y) returns float. x ** y uses Python's int if both are ints (different behavior).
• Circular imports: if file A imports file B and B imports A, you'll get ImportError. Restructure your code.`
          }
        },
        {
          id: "python-phase4-m1-l5",
          title: "Working with JSON",
          explanation: `JSON (JavaScript Object Notation) is the universal language of data on 
the internet. Every web API, configuration file, and data exchange 
format you'll encounter uses JSON. Python's json module makes it 
effortless to convert between Python objects (dicts, lists, strings, 
numbers) and JSON text. json.dumps() serializes Python to JSON string. 
json.loads() deserializes JSON string to Python. json.dump() writes to 
a file. json.load() reads from a file. Mastering JSON is essential 
for any Python developer working with web APIs, data pipelines, 
or application configuration.`,
          concept: `import json

json.dumps(obj)              → Python object → JSON string
json.dumps(obj, indent=2)    → pretty-printed JSON
json.loads(string)           → JSON string → Python object
json.dump(obj, file)         → write JSON to file
json.load(file)              → read JSON from file

Python → JSON type mapping:
dict → object, list → array, str → string
int/float → number, True/False → true/false, None → null`,
          example: `import json

# Python dict to JSON string
person = {
    'name': 'Alice',
    'age': 28,
    'hobbies': ['coding', 'reading'],
    'active': True,
    'score': None
}

json_string = json.dumps(person)
print(json_string)
print(type(json_string))   # <class 'str'>

# Pretty printing
pretty = json.dumps(person, indent=2)
print(pretty)

# JSON string to Python
parsed = json.loads(json_string)
print(parsed['name'])          # Alice
print(type(parsed))            # <class 'dict'>

# Writing JSON to file
with open('data.json', 'w') as f:
    json.dump(person, f, indent=2)

# Reading JSON from file
with open('data.json', 'r') as f:
    loaded = json.load(f)
    print(loaded['hobbies'])   # ['coding', 'reading']

# Working with JSON arrays
students_json = '[{"name":"Alice","grade":95},{"name":"Bob","grade":87}]'
students = json.loads(students_json)
for student in students:
    print(f"{student['name']}: {student['grade']}")`,
          exercise: {
            prompt: `Master JSON in Python:
1. Create a dict 'product' with: name='Laptop', price=999.99, in_stock=True, tags=['electronics','computer']
2. Convert to JSON string using json.dumps() and print it
3. Print the pretty-printed version with indent=2
4. Parse the JSON string back and print the name and first tag
5. Write the JSON to 'product.json' file, then read it back and print the price
6. Parse this JSON array string and print each item's name: '[{"name":"Alice"},{"name":"Bob"}]'`,
            starterCode: `import json

# Step 1: Create product dict
product = {
    'name': 'Laptop',
    'price': 999.99,
    'in_stock': True,
    'tags': ['electronics', 'computer']
}

# Step 2: Convert to JSON string


# Step 3: Pretty print


# Step 4: Parse back and access fields


# Step 5: Write to file and read back


# Step 6: Parse JSON array string
array_json = '[{"name":"Alice"},{"name":"Bob"}]'
`,
            solution: `import json

product = {
    'name': 'Laptop',
    'price': 999.99,
    'in_stock': True,
    'tags': ['electronics', 'computer']
}

json_string = json.dumps(product)
print(json_string)

print(json.dumps(product, indent=2))

parsed = json.loads(json_string)
print(parsed['name'])
print(parsed['tags'][0])

with open('product.json', 'w') as f:
    json.dump(product, f, indent=2)

with open('product.json', 'r') as f:
    loaded = json.load(f)
    print(loaded['price'])

array_json = '[{"name":"Alice"},{"name":"Bob"}]'
people = json.loads(array_json)
for person in people:
    print(person['name'])`,
            tests: [
              { type: "contains", value: "json.dumps(product)" },
              { type: "contains", value: "json.loads(" }
            ],
            debuggingTip: `Common mistakes:
• json.dumps vs json.dump? dumps returns a STRING. dump writes to a FILE object. Don't mix them up.
• JSON uses double quotes — json.loads("{'name': 'Alice'}") fails! Valid JSON uses " not '.
• Boolean values: Python True/False become JSON true/false. Python None becomes JSON null.
• Accessing parsed JSON? json.loads() returns dict/list — access like normal Python: data['key'].
• Pretty print for humans, compact for transmission: indent=2 for readability, no indent for smaller files.`
          }
        }
      ]
    },
    {
      id: "python-phase5-m1",
      title: "Phase 5 — Object-Oriented Programming",
      duration: "3 hours",
      lessons: [
        {
          id: "python-phase5-m1-l1",
          title: "Classes and Objects — The Blueprint Pattern",
          explanation: `Object-oriented programming is a way of organizing code around "objects" — 
bundles of data and the functions that work with that data. A class is 
the blueprint. An object (instance) is a specific thing built from that 
blueprint. Think of a class as the cookie cutter and objects as the 
cookies — one cutter, infinite cookies, each with their own data. OOP 
helps you model real-world things naturally: a BankAccount with a 
balance, a Car with a speed, a User with a name. The code becomes 
organized around meaningful concepts rather than scattered functions 
and variables.`,
          concept: `class ClassName:          → define the blueprint (PascalCase by convention)
    def method(self):     → methods always have 'self' as first parameter
        pass

obj = ClassName()         → create an instance (object)
obj.method()              → call instance method
obj.attribute             → access instance attribute

self: refers to the specific instance being operated on
Every method must take self as first parameter (Python passes it automatically)
class attributes: shared by all instances (defined at class level)
instance attributes: unique to each instance (defined in methods with self.)`,
          example: `class Dog:
    # Class attribute — shared by all instances
    species = 'Canis familiaris'
    
    def bark(self):
        print('Woof!')
    
    def describe(self):
        print(f'I am a {self.species}')

# Creating instances
dog1 = Dog()
dog2 = Dog()

dog1.bark()       # Woof!
dog2.bark()       # Woof! (same method, different objects)

print(type(dog1))              # <class '__main__.Dog'>
print(isinstance(dog1, Dog))   # True

# Class attribute shared
print(dog1.species)   # Canis familiaris
print(dog2.species)   # Canis familiaris

# Adding instance attributes directly (not recommended — use __init__)
dog1.name = 'Rex'
print(dog1.name)   # Rex
# print(dog2.name)   # AttributeError! dog2 doesn't have name`,
          exercise: {
            prompt: `Build your first class:
1. Define class Car with a class attribute 'wheels = 4'
2. Add method drive(self) that prints 'Driving!'
3. Add method honk(self) that prints 'Beep beep!'
4. Create two Car instances my_car and your_car
5. Call drive() and honk() on my_car
6. Print the wheels attribute from both cars and verify they're the same
7. Add a custom attribute my_car.color = 'red' and print it`,
            starterCode: `# Step 1: Define Car class with class attribute


# Step 2 & 3: Add drive and honk methods


# Step 4: Create two instances
my_car =
your_car =

# Step 5: Call methods on my_car


# Step 6: Print wheels from both


# Step 7: Custom attribute
`,
            solution: `class Car:
    wheels = 4
    
    def drive(self):
        print('Driving!')
    
    def honk(self):
        print('Beep beep!')

my_car = Car()
your_car = Car()

my_car.drive()
my_car.honk()

print(my_car.wheels)
print(your_car.wheels)

my_car.color = 'red'
print(my_car.color)`,
            tests: [
              { type: "contains", value: "class Car:" },
              { type: "contains", value: "my_car = Car()" },
              { type: "contains", value: "my_car.drive()" }
            ],
            debuggingTip: `Common mistakes:
• Class name must be PascalCase by convention: Car not car, BankAccount not bank_account.
• Methods need self: def drive(): without self causes TypeError when Python tries to pass the instance.
• Instance before calling methods? Create it first: my_car = Car() then my_car.drive().
• Accessing attribute on wrong object? dog2.name fails if only dog1.name was set. Use __init__ to set attributes properly.
• Class vs instance attribute: changing Dog.species changes it for ALL instances. self.species changes only that instance.`
          }
        },
        {
          id: "python-phase5-m1-l2",
          title: "__init__ — Initializing Objects",
          explanation: `The __init__ method is Python's constructor — a special method that runs 
automatically whenever you create a new object with ClassName(). 
It's where you set up each object's initial state: storing the data 
that makes this particular instance unique. The double underscores 
around __init__ indicate it's a "dunder" (double-underscore) method — 
special methods that Python calls automatically. self.attribute = value 
is how you attach data to the specific instance being created. 
Without __init__, every instance would be identical at creation — 
with it, each can start with its own data.`,
          concept: `def __init__(self, param1, param2):
    self.attribute1 = param1
    self.attribute2 = param2

Called automatically when: obj = ClassName(arg1, arg2)
self refers to the new object being created
self.attribute creates an INSTANCE attribute (unique per object)
Always use __init__ to set up instance data — never rely on adding attributes later
Two underscores on each side: __init__ not _init_ or init_
Can do validation, computation, or call other methods in __init__`,
          example: `class Student:
    def __init__(self, name, grade, year=1):
        self.name = name
        self.grade = grade
        self.year = year
        self.courses = []   # every student starts with empty course list
    
    def enroll(self, course):
        self.courses.append(course)
        print(f'{self.name} enrolled in {course}')
    
    def show_info(self):
        print(f'Student: {self.name}')
        print(f'Grade: {self.grade} | Year: {self.year}')
        print(f'Courses: {self.courses}')

# Creating instances — __init__ runs automatically
alice = Student('Alice', 90)
bob = Student('Bob', 85, year=2)

alice.enroll('Python')
alice.enroll('Math')
bob.enroll('English')

alice.show_info()
# Student: Alice
# Grade: 90 | Year: 1
# Courses: ['Python', 'Math']

bob.show_info()

# Each instance has its own data
print(alice.name)   # Alice
print(bob.name)     # Bob
print(alice.courses is bob.courses)  # False — different lists!`,
          exercise: {
            prompt: `Build a proper Book class with __init__:
1. Define class Book with __init__(self, title, author, pages) — store all three as instance attributes
2. Add method describe(self) that prints: "Title: Author (pages pages)"
3. Add method is_long(self) that returns True if pages > 300, False otherwise
4. Create book1 = Book('1984', 'Orwell', 328) and book2 = Book('Dune', 'Herbert', 412)
5. Call describe() on both books
6. Print is_long() results for both books
7. Add a read_pages attribute defaulting to 0, and a method read(pages) that adds to it`,
            starterCode: `# Step 1: Book class with __init__
class Book:
    def __init__(self, title, author, pages):
        
    
    # Step 2: describe method
    
    
    # Step 3: is_long method
    
    
    # Step 7: read method
    

# Step 4: Create two books
book1 = Book('1984', 'Orwell', 328)
book2 = Book('Dune', 'Herbert', 412)

# Step 5: Call describe()


# Step 6: Call is_long()
`,
            solution: `class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
        self.read_pages = 0
    
    def describe(self):
        print(f'{self.title}: {self.author} ({self.pages} pages)')
    
    def is_long(self):
        return self.pages > 300
    
    def read(self, pages):
        self.read_pages += pages
        print(f'Read {pages} pages. Total: {self.read_pages}/{self.pages}')

book1 = Book('1984', 'Orwell', 328)
book2 = Book('Dune', 'Herbert', 412)

book1.describe()
book2.describe()

print(book1.is_long())
print(book2.is_long())

book1.read(50)
book1.read(30)`,
            tests: [
              { type: "contains", value: "def __init__(self, title, author, pages):" },
              { type: "contains", value: "self.title = title" },
              { type: "contains", value: "book1.describe()" }
            ],
            debuggingTip: `Common mistakes:
• Forgot self in __init__ parameters? def __init__(title, author) causes TypeError when Python passes the instance.
• Using variable name instead of self.name? Assigning name = title inside __init__ creates a local variable that disappears. Use self.title = title.
• Two underscores! __init__ not _init_ or __init. Count: two before, two after.
• Mutable default in __init__? Never do self.courses = [] as a CLASS attribute — each instance gets the SAME list. Define in __init__.
• Accessing attribute before setting? Call __init__ via ClassName(args) to trigger setup.`
          }
        },
        {
          id: "python-phase5-m1-l3",
          title: "Methods — Giving Objects Behavior",
          explanation: `Instance methods are the behaviors of your objects — what they can DO. 
Beyond __init__, you can add as many methods as make sense for your class. 
Good OOP design means each method does one thing well, and together 
the methods give the object a complete, logical interface. Python also 
has special "dunder" methods (double-underscore methods) that let your 
objects work with Python's built-in syntax: __str__ for print(), 
__len__ for len(), __eq__ for ==, __add__ for +. Implementing these 
makes your objects feel like natural parts of Python.`,
          concept: `Instance method: def method(self, params): — has access to self
Class method: @classmethod def method(cls, params): — receives class, not instance
Static method: @staticmethod def method(params): — no self, no class
Property: @property def attr(self): — access like attribute, not method()

Key dunder methods:
__str__(self)    → called by str() and print()
__repr__(self)   → developer representation
__len__(self)    → called by len()
__eq__(self, other) → called by ==
__lt__(self, other) → called by <`,
          example: `class BankAccount:
    # Class attribute — tracks all accounts
    total_accounts = 0
    
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.transactions = []
        BankAccount.total_accounts += 1
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError('Deposit must be positive')
        self.balance += amount
        self.transactions.append(f'+{amount}')
        return self   # enables chaining!
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError('Insufficient funds')
        self.balance -= amount
        self.transactions.append(f'-{amount}')
        return self
    
    def get_balance(self):
        return self.balance
    
    # Dunder methods
    def __str__(self):
        return f'Account({self.owner}: \${self.balance:.2f})'
    
    def __repr__(self):
        return f'BankAccount(owner={self.owner!r}, balance={self.balance})'
    
    @classmethod
    def get_total_accounts(cls):
        return cls.total_accounts
    
    @staticmethod
    def validate_amount(amount):
        return isinstance(amount, (int, float)) and amount > 0

acc = BankAccount('Alice', 1000)
acc.deposit(500).withdraw(200)  # method chaining!
print(acc)            # Account(Alice: $1300.00)
print(repr(acc))      # BankAccount(owner='Alice', balance=1300)
print(BankAccount.get_total_accounts())  # 1`,
          exercise: {
            prompt: `Build a complete BankAccount class:
1. __init__(self, owner, balance=0): store owner, balance=0, and transactions=[] list
2. deposit(self, amount): add to balance, append f'+{amount}' to transactions, print confirmation
3. withdraw(self, amount): check funds, subtract, append f'-{amount}', print confirmation, return False if insufficient
4. get_balance(self): return current balance
5. show_history(self): print all transactions
6. __str__(self): return f'Account({owner}: \${balance:.2f})'
7. Test: create account, deposit 200, withdraw 50, print str(account), show history`,
            starterCode: `class BankAccount:
    def __init__(self, owner, balance=0):
        
    
    def deposit(self, amount):
        
    
    def withdraw(self, amount):
        
    
    def get_balance(self):
        
    
    def show_history(self):
        
    
    def __str__(self):
        

# Test the class
account = BankAccount('Alice')
`,
            solution: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.transactions = []
    
    def deposit(self, amount):
        if amount <= 0:
            print('Amount must be positive')
            return
        self.balance += amount
        self.transactions.append(f'+{amount}')
        print(f'Deposited \${amount}. Balance: \${self.balance}')
    
    def withdraw(self, amount):
        if amount > self.balance:
            print('Insufficient funds')
            return False
        self.balance -= amount
        self.transactions.append(f'-{amount}')
        print(f'Withdrew \${amount}. Balance: \${self.balance}')
        return True
    
    def get_balance(self):
        return self.balance
    
    def show_history(self):
        print(f'Transaction history for {self.owner}:')
        for t in self.transactions:
            print(f'  {t}')
    
    def __str__(self):
        return f'Account({self.owner}: \${self.balance:.2f})'

account = BankAccount('Alice')
account.deposit(200)
account.withdraw(50)
print(str(account))
account.show_history()`,
            tests: [
              { type: "contains", value: "def deposit(self, amount):" },
              { type: "contains", value: "self.balance += amount" },
              { type: "contains", value: "account.get_balance()" }
            ],
            debuggingTip: `Common mistakes:
• Forgot self in method? def deposit(amount) causes TypeError — Python passes the instance automatically.
• Not updating self.balance? balance += amount only changes a local variable. Use self.balance += amount.
• __str__ must return a string, not print it! Return the formatted string, caller prints it.
• Transaction history empty? Make sure self.transactions.append() is called inside deposit/withdraw.
• Return value from withdraw: return False for failure, return True (or nothing) for success — be consistent.`
          }
        },
        {
          id: "python-phase5-m1-l4",
          title: "Inheritance — Building on Existing Classes",
          explanation: `Inheritance is one of the most powerful OOP concepts. It lets you create 
a new class that automatically gets all the attributes and methods of 
an existing class, then adds or modifies what it needs. This models 
"is-a" relationships: a SavingsAccount IS A BankAccount. A Dog IS AN 
Animal. A Manager IS AN Employee. Inheritance eliminates code duplication — 
shared behavior lives in the parent once, all children benefit automatically. 
When the parent changes, children automatically get the update. Python 
supports multiple inheritance (a class can inherit from multiple parents), 
though single inheritance is much more common.`,
          concept: `class Child(Parent):       → inherits all methods and attributes
    def __init__(self, ...):
        super().__init__(...)  → call parent's __init__ (usually required)
        self.extra = value     → add child-specific attributes
    
    def new_method(self):    → add new method
        pass
    
    def existing_method(self): → override parent method
        super().existing_method()  → optionally call parent version
        # additional child behavior

isinstance(obj, Parent)  → True for child objects too!
issubclass(Child, Parent) → True`,
          example: `class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def eat(self):
        print(f'{self.name} is eating.')
    
    def sleep(self):
        print(f'{self.name} is sleeping.')
    
    def __str__(self):
        return f'{type(self).__name__}({self.name}, age={self.age})'

class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age)  # call Animal's __init__
        self.breed = breed           # Dog-specific attribute
    
    def bark(self):
        print(f'{self.name} says: Woof!')
    
    def fetch(self, item):
        print(f'{self.name} fetches the {item}!')

class Cat(Animal):
    def __init__(self, name, age, indoor=True):
        super().__init__(name, age)
        self.indoor = indoor
    
    def purr(self):
        print(f'{self.name} purrs...')

dog = Dog('Rex', 3, 'Labrador')
cat = Cat('Whiskers', 5)

# Dog has Animal methods + Dog methods
dog.eat()          # from Animal
dog.bark()         # from Dog
dog.fetch('ball')  # from Dog

print(isinstance(dog, Dog))     # True
print(isinstance(dog, Animal))  # True (also an Animal!)
print(str(dog))    # Dog(Rex, age=3)`,
          exercise: {
            prompt: `Build an animal hierarchy:
1. Create base class Animal with __init__(name, sound), method speak() printing '[name] says [sound]!', and __str__ returning 'Animal: [name]'
2. Create Dog(Animal) with __init__(name, breed), call super().__init__(name, 'Woof'), add method fetch(item)
3. Create Cat(Animal) with __init__(name, indoor=True), call super().__init__(name, 'Meow'), add method purr()
4. Create Bird(Animal) with __init__(name, can_fly=True), add method fly_status() printing if it can fly
5. Create instances of each and demonstrate inherited and unique methods
6. Show isinstance() works across the hierarchy`,
            starterCode: `# Step 1: Base Animal class
class Animal:
    def __init__(self, name, sound):
        
    
    def speak(self):
        
    
    def __str__(self):
        

# Step 2: Dog inherits from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        
    
    def fetch(self, item):
        

# Step 3: Cat inherits from Animal
class Cat(Animal):
    

# Step 4: Bird inherits from Animal
class Bird(Animal):
    

# Step 5 & 6: Create instances and test
`,
            solution: `class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound
    
    def speak(self):
        print(f'{self.name} says {self.sound}!')
    
    def __str__(self):
        return f'Animal: {self.name}'

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, 'Woof')
        self.breed = breed
    
    def fetch(self, item):
        print(f'{self.name} fetches the {item}!')

class Cat(Animal):
    def __init__(self, name, indoor=True):
        super().__init__(name, 'Meow')
        self.indoor = indoor
    
    def purr(self):
        print(f'{self.name} purrs...')

class Bird(Animal):
    def __init__(self, name, can_fly=True):
        super().__init__(name, 'Tweet')
        self.can_fly = can_fly
    
    def fly_status(self):
        status = 'can fly' if self.can_fly else 'cannot fly'
        print(f'{self.name} {status}')

dog = Dog('Rex', 'Labrador')
cat = Cat('Whiskers')
bird = Bird('Tweety')
penguin = Bird('Pingu', can_fly=False)

dog.speak()
dog.fetch('ball')
cat.speak()
cat.purr()
bird.speak()
bird.fly_status()
penguin.fly_status()

print(isinstance(dog, Animal))   # True
print(isinstance(cat, Dog))      # False`,
            tests: [
              { type: "contains", value: "class Dog(Animal):" },
              { type: "contains", value: "super().__init__(" },
              { type: "contains", value: "isinstance" }
            ],
            debuggingTip: `Common mistakes:
• Forgot super().__init__()? Parent attributes (name, sound) won't exist on the child object.
• super().__init__() must be called BEFORE using self in child __init__ — Python needs the parent to set up first.
• Parent class must be defined before child class — Python reads top to bottom.
• isinstance(dog, Animal) is True because Dog is a subclass. isinstance(cat, Dog) is False.
• Overriding without super() completely replaces parent behavior. Include super().method() to extend it.`
          }
        },
        {
          id: "python-phase5-m1-l5",
          title: "Method Overriding and Polymorphism",
          explanation: `Method overriding is when a child class provides its own version of a 
method inherited from the parent. The child's version takes precedence 
when called on a child instance. Polymorphism is the powerful result: 
you can write code that works with the parent type, and it automatically 
does the right thing for each specific child type. animal.speak() calls 
the Dog version for dogs and the Cat version for cats, even if your 
code only knows it has an 'animal'. This is one of OOP's most powerful 
features — code that works generically across many specific types.`,
          concept: `# Override: define method with same name in child
class Child(Parent):
    def same_method(self):    → overrides parent's version
        super().same_method() → optionally call parent version first
        # child-specific behavior

# Polymorphism: same code, different behavior
def make_speak(animal):
    animal.speak()   → calls Dog.speak() or Cat.speak() automatically

for animal in [Dog('Rex'), Cat('Whiskers')]:
    animal.speak()   → each calls its own version`,
          example: `class Shape:
    def __init__(self, color='black'):
        self.color = color
    
    def area(self):
        return 0  # base implementation
    
    def describe(self):
        print(f'{self.color} {type(self).__name__}: area = {self.area():.2f}')

class Circle(Shape):
    def __init__(self, radius, color='black'):
        super().__init__(color)
        self.radius = radius
    
    def area(self):   # override
        return 3.14159 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height, color='black'):
        super().__init__(color)
        self.width = width
        self.height = height
    
    def area(self):   # override
        return self.width * self.height

class Triangle(Shape):
    def __init__(self, base, height, color='black'):
        super().__init__(color)
        self.base = base
        self.height = height
    
    def area(self):   # override
        return 0.5 * self.base * self.height

# Polymorphism: same code works for all shapes!
shapes = [
    Circle(5, 'red'),
    Rectangle(4, 6, 'blue'),
    Triangle(3, 8, 'green')
]

for shape in shapes:
    shape.describe()   # calls the RIGHT area() for each

# Total area — works regardless of shape type
total = sum(shape.area() for shape in shapes)
print(f'Total area: {total:.2f}')`,
          exercise: {
            prompt: `Demonstrate polymorphism with shapes:
1. Create base class Animal with speak() printing 'Some generic sound'
2. Create Dog overriding speak() to print 'Woof! Woof!'
3. Create Cat overriding speak() to print 'Meow!'
4. Create Cow overriding speak() to print 'Moo!'
5. Create function animal_concert(animals) that calls speak() on each
6. Create a list with one Dog, one Cat, and two Cows — pass to animal_concert
7. Bonus: add __str__ to each class and show how print() uses it polymorphically`,
            starterCode: `# Step 1: Base Animal
class Animal:
    def speak(self):
        

# Step 2: Dog
class Dog(Animal):
    def speak(self):
        
    def __str__(self):
        return 'Dog'

# Step 3: Cat
class Cat(Animal):
    

# Step 4: Cow
class Cow(Animal):
    

# Step 5: animal_concert function
def animal_concert(animals):
    

# Step 6: Create list and call function
`,
            solution: `class Animal:
    def speak(self):
        print('Some generic sound')

class Dog(Animal):
    def speak(self):
        print('Woof! Woof!')
    
    def __str__(self):
        return 'Dog'

class Cat(Animal):
    def speak(self):
        print('Meow!')
    
    def __str__(self):
        return 'Cat'

class Cow(Animal):
    def speak(self):
        print('Moo!')
    
    def __str__(self):
        return 'Cow'

def animal_concert(animals):
    print('--- Concert Time! ---')
    for animal in animals:
        print(f'{animal}: ', end='')
        animal.speak()

farm = [Dog(), Cat(), Cow(), Cow()]
animal_concert(farm)`,
            tests: [
              { type: "contains", value: "class Cat(Animal):" },
              { type: "contains", value: "def speak(self):" },
              { type: "contains", value: "print('Meow!')" }
            ],
            debuggingTip: `Common mistakes:
• Method name must match EXACTLY: speak() in parent, speek() in child is not an override — it's a new method.
• Forgot to call super().__init__()? If parent has __init__ and child doesn't call super(), parent attributes won't exist.
• Polymorphism only works through the method name — if Animal has speak() and Dog has speak(), they're linked.
• Type checking instead of polymorphism? Avoid if isinstance(x, Dog): x.speak() — just call x.speak() and let polymorphism work.`
          }
        },
        {
          id: "python-phase5-m1-l6",
          title: "Capstone: Complete Banking System",
          explanation: `This capstone ties together every OOP concept into a real, working system. 
A banking application naturally uses: BankAccount as the base class with 
shared logic, SavingsAccount as a child with interest-earning behavior, 
CheckingAccount as another child with overdraft protection, and a Bank 
class to manage all accounts. You'll implement proper encapsulation 
with validation, inheritance to reuse code, method overriding for 
specialized behavior, and dunder methods for clean display. This is 
the kind of code you'd write in a real Python project.`,
          concept: `Integrates: class hierarchy (BankAccount → SavingsAccount/CheckingAccount),
__init__ with validation, instance methods (deposit/withdraw),
@property for controlled access, __str__ for display,
inheritance and super(), method overriding for specialized behavior,
and a Bank manager class that holds all accounts.`,
          example: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = max(0, balance)  # underscore = "private"
    
    @property
    def balance(self):
        return self._balance
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError('Amount must be positive')
        self._balance += amount
    
    def withdraw(self, amount):
        if amount > self._balance:
            raise ValueError('Insufficient funds')
        self._balance -= amount
    
    def __str__(self):
        return f'{type(self).__name__}[{self.owner}]: \${self._balance:.2f}'

class SavingsAccount(BankAccount):
    def __init__(self, owner, balance=0, rate=0.05):
        super().__init__(owner, balance)
        self.rate = rate
    
    def add_interest(self):
        interest = self._balance * self.rate
        self._balance += interest
        return interest`,
          exercise: {
            prompt: `Build the complete banking system:
1. BankAccount: __init__(owner, balance=0), deposit(amount), withdraw(amount) with validation, balance property, __str__
2. SavingsAccount(BankAccount): adds rate=0.05 default, add_interest() method, override __str__ to include rate
3. CheckingAccount(BankAccount): adds overdraft_limit=100, override withdraw() to allow overdraft up to limit
4. Bank class: __init__ creates empty accounts list, add_account(account), get_account(owner), total_assets() summing all balances, show_all() printing all accounts
5. Test: create a bank, add one savings and one checking account, do deposits/withdrawals, add interest, show all`,
            starterCode: `# Step 1: Base BankAccount
class BankAccount:
    def __init__(self, owner, balance=0):
        
    
    @property
    def balance(self):
        
    
    def deposit(self, amount):
        
    
    def withdraw(self, amount):
        
    
    def __str__(self):
        

# Step 2: SavingsAccount
class SavingsAccount(BankAccount):
    

# Step 3: CheckingAccount
class CheckingAccount(BankAccount):
    

# Step 4: Bank class
class Bank:
    

# Step 5: Test everything
bank = Bank()
`,
            solution: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = max(0, balance)
    
    @property
    def balance(self):
        return self._balance
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError('Amount must be positive')
        self._balance += amount
        print(f'Deposited \${amount:.2f}. Balance: \${self._balance:.2f}')
    
    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError('Amount must be positive')
        if amount > self._balance:
            raise ValueError('Insufficient funds')
        self._balance -= amount
        print(f'Withdrew \${amount:.2f}. Balance: \${self._balance:.2f}')
    
    def __str__(self):
        return f'BankAccount[{self.owner}]: \${self._balance:.2f}'

class SavingsAccount(BankAccount):
    def __init__(self, owner, balance=0, rate=0.05):
        super().__init__(owner, balance)
        self.rate = rate
    
    def add_interest(self):
        interest = self._balance * self.rate
        self._balance += interest
        print(f'Interest added: \${interest:.2f}. Balance: \${self._balance:.2f}')
        return interest
    
    def __str__(self):
        return f'SavingsAccount[{self.owner}]: \${self._balance:.2f} (rate: {self.rate:.1%})'

class CheckingAccount(BankAccount):
    def __init__(self, owner, balance=0, overdraft_limit=100):
        super().__init__(owner, balance)
        self.overdraft_limit = overdraft_limit
    
    def withdraw(self, amount):
        if amount > self._balance + self.overdraft_limit:
            raise ValueError('Exceeds overdraft limit')
        self._balance -= amount
        print(f'Withdrew \${amount:.2f}. Balance: \${self._balance:.2f}')
    
    def __str__(self):
        return f'CheckingAccount[{self.owner}]: \${self._balance:.2f}'

class Bank:
    def __init__(self):
        self.accounts = []
    
    def add_account(self, account):
        self.accounts.append(account)
        print(f'Account added for {account.owner}')
    
    def get_account(self, owner):
        for account in self.accounts:
            if account.owner == owner:
                return account
        return None
    
    def total_assets(self):
        return sum(acc.balance for acc in self.accounts)
    
    def show_all(self):
        print('=== All Accounts ===')
        for acc in self.accounts:
            print(f'  {acc}')
        print(f'Total Assets: \${self.total_assets():.2f}')

bank = Bank()
savings = SavingsAccount('Alice', 1000, rate=0.03)
checking = CheckingAccount('Bob', 500)
bank.add_account(savings)
bank.add_account(checking)
savings.deposit(500)
savings.add_interest()
checking.withdraw(600)
bank.show_all()`,
            tests: [
              { type: "contains", value: "class BankAccount:" },
              { type: "contains", value: "def withdraw" },
              { type: "contains", value: "return False" }
            ],
            debuggingTip: `Common mistakes:
• Using self.balance instead of self._balance inside methods? Use the private _balance directly inside the class. The property is for external access.
• SavingsAccount withdraw fails? It inherits BankAccount.withdraw() — which is fine. Only override when behavior needs to change.
• CheckingAccount balance going negative? That's correct if overdraft is used — balance can be negative up to overdraft_limit.
• Bank.get_account returning None? Check owner name spelling exactly — comparison is case-sensitive.
• total_assets using list comprehension with generator: sum(acc.balance for acc in self.accounts) — clean Python style.`
          }
        }
      ]
    },
    {
      id: "python-phase6-m1",
      title: "Phase 6 — Real World Python",
      duration: "2.5 hours",
      lessons: [
        {
          id: "python-phase6-m1-l1",
          title: "Working with JSON Data",
          explanation: `JSON is the lingua franca of modern software. Every REST API, most 
configuration files, and countless data exchanges use JSON format. 
Python's json module is your bridge between Python objects and this 
universal format. In real applications, you'll constantly: fetch JSON 
from APIs and convert to Python for processing, take Python data and 
serialize to JSON for storage or transmission, read JSON config files 
on startup, and write JSON logs for debugging. Understanding JSON 
manipulation is a core skill for any Python developer working in 
web development, data engineering, or automation.`,
          concept: `import json

json.dumps(obj, indent=2)    → Python → pretty JSON string
json.loads(string)           → JSON string → Python object
json.dump(obj, file)         → Python → JSON file
json.load(file)              → JSON file → Python object

Type mapping:
Python dict  ↔  JSON object {}
Python list  ↔  JSON array []
Python str   ↔  JSON string ""
Python int/float ↔ JSON number
Python True/False ↔ JSON true/false
Python None  ↔  JSON null`,
          example: `import json

# Simulate API response (JSON string)
api_response = '''
{
    "status": "success",
    "users": [
        {"id": 1, "name": "Alice", "active": true},
        {"id": 2, "name": "Bob", "active": false},
        {"id": 3, "name": "Charlie", "active": true}
    ],
    "total": 3
}
'''

# Parse JSON
data = json.loads(api_response)
print(data['status'])           # success
print(data['total'])            # 3

# Process the data
active_users = [u for u in data['users'] if u['active']]
print(f'Active users: {[u["name"] for u in active_users]}')

# Modify and re-serialize
data['users'].append({'id': 4, 'name': 'Diana', 'active': True})
data['total'] = len(data['users'])

# Write to file
with open('users.json', 'w') as f:
    json.dump(data, f, indent=2)

# Read back
with open('users.json', 'r') as f:
    loaded = json.load(f)
    print(f'Loaded {loaded["total"]} users')

# Compact vs readable
compact = json.dumps(data)
readable = json.dumps(data, indent=2, sort_keys=True)
print(f'Compact: {len(compact)} chars')
print(f'Readable: {len(readable)} chars')`,
          exercise: {
            prompt: `Work with real JSON data:
1. Create a Python dict 'catalog' with: store='BookShop', books (list of 3 dicts each with title, author, price, available=True)
2. Serialize to JSON string with indent=2 and print it
3. Parse it back and filter to get only books where price < 20 — print their titles
4. Add a new book to the parsed data, update the count
5. Write the updated catalog to 'catalog.json'
6. Read it back and print the number of books`,
            starterCode: `import json

# Step 1: Create catalog dictionary
catalog = {
    'store': 'BookShop',
    'books': [
        {'title': '1984', 'author': 'Orwell', 'price': 12.99, 'available': True},
        {'title': 'Dune', 'author': 'Herbert', 'price': 15.99, 'available': True},
        {'title': 'Foundation', 'author': 'Asimov', 'price': 9.99, 'available': False}
    ]
}

# Step 2: Serialize and print


# Step 3: Parse back and filter cheap books


# Step 4: Add new book


# Step 5: Write to file


# Step 6: Read back and print count
`,
            solution: `import json

catalog = {
    'store': 'BookShop',
    'books': [
        {'title': '1984', 'author': 'Orwell', 'price': 12.99, 'available': True},
        {'title': 'Dune', 'author': 'Herbert', 'price': 15.99, 'available': True},
        {'title': 'Foundation', 'author': 'Asimov', 'price': 9.99, 'available': False}
    ]
}

json_string = json.dumps(catalog, indent=2)
print(json_string)

parsed = json.loads(json_string)
cheap_books = [b['title'] for b in parsed['books'] if b['price'] < 14]
print(f'Books under $14: {cheap_books}')

parsed['books'].append({'title': 'Brave New World', 'author': 'Huxley', 'price': 11.99, 'available': True})

with open('catalog.json', 'w') as f:
    json.dump(parsed, f, indent=2)

with open('catalog.json', 'r') as f:
    loaded = json.load(f)
    print(f'Total books: {len(loaded["books"])}')`,
            tests: [
              { type: "contains", value: "json.dumps(catalog)" },
              { type: "contains", value: "json.loads(" },
              { type: "contains", value: "json.load(f)" }
            ],
            debuggingTip: `Common mistakes:
• json.loads vs json.load? loads takes a STRING. load takes a FILE object. Don't mix them.
• JSON syntax vs Python: JSON requires double quotes — json.loads("{'name': 'Alice'}") fails.
• Modifying parsed JSON? json.loads() gives you regular Python dicts/lists — modify them normally.
• Forgetting to re-serialize after modification? Changes to parsed dict won't automatically update the file.
• indent=None vs indent=2: None gives compact single-line output. Use indent=2 for human-readable files.`
          }
        },
        {
          id: "python-phase6-m1-l2",
          title: "Regular Expressions",
          explanation: `Regular expressions (regex) are a powerful language for pattern matching 
in strings. They sound intimidating but unlock capabilities that would 
take hundreds of lines of string methods to replicate: validating email 
addresses, extracting phone numbers from text, finding all URLs in a 
page, cleaning up messy data. Python's re module provides the interface. 
Learning even basic regex makes you dramatically more capable at text 
processing — it's one of those tools that feels like a superpower once 
you understand it. Used in data science, web scraping, log analysis, 
and form validation.`,
          concept: `import re

re.search(pattern, string)    → find first match anywhere in string
re.match(pattern, string)     → match at beginning of string
re.findall(pattern, string)   → find all matches, returns list
re.sub(pattern, repl, string) → replace matches
re.split(pattern, string)     → split on pattern

Common patterns:
\\d  → any digit (0-9)
\\w  → word character (a-z, A-Z, 0-9, _)
\\s  → whitespace (space, tab, newline)
.   → any character except newline
+   → one or more of previous
*   → zero or more of previous
?   → zero or one (optional)
[]  → character class: [aeiou], [0-9], [A-Za-z]
^   → start of string, $  → end of string`,
          example: `import re

# Basic search
text = 'The price is $42.99 and the code is ABC-123'

# Find digits
digits = re.findall(r'\\d+', text)
print(digits)   # ['42', '99', '123']

# Find price (dollar amount)
price = re.search(r'\\$[\\d.]+', text)
if price:
    print(price.group())   # $42.99

# Validate email (simplified)
def is_valid_email(email):
    pattern = r'^[\\w.]+@[\\w]+\\.[\\w]{2,}$'
    return bool(re.match(pattern, email))

print(is_valid_email('alice@example.com'))  # True
print(is_valid_email('not-an-email'))       # False

# Extract all emails from text
sample = 'Contact alice@ex.com or bob@test.org for help'
emails = re.findall(r'[\\w.]+@[\\w]+\\.[\\w]+', sample)
print(emails)   # ['alice@ex.com', 'bob@test.org']

# Replace — clean phone numbers
messy = 'Call me at (555) 123-4567 or 555.987.6543'
clean = re.sub(r'[^\\d]', '', messy)
print(clean)   # 5551234567555987654

# Split on multiple separators
csv_like = 'Alice,Bob;Charlie  Diana'
names = re.split(r'[,;\\s]+', csv_like)
print(names)   # ['Alice', 'Bob', 'Charlie', 'Diana']`,
          exercise: {
            prompt: `Practice regular expressions:
1. Find all numbers in: 'I have 3 cats, 12 books, and 1 dog' using re.findall
2. Validate a phone number format (###-###-####): test '555-123-4567' and 'not-a-phone'
3. Extract all email addresses from: 'Send to sales@company.com or support@help.org'
4. Replace all whitespace sequences (spaces, tabs) with single space in: 'Hello   World\t\tPython'
5. Split 'apple,banana;cherry orange' on comma, semicolon, or space using re.split`,
            starterCode: `import re

# Step 1: Find all numbers
text = 'I have 3 cats, 12 books, and 1 dog'


# Step 2: Validate phone number format ###-###-####
def is_valid_phone(phone):
    

print(is_valid_phone('555-123-4567'))
print(is_valid_phone('not-a-phone'))

# Step 3: Extract emails
email_text = 'Send to sales@company.com or support@help.org'


# Step 4: Replace whitespace sequences
messy = 'Hello   World\t\tPython'


# Step 5: Split on multiple separators
data = 'apple,banana;cherry orange'
`,
            solution: `import re

text = 'I have 3 cats, 12 books, and 1 dog'
numbers = re.findall(r'\\d+', text)
print(numbers)

def is_valid_phone(phone):
    pattern = r'^\\d{3}-\\d{3}-\\d{4}$'
    return bool(re.match(pattern, phone))

print(is_valid_phone('555-123-4567'))
print(is_valid_phone('not-a-phone'))

email_text = 'Send to sales@company.com or support@help.org'
emails = re.findall(r'[\\w.]+@[\\w]+\\.[\\w]+', email_text)
print(emails)

messy = 'Hello   World\t\tPython'
clean = re.sub(r'\\s+', ' ', messy)
print(clean)

data = 'apple,banana;cherry orange'
items = re.split(r'[,;\\s]+', data)
print(items)`,
            tests: [
              { type: "contains", value: "import re" },
              { type: "contains", value: "re.findall(" },
              { type: "contains", value: "re.sub(" }
            ],
            debuggingTip: `Common mistakes:
• Use raw strings for patterns: r'\\d+' not '\\d+'. Without r, \\d is an escape sequence.
• re.search finds anywhere in string. re.match only matches at the START. Use ^ and $ anchors with re.search for full string match.
• re.findall returns a list of strings. re.search returns a Match object — use .group() to get the text.
• Character class confusion: [0-9] matches digits. (0-9) is a group — different!
• Test your regex at regex101.com before using in code — invaluable for debugging patterns.`
          }
        },
        {
          id: "python-phase6-m1-l3",
          title: "Unit Testing with unittest",
          explanation: `Professional developers write tests for their code — not as an afterthought, 
but as a core part of development. Tests give you confidence that your 
code works correctly, catch regressions when you make changes, and 
document expected behavior. Python's unittest module (inspired by JUnit) 
provides a full testing framework. You write test classes with test methods, 
use assert methods to verify expected behavior, and run the test suite to 
get a pass/fail report. Test-Driven Development (TDD) — writing tests 
BEFORE code — is a powerful practice that many professional teams use.`,
          concept: `import unittest

class TestMyFunction(unittest.TestCase):
    def test_basic_case(self):
        self.assertEqual(func(2), 4)
    
    def test_edge_case(self):
        self.assertRaises(ValueError, func, -1)

unittest.main()  → run all tests

Assert methods:
assertEqual(a, b)         → a == b
assertNotEqual(a, b)      → a != b
assertTrue(x)             → bool(x) is True
assertFalse(x)            → bool(x) is False
assertIsNone(x)           → x is None
assertIn(a, b)            → a in b
assertRaises(Error, func, args) → func(args) raises Error
setUp(self)               → runs before each test
tearDown(self)            → runs after each test`,
          example: `import unittest

# Functions to test
def add(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        raise ValueError('Cannot divide by zero')
    return a / b

def is_palindrome(s):
    s = s.lower().replace(' ', '')
    return s == s[::-1]

# Test class
class TestMathFunctions(unittest.TestCase):
    
    def test_add_positive(self):
        self.assertEqual(add(2, 3), 5)
    
    def test_add_negative(self):
        self.assertEqual(add(-1, -1), -2)
    
    def test_add_zero(self):
        self.assertEqual(add(0, 5), 5)
    
    def test_divide_normal(self):
        self.assertAlmostEqual(divide(10, 3), 3.333, places=3)
    
    def test_divide_by_zero(self):
        with self.assertRaises(ValueError):
            divide(10, 0)

class TestPalindrome(unittest.TestCase):
    
    def test_simple_palindrome(self):
        self.assertTrue(is_palindrome('racecar'))
    
    def test_not_palindrome(self):
        self.assertFalse(is_palindrome('hello'))
    
    def test_case_insensitive(self):
        self.assertTrue(is_palindrome('Racecar'))
    
    def test_with_spaces(self):
        self.assertTrue(is_palindrome('a man a plan a canal panama'))

# Run tests
# unittest.main()  # uncomment to run`,
          exercise: {
            prompt: `Write a complete test suite:
1. Define function square(x) returning x * x, and safe_divide(a, b) raising ValueError if b == 0
2. Create class TestSquare(unittest.TestCase) with:
   - test_square_positive: square(4) == 16
   - test_square_zero: square(0) == 0
   - test_square_negative: square(-3) == 9
3. Create class TestSafeDivide(unittest.TestCase) with:
   - test_normal_division: safe_divide(10, 2) == 5.0
   - test_divide_by_zero: safe_divide(10, 0) raises ValueError
   - test_float_result: safe_divide(7, 2) == 3.5
4. Use setUp to print 'Starting test' before each test in TestSquare
5. Run with unittest.main(verbosity=2)`,
            starterCode: `import unittest

# Step 1: Functions to test
def square(x):
    

def safe_divide(a, b):
    

# Step 2: TestSquare class
class TestSquare(unittest.TestCase):
    
    def setUp(self):
        
    
    def test_square_positive(self):
        
    
    def test_square_zero(self):
        
    
    def test_square_negative(self):
        

# Step 3: TestSafeDivide class
class TestSafeDivide(unittest.TestCase):
    
    def test_normal_division(self):
        
    
    def test_divide_by_zero(self):
        
    
    def test_float_result(self):
        

# Step 5: Run tests
if __name__ == '__main__':
    unittest.main(verbosity=2)`,
            solution: `import unittest

def square(x):
    return x * x

def safe_divide(a, b):
    if b == 0:
        raise ValueError('Cannot divide by zero')
    return a / b

class TestSquare(unittest.TestCase):
    
    def setUp(self):
        print('Starting test')
    
    def test_square_positive(self):
        self.assertEqual(square(4), 16)
    
    def test_square_zero(self):
        self.assertEqual(square(0), 0)
    
    def test_square_negative(self):
        self.assertEqual(square(-3), 9)

class TestSafeDivide(unittest.TestCase):
    
    def test_normal_division(self):
        self.assertEqual(safe_divide(10, 2), 5.0)
    
    def test_divide_by_zero(self):
        with self.assertRaises(ValueError):
            safe_divide(10, 0)
    
    def test_float_result(self):
        self.assertEqual(safe_divide(7, 2), 3.5)

if __name__ == '__main__':
    unittest.main(verbosity=2)`,
            tests: [
              { type: "contains", value: "import unittest" },
              { type: "contains", value: "class TestSquare(unittest.TestCase):" },
              { type: "contains", value: "self.assertEqual" }
            ],
            debuggingTip: `Common mistakes:
• Test method name must start with 'test_': test_square works, square_test doesn't get picked up by unittest.
• Inheriting wrong class? Must be unittest.TestCase — not just object or nothing.
• Comparing floats with assertEqual? Floating point imprecision makes assertEqual(0.1+0.2, 0.3) fail! Use assertAlmostEqual.
• setUp runs before EVERY test — not just once. Use setUpClass for one-time setup.
• assertRaises as context manager: with self.assertRaises(ValueError): is cleaner than assertRaises(ValueError, func, args).`
          }
        }
      ]
    }
  ]
};