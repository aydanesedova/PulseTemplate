const myDiv = document.getElementById("cartProducts")

function getProducts() {
    myDiv.innerHTML = ``
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.map((item, index) => {
        let box = document.createElement("div")
        box.className = "box"
        box.innerHTML = `
                <img src="${item.image}" alt="">
                <p>${item.title}</p>
                <button onclick="removeItem(${index})">Remove from Wish</button>`
        myDiv.append(box)
        console.log(getProducts);
    })

}
function removeItem(index) {
    let wish = JSON.parse(localStorage.getItem("wish"))
    wish.splice(index, 1)
    localStorage.setItem("wish", JSON.stringify(wish))
    getProducts()

}
 
window.onload = () => {
    getProducts()
}
