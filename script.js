let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let remov = document.getElementsByClassName("fa-trash-alt")[0];
let edit = document.getElementsByClassName("fa-edit")[0];

//form validation
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    } else {
        console.log("successs");
        msg.innerHTML = "";
        acceptData();
    }
};

//accept the data
let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

//create post
let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
};

//delete the post
remov.addEventListener("click", function () {
    deletePost(this);
    // e.parentElement.parentElement.remove();
});

function deletePost(e) {
    e.parentElement.parentElement.remove();
    //   e.preventDefault();
}

//edit the post
edit.addEventListener("click", function () {
    editPost(this);
})

function editPost(e) {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

}