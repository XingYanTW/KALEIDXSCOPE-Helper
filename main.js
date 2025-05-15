(function() {
    'use strict';

    // Add custom CSS
    const style = document.createElement('style');
    style.textContent = `
        #kaleidHelper {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 280px;
            background-color: #f0f5ff;
            border: 2px solid #4a4a4a;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 9999;
            font-family: Arial, sans-serif;
        }

        #kaleidHelper h2 {
            margin-top: 0;
            color: #2a4a7a;
            border-bottom: 2px solid #d0d8e8;
            padding-bottom: 8px;
            font-size: 18px;
            text-align: center;
        }

        .gate-section {
            margin-bottom: 15px;
        }

        .gate-section h3 {
            margin: 12px 0 8px 0;
            font-size: 15px;
            color: #333;
            padding-left: 5px;
        }

        .gate-checkbox {
            margin: 6px 0;
            padding: 5px;
            border-radius: 4px;
            transition: background-color 0.2s;
        }

        .gate-checkbox:hover {
            background-color: #e0e8f0;
        }

        .gate-checkbox input {
            margin-right: 8px;
            cursor: pointer;
        }

        .gate-checkbox label {
            font-size: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
        }

        .gate-blue { border-left: 3px solid #3498db; }
        .gate-white { border-left: 3px solid #ecf0f1; }
        .gate-violet { border-left: 3px solid #9b59b6; }
        .gate-black { border-left: 3px solid #2c3e50; }
        .gate-yellow { border-left: 3px solid #f1c40f; }
        .gate-red { border-left: 3px solid #e74c3c; }

        .save-button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            background-color: #2a4a7a;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.2s;
        }

        .save-button:hover {
            background-color: #1a3a6a;
        }
    `;
    document.head.appendChild(style);

    // Create the helper window
    const helperDiv = document.createElement('div');
    helperDiv.id = 'kaleidHelper';
    helperDiv.innerHTML = `
        <h2>KALEIDXSCOPE Gate Helper</h2>
        
        <div class="gate-section">
            <h3>Select Active Gates</h3>
            ${['blue','white','violet','black','yellow','red'].map(color => `
                <div class="gate-checkbox gate-${color}">
                    <input type="checkbox" id="gate-${color}" name="gate">
                    <label for="gate-${color}">Phase ${getPhase(color)}: ${capitalize(color)} Gate (${colorJP(color)})</label>
                </div>
            `).join('')}
        </div>
        
        <button class="save-button" id="save-gates">Save Gate Selection</button>
    `;

    document.body.appendChild(helperDiv);

    // Load saved gate selections from localStorage
    const savedGates = JSON.parse(localStorage.getItem('activeGates')) || {
        blue: false,
        white: false,
        violet: false,
        black: false,
        yellow: false,
        red: false
    };

    // Set initial checkbox states
    Object.keys(savedGates).forEach(color => {
        document.getElementById(`gate-${color}`).checked = savedGates[color];
    });

    // Save button functionality
    document.getElementById('save-gates').addEventListener('click', function() {
        const activeGates = {};
        ['blue','white','violet','black','yellow','red'].forEach(color => {
            activeGates[color] = document.getElementById(`gate-${color}`).checked;
        });

        localStorage.setItem('activeGates', JSON.stringify(activeGates));
        alert('Gate selection saved!');

        filterSongsByGates(activeGates);
    });

    // Function to filter songs based on selected gates
    function filterSongsByGates(activeGates) {
        console.log('Filtering songs for gates:', activeGates);
        // Add your filtering logic interacting with page content here
    }

    // Initial filter application
    filterSongsByGates(savedGates);

    // Helper Functions
    function getPhase(color) {
        const phases = {
            blue: 1,
            white: 2,
            violet: 3,
            black: 4,
            yellow: 5,
            red: 6
        };
        return phases[color] || '';
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function colorJP(color) {
        const jp = {
            blue: '青の扉',
            white: '白の扉',
            violet: '紫の扉',
            black: '黒の扉',
            yellow: '黄の扉',
            red: '赤の扉'
        };
        return jp[color] || '';
    }
})();
