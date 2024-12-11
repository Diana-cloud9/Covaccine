// get the button
const scrollToTop = document.getElementById
("scrolltotop")

// show the button when the scroll is up to a particular height
window.addEventListener("scroll", ()=>{
console.log("here", window.scrollY)
if(window.scrollY > 700){
    scrollToTop.style.display ="block"
}else{
    scrollToTop.style.display = "none"
}
})
//scroll to the top, on click of the button
window.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

//form submission
//get the form
const contactForm = document.getElementById("contact-form");
//add the eventlistener for the form submission
contactForm.addEventListener("submit", (event) =>{
    // prevent default submission behaviour of the form
    event.preventDefault()

    //show a success alert
    Swal.fire({
        title: "submission successfull",
        text: "Thank you for responding!",
        icon: "success"
      });
})

