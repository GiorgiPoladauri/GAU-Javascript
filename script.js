function CalcFactorial(n) {

    if ( n == 0 || n == 1) {
        return 1;
    }

    let Result = 1;

    for (let i = 2; i <= n; i++) {
        Result *= i
    }

    return Result;
}

console.log(CalcFactorial(120));

//

function SumOfDigits(num) {

    let sum = 0;

    while (num > 0) {
        sum += num % 10;

        num = Math.floor(num / 10)
    }

    return sum;
}

console.log(SumOfDigits(12))

//

function GreetUser() {

    Name = document.getElementById("InputedName").value;

    document.getElementById("Greeter").textContent = "Hello, " + Name;
}

//

function GenerateTable() {

    Width = document.getElementById("Width").value;
    Height = document.getElementById("Height").value;

    if(isNaN(Width) || isNaN(Height) || Width <= 0 || Height <= 0) {
        alert("INPUT POSITIVE NUMBERS BROTHER ! DON'T TRY TO FOOL ME... ");
        return;
    }

    Table = document.createElement("table")

    for (let i = 0; i < Height; i++) {

        Row = document.createElement("tr");
    
        for (let j = 0; j < Width; j++) {

          Cell = document.createElement("td");
          Cell.textContent = `Row ${i + 1}, Col ${j + 1}`;  
          Row.appendChild(Cell);
        }
    
        Table.appendChild(Row);
      }
    
      TableContainer = document.getElementsByClassName("div2")[0];
      TableContainer.innerHTML = ""; 
      TableContainer.appendChild(Table);
}