function generateWeek() {
    var input = parseInt(document.getElementById("dayInput").value) % 7
    var b;
    switch (input) {
        case 1:
            b = "Sunday";
            break;
        case 2:
            b = "Monday";
            break;
        case 3:
            b = "Tuesday";
            break;
        case 4:
            b = "Wednesday";
            break;
        case 5:
            b = "Thursday";
            break;
        case 6:
            b = "Friday";
            break;
        case 7:
            b = "Saturday";
            break;
    }
    document.getElementById("output").innerHTML = b;
}

console.log('hi')