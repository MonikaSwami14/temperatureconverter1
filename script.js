function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function convertToCelsius() {
    const celsiusInput = document.getElementById('celsiusInput').value;
    const result = celsiusToFahrenheit(parseFloat(celsiusInput));
    document.getElementById('resultToFahrenheit').innerText = `${celsiusInput} Celsius is ${result} Fahrenheit`;
  }
  
  function convertToFahrenheit() {
    const fahrenheitInput = document.getElementById('fahrenheitInput').value;
    const result = fahrenheitToCelsius(parseFloat(fahrenheitInput));
    document.getElementById('resultToCelsius').innerText = `${fahrenheitInput} Fahrenheit is ${result} Celsius`;
  }
  