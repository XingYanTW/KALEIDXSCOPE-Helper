(function () {
    'use strict';
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

        .gate-section {
            margin-bottom: 15px;
        }

        .gate-section h3 {
            margin: 12px 0 8px 0;
            font-size: 15px;
            color: #333;
            padding-left: 5px;
        }

        /* 讓整個 checkbox 區塊左右配置，並讓 tooltip 正確定位 */
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

        /* 改用 class 取代 id，並靠右顯示 */
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

        /* Language select */
        #language-select {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
        }
        #language-select option {
            padding: 5px;
        }
        #language-select:focus {
            outline: none;
            border-color: #3498db;
        }
        #language-select:hover {
            border-color: #3498db;
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
    `;
    document.head.appendChild(style);
})();