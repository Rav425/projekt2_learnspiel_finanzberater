import db from '../config/db_connection.ts';
import { Request, Response } from 'express';

export const submitLevelResults = async (req: Request, res: Response) => {
    const { userId, earnedPoints } = req.body;

    try {
        const updateQuery = `
            UPDATE prj2_lernspiel_ergebnisse 
            SET erg_punkte = erg_punkte + ?
            WHERE benutzer_ID = ?
        `;

        await db.promise().execute(updateQuery, [earnedPoints, userId]);

        res.status(200).json({ message: 'Punkte erfolgreich aktualisiert.' });
    } catch (error) {
        res.status(500).json({ message: 'Fehler beim Aktualisieren der Punkte', error });
    }
};