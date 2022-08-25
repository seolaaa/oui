window.addEventListener('load',()=>{

const solutionList = document.querySelectorAll('#solutions-all>li')

let isWheel = false;

initEvent();

function initEvent(){

    window.addEventListener('scroll',scrollSolution) 

}

function scrollSolution(){

    let scrollHeight = window.pageYOffset;

    if(scrollHeight>=4900){

        for(let i=0; i<solutionList.length; i++){
            gsap.to(solutionList[i],{opacity:1,scale:1,duration:0.1,delay:i*0.3,ease:'power4.out',}),isWheel = false;
        }
    }
    }
})