// main.js - Application entry point

(function() {
    'use strict';

    /**
     * Initialize the application
     */
    function init() {
        console.log('Initializing 2025 Year in Review...');

        // Check for required data
        if (!window.REPOS || !window.CONSTELLATIONS) {
            console.error('Required data not loaded. Check data.js');
            showError('Failed to load project data');
            return;
        }

        // Initialize Three.js scene
        window.initScene();

        // Create constellations from data
        window.createConstellations();

        // Initialize user controls
        window.initControls();

        // Update stats overlay
        updateStats();

        // Hide loading screen
        hideLoading();

        // Start animation loop
        animate();

        // Ask user if they want the tour
        setTimeout(() => {
            if (confirm('Would you like a guided tour of the constellations?')) {
                window.startTour();
            }
        }, 500);

        console.log('Initialization complete');
    }

    /**
     * Update the stats overlay with computed values
     */
    function updateStats() {
        const repos = window.REPOS;

        // Total commits
        const totalCommits = repos.reduce((sum, r) => sum + r.commits_2025, 0);
        animateNumber('total-commits', totalCommits);

        // Total repos
        animateNumber('total-repos', repos.length);

        // AI-assisted percentage
        const aiAssisted = repos.filter(r => r.has_claude_md).length;
        const percentage = Math.round((aiAssisted / repos.length) * 100);
        document.getElementById('ai-assisted').textContent = percentage + '%';
    }

    /**
     * Animate a number counting up
     */
    function animateNumber(elementId, target) {
        const element = document.getElementById(elementId);
        const duration = 1500;
        const startTime = Date.now();

        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);

            element.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        update();
    }

    /**
     * Hide the loading screen
     */
    function hideLoading() {
        const loading = document.getElementById('loading');
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }

    /**
     * Show an error message
     */
    function showError(message) {
        const loading = document.getElementById('loading');
        loading.innerHTML = `<p style="color: #ff6b6b;">Error: ${message}</p>`;
    }

    /**
     * Main animation loop
     */
    function animate() {
        requestAnimationFrame(animate);

        // Update controls
        if (window.controls) {
            window.controls.update();
        }

        // Rotate stars slowly for visual effect
        if (window.starMeshes) {
            window.starMeshes.forEach(star => {
                star.rotation.y += 0.002;
            });
        }

        // Render scene
        if (window.renderer && window.scene && window.camera) {
            window.renderer.render(window.scene, window.camera);
        }
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
