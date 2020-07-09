let name = sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML = name;
document.querySelector(".points").innerHTML = points;
document.querySelector(".timer").innerHTML = user_time;

function last(){
    location.href = "description.html";
}