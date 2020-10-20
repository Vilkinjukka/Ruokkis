$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

var dummyDiv = null;
$(function()
{
  console.log(DataBase.length)
  //Load card to main html
  dummyDiv = $("<div id='dummyDiv'/>").css("display","none");
  dummyDiv.load('card.html', function() {
    var i;
    for (i = 0; i < DataBase.length; i++) {
      ChangeData(DataBase[i][0],DataBase[i][1]);
    }
  });
  dummyDiv.css("display","none");
  $("body").append(dummyDiv);

});

function ChangeData(name,text)
{
  dummyDiv.find(".card-title").html(name);
  dummyDiv.find(".card-text").html(text);
  var edited = dummyDiv.clone()
  edited.css("display","block");
  $("#cardholder").append(edited);
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
