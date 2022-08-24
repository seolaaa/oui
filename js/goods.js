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
const wrap = document.querySelector('#goods-body');


let startX = -wrap.offsetLeft;
let startX2 = wrap.offsetLeft;
let topCurrentX = startX;
let downCurrentX = startX;
let stepX = 2;
let endX = startX+window.innerWidth-downText.offsetWidth;
let endX2 = startX+window.innerWidth-onText.offsetWidth;

//onText.offsetWidth;







moving();
initEvent();




function initEvent(){
    
    window.addEventListener('scroll',divScroll)
   
}


function divScroll(){

    let scrollHeight = window.pageYOffset;

    if(scrollHeight>=4000){

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



function moving(){

    setInterval(textMoving,5)
}



function textMoving(){

    topCurrentX+=stepX
    downCurrentX+=(-stepX)

    if(topCurrentX >= endX || topCurrentX <=0){
        stepX=+1
    }
    // if(downCurrentX >= endX || downCurrentX <=0){
    //     stepX=+1
    // }
   

   onText.style.left=topCurrentX+"px"
   downText.style.left=downCurrentX+"px"

  

 
}




    
})