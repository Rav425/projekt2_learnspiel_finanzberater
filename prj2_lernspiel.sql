-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 26. Mrz 2024 um 19:22
-- Server-Version: 5.7.39
-- PHP-Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `prj2_lernspiel`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `benutzer`
--

CREATE TABLE `benutzer` (
  `benutzer_ID` int(64) NOT NULL,
  `vorname` varchar(126) NOT NULL,
  `nachname` varchar(126) NOT NULL,
  `benutzername` varchar(126) NOT NULL,
  `email` varchar(126) NOT NULL,
  `profilbild` varchar(126) DEFAULT NULL,
  `passwort` varchar(126) NOT NULL,
  `benutzer_typ` enum('benutzer','admin') NOT NULL DEFAULT 'benutzer'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `benutzer`
--

INSERT INTO `benutzer` (`benutzer_ID`, `vorname`, `nachname`, `benutzername`, `email`, `profilbild`, `passwort`, `benutzer_typ`) VALUES
(1, 'John', 'Doe', 'johndoe', 'doe@test.com', '', '$2a$10$k45wUUCXlxcEAkaaobtGDergRJLtF.UBM9Zxs6tCOMDSDvPHPgPIq', 'benutzer'),
(2, 'John', 'Snow', 'john_snow', 'john.snow@gmail.com', NULL, '$2a$10$nNsCaALOMHMMba772aCuh.BpITwJHMt/ejrTSLp0zoLfpA9JeP.wu', 'benutzer');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ergebnisse`
--

CREATE TABLE `ergebnisse` (
  `erg_ID` int(11) NOT NULL,
  `benutzer_ID` int(11) NOT NULL,
  `erg_punkte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `ergebnisse`
--

INSERT INTO `ergebnisse` (`erg_ID`, `benutzer_ID`, `erg_punkte`) VALUES
(1, 1, 45);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `lernstoff`
--

CREATE TABLE `lernstoff` (
  `l_ID` int(11) NOT NULL,
  `l_bezeichnung` varchar(255) NOT NULL,
  `l_beschreibung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `lernstoffkategorie`
--

CREATE TABLE `lernstoffkategorie` (
  `lk_ID` int(11) NOT NULL,
  `lk_bezeichnung` varchar(255) NOT NULL,
  `l_ID` int(11) NOT NULL,
  `lk_beschreibung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `level`
--

CREATE TABLE `level` (
  `level_ID` int(11) NOT NULL,
  `level_bezeichnung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `level`
--

INSERT INTO `level` (`level_ID`, `level_bezeichnung`) VALUES
(1, 'Level 1'),
(2, 'Level 2'),
(3, 'Level 3');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `quizz_antworten`
--

CREATE TABLE `quizz_antworten` (
  `antwort_ID` int(11) NOT NULL,
  `frage_ID` int(11) NOT NULL,
  `antwort` varchar(255) NOT NULL,
  `richtige_antwort` tinyint(1) NOT NULL COMMENT '1: True, 0: False'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `quizz_antworten`
--

INSERT INTO `quizz_antworten` (`antwort_ID`, `frage_ID`, `antwort`, `richtige_antwort`) VALUES
(1, 1, 'Die Bereitstellung von Finanzdienstleistungen und -produkten durch Banken und andere Finanzinstitute an Unternehmen.', 1),
(2, 1, 'Die Verwaltung von Kapital und finanziellen Ressourcen innerhalb eines Unternehmens.', 0),
(3, 1, 'Die Bilanzierung und Berichterstattung über finanzielle Transaktionen in einem Unternehmen.', 0),
(4, 2, 'Richtig', 1),
(5, 2, 'False', 0),
(6, 3, 'Die Fähigkeit eines Unternehmens, langfristige Verbindlichkeiten zu begleichen.', 0),
(7, 3, 'Die Fähigkeit eines Unternehmens, kurzfristige Verbindlichkeiten mit vorhandenen liquiden Mitteln zu begleichen.', 1),
(8, 3, 'Die Fähigkeit eines Unternehmens, langfristige Investitionen zu tätigen.', 0),
(9, 4, 'Compliance bezeichnet die missbräuchliche Umgehung von Gesetzen und Richtlinien in Unternehmen und Organisationen, um wirtschaftliche Vorteile zu erlangen.', 0),
(10, 4, 'Compliance bezeichnet die konsequente Befolgung von Gesetzen, Richtlinien, Normen und freiwilligen Verpflichtungen in Unternehmen und Organisationen, um rechtliche und ethische Standards einzuhalten.', 1),
(11, 4, 'Compliance bezeichnet die Vernachlässigung von rechtlichen Vorgaben und ethischen Standards in Unternehmen und Organisationen, um Gewinne zu maximieren', 0),
(12, 5, 'Die Kreditwürdigkeit ist ein Maß dafür, wie zuverlässig ein potenzieller Kreditnehmer seine finanziellen Verpflichtungen erfüllen kann, und zielt darauf ab, das Risiko eines Zahlungsausfalls zu minimieren.', 1),
(13, 5, 'Die Kreditwürdigkeit bezeichnet die finanzielle Stabilität eines Kreditgebers und zielt darauf ab, den potenziellen Gewinn aus Kreditvergaben zu maximieren.', 0),
(14, 5, 'Die Kreditwürdigkeit ist eine rechtliche Regelung, die die Bedingungen für die Kreditvergabe festlegt und zielt darauf ab, die Verbraucher vor ausbeuterischen Kreditpraktiken zu schützen.', 0),
(15, 6, 'Richtig', 1),
(16, 6, 'Falsch', 0),
(17, 7, 'Staatsanleihen und Unternehmensanleihen', 1),
(18, 7, 'Aktienanleihen und Hybridanleihen', 0),
(19, 7, 'Pfandbriefe und Floater-Anleihen', 1),
(20, 7, 'Schuldverschreibungen und Wandelanleihen', 0),
(21, 7, 'Zerobonds (Nullkupon-Anleihen) und Anleihen mit variabler Verzinsung', 0);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `quizz_fragen`
--

CREATE TABLE `quizz_fragen` (
  `frage_ID` int(11) NOT NULL,
  `s_l_ID` int(11) NOT NULL,
  `frage` varchar(255) NOT NULL,
  `begruendung` longtext NOT NULL,
  `punkte` int(11) NOT NULL,
  `level_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `quizz_fragen`
--

INSERT INTO `quizz_fragen` (`frage_ID`, `s_l_ID`, `frage`, `begruendung`, `punkte`, `level_ID`) VALUES
(1, 1, 'Was ist Finanz im Geschäftskundenkontext? Bitte wählen Sie die richtige Antwort aus.', '', 5, 1),
(2, 1, 'Bietet Finanzberatung eine breite Palette von Beratungsaspekten an, darunter Versicherungs-, Vorsorge-, Vermögens- und Anlagenberatung, Immobilienberatung sowie Schuldnerberatung?', '', 5, 1),
(3, 1, 'Was umfasst die Bedeutung von Liquidität im Kontext eines Unternehmens? Bitte wählen Sie die richtige Antwort aus.', '', 5, 1),
(4, 1, 'Was bezeichnet Compliance und welche Bedeutung hat sie für Unternehmen und Organisationen? Wählen Sie die richtige Antwort aus. ', '', 5, 1),
(5, 1, 'Was ist die Kreditwürdigkeit und welches Ziel verfolgt sie?', '', 5, 1),
(6, 1, 'Die Investitionsbewertung ist entscheidend, um die Rentabilität und den Nutzen von Investitionen zu bewerten. Dafür werden Techniken wie die Kapitalwertmethode, die interne Zinsfußmethode und die Amortisationsdauer angewendet.', '', 5, 1),
(7, 1, 'Welche Arten von Anleihen gibt es? ', '', 5, 1);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  ADD PRIMARY KEY (`benutzer_ID`);

--
-- Indizes für die Tabelle `ergebnisse`
--
ALTER TABLE `ergebnisse`
  ADD PRIMARY KEY (`erg_ID`),
  ADD KEY `id` (`benutzer_ID`);

--
-- Indizes für die Tabelle `lernstoff`
--
ALTER TABLE `lernstoff`
  ADD PRIMARY KEY (`l_ID`);

--
-- Indizes für die Tabelle `lernstoffkategorie`
--
ALTER TABLE `lernstoffkategorie`
  ADD PRIMARY KEY (`lk_ID`),
  ADD KEY `l_ID` (`l_ID`);

--
-- Indizes für die Tabelle `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`level_ID`);

--
-- Indizes für die Tabelle `quizz_antworten`
--
ALTER TABLE `quizz_antworten`
  ADD PRIMARY KEY (`antwort_ID`),
  ADD KEY `frage_ID` (`frage_ID`);

--
-- Indizes für die Tabelle `quizz_fragen`
--
ALTER TABLE `quizz_fragen`
  ADD PRIMARY KEY (`frage_ID`),
  ADD KEY `level_ID` (`level_ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  MODIFY `benutzer_ID` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `ergebnisse`
--
ALTER TABLE `ergebnisse`
  MODIFY `erg_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `lernstoff`
--
ALTER TABLE `lernstoff`
  MODIFY `l_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `lernstoffkategorie`
--
ALTER TABLE `lernstoffkategorie`
  MODIFY `lk_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `level`
--
ALTER TABLE `level`
  MODIFY `level_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `quizz_antworten`
--
ALTER TABLE `quizz_antworten`
  MODIFY `antwort_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT für Tabelle `quizz_fragen`
--
ALTER TABLE `quizz_fragen`
  MODIFY `frage_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `ergebnisse`
--
ALTER TABLE `ergebnisse`
  ADD CONSTRAINT `ergebnisse_ibfk_1` FOREIGN KEY (`benutzer_ID`) REFERENCES `benutzer` (`benutzer_ID`);

--
-- Constraints der Tabelle `lernstoffkategorie`
--
ALTER TABLE `lernstoffkategorie`
  ADD CONSTRAINT `lernstoffkategorie_ibfk_1` FOREIGN KEY (`l_ID`) REFERENCES `lernstoff` (`l_ID`);

--
-- Constraints der Tabelle `quizz_antworten`
--
ALTER TABLE `quizz_antworten`
  ADD CONSTRAINT `quizz_antworten_ibfk_1` FOREIGN KEY (`frage_ID`) REFERENCES `quizz_fragen` (`frage_ID`);

--
-- Constraints der Tabelle `quizz_fragen`
--
ALTER TABLE `quizz_fragen`
  ADD CONSTRAINT `quizz_fragen_ibfk_1` FOREIGN KEY (`level_ID`) REFERENCES `level` (`level_ID`) ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
