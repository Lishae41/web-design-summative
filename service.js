function filterServices() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("service-card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].textContent.toLowerCase();
        if (text.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Optional: Click alert for interaction
let cards = document.querySelectorAll(".service-card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        alert("You selected: " + card.textContent);
    });
});
