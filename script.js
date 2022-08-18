window.addEventListener('DOMContentLoaded', () => {
    let sections=document.querySelectorAll('.section'),
    headerHalfs=document.querySelectorAll('.header__half'),
    header=document.querySelector('.header'),
    navMenu=document.querySelector('.nav__menu'),
    tabs = document.querySelectorAll(".nav__menu__link"),
    tabsContent = document.querySelectorAll(".main__content"),
 findTravelBox = document.querySelectorAll('.find__travel__background') ,
findTravelBoxBackgrounds=["1","2","3","4","5","6","7","8","9","10","11","12","13","14"],
findTravelBoxBackgroundsVertical=["15","16","17","18","19","20","21","22","23","24"];



function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("active");
    });
  }
  

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("active");
  }

  hideTabContent();
  showTabContent();

  navMenu.addEventListener("click", (event) => {
    let target = event.target;
    if (target && target.classList.contains("nav__menu__link")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          window.scrollTo(0, 0);
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

function findTravelChangeBG(){
    findTravelBox.forEach((item, i) => {
        let timerId=setTimeout(function log(){
            if(document.documentElement.clientWidth>991){
                item.style.cssText = `
            background:url("img/bg${findTravelBoxBackgrounds[i]}.png") no-repeat;
            background-size:cover;`;
            if(i<findTravelBoxBackgrounds.length-1 || i===0){
                i++;
                console.log(i);
                timerId=setTimeout(log,10000);
            }
            else if(i==findTravelBoxBackgrounds.length-1){
                i=0;
                console.log(i);
                timerId=setTimeout(log,10000);
            }
            }
            else if(document.documentElement.clientWidth<991 && document.documentElement.clientWidth>0){
                item.style.cssText = `
                background:url("img/bg${findTravelBoxBackgroundsVertical[i]}.png") no-repeat ;
                background-size:cover;`;
            if(i<findTravelBoxBackgroundsVertical.length-1 || i===0){
                i++;
                timerId=setTimeout(log,10000);
            }
            else if(i==findTravelBoxBackgroundsVertical.length-1){
                i=0;
                timerId=setTimeout(log,10000);
            }
            }
            
        },100);
});
} 

findTravelChangeBG();
window.addEventListener('scroll', checkSections);

checkSections();

function checkSections(){
    const triggerBottom=(window.innerHeight/5*4);

    sections.forEach(section=>{
        const sectionTop=section.getBoundingClientRect().top;

        if(sectionTop<triggerBottom){
            section.classList.add('shown');
        }
        else{
            section.classList.remove('shown');
        }
    });
}

window.addEventListener('scroll', checkHeaderHalfs);

checkHeaderHalfs();

function checkHeaderHalfs(){
       
    headerHalfs.forEach(headerHalf=>{
        if (window.pageYOffset <200) {
            headerHalf.classList.add('shown');
        }
        else{
            headerHalf.classList.remove('shown');
        }
    });
    if (window.pageYOffset <200) {
        header.classList.remove('top__slide');
    }
    else{
        header.classList.add('top__slide');
    }
}


});
