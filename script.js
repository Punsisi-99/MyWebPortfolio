//nav bar scroll
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });


    //menubar icon
    let menuIcon = document.querySelector(".menu-icon");

    menuIcon.addEventListener("click",()=>{
        menuIcon.classList.toggle("active");
    });

    //counting of portfolio
    const portfolioContainer = document.querySelector(".portfolio-container");
    const volunteeringCount = document.getElementById("volunteering");
    const certificatesCount = document.getElementById("certificates");

    function countProject(){
        let projects = portfolioContainer.value;
    }    

    //portfolio filter
    var mixer = mixitup('.project-container',{
        selectors: {
            target: '.project-box'
        },
        animation: {
            duration: 500
        }
    }); 

});

const tools = document.querySelector(".tools");
const personal = document.querySelector(".personal");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");

    function techBtnClick(e){
        btn1.classList.toggle("active");
        btn2.classList.toggle("active");
        tools.style.display = "block";
        personal.style.display = "none";
    }
                                    
    function profBtnClick(e){
        btn1.classList.toggle("active");
        btn2.classList.toggle("active");
        tools.style.display = "none";
        personal.style.display = "block";
    }


