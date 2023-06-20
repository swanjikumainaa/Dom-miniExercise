# Dom-miniExercise
# DOM manipulation practice.
This project is a JavaScript application that demonstrates dynamic styling and functionality using the Document Object Model (DOM).
The application provides the following features:

 -Retrieving the current year using the getFullYear() method of the Date object. 
 -Selecting specific HTML elements, such as <h1>, <h2>, and <li>, using querySelector.  
 -Implementing a function called changeYearColor to dynamically change the color of the year element:
 -Generating a random color by selecting a random index from an array of color values.
 -Applying the randomly selected color to the CSS property of the year element.
 -Implementing a function called changeDateAndTimeBackgroundColor to dynamically change the background color of the date and time element:
 -Generating a random color by selecting a random index from an array of color values.
 -Applying the randomly selected color to the CSS property of the date and time element.
 -Implementing a function called setChallengeBackgroundColor to set the background color for each challenge element based on its content:
 -Setting the background color to green if the challenge is marked as "Done".
 -Setting the background color to yellow if the challenge is marked as "Ongoing".
 -Setting the background color to red for upcoming challenges.
 -Iterating over each challenge element and applying the appropriate background color using forEach and the setChallengeBackgroundColor function.
 -Utilizing setInterval to automatically execute the changeYearColor and changeDateAndTimeBackgroundColor functions every 1 second, ensuring the year color and date/time background color change at regular intervals.
