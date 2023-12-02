const navbar = document.querySelector('.navbar');
const header_contant_p = document.querySelector('.header-contant p');
const load = document.querySelector('.loding');
const scroll_top = document.querySelector('.scrool-top');
const nav_links =  document.querySelectorAll('.nav-link');

window.addEventListener('scroll',function(){
    console.log(window.scrollY);
    if(window.scrollY >= header_contant_p.offsetTop){
        navbar.style.backgroundColor = "#fff";
        scroll_top.classList.remove('opacity-0','invisible');
    }
    else{
        navbar.style.backgroundColor = "transparent";
        scroll_top.classList.add('opacity-0','invisible');
    }
})

window.addEventListener('load',function(){
    setTimeout(function(){
        load.classList.add('opacity-0','invisible');
        document.body.style.overflow="auto";
    },2000);
});

scroll_top.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})

for(let i=0; i<nav_links.length ;i++){
    nav_links[i].addEventListener('click',function(e){
        e.preventDefault();
        for(let j=0; j<nav_links.length;j++){
            nav_links[j].classList.remove('active');    
        }
        nav_links[i].classList.add('active');
    })
}