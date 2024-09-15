let projects = [
    {
        image:"./shorter/1.png",
        title:"Shorter Stack",
        description:"Short link ",
        tools:'Nginx , Spring boot , PostgreSQL , Grafana ,  Logstash' ,
        url: [
            {
                link: "https://github.com/AbdElrahmanMuhammedNasr/shorter",
                name:"View On GitHub",
            }
        ]

    }, {
        image:"./shorter/1.png",
        title:"Tunnel client",
        description:"receive the request from server handle it  and return response to server",
        tools:'Java  ,  Socket ' ,
        url: [
            {
                link: "https://github.com/AbdElrahmanMuhammedNasr/tunnel-client",
                name:"View On GitHub",
            }
            ]

    },
    {
        image:"./shorter/1.png",
        title:"Tunnel Server",
        description:"Socket Server listening to request and send it to client to handle the request and get response",
        tools:'Spring boot  ,  Socket ' ,
        url: [
            {
                link: "https://github.com/AbdElrahmanMuhammedNasr/tunnel-server",
                name:"View On GitHub"
            }
        ]

    },    {
        image:"./shorter/1.png",
        title:"YouTube",
        description:"video service upload video to minio and quality service get the  video and convert into frames and create many videos with different quality   ",
        tools:'Spring boot , PostgreSQL  ,  FastApi  , OpenCv   , Minio' ,
        url: [
            {
                link: "https://github.com/AbdElrahmanMuhammedNasr/stream",
                name:"video  Service (Spring boot) On GitHub"
            },
            {
                link: "https://github.com/AbdElrahmanMuhammedNasr/video-optimizer",
                name:"Quality service (fastApi) On GitHub"
            }
        ]

    },

]





const projectContainer = document.getElementById('project-posts');


function createURLs(urlArray) {
    return urlArray.map(urlObj => {
        return `<a href="${urlObj.link}" target="_blank">${urlObj.name}</a> <br>`;
    }).join(' ');
}

function createProjectPost(image,title, description, tools ,url ) {
    const post = document.createElement('project');
    post.classList.add('project');
    const urlsHTML = createURLs(url); // Generate URLs


    post.innerHTML = `      
      <div class="project" id="project-posts">
        <img src="${image}" alt="Project  Image">
        <h2>${title}</h2>
        <p class="description"><strong>Description:</strong> ${description}</p>
        <p><strong>Tools:</strong> ${tools} </p>
       <p>${urlsHTML}</p> <!-- Display URLs -->

    </div>
    
      `;
    return post;
}

projects.forEach(postData => {
    const newProject = createProjectPost(postData.image,postData.title, postData.description, postData.tools ,postData.url );
    projectContainer.appendChild(newProject);
});
