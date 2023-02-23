document.getElementById("installationType").addEventListener("click",function(){
    document.getElementById("project3").style.display = "none";
    document.getElementById("project5").style.display = "none";
    document.getElementById("project6").style.display = "none";
    document.getElementById("project7").style.display = "none";
    document.getElementById("project1").style.display = "";
    document.getElementById("project2").style.display = "";
    document.getElementById("project4").style.display = "";
})
document.getElementById("UIType").addEventListener("click",function(){
    document.getElementById("project1").style.display = "none";
    document.getElementById("project2").style.display = "none";
    document.getElementById("project3").style.display = "none";
    document.getElementById("project7").style.display = "none";
    document.getElementById("project4").style.display = "";
    document.getElementById("project5").style.display = "none";
    document.getElementById("project6").style.display = "";
})
document.getElementById("industrialType").addEventListener("click",function(){
    document.getElementById("project1").style.display = "none";
    document.getElementById("project2").style.display = "none";
    document.getElementById("project7").style.display = "none";
    document.getElementById("project3").style.display = "";
    document.getElementById("project4").style.display = "";
    document.getElementById("project6").style.display = "";
    document.getElementById("project5").style.display = "";
})
document.getElementById("digitalType").addEventListener("click",function(){
    document.getElementById("project1").style.display = "none";
    document.getElementById("project3").style.display = "none";
    document.getElementById("project4").style.display = "none";
    document.getElementById("project5").style.display = "none";
    document.getElementById("project6").style.display = "none";
    document.getElementById("project2").style.display = "";
    document.getElementById("project7").style.display = "";
})