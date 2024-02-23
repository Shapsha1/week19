const postContainer = document.querySelector("#postContainer");
const titleInput = document.forms.postForm.postTitle;
const bodyInput = document.forms.postForm.postBody;

const makePost = () => {
    if (titleInput.value !== "" && bodyInput.value !== "") {
        const postInput = {
            title: titleInput.value,
            body: bodyInput.value,
        };
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(postInput),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const post = document.createElement("div");
                post.innerHTML = `<p class='title'>${data.title}</p> <p>${data.body}</p>`;
                postContainer.append(post);
            });
    } else {
        const message = document.createElement("p");
        message.textContent = `Введите заголовок и текст вашего поста`;
        postContainer.append(message);
    }
};

document.forms.postForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    makePost();
});
