// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

let numberCumLaudes = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8)     {
        numberCumLaudes++;
    }
}

console.log("Aantal Cum Laude cijfers (1a): " + numberCumLaudes);

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

function cumLaude(grades2) {
    let numberCumLaudes2 = 0;

    for (let i = 0; i < grades2.length; i++)    {

        if (grades2[i] >= 8)    {
            numberCumLaudes2++;
        }
    }
    return numberCumLaudes2;
}

const array1 = [6, 4, 5];
const array2 = [8, 9, 4, 6, 10];

console.log("Aantal Cum Laude cijfers in grades: " + cumLaude(grades));
console.log("Aantal Cum Laude cijfers [6, 4, 5]: " + cumLaude(array1));
console.log("Aantal Cum Laude cijfers [8, 9, 4, 6, 10]: " + cumLaude(array2));

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3
function cumLaude(grades2) {
    let numberCumLaudes2 = 0;

    for (let i = 0; i < grades2.length; i++)    {

        if (grades2[i] >= 8)    {
            numberCumLaudes2++;
        }
    }
    return numberCumLaudes2;
}

const array3 = [6, 4, 5];
const array4 = [8, 9, 4, 6, 10];

console.log("Aantal Cum Laude cijfers in grades: " + cumLaude(grades));
console.log("Aantal Cum Laude cijfers [6, 4, 5]: " + cumLaude(array3));
console.log("Aantal Cum Laude cijfers [8, 9, 4, 6, 10]: " + cumLaude(array4));

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

function averageGrade(grades3) {
    let numberOfGrades = 0;
    let totalGrades = 0;

    for (let i = 0; i < grades3.length; i++)    {
        numberOfGrades = numberOfGrades + 1;
        totalGrades = totalGrades + grades3[i];
    }
    return (totalGrades/numberOfGrades);
}

console.log("Het gemiddelde cijfer is: " + averageGrade(grades));

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

console.log(averageGrade(grades));
console.log(array3);
console.log(array4);
/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

let averageTwodecimals = Math.round(100 * averageGrade(grades)) / 100;
console.log("Het gemiddelde cijfer is: " + averageTwodecimals);



/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

let highGrade = 0;

for (let i = 0; i < grades.length; i++) {

    if (grades[i] > highGrade)   {
        highGrade = grades[i];
    }
}
console.log("Het hoogste cijfer is: " + highGrade);

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function highestGrade(grades4) {
    let highest = 0;

    for (let i = 0; i < grades4.length; i++) {
        if (grades4[i] > highest) {
            highest = grades4[i];
        }
    }
    return highest;
}
console.log("Het hoogste cijfer is: " + highestGrade(grades));
console.log("Het hoogste cijfer is: " + highestGrade(array1));
console.log("Het hoogste cijfer is: " + highestGrade(array2));