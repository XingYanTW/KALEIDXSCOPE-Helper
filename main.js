(function () {
    'use strict';

    function initHelper() {
        let currentLang = localStorage.getItem('selectedLanguage') || 'en';
        const tr = window.KX_TRANSLATIONS;
        const getTip = window.KX_getTip;
        const load = src => new Promise(r => {
            const s = document.createElement('script');
            s.src = src; s.onload = r; document.head.appendChild(s);
        });
        Promise.all([
            load('https://cdn.jsdelivr.net/gh/XingYanTW/KALEIDXSCOPE-Helper@master/style.js'),
            load('https://cdn.jsdelivr.net/gh/XingYanTW/KALEIDXSCOPE-Helper@master/translations.js')
        ]).then(initHelper);

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

        // Function to update text based on selected language
        function updateText(lang) {
            currentLanguage = lang;
            const translated = tr[lang];

            document.querySelector('#kaleidHelper h2').textContent = translated.title;
            document.querySelector('#select-gates-header').textContent = translated.selectGates;
            document.querySelector('#save-gates').textContent = translated.saveButton;
            // Update the tooltip text
            document.querySelectorAll('.tooltip').forEach((tooltip, index) => {
                const color = ['blue', 'white', 'violet', 'black', 'yellow', 'red'][index];
                tooltip.textContent = getTip(color, currentLang);
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
        <h2>KALEIDXSCOPE Gate Helper</h2>

        <label for="language-select">Select Language:</label>
        <select id="language-select">
            <option value="en">English</option>
            <option value="zh-tw">繁體中文</option>
            <option value="ja">日本語</option>
        </select>
        <p id="hover-tip" >${tr[currentLanguage].hover}</p>
        
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
                    <span class="tooltip">${getTip(color, currentLang)}</span>
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

        // Save button functionality
        document.getElementById('save-gates').addEventListener('click', function () {
            const activeGates = {};
            ['blue', 'white', 'violet', 'black', 'yellow', 'red'].forEach(color => {
                activeGates[color] = document.getElementById(`gate-${color}`).checked;
            });

            localStorage.setItem('activeGates', JSON.stringify(activeGates));
            alert(tr[currentLanguage].saveAlert);

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
                } else {
                    checkbox.checked = false;
                }
            });
        }

        // Initial filter if gates are already selected
        if (Object.values(savedGates).some(gate => gate)) {
            filterSongsByGates(savedGates);
        }
    }
})();