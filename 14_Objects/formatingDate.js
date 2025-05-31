const date = new Date();
const formattedDate = new Intl.DateTimeFormat('en-US').format(date);  // Displays as month/day/year
console.log(formattedDate);