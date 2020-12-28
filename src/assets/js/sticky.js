// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var sticky_container = document.getElementById("sticky-container");


// Get the offset position of the navbar
var sticky = sticky_container.offsetTop + 195;
var left = sticky_container.offsetLeft;
console.log(sticky);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
   if( $( window ).width() > 1020){
      if (window.pageYOffset >= sticky) {
          sticky_container.classList.add("custom-sticky")
          sticky_container.style.left = left;
        } else {
            sticky_container.classList.remove("custom-sticky");
        }
   }
}
