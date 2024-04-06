function collectAndProcessUserData() {
    // Ensure that radio inputs are selected and handle cases where they are not.
    const degreeRadio = document.querySelector('input[name="degreeLevel"]:checked');
    const summerRadio = document.querySelector('input[name="summerTerm"]:checked');
    const statusRadio = document.querySelector('input[name="status"]:checked');
    
    if (!degreeRadio || !summerRadio || !statusRadio) {
        document.getElementById("result").innerHTML = "Please make sure all choices are selected.";
        return;
    }
    
    const degreeLevel = degreeRadio.value;
    const attendingSummer = summerRadio.value === "yes";
    const isFullTime = statusRadio.value === "fullTime";
    const creditsRemaining = parseInt(document.getElementById("creditsRemaining").value);

    let maxCredits;
    if (degreeLevel === "Associates") {
        maxCredits = 63;
    } else if (degreeLevel === "Bachelors") {
        maxCredits = 123;
    } else {
        document.getElementById("result").innerHTML = "Please select a valid degree level.";
        return;
    }

    if (isNaN(creditsRemaining) || creditsRemaining > maxCredits) {
        document.getElementById("result").innerHTML = `Please enter a valid value for remaining credits (${maxCredits} or less).`;
        return;
    }

    const classesPerTerm = determineClassesPerTerm(isFullTime, attendingSummer);
    estimateGraduationDate(creditsRemaining, classesPerTerm);
}

function determineClassesPerTerm(isFullTime, attendingSummer) {
    return isFullTime ? (attendingSummer ? 6 : 4) : (attendingSummer ? 3 : 2);
}

function estimateGraduationDate(creditsRemaining, classesPerTerm) {
    const terms = ["Spring 1", "Spring 2", "Summer 1", "Summer 2", "Fall 1", "Fall 2"];
    const currentTerm = document.getElementById("currentTerm").value;
    const currentYear = parseInt(document.getElementById("currentYear").value);

    let classesRemaining = Math.ceil(creditsRemaining / 3); // assumes each class is worth 3 credits
    let currentTermIndex = terms.indexOf(currentTerm);
    let currentYearValue = currentYear;

    while (classesRemaining > 0) {
        currentTermIndex = (currentTermIndex + 1) % terms.length;
        if (currentTermIndex === 0) {
            currentYearValue++;
        }
        // Correctly checking the summer terms based on their indices
        if (!attendingSummer && (currentTermIndex === 2 || currentTermIndex === 3)) { // Correct indices for Summer 1 and Summer 2
            continue; // Skip summer terms if not attending
        }
        classesRemaining -= classesPerTerm;
    }

    const graduationTerm = terms[currentTermIndex];
    const graduationYear = currentYearValue;
    document.getElementById("result").innerHTML = `Estimated Last Term: ${graduationTerm} ${graduationYear}`;
}