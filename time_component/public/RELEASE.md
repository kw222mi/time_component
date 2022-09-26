# Mall för inlämning laboration 1, 1dv610
​
## Checklista
  - [X] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [X] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
  - [X] Koden är objektorienterad
  - [X] Jag har skrivit en modul som riktar sig till programmerare
​
## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
  - [X] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [X] De flesta testfall fungerar
    - [X] Koden är förberedd på Återanvändning
    - [X] All kod samt historik finns i git 
    - [X] Kodkvaliterskraven är ifyllda
    - [X] Reflektion är skriven utifrån bokens kapitel 
  - [ ] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [ ] Samtliga testfall är skrivna    
    - [ ] Testfall är automatiserade
    - [ ] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [ ] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 
​
Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 
​
## Återanvändning
Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda din modul. Om du skrivit instruktioner för din användare, länka till dessa. Om inte, beskriv här hur någon skall göra för att använda din modul.
​
## Beskrivning av min kod
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. Använd det ni lärt er så här långt i 1dv607. Kommunicera så att jag kan förstå.
​
## Hur jag testat
I och med att min modul är till största delen grafisk så har jag gjort manuella testfall och output presenteras som bilder. Jag har testat alla funktioner som är riktade till användaren av modulen i och med det så täcker testen alla funktioner i min modul även om varje funktion inte testas var för sig.
​
### Sammanfattning av testfall
Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall. Om ni använder vertyg för testning kan ni ha en bild här med testrapporten. Tänk på att kommunicera till mig. Vad fungerar?, vad fungerar inte? Hur är det testat? Vilka delar testas inte?
​
| Vad testas                                | input     |  | utfall PASS/FAIL |
| ------------------------------------------|-------------|--------|---------|
|    displayElement(element)                |div-referens |        |   PASS      |
|    displayElement(element)                |p-referens   |        |    PASS     |
|    displayElement(element)                | no referens |        |    PASS     |
|    displayElement(element)                |img-referens |        |    PASS     |
|    timerTime(number)                 |    0        |        |     PASS      |
|    timerTime(number)                 |    -5       |        |    PASS       |
|    timerTime(number)                 |    30       |        |    FAIL*     |
|    timerTime(number)                 | 100 000     |        |    PASS*     |
|    pauseOnHover(boolean)             |  true       |        |    PASS     |
|    pauseOnHover(boolean)             |    false    |        |    PASS      |
|   timeIsUpAction(string)             |   'color'   |        |    PASS     |
|   timeIsUpAction(string)             |   'alert'   |        |    PASS     |
|   timeIsUpAction(string)             |   'sound'   |        |    PASS     |
|   tenSecondsLeftWarning(boolean)             |   true   |        |    PASS     |
|   tenSecondsLeftWarning(boolean)             |   false   |        |    PASS     |
|   showProgressBar(boolean)             |   true   |        |    PASS     |
|   showProgressBar(boolean)             |   false   |        |    PASS     |
|   update(options)             |   kod i example.js    |        |    PASS     |
|   remove()             |   kod i example.js    |        |    PASS     |

* mer info se [testrapport](/testrapport.md)  


​
## Kodkvalitetskrav
​
**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.
​
### Namngivning
​
| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|  set pauseOnHover - namn på funktion som sätter om timern ska pausas eller ej när man för muspekaren över          |  **Use intention**        Namnet talar om vad metoden gör, men säger ingenting om hur det sker. Den tänkta användaren av metoden behöver inte heller veta vad som sker under huven, men om som utvecklare hade jag velat ha ett annat namn, som setEventListenersForPauseOnHover eller något liknande.                  |
| set displayElement - namn på en metod där användaren matar in en referens till ett HTML DIV-element för att bestämma var timern ska placeras | **Don't pun** - det finns en annan metod som heter displayTime som skriver ut tiden på skärmen. Dessa två metoder gör inte exakt samma saker. En av dem borde byta namn, kanske displayTime => showTime. **Avoid disinformation** Namnet är lite otydligt beroende på hur man betonar det när man läser (visningselement, eller visa element). |
|  timerTime | **Don't be cute** Måste erkänna att jag tog namnet för att det är lite kul och jag känner ett motstånd mot att ändra det. Å andra sidan beskriver det ganske bra vad det är. **Make meaningful distinctions** Nu är detta ett väldigt litet program, men när det sedan växer kan det bli ett problem om merparten av namnen har timer eller time i sig. Det är lätt att namn flyter ihop och ser lika ut. Det finns ingen mening med att alla variabler i programmet börjar med timer. Här är det dock befogat och ger context till time **Add meaningful context**|
|  set timeIsUpAction   | **Use intention**  Jag tycker att detta är ett bra namn som visar varför metoden finns, vad den gör och en del om hur den ska användas. **Use pronounceable names** jag använder generellt alltid namn som går lätt att uttala (som detta) och har svårt för förkortningar i koden.  |
|tenSecondsLeftWarning  | **Use searchable names** variabelnamn som är mycket lätt att söka på. Råkade ut för problemet under projektarbetet då jag gjorde en trädgårdsapp och alla variabler hette någonting med garden eller plant, sen hade jag dessutom variabler som hette bara plant och garden, dessa gick inte att söka på för jag fick upp allt. |

​
### Funktioner
​
| Metodnamn och förklaring | Antal rader | Reflektion                                   |
| ------------------- |------------- | ---------------------------------------------|
| displayElement()     |  13 rader   | **Don't repeat yourself** Här finns det duplicerad kod som skulle kunna brytas ut och göra metoden 4 rader kortare. **Use descriptive names** Namnet skulle kunna vara tydligare. Beroende på hur man betonar display och element kan betydelse tolkas olika (visningselement, eller visa element), timerDisplayElement eller elementToDisplayTimer vore kanske mer beskrivande                                           |
| set timerTime()      | 11 rader    |   **Prefer exceptions to return error codes**  Här har jag lagt in en try catch för att fånga om användaren skulle skicka in något annat än ett nummer. Dessvärre så har jag ju brutit mot **separate error handling** genom att inte bryta ut den till en egen metod. **No side effects** I slutet av denna metod så anropar jag en annan metod med den satta tiden och det är det som sätter igång hela programmet vilket inte går att utläsa från metodnamnet.                                    |
| set pauseOnHover()   | 17 rader    |   **Flag arguments** I boken skriver de att genom att skicka in en boolean som argument till en metod så bryter man nästan per automatik mot regeln om att en metod bara ska göra en sak, då själva tanken med en boolean är att göra två olika saker beroende på om det är sant eller falskt.                                      |
| timeIsUp()            | 11 rader    |     **Monadic form** I mitt programm har jag bara metoder utan argument eller med ett enda argument som denna. Det är bara en metod som har fler än ett argument och det är faktiskt en polyadic med fyra argument. Enligt boken borde jag göra globala variabler av argumenten, men då jag inte använder dem på något annat ställe så har jag valt att ha dem kvar. Argumenten följer **natural ordering** i och med att det handlar om tid (dag, time, inut, sekund), vilket också gör det lättare att hantera.                                         |
| checkifTimeIsUp()    | 12 rader    |        **Monadic form**   **Question about the argument** en metod som får en tid som argument och kollar om tiden är slut det vill säga noll. **Do one thing** Här kolar jag inte bara om tiden är slut utan kör även en koll om det är tio sekunder kvar.                                  |
​
## Laborationsreflektion

liten uppgift bra
lätt men svårt
problem när man lägger till funktion boolean
hemmablind



