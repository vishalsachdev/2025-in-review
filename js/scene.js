// scene.js - Three.js scene setup

(function() {
    'use strict';

    /**
     * Initialize the Three.js scene
     */
    function initScene() {
        // Create scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000011);

        // Create camera
        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 30, 100);

        // Create renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Add to DOM
        const container = document.getElementById('canvas-container');
        container.appendChild(renderer.domElement);

        // Create controls
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.minDistance = 30;
        controls.maxDistance = 200;
        controls.enablePan = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.2;

        // Add starfield background
        createStarfield(scene);

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);

        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Export to window
        window.scene = scene;
        window.camera = camera;
        window.renderer = renderer;
        window.controls = controls;

        console.log('Scene initialized');
    }

    /**
     * Create background starfield
     */
    function createStarfield(scene) {
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 1000;

        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
            // Random position in a sphere
            const radius = 200 + Math.random() * 300;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);

            // Slightly varied colors (white to blue-ish)
            const brightness = 0.5 + Math.random() * 0.5;
            colors[i * 3] = brightness;
            colors[i * 3 + 1] = brightness;
            colors[i * 3 + 2] = brightness + Math.random() * 0.2;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const starMaterial = new THREE.PointsMaterial({
            size: 1,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        });

        const starfield = new THREE.Points(starGeometry, starMaterial);
        scene.add(starfield);

        // Animate starfield rotation
        function animateStarfield() {
            requestAnimationFrame(animateStarfield);
            starfield.rotation.y += 0.0001;
        }
        animateStarfield();
    }

    // Export
    window.initScene = initScene;

})();
