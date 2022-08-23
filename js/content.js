


document.addEventListener('DOMContentLoaded',()=>{

    const storeList = document.querySelectorAll('#store-list>li');
    const storeWrap = document.querySelector('#store-list');

    

    let selectedStore = null;


    initEvent();

    function initEvent(){


    for(const item of storeList){
            item.addEventListener('mouseenter',enterStore)
        }
        
        storeWrap.addEventListener('mouseleave',leaveStore)


        

    function enterStore(){
        hideSore(this)
        showStore(this)
    }

    function leaveStore(){
        hideSore(this)
        selectedStore=null;
    }    
   
    function hideSore(store){
        if(selectedStore!=null && selectedStore!=store){
            selectedStore.children[2].classList.remove('selected')

            
            gsap.to(storeWrap,{scale:1,duration:0.5,ease:'power1.out'})
            gsap.to(selectedStore,{scale:0.9,duration:0.5,ease:'power1.out'})
         }
    }


    function showStore(store){

        if(selectedStore!=store){
            selectedStore=store
            selectedStore.children[2].classList.add('selected')


            
        
            gsap.to(storeWrap,{scale:0.9,duration:0.5,ease:'power1.out'})
            gsap.to(selectedStore,{scale:1.1,duration:0.5,ease:'power1.out'})
             
        } 
    }

    
    }

    


})    