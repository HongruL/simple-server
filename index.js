const $button = document.querySelector("button")

$button.addEventListener("click", () => {
    fetch("http://localhost:3000/shopping_list", {mode: "cors"})
    .then(response => response.json())
    .then(list => {
        const $container = document.querySelector("#shopping-list");

        if (!$container.hasChildNodes()) {
            list.forEach(e => {
                const $eliment = document.createElement("li");
                $eliment.textContent = e;
                $container.appendChild($eliment);
            });
        } else {
            console.log("Daten wurden bereits geladen!");
        }
    })
})