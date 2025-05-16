(function(){
    'use strict';
    window.KX_TRANSLATIONS = {
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
    };
    window.KX_getTip = function(color, lang){
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
        };
        return tips[lang][color] || tips['en'][color] || '';
    };
})();