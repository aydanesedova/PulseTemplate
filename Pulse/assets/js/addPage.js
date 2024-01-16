let nameinp = document.getElementById("nameinp");
let priceinp = document.getElementById("priceinp");
let titleinp = document.getElementById("titleinp");
let sendMessage = document.getElementById("sendMessage");
let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  axios
    .post("https://655c83b725b76d9884fd6e9b.mockapi.io/products", {
      name: nameinp.value,
      price: priceinp.value,
      title: titleinp.value,
    })
    .then((res) => {
      console.log(res.data);
      myForm.reset();
      renderProducts();
    });
});

const renderProducts = () => {
  addPageProducts.innerHTML = "";
  axios
    .get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
    .then((res) => {
      db = res.data;
      db.map((item) => {
        let miniDiv = document.createElement("div");
        miniDiv.className = "miniDiv";
        miniDiv.innerHTML = `
            <img src="${item.image}" alt="">
            <h2>${item.title}</h2>
                <button onclick = "deleteFromForm(${item.id})">Delete</button>
           

            `;
        addPageProducts.appendChild(miniDiv);
      });
    });
};

const addToCart = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find((item) => item.id == id));
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
};

function deleteFromForm(id) {
  axios
    .delete(`https://655c83b725b76d9884fd6e9b.mockapi.io/products/${id}`)
    .then((res) => {
      renderProducts();
    });
}

window.onload = () => {
  renderProducts();
};

// sendMessage.addEventListener("click",renderProducts)

function findByName() {
  addPageProducts.innerHTML = ``;
  axios
    .get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
    .then((res) => {
      db = res.data;
      let filteredData = db.filter((item) =>
        item.title.toLowerCase().startsWith(inp.value.toLowerCase())
      );
      filteredData.map((item) => {
        let miniDiv = document.createElement("div");
        miniDiv.className = "miniDiv";
        miniDiv.innerHTML = `
<img src="${item.image}" alt="">
<h2>${item.title}</h2>
    <button onclick = "deleteFromForm(${item.id})">Delete</button>


`;
        addPageProducts.appendChild(miniDiv);
      });
      console.log(findByName);
    });
}


btn.addEventListener("click",findByName)