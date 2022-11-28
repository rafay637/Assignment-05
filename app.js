// Start
var b = prompt("Enter city name");
a = b.toUpperCase();
console.log(a);

var a = prompt("Enter country name");
b = a.toLowerCase();
console.log(b);

var c = prompt("Enter your favourite mobile phone model");
var d = "length = 5cm";
console.log(d);

var b = prompt("Enter message.");
lastletter = b.slice(-1);
console.log(lastletter);

var a = "Pakistani";
var b = "n";
var i = a.indexOf("n");
console.log(b);

var a = prompt("User name");
var b = a;
if (a = "@ . , !") {
    alert("Enter valid user name")
} else {
    console.log(b);
}

var a = "The quick brown fox jumps over the lazy dog";
var b = "the";
var i = a.indexOf("the");
console.log(i);

var a = "Hyderabad";
var b = "Hyder";
var c = "Islam";
var a = a.replace(/Hyder/g, "Islam");
console.log(a);

var a = "and";
var c = "&";
var a = a.replace(/and/g, "&");

var message = "Ali and Sami are best friends. They play cricket and football together.";
console.log(message);

var a = Math.round(3.45214);
var b = Math.floor(3.45214);
var c = Math.ceil(3.45214);
console.log(a);
console.log(b);
console.log(c);

var a = Math.round(-2.678);
var b = Math.floor(-2.678);
var c = Math.ceil(-2.678);
console.log(a);
console.log(b);
console.log(c);

var a = Math.random();
var toss = Math.ceil(a * 6);
if (toss == 1) {
    console.log("Tails");
} else if (toss == 2) {
    console.log("Heads");
} else {
    console.log("Nothing");
}

var percentage = 30 / 45 * 45;
var per = percentage.toFixed(2);
console.log(per);

var dt1 = new Date()
var dt2 = new Date("11-28-2022");
console.log(dt2);

var dt3 = dt.getDay();
    console.log(dt3);
// End

// Last Assignment Start
var FirstName = document.getElementById("First");
var  LastName = document.getElementById("Last");
var  Password = document.getElementById("Pass");
var  Email = document.getElementById("mail");
var  Contact = document.getElementById("cont");
var CNIC = document.getElementById("CNIC");
var a = [];

function addValue() {
    var b = FirstName.value;
    if (b == "") {
        alert("Enter Value");
    } else {
        a.push(b);
        console.log(a);
    }
}

function addValue() {
    var b = LastName.value;
    if (b == "") {
        alert("Enter Value");
    } else {
        a.push(b);
        console.log(a);
    }
}

function addValue() {
    var b = Password.value;
    if (b == "") {
        alert("Enter Value");
    } else {
        a.push(b);
        console.log(a);
    }
}

function addValue() {
    var b = Email.value;
    if (b == "") {
        alert("Enter Value");
    } else {
        a.push(b);
        console.log(a);
    }
}

function addValue() {
    var b = Contact.value;
    if (b == "") {
        alert("Enter Value");
    } else {
        a.push(b);
        console.log(a);
    }
}

function addValue() {
    var b = CNIC.value;
    if (b == "") {
        alert("Enter Value");
    } else {
        a.push(b);
        console.log(a);
    }
}
// Last Assignment End