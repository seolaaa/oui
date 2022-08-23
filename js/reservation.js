

window.addEventListener('load',()=>{
    const pickWrap = document.querySelector('#pick')
    const pickLi = document.querySelectorAll('#pick-list>li')
    const btnImg = document.querySelectorAll('#pick-btn')
    const leftBtn = document.querySelector('#left-btn')
    const rightBtn = document.querySelector('#right-btn')

    const type = document.querySelectorAll('.type')

    


    let currentIndex = 0;
    let nextIndex = 1;

    let pickLength = pickLi.length;
    let pickWidth = pickWrap.offsetWidth;
    let isSlide = false;

    





    init(); //bom 11참고
    initEvent();


    function init(){
        gsap.set(pickLi,{left:pickWidth,opacity:0})
        gsap.set(pickLi[0],{left:0,opacity:1})
    }

    function initEvent(){
        
        rightBtn.addEventListener('click',pickRight);
        leftBtn.addEventListener('click',pickLeft);

        


    }

    function pickRight(){
        if(isSlide==false){
            isSlide = true;
            nextIndex = currentIndex+1;
          }
          
          if(nextIndex>=pickLength){
            nextIndex = 0;
          }

         
          gsap.to(pickLi[currentIndex],{right:pickWidth,opacity:0, duration:0.5, ease:'power1.out'})
          gsap.set(pickLi[nextIndex],{left:pickWidth})
          gsap.to(pickLi[nextIndex],{left:0,opacity:1,duration:0.5,ease:'power1.out',onComplete:()=>{
            isSlide=false;
          }})
          currentIndex=nextIndex;
    }

    function pickLeft(){
      if(isSlide==false){
        isSlide = true;
        nextIndex = currentIndex-1;
      }

     
      if(nextIndex<0){
        nextIndex = 0;
      }

      gsap.to(pickLi[currentIndex],{left:-pickWidth,opacity:0, duration:0.5, ease:'power1.out'})
      gsap.set(pickLi[nextIndex],{left:pickWidth})
      gsap.to(pickLi[nextIndex],{left:0,opacity:1,duration:0.5,ease:'power1.out',onComplete:()=>{
        isSlide=false;
      }})
      currentIndex=nextIndex;
    }

    // function pickClick(){

    //   let clickNum = getIndex(this)


    //   alert(clickNum)
      
      
    // }

    // function getIndex(checkMenu){

    //   let selectedIndex = 0;

    //   while((checkMenu=checkMenu.previousElementSibling)!=null){ 
    //     selectedIndex++  
    //   }
    //   return selectedIndex;
    // }






    
    
    
    


})