document.getElementById("loader").innerHTML="";

function check_compatibility_pre()
{
document.getElementById("loader").innerHTML="";
var img=document.createElement("IMG");
img.src="ajax-loader.gif";
document.getElementById("loader").appendChild(img);
setTimeout(check_compatibility, 1000);
}

function check_compatibility()
{
//alert(Math.floor(Math.random()*100+1));
var date1=document.getElementById("partner1").value;
var date2=document.getElementById("partner2").value;
if(date1=="" || date2==""){
 document.getElementById("loader").innerHTML="Enter dates properly..";
 return;
}
date1=date1.split("-");
date2=date2.split("-");
var partner1Date=new Date(date1[0], date1[1], date1[2]);
var partner2Date=new Date(date2[0], date2[1], date2[2]);
if(date1[1]==""||date1[2]==""||date2[1]==""||date2[2]==""){
 document.getElementById("loader").innerHTML="Enter dates properly..";
 return;
} 
var yr=(date1[0]>date2[0])?(date1[0]-date2[0]):(date2[0]-date1[0]);
var mnth=(date1[1]>date2[1])?(date1[1]-date2[1]):(date2[1]-date1[1]);
var day=(date1[2]>date2[2])?(date1[2]-date2[2]):(date2[2]-date1[2]);
document.getElementById("loader").innerHTML="";
var percentage=0;
if(yr>6)
 document.getElementById("loader").innerHTML="Not possible";
else
 {
  if(mnth>6)
   percentage=Math.floor(Math.random()*100+1);
  else
   {
    percentage=Math.floor(Math.random()*100+50);
   }
  document.getElementById("loader").innerHTML=percentage;
 }

}
function clear()
{
document.getElementById("partner1").value="";
document.getElementById("partner2").value="";
}
