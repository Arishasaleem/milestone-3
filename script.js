// now we get references to the form and then display area
var form_resume = document.getElementById("resume-form");
var resume_Display = document.getElementById("resume-display");
// handle form submission
form_resume.addEventListener("submit", function (event) {
    event.preventDefault();
    // collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    /// generate resume content dynamci
    var resumeHtml = "<h2><br>resume</b></h2>\n<h3>Personal information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Name:</b>").concat(email, "</p>\n<p><b>Name:</b>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>skills</h3>\n<p>").concat(skills, "</p>");
    // display generated resume
    if (resume_Display) {
        resume_Display.innerHTML = resumeHtml;
    }
    else {
        console.error("the resume display element is missing.");
    }
});
