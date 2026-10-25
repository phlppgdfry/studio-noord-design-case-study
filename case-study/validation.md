# Validatieregister

Dit register scheidt eerder gecontroleerde native artefacten van controles op deze nieuwe webimplementatie. De CI-run in GitHub is de actuele bron voor geautomatiseerde tests. Geen van deze controles is gebruikersonderzoek of een garantie voor productiegeschiktheid.

## Native Figma — gecontroleerd op 25 oktober 2026

- Vier bestanden bestaan in PG → Team project: Design, FigJam, Slides en Make.
- Design: componentvarianten, kleurvariabelen en Auto Layout; handmatige controle in de editor.
- Motion: timeline met 7 tracks en 21 keyframes; afspelen gestart en voortgang vastgesteld.
- Native klikprototype: lijst → boeking → bevestiging → terug naar lijst; de URL/nodeselectie en scherminhoud veranderden overeenkomstig.
- Draw: twee Heist- en twee Shoegaze-streken aangemaakt en visueel gecontroleerd op pagina 03.
- FigJam: timer gestart/gepauzeerd; stemming met drie demostemmen afgerond; resultaten zichtbaar.
- Slides: presentatie genavigeerd en eigen live poll getest; een teststem werd geregistreerd.
- Make: boekingsbevestiging, kleurmodi, paletten, playback, AI-varianten en rondleiding handmatig gebruikt.

## Nieuwe webimplementatie

Automatische controles: `npm run check` en `npm test`. Tests bestrijken capaciteit, aantallen, validatie, idempotente herhaling, stale capacity, onbekende workshops, gecombineerde filters en centen.

Browser-QA op 25 oktober 2026, Chrome op desktop (1920 px):

- Tablist: pijltje rechts selecteert en focust de volgende tab; Home keert terug naar Boeken. Escape sluit de boekingsdialog en focus keert terug naar Bekijk workshop.
- Rondleiding door alle zes stappen genavigeerd; afsluiten werkt.
- Ongeldig formulier toont drie tekstfouten en verplaatst focus naar het naamveld.
- Fictieve gegevens + twee plaatsen leveren €70 en een bevestiging; lokale capaciteit gaat van 6 naar 4. Dialog sluit.
- Volzette workshop heeft een uitgeschakelde boekingsknop; lege zoekresultaten en wissen werken.
- Donkere/compacte systeemvariant, posterpalet en SVG-download gebruikt.
- Motion afgespeeld, gepauzeerd en gereset naar 0,00 seconden.
- Sticky toegevoegd, drie stemmen uitgebracht; vierde stem geeft limietmelding.
- Eigen webslides genavigeerd; tweede vooraf geschreven AI-variant geselecteerd.
- Bewijsfilter toont één gepland onderzoekartefact. Geen eigen applicatiefouten in console; extensionmeldingen buiten de app zijn apart gehouden.
- Zes native pitchframes aangetroffen in het lagenpaneel; gekopieerd naar een eigen Figma Slides-deck met zes dia’s.
- Make-overzicht toont de nieuwe werkelijke portfolio- en GitHub-links plus vier ontwerpafwegingen.

Mobiele browser-QA is nog niet vastgesteld: de viewportbediening meldde succes, maar `innerWidth` bleef 1920 px. Er wordt daarom geen geslaagde 390px-controle geclaimd. Responsive CSS is aanwezig; een echte mobiele controle blijft nodig.

## Grenzen

Nog geen onderzoek met deelnemers, geen volledige assistieve-technologie-audit, geen multi-user concurrentietest en geen productie-integratie. Native overlays en Smart Animate blijven buiten de geverifieerde scope.
