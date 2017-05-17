$(document).ready(function() {
  
  alert("If on https mode then please switch to http mode.");
  alert("Please operate in landscape mode in mobile for better view.");
  
  var bcolor=["#A04000", "#CD5CFC", "#F1C40F", "#AED6F1", "#85929E", "#FF3F33", "#33FF4C", "#3339FF", "#FF339F", "#D4EFDF"];
  
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en", function(json) {
    $(".quote").html(" "+json.quoteText+" ");
    $(".quote2").html(" -"+json.quoteAuthor+" ");
    $("#main1").css("color", bcolor[0]);
    $("#main2").css("color", bcolor[0]);
    $("body").css("background-color", bcolor[0]);
    $("#quoteTweet").attr("href", 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + json.quoteText + '" ' + json.quoteAuthor));
    });
  
  
  $("#getQuote").on("click", function() {
 
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en", function(json) {
    $(".quote").html(" "+json.quoteText+" ");
    $(".quote2").html(" -"+json.quoteAuthor+" ");
    $("#quoteTweet").attr("href", 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + json.quoteText + '" ' + json.quoteAuthor));
    });
  
  var x=Math.floor(Math.random()*10);
  $("#main1").css("color", bcolor[x]);
  $("#main2").css("color", bcolor[x]);
  $("body").css("background-color", bcolor[x]);
    
});
  
  
});

