
"use strict";

let products = 
[
	{
		id:101,
		img:"./images/poco_m45G_yellow.webp",
	  	prodName: "Poco M4 5G",
	  	prodPrice: 15999
	},
	{
		id:102,
		img:"./images/poco_x4pro5G_blue.webp",
		prodName: "Poco X4 Pro 5G",
		prodPrice: 18499
	},
	{
		id:103,
		img:"./images/realme_narzo505G_blue.webp",
		prodName: "Realme Narzo 50 5G",
		prodPrice: 17999
	},
	{
		id:104,
		img:"./images/realme_narzo50pro5G_black.webp",
		prodName: "Realme Narzo 50 Pro 5G",
		prodPrice: 21999
	},
	{
		id:105,
		img:"./images/galaxy_a735G_gray.jpg",
		prodName: "Samsung Galaxy A73 5G",
		prodPrice: 41999
	},
	{
		id:106,
		img:"./images/poco_m45G_yellow.webp",
	  	prodName: "Poco M4 5G",
	  	prodPrice: 15999
	},
	{
		id:107,
		img:"./images/poco_x4pro5G_blue.webp",
		prodName: "Poco X4 Pro 5G",
		prodPrice: 18499
	},
	{
		id:108,
		img:"./images/realme_narzo505G_blue.webp",
		prodName: "Realme Narzo 50 5G",
		prodPrice: 17999
	},
	{
		id:109,
		img:"./images/realme_narzo50pro5G_black.webp",
		prodName: "Realme Narzo 50 Pro 5G",
		prodPrice: 21999
	},
	{
		id:110,
		img:"./images/galaxy_a735G_gray.jpg",
		prodName: "Samsung Galaxy A73 5G",
		prodPrice: 41999
	}

];

/*<div class="col-3">
  	<div class="product-box">
        <div class="product-img">
            <img src="./images/galaxy_a735G_gray.jpg" alt="Samsung Galaxy A73 5G">
        </div>
        <div class="product-info">
            <p>Samsung Galaxy A73 5G</p>
            <p>41999</p>
        </div>
  	</div>
</div>*/

/*<div class="cart-items">
        
        <div class="cart-img">
          <img src="./images/poco_m45G_yellow.webp" alt="">
        </div>
        
        <div class="cart-txt">
          <p>Product Name</p>
          <p>15000</p>
          <div class="cart-action">
            <div class="cart-qty">
                <button class="qty-decrement">-</button><span>1</span><button class="qty-increment">+</button>
                <button class="cart-remove">Remove</button>
            </div>
          </div>
        </div>
        
      </div>*/

let cartItem = [];


const addCartItems = function(id){
	let findCart = cartItem.find(function(item){
		return item.id === id;
	})
	if(findCart){
		cartItem.map(function(item){
			if(item.id === id){
				item.qty += 1;
				return item;
			}else return item;
		})
		cartItemElm(cartItem);
		console.log(cartItem)
	}else{
		let setCartItem = products.find(function(item){
			return item.id === id;
		})
		setCartItem.qty = 1;
		cartItem.push(setCartItem);
		cartItemElm(cartItem);
		console.log(cartItem)
	}
}




let cartElement = document.getElementById("cart-items");

function cartItemElm(cart){
	cartElement.innerHTML = '';
	if(cart.length > 0){
		let cartList = cart.map(function(item){
			return  `<div class="cart-items">
        
				        <div class="cart-img">
				          <img src="${item.img}" alt="">
				        </div>
				        
				        <div class="cart-txt">
				          <p>${item.prodName}</p>
				          <p>${item.prodPrice}</p>
				          <div class="cart-action">
				            <div class="cart-qty">
				                <button class="qty-decrement">-</button>
				                <span>${item.qty}</span>
				                <button class="qty-increment" onclick="addCartItems(${item.id})">+</button>
				                <button class="cart-remove">Remove</button>
				            </div>
				          </div>
				        </div>
				        
				      </div>`
		}).join("");
		cartElement.innerHTML = cartList;
	}
}

let secRow = document.getElementById("sec1-row");

products.forEach(function(elm, i){
	let colElm = document.createElement("div");
	let productBxElm = document.createElement("div");
	let productImgElm = document.createElement("div");
	let productInfoElm = document.createElement("div");
	let prdImg = document.createElement("img");
	let prdName = document.createElement("p");
	let prdPrice = document.createElement("p");
	let cartBtn = document.createElement("button");
	

	//Add attribute
	colElm.setAttribute("class", "col-3");
	productBxElm.setAttribute("class", "product-box");
	productBxElm.setAttribute("id", "product-"+elm.id);
	productImgElm.setAttribute("class", "product-img");
	productInfoElm.setAttribute("class", "product-info");
	cartBtn.setAttribute("class", "cartbtn");
	prdPrice.setAttribute("class", "price");
	
	cartBtn.onclick = addCartItems.bind(null, elm.id);
	//Add contetn
	prdImg.src = elm.img;
	prdName.innerText = elm.prodName;
	prdPrice.innerText = elm.prodPrice;
	cartBtn.innerText = "Add cart";

	productImgElm.appendChild(prdImg);
	productInfoElm.append(prdName, prdPrice);
	productBxElm.append(productImgElm, productInfoElm, cartBtn);
	colElm.appendChild(productBxElm);
	secRow.appendChild(colElm);

	
});














