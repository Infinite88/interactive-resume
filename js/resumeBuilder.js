
var bio = {
			"name": "Ultron",
			"role": "Destroy Humanity",
			"contacts": {
				"mobile": "555-555-EVIL",
				"email": "Ultron@Ultron.com",
				"github": "Ultron",
				"twitter": "@ultron",
				"location": "Stark Tower"
			},
			"welcomeMessage": "There are No Strings on Me!!!!",
			"skills": [
				"awesomeness", "Superior Intelligence", "Self Repair", "Self-Repair"
			],
			"bioPic": "images/Ultron_Empire_textless.jpg"

};

bio.display = function() {
	

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedRole).prepend(formattedName);


		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedWelMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		
		$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
		$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
		$("#header").append(formattedImage);
		$("#header").append(formattedWelMsg);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
		}
};

var education = {
	"schools": [
		{
			"name": "Eckerd College",
			"location": "Saint Petersburg, FL",
			"degree": "BA",
			"majors": "Computer Science",
			"dates": "2003",
			"url": "http://example.com"
		},
		{
			"name": "Nova college",
			"location": "Fort Lauderdale, FL",
			"degree": "Masters",
			"majors": "Computer Science",
			"dates": "2013",
			"url": "http://example.com"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Crash Course",
			"school": "Udacity",
			"dates": "2014",
			"url": "http://www.udacity.com"
		}
	]
}

education.display = function() { 
	for (ed in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[ed].name);
		var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[ed].city);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[ed].degree);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[ed].majors);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[ed].dates);
	
		//var formattedNameCity = formattedName + formattedCity;
		var formattedDegreeMajors = formattedMajors + formattedDegree;

		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedDegreeMajors);

		}
	for (ed in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart); 

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[ed].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[ed].school);
		var formattedSchoolDates = HTMLonlineDates.replace("%data%", education.onlineCourses[ed].dates);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool)

	}
}

var work = {
	"jobs": [
		{
			"employer": "Marvel",
			"title": "Artificial Intelligence",
			"dates": "January 3000-Future",
			"description": "Destroy humanity and eradicate the Avengers",
			"location": "Chicago, IL"
		},
		{
			"employer": "Masters of Evil",
			"title": "Artificial Intelligence",
			"dates": "1998 - December 31, 1999",
			"description": "Destroy humanity and eradicate the Avengers",
			"location": "New York"
		}
	]
};
work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployeeTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployeeTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "blah blah blah etc etc etc",
			"images": [
				"http://i.annihil.us/u/prod/avengersmovie/avengers2/mainsite/images/posters/ultron_full.jpg",
				"http://d.ibtimes.co.uk/en/full/1389348/avengers-age-ultron.jpg"
			]
		}
	]
};


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {	
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

bio.display();
education.display();
work.display();
projects.display();

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
};

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);