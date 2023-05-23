const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const hamburgerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('#shoppingCart')


function toggleDesktopMenu(){
    const isAsideMenuClosed = asideCart.classList.contains('inactive');
    if(!isAsideMenuClosed){
        asideCart.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideMenuClosed = asideCart.classList.contains('inactive');
    if(!isAsideMenuClosed){
        asideCart.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoIcon(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    asideCart.classList.toggle('inactive')
}

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoIcon);


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}, {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}, {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

const renderProducts = (arr) =>{
    for(product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const prodInfoContainer = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerHTML = '$' + product.price
    
        const productName = document.createElement('p')
        productName.innerHTML = product.name
    
        const figureInfo = document.createElement('figure')
        const imgCart = document.createElement('img')
        imgCart.setAttribute('src', "./icons/bt_add_to_cart.svg")
    
        figureInfo.appendChild(imgCart)
        prodInfoContainer.append(productPrice, productName)
        productInfo.append(prodInfoContainer, figureInfo)
        productCard.append(img, productInfo)
    
        const cardsContainer = document.querySelector('.cards-container')
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)

