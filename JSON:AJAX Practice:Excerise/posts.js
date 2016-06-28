function getPosts(success, error) {
  var newRequest = new XMLHttpRequest();

  newRequest.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        success(this.responseText);
      } else {
        error(this.status);
      }
    }
  };

  newRequest.open("GET", "http://jsonplaceholder.typicode.com/posts");
  newRequest.send('');
}
var renderContent = document.getElementById('showContent')


document.getElementById('btn-get-posts').addEventListener('click', function() {
  function onSuccess(responseText) {
    var object = JSON.parse(responseText)
    console.log(responseText)
    extract(object)
  }

  function onError(status) {
    console.log(status);
  }

  getPosts(onSuccess, onError);
});


var extract = function (object) {
  var data = []
    for (var i = 0; i < object.length; i++) {
    var allData = object[i];
    var newData = new Post(allData.title, allData.body)
    var node = document.createElement("LI");
    var title = document.createTextNode(allData.title, allData.body)
    node.appendChild(title)
    renderContent.appendChild(node)
    console.log(newData);
    }
  }



var Post = function (title, body) {
this.title = title;
this.body = body;
}
