//NAV-START
//nav toggle

const toggleNav = ()=>{
    const mobileId = document.getElementById("mobile-menu");
    mobileId.classList.toggle("hidden");
}


const ToggleCart = ()=>{
    const cartId = document.getElementById("cart-sidebar");
    cartId.classList.toggle("hidden");
}

//NAV-END

//CART-SEIDEBAR-ADDING-ITEMS
const cartItem = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const count = document.getElementById("cart-count");
let Total = 0;
let counter = 0;


function addToCart(name,price,image){

    price = parseFloat(price);

    const items = document.createElement("li");
    items.classList.add("flex","justify-between","items-center","p-4","border-b","border-pink");
    items.innerHTML = `
        <div class="flex items-center gap-4">
                    <img src="${image}" alt="${name}" class="w-20 h-20 object-cover rounded-lg">
                    <div>
                        <h4 class="text-lg font-semibold capitalize">${name}</h4>
                        <p class="text-pink">${price} Taka</p>
                    </div>
                </div>
                <button class=" text-pink px-4 py-2 rounded-full text-right" onclick="removeFromCart(event, this, ${price})">X</button>
            `

            cartItem.appendChild(items);

            Total=Total+price;

            cartTotal.textContent = Total.toFixed(2);
            
            counter++;
            updateCounter();
}

function removeFromCart(event,button,price){
    price = parseFloat(price);

    event.stopPropagation();

    const cartItem = button.parentElement;
    cartItem.remove();

    Total=Total-price;

    cartTotal.textContent = Total.toFixed(2);
    counter--;
    updateCounter();
}

function updateCounter(){
    count.textContent = counter;

    if(counter>0){
        count.classList.remove("hidden");
    }else{
        count.classList.add("hidden");
    }
}

//CART-SEIDEBAR-ADDING-ITEMS-END

//for-home-recommended-scroll
const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let scrollAmount = 300;

prev.addEventListener("click",()=>{
    slider.scrollBy({
        left:-scrollAmount,
        behavior:"smooth"
    });
});

next.addEventListener("click",()=>{
    slider.scrollBy({
        left:scrollAmount,
        behavior:"smooth"
    });
});