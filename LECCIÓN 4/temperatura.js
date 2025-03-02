function fahrenheitACelcius(fahrenheit){        // Fahrenheit a Celcius
    return (fahrenheit - 32) * 5/9 + "°C";
}

function celciusAFahrenheit(celcius){       // Celcius a Fahrenheit
    return (celcius * 9/5) + 32 + "°F";
}

// Llamar a las funciones

console.log("20°C en Fahrenheit es igual a: ", celciusAFahrenheit(20));
console.log("68°F en Celcius es igual a: ", fahrenheitACelcius(68),);
console.log("32°F en Celsius es igual a: ", fahrenheitACelcius(32),);