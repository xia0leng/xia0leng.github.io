window.root.innerHTML = `
  <div style="padding: 20px; font-size: 16px;">
    <p>可以将od-wiki安装为 App
	</p>
    <button id="install-btn" style="margin-top:10px;">点击安装</button>
  </div>
`;

document.getElementById('install-btn').addEventListener('click', async () => {
  if (window.pwaEvent) {
    window.pwaEvent.prompt();
    const result = await window.pwaEvent.userChoice;
    if (result.outcome === 'accepted') {
      window.root.innerHTML += `<p style="color:green;margin-top:10px;">安装成功 🎉</p>`;
    } else {
      window.root.innerHTML += `<p style="color:red;margin-top:10px;">已取消安装</p>`;
    }
    window.pwaEvent = null;
  } else {
    alert("你使用了不支持的浏览器，或处于隐身模式\n\niOS用户请使用Safari，并点击 Safari 底部的“分享”按钮，然后选择“添加到主屏幕”来安装此应用");
  }
});