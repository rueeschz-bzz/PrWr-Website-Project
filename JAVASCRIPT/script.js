let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab');
}

addEventListener("resize", () => {
    let x = document.getElementsByClassName("about-col-1")[0]
    let y = document.getElementsByClassName("slider-wrapper")[0]
    if (window.innerWidth < 1266) {
        x.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "block";
    }
});

