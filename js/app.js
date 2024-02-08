const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    burger.addEventListener('click' , ()=>{
        nav.classList.toggle('nav-active');  
        
        //hamburger animation

        burger.classList.toggle('toggle');

    });

};

navSlide();