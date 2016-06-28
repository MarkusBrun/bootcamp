//4 different Selectors
$("article").find("h1").css('color', 'blue')
$("#article-1").find("h1").css('color', 'blue')
$("#article-1:first").css('color', 'blue')
$("article > h1").css('color', 'blue')


//$("article > h1").html("Test")
//$("article").find("h1").toggleClass("article-heading")
//$("#article-1").find("a").attr("href","http://www.google.com")
//$("p").appendTo("#article-1")
//$("#article-1").append("<p>Bruh</p>")


//$("h1").css('color', 'red')


//first way of appending through button
$("#btn").click(function () {
  $("#body").append('<article id="article-1"><h1>Shiny New JavaScript Framework</h1><p>Fuzzy Kitty is in! Run and download before it goes out of style.<a class="btn-get-it" href="get-it.html">Get it now!</a></p></article>')
})

// //second way of appending through button
// $("button").click(append)
//
// function append () {
//   $("#body").append('<article id="article-1">Article Created Fam</article> ')
// }

// //third way of appending through button
// $("#btn").click(append2)
//
// function append2 () {
// #('<article id="article-1">Article Created Fam</article> ').appendTo('#body')
// }
