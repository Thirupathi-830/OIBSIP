function convertTemperature() {
    const tempInput = document.getElementById('tempInput');
    const unitSelect = document.getElementById('unitSelect');
    const resultDiv = document.getElementById('result');
    
  
    if(isNaN(tempInput.value) || tempInput.value === '') {
        resultDiv.textContent = 'Please enter a valid number!';
        resultDiv.className = 'result-container error';
        return;
    }

    const inputTemp = parseFloat(tempInput.value);
    const fromUnit = unitSelect.value;
    
   
    let celsius, fahrenheit, kelvin;
    
    switch(fromUnit) {
        case 'celsius':
            celsius = inputTemp;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
        case 'fahrenheit':
            fahrenheit = inputTemp;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            break;
        case 'kelvin':
            kelvin = inputTemp;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
    }

    
    const results = [
        `${celsius.toFixed(2)} °C`,
        `${fahrenheit.toFixed(2)} °F`,
        `${kelvin.toFixed(2)} K`
    ].filter(r => !r.includes(inputTemp.toFixed(2)));

    resultDiv.innerHTML = `<strong>Converted Temperatures:</strong><br>${results.join('<br>')}`;
    resultDiv.className = 'result-container success';
}

document.getElementById('tempInput').addEventListener('keypress', function(e) {
    const allowedChars = ['0','1','2','3','4','5','6','7','8','9','.','-'];
    if(!allowedChars.includes(e.key)) {
        e.preventDefault();
    }
});