document.addEventListener('DOMContentLoaded',()=>{

    const headerWrap = document.querySelector('#header-wrap')
    
    initEvent();

    function initEvent(){

        window.addEventListener('scroll',scrollMenu)
    }

    function scrollMenu(){
        let scrollHeight=window.pageYOffset;

        if(scrollHeight>=20){
            gsap.to(headerWrap, {top:-136, opacity:0, duration:0.5, ease:'power1.out'})
        }else{
            gsap.to(headerWrap, {top:0, opacity:1, duration:0.5, ease:'power1.out'})
        }
    }
})