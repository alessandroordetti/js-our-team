/* Viene fornito un array di oggetti in allegato in cui è definito un array di oggetti che rappresentano i membri del team.

Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

MILESTONE 1:
stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
trasformare la stringa foto in una immagine effettiva

BONUS 2:
organizzare i singoli membri in card/schede
 */

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

/* Stampiamo a schermo le informazioni dell'oggetto classi */
for (let key in team) {
    console.log(team[key]);
}



let wayneInfos = document.getElementById('Wayne-infos');
let angelaInfos = document.getElementById('Angela-infos');
let walterInfos = document.getElementById('Walter-infos');
let angelaLopezInfos = document.getElementById('Angela-Lopez-infos');
let scottInfos = document.getElementById('Scott-infos');
let barbaraInfos = document.getElementById('Barbara-infos');

let arrayOfNames = [];

let arrayOfRoles = [];

for (let i = 0; i < 6; i++) {
    arrayOfNames.push(team[i].name);
    arrayOfRoles.push(team[i].role);
}

console.log(arrayOfNames);
console.log(arrayOfRoles);

let cardImage = "";

for (let i = 0; i < team.length; i++) {
    cardImage += `<img src="img/${team[i].image}" alt="Immagine di persona del team">`;
};

console.log(cardImage);

wayneInfos.innerHTML = team[0].name + " ";
wayneInfos.innerHTML += team[0].role;

angelaInfos.innerHTML = team[1].name + " ";
angelaInfos.innerHTML += team[1].role;

walterInfos.innerHTML = team[2].name + " ";
walterInfos.innerHTML += team[2].role;

angelaLopezInfos.innerHTML = team[3].name + " ";
angelaLopezInfos.innerHTML += team[3].role;

scottInfos.innerHTML = team[4].name + " ";
scottInfos.innerHTML += team[4].role;

barbaraInfos.innerHTML = team[5].name + " ";
barbaraInfos.innerHTML += team[5].role;
