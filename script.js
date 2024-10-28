function appendToDisplay(value) {
    const input = document.getElementById("input");
    input.value += value;
}

function clearDisplay() {
    const input = document.getElementById("input");
    const loadingMessages = [
        'Loading.',
        'Loading .',
        'Loading  .',
        'Loading.',
        'Loading .',
        'Loading  .'
    ];
    let index = 0;
    const updateLoading = () => {
        if (index < loadingMessages.length) {
            input.value = loadingMessages[index];
            index++;
            setTimeout(updateLoading, 800);
        } else {
            input.value = '';
        }
    };
    updateLoading();
}

function deleteLast() {
    const input = document.getElementById("input");
    input.value = input.value.slice(0, -1);
}

function calculateResult() {
    const input = document.getElementById("input");
    try {
        input.value = eval(input.value) || '';
    } catch {
        input.value = 'Error';
    }
}

function calculateSquareRoot() {
    const input = document.getElementById("input");
    const value = parseFloat(input.value);
    if (!isNaN(value)) {
        input.value = Math.sqrt(value);
    } else {
        input.value = 'Error';
    }
}

