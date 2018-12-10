//$( document ).ready(function()
$(function(){
    smoothScroll(300);
    workBelt();
    workLoad();

});
function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event) {
        //So it looks for href with # in . if click next function starts
        var target = $( $(this).attr('href') );
        //now it stores the name from the # as target
        if( target.length ) {
            //if its not empty
            event.preventDefault();
            //prevent acting like links usually acts like (following the hyperlink) like reloading the browser
            $('html, body').animate({
                // go to target.offset which is the offset / id (to top? or from top?)
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

function workBelt() {
    $('.thumb-unit').click(function(){
        $('.work-belt').css('left','-100%');
        $('.work-container').show();
    });


    $('.work-return').click(function(){
        $('.work-belt').css('left','0%');
        $('.work-container').hide(800);
    });

}

function workLoad() {
    $.ajaxSetup({cache: true});
    $('.thumb-unit').click(function () {

        var $this = $(this),
            newTitle = $this.find('strong').text(),
            newFolder = $this.attr('id')
            spinner = '<div class="loader">Loading...</div>',
            newHTML = 'work/' + newFolder + '.html';

        $('.project-load').html(spinner).load(newHTML);
        $('.project-title').text(newTitle);
    });


}