    //     Add to Cart

    const btnCart = document.querySelector('btn-cart');
    const cart = document.querySelector('.cart');
    const btnClose = document.querySelector('#cart-close');

    btnCart.addEventListener('click',()=>{
        cart.classList.add('cart-active');
    });

    btnClose.addEventListener('click',()=>{
        cart.classList.remove('cart-active');
    });

    document.addEventListener('DOMContentLoaded',loadfood);

    function loadfood(){
        loadContent();
    }

    function loadContent(){
        let btnRemove = document.querySelectorAll('.cart-remove');
        console.log(btnRemove);
        btnRemove.forEach{(btn)=>{
            btn.addEventListener('click',removeItem);
        }}; 
    }