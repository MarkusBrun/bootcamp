function postData(success, error) {
  var newRequest = new XMLHttpRequest();

  newRequest.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status > 200 && this.status < 300) {
        success(this.responseText);
      } else {
        error(this.status);
      }
    }
  };

  newRequest.open("POST", "http://jsonplaceholder.typicode.com/posts");
  newRequest.send(postInput);
}
var titleInput = document.getElementById('title')
var bodyInput = document.getElementById('body')
var submitButton = document.getElementById('submit')

var postInput;

submitButton.addEventListener('click', function() {
  function onSuccess(responseText) {
    console.log(responseText)
    postInput = new Post(titleInput.value, bodyInput.value)
    console.log(postInput)


  }

  function onError(status) {
    console.log(status);
  }

  postData(onSuccess, onError);
});


var Post = function (title, body) {
this.title = title;
this.body = body;
}
