window.addEventListener('DOMContentLoaded', () => {
    const findTravelBox = document.querySelectorAll('.find__travel__background') ;
const findTravelBoxBackgrounds=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],
findTravelBoxBackgroundsVertical=["16","17","18","19","20","21","22","23","24", "25"];


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
});
