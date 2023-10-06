{
    const welcome = () => {
        console.log("Hello! Welcome on my website.");
    }

    const hideAuthorDataClick = () => {
        const js_author = document.querySelector(".js_author")//assign the <div class=js_author> variable in the JS,
        js_author.classList.toggle("hidden");
        section__button.innerText = js_author.classList.contains("hidden")
            ? "Pokaż informacje o autorze"
            : "Ukryj informacje o autorze"; //this instruction shows or hide informations aobut author of the website
    };

    const section__button = document.querySelector(".section__button"); //assign the button variable in the JS,

    section__button.addEventListener("click", hideAuthorDataClick);

    welcome();
}