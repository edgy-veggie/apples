// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('signModal');
    const ctaButtons = document.querySelectorAll('.cta-button');
    const closeButton = document.querySelector('.close-button');
    const formIframe = document.querySelector('.google-form-iframe');

    // Handle iframe load errors
    formIframe.addEventListener('load', function() {
        this.classList.remove('load-error');
    });

    formIframe.addEventListener('error', function() {
        this.classList.add('load-error');
    });

    // Open modal when clicking CTA buttons
    ctaButtons.forEach(button => {
        if (!button.closest('form')) { // Only add click handler if button is not in form
            button.addEventListener('click', function() {
                modal.style.display = 'block';
                modal.classList.add('fade-in');
                // Reload iframe when opening modal to ensure fresh form
                formIframe.src = formIframe.src;
            });
        }
    });

    // Close modal when clicking close button
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            city: document.getElementById('city').value,
            consent: document.getElementById('consent').checked
        };

        // Here you would typically send the data to your server
        console.log('Form submitted:', formData);
        
        // Show success message
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = `
            <h2>Bedankt voor je steun!</h2>
            <p>Je handtekening is succesvol toegevoegd aan de petitie.</p>
            <button class="cta-button sign-button" onclick="document.getElementById('signModal').style.display='none'">Sluiten</button>
        `;
    });
});