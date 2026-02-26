<a alt="English" href="/README.md" target="_blank" style="text-decoration: none">
  <img src="https://img.shields.io/badge/language-English-blue?style=flat">
</a>
&nbsp;
<a alt="Turkish" href="/README-tr.md" target="_blank" style="text-decoration: none">
  <img src="https://img.shields.io/badge/language-Turkish-red?style=flat">
</a>
&nbsp;
<a alt="Greasy Fork Page" href="https://greasyfork.org/tr/scripts/553315-auto-twitch-drop-claimer" target="_blank" style="text-decoration: none">
  <img src="https://img.shields.io/badge/Greasy_Fork-gray?style=flat&logo=greasyfork&logoColor=black">
</a>

### Auto Twitch Drop Claimer

This userscript automatically claims Twitch Drops for you on the **Twitch Drops Inventory** page.

#### 🧩 How it works
Once you open [https://www.twitch.tv/drops/inventory](https://www.twitch.tv/drops/inventory), the script continuously watches the page for “**Click to claim**” buttons.  
Whenever a new claimable reward appears, it instantly clicks the button for you — no manual action needed.

A background observer (`MutationObserver`) detects changes on the page and triggers the claim automatically.  
To keep your session fresh, the script also reloads the inventory page every **5 minutes** by default.

#### ⚙️ Main features
- Detects and clicks “Click to claim” buttons automatically.  
- Works entirely in the browser — no external servers or APIs.  
- Lightweight, open, and non-obfuscated code.  

#### 🔒 Privacy and safety
- The script does **not** collect or send any user data.  
- It contains **no tracking, ads, or hidden requests**.  
- All operations run locally in your browser on the Twitch website.

#### 💡 Notes
- You can adjust the `refreshMinute` value in the code to change how often the page reloads.
- Works only on Twitch’s Drops Inventory page.

</br>

#### ℹ Example Livestream Watching Setup for AFK Drop Claiming
<img width=auto src="https://github.com/user-attachments/assets/56f83312-dcfa-4a1e-925a-1f1c16ee9766" />
