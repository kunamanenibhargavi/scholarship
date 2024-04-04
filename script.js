document.getElementById("home-link").addEventListener("click", function() {
    showContent("Home");
});

document.getElementById("apply-link").addEventListener("click", function() {
    showContent("Apply");
});

document.getElementById("status-link").addEventListener("click", function() {
    showContent("Application Status");
});

document.getElementById("contact-link").addEventListener("click", function() {
    showContent("Contact");
});

function showContent(content) {
    let mainSection = document.getElementById("main-section");
    switch (content) {
        case "Home":
            mainSection.innerHTML = `
                <h2>Welcome to Scholarship Management System!</h2>
                <p>This system helps you apply for scholarships and check your application status.</p>
            `;
            break;
        case "Apply":
            mainSection.innerHTML = `
                <h2>Apply for Scholarship</h2>
                <p>Add your application form here...</p>
            `;
            break;
        case "Application Status":
            mainSection.innerHTML = `
                <h2>Application Status</h2>
                <p>Add a form to check application status here...</p>
            `;
            break;
        case "Contact":
            mainSection.innerHTML = `
                <h2>Contact</h2>
                <p>Add contact information and form for inquiries here...</p>
            `;
            break;
        default:
            mainSection.innerHTML = `
                <h2>Error: Content not found</h2>
            `;
            break;
    }
}
