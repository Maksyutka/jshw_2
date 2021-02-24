let num = prompt("Введите пятиразрядое число");

function reverseStr(string) {
    return string.split("").reverse().join("");
}

let reversed = reverseStr(num);

if (num == reversed) {
    alert("Число является палиндромом");
} else {
    alert("Число не является палиндромом");
}