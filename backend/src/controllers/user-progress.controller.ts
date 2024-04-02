import { RowDataPacket } from "mysql2";
import db from "../config/db_connection.ts";
import { Request, Response, NextFunction} from "express";

export const getUserProgress = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.userId;
        console.log(userId)
        const query = `SELECT erg_punkte FROM ergebnisse WHERE benutzer_ID = ?`;
        console.log(query);
        
        const [rows] = await db.promise().query<RowDataPacket[]>(query, [userId]);

        if(rows.length === 0) {
            return res.status(404).json({message: "No progress found for this user."})
        }
        
        return res.status(200).json(rows[0]);
    } catch (error) {
        next(error);
    }
}

export const updateUserProgress = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.userId;
        const { points } = req.body;

        const [existingPoints] = await db.promise().query<RowDataPacket[]>('SELECT erg_punkte FROM ergebnisse WHERE benutzer_ID = ?', [userId]);

        if (existingPoints.length > 0) {
            // update existing points
            await db.promise().query('UPDATE ergebnisse SET erg_punkte = erg_punkte + ? WHERE benutzer_ID = ?', [points, userId]);
        } else {
            await db.promise().query('INSERT INTO ergebnisse (benutzer_ID, erg_punkte) VALUES (?, ?)', [userId, points]);
        }

        // const query = `UPDATE ergebnisse SET erg_punkte + ? WHERE benutzer_ID = ?`;
        // await db.promise().query(query, [points, userId]);
        return res.status(200).json({message: "Punkte erfolgreich aktualisiert."});
    } catch (error) {
        next(error);
    }
}

// Punkte des Spielers werden am Ende des Levels gespeichert
export const saveUserProgress = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.userId;
        const { points } = req.body;
        const query = `INSERT INTO ergebnisse (benutzer_ID, erg_punkte) VALUES (?, ?)`;
        await db.promise().query(query, [userId, points]);
        return res.status(200).json({message: "Punkte erfolgreich gespeichert."});
    } catch (error) {
        next(error);
    }
};