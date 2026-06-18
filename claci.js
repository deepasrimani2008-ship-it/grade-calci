function calculateGrade() {

    let s1 = parseFloat(document.getElementById("sub1").value);
    let s2 = parseFloat(document.getElementById("sub2").value);
    let s3 = parseFloat(document.getElementById("sub3").value);
    let s4 = parseFloat(document.getElementById("sub4").value);
    let s5 = parseFloat(document.getElementById("sub5").value);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(s4) || isNaN(s5)) {
        document.getElementById("result").innerHTML = "Please enter all marks!";
        return;
    }

    let total = s1 + s2 + s3 + s4 + s5;
    let average = total / 5;
    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let resultStatus = average >= 50 ? "Pass 🎉" : "Fail ❌";

    document.getElementById("result").innerHTML =
        "Total: " + total + "<br>" +
        "Average: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + resultStatus;
}