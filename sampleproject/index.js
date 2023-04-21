const navHeight=document.querySelector(".navbar-background").offsetHeight;
console.log("Height is",navHeight);
document.documentElement.style.setProperty('--scroll-padding',navHeight + "px")