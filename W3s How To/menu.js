function myFunction(x) {
    x.classList.toggle("change");
}



// for accordian

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


// for animated accordian

var accordian = document.getElementsByClassName("accordion1");
var ii;

for (ii = 0; ii < accordian.length; ii++) {
    accordian[ii].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel1 = this.nextElementSibling;
        if (panel1.style.maxHeight) {
            panel1.style.maxHeight = null;
        } else {
            panel1.style.maxHeight = panel1.scrollHeight + "px";
        }
    });
}


//tabs
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function openCity2(cityName2, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i2, tabcontent2, tablinks2;
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (i2 = 0; i2 < tabcontent2.length; i2++) {
        tabcontent2[i2].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks2 = document.getElementsByClassName("tablink2");
    for (i2 = 0; i2 < tablinks2.length; i2++) {
        tablinks2[i2].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(cityName2).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();