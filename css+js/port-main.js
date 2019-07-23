function navMenu() {
  var 
  x = document.getElementById("myTopnav"),
  iconSwitch = document.getElementById("switch");

  if (x.className === "topnav") {
    x.className += " responsive";
    iconSwitch.innerHTML = "&#10005;";
  } else {
    x.className = "topnav";
    iconSwitch.innerHTML = "&#9776;";
  }
}

$('a[href="#"], a[href="#mProjects"], a[href="#mSkills"], a[href="#aMe"], a[href="#cMe"], .icon').
attr('onclick', "navMenu()");//Hide dropdown on select

document.addEventListener("touchend", function (event) {

  if (event.target.parentElement.id == 'project1') {
    window.location.href = "projects.html#project1";
  }

   if (event.target.parentElement.id == 'project2') {
    window.location.href = "projects.html#project2";
  }

   if (event.target.parentElement.id == 'project3') {
    window.location.href = "projects.html#project3";
  }

}, false);