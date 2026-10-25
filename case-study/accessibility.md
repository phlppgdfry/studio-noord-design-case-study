# Toegankelijkheid & acceptatie

De implementatie gebruikt semantische HTML, gelabelde controls en een native dialog. Deze lijst is een ontwerp- en QA-contract, geen WCAG-certificering. Er is nog geen volledige audit met assistieve technologie of gebruikers met een beperking uitgevoerd.

## Acceptatiecriteria

| ID | Controleerbaar gedrag | Type bewijs |
|---|---|---|
| A01 | Skip-link bereikt de hoofdinhoud; navigatie werkt met toetsenbord. | Browser |
| A02 | Tablist ondersteunt pijlen, Home en End; geselecteerde tab en paneel zijn gekoppeld. | Browser |
| A03 | Boekingsdialog houdt de focus binnen de modal en sluit met Escape of Sluiten. | Native dialog + browser |
| A04 | Ongeldige naam, e-mail en ontbrekende bevestiging krijgen een tekstuele fout; focus gaat naar het eerste foutieve veld. | Browser + unit tests |
| A05 | Volzet kan geen boekingsflow starten; aantallen blijven binnen de lokale capaciteit. | Browser + unit tests |
| A06 | Bedragen blijven in gehele centen tot de presentatie; herhaalde aanvraag verbruikt geen extra voorraad. | Unit tests |
| A07 | Motion speelt niet automatisch, is te pauzeren en heeft een bestuurbare tijdlijn. | Browser |
| A08 | Reduced motion voorkomt automatisch smooth scrollen en CSS-transities; handmatig afspelen is expliciet. | CSS/JS-inspectie; OS-instelling nog apart te testen |
| A09 | Op 390 px en desktop is de primaire inhoud leesbaar zonder documentbrede horizontale overflow. De bewijstabel heeft bewust een eigen scrollcontainer. | Browser |
| A10 | Fout-, volzet- en successtaten gebruiken tekst naast kleur. | Browser |
| A11 | Formuliergegevens verlaten het tabblad niet en komen niet in localStorage. | Code-inspectie |

## Contrast en focus

De basis gebruikt ink `#182821` op cream `#F5F2EA` en ink op lime `#D4F668`. Coral is een expressie- en focusaccent, geen kleur voor kleine bodytekst op cream. Focus krijgt een 3px-contour met offset. Controls krijgen doorgaans een minimumdoel van 44px. Kleine stemknoppen op het oefenboard zijn 32px hoog; dit blijft een aandachtspunt voor een volledige touch-audit.

## Nog expliciet te testen

VoiceOver/NVDA-aankondigingen, browserzoom tot 200–400%, forced-colors, volledige toetsenbordroute in meerdere browsers, reduced-motion met de OS-instelling en motorische bruikbaarheid bij echte deelnemers. Alleen uitgevoerde browsercontroles mogen als geslaagd in [validatie](validation.md) worden geregistreerd.
