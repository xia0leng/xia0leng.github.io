window.root.innerHTML = `
  <div style="padding: 20px; font-size: 16px;">
    <p>可以将小冷官网安装为 App<br>
	   You can install the Xiaoleng website as an App
	</p>
    <button id="install-btn" style="margin-top:10px;">点击安装 Click to Install</button>
  </div>
`;

document.getElementById('install-btn').addEventListener('click', async () => {
  if (window.pwaEvent) {
    window.pwaEvent.prompt();
    const result = await window.pwaEvent.userChoice;
    if (result.outcome === 'accepted') {
      window.root.innerHTML += `<p style="color:green;margin-top:10px;">安装成功 Successfully installed 🎉</p>`;
    } else {
      window.root.innerHTML += `<p style="color:red;margin-top:10px;">已取消安装 Installation cancelled</p>`;
    }
    window.pwaEvent = null;
  } else {
    alert("你使用了不支持的浏览器，或处于隐身模式\n\niOS用户请点击 Safari 底部的“分享”按钮，然后选择“添加到主屏幕”来安装此应用。\n\nYou are using an unsupported browser or are in incognito mode.\n\nFor iOS users, please tap the \"Share\" button at the bottom of Safari, then select \"Add to Home Screen\" to install this app.");
  }
});
