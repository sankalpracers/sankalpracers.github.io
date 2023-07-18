document.getElementById("footer").innerHTML =
    '<footer class="d-flex flex-column">' +
    '<div class="text-center" id="go-top"><i class="fa fa-arrow-up" onclick="topFunction()"></i></div>' +
    '<div class="text-center my-1">Follow us</div>' +
    '<div class="d-flex justify-content-center my-2">' +
    '<a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook-official fa-lg fa-2x mx-2"></i></a>' +
    '<a href="https://in.linkedin.com/" target="_blank"><i class="fa fa-linkedin fa-lg fa-2x mx-2"></i></a>' +
    '<a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter fa-lg fa-2x mx-2"></i></a>' +
    '<a href="https://www.youtube.com/user/" target="_blank"><i class="fa fa-youtube-play fa-lg fa-2x mx-2"></i></a>' +
    '<a href="https://www.instagram.com/ target="_blank"><i class="fa fa-instagram fa-lg fa-2x mx-2"></i></a>' +
    '</div>' +
    '<div class="text-center my-1"><img src="./media/images/footer.png" style="max-height:100px;"></div>' +
    '<div class="text-center mt-1 mb-3">&copy; Sankalp Racers 2017-21</div>' +
    '</footer>';


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}