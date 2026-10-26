# Beslissingslog

Vier beslissingen met reden, gekozen richting en consequentie. De case onderscheidt ontwerpaannames van geteste software-eigenschappen.

## D01 — één herkenbare boekingsroute

**Aanname:** een bezoeker wil eerst aanbod vergelijken en pas daarna gegevens invullen. **Keuze:** programma → detail → controle → bevestiging. Titel, tijd, capaciteit en totaalprijs blijven in de relevante stappen zichtbaar. Volzet is een expliciete toestand, niet een foutmelding na invullen.

**Afweging:** de native Figma-route gebruikt gerichte knoppen, terugroutes en aparte fout-/volzetpaden, met illustratieve velden en filters. De webflow voegt echte invoervelden, validatie en een lokale voorraad toe. Daarom is het native prototype geen bewijs voor functionele gegevensverwerking.

**Gevolg:** `validateBooking` weigert ongeldige aantallen en een volzette workshop. `createBooking` toetst opnieuw tegen de laatste lokale voorraad, rekent in centen en herhaalt dezelfde bevestiging zonder extra voorraadverbruik. Zie de uitvoerbare tests. Dit is geen transactieve multi-user voorraad.

## D02 — een beperkte merkbasis met semantische rollen

**Probleem:** mobiele schermen, een poster en een deck moeten één familie blijven. **Keuze:** cream/ink als basis, lime voor accent, coral spaarzaam voor expressie; herbruikbare componenten en een beperkte schaal van afstanden.

**Afweging:** Figma heeft 7 native kleurvariabelen. De repository documenteert een webgerichte subset en semantische modes in JSON. Die JSON is handmatig vastgelegd, geen API-export en geen automatische synchronisatie. Een wijziging vereist review in beide bronnen.

**Gevolg:** webcontrols hebben expliciete minimumdoelen, zichtbare focus, consistente grens- en foutstaten. Het webdesignlab kan modes en informatiedichtheid demonstreren zonder de hele portfolio van thema te laten wisselen.

## D03 — beweging als inspecteerbaar gedrag

**Probleem:** animatie kan timing uitleggen, maar ook de aandacht kapen. **Keuze:** een bestuurbare, standaard stilstaande webanimatie met play/pause/reset, scrubber, curve en duur. Reduced motion schakelt automatisch scrollgedrag en CSS-transities uit; handmatig afspelen blijft mogelijk.

**Afweging:** de eigen webanimatie is niet automatisch uit de 21 Figma-keyframes gegenereerd. Beide tonen timing, maar ze zijn afzonderlijke implementaties. Het native artefact is 4 seconden lang en heeft 5 vormlagen en 7 tracks.

## D04 — een bewijsregister in plaats van een succesverhaal achteraf

**Probleem:** een portfolio kan een werkende demonstratie verwarren met bewezen productimpact. **Keuze:** elk artefact krijgt een bron en een van vier statussen: Native Figma, Webdemo, Repository of Gepland.

**Afweging:** geen verzonnen interviewquotes, klanten, conversiewinst of gebruikerstestpercentages. De fictieve persona’s mogen helpen denken, maar leveren geen marktbewijs.

**Gevolg:** het [onderzoeksplan](research-plan.md) blijft een plan. De teststatus volgt uitvoering/CI. Het Slides-tutorialmateriaal wordt expliciet aan Figma Community toegeschreven.

## Bewuste technische eenvoud

Een buildless site is voldoende voor deze demonstratie. HTML/CSS en ES-modules beperken afhankelijkheden en maken de bron inspecteerbaar. Er is geen framework toegevoegd alleen om de case groter te laten lijken. De boekingsregels staan los van DOM-code, zodat essentiële grensgevallen met Node’s ingebouwde testrunner uitvoerbaar zijn.
