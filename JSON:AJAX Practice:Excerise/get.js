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

  newRequest.open('GET', 'http://jsonplaceholder.typicode.com/users');
  newRequest.send();
}



document.getElementById('btn-get-users').addEventListener('click', function() {
  function onSuccess(responseText) {
    var object = JSON.parse(responseText)
    getUser(object)
  }

  function onError(status) {
    console.log(status);
  }

  getPosts(onSuccess, onError);
});


var getUser = function (object) {
  var users = []
  for (var i = 0; i < object.length; i++) {
  var jsonString = object[i]
  var newUsers = new User(jsonString.id, jsonString.name, jsonString.username, jsonString.email, jsonString.phone, jsonString.website)
  users.push(newUsers)
  }
  console.log(users);

}


var User = function(id, name, username, email, phone, website) {
  this.id = id;
  this.name = name;
  this.username = username;
  this.email = email;
  this.phone = phone;
  this.website = website;
}
