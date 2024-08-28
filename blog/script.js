let posts = [
    {
        title: '@Async in spring boot',
        date: 'August 25, 2024',
        summary: [
            { type: 'text', content: 'This is a summary of ' },
            { type: 'bold', content: 'Post 1' },
            { type: 'text', content: '.' },
            { type: 'image', src: '../asyncPic/1.png', alt: 'Placeholder Image' },
            { type: 'text', content: 'This is a summary of ' },

        ]
    },
    {
        title: 'Why sencornd and transaction did not wok',
        date: 'August 26, 2024',
        summary: [
            { type: 'text', content: 'This is a summary of ' },
            { type: 'bold', content: 'Post 2' },
            { type: 'text', content: '.' },
            { type: 'image', src: 'https://via.placeholder.com/150', alt: 'Placeholder Image' },
        ]
    },
    // Add more posts as needed
];

const blogPostsContainer = document.getElementById('blog-posts');

function createSummary(summaryArray) {
    return summaryArray.map(item => {
        if (item.type === 'text') {
            return `<p>${item.content}</p>`;
        } else if (item.type === 'bold') {
            return `<strong>${item.content}</strong>`;
        } else if (item.type === 'image') {
            return `<img src="${item.src}" alt="${item.alt}" />`;
        }
    }).join(' ');
}

function createBlogPost(title, date, summaryArray) {
    const post = document.createElement('article');
    post.classList.add('post');

    const summaryHTML = createSummary(summaryArray);

    post.innerHTML = `
        <div class="post-header">
            <h3 class="post-title">${title}</h3>
            <p class="post-date">Posted on ${date}</p>
        </div>
        <div class="summary-content" style="display: none;">
            <p>${summaryHTML}</p>
        </div>
        <button class="toggle-button">Show Post</button>
     `;

    // Add event listener to toggle the summary visibility
    const toggleButton = post.querySelector('.toggle-button');
    const summaryContent = post.querySelector('.summary-content');

    toggleButton.addEventListener('click', () => {
        const isVisible = summaryContent.style.display === 'block';
        summaryContent.style.display = isVisible ? 'none' : 'block';
        toggleButton.textContent = isVisible ? 'Show Post' : 'Hide Post';
    });

    return post;
}

posts.forEach(postData => {
    const newPost = createBlogPost(postData.title, postData.date, postData.summary);
    blogPostsContainer.appendChild(newPost);
});
