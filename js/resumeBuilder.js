/*work contains an array of jobs. Each job object in jobs should 
contain an employer, 
title, location, dates worked and description.*/

var work = [
{
	"employer":"NOV",
	"title":"Eng",
	"location":"Edmonton",
	"dates":"2007 - present",
	"description":"Purple"
},
{
	"employer":"Meldon",
	"title":"VP",
	"location":"Stony Plain",
	"dates":"1997-2003",
	"description":"White"
}
];

/*projects contains an array of projects. Each project object in
projects should contain a 
title, dates worked, description, and an images array with URL 
strings for project images.*/

var projects = [
{
	"title":"Resume",
	"dates":"Apr 22 - Apr 30",
	"description":"This page",
	"images": ["images/fry.jpg","images/197x148.gif"]
},
{
	"title":"Portfolio",
	"dates":"Apr 10 - Apr 21",
	"description":"My other page",
	"images": ["images/197x148.gif","images/fry.jpg"]
}
];

/*bio contains a name, role, welcomeMessage, contacts object and 
skills array. The 
contacts object should contain (but doesn't have to) a mobile 
number, email address, 
github username, twitter handle and location.*/

var bio = {
	"name":"Jeremy Clements",
	"role":"Web Developer",
	"welcomeMessage":"Hello future world!",
	"contacts": {
		"mobile":"777-999-5555",
		"email":"Fake.em@il.com",
		"location":"Edmonton"
	},
	"skills": ["Nunchuck Skills","Javascript","Awesomeness"]
};

/*education contains an array of schools. Each school object in 
schools contains a name, 
location, degree, majors array, dates attended and a url for the 
school's website. 
education also contains an onlineCourses array. Each onlineCourse 
object in 
onlineCourses should contain a title, school, dates attended and a
 url for the course.*/

var education = [
{
	"name":"UofA",
	"location":"Edmonton",
	"degree":"Sci",
	"majors":["Mech Eng"],
	"dates":"2002 - 2007",
	"URL":"www.ualberta.ca"
},
{
	"name":"UofNot",
	"location":"Bah Sing Seh",
	"degree":"Gong Fu",
	"majors":["Air Bending"],
	"dates":"2007 - 2008",
	"URL":"www.google.ca"
}
];