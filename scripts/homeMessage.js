// Array of phrases to be typed out
var phrases = [
    "Welcome!",
    "My name is Hank Hayes",
    "Take a look around",
    "Reach out w/ questions",
];
  
// Delay between each character (in milliseconds)
var delay = 60;

// Get the <p> element
var pElement = document.getElementById("typing-effect");

// Function to simulate typing effect
function typeEffect(phraseIndex) {
    if (phraseIndex >= phrases.length) {
        pElement.textContent += phrases[phraseIndex - 1];
        return; // Stop typing when the end of the phrases is reached
    }
    
    var currentPhrase = phrases[phraseIndex];
    var i = 0;
    var intervalId = setInterval(function () {
        pElement.textContent += currentPhrase.charAt(i);
        i++;
    if (i === currentPhrase.length) {
        clearInterval(intervalId);
        setTimeout(function () {
        pElement.textContent = " "; // Clear the previous phrase
        typeEffect(phraseIndex + 1); // Type out the next phrase
        }, 1500); // Delay before typing the next phrase (in milliseconds)
    }
    }, delay);
}

// Start the typing effect when the page is loaded
window.onload = function () {
    typeEffect(0); // Start with the first phrase
};
