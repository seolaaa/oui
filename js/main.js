

window.addEventListener('load',()=>{

    const content = document.querySelectorAll('.scroll-wrap')
    const text1 = document.querySelector('.title-1')
    const text2 = document.querySelector('.on-text')
    const text3 = document.querySelector('#title-in-text')
    const img = document.querySelector('#main-image')

    const windowHeight = window.innerHeight;

    let index = 0;
    let isWheel = false;

   
    initEvent();

   

    function initEvent(){
        window.addEventListener('scroll',scrollWindow)
    }

 

    function scrollWindow(){

        let scrollHeight = window.pageYOffset;

        if(scrollHeight>=700){
            gsap.to(text1,{opacity:1,duration:0.5,ease:'power1.out',delay:0})
        }

        if(scrollHeight>=900){
            gsap.to(text2,{width:864,opacity:1,duration:1,ease:'power1.out',delay:0.5})
            gsap.to(text3,{top:680,opacity:1,duration:0.5,ease:'power1.out',delay:0.7})
            gsap.to(img,{opacity:1,duration:0.5,ease:'power1.out',delay:0.2}),isWheel=false;
        }
        
    }

            
        
            
    


    

      
})