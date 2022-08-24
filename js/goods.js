window.addEventListener('load',()=>{

const div1 = document.querySelectorAll('.goods-image1');
const div2 = document.querySelectorAll('.goods-image2');
const div3 = document.querySelectorAll('.goods-image3');
const div4 = document.querySelectorAll('.goods-image4');
const div5 = document.querySelectorAll('.goods-image5');
const div6 = document.querySelectorAll('.goods-image6');
const div7 = document.querySelectorAll('.goods-image7');
const div8 = document.querySelectorAll('.goods-image8');

const onText = document.querySelector('.ontext');
const downText = document.querySelector('.downtext');
const line = document.querySelectorAll('.line');



let startX = line.offsetLeft;
let currentX = startX;
let stepX = 2;

move();


initEvent();

function initEvent(){
    
    window.addEventListener('scroll',divScroll)
}

function divScroll(){

    let scrollHeight = window.pageYOffset;

    if(scrollHeight>=3900){

        gsap.to(div1,{top:0,left:0,opacity:1,duration:1,ease:'power2.out',delay:0})
        gsap.to(div2,{top:0,left:213,opacity:1,duration:1,ease:'power2.out',delay:0.2})
        gsap.to(div3,{top:0,right:0,opacity:1,duration:1,ease:'power2.out',delay:0.4})
        gsap.to(div4,{right:0,opacity:1,duration:1,ease:'power2.out',delay:0.6})
        gsap.to(div5,{right:0,bottom:0,opacity:1,duration:1,ease:'power2.out',delay:0.8})
        gsap.to(div6,{bottom:0,opacity:1,duration:1,ease:'power2.out',delay:1})
        gsap.to(div7,{bottom:0,left:0,opacity:1,duration:1,ease:'power2.out',delay:1.2})
        gsap.to(div8,{left:0,opacity:1,duration:1,ease:'power2.out',delay:1.4})
    }
}


function move(){

    timer=requestAnimationFrame(move) 
}


    
})