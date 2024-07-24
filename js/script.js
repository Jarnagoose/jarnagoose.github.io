document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtnL = document.getElementById("scrollToTopBtnL");
    const scrollToTopBtnL2 = document.getElementById("scrollToTopBtnL2");
    const scrollToTopBtnR = document.getElementById("scrollToTopBtnR");
    const scrollToTopBtnR2 = document.getElementById("scrollToTopBtnR2");

    window.onscroll = function() {
        const start = 140;
        const end = 180;
        const scrollY = window.scrollY;
    
        // Calculate opacity based on scrollY
        let opacity = (scrollY - start) / (end - start);
        opacity = Math.max(0, Math.min(1, opacity)); // Ensure opacity is between 0 and 1
    
        // Apply the opacity to the elements
        scrollToTopBtnL.style.opacity = opacity;
        scrollToTopBtnL2.style.opacity = opacity;
        scrollToTopBtnR.style.opacity = opacity;
        scrollToTopBtnR2.style.opacity = opacity;

        if (opacity > 0) {
            scrollToTopBtnL.style.display = "block";
            scrollToTopBtnL2.style.display = "block";
            scrollToTopBtnR.style.display = "block";
            scrollToTopBtnR2.style.display = "block";
        } else {
            scrollToTopBtnL.style.display = "none";
            scrollToTopBtnL2.style.display = "none";
            scrollToTopBtnR.style.display = "none";
            scrollToTopBtnR2.style.display = "none";
        }
    };
    

    scrollToTopBtnL.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    scrollToTopBtnR.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const copyToClipboard = (elementId) => {
        const text = document.getElementById(elementId).innerText;
        navigator.clipboard.writeText(text).then(() => {
            const icon = document.querySelector(`#${elementId} + .copy-icon`);
            icon.classList.add('success');
            setTimeout(() => icon.classList.remove('success'), 1000);
        });
    }

    window.copyToClipboard = copyToClipboard;
    
    window.scrollToTop = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const root = document.documentElement;

    // Load dark mode preference from localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        root.classList.add('dark-mode');
        toggleSwitch.checked = true;  // Set the switch to "on" if dark mode is enabled
    }

    toggleSwitch.addEventListener('change', function () {
        root.classList.toggle('dark-mode');
        
        // Save dark mode preference to localStorage
        if (root.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.removeItem('dark-mode');
        }
    });
});

//Rotary Menu for Team Memeber Profiles
document.addEventListener("DOMContentLoaded", function () {
    // Get all the radio buttons
    const radioButtons = document.querySelectorAll('input[name="team"]');

    // Get the dynamic text span
    const dynamicText = document.getElementById("dynamicText");
    const dynamicText2 = document.getElementById("dynamicText2");
    const dynamicImage = document.getElementById("dynamicImage");

    // Define the text to display for each radio button
    const textMap1 = {
        A: "Mr. Jarnagoose",
        B: "Serin",
        C: "Indefinite",
        D: "Czbc",
        E: "Jamie",
        F: "Maths",
    };
    const textMap2 = {
        A: "*HONK* The creative driving force behind our studio is an enigma, some say he's more goose than man, some say he's more jar than goose. One thing is for sure, he really likes bread crusts and wobbling around.",
        B: "Serin has been programming games for fun since he was just a little line of code, Serin was one of the first to join the flock, and has been here since the very beginning.",
        C: "Indefinite wears many hats, besides translating the crayon etched ravings of Mr. Jarnagoose into something coherent, Indefinite also serves to keep everyone focused. If anyone deserves a medal, it's him.",
        D: "Somehow holding the entire art department together is one talented individual, CzBC. Legend says 18 years ago he taught Jarnagoose how to sprite his very first piece of art on the computer. Legend also says it was kinda bad.",
        E: "Be prepared to have your socks blown off by the musical stylings of our most talented composer. This will be her first game composition, but J2 is no stranger to music, in fact you may have even seen her on tour with one of her bands!",
        F: "Yo no sé que debo poner aquí.",
    };
    const imageMap = {
        A: 'img/team/circleA.png',
        B: 'img/team/circleB.png',
        C: 'img/team/circleC.png',
        D: 'img/team/circleD.png',
        E: 'img/team/circleE.png',
        F: 'img/team/circleF.png',
    };

    // Add change event listener to each radio button
    radioButtons.forEach((radio) => {
        radio.addEventListener("click", function () {
            if (radio.checked) {
                dynamicText.textContent = textMap1[radio.id];
                dynamicText2.textContent = textMap2[radio.id];
                dynamicText2.style.display = "block";
                dynamicImage.src=imageMap[radio.id];
            }
        });
    });
});
