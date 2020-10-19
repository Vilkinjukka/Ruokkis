

var row = 0;
var col = 0;
var dummyDiv = null;
$(function()
{
  //Load card to main html
  dummyDiv = $("<div id='dummyDiv'/>").css("display","none");
  dummyDiv.load('card.html', function() {
    ChangeData("Liha-makaronilaatikko", "Kuka nyt ei pitäisi perinteisestä Suomalaisesta makaronilaatikosta!");
    ChangeData("Lasagne", "Desc");
    ChangeData("Miilunpolttajan pasta", "Desc");
    ChangeData("Kinkkukiusaus", "Desc");
    ChangeData("Itsetehty pitsa", "Desc");
    ChangeData("Kermainen jauhelihakastike", "Desc");
    ChangeData("Liha-makaronilaatikko", "Kuka nyt ei pitäisi perinteisestä Suomalaisesta makaronilaatikosta!");
    ChangeData("Lasagne", "Desc");
    ChangeData("Miilunpolttajan pasta", "Desc");
    ChangeData("Kinkkukiusaus", "Desc");
    ChangeData("Itsetehty pitsa", "Desc");
    ChangeData("Kermainen jauhelihakastike", "Desc");
    ChangeData("Liha-makaronilaatikko", "Kuka nyt ei pitäisi perinteisestä Suomalaisesta makaronilaatikosta!");
    ChangeData("Lasagne", "Desc");
    ChangeData("Miilunpolttajan pasta", "Desc");
    ChangeData("Kinkkukiusaus", "Desc");
    ChangeData("Itsetehty pitsa", "Desc");
    ChangeData("Kermainen jauhelihakastike", "Desc");
  });
  dummyDiv.css("display","none");
  $("body").append(dummyDiv);

});

function LataaResepti(id)
{
  $("#"+id).load("card.html");
}

function ChangeData(name,text)
{
  if(col == 0)
  {
    row = row+1;
    col = 1
    console.log("Create new row");
    $('#grid').append('<div class="row" id="row'+row.toString()+'"></div>');
  }
  $('#row'+row.toString()).append('<div class="col-sm" id="col'+col.toString()+'"></div>');

  dummyDiv.find(".card-title").html(name);
  dummyDiv.find(".card-text").html(text);
  var edited = dummyDiv.clone()
  edited.css("display","block");
  $("#row"+row.toString()).find("#col"+col.toString()).append(edited);

  col = col+1;
  if(col >= 4)
  {
    col = 0;
  }
}
