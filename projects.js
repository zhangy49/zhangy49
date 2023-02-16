document.getElementById("workType").innerHTML = "&nbsp"+"Installation"+"&nbsp";
document.getElementById("project3").style.display = "none";
var rightbtn = document.getElementById("rightClick");
 rightbtn.addEventListener("click",function(){
    document.getElementById("workType").innerHTML = "&nbsp"+"Product"+"&nbsp";
    document.getElementById("project1").style.display = "none";
    document.getElementById("project2").style.display = "none";
    document.getElementById("project3").style.display = "";
})
var leftbtn = document.getElementById("leftClick");
leftbtn.addEventListener("click",function(){
    document.getElementById("workType").innerHTML = "&nbsp"+"Installation"+"&nbsp";
    document.getElementById("project1").style.display = "";
    document.getElementById("project2").style.display = "";
    document.getElementById("project3").style.display = "none";
})
