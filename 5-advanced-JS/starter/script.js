// Function constructor

var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	/*this.calculateAge = function() {
		console.log(2019 - this.yearOfBirth);
	}*/
}

// prototype instead of using inside the constructor
Person.prototype.calculateAge = function() {
	console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Cho';
var john = new Person('John', 1990, 'teacher');
var ronald = new Person('Ronald', 1968, 'Developer');
var Mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
ronald.calculateAge();
Mark.calculateAge();

console.log(john.lastName);
console.log(ronald.lastName);
console.log(Mark.lastName);


// Object.create

var personProto = {
	calculateAge: function() {
		console.log(2019 - this.yearOfBirth);
	}
};

// Lecture: Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1988];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for(var i = 0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2019 - el;
}

function isFullAge(el) {
	return el >= 18;
}

// between 18 to 81 ages heart rate
function maxHeartRate(el) {
	if (el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}	
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

