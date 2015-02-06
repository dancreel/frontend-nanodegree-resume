var bio = {
	"name": "Daniel G. Creel",
	"role": "Attorney; Development Professional",
	"contacts": {
		"email": "dancreel@gmail.com",
		"mobile": "301-814-6668",
		"twitter": "@dancreel",
		"github": "https://github.com/dancreel",
		"blog": "",
		"location": "Gaithersburg, MD",
	},
	"bioPic": "/images/me.jpg",
	"welcomeMessage": "Hello world!",
	"skills": [
		"business law", "non-profits", "trademark & copyright", "veterans benefits", "cultural history", "media", "education", "development", "PHP", "MySQL", "HTML", "CSS", "JS", "Git/GitHub"
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "The Catholic University of America",
			"title": "Director of Advancement Services",
			"dates": "2014-present",
			"location": "Washington, D.C.",
			"description": "Directs and integrates all functions in the Department of Advancement Services that are essential to the efficient and effective execution of the university’s fundraising, volunteer engagement, and campaign management efforts. Serves as a visible leader-manager to evaluate operations, analyze data and information, and recommend solutions to help achieve strategic division and institutional goals. Closely collaborates with colleagues to ensure that University Advancement resources are used effectively to grow a culture of increased philanthropy and volunteer leadership to the university. Supervises the Advancement Services Department of the Division of University Advancement."
		},
		{
			"employer": "Future Soccer Club",
			"title": "Director/Treasurer/Operations Administrator",
			"dates": "2010-2013",
			"location": "Silver Spring, Md.",
			"description": "Responsible for general accounting such as monthly bank reconciliations, routine journal entries, general ledger account reconciliation, setting up of new GL accounts. Key contact for the bank and other external financial relationships. Responsible for all aspects of processing payroll for the organization using QuickBooks payroll services. Prepared all required federal and state tax and organizational filings (including annual 990 & 944, and initial 1023 application for non-profit status)."
		},
		{
			"employer": "The Catholic University of America",
			"title": "Director of Research and Prospect Management",
			"dates": "2002-2014",
			"location": "Washington, D.C.",
			"description": "Served as Interim Director of Development Services from January 2012 to May 2012. Managed the Research Department of the Office of Institutional Advancement (OIA). Administered the prospect management functions of OIA including the building and management of prospect pools, compiling moves management reports and controlling the general flow of prospects. Research responds to requests for information on prospective donors from within OIA for use by development officers in advancing solicitations to secure support for CUA. Research is also responsible for proactively identifying potential donors to the university from a variety of sources including media and in-person screening sessions. Research is responsible for ensuring that updated information on alumni/donors is collected, documented, and shared with the OIA staff and external offices, such as the Deans’ Offices and the President’s Office."
		},
		{
			"employer": "Discovery Channel",
			"title": "DVD/Special Projects Manager",
			"dates": "1999-2001",
			"location": "Bethesda, Md.",
			"description": "Headed all aspects of DVD production and development for Discovery Communications. Responsible for all day-to-day operations of the International Sales and Marketing group. Managed process for tracking rights and footage exceptions to ensure legal compliance before selling into the market. Responsible for working with regional sales directors to manage their expenses across business units. Worked with the Regional Network Operations groups to determine available programming by region. Supervised a fulfillment coordinator."
		}
	]
};

var project = {
	"projects": [
		{
			"title": "Project 1",
			"dates": "2014",
			"description": "description",
			"image": ""
		}
	]
};

for (item in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);
	$(".work-entry:last").append(formattedEmployer.concat(formattedTitle));
//	.append(formattedDates)
//	.append(formattedLocation)
//	.append(formattedDescription);
//console.log(work[jobs])
};

//var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
//var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
//var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
//var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
//var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
//var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
//var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
//var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
//
//$("#topContacts")
//	.append(formattedEmail)
//	.append(formattedMobile)
//	.append(formattedTwitter)
//	.append(formattedGitHub)
//	.append(formattedBlog)
//	.append(formattedLocation);
//
//$("#header")
//	.prepend(formattedPicture)
//	.append(formattedWelcome)
//	.append(HTMLskillsStart)
//	.append(formattedSkills);
//
//var formattedDates = HTMLworkDates.replace("%data%", work.dates);
//var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
//var formattedDescription = HTMLworkDescription.replace("%data%", work.description);
//
//var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
//var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
//var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
//var formattedprojectImage = HTMLprojectImage.replace("%data%", project.image);
//
//$("#projects")
//	.append(HTMLprojectStart)
//	.append(formattedprojectTitle)
//	.append(formattedprojectDates)
//	.append(formattedprojectDescription)
//	.append(formattedprojectImage);
//
//var formattedName = HTMLschoolName.replace("%data%", education.schools[0].name);
//var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
//var formattedDate = HTMLschoolDates.replace("%data%", education.schools[0].date);
//var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
//var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[0].major);
//
//$("#education")
//	.append(HTMLschoolStart)
//	.append(formattedName)
//	.append(formattedDegree)
//	.append(formattedDate)
//	.append(formattedLocation)
//	.append(formattedMajor);
//
//var formattedonlineTitle = HTMLonlineTitle.replace("%data%", online.title);
//var formattedonlineSchool = HTMLonlineSchool.replace("%data%", online.school);
//var formattedonlineDate = HTMLonlineDates.replace("%data%", online.date);
//var formattedonlineURL = HTMLonlineURL.replace("%data%", online.URL);
//
//$("#education")
//	.append(HTMLonlineClasses)
//	.append(formattedonlineTitle)
//	.append(formattedonlineDate)
//	.append(formattedonlineURL);
