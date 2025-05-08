window.root.innerHTML = `
  <div style="padding: 20px; font-size: 16px;">
    <p>你可以将小冷的官网安装为一个App喵～ 💜</p>
    <button id="install-btn" style="margin-top:10px;">点击安装 Xiaoleng App</button>
  </div>
`;

document.getElementById('install-btn').addEventListener('click', async () => {
  const promptEvent = window.__deferredInstallPrompt;
  if (promptEvent) {
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    if (result.outcome === 'accepted') {
      window.root.innerHTML += `<p style="color:green;margin-top:10px;">安装成功喵 🎉</p>`;
    } else {
      window.root.innerHTML += `<p style="color:red;margin-top:10px;">你取消了安装喵～</p>`;
    }
    window.__deferredInstallPrompt = null;
  } else {
    alert("浏览器暂时没有准备好安装提示喵～ 请尝试从首页进入后点击安装");
  }
});
