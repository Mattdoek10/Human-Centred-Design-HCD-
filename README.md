# Human Centred Design (HCD)


## Daily checkout 30/3/2026
**Wat heb ik vandaag gedaan ?**
Ik heb vandaag gewerkt aan de html gedeelte van de website. Ik ben gestart met het onderzoeken van de opdracht. ik keek eerst naar de opdracht en de eisen en ben ik aan de slacht gegaan. Ik ben als eerst gaan brainstormen wat ik kan maken en hoe ik het ongeveer eruit wil gaan laten zien. En ben ik aan de slag gegaan met kijken welke info ik wil als content, en ik ben die daarna gaan zetten in me html skelet en heb ik een beetje slyting gegeven.

nu ziet het er zo uit 
![foto website eerste versie](/images/image.png)

**Hoelang heeft dat geduurd ?**
Het duurde ongeveer 3-4 uren.

**Wat heb ik geleerd ?**
Ik heb va jelle geleerd dat als je een datumpicker gebruikt met dd/mm/jjjj, dat de screenreader het opleest met percentages.

**Wat ga ik morgen doen ?**
Morgen ga ik de test doen met Ihab en vragen stellen naar wat hij wil en wat zijn wensen zijn en een beetje over zijn zelf vertellen.

**Bronnen**
- https://www.w3.org/WAI/fundamentals/accessibility-intro/#top 
- https://dlo.mijnhva.nl/d2l/le/lessons/690182/units/2804014 

## User test 1 met Ihab

Vragen;
- Zou je willen kiezen waar de focus begint?
- Waar zou jij meestal willen starten?
- Gebruik je nu al sneltoetsen? ja ik gebruik dit vaak om makkelijk te navigeren binnen een website.
- Zou dit handig zijn voor jou?
- ik heb twee opties voor shortcuts;

1 Navigation menu (for exploring the site).
2 Main content (recommended for reading)
Is het duidelijk wat ‘skip to main content’ betekent?

- ik wil shortcut knoppen implementeren, dus er zijn knoppen van 1 tm 4, waarbij elke knop je ergens anders laat navigeren.
1 Skip to main concent
2 skip to navigation
3 skip to sidebar
4 skip to footer

is dit duidelijk, en zou dit je helpen?

- wat is een ideale website voor jou qua toegangkelijk?

**bevindingen;**

- Mvda En Joel voor screen readers gebruiken.

- altijd een stop knop zetten als een audio afspeelt ofzo 


- telefoon spraak bericht en dicteren, maar dicteren gaat vaak lastig 
- Website bekijken van hoe toegankelijk is het en hoe kan j t beter maken dus als je een website maakt en binnen die website wil navigeren 
- Microsoft Frank is niet goed in klanken uitspreken dus ander persoon als vaste persoon zetten. Je kan ook ai gebruiken want die zijn meer menselijker. En pas op met de taal 
- Screenreaders specifke sneltoetsen is verschillen. En er is verschil tussen Mac en Windows. 


- Elke website heeft al zoiets al en website heeft al sneltoetsen om te navigeren binnen een websites 
- Iets toevoegen eraan zou je ff kijken naar de functie binnen een wbsire 

- elke website is anders 

- Volgende links, volgende foto. De meeste dingen bestaan al 


- handig om de extensie erin te doen en die gaat de website scannen en koppen zetten zodat de gebruiker makkelkkk summary kan krijgen en kan kieze wat te lezen 
- handig om samenvatting te krijgen van spraak bericht

## Weekly checkout

deze week heb ik de test gedaan op mijn eerste prototype, waaronder er verschillende bevindingen waren. Ik had niet perse veel, ik had alleen htmo en css en dit was makkelijk en snel te navigeren. Maar ik had de focus meer gezet om vragen te stellen zodat ik zijn behoeftes etc beter kan kennen en daarmee de website dan bouwen. Ik heb na de user test gekeken naar de bevindingen en ben toch aan de slag gegaan met de sneltoetsen, dus om een extentie te na boosten en die te maken zoals het echt zou werken op een website. Ik heb ervoor gekozen om 4 secties te zetten, deze zijn; huidige website, navigatie positie, sneltoetsen en bookmarks. 

