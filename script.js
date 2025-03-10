const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const feed = document.getElementById("feed");

function renderPosts() {
    feed.innerHTML = ""; // Limpiar el feed antes de agregar los posts

    posts.forEach((post, index) => {
        const postHTML = `
            <article class="post">
                <section class="post-header">
                    <img src="${post.avatar}" alt="${post.name}" class="profile-pic">
                    <div class="user-info">
                        <p class="username"><strong>${post.name}</strong></p>
                        <p class="location">${post.location}</p>
                    </div>
                </section>
                
                <section class="post-image-container">
                    <img src="${post.post}" alt="Post Image" class="post-image" data-index="${index}">
                </section>
                
                <section class="post-actions">
                    <img src="images/icon-heart.png" alt="Like" class="icon like-btn" data-index="${index}">
                    <img src="images/icon-comment.png" alt="Comment" class="icon">
                    <img src="images/icon-dm.png" alt="Share" class="icon">
                </section>
                
                 <section class="post-caption">
                    <p><strong>
                            <span class="like-count" data-index="${index}">
                                ${post.likes}
                            </span> 
                            likes
                    </strong></p>
                    <p><strong>${post.username}</strong> ${post.comment}</p>
                </section>
            </article>
        `;

        feed.innerHTML += postHTML;
    });

    document.querySelectorAll(`.post-image`).forEach(image => {
        image.addEventListener("dblclick", (e) => {
            const index = e.target.dataset.index; // Obtener el índice del post
            posts[index].likes += 1;
            updateLikes(index);
        })
    })

    document.querySelectorAll(`.like-btn`).forEach(like => {
        like.addEventListener("click", (e) => {
            const index = e.target.dataset.index; // Obtener el índice del post
            posts[index].likes += 1; // Incrementar el número de likes
            updateLikes(index);
        })
    })
}

function updateLikes(index) {
    document.querySelector(`.like-count[data-index="${index}"]`).textContent = posts[index].likes;
}

renderPosts();