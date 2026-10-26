export const links={
  repository:'https://github.com/phlppgdfry/studio-noord-design-case-study',
  design:'https://www.figma.com/design/TvSQScyVugajxezjknx1ff',
  prototype:'https://www.figma.com/proto/TvSQScyVugajxezjknx1ff?node-id=1-293&page-id=1%3A234&starting-point-node-id=1%3A293',
  draw:'https://www.figma.com/design/TvSQScyVugajxezjknx1ff?node-id=1-600',
  motion:'https://www.figma.com/design/TvSQScyVugajxezjknx1ff?node-id=3-6759&timeline=keyframe',
  figjam:'https://www.figma.com/board/wyq7X0mYl5JVh9CGuoW4V3',
  slides:'https://www.figma.com/slides/tZ9ynsDG41cgBAsAAk4Bjd',
  tutorial:'https://www.figma.com/slides/Nft4EWn5MTqEshKBHda0ul',
  make:'https://www.figma.com/make/eiLRRJj6QYU0HNREZYZkLz?fullscreen=1'
};
export const evidence=[
  {id:'E01',title:'Componenten & variabelen',module:'Design',status:'Native Figma',detail:'8 componentvarianten, 7 kleurvariabelen en Light/Dark-demoframes. De bron blijft Figma.',url:links.design},
  {id:'E02',title:'Klikbaar mobiel prototype',module:'Design',status:'Native Figma',detail:'Gerichte knoppen voor lijst, boeking, bevestiging, terugroutes en aparte fout-/volzetpaden. Native velden zijn illustratief.',url:links.prototype},
  {id:'E03',title:'Brush studies',module:'Draw',status:'Native Figma',detail:'Vier native 16px-streken: 2× Heist stretch en 2× Shoegaze scatter. Pagina 03.',url:links.draw},
  {id:'E04',title:'Animatie met keyframes',module:'Motion',status:'Native Figma',detail:'4 seconden, 5 vormlagen, 7 tracks en 21 keyframes; afspelen getest in Figma Motion.',url:links.motion},
  {id:'E05',title:'Workshop & klantreis',module:'FigJam',status:'Native Figma',detail:'6 gebieden, brainstorm, impact/inspanning en een afgeronde oefenstemming met 3 demostemmen.',url:links.figjam},
  {id:'E06',title:'Eigen portfolio-pitch',module:'Slides',status:'Native Figma',detail:'Zes eigen native casedia’s: vraag, vier producten, flow, ontwerpafwegingen en vervolgstap. Het tutorialdeck met poll blijft een apart oefenbestand.',url:links.slides},
  {id:'E07',title:'Oorspronkelijke Make-showcase',module:'Make',status:'Webdemo',detail:'8 hoofdstukken met interactieve voorbeelden; simulaties staan los van native Figma-documenten.',url:links.make},
  {id:'E08',title:'Boekingsregels & broncode',module:'Engineering',status:'Repository',detail:'Pure functies voor capaciteit, validatie, bedragen in centen en herhaalde bevestigingen. Uitvoerbaar met npm test.',url:links.repository+'/tree/main/tests'},
  {id:'E09',title:'Beslissingen & overdracht',module:'Product',status:'Repository',detail:'Hypotheses, ontwerpafwegingen, een uitgevoerde expertreview met voor/na en acceptatiecriteria. Menselijke gebruikerstests blijven gepland.',url:links.repository+'/tree/main/case-study'},
  {id:'E10',title:'Gebruikersonderzoek & resultaten',module:'Research',status:'Gepland',detail:'Nog geen interviews, usabilitysessies of gemeten conversieresultaten. Een onderzoeksplan is beschreven.',url:links.repository+'/blob/main/case-study/research-plan.md'}
];
export const decisions=[
  {id:'D01',title:'Eén herkenbare route',reason:'Een bezoeker moet eerst aanbod kunnen vergelijken en pas daarna persoonlijke gegevens invullen.',choice:'Programma → detail → controle → bevestiging. Capaciteit en totaalbedrag blijven zichtbaar.',tradeoff:'De native Figma-route gebruikt schermbrede klikdoelen. De webimplementatie gebruikt echte knoppen en formulierstaten.'},
  {id:'D02',title:'Schaalbaar zonder zwaar systeem',reason:'Dezelfde merktaal moet herkenbaar blijven in mobiele schermen, een poster en een deck.',choice:'Kleurrollen, een beperkte typografische schaal en herbruikbare componenten; tokens zijn als JSON vastgelegd.',tradeoff:'De JSON-tokens zijn handmatig gedocumenteerd; er is geen automatische Figma–code-synchronisatie.'},
  {id:'D03',title:'Beweging met een functie',reason:'Animatie moet timing en feedback uitleggen, zonder de inhoud ontoegankelijk te maken.',choice:'Een bestuurbare tijdlijn, een pauzeknop en respect voor reduced motion. Native en webanimatie zijn apart gelabeld.',tradeoff:'De webanimatie is een eigen implementatie; de 21 native keyframes zijn geen automatisch geëxporteerde CSS.'},
  {id:'D04',title:'Bewijs boven grote claims',reason:'Een portfolio moet laten zien wat er bestaat en wat een aanname is.',choice:'Een bewijsregister met directe bronlinks, een expliciet onderzoeksplan en controleerbare tests.',tradeoff:'De case claimt geen klantopdracht, senior functietitel, gebruikersonderzoek of meetbare zakelijke impact.'}
];
