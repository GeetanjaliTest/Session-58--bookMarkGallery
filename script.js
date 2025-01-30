
  // Wait for the document to load
  document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button-dot');
    const slides = document.querySelectorAll('.slide');

    buttons.forEach((button, index) => {
      button.addEventListener('click', function() {
        // Remove the active class from all slides and buttons
        slides.forEach(slide => slide.classList.remove('active'));
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add the active class to the clicked slide and button
        slides[index].classList.add('active');
        button.classList.add('active');
      });
    });

    // Set the first image and button as active by default
    slides[0].classList.add('active');
    buttons[0].classList.add('active');
  });

