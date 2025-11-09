document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery');
    
    const galleryImages = [
        {
            src: 'images/gallery1.jpg',
            alt: 'Marie ilutuba interjöör'
        },
        {
            src: 'images/gallery2.jpg',
            alt: 'Marie ilutuba tööruum'
        },
        {
            src: 'images/gallery3.jpg',
            alt: 'Marie ilutuba teenused'
        },
        {
            src: 'images/gallery4.jpg',
            alt: 'Marie ilutuba salong'
        }
    ];
    
    if (galleryContainer) {
        galleryImages.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.className = 'gallery-item';
            img.onerror = function() {
                this.style.display = 'none';
            };
            galleryContainer.appendChild(img);
        });
        
        setTimeout(() => {
            const loadedImages = galleryContainer.querySelectorAll('img:not([style*="display: none"])');
            if (loadedImages.length === 0) {
                galleryContainer.innerHTML = '<p class="gallery-placeholder-text">Galerii pildid lisatakse peagi</p>';
            }
        }, 1000);
    }
});

