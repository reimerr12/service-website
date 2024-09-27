
//NAV-START
//nav toggle

const toggleNav =()=>{
    const mobileId = document.getElementById("mobile-menu");
    mobileId.classList.toggle("hidden");
}

//cart toggle

const ToggleCart = ()=>{
    const cartId = document.getElementById("cart-sidebar");
    cartId.classList.toggle("hidden");
}

//NAV-END

//MODAL-START

//city-button-modal
const cityName = document.querySelectorAll(".city-option");
const cityModal= document.getElementById("city-modal");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");

openModalBtn.addEventListener("click",function(){
    cityModal.classList.toggle("hidden");
});

closeModalBtn.addEventListener("click",function(){
    cityModal.classList.toggle("hidden");
});

//btn-city-change-name

cityName.forEach(option =>{
    option.addEventListener("click",function(){
        const Name = this.getAttribute("data-city");
        openModalBtn.innerHTML = `<i class="fa-solid fa-location-dot mr-2"></i> ${Name}`;
        cityModal.classList.toggle("hidden");
    });
});

//MODAL-END

//HOME-SCROLLBAR-START
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const scrollAmount = 200;


//initial-check
//checkBtnVisibility()

prevBtn.addEventListener("click",()=>{
    slider.scrollBy({
        left: -scrollAmount,
        behavior:"smooth"
    });
    //setTimeout(checkBtnVisibility , 300); //added for visibility check
});


nextBtn.addEventListener("click",()=>{
    slider.scrollBy({
        left:scrollAmount,
        behavior:"smooth"
    });
    //setTimeout(checkBtnVisibility , 300);//added for visibility check
});


//buttons stop displaying after scroll 
/* function checkBtnVisibility(){
    if(slider.scrollLeft===0){
        prevBtn.style.display="none";
    }else{
        prevBtn.style.display="block";
    }

    if(slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth){
        nextBtn.style.display="none";
    }else{
        nextBtn.style.display="block";
    }
} */

//check again on window resize
//window.addEventListener("resize",checkBtnVisibility);

//HOME-SCROLL-BAR-END



//OUR-SERVICES

//scroll-bar

const slider2 = document.getElementById("slider2");
const prev2 = document.getElementById("prev2");
const next2 = document.getElementById("next2");

const scrollAmount2 = 300;

prev2.addEventListener("click",()=>{
    slider2.scrollBy({
        left:-scrollAmount2,
        behavior:"smooth"
    });
});

next2.addEventListener("click",()=>{
    slider2.scrollBy({
        left:scrollAmount2,
        behavior:"smooth"
    });
});

//ADDING PRODUCT TO CARTS
const cartItem= document.getElementById("cart-items");
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

    //increasing the price
    Total=Total+price;

    cartTotal.textContent = Total.toFixed(2);

    counter++;
    updateCounter()
}

function removeFromCart(event,button,price){

    price = parseFloat(price);

    event.stopPropagation();

    const cartItem = button.parentElement;
    cartItem.remove();

    Total=Total-price;

    cartTotal.textContent=Total.toFixed(2);

    counter--;
    updateCounter()
}


function updateCounter(){
    count.textContent = counter;

    if(counter>0){
        count.classList.remove("hidden");
    }else{
        count.classList.add("hidden");
    }
}

//VIDEO-MODAL-START
window.addEventListener("DOMContentLoaded",function(){
    const VideoModal = document.getElementById("videoModal");
    const openVideo = document.getElementById("openVideoModal");
    const closeVideo = document.getElementById("closeVideoModal");

    openVideo.addEventListener("click",function(){
        VideoModal.classList.remove('hidden');
        VideoModal.classList.add("flex");
    });

    closeVideo.addEventListener("click",function(){
        VideoModal.classList.remove('flex');
        VideoModal.classList.add("hidden");
    });
});
//VIDEO-MODAL-END


//review-scroll-bar-start
window.addEventListener("DOMContentLoaded",function(){
    var container = document.getElementById("review-container");
    var prevReview = document.getElementById("review-prev");
    var nextReview = document.getElementById("review-next");

    var scrollAmount = container.offsetWidth / 4;

    prevReview.addEventListener("click",function(){
        container.scrollBy({
            left:-scrollAmount,
            behavior:"smooth"
        });
    });
    nextReview.addEventListener("click",function(){
        container.scrollBy({
            left:scrollAmount,
            behavior:"smooth"
        });
    });
});
//review-scroll-bar-end