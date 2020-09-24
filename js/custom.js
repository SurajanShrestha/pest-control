var clickTimes=0;
document.getElementById('more-service-btn').addEventListener("click",(()=>{
    /*document.getElementsByClassName('hide-service').foreach((item)=>{
        item.style.display="block";
    });*/
    clickTimes++;
    document.querySelectorAll('.hide-service').forEach((item,index)=>{
        if(clickTimes===1&&index<3){
            item.style.display="block";
        }else if(clickTimes===2&&index<=5){
            item.style.display="block";
        }else if(clickTimes===3&&index===6){
            item.style.display="block";
        }
    });
    //document.getElementsByClassName('hide-service')[1].style.display="block";
}));