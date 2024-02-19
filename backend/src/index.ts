import express from "express";
import db from "./config/db_connection.ts"
import { Request, Response, NextFunction } from "express";
import userRoutes from "./routes/user.route.ts"
import authRoutes from "./routes/auth.route.ts"

const app = express();
app.use(express.json())

console.log(process.env.DB_NAME);

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

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

interface CustomError extends Error {
    statusCode?: number;
  }
  
  app.use((error: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    return res.status(statusCode).json({
      sucess: false,
      message,
      statusCode,
    })
  })

export default app;