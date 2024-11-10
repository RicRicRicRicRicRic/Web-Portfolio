let isToggled = localStorage.getItem('theme') === 'dark'; 

function changeIMG() {
    if (isToggled) {
        document.getElementById("DayNight").src = "Image Icons/Day.png";
    } else {
        document.getElementById("DayNight").src = "Image Icons/Night.png";
    }
}

function toggleColors() {
    if (isToggled) {
        document.body.style.backgroundColor = "#dcdcdc";
        document.body.style.color = "black";
        document.documentElement.style.setProperty("--overlapColor", "#dcdcdc");
        document.documentElement.style.setProperty("--buttonColor", "black");
        localStorage.setItem('theme', 'light');
    } else {
        document.body.style.backgroundColor = "#28243c";
        document.body.style.color = "white";
        document.documentElement.style.setProperty("--overlapColor", "#28243c");
        document.documentElement.style.setProperty("--buttonColor", "white");
        localStorage.setItem('theme', 'dark');
    }

    isToggled = !isToggled;  
    changeIMG();  
}


document.addEventListener('DOMContentLoaded', () => {
    if (isToggled) {
        document.body.style.backgroundColor = "#28243c";
        document.body.style.color = "white";
        document.documentElement.style.setProperty("--overlapColor", "#28243c");
        document.documentElement.style.setProperty("--buttonColor", "white");
    } else {
        document.body.style.backgroundColor = "#dcdcdc";
        document.body.style.color = "black";
        document.documentElement.style.setProperty("--overlapColor", "#dcdcdc");
        document.documentElement.style.setProperty("--buttonColor", "black");
    }
    changeIMG(); 
});
