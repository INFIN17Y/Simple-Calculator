function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operator = document.getElementById("operator").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return false;
    }

    var result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Cannot divide by zero");
                return false;
            }
            break;
        default:
            alert("Invalid operator");
            return false;
    }

    document.getElementById("result").innerHTML = result;
    return false;
}

function reset() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("result").value = "";
}
