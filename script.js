window.addEventListener("DOMContentLoaded", () => {
   let sections = document.querySelectorAll(".section"),
    nav=document.querySelector(".nav__menu"),
    navLinks = document.querySelectorAll(".nav__menu__link"),

        headerHalfs = document.querySelectorAll(".header__half"),
        header = document.querySelector(".header"),
        toursList=document.querySelector('.tour__links__list'),
        tourLinksListTitle=document.querySelector('.tour__links__list__title'),
        tourItems=document.querySelectorAll('.tour__item'),
        destinationSelect=document.querySelector('.select__destination'),
        destinations=document.querySelectorAll('.destination__item'),
        durationSelect=document.querySelector('.select__duration'),
        typeSelect=document.querySelector('.select__type'),
        toursFilter=document.querySelector('.tours__filter'),
        mainContents=document.querySelectorAll('.main__content'),
       /*  tourNames=['Paris','Budapest','Prague','Berlin','Munich','Drezden','Hamburg','Rome','Venecia','Toscana'], */
        toursDestinations=['All tours','France','Hungary','Czech','Germany','Italy','Tailand',
        'India','USA','Mexica','Canada','Dominicana','Marrocco','Tunis'],
        toursDurations=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'],
        findTravel = document.querySelector(".find__travel"),
        symbolItems=document.querySelectorAll('.symbol__item'),
        findTravelBackgrounds = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14",
        ],
        findTravelBackgroundsVertical = ["15","16","17","18","19","20","21","22","23","24",
        ],
        countriesInfos=document.querySelectorAll('.country__info'),
        countriesList=document.querySelector('.countries__cards__list'),
        countriesLinks=document.querySelectorAll('.country__card__link ');
      


 

        
symbolItems.forEach((item,i)=>{
  if(i%2===0){
    item.classList.add('slide__left');
  }
  else{
    item.classList.add('slide__right');
  }
  });

        let showLetter=function(item){
          item.classList.remove('slide__left');
          item.classList.remove('slide__right');
      };


      function showLetters(){
       
      let i=0;
         let letTimer= setTimeout(function timerLet(){
          do{
            showLetter(symbolItems[i]);
            i++;
            letTimer=setTimeout(timerLet,300);
          }
          while(i===symbolItems.length);
          
         } ,300);
        
      }
      
      showLetters();

       let hideItem= function(items,i){
          items[i].classList.add('hide');
          items[i].classList.remove('show','fade');
          return items[i];
      };

       let hideAllItems= function(items){
          items.forEach(item=>{
          item.classList.add('hide');
          item.classList.remove('show','fade');
          return item;
          });
      };

     let showItem= function(items,i){
          items[i].classList.remove('hide');
          items[i].classList.add('show','fade');
          return items[i];
      };
      
    
   let showAllItems= function(items){
      items.forEach(item=>{
        item.classList.remove('hide');
        item.classList.add('show','fade');
        return item;
      });
    };

  


        //Nav-menu

        let navBtn=document.querySelector('.nav__btn');
        navBtn.addEventListener('click',function(){
          navBtn.classList.toggle('nav__btn__transform');
          if(!(nav.classList.contains('slide__right'))){
          nav.classList.add('slide__right');
          }
          else{
            nav.classList.remove('slide__right');
          }
        });



        hideAllItems(mainContents);
        showItem(mainContents,0);
        nav.addEventListener('click',(event)=>{
          let target=event.target;
            navLinks.forEach((navLink,i)=>{
              navLink.classList.remove('active');
              if(target==navLink){
                target.classList.add('active');
                 hideAllItems(mainContents);
                 showItem(mainContents,i);
                }
              else if(i===3){
                showItem(mainContents,3);
        hideAllItems(countriesInfos);
        showItem(countriesInfos,0);
        countriesList.addEventListener('click',(event)=>{
          let target=event.target;
          if(mainContents[2].classList.contains('show')){
            console.log('hye');
            countriesLinks.forEach((countriesLink,j)=>{
              if(target===countriesLink ){
                hideAllItems(countriesInfos);
                showItem(countriesInfos,j);
               }
             });
          }
       });
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


        tourLinksListTitle.textContent=toursDestinations[0];




        let selectDestination=function(indexSel){
          
          tourLinksListTitle.textContent=destinations[indexSel].value;
          
          if(durationSelect.selectedIndex!==0){
          }
          else{
            tourItems.forEach((tourItem,i)=>{
              if(indexSel===0){
               showAllItems(tourItems);
              }
              else{
                if(tourItem.dataset.destination==destinations[indexSel].value){
                 showItem(tourItems,i);
                 console.log(showItem(tourItems,i)); 
                  tourLinksListTitle.textContent=destinations[indexSel].value;
              }
              }
             });
          }
        };

         let selectDuration= function(indexSel){
       
          tourItems.forEach((tourItem,i)=>{
            if(indexSel===0){
              showAllItems(tourItems);
            }
            else if(tourItem.dataset.duration==indexSel){
              showItem(tourItems,i);
          }
            return tourItems;
          });
        };    
 
        
 
        destinationSelect.addEventListener('change',(event)=>{
          let target=event.target;
          let indexSel=target.selectedIndex;
          hideAllItems(tourItems);
          });

          let selectType=function(indexSel){
            tourItems.forEach((tourItem,i)=>{
              if(typeSelect[indexSel].value==='All'){
                showAllItems(tourItems);
              }
              else if(tourItem.dataset.type==typeSelect[indexSel].value){
                showItem(tourItems,i);
              }
            });
          };
 
        toursFilter.addEventListener('change',(event)=>{
        let target=event.target;
        let indexSel=target.selectedIndex;
        hideAllItems(tourItems);
        console.log(indexSel);
          if(target==destinationSelect){
        selectDestination(indexSel);
          }
        else if(target==durationSelect){
            selectDuration(indexSel);
          }
          else if(target==typeSelect){
            selectType(indexSel);
          }
        });

 




        let priceRange=document.getElementById('price').value;
        console.log(priceRange); 



     function filterTours(){
          tourItems.forEach((tourItem,i)=>{
            if(destinationSelect.selectedIndex.value!==0 && tourItem.dataset.destination==destinations[indexSel].value){
            }

          });
        }

        

        let tourLinksList=document.querySelector('.tour__links__list'),
        tourLinks=document.querySelectorAll('.tour__link'),
        tourCard=document.querySelector('.tour__card');
        
        
        let tourNames=['Paris,my Love','Berlin,Old & New'],
        tourDurations=['6','8'],
        routePoints=[['Lviv','Krakow','Drezden','Reims','Paris','Frankfurt','Wroclaw'],
        ['Lviv','Krakow','Berlin','Wroclaw']],
        countriesVisited=[['Ukraine','Poland','Germany','France'],
        ['Ukraine','Poland','Germany']];
        
        
        
        let tourName=tourCard.children[0].children[0].children[0],
         tourDuration=tourCard.children[0].children[0].children[1],
         tourRoutePointsList=tourCard.children[1].children[0],
         tourCountriesVisitedList=tourCard.children[1].children[1];
         let showCardTitle=function(target){
            tourLinks.forEach((item,i)=>{
                if(target===tourLinks[i]){
                    console.log(i);
                    tourName.textContent=tourNames[i];
                    tourDuration.textContent=tourDurations[i]+' days';
                  }
            });
        };
        let showRoute=function(target){
           tourLinks.forEach((item,i)=>{
            if(target===tourLinks[i]){
                for(let j=0;j<routePoints[i].length;j++){
                    const routePoint=document.createElement('li');
                    routePoint.classList.add('route__point');
                    routePoint.textContent=(routePoints[i])[j]; 
                    tourRoutePointsList.append(routePoint);
                }
              }
        });
        };
        let showCountriesVisited=function(target){
            tourLinks.forEach((item,i)=>{
             if(target===tourLinks[i]){
                 for(let j=0;j<countriesVisited[i].length;j++){
                     const countryVisited=document.createElement('li');
                     countryVisited.classList.add('countries__visited__item');
                     countryVisited.textContent=(countriesVisited[i])[j]; 
                     tourCountriesVisitedList.append(countryVisited);
                 }
               }
         });
         };
        
        
        
        tourLinksList.addEventListener('click',(event)=>{
            let target=event.target;
     
               showCardTitle(target);
               showRoute(target);
               showCountriesVisited(target);
        });

























});
        







 




