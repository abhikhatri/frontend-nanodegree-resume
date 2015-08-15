/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Abhi Khatri"
var role = "Frontend Developer"
var skills = ["Frontend Developer", "Thinker", "Entrepreneur", "Art lover"]

// var formattedName = HTMLheaderName.replace("%data%", name);

// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
// 


var bio = {

	"name": name,
	"role": role,
	"welcomeMessage": "Hello! Welcome to my awesome resume",
	"contact": [
		{
			"twitter": "@abhi__khatri"
			"github": "abhikhatri"
			"email": "abhikhatri391@gmail.com"
		}
	],
	"skills": skills,
	"picture": "http://www.abhikhatri.com/build/img/avtaar.jpg",
	"location": "New Delhi"
}


var education = {
	"schools": [
		{
			"name": "K.G.S.B.V",
			"location": "New Delhi",
			"degree": "High School Gradutation",
			"year": "2013",
			"majors": "Commerce"
		},

		{
			"name": "NIIT",
			"location": "New Delhi",
			"degree": "Diploma In Computer Science",
			"year": "2015",
			"majors": "Computer Science",
		}

	],

	"onlineCourses": [
		"title": "Udacity JavaScript Syntax",
		"school": "Udacity",
		"dates": "2 weeks",
		"urk": "www.udacity.com"
	]

}


var work = {}

var projects = {}