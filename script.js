window.addEventListener("DOMContentLoaded", () => {
   let sections = document.querySelectorAll(".section"),
    nav=document.querySelector(".nav__menu"),
    navLinks = document.querySelectorAll(".nav__menu__link"),

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
        mainContents=document.querySelectorAll('.main__content'),
        tourNames=['Paris','Budapest','Prague','Berlin','Munich','Drezden','Hamburg','Rome','Venecia','Toscana'],
        toursDestinations=['All tours','France','Hungary','Czech','Germany','Italy','Tailand',
        'India','USA','Mexica','Canada','Dominicana','Marrocco','Tunis'],
        toursDurations=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'],
        findTravel = document.querySelector(".find__travel"),
        findTravelBackgrounds = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
        ],
        findTravelBackgroundsVertical = [
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
        ];
       /*  findTravelBackgrounds = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14",
        "15","16","17","18","19","20","21","22","23","24"]; */

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

        //Nav-menu
        hideItems(mainContents);
        showItems(mainContents,0);
        nav.addEventListener('click',(event)=>{
          let target=event.target;
        
            navLinks.forEach((navLink,i)=>{
              navLink.classList.remove('active');
              if(target==navLink){
                target.classList.add('active');

                 hideItems(mainContents);
                 showItems(mainContents,i);
                }
            });
        
        });
        ////////////////////////////////
        //Header-halfs
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



        function changeBackground(i,height){
          findTravel.style.cssText=`background:url("img/bg${i}.png") no-repeat 100% 100%;
          background-size:cover;
          width:100%;
          height:${height}vw;`;
        }
        
        function changeBackgroundTimer(i){
        
           changeBackground(1,65);
         
           if(document.documentElement.clientWidth>860){
            
            let id=setTimeout(function log(){
              if(i<findTravelBackgrounds.length){
                i++;
                console.log(i);
                changeBackground(i,65);
              }
              else{
                i=1;
              }
              id=setTimeout(log,10000);
            
            },10000);
           }
           else{
            let id=setTimeout(function log(){
              if(i<findTravelBackgroundsVertical.length){
                i++;
                console.log(i);
                changeBackground(i,130);
              }
              else{
                i=1;
              }
          
              id=setTimeout(log,10000);
            
            },10000);
           }

        }
        
        changeBackgroundTimer(1);



        ////////////////////////////////
        //Section-slide
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
        ////////////////////////////////
     

        tourItems.forEach((tourItem,i)=>{
            tourItem.style.cssText=`background: url("img/contentpic/${i}.jpg") no-repeat 50% 50%;
            background-size:contain;`;
         });


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

