// Portfolio data
const portfolioItems = [
    {
        title: "Project 1",
        description: "A modern web application built with React and Node.js",
        image: "img/project1.jpg",
        link: "#"
    },
    {
        title: "Project 2",
        description: "E-commerce platform with advanced filtering and search",
        image: "img/project2.jpg",
        link: "#"
    },
    {
        title: "Project 3",
        description: "Portfolio website with glassmorphism design",
        image: "img/project3.jpg",
        link: "#"
    }
];

// Blog posts data
const blogPosts = [
    {
        title: "My First Article",
        excerpt: "Introduction to my journey in web development",
        image: "img/blog1.jpg",
        date: "March 15, 2024",
        link: "#"
    },
    {
        title: "Web Design Trends",
        excerpt: "Exploring the latest trends in web design for 2024",
        image: "img/blog2.jpg",
        date: "March 10, 2024",
        link: "#"
    },
    {
        title: "JavaScript Tips",
        excerpt: "Essential tips for writing clean and efficient JavaScript code",
        image: "img/blog3.jpg",
        date: "March 5, 2024",
        link: "#"
    }
];

// Function to create portfolio items
function createPortfolioItems() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (!portfolioGrid) return;

    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-item-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" class="btn">View Project</a>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Function to create blog posts
function createBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    blogPosts.forEach(post => {
        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';
        blogPost.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="blog-post-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-post-meta">
                    <span>${post.date}</span>
                    <a href="${post.link}" class="read-more">Read More</a>
                </div>
            </div>
        `;
        blogGrid.appendChild(blogPost);
    });
}

// Function to create featured projects
function createFeaturedProjects() {
    const featuredGrid = document.querySelector('.featured-grid');
    if (!featuredGrid) return;

    portfolioItems.slice(0, 3).forEach(item => {
        const featuredItem = document.createElement('div');
        featuredItem.className = 'portfolio-item';
        featuredItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-item-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" class="btn">View Project</a>
            </div>
        `;
        featuredGrid.appendChild(featuredItem);
    });
}

// Function to create latest posts
function createLatestPosts() {
    const postsGrid = document.querySelector('.posts-grid');
    if (!postsGrid) return;

    blogPosts.slice(0, 3).forEach(post => {
        const latestPost = document.createElement('div');
        latestPost.className = 'blog-post';
        latestPost.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="blog-post-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-post-meta">
                    <span>${post.date}</span>
                    <a href="${post.link}" class="read-more">Read More</a>
                </div>
            </div>
        `;
        postsGrid.appendChild(latestPost);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    navbar.appendChild(menuButton);

    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    createPortfolioItems();
    createBlogPosts();
    createFeaturedProjects();
    createLatestPosts();
    initMobileMenu();
});

// Массив для хранения постов
let posts = [];

// Функция для создания нового поста
function createPost(title, content, image) {
    const post = {
        id: Date.now(),
        title,
        content,
        image,
        date: new Date().toLocaleDateString('ru-RU')
    };
    
    posts.push(post);
    displayPosts();
    savePosts();
}

// Функция для отображения постов
function displayPosts() {
    const postsGrid = document.getElementById('posts');
    postsGrid.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'post-card';
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="post-content">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <small>${post.date}</small>
            </div>
        `;
        postsGrid.appendChild(postElement);
    });
}

// Функция для сохранения постов в localStorage
function savePosts() {
    localStorage.setItem('blog-posts', JSON.stringify(posts));
}

// Функция для загрузки постов из localStorage
function loadPosts() {
    const savedPosts = localStorage.getItem('blog-posts');
    if (savedPosts) {
        posts = JSON.parse(savedPosts);
        displayPosts();
    }
}

// Обработчик отправки формы
document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = this.querySelector('input[type="text"]').value;
    const content = this.querySelector('textarea').value;
    const imageInput = this.querySelector('input[type="file"]');
    
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            createPost(title, content, e.target.result);
            e.target.form.reset();
        };
        reader.readAsDataURL(imageInput.files[0]);
    }
});

// Загрузка постов при загрузке страницы
document.addEventListener('DOMContentLoaded', loadPosts);

function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
  
      draw(progress); // отрисовать её
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }