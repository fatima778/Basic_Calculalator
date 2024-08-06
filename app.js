function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function divi(a, b) {
    if (b === 0) {
        alert("Error: Division by zero is not allowed");
        return null;
    } else {
        return a / b;
    }
}

function calculator() {
    const a = parseFloat(document.getElementById("1st").value);
    const b = parseFloat(document.getElementById("2nd").value);
    const c = document.getElementById("op").value.trim();

    let result;

    switch (c) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = sub(a, b);
            break;
        case "*":
            result = multi(a, b);
            break;
        case "/":
            result = divi(a, b);
            break;
        default:
            alert("Invalid Operator");
            return;      
    }

    document.getElementById("result").value = result;
    
}

// alert("Result "+calculator());
calculator();
