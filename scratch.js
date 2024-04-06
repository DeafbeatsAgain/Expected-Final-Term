function validateData() {
    //pseudo code
    //get data from the form
    
    //DATA VALIDATION
        //get info: academic level, summer term,  status, remaining credits
        //CHECK IF ACADEMIC LEVEL IS ASSOCIATES (60CR) OR BACHELORS (120CR)
            //set maxCredits to 63 or 123 based on academic level
        //CHECK IF SUMMER TERM IS YES OR NO
            //if summer term yes, 6 terms per year
            //if summer term no, 4 terms per year
        //CHECK IF STATUS IS FULL TIME OR PART TIME
            //if full-time, 2 course : 1 term
            //if part-time, 1 course : 1 term
            //CHECK IF DATA IS VALID
                //associates
                    // 63 >= 
        //if data is invalid
    //calculate pace (attendance-frequency * )
    //insert switch case to validate data
    //if data isNAN, display error message
    //if data is invalid, display error message
    //if data is valid, call the estimateGraduationDate function
    // using a switch statement to handle different ranges of creditsremaining
 

    //display results in the result div
    document.getElementById("result").innerHTML = `Estimated Last Term: ${graduationTerm} ${graduationYear}`;
}
