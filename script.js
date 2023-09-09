// Sample data for golf scores
const golfScores = [];

// Function to display the scorecard
function displayScorecard() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = "";

    for (let i = 0; i < golfScores.length; i++) {
        const score = golfScores[i];
        scoreboard.innerHTML += `<p> Hole ${i + 1}: ${score} </p>`;
    }
}

// Function to add a score
function addScore() {
    const holeNumber = golfScores.length + 1;
    const score = prompt(`Enter score for Hole ${holeNumber}`);
    
    // Check if the user entered a valid score
    if (!isNaN(score)) {
        golfScores.push(Number(score));
        displayScorecard();
    } else {
        alert("Please enter a valid score.");
    }
}

// Event listener for the "Add Score" button
const addScoreButton = document.getElementById("addScore");
addScoreButton.addEventListener("click", addScore);

// Initial display of the scorecard
displayScorecard();
