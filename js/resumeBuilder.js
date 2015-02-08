var bio = {
	"name": "Daniel Creel",
	"role": "Attorney; Development Professional",
	"contacts": {
		"email": "dancreel@gmail.com",
		"mobile": "301-814-6668",
		"twitter": "@dancreel",
		"github": "https://github.com/dancreel",
		"blog": "",
		"location": "Gaithersburg, MD",
	},
	"bioPic": "./images/me.jpg",
	"welcomeMessage": "Hello world!",
	"skills": [
		"business law", "non-profits", "trademark & copyright", "veterans benefits", "cultural history", "media", "education", "development", "PHP", "MySQL", "HTML", "CSS", "JS", "Git/GitHub"
	]
};

var work = {
	"jobs": [
		{
			"employer": "The Catholic University of America",
			"title": "Director of Advancement Services",
			"dates": "2014-present",
			"location": "Washington, DC",
			"description": "Directs and integrates all functions in the Department of Advancement Services that are essential to the efficient and effective execution of the university’s fundraising, volunteer engagement, and campaign management efforts. Serves as a visible leader-manager to evaluate operations, analyze data and information, and recommend solutions to help achieve strategic division and institutional goals. Closely collaborates with colleagues to ensure that University Advancement resources are used effectively to grow a culture of increased philanthropy and volunteer leadership to the university. Supervises the Advancement Services Department of the Division of University Advancement."
		},
		{
			"employer": "Future Soccer Club",
			"title": "Director/Treasurer/Operations Administrator",
			"dates": "2010-2013",
			"location": "Silver Spring, MD",
			"description": "Responsible for general accounting such as monthly bank reconciliations, routine journal entries, general ledger account reconciliation, setting up of new GL accounts. Key contact for the bank and other external financial relationships. Responsible for all aspects of processing payroll for the organization using QuickBooks payroll services. Prepared all required federal and state tax and organizational filings (including annual 990 & 944, and initial 1023 application for non-profit status)."
		},
		{
			"employer": "The Catholic University of America",
			"title": "Director of Research and Prospect Management",
			"dates": "2002-2014",
			"location": "Washington, DC",
			"description": "Served as Interim Director of Development Services from January 2012 to May 2012. Managed the Research Department of the Office of Institutional Advancement (OIA). Administered the prospect management functions of OIA including the building and management of prospect pools, compiling moves management reports and controlling the general flow of prospects. Research responds to requests for information on prospective donors from within OIA for use by development officers in advancing solicitations to secure support for CUA. Research is also responsible for proactively identifying potential donors to the university from a variety of sources including media and in-person screening sessions. Research is responsible for ensuring that updated information on alumni/donors is collected, documented, and shared with the OIA staff and external offices, such as the Deans’ Offices and the President’s Office."
		},
		{
			"employer": "Discovery Channel",
			"title": "DVD/Special Projects Manager",
			"dates": "1999-2001",
			"location": "Bethesda, MD",
			"description": "Headed all aspects of DVD production and development for Discovery Communications. Responsible for all day-to-day operations of the International Sales and Marketing group. Managed process for tracking rights and footage exceptions to ensure legal compliance before selling into the market. Responsible for working with regional sales directors to manage their expenses across business units. Worked with the Regional Network Operations groups to determine available programming by region. Supervised a fulfillment coordinator."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "description",
			"images": [
				{
					"image": "./images/fry.jpg"
				}
			]
		},
		{
			"title": "Sample Project 2",
			"dates": "2015",
			"description": "description",
			"images": [
				{
					"image": ""
				}
			]
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Mississippi State University",
			"location": "Starkville, MS",
			"degree": "BA",
			"major": "Anthropology",
			"date": "1992"
		},
		{
			"name": "University of Maryland",
			"location": "College Park, MD",
			"degree": "MA",
			"major": "American Studies",
			"date": "2002"
		},
		{
			"name": "The Catholic University of America",
			"location": "Washington, DC",
			"degree": "JD",
			"major": "Law",
			"date": "2008"
		}
	],
	"onlineCourses": [
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"date": "January 2015",
			"URL": "https://www.udacity.com/course/ud775"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"date": "February 2015",
			"URL": "https://www.udacity.com/course/ud804"
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);

$("#topContacts")
	.append(formattedMobile)
	.append(formattedEmail)
	.append(formattedTwitter)
	.append(formattedGitHub)
	.append(formattedBlog)
	.append(formattedLocation);

$("#header")
	.append(formattedPicture)
	.append(formattedWelcome);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[7]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[8]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[9]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[10]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[11]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[12]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[13]);
	$("#skills").append(formattedSkills);
};

function displayWork() {
	for (item in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[item].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);
		$(".work-entry:last")
			.append(formattedEmployerTitle)
			.append(formattedDates)
			.append(formattedLocation)
			.append(formattedDescription);
	};
};
displayWork();

projects.display = function() {
	for (item in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
		var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
		$(".project-entry:last")
			.append(formattedprojectTitle)
			.append(formattedprojectDates)
			.append(formattedprojectDescription);
		if (projects.projects[item].images.length > 0) {
			for (imageItem in projects.projects[item].images) {
				var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[item].images[imageItem].image);
			$(".project-entry:last").append(formattedprojectImage);
			};
		};
	};
};
projects.display();

function displayEducation() {
	for (item in education.schools) {
	$("#education").append(HTMLschoolStart);
	var formattedName = HTMLschoolName.replace("%data%", education.schools[item].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
	var formattedDate = HTMLschoolDates.replace("%data%", education.schools[item].date);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[item].major);
	$(".education-entry:last")
		.append(formattedName)
		.append(formattedDegree)
		.append(formattedDate)
		.append(formattedLocation)
		.append(formattedMajor);
	};
};
displayEducation();

//function displayOnline() {
//	for (item in education.onlineCourses) {
//	$("#education").append(HTMLonlineClasses);
//	var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title);
//	var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
//	var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[item].date);
//	var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[item].URL);
//	$("#education")
//		.append(formattedonlineTitle)
//		.append(formattedonlineSchool)
//		.append(formattedonlineDate)
//		.append(formattedonlineURL);
//	};
//};
//displayOnline();

$("#main").append(internationalizeButton);
function inName (nameString) {
	nameString = nameString.trim().split(" ");
	console.log(nameString);
	nameString[1] = nameString[1].toUpperCase();
	nameString[0] = nameString[0].slice(0,1).toUpperCase() + nameString[0].slice(1).toLowerCase();
	return nameString[0] + " " + nameString[1];
};

$("#mapDiv").append(googleMap);
initializeMap();