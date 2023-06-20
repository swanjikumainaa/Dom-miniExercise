// Get the current year
const currentYear = new Date().getFullYear();

// Get the elements
const yearElement = document.getElementById('h1');
const dateAndTimeElement = document.querySelector('h2');
const challengeList = document.querySelectorAll('li');

// Function to change the color of the year every 1 second
function changeYearColor() {
  const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  yearElement.style.color = randomColor;
}

// Function to change the background color of the date and time every 1 second
function changeDateAndTimeBackgroundColor() {
  const colors = ['yellow', 'cyan', 'magenta', 'lime', 'skyblue', 'lightcoral'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  dateAndTimeElement.style.backgroundColor = randomColor;
}

// Function to set the background color of each challenge
function setChallengeBackgroundColor(challenge) {
  if (challenge.textContent.includes('Done')) {
    challenge.style.backgroundColor = 'green';
  } else if (challenge.textContent.includes('Ongoing')) {
    challenge.style.backgroundColor = 'yellow';
  } else {
    challenge.style.backgroundColor = 'red';
  }
}

// Set initial background colors for challenges
challengeList.forEach(setChallengeBackgroundColor);

// Change year color every 1 second
setInterval(changeYearColor, 1000);

// Change date and time background color every 1 second
setInterval(changeDateAndTimeBackgroundColor, 1000);
