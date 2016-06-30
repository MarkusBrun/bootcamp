var postList;
var getPost = $('#getPost').on('click', function() {
    $.ajax('http://jsonplaceholder.typicode.com/posts', {
            method: 'GET'
        })
        .done(function(JsonPost) {
            postList = []
            for (var i = 0; i < JsonPost.length; i++) {
                var posts = JsonPost[i]
                var newUsers = new Post(posts.body, posts.id, posts.title, posts.userId);
                postList.push(newUsers)
                console.log(postList);
            }
            displayPost()
        })
        .fail(function(err) {
            console.log('error');
        })
        .always(function() {
            console.log('complete');;
        });
})
titleInput = $('#titleInput')
bodyInput = $('#bodyInput')
var post;
var postPost = $('#postPost').on('click', function() {
    $.ajax('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            data: new Post(bodyInput.val(), 0, titleInput.val())
        })
        .done(function(post) {
            newPosts = []
            var newPost = new Post(post.title, post.id, post.body)
            var postPostWrapper = $('#postWrapper')
            var postDiv = $('<div></div>')
            var postH = $('<h1></h1>')
            var postP = $('<p></p>')
            var postId = $('<small>Post ID: </small>')
            postId.append(post.id)
            postH.append(titleInput.val())
            postP.append(bodyInput.val())
            postH.appendTo(postDiv)
            postId.appendTo(postDiv)
            postP.appendTo(postDiv)
            postDiv.appendTo(postPostWrapper)
            newPosts.push(newPost)
            console.log(newPosts)

        })
        .fail(function(err) {
            console.log('error');
        })
        .always(function() {
            console.log('complete');;
        });
});

var displayPost = function(body, id, title, userId) {
    var postWrapper = $('#posts-wrapper')
    var postDiv = $('<div></div>')
    var PostTitle = $('<h1></h1>')
    var PostId = $('<p></p>')
    var PostUserId = $('<p></p>')
    var PostBody = $('<textarea></textArea>')
    var liPost = $('<li></li>')
    var ulPost = $('<ul></ul>')
    for (var i = 0; i < postList.length; i++) {
        var allPosts = postList[i];
        PostTitle.append(allPosts.title)
        PostBody.append(allPosts.body)
        PostUserId.append(allPosts.userId)
        PostId.append(allPosts.id)
        PostTitle.appendTo(liPost)
        PostBody.appendTo(liPost)
        PostUserId.appendTo(liPost)
        PostId.appendTo(liPost)
        liPost.appendTo(ulPost)
    }
    ulPost.appendTo(postWrapper)
}

var Post = function(body, id, title, userId) {
    this.body = body;
    this.id = id;
    this.title = title;
    this.userId = userId;
}
