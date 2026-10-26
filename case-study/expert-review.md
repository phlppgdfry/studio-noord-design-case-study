# Taakgerichte expertreview en ontwerpiteratie

Uitgevoerd op 26 oktober 2026 door Codex, op verzoek van Philippe Godfroy. Dit is een inspectie met browserbediening, broncontrole en geautomatiseerde checks. Er waren geen deelnemers. Het is geen onafhankelijk gebruikersonderzoek, geen schermlezeraudit en geen bewijs van conversiewinst.

## Taken en feitelijke bevindingen

| Taak | Waargenomen in versie 2.0 | Ernst en wijziging in 2.1 | Verificatie |
|---|---|---|---|
| Boek een workshop en controleer de afspraak | Datum, locatie en bedrag stonden op de echte bevestiging; het tijdslot ontbrak. De schematische hero-preview bevatte wél een tijd. | Inhoudelijk belangrijk: de bevestiging bewaart nu tijd, datum en locatie van de gekozen workshop. | Unit-test voor een andere workshop; browserchecks op 10:00–12:30 en 16:00–18:00. |
| Verander labinstellingen en herstel de demo | AI-richting bleef actief na reset; broninspectie toonde hetzelfde risico voor palet, dia, curve, duur en bewijsfilter. | Middel: één verse beginstaat voor alle labs, voorraad, favorieten, stemmen en teller. | Resetcontrole doorloopt alle zichtbare instellingen. |
| Gebruik de site op 320 px | De eerste browserrun vond documentbrede horizontale uitloop; screenshot toonde afgesneden hero en previews. | Belangrijk: grid-items kunnen nu krimpen; de hoofdinhoud en alle labs blijven binnen het scherm. | Browserasserties en echte screenshots op 320/390 px, tablet en desktop. |
| Verwijder de laatste favoriet in de favorietenlijst | Het geselecteerde element verdwijnt uit de DOM; de oude focusherstelroute had geen doel meer. | Middel: focus gaat naar Wis de filters. | Browserassertie op gerichte focus. |
| Boek de laatste vrije plaatsen en ga terug | De primaire boekknop wordt terecht disabled; die kan daarna geen keyboardfocus ontvangen. | Middel: focus keert terug naar de geselecteerde workshoprij. | Browsercheck die alle drie plaatsen van Druk je eigen richting boekt. |
| Volg de native Figma-flow | Schermbrede doorklikacties maakten de visuele knoppen niet bepalend. | Gerichte hotspotframes en aparte fout-/volzetpaden worden in de editor ingericht; de feitelijke eindstatus staat in validation.md. | Native editor en speler, afzonderlijk van de webtests. |
| Lees bronclaims en overdracht | Enkele documenten beschreven alleen het oude tutorialdeck. | Laag: eigen zesdia-pitch, Design-pagina 04 en apart tutorialmateriaal consequent benoemd. | Broncontrole; geen automatische synchronisatie geclaimd. |

## Twee alternatieven, opnieuw afgewogen

Deze vergelijking is op 26 oktober vastgelegd tijdens de herbeoordeling. Het zijn geen vóór het oorspronkelijke ontwerp gedateerde experimenten.

**Festivalmagazine:** meer ruimte voor beelden, verhalen en onverwacht ontdekken. Tijd en capaciteit worden pas in de detailstap zichtbaar; vergelijken vraagt meer bezoeken aan details.

**Vergelijkbaar programma:** discipline, tijd, prijs en vrije plaatsen staan direct bij het aanbod. Dit ondersteunt de concrete boekingstaak beter volgens onze ontwerpaanname. De editorial hero bewaart de festivalsfeer. De gekozen combinatie is een beargumenteerde ontwerpkeuze; beter taakgedrag moet nog met deelnemers worden onderzocht.

## Wat deze iteratie bewijst

De code bewaart meer afspraakgegevens, reset consequent en herstelt focus in twee randgevallen. Browsers kunnen de voorgeschreven taken uitvoeren. Daarmee is softwaregedrag gecontroleerd. Er is niet gemeten of bezoekers sneller kiezen, minder twijfelen of tevredener zijn.

## Nog benodigde menselijke feedback

Het gebruikerstestpakket bevat een neutraal script, toestemmingsprocedure, registratieformulier en syntheseaanpak. Het CSV-bestand bevat alleen kolomkoppen. Er zijn geen fictieve sessies, citaten of successcores toegevoegd. De geplande vijf sessies blijven een afzonderlijke mogelijke vervolgstap.
