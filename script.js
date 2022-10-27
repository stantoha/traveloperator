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
        findTravel = document.querySelector(".find__travel"),
        symbolItems=document.querySelectorAll('.symbol__item'),
        findTravelBackgrounds = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14",
        ],
        findTravelBackgroundsVertical = ["15","16","17","18","19","20","21","22","23","24",
        ],
        countryInfo=document.querySelector('.country__info'),
        countriesList=document.querySelector('.countries'),
        countriesLinks=document.querySelectorAll('.country__card__link '),
        modalLogin=document.querySelector('.modal__login'),
        tourItemBGs=["img\\contentpic\\0.jpg","img\\contentpic\\1.jpg"];


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
       

       let hideLetters=function(){
        symbolItems.forEach((item,i)=>{
          if(i%2===0){
            item.classList.add('slide__left');
          }
          else{
            item.classList.add('slide__right');
          }
          console.log(i);
          });
       };
       

      let showLetter=function(item){
          item.classList.remove('slide__left');
          item.classList.remove('slide__right');
          item.classList.add('symbol__shadow');

      };

      
     let showLetters= function(){
      let i=0;
         let letTimer=setTimeout(function timerLet(){
          do{
            showLetter(symbolItems[i]);
            i++;
            letTimer=setTimeout(timerLet,300);
          }
          while(i===symbolItems.length);
         } ,300);
      };
      hideLetters();
      /* setTimeout(showLetters(),3000); */
      showLetters();
       let hideItem= function(items,i){
          items[i].classList.add('hide');
          items[i].classList.remove('show','fade');
      };

       let hideAllItems= function(items){
          items.forEach(item=>{
          item.classList.add('hide');
          item.classList.remove('show','fade');
          });
      };

     let showItem= function(items,i){
          items[i].classList.remove('hide');
          items[i].classList.add('show','fade');
      };
      
    
   let showAllItems= function(items){
      items.forEach(item=>{
        item.classList.remove('hide');
        item.classList.add('show','fade');
      });
    };

  /*   function selectCountryInfo(){
      if(!navLinks[2].classList.contains('active')){
        hideAllItems(countriesInfos);
               showItem(countriesInfos,0);
               countriesList.addEventListener('click',(event)=>{
               let target=event.target;
               event.preventDefault();
                 countriesLinks.forEach((countriesLink,j)=>{
                   if(target===countriesLink){
                     console.log(j);
                     hideAllItems(countriesInfos);
                     showItem(countriesInfos,j);
                   }
                 });
              });
      }
    }
    
    selectCountryInfo(); */

    let countriesNames=['Albania','Andorra','Austria','Belarus','Belgium'],
    countriesPopulation=['2 793 592','82 887','8 923 507',' 9 255 524','11 521 238'],
    countriesLanguage=['albanian','catalanian','austrian','belarussian, russian','french, dutch'],
    countriesCities=['Tirana','Andorra-la-Vellia','Wien, Salzburg, Graz','Minsk, Brest','Bruccels, Brugge, Antverpen'],
    countriesWellKnown=['Voldemort','Andura','Mozart','Lukashenko','Leopold'],
    countriesCurrency=['euro','euro','euro','bel rub','euro'],
    countriesFlag=['img/country__info/albania.png','img/country__info/andorra.png','img/country__info/austria.png',
    'img/country__info/belarus.png','img/country__info/belgium.png',],
    countriesPlacesOfInterestQuantity=['1','1','3','2','3'],
    AlbaniaPOI=[['The clock tower was built by the Ottoman Turks in an Islamic style and with simply a bell from Venice',
    'img/country__info/places__of__interest/albania/Clock_Tower.jpg']],
    AndorraPOI=[['La Noblesse du Temps is right at the center of Andoora la Vella and a great spot to take a photo to remember your trip to Andorra.',
  'img/country__info/places__of__interest/andorra/la-noblesse-du-temps.jpg']],
    AustriaPOI=[['The beautiful historic center of Vienna is worth a visit. While riding tours allow you to see some great sights in Vienna, a walk through this area is recommended to see the detail of the lovely architecture and statues.',
  'img/country__info/places__of__interest/austria/wien.jpg'],['You can certainly walk the historic city of Salzburg and take in all the sights',
'img/country__info/places__of__interest/austria/salzburg.jpg'],
['Breathtaking views of the Alps and the charming town of Hallstatt.',
'img/country__info/places__of__interest/austria/hallstatt.jpg']
    ],
    BelarusPOI=[["Your visit to Minsk is not complete if you don't have a picture of you taken in front of the gates.",
  'img/country__info/places__of__interest/belarus/minsk__gates.jpg']],
  BelgiumPOI=[['The Grand Place is truly that... it was wonderful to be here - easily spent an hour or two just wandering around, observing, sitting with a coffee. Really magnificent and well worth the visit to Brussels for.',
'img/country__info/places__of__interest/belgium/grand-place.jpg'],
  ['Ghent City Centre is a delight and compact enough to see all the main sights on foot.','img/country__info/places__of__interest/belgium/gent.jpg'],
['You are able to take a breather, if the person behind you is patient, and the stairs can be steep in sections.','img/country__info/places__of__interest/belgium/brugge.jpg']],
countryPOI=[AlbaniaPOI, AndorraPOI, AustriaPOI,BelarusPOI,BelgiumPOI],
countryHistories=['Albania, country in southern Europe, located in the western part of the Balkan Peninsula on the Strait of Otranto, the southern entrance to the Adriatic Sea. The capital city is Tirana (Tiranë).','Andorra, small independent European coprincipality situated among the southern peaks of the Pyrenees Mountains and bounded by France to the north and east and by Spain to the south and west. It is one of the smallest states in Europe. The capital is Andorra la Vella.',
'Austria, largely mountainous landlocked country of south-central Europe. Together with Switzerland, it forms what has been characterized as the neutral core of Europe, notwithstanding Austria’s full membership since 1995 in the supranational European Union (EU).',
'Belarus, country of eastern Europe. Until it became independent in 1991, Belarus, formerly known as Belorussia or White Russia, was the smallest of the three Slavic republics included in the Soviet Union (the larger two being Russia and Ukraine).',
'Belgium, country of northwestern Europe. It is one of the smallest and most densely populated European countries, and it has been, since its independence in 1830, a representative democracy headed by a hereditary constitutional monarch. Initially, Belgium had a unitary form of government. In the 1980s and ’90s, however, steps were taken to turn Belgium into a federal state with powers shared among the regions of Flanders, Wallonia, and the Brussels-Capital Region.'],
countrySouvenirsQuantity=['1','1','3','1','1'],
AlbaniaSouvenirs=['Miniature Bunker Ashtray','img/country__info/souvenirs/albania/miniature-bunker-ashtray.jpg'],
AndorraSouvenirs=[],
AustriaSouvenirs=[['Crystal products from Swarovski are considered as a treasure of Austria, extremely famous all over the world, more popular than gold and second only to diamonds.',
'img/country__info/souvenirs/austria/svarovski.jpg'],
['Austria is a famous country when it comes to owning many cafes with delicious flavors.','img/country__info/souvenirs/austria/austrian-coffee.jpg'],
['At the Augarten porcelain factory, ceramic lovers from all over the world will find the perfect display for their beloved home or elegant tableware for the perfect dinner party.',
'img/country__info/souvenirs/austria/Porcelain.jpg']],
BelarusSouvenirs=[['Souvenirs from straws are very popular in Belarus. They give coziness and in the cold season remind us of the warm sun',
'img/country__info/souvenirs/belarus/suvenir_solomka.jpg']],
BelgiumSouvenirs=[['Bringing back chocolate from Belgium is an obvious choice, so if you’re going to pick up a box, you’ll want something rare and unexpected.','img/country__info/souvenirs/belgium/choclate.jpg']],
countrySouvenirsList=[AlbaniaSouvenirs,AndorraSouvenirs,AustriaSouvenirs,BelarusSouvenirs,BelgiumSouvenirs];
    


    let countryTemplate=document.querySelector('#country__info__template'),
        countryTemplateContent=countryTemplate.content,
        countryBasicInfo=countryTemplateContent.querySelector('.country__basic__info__list'),
        countryPlacesOfInterest=countryTemplateContent.querySelector('.places__of__interest__list'),
        countryHistory=countryTemplateContent.querySelector('.short__history'),
        countrySouvenirs=countryTemplateContent.querySelector('.souvenirs__list');
        

      /*   <li class="place__of__interest__item col-12  col-sm-2  mr-auto">
                      <figure class="place__of__interest__content col-12">
                        <figcaption class="place__of__interest__descr col-12  col-sm-2  mr-auto">
                           
                        </figcaption>
                      </figure>
                      <img src="" class="place__of__interest__image col-12  col-sm-2  mr-auto" width="300" height="300"   alt="#">
                    </li> */


   
   let getCountryInfo=function(){
    let target=event.target;
   
      countriesLinks.forEach((countriesLink,i)=>{
        if(target==countriesLink){
          countryTemplateContent.children[0].children[0].textContent=countriesNames[i];
          countryTemplateContent.children[0].children[1].src=countriesFlag[i];
          countryBasicInfo.children[1].children[0].textContent=countriesPopulation[i];
          countryBasicInfo.children[2].children[0].textContent=countriesLanguage[i];
          countryBasicInfo.children[3].children[0].textContent=countriesCities[i];
          countryBasicInfo.children[4].children[0].textContent=countriesWellKnown[i];
          countryBasicInfo.children[5].children[0].textContent=countriesCurrency[i];

          for(let j=0;j<countriesPlacesOfInterestQuantity[i];j++){
            let placeOfInterest=document.createElement('li');
            placeOfInterest.classList.add('place__of__interest__item','col-lg-4','col-md-6','col-sm-12');
            placeOfInterest.innerHTML=`<figure class="place__of__interest__content col-12">
            <figcaption class="place__of__interest__descr">
               ${((countryPOI[i])[j])[0]}
            </figcaption>
            <img src="${((countryPOI[i])[j])[1]}" class="place__of__interest__image"  alt="#">
          </figure>`;
          countryPlacesOfInterest.append(placeOfInterest);
          }

          countryHistory.children[1].textContent=countryHistories[i];

          for(let k=0;k<countrySouvenirsQuantity[i];k++){
            let souvenir=document.createElement('li');
            souvenir.classList.add('souvenir__item','col-lg-4','col-md-6','col-sm-12');
            souvenir.innerHTML=`<figure class="souvenir__content">
            <img class="souvenir__image" src="${((countrySouvenirsList[i])[k])[1]}"  alt="#">
            <figcaption class="souvenir__descr">
            ${((countrySouvenirsList[i])[k])[0]}
            </figcaption>
          </figure>`;
          countrySouvenirs.append(souvenir);
          }


          let shownCountryInfo=countryTemplateContent.cloneNode(true);
          countryInfo.append(shownCountryInfo);
        }
      });
   };


    countriesList.addEventListener('click',(event)=>{
      event.preventDefault();
      countryInfo.innerHTML='';
      countryPlacesOfInterest.innerHTML='';
      getCountryInfo();
      
    });


    /* let shownName=countryName.cloneNode(true);
    shownName.textContent=countriesNames[i];
    countriesList */


   /*  console.log(countryName);
    console.log(countryPopulation);
    console.log(countryLanguage);
    console.log(countryCities); */

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
           changeBackground(1,60);
           if(document.documentElement.clientWidth>860){
            let id=setTimeout(function log(){
              if(i<findTravelBackgrounds.length){
                i++;
                console.log(i);
                changeBackground(i,60);
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


    /*   function showNavBtn(){
        if(document.documentElement.clientWidth<860){
          navBtn.style.cssText='display:block;position:relative;';
          nav.classList.add('slide__right');
        }
      }
        
      showNavBtn(); */
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
             /*  else if(i===3){
               let countriesInfos=document.querySelectorAll('.country__info'),
        countriesList=document.querySelector('.countries'),
        countriesLinks=document.querySelectorAll('.country__card__link ');
                
                showItem(mainContents,i);
                hideAllItems(countriesInfos);
                showItem(countriesInfos,0);
                countriesList.addEventListener('click',(event)=>{
                let target=event.target;
                event.preventDefault();
               
                  countriesLinks.forEach((countriesLink,j)=>{
                    if(target===countriesLink){
                      console.log(j);
                    
                      hideAllItems(countriesInfos);
                      showItem(countriesInfos,j);
                    }
                  });
               });
              }  */ 
            });
        });


        console.log(mainContents);

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
              programItem.classList.add('.section','tour__program__item');
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
              <img src=""  alt="" class="descr__image" />
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


       


   





           

 /*  console.log('hye'); */

