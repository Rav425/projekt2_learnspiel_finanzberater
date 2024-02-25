import React from "react";
import gesamtkostenverfahren from "../assets/Gesamtkostenverfahren.png";
import umsatzkostenverfahren from "../assets/Umsatzkostenverfahren.png";
import ersteLiquiditätsgrad from "../assets/erste-Liquidit則sgrad.png";
export default function Inhalt4() {
  return (
    <div className="text-center p-4">
      <h1 className="text-center font-bold text-4xl mb-5">
        Insolvenzgeldvorfinanzierung, Compliance, Kreditwürdigkeit, Leasing, Die
        Gewinn- und Verlustrechnung (GuV)
      </h1>
      <div className="flex justify-center gap-3">
        <div className="border-solid border-1 border-gray-500 w-1/2 p-3 h-fit">
          <h2 className="font-bold mb-3 text-3xl">
            Insolvenzgeldvorfinanzierung
          </h2>
          <p className="text-left text-2xl">
            Die Insolvenzgeldvorfinanzierung ist ein Verfahren, bei dem die
            Bundesagentur für Arbeit (BA) Insolvenzgeld vorfinanziert, um die
            laufenden Gehaltszahlungen sicherzustellen. Dies geschieht, wenn ein
            Arbeitgeber zahlungsunfähig ist und die Gehaltszahlungen nicht mehr
            leisten kann. Die BA tritt in solchen Fällen vorübergehend an die
            Stelle des Arbeitgebers und zahlt die Gehälter der Arbeitnehmer. Die
            Rückerstattung erfolgt dann aus der Insolvenzmasse. Dieses Verfahren
            dient dazu, die Arbeitnehmer vor finanziellen Einbußen zu schützen,
            wenn ihr Arbeitgeber zahlungsunfähig wird.
          </p>

          <h2 className="font-bold mt-3 mb-3 text-3xl">Compliance</h2>
          <p className="text-left text-2xl">
            Compliance bezieht sich auf die konsequente Befolgung von Gesetzen,
            Richtlinien, Normen und freiwilligen Verpflichtungen in Unternehmen
            und Organisationen. Die Vorschriften, die Unternehmen im Rahmen der
            Compliance einhalten müssen, sind äußerst vielfältig und variieren
            je nach Branche und Land. Dies schließt nationale und internationale
            Gesetze ein, die sich auf Bereiche wie Arbeitsrecht, Datenschutz,
            Umweltschutz, Korruptionsbekämpfung und Finanzwesen erstrecken.
            <br />
            <br />
            Branchenspezifische Regelungen sind ebenfalls von großer Bedeutung
            und können in verschiedenen Sektoren wie Gesundheitswesen,
            Finanzbranche, Pharmaindustrie und Lebensmittelproduktion
            spezifische Anforderungen umfassen.
            <br />
            <br />
            Zusätzlich spielen internationale Standards, darunter ISO-Normen,
            eine wichtige Rolle. Diese Normen sind weltweit anerkannt und
            erstrecken sich über verschiedene Bereiche wie Qualitätsmanagement,
            Umweltschutz und Informationssicherheit.
            <br />
            <br />
            Es ist unerlässlich zu betonen, dass die genaue Bandbreite der
            Gesetze und Normen, die von Unternehmen im Rahmen der Compliance
            befolgt werden müssen, äußerst vielfältig ist und ständigen
            Veränderungen unterliegt. Daher ist es von entscheidender Bedeutung,
            dass Unternehmen über ein effizientes Compliance-Management
            verfügen, um sicherzustellen, dass sie kontinuierlich den aktuellen
            Vorschriften gerecht werden.
            <br />
          </p>
          <h2 className="font-bold mt-3 mb-3 text-3xl">
            Die Gewinn- und Verlustrechnung (GuV):
          </h2>
          <p className="text-left text-2xl">
            Die Gewinn- und Verlustrechnung (GuV) ist eine zentrale
            betriebswirtschaftliche Kennzahl, die die Erträge und Aufwendungen
            eines Unternehmens gegenüberstellt. Sie dient der Ermittlung des
            unternehmerischen Erfolgs und ist ein Pflichtbestandteil des
            Jahresabschlusses von Kaufleuten. Die GuV-Rechnung wird im externen
            Rechnungswesen erstellt und ist im Handelsgesetzbuch (HGB) geregelt.
            Sie ermöglicht die Ermittlung des Gewinns oder Verlusts eines
            Unternehmens in einem bestimmten Zeitraum. Die Gewinn- und
            Verlustrechnung ist somit ein wichtiges Instrument zur Beurteilung
            der wirtschaftlichen Lage und des Erfolgs eines Unternehmens. <br />
            <br />
          </p>

          <p className="text-left text-2xl">
            <span className="font-bold">
              Wie wird der Gewinn oder Verlüst in der gewinn- ünd Verlüsts
              Rechnüng berechnet?
            </span>
            <br />
            Für die Berechnung gibt es zwei Methoden:
            <br />
            <br />
            <span className="font-bold">Gesamtkostenverfahren:</span> Hier
            werden Erträge und Aufwendungen anhand der produzierten Mengen
            berechnet. Somit werden auch Bestandsveränderungen berücksichtigt.
            Das Grundschema für das Gesamtkostenverfahren sieht so aus:
          </p>
          <img src={gesamtkostenverfahren} alt="" />

          <p className="text-left text-2xl">
            <span className="font-bold">Umsatzkostenverfahren: </span>Hier
            werden Erträge und Aufwendungen anhand der in dem abgesetzten Mengen
            berechnet. Somit werden auch Bestandsveränderungen nicht
            berücksichtigt. Das Grundschema für das Umsatzkostenverfahren sieht
            so aus: <br />
          </p>
          <img src={umsatzkostenverfahren} alt="" />
          <p className="text-left text-2xl">
            Während die beiden Verfahren unterschiedliche Herangehensweisen
            verfolgen, müssen sie zum identischen Ergebnis führen. <br />
            <br />
          </p>

          <h2 className="font-bold mt-3 mb-3 text-3xl">Leasing</h2>
          <p className="text-left text-2xl">
            Leasing ist ein Finanzierungsinstrument, das die langfristige Miete
            von Vermögenswerten wie Fahrzeugen, Maschinen oder Immobilien
            ermöglicht. Der Leasingnehmer zahlt eine regelmäßige Leasingrate an
            den Leasinggeber, um das Vermögensgut zu nutzen. Es gibt
            verschiedene Arten von Leasing, darunter das Kilometerleasing für
            Autos, das operative Leasing und das Finanzierungsleasing. Beim
            Kilometerleasing zahlt der Leasingnehmer eine monatliche Rate und
            kann das Fahrzeug für eine festgelegte Kilometerleistung nutzen. Das
            operative Leasing ähnelt eher einer Miete, während das
            Finanzierungsleasing dem Leasingnehmer die Möglichkeit bietet, das
            Fahrzeug nach Ablauf des Vertrags zu erwerben. Leasing kann für
            Privatpersonen und Unternehmen attraktiv sein, da es Flexibilität
            und Steuervorteile bieten kann.
          </p>
        </div>

        <div className="border-solid border-1 border-gray-500 w-1/2 p-2 h-fit">
          <h2 className="font-bold mb-3 text-3xl">Kreditwürdigkeit</h2>
          <p className="text-left text-2xl mb-3">
            Die Kreditwürdigkeit, auch bekannt als Bonität, ist ein Maß dafür,
            wie zuverlässig ein potenzieller Kreditnehmer wahrscheinlich seine
            finanziellen Verpflichtungen wie die Rückzahlung von Krediten
            erfüllen kann. Sie wird anhand verschiedener Kriterien wie der
            Zahlungshistorie, persönlicher Daten und finanzieller Situation
            bewertet. Das Hauptziel besteht darin, das Risiko eines
            Zahlungsausfalls zu minimieren. Eine positive Kreditwürdigkeit
            erhöht die Aussichten auf eine Kreditvergabe und kann zu
            vorteilhafteren Kreditkonditionen führen.
            <br />
            <br />
            <span className="font-bold">
              Wie prüfen Banken die Kreditwürdigkeit von Firmenkünden?
            </span>
            <br />
            <br />
            Die Kreditwürdigkeitsprüfung von Unternehmenskunden durch Banken ist
            ein komplexer Prozess, der über die einfache Betrachtung von
            Umsätzen hinausgeht. Es erfordert eine gründliche Analyse von
            Bilanzen, Gewinn- und Verlustrechnungen und möglichen Anhängen zum
            Jahresabschluss bei Kapitalgesellschaften. Die Analyse basiert auf
            einer Vielzahl von Kennzahlen, die in Bezug zueinander gesetzt
            werden müssen, um Fehlschlüsse zu vermeiden. Die Prüfung erfolgt in
            mehreren Stufen und die Gesamtheit der analysierten Dokumente gibt
            letztendlich Aufschluss darüber, wie wahrscheinlich es ist, dass das
            Unternehmen den Kredit zurückzahlen kann.
          </p>

          <p className="text-left text-2xl">
            Die Kreditwürdigkeitsprüfung wird durch:
            <br />
            <br />
            <span className="mt-2 font-bold text-3xl">
              Die Bilanz
              <br />
              Die Liquiditätsprüfung:
            </span>
            <br />
            Ein Unternehmen muss in der Lage sein, eine bestimmte Liquidität
            aufzuweisen. Dies ist notwendig, um sowohl mögliche
            Kreditverbindlichkeiten zu bedienen als auch den Wareneinkauf und
            die Lohnzahlungen zu finanzieren. Bei der Untersuchung der
            Liquidität, die die Grundlage für die Kreditentscheidung bildet,
            wird zwischen drei Liquiditätsgraden unterschieden.
            <br />
            <span className="font-bold">Der erste Liquiditätsgrad </span>
            <br />
            Der erste Liquiditätsgrad vergleicht die Barmittel mit den
            kurzfristigen Verbindlichkeiten. Die Formel lautet:
          </p>
          <img src={ersteLiquiditätsgrad} alt="" />
          <p className="text-left text-2xl">
            <span className="font-bold">Der zweite Liquiditätsgrad</span>
            <br />
            Der zweite Liquiditätsgrad bezieht das gesamte Geldvermögen eines
            Unternehmens, einschließlich der Wertpapiere und kurzfristigen
            Forderungen, in Bezug zu den kurzfristigen Verbindlichkeiten. Für
            den zweiten Liquiditätsgrad ist eine Quote von 100 bis 120 Prozent
            erforderlich, da sonst die kurzfristigen Verbindlichkeiten nicht
            mehr gedeckt sind.
          </p>
          <p className="text-left text-2xl">
            <span className="font-bold">Der dritte Liquiditätsgrad</span>
            <br />
            Beim dritten Liquiditätsgrad werden zum Geldvermögen noch der
            Warenbestand bzw. die Vorräte hinzugefügt. Wenn die Quote die
            120-Prozent-Marke unterschreitet, kann das Unternehmen die
            kurzfristigen Verbindlichkeiten nur noch begleichen, wenn Teile des
            Anlagevermögens verkauft werden.
            <br />
            <br />
            Obwohl es auf den ersten Blick einfach erscheint, die Bonität eines
            Unternehmens schnell anhand dieser Kennzahlen zu ermitteln, gibt es
            einen Haken. Wenn beispielsweise den liquiden Mitteln in Höhe von
            100.000 Euro einen Tag vor dem Bilanzstichtag 200.000 Euro
            kurzfristige Verbindlichkeiten gegenüberstehen, sieht es mit einer
            Quote von 50 Prozent nicht gut aus. Die Aufnahme eines kurzfristigen
            Darlehens in Höhe von 300.000 Euro erhöht die liquiden Mittel auf
            400.000 Euro, die kurzfristigen Verbindlichkeiten auf 500.000 Euro.
            Die Quote steigt auf 80 Prozent. Vor diesem Hintergrund greifen
            Banken auch auf andere Kennzahlen, wie die Eigenkapitalquote als
            eine der wichtigsten Kennzahlen, zurück.
          </p>

          <p className="text-left text-2xl">
            <span className="font-bold">
              EK-Quote = (EK / Gesamtkapital) * 100 Die Eigenkapitalquote
            </span>
            <br />
            <br />
            Die zuvor erläuterte Strategie zur Verbesserung der Liquiditätsquote
            hat auch eine Nebenwirkung. Die Quote des Eigenkapitals fällt im
            Vergleich zum Fremdkapital, was einen negativen Nebeneffekt
            darstellt. Aus diesem Grund betrachten Kreditgeber die einzelnen
            Kennzahlen nicht isoliert, sondern immer im Zusammenhang.
          </p>

          <p className="text-left text-2xl">
            <span className="font-bold">
              EK-Quote = (EK / Gesamtkapital) * 100 Die Eigenkapitalquote
            </span>
            <br />
            <br />
            Die Eigenkapitalquote (EK) bewertet den substantiellen Wert eines
            Unternehmens im Verhältnis zur Gesamtbilanzsumme. Die Formel zur
            Berechnung der Quote lautet:
            <br />
            <br />
            <span className="font-bold">Die Fremdkapitalquote</span>
            <br />
            Im Gegensatz zur Eigenkapitalquote steht die Fremdkapitalquote (FK),
            die den Anteil der Fremdfinanzierung eines Unternehmens im
            Verhältnis zum Eigenkapital darstellt:
            <span className="font-bold"></span>
            <br />
            <br />
            <span className="font-bold">
              FK-Quote = (FK gesamt / Gesamtkapital) * 100
            </span>
            <br />
            <br />
            Es wird problematisch, wenn der Verschuldungsgrad das Zweifache des
            Eigenkapitals oder 67 Prozent der Bilanzsumme übersteigt. In diesem
            Fall nehmen die Kreditgeber an, dass eine ordnungsgemäße Rückzahlung
            des Darlehens eher unwahrscheinlich ist.
            <br />
            <br />
            <span className="font-bold">Die Gesamtkapitalrentabilität</span>
            <br />
            <br />
            Die Liste der Kennzahlen zur Beurteilung der Bonität ist
            umfangreich. Für ein finanzierendes Institut ist es auch wichtig zu
            wissen, wie rentabel ein Unternehmen mit dem gesamten zur Verfügung
            stehenden Kapital wirtschaftet. Die Gesamtkapitalrentabilität (GKR)
            liefert in diesem Fall wichtige Informationen. Die GKR wird durch
            die folgende Formel ermittelt:
            <br />
            <br />
            <span className="font-bold">
              GKR = ((Betriebsergebnis + Zinsaufwand) / Bilanzsumme) * 100:
              <br />
              Die Eigenkapitalrentabilität
            </span>
            <br />
            <br />
            Die GKR zeigt, wie effektiv alle verfügbaren Mittel, einschließlich
            Fremdkapital, genutzt werden. Die Rentabilität des Eigenkapitals
            (EKR) zeigt nur, wie profitabel das Eigenkapital arbeitet. Um dies
            zu bestimmen, werden das Betriebsergebnis und das Eigenkapital in
            Beziehung zueinander gesetzt:
            <br />
            <br />
            <span className="font-bold">
              EKR = (Betriebsergebnis / EK) * 100
            </span>
            <br />
            Je höher die Werte für EKR und GKR sind, desto besser ist die
            Position des Unternehmens. Die Rentabilität des Eigenkapitals muss
            immer im Zusammenhang mit der Eigenkapitalquote betrachtet werden.
            Sie steigt prozentual umso mehr, je geringer das vorhandene
            Eigenkapital ist. Dieser Hebeleffekt führt zu einer interessanten
            Situation:
            <br />
            <br />
            Die Aufnahme von Fremdkapital kann unter bestimmten Umständen die
            Rentabilität des Eigenkapitals erhöhen. Es kann für ein Unternehmen
            vorteilhaft sein, Schulden aufzunehmen, wenn die Zinsen für das
            Darlehen unter der Rendite liegen, die es mit der Investition
            erzielen kann. Bei der Beurteilung der Kreditwürdigkeit eines
            Unternehmens spielt auch die Umsatzrentabilität eine Rolle
            <br />
            <br />
            Angenommen, ein Unternehmen hat ein Eigenkapital von 250.000 Euro
            und möchte in ein Projekt investieren, das einen Gewinn von 25.000
            Euro erzielt. Das Projekt kostet 250.000 Euro, das Unternehmen nimmt
            ein Darlehen von 150.000 Euro auf. Das erforderliche Eigenkapital
            beträgt nun nur noch 100.000 Euro. Für das Darlehen fallen vier
            Prozent Zinsen an, das sind 6.000 Euro. Wenn man die Zinsen vom
            Gewinn des Projekts abzieht, bleiben 19.000 Euro übrig. Die Rendite
            des eingesetzten Eigenkapitals wird durch das Darlehen auf 19
            Prozent erhöht.<br></br>
            <span className="font-bold">Die Umsatzrentabilität</span>
            <br />
            Eine weitere Kennzahl zur Beurteilung der Bonität bei
            Unternehmenskrediten ist die Umsatzrentabilität. Die
            Umsatzrentabilität (UR) gibt Auskunft darüber, wie rentabel der
            Umsatz ist. Ein Umsatz von 500.000 Euro bei einem Betriebsergebnis
            von 10.000 Euro deutet auf eine schlechte Planung hin. Je größer die
            Kennzahl ausfällt
            <span className="font-bold">
              UR = (Betriebsergebnis / Umsatzerlöse) * 100
            </span>
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
