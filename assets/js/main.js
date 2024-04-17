// theme clrs
mainBody = document.querySelector("body");
themeMode = document.querySelector(".themeMode");
mainBody.setAttribute("class", "light-theme");
themeMode.innerHTML = "☀︎ Light Mode";
themeMode.addEventListener("click", function () {
  if (mainBody.getAttribute("class") == "light-theme") {
    mainBody.setAttribute("class", "dark-theme");
    themeMode.innerHTML = " ☾ Dark Mode";
  } else {
    mainBody.setAttribute("class", "light-theme");
    themeMode.innerHTML = "☀︎ Light Mode";
  }
});

// page title
// pageTitle = document.title;
// navLinks = document.querySelectorAll(".nav-links li");
// console.log(navLinks,pageTitle)

// for(i=0; i<=navLinks.length;i++){
//     if(pageTitle == navLinks[i].children[0].innerText ){
//       navLinks[i].children[0].classList.add("active")
//     }
//     else{
//         navLinks[i].children[0].classList.remove("active")
//     }
// }

