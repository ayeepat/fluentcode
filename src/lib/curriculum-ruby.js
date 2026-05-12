// Ruby curriculum data - all phases and lessons
export const rubyCurriculum = {
  label: "Ruby",
  modules: [
    {
      id: "ruby-phase0-m1",
      title: "Phase 0 — Welcome to Ruby",
      duration: "15 min",
      lessons: [
        {
          id: "ruby-phase0-m1-l1",
          title: "Your First Ruby Program",
          explanation: `Ruby is one of the most beginner-friendly programming languages ever created. 
It was designed to feel natural — almost like writing English. The very first thing 
you learn in any language is how to make it say something. In Ruby, that's done with 
'puts' (short for "put string"). Think of puts like a megaphone — whatever you hand 
it, it announces to the world (your screen). Every great programmer started exactly 
where you are right now.`,
          concept: `'puts' prints text to the screen and automatically moves to a new line afterward. 
'print' does the same but stays on the same line. Always wrap your text in quotes 
(single or double) so Ruby knows it's a message, not a command.`,
          example: `# puts = "put string" - prints and moves to next line
puts 'Hello, world!'
puts 'I am learning Ruby!'

# print stays on the same line
print 'Hello '
print 'there!'
# Output: Hello there!`,
          exercise: {
            prompt: `Let's make Ruby speak! Your task:
1. Use puts to print: I am ready to code in Ruby!
2. Use puts to print your favorite hobby on the next line
3. Use print to print 'Ruby' and ' is fun!' on the same line`,
            starterCode: `# Welcome to Ruby! Let's make it talk.
# Step 1: Print the required message
# (Hint: copy it exactly including punctuation)

# Step 2: Print your favorite hobby


# Step 3: Use print twice on the same line
`,
            solution: `puts 'I am ready to code in Ruby!'
puts 'coding'
print 'Ruby'
print ' is fun!'`,
            tests: [
              { type: "contains", value: "puts 'I am ready to code in Ruby!'" },
              { type: "contains", value: "print" }
            ],
            debuggingTip: `Common mistakes:
• Forgot the quotes? Ruby will think your text is a variable name and throw an error.
• Used single quotes but want to use apostrophes? Switch to double quotes: puts "It's great!"
• Nothing printed? Make sure you actually called puts or print — just writing text in quotes does nothing.
• Extra spaces inside quotes matter! 'Hello' and ' Hello' are different.`
          }
        }
      ]
    },
    {
      id: "ruby-phase1-m1",
      title: "Phase 1 — Fundamentals",
      duration: "3 hours",
      lessons: [
        {
          id: "ruby-phase1-m1-l1",
          title: "puts vs print — Controlling Output",
          explanation: `Imagine you're texting a friend. Sometimes you hit Enter after each sentence 
(that's puts — it adds a line break). Sometimes you keep typing on the same line 
(that's print). Knowing which to use gives you precise control over how your 
program's output looks. This matters when building menus, formatting tables, 
or creating user-friendly messages. Ruby developers use puts far more often 
because it makes output easier to read.`,
          concept: `puts 'text' → prints text AND moves cursor to new line (adds \\n automatically).
print 'text' → prints text and STAYS on the same line.
Both work with strings (text in quotes) and numbers.`,
          example: `# puts adds a newline after each call
puts 'First line'
puts 'Second line'
puts 42
# Output:
# First line
# Second line
# 42

# print keeps everything on one line
print 'Loading'
print '...'
print 'Done!'
# Output: Loading...Done!

# Mixing both
print 'Name: '
puts 'Alice'
print 'Age: '
puts 30
# Output:
# Name: Alice
# Age: 30`,
          exercise: {
            prompt: `Practice controlling output:
1. Use puts three times to print 'Ready', 'Set', 'Go!' each on their own line
2. Use print twice to print 'Score: ' and '100' on the same line
3. Use puts to print a blank line (hint: puts with empty quotes)`,
            starterCode: `# Part 1: Three separate lines using puts


# Part 2: Same line using print twice


# Part 3: Print a blank line
`,
            solution: `puts 'Ready'
puts 'Set'
puts 'Go!'
print 'Score: '
print '100'
puts ''`,
            tests: [
              { type: "contains", value: "puts 'Ready'" },
              { type: "contains", value: "puts 'Set'" },
              { type: "contains", value: "puts 'Go!'" },
              { type: "contains", value: "print" }
            ],
            debuggingTip: `Common mistakes:
• Mixing up puts and print? Remember: puts = paragraph break, print = same line.
• Missing quotes around strings will cause a NameError.
• puts '' prints a blank line — useful for spacing your output nicely.
• Calling puts with no argument (just puts) also prints a blank line.`
          }
        },
        {
          id: "ruby-phase1-m1-l2",
          title: "Variables — Storing Information",
          explanation: `A variable is like a labeled jar in your kitchen. You write "Sugar" on the jar 
and put sugar inside. Later, whenever a recipe calls for sugar, you grab that jar. 
In Ruby, variables work the same way — you give a name to a piece of information 
so you can use it later. Unlike many other languages, Ruby doesn't require you to 
declare the type (text vs number) — Ruby figures it out automatically. Variable 
names use snake_case (words_joined_with_underscores) which is the Ruby convention.`,
          concept: `variable_name = value (the = sign means "store this value")
Ruby is dynamically typed — you don't write String or Integer, Ruby figures it out.
Use snake_case for all variable names: first_name, total_price, user_age.
Variables can be reassigned (changed) at any time.`,
          example: `# Storing different types of data
city = 'Tokyo'          # text (String)
population = 13960000   # whole number (Integer)  
temperature = 23.5      # decimal number (Float)
is_capital = true       # true/false (Boolean)

puts city         # Tokyo
puts population   # 13960000
puts temperature  # 23.5

# Changing a variable's value
city = 'Osaka'
puts city         # Osaka (old value is gone)

# Using variables in math
price = 100
discount = 20
final_price = price - discount
puts final_price  # 80`,
          exercise: {
            prompt: `Build a simple profile card using variables:
1. Create a variable 'language' set to 'Ruby' and print it
2. Create 'year' set to the current year and print it  
3. Change 'language' to 'Python' and print it again
4. Create 'favorite_number' with any number and print it`,
            starterCode: `# Build your profile card!

# Step 1: Create language variable and print it


# Step 2: Create year variable and print it


# Step 3: Change language to 'Python' and print again


# Step 4: Create favorite_number and print it

`,
            solution: `language = 'Ruby'
puts language
year = 2025
puts year
language = 'Python'
puts language
favorite_number = 7
puts favorite_number`,
            tests: [
              { type: "contains", value: "language = 'Ruby'" },
              { type: "contains", value: "puts language" },
              { type: "contains", value: "language = 'Python'" }
            ],
            debuggingTip: `Common mistakes:
• Variable names can't start with a number: 1name is invalid, name1 is fine.
• Variable names can't have spaces: first name won't work, use first_name.
• Capitalized variables (Name) mean something special in Ruby — stick to lowercase.
• Forgot to puts the variable? Creating it doesn't automatically display it.
• Used the variable before creating it? Ruby reads top to bottom — define first, use second.`
          }
        },
        {
          id: "ruby-phase1-m1-l3",
          title: "String Interpolation — Mixing Text and Variables",
          explanation: `Imagine writing a form letter: "Dear [NAME], your order [ORDER_ID] is ready." 
String interpolation is exactly that — you write a template and Ruby fills in the 
blanks with your variables. This is far cleaner than manually joining strings 
together with + signs. It's one of Ruby's most loved features and something you'll 
use in almost every Ruby program you write. Real-world uses: generating personalized 
messages, building URLs, creating formatted reports.`,
          concept: `Use double quotes " " and #{ } to embed any variable or expression directly in a string.
"Hello, #{variable_name}!" → Ruby replaces #{} with the actual value.
Only works in double-quoted strings — single quotes treat #{ } as plain text.
You can put any Ruby expression inside #{ }, not just variable names.`,
          example: `name = 'Maria'
age = 28
city = 'Barcelona'

# Basic interpolation
puts "Hello, #{name}!"
# Output: Hello, Maria!

# Multiple variables in one string
puts "#{name} is #{age} years old and lives in #{city}."
# Output: Maria is 28 years old and lives in Barcelona.

# Math inside interpolation
price = 50
quantity = 3
puts "Total: $#{price * quantity}"
# Output: Total: $150

# Single quotes DON'T interpolate (common mistake!)
puts 'Hello, #{name}!'
# Output: Hello, #{name}!  <- literally printed, not replaced`,
          exercise: {
            prompt: `Create a product receipt using string interpolation:
1. Create variables: item = 'headphones', price = 79, quantity = 2
2. Print: "Item: headphones"
3. Print: "Price per unit: $79"
4. Print: "Total cost: $158" (calculate quantity * price inside #{ })`,
            starterCode: `# Build a product receipt!
# Step 1: Create your variables
item = 'headphones'
price = 79
quantity = 2

# Step 2: Print item name using interpolation

# Step 3: Print price using interpolation

# Step 4: Print total (calculate inside #{})

`,
            solution: `item = 'headphones'
price = 79
quantity = 2
puts "Item: #{item}"
puts "Price per unit: $#{price}"
puts "Total cost: $#{quantity * price}"`,
            tests: [
              { type: "contains", value: "\"Item: #{item}\"" },
              { type: "contains", value: "#{quantity * price}" }
            ],
            debuggingTip: `Common mistakes:
• Using single quotes? #{variable} won't work inside ' '. Always use " " for interpolation.
• Getting the literal text #{name} printed? That means you used single quotes by accident.
• Interpolation prints nil if the variable doesn't exist — double check spelling.
• Want a # sign without interpolation in double quotes? Use \\# to escape it.`
          }
        },
        {
          id: "ruby-phase1-m1-l4",
          title: "Numbers and Math",
          explanation: `Every useful program does math at some point — calculating prices, scores, distances, 
ages. Ruby handles two types of numbers: Integers (whole numbers like 5, 100, -3) 
and Floats (decimals like 3.14, -0.5, 99.99). The tricky part that surprises many 
beginners: when you divide two integers in Ruby, the result is always an integer 
(it drops the decimal). This is called integer division. To get a decimal result, 
at least one number must be a float (10.0 / 3 gives 3.333...).`,
          concept: `Arithmetic operators: + (add), - (subtract), * (multiply), / (divide), % (remainder), ** (power)
Integer / Integer = Integer (decimal dropped): 7 / 2 = 3, not 3.5
Float / anything = Float: 7.0 / 2 = 3.5
% (modulo) gives the remainder: 10 % 3 = 1
** is exponent: 2 ** 8 = 256`,
          example: `# Basic arithmetic
puts 10 + 3   # 13
puts 10 - 3   # 7
puts 10 * 3   # 30
puts 10 / 3   # 3  <- integer division, drops decimal!
puts 10.0 / 3 # 3.3333...  <- float division
puts 10 % 3   # 1  <- remainder (10 = 3*3 + 1)
puts 2 ** 10  # 1024

# Storing results in variables
width = 8
height = 5
area = width * height
perimeter = 2 * (width + height)
puts "Area: #{area}"         # Area: 40
puts "Perimeter: #{perimeter}" # Perimeter: 26

# Useful shorthand operators
score = 100
score += 10   # same as: score = score + 10  -> 110
score -= 5    # same as: score = score - 5   -> 105
score *= 2    # same as: score = score * 2   -> 210
puts score    # 210`,
          exercise: {
            prompt: `You're building a shopping calculator:
1. Set price = 120 and tax_rate = 8
2. Calculate tax_amount = price * tax_rate / 100
3. Calculate total = price + tax_amount
4. Print "Price: $120", "Tax: $9", "Total: $129" using interpolation
5. Bonus: use % to check if 127 is even or odd (hint: 127 % 2)`,
            starterCode: `# Shopping calculator
# Step 1: Set up variables
price = 120
tax_rate = 8

# Step 2: Calculate tax amount (price * tax_rate / 100)


# Step 3: Calculate total


# Step 4: Print formatted receipt


# Step 5 (Bonus): Is 127 even or odd?

`,
            solution: `price = 120
tax_rate = 8
tax_amount = price * tax_rate / 100
total = price + tax_amount
puts "Price: $#{price}"
puts "Tax: $#{tax_amount}"
puts "Total: $#{total}"
puts 127 % 2`,
            tests: [
              { type: "contains", value: "tax_amount" },
              { type: "contains", value: "total" },
              { type: "contains", value: "puts" }
            ],
            debuggingTip: `Common mistakes:
• Getting 0 for tax? Integer division! 8/100 = 0 in integer math. Use 8.0 or multiply first.
• Order of operations: Ruby follows PEMDAS — use parentheses when in doubt.
• % is NOT percentage — it's remainder. 10 % 3 = 1, not 0.33.
• ** is power: 2**3 = 8. Don't confuse with * (multiply).`
          }
        },
        {
          id: "ruby-phase1-m1-l5",
          title: "Comparison Operators — Asking True/False Questions",
          explanation: `Every decision in a program comes down to a yes/no question: Is this price too high? 
Did the user enter the right password? Is the score high enough to win? Comparison 
operators let Ruby answer these questions. They always return either true or false — 
these are called Boolean values. This is the foundation of all decision-making in 
programming. Without comparisons, every program would do the exact same thing every 
time, with no ability to react to different situations.`,
          concept: `== (equal to), != (not equal), > (greater than), < (less than)
>= (greater than or equal), <= (less than or equal)
These return true or false — called Boolean values.
CRITICAL: = means "assign a value", == means "compare two values". Don't mix them up!`,
          example: `age = 20
voting_age = 18

puts age > voting_age    # true
puts age < voting_age    # false
puts age == voting_age   # false
puts age != voting_age   # true
puts age >= voting_age   # true

# Comparing strings
name = 'Alice'
puts name == 'Alice'   # true
puts name == 'alice'   # false (case sensitive!)
puts name != 'Bob'     # true

# Storing comparison results
is_adult = age >= 18
is_teenager = age >= 13 && age <= 19
puts is_adult     # true
puts is_teenager  # false (20 is not a teenager)`,
          exercise: {
            prompt: `Build a ticket pricing checker:
1. Set ticket_price = 85 and budget = 100
2. Print whether ticket_price is less than budget (can you afford it?)
3. Print whether ticket_price equals exactly 100
4. Print whether budget is greater than or equal to ticket_price
5. Set minimum_age = 18 and user_age = 16, print if user_age >= minimum_age`,
            starterCode: `# Ticket pricing checker
ticket_price = 85
budget = 100

# Step 2: Can you afford it? (ticket_price < budget)


# Step 3: Does it cost exactly 100?


# Step 4: Is budget >= ticket_price?


# Step 5: Age check
minimum_age = 18
user_age = 16
# Print whether user_age meets the minimum

`,
            solution: `ticket_price = 85
budget = 100
puts ticket_price < budget
puts ticket_price == 100
puts budget >= ticket_price
minimum_age = 18
user_age = 16
puts user_age >= minimum_age`,
            tests: [
              { type: "contains", value: "ticket_price < budget" },
              { type: "contains", value: "ticket_price == 100" },
              { type: "contains", value: "user_age >= minimum_age" }
            ],
            debuggingTip: `Common mistakes:
• Used = instead of ==? That's assignment, not comparison — a very common bug.
• String comparison is case-sensitive: 'Ruby' != 'ruby'. Use .downcase to normalize.
• Comparing a string to a number? 'five' == 5 is always false in Ruby.
• Not sure what a comparison returns? Just puts it — it will show true or false.`
          }
        },
        {
          id: "ruby-phase1-m1-l6",
          title: "Type Conversion — Changing Data Types",
          explanation: `Imagine you receive a phone number as text: '555-1234'. You can't do math on text. 
Or you calculate a price as 29.99 but need to display it in a message. Type conversion 
is the process of changing data from one form to another. This is especially important 
when working with user input — everything typed by a user comes in as a String, even 
if they typed a number. You must convert it before doing any math. This is one of 
the most common sources of bugs for beginners.`,
          concept: `'42'.to_i   → converts String to Integer (42)
3.99.to_s   → converts Float/Integer to String ('3.99')
'3.14'.to_f → converts String to Float (3.14)
42.to_f     → converts Integer to Float (42.0)
Invalid conversion returns 0: 'hello'.to_i → 0`,
          example: `# String to number
age_text = '25'
age_number = age_text.to_i
puts age_number + 5   # 30 (math works now!)

# Number to string
price = 9.99
message = 'Price: $' + price.to_s
puts message          # Price: $9.99

# Float conversions
puts '3.14'.to_f      # 3.14
puts 10.to_f          # 10.0
puts 7.8.to_i         # 7 (truncates, doesn't round!)

# What happens with invalid conversions
puts 'hello'.to_i     # 0 (no error, just 0)
puts 'hello'.to_f     # 0.0
puts '42abc'.to_i     # 42 (reads until non-digit)`,
          exercise: {
            prompt: `Practice type conversion:
1. Convert '200' to integer, add 50, print the result
2. Convert '3.75' to float, multiply by 4, print the result
3. Convert the integer 1000 to a string, concatenate ' dollars', print it
4. Show what happens when you call .to_i on 'abc' (print it)`,
            starterCode: `# Type conversion practice

# Step 1: '200' to integer, add 50


# Step 2: '3.75' to float, multiply by 4


# Step 3: 1000 to string, add ' dollars'


# Step 4: What does 'abc'.to_i return?

`,
            solution: `puts '200'.to_i + 50
puts '3.75'.to_f * 4
puts 1000.to_s + ' dollars'
puts 'abc'.to_i`,
            tests: [
              { type: "contains", value: ".to_i" },
              { type: "contains", value: ".to_f" },
              { type: "contains", value: ".to_s" }
            ],
            debuggingTip: `Common mistakes:
• Trying to add a String and Integer without converting? NoMethodError or TypeError will appear.
• .to_i truncates floats — it does NOT round: 9.9.to_i = 9, not 10.
• String concatenation uses +, but both sides must be strings. Mix types? Convert first.
• User input from gets is always a String — always convert before math!
• 'abc'.to_i returns 0 silently — check your data is actually a number first.`
          }
        },
        {
          id: "ruby-phase1-m1-l7",
          title: "Getting User Input with gets",
          explanation: `So far your programs have been one-way conversations — Ruby talks, you listen. 
Now let's make it interactive. gets (get string) pauses your program and waits 
for the user to type something and press Enter. The problem is it captures that 
Enter key press as a newline character (\\n) at the end. That's why we almost always 
chain .chomp onto it — chomp "chomps off" that newline. This is how every 
command-line program, game, and interactive tool gets information from users.`,
          concept: `gets → pauses and reads a line of text from the user (includes trailing \\n)
gets.chomp → same but removes the trailing newline character
gets always returns a String — use .to_i or .to_f to convert for math
print is better than puts for input prompts (keeps cursor on same line)`,
          example: `# Basic input
print 'What is your name? '
name = gets.chomp
puts "Nice to meet you, #{name}!"

# Getting a number from user
print 'Enter your age: '
age = gets.chomp.to_i   # chain: get input, remove newline, convert to integer
birth_year = 2025 - age
puts "You were born around #{birth_year}."

# Using the input in calculations
print 'Enter a number to double: '
number = gets.chomp.to_i
puts "#{number} doubled is #{number * 2}"`,
          exercise: {
            prompt: `Build an interactive greeter:
1. Ask "What is your favorite color? " using print
2. Store the answer in a variable called color
3. Print: "Great choice! [color] is a wonderful color."
4. Then ask "How many letters does it have? " (just ask, don't validate)
5. Store as letters (integer) and print: "You counted [letters] letters!"`,
            starterCode: `# Interactive greeter

# Step 1 & 2: Ask for favorite color


# Step 3: Print the response with the color


# Step 4 & 5: Ask for letter count and print response

`,
            solution: `print 'What is your favorite color? '
color = gets.chomp
puts "Great choice! #{color} is a wonderful color."
print 'How many letters does it have? '
letters = gets.chomp.to_i
puts "You counted #{letters} letters!"`,
            tests: [
              { type: "contains", value: "gets.chomp" },
              { type: "contains", value: "color" },
              { type: "contains", value: "letters" }
            ],
            debuggingTip: `Common mistakes:
• Forgot .chomp? Your string will have a hidden \\n at the end, causing display issues.
• Used puts for the prompt? The cursor moves to the next line — use print instead.
• Forgot .to_i for number input? Gets always returns a String, even if user typed 42.
• Variable not showing up in interpolation? Check spelling — Ruby is case-sensitive.
• Program seems frozen? It's waiting for input! Type something and press Enter.`
          }
        }
      ]
    },
    {
      id: "ruby-phase2-m1",
      title: "Phase 2 — Control Flow",
      duration: "2.5 hours",
      lessons: [
        {
          id: "ruby-phase2-m1-l1",
          title: "If/Elsif/Else — Making Decisions",
          explanation: `Decision-making is the heart of programming. Think of a vending machine — it checks 
if you inserted enough money, then checks which button you pressed, then decides 
what to dispense. Ruby's if/elsif/else works exactly like this chain of decisions. 
You check one condition, then another, then another, until one is true — or you 
fall through to a default. This is how programs react differently to different 
situations, making them actually useful in the real world.`,
          concept: `if condition      → runs this block if condition is true
elsif condition   → checked only if all previous conditions were false
else              → runs if NO conditions above were true (optional catch-all)
end               → REQUIRED to close every if block in Ruby
Conditions use comparison operators that return true or false`,
          example: `temperature = 28

if temperature >= 35
  puts 'Very hot — stay hydrated!'
elsif temperature >= 25
  puts 'Warm and pleasant'
elsif temperature >= 15
  puts 'Mild — bring a light jacket'
elsif temperature >= 5
  puts 'Cold — wear a coat'
else
  puts 'Freezing — bundle up!'
end
# Output: Warm and pleasant

# One-line if (for simple cases)
score = 95
puts 'Excellent!' if score >= 90

# Unless (opposite of if)
logged_in = false
puts 'Please log in' unless logged_in`,
          exercise: {
            prompt: `Build a grade classifier:
1. Set score = 73
2. Print 'A' if score >= 90
3. Print 'B' if score is 80-89
4. Print 'C' if score is 70-79
5. Print 'D' if score is 60-69
6. Print 'F' for anything below 60
7. Also print 'Pass' or 'Fail' based on whether score >= 60`,
            starterCode: `# Grade classifier
score = 73

# Step 2-6: Grade check with if/elsif/else/end


# Step 7: Pass or Fail?

`,
            solution: `score = 73
if score >= 90
  puts 'A'
elsif score >= 80
  puts 'B'
elsif score >= 70
  puts 'C'
elsif score >= 60
  puts 'D'
else
  puts 'F'
end
puts score >= 60 ? 'Pass' : 'Fail'`,
            tests: [
              { type: "contains", value: "if score >= 90" },
              { type: "contains", value: "elsif" },
              { type: "contains", value: "else" },
              { type: "contains", value: "end" }
            ],
            debuggingTip: `Common mistakes:
• Wrote 'elseif' or 'else if'? Ruby requires 'elsif' (no 'e' at the end).
• Forgot 'end'? Ruby will throw a SyntaxError — every if needs exactly one end.
• Conditions checked in wrong order? Put most specific conditions first (>= 90 before >= 80).
• Using = instead of == in conditions? That assigns rather than compares.
• elsif after else? else must always be last — nothing can come after it.`
          }
        },
        {
          id: "ruby-phase2-m1-l2",
          title: "While Loop — Repeating Until Done",
          explanation: `Imagine a bouncer at a club checking IDs — they don't check one person then go home. 
They keep checking, person after person, until their shift ends. That's a loop. 
The while loop keeps repeating a block of code as long as a condition remains true. 
The moment the condition becomes false, the loop stops. This is perfect for 
"keep doing this until something changes" situations: retry until success, 
count until a goal is reached, process until the list is empty.`,
          concept: `while condition
  # code runs while condition is true
end
The condition is checked BEFORE each iteration.
If condition is false from the start, the code inside never runs.
CRITICAL: Something inside the loop MUST change the condition eventually, 
or you get an infinite loop (program runs forever and freezes).`,
          example: `# Counting up
count = 1
while count <= 5
  puts "Count: #{count}"
  count += 1   # MUST change count or loop runs forever!
end
# Output: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5

# Counting down
countdown = 5
while countdown > 0
  puts countdown
  countdown -= 1
end
puts 'Blast off!'

# Loop with a condition that might not run
attempts = 0
max_attempts = 3
while attempts < max_attempts
  puts "Attempt #{attempts + 1}"
  attempts += 1
end`,
          exercise: {
            prompt: `Practice with while loops:
1. Print numbers 1 to 10 using a while loop
2. After the loop, print the sum of all numbers 1 to 10
   (hint: create a sum variable before the loop and add to it inside)
3. Bonus: Print only even numbers from 2 to 20`,
            starterCode: `# Part 1 & 2: Count 1 to 10 and calculate sum
count = 1
sum = 0

# While loop here


puts "Sum: #{sum}"

# Part 3 (Bonus): Even numbers 2 to 20

`,
            solution: `count = 1
sum = 0
while count <= 10
  puts count
  sum += count
  count += 1
end
puts "Sum: #{sum}"
even = 2
while even <= 20
  puts even
  even += 2
end`,
            tests: [
              { type: "contains", value: "while count <= 10" },
              { type: "contains", value: "sum +=" },
              { type: "contains", value: "count += 1" }
            ],
            debuggingTip: `Common mistakes:
• Infinite loop? You forgot to increment/change the variable inside the loop. Add count += 1.
• Loop runs 0 times? Your starting condition is already false. Check initial values.
• Off by one? while count < 10 stops at 9. Use <= 10 to include 10.
• Forgot 'end'? Ruby needs end to know where the loop stops.
• Sum not accumulating? Use sum += count, not sum = count.`
          }
        },
        {
          id: "ruby-phase2-m1-l3",
          title: "For Loop and Ranges — Iterating with Precision",
          explanation: `While loops are great when you don't know how many times you'll repeat. But often 
you know exactly: "do this 10 times", "go through numbers 1 to 100", "process each 
day of the week". That's where for loops and ranges shine. A range (1..10) is Ruby's 
elegant way of expressing "all values from 1 to 10". Combined with a for loop, 
you get clean, readable iteration. Ruby developers actually prefer the .times and 
.upto/.downto methods in practice, but ranges and for are essential fundamentals.`,
          concept: `1..5   → inclusive range (includes 5): 1, 2, 3, 4, 5
1...5  → exclusive range (excludes 5): 1, 2, 3, 4
for variable in range ... end → iterates through each value in the range
'a'..'e' → ranges work with letters too!`,
          example: `# Basic for loop with range
for i in 1..5
  puts i
end
# Output: 1 2 3 4 5

# Exclusive range
for i in 1...5
  puts i
end
# Output: 1 2 3 4 (5 excluded)

# Using the variable in calculations
for num in 1..10
  puts "#{num} squared = #{num ** 2}"
end

# Letter ranges
for letter in 'a'..'e'
  puts letter
end
# Output: a b c d e

# Alternative: times (very common in Ruby)
5.times do |i|
  puts "Iteration #{i}"   # i starts at 0
end`,
          exercise: {
            prompt: `Explore ranges and for loops:
1. Use a for loop with range 0..7 to print each number
2. Use a for loop with range 10..15 to print each number  
3. Print a multiplication table for 3: "3 x 1 = 3", "3 x 2 = 6"... up to "3 x 10 = 30"
4. Use 5.times to print "Ruby!" five times`,
            starterCode: `# Part 1: Range 0 to 7


# Part 2: Range 10 to 15


# Part 3: Multiplication table for 3


# Part 4: 5.times

`,
            solution: `for i in 0..7
  puts i
end
for i in 10..15
  puts i
end
for i in 1..10
  puts "3 x #{i} = #{3 * i}"
end
5.times do
  puts 'Ruby!'
end`,
            tests: [
              { type: "contains", value: "for i in 0..7" },
              { type: "contains", value: "for i in 10..15" },
              { type: "contains", value: "3 * i" }
            ],
            debuggingTip: `Common mistakes:
• Used ... instead of ..? You'll miss the last number in your range.
• for loop variable (i) is only accessible inside the loop block.
• Range must go from smaller to larger: 5..1 won't iterate (empty range).
• .times starts counting at 0, not 1: 3.times gives 0, 1, 2.
• Forget 'end'? Both for and do...end blocks need closing.`
          }
        },
        {
          id: "ruby-phase2-m1-l4",
          title: "Break and Next — Controlling Loop Flow",
          explanation: `Sometimes you're searching through data and find what you need halfway through — 
there's no point continuing. Sometimes you want to skip certain items (like skipping 
blank entries in a list). break and next give you precise control over loop execution. 
break is like an emergency exit — it stops the loop immediately. next is like saying 
"skip this one, move to the next" — it skips the rest of the current iteration and 
jumps to the next one. These are used constantly in real Ruby code.`,
          concept: `break → immediately exits the loop entirely, code after the loop continues
next  → skips the rest of current iteration, jumps to the next one
Both can be used with a condition: next if condition (one-liner)
Both work inside while, for, .each, and .times loops`,
          example: `# next: skip specific values
for i in 1..10
  next if i % 2 == 0   # skip even numbers
  puts i               # only prints odd numbers
end
# Output: 1 3 5 7 9

# break: stop early
for i in 1..100
  break if i > 5       # stop as soon as i exceeds 5
  puts i
end
# Output: 1 2 3 4 5

# Combining both: skip 4, stop at 8
for i in 0..9
  next if i == 4       # skip 4
  break if i == 8      # stop before printing 8
  puts i
end
# Output: 0 1 2 3 5 6 7`,
          exercise: {
            prompt: `Practice flow control:
1. Loop through 1 to 20, print only numbers divisible by 3 (use next to skip others)
2. Loop through 1 to 100, stop (break) when you reach a number divisible by 7 
   AND greater than 50. Print each number as you go, then print "Found it: [number]"`,
            starterCode: `# Part 1: Print multiples of 3 from 1 to 20


# Part 2: Find first number > 50 divisible by 7
for i in 1..100

end
puts "Found it: #{i}"
`,
            solution: `for i in 1..20
  next unless i % 3 == 0
  puts i
end
for i in 1..100
  puts i
  if i > 50 && i % 7 == 0
    puts "Found it: #{i}"
    break
  end
end`,
            tests: [
              { type: "contains", value: "next" },
              { type: "contains", value: "break" },
              { type: "contains", value: "% 3" }
            ],
            debuggingTip: `Common mistakes:
• next skips to next iteration but break exits entirely — don't mix them up.
• next if i == 4 means "if i is 4, skip everything below and go to next loop cycle".
• Code after break in the same iteration never runs.
• Using break outside a loop causes an error.
• Want to skip unless something is true? Use 'next unless condition' (Ruby-style!).`
          }
        },
        {
          id: "ruby-phase2-m1-l5",
          title: "Capstone: Number Guessing Game",
          explanation: `You've learned variables, input, comparisons, loops, and conditionals. Now let's 
combine all of them into a real interactive program. The guessing game is a classic 
first project because it uses every fundamental concept together: storing a secret 
value, repeatedly asking for input, comparing the guess to the secret, giving helpful 
feedback, and exiting cleanly when the user succeeds. This is the same pattern used 
in login systems, search features, and puzzle games.`,
          concept: `This project combines: variables, gets.chomp.to_i, while loops, if/elsif/else, 
and string interpolation all working together. The key insight: the loop condition 
checks if the game is still going, and the if/else inside decides what feedback to give.`,
          example: `# Complete working example
secret = 42
guess = 0
attempts = 0

while guess != secret
  print 'Enter your guess: '
  guess = gets.chomp.to_i
  attempts += 1
  
  if guess < secret
    puts 'Too low! Try higher.'
  elsif guess > secret
    puts 'Too high! Try lower.'
  end
end

puts "You got it in #{attempts} attempt(s)!"`,
          exercise: {
            prompt: `Build the complete guessing game:
1. Set secret = 5, guess = 0, attempts = 0
2. Loop while guess doesn't equal secret
3. Inside the loop: ask for a guess using print and gets.chomp.to_i
4. Increment attempts each time
5. If too low: print 'Higher!'
6. If too high: print 'Lower!'
7. After the loop: print 'You got it!' and how many attempts it took`,
            starterCode: `# Number Guessing Game
secret = 5
guess = 0
attempts = 0

# Step 2: Start your while loop


  # Step 3: Get user's guess
  
  
  # Step 4: Count the attempt
  
  
  # Step 5 & 6: Give feedback
  

# Don't forget end for the loop

# Step 7: Victory message

`,
            solution: `secret = 5
guess = 0
attempts = 0
while guess != secret
  print 'Guess the number: '
  guess = gets.chomp.to_i
  attempts += 1
  if guess < secret
    puts 'Higher!'
  elsif guess > secret
    puts 'Lower!'
  end
end
puts 'You got it!'
puts "It took #{attempts} attempt(s)."`,
            tests: [
              { type: "contains", value: "while guess != secret" },
              { type: "contains", value: "gets.chomp.to_i" },
              { type: "contains", value: "puts 'You got it!'" }
            ],
            debuggingTip: `Common mistakes:
• Infinite loop? Make sure guess = gets.chomp.to_i is INSIDE the while loop, not outside.
• Getting wrong feedback? Check your < and > directions.
• Forgot .to_i? The comparison guess != secret won't work if guess is a string.
• attempts not counting? Make sure attempts += 1 is inside the loop.
• Game never ends? Verify secret is set correctly and comparison is guess != secret.`
          }
        }
      ]
    },
    {
      id: "ruby-phase3-m1",
      title: "Phase 3 — Methods",
      duration: "2.5 hours",
      lessons: [
        {
          id: "ruby-phase3-m1-l1",
          title: "Defining Methods — Reusable Actions",
          explanation: `Imagine if every time you wanted to make coffee, you had to remember and repeat 
every step: fill water, add grounds, press start... What if instead you just pressed 
a button labeled "Make Coffee"? Methods are those buttons. You define the steps once, 
name the method, and then call it by name whenever you need it. This is the 
fundamental principle of DRY programming: Don't Repeat Yourself. Methods make 
code shorter, easier to read, and much easier to fix (change it in one place 
instead of everywhere).`,
          concept: `def method_name    → start of method definition
  # code here    → the steps to execute
end                → close the definition
method_name        → call the method (run it)
Methods must be defined BEFORE they are called.
Method names use snake_case: say_hello, calculate_total, print_menu.`,
          example: `# Define a method
def say_hello
  puts 'Hello!'
  puts 'Welcome to Ruby.'
end

# Call it multiple times
say_hello
say_hello
say_hello
# Output: Hello! Welcome to Ruby. (3 times)

# Method that does calculation
def print_separator
  puts '-' * 30
end

def print_menu
  print_separator
  puts 'MAIN MENU'
  print_separator
  puts '1. Start Game'
  puts '2. Settings'
  puts '3. Quit'
  print_separator
end

print_menu`,
          exercise: {
            prompt: `Build a method collection:
1. Define say_motto that prints 'Keep coding!' and 'Never give up!' — call it twice
2. Define print_header that prints a line of 20 asterisks, then 'RUBY PROGRAM', then another line of 20 asterisks
3. Call print_header once`,
            starterCode: `# Method 1: say_motto


# Call say_motto twice


# Method 2: print_header


# Call print_header

`,
            solution: `def say_motto
  puts 'Keep coding!'
  puts 'Never give up!'
end
say_motto
say_motto
def print_header
  puts '*' * 20
  puts 'RUBY PROGRAM'
  puts '*' * 20
end
print_header`,
            tests: [
              { type: "contains", value: "def say_motto" },
              { type: "contains", value: "say_motto" },
              { type: "contains", value: "def print_header" }
            ],
            debuggingTip: `Common mistakes:
• Called the method before defining it? Ruby reads top to bottom — define first, call second.
• Forgot 'end'? Every def needs a matching end.
• Method name has spaces or starts with capital? Use lowercase snake_case only.
• Nothing printed when calling? Check that puts is inside the method definition.
• Extra parentheses on call? say_motto() works but say_motto is more Ruby-like.`
          }
        },
        {
          id: "ruby-phase3-m1-l2",
          title: "Parameters and Return Values",
          explanation: `A method without parameters is like a vending machine that always dispenses the 
same item. Parameters make methods flexible — you pass in data, and the method 
works with that specific data. Return values are what the method hands back to 
you after it's done. In Ruby, every method automatically returns the value of 
its last line — you don't need the return keyword (though you can use it). 
This makes Ruby methods elegant and concise. Parameters + return values = 
the building blocks of all useful code.`,
          concept: `def method_name(parameter1, parameter2)  → parameters are local variables
  # use parameters here
  result  # last line is automatically returned
end
Return value: call the method where you want the result: total = add(3, 4)
Default parameters: def greet(name = 'friend') → used if no argument passed
Return keyword: use 'return value' to exit early from a method`,
          example: `# Method with one parameter
def greet(name)
  "Hello, #{name}!"  # last line automatically returned
end

puts greet('Alice')   # Hello, Alice!
message = greet('Bob')
puts message          # Hello, Bob!

# Two parameters, returns value
def add(a, b)
  a + b
end
puts add(10, 25)      # 35

# Default parameter value
def power(base, exponent = 2)
  base ** exponent
end
puts power(3)      # 9  (uses default exponent of 2)
puts power(3, 3)   # 27 (uses provided exponent of 3)

# Using return keyword to exit early
def check_age(age)
  return 'Invalid age' if age < 0
  return 'Minor' if age < 18
  'Adult'
end
puts check_age(-1)  # Invalid age
puts check_age(15)  # Minor
puts check_age(21)  # Adult`,
          exercise: {
            prompt: `Build useful methods with parameters:
1. Define multiply(a, b) that returns the product — call with (4, 7), store result, print it
2. Define greet_user(name, language) that prints "Hello [name], welcome to [language]!"
3. Call greet_user with your name and 'Ruby'
4. Define circle_area(radius) that returns 3.14159 * radius * radius — test with radius 5`,
            starterCode: `# Method 1: multiply
def multiply(a, b)

end
product = multiply(4, 7)
puts product

# Method 2: greet_user


# Call greet_user


# Method 3: circle_area


puts circle_area(5)
`,
            solution: `def multiply(a, b)
  a * b
end
product = multiply(4, 7)
puts product
def greet_user(name, language)
  puts "Hello #{name}, welcome to #{language}!"
end
greet_user('Alex', 'Ruby')
def circle_area(radius)
  3.14159 * radius * radius
end
puts circle_area(5)`,
            tests: [
              { type: "contains", value: "def multiply" },
              { type: "contains", value: "multiply(4, 7)" },
              { type: "contains", value: "def greet_user" },
              { type: "contains", value: "def circle_area" }
            ],
            debuggingTip: `Common mistakes:
• Printed inside the method but also tried to puts the return value? You'll print twice.
• Wrong number of arguments? Ruby raises ArgumentError — count your parameters.
• Forgot to use the return value? result = multiply(4, 7) captures it; just multiply(4, 7) throws it away.
• Return keyword used unnecessarily at end? It works, but Ruby style omits it at the last line.
• Parameters are local — they only exist inside the method. Don't try to use them outside.`
          }
        }
      ]
    },
    {
      id: "ruby-phase4-m1",
      title: "Phase 4 — Arrays and Hashes",
      duration: "2.5 hours",
      lessons: [
        {
          id: "ruby-phase4-m1-l1",
          title: "Arrays — Ordered Collections",
          explanation: `An array is like a numbered list — a shopping list, a playlist, a leaderboard. 
Each item has a position (called an index) starting at 0. Arrays let you store 
multiple values in one variable instead of creating name1, name2, name3... 
separately. Ruby arrays are flexible: they can hold mixed types, grow dynamically, 
and come with dozens of built-in methods for sorting, searching, filtering, and 
transforming data. Arrays are one of the most used data structures in all of 
programming.`,
          concept: `arr = ['a', 'b', 'c']  → create array with square brackets
arr[0]                  → first element (index starts at 0!)
arr[-1]                 → last element (negative indexes from end)
arr << 'd'              → append to end (shovel operator)
arr.push('e')           → also appends (same as <<)
arr.length or arr.size  → number of elements`,
          example: `# Creating arrays
fruits = ['apple', 'banana', 'cherry']
numbers = [10, 20, 30, 40, 50]
mixed = ['hello', 42, true, 3.14]   # arrays can mix types

# Accessing elements
puts fruits[0]    # apple (first)
puts fruits[1]    # banana
puts fruits[-1]   # cherry (last element)
puts fruits[-2]   # banana (second to last)

# Modifying arrays
fruits << 'date'           # append: ['apple','banana','cherry','date']
fruits.push('elderberry')  # same result
fruits[0] = 'avocado'     # replace first element

puts fruits.length  # 5
puts fruits.first   # avocado
puts fruits.last    # elderberry

# Useful array methods
puts numbers.sum        # 150
puts numbers.min        # 10
puts numbers.max        # 50
puts numbers.reverse    # [50, 40, 30, 20, 10]
puts numbers.include?(30) # true`,
          exercise: {
            prompt: `Work with an array of colors:
1. Create array colors with 'red', 'green', 'blue'
2. Print the first color using index [0]
3. Print the second color using index [1]  
4. Append 'yellow' using << and print the array
5. Print the total count using .length
6. Check if 'purple' is in the array using .include? and print the result`,
            starterCode: `# Array practice

# Step 1: Create colors array


# Step 2: Print first color


# Step 3: Print second color


# Step 4: Append 'yellow' and print array


# Step 5: Print length


# Step 6: Check for 'purple'

`,
            solution: `colors = ['red', 'green', 'blue']
puts colors[0]
puts colors[1]
colors << 'yellow'
puts colors
puts colors.length
puts colors.include?('purple')`,
            tests: [
              { type: "contains", value: "colors[0]" },
              { type: "contains", value: "colors <<" },
              { type: "contains", value: ".length" },
              { type: "contains", value: ".include?" }
            ],
            debuggingTip: `Common mistakes:
• Used [1] for first element? Arrays are zero-indexed — first is [0], second is [1].
• Getting nil? Index doesn't exist. Check array length before accessing.
• Using . instead of [] for access? arr.0 is invalid — use arr[0].
• Forgot quotes around strings in the array? ['red', green] — green without quotes = variable.
• << vs + : << modifies the original array; arr + ['x'] returns a new array.`
          }
        },
        {
          id: "ruby-phase4-m1-l2",
          title: "Hashes — Key-Value Storage",
          explanation: `An array is great for ordered lists, but sometimes you need labeled data. 
A hash is like a dictionary or a contact card — instead of position 0, 1, 2, 
you use meaningful names (keys) to store and retrieve values. User profiles, 
configuration settings, product catalogs — these are all naturally represented 
as hashes. Ruby hashes use symbols (starting with :) as keys because they're 
faster and more memory-efficient than strings. Hashes are everywhere in real 
Ruby code, especially when working with APIs and databases.`,
          concept: `hash = { key: 'value' }   → symbol key syntax (modern Ruby)
hash[:key]               → accessing a value by key
hash[:new_key] = value   → adding or updating a key
hash.keys                → array of all keys
hash.values              → array of all values
hash.each { |k, v| }    → iterate over all pairs`,
          example: `# Creating a hash
person = {
  name: 'Sofia',
  age: 29,
  city: 'Rome',
  job: 'engineer'
}

# Accessing values
puts person[:name]   # Sofia
puts person[:age]    # 29

# Adding and updating
person[:email] = 'sofia@example.com'  # new key
person[:age] = 30                     # update existing

# Hash methods
puts person.keys     # [:name, :age, :city, :job, :email]
puts person.length   # 5
puts person.has_key?(:name)   # true
puts person.has_value?('Rome') # true

# Iterating over a hash
person.each do |key, value|
  puts "#{key}: #{value}"
end`,
          exercise: {
            prompt: `Build a book record using a hash:
1. Create hash book with: title: '1984', author: 'Orwell', pages: 328
2. Print the title using hash[:title]
3. Add key :year with value 1949
4. Update pages to 400
5. Print all keys using .keys
6. Iterate over the hash and print each key-value pair as "key: value"`,
            starterCode: `# Hash practice

# Step 1: Create book hash


# Step 2: Print title


# Step 3: Add :year => 1949


# Step 4: Update pages to 400


# Step 5: Print all keys


# Step 6: Iterate and print each pair

`,
            solution: `book = { title: '1984', author: 'Orwell', pages: 328 }
puts book[:title]
book[:year] = 1949
book[:pages] = 400
puts book.keys
book.each do |key, value|
  puts "#{key}: #{value}"
end`,
            tests: [
              { type: "contains", value: "book[:title]" },
              { type: "contains", value: "book[:year] = 1949" },
              { type: "contains", value: ".keys" },
              { type: "contains", value: "book.each" }
            ],
            debuggingTip: `Common mistakes:
• Used string key 'title' to access a symbol key :title? Returns nil — be consistent.
• Wrote hash.title instead of hash[:title]? Methods and keys are different — use [].
• Keys with spaces? Use strings: {'first name' => 'Alice'} (old hash rocket syntax).
• Confused .keys (returns array) with .key? (checks if key exists)?
• Iterating with wrong variables? |key, value| order is always key first, value second.`
          }
        }
      ]
    },
    {
      id: "ruby-phase5-m1",
      title: "Phase 5 — Intermediate Ruby",
      duration: "2.5 hours",
      lessons: [
        {
          id: "ruby-phase5-m1-l1",
          title: "Iterators — each, map, select",
          explanation: `Ruby's iterators are one of the language's greatest strengths. Instead of writing 
a for loop every time you want to process a collection, Ruby provides expressive 
methods that read almost like English. .each does something for every element. 
.map transforms each element into something new. .select filters and keeps only 
elements that match a condition. These three methods handle 90% of all collection 
processing tasks in Ruby. Professional Ruby code uses these constantly instead 
of for loops.`,
          concept: `.each { |item| }      → do something with each item (doesn't create new array)
.map { |item| }       → transform each item, returns NEW array with results
.select { |item| }    → keep only items where block returns true
.reject { |item| }    → opposite of select (keep where false)
Blocks: { |var| single line } or do |var| ... end (multiline)`,
          example: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# .each — do something with every element
numbers.each { |n| puts n }

# .map — transform every element, get new array
doubled = numbers.map { |n| n * 2 }
puts doubled   # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

squared = numbers.map { |n| n ** 2 }
puts squared   # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# .select — keep only matching elements
evens = numbers.select { |n| n.even? }
puts evens     # [2, 4, 6, 8, 10]

big_numbers = numbers.select { |n| n > 5 }
puts big_numbers  # [6, 7, 8, 9, 10]

# .reject — exclude matching elements
odds = numbers.reject { |n| n.even? }
puts odds      # [1, 3, 5, 7, 9]

# Chaining iterators
result = numbers.select { |n| n > 3 }.map { |n| n * 10 }
puts result    # [40, 50, 60, 70, 80, 90, 100]`,
          exercise: {
            prompt: `Practice with iterators:
1. Given numbers = [1,2,3,4,5], use .each to print each number squared
2. Use .map to create a new array where each number is tripled — print it
3. Use .select to get only numbers greater than 3 — print the result
4. Given words = ['ruby', 'python', 'java', 'go'], use .select to find words longer than 3 characters`,
            starterCode: `numbers = [1, 2, 3, 4, 5]

# Step 1: .each - print each number squared


# Step 2: .map - triple each number


# Step 3: .select - numbers greater than 3


# Step 4: Filter words
words = ['ruby', 'python', 'java', 'go']
# Use .select to keep words longer than 3 characters

`,
            solution: `numbers = [1, 2, 3, 4, 5]
numbers.each { |n| puts n * n }
tripled = numbers.map { |n| n * 3 }
puts tripled
big = numbers.select { |n| n > 3 }
puts big
words = ['ruby', 'python', 'java', 'go']
long_words = words.select { |w| w.length > 3 }
puts long_words`,
            tests: [
              { type: "contains", value: ".each" },
              { type: "contains", value: ".map" },
              { type: "contains", value: ".select" },
              { type: "contains", value: "|n|" }
            ],
            debuggingTip: `Common mistakes:
• Using .each when you need .map? each returns the original array; map returns the transformed one.
• Block variable not changing? Check it's being used inside the block: { |n| n * 2 }, not just { n * 2 }.
• Forgot pipes around block variable? { n | n * 2 } is wrong — use { |n| n * 2 }.
• Chaining not working? Make sure each method returns the right type (map and select return arrays).
• Confused .select and .reject? select keeps true results, reject keeps false results.`
          }
        },
        {
          id: "ruby-phase5-m1-l2",
          title: "Exception Handling — Dealing with Errors Gracefully",
          explanation: `Programs encounter unexpected situations: a file doesn't exist, the network is down, 
a user enters text where a number was expected, division by zero. Without exception 
handling, your program crashes with an ugly error message. With it, you can catch 
the error, inform the user helpfully, and either recover or exit gracefully. Think 
of it like a try/catch safety net. In production Ruby code, exception handling is 
essential — it's the difference between a program that randomly crashes and one 
that handles problems professionally.`,
          concept: `begin            → start the "try this" section
  # risky code   → code that might raise an error
rescue ErrorType → catch specific error (or any error if type omitted)
  # handle error → what to do when error occurs
else             → runs only if NO error occurred (optional)
ensure           → ALWAYS runs, error or not (like finally in other languages)
end              → close the block`,
          example: `# Basic rescue
begin
  result = 10 / 0
rescue ZeroDivisionError
  puts 'Cannot divide by zero!'
end

# Catching the error message
begin
  Integer('not a number')
rescue ArgumentError => e
  puts "Error: #{e.message}"
end

# Multiple rescue clauses
begin
  arr = [1, 2, 3]
  puts arr[10].upcase   # nil has no upcase method
rescue NoMethodError => e
  puts "Method error: #{e.message}"
rescue StandardError => e
  puts "Something went wrong: #{e.message}"
end

# Ensure always runs
begin
  puts 'Trying something risky...'
  10 / 0
rescue ZeroDivisionError
  puts 'Caught the error!'
ensure
  puts 'This always runs, error or not.'
end`,
          exercise: {
            prompt: `Practice exception handling:
1. Write a begin/rescue that divides 10 by 0 — print 'Math error!' if ZeroDivisionError occurs
2. Write a begin/rescue that calls .upcase on nil — catch NoMethodError, print 'Method not available'
3. Add an ensure block to the second one that always prints 'Done checking.'`,
            starterCode: `# Part 1: Division by zero


# Part 2 & 3: NoMethodError with ensure
begin
  value = nil
  puts value.upcase
rescue NoMethodError
  
ensure
  
end
`,
            solution: `begin
  10 / 0
rescue ZeroDivisionError
  puts 'Math error!'
end
begin
  value = nil
  puts value.upcase
rescue NoMethodError
  puts 'Method not available'
ensure
  puts 'Done checking.'
end`,
            tests: [
              { type: "contains", value: "begin" },
              { type: "contains", value: "rescue" },
              { type: "contains", value: "ensure" }
            ],
            debuggingTip: `Common mistakes:
• Using rescue without begin? rescue must be inside a begin...end block (or a method).
• Rescuing too broadly? rescue without an error type catches everything — be specific when possible.
• Ensure not running? Check that end closes the entire begin/rescue/ensure block.
• Want to re-raise the error? Use 'raise' inside rescue to re-throw it after handling.
• Error variable syntax: rescue ZeroDivisionError => e gives you the error object in 'e'.`
          }
        }
      ]
    }
  ]
};