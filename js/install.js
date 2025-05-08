// 安装提示模块 install.js
window.root.innerHTML = `
  <div style="padding: 20px; font-size: 16px;">
    <p>你可以将小冷的官网安装为一个App喵～ 💜</p>
    <button id="install-btn" style="margin-top:10px;">点击安装 Xiaoleng App</button>
  </div>
`;

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log("安装提示已准备好");
});

document.getElementById('install-btn').addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log("用户接受安装");
      window.root.innerHTML += `<p style="color:green;margin-top:10px;">安装完成 🎉</p>`;
    } else {
      console.log("用户拒绝安装");
      window.root.innerHTML += `<p style="color:red;margin-top:10px;">你取消了安装喵～</p>`;
    }
    deferredPrompt = null;
  } else {
    alert("浏览器尚未准备好安装提示喵～");
  }
});
