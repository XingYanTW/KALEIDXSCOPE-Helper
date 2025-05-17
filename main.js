(function () {
    'use strict';

    if (!window.location.href.includes('maimaidx.jp') && !window.location.href.includes('maimaidx-eng.com')) {
        alert('This script is only for maimai NET');
        return;
    }
    
    const style = document.createElement('style');
    style.textContent = `
        #kaleidHelper {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 360px;
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

        /* Language selection */
        #language-select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
            background-color: #fff;
            color: #333;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        #lauguage-select label {
            padding-top: 5px;
        }
        #language-select option {
            padding: 8px;
            background-color: #fff;
            color: #333;
            cursor: pointer;
            transition: background-color 0.2s;
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
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 6px 0;
            padding: 5px;
            border-radius: 4px;
            transition: background-color 0.2s;
        }

        .gate-checkbox:hover {
            background-color: #e0e8f0;
        }

        .gate-checkbox label {
            flex: 1;
            margin: 0;
            font-size: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
        }

        .gate-icon {
            width: 50px;
            height: 50px;
            margin-left: 5px;
        }

        .gate-checkbox input {
            margin-right: 8px;
            cursor: pointer;
        }


        .gate-blue { border-left: 3px solid #3498db; }
        .gate-white { border-left: 3px solid #D4D299; }
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

        .tooltip {
            position: absolute;
            top: -5px;
            left: -1%;
            transform: translateY(-100%);
            background-color: #333;
            color: #fff;
            padding: 5px;
            border-radius: 4px;
            font-size: 12px;
            display: none;
            z-index: 10000;
            max-width: 400px;       /* 限制寬度 */
            white-space: normal;    /* 自動換行 */
            word-break: break-word; /* 單詞過長時斷行 */
        }
        .gate-checkbox:hover .tooltip {
            display: block;
        }
        .gate-checkbox:hover .tooltip::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%) translateY(100%);
            border-width: 5px;
            border-style: solid;
            border-color: #333 transparent transparent transparent;
        }

        /* checkbox style */
        .gate-checkbox input[type="checkbox"] {
            width: 20px;
            height: 20px;
            cursor: pointer;
            margin-right: 10px;
        }
        .gate-checkbox input[type="checkbox"]:checked {
            background-color: #3498db;
            border-radius: 4px;
        }
        
        /* checkbox label style with diffierent color when checked */
        .gate-blue input[type="checkbox"]:checked + label {
            color: #3498db;
        }
        .gate-white input[type="checkbox"]:checked + label {
            color: #D4D299;
        }
        .gate-violet input[type="checkbox"]:checked + label {
            color: #9b59b6;
        }
        .gate-black input[type="checkbox"]:checked + label {
            color: #2c3e50;
        }
        .gate-yellow input[type="checkbox"]:checked + label {
            color: #f1c40f;
        }
        .gate-red input[type="checkbox"]:checked + label {
            color: #e74c3c;
        }

        /* popup animation */
        @keyframes popup {
            0% { transform: scale(0); }
            50% { transform: scale(1.05); }
            75% { transform: scale(0.95); }
            100% { transform: scale(1); }
        }
        #kaleidHelper {
            animation: popup 0.3s ease-out;
        }
        #kaleidHelper h2 {
            animation: popup 0.3s ease-out;
        }
        .gate-section h3 {
            animation: popup 0.3s ease-out;
        }
        .gate-checkbox {
            animation: popup 0.3s ease-out;
        }
        .save-button {
            animation: popup 0.3s ease-out;
        }

        /* tooltip animation */
        @keyframes tooltip {
            0% { opacity: 0; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
        .tooltip {
            animation: tooltip 0.3s ease-out;
        }
        .tooltip::after {
            animation: tooltip 0.3s ease-out;
        }
        /* hover tip */
        #hover-tip {
            font-size: 12px;
            color: #666;
            margin-top: 5px;
            text-align: center;
        }

        /* close button */
        #close-helper {
            position: absolute;
            top: 5px;
            right: 5px;
            background: none;
            border: none;
            font-size: 16px;
            cursor: pointer;
            color: #2a4a7a;
        }
        #close-helper:hover {
            color: #1a3a6a;
        }

        /* close button animation */
        @keyframes close-button {
            0% { transform: scale(0); }
            50% { transform: scale(1.05); }
            75% { transform: scale(0.95); }
            100% { transform: scale(1); }
        }
        #close-helper {
            animation: close-button 0.3s ease-out;
        }
        #close-helper:hover {
            animation: close-button 0.3s ease-out;
        }

        /* close helper animation popout */
        @keyframes close-helper {
            0% { transform: scale(1); }
            50% { transform: scale(0.95); }
            75% { transform: scale(1.05); }
            100% { transform: scale(0); }
        }

    `;
    document.head.appendChild(style);

    // Translations
    const translations = {
        'en': {
            'title': 'KALEIDXSCOPE Gate Helper',
            'selectGates': 'Select Active Gates',
            'saveButton': 'Save Gate Selection',
            'gate': 'Gate',
            'phase': 'Phase',
            'blue': 'Blue',
            'white': 'White',
            'violet': 'Violet',
            'black': 'Black',
            'yellow': 'Yellow',
            'red': 'Red',
            'saveAlert': 'Gate selection saved!',
            'hover': 'Hover over the gate name for tips'
        },
        'zh-tw': {
            'title': 'KALEIDXSCOPE 助手',
            'selectGates': '選擇啟用的門',
            'saveButton': '儲存選擇',
            'gate': '',
            'phase': '階段',
            'blue': '青春區域',
            'white': '天界區域',
            'violet': '黑薔薇區域',
            'black': '大都會區域',
            'yellow': '起始區域',
            'red': '龍區域',
            'saveAlert': '選擇已儲存！',
            'hover': '將鼠標懸停在門名稱上以獲取提示'
        },
        'ja': {
            'title': 'KALEIDXSCOPE ゲートヘルパー',
            'selectGates': '有効なゲートを選択',
            'saveButton': 'ゲートの選択を保存',
            'gate': 'ゲート',
            'phase': 'フェーズ',
            'blue': '青',
            'white': '白',
            'violet': '紫',
            'black': '黒',
            'yellow': '黄',
            'red': '赤',
            'saveAlert': 'ゲートの選択を保存しました！',
            'hover': 'ゲート名にカーソルを合わせてヒントを表示'
        }
        /*
        'ko': {
            'title': '',
            'selectGates': '',
            'saveButton': '',
            'gate': '',
            'phase': '',
            'blue': '',
            'white': '',
            'violet': '',
            'black': '',
            'yellow': '',
            'red': '',
            'saveAlert': '',
            'hover': ''
        }
        */
    };

    // Default language
    let currentLanguage = 'en';

    // Helper functions
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function colorJP(color) {
        const colors = {
            blue: '青の扉', white: '白の扉', violet: '紫の扉',
            black: '黒の扉', yellow: '黄の扉', red: '赤の扉'
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

    function getTip(color) {
        const lang = currentLanguage;
        const tips = {
            'en': {
                blue: 'Play all 29 songs of the Youth Area (青春エリア) up until スカイストリートちほー6 at least once since the course\'s release',
                white: 'Equip the Latent Kingdom player frame (purchaseable in the maimile shop in maimai でらっくす PRiSM if not already unlocked through Stamp Cards in maimai でらっくす BUDDiES PLUS), then in one credit, play only the following songs (songs must not be repeated within the credit)',
                violet: `Set any variant of アウル (Owl) as the tour leader (purchasable in the maimile shop if not already unlocked), then in one credit, only play songs from either season of Kotonoha Project (songs must not be repeated within the credit).\n`,
                black: 'Play all of past KING of Performai tournaments (International division songs not included) at least once since the course\'s release',
                yellow: 'Play one of the following version theme songs when it is selected by the random song selection feature',
                red: 'Play the following 10 songs at least once since the course\'s release'
            },
            'zh-tw': {
                blue: '自挑戰發布以來，至少播放一次青春區域的所有29首歌曲（截至スカイストリートちほー6）',
                white: '裝備「Latent Kingdom」底板，然後在一次遊戲中，僅播放以下歌曲（歌曲在一次遊戲中不得重複）',
                violet: `將任何 アウル 變體設置為隊長（如果尚未解鎖，可在 maimile 商店購買），然後在一次遊戲中，僅播放言ノ葉計畫任一季的歌曲（歌曲在一次遊戲中不得重複）。\n`,
                black: '自挑戰發布以來，至少播放一次過去所有 KING of Performai 比賽（不包括國際組歌曲）',
                yellow: '當隨機歌曲選擇功能選擇時，播放以下版本主題歌曲之一',
                red: '自課程發布以來，至少播放以下10首歌曲'
            },
            'ja': {
                blue: 'スカイストリートちほー6までの青春エリア内の楽曲を29曲全てプレイすること',
                white: 'フレーム「Latent Kingdom」をSETし、1クレ中下記の曲中から被らず3、4曲遊ぶ。',
                violet: `51090942171709440000 となり、この番号をmaimai でらっくすNETのシリアルコードとして入力すると...?`,
                black: '下記の楽曲11曲を全てプレイすること',
                yellow: 'ランダム選曲を使用し、下記の楽曲の中からどれか選ばれたら1回でもプレイすること',
                red: '下記の楽曲10曲を全てプレイすること'
            }
            /*
            'ko': {
                blue: '',
                white: '',
                violet: '',
                black: '',
                yellow: '',
                red: ''
            }
            */
        };
        return tips[lang][color] || tips['en'][color] || '';
    }

    // Function to update text based on selected language
    function updateText(lang) {
        currentLanguage = lang;
        const translated = translations[lang];

        document.querySelector('#kaleidHelper h2').textContent = translated.title;
        document.querySelector('#select-gates-header').textContent = translated.selectGates;
        document.querySelector('#save-gates').textContent = translated.saveButton;
        // Update the tooltip text
        document.querySelectorAll('.tooltip').forEach((tooltip, index) => {
            const color = ['blue', 'white', 'violet', 'black', 'yellow', 'red'][index];
            tooltip.textContent = getTip(color);
        });
        // Update the hover tip
        document.getElementById('hover-tip').textContent = translated.hover;


        ['blue', 'white', 'violet', 'black', 'yellow', 'red'].forEach(color => {
            const checkbox = document.getElementById(`gate-${color}`);
            const label = checkbox.nextElementSibling;
            label.textContent = `${translated.phase} ${getPhase(color)}: ${capitalize(translated[color])} ${translated.gate} (${colorJP(color)})`;
        });
    }


    // Create the helper window
    const helperDiv = document.createElement('div');
    helperDiv.id = 'kaleidHelper';
    helperDiv.innerHTML = `

        <!-- a button to close the helper -->
        <button id="close-helper" style="position: absolute; top: 5px; right: 5px; background: none; border: none; font-size: 16px; cursor: pointer;">&times;</button>
        <h2>KALEIDXSCOPE Gate Helper</h2>

        <label id="launguage-select" for="language-select">Select Language:</label>
        <select id="language-select">
            <option value="en">English</option>
            <option value="zh-tw">繁體中文</option>
            <option value="ja">日本語</option>
            <!-- Maybe korean in the future -->
            <!-- <option value="ko">한국어</option> -->
        </select>
        <p id="hover-tip" >${translations[currentLanguage].hover}</p>
        
        <div class="gate-section">
            <h3 id="select-gates-header">Select Active Gates</h3>
            ${['blue', 'white', 'violet', 'black', 'yellow', 'red'].map(color => `
                <div class="gate-checkbox gate-${color}">
                    <input type="checkbox" id="gate-${color}" name="gate">
                    <label for="gate-${color}">
                        Phase ${getPhase(color)}: ${capitalize(color)} Gate (${colorJP(color)})
                        
                    </label>
                    <img class="gate-icon"
                             src="https://cdn.jsdelivr.net/gh/XingYanTW/KALEIDXSCOPE-Helper@master/icon/UI_KLD_AreaIcon_0${getPhase(color)}.png"
                             alt="${capitalize(color)} Gate Icon">
                    <span class="tooltip">${getTip(color)}</span>
                </div>
            `).join('')}
        </div>
        
        <button class="save-button" id="save-gates">Save Gate Selection</button>
        <hr>
        <!-- github info -->
        <p style="text-align: center; font-size: 12px; color: #666;">Source code: <a href="https://github.com/XingYanTW/kALEIDXSCOPE-Helper/" target="_blank">GitHub</a></p>
    `;
    document.body.appendChild(helperDiv);

    // Load saved gate selections from localStorage
    const savedGates = JSON.parse(localStorage.getItem('activeGates')) || {
        blue: false, white: false, violet: false,
        black: false, yellow: false, red: false
    };

    // Set initial checkbox states
    Object.keys(savedGates).forEach(color => {
        const checkbox = document.getElementById(`gate-${color}`);
        if (checkbox) {
            checkbox.checked = savedGates[color];
        }
    });

    // Language selection
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function () {
        const selectedLanguage = this.value;
        updateText(selectedLanguage);
        localStorage.setItem('selectedLanguage', selectedLanguage);
    });

    // Load saved language
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelect.value = savedLanguage;
    updateText(savedLanguage);

    // check if the helper is in favorite page
    const isFavoritePage = window.location.href.includes('favorite');

    if (!isFavoritePage) {
        // If not in favorite page, disable the save button
        const saveButton = document.getElementById('save-gates');
        saveButton.disabled = true;
        saveButton.style.backgroundColor = '#ccc';
        saveButton.style.cursor = 'not-allowed';
    }

    // Close button functionality
    document.getElementById('close-helper').addEventListener('click', function () {
        const helper = document.getElementById('kaleidHelper');
        if (helper) {
            helper.style.animation = 'close-helper 0.3s ease-out forwards';
            setTimeout(() => {
                helper.remove();
            }, 300);
        }
    });

    // Save button functionality
    document.getElementById('save-gates').addEventListener('click', function () {
        const activeGates = {};
        ['blue', 'white', 'violet', 'black', 'yellow', 'red'].forEach(color => {
            activeGates[color] = document.getElementById(`gate-${color}`).checked;
        });

        localStorage.setItem('activeGates', JSON.stringify(activeGates));
        alert(translations[currentLanguage].saveAlert);

        filterSongsByGates(activeGates);
    });

    // gate-checkbox able to click
    document.querySelectorAll('.gate-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', function (event) {
            const input = this.querySelector('input[type="checkbox"]');
            if (input) {
                input.checked = !input.checked;
            }
        });
    });

    // Function to filter songs based on selected gates
    function filterSongsByGates(activeGates) {

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
            'Blows Up Everything',
            '≠彡"/了→',
            'U&iVERSE -銀河鸞翔-',
            'Rising on the horizon',
            'KHYMΞXΛ',
            'Divide et impera!',
            'Valsqotch',
            'BREaK! BREaK! BREaK!',
            'GIGANTØMAKHIA',
            'ViRTUS',
            '系ぎて'
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
            'ドラゴンエネルギー',
            'Garden Of The Dragon',
            'DRAGONLADY',
            '好きな惣菜発表ドラゴン',
            'KONNANじゃないっ！',
            'Brand-new Japanesque',
            'Outlaw\'s Lullaby',
            '鼓動',
            '神室雪月花',
            'ばかみたい【Taxi Driver Edition】'
        ];

        let foundCount = 0;

        document.querySelectorAll('.favorite_checkbox').forEach(container => {
            const songNameElement = container.querySelector('.favorite_music_name');
            if (!songNameElement) return;

            const songName = songNameElement.textContent.trim();
            const checkbox = container.querySelector('input[type="checkbox"][name="music[]"]');

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
            } else {
                checkbox.checked = false;
            }
        });
    }

    // Initial filter if gates are already selected
    if (Object.values(savedGates).some(gate => gate)) {
        // If the user is on the favorite page, filter the songs
        if (isFavoritePage) {
            filterSongsByGates(savedGates);
        }
    }
})();