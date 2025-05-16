(function () {
    'use strict';

    console.debug('KALEIDXSCOPE Gate Helper script loaded');

    // Add custom CSS
    const style = document.createElement('style');
    console.debug('Injecting custom CSS for helper UI');
    style.textContent = `...`;  // Keeping CSS as is for brevity
    document.head.appendChild(style);

    // Helper functions
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function colorJP(color) {
        const colors = {
            blue: '青', white: '白', violet: '紫',
            black: '黒', yellow: '黄', red: '赤'
        };
        return colors[color] || color;
    }

    function getPhase(color) {
        const phases = {
            blue: 1, white: 2, violet: 3,
            black: 4, yellow: 5, red: 6
        };
        return phases[color] || 0;
    }

    // Create the helper window
    console.debug('Creating helper UI window');
    const helperDiv = document.createElement('div');
    helperDiv.id = 'kaleidHelper';
    helperDiv.innerHTML = `...`;  // Keeping HTML as is for brevity
    document.body.appendChild(helperDiv);

    // Load saved gate selections from localStorage
    console.debug('Loading saved gate selections from localStorage');
    const savedGates = JSON.parse(localStorage.getItem('activeGates')) || {
        blue: false, white: false, violet: false,
        black: false, yellow: false, red: false
    };
    console.debug('Loaded saved gates:', savedGates);

    // Set initial checkbox states
    Object.keys(savedGates).forEach(color => {
        const checkbox = document.getElementById(`gate-${color}`);
        if (checkbox) {
            checkbox.checked = savedGates[color];
            console.debug(`Checkbox for ${color} set to ${savedGates[color]}`);
        }
    });

    // Save button functionality
    document.getElementById('save-gates').addEventListener('click', function () {
        console.debug('Save button clicked');
        const activeGates = {};
        ['blue', 'white', 'violet', 'black', 'yellow', 'red'].forEach(color => {
            activeGates[color] = document.getElementById(`gate-${color}`).checked;
        });

        console.debug('Active gates to save:', activeGates);
        localStorage.setItem('activeGates', JSON.stringify(activeGates));
        alert('Gate selection saved!');

        filterSongsByGates(activeGates);
    });

    // Function to filter songs based on selected gates
    function filterSongsByGates(activeGates) {
        console.debug('Filtering songs for gates:', activeGates);

        // Gate song lists
        const phase1Songs = [...];
        const phase2Songs = [...];
        const phase3Songs = [...];
        const phase4Songs = [...];
        const phase5Songs = [...];
        const phase6Songs = [...];

        console.debug('Starting song filtering...');
        let foundCount = 0;

        document.querySelectorAll('.favorite_checkbox').forEach(container => {
            const songNameElement = container.querySelector('.favorite_music_name');
            if (!songNameElement) return;

            const songName = songNameElement.textContent.trim();
            const checkbox = container.querySelector('input[type="checkbox"][name="music[]"]');

            if (!checkbox) {
                console.warn('Checkbox not found for song:', songName);
                return;
            }

            let shouldcheck = false;

            if (activeGates.blue && phase1Songs.includes(songName)) shouldcheck = true;
            if (activeGates.white && phase2Songs.includes(songName)) shouldcheck = true;
            if (activeGates.violet && phase3Songs.includes(songName)) shouldcheck = true;
            if (activeGates.black && phase4Songs.includes(songName)) shouldcheck = true;
            if (activeGates.yellow && phase5Songs.includes(songName)) shouldcheck = true;
            if (activeGates.red && phase6Songs.includes(songName)) shouldcheck = true;

            if (shouldcheck) {
                checkbox.checked = true;
                foundCount++;
                console.debug(`Song "${songName}" matched and checked`);
            } else {
                checkbox.checked = false;
                console.debug(`Song "${songName}" not matched and unchecked`);
            }
        });

        console.debug(`Filtering complete. ${foundCount} songs checked.`);
    }

    // Initial filter if gates are already selected
    if (Object.values(savedGates).some(gate => gate)) {
        console.debug('Active gates found on load, applying initial filter...');
        filterSongsByGates(savedGates);
    } else {
        console.debug('No active gates found on load');
    }
})();
