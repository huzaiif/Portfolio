// JavaScript Document

/*

TemplateMo 597 Neural Glass


*/

// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    }
});

// Enhanced smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        // Skip if href is just "#"
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced header functionality
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;

    if (scrolled > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active menu item highlighting

const observerOptionsHeader = {
    root: null,
    rootMargin: '-30% 0px -40% 0px', // Active when element triggers in the middle-upper band
    threshold: 0
};

const observerHeader = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptionsHeader);

function initActiveStateObserver() {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
        observerHeader.observe(section);
    });
}

window.addEventListener('load', initActiveStateObserver);

// Parallax effect for geometric shapes
window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.shape');
    const scrolled = window.pageYOffset;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Neural lines pulse effect
const neuralLines = document.querySelectorAll('.neural-line');
setInterval(() => {
    neuralLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'scaleX(1.2)';
            setTimeout(() => {
                line.style.opacity = '0.2';
                line.style.transform = 'scaleX(0.5)';
            }, 200);
        }, index * 300);
    });
}, 2000);

// Enhanced particle generation
function createQuantumParticle() {
    const greyShades = ['rgba(255,255,255,0.3)', 'rgba(200,200,200,0.35)', 'rgba(150,150,150,0.4)'];
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = Math.random() * 4 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = greyShades[Math.floor(Math.random() * greyShades.length)];
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100vh';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '-1';
    particle.style.boxShadow = '0 0 12px rgba(255,255,255,0.25)';

    document.body.appendChild(particle);

    const duration = Math.random() * 3000 + 2000;
    const drift = (Math.random() - 0.5) * 200;

    particle.animate([
        { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
        { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => particle.remove();
}

// Generate quantum particles
setInterval(createQuantumParticle, 1500);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items and hexagons
document.querySelectorAll('.timeline-content, .skill-list-row').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

/* Form submission effect removed (Contact form replaced by direct email) */

/* Carousel Logic */
const portfolioData = [
    {
        id: 1,
        title: 'Neural Network',
        description: 'Advanced AI system with deep learning capabilities for predictive analytics and pattern recognition.',
        image: 'images/neural-network.jpg',
        tech: ['TensorFlow', 'Python', 'CUDA'],
        link: 'https://github.com/huzaiif'
    },
    {
        id: 2,
        title: 'Quantum Cloud',
        description: 'Next-generation cloud infrastructure leveraging quantum computing for unprecedented processing power.',
        image: 'images/quantum-cloud.jpg',
        tech: ['AWS', 'Kubernetes', 'Docker'],
        link: 'https://github.com/huzaiif'
    },
    {
        id: 3,
        title: 'Blockchain Vault',
        description: 'Secure decentralized storage solution using advanced encryption and distributed ledger technology.',
        image: 'images/blockchain-vault.jpg',
        tech: ['Ethereum', 'Solidity', 'Web3'],
        link: 'https://github.com/huzaiif'
    },
    {
        id: 4,
        title: 'HealthGPT',
        description: 'Medical AI system with real-time threat detection and automated response.',
        image: 'images/Healthgpt.png',
        tech: ['Python', 'AI', 'Machine Learning'],
        link: 'https://aihealthgpt.streamlit.app/'
    },
    {
        id: 5,
        title: 'Data Nexus',
        description: 'Big data processing platform capable of analyzing petabytes of information in real-time.',
        image: 'images/data-nexus.jpg',
        tech: ['Apache Spark', 'Hadoop', 'Kafka'],
        link: 'https://github.com/huzaiif'
    },
    {
        id: 6,
        title: 'LAYZBOOK',
        description: 'A social netwrking platform for users to connect and share their experiences.',
        image: 'images/layzbook.png',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://layzbook.netlify.app/'
    },
    {
        id: 7,
        title: 'PY Recommendation',
        description: 'Intelligent movie recommendation system based on user preferences and behavior.',
        image: 'images/movierec.png',
        tech: ['Python', 'AI', 'Machine Learning'],
        link: 'http://pymovierecommendationsystem.streamlit.app/'
    }
];


let currentIndex = 0;
// Elements will be queried inside initCarousel to ensure they exist
let carousel = null;
let indicatorsContainer = null;

function createCarouselItem(data, index) {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.dataset.index = index;

    // Fallback for image if it doesn't exist (assuming user might not have these exact images)
    // But for now, sticking to the user's code structure

    const techBadges = data.tech.map(tech =>
        `<span class="tech-badge">${tech}</span>`
    ).join('');

    item.innerHTML = `
        <div class="card">
            <div class="card-number">0${data.id}</div>
            <div class="card-image">
                <img src="${data.image}" alt="${data.title}" onerror="this.src='https://placehold.co/400x200?text=${encodeURIComponent(data.title)}'">
            </div>
            <h3 class="card-title">${data.title}</h3>
            <p class="card-description">${data.description}</p>
            <div class="card-tech">${techBadges}</div>
            <button class="card-cta" onclick="window.open('${data.link}', '_blank')">Explore</button>
        </div>
    `;

    return item;
}

function initCarousel() {
    carousel = document.getElementById('carousel');
    indicatorsContainer = document.getElementById('indicators');

    if (!carousel || !indicatorsContainer) {
        console.warn('Carousel elements not found');
        return;
    }

    // Clear existing
    carousel.innerHTML = '';
    indicatorsContainer.innerHTML = '';

    // Create carousel items
    portfolioData.forEach((data, index) => {
        const item = createCarouselItem(data, index);
        carousel.appendChild(item);

        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.index = index;
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    // Add event listeners for controls
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) {
            nextSlide(); // Swipe Left
        }
        if (touchEndX > touchStartX + threshold) {
            prevSlide(); // Swipe Right
        }
    }

    updateCarousel();

    startAutoSlide();

    // Pause on interaction
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
        carousel.addEventListener('touchstart', stopAutoSlide, { passive: true });
        carousel.addEventListener('touchend', startAutoSlide, { passive: true });
    }
}

let autoSlideInterval;

function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const totalItems = items.length;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024;

    items.forEach((item, index) => {
        // Calculate relative position
        let offset = index - currentIndex;

        // Wrap around for continuous rotation
        if (offset > totalItems / 2) {
            offset -= totalItems;
        } else if (offset < -totalItems / 2) {
            offset += totalItems;
        }

        const absOffset = Math.abs(offset);
        const sign = offset < 0 ? -1 : 1;

        // Reset transform
        item.style.transform = '';
        item.style.opacity = '';
        item.style.zIndex = '';
        item.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';

        // Adjust spacing based on screen size
        let spacing1 = 400;
        let spacing2 = 600;
        let spacing3 = 750;

        if (isMobile) {
            spacing1 = 280;  // Was 400, now 100px closer
            spacing2 = 420;  // Was 600, now 180px closer
            spacing3 = 550;  // Was 750, now 200px closer
        } else if (isTablet) {
            spacing1 = 340;
            spacing2 = 520;
            spacing3 = 650;
        }

        if (absOffset === 0) {
            // Center item
            item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
            item.style.opacity = '1';
            item.style.zIndex = '10';
        } else if (absOffset === 1) {
            // Side items
            const translateX = sign * spacing1;
            const rotation = isMobile ? 25 : 30;
            const scale = isMobile ? 0.88 : 0.85;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.8';
            item.style.zIndex = '5';
        } else if (absOffset === 2) {
            // Further side items
            const translateX = sign * spacing2;
            const rotation = isMobile ? 35 : 40;
            const scale = isMobile ? 0.75 : 0.7;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.5';
            item.style.zIndex = '3';
        } else if (absOffset === 3) {
            // Even further items
            const translateX = sign * spacing3;
            const rotation = isMobile ? 40 : 45;
            const scale = isMobile ? 0.65 : 0.6;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.3';
            item.style.zIndex = '2';
        } else {
            // Hidden items (behind)
            item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
            item.style.opacity = '0';
            item.style.zIndex = '1';
        }
    });

    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % portfolioData.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Initialize on load
window.addEventListener('load', initCarousel);
window.addEventListener('resize', updateCarousel);
window.addEventListener('load', initStatCarousels);


function initStatCarousels() {
    const statWrappers = document.querySelectorAll('.stat-content-wrapper');

    statWrappers.forEach(wrapper => {
        const slideContainer = wrapper.querySelector('.stat-content-slide');
        if (!slideContainer) return;

        const items = slideContainer.querySelectorAll('.stat-item');
        const itemCount = items.length;
        const realCount = itemCount - 1; // Assuming last item is duplicate
        let currentIndex = 0;
        let autoSlideInterval;

        // Ensure container is in correct starting position
        slideContainer.style.transform = `translateX(0)`;

        function goToSlide(index, animate = true) {
            if (animate) {
                slideContainer.classList.add('transitional');
            } else {
                slideContainer.classList.remove('transitional');
            }
            slideContainer.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
        }

        function nextSlide() {
            if (currentIndex >= realCount) {
                // We are at the duplicate (visually index 0)
                // Instantly jump to 0 (no animation) then animate to 1
                goToSlide(0, false);
                // Force reflow
                void slideContainer.offsetWidth;
                requestAnimationFrame(() => {
                    goToSlide(1, true);
                });
            } else {
                // Normal slide
                goToSlide(currentIndex + 1, true);

                // If we hit the duplicate, we need to reset to 0 silently AFTER transition
                if (currentIndex === realCount) {
                    slideContainer.addEventListener('transitionend', function reset() {
                        slideContainer.removeEventListener('transitionend', reset);
                        goToSlide(0, false);
                    });
                }
            }
        }

        function prevSlide() {
            if (currentIndex <= 0) {
                // We are at 0. Jump to duplicate (last index) instantly
                goToSlide(realCount, false);
                // Force reflow
                void slideContainer.offsetWidth;
                requestAnimationFrame(() => {
                    goToSlide(realCount - 1, true);
                });
            } else {
                goToSlide(currentIndex - 1, true);
            }
        }

        // Auto play
        function startAuto() {
            stopAuto();
            autoSlideInterval = setInterval(nextSlide, 3000); // 3 seconds per slide
        }

        function stopAuto() {
            clearInterval(autoSlideInterval);
        }

        // Touch control
        let touchStartX = 0;
        let touchEndX = 0;

        wrapper.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
            stopAuto();
        }, { passive: true });

        wrapper.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startAuto();
        }, { passive: true });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe Left -> Next
                nextSlide();
            }
            if (touchEndX > touchStartX + 50) {
                // Swipe Right -> Prev
                prevSlide();
            }
        }

        // Start
        startAuto();
    });
}

