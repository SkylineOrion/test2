        document.addEventListener('mousemove', (event) => {
            const trail = document.createElement('div');
            trail.style.position = 'absolute';
            trail.style.width = '10px';
            trail.style.height = '10px';
            trail.style.backgroundColor = 'white';
            trail.style.borderRadius = '50%';
            trail.style.left = `${event.pageX}px`;
            trail.style.top = `${event.pageY}px`;
            trail.style.pointerEvents = 'none';
            trail.style.opacity = '1';
            trail.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            trail.style.transform = 'scale(1)';
            document.body.appendChild(trail);
    
            setTimeout(() => {
                trail.style.opacity = '0';
                trail.style.transform = 'scale(0.5)';
            }, 50);
    
            setTimeout(() => {
                trail.remove();
            }, 500);
        });

        document.addEventListener("DOMContentLoaded", () => {
            const sections = document.querySelectorAll(
                "section, .content, .cards-section, .mission-section, .token-metrics-section"
            );
        
            const observer = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("visible");
                            observer.unobserve(entry.target); // Удаляем наблюдение после появления
                        }
                    });
                },
                { threshold: 0.2 }
            );
        
            sections.forEach((section) => observer.observe(section));
        });
        