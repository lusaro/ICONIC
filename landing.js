document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        // Store the target URL from the data-url attribute
        const targetURL = img.getAttribute('data-url');

        // The current position and size of the image
        const rect = img.getBoundingClientRect();
        
        // Clone the image
        const clonedImg = img.cloneNode();
        document.body.appendChild(clonedImg);
    
        // Set the position and size of the clone to the original image's position and size
        clonedImg.style.position = 'fixed';
        clonedImg.style.top = `${rect.top}px`;
        clonedImg.style.left = `${rect.left}px`;
        clonedImg.style.width = `${rect.width}px`;
        clonedImg.style.height = `${rect.height}px`;
        clonedImg.style.zIndex = 22;
        clonedImg.style.transition = 'transform 0.4s ease, top 0.4s ease, left 0.4s ease, width 0.4s ease, height 0.4s ease';
    
        // Short delay to set the initial state of the clone
        setTimeout(() => {
            clonedImg.style.top = '50%';
            clonedImg.style.left = '50%';
            clonedImg.style.width = '100vw';
            clonedImg.style.height = 'auto';
            clonedImg.style.transform = 'translate(-50%, -50%)';
        }, 10);
    
        // Load a high-resolution image in the background
        const fullSizeImage = new Image();
        fullSizeImage.src = img.getAttribute('src');

        // Swap the image once the high-resolution image is fully loaded
        fullSizeImage.onload = () => {
            clonedImg.src = fullSizeImage.src;
        };

        // After the fullscreen animation, redirect to the specific page
        setTimeout(() => {
            window.location.href = targetURL;
        }, 500); // Wait until the animation is finished
    });
});
