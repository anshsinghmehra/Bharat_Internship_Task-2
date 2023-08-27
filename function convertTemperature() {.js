function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const selectedUnit = document.getElementById("unitSelect").value;
    
    let convertedResults = "";
    
    if (selectedUnit === "celsius") {
        convertedResults += `Celsius: ${temperatureInput}°C<br>`;
        convertedResults += `Kelvin: ${(temperatureInput + 273.15).toFixed(2)} K<br>`;
        convertedResults += `Fahrenheit: ${((temperatureInput * 9/5) + 32).toFixed(2)}°F`;
    } else if (selectedUnit === "kelvin") {
        convertedResults += `Celsius: ${(temperatureInput - 273.15).toFixed(2)}°C<br>`;
        convertedResults += `Kelvin: ${temperatureInput} K<br>`;
        convertedResults += `Fahrenheit: ${(((temperatureInput - 273.15) * 9/5) + 32).toFixed(2)}°F`;
    } else if (selectedUnit === "fahrenheit") {
        convertedResults += `Celsius: ${((temperatureInput - 32) * 5/9).toFixed(2)}°C<br>`;
        convertedResults += `Kelvin: ${(((temperatureInput - 32) * 5/9) + 273.15).toFixed(2)} K<br>`;
        convertedResults += `Fahrenheit: ${temperatureInput}°F`;
    }

    document.getElementById("convertedResults").innerHTML = convertedResults;
}