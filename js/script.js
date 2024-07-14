document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtnL = document.getElementById("scrollToTopBtnL");
    const scrollToTopBtnR = document.getElementById("scrollToTopBtnR");

    window.onscroll = function() {
        if (window.scrollY > 150) {
            scrollToTopBtnL.style.display = "block";
            scrollToTopBtnR.style.display = "block";
        } else {
            scrollToTopBtnL.style.display = "none";
            scrollToTopBtnR.style.display = "none";
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
