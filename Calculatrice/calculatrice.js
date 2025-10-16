// Sélection des éléments HTML
const premierChiffre = document.getElementById("premier_chiffre");
const deuxiemeChiffre = document.getElementById("deuxieme_chiffre");
const resultat = document.getElementById("resultat");

// Fonction de multiplication
function multiplier() {
const a = parseFloat(premierChiffre.value);
const b = parseFloat(deuxiemeChiffre.value);

// Vérifie que les deux valeurs sont bien des nombres
if (isNaN(a) || isNaN(b)) {
    resultat.textContent = "⚠️ Entrez deux nombres valides.";
    return;
}

// Calcul du produit
const produit = a * b;
resultat.textContent = `Résultat : ${produit}`;
}

// Exécution automatique à chaque saisie
premierChiffre.addEventListener("input", multiplier);
deuxiemeChiffre.addEventListener("input", multiplier);

