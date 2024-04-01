import { toast } from "react-toastify";

export const saveLevelScore = async (userId, score) => {
    try {
      // Hier nehmen wir an, dass 'userId' und 'score' verfügbar sind
      // 'userId' muss aus dem aktuellen Benutzerzustand oder einer ähnlichen Quelle bezogen werden
    //   const userId = currentUser.benutzer_ID; // Stellen Sie sicher, dass dies der richtige Pfad zur Benutzer-ID ist
      const response = await fetch(`/api/progress/save-progress/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ points: score }),
      });
  
      if (!response.ok) {
        throw new Error('Fehler beim Speichern des Scores');
      }
  
      // Verarbeitung der Serverantwort
      const data = await response.json();
      console.log('Score erfolgreich gespeichert:', data);
      toast.success('Deine Punkte wurden gespeichert!');
  
    } catch (error) {
      console.error('Fehler beim Speichern des Levelscores:', error);
      toast.error('Fehler beim Speichern der Punkte.');
    }
  };