const coSpace = [
    {
        photo: "images/hygge.jpg",
        type: "Exlcusive",
        comment: "Skiving in Scandinavia? Relax with a latte at Hygge Lounge."
    },
    {
        photo: "images/sky-garden.jpg",
        type: "",
        comment: "Bored in Barcelona? Take a siesta at the Sky Garden."
    },
    {
        photo: "images/generator.jpg",
        type: "",
        comment: "Relaxing in Rio? Take some downtime at the Generator Hub."
    }

]

const itemSection = document.getElementById("item")
let itemContainer = ""

for (let i=0; i<coSpace.length; i++){
 itemContainer += `
    <div class="container">
                    <img src="${coSpace[i].photo}" class="item-img" alt="A smart coworking space">
					<div class="img-banner">
						${coSpace[i].type}
					</div>
                    <div class="caption">
                        <p>${coSpace[i].comment}</p>
						<button>Book</button>
                    </div>
                </div>
 `
}

itemSection.innerHTML = itemContainer