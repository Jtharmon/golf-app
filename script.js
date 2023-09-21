//title page
// Get references to HTML elements
const profileButton = document.getElementById('profileButton');
const startRoundButton = document.getElementById('startRoundButton');
const pastRoundsButton = document.getElementById('pastRoundsButton');
const addScoreButton = document.getElementById("addScore");
const userNotesInput = document.getElementById('userNotes');
const addDataButton = document.getElementById('addData');
const noteList = document.getElementById('scoreboard');



// Event listeners for button clicks
profileButton.addEventListener('click', () => {
    // Navigate to the profile page (replace 'profile.html' with the actual file path)
    window.location.href = 'profile.html';
});

startRoundButton.addEventListener('click', () => {
    // Navigate to the start round page (replace 'startRound.html' with the actual file path)
    window.location.href = 'course-list.html';
});

pastRoundsButton.addEventListener('click', () => {
    // Navigate to the past rounds page (replace 'pastRounds.html' with the actual file path)
    window.location.href = 'pastRounds.html';
});




// Sample data for golf scores
const golfScores = [];
const holePars = [3, 4, 5, 3, 4, 4, 5, 3, 4, 5, 4, 3, 4, 5, 3, 5, 4, 5]; // Example par values for each hole

// Function to display the scorecard
function displayScorecard() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = "";

    for (let i = 0; i < golfScores.length; i++) {
        const score = golfScores[i];
        const par = holePars[i];
        scoreboard.innerHTML += `
            <div>
                Hole ${i + 1} (Par ${par}): 
                <span id="score-${i}">${score}</span>
                <button onclick="editScore(${i})">Edit</button>
                <button onclick="removeScore(${i})">Remove</button>
                <button onclick="addData(${i})">Add Notes</button>
            </div>
        `;
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

// Function to edit a score
function editScore(index) {
    const newScore = prompt(`Edit score for Hole ${index + 1}`, golfScores[index]);
    
    // Check if the user entered a valid score
    if (!isNaN(newScore)) {
        golfScores[index] = Number(newScore);
        displayScorecard();
    } else {
        alert("Please enter a valid score.");
    }
}

// Function to remove a score
function removeScore(index) {
    if (confirm(`Remove score for Hole ${index + 1}?`)) {
        golfScores.splice(index, 1);
        displayScorecard();
    }
}

function addData(holeNumber, note, score) {
    const myObject = {
        holeData: {},
        addData: function (holeNumber, note, score) {
            if (confirm('Add this note?'))
                this.holeData[holeNumber] = { note, score };
        }
    };
    
    const addDataBound = myObject.addData.bind(myObject);
    }


// Event listener for the "Add Score" button
console.log(addEventListener);
addScoreButton.addEventListener("click", addScore);

// Initial display of the scorecard
displayScorecard();

class GolfCourse {
    constructor() {
        this.holeData = {}; // Initialize an empty object to store data for each hole.
    }

    addData(holeNumber, note, score) {
        // Add or update data for a specific hole.
        this.holeData[holeNumber] = { note, score };
    }

    getNote(holeNumber) {
        // Get the note for a specific hole.
        return this.holeData[holeNumber]?.note;
    }

    getScore(holeNumber) {
        // Get the score for a specific hole.
        return this.holeData[holeNumber]?.score;
    }

    updateData(holeNumber, newNote, newScore) {
        // Update the note and score for a specific hole.
        if (this.holeData[holeNumber]) {
            this.holeData[holeNumber].note = newNote;
            this.holeData[holeNumber].score = newScore;
        }
    }

    deleteData(holeNumber) {
        // Delete the data (note and score) for a specific hole.
        if (this.holeData[holeNumber]) {
            delete this.holeData[holeNumber];
        }
    }
}

// Get references to HTML elements

// Event listener for "Add Notes" button
addDataButton.addEventListener('click', function () {
    // Get the user's input from the textarea
    const userNotes = userNotesInput.value.trim();

    // Check if the input is not empty
    if (userNotes !== '') {
        // Create a new list item (li) to display the user's notes
        const listItem = document.createElement('li');
        listItem.textContent = userNotes;

        // Add the new note to the list
        noteList.appendChild(listItem);

        // Clear the textarea
        userNotesInput.value = '';
    }
});



// Example usage:
const course = new GolfCourse();
course.addData(1, "Nice drive, avoid the bunker.", 4);
course.addData(2, "Watch out for the water hazard.", 5);
console.log(course.getNote(1));  // Get the note for hole 1
console.log(course.getScore(1)); // Get the score for hole 1
course.updateData(1, "Great tee shot, stay on the fairway.", 3);
console.log(course.getNote(1));  // Get the updated note for hole 1
console.log(course.getScore(1)); // Get the updated score for hole 1
course.deleteData(2);  // Delete the data for hole 2
console.log(course.getNote(2));  // Try to get the note for hole 2 (should return undefined)
console.log(course.getScore(2)); // Try to get the score for hole 2 (should return undefined)
