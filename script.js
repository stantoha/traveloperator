const findTravelBox = document.querySelectorAll('.find__travel__background') ;
const findTravelBoxBackgrounds=[ "1","2","3","4","5","6","7","8","9","10"/* ,"11","12","13","14","15",
"16","17","18","19","20","21","22","23","24", "25" */ ];



function findTravelChangeBG(){
    findTravelBox.forEach((item, i) => {
        let timerId=setTimeout(function log(){

            item.style.cssText = `
            background:url("img/bg/(${findTravelBoxBackgrounds[i]}).jpg") no-repeat ${findTravelBoxBackgrounds[i]}0% 50%;
            background-size:cover;`;
            if(i<findTravelBoxBackgrounds.length-1 || i===0){
                i++;
                timerId=setTimeout(log,7000);
            }
            else if(i==findTravelBoxBackgrounds.length-1){
                i=0;
                timerId=setTimeout(log,7000);
            }
        },100);
});
} 



findTravelChangeBG();