var firstHeader = document.getElementsByTagName('h1')[1]

var secondHeader = document.getElementById('article-1').querySelector('h1')

var thirdHeader = document.querySelectorAll('h1')[1]

var fourthHeader = document.querySelector('#article-1 h1')
var fifthHeader = document.querySelector('#article-1')
var articleRef = document.getElementById('article-1')

secondHeader.classList.add('article-heading')

var aTag = document.getElementById('article-1').querySelector('a')
aTag.setAttribute('href', 'https://www.google.com')
