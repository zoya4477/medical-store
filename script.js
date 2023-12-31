//home js
script
    function toggleMenu() {
        var menu = document.querySelector('.menu ul');
        menu.classList.toggle('show');
    }


//login
function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "demo" && password === "demo") {
        alert("Login successful!");
        // You may redirect to another page or perform other actions here
    } else {
        alert("Invalid username or password. Please try again.");
    }

    return false;
}
//signup js
function signupUser() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Add validation and server-side processing logic here

    alert("Signup successful!");
    // You may redirect to another page or perform other actions here

    return false;
}
//about us java script
function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}
//products js
function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

function updateSubcategories() {
    var category = document.getElementById("category").value;
    var subcategorySelect = document.getElementById("subcategory");

    // Clear existing options
    subcategorySelect.innerHTML = '<option value="" selected disabled>Select Subcategory</option>';

    // Define subcategories based on the selected category
    var subcategories = [];
    switch (category) {
        case "medication":
            subcategories = ["Pain Relief Medication", "Cold and Cough Remedies", "Allergy Medication", "Prescription Medication"];
            break;
        case "medicalSupplies":
            subcategories = ["First Aid Kit", "Bandages and Dressings", "Thermometers", "Health Monitors"];
            break;
        case "healthEssential":
            subcategories = ["Vitamins and Supplements", "Personal Care Products", "Skin Care Items", "Oral Health Products"];
            break;
        case "specialtyProducts":
            subcategories = ["Diabetic Supplies", "Babies Care Essentials", "Orthopedic Support", "Elderly Care Products"];
            break;
        default:
            break;
    }

    // Populate subcategory dropdown
    subcategories.forEach(function (value) {
        var option = document.createElement("option");
        option.text = value;
        option.value = value.toLowerCase().replace(/\s+/g, ''); // Convert to lowercase and remove spaces
        subcategorySelect.add(option);
    });
}
//category js
function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}
//manufacturer js
function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

function toggleDetails(manufacturerId) {
    var details = document.getElementById(manufacturerId);
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}
//contact JS
 function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }

    // Additional validation logic can be added here if needed

    alert("Form submitted successfully!");
    return true;
}
//order js
function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }

    // Additional validation logic can be added here if needed

    alert("Form submitted successfully!");
    return true;
}