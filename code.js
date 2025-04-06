// Portfolio data
const portfolioItems = [
    {
        title: "HTR Shop",
        description: "Modern online store. Where clothes and accessories are sold",
        image: "img/1.png",
        link: "https://trh-dt.github.io/Oscuro_Tienda/index.html"
    },
    {
        title: "Didgital Portfolio",
        description: "My personal portfolio website",
        image: "img/2.png",
        link: "https://trh-dt.github.io/PortFolio_DT/"
    }
];

// Blog posts data
const blogPosts = [
    {
        title: "Chill Vibes",
        excerpt: "My first article about my journey in web development",
        image: "img/camphoto_126398554.jpg",
        date: "April 5, 2025",
        link: "#"
    },
    {
        title: "Munich Trip",
        excerpt: "My first article about my journey in web development",
        image: "img/IMG_5830.jpeg",
        date: "February 25, 2025",
        link: "#"
    },
    {
        title: "Upwork",
        excerpt: "My first article about my journey in web development",
        image: "img/Screenshot 2025-04-06 at 19.24.56.png",
        date: "April 6, 2025",
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
            <img data-src="${post.image}" alt="${post.title}" loading="lazy">
            <div class="blog-post-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-post-meta">
                    <span>${post.date}</span>
                    <a href="#" class="read-more">Read More</a>
                </div>
            </div>
        `;
        blogGrid.appendChild(blogPost);
    });

    // Добавляем обработчики для кнопок Read More
    const readMoreButtons = blogGrid.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const post = this.closest('.blog-post');
            const title = post.querySelector('h3').textContent;
            const content = `
                <p>${post.querySelector('p').textContent}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            `;
            openModal(title, content);
        });
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
            <img data-src="${post.image}" alt="${post.title}" loading="lazy">
            <div class="blog-post-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-post-meta">
                    <span>${post.date}</span>
                    <a href="#" class="read-more">Read More</a>
                </div>
            </div>
        `;
        postsGrid.appendChild(latestPost);
    });

    // Добавляем обработчики для кнопок Read More
    const readMoreButtons = postsGrid.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const post = this.closest('.blog-post');
            const title = post.querySelector('h3').textContent;
            const content = `
                <p>${post.querySelector('p').textContent}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            `;
            openModal(title, content);
        });
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

// Функция для открытия модального окна
function openModal(title, content) {
    const modal = document.getElementById('blogModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-body');
    
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.classList.add('active');
    
    // Блокируем прокрутку страницы
    document.body.style.overflow = 'hidden';
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById('blogModal');
    modal.classList.remove('active');
    // Разблокируем прокрутку страницы
    document.body.style.overflow = '';
}

// Инициализация модального окна
function initModal() {
    const modal = document.getElementById('blogModal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.close-modal');
    
    // Закрытие по клику на крестик
    closeBtn.addEventListener('click', closeModal);
    
    // Закрытие по клику вне модального окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Закрытие по нажатию клавиши Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Функция для ленивой загрузки изображений
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    createPortfolioItems();
    createBlogPosts();
    createFeaturedProjects();
    createLatestPosts();
    initMobileMenu();
    initModal();
    lazyLoadImages(); // Добавляем инициализацию ленивой загрузки
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