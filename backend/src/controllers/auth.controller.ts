import db from "../config/db_connection.ts";
import { Request, Response, NextFunction } from "express";
import bcryptjs from "bcryptjs";
import { RowDataPacket } from "mysql2";
import { errorHandler } from "../utils/error.ts";

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { firstname, lastname, nickname, email, password, confirmPassword } = req.body;
        
        const hashedPassword = bcryptjs.hashSync(password, 10);

        if(password !== confirmPassword) {
            return res.status(400).json({message: "Passwort stimmen nicht überein."});
        }

        // Insert the user into the database
        const query = `INSERT INTO benutzer (vorname, nachname, benutzername, email, passwort) VALUES (?, ?, ?, ?, ?)`;

        // Check if the user already exits
        const checkQuery = `SELECT * FROM benutzer WHERE email = ?`;
        const [rows] = await db.promise().query<RowDataPacket[]>(checkQuery, [email]);
        if (rows.length > 0) {
            return res.status(400).json({message: "Benutzer mit dieser Email existiert bereits."});
        }
        // check valid email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({message: "Ungültige Email."});
        }
        // Überprüfung ob der Benutzername bereits existiert
        const checkUsernameQuery = `SELECT * FROM benutzer WHERE benutzername = ?`;
        const [usernameRows] = await db.promise().query<RowDataPacket[]>(checkUsernameQuery, [nickname]);
        if (usernameRows.length > 0) {
            return res.status(400).json({message: "Benutzername existiert bereits."});
        }

        // Neuen Benutzer in die Datenbank einfügen
        await db.promise().query(query, [firstname, lastname, nickname, email, hashedPassword]);
        res.status(201).json({message: "Benutzer erfolgreich erstellt."});

    } catch (error) {
        next(error);
    }
    
};