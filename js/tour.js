// tour.js - Guided tour mode

(function() {
    'use strict';

    let tourActive = false;
    let currentTourStep = 0;
    let tourTimeout = null;

    // Tour steps - one for each constellation
    const tourSteps = [
        {
            constellation: 'education',
            title: 'Education Galaxy',
            text: 'Building AI-powered learning tools. From intelligent textbooks to Canvas integrations, these projects transformed how students learn.',
            duration: 6000
        },
        {
            constellation: 'agents',
            title: 'AI Agent Nebula',
            text: 'Experimenting with AI agents. VentureBot coaches entrepreneurs, interviewers gather insights, and AgentLab pushes boundaries.',
            duration: 6000
        },
        {
            constellation: 'research',
            title: 'Research Cluster',
            text: 'Exploring AI\'s impact on economics, education, and society. Research papers, curriculum design, and economic analysis.',
            duration: 6000
        },
        {
            constellation: 'webapps',
            title: 'Web App Supernova',
            text: 'Full-stack applications that solve real problems. Video summarization, scavenger hunts, email learning, and more.',
            duration: 6000
        },
        {
            constellation: 'tools',
            title: 'Developer Tools',
            text: 'Meta-level tooling: LLMs.txt for AI-readable sites, and visualizations of how Claude Code thinks.',
            duration: 6000
        }
    ];

    /**
     * Start the guided tour
     */
    function startTour() {
        tourActive = true;
        currentTourStep = 0;

        // Show tour UI
        document.getElementById('tour-narration').classList.remove('hidden');
        document.getElementById('instructions').classList.add('hidden');

        // Set up event listeners
        document.getElementById('skip-tour').addEventListener('click', endTour);
        document.getElementById('next-tour').addEventListener('click', nextTourStep);

        // Start first step
        showTourStep(currentTourStep);
    }

    /**
     * Show a tour step
     */
    function showTourStep(stepIndex) {
        if (stepIndex >= tourSteps.length) {
            endTour();
            return;
        }

        const step = tourSteps[stepIndex];

        // Update narration text
        document.getElementById('tour-text').innerHTML = `
            <strong>${step.title}</strong><br>
            ${step.text}
        `;

        // Fly camera to constellation
        window.flyToConstellation(step.constellation);

        // Update button text
        const nextBtn = document.getElementById('next-tour');
        if (stepIndex === tourSteps.length - 1) {
            nextBtn.textContent = 'Explore';
        } else {
            nextBtn.textContent = 'Next';
        }

        // Auto-advance after duration (if not manually navigating)
        clearTimeout(tourTimeout);
        tourTimeout = setTimeout(() => {
            if (tourActive && currentTourStep === stepIndex) {
                nextTourStep();
            }
        }, step.duration);
    }

    /**
     * Move to next tour step
     */
    function nextTourStep() {
        currentTourStep++;

        if (currentTourStep >= tourSteps.length) {
            endTour();
        } else {
            showTourStep(currentTourStep);
        }
    }

    /**
     * End the tour
     */
    function endTour() {
        tourActive = false;
        clearTimeout(tourTimeout);

        // Hide tour UI
        document.getElementById('tour-narration').classList.add('hidden');
        document.getElementById('instructions').classList.remove('hidden');

        // Reset camera to overview
        window.resetCamera();

        console.log('Tour ended - explore mode active');
    }

    /**
     * Check if tour is active
     */
    function isTourActive() {
        return tourActive;
    }

    // Export functions
    window.startTour = startTour;
    window.endTour = endTour;
    window.isTourActive = isTourActive;

})();
