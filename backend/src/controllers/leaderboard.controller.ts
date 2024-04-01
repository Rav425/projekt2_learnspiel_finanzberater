import {Request, Response} from 'express';
import db from '../config/db_connection.ts';

export const getLeaderboard = async (req: Request, res: Response) => {
    try {
        const query = 'SELECT benutzer.vorname, ergebnisse.erg_punkte FROM ergebnisse JOIN benutzer ON ergebnisse.benutzer_ID = benutzer.benutzer_ID ORDER BY ergebnisse.erg_punkte DESC ';

        const [rows] = await db.promise().query(query);
        return res.status(200).json({leaderboard: rows});
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
}