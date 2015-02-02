var name = "Daniel G. Creel";
var role = "Attorney; Development Professional";
var skills = ["business law", "non-profits", "trademark & copyright", "veterans benefits", "cultural history", "media", "education", "development", "PHP", "MySQL", "HTML", "CSS", "JS", "Git/GitHub"];

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": name,
	"role": role,
	"contacts": {
		"email": "dancreel@gmail.com",
		"mobile": "301-814-6668",
		"twitter": "@dancreel",
		"github": "https://github.com/dancreel",
		"blog": "",
		"location": "Gaithersburg, MD",
	},
	"picture": "./images/me.jpg",
	"welcome": "Hello world!",
	"skills": skills
};

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#topContacts")
	.append(formattedEmail)
	.append(formattedMobile)
	.append(formattedTwitter)
	.append(formattedGitHub)
	.append(formattedBlog)
	.append(formattedLocation);

$("#header")
	.prepend(formattedPicture)
	.append(formattedWelcome)
	.append(HTMLskillsStart)
	.append(formattedSkills);

var work = {
	"employer": "The Catholic University of America",
	"title": "Director of Advancement Services",
	"dates": "2014-present",
	"location": "Washington, D.C.",
	"description": "Directs and integrates all functions in the Department of Advancement Services that are essential to the efficient and effective execution of the university’s fundraising, volunteer engagement, and campaign management efforts. Serves as a visible leader-manager to evaluate operations, analyze data and information, and recommend solutions to help achieve strategic division and institutional goals. Closely collaborates with colleagues to ensure that University Advancement resources are used effectively to grow a culture of increased philanthropy and volunteer leadership to the university. Supervises the Advancement Services Department of the Division of University Advancement."
};

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
var formattedDates = HTMLworkDates.replace("%data%", work.dates);
var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
var formattedDescription = HTMLworkDescription.replace("%data%", work.description);

$("#workExperience")
	.append(HTMLworkStart)
	.append(formattedEmployer)
	.append(formattedTitle)
	.append(formattedDates)
	.append(formattedLocation)
	.append(formattedDescription);

var project = {
	"title": "Project 1",
	"dates": "2014",
	"description": "description",
	"image": ""
};

var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
var formattedprojectImage = HTMLprojectImage.replace("%data%", project.image);

$("#projects")
	.append(HTMLprojectStart)
	.append(formattedprojectTitle)
	.append(formattedprojectDates)
	.append(formattedprojectDescription)
	.append(formattedprojectImage);

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
	]
};

var formattedName = HTMLschoolName.replace("%data%", education.schools[0].name);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var formattedDate = HTMLschoolDates.replace("%data%", education.schools[0].date);
var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[0].major);

$("#education")
	.append(HTMLschoolStart)
	.append(formattedName)
	.append(formattedDegree)
	.append(formattedDate)
	.append(formattedLocation)
	.append(formattedMajor);

var online = {
	"title": "How to Use Git and GitHub",
	"school": "Udacity",
	"date": "January 2015",
	"URL": "https://www.udacity.com/course/ud775"
};

var formattedonlineTitle = HTMLonlineTitle.replace("%data%", online.title);
var formattedonlineSchool = HTMLonlineSchool.replace("%data%", online.school);
var formattedonlineDate = HTMLonlineDates.replace("%data%", online.date);
var formattedonlineURL = HTMLonlineURL.replace("%data%", online.URL);

$("#education")
	.append(HTMLonlineClasses)
	.append(formattedonlineTitle)
	.append(formattedonlineDate)
	.append(formattedonlineURL);
