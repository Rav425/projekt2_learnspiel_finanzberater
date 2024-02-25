import React from "react";
import aufbauBilanz from "../assets/aufbau der bilanz.png";
export default function Inhalt1() {
  return (
    <div className="text-center p-4">
      <h1 className="text-center font-bold text-4xl mb-5">
        Finanz, Finanzberatung, Bilanz, Cashflow
      </h1>
      <div className="flex justify-center gap-3">
        <div className="border-solid border-1 border-gray-500 w-1/2 p-3 h-fit">
          <h2 className="font-bold mb-3 text-3xl">Finanz</h2>
          <p className="text-left text-2xl">
            Im Geschäftskundenkontext kann "Finanz" auch die Bereitstellung von
            Finanzdienstleistungen und -produkten durch Banken und andere
            Finanzinstitute an Unternehmen umfassen. Dies beinhaltet Kredite,
            Handelsfinanzierungen, Cash-Management-Services, Risikomanagement
            und Kapitalmarktgeschäfte. Diese Finanzdienstleistungen zielen
            darauf ab, den finanziellen Bedarf von Geschäftskunden zu decken und
            sie bei der Verwaltung ihres Kapitals zu unterstützen. Somit umfasst
            die Definition von "Finanz" im Kontext von Geschäftskunden auch die
            Beziehung zwischen Unternehmen und Finanzinstituten sowie die
            verschiedenen finanziellen Instrumente, die den Geschäftskunden zur
            Verfügung stehen
          </p>

          <h2 className="font-bold mt-3 mb-3 text-3xl">Finanzberatung</h2>
          <p className="text-left text-2xl">
            Finanzberatung ist eine ganzheitliche Dienstleistung für private
            Haushalte, die eine breite Palette von Beratungsaspekten abdeckt,
            darunter Versicherungs-, Vorsorge-, Vermögens- und Anlagenberatung,
            Immobilienberatung sowie Schuldnerberatung. Das übergeordnete Ziel
            der Finanzberatung besteht darin, gemeinsam mit dem Kunden
            finanzielle Risiken abzusichern und einen strategischen
            Vermögensaufbau sicherzustellen. Finanzberater bieten umfassende
            Beratung zu Geldanlagen, Krediten und Versicherungen an, sei es
            bedarfsorientiert oder im Rahmen einer strukturierten Finanzplanung.
            <br />
            Obwohl die Berufsbezeichnung "Finanzberater" nicht rechtlich
            geschützt ist, erfordert ihre Ausübung doch umfangreiche
            Kenntnisnachweise. Die Finanzberatung umfasst verschiedene Bereiche
            wie Anlageberatung, Finanzplanung, Vermögensverwaltung,
            Kreditgeschäfte, Schuldnerberatung, Finanzmanagement,
            Versicherungsberatung und Vorsorgeberatung.
            <br />
            Eine Finanzberatung findet ihren Ausgangspunkt in einem konkreten
            Anlass, der als Problem wahrgenommen wird. Das Beratungsgespräch
            entsteht durch die Kommunikation eines Kundenproblems. Ein
            effektives Gespräch erfordert dabei vor allem das Vertrauen des
            Kunden in den Berater. Der Finanzberater regt den Kunden dazu an,
            eigenständige Problemlösungen zu finden. In der systemischen
            Finanzberatung wird dieses Verständnis als ein sich wiederholender
            Prozess zwischen verschiedenen Phasen betrachtet. Der systemisch
            ausgebildete Finanzberater animiert die Klienten immer wieder zu
            neuen Überlegungen bezüglich bisheriger und zukünftiger Problem- und
            Lösungsstrategien. Die Kunden treffen auf Grundlage ihrer eigenen
            Werte, Vorstellungen, Kompetenzen und Ressourcen Entscheidungen.
            Diese getroffenen Entscheidungen müssen kontinuierlich auf ihre
            Nützlichkeit hin überprüft werden, da jedes System permanent
            Veränderungen unterliegt.
          </p>
        </div>
        <div className="border-solid border-1 border-gray-500 w-1/2 p-2 h-fit">
          <h2 className="font-bold mb-3 text-3xl">Bilanz</h2>
          <p className="text-left text-2xl mb-3">
            Eine Bilanz gibt einen Überblick über die finanzielle Situation
            eines Unternehmens zu einem bestimmten Zeitpunkt. Sie zeigt die
            Vermögenswerte, Verbindlichkeiten und das Eigenkapital. Es gibt
            verschiedene Arten von Bilanzen, die je nach
            Systematisierungsmerkmal unterschieden werden. Hier sind einige
            Arten von Bilanzen - Schluss- und Eröffnungsbilanz: Die
            Schlussbilanz wird am Ende des Geschäftsjahres erstellt, während die
            Eröffnungsbilanz den Anfangsbestand für das neue Geschäftsjahr
            darstellt. <br />
            -Laufende Bilanzen: Diese Bilanzen werden regelmäßig, z.B. monatlich
            oder quartalsmäßig, erstellt, um die finanzielle Lage des
            Unternehmens im laufenden Geschäftsjahr zu überwachen. <br />
            -Handels- und Steuerbilanzen: Die Handelsbilanz dient der
            Rechenschaftslegung gegenüber den Eigentümern und Gläubigern,
            während die Steuerbilanz die Grundlage für die Besteuerung bildet.
            <br />
            -Sonderbilanzen: Hierzu zählen beispielsweise Liquidationsbilanzen,
            die im Falle einer Unternehmensauflösung erstellt werden.
            -Einzelbilanzen und Konzernbilanzen: Einzelbilanzen werden von
            einzelnen Unternehmen erstellt, während Konzernbilanzen die
            finanzielle Lage eines Konzerns darstellen. Diese verschiedenen
            Arten von Bilanzen dienen dazu, die finanzielle Lage eines
            Unternehmens zu dokumentieren und sind für verschiedene Zwecke, wie
            die Rechenschaftslegung, Besteuerung und interne Kontrolle,
            relevant.
          </p>
          <img src={aufbauBilanz} alt="" />

          <h2 className="font-bold mt-3 mb-3 text-3xl">Cashflow</h2>
          <p className="text-left text-2xl">
            Der Begriff "Cashflow" bezieht sich auf den Geldfluss, der in ein
            Unternehmen hinein- und hinausgeht. Er ist ein wichtiger Indikator
            für die finanzielle Gesundheit eines Unternehmens und seine
            Fähigkeit, laufende Verpflichtungen zu erfüllen. Der Cashflow wird
            oft verwendet, um die Liquidität und Rentabilität eines Unternehmens
            zu bewerten. Es gibt verschiedene Arten von Cashflow, darunter der
            operative Cashflow, der Cashflow aus Investitionstätigkeiten und der
            Cashflow aus Finanzierungstätigkeiten. Ein positiver Cashflow zeigt
            an, dass mehr Geld in das Unternehmen fließt, als es verlässt,
            während ein negativer Cashflow das Gegenteil bedeutet. Der Cashflow
            wird anhand von Finanzdaten wie der Gewinn- und Verlustrechnung und
            der Kapitalflussrechnung berechnet.
            <br />
            <br />

            Die Formel für den Cashflow lautet:<br />
            <span className="mt-2 font-bold text-3xl">Cashflow=Einzahlungen-Auszahlungen</span>
            <br />
            Es gibt auch spezifischere Kennzahlen, die aus dem Cashflow abgeleitet werden, wie z.B. die Cashflow-Marge, die den prozentualen Anteil des operativen Cashflows am Nettoumsatz angibt. Diese Kennzahl zeigt, wie effizient ein Unternehmen seine Umsätze in Cashflow umwandelt.
            <br />
            Die genaue Berechnung des Cashflows kann je nach Kontext und Anforderungen variieren, aber im Allgemeinen dient der Cashflow als wichtige Kennzahl zur Beurteilung der finanziellen Gesundheit eines Unternehmens und seiner Fähigkeit, seine laufenden Verpflichtungen zu erfüllen.
          </p>
        </div>
      </div>
    </div>
  );
}
