// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // In a real application, you would send the data to a server here
    // For this demo, we'll just show a success message
    console.log('Form submitted:', { name, email, subject, message });
    
    // Show success message
    showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
});

function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
    
    formMessage.style.display = 'block';
}

// Real-time Quotes Functionality
const newQuoteBtn = document.getElementById('newQuote');
const quoteCategory = document.getElementById('quoteCategory');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const quoteTags = document.getElementById('quoteTags');

// Fallback quotes in case API fails
const fallbackQuotes = {
    inspirational: [
        {
            text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
            author: "Brian Tracy",
            tags: ["inspiration", "strength"]
        },
        {
            text: "Hope is being able to see that there is light despite all of the darkness.",
            author: "Desmond Tutu",
            tags: ["hope", "light"]
        },
        {
            text: "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.",
            author: "Rikki Rogers",
            tags: ["strength", "overcoming"]
        }
    ],
    hope: [
        {
            text: "Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all.",
            author: "Emily Dickinson",
            tags: ["hope", "soul"]
        },
        {
            text: "Once you choose hope, anything's possible.",
            author: "Christopher Reeve",
            tags: ["hope", "possibility"]
        },
        {
            text: "Hope is important because it can make the present moment less difficult to bear. If we believe that tomorrow will be better, we can bear a hardship today.",
            author: "Thich Nhat Hanh",
            tags: ["hope", "present"]
        }
    ],
    strength: [
        {
            text: "You never know how strong you are until being strong is your only choice.",
            author: "Bob Marley",
            tags: ["strength", "resilience"]
        },
        {
            text: "The human capacity for burden is like bamboo – far more flexible than you'd ever believe at first glance.",
            author: "Jodi Picoult",
            tags: ["strength", "flexibility"]
        },
        {
            text: "Strength does not come from physical capacity. It comes from an indomitable will.",
            author: "Mahatma Gandhi",
            tags: ["strength", "willpower"]
        }
    ],
    life: [
        {
            text: "Life is not about waiting for the storm to pass, it's about learning to dance in the rain.",
            author: "Vivian Greene",
            tags: ["life", "resilience"]
        },
        {
            text: "In the middle of difficulty lies opportunity.",
            author: "Albert Einstein",
            tags: ["life", "opportunity"]
        },
        {
            text: "The purpose of our lives is to be happy.",
            author: "Dalai Lama",
            tags: ["life", "happiness"]
        }
    ]
};

// Function to fetch quotes from API
async function fetchQuote(category = 'inspirational') {
    // Try to fetch from API first
    try {
        // Using Quotable API for inspirational quotes
        const response = await fetch('https://api.quotable.io/random');
        
        if (!response.ok) {
            throw new Error('API request failed');
        }
        
        const data = await response.json();
        
        // Format the quote data
        return {
            text: data.content,
            author: data.author,
            tags: data.tags || [category]
        };
    } catch (error) {
        console.log('API failed, using fallback quotes:', error);
        
        // Use fallback quotes if API fails
        const quotes = fallbackQuotes[category] || fallbackQuotes.inspirational;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }
}

// Function to display a quote
function displayQuote(quote) {
    quoteText.textContent = `"${quote.text}"`;
    
    if (quote.author) {
        quoteAuthor.textContent = `— ${quote.author}`;
    } else {
        quoteAuthor.textContent = '';
    }
    
    // Clear previous tags
    quoteTags.innerHTML = '';
    
    // Add tags if available
    if (quote.tags && quote.tags.length > 0) {
        quote.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.textContent = tag;
            quoteTags.appendChild(tagElement);
        });
    }
}

// Function to load a new quote
async function loadNewQuote() {
    const category = quoteCategory.value;
    
    // Show loading state
    quoteText.textContent = 'Loading inspirational quote...';
    quoteAuthor.textContent = '';
    quoteTags.innerHTML = '';
    
    // Fetch and display new quote
    const quote = await fetchQuote(category);
    displayQuote(quote);
}

// Event listeners for quote controls
newQuoteBtn.addEventListener('click', loadNewQuote);
quoteCategory.addEventListener('change', loadNewQuote);

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        if (emailInput.value) {
            alert(`Thank you for subscribing with ${emailInput.value}! You'll receive updates soon.`);
            emailInput.value = '';
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize with a quote when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Load initial quote
    loadNewQuote();
    
    // Form validation styling
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
    
    formInputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            
            // Add valid/invalid styling
            if (this.checkValidity()) {
                this.parentElement.classList.add('valid');
                this.parentElement.classList.remove('invalid');
            } else {
                this.parentElement.classList.add('invalid');
                this.parentElement.classList.remove('valid');
            }
        });
    });
});
