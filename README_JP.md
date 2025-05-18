# KALEIDXSCOPE-Helper
[[繁體中文]](https://github.com/XingYanTW/KALEIDXSCOPE-Helper/blob/main/README.md) [[English]](https://github.com/XingYanTW/KALEIDXSCOPE-Helper/blob/main/README_EN.md)

![UI](https://raw.githubusercontent.com/XingYanTW/KALEIDXSCOPE-Helper/refs/heads/main/docs/UI_JP.png)

### 機能
- ページ右上に **KALEIDXSCOPE Gate Helper** パネルを表示  
- **英語**、**繁體中文**、**日本語** の多言語対応  
- フィルタリングしたい Gate（フェーズ）をユーザーが選択可能  
- **保存** ボタンをクリックすると、選択した Gate に対応する楽曲を自動でチェック  

---

### インストール
1. 本プロジェクトをブラウザのブックマークとして追加  
2. ブックマーク名を任意に設定  
3. ブックマークの URL を以下に編集  
   ```
   javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/XingYanTW/KALEIDXSCOPE-Helper@latest/main.js';s.crossOrigin='anonymous';document.body.appendChild(s);})();
   ```
4. maimai DX の「お気に入り楽曲」ページを開き、ブックマークをクリック  

---

### 使い方
1. maimai DX の「お気に入り楽曲」ページを開く  
2. Gate Helper パネルが自動で表示される  
3. ドロップダウンから言語を切り替える  
4. フィルタリングしたい Gate（フェーズ）にチェックを入れる  
5. **Save Gate Selection**／**儲存選擇** ボタンをクリック  
6. 該当する楽曲が自動的にチェックされる  

---

### 開発
```bash
# リポジトリをクローン
git clone https://github.com/yourname/KALEIDXSCOPE-Helper.git
cd KALEIDXSCOPE-Helper
```
- `main.js` を編集  
- 変更後、ブラウザでスクリプトを再読み込み  

---

### ライセンス
MIT License