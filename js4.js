let year = parseInt(prompt("Введите год"));

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    alert("Ваш год высокосный!");
} else {
    alert("Ваш год не высокосный!");
}

