const Title = document.querySelector("#Title");
const Image = document.querySelector("#Image");
const Text = document.querySelector("#Text");
const Button = document.querySelector("#Button");
const newpostform = document.querySelector(".new-post-form");
const newposts = document.querySelector(".new-posts");


// markii la sameeyo refresh xogta ha joogto
document.addEventListener("DOMContentLoaded", loadPosts)

function loadPosts(){
    const posts = getPostsFromLocalStorage();

    posts.forEach(post=>{
        addPostToDom(post)
    })
}


newpostform.addEventListener("submit", AddPost);

function AddPost(event) {
  event.preventDefault();

  const postTitle = Title.value.trim();
  const postImage = Image.value.trim();
  const postText = Text.value.trim();

  if (postTitle !== "" && postImage !== "" && postText !== "") {
    const post = {
      id: Date.now(),
      title: postTitle,
      image: postImage,
      text: postText,
    };
    addPostToDom(post);
    savePostToLocalStorage(post);

    Title.value = "";
    Image.value = "";
    Text.value = "";
  }
}

function addPostToDom(post) {
  const li = document.createElement("li");
  li.dataset.id = post.id;

  li.innerHTML = `
            <p class="P-Title">${post.title}</p>
            <img class="P-Image" src="${post.image}" alt="Post Image">
            <p class="P-Text">${post.text}</p>
            <button class="Edit-btn" style="background-color:blue; color:white;">Edit</button>
            <button class="Delete-btn" style="background-color:red; color:white;">Delete</button>
            `;
  newposts.appendChild(li);

  attachEventListener(li, post)
}


function attachEventListener(li, post){
    const deleteBtn = li.querySelector(".Delete-btn")
    const editBtn = li.querySelector(".Edit-btn")

    deleteBtn.addEventListener("click", function(){
        handleDelete(post.id, li)
    })

    editBtn.addEventListener("click", function(){
        handleEdit(post.id, li)
    })
}

function handleEdit(id , li){
    const PostTitle = li.querySelector(".P-Title");
    const PostImage = li.querySelector(".P-Image");
    const PostText = li.querySelector(".P-Text");

    const newPostTitle = prompt( "Edit your Title",PostTitle.textContent);
    const newPostImage = prompt( "Edit your Image URL",PostImage.src);
    const newPostText = prompt( "Edit your Text",PostText.textContent);

    if( newPostTitle !== null && newPostTitle.trim() !== "" || newPostImage !== null && newPostImage.trim() !== "" || newPostText !== null && newPostText.trim() !== "") {
        
        updatePost(id, {title : newPostTitle,
            image: newPostImage,
             text: newPostText
        })

        PostTitle.textContent = newPostTitle;
        PostImage.src = newPostImage;
        PostText.textContent = newPostText;
    }
}

function updatePost(id , updatedPost){
    const posts = getPostsFromLocalStorage();

    const post = posts.find(post => post.id = id)

    if(post){
        post.title = updatedPost.title; 
        post.image = updatedPost.image; 
        post.text = updatedPost.text;
        localStorage.setItem("posts", JSON.stringify(posts))
    }
}


function handleDelete(id ,li){
    let posts = getPostsFromLocalStorage();

    posts = posts.filter(posts => posts.id != id)

    localStorage.setItem("posts",JSON.stringify(posts));

    li.remove();
}

function savePostToLocalStorage(post) {
  const oldPosts = getPostsFromLocalStorage();

  oldPosts.push(post);

  localStorage.setItem("posts", JSON.stringify(oldPosts));
}


function getPostsFromLocalStorage(){
    const oldPosts = JSON.parse(localStorage.getItem("posts")) || [];
    return oldPosts
}