window.root.innerHTML = `
  <div style="padding: 20px; font-size: 16px;">
    正在跳转中…<br>
    Redirecting...<br><br>
	若没有自动跳转，请 <a href="https://space.bilibili.com/8975591" target="_blank">点击这里</a><br>
    If it doesn't open automatically, please <a href="https://space.bilibili.com/8975591" target="_blank">click here</a>
  </div>
`;

window.open('https://space.bilibili.com/8975591', '_blank');