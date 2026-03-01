# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

---

## Question 1: Server Basics

What does it mean for a server to be "listening"? In your answer, explain the roles of **host**, **port**, and **localhost**.

**Your answer here**: A server is **"listening"** when it's actively waiting for an HTTP request bound to a specific **port** on a **host** machine. For instance, **localhost** refers to your own computer (`127.0.0.1`), which is the address a client (like your browser) sends an HTTP request to. The **port** (e.g. `8080`) is the specific "door" on the host machine where the server recieves those requests.

---

## Question 2: req and res

In the callback passed to `http.createServer((req, res) => { ... })`, what are `req` and `res`? Give at least one example of a property or method from each, and explain what it does.

**Your answer here**: `req` represents the request information such as:
- the type of `.method` (`GET`, `POST`, `PATCH`, `DELETE`) or 
- the `.url` or path (`api/meme`).

`res` refers to the response sent back to the client by the server. Some common methods are:
- `.writeHead` containing information such as the `status code`, and the `content-type`
- `.end` refers to the end of the response, which contains a string representation of the data given back to the client.

---

## Question 3: Routing

What is **routing** in the context of a server, and how do you implement it using `node:http`? Why is it important to use `return` after calling `res.end()`?

**Your answer here**: **routing** refers to how a server handles different HTTP methods and url paths. Conditional statements such as `if-else` statements are used to handle multiple routes. After every conditional it is important to use a `return` statement because it prevents the code from reaching another conditional block and triggering `.end()` method a second, causing an `Error write after end` error. This would mean that we tried to send two responses per request.
