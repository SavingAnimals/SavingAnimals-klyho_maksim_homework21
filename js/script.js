function task1(e) {
    e.preventDefault();
    let persName = document.getElementById("myName").value;
    alert(`Привет ${persName} !!!`)
}

function task2(e) {
    e.preventDefault();
    let age = document.getElementById("age").value;
    const year = 2020;
    alert(`Твой возраст ${year - age} лет`);
}

function task3(e) {
    e.preventDefault();
    let sideLenght = document.getElementById("sideLenght").value;
    document.getElementById("sideLenghtResault").value = sideLenght * 4;
}

function task4(e) {
    e.preventDefault();
    let circleR = document.getElementById("circleR").value;
    let p = 3.14;
    document.getElementById("circleLenght").value = (p * circleR) * (p * circleR);
}

function task5(e) {
    e.preventDefault();
    let km = document.getElementById("km").value;
    let time = document.getElementById("time").value;
    document.getElementById("speed").value = km / time;
}

function task6(e) {
    e.preventDefault();
    let grivna = document.getElementById("grivna").value;
    let kurs = 27.2;
    document.getElementById("dollar").value = grivna / kurs;
}

function task7(e) {
    e.preventDefault();
    let usbSize = document.getElementById("usbSize").value;
    const gigaBite = 1024;
    document.getElementById("fileCount").value = usbSize * gigaBite / 820;
}

function task8(e) {
    e.preventDefault();
    let money = document.getElementById("money").value;
    let price = document.getElementById("price").value;
    document.getElementById("chocolate").value = money / price;
    document.getElementById("last").value = money % price;
}

function task9(e) {
    e.preventDefault();
    const value = document.getElementById("value").value;
    const a = value % 100;
    const c = a % 10;
    const b = (value - a) / 100;
    const d = (a - c) / 10;
    document.getElementById("valueResault").value = `${c}${d}${b}`;
}

function task10(e) {
    e.preventDefault();
    let sum = document.getElementById("sum").value;
    let month = document.getElementById("month").value;
    document.getElementById("profit").value = sum * 0.05 / 12 * month;
}

