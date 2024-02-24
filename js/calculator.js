function calculate() {
    var mass = parseFloat(document.getElementById('mass').value);
    var molarMass = parseFloat(document.getElementById('molarMass').value);
    var molarHeat = parseFloat(document.getElementById('molarHeat').value);


    var heat = (molarHeat * (mass / molarMass));

    if (!isNaN(heat)) {
        document.getElementById('result').innerHTML = "Heat required: " + heat.toFixed(3) + " kJ";
    } else {
        document.getElementById('result').innerHTML = "Please enter valid numbers";
    }
}