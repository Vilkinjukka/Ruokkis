$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

if ($('.smart-scroll').length > 0) { // check if element exists
    $(window).on('scroll', function() {
        var val = $('#banner').offset().top+$('#banner').outerHeight() - $('.smart-scroll').outerHeight();
        scroll_top = $(this).scrollTop();
        if(scroll_top <= val)
        {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else
        {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
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
  topFunction();

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

function showResepti()
{
  $(".popup-container").removeClass("hide");
  const scrollY = `-${window.scrollY}px`;
  document.body.style.position = 'fixed';
  document.body.style.top = scrollY;
}

function closeResepti()
{
  $(".popup-container").addClass("hide");
  const scrollY = document.body.style.top;
  console.log(scrollY)
  document.body.style.position = '';
  document.body.style.top = '';

  $("html").removeClass("smooth-scroll")
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  $("html").addClass("smooth-scroll")
}