dit is hoe het er nu uit ziet;
![alt text](/images/ss-tweedeversie.png)

## User test 2 met Ihab

**vragen;** 
- het idee is dat dit een extntie moet faken. dit zijn de opties.

- je kan met deze extentie sneltoesten vinden en ook de start positie van een website. Daarnaast kan je de startpositie zelf bepalen en die opslaan als een bookmaark, met het idee dat je die elke keer naar kan navigeren en als je op die pagina komt start je automatisch bij die tab index die je hebt ingesteld.

- wat vind je van deze extentie ?
- hoe zou ik deze extentie kunnen verbeteren?
- Wat is wel goed hieraan?
- vind je dit een goede manier om dingen op te slaan in de bookmarks? of zou je dit op een ander manier willen?

- welke volgorde zou je deze opties willn?

**bevindingen;**

- de website is duidelijk hoe het werkt, misschien niet heel veel gebruiken maar bij sites als de bank zou hij het wel gebruiken.
- Tab positie per website houden ipv 
- En snel toesten bij elke website juist zetten. Vind je de opgeslagen bookmakers 

- ik moet kijken welke sneltoetsen van het systeem komen niet in conflict met die van mij.

- Bookmarks verwijder optie erbij zetten en een zoekfunctie erbij
- Een knop met bookmarks en daarin meer info van alle websites met die functies, en een terug knop zetten.

- huidige website sectie weghalen 
- Daarnaast is het goed die volgorde.

## Weekly checkout 17 april 2026

deze week heb ik me meer gefocust op de bookmarks. Dus ik heb de de javascript aangemaakt zodat ihab die kon testen. Binnen me code kon je tabben en op linkjes etc kan je dan ctr s klikken, en zou dat word opgelsagen in de sectie van 'opgeslagen posities'. Maar helaas werkte dat niet zo goed want ik heb dat niet getest met screen reader, dus me tab index ging niet op de headers etc, dus alleen links. Hierdoor kon ik mijn prototype niet goed testen. het werkte dus wel maar niet op alles. 

## User test 3 met Ihab

- kan je makkelijk de terug positie vinden met de knop 'ga erheen'
- vind je de knop verwijder daar goed staan?
- Kna je makkelijk terug gaan naar de tab index die je had opgeslagen, zo nee, hoe zou ik het beter kunne maken voor jou?

bevindigngen

- je kan de emojis weglaten want het is een beetje verwarrend 
- met screenreader testen want nu doet het niet goed.Het kan alleen tabben en de linkjes opslaan. niet de andere delen zoals een header gedeelte ofzo
- Zoek functie erbij doen.
- sorteer functie met nieuwese en oudste

## weekly checkout 24 april 2026

ik heb vandaag gewerkt aan debookmark/opgeslagen positie met de screen reader. Ik heb de NVDA screenreader gedownload en die getest en uit gezocht hoe het werkt. Dit kosste me ongeveer 2 uren want de sneltoetsen werkte niet, blijkt dat ik me laptop moest herstarten. Hierna ben ik aan de slag gegaan. Ik heb de javasxcdipt code laten werken, ik heb daarnaast ook de sneltoetsen laten werken en gekeken als het niet overeen komt met de sneltoetsen die er nu in het algemeen al bestaan. Dus nu kan je in me website met de extentie soort navigeren in verschillende plekken in de website, en je kan verschillende delen van de website opslaan en dan naartoe navigeren voor latere gebruik.

## User test 4 met Ihab


- Wanneer je Alt + S indrukt, is de alert-melding duidelijk en nuttig? of zou je alleen een geluid willen als een piep of een grappig geluid ?
- wat voor random ding die bij je persoonlijkheid past wil je hier terug zien? denk aan een funny sound als je bijvoorbeeld verwijder klikt. Of juist eentje wanneer je iets opslaat als begin positie?
- 

bevindingen 

zijn hobbies;
- muziek 
- sport 
- anime 
- lezen

