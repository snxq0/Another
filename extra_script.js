document.addEventListener("DOMContentLoaded", function() {
    let headers = document.querySelectorAll("h2");

    headers.forEach(header => {
        header.addEventListener("click", function() {
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
