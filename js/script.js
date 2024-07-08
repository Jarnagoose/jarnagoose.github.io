document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
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
