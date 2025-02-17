let grade = 'B';
let result;
switch (grade) {
    case 'A':
        result = "A (Excellent)";
        break;
    case 'B':
        result = "B (Average)";
        break;
    case 'C':
        result = "C (Below than average)";
        break;
    default:
        result = "No Grade";
}
console.log(result);


//---------------------------------
const fruit = "Mango";

switch (fruit) {
    case "Apple":
        console.log("Apple is healthy.");
        break;
    case "Mango":
        console.log("Mango is delicious.");
        break;
    default:
        console.log("No fruit chosen.");
}