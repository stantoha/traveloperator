window.addEventListener("DOMContentLoaded", () => {
    let sections = document.querySelectorAll(".section"),
        headerHalfs = document.querySelectorAll(".header__half"),
        header = document.querySelector(".header"),
        toursList=document.querySelector('.tour__links__list'),
        tourLinksListTitle=document.querySelector('.tour__links__list__title'),
        tourItems=document.querySelectorAll('.tour__item'),
        tourLinksActive=document.querySelectorAll('.tour__link','.tour__link__active'),
        tourCards=document.querySelectorAll('.tour__card'),
        destinationSelect=document.querySelector('.select__destination'),
        destinations=document.querySelectorAll('.destination__item').values,
        durationSelect=document.querySelector('.select__duration'),
        typeSelect=document.querySelector('.select__type'),
        toursFilter=document.querySelector('.tours__filter'),
        mainContent=document.querySelector('.main__content'),
        tourNames=['Paris','Bordeaux','Nice','Berlin','Munich','Drezden','Hamburg','Rome','Venecia','Firenze'],
        toursDestinations=['All tours','France','Germany','Italy','Tailand',
        'India','USA','Mexica','Canada','Dominicana','Marrocco','Tunis'],
        toursDurations=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
        
        window.addEventListener("scroll", checkHeaderHalfs);
  
        checkHeaderHalfs();
        
        function checkHeaderHalfs() {
          if (window.pageYOffset < 200) {
            header.classList.remove("top__slide");
          }
           else {
            header.classList.add("top__slide");
          }
          headerHalfs.forEach((headerHalf) => {
            if (window.pageYOffset < 200) {
              headerHalf.classList.add("shown");
            }
             else {
              headerHalf.classList.remove("shown");
            }
          });
          
        }
        
        
        window.addEventListener("scroll", checkSections);
          
        checkSections();
        
        function checkSections() {
          const triggerBottom = (window.innerHeight / 5) * 4;
        
          sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
        
            if (sectionTop < triggerBottom) {
              section.classList.add("shown");
            } else {
              section.classList.remove("shown");
            }
          });
        }

function hideItems(items){
    items.forEach(item=>{
      item.classList.add('hide');
      item.classList.remove('show','fade');
    });
  }
  
  function showItems(items,i){
     items[i].classList.remove('hide');
     items[i].classList.add('show','fade');
  }





tourLinksListTitle.textContent=toursDestinations[0];

function selectDestination(target){

  hideItems(tourItems);
  let j=Number(target.selectedIndex);
  tourLinksListTitle.textContent=toursDestinations[j];
  tourItems.forEach((tourItem,i)=>{
    if(tourItem.dataset.destination==toursDestinations[j]){
     showItems(tourItems,i);
     tourLinksListTitle.textContent=toursDestinations[j];
    }
  });

}
function selectDuration(target){

  hideItems(tourItems);
  let j=Number((target.selectedIndex)+3);
      tourItems.forEach((tourItem,i)=>{
          if(tourItem.dataset.duration==j){
           showItems(tourItems,i);
        }
       });
}
toursFilter.addEventListener('change',(event)=>{
let target=event.target;
if(target==durationSelect){
  selectDuration(durationSelect);}

  if(target==destinationSelect){
selectDestination(destinationSelect);
  }


});





















});