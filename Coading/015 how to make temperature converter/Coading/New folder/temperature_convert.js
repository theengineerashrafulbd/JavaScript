
function convertTemp() {

    var type = document.getElementById("tempType").value;

    var temp = parseFloat(document.getElementById("tempValue").value);

    var result;

    if (type == "fahrenheit") {

        result = (temp - 32) * (5 / 9);

        document.write("Celsius = " + result);

    }

    else if (type == "celsius") {

        result = (temp * (9 / 5)) + 32;

        document.write("Fahrenheit = " + result);

    }

}
