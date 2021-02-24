let age = parseInt(prompt("Введите Ваш возраст"));

if (age < 12) {
    alert("Ты же ещё ребенок!");
} else if (age < 17) {
    alert("Ты уже подросток!");
} else if (age < 59) {
    alert("Ура! Ты уже взрослый!")
} else {
    alert("Сочувствую, ты слишком старый.");
}