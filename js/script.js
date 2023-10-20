{
    const welcome = () => {
        console.log("Hello! Welcome on my website.");
    }

    const hideAuthorSection = () => {
        const author = document.querySelector(".author")
        author.classList.toggle("author--hidden");

        const innerButtonTextChange = document.querySelector(".js-button");
        innerButtonTextChange.innerText = author.classList.contains("author--hidden")
            ? "Pokaż informacje o autorze"
            : "Ukryj informacje o autorze";
    };

    const init = () => {
        const hideSection = document.querySelector(".js-button");
        hideSection.addEventListener("click", hideAuthorSection);

        welcome();
    }

    init();
}