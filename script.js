const randomBtn = document.getElementById('randomBtn');

const listeDeTiroir = document.querySelectorAll('.tiroir');
const listeDeListe = document.querySelectorAll('.liste');

for (let i = 0; i < listeDeTiroir.length; i++) {
    listeDeTiroir[i].addEventListener('click', () => {
        listeDeListe[i].classList.toggle('liste')
    })
}
    // générer une liste de prénoms
const prenoms = [
    "Bayram Barbu", 
    "Samir S'amuse", 
    "Thomas Têtu", 
    "Mélina Marrante", 
    "Fabrice Fabulous", 
    "Loïc L'ancien", 
    "Gary Gourmand", 
    "Loïc Le jeune",
    "Alex Amusant", 
    "Quentin Qui est là", 
    "Lydie Loquace", 
    "Nesrine Nouvelle", 
    "Maxime Maboule", 
    "Rémy Raleur", 
    "Jérôme Joyeux", 
    "Nicolas Nabot", 
    "Guillaume Gogole", 
    "Samra Survivante"
];

 randomBtn.addEventListener('click', function(){
    // Générer un index aléatoire
    let index = Math.floor(Math.random() * prenoms.length);
    // Afficher le prénom correspondant à l'index aléatoire
    let prenom = prenoms[index];
    randomBtn.innerText = prenom;
    setTimeout(() => {
        randomBtn.innerText = "Random Apprenant"
    }, 3000 );     
});

