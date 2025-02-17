// Function that returns producut of two numbers
function product(a,b){
    return a*b;
}

// calling product() function
let result = product.call(this, 20, 5);
console.log(result);



// --------------------------------------
// here we defines an object "employee" with a method "details" to retrieve employee details. Using call(), it invokes "details" with "emp2" as its context, passing arguments "Manager" and "4 years", outputting the result.

let employee = {
    details: function(designation, experience){
        return this.name + " " + this.id + designation + experience;
    }
}
// object declaration
let emp1 = {
    name: "A",
    id: "123",
}
let emp2 = {
    name: "B",
    id: "456",
}
let x = employee.details.call(emp2, " Manager ", "4 years");
console.log(x);



// -------------------------
let employeee = {
    empname: "Rahul",
    department: "sales",
    details: function () {
        return this.empname +
            " works with Department " +
            this.department;
    }
};
console.log(employeee.details());




