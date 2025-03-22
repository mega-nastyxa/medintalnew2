// document.getElementById('menuButton').addEventListener('click', function() {
//     alert('Меню открыто!'); // Здесь можно добавить логику для открытия меню
// });

// document.addEventListener("DOMContentLoaded", function() {
//    document.getElementById("menuButton").addEventListener("click", function() {
//     document.querySelector("container__header").classList.toggle("open")
//    })
// })

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menuButton").addEventListener("click", function() {
        document.querySelector(".container__header").classList.toggle("open");
    });
});