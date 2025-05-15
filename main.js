function() {
    // Create style element
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

    // Create helper window
    const helperDiv = document.createElement('div');
    helperDiv.id = 'kaleidHelper';
    helperDiv.innerHTML = `
        <h2>KALEIDXSCOPE Gate Helper</h2>
        <div class="gate-section">
            <h3>Select Active Gates</h3>
            <div class="gate-checkbox gate-blue">
                <input type="checkbox" id="gate-blue" name="gate">
                <label for="gate-blue">Phase 1: Blue Gate (青の扉)</label>
            </div>
            <div class="gate-checkbox gate-white">
                <input type="checkbox" id="gate-white" name="gate">
                <label for="gate-white">Phase 2: White Gate (白の扉)</label>
            </div>
            <div class="gate-checkbox gate-violet">
                <input type="checkbox" id="gate-violet" name="gate">
                <label for="gate-violet">Phase 3: Violet Gate (紫の扉)</label>
            </div>
            <div class="gate-checkbox gate-black">
                <input type="checkbox" id="gate-black" name="gate">
                <label for="gate-black">Phase 4: Black Gate (黒の扉)</label>
            </div>
            <div class="gate-checkbox gate-yellow">
                <input type="checkbox" id="gate-yellow" name="gate">
                <label for="gate-yellow">Phase 5: Yellow Gate (黄の扉)</label>
            </div>
            <div class="gate-checkbox gate-red">
                <input type="checkbox" id="gate-red" name="gate">
                <label for="gate-red">Phase 6: Red Gate (赤の扉)</label>
            </div>
        </div>
        <button class="save-button" id="save-gates">Save Gate Selection</button>
    `;

    // Load from localStorage
    const savedGates = JSON.parse(localStorage.getItem('maimaiGateSelection') || {
        blue: false, white: false, violet: false,
        black: false, yellow: false, red: false
    };

    // Set initial states
    document.getElementById('gate-blue')?.checked = savedGates.blue;
    document.getElementById('gate-white')?.checked = savedGates.white;
    document.getElementById('gate-violet')?.checked = savedGates.violet;
    document.getElementById('gate-black')?.checked = savedGates.black;
    document.getElementById('gate-yellow')?.checked = savedGates.yellow;
    document.getElementById('gate-red')?.checked = savedGates.red;

    // Save functionality
    helperDiv.querySelector('#save-gates').addEventListener('click', function() {
        const activeGates = {
            blue: document.getElementById('gate-blue').checked,
            white: document.getElementById('gate-white').checked,
            violet: document.getElementById('gate-violet').checked,
            black: document.getElementById('gate-black').checked,
            yellow: document.getElementById('gate-yellow').checked,
            red: document.getElementById('gate-red').checked
        };
        
        localStorage.setItem('maimaiGateSelection', JSON.stringify(activeGates));
        alert('Gate selection saved!');
        filterSongsByGates(activeGates);
    });

    // Filter function (placeholder - needs implementation)
    function filterSongsByGates(activeGates) {
        console.log('Active gates:', activeGates);
        // Implement your actual filtering logic here
        // Example: document.querySelectorAll('.song-item').forEach(song => { ... });
    }

    // Remove existing helper if present
    const existingHelper = document.getElementById('kaleidHelper');
    if (existingHelper) existingHelper.remove();
    
    document.body.appendChild(helperDiv);
}
