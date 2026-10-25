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

Browser-QA wordt na uitvoering hieronder vastgelegd. Status vóór de browsercontrole: nog niet vastgesteld.

## Grenzen

Nog geen onderzoek met deelnemers, geen volledige assistieve-technologie-audit, geen multi-user concurrentietest en geen productie-integratie. Native overlays en Smart Animate blijven buiten de geverifieerde scope.
