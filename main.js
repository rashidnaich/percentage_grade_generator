var totel = 500;

var sub2 = Number(prompt("Please enter maths number"));
var sub3 = Number(prompt("Please enter english number"));
var sub4 = Number(prompt("Please enter urdu number"));
var sub5 = Number(prompt("Please enter computer number"));
var sub6 = Number(prompt("Please enter islamiat number"));

var result = sub2 + sub3 + sub4 + sub5 + sub6;

var percentage = (result / totel) * 100;

alert("Total marks obtained by the student are " + result);
alert("Percentage is " + percentage + "%");

if (result % 100 == 0) { alert (" student has " + result + " marks"); }

if (percentage >= 90) { alert("Student grade is A+"); }

else if (percentage >= 80) { alert("Student grade is A"); }

else if (percentage >= 70) { alert("Student grade is B"); }

else if (percentage >= 60) { alert("Student grade is C"); }