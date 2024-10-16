
const navBtn = document.getElementById('nav-btn')

navBtn.addEventListener('click',handleDivBox)

function handleDivBox(){
    console.log("clicked")
   
    const divBox = document.getElementById("header")
    if(divBox.classList.contains("open")){
        divBox.classList.remove('open')
    } else {
        divBox.classList.add('open')
    }
    
}


const mask = document.getElementById("mask").addEventListener('click',handlemask)

function handlemask(){
    const divBox = document.getElementById("header").classList.remove('open')
}






// document.addEventListener('DOMContentLoaded', function() {
    const productDetails = {
        '1.png': { title: "Luxury Bathtub", price: "$2,300" },
        '2.png': { title: "Modern Showerhead", price: "$180" },
        '3.png': { title: "Marble Sink", price: "$950" },
        '4.png': { title: "Elegant Towel Rack", price: "$120" },
        '5.png': { title: "Jacuzzi Tub", price: "$5,500" },
        '6.png': { title: "Rainfall Shower", price: "$400" },
        '7.png': { title: "Classic Vanity", price: "$1,250" },
        '8.png': { title: "Heated Towel Rail", price: "$300" },
        '9.png': { title: "Vintage Bath Faucet", price: "$220" },
        '10.png': { title: "Freestanding Bathtub", price: "$2,800" },
        '11.png': { title: "Deluxe Bath Mat", price: "$80" },
        '12.png': { title: "Ceramic Soap Dispenser", price: "$25" },
        '13.png': { title: "Spa Bath Pillow", price: "$40" },
        '14.png': { title: "Bamboo Bath Caddy", price: "$65" },
        '15.png': { title: "LED Mirror", price: "$450" },
        '16.png': { title: "Modern Shower Door", price: "$600" }
        };
    
for (item in productDetails){
    //console.log(productDetails[item].title)
    const ul = document.getElementsByClassName('list-items')[0]
    const li = document.createElement('li')
    const a = document.createElement('a')
    const img = document.createElement('img')
    let title = document.createElement('p')
    let price = document.createElement('p')

    a.href = `item.html?product=${item}`;  

    img.setAttribute('data-item', item);
    img.src = `src/img/${item}`;
    title.innerHTML = productDetails[item].title;
    price.innerText = productDetails[item].price;

    ul.appendChild(li)
    li.appendChild(a)
    a.appendChild(img)
    a.appendChild(title)
    a.appendChild(price)
}

//})
