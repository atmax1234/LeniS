export default function DatenschutzerklarungPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Datenschutzerklärung</h1>

      <p>
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Ihre Daten
        werden ausschließlich im Rahmen der gesetzlichen Vorschriften verwendet.
      </p>

      <h2 className="text-xl mt-4 font-semibold">1. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns über das Kontaktformular kontaktieren, werden die
        angegebenen Daten (Name, E-Mail, Telefonnummer, Nachricht) ausschließlich
        zur Bearbeitung Ihrer Anfrage genutzt und nicht an Dritte weitergegeben.
      </p>

      <h2 className="text-xl mt-4 font-semibold">2. Server-Logfiles</h2>
      <p>
        Unser Hosting-Provider erhebt Daten über Zugriffe auf die Website
        (Logfiles). Diese beinhalten z. B. IP-Adresse, Browsertyp, Betriebssystem
        – dienen aber nur zur Fehleranalyse.
      </p>

      <h2 className="text-xl mt-4 font-semibold">3. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten Daten
        sowie deren Löschung.
      </p>

      <p className="mt-6">
        Bei Fragen wenden Sie sich bitte an: kontakt@lenis-garten.de
      </p>
    </main>
  );
}
