fetch("./public/posts.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let result = `<h2> User Info From sampleUser.json </h2>`;
    data.posts.forEach((user) => {
      const { text, emoji, gif, date, postId } = user;
      console.log(data);
      var knum = "hello" + postId;
      var knum1 = "bye" + postId;
      var x = Math.floor(Math.random() * 2 + 1);
      var postImg;
      if (x == 1) {
        postImg = "/public/img/feather1.svg";
      } else {
        postImg = "/public/img/feather2.svg";
      }
      var emojiFeel;
      if (emoji == "angry") {
        emojiFeel = "<span>&#128545;</span>";
      } else if (emoji == "happy") {
        emojiFeel = "<span>&#128515;</span>";
      } else if (emoji == "sad") {
        emojiFeel = "<span>&#128543;</span>";
      } else {
        emojiFeel = "<span>&#129296;</span>";
      }

      result += `<div class="old-post">
                <figure>

                  <img
                    src="${postImg}"
                    alt="chirp bird"
                  />
                </figure>
                <div class="post-view">
                <p> Feeling : ${emojiFeel} </p>
                  <p>${text}</p>
                  <div><img src="${gif}"></div>
                </div>
                <div id="${knum}" style="display: block;text-align: right;width: 86%;margin-left: 100px;"><p id = "commentArea"onclick="toggleComment('${postId}')"><i class="far fa-comments"></i></p>
    
    
    </div>
                <div class="${knum1}" style="  display: none;">
                  <form class="comment_form" method="POST">
                    <textarea name="comment_content"></textarea>
                    <input
                      type="submit"
                      name="postComment"
                      value="Post"
                      id="commentButton"
                    />
                  </form>
                </div>
                 <hr />
              </div>`;

      document.getElementById("posts_area").innerHTML = result;
    });
  });

function toggleComment(x) {
  $("#hello" + x).click(function () {
    $(".bye" + x).toggle("slide");
  });
}
