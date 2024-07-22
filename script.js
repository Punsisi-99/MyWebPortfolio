//nav bar scroll
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    //counting of portfolio
    const portfolioContainer = document.querySelector(".portfolio-container");
    const volunteeringCount = document.getElementById("volunteering");
    const certificatesCount = document.getElementById("certificates");

    function countProject() {
        let projects = portfolioContainer.value;
    }

    //portfolio filter
    var mixer = mixitup('.project-container', {
        selectors: {
            target: '.project-box'
        },
        animation: {
            duration: 500
        }
    });

});

//menubar icon
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

//remove navlist
navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})

//skill buttons
const tools = document.querySelector(".tools");
const personal = document.querySelector(".personal");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");

function techBtnClick(e) {
    btn1.classList.toggle("active");
    btn2.classList.toggle("active");
    tools.style.display = "block";
    personal.style.display = "none";
}

function profBtnClick(e) {
    btn1.classList.toggle("active");
    btn2.classList.toggle("active");
    tools.style.display = "none";
    personal.style.display = "block";
}

//gallery buttons
const galleryItems = document.querySelector(".galleryItems");
const interestItem = document.querySelector(".interestItem");
const sportItem = document.querySelector(".sportItem");
const btn01 = document.querySelector("#btn-01");
const btn02 = document.querySelector("#btn-02");
const btn03 = document.querySelector("#btn-03");

function galleryBtnClick(e) {
    btn01.classList.add("active");
    btn02.classList.remove("active");
    btn03.classList.remove("active");
    galleryItems.style.display = "block";
    interestItem.style.display = "none";
    sportItem.style.display = "none";
}

function interestyBtnClick(e) {
    btn01.classList.remove("active");
    btn02.classList.add("active");
    btn03.classList.remove("active");
    galleryItems.style.display = "none";
    interestItem.style.display = "block";
    sportItem.style.display = "none";
}

function sportBtnClick(e) {
    btn01.classList.remove("active");
    btn02.classList.remove("active");
    btn03.classList.add("active");
    galleryItems.style.display = "none";
    interestItem.style.display = "none";
    sportItem.style.display = "block";
}

//form button
function message() {
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var number = document.getElementById('number');
    var subject = document.getElementById('subject');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if (Name.value === '' || email.value === '' || number.value === '' || subject.value === '') {
        danger.style.display = 'block';
    }

    else {
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            number.value = '';
            subject.value = '';
            msg.value = '';
        }, 3000);

        success.style.display = 'block';
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}

const form = document.querySelector('form');
const Name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const subject = document.getElementById('subject');
const msg = document.getElementById('msg');

function sendEmail() {
    const bodyMessage = `Full Name: ${Name.value}<br> Email: ${email.value}<br> Phone Number: ${number.value}<br> MSG: ${msg.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "feedbackmessagestome@gmail.com",
        Password: "F3EE0A9DBCB2FD8B84FAE449ECE4BA393A5D",
        To: 'feedbackmessagestome@gmail.com',
        From: "feedbackmessagestome@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});

//side progress bar

let calcScrollValue = () =>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos >100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop =0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e2b41e ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

//active menubar
let menuList = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuList.forEach(sec => sec.classList.remove("active"));
    menuList[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

//multiple text
const typed = new Typed('.mutiple-text', {
    strings: ['Web Developer', 'UI/UX Designer', 'Graphic Designer', '3D Designer', 'AI/ML Enthusiastic', 'Robotic Enthusiastic'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});

//scroll
ScrollReveal({ 
    distance:"90px",
    duration:2000,
    delay:200,
    //reset: true,
});

ScrollReveal().reveal('.main-text, .heading, .content', { origin:"top" });
ScrollReveal().reveal('.about-img, .education, .gallery-btns, .details', { origin:"left" });
ScrollReveal().reveal('.about-content, .contact-box, .skills', { origin:"right" });
ScrollReveal().reveal('.home-image, footer, .portfolio-container, .gallery-box, .interest-box ', { origin:"bottom" });


