# Validatieregister

Bijgewerkt op 26 oktober 2026 voor versie 2.1. Softwarechecks en expertreview zijn apart gehouden van menselijke gebruikerstests. Er zijn geen deelnemers getest.

## Automatische softwarecontrole

- `npm run check`: syntax, lokale assets, HTML-IDs, bronlinks, tokens, case-documentatie, 1200×630-deelafbeelding en leeg deelnemersformulier. Geslaagd.
- `npm test`: 12 geslaagde modeltests voor capaciteit, validatie, bedragen in centen, herhaalde aanvragen, filters, tijdslot in de bevestiging en een onafhankelijke volledige beginstaat.
- `npm run test:e2e`: 10 browserflows × 6 configuraties = 60 geslaagde controles op macOS. De GitHub Actions-run is de bron voor de afzonderlijke Linux-CI-resultaten.

| Configuratie | Engine | Viewport | Type |
|---|---|---|---|
| Desktop | Chromium | 1440×1000 | Browserautomatisering |
| Smal/reflow | Chromium | 320×800 | Smalle viewport, geen fysiek apparaat |
| Mobiel | Chromium | 390×844 | Pixel 5-emulatie met aangepaste viewport |
| Tablet | Chromium | 768×1024 | Viewportcontrole |
| Mobiel | WebKit | 390×844 | iPhone 13-emulatie, geen fysieke iPhone |
| Desktop | WebKit | 1280×900 | Browserautomatisering |

Per configuratie: pagina-identiteit en inhoud, geen runtimefouten, geen documentbrede horizontale uitloop in alle zeven labs, validatie en herstel, volledige boekingsbevestiging, voorraad, volzet, lege zoekresultaten, favorieten, complete reset, focus bij verdwijnende/disabled controls, tablist-toetsen, modal/Escape, rondleiding, reduced-motion-mediaemulatie, opengeklapte voor/na-case, openbare assets en de directe workshoplink.

Axe controleert elk van de zeven labs en het boekingsdialog met WCAG A/AA-tags, inclusief 2.1 en beschikbare 2.2-regels. Geen gerapporteerde overtredingen in deze gecontroleerde toestanden. Dat bewijst geen volledige WCAG-conformiteit. Screenshotbestanden staan onder `design/screenshots/`; de mobiele beelden zijn echte browserrenders, geen mockups. De oude viewportbediening die 1920 px bleef tonen is vervangen door echte Playwright-contexten.

## Native Figma — handmatig in editor en speler

Eerder gecontroleerd op 25 oktober: 8 componentvarianten, 7 kleurvariabelen met modes, Auto Layout, Motion 4s/5 vormlagen/7 tracks/21 keyframes, vier echte Draw-streken, FigJam-timer en drie demostemmen, eigen Slides-poll en de oorspronkelijke Make-demo’s.

Op 26 oktober:

- Eigen zesdia-pitch en zes presentatornotities in PG → Team project. Apart van het oudere Community-tutorialdeck.
- Vijf mobiele roots op pagina 02: 390×844 met Vertical overflow. De twee nieuwe formuliercontainers gebruiken Hug contents zodat fout- en volzetinhoud niet tot 48 px wordt samengedrukt.
- De drie schermbrede rootacties verwijderd. Negen gerichte On click → Navigate to-acties via de editor ingesteld en in de speler gecontroleerd.

| Vanaf | Actie | Doel | Waargenomen |
|---|---|---|---|
| Lijst `1:293` | Bestaande knop `1:312` | Detail `1:318` | URL en zichtbare inhoud veranderden |
| Detail | Terug `15:136` | Lijst | URL `1:293` |
| Detail | Bevestig `15:137` | Bevestiging `1:388` | Tijdslot 10:00–12:30 zichtbaar |
| Bevestiging | Terug `15:305` | Lijst | URL `1:293` |
| Lijst | Volzet `15:131` | Volzet `15:793` | Volzetstatus en boekknop zonder actie zichtbaar |
| Volzet | Kies andere `15:800` | Lijst | URL `1:293` |
| Detail | Fout `15:138` | Formulierfout `15:721` | Foutteksten en herstelknop zichtbaar na scrollen |
| Formulierfout | Herstel `15:785` | Detail | URL `1:318` |
| Formulierfout | Terug `15:728` | Lijst | URL `1:293` |

Een klik op niet-interactieve achtergrondtekst ging niet verder. Klikken op de volzetknop reserveerde niets en veranderde niet van frame. De native velden, filters en aantallen blijven illustratief. Echte lokale validatie en voorraadregels horen bij de zelfstandige webimplementatie. De derde kaart is expliciet als externe webdemoroute benoemd; de uiteindelijke koppeling wordt in de releasecontrole bevestigd.

## Deelbaarheid en uitgelogde controle

In de deeldialogen van Design, het prototype zelf, FigJam, het eigen Slides-deck en Make is **Anyone can view** zichtbaar. Er zijn geen editrechten voor externe bezoekers toegevoegd.

De afzonderlijke, lege Playwright-context had geen Figma-cookies of ingelogd gebruikersprofiel. Design, FigJam en Slides kregen een CDN-403; het prototype laadde daarin niet volledig en Make toonde geen voldoende inhoudsbewijs. Dat is geen geslaagde externe toegangstest en evenmin bewijs van een private instelling. `npm run audit:public-links` rapporteert onduidelijkheid met exitcode 2. Deze onzekerheid wordt niet verborgen door een groene CI-check.

De onafhankelijke portfoliosite en de daar aangeboden native editorpreviews zijn publiek te bekijken zonder Figma-login. De lokale browserchecks bevestigen dat alle preview-assets en onderzoeksdownloads bestaan. Live publicatiecontrole en CI worden na het pushen afzonderlijk gecontroleerd.

## Grenzen

Geen fysieke telefoon, VoiceOver/NVDA-audit, echte browserzoom van 200–400%, forced-colors, multi-user concurrentie, betaling of productiebackend getest. De 320px-reflowcontrole en mediaemulatie zijn geen claim dat deze fysieke/assistieve controles zijn uitgevoerd. Native overlays en Smart Animate blijven buiten de geverifieerde scope. De [expertreview](expert-review.md) en het [gebruikersonderzoeksplan](research-plan.md) hebben een afzonderlijke status.
