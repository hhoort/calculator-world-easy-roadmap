//  function clear all
function clearScreen() {
    document.getElementById("result").value = "";
        }
        // function display values
        function display(value) {
        document.getElementById("result").value += value;
        }
        // This function evaluates the expression and show result
        function calculate() {
        var p = document.getElementById("result").value;
        var q = eval(p);
        document.getElementById("result").value = q;
        }