/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Abhi Khatri"
var role = "Frontend Developer"
var skills = ["Frontend Developer", "Thinker", "Entrepreneur", "Art lover"]


var bio = {

	"name": name,
	"role": role,
	"welcomeMessage": "Hello! Welcome to my awesome resume",
	"contact": [
		{
			"twitter": "@abhi__khatri",
			"github": "abhikhatri",
			"email": "abhikhatri391@gmail.com",
			"mobile": "123456789"
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
		{
			"title": "Udacity JavaScript Syntax",
			"school": "Udacity",
			"dates": "2 weeks",
			"url": "www.udacity.com"
		}
	]

}


var work = {
	"jobs": [
		{
			"employer": "",
			"title": "",
			"location": "",
			"dates": "",
			"description": ""
		}

	]

}

var projects = {

	"projects": [
		{		
			"title": "",
			"dates": "",
			"description": "",
			"images": []
		}
	]

}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact[0].mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact[0].email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact[0].twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact[0].github);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedskills = HTMLskills.replace("%data%", bio.skills[0]);
var formattedskills2 = HTMLskills.replace("%data%", bio.skills[1]);
var formattedskills3 = HTMLskills.replace("%data%", bio.skills[2]);
var formattedskills4 = HTMLskills.replace("%data%", bio.skills[3]);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedMessage);

$("#header").append(HTMLskillsStart);
$("#skills").append(formattedskills);
$("#skills").append(formattedskills2);
$("#skills").append(formattedskills3);
$("#skills").append(formattedskills4);




for(skill in skills){
	console.log(skills[skill]);
}
