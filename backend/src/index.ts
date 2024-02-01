import express from "express";
import dotenv from "dotenv";
import db from "./config/db_connection.ts"
dotenv.config({ path: './.env' })
import userRoutes from "./routes/user.route.ts"
const app = express();

console.log(process.env.PORT);

const port = process.env.PORT || 3008 ;

db.connect((err) => {
    if (err) {
        console.log(err);
    }else {
        console.log("Connected to MySQL DB 🔥");
    }
});

app.get("/", (req, res) => {
    res.send("Typescript and Express works!");
});

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
    
})

app.use('/api/user', userRoutes)

export default app;