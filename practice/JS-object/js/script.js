
"use strict";

let iconBox = 
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

let cartItem = [], totalAmt = 0;

const addCartitem = (id)=>{
	let updateTotalAmt;
	let getItems = cartItem.find(e => e.id === id);
	if(getItems){
		
		let updatedCart = cartItem.map(item=>{
			if(item.id === id){
				item.qty += 1;
				updateTotalAmt = totalAmt + item.prodPrice;
				return item;
			}else return item;
		})
		cartItem = updatedCart;
		setCartItem(cartItem);
		totalAmt = updateTotalAmt;
		console.log(totalAmt);
	}else{
		let setItem = iconBox.find(e => e.id === id);
		setItem.qty = 1;
		updateTotalAmt = totalAmt + setItem.prodPrice;
		cartItem.push(setItem);
		setCartItem(cartItem);
		totalAmt = updateTotalAmt;
		console.log(totalAmt);
	}
}


let cartItemsElm = document.getElementById("cart-items");
const setCartItem = function(cart){
	cartItemsElm.innerHTML = '';
	if(cart.length > 0){
		let cartObject = cart.map(function(elm, i){
				return `<div class="cart-items">
	        
					        <div class="cart-img">
					          <img src="${elm.img}" />
					        </div>
					        
					        <div class="cart-txt">
					          <p>${elm.prodName}</p>
					          <p>${elm.prodPrice}</p>
					          <div class="cart-action">
					            <div class="cart-qty">
					                <button class="qty-decrement">-</button>
					                <span>${elm.qty}</span>
					                <button class="qty-increment" onclick='addCartitem(${elm.id})'>+</button>
					                <button class="cart-remove">Remove</button>
					            </div>
					          </div>
					        </div>
					        
					     </div>`
		}).join("");
	
		cartItemsElm.innerHTML = cartObject;

	}

}



let secRow = document.getElementById("sec1-row");

iconBox.forEach(function(elm, i){
	let colElm = document.createElement("div");
	let productBxElm = document.createElement("div");
	let productImgElm = document.createElement("div");
	let productInfoElm = document.createElement("div");
	let prdImg = document.createElement("img");
	let prdName = document.createElement("p");
	let prdPrice = document.createElement("p");
	let cartBtn = document.createElement("button");
	let qtyElm = document.createElement("input");


	//Add attribute
	colElm.setAttribute("class", "col-3");
	productBxElm.setAttribute("class", "product-box");
	productBxElm.setAttribute("id", "product-"+elm.id);
	productImgElm.setAttribute("class", "product-img");
	productInfoElm.setAttribute("class", "product-info");
	cartBtn.setAttribute("class", "cartbtn");
	prdPrice.setAttribute("class", "price");
	qtyElm.setAttribute("class", "qtybtn")
	qtyElm.setAttribute("type", "number")
	qtyElm.setAttribute("min", 1);

	cartBtn.onclick = addCartitem.bind(null, elm.id);
	//Add contetn
	prdImg.src = elm.img;
	prdName.innerText = elm.prodName;
	prdPrice.innerText = elm.prodPrice;
	cartBtn.innerText = "Add cart";
	qtyElm.value = 1;

	productImgElm.appendChild(prdImg);
	productInfoElm.append(prdName, prdPrice);
	productBxElm.append(productImgElm, productInfoElm, cartBtn);
	colElm.appendChild(productBxElm);
	secRow.appendChild(colElm);

	
});

let addcartBtn = document.getElementsByClassName("cartbtn");


for(let i =0; i < addcartBtn.length; i++){
	// addcartBtn[i].addEventListener("click", function(){
		
	// });
}




let priceAmt = 1500, subTotal = 0, qty = 1;

//Icrease qty fuction...
function incrementQty(id){
	let getItems = iconBox.find(e => e.id === id);
	if(getItems){
		qty+=1;
		let getPrice = getItems.prodPrice*qty;
		console.log(getPrice);
	}
}

//Icrease qty fuction...
function decrementQty(id){
	let getItems = iconBox.find(e => e.id === id);
	if(getItems){
		if(qty > 1){			
			qty-=1;
			let getPrice = getItems.prodPrice*qty;
			console.log(getPrice);
		}
	}
}









