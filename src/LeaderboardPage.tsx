import React, { useState, useEffect } from 'react';

const LeaderboardPage: React.FC = () => {
  const [players, setPlayers] = useState([
    { name: 'Max Mustermann', points: 1200, rank: 1 },
    { name: 'Julia Schmidt', points: 1100, rank: 2 },
    { name: 'Niklas Bauer', points: 1000, rank: 3 },
    // ...weitere Spieler
  ]);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Einfache Animation beim Mounten der Komponente
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mt-5" style={{ opacity: fadeIn ? 1 : 0, transition: 'opacity 1s' }}>
      <h2 className="text-center mb-4" style={{ color: '#007bff' }}>Leaderboard</h2>
      <table className="table" style={{ backgroundColor: '#f8f9fa', borderRadius: '0.25rem', overflow: 'hidden', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)' }}>
        <thead style={{ backgroundColor: '#007bff', color: 'white' }}>
          <tr>
            <th>Ranking</th>
            <th>Spielername</th>
            <th>Gesammelte Punkte</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.name} style={{ borderBottom: '1px solid #dee2e6' }}>
              <td>{player.rank}</td>
              <td>{player.name}</td>
              <td>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardPage;



/*
import express from 'express';
import mysql from 'mysql saud '; // oder entsprechender Treiber für Ihre Datenbank

const app = express();
const port = 5173;

// Konfigurieren Sie hier Ihre Datenbankverbindung
const dbConfig = {
  host: 'localhost',
  user: 'rootSaud',
  password: '123456789',
  database: 'projekt2'
};

app.get('/leaderboard', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.query('SELECT name, points FROM spieler ORDER BY points DESC');
    res.json(rows);
    await connection.end();
  } catch (error) {
    console.error(error);
    res.status(500).send('Serverfehler');
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf hhttp://localhost:5173/}`);
});
*/