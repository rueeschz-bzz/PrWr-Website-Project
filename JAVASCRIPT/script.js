
function opentab(tabname){
    let tablinks = document.getElementsByClassName('tab-links');
    let tabcontents = document.getElementsByClassName('tab-contents');
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
    if (window.innerWidth > 768) {
        document.getElementsByClassName('dropdown-content2')[0].style.display = "none"
    }
    if (window.innerWidth < 1266) {
        x.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let z = document.getElementsByClassName('dropdown-content2')[0]
    let dropdown = document.getElementsByClassName('dropdown')[0]
    z.style.display = 'none'
    document.addEventListener('click', function (event) {
        let isClickInside = dropdown.contains(event.target);
        if (isClickInside && z.style.display === 'none' && window.innerWidth <= 768) {
            z.style.display = 'block'
        } else if (!isClickInside) {
            z.style.display = 'none'
        } else if (isClickInside && z.style.display === 'block') {
            z.style.display = 'none'
        }
    });

    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", () => {
            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if(accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            }
            else {
                accordionItemBody.style.maxHeight = "0";
            }
        });
    });
})

window.addEventListener("load", () => {
    let tablinks = document.getElementsByClassName('tab-links');
    let tabcontents = document.getElementsByClassName('tab-contents');

    if (window.location.href.includes("about_us.html#")) {
        const persons = ["ryan", "zeno", "sebastian"];
        for (let i = 0; i < persons.length; i++) {
            if (window.location.href.includes(persons[i])) {
                if (persons[i] !== "ryan") {
                    Array.from(tabcontents).forEach((tabcontent) => {
                        tabcontent.classList.remove('active-tab');
                    });
                    document.getElementById("start_tab_link").classList.remove('active-link');
                    document.getElementById(persons[i]).classList.add('active-tab');
                    tablinks[i].classList.add('active-link')
                    console.log(tablinks.length)
                    console.log(persons[i]);
                }
                break;
            }
        }
    }
});