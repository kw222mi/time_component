# Testrapport

## Hur jag testat
Eftersom min modul är grafisk så har jag gjort manuella testfall. Outputen från testerna presenteras här som bilder. Jag har testat alla funktioner som är riktade till användaren av modulen, i och med det så täcker testerna alla funktioner i min modul, även om varje funktion inte testas var för sig.

Min modul har ett antal default inställningar som går in om inte användaren har gjort något eget val. Under testet har jag testat utifrån att jag är en användare och har därför låtit defaulten gå in där jag inte gjort några val.

## Testfall

### Funktion displayElement
Funktion där användaren skickar in en referens till ett div element där modulen ska placeras. Om användaren inte skickar in någnting, eller skickar någon annan typ av element skapas ett nytt div-element som sedan läggs till i body-elementet (och användaren kan alltså inte styra var timern hamnar). 

input: DIV-referens

![bild1](/time_component//time_component/public/test_img/1.png)

input: P-referens

![bild1](/time_component//time_component/public/test_img/2.png)

input: ingen referens

![bild1](/time_component//time_component/public/test_img/3.png)

input: IMG- referens

![bild1](/time_component//time_component/public/test_img/4.png)

### Funktion timerTime
Funktion där användaren anger tiden som ska räknas ner i sekunder.

input: 0

![bild1](/time_component//time_component/public/test_img/5.png)

input: -5

![bild1](/time_component//time_component/public/test_img/6.png)


input: 30

![bild1](/time_component//time_component/public/test_img/7.png)

Fail eftersom progressbar börjar räkna ner innan tiden startat.

input: 100000

![bild1](/time_component//time_component/public/test_img/8.png)

Antar att det blir samma typ av fail som i förra testet, men att det inte syns så tydligt här.

### Funktion pauseOnHover

Timern pausas när man ställer muspekaren över.

input: true

output: Nedräkningen stoppas tills muspekaren lämnar timern.

input: false

output: Nedräkningen fortsätter oavvsett var muspekaren befinner sig.

### Funktion timeIsUpAction

Det finns tre olika val för vad som ska hända när tiden är slut. Timerns bakgrund kan ändras till röd, man kan få en pop up ruta som meddelar att tiden är ute, eller så kan man få ett ljud. Problemet med ljudet är att web läsaren inte tillåter att ljud spelas upp utan användarens tillåtelse så timern måste då startas med en knapp

input: color

![bild1](/time_component//time_component/public/test_img/11.png)

input: alert

![bild1](/time_component//time_component/public/test_img/12.png)

input: sound

![bild1](/time_component//time_component/public/test_img/13.png)

### Funktion tenSecondsLeftWarning

Med tio sekunder kvar ändras bakgrundsfärgen till orange.

input: true

![bild1](/time_component//time_component/public/test_img/14.png)

input: false

![bild1](/time_component//time_component/public/test_img/15.png)

### Funktion showProgressBar

input: true 

![bild1](/time_component//time_component/public/test_img/16.png)

input: false

![bild1](/time_component//time_component/public/test_img/17.png)

### Funktioner update() och remove()

Funktionerna ska uppdatera timern med nya värden, samt ta bort den. Här har jag kört exempel koden som finns i example.js

input:

![kod](/time_component//time_component/public/test_img/kod.png)

output: Timern startas med tiden 30 sekunder, progressbar och pause on hover. 

Efter 5 sekunder ändras tiden till 60 sekunder.

Efter ytterligare 5 sekunder tas timern bort och försvinner från sidan.

