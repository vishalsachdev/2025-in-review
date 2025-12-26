// controls.js - User interaction and click detection

(function() {
    'use strict';

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let hoveredStar = null;
    let selectedStar = null;

    /**
     * Initialize interaction controls
     */
    function initControls() {
        const container = document.getElementById('canvas-container');

        // Mouse move for hover effects
        container.addEventListener('mousemove', onMouseMove, false);

        // Click for selection
        container.addEventListener('click', onClick, false);

        // Touch support
        container.addEventListener('touchstart', onTouchStart, false);

        // Close panel button
        document.getElementById('close-panel').addEventListener('click', closeInfoPanel);

        // Legend item clicks
        document.querySelectorAll('.legend-item').forEach(item => {
            item.addEventListener('click', () => {
                const constellation = item.dataset.constellation;
                flyToConstellation(constellation);
            });
        });

        console.log('Controls initialized');
    }

    /**
     * Handle mouse movement for hover effects
     */
    function onMouseMove(event) {
        // Calculate mouse position in normalized device coordinates
        const rect = event.target.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        checkIntersection();
    }

    /**
     * Handle touch start
     */
    function onTouchStart(event) {
        if (event.touches.length === 1) {
            const rect = event.target.getBoundingClientRect();
            mouse.x = ((event.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.touches[0].clientY - rect.top) / rect.height) * 2 + 1;

            checkIntersection();

            if (hoveredStar) {
                selectStar(hoveredStar);
            }
        }
    }

    /**
     * Handle click for star selection
     */
    function onClick(event) {
        if (hoveredStar) {
            selectStar(hoveredStar);
        } else {
            closeInfoPanel();
        }
    }

    /**
     * Check for star intersection with raycaster
     */
    function checkIntersection() {
        if (!window.camera || !window.starMeshes) return;

        raycaster.setFromCamera(mouse, window.camera);

        const intersects = raycaster.intersectObjects(window.starMeshes, false);

        if (intersects.length > 0) {
            const newHovered = intersects[0].object;

            if (hoveredStar !== newHovered) {
                // Reset previous hover
                if (hoveredStar) {
                    window.resetStar(hoveredStar);
                }

                // Highlight new hover
                hoveredStar = newHovered;
                window.highlightStar(hoveredStar);

                // Change cursor
                document.body.style.cursor = 'pointer';
            }
        } else {
            // No intersection - reset hover state
            if (hoveredStar) {
                window.resetStar(hoveredStar);
                hoveredStar = null;
                document.body.style.cursor = 'default';
            }
        }
    }

    /**
     * Select a star and show info panel
     */
    function selectStar(star) {
        selectedStar = star;
        const repo = star.userData.repo;

        if (!repo) {
            console.warn('No repo data on star');
            return;
        }

        // Populate info panel
        document.getElementById('project-name').textContent = repo.name;
        document.getElementById('project-description').textContent = repo.description || 'No description available';
        document.getElementById('project-commits').textContent = repo.commits_2025;
        document.getElementById('project-dates').textContent = `${repo.first_commit} - ${repo.last_commit}`;

        // AI badge
        const aiBadge = document.getElementById('ai-badge');
        if (repo.ai_assisted) {
            aiBadge.classList.remove('hidden');
        } else {
            aiBadge.classList.add('hidden');
        }

        // GitHub link
        const githubLink = document.getElementById('github-link');
        if (repo.github_url) {
            githubLink.href = repo.github_url;
            githubLink.classList.remove('hidden');
        } else {
            githubLink.classList.add('hidden');
        }

        // Show panel
        document.getElementById('info-panel').classList.remove('hidden');

        // Animate camera to focus on the star
        focusOnStar(star);
    }

    /**
     * Close the info panel
     */
    function closeInfoPanel() {
        document.getElementById('info-panel').classList.add('hidden');
        selectedStar = null;
    }

    /**
     * Animate camera to focus on a star
     */
    function focusOnStar(star) {
        if (!window.controls || !window.camera) return;

        // Get world position of star
        const worldPos = new THREE.Vector3();
        star.getWorldPosition(worldPos);

        // Smoothly move camera target
        animateCameraTo(worldPos, 30);
    }

    /**
     * Fly camera to a constellation
     */
    function flyToConstellation(constellationName) {
        const center = window.getConstellationCenter(constellationName);
        if (center) {
            animateCameraTo(center, 60);
        }
    }

    /**
     * Animate camera to target position
     */
    function animateCameraTo(targetPosition, distance) {
        if (!window.controls || !window.camera) return;

        const startTarget = window.controls.target.clone();
        const startPosition = window.camera.position.clone();

        // Calculate end position (looking at target from a distance)
        const direction = new THREE.Vector3()
            .subVectors(window.camera.position, window.controls.target)
            .normalize();
        const endPosition = targetPosition.clone().add(direction.multiplyScalar(distance));

        let progress = 0;
        const duration = 1000; // ms
        const startTime = Date.now();

        function animate() {
            progress = Math.min((Date.now() - startTime) / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);

            window.controls.target.lerpVectors(startTarget, targetPosition, eased);
            window.camera.position.lerpVectors(startPosition, endPosition, eased);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        animate();
    }

    /**
     * Reset camera to default view
     */
    function resetCamera() {
        animateCameraTo(new THREE.Vector3(0, 0, 0), 100);
    }

    // Export functions
    window.initControls = initControls;
    window.flyToConstellation = flyToConstellation;
    window.resetCamera = resetCamera;
    window.closeInfoPanel = closeInfoPanel;

})();
