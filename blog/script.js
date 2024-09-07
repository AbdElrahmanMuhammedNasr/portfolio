let posts = [
    {
        title: 'Async in spring boot can be  bad ',
        date: 'August 25, 2024',
        summary: [
            { type: 'text', content: 'let\'s  talk about Async look at this code this code will wait 10 sec and print this message ' },
             { type: 'image', src: './asyncPic/1.png', alt: 'Placeholder Image' },
            { type: 'text', content: 'i will send 9 request at same time  we will find the the first 8 requests done at same time but the request number 9 wait 10 sec until it excute ' },
            { type: 'image', src: './asyncPic/2.png', alt: 'Placeholder Image' },
            { type: 'text', content: 'this because of <strong>threadPoolTaskExecutorBuilder</strong> it makes  8 thread to about 2 billion threads and queue size is 2 billion ' +
                    '<br/> this make request number 9 will wait because the 8 threads serve the first 8 requests ' +
                    'and will not create new thread because the queue is not full yet ' },
            { type: 'image', src: './asyncPic/3.png', alt: 'Placeholder Image' },
            { type: 'text', content: 'how can we  solve it'},
            { type: 'text', content: 'create custom threadPoolTaskExecutorBuilder'},
            { type: 'image', src: './asyncPic/4.png', alt: 'Placeholder Image' },
            { type: 'text', content: 'and use the name of bean installed of leave  it  empty'},
            { type: 'image', src: './asyncPic/5.png', alt: 'Placeholder Image' },
            { type: 'text', content: 'So when I sent 9 requests at the same time, the first 3 were executed at the same time because there were already 3 threads. ' +
                    '<br/> The second 3 were added to the queue waiting. The third 3 did not find a place in the queue, so 3 new threads were created. ' +
                    '<br/>When the first 3 finished their tasks, they went to the 3 in the queue and executed them.'},
            { type: 'image', src: './asyncPic/6.png', alt: 'Placeholder Image' },

        ]
    },
    {
        title: 'Why synchronized  and transaction does not wok correctly',
        date: 'September 7, 2024',
        summary: [
            { type: 'text', content: 'look at this code let\'s assume we send 2 requests at same time with same payload' },
            { type: 'text', content: '<strong> hash code is not unique in database </strong> ' },
            { type: 'image', src: './transaction-sync/1.png', alt: 'Placeholder Image' },
            { type: 'text', content: 'one of two reqests will block the function until finish because <strong> synchronized </strong> ' +
                    '<br/> will generate hash code and check in Database if exist and will save it and unlock the function ,' +
                    '<br/> the second request will enter the function and lock it ' +
                    'and generate the same hash code and check  in Database and will throw excprion because the hash code is exist ' },
            { type: 'text', content: 'but what happen is quit different the 2 request saved in database with the same hash code ' },
            { type: 'text', content: 'the reason is because the order the request will unlock the function and commit the  change in database  and the time between unlock the function and commit the change the second request entered the function and generate the hash code and pass the validation' },
            { type: 'text', content: 'How can we solve it' },
            { type: 'text', content: 'remove @Transactional and use TransactionTemplate ' },


        ]
    },
    // Add more posts as needed
];

const blogPostsContainer = document.getElementById('blog-posts');

function createSummary(summaryArray) {
    return summaryArray.map(item => {
        if (item.type === 'text') {
            return `<p>${item.content}</p>`;
        } else if (item.type === 'image') {
            return `<img style="width: 50%" src="${item.src}" alt="${item.alt}" />`;
        }
    }).join(' ');
}

function createBlogPost(title, date, summaryArray) {
    const post = document.createElement('article');
    post.classList.add('post');

    const summaryHTML = createSummary(summaryArray);

    post.innerHTML = `
    <div class="all-post">
        <div class="post-header">
            <h3 class="post-title">${title}</h3>
            <p class="post-date">Posted on ${date}</p>
        </div>
        <div class="summary-content" style="display: none;">
            <p>${summaryHTML}</p>
        </div>
      </div>  
      `;

    // Add event listener to toggle the summary visibility
     const summaryContent = post.querySelector('.summary-content');
    const allPost = post.querySelector('.all-post');
    const postHeader = post.querySelector('.post-header');
    postHeader.addEventListener('click', () => {
        const isVisible = summaryContent.style.display === 'block';
        summaryContent.style.display = isVisible ? 'none' : 'block';
     });
    return post;
}

posts.forEach(postData => {
    const newPost = createBlogPost(postData.title, postData.date, postData.summary);
    blogPostsContainer.appendChild(newPost);
});
