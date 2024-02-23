const postPost = (post) => {
    document.querySelector(".container").append(post);
};

const makePostContainer = (obj) => {
    let postContainer = document.createElement("div");
    postContainer.innerHTML = `<p class='title'>${obj.title}</p> <p>${obj.body}</p>`;
    postPost(postContainer);
};

const newPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((element) => {
                makePostContainer(element);
            });
        });
};
newPosts();
