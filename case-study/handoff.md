# Technische overdracht

## Bronnen en eigenaarschap

Figma is de bron voor de native ontwerpen. De publieke repository is de bron voor deze zelfstandige webimplementatie. `docs/data.mjs` bevat de Figma-links en het bewijsregister. `docs/assets/tokens.json` is een handmatige webgerichte documentatie van het systeem. Verander een claim pas nadat het corresponderende artefact is bekeken of getest.

## Architectuur

```text
index.html → app.mjs → model.mjs
                 └→ data.mjs → bronlinks en beslissingen
styles.css       → responsive layout en toegankelijke states
tokens.json      → handmatige overdracht, geen automatische codegeneratie
```

`model.mjs` bevat pure regels. `app.mjs` beheert lokale UI-state en maakt DOM-output. Gebruikerstekst wordt HTML-geëscapet vóór rendering. Er is geen backend of externe service. Alleen favoriete workshop-IDs worden lokaal bewaard; formuliergegevens, boekingen, stemmen en stickies blijven in het geheugen. Wis lokale instellingen met de footerknop.

## Boekingsflow

Een aanvraag heeft een unieke sleutel. Op submit worden workshop, actueel beschikbare capaciteit, geheel aantal, naam, e-mail en demo-bevestiging opnieuw gevalideerd. Een geslaagde boeking verlaagt alleen de voorraad in dit tabblad. Een herhaalde bevestiging met dezelfde sleutel gebruikt hetzelfde resultaat. Prijzen en totalen zijn integer centen.

Dit beschermt de lokale demonstratie. Een echte reserveringsdienst vereist een servertransactie, atomaire capaciteitscontrole, duurzame idempotency store en een expiratiebeleid voor plaatsen. Die mogelijkheden zijn niet gebouwd of gesimuleerd als productiegedrag.

## Publicatie en onderhoud

GitHub Pages publiceert `main:/docs`; `.nojekyll` voorkomt Jekyll-verwerking. De site is statisch en gebruikt relatieve paden. CI draait `npm run check` en `npm test`. De site heeft geen runtime-afhankelijkheden. Voor de browserchecks zijn npm ci en de Playwright-browsers nodig.

Bij een wijziging: regels → tests → browserflow → smal scherm → bronclaims → documentatie. Een geslaagde syntaxcheck zegt niets over de zichtbare UI; browser-QA blijft nodig.

## Figma-route

1. Pagina 01: Design Lab, componenten, kleuren, schermen, poster en native Motion.
2. Pagina 02: kopieën van de appframes voor het klikprototype. Gerichte knopacties tonen de volgorde en terugroutes; aparte fout-/volzetframes staan op dezelfde pagina. De vijf mobiele roots zijn 390×844 met verticaal scrollen.
3. Pagina 03: Draw Brush Lab, met 2 Heist- en 2 Shoegaze-streken.
4. Pagina 04: zes eigen portfolioframes; gekopieerd naar het native Slides-deck https://www.figma.com/slides/tZ9ynsDG41cgBAsAAk4Bjd met zes presentatornotities.

De screenshots van de site zijn geen bewijs dat een Figma-node een component of keyframe is. Daarvoor moet het native bronbestand worden geopend. Deelrechten van Figma zijn niet automatisch gewijzigd voor de repository.

## Grenzen voor productie

Geen betalingen, e-mail, authenticatie, multi-user board of live AI. Geen analytics, geen echte bezoekerdata. Het casedeck heeft zes eigen webslides en een eigen native zesdia-pitch. Het afzonderlijke Feature Tour-deck bevat aangepast plus Figma Community-tutorialmateriaal. Een volledige usability- en toegankelijkheidsaudit blijft nodig vóór productiegebruik.
