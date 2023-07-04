const emailMenu = document.querySelector(".navbar-email");
const destopMenu= document.querySelector(".desktop-menu");
const burguerMenu= document.querySelector(".menu");
const mobileMenu= document.querySelector(".mobile-menu");
const menuCarritoIcon= document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer= document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container")

emailMenu.addEventListener("click", toggleDesktopMenu)
burguerMenu.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritosAside)

function toggleDesktopMenu (){
    destopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
}

function toggleMobileMenu (){
    mobileMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
}

function toggleCarritosAside (){
    shoppingCartContainer.classList.toggle("inactive");
    destopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}

const productList = [];

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "pantalla",
    price: 1293,
    image: "https://http2.mlstatic.com/D_NQ_NP_645566-MLU69357548336_052023-O.webp",
});
productList.push({
    name: "pc",
    price: 2345,
    image: "https://i.blogs.es/0e51a7/pc-2/450_1000.webp",
}); 

/* <div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
</div> */

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const producPrice = document.createElement("p");
        producPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(producPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCard = document.createElement("figure");
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    }
};
renderProducts(productList);