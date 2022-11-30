



function displayTime(){

    var d = new Date();

    // var dt = (d.getDay());
    var month = (d.getMonth() +1);
    var dtt = (d.getDate());
    var yer = (d.getFullYear());
    var hrs = (d.getHours());
    var min = (d.getMinutes());
    var sec = (d.getSeconds());
    var day = (d.getDay());

    var period = document.getElementById("period");
    if( hrs >= 12){
        period.innerHTML="PM"
    }
    else{
        period.innerHTML="AM"
    }
    if( hrs > 12){
        hrs = hrs -12 ;
    }


    // var months = ["January","February","March","April","May","June","Jully","August","September","October","November","december",];
   // var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
//    var Date = new Date()

    // var day = d.getDay();

    // document.getElementById("dayname").innerHTML=[day]
    // // var ids = ["dayname","month","daynum","year","hours","minutus","seconds","period"]

//     var values = [weeks[dt],month,dtt,yer,hrs,min,sec];
    
//    for( var i = 0 ; i < ids.length; i ++)
        

//    document.getElementById(ids[i]).firstChild.nodeValues=[i];
    
   
    // document.getElementById("weeks").innerHTML=[i]

    // document.getElementById("dayname").innerHTML=dt;
    // document.getElementById("dayname").innerHTML=wee;
    document.getElementById("month").innerHTML=month;
    document.getElementById("daynum").innerHTML=dtt;
    document.getElementById("year").innerHTML=yer;
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML=sec;
    

    
}
setInterval(displayTime , 10)
