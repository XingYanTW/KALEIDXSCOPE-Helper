(function () {
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

    // Helper functions
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function colorJP(color) {
        const colors = {
            blue: '青',
            white: '白',
            violet: '紫',
            black: '黒',
            yellow: '黄',
            red: '赤'
        };
        return colors[color] || color;
    }

    function getPhase(color) {
        const phases = {
            blue: 1,
            white: 2,
            violet: 3,
            black: 4,
            yellow: 5,
            red: 6
        };
        return phases[color] || 0;
    }

    // Create the helper window
    const helperDiv = document.createElement('div');
    helperDiv.id = 'kaleidHelper';
    helperDiv.innerHTML = `
        <h2>KALEIDXSCOPE Gate Helper</h2>
        
        <div class="gate-section">
            <h3>Select Active Gates</h3>
            ${['blue', 'white', 'violet', 'black', 'yellow', 'red'].map(color => `
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
    document.getElementById('save-gates').addEventListener('click', function () {
        const activeGates = {};
        ['blue', 'white', 'violet', 'black', 'yellow', 'red'].forEach(color => {
            activeGates[color] = document.getElementById(`gate-${color}`).checked;
        });

        localStorage.setItem('activeGates', JSON.stringify(activeGates));
        alert('Gate selection saved!');

        filterSongsByGates(activeGates);
    });

    // Function to filter songs based on selected gates
    function filterSongsByGates(activeGates) {
        console.log('Filtering songs for gates:', activeGates);
        
        // Phase 1 (Blue Gate) song list
        const phase1Songs = [
            'STEREOSCAPE', 'Crazy Circle', 'シエルブルーマルシェ', 'ブレインジャックシンドローム',
            '共鳴', 'Ututu', 'REAL VOICE', 'ユメヒバナ', 'オリフィス', 'パラボラ',
            '星めぐり、果ての君へ。', 'スローアライズ', '生命不詳', 'チエルカ／エソテリカ',
            'RIFFRAIN', 'Falling', 'ピリオドサイン', '群青シグナル', 'アンバークロニクル',
            'リフヴェイン', '宵の鳥', 'Kairos', 'フェイクフェイス・フェイルセイフ',
            'シックスプラン', 'フタタビ', 'ふらふらふら、', 'パラドクスイヴ', 'YKWTD',
            '184億回のマルチトニック'
        ];

        // Phase 2 (White Gate) song list
        const phase2Songs = [
            '封焔の135秒',
            'ほしぞらスペクタクル',
            'U&iVERSE -銀河鸞翔-',
            'ツムギボシ',
            'ここからはじまるプロローグ。 (Kanon Remix)',
            'Latent Kingdom'
        ];

        // Phase 3 (Violet Gate) song list
        const phase3Songs = [
            '言ノ葉カルマ',
            '悪戯',
            '言ノ葉遊戯',
            'りばーぶ',
            '洗脳',
            'Barbed Eye',
            '空威張りビヘイビア',
            '分からない',
            '相思創愛',
            '天国と地獄 -言ノ葉リンネ-',
            '咲キ誇レ常世ノ華',
            'BLACK ROSE',
            'Secret Sleuth',
            'シアトリカル・ケース',
            'アンビバレンス',
            '分解収束テイル',
            'Mystic Parade',
            '地獄',
            'ヤミツキ',
            'ワードワードワード',
            '届かない花束',
            'ステップアンドライム',
            'パーフェクション',
            'デーモンベット',
            'ヱデン',
            'にゃーにゃー冒険譚',
            'Cry Cry Cry',
            'シスターシスター',
            '有明/Ariake'
        ];

        // Phase 4 (Black Gate) song list
        const phase4Songs = [
            'アンビバレンス',
            '分解収束テイル',
            'Mystic Parade',
            '地獄',
            'ヤミツキ',
            'ワードワードワード',
            '届かない花束',
            'ステップアンドライム',
            'パーフェクション',
            'デーモンベット',
            'ヱデン',
            'にゃーにゃー冒険譚',
            'Cry Cry Cry',
            'シスターシスター',
            '有明/Ariake'
        ];

        // Phase 5 (Yellow Gate) song list
        const phase5Songs = [
            'でらっくmaimai♪てんてこまい!',
            '絡めトリック利己ライザー',
            'ぼくたちいつでも　しゅわっしゅわ！',
            'Paradisoda',
            'とびだせ！TO THE COSMIC!!',
            'ミルキースター・シューティングスター',
            'ホシシズク',
            'ツムギボシ',
            'NOIZY BOUNCE',
            'エスオーエス',
            'プリズム△▽リズム',
            'Fraq'
        ];

        // Phase 6 (Red Gate) song list
        const phase6Songs = [
            '封焔の135秒',
            'ほしぞらスペクタクル',
            'U&iVERSE -銀河鸞翔-',
            'ツムギボシ',
            'ここからはじまるプロローグ。 (Kanon Remix)',
            'Latent Kingdom'
        ];

        // Process each song checkbox
        document.querySelectorAll('.favorite_checkbox').forEach(checkboxContainer => {
            const songNameElement = checkboxContainer.querySelector('.favorite_music_name');
            const songName = songNameElement ? songNameElement.textContent.trim() : '';
            const checkbox = checkboxContainer.querySelector('input[type="checkbox"][id="favorite"]');
            
            if (!checkbox || !songName) return;

            let shouldCheck = false;

            // Check which gate's song list contains this song
            if (activeGates.blue && phase1Songs.includes(songName)) shouldCheck = true;
            if (activeGates.white && phase2Songs.includes(songName)) shouldCheck = true;
            if (activeGates.violet && phase3Songs.includes(songName)) shouldCheck = true;
            if (activeGates.black && phase4Songs.includes(songName)) shouldCheck = true;
            if (activeGates.yellow && phase5Songs.includes(songName)) shouldCheck = true;
            if (activeGates.red && phase6Songs.includes(songName)) shouldCheck = true;

            // Update checkbox state
            checkbox.checked = shouldCheck;
            
            // Show/hide the container based on selection
            checkboxContainer.style.display = shouldCheck ? '' : 'none';
        });
    }

    // Initial filter if gates are already selected
    if (Object.values(savedGates).some(gate => gate)) {
        filterSongsByGates(savedGates);
    }
})();