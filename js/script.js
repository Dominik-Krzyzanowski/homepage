{
    const welcome = () => {
        console.log("Hello! Welcome on my website.");
    }

    const hideAuthorSection = () => {
        const author = document.querySelector(".author")
        author.classList.toggle("hidden");

        const innerButtonTextChange = document.querySelector(".js-button");
        innerButtonTextChange.innerText = author.classList.contains("hidden")
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