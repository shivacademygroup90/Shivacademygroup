// Shiv Academy Group Website Script

document.addEventListener("DOMContentLoaded", function () {

    // Website loading message
    console.log("Shiv Academy Group website loaded successfully");

    // Smooth scrolling for page links
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            let target = document.querySelector(
                this.getAttribute("href")
            );

            if(target){
                target.scrollIntoView({
                    behavior:"smooth"
                });
            }

        });

    });


    // Apply Now button animation
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mouseover", function(){

            this.style.transform = "scale(1.05)";

        });


        button.addEventListener("mouseout", function(){

            this.style.transform = "scale(1)";

        });

    });


});