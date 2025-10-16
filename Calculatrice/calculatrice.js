// Sélection des éléments HTML
const premierChiffre = document.getElementById("premier_chiffre");
const deuxiemeChiffre = document.getElementById("deuxieme_chiffre");
const resultat = document.getElementById("resultat");


function division(premier_chiffre,deuxieme_chiffre){
    const division=  premier_chiffre/deuxieme_chiffre;
    resultat.textContent = `Résultat : ${division}`;
}