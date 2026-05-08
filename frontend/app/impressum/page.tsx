import { Hero, Section } from '../components';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero title="Impressum" subtitle="Rechtliche Informationen" />

      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Angaben gemäß § 5 TMG</h2>

          <h3>Vertreten durch:</h3>
          <p>[Name und Adresse]</p>

          <h3>Kontakt:</h3>
          <p>
            Telephone: [Telefonnummer]<br />
            E-Mail: [E-Mail-Adresse]
          </p>

          <h3>Umsatzsteuer-ID</h3>
          <p>Umsatzsteuer-Identifikationsnummer nach §27 a Umsatzsteuergesetz: [USt-IdNr.]</p>

          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>[Name und Adresse]</p>

          <h2>Haftungsausschluss</h2>
          <h3>Haftung für Inhalte</h3>
          <p>
            Die Inhalte unserer Seiten wurden mit großer Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
            Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§
            8 bis 10 des TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen
            zur Entfernung oder Sperrung der Nutzung von Informationen bleiben hiervon unberührt.
            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
            konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h3>Haftung für Links</h3>
          <p>
            Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
            zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
            inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
            einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Links umgehend entfernen.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Die Betreiber der Seiten sind bemüht, stets die Urheberrechte anderer zu beachten
            bzw. auf selbst erstellte sowie lizenzfreie Werke zurückzugreifen. Die durch die
            Betreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des Autors oder Urhebers bzw. Betreibers. Downloads und Kopien dieser
            Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>

          <h2>Besonderheiten</h2>
          <p>
            Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name,
            Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
            stets auf Grundlage von freiwilliger Zustimmung des Nutzers. Eine Weitergabe der
            Daten an Dritte findet ohne ausdrückliche Zustimmung des Nutzers nicht statt.
          </p>
        </div>
      </Section>
    </main>
  );
}
