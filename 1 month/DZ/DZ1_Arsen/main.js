// let rating = prompt("Оцените наш сервис от 1 до 10:");
//
// if (isNaN(rating)) {
//     alert("Пожалуйста, введите число от 1 до 10!");
// } else {
//     rating = parseInt(rating);
//     if (rating > 5) {
//         alert("Спасибо за высокую оценку!");
//     } else {
//         alert("Мы работаем над улучшением сервиса!");
//     }
// }





let lang = prompt("Введите язык (ru или en):");

if (lang === "ru") {
    console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
} else if (lang === "en") {
    console.log(['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']);
} else {
    alert("ERROR");
}

