# KALEIDXSCOPE-Helper
[[日本語]](https://github.com/XingYanTW/KALEIDXSCOPE-Helper/blob/main/README_JP.md) [[繁體中文]](https://github.com/XingYanTW/KALEIDXSCOPE-Helper/blob/main/README.md)

### Features
- Displays a **KALEIDXSCOPE Gate Helper** panel at the top-right of the page  
- Supports **English**, **Traditional Chinese** and **Japanese**  
- Select which Gates (Phases) you want to filter  
- Click **Save** to automatically check all songs matching the selected gates  

### Installation
1. Add this project as a browser bookmark  
2. Name the bookmark as you like  
3. Edit the bookmark URL to:
   ```
   javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/XingYanTW/KALEIDXSCOPE-Helper@latest/main.js';s.crossOrigin='anonymous';document.body.appendChild(s);})();
   ```
4. Open the **Favorite Songs** page on maimai DX and click your bookmark  

### Usage
1. Open maimai DX “Favorite Songs” page  
2. The Gate Helper panel appears automatically  
3. Switch language via the dropdown  
4. Check the Gates (Phases) you wish to filter  
5. Click **Save Gate Selection**  
6. The tool will check the matching songs in the list  

### Development
```bash
# Clone repository
git clone https://github.com/yourname/KALEIDXSCOPE-Helper.git
cd KALEIDXSCOPE-Helper
```
- Edit `main.js`  
- Reload the script in your browser to see changes  

### License
MIT License