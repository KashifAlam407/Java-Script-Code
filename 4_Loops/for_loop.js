for (let i = 1; i < 6; i++) {
    if (i == 4) break;
    console.log(i);
}

//-----------------------
for (let i = 1; i < 6; i++) {
    if (i == 4){break;}
    console.log(i);
}

//------------------------------
// Initialization
let y = 2;
for (; y <= 4; y++) {  // here initialization is in line 14
    console.log("Value of x: " + y);
}


//--------------------------------
// Testing condition 
let x = 2;
for (; ; x++) {  // here if condition is black javaScript treats it as true if left blank
    console.log("Value of x: " + x);
    break;  // if it is not used loop runs infinitely
}


//--------------------------
// You can also use increment in statement also (used in line 38)
const subjects = ["Maths", "Science", "Polity", "History"];
let i = 0;
let len = subjects.length;
let gfg = "";
for (; i < len;) {
    gfg += subjects[i];
    //can be increased inside loop
    i++;
}
console.log(gfg)
