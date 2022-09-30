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
        tourNames=['Paris','Budapest','Prague','Berlin','Munich','Drezden','Hamburg','Rome','Venecia','Toscana'],
        toursDestinations=['All tours','France','Hungary','Czech','Germany','Italy','Tailand',
        'India','USA','Mexica','Canada','Dominicana','Marrocco','Tunis'],
        toursDurations=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'],
        findTravel = document.querySelector(".find__travel"),
        symbolItems=document.querySelectorAll('.symbol__item'),
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

        /* symbolItems.forEach((item,i)=>{
          setTimeout(showLetter(item),3000);
        }); */
    
       /*  findTravelBackgrounds = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14",
        "15","16","17","18","19","20","21","22","23","24"]; */
       let hideItem= function(items,i){
          items[i].classList.add('hide');
          items[i].classList.remove('show','fade');
          return items[i];
      };
       let hideItems= function(items){
          items.forEach(item=>{
          item.classList.add('hide');
          item.classList.remove('show','fade');
          return item;
          });
      };
      let showItem= function(items,i){
        items[i].classList.add('show','fade');
        items[i].classList.remove('hide');
        return items[i];
    };
     let showItems= function(items,i){
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
                 showItems(tourItems,i);
                 console.log(showItems(tourItems,i)); 
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
              showItems(tourItems,i);
          }
            return tourItems;
          });
     
        };    
        
        

        destinationSelect.addEventListener('change',(event)=>{
          let target=event.target;
          let indexSel=target.selectedIndex;
          hideItems(tourItems);
          /* selectDestination(indexSel); */
          });

        /*   durationSelect.addEventListener('change',(event)=>{
            let target=event.target;
            let indexSel=target.selectedIndex;
            hideItems(tourItems);
            selectDuration(indexSel);
            }); */


          let selectType=function(indexSel){
            tourItems.forEach((tourItem,i)=>{
              if(typeSelect[indexSel].value==='All'){
                showAllItems(tourItems);
              }
              else if(tourItem.dataset.type==typeSelect[indexSel].value){
                showItems(tourItems,i);
              }
            });
          };

        toursFilter.addEventListener('change',(event)=>{
        let target=event.target;
        let indexSel=target.selectedIndex;
        hideItems(tourItems);
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












   






/* 
        hideItems(symbolItems);
       
        
            symbolItems[i].classList.remove('hide');
            symbolItems[i].classList.add('show'); */
     
        



});
        /* let tourLinksArray=[];
        tourItems.forEach((item)=>{
          tourLinksArray.push(item);
        });
        item.classList.remove('hide');
          item.classList.add('show');

       function selectDestination(){
        let b =tourLinksArray.filter(item=>{
          item.dataset.destination='France';
        });

        console.log(b);
      }
       
       toursFilter.addEventListener('change',(event)=>{
 let target=event.target;
 if(target==destinationSelect){
  selectDestination();
 }
       }); */



/* 
        let b =tourItems.filter(tourItem=>{
          if(tourItem.dataset.destination='France'){
            return b;
          }

      }); */

/*     
let selectDestination=tourItems.filter(item=>{
  item.dataset.destination='France';
}); */




       /*  tourItems.forEach((tourItem,i)=>{
            tourItem.style.cssText=`background: url("img/contentpic/${i}.jpg") no-repeat 50% 50%;
            background-size:contain;`;
         }); */

/* 
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


        }); */

