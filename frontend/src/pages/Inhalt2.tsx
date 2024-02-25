import React from "react";
import premoney from "../assets/Pre-Money-Post-Money.png";
import rendite from "../assets/rendite.png";
import renditeFormel from "../assets/rendite-formel.png";
import roiFormel from "../assets/ROI.png";
export default function Inhalt2() {
  return (
    <div className="text-center p-4">
      <h1 className="text-center font-bold text-4xl mb-5">
        Pre Money und Post Money, Rendite, Diversifikation, ROI
      </h1>
      <div className="flex justify-center gap-3">
        <div className="border-solid border-1 border-gray-500 w-1/2 p-3 h-fit">
          <h2 className="font-bold mb-3 text-3xl">Pre Money und Post Money</h2>
          <p className="text-left text-2xl">
            Pre Money und Post Money sind zwei Bewertungsmethoden, die den Wert
            eines Unternehmens vor und nach einer Investition durch einen
            Geldgeber bestimmen. Pre Money bewertet das Unternehmen, bevor der
            Geldgeber Kapital investiert hat, während Post Money den Wert nach
            der Investition berechnet, indem der Investitionsbetrag zum
            vorherigen Wert addiert wird. Diese Bewertungen sind entscheidend
            für die Bestimmung von Investitionsanteilen und werden
            typischerweise in der Frühphasenfinanzierung angewendet, während in
            der Anfangsphase Freunde und Familie des Gründers oft die ersten
            Geldgeber sind. Ein Beispiel verdeutlicht den Unterschied: Wenn ein
            Unternehmen vor der Investition einen Wert von 120.000 Euro hat und
            ein Investor 80.000 Euro investiert, beträgt der Post Money-Wert des
            Unternehmens der Investition 200.000 Euro.
          </p>
          <img src={premoney} alt="" className="mt-3" />

          <h2 className="font-bold mt-3 mb-3 text-3xl">Rendite</h2>
          <p className="text-left text-2xl">
            Die Rendite, auch bekannt als "Ertrag" oder "Gewinn", ist ein
            Finanzbegriff, der den Gesamterfolg einer Kapitalanlage als
            Verhältnis des erzielten Ertrags zum eingesetzten Kapital misst. Sie
            wird in der Regel als Prozentsatz ausgedrückt und bezieht sich auf
            den jährlichen Ertrag einer Geld- oder Vermögensanlage. Die Rendite
            kann sich auf verschiedene Arten von Anlagen beziehen, wie z.B.
            Zinserträge, Dividendenrenditen oder Kursgewinne bei Aktien. Die
            Höhe der Rendite hängt von verschiedenen Faktoren ab, wie z.B. der
            Art der Anlage, der Laufzeit und den damit verbundenen Kosten. Sie
            dient dazu, die Rentabilität von Anlagen zu bewerten und
            verschiedene Anlagemöglichkeiten miteinander zu vergleichen.
          </p>
          <h2 className="font-bold mt-3 mb-3 text-3xl">
            Wie kann man die Rendite einer Anlage berechnen?
          </h2>
          <p className="text-left text-2xl">
            Um die Rendite einer Anlage zu berechnen, kann die folgende Formel
            verwendet werden:
          </p>
          <img src={rendite} alt="" className="mt-3" />
          <p className="text-left text-2xl">
            Die Rendite wird als Prozentsatz ausgedrückt und gibt den
            Gesamterfolg einer Kapitalanlage als Verhältnis des erzielten
            Ertrags zum eingesetzten Kapital an. Sie ermöglicht es, die
            Rentabilität verschiedener Anlagen zu vergleichen. Die Rendite kann
            sich auf verschiedene Arten von Anlagen beziehen, wie z.B.
            Zinserträge, Dividendenrenditen oder Kursgewinne bei Aktien. Die
            genaue Berechnung der Rendite hängt von der Art der Anlage und den
            damit verbundenen Erträgen ab.
          </p>
          <img src={renditeFormel} alt="" className="mt-3" />
        </div>

        <div className="border-solid border-1 border-gray-500 w-1/2 p-2 h-fit">
          <h2 className="font-bold mb-3 text-3xl">Diversifikation</h2>
          <p className="text-left text-2xl mb-3">
            Diversifikation bezieht sich auf die Aufteilung und Streuung von
            Vermögen auf verschiedene Vermögenswerte. Dies dient dazu, das
            Risiko zu reduzieren, dem das Kapital des Anlegers insgesamt
            ausgesetzt ist. Die Diversifikation senkt das Gesamtrisiko des
            eingesetzten Kapitals und ermöglicht eine bessere Risikoverteilung
            im Vermögen. Dieser Ansatz wird in der Finanzwirtschaft als wichtige
            Strategie zur Risikominderung empfohlen. <br /> Die Diversifikation
            bietet Unternehmen mehrere Vorteile, darunter:
          </p>
          <ul className="px-4 list-disc">
            <li className="text-left text-2xl">
              Risikominderung: Durch die Diversifikation in verschiedene
              Geschäftsfelder oder Märkte kann das Gesamtrisiko reduziert
              werden, da negative Entwicklungen in einem Bereich durch positive
              Entwicklungen in einem anderen Bereich ausgeglichen werden können.
            </li>
            <li className="text-left text-2xl mb-3">
              Stabile Erträge: Die Diversifikation kann dazu beitragen, stabile
              Erträge zu erzielen, da das Unternehmen nicht ausschließlich von
              der Performance eines einzigen Geschäftsfeldes abhängig ist.
            </li>
            <li className="text-left text-2xl mb-3">
              Wachstumschancen: Durch die Erschließung neuer Geschäftsfelder
              oder Märkte können Unternehmen neue Wachstumschancen nutzen und
              ihre Umsatz- und Gewinnmöglichkeiten erweitern.
            </li>
            <li className="text-left text-2xl mb-3">
              Kostenersparnis: Durch vertikale Diversifikation kann ein
              Unternehmen Kosten einsparen und eine Produktivitätssteigerung
              erzielen.
            </li>
            <li className="text-left text-2xl mb-3">
              Wettbewerbsvorteil: Eine breite Diversifikation kann dazu
              beitragen, dass ein Unternehmen flexibler auf Veränderungen im
              Markt reagieren kann und so einen Wettbewerbsvorteil erlangt.
            </li>
          </ul>
          <p className="text-left text-2xl mb-3">
            Diese Vorteile machen die Diversifikation zu einer wichtigen
            Strategie für Unternehmen, um Risiken zu mindern und
            Wachstumschancen zu nutzen.
            <br />
            Die Diversifikation in Unternehmen kann in verschiedene Richtungen
            erfolgen. Hier sind einige Arten von Diversifikation:
          </p>

          <ol className="px-3 list-decimal">
            <li className="text-left text-2xl mb-3">
              Horizontale Diversifikation: Dabei erweitert ein Unternehmen sein
              Leistungsprogramm um Produkte oder Dienstleistungen, die in einem
              sachlichen Zusammenhang mit den bisherigen Produkten stehen. Ein
              Beispiel hierfür wäre ein Autohersteller, der zusätzlich auch
              Motorräder produziert.
            </li>
            <li className="text-left text-2xl mb-3">
              Vertikale Diversifikation: Hierbei nimmt ein Unternehmen Produkte
              in sein Portfolio auf, die zu einer vor- oder nachgelagerten
              Produktionsstufe gehören. Ein Beispiel hierfür wäre ein
              Autohersteller, der sich entscheidet, auch Reifen herzustellen.
            </li>
            <li className="text-left text-2xl mb-3">
              Laterale Diversifikation: Bei dieser Art der Diversifikation
              werden Produkte oder Dienstleistungen in das Portfolio
              aufgenommen, die keinen sachlichen Zusammenhang mit den bisherigen
              Produkten haben. Ein Beispiel hierfür wäre ein Autohersteller, der
              sich entscheidet, auch Haushaltsgeräte herzustellen.
            </li>
          </ol>

          <p className="text-left text-2xl mb-3">
            Diese verschiedenen Arten von Diversifikation ermöglichen es
            Unternehmen, ihre Geschäftstätigkeit zu erweitern und in neue Märkte
            oder Produktbereiche vorzudringen. Jede Art der Diversifikation
            birgt jedoch auch spezifische Risiken und Herausforderungen.
          </p>

          <h2 className="font-bold mt-3 mb-3 text-3xl">
            Der Return on Investment (ROI)
          </h2>
          <p className="text-left text-2xl">
            Der Return on Investment (ROI) ist eine betriebswirtschaftliche
            Kennzahl, die das prozentuale Verhältnis zwischen dem Gewinn und dem
            eingesetzten Kapital angibt. Er dient dazu, die Rentabilität einer
            Investition zu bewerten und zu beurteilen, ob sich die getätigte
            Investition gelohnt hat. Der ROI wird in der Regel als Prozentsatz
            ausgedrückt und kann sowohl vergangenheits- als auch
            zukunftsorientiert interpretiert werden. Eine positive ROI-Quote
            deutet auf einen Gewinn hin, während eine negative Quote auf einen
            Verlust hinweist.
            <br />
            <br />
            Der ROI ist eine wichtige Kennzahl für Unternehmen, um die
            Rentabilität von Investitionen zu beurteilen und
            Investitionsentscheidungen zu treffen.
            <br />
            <br />
            Um den Return on Investment (ROI) zu berechnen, wird die folgende
            Formel verwendet:
            <br />
          </p>
          <img src={roiFormel} alt="" className="mt-3" />
          <h2 className="font-bold mt-3 mb-3 text-3xl">
            Beispiel
          </h2>
          <p className="text-left text-2xl">
          Um besser zu verstehen, ROI, werfen wir einen Blick auf ein paar Beispiele aus der Praxis:
            <br />
            <br />
            Beispiel 1: die Firma X investierte $10.000 in einer marketing-Kampagne, die zu einer Generierung von $50.000 in zusätzlichen Umsatz. Zur Berechnung des ROI, subtrahieren wir die Initiale Investition von der Summe der Einnahmen generiert ($50,000 - $10,000 = $40,000) und teilen Sie es durch die anfänglichen Investitionen ($40,000 / $10,000 = 4).
            <br />
            <br />
            Um den Return on Investment (ROI) zu berechnen, wird die folgende
            Formel verwendet:
            <br />
            <br />
            In diesem Fall ist der <span className="font-bold">ROI 4 oder 400%</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
