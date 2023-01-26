const image = document.getElementById("img");
const name = document.getElementById("name");
const height = document.getElementById("height");
const gender = document.getElementById("gender");
const mass = document.getElementById("mass");
const BtnCharacter = document.getElementById("BtnCharacter");

BtnCharacter.addEventListener("click", (e) => {
    e.preventDefault()
        img.innerHTML = '<em>Loading...</em>'
        name.innerHTML = '<em>Loading...</em>'
        gender.innerHTML = '<em>Loading...</em>'
        height.innerHTML = '<em>Loading...</em>'
        mass.innerHTML = '<em>Loading...</em>'
    console.log("Button clicked!!!!!")

    const randomNumber = Math.ceil(Math.random() *83)
    fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
        .then(response => response.json())
        .then(data => {
            FuncCharacter(data)

    })
})

const FuncCharacter = (data) => {
    document.getElementById("img").src = data.image
    document.getElementById("name").innerText = data.name
    document.getElementById("gender").innerText = data.gender
    document.getElementById("height").innerText = data.height
    document.getElementById("mass").innerText = data.mass
}