document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM content loaded');

  // Add this JavaScript code to your page
  setTimeout(function() {
    document.querySelector('.glass-box').classList.add('show-box');
  }, 500); // 500ms = 0.5 seconds

  // Warte kurz, bevor die Box angezeigt wird
  setTimeout(() => {
    console.log('Timeout function executed');
    document.querySelector('.glass-box').classList.add('show-box');
    document.querySelector('.fullscreen-img').classList.add('blur-background');
  }, 500); // Zeitverzögerung, um den Effekt sichtbar zu machen

  // Add event listener to glass box
  document.querySelector('.glass-box').addEventListener('mouseover', function() {
    console.log('Mouse over event triggered');
    this.classList.add('show-box');
    document.querySelector('.fullscreen-img').classList.add('blur-background');
  });

  let kaufenButton = document.querySelector('.kaufen-button');
  let extraRabattElement = document.querySelector('.extra-rabatt');

  // Retrieve the stored rabattProzent value from localStorage
  let storedRabattProzent = localStorage.getItem('rabattProzent');
  let rabattProzent = storedRabattProzent ? parseInt(storedRabattProzent) : 0;

  // Update the extraRabattElement text content with the retrieved value
  extraRabattElement.textContent = `Extra Rabatt: ${rabattProzent}%`;

  kaufenButton.addEventListener('click', function() {
    rabattProzent  = Math.min(rabattProzent + 5, 90); // Increase rabatt percentage by 5% each click
    localStorage.setItem('rabattProzent', rabattProzent); // Store the updated value in localStorage
    extraRabattElement.textContent = `Extra Rabatt: ${rabattProzent}%`; // Update the text content with the new rabatt percentage
  });

  let resetButton = document.querySelector('.reset-rabatt-button');

  resetButton.addEventListener('click', function() {
    // Reset all rabatt-related values to their default state
    localStorage.removeItem('rabattProzent');
    localStorage.removeItem('extraRabatt');
    localStorage.removeItem('gesamtRabatt');

    // Reset the system values
    rabattProzent = 0;
    extraRabatt = 0;
    gesamtRabatt = 0;

    // Reset the UI elements to their default state
    document.querySelector('.extra-rabatt').textContent = 'Extra Rabatt: 0%';
    document.querySelector('.gesamt-rabatt').textContent = 'Gesamt Rabatt: 0%';
  });
});