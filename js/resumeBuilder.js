/*
This is empty on purpose! Your code to build the resume will go here.
 */

// format name and append to header
var name = "Courtney Noonan"
var role = "Web Developer"

var formattedName = HTMLheaderName.replace('%data%', name);
$('#header').append(formattedName);
var formattedRole = HTMLheaderRole.replace('%data%', role);
$('#header').append(formattedRole);
