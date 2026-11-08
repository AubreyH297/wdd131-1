let stats = {
    image: "snortleblat.png",
    name: "Snortleblat",
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    attacked: function() {
        if(stats.health > 0) {
            stats.health -= 20
        }
        else if(stats.health == 0) {
            alert("Character Died")
        }

        docStats.innerHTML = `
            <p><b>Class:</b> ${stats.class}</p>
            <p><b>Level:</b> ${stats.level}</p>
            <p><b>Health:</b> ${stats.health}</p>
        `
    },
    levelUp: function() {
        stats.level += 1

        docStats.innerHTML = `
            <p><b>Class:</b> ${stats.class}</p>
            <p><b>Level:</b> ${stats.level}</p>
            <p><b>Health:</b> ${stats.health}</p>
        `
    }
}

let card = document.querySelector(".card")

card.innerHTML = `
    <img src="${stats.image}" alt="Snortleblat">
        <h1 class="name">${stats.name}</h1>
        <section class="stats">
            <p><b>Class:</b> ${stats.class}</p>
            <p><b>Level:</b> ${stats.level}</p>
            <p><b>Health:</b> ${stats.health}</p>
        </section>
        <section class="buttons">
            <button id="attacked">Attacked</button>
            <button id="levelUp">Level Up</button>
        </section>
`

let docStats = document.querySelector(".stats")

document.querySelector("#attacked").addEventListener("click", stats.attacked);

document.querySelector("#levelUp").addEventListener("click", stats.levelUp);