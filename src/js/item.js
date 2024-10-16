document.addEventListener('DOMContentLoaded', function() {
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

    
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

   
    const product = getQueryParam('product');

    if (product && productDetails[product]) {
    
        const productTitle = document.getElementById('product-title');
        const productImage = document.getElementById('product-image');
        const productPrice = document.getElementById('product-price');

        productTitle.innerHTML = productDetails[product].title;
        productImage.src = `src/img/${product}`;
        productPrice.innerText = productDetails[product].price;
    }
});