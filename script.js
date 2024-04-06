function estimateGraduationDate() {
    // Define the academic terms.
    const terms = ["Spring 1", "Spring 2", "Summer 1", "Summer 2", "Fall 1", "Fall 2"];
    const currentTerm = document.getElementById("currentTerm").value;
    const creditsRemaining = parseInt(document.getElementById("creditsRemaining").value);
    const attendingSummer = document.querySelector('input[name="summerTerm"]:checked').value === "yes";
    const isFullTime = document.querySelector('input[name="status"]:checked').value === "fullTime";
    const classesPerTerm = isFullTime ? 2 : 1;
    const currentYear = parseInt(document.getElementById("currentYear").value);

    let classesRemaining = Math.ceil(creditsRemaining / 3); // assumes each class is worth 3 credits.
    let currentTermIndex = terms.indexOf(currentTerm);
    let currentYearValue = currentYear;

    while (classesRemaining > 0) {
        // Move to the next term at the beginning of the loop
        currentTermIndex = (currentTermIndex + 1) % terms.length;
        if (currentTermIndex === 0) { // Check if the year should increment
            currentYearValue++;
        }

        // Check if the term is attended
        if (attendingSummer || (terms[currentTermIndex] !== "Summer 1" && terms[currentTermIndex] !== "Summer 2")) {
            classesRemaining -= classesPerTerm;
        }
        
        // Check after decrementing if classes are done in this term
        if (classesRemaining <= 0) {
            break; // Break as soon as classes are done to avoid extra increment
        }
    }

    // Handle term and year calculation directly based on where loop exited
    const graduationTerm = terms[currentTermIndex];
    const graduationYear = currentYearValue;

    // Output the result to the user.
    document.getElementById("result").innerHTML = `Estimated Graduation Term: ${graduationTerm} ${graduationYear}`;
}
