# Inlämning laboration 1, 1dv610
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

Jag har gjort ett enkelt kodexempel (example.js) som användaren kan titta på för att förstå hur modulen kan användas.
Jag har även skrivit instruktioner i [readme](https://github.com/kw222mi/time_component/blob/main/README.md) filen.
För att det ska vara enkelt att använda så låter jag användaren skicka in parametrar och värden när objektet skapas. Användaren behöver inte skicka in parametrarna i en viss ordning utan behöver bara veta vilken nyckel och vilket värde som ska användas.
​
## Beskrivning av min kod

- Min modul består av en enda klass, Timer.js. Timer-klassen ansvarar för nedräkning av tid i form av siffror och progressbar. Den har även ansvar för att meddela när tiden har gått ut, samt för att stoppa nedräkningen.

- Style.css innehåller minimalt med css, främst för progressbaren.

- Index.html finns för att kunna köra igång.

- En liten klass exempel.js finns för att visa hur Timer fungerar

​
## Hur jag testat
I och med att min modul är till största delen grafisk så har jag gjort manuella testfall och output presenteras som bilder. Jag har testat alla funktioner som är riktade till användaren av modulen i och med det så täcker testerna alla funktioner i min modul, även om varje funktion inte testas var för sig.
​
### Sammanfattning av testfall


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

* Progressbaren börjar ticka innan tiden startar, så den ligger lite före, detta syns inte med input 100000, men buggen borde ju finnas där också.

mer info i testrapport.md 

​
## Kodkvalitetskrav
​
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

Jag är glad att jag valde en relativt liten och enkel modul så att jag kunde koncentrera mig på kodkvalité snarare än att få ihop koden. Jag tycker att uppgiften har varit mycket givande och jag har lärt mig mycket. Jag uppfattar kodkvalitet som lätt, det finns regler att följa och dessa är logiska och tydliga. Man förstår varför det är bra att göra det som står i boken och jag ser att koden blir mycket bättre när jag följer reglerna. Samtidigt är kodkvalitet svårt. Det är lätt att bli hemmablind när man sitter där i sin egen lilla värld. Man förstår precis vad alla namn betyder och metoderna är glasklara. Förmodligen är det inte lika glasklart för någon annan som tittar på koden. Jag märker ju också nu när jag suttit och analyserat och dokumenterat att jag hittar nya saker som kan förbättras. Delar av metoder som borde brytas ut och namn som kunde vara bättre.

Jag märkte under arbetet med koden att det blev problem när jag lade till vissa typer av funktion. Som när jag implementerade att timern skulle stoppas när muspekaren fördes över. Jag fick införa en boolean - isPaused, och denna kom att påverka flera olika delar av koden. Många metoder var tvugna att testa om timern var pausad eller inte vilket medförde att de helt plötligt gjorde två saker och jag var tvungen att strukturera om koden helt. Jag har även haft problem med att det blir sidoeffekter, som set timerTime som även sätter igång timern genom att skicka tiden den tar emot från användaren vidare till metoden checkIfTimeIsUp.

Jag gillar tanken på att koden ska berätta en historia. När jag läste programmering för ca 15 år sedan fick jag lära mig att skapa en main metod som var själva programmet och bestod av endast metodanrop. Det blev väldigt likt att berätta en historia och jag tyckte att det gav en bra överblick. Man programmerar ju inte riktigt på samma sätt idag och jag tycker att det är mycket svårare att få till den där berättelsen särskilt om man har event inblandade som kan utlösas lite när och då och inte har någon given plats i kronologin.






