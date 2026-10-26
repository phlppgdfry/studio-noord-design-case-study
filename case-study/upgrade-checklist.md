# Afwerking van de tien auditpunten

Versie 2.1 · 26 oktober 2026. Bron: de review van versie 2.0.

| Punt | Resultaat | Bewijs / grens |
|---|---|---|
| 1. Mobiel | 320/390px, tablet en desktop gecontroleerd; griduitloop opgelost | Zes configuraties, screenshots en reflowasserties. Geen fysiek apparaat. |
| 2. Tijdslot | Bevestiging bewaart tijd, datum en locatie van de gekozen workshop | Model- en browsertests op twee workshops. |
| 3. Reset | Eén beginstaat herstelt alle labs, voorraad, stemmen en bewijsfilter | Complete-reset-browserflow en modeltest. |
| 4. Documentatie | Eigen pitch, pagina 04 en apart tutorialdeck consequent beschreven | Brief, overdracht, README, bewijsregister en Make. |
| 5. Ontwerpproces | Echte auditbevinding met voor/na, twee afgewogen richtingen en rolverdeling toegevoegd | Expertreview en uitklapbare sectie op de site; geen gereconstrueerde interviews. |
| 6. Native prototype | Gerichte acties, terugroutes en scrollbare fout-/volzetframes | Negen interne paden in de speler en een externe kaart-naar-webdemoroute handmatig geverifieerd. |
| 7. Feedback | Op verzoek van de gebruiker vervangen door een uitgevoerde taakgerichte expertreview | Geen externe deelnemers benaderd. Script en leeg formulier blijven beschikbaar voor eventueel later gebruik. |
| 8. Deelbaarheid | Openbare leesinstellingen gecontroleerd; native previews zonder Figma-account toegevoegd | Uitgelogde Figma-end-to-endcontrole bleef door CDN-blokkade onduidelijk; niet als geslaagd gelabeld. |
| 9. Browserregressies | Tien flows in zes configuraties plus axe-scans, opgenomen in CI | 60 lokale browsercontroles, 12 modeltests, geslaagde Linux-CI en 20 extra controles op de gepubliceerde site. |
| 10. Deelpreview | Eigen 1200×630-PNG, Open Graph/Twitter-metadata en canonical URL | SVG-bron en rendercommando aanwezig. |

Actuele uitgevoerde checks: [validatieregister](validation.md). De site is een onafhankelijke portfolio-oefencase, geen productie-ticketdienst.
