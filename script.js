window.addEventListener("DOMContentLoaded", () => {
   let sections = document.querySelectorAll(".section"),
    nav=document.querySelector(".nav__menu"),
    navLinks = document.querySelectorAll(".nav__menu__link"),

        headerHalfs = document.querySelectorAll(".header__half"),
        header = document.querySelector(".header"),
        tourLinksListTitle=document.querySelector('.tour__links__list__title'),
        tourItems=document.querySelectorAll('.tour__item'),
        destinationSelect=document.querySelector('.select__destination'),
        destinations=document.querySelectorAll('.destination__item'),
        durationSelect=document.querySelector('.select__duration'),
        typeSelect=document.querySelector('.select__type'),
        toursFilter=document.querySelector('.tours__filter'),
        mainContents=document.querySelectorAll('.main__content'),
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
        countriesLinks=document.querySelectorAll('.country__card__link '),
        modalLogin=document.querySelector('.modal__login'),
        modalCloseButton=document.getElementById('modal__close');

       let  showModal= function(){
          modalLogin.classList.remove('slide__right');
       };
        setTimeout(showModal,5000);
      

        let  closeModal= function(){
          modalLogin.classList.add('slide__right');
       };

       modalLogin.addEventListener('click',(event)=>{
        let target=event.target;
        if(target && target.classList.contains('modal__close')){
          console.log('hye');
          closeModal();
        }
       });


 

        
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
        routePoints=[['Lviv','Krakow','Drezden','Reims','Paris','Frankfurt','Wroclaw'],
        ['Lviv','Krakow','Berlin','Wroclaw']],
        countriesVisited=[['Ukraine','Poland','Germany','France'],
        ['Ukraine','Poland','Germany']],
        descrImages=['img/paris1.jpg','img/berlin1.jpg'],
        descrTexts=['For centuries Paris has been one of the world’s most important and attractive cities. It is appreciated for the opportunities it offers for business and commerce, for study, for culture, and for entertainment; its gastronomy, haute couture, painting, literature, and intellectual community especially enjoy an enviable reputation. Its sobriquet “the City of Light” (“la Ville Lumière”), earned during the Enlightenment, remains appropriate, for Paris has retained its importance as a centre for education and intellectual pursuits.',
        'Berlin, capital and chief urban centre of Germany. The city lies at the heart of the North German Plain, athwart an east-west commercial and geographic axis that helped make it the capital of the kingdom of Prussia and then, from 1871, of a unified Germany. Berlin’s former glory ended in 1945, but the city survived the destruction of World War II. It was rebuilt and came to show amazing economic and cultural growth.'],
        routeMaps=["https://www.google.com/maps/embed?pb=!1m42!1m8!1m3!1d20977501.454712257!2d13.190949!3d50.072615!3m2!1i1024!2i768!4f13.1!4m31!3e0!4m5!1s0x473add7c06037793%3A0x46725ceccfb371ad!2zNzkwMDAsINCb0YzQstC-0LIsINCb0YzQstC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!3m2!1d49.839683!2d24.029716999999998!4m5!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2z0JrRgNCw0LrQvtCyLCDQn9C-0LvRjNGI0LA!3m2!1d50.064650099999994!2d19.9449799!4m5!1s0x4709cf29101ad6a9%3A0x421b1cb4288feb0!2z0JTRgNC10LfQtNC10L0sINCT0LXRgNC80LDQvdC40Y8!3m2!1d51.0504088!2d13.737262099999999!4m5!1s0x47e974334a533b09%3A0x1c0a5fbd0071a500!2zNTExMDAg0KDQtdC50LzRgSwg0KTRgNCw0L3RhtC40Y8!3m2!1d49.244275099999996!2d4.0346212!4m5!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtC40Y8!3m2!1d48.856614!2d2.3522219!5e0!3m2!1suk!2sua!4v1662741295175!5m2!1suk!2sua"
      ,"https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d2562348.191882947!2d16.459790257189297!3d51.15838459911945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!3m2!1d49.839683!2d24.029716999999998!4m5!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2z0JrRgNCw0LrRltCyLCDQn9C-0LvRjNGJ0LA!3m2!1d50.064650099999994!2d19.9449799!4m5!1s0x47a84e373f035901%3A0x42120465b5e3b70!2z0JHQtdGA0LvRltC9LCDQndGW0LzQtdGH0YfQuNC90LA!3m2!1d52.520006599999995!2d13.404954!4m5!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2z0JLRgNC-0YbQu9Cw0LIsINCf0L7Qu9GM0YnQsA!3m2!1d51.1078852!2d17.038537599999998!5e0!3m2!1suk!2sua!4v1666257186560!5m2!1suk!2sua"],
      dayDescrs=[['some description text about Paris','some description text about Paris',
      'some description text about Paris','some description text about Paris','some description text about Paris',
      'some description text about Paris'],['some description text about Berlin','some description text about Berlin',
      'some description text about Berlin','some description text about Berlin','some description text about Berlin',
      'some description text about Berlin','some description text about Berlin','some description text about Berlin']],
        hotelNightsQuantity=['3','7'];
        
        
        
        let tourName=tourCard.children[0].children[0].children[0],
         tourDuration=tourCard.children[0].children[0].children[1],
         tourRoutePointsList=tourCard.children[1].children[0],
         tourCountriesVisitedList=tourCard.children[1].children[1],
         tourDescrImage=tourCard.children[2].children[0],
         tourDescrText=tourCard.children[2].children[0].children[0],
         tourRouteMap=tourCard.children[3].children[0].children[1],
         tourProgram=tourCard.children[4].children[0],
         tourJoinGroupCities=tourCard.children[6].children[0].children[2];

       let showCardTitle=function(target){
        tourLinks.forEach((item,i)=>{
            if(target===tourLinks[i]){
                tourName.textContent=tourNames[i];
                tourDuration.textContent=tourLinks[i].parentElement.dataset.duration+' days';
              }
        });
    };
    let showRoute=function(target){
      tourLinks.forEach((item,i)=>{
       if(target===tourLinks[i]){
           for(let j=0;j<routePoints[i].length;j++){
               const routePoint=document.createElement('li');
               routePoint.classList.add('route__point');
               routePoint.innerHTML=`<a href="#">${(routePoints[i])[j]}</a>`; 
               tourJoinGroupCities.textContent+=(routePoints[i])[j]+' / ';
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
                countryVisited.innerHTML=`<a href="#">${(countriesVisited[i])[j]}</a>`; 
                tourCountriesVisitedList.append(countryVisited);
            }
          }
    });
    };
    let showDescription=function(target){
      tourLinks.forEach((item,i)=>{
       if(target===tourLinks[i]){
        const descrText=document.createElement('p');
        descrText.classList.add('descr__text');
        descrText.textContent=descrTexts[i];
        tourDescrText.append(descrText);
        const descrImage=document.createElement('img');
        descrImage.classList.add('content__image');
        descrImage.src=descrImages[i]; 
        tourDescrImage.prepend(descrImage);
         }
   });
   };
       let showProgram=function(target){
        tourLinks.forEach((item,i)=>{
          if(target===tourLinks[i]){
            for(let j=0;j<tourLinks[i].parentElement.dataset.duration;j++){
              const programItem=document.createElement('li');
              programItem.classList.add('tour__program__item');
              if(j%2!==0){
                programItem.innerHTML=`<span class="day__number">${j+1} day</span>
                <p class="day__descr">
                  ${(dayDescrs[i])[j]}
                </p>
                <img src="" width="250" heigth="250" alt="#" class="descr__image" />`;
                tourProgram.append(programItem);
              }
              else{
                programItem.innerHTML=`<span class="day__number">${j+1} day</span>
              <img src="" width="250" heigth="250" alt="" class="descr__image" />
              <p class="day__descr">
                ${(dayDescrs[i])[j]}
              </p>`;
              tourProgram.append(programItem);
              }
            }
            }
      });
       };
       let showRouteMap=function(target){
        tourLinks.forEach((item,i)=>{
         if(target===tourLinks[i]){
             for(let j=0;j<routeMaps[i].length;j++){
              tourRouteMap.src=routeMaps[i];
             }
           }
     });
     };
         let showHotelNightsQuantity=function(target){
          tourLinks.forEach((item,i)=>{
           if(target===tourLinks[i]){
            let nights=document.querySelector('.hotel__nights');
            nights.textContent=`${hotelNightsQuantity[i]} nights in hotels 3*;`;
           }});};
         
      
        tourLinksList.addEventListener('click',(event)=>{
            let target=event.target;
     
               showCardTitle(target);
               showRoute(target);
               showCountriesVisited(target);
               showDescription(target);
               showRouteMap(target);
               showProgram(target);
               showHotelNightsQuantity(target);
        });

























});
        







 




