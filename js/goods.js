window.addEventListener('load',()=>{

const divWrap = document.querySelectorAll('#goods-list>div')

// alert(divWrap.length)

let index = 0;
let isWheel = false;

initEvent();

function initEvent(){
    for(item of divWrap){
        item.addEventListener('scroll',divScroll)
    }
}

function divScroll(){

    let scrollIndex = getIndex(this)
    alert(scrollIndex)

}

function getIndex(list){

    let selectedIndex = 0;

    while((list=list.previousElementSibling)!=null){

      selectedIndex++
    }

    return selectedIndex;



}

})