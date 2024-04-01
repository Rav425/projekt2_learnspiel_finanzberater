import db from "../config/db_connection.ts";
import e, { Request, Response, NextFunction } from "express";
import bcryptjs from "bcryptjs";
import { RowDataPacket } from "mysql2";
import { errorHandler } from "../utils/error.ts";
import { generateToken } from "../utils/generateToken.ts";

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { firstname, lastname, username, email, password, confirmPassword } = req.body;

        if (!firstname || !lastname || !username || !email || !password || !confirmPassword) {
            return next(errorHandler(400, "Bitte füllen Sie alle Felder aus."));
        }
        
        const hashedPassword = bcryptjs.hashSync(password, 10);

        if(password !== confirmPassword) {
            return next(errorHandler(400, "Passwort stimmen nicht überein."));
        }

        // Insert the user into the database
        const query = `INSERT INTO benutzer (vorname, nachname, benutzername, email, passwort) VALUES (?, ?, ?, ?, ?)`;

        // Check if the user already exits
        const checkQuery = `SELECT * FROM benutzer WHERE email = ?`;
        const [rows] = await db.promise().query<RowDataPacket[]>(checkQuery, [email]);
        if (rows.length > 0) {
            return next(errorHandler(400, "Benutzer mit dieser Email existiert bereits."));
        }
        // check valid email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            return next(errorHandler(400, "Ungültige Email."));
        }
        // Überprüfung ob der Benutzername bereits existiert
        const checkUsernameQuery = `SELECT * FROM benutzer WHERE benutzername = ?`;
        const [usernameRows] = await db.promise().query<RowDataPacket[]>(checkUsernameQuery, [username]);
        if (usernameRows.length > 0) {
            return next(errorHandler(400, "Benutzername existiert bereits."));
        }

        // Neuen Benutzer in die Datenbank einfügen
        await db.promise().query(query, [firstname, lastname, username, email, hashedPassword]);
       return next(errorHandler(201, "Benutzer erfolgreich erstellt."));

    } catch (error) {
        next(error);
    }
    
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        const query = `SELECT * FROM benutzer WHERE benutzername = ?`;
        
        const [rows] = await db.promise().query<RowDataPacket[]>(query, [ username]);
        if (rows.length === 0) {
            return next(errorHandler(404, "Benutzer nicht gefunden."));
        }
        const user = rows[0];
        const passwordMatch = bcryptjs.compareSync(password, user.passwort);
        if (!passwordMatch) {
            return next(errorHandler(400, "Passwort ist falsch."));
        }
        generateToken(res, user.benutzer_ID);
        const { password: hashedPassword, ...rest } = rows[0];
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

export const logout =  (req: Request, res: Response) => {
    res.clearCookie("acces_token").status(200).json('Erfolgreich ausgeloggt');
}