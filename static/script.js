// Smooth scroll (enhanced)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade-in animation
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".fade").forEach(el => {
    observer.observe(el);
}); 



function openBlockchainModal() {
    document.getElementById("blockchainModal").classList.add("show");
}

function closeBlockchainModal() {
    document.getElementById("blockchainModal").classList.remove("show");
}

document.addEventListener("click", function (event) {
    const modal = document.getElementById("blockchainModal");

    if (event.target === modal) {
        closeBlockchainModal();
    }
});