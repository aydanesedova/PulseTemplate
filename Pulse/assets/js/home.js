let page = 1
let limit = 3


const renderProducts = () => {
    axios.get(`https://655c83b725b76d9884fd6e9b.mockapi.io/products?limit=${limit}&page=${page}`)
        .then((res) => {
            db = res.data
            db.map((item) => {
                let miniDiv = document.createElement("div")
                miniDiv.className = "miniDiv"
                miniDiv.innerHTML = `
            <img src="${item.image}" alt="">
            <h2>${item.title}</h2>
            <div class="wishAdd">
                <button onclick = "addToCart(${item.id})">+ ADD TO CART</button>
            <button class="wish" onclick = "addToWish(${item.id})"><i class="fa-regular fa-heart"></i></button>
</div>

            `
                productsAll.append(miniDiv)
            })
            page++
        })
}


loadMore.addEventListener("click", renderProducts)

const addToCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart);
}

const addToWish = (id) => {
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.push(db.find(item => item.id == id))
    localStorage.setItem("wish", JSON.stringify(wish))
}


window.onload = () => {
    renderProducts()
}




let defaultBtn = document.getElementById("defaultBtnClick")
let sortBtnAZ = document.getElementById("sortBtnAZ")
let sortBtnZA = document.getElementById("sortBtnZA")


function sortAZ(){
    productsAll.innerHTML = ``
    axios.get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
    .then((res)=>{
db = res.data
let sortAZ = db.sort((a,b)=> a.title.localeCompare(b.title))
sortAZ.map((item)=>{
    let miniDiv = document.createElement("div")
    miniDiv.className = "miniDiv"
    miniDiv.innerHTML = `
<img src="${item.image}" alt="">
<h2>${item.title}</h2>
<div class="wishAdd">
    <button onclick = "addToCart(${item.id})">+ ADD TO CART</button>
<button class="wish" onclick = "addToWish(${item.id})"><i class="fa-regular fa-heart"></i></button>
</div>

`
    productsAll.append(miniDiv)
    console.log(sortAZ);
})
    })
}

sortBtnAZ.addEventListener("click",sortAZ)

function sortZA(){
    productsAll.innerHTML = ``
    axios.get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
    .then((res)=>{
db = res.data
let sortZA = db.sort((a,b)=> b.title.localeCompare(a.title))
sortZA.map((item)=>{
    let miniDiv = document.createElement("div")
    miniDiv.className = "miniDiv"
    miniDiv.innerHTML = `
<img src="${item.image}" alt="">
<h2>${item.title}</h2>
<div class="wishAdd">
    <button onclick = "addToCart(${item.id})">+ ADD TO CART</button>
<button class="wish" onclick = "addToWish(${item.id})"><i class="fa-regular fa-heart"></i></button>
</div>

`
    productsAll.append(miniDiv)
})
    })
}

sortBtnZA.addEventListener("click",sortZA)