- website werkt goed en hij kan naivigeren binnen de website
- de alt 3 en 4 werken niet helemaal goed, 3 werkt niet omdat er geen zijbalk is maar de ander brengt je naar de home gedeelte
- geluid kan zachter bij animatie sound wanneer er geklikt word op 'verwijder'
- geluidje krijgen nadat er geklikt word op Alt + S is beter dan popup krijgen, zodat hij niet hoef te klikken op die 'ok' knop.
- De animatie sound vind hij een goede toevoeging en grappig.
- De zoekbalk erbij zetten voor als veel dingen zijn opgeslagen.

## Wat ik zou aanpassen als ik meer tijd had
Als ik meer tijd had zou ik dit nog verbeteren:

- De sneltoetsen Alt + 3 en Alt + 4 werken niet helemaal goed, dus die zou ik fixen zodat ze overal correct navigeren.

- Het geluid bij het verwijderen van een item zou ik zachter zetten, zodat het minder hard binnenkomt.

- Bij Alt + S zou ik liever een geluidje gebruiken in plaats van een popup, zodat de gebruiker niet steeds op een “OK” knop hoeft te klikken.

- Een zoekbalk toevoegen voor wanneer er veel opgeslagen items zijn, zodat je sneller iets kan terugvinden.

- Een filterfunctie toevoegen zodat je kan sorteren op bijvoorbeeld nieuwste of oudste opgeslagen posities.

## Reflectie Exclusive Design Principles

Tijdens dit project heb ik gewerkt met de Exclusive Design principles; study situation, ignore conventions, prioritise identity en add nonsense. Deze principles kwamen terug tijdens het onderzoeken, testen, itereren en bouwen van me accessibility extentie voor iemand die blind is, in dit geval Ihab.

Bij study situation heb ik gekeken naar de situatie van Ihab en hoe hij websites gebruikt met een screenreader en toetsenbord. Tijdens de user tests kwam ik erachter dat veel websites lastig zijn zonder muis en dat elke website anders werkt qua navigatie en sneltoetsen. Hierdoor ben ik functies gaan maken zoals sneltoetsen om snel naar delen van de website te gaan, focus management en opgeslagen posities zodat hij makkelijk terug kan navigeren naar een plek op de website. Ook heb ik zelf NVDA getest zodat ik beter kon begrijpen hoe een screenreader werkt en hoe de gebruiker de website ervaart.

Het principe ignore conventions zie je terug in de keuzes die ik heb gemaakt binnen de extentie. Veel websites gebruiken standaard navigatie en headings zijn normaal bijvoorbeeld niet focusbaar. Meestal start de tab index links boven van de website. Ik heb ervoor gekozen om headings focusbaar te maken zodat gebruikers makkelijker ergens naartoe kunnen navigeren. Ook heb ik sneltoetsen toegevoegd met Alt + 1 t/m 4 om snel naar bepaalde onderdelen van de website te springen. Daarnaast heb ik Alt + S toegevoegd zodat je een positie kan opslaan. Dit zijn geen standaard interacties op websites maar voor deze gebruiker werkte dit juist beter.

Prioritise identity was belangrijk tijdens het hele project omdat ik niet ontwierp voor een standaard gebruiker maar specifiek voor iemand die blind is. Hierdoor lag de focus meer op toegankelijkheid en gebruiksgemak dan op alleen een mooie website maken. Tijdens de user tests luisterde ik veel naar de feedback en wensen van Ihab. Bijvoorbeeld dat hij liever audio feedback wilde in plaats van popup meldingen en dat sommige sneltoetsen niet handig waren omdat screenreaders al eigen shortcuts gebruiken. Zijn feedback heeft veel invloed gehad op hoe het eindproduct eruit ziet.

Het principe add nonsense zie je terug in kleine grappige toevoegingen binnen de extentie. Bijvoorbeeld het anime punch geluid wanneer je een opgeslagen positie verwijderd. Dit geluid heeft niet echt een functie voor de normale gebruiker maar maakt de extentie wat persoonlijker en minder saai voor Ihab. Tijdens de user test gaf Ihab aan dat hij dit grappig vond en dat zulke kleine toevoegingen de experience leuker maken.

Door deze principles toe te passen ben ik anders gaan kijken naar design. Ik heb geleerd dat je niet altijd standaard regels hoeft te volgen maar juist moet kijken naar de gebruiker en zijn situatie. Ook heb ik geleerd hoe belangrijk testen en itereren is binnen Human Centred Design, en over het algemeen.
