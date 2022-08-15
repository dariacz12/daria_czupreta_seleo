const examplePosts = `[{"title":"What is Lorem Ipsum?","author":" Lorem Ipsum","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","like":0,"dislike":0,"createAdt":1660581092717},{"title":"What is Lorem Ipsum?","author":" Lorem Ipsum","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","like":0,"dislike":0,"createAdt":1660581110099},{"title":"What is Lorem Ipsum?","author":" Lorem Ipsum","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","like":0,"dislike":0,"createAdt":1660581134511}]`;

window.addEventListener("load", () => {
  posts = JSON.parse(localStorage.getItem("posts") || examplePosts);
  const newPostForm = document.querySelector("#new-post-form");
  newPostForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const post = {
      title: e.target.elements.title.value,
      author: e.target.elements.author.value,
      content: e.target.elements.content.value,
      like: 0,
      dislike: 0,
      createAdt: new Date().getTime(),
    };
    posts.push(post);
    setItemInLocalStorage();
    e.target.reset();
    displayPosts();
    displsayCountOfPosts();
    setTimeout(() => alert("Your post was successfully added"));
  });
  displayPosts();
  displsayCountOfPosts();
});
function displayPosts() {
  postsList = document.querySelector("#posts-list");
  postsList.innerHTML = "";
  posts.forEach((post) => {
    const postItem = document.createElement("div");
    postItem.classList.add("post-item");
    const postContent = document.createElement("div");
    postContent.classList.add("post-content");
    const title = document.createElement("div");
    title.classList.add("title");
    const author = document.createElement("div");
    author.classList.add("author");
    const content = document.createElement("div");
    content.classList.add("content");
    const actions = document.createElement("div");
    actions.classList.add("actions");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    const likeButton = document.createElement("button");
    likeButton.classList.add("like");
    const dislikeButton = document.createElement("button");
    dislikeButton.classList.add("dislike");
    title.innerHTML = post.title;
    author.innerHTML = post.author;
    content.innerHTML = post.content;
    deleteButton.innerHTML = "Delete";
    likeButton.innerHTML = `+ (${post.like === 0 ? "0" : post.like})`;
    dislikeButton.innerHTML = `- (${post.dislike === 0 ? "0" : post.dislike})`;

    postItem.appendChild(postContent);
    postItem.appendChild(actions);
    postContent.appendChild(title);
    postContent.appendChild(author);
    postContent.appendChild(content);
    actions.appendChild(deleteButton);
    actions.appendChild(likeButton);
    actions.appendChild(dislikeButton);
    postsList.appendChild(postItem);

    deleteButton.addEventListener("click", (e) => {
      posts = posts.filter((selectedPost) => selectedPost != post);
      setItemInLocalStorage();
      displayPosts();
      displsayCountOfPosts();
    });
    likeButton.addEventListener("click", (e) => {
      post.like = post.like + 1;
      setItemInLocalStorage();
      displayPosts();
    });
    dislikeButton.addEventListener("click", (e) => {
      post.dislike = post.dislike + 1;
      setItemInLocalStorage();
      displayPosts();
    });
  });
}
function displsayCountOfPosts() {
  let postsCount = document.getElementById("countOfPosts");
  postsCount.innerHTML = "";
  postsCount.innerHTML = posts.length;
}
function setItemInLocalStorage() {
  localStorage.setItem("posts", JSON.stringify(posts));
}
