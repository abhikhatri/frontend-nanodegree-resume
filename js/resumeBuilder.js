/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Abhi Khatri"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Frontend Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);