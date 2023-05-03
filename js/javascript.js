function openNav(){

    document.getElementById("resMenu1").style.display = "block";
    document.getElementById("resMenu1").style.width = "250px";
}

function closeNav(){

    document.getElementById("resMenu1").style.width = "0";
    document.getElementById("resMenu1").style.display = "none";
}


function deskOpenNav(){

    document.getElementById("deskNav").style.display = "flex";
   
}

function deskcloseNav(){

    document.getElementById("deskNav").style.display = "none";
   
}



const header = document.querySelector("header");
const toggleClass = "sticky";
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

