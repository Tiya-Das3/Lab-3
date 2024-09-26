function add()
{
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var result = n1 + n2;
    document.getElementById("rs").value = result;

}
function subtract()
{
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var result = n1 - n2;
    document.getElementById("rs").value = result;

}
function multiply()
{
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var result = n1 * n2;
    document.getElementById("rs").value = result;

}
function divide()
{ var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var result = n1 / n2;
    document.getElementById("rs").value = result;
}
function clearFields() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("rs").value = "";
}