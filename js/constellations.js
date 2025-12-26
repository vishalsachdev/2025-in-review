// constellations.js - Star and constellation line rendering

(function() {
    'use strict';

    // Star geometry shared across all stars
    const starGeometry = new THREE.SphereGeometry(1, 16, 16);

    // Store references to star meshes for interaction
    window.starMeshes = [];
    window.constellationGroups = {};

    /**
     * Create all constellations from repo data
     */
    function createConstellations() {
        if (!window.REPOS || !window.CONSTELLATIONS) {
            console.error('REPOS or CONSTELLATIONS data not loaded');
            return;
        }

        // Group repos by constellation
        const grouped = {};
        window.REPOS.forEach(repo => {
            if (!grouped[repo.constellation]) {
                grouped[repo.constellation] = [];
            }
            grouped[repo.constellation].push(repo);
        });

        // Create each constellation
        Object.keys(grouped).forEach((constellationName, constellationIndex) => {
            const repos = grouped[constellationName];
            const config = window.CONSTELLATIONS[constellationName];

            if (!config) {
                console.warn(`No config for constellation: ${constellationName}`);
                return;
            }

            const group = new THREE.Group();
            group.name = constellationName;

            // Position constellation in space (spread them out)
            const angle = (constellationIndex / Object.keys(grouped).length) * Math.PI * 2;
            const radius = 40;
            group.position.set(
                Math.cos(angle) * radius,
                (Math.random() - 0.5) * 20,
                Math.sin(angle) * radius
            );

            const starPositions = [];

            // Create stars for this constellation
            repos.forEach((repo, repoIndex) => {
                const star = createStar(repo, config, repoIndex, repos.length);
                group.add(star);
                starPositions.push(star.position.clone());
                window.starMeshes.push(star);
            });

            // Create constellation lines connecting stars
            if (starPositions.length > 1) {
                const lines = createConstellationLines(starPositions, config.color);
                group.add(lines);
            }

            // Add constellation label
            const label = createConstellationLabel(config.displayName, config.color);
            label.position.set(0, 15, 0);
            group.add(label);

            window.constellationGroups[constellationName] = group;
            window.scene.add(group);
        });

        console.log(`Created ${window.starMeshes.length} stars in ${Object.keys(grouped).length} constellations`);
    }

    /**
     * Create a single star mesh
     */
    function createStar(repo, config, index, total) {
        // Normalize commit count to star size (min 0.8, max 3)
        const maxCommits = Math.max(...window.REPOS.map(r => r.commits_2025));
        const normalizedSize = 0.8 + (repo.commits_2025 / maxCommits) * 2.2;

        // Create material with glow effect
        const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(config.color),
            transparent: true,
            opacity: 0.9
        });

        const star = new THREE.Mesh(starGeometry, material);
        star.scale.setScalar(normalizedSize);

        // Position within constellation (spiral pattern)
        const angle = (index / total) * Math.PI * 2;
        const radius = 5 + (index % 3) * 4;
        const height = (Math.random() - 0.5) * 10;

        star.position.set(
            Math.cos(angle) * radius,
            height,
            Math.sin(angle) * radius
        );

        // Store repo data on the mesh for interactions
        star.userData = {
            repo: repo,
            originalScale: normalizedSize,
            originalColor: config.color
        };

        // Add glow sprite
        const glow = createGlowSprite(config.color, normalizedSize * 3);
        star.add(glow);

        return star;
    }

    /**
     * Create glow sprite for a star
     */
    function createGlowSprite(color, size) {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.3, color + '80');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            blending: THREE.AdditiveBlending
        });

        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.setScalar(size);

        return sprite;
    }

    /**
     * Create lines connecting constellation stars
     */
    function createConstellationLines(positions, color) {
        const material = new THREE.LineBasicMaterial({
            color: new THREE.Color(color),
            transparent: true,
            opacity: 0.3
        });

        const points = [];

        // Create a path through all stars (simple sequential connection)
        // For a more interesting pattern, connect nearby stars
        const sortedPositions = [...positions].sort((a, b) => a.x - b.x);

        for (let i = 0; i < sortedPositions.length - 1; i++) {
            points.push(sortedPositions[i]);
            points.push(sortedPositions[i + 1]);
        }

        // Add some cross-connections for visual interest
        if (sortedPositions.length > 2) {
            points.push(sortedPositions[0]);
            points.push(sortedPositions[Math.floor(sortedPositions.length / 2)]);
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const lines = new THREE.LineSegments(geometry, material);

        return lines;
    }

    /**
     * Create floating text label for constellation
     */
    function createConstellationLabel(text, color) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = 512;
        canvas.height = 64;

        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = 'bold 32px Arial';
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({
            map: texture,
            transparent: true
        });

        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(20, 2.5, 1);

        return sprite;
    }

    /**
     * Highlight a star on hover
     */
    function highlightStar(star) {
        if (!star || !star.userData.originalScale) return;

        star.scale.setScalar(star.userData.originalScale * 1.5);
        star.material.opacity = 1;
    }

    /**
     * Reset star to normal state
     */
    function resetStar(star) {
        if (!star || !star.userData.originalScale) return;

        star.scale.setScalar(star.userData.originalScale);
        star.material.opacity = 0.9;
    }

    /**
     * Get constellation center position (for camera navigation)
     */
    function getConstellationCenter(constellationName) {
        const group = window.constellationGroups[constellationName];
        if (!group) return new THREE.Vector3(0, 0, 0);

        return group.position.clone();
    }

    // Export functions
    window.createConstellations = createConstellations;
    window.highlightStar = highlightStar;
    window.resetStar = resetStar;
    window.getConstellationCenter = getConstellationCenter;

})();
