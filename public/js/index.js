(async () => {
    const posts = await fetch('http://localhost:5000/posts');
    const data = await posts.json();    


    for (let post of data) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `<h2>${post.postHeader}</h2><p>${post.postBody}</p>`;
        document.querySelector('#posts').appendChild(div)
    }

})();
