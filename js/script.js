document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtnL = document.getElementById("scrollToTopBtnL");
    const scrollToTopBtnL2 = document.getElementById("scrollToTopBtnL2");
    const scrollToTopBtnR = document.getElementById("scrollToTopBtnR");
    const scrollToTopBtnR2 = document.getElementById("scrollToTopBtnR2");

    window.onscroll = function() {
        if (window.scrollY > 160) {
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
    const toggleButton = document.getElementById('dark-mode-toggle');
    const root = document.documentElement;

    // Load dark mode preference from localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        root.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', function () {
        root.classList.toggle('dark-mode');
        
        // Save dark mode preference to localStorage
        if (root.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.removeItem('dark-mode');
        }
    });
});
