
var carsData = [
		{
			id:"car001",
			brand:"Hyundai",
			model:"i20",
			year:2020,
			price:700000,
			type:"Luxury car",
			carPic: "images/i20.jpg",
			
		},
		{
			id:"car002",
			brand:"Hyundai",
			model:"i10",
			year:2022,
			price:800000,
			type:"Luxury car",
			carPic: "images/i10-nios.jpg",
			
		},
		{
			id:"car003",
			brand:"Suzuki",
			model:"Sift",
			year:2020,
			price:750000,
			type:"Luxury car",
			carPic: "images/swift.jpeg",
			
		},
		{
			id:"car004",
			brand:"Suzuki",
			model:"Baleno",
			year:2020,
			price:750000,
			type:"Luxury car",
			carPic: "images/baleno.jpg",
			
		},
		{
			id:"car005",
			brand:"Tata",
			model:"Safari",
			year:2020,
			price:1500000,
			type:"Luxury car",
			carPic: "images/safari.jpeg",
			
		},
		{
			id:"car006",
			brand:"Tata",
			model:"Nexon",
			year:2020,
			price:1400000,
			type:"Luxury car",
			carPic: "images/nexon.jpg",
			
		}

];


// <div class="col-item-4">
// 	<div class="card">
// 		<div class="card-img">
// 			<img src="images/i20.jpg" alt="Hyundai">
// 		</div>
// 		<div class="card-content">
// 			<h2>Hyundai <span>i20</span></h2>
// 			<h4>Luxury car | <span>2020</span></h4>
// 			<div>
// 				price: <span>700000</span>
// 			</div>
// 		</div>
// 	</div>
// </div>

let carsElm = document.getElementById("cars");

carsData.forEach(function(elm){

	let colItem = document.createElement("div");
	let cardElm = document.createElement("div");
	let cardImgElm = document.createElement("div") 
	let imgElm = document.createElement("img") 
	let cardContElm = document.createElement("div");
	let titleElm = document.createElement("h2");  
	let modelElm = document.createElement("span");  
	let typeElm = document.createElement("h4");  
	let yearElm = document.createElement("span");  
	let priceElm = document.createElement("div");  
	let addCartBtn = document.createElement("button");  

	//set attributes
	colItem.setAttribute("class", "col-item-4");
	cardElm.setAttribute("class", "card");
	cardImgElm.setAttribute("class", "card-img");
	cardContElm.setAttribute("class", "card-content");

	//product images
	imgElm.src = elm.carPic;
	cardImgElm.appendChild(imgElm);
	

	//products content
	titleElm.innerText = elm.brand;
	modelElm.innerText = elm.model;
	titleElm.appendChild(modelElm);

	typeElm.innerText = elm.type;
	yearElm.innerText = elm.year;
	typeElm.appendChild(yearElm);

	priceElm.innerText = "Price: " + elm.price;
	addCartBtn.innerText = "Add Cart";
	
	cardContElm.append(titleElm, typeElm, priceElm);
	cardElm.append(cardImgElm, cardContElm, addCartBtn);
	colItem.append(cardElm);
	carsElm.appendChild(colItem);

})
