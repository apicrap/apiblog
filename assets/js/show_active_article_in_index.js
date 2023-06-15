window.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(listElements => {
        listElements.forEach(element => {
            const id = element.target.getAttribute("id");
            if (element.intersectionRatio > 0) {
                document.querySelector(`a[href="#${id}"]`).parentElement.classList.add("active");
            } else {
                document.querySelector(`a[href="#${id}"]`).parentElement.classList.remove("active");
            }
        });
    });

    document.querySelectorAll("article[id]").forEach((article) => {
        observer.observe(article);
    });
});