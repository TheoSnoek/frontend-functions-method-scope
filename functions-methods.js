// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(eMail) {
    for (let i = 0; i < eMail.length; i++) {
        if (eMail.charAt(i) === "@") {
            domain = eMail.substring(i + 1, eMail.length);
            return domain;
        }
    }
}
const mail1 = getEmailDomain("n.eeken@novi-education.nl");
const mail2 = getEmailDomain("t.mellink@novi.nl");
const mail3 = getEmailDomain("a.wiersma@outlook.com");

console.log(mail1);
console.log(mail2);
console.log(mail3);



/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(eMail)     {
    for (let i = 0; i < eMail.length; i++) {
        if (eMail.charAt(i) === "@") {
            domain = eMail.substring(i + 1, eMail.length);

            if (domain === "novi-education.nl") {
                return "Student";
            } else if (domain === "novi.nl") {
                return "Medewerker";
            } else {
                return "Extern";
            }
        }
    }
}

const type1 = typeOfEmail("n.eeken@novi-education.nl");
const type2 = typeOfEmail("t.mellink@novi.nl");
const type3 = typeOfEmail("a.wiersma@outlook.com");
const type4 = typeOfEmail("novi.nlaapjesk@outlook.com");

console.log("Nova: " + type1);
console.log("Tess: " + type2);
console.log("Arjen: " + type3);
console.log("Aapjes: " + type4)

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(mailAdress) {
    if (!mailAdress.includes("@"))  {
        return false;
    } else if (mailAdress.includes(",")){
        return false;
    } else if (mailAdress.lastIndexOf(".") === mailAdress.length-1)  {
        return false;
    } else  {
        return true;
    }
}

const adress1 = checkEmailValidity("n.eeken@novi.nl");
const adress2 = checkEmailValidity("tessmellink@novi.nl");
const adress3 = checkEmailValidity("n.eekenanovi.nl");
const adress4 = checkEmailValidity("n.eeken@novinl.");
const adress5 = checkEmailValidity("tessmellink@novi,nl");

console.log("Nova: " + adress1);
console.log("Tess: " + adress2);
console.log("Nova zonder apestaartje: " + adress3);
console.log("Nova zonder extensie: " + adress4);
console.log("Tess met komma: " + adress5);