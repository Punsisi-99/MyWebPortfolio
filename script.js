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
