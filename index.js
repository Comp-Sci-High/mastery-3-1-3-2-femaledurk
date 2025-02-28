// Step 0: Make sure you have Express installed (`npm install express`).

// Step 1: Import the Express module
const express = require ("express")
// Step 2: Create an instance of an Express application
const app = express ();


app.get ("/", (req,res)=>{
    res.send ("hello")
})
// Step 3: Start the server on port 3000
app.listen (3000,()=>{
    console.log("Server is running at http://localhost:3000")
})
// Step 4: Run this file, use the command: `node index.js`
