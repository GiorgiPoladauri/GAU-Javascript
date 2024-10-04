function TextStyle1() {
    var TakeCommand1 = document.getElementById("p1");
    TakeCommand1.classList.toggle("TextStylecss");
}

function CalculateSum() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("sumnum").innerText = "The sum of " + num1 + " and " + num2 + " is: " + sum;
}

function changeTextSize() {
    var textInput = document.getElementById("textInput").value;
    var fontSize = document.getElementById("fontSize").value;
    var displayText = document.getElementById("displayText");
    displayText.innerText = textInput;
    displayText.style.fontSize = fontSize + "px";
}

function generateTable() {
    var width = document.getElementById("width").value;
    var tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = '';
    var table = document.createElement("table");
    table.style.width = width + "px";
    for (var i = 0; i < 2; i++) {
        var row = table.insertRow();
        for (var j = 0; j < 2; j++) {
            var cell = row.insertCell();
            cell.innerText = `Row ${i + 1}, Cell ${j + 1}`;
        }
    }
    tableContainer.appendChild(table);
}

function createTable() {
    var tableWidth = document.getElementById("inputWidth").value;
    var tableHeight = document.getElementById("inputHeight").value;
    var tableDisplay = document.getElementById("tableDisplay");
    tableDisplay.innerHTML = '';
    var table = document.createElement("table");
    table.style.width = tableWidth + "px";
    table.style.height = tableHeight + "px";
    for (var i = 0; i < 2; i++) {
        var row = table.insertRow();
        for (var j = 0; j < 2; j++) {
            var cell = row.insertCell();
            cell.innerText = `Cell (${i + 1}, ${j + 1})`;
            cell.style.height = tableHeight / 2 + "px";
        }
    }
    tableDisplay.appendChild(table);
}

function generateCustomTable() {
    var backgroundColor = document.getElementById("bgColor").value;
    var borderWidth = document.getElementById("borderThickness").value;
    var tableWidth = document.getElementById("customWidth").value;
    var tableHeight = document.getElementById("customHeight").value;
    var tableOutput = document.getElementById("tableOutput");
    tableOutput.innerHTML = '';
    var table = document.createElement("table");
    table.style.width = tableWidth + "px";
    table.style.height = tableHeight + "px";
    table.style.backgroundColor = backgroundColor;
    table.style.border = borderWidth + "px solid black";
    for (var i = 0; i < 2; i++) {
        var row = table.insertRow();
        for (var j = 0; j < 2; j++) {
            var cell = row.insertCell();
            cell.innerText = `Cell (${i + 1}, ${j + 1})`;
            cell.style.height = tableHeight / 2 + "px";
        }
    }
    tableOutput.appendChild(table);
}

function createCustomTable() {
    var rows = parseInt(document.getElementById("rowCount").value);
    var cols = parseInt(document.getElementById("colCount").value);
    var width = parseInt(document.getElementById("tableWidth").value);
    var height = parseInt(document.getElementById("tableHeight").value);
    var backgroundColor = document.getElementById("bgColor").value;
    var borderWidth = parseInt(document.getElementById("borderThickness").value);
    var tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = '';
    var table = document.createElement("table");
    table.style.width = width + "px";
    table.style.height = height + "px";
    table.style.backgroundColor = backgroundColor;
    table.style.border = borderWidth + "px solid black";
    for (var i = 0; i < rows; i++) {
        var row = table.insertRow();
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell();
            cell.innerText = `Cell (${i + 1}, ${j + 1})`;
            cell.style.height = (height / rows) + "px";
        }
    }
    tableContainer.appendChild(table);
}
