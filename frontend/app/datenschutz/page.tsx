import { Hero, Section } from '../components';

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero title="Datenschutz" subtitle="Ihre Privatsphäre ist uns wichtig" />

      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Datenschutzerklärung</h2>

          <h3>1. Datenschutz auf einen Blick</h3>
          <h4>Allgemeine Hinweise</h4>
          <p>
            Die nachfolgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
            Text aufgelisteten Datenschutzerklärung.
          </p>

          <h3>2. Datenschutz Kontakt</h3>
          <p>
            Die für die Verarbeitung verantwortliche Stelle im Sinne der EU-Datenschutzverordnung (DSGVO) ist:
          </p>
          <p>
            [Name]<br />
            [Adresse]<br />
            [E-Mail]<br />
            [Telefon]
          </p>

          <h3>3. Erfassung von Daten</h3>
          <h4>3.1 Daten bei Kontaktformularen</h4>
          <p>
            Falls Sie über unser Kontaktformular mit uns in Verbindung treten, werden Ihre
            Angaben aus dem Kontaktformular zwecks Bearbeitung der Anfrage und für den Fall,
            dass Folgefragen entstehen, gespeichert.
          </p>

          <h4>3.2 Cookies</h4>
          <p>
            Unsere Website nutzt Cookies. Dabei handelt es sich um kleine Dateien, die Ihr
            Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden. Cookies
            richten keinen Schaden an, enthalten aber auch keine Viren, Trojaner oder sonstige
            Schadsoftware.
          </p>

          <h3>4. Ihre Rechte</h3>
          <p>
            Sie haben das Recht zu erfahren, ob und welche Daten von Ihnen verarbeitet werden.
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der
            Verarbeitung Ihrer personenbezogenen Daten. Ebenso haben Sie ein Widerspruchsrecht
            gegen die Verarbeitung sowie ein Recht auf Datenübertragbarkeit.
          </p>

          <h3>5. Widerrufsrecht</h3>
          <p>
            Sie haben das Recht, einmal erteilte Einwilligungen jederzeit zu widerrufen. Dies
            kann ohne Angabe von Gründen erfolgen. Der Widerruf muss in Text- oder Textform erfolgen.
          </p>

          <h3>6. Datensicherheit</h3>
          <p>
            Wir treffen umfangreiche technische und organisatorische Maßnahmen zum Schutz Ihrer
            Daten vor unbefugtem Zugriff und vor unrechtmäßiger Verarbeitung. Innerhalb unserer
            Website wird das SSL-Verschlüsselungsprotokoll verwendet, um Ihre Daten zu schützen.
          </p>

          <h3>7. Wir erweitern diese Datenschutzerklärung</h3>
          <p>
            Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ergänzen oder
            zu ändern. Eine Mitteilung vor Änderung wird gegenüber den betroffenen Personen erteilt,
            sofern die Änderungen mit erheblichen Auswirkungen auf die Persönlichkeitsrechte
            verbunden sind.
          </p>

          <h3>8. Kontakt zur Datenschutzstelle</h3>
          <p>
            Im Falle von Fragen zur Datenverarbeitung können Sie sich direkt an unsere Datenschutzstelle wenden:
          </p>
          <p>
            [Name des Datenschutzbeauftragten]<br />
            [E-Mail des Datenschutzbeauftragten]
          </p>
        </div>
      </Section>
    </main>
  );
}
