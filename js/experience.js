const experienceDetails = {
    prameg: {
        title: "Java Back-End Developer - Prameg",
        period: "September 2024 - Present",
        role: "Part-Time",
        location: "Remote",
        achievements: [
            "Designed and implemented a robust notification service, supporting both email and mobile push notifications with high delivery rate",
            "Developed a comprehensive ticket management system with file upload capabilities, significantly improving issue resolution and customer satisfaction",
            "Optimized API performance by implementing caching strategies and query optimizations, resulting in faster response times and reduced server load",
            "Developed an efficient task management service with real-time updates and automated workflows, enhancing team productivity",
        ],
        technologies: [
            "Java", "Spring Boot","Spring Reactive", "PostgreSQL", "Redis", "Docker", "Kubernetes","AWS Lambda"
        ]
    },
    digination: {
        title: "Java Back-End Developer - Digination",
        period: "December 2023 - Present",
        role: "Full-Time",
        location: "Remote",
        achievements: [
            "Built a comprehensive internal service to manage budgets across sectors, clusters, and systems, ensuring accurate financial tracking and reporting",
            "Designed and implemented a robust program management system with automated workflows and real-time status tracking",
            "Optimized API performance through efficient database queries, caching mechanisms, and code refactoring",
            "Implemented clean code practices and software engineering principles, resulting in highly maintainable and scalable codebase",
            "Developed automated testing and continuous integration processes to ensure code quality and reliability"
        ],
        technologies: [
            "Java", "Spring Boot", "PostgreSQL",  "Docker", "Kubernetes" 
        ]
    },
    bypass: {
        title: "Java Back-End Developer - Bypa-ss",
        period: "June 2022 - November 2023",
        role: "Full-Time",
        location: "Remote",
        achievements: [
            "Developed TagRx electronic prescription system enabling doctors to send prescriptions via SMS and WhatsApp, integrating with Vodafone SMS, Twilio, and WhatsApp Business APIs",
            "Created Novartis patient monitoring system for hospitals, providing real-time tracking and management of patient stores and inventory",
            "Built Taglink URL shortening service as a Bit.ly alternative, featuring custom analytics and tracking capabilities",
            "Implemented Express.js Redirection Server handling SEO optimization, Taglink requests, and serving as a security layer for the platform",
            "Designed and deployed ELK Stack logging system with custom reporting dashboards for system monitoring and analytics",
            "Developed a comprehensive notification service supporting multiple channels and delivery methods"
        ],
        technologies: [
            "Java", "Spring Boot", "Express.js", "PostgreSQL", "ELK Stack", "Docker", "Twilio", "WhatsApp Business API", "Vodafone SMS API"
        ]
    }
};

function openExperienceModal(company) {
    const modal = document.getElementById('experienceModal');
    const modalContent = document.getElementById('modalContent');
    const details = experienceDetails[company];

    modalContent.innerHTML = `
        <div class="experience-details">
            <div class="experience-header">
                <h2>${details.title}</h2>
                <div class="meta-info">
                    <p><i class="fas fa-calendar"></i> ${details.period}</p>
                    <p><i class="fas fa-user-tie"></i> ${details.role}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${details.location}</p>
                </div>
            </div>
            
            <div class="experience-section">
                <h3><i class="fas fa-trophy"></i> Key Achievements</h3>
                <ul>
                    ${details.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>

            <div class="experience-section">
                <h3><i class="fas fa-code"></i> Technologies Used</h3>
                <div class="tech-stack">
                    ${details.technologies.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeExperienceModal() {
    const modal = document.getElementById('experienceModal');
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('experienceModal');
    if (event.target == modal) {
        closeExperienceModal();
    }
} 