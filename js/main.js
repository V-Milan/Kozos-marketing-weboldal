document.addEventListener("DOMContentLoaded", function() {
    AOS.init({ once: true, duration: 800 });

    const typing = document.getElementById("typing");
    if (typing) {
        const text = "Online Marketing 2026";
        let i = 0;
        function type() {
            if (i < text.length) {
                typing.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 70);
            }
        }
        setTimeout(type, 400);
    }
});