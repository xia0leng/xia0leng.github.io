document.getElementById('install-btn').addEventListener('click', async () => {
  if (window.pwaEvent) {
    window.pwaEvent.prompt();
    const result = await window.pwaEvent.userChoice;
    console.log(result.outcome);
    window.pwaEvent = null;
  } else {
    alert("浏览器尚未准备好安装提示喵～");
  }
});