/*  showItem(mainContents,i); */














         
/* 

        let cardCreateButton=document.getElementById('create__tour__card'),
        toursListBox=document.querySelector('.tours__list__box');
        let toursList=toursListBox.children[0],
        tourCreateForm=document.querySelector('.tour__create__form'),
        
        tourNameInput=document.querySelector('input','.tour__name__input'),
        tourNameButton=document.querySelector('.name__submit'),
        
        tourDurationInput=document.querySelector('.tour__duration__input'),
        tourDurationButton=document.querySelector('.duration__submit'),
        
        routePointInput=document.querySelector('.route__point__input');
        
         let addElement= function() {
            var divCreate=document.createElement('div');
            return divCreate;
          };
        
        
          function  setCardTitle(){
            let text=tourNameInput.value;
            let cardTitle=addElement();
            cardTitle.classList.add('card__title','row');
            cardTitle.innerHTML='<div class="col"></div>';
            cardTitle.firstChild.innerHTML=`<h3 class="tour__name">${text}</h3>`;
            toursList.prepend(cardTitle);
          }
        
          tourNameButton.addEventListener('click',setCardTitle);
        
        
        
        function  getRoutePoints(){
            let text=routePointInput.value;
            let routePointList=document.createElement('ul');
            routePointList.classList.add('card__title','row');
            routePointList.innerHTML='<div class="col"></div>';
            routePointList.firstChild.innerHTML=`<h3 class="tour__name">${text}</h3>`;
            toursList.prepend(routePointList);
          }
        

 */




















});
        







 