/* ==========================================================
   WEBGL CONTACT BACKGROUND (Liquid Silver)
   ========================================================== */
function initContactCanvas() {
    const canvas = document.getElementById('contact-canvas');
    if (!canvas) return;

    // Use experimental-webgl as fallback
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    // Vertex Shader
    const vsSource = `
        attribute vec4 aVertexPosition;
        void main() {
            gl_Position = aVertexPosition;
        }
    `;

    // Fragment Shader
    const fsSource = `
        precision highp float;
        uniform vec2 uResolution;
        uniform float uTime;

        // Psuedo-random generator for grain
        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        void main() {
            vec2 uv = gl_FragCoord.xy / uResolution.xy;
            float time = uTime * 0.5; // Slow undulation

            // Smooth Wave Gradients
            // Layer 1: Diagonal large wave
            float w1 = sin(uv.x * 2.0 + time + uv.y * 3.0);
            // Layer 2: Opposite diagonal
            float w2 = cos(uv.x * 3.0 - time * 0.5 + uv.y * 2.0);
            // Layer 3: Slow vertical undulation
            float w3 = sin(uv.y * 5.0 + time * 0.2);

            // Combine waves
            float wave = (w1 + w2 + w3) / 3.0; // Range approx -1 to 1
            wave = wave * 0.5 + 0.5; // Range 0 to 1

            // Color Palette: Silver / Monochrome
            vec3 col1 = vec3(0.35, 0.38, 0.42); // Deep Shadow Grey
            vec3 col2 = vec3(0.60, 0.62, 0.65); // Mid Silver
            vec3 col3 = vec3(0.95, 0.95, 0.98); // Bright White Silver

            vec3 baseColor = mix(col1, col2, smoothstep(0.0, 0.5, wave));
            baseColor = mix(baseColor, col3, smoothstep(0.5, 1.0, wave));

            // Heavy Film Grain
            float grain = random(uv + time * 0.1); // Animated grain
            
            // Mix grain (Additive or Overlay style)
            // Reference image has dominant, visible texture
            float grainStrength = 0.15;
            baseColor += (grain - 0.5) * grainStrength;

            // Vignette for depth (optional but nice)
            float dist = distance(uv, vec2(0.5));
            baseColor *= 1.0 - dist * 0.3;

            gl_FragColor = vec4(baseColor, 1.0);
        }
    `;

    function initShaderProgram(gl, vsSource, fsSource) {
        const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);
        return shaderProgram;
    }

    function loadShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            // console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    if (!shaderProgram) return;

    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        },
        uniformLocations: {
            resolution: gl.getUniformLocation(shaderProgram, 'uResolution'),
            time: gl.getUniformLocation(shaderProgram, 'uTime'),
        },
    };

    // Buffer Setup
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
        -1.0, 1.0,
        1.0, 1.0,
        -1.0, -1.0,
        1.0, -1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // Animation Loop
    function render(time) {
        time *= 0.001; // Convert to seconds

        // Resize if needed
        const displayWidth = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;
        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
            canvas.width = displayWidth;
            canvas.height = displayHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
        }

        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(programInfo.program);

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

        gl.uniform2f(programInfo.uniformLocations.resolution, canvas.width, canvas.height);
        gl.uniform1f(programInfo.uniformLocations.time, time);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

// Call the function


// Skill Item Click Handler (Mobile/Touch)
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-list-row');

    skillItems.forEach(item => {
        item.addEventListener('click', function (e) {
            // Check if we are on a device where hover is the primary interaction (mouse)
            // If so, we might want to respect hover, but your requirement implies click to toggle.
            // A simple check is to see if window width is small, or just allow click globally.
            // For mixed devices (touch + mouse), click toggle is safer.

            // Toggle active class
            const wasActive = this.classList.contains('active');

            // Accordion behavior: Close all others
            skillItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // If it wasn't active before, make it active now
            if (!wasActive) {
                this.classList.add('active');
            }
        });
    });
});

window.addEventListener('load', initContactCanvas);



