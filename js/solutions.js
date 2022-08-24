window.addEventListener('load',()=>{

const solutionList = document.querySelector('#solutions-all')



initEvent();

function initEvent(){

    window.addEventListener('scroll',scrollSolution) 

}

function scrollSolution(){

    let scrollHeight = window.pageYOffset;

    if(scrollHeight>=4900){
        

        gsap.to(solutionList,{margin:'73 0 0 0',opacity:1,ease:'power1.out',duration:0.8})

        
    }
}
})