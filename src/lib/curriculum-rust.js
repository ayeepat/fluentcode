// Rust curriculum data - all modules and lessons
export const rustCurriculum = {
  label: "Rust",
  modules: [
    {
      id: "rust-module1-m1",
      title: "Module 1 — Getting Started with Rust",
      duration: "60 min",
      lessons: [
        {
          id: "rust-module1-m1-l1",
          title: "Hello, Cargo!",
          explanation: `println! is a macro that writes formatted text to standard output, which is essential for giving terminal feedback. Macros in Rust end with an exclamation mark (!), distinguishing them from regular functions. Every Rust program typically uses println! to communicate output to the user.`,
          concept: `println!("text") - Prints text to the console
Macros end with !
Statements must end with semicolons
println! automatically adds a newline`,
          example: `fn main() {
    println!("Terminal Agent Online.");
    println!("System ready.");
    println!("{}", 42);
}`,
          exercise: {
            prompt: `Print exactly "System initialized." to the console.`,
            starterCode: `fn main() {
    // Print here
}`,
            solution: `fn main() {
    println!("System initialized.");
}`,
            tests: [
              { type: "contains", value: "println!(\"System initialized.\");" }
            ],
            debuggingTip: `Semicolons are mandatory at the end of statements in Rust.`
          }
        },
        {
          id: "rust-module1-m1-l2",
          title: "Immutability by Default",
          explanation: `Variables in Rust cannot be changed once assigned unless explicitly marked with mut. This prevents unexpected state changes and makes code more predictable. Immutability is a core principle that helps prevent bugs.`,
          concept: `let x = 5; - Immutable (cannot change)
let mut y = 5; - Mutable (can change)
Variables are immutable by default`,
          example: `fn main() {
    let domain = "smeshai.xyz";
    let mut active_connections = 0;
    active_connections = 1;
    active_connections = 2;
}`,
          exercise: {
            prompt: `Create a mutable variable port set to 3000, then change it to 8080.`,
            starterCode: `fn main() {
    // let port...
}`,
            solution: `fn main() {
    let mut port = 3000;
    port = 8080;
}`,
            tests: [
              { type: "contains", value: "let mut port = 3000;" },
              { type: "contains", value: "port = 8080;" }
            ],
            debuggingTip: `If the compiler says "cannot assign twice to immutable variable", you forgot mut.`
          }
        },
        {
          id: "rust-module1-m1-l3",
          title: "Data Types",
          explanation: `Rust is statically typed. It infers types from context, but you can explicitly define them for precision. Common types include i32 (32-bit integer), f64 (64-bit float), bool, and String.`,
          concept: `let name: type = value; - Explicit type annotation
i32 - 32-bit integer
f64 - 64-bit floating point
bool - true or false`,
          example: `fn main() {
    let is_deployed: bool = true;
    let response_time: f64 = 12.5;
    let port: i32 = 3000;
}`,
          exercise: {
            prompt: `Create a variable is_active explicitly typed as bool and set it to false.`,
            starterCode: `fn main() {
    // Create typed variable
}`,
            solution: `fn main() {
    let is_active: bool = false;
}`,
            tests: [
              { type: "contains", value: "let is_active: bool = false;" }
            ],
            debuggingTip: `The colon goes immediately after the variable name before the type.`
          }
        },
        {
          id: "rust-module1-m1-l4",
          title: "Functions and Returns",
          explanation: `Functions are declared with fn. The last expression in a block is automatically returned if you omit the semicolon. This is called an implicit return.`,
          concept: `fn name(param: type) -> return_type { ... }
Last expression without semicolon = return
Return keyword is optional`,
          example: `fn calculate_bandwidth(users: i32) -> i32 {
    users * 50
}

fn main() {
    let result = calculate_bandwidth(10);
}`,
          exercise: {
            prompt: `Write a function add_ports that takes two i32 parameters and returns their sum without using the return keyword.`,
            starterCode: `// Write function here

fn main() {
}`,
            solution: `fn add_ports(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
}`,
            tests: [
              { type: "contains", value: "-> i32" },
              { type: "contains", value: "a + b" }
            ],
            debuggingTip: `If you add a semicolon to the last line, it returns (), causing a type error.`
          }
        },
        {
          id: "rust-module1-m1-l5",
          title: "Control Flow",
          explanation: `Rust uses if, else if, and else to branch logic. Conditions do not need parentheses and must be strictly boolean. Rust does not allow truthiness.`,
          concept: `if condition { ... } else { ... }
No parentheses needed
Condition must be bool type`,
          example: `fn main() {
    let status = 404;
    if status == 200 {
        println!("OK");
    } else if status == 404 {
        println!("Not Found");
    } else {
        println!("Error");
    }
}`,
          exercise: {
            prompt: `Write an if/else block that prints "Secure" if use_ssl is true, and "Insecure" if false.`,
            starterCode: `fn main() {
    let use_ssl = true;
    // Write if/else
}`,
            solution: `fn main() {
    let use_ssl = true;
    if use_ssl {
        println!("Secure");
    } else {
        println!("Insecure");
    }
}`,
            tests: [
              { type: "contains", value: "if use_ssl" },
              { type: "contains", value: "println!(\"Secure\");" }
            ],
            debuggingTip: `Rust requires conditions to be strictly bool. You cannot use if 1.`
          }
        }
      ]
    },
    {
      id: "rust-module2-m1",
      title: "Module 2 — Ownership & Borrowing",
      duration: "80 min",
      lessons: [
        {
          id: "rust-module2-m1-l1",
          title: "The Rules of Ownership",
          explanation: `Every value has a single owner. When the owner goes out of scope, the memory is instantly freed. Assigning complex data to a new variable "moves" ownership, invalidating the original.`,
          concept: `let a = String::from("Text");
let b = a;
Ownership moved to b, a is now invalid`,
          example: `fn main() {
    let key = String::from("live_key_xyz");
    let active_key = key; // Ownership moved
    // println!("{}", key); // This would cause an error!
    println!("{}", active_key); // This works
}`,
          exercise: {
            prompt: `Create a String called token, move it to backup_token, and print backup_token.`,
            starterCode: `fn main() {
    let token = String::from("auth123");
    // Move and print
}`,
            solution: `fn main() {
    let token = String::from("auth123");
    let backup_token = token;
    println!("{}", backup_token);
}`,
            tests: [
              { type: "contains", value: "let backup_token = token;" },
              { type: "contains", value: "println!(\"{}\", backup_token);" }
            ],
            debuggingTip: `Don't try to print token after moving it.`
          }
        },
        {
          id: "rust-module2-m1-l2",
          title: "References (Borrowing)",
          explanation: `To let another function read data without taking ownership, you pass an immutable reference using &. References don't move ownership.`,
          concept: `&value - Creates a reference
fn read_data(data: &String)
Reference is temporary`,
          example: `fn read_config(config: &String) {
    println!("Config is {} bytes", config.len());
}

fn main() {
    let cfg = String::from("setting");
    read_config(&cfg);
    println!("{}", cfg); // cfg still valid
}`,
          exercise: {
            prompt: `Write a function check_len that takes a &String and returns its length (.len()) as a usize.`,
            starterCode: `// Write check_len function

fn main() {
}`,
            solution: `fn check_len(s: &String) -> usize {
    s.len()
}

fn main() {
}`,
            tests: [
              { type: "contains", value: "s: &String" },
              { type: "contains", value: "s.len()" }
            ],
            debuggingTip: `The return type for .len() is always usize.`
          }
        },
        {
          id: "rust-module2-m1-l3",
          title: "Mutable References",
          explanation: `You can modify borrowed data by passing a mutable reference (&mut). You can only have one mutable reference to a value at a time to prevent data races.`,
          concept: `&mut value - Mutable reference
One mutable reference per value
fn modify(url: &mut String)`,
          example: `fn append_route(url: &mut String) {
    url.push_str("/api/v1");
}

fn main() {
    let mut path = String::from("/base");
    append_route(&mut path);
    println!("{}", path);
}`,
          exercise: {
            prompt: `Write a function add_domain that takes a &mut String and pushes ".com" to it using .push_str().`,
            starterCode: `// Write add_domain function

fn main() {
}`,
            solution: `fn add_domain(s: &mut String) {
    s.push_str(".com");
}

fn main() {
}`,
            tests: [
              { type: "contains", value: "&mut String" },
              { type: "contains", value: "s.push_str(\".com\");" }
            ],
            debuggingTip: `The variable you are referencing must also be declared as mut when originally created.`
          }
        },
        {
          id: "rust-module2-m1-l4",
          title: "The Slice Type",
          explanation: `Slices let you reference a contiguous sequence of elements in a collection rather than the whole collection. Great for parsing paths or extracting substrings.`,
          concept: `&s[start..end] - String slice
Byte indices determine bounds
Slices prevent copying entire strings`,
          example: `fn main() {
    let path = String::from("/user/profile");
    let base = &path[0..5]; // equals "/user"
    println!("{}", base);
}`,
          exercise: {
            prompt: `Given let full_url = String::from("https://api.site.com");, create a slice called protocol containing just "https".`,
            starterCode: `fn main() {
    let full_url = String::from("https://api.site.com");
    // Create slice
}`,
            solution: `fn main() {
    let full_url = String::from("https://api.site.com");
    let protocol = &full_url[0..5];
}`,
            tests: [
              { type: "contains", value: "&full_url[0..5];" }
            ],
            debuggingTip: `Slice indices refer to bytes. "https" is 5 bytes, so the range is 0 to 5.`
          }
        },
        {
          id: "rust-module2-m1-l5",
          title: "Shadowing vs Mutability",
          explanation: `You can declare a new variable with the same name as a previous one, effectively "shadowing" it. This is useful for changing a variable's type without needing a new name.`,
          concept: `let x = "123";
let x = x.len();
Shadowing changes type safely`,
          example: `fn main() {
    let port_str = "8080";
    let port_str: i32 = port_str.parse().unwrap();
    println!("{}", port_str);
}`,
          exercise: {
            prompt: `Shadow a variable spaces defined as " " by re-declaring it as a usize equal to its length.`,
            starterCode: `fn main() {
    let spaces = " ";
    // Shadow spaces here
}`,
            solution: `fn main() {
    let spaces = " ";
    let spaces = spaces.len();
}`,
            tests: [
              { type: "contains", value: "let spaces = spaces.len();" }
            ],
            debuggingTip: `You must use the let keyword again to shadow a variable.`
          }
        }
      ]
    },
    {
      id: "rust-module3-m1",
      title: "Module 3 — Structuring Your Data",
      duration: "60 min",
      lessons: [
        {
          id: "rust-module3-m1-l1",
          title: "Defining Structs",
          explanation: `Structs let you map out custom data architectures by grouping related values under a single name. They're similar to classes but without methods by default.`,
          concept: `struct Name {
    field: Type,
}
Define outside functions
Fields separated by commas`,
          example: `struct ServerConfig {
    port: i32,
    is_active: bool,
}

fn main() {
    let server = ServerConfig {
        port: 3000,
        is_active: true,
    };
}`,
          exercise: {
            prompt: `Define a User struct with a username (String) and a sign_in_count (u64).`,
            starterCode: `// Define User struct here

fn main() {
}`,
            solution: `struct User {
    username: String,
    sign_in_count: u64,
}

fn main() {
}`,
            tests: [
              { type: "contains", value: "struct User" },
              { type: "contains", value: "username: String" },
              { type: "contains", value: "sign_in_count: u64" }
            ],
            debuggingTip: `Struct fields are separated by commas.`
          }
        },
        {
          id: "rust-module3-m1-l2",
          title: "Struct Methods (Impl Blocks)",
          explanation: `You can attach functions directly to structs using an impl block. The first parameter is usually &self, which borrows the struct without taking ownership.`,
          concept: `impl StructName {
    fn method(&self) { ... }
}
&self - Immutable borrow
&mut self - Mutable borrow`,
          example: `struct ServerConfig {
    port: i32,
}

impl ServerConfig {
    fn print_port(&self) {
        println!("Running on {}", self.port);
    }
}`,
          exercise: {
            prompt: `Write an impl block for User with a method increment_logins that takes &mut self and adds 1 to sign_in_count.`,
            starterCode: `struct User {
    sign_in_count: u64,
}

// Write impl block here

fn main() {
}`,
            solution: `struct User {
    sign_in_count: u64,
}

impl User {
    fn increment_logins(&mut self) {
        self.sign_in_count += 1;
    }
}

fn main() {
}`,
            tests: [
              { type: "contains", value: "impl User" },
              { type: "contains", value: "&mut self" },
              { type: "contains", value: "self.sign_in_count += 1" }
            ],
            debuggingTip: `Methods that modify the struct must use &mut self.`
          }
        },
        {
          id: "rust-module3-m1-l3",
          title: "Enums",
          explanation: `Enums allow you to define a type by enumerating its possible variants. Great for defining HTTP methods or connection states.`,
          concept: `enum Name {
    VariantA,
    VariantB,
}
Define possible states`,
          example: `enum HttpMethod {
    Get,
    Post,
    Put,
    Delete,
}

enum Status {
    Active,
    Inactive,
}`,
          exercise: {
            prompt: `Define an enum Command with variants Start, Stop, and Restart.`,
            starterCode: `// Define Command enum here

fn main() {
}`,
            solution: `enum Command {
    Start,
    Stop,
    Restart,
}

fn main() {
}`,
            tests: [
              { type: "contains", value: "enum Command" },
              { type: "contains", value: "Start" },
              { type: "contains", value: "Stop" },
              { type: "contains", value: "Restart" }
            ],
            debuggingTip: `Variants don't have types attached unless you use parentheses like Variant(String).`
          }
        },
        {
          id: "rust-module3-m1-l4",
          title: "The Match Control Flow",
          explanation: `match allows you to compare a value against a series of patterns. It is exhaustive, meaning you must handle every variant of an Enum.`,
          concept: `match value {
    Pattern => action,
    _ => default,
}
Must handle all variants
_ is the wildcard`,
          example: `enum HttpMethod {
    Get,
    Post,
}

fn execute(method: HttpMethod) {
    match method {
        HttpMethod::Get => println!("Reading data"),
        HttpMethod::Post => println!("Writing data"),
    }
}`,
          exercise: {
            prompt: `Write a match expression for a variable cmd (type Command) that prints "Starting..." for Start, "Stopping..." for Stop, and "Restarting..." for Restart.`,
            starterCode: `enum Command {
    Start,
    Stop,
    Restart,
}

fn execute(cmd: Command) {
    // Write match here
}

fn main() {
}`,
            solution: `enum Command {
    Start,
    Stop,
    Restart,
}

fn execute(cmd: Command) {
    match cmd {
        Command::Start => println!("Starting..."),
        Command::Stop => println!("Stopping..."),
        Command::Restart => println!("Restarting..."),
    }
}

fn main() {
}`,
            tests: [
              { type: "contains", value: "match cmd" },
              { type: "contains", value: "Command::Start =>" }
            ],
            debuggingTip: `If you forget a variant, the compiler will refuse to build.`
          }
        },
        {
          id: "rust-module3-m1-l5",
          title: "The Option Enum",
          explanation: `Rust doesn't have null. Instead, it uses Option<T> to handle values that might be missing (like an undefined API key).`,
          concept: `enum Option<T> {
    Some(T),
    None,
}
Some(value) - Has value
None - No value`,
          example: `fn main() {
    let api_key: Option<String> = Some(String::from("key_123"));
    let missing_key: Option<String> = None;
}`,
          exercise: {
            prompt: `Create a variable dns_record of type Option<&str> and assign it Some("192.168.1.1").`,
            starterCode: `fn main() {
    // Create Option variable
}`,
            solution: `fn main() {
    let dns_record: Option<&str> = Some("192.168.1.1");
}`,
            tests: [
              { type: "contains", value: "Option<&str>" },
              { type: "contains", value: "Some(\"192.168.1.1\")" }
            ],
            debuggingTip: `None requires a type annotation because the compiler can't guess what type is missing.`
          }
        }
      ]
    },
    {
      id: "rust-module4-m1",
      title: "Module 4 — Error Handling & Collections",
      duration: "70 min",
      lessons: [
        {
          id: "rust-module4-m1-l1",
          title: "Vectors",
          explanation: `Vectors (Vec<T>) allow you to store a dynamic, growable list of items of the same type sequentially in memory.`,
          concept: `let mut v = vec![1, 2, 3];
v.push(4);
v.len() - Get length`,
          example: `fn main() {
    let mut active_endpoints = vec!["/home", "/about"];
    active_endpoints.push("/dashboard");
    println!("{:?}", active_endpoints);
}`,
          exercise: {
            prompt: `Create a mutable vector pids containing integers 101 and 102. Push 103 into the vector on the next line.`,
            starterCode: `fn main() {
    // Create and modify vector
}`,
            solution: `fn main() {
    let mut pids = vec![101, 102];
    pids.push(103);
}`,
            tests: [
              { type: "contains", value: "vec![101, 102]" },
              { type: "contains", value: "pids.push(103)" }
            ],
            debuggingTip: `Use the vec! macro for quick initialization.`
          }
        },
        {
          id: "rust-module4-m1-l2",
          title: "Deep Dive into Strings",
          explanation: `String is a growable, heap-allocated data structure, whereas &str is an immutable view into string data. Knowing the difference is crucial.`,
          concept: `String - Mutable, growable
&str - String slice, read-only
String::from("text") - Create String`,
          example: `fn main() {
    let mut log = String::from("Error: ");
    log.push_str("Timeout");
    println!("{}", log);
}`,
          exercise: {
            prompt: `Create a String called message with the value "Task ", then use .push_str() to append "complete!".`,
            starterCode: `fn main() {
    // Create and append string
}`,
            solution: `fn main() {
    let mut message = String::from("Task ");
    message.push_str("complete!");
}`,
            tests: [
              { type: "contains", value: "String::from(\"Task \")" },
              { type: "contains", value: ".push_str(\"complete!\")" }
            ],
            debuggingTip: `Single characters use .push('c'), while multiple characters use .push_str("string").`
          }
        },
        {
          id: "rust-module4-m1-l3",
          title: "HashMaps",
          explanation: `HashMaps store values by keys. Useful for mapping configurations or catching identical keys across different platforms.`,
          concept: `use std::collections::HashMap;
let mut map = HashMap::new();
map.insert(key, value);`,
          example: `use std::collections::HashMap;

fn main() {
    let mut keys = HashMap::new();
    keys.insert("turnstile", "0x4AAAA");
    println!("{:?}", keys);
}`,
          exercise: {
            prompt: `Create a HashMap named config, then insert the key "theme" with the value "dark".`,
            starterCode: `use std::collections::HashMap;

fn main() {
    // Create and insert
}`,
            solution: `use std::collections::HashMap;

fn main() {
    let mut config = HashMap::new();
    config.insert("theme", "dark");
}`,
            tests: [
              { type: "contains", value: "HashMap::new()" },
              { type: "contains", value: "config.insert(\"theme\", \"dark\")" }
            ],
            debuggingTip: `You must explicitly import HashMap using use std::collections::HashMap;`
          }
        },
        {
          id: "rust-module4-m1-l4",
          title: "Unrecoverable Errors (Panic)",
          explanation: `Sometimes a script lacks essential configuration to proceed. The panic! macro stops execution instantly and prints an error message.`,
          concept: `panic!("message");
Stops execution
For critical errors only`,
          example: `fn main() {
    let has_auth = false;
    if !has_auth {
        panic!("Critical: Missing Auth Token");
    }
}`,
          exercise: {
            prompt: `Write an if statement checking if port_open is false. If it is false, panic! with the message "Port blocked".`,
            starterCode: `fn main() {
    let port_open = false;
    // Write panic check here
}`,
            solution: `fn main() {
    let port_open = false;
    if !port_open {
        panic!("Port blocked");
    }
}`,
            tests: [
              { type: "contains", value: "if !port_open" },
              { type: "contains", value: "panic!(\"Port blocked\")" }
            ],
            debuggingTip: `panic! is for bugs or missing critical infrastructure, not for normal validation errors.`
          }
        },
        {
          id: "rust-module4-m1-l5",
          title: "The Result Enum",
          explanation: `For recoverable errors (like a failing API request), use Result<T, E>. It returns Ok(value) or Err(error).`,
          concept: `enum Result<T, E> {
    Ok(T),
    Err(E),
}
match fetch_data() { Ok(d) => ... }`,
          example: `use std::fs::File;

fn main() {
    let f = File::open("config.toml");
    let file = match f {
        Ok(file) => file,
        Err(error) => panic!("File missing!"),
    };
}`,
          exercise: {
            prompt: `Given a function fetch_data() that returns Result<String, String>, match on it. If Ok(data), print the data. If Err(e), print the error.`,
            starterCode: `// Assume fetch_data() exists
fn main() {
    // match fetch_data() { ... }
}`,
            solution: `fn main() {
    match fetch_data() {
        Ok(data) => println!("{}", data),
        Err(e) => println!("{}", e),
    }
}`,
            tests: [
              { type: "contains", value: "Ok(data) =>" },
              { type: "contains", value: "Err(e) =>" }
            ],
            debuggingTip: `Both Ok and Err branches must return the same type if assigning to a variable.`
          }
        }
      ]
    },
    {
      id: "rust-module5-m1",
      title: "Module 5 — Project Organization & Generics",
      duration: "80 min",
      lessons: [
        {
          id: "rust-module5-m1-l1",
          title: "Modules and Visibility",
          explanation: `Modules (mod) organize code into nested namespaces. By default, items in a module are private unless marked with pub.`,
          concept: `mod name { ... }
pub fn function() {}
Private by default`,
          example: `mod network {
    pub fn connect() {
        println!("Connected");
    }
}

fn main() {
    network::connect();
}`,
          exercise: {
            prompt: `Create a module called database containing a public function query that prints "Searching...".`,
            starterCode: `// Create module here

fn main() {
}`,
            solution: `mod database {
    pub fn query() {
        println!("Searching...");
    }
}

fn main() {
}`,
            tests: [
              { type: "contains", value: "mod database" },
              { type: "contains", value: "pub fn query" }
            ],
            debuggingTip: `Without pub, calling database::query() will throw a visibility error.`
          }
        },
        {
          id: "rust-module5-m1-l2",
          title: "Cargo and External Crates",
          explanation: `Cargo manages your dependencies. You add external libraries (crates) to your Cargo.toml file to pull in pre-built tools.`,
          concept: `[dependencies]
serde = "1.0"
reqwest = "0.11"`,
          example: `# In Cargo.toml file
[dependencies]
serde = "1.0"
serde_json = "1.0"`,
          exercise: {
            prompt: `Format a Cargo.toml dependencies block adding the clap crate at version 4.0.`,
            starterCode: `# Add dependency section`,
            solution: `[dependencies]
clap = "4.0"`,
            tests: [
              { type: "contains", value: "[dependencies]" },
              { type: "contains", value: "clap = \"4.0\"" }
            ],
            debuggingTip: `TOML configuration blocks must use square brackets.`
          }
        },
        {
          id: "rust-module5-m1-l3",
          title: "Generic Types",
          explanation: `Generics let you write flexible functions or structs that can handle different data shapes without duplicating code.`,
          concept: `fn name<T>(param: T) { ... }
struct Response<T> { data: T }
<T> is a type parameter`,
          example: `struct Response<T> {
    data: T,
    status: i32,
}

fn main() {
    let int_response = Response { data: 42, status: 200 };
    let str_response = Response { data: "success", status: 200 };
}`,
          exercise: {
            prompt: `Write a generic function return_item<T> that takes a parameter item of type T and returns it.`,
            starterCode: `// Write generic function here

fn main() {
}`,
            solution: `fn return_item<T>(item: T) -> T {
    item
}

fn main() {
}`,
            tests: [
              { type: "contains", value: "<T>" },
              { type: "contains", value: "item: T" }
            ],
            debuggingTip: `The type parameter <T> must be declared immediately after the function name.`
          }
        },
        {
          id: "rust-module5-m1-l4",
          title: "Traits (Shared Behavior)",
          explanation: `Traits define shared behavior (interfaces) that multiple types can implement. This allows for polymorphic designs.`,
          concept: `trait Name {
    fn method(&self);
}
Defines interface
No implementation`,
          example: `trait Deployable {
    fn deploy(&self);
}

struct App;

impl Deployable for App {
    fn deploy(&self) {
        println!("Deploying...");
    }
}`,
          exercise: {
            prompt: `Define a trait Loggable with a method signature fn print_log(&self);`,
            starterCode: `// Define trait here

fn main() {
}`,
            solution: `trait Loggable {
    fn print_log(&self);
}

fn main() {
}`,
            tests: [
              { type: "contains", value: "trait Loggable" },
              { type: "contains", value: "fn print_log(&self);" }
            ],
            debuggingTip: `Method signatures inside a trait end with a semicolon instead of curly braces.`
          }
        },
        {
          id: "rust-module5-m1-l5",
          title: "Lifetimes Intro",
          explanation: `Lifetimes ensure that references are valid as long as they are needed. You annotate them with a tick mark ('a) to tie the lifespans of parameters together.`,
          concept: `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str
'a - Lifetime parameter
Ties lifespans together`,
          example: `fn extract_path<'a>(url: &'a str) -> &'a str {
    &url[1..5]
}

fn main() {
    let url = "http://example.com";
    let path = extract_path(url);
}`,
          exercise: {
            prompt: `Write a function signature fn get_first<'a> taking a parameter s: &'a str and returning &'a str.`,
            starterCode: `// Write function signature only

fn main() {
}`,
            solution: `fn get_first<'a>(s: &'a str) -> &'a str {
    &s[0..1]
}

fn main() {
}`,
            tests: [
              { type: "contains", value: "<'a>" },
              { type: "contains", value: "&'a str" }
            ],
            debuggingTip: `Lifetimes don't change how long a reference lives; they just explain the relationship to the compiler.`
          }
        }
      ]
    },
    {
      id: "rust-module6-m1",
      title: "Module 6 — Iterators, Closures & Concurrency",
      duration: "75 min",
      lessons: [
        {
          id: "rust-module6-m1-l1",
          title: "Closures",
          explanation: `Closures are anonymous, inline functions that can capture their surrounding environment. Great for quick data manipulation.`,
          concept: `let add_tax = |price: i32| price + 5;
|param| { action }
Closure syntax with pipes`,
          example: `fn main() {
    let add_tax = |price: i32| price + 5;
    println!("{}", add_tax(10));
}`,
          exercise: {
            prompt: `Create a closure assigned to the variable double that takes a parameter x and returns x * 2.`,
            starterCode: `fn main() {
    // let double = ...
}`,
            solution: `fn main() {
    let double = |x| x * 2;
}`,
            tests: [
              { type: "contains", value: "|x|" },
              { type: "contains", value: "x * 2" }
            ],
            debuggingTip: `Closures use pipe characters | instead of parentheses for parameters.`
          }
        },
        {
          id: "rust-module6-m1-l2",
          title: "Iterators",
          explanation: `Iterators allow you to chain operations like .map() and .filter() over collections in a highly optimized way.`,
          concept: `vec.iter().map(|x| x + 1).collect();
.iter() - Iterate
.map() - Transform
.collect() - Gather results`,
          example: `fn main() {
    let nums = vec![1, 2, 3];
    let doubled: Vec<i32> = nums.iter().map(|x| x * 2).collect();
    println!("{:?}", doubled);
}`,
          exercise: {
            prompt: `Given a vector v = vec![1, 2, 3], chain .into_iter(), .map(|x| x * 10), and .collect() to create a new Vec<i32> named tens.`,
            starterCode: `fn main() {
    let v = vec![1, 2, 3];
    // Create tens vector
}`,
            solution: `fn main() {
    let v = vec![1, 2, 3];
    let tens: Vec<i32> = v.into_iter().map(|x| x * 10).collect();
}`,
            tests: [
              { type: "contains", value: ".map(|x| x * 10)" },
              { type: "contains", value: ".collect()" }
            ],
            debuggingTip: `You often must type-annotate the variable accepting .collect().`
          }
        },
        {
          id: "rust-module6-m1-l3",
          title: "Automated Tests",
          explanation: `Rust has a built-in test framework. You annotate functions with #[test] and use assert_eq! to verify logic.`,
          concept: `#[test]
fn name() {
    assert_eq!(a, b);
}`,
          example: `#[test]
fn checks_port() {
    assert_eq!(3000, 3000);
}

#[test]
#[should_panic]
fn will_fail() {
    panic!("Expected");
}`,
          exercise: {
            prompt: `Write a test function named math_works annotated with #[test] that asserts 2 + 2 equals 4.`,
            starterCode: `// Write test here`,
            solution: `#[test]
fn math_works() {
    assert_eq!(4, 2 + 2);
}`,
            tests: [
              { type: "contains", value: "#[test]" },
              { type: "contains", value: "assert_eq!(4, 2 + 2);" }
            ],
            debuggingTip: `Without the #[test] attribute, cargo test will ignore it.`
          }
        },
        {
          id: "rust-module6-m1-l4",
          title: "Spawning Threads",
          explanation: `Rust makes fearless concurrency possible. Use thread::spawn to run tasks in the background without blocking the main terminal.`,
          concept: `use std::thread;
thread::spawn(|| { ... });
Lightweight async task`,
          example: `use std::thread;

fn main() {
    thread::spawn(|| {
        println!("Running async background task");
    });
}`,
          exercise: {
            prompt: `Spawn a thread using a closure that prints "Background worker active".`,
            starterCode: `use std::thread;

fn main() {
    // Spawn thread here
}`,
            solution: `use std::thread;

fn main() {
    thread::spawn(|| {
        println!("Background worker active");
    });
}`,
            tests: [
              { type: "contains", value: "thread::spawn" },
              { type: "contains", value: "println!(\"Background worker active\")" }
            ],
            debuggingTip: `If the main thread finishes before the spawned thread, the spawned thread terminates instantly.`
          }
        },
        {
          id: "rust-module6-m1-l5",
          title: "Message Passing (Channels)",
          explanation: `To communicate safely between threads, use a channel (mpsc). Threads can send data into the transmitter, and the main thread receives it.`,
          concept: `use std::sync::mpsc;
let (tx, rx) = mpsc::channel();
tx.send(value).unwrap();
rx.recv().unwrap()`,
          example: `use std::sync::mpsc;

fn main() {
    let (tx, rx) = mpsc::channel();
    tx.send("Task Done").unwrap();
    println!("{}", rx.recv().unwrap());
}`,
          exercise: {
            prompt: `Create a channel, use tx.send(100).unwrap(), then store rx.recv().unwrap() in a variable result.`,
            starterCode: `use std::sync::mpsc;

fn main() {
    // Create channel, send, and receive
}`,
            solution: `use std::sync::mpsc;

fn main() {
    let (tx, rx) = mpsc::channel();
    tx.send(100).unwrap();
    let result = rx.recv().unwrap();
}`,
            tests: [
              { type: "contains", value: "mpsc::channel()" },
              { type: "contains", value: "rx.recv().unwrap()" }
            ],
            debuggingTip: `send and recv both return Results, which is why .unwrap() is used in quick setups.`
          }
        }
      ]
    },
    {
      id: "rust-module7-m1",
      title: "Module 7 — The Capstone Build (CLI Tool)",
      duration: "120 min",
      lessons: [
        {
          id: "rust-module7-m1-l1",
          title: "Architecture and Argument Parsing",
          explanation: `Professional CLI tools accept structured flags instead of hardcoded strings. The clap crate automatically maps terminal inputs to structs.`,
          concept: `use clap::Parser;
#[derive(Parser)]
struct Args { field: Type }`,
          example: `use clap::Parser;

#[derive(Parser)]
struct Args {
    domain: String,
}

fn main() {
    let args = Args::parse();
}`,
          exercise: {
            prompt: `Define a struct Args with a #[derive(Parser)] attribute containing a single field target of type String.`,
            starterCode: `use clap::Parser;

// Define struct here

fn main() {
}`,
            solution: `use clap::Parser;

#[derive(Parser)]
struct Args {
    target: String,
}

fn main() {
}`,
            tests: [
              { type: "contains", value: "#[derive(Parser)]" },
              { type: "contains", value: "target: String" }
            ],
            debuggingTip: `The Parser trait must be explicitly imported for the derive macro to work.`
          }
        },
        {
          id: "rust-module7-m1-l2",
          title: "I/O and File Reading",
          explanation: `Your CLI will likely need to read configuration or data files via standard I/O.`,
          concept: `use std::fs;
fs::read_to_string(path)
Returns Result<String, Error>`,
          example: `use std::fs;

fn main() {
    let config = fs::read_to_string(".env")
        .expect("Missing .env file");
    println!("{}", config);
}`,
          exercise: {
            prompt: `Read a file named "data.json" into a variable json. Use .expect() to panic with "File not found" if it fails.`,
            starterCode: `use std::fs;

fn main() {
    // Read file here
}`,
            solution: `use std::fs;

fn main() {
    let json = fs::read_to_string("data.json")
        .expect("File not found");
}`,
            tests: [
              { type: "contains", value: "fs::read_to_string(\"data.json\")" },
              { type: "contains", value: ".expect(\"File not found\")" }
            ],
            debuggingTip: `.expect() is generally discouraged in production unless a missing file legitimately kills the architecture.`
          }
        },
        {
          id: "rust-module7-m1-l3",
          title: "Bulletproof Error Handling",
          explanation: `Instead of crashing with .unwrap(), professional Rust applications return a Result from main and use the ? operator to pass errors upstream gracefully.`,
          concept: `fn main() -> Result<(), Box<dyn Error>>
? operator - Propagate errors
Ok(()) - Success`,
          example: `use std::error::Error;

fn main() -> Result<(), Box<dyn Error>> {
    let data = std::fs::read_to_string("missing.txt")?;
    println!("{}", data);
    Ok(())
}`,
          exercise: {
            prompt: `Change fn main() to return Result<(), Box<dyn std::error::Error>>. End the function with Ok(()).`,
            starterCode: `use std::error::Error;

fn main() {
}`,
            solution: `use std::error::Error;

fn main() -> Result<(), Box<dyn Error>> {
    Ok(())
}`,
            tests: [
              { type: "contains", value: "Result<(), Box<dyn" },
              { type: "contains", value: "Ok(())" }
            ],
            debuggingTip: `If you change the return type to Result, you must actually return an Ok wrapped value.`
          }
        },
        {
          id: "rust-module7-m1-l4",
          title: "Integration Testing",
          explanation: `Before deployment, verify edge cases. You can create a test module that pulls in your main logic using use super::*;`,
          concept: `#[cfg(test)]
mod tests {
    use super::*;
}
Tests only compile with cargo test`,
          example: `fn parse_input(s: &str) -> bool {
    s.len() > 0
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn valid_input() {
        assert!(parse_input("abc"));
    }
}`,
          exercise: {
            prompt: `Write a test module containing a test is_true that asserts true using assert!(true);`,
            starterCode: `// Write test module here`,
            solution: `#[cfg(test)]
mod tests {
    #[test]
    fn is_true() {
        assert!(true);
    }
}`,
            tests: [
              { type: "contains", value: "#[cfg(test)]" },
              { type: "contains", value: "assert!(true);" }
            ],
            debuggingTip: `The #[cfg(test)] attribute tells the compiler to only compile that code with cargo test.`
          }
        },
        {
          id: "rust-module7-m1-l5",
          title: "Optimization and Compilation Profiles",
          explanation: `To make your agent or backend lightweight and fast, modify Cargo's release profile. This strips out debug symbols and optimizes memory.`,
          concept: `[profile.release]
opt-level = 3
lto = true
strip = true`,
          example: `# In Cargo.toml
[profile.release]
opt-level = 3
lto = true
strip = true
codegen-units = 1`,
          exercise: {
            prompt: `Add a [profile.release] section to a Cargo.toml file, setting lto to true and strip to true.`,
            starterCode: `[package]
name = "cli_tool"
version = "1.0.0"

# Add release profile`,
            solution: `[package]
name = "cli_tool"
version = "1.0.0"

[profile.release]
lto = true
strip = true`,
            tests: [
              { type: "contains", value: "[profile.release]" },
              { type: "contains", value: "lto = true" },
              { type: "contains", value: "strip = true" }
            ],
            debuggingTip: `lto stands for Link Time Optimization, which reduces binary size at the cost of compilation time.`
          }
        }
      ]
    }
  ]
};
