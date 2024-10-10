// function NumberUP() {
//     var num = 23.00000001;
//     return Math.ceil(num);
// }
// console.log(NumberUP());

// function NumberDown() {
//     var num = 23.00000001;
//     return Math.floor(num);
// }
// console.log(NumberDown());

// function NumberRound() {
//     var num = 23.00000001;
//     return Math.round(num);
// }
// console.log(NumberRound());

// function GetRandomNumber(a, b) {
//     if (a > b) {
//         [a, b] = [b, a];
//     }
//     return Math.floor(Math.random() * (b - a + 1)) + a;
// }
// console.log(GetRandomNumber(1, 10));

// function RandomWeekDay() {
//     var DaysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//     var RandomIndex = Math.floor(Math.random() * DaysOfWeek.length);
//     var RDaysOfWeek = DaysOfWeek[RandomIndex];
//     console.log(RDaysOfWeek);
// }
// RandomWeekDay();

// function DisplayRandomPictureAndMonthNumber() {
//     var Images = [
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToMRHYB9q7YDItUxvoHyxRLcuW3Jr8ZezdQ&s",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToMRHYB9q7YDItUxvoHyxRLcuW3Jr8ZezdQ&s",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToMRHYB9q7YDItUxvoHyxRLcuW3Jr8ZezdQ&s",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToMRHYB9q7YDItUxvoHyxRLcuW3Jr8ZezdQ&s",
//     ];

//     var randomNumber = Math.floor(Math.random() * 31) + 1;
//     var randomIndex = Math.floor(Math.random() * Images.length);
//     var randomImage = Images[randomIndex];

//     var imgElement = document.createElement("img");
//     imgElement.src = randomImage;
//     imgElement.alt = "Random Picture";
//     imgElement.style.width = "300px";
//     document.body.appendChild(imgElement);

//     var numberElement = document.createElement("p");
//     numberElement.textContent = "Random Number: " + randomNumber;
//     document.body.appendChild(numberElement);
// }

// document.getElementById("b1").addEventListener("click", function() {
//     DisplayRandomPictureAndMonthNumber();
// });

// DisplayRandomPictureAndMonthNumber();
