import express from "express";

const app = express();

const port = 3008;

app.get("/", (req, res) => {
    res.send("Typescript and Express works!");
});

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
    
})
console.log("Hello Typescript!");