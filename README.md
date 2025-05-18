# KALEIDXSCOPE-Helper
[[日本語]](https://github.com/XingYanTW/KALEIDXSCOPE-Helper/blob/main/README_JP.md) [[English]](https://github.com/XingYanTW/KALEIDXSCOPE-Helper/blob/main/README_EN.md)

![UI](https://raw.githubusercontent.com/XingYanTW/KALEIDXSCOPE-Helper/refs/heads/main/docs/UI_ZH_TW.png)


---

### 功能

- 在頁面右上角顯示「KALEIDXSCOPE Gate Helper」面板  
- 支援多語系（English、繁體中文、日本語）  
- 用戶可勾選欲篩選的 Gate（Phase）  
- 點擊「儲存」後，自動勾選該階段對應歌曲列表   

---

### 安裝

1. 將本業面新增為書籤  
2. 將書籤名稱取成想要的名稱
3. 編輯書籤網址為此代碼
```
javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/XingYanTW/KALEIDXSCOPE-Helper@latest/main.js';s.crossOrigin='anonymous';document.body.appendChild(s);})();
```
4. 至net中選擇最愛樂曲介面並點擊書籤

---

### 使用

1. 打開 maimai DX 的「收藏歌曲」頁面  
2. 右上方會自動跳出 Gate Helper 面板  
3. 從下拉選單切換語言  
4. 勾選你想篩選的階段（Gate）  
5. 點擊「Save Gate Selection」／「儲存選擇」  
6. 工具會自動在歌曲列表中勾選符合條件的歌曲  

---

### 開發

```bash
# Clone
git clone https://github.com/yourname/KALEIDXSCOPE-Helper.git
cd KALEIDXSCOPE-Helper
```

- 編輯 `main.js`  
- 修改後於瀏覽器重新載入腳本  

---

### 相關網站

maimai　攻略wiki https://gamerch.com/maimai/871318

SilentBlue https://silentblue.remywiki.com/maimai_DX:KALEIDXSCOPE

---


### 授權

MIT License  
