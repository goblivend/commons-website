// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    // Filter only tags that are intersecting right now
    const visibleTags = entries
        .filter(entry => entry.isIntersecting && entry.target.classList.contains('tag'));

    visibleTags.forEach((entry, i) => {
        entry.target.style.animation = `fadeInScale 0.5s ease forwards ${i * 0.08}s`;
        observer.unobserve(entry.target);
    });

    // Animate data-animate elements
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.hasAttribute('data-animate')) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


// Smooth reveal animation when specified elements come into view
document.querySelectorAll('[data-animate]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Smooth reveal animation for tags coming into view
document.querySelectorAll('.tag').forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.8)';

    observer.observe(tag);
});
