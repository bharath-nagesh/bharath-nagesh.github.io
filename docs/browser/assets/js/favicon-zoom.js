/**
 * Enhanced Favicon Zoom Script
 * This script ensures that the favicon shows a zoomed-in view focusing on the letters.
 */
(function() {
    function onDOMReady(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    function enhanceFavicon() {
        try {
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');

            const img = new Image();
            img.crossOrigin = 'Anonymous';

            img.src = 'assets/images/favicon.jpeg';


            img.onload = function() {

                const sourceWidth = img.width * 0.5;
                const sourceHeight = img.height * 0.5;
                const sourceX = (img.width - sourceWidth) / 2;
                const sourceY = (img.height - sourceHeight) / 2;


                ctx.drawImage(
                    img,
                    sourceX, sourceY, sourceWidth, sourceHeight,
                    0, 0, canvas.width, canvas.height
                );

                const link = document.createElement('link');
                link.rel = 'icon';
                link.type = 'image/png';
                link.href = canvas.toDataURL('image/png');

                const existingIcons = document.querySelectorAll('link[rel="icon"]');
                existingIcons.forEach(icon => icon.parentNode.removeChild(icon));

                document.head.appendChild(link);
            };

            img.onerror = function() {
            };
        } catch (e) {
            // Silently handle browser support issues
        }
    }

    onDOMReady(enhanceFavicon);
})();
